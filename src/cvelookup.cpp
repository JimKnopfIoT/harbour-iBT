/*
  harbour-ibt — Bluetooth / BLE security & analysis tool for Sailfish OS
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
#include "cvelookup.h"

#include <QUrl>
#include <QUrlQuery>
#include <QNetworkRequest>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QRegularExpression>

CveLookup::CveLookup(QObject *parent)
    : QObject(parent)
    , m_nam(new QNetworkAccessManager(this))
    , m_current(0)
    , m_busy(false)
{
    connect(m_nam, &QNetworkAccessManager::finished, this, &CveLookup::onFinished);
    fetchKev();
}

void CveLookup::fetchKev()
{
    QNetworkRequest req(QUrl("https://www.cisa.gov/sites/default/files/"
                             "feeds/known_exploited_vulnerabilities.json"));
    req.setHeader(QNetworkRequest::UserAgentHeader, "harbour-ibt");
    m_nam->get(req);
}

void CveLookup::search(const QString &terms)
{
    // supersede any running search so the previous query's result can't land
    // in the new device's view
    if (m_current) {
        m_current->abort();
        m_current = 0;
    }
    m_results.clear();
    const QString t = terms.trimmed();
    if (t.isEmpty()) {
        m_busy = false;
        m_status = tr("No device to search for");
        emit changed();
        return;
    }
    // ENISA EUVD search API (JSON, no key, reachable where NVD is Cloudflare-blocked)
    QUrl url("https://euvdservices.enisa.europa.eu/api/search");
    QUrlQuery q;
    q.addQueryItem("text", t);
    q.addQueryItem("size", "40");
    url.setQuery(q);

    QNetworkRequest req(url);
    req.setHeader(QNetworkRequest::UserAgentHeader, "harbour-ibt");
    req.setRawHeader("Accept", "application/json");
    m_busy = true;
    m_status = tr("Searching EUVD for \"%1\"…").arg(t);
    emit changed();
    m_current = m_nam->get(req);
}

void CveLookup::onFinished(QNetworkReply *reply)
{
    reply->deleteLater();
    const bool isKev = reply->url().toString().contains("known_exploited");

    if (isKev) {
        if (reply->error() == QNetworkReply::NoError) {
            const QJsonArray vulns = QJsonDocument::fromJson(reply->readAll())
                    .object().value("vulnerabilities").toArray();
            for (const QJsonValue &v : vulns)
                m_kev.insert(v.toObject().value("cveID").toString());
            // re-flag results that were already shown before KEV finished
            bool changedAny = false;
            for (int i = 0; i < m_results.size(); ++i) {
                QVariantMap m = m_results[i].toMap();
                const bool k = m_kev.contains(m.value("id").toString());
                if (m.value("kev").toBool() != k) {
                    m.insert("kev", k);
                    m_results[i] = m;
                    changedAny = true;
                }
            }
            if (changedAny)
                emit changed();
        }
        return;
    }

    // CVE search reply: discard anything that isn't the latest request, so a
    // slow or aborted previous search can never overwrite the current view.
    if (reply != m_current)
        return;
    m_current = 0;
    m_busy = false;

    if (reply->error() != QNetworkReply::NoError) {
        m_status = tr("Network error: %1").arg(reply->errorString());
        emit changed();
        return;
    }

    const QByteArray data = reply->readAll();
    const QJsonDocument doc = QJsonDocument::fromJson(data);
    if (!doc.isObject()) {
        m_status = tr("Unexpected response from EUVD");
        emit changed();
        return;
    }
    const QJsonObject root = doc.object();
    const QJsonArray items = root.value("items").toArray();

    QRegularExpression cveRe(QStringLiteral("CVE-\\d{4}-\\d{4,7}"));
    QVariantList list;
    for (const QJsonValue &v : items) {
        const QJsonObject it = v.toObject();
        const QString euvdId = it.value("id").toString();
        const QString desc = it.value("description").toString();

        // aliases holds the CVE id (string or array); fall back to the description
        QString aliases;
        const QJsonValue av = it.value("aliases");
        if (av.isString()) aliases = av.toString();
        else if (av.isArray())
            for (const QJsonValue &a : av.toArray()) aliases += a.toString() + QLatin1Char(' ');
        QString cveId = cveRe.match(aliases).captured(0);
        if (cveId.isEmpty()) cveId = cveRe.match(desc).captured(0);

        const double score = it.value("baseScore").toDouble(-1.0);
        const QString severity = score >= 9.0 ? QStringLiteral("CRITICAL")
                               : score >= 7.0 ? QStringLiteral("HIGH")
                               : score >= 4.0 ? QStringLiteral("MEDIUM")
                               : score > 0.0  ? QStringLiteral("LOW")
                                              : QStringLiteral("?");

        const QString id = !cveId.isEmpty() ? cveId : euvdId;
        QVariantMap m;
        m.insert("id", id);
        m.insert("severity", severity);
        m.insert("score", score);
        m.insert("summary", desc);
        m.insert("url", !cveId.isEmpty()
                 ? (QStringLiteral("https://nvd.nist.gov/vuln/detail/") + cveId)
                 : (QStringLiteral("https://euvd.enisa.europa.eu/vulnerability/") + euvdId));
        m.insert("kev", !cveId.isEmpty() && m_kev.contains(cveId));
        m.insert("exploitdb", QStringLiteral("https://www.exploit-db.com/search?cve=") + cveId);
        const double epss = it.value("epss").toDouble(-1.0);
        m.insert("epss", epss);
        list.append(m);
    }

    m_results = list;
    const int total = root.value("total").toInt(list.size());
    m_status = list.isEmpty()
            ? tr("No CVEs found in EUVD")
            : tr("%1 CVE(s) — showing %2").arg(total).arg(list.size());
    emit changed();
}
