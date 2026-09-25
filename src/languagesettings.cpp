#include "languagesettings.h"

#include <QDir>
#include <QFileInfo>
#include <QGuiApplication>
#include <QSettings>
#include <QStandardPaths>
#include <QTranslator>
#include <QVariantMap>

namespace {

const QString kKey = QStringLiteral("ui/language");

// Explicit INI file under AppConfigLocation (~/.config/harbour-ibt). The
// org/app-name QSettings constructor writes with UserScope one level above that,
// where Sailjail denies the write — the setting then never persists. An explicit
// path + IniFormat lands inside the sandbox. QSettings is non-copyable, so the
// path is returned and the object constructed at each call site.
QString settingsPath()
{
    return QStandardPaths::writableLocation(QStandardPaths::AppConfigLocation)
           + QStringLiteral("/settings.conf");
}

QString storedCode()
{
    QSettings settings(settingsPath(), QSettings::IniFormat);
    return settings.value(kKey).toString();
}

// Endonyms: a language is named in itself, so the list stays readable to
// somebody who cannot read the current UI language.
const char *const kLanguages[][2] = {
    { "ar", "العربية" },     { "bg", "Български" },  { "cs", "Čeština" },
    { "da", "Dansk" },
    { "de", "Deutsch" },     { "el", "Ελληνικά" },   { "en", "English" },
    { "es", "Español" },     { "et", "Eesti" },      { "fa", "فارسی" },
    { "fi", "Suomi" },
    { "fr", "Français" },    { "ga", "Gaeilge" },    { "hr", "Hrvatski" },
    { "hi", "हिन्दी" },        { "hu", "Magyar" },     { "is", "Íslenska" },
    { "it", "Italiano" },    { "ja", "日本語" },
    { "lt", "Lietuvių" },    { "lv", "Latviešu" },   { "mt", "Malti" },
    { "nb", "Norsk bokmål" }, { "nl", "Nederlands" }, { "pl", "Polski" },
    { "pt", "Português" },   { "ro", "Română" },     { "ru", "Русский" },
    { "sk", "Slovenčina" },  { "sl", "Slovenščina" }, { "sv", "Svenska" },
    { "zh_CN", "简体中文" },
};

} // namespace

LanguageSettings::LanguageSettings(QObject *parent)
    : QObject(parent)
    , m_code(storedCode())
{
}

void LanguageSettings::setCode(const QString &code)
{
    if (code == m_code) {
        return;
    }
    m_code = code;

    const QString path = settingsPath();
    QDir().mkpath(QFileInfo(path).absolutePath());
    QSettings settings(path, QSettings::IniFormat);
    settings.setValue(kKey, code);
    settings.sync();
    if (settings.status() != QSettings::NoError) {
        qWarning("iBT: language setting could not be stored (%d)",
                 static_cast<int>(settings.status()));
    }

    // Not applied here: Qt 5.6 cannot retranslate a loaded QML tree, so the choice
    // takes effect at the next start. The page says so.
    emit changed();
}

QVariantList LanguageSettings::available() const
{
    QVariantList list;
    QVariantMap automatic;
    automatic.insert(QStringLiteral("code"), QString());
    automatic.insert(QStringLiteral("name"), tr("System language"));
    list.append(automatic);

    for (const auto &entry : kLanguages) {
        QVariantMap language;
        language.insert(QStringLiteral("code"), QString::fromLatin1(entry[0]));
        language.insert(QStringLiteral("name"), QString::fromUtf8(entry[1]));
        list.append(language);
    }
    return list;
}

void LanguageSettings::applyTo(QGuiApplication *app)
{
    const QString code = storedCode();
    if (code.isEmpty()) {
        return;
    }

    QTranslator *translator = new QTranslator(app);
    const QString name = QStringLiteral("harbour-ibt-") + code;
    if (translator->load(name, QStringLiteral("/usr/share/harbour-ibt/translations"))) {
        app->installTranslator(translator);
    } else {
        qWarning("iBT: no catalogue for the chosen language; following the device");
        delete translator;
    }
}
