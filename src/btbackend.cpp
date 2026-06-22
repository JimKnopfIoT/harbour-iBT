/*
  harbour-ibt — Bluetooth / BLE security & analysis tool for Sailfish OS
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
#include "btbackend.h"

#include <QFile>
#include <QDir>
#include <QDateTime>
#include <QTextStream>
#include <QSet>
#include <QDBusMessage>
#include <QDBusArgument>
#include <QDBusVariant>
#include <QDBusObjectPath>
#include <QDBusSignature>
#include <algorithm>
#include <cmath>

#include <sailfishapp.h>

// ---------------------------------------------------------------------------
//  D-Bus demarshalling — turn the deeply nested org.bluez reply
//  (a{oa{sa{sv}}}, with a{qv} ManufacturerData and "ay" byte arrays inside)
//  into plain QVariant/QVariantMap/QByteArray we can walk in C++.
// ---------------------------------------------------------------------------
static QVariant demarshall(const QDBusArgument &arg);

static QVariant unwrap(const QVariant &v)
{
    if (v.canConvert<QDBusArgument>())
        return demarshall(v.value<QDBusArgument>());
    if (v.canConvert<QDBusObjectPath>())
        return v.value<QDBusObjectPath>().path();
    if (v.canConvert<QDBusSignature>())
        return v.value<QDBusSignature>().signature();
    return v;
}

static QVariant demarshall(const QDBusArgument &arg)
{
    switch (arg.currentType()) {
    case QDBusArgument::BasicType:
        return unwrap(arg.asVariant());
    case QDBusArgument::VariantType: {
        QDBusVariant dv;
        arg >> dv;
        return unwrap(dv.variant());
    }
    case QDBusArgument::ArrayType: {
        if (arg.currentSignature() == QLatin1String("ay")) {
            QByteArray ba;
            arg >> ba;
            return ba;
        }
        QVariantList list;
        arg.beginArray();
        while (!arg.atEnd())
            list << demarshall(arg);
        arg.endArray();
        return list;
    }
    case QDBusArgument::MapType: {
        QVariantMap map;
        arg.beginMap();
        while (!arg.atEnd()) {
            arg.beginMapEntry();
            const QVariant key = demarshall(arg);
            const QVariant val = demarshall(arg);
            arg.endMapEntry();
            map.insert(key.toString(), val);
        }
        arg.endMap();
        return map;
    }
    case QDBusArgument::StructureType: {
        QVariantList list;
        arg.beginStructure();
        while (!arg.atEnd())
            list << demarshall(arg);
        arg.endStructure();
        return list;
    }
    default:
        return QVariant();
    }
}

// ---------------------------------------------------------------------------
//  Small lookup tables (open protocol facts, not copied GPL code).
// ---------------------------------------------------------------------------
static QString companyName(quint16 id)
{
    switch (id) {
    case 0x004C: return QStringLiteral("Apple");
    case 0x0075: return QStringLiteral("Samsung");
    case 0x00C7: return QStringLiteral("Tile");
    case 0x00E0: return QStringLiteral("Google");
    case 0x0006: return QStringLiteral("Microsoft");
    case 0x0059: return QStringLiteral("Nordic Semiconductor");
    case 0x0157: return QStringLiteral("Huami / Amazfit");
    case 0x0001: return QStringLiteral("Ericsson");
    case 0x000F: return QStringLiteral("Broadcom");
    case 0x0117: return QStringLiteral("Garmin");
    case 0x0822: return QStringLiteral("Fitbit");
    case 0x004F: return QStringLiteral("APT/Logitech");
    case 0x0131: return QStringLiteral("Cypress");
    case 0x0500: return QStringLiteral("Espressif");
    case 0x0171: return QStringLiteral("Amazon");
    case 0x0087: return QStringLiteral("Garmin Intl");
    case 0x0030: return QStringLiteral("ST Micro");
    case 0x0118: return QStringLiteral("Texas Instruments");
    default:     return QString();
    }
}

// 16-bit SIG service UUID -> human label (the common ones for risk/identification)
static QString uuid16Name(const QString &uuid)
{
    // uuid is the full 128-bit "0000XXXX-0000-1000-8000-00805f9b34fb"
    if (uuid.length() < 8) return QString();
    const QString s = uuid.mid(4, 4).toLower();
    static QHash<QString, QString> m;
    if (m.isEmpty()) {
        m.insert("1800", "Generic Access");
        m.insert("1801", "Generic Attribute");
        m.insert("180a", "Device Information");
        m.insert("180f", "Battery Service");
        m.insert("180d", "Heart Rate");
        m.insert("1809", "Health Thermometer");
        m.insert("1810", "Blood Pressure");
        m.insert("1812", "HID (Human Interface)");
        m.insert("1816", "Cycling Speed/Cadence");
        m.insert("1818", "Cycling Power");
        m.insert("110a", "Audio Source (A2DP)");
        m.insert("110b", "Audio Sink (A2DP)");
        m.insert("111e", "Handsfree");
        m.insert("1108", "Headset");
        m.insert("112f", "Phonebook Access");
        m.insert("1124", "HID (BR/EDR)");
        m.insert("feaa", "Eddystone");
        m.insert("fd5a", "Samsung SmartTag");
        m.insert("feed", "Tile");
        m.insert("fe59", "Nordic DFU");
        m.insert("fd44", "Apple (Find My)");
        m.insert("fdaa", "Xiaomi");
        m.insert("181c", "User Data");
        m.insert("1822", "Pulse Oximeter");
    }
    return m.value(s);
}

// ---- Class-of-Device decoding (BT BR/EDR) ----
static QString codMajorName(uint major)
{
    switch (major) {
    case 0:  return QStringLiteral("Sonstiges");
    case 1:  return QStringLiteral("Computer");
    case 2:  return QStringLiteral("Telefon");
    case 3:  return QStringLiteral("Netzwerk-AP");
    case 4:  return QStringLiteral("Audio/Video");
    case 5:  return QStringLiteral("Peripherie");
    case 6:  return QStringLiteral("Imaging");
    case 7:  return QStringLiteral("Wearable");
    case 8:  return QStringLiteral("Spielzeug");
    case 9:  return QStringLiteral("Gesundheit");
    case 31: return QString();   // uncategorized
    default: return QString();
    }
}

static QString codMinorName(uint major, uint minor)
{
    if (major == 1) {            // Computer
        switch (minor) {
        case 1: return QStringLiteral("Desktop");
        case 2: return QStringLiteral("Server");
        case 3: return QStringLiteral("Laptop");
        case 4: return QStringLiteral("Handheld/PDA");
        case 5: return QStringLiteral("Palm");
        case 6: return QStringLiteral("Wearable-Computer");
        case 7: return QStringLiteral("Tablet");
        }
    } else if (major == 2) {     // Phone
        switch (minor) {
        case 1: return QStringLiteral("Mobiltelefon");
        case 2: return QStringLiteral("Schnurlostelefon");
        case 3: return QStringLiteral("Smartphone");
        case 4: return QStringLiteral("Modem/Gateway");
        case 5: return QStringLiteral("ISDN");
        }
    } else if (major == 4) {     // Audio/Video
        switch (minor) {
        case 1:  return QStringLiteral("Headset");
        case 2:  return QStringLiteral("Freisprecher");
        case 4:  return QStringLiteral("Mikrofon");
        case 5:  return QStringLiteral("Lautsprecher");
        case 6:  return QStringLiteral("Kopfhörer");
        case 7:  return QStringLiteral("Tragbares Audio");
        case 8:  return QStringLiteral("Auto-Audio");
        case 9:  return QStringLiteral("Set-Top-Box");
        case 10: return QStringLiteral("HiFi");
        case 11: return QStringLiteral("Videorekorder");
        case 12: return QStringLiteral("Videokamera");
        case 13: return QStringLiteral("Camcorder");
        case 14: return QStringLiteral("Video-Monitor");
        case 18: return QStringLiteral("Spielekonsole");
        }
    } else if (major == 5) {     // Peripheral (keyboard/pointing in bits)
        QStringList p;
        if (minor & 0x10) p << QStringLiteral("Tastatur");
        if (minor & 0x20) p << QStringLiteral("Zeigegerät");
        const uint t = minor & 0x0F;
        if (t == 1) p << QStringLiteral("Joystick");
        else if (t == 2) p << QStringLiteral("Gamepad");
        else if (t == 3) p << QStringLiteral("Fernbedienung");
        else if (t == 5) p << QStringLiteral("Digitizer");
        if (!p.isEmpty()) return p.join("/");
    } else if (major == 7) {     // Wearable
        switch (minor) {
        case 1: return QStringLiteral("Armbanduhr");
        case 2: return QStringLiteral("Pager");
        case 3: return QStringLiteral("Jacke");
        case 4: return QStringLiteral("Helm");
        case 5: return QStringLiteral("Brille");
        }
    }
    return QString();
}

// ---- BLE GATT Appearance category (value >> 6) ----
static QString appearanceName(uint app)
{
    switch (app >> 6) {
    case 0:  return QString();
    case 1:  return QStringLiteral("Telefon");
    case 2:  return QStringLiteral("Computer");
    case 3:  return QStringLiteral("Uhr");
    case 4:  return QStringLiteral("Wanduhr");
    case 5:  return QStringLiteral("Display");
    case 6:  return QStringLiteral("Fernbedienung");
    case 7:  return QStringLiteral("Brille");
    case 8:  return QStringLiteral("Tag");
    case 9:  return QStringLiteral("Schlüsselanhänger");
    case 10: return QStringLiteral("Media-Player");
    case 11: return QStringLiteral("Barcode-Scanner");
    case 12: return QStringLiteral("Thermometer");
    case 13: return QStringLiteral("Herzfrequenz-Sensor");
    case 14: return QStringLiteral("Blutdruck");
    case 15: return QStringLiteral("HID (Eingabegerät)");
    case 16: return QStringLiteral("Glukose-Messgerät");
    case 17: return QStringLiteral("Lauf-/Schrittsensor");
    case 18: return QStringLiteral("Fahrrad-Sensor");
    case 49: return QStringLiteral("Pulsoximeter");
    case 51: return QStringLiteral("Gewichtswaage");
    case 81: return QStringLiteral("Ohrhörer");
    case 82: return QStringLiteral("Hörgerät");
    default: return QString();
    }
}

// BlueZ freedesktop icon name -> rough category (fallback when CoD/appearance empty)
static QString iconCategory(const QString &icon)
{
    if (icon.isEmpty()) return QString();
    if (icon.startsWith("audio")) return QStringLiteral("Audio");
    if (icon.contains("phone"))   return QStringLiteral("Telefon");
    if (icon.contains("computer"))return QStringLiteral("Computer");
    if (icon.contains("input"))   return QStringLiteral("Eingabegerät");
    if (icon.contains("watch") || icon.contains("wearable")) return QStringLiteral("Wearable");
    if (icon.contains("camera"))  return QStringLiteral("Kamera");
    if (icon.contains("printer")) return QStringLiteral("Drucker");
    return QString();
}

// ---------------------------------------------------------------------------
BtBackend::BtBackend(QObject *parent)
    : QObject(parent)
    , m_bus(QDBusConnection::systemBus())
{
    m_timer.setInterval(3500);   // gentle refresh so the list doesn't churn/flicker
    connect(&m_timer, &QTimer::timeout, this, &BtBackend::poll);
    // one-shot at construction so the list/adapter state is populated immediately
    refresh();
}

// ---------------------------------------------------------------------------
//  OUI vendor lookup
// ---------------------------------------------------------------------------
void BtBackend::ensureOui()
{
    if (m_ouiLoaded)
        return;
    m_ouiLoaded = true;

    const QString path = SailfishApp::pathTo(QStringLiteral("oui.tsv")).toLocalFile();
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly | QIODevice::Text))
        return;

    QSet<int> lengths;
    QTextStream in(&f);
    while (!in.atEnd()) {
        const QString line = in.readLine();
        if (line.isEmpty())
            continue;
        const int t1 = line.indexOf('\t');
        if (t1 <= 0)
            continue;
        const int t2 = line.indexOf('\t', t1 + 1);
        if (t2 <= t1)
            continue;
        const QString prefix = line.left(t1);
        const QString name = line.mid(t2 + 1);
        m_oui.insert(prefix, name);
        lengths.insert(prefix.length());
    }
    f.close();

    m_ouiLengths = lengths.values();
    std::sort(m_ouiLengths.begin(), m_ouiLengths.end(), std::greater<int>());
}

static QString normalizeHex(const QString &mac)
{
    QString h;
    h.reserve(12);
    for (QChar c : mac)
        if (QStringLiteral("0123456789abcdefABCDEF").contains(c))
            h.append(c.toUpper());
    return h;
}

bool BtBackend::isRandomAddress(const QString &mac) const
{
    const QString h = normalizeHex(mac);
    if (h.length() < 2)
        return false;
    bool ok = false;
    const int firstOctet = h.left(2).toInt(&ok, 16);
    return ok && (firstOctet & 0x02);   // locally-administered / random
}

QString BtBackend::vendor(const QString &mac)
{
    ensureOui();
    const QString h = normalizeHex(mac);
    if (h.length() < 6)
        return QString();
    if (isRandomAddress(mac))
        return QString();               // randomized -> no real vendor
    for (int len : m_ouiLengths) {
        if (h.length() < len)
            continue;
        auto it = m_oui.constFind(h.left(len));
        if (it != m_oui.constEnd()) {
            QString name = it.value();
            if (name.startsWith(QStringLiteral("AVM"), Qt::CaseInsensitive))
                return QStringLiteral("FRITZ!(AVM)");
            return name;
        }
    }
    return QString();
}

// RSSI -> distance. BLE advertisers report TxPower (RSSI at 1 m) sometimes; if
// present we use it, otherwise a typical -59 dBm @ 1 m. n = path-loss exponent.
double BtBackend::distanceMeters(int rssi, int txPower) const
{
    (void)txPower;   // advertised TxPower is the radiated power level, NOT the RSSI
                     // at 1 m → using it as the reference blows distances up. Ignore.
    if (rssi >= 0 || rssi < -120)
        return -1.0;
    const double ref = -76.0;   // calibrated so −67 dBm ≈ 0.5 m (tight indoor scale)
    const double n = 3.0;       // indoor path-loss exponent (walls/bodies attenuate)
    return std::pow(10.0, (ref - (double)rssi) / (10.0 * n));
}

// ---------------------------------------------------------------------------
//  Discovery control
// ---------------------------------------------------------------------------
void BtBackend::callAdapter(const QString &method, const QVariantList &args)
{
    if (m_adapterPath.isEmpty())
        return;
    QDBusMessage m = QDBusMessage::createMethodCall(
        QStringLiteral("org.bluez"), m_adapterPath,
        QStringLiteral("org.bluez.Adapter1"), method);
    if (!args.isEmpty())
        m.setArguments(args);
    m_bus.call(m, QDBus::NoBlock);
}

void BtBackend::setAdapterPowered(bool on)
{
    if (m_adapterPath.isEmpty())
        return;
    QDBusMessage m = QDBusMessage::createMethodCall(
        QStringLiteral("org.bluez"), m_adapterPath,
        QStringLiteral("org.freedesktop.DBus.Properties"), QStringLiteral("Set"));
    m << QStringLiteral("org.bluez.Adapter1") << QStringLiteral("Powered")
      << QVariant::fromValue(QDBusVariant(on));
    m_bus.call(m, QDBus::NoBlock);
}

void BtBackend::setDiscoveryFilter()
{
    if (m_adapterPath.isEmpty())
        return;
    QVariantMap filter;
    filter.insert(QStringLiteral("Transport"), QStringLiteral("auto")); // LE + classic
    filter.insert(QStringLiteral("DuplicateData"), true);               // refresh RSSI
    QDBusMessage m = QDBusMessage::createMethodCall(
        QStringLiteral("org.bluez"), m_adapterPath,
        QStringLiteral("org.bluez.Adapter1"), QStringLiteral("SetDiscoveryFilter"));
    m << filter;
    m_bus.call(m, QDBus::NoBlock);
}

void BtBackend::start()
{
    refresh();                 // make sure we know the adapter
    if (m_adapterPath.isEmpty())
        return;
    if (!m_powered)
        setAdapterPowered(true);
    setDiscoveryFilter();
    callAdapter(QStringLiteral("StartDiscovery"));
    m_scanStartMs = QDateTime::currentMSecsSinceEpoch();   // begin warm-up window
    if (!m_discovering) {
        m_discovering = true;
        emit discoveringChanged();
    }
    if (!m_timer.isActive())
        m_timer.start();
    poll();
}

void BtBackend::stop()
{
    if (m_timer.isActive())
        m_timer.stop();
    if (!m_adapterPath.isEmpty())
        callAdapter(QStringLiteral("StopDiscovery"));
    if (m_discovering) {
        m_discovering = false;
        emit discoveringChanged();
    }
}

void BtBackend::clear()
{
    m_devices.clear();
    emit updated();
    refresh();
}

bool BtBackend::removeDevice(const QString &path)
{
    if (m_adapterPath.isEmpty() || path.isEmpty())
        return false;
    QDBusMessage m = QDBusMessage::createMethodCall(
        QStringLiteral("org.bluez"), m_adapterPath,
        QStringLiteral("org.bluez.Adapter1"), QStringLiteral("RemoveDevice"));
    m << QVariant::fromValue(QDBusObjectPath(path));
    QDBusMessage r = m_bus.call(m);
    return r.type() == QDBusMessage::ReplyMessage;
}

void BtBackend::poll()
{
    refresh();
}

// ---------------------------------------------------------------------------
//  Model rebuild from ObjectManager.GetManagedObjects
// ---------------------------------------------------------------------------
void BtBackend::findAdapter(const QVariantMap &objects)
{
    const QString oldPath = m_adapterPath;
    const bool oldPowered = m_powered;
    QString found;
    bool poweredNow = false;   // false if no adapter at all (BT stack gone)
    for (auto it = objects.constBegin(); it != objects.constEnd(); ++it) {
        const QVariantMap ifaces = it.value().toMap();
        if (ifaces.contains(QStringLiteral("org.bluez.Adapter1"))) {
            found = it.key();
            const QVariantMap a = ifaces.value(QStringLiteral("org.bluez.Adapter1")).toMap();
            m_adapterName = a.value(QStringLiteral("Alias"),
                              a.value(QStringLiteral("Name"))).toString();
            m_adapterAddress = a.value(QStringLiteral("Address")).toString();
            poweredNow = a.value(QStringLiteral("Powered")).toBool();
            break;
        }
    }
    m_powered = poweredNow;
    if (found != oldPath) {
        m_adapterPath = found;
        emit availableChanged();
    }
    if (m_powered != oldPowered)
        emit poweredChanged();
}

QVariantMap BtBackend::buildDevice(const QString &path, const QVariantMap &p)
{
    QVariantMap d;
    const QString addr = p.value(QStringLiteral("Address")).toString();
    d.insert("path", path);
    d.insert("address", addr);
    d.insert("addressType", p.value(QStringLiteral("AddressType")).toString());
    const QString name = p.value(QStringLiteral("Name")).toString();
    const QString alias = p.value(QStringLiteral("Alias")).toString();
    d.insert("name", name);
    d.insert("alias", alias);
    d.insert("displayName", !name.isEmpty() ? name
                          : !alias.isEmpty() ? alias
                          : QStringLiteral("(unbenannt)"));
    d.insert("icon", p.value(QStringLiteral("Icon")).toString());
    const uint cod = p.value(QStringLiteral("Class")).toUInt();
    const uint app = p.value(QStringLiteral("Appearance")).toUInt();
    d.insert("cls", cod);
    d.insert("appearance", app);
    // decode device type from Class-of-Device + BLE Appearance
    const uint codMajor = (cod >> 8) & 0x1F;
    const uint codMinor = (cod >> 2) & 0x3F;
    const QString majName = codMajorName(codMajor);
    const QString minName = codMinorName(codMajor, codMinor);
    const QString appName = appearanceName(app);
    d.insert("codMajor", majName);
    d.insert("codMinor", minName);
    d.insert("appearanceName", appName);
    QString category = !minName.isEmpty() ? minName
                     : !majName.isEmpty() ? majName
                     : !appName.isEmpty() ? appName
                     : iconCategory(p.value(QStringLiteral("Icon")).toString());
    d.insert("category", category);
    d.insert("paired", p.value(QStringLiteral("Paired")).toBool());
    d.insert("bonded", p.value(QStringLiteral("Bonded")).toBool());
    d.insert("trusted", p.value(QStringLiteral("Trusted")).toBool());
    d.insert("blocked", p.value(QStringLiteral("Blocked")).toBool());
    d.insert("connected", p.value(QStringLiteral("Connected")).toBool());
    d.insert("legacyPairing", p.value(QStringLiteral("LegacyPairing")).toBool());
    d.insert("servicesResolved", p.value(QStringLiteral("ServicesResolved")).toBool());

    const bool hasRssi = p.contains(QStringLiteral("RSSI"));
    const int rssi = p.value(QStringLiteral("RSSI")).toInt();
    const bool hasTx = p.contains(QStringLiteral("TxPower"));
    const int tx = p.value(QStringLiteral("TxPower")).toInt();
    d.insert("hasRssi", hasRssi);
    d.insert("rssi", hasRssi ? rssi : 0);
    d.insert("hasTxPower", hasTx);
    d.insert("txPower", hasTx ? tx : 0);
    d.insert("distance", hasRssi ? distanceMeters(rssi, hasTx ? tx : 0) : -1.0);

    // signal % for bars: -100..-40 dBm -> 0..100
    int pct = 0;
    if (hasRssi) pct = qBound(0, (int)std::round(2 * (rssi + 100)), 100);
    d.insert("signalPct", pct);

    // --- in-session sighting history (stalking detection + RSSI sparkline) ---
    const qint64 now = QDateTime::currentMSecsSinceEpoch();
    Sighting &sg = m_sight[addr];
    if (sg.first == 0) sg.first = now;
    sg.last = now;
    sg.count++;
    if (hasRssi) {
        sg.rssi.append(rssi);
        while (sg.rssi.size() > 60) sg.rssi.removeFirst();
    }
    d.insert("seenCount", sg.count);
    d.insert("seenSeconds", (int)((now - sg.first) / 1000));
    QVariantList hist;
    for (int v : sg.rssi) hist << v;
    d.insert("rssiHistory", hist);

    // vendor + random/static MAC (privacy)
    const bool rnd = (d.value("addressType").toString() == "random")
                     || isRandomAddress(addr);
    d.insert("randomAddr", rnd);
    d.insert("vendor", vendor(addr));

    // device kind
    const uint cls = d.value("cls").toUInt();
    QString kind;
    if (cls != 0 && hasRssi) kind = "dual";
    else if (cls != 0)       kind = "classic";
    else                     kind = "le";
    d.insert("kind", kind);

    // UUIDs (+ friendly names)
    QStringList uuids, uuidNames;
    const QVariantList rawUuids = p.value(QStringLiteral("UUIDs")).toList();
    for (const QVariant &u : rawUuids) {
        const QString us = u.toString();
        uuids << us;
        const QString fn = uuid16Name(us);
        uuidNames << (fn.isEmpty() ? us : (fn + "  (" + us.mid(4, 4) + ")"));
    }
    d.insert("uuids", uuids);
    d.insert("uuidNames", uuidNames);

    // Manufacturer data: a{qv} -> list of {company, companyName, data(hex)}
    QVariantList mfgList;
    const QVariant mfgVar = p.value(QStringLiteral("ManufacturerData"));
    if (mfgVar.canConvert<QVariantMap>()) {
        const QVariantMap mm = mfgVar.toMap();
        for (auto it = mm.constBegin(); it != mm.constEnd(); ++it) {
            bool ok = false;
            const quint16 id = (quint16)it.key().toUInt(&ok, 10); // key stringified from uint
            const QByteArray data = it.value().toByteArray();
            QVariantMap e;
            e.insert("company", QStringLiteral("0x%1")
                     .arg(id, 4, 16, QLatin1Char('0')).toUpper().replace("0X", "0x"));
            e.insert("companyId", id);
            e.insert("companyName", companyName(id));
            e.insert("data", QString::fromLatin1(data.toHex()));
            mfgList << e;
        }
    }
    d.insert("manufacturerData", mfgList);

    // OUI vendor is empty for random/private MACs (most BLE devices). Fall back to
    // the advertised Manufacturer-Data company ID, which identifies the vendor even
    // behind a randomized address (e.g. Apple 0x004C, Samsung 0x0075).
    if (d.value("vendor").toString().isEmpty()) {
        for (const QVariant &mv : mfgList) {
            const QString cn = mv.toMap().value("companyName").toString();
            if (!cn.isEmpty()) {
                d.insert("vendor", cn);
                d.insert("vendorFromAdv", true);
                break;
            }
        }
    }

    // Service data: a{sv} uuid -> bytes
    QVariantList svcList;
    const QVariant svcVar = p.value(QStringLiteral("ServiceData"));
    if (svcVar.canConvert<QVariantMap>()) {
        const QVariantMap sm = svcVar.toMap();
        for (auto it = sm.constBegin(); it != sm.constEnd(); ++it) {
            QVariantMap e;
            e.insert("uuid", it.key());
            const QString fn = uuid16Name(it.key());
            e.insert("uuidName", fn);
            e.insert("data", QString::fromLatin1(it.value().toByteArray().toHex()));
            svcList << e;
        }
    }
    d.insert("serviceData", svcList);

    enrichBeaconAndTracker(d, mfgList, svcList);

    // Stalking heuristic: a TRACKER that keeps showing up over time (≥3 min and
    // several sightings) while we move around is "following you". (Stronger with
    // GPS/locations later; in-session, duration+persistence is the signal.)
    // A tracker that advertises "with owner" (e.g. a registered AirTag next to its
    // owner) is explicitly excluded — that is the normal, benign case, not stalking.
    const bool warm = inWarmup(now);   // hold classification right after scan start
    const bool following = d.value("isTracker").toBool()
                           && !d.value("trackerOwnerPresent").toBool()
                           && (now - sg.first) > 180000 && sg.count >= 4;
    d.insert("following", following && !warm);

    // Friendly name for the radar/list when the device has no advertised name but
    // we can identify it "halfway confidently" (tracker family, vendor + category…).
    QString friendly = !name.isEmpty() ? name : alias;
    bool confident = !friendly.isEmpty();
    if (friendly.isEmpty()) {
        const QString ven = d.value("vendor").toString();
        const QString cat = d.value("category").toString();
        if (d.value("isTracker").toBool()) { friendly = d.value("tracker").toString(); confident = true; }
        else if (!ven.isEmpty() && !cat.isEmpty()) { friendly = ven + " " + cat; confident = true; }
        else if (!cat.isEmpty()) { friendly = cat; confident = true; }
        else if (!ven.isEmpty()) { friendly = ven; confident = true; }
        else if (d.value("isBeacon").toBool()) { friendly = QStringLiteral("Beacon"); confident = true; }
        else { friendly = QStringLiteral("(unbenannt)"); confident = false; }
    }
    d.insert("friendly", friendly);
    d.insert("friendlyConfident", confident);

    enrichThreat(d);
    enrichAudioVuln(d);
    if (warm) {
        // during the warm-up window, suppress all alarm-level verdicts so a crowded
        // place doesn't flood the user with warnings before the picture has settled
        d.insert("isThreat", false);
        d.insert("threat", QString());
        d.insert("threatColor", QString());
        d.insert("audioVuln", false);
    }
    enrichRisk(d);
    return d;
}

// ---------------------------------------------------------------------------
//  Beacon + tracker decoding (open byte signatures; no copied code)
// ---------------------------------------------------------------------------
void BtBackend::enrichBeaconAndTracker(QVariantMap &dev,
                                       const QVariantList &mfgList,
                                       const QVariantList &svcList)
{
    QString beacon;          // human-readable decode
    QString tracker;         // tracker family if detected
    bool ownerPresent = false; // tracker advertises "with owner" (e.g. registered
                               // AirTag) → benign, NOT an unwanted-tracking signal

    // --- Manufacturer-data beacons / trackers ---
    for (const QVariant &v : mfgList) {
        const QVariantMap e = v.toMap();
        const quint16 id = (quint16)e.value("companyId").toUInt();
        const QByteArray data = QByteArray::fromHex(e.value("data").toString().toLatin1());

        if (id == 0x004C && data.size() >= 2) {       // Apple
            const quint8 t = (quint8)data.at(0);
            if (t == 0x02 && data.size() >= 23) {     // iBeacon: 02 15 <uuid16> major minor tx
                const QByteArray u = data.mid(2, 16).toHex();
                const quint16 major = ((quint8)data.at(18) << 8) | (quint8)data.at(19);
                const quint16 minor = ((quint8)data.at(20) << 8) | (quint8)data.at(21);
                const qint8 tx = (qint8)data.at(22);
                beacon = QStringLiteral("iBeacon\nUUID %1\nMajor %2  Minor %3  TxPower %4 dBm")
                         .arg(QString::fromLatin1(u)).arg(major).arg(minor).arg(tx);
            } else if (t == 0x12) {
                tracker = QStringLiteral("Apple Find My / AirTag (registriert)");
                ownerPresent = true;   // near its owner → benign, not stalking
            } else if (t == 0x07) {
                tracker = QStringLiteral("Apple Find My / AirTag (getrennt/unregistriert)");
            } else if (t == 0x10) {
                beacon = QStringLiteral("Apple Nearby (0x10)");
            }
        } else if (id == 0x0075) {                    // Samsung
            tracker = QStringLiteral("Samsung Galaxy SmartTag");
        } else if (id == 0x00C7) {                    // Tile
            tracker = QStringLiteral("Tile");
        } else if (data.size() >= 4 &&
                   (quint8)data.at(0) == 0xBE && (quint8)data.at(1) == 0xAC) {
            beacon = QStringLiteral("AltBeacon");      // BEAC prefix
        }
    }

    // --- Service-data beacons / trackers ---
    for (const QVariant &v : svcList) {
        const QVariantMap e = v.toMap();
        const QString uuid = e.value("uuid").toString().toLower();
        const QByteArray data = QByteArray::fromHex(e.value("data").toString().toLatin1());
        const QString u16 = uuid.length() >= 8 ? uuid.mid(4, 4) : QString();

        if (u16 == "feaa" && data.size() >= 1) {       // Eddystone
            const quint8 frame = (quint8)data.at(0);
            if (frame == 0x00)
                beacon = QStringLiteral("Eddystone-UID");
            else if (frame == 0x10 && data.size() >= 3) {
                static const char *schemes[] = {"http://www.", "https://www.",
                                                 "http://", "https://"};
                const quint8 sc = (quint8)data.at(2);
                QString url = sc < 4 ? schemes[sc] : "";
                for (int i = 3; i < data.size(); ++i) url += QChar((char)data.at(i));
                beacon = QStringLiteral("Eddystone-URL\n%1").arg(url);
            } else if (frame == 0x20)
                beacon = QStringLiteral("Eddystone-TLM (Telemetrie)");
            else if (frame == 0x30)
                beacon = QStringLiteral("Eddystone-EID");
        } else if (u16 == "fd5a") {
            tracker = QStringLiteral("Samsung Galaxy SmartTag");
        } else if (u16 == "feed") {
            tracker = QStringLiteral("Tile");
        } else if (u16 == "fd44") {
            tracker = QStringLiteral("Apple Find My");
        }
    }

    dev.insert("beacon", beacon);
    dev.insert("tracker", tracker);
    dev.insert("isBeacon", !beacon.isEmpty());
    dev.insert("isTracker", !tracker.isEmpty());
    dev.insert("trackerOwnerPresent", ownerPresent);
}

// ---------------------------------------------------------------------------
//  Hacker-gadget detection (devices that could be used to attack you).
//  Only what actually shows up over BT/BLE: Flipper Zero advertises via BLE
//  (name "Flipper …" and/or its serial-service UUID 8fe5b3d5-…); some ESP32
//  attack firmwares (Marauder/Bruce), Pwnagotchi, etc. by advertised name.
//  Pure USB sniffers/SDRs (Ubertooth/HackRF) don't transmit BT — only caught
//  if a device names itself that way.
// ---------------------------------------------------------------------------
void BtBackend::enrichThreat(QVariantMap &dev)
{
    const QString n = (dev.value("name").toString() + " "
                       + dev.value("alias").toString()).toLower();
    const QString uu = dev.value("uuids").toStringList().join(" ").toLower();
    const QString mac = normalizeHex(dev.value("address").toString());  // e.g. 80E12645...
    QString threat;
    // Flipper Zero: rename-proof via advertised service UUID 0x3082 and its
    // (unregistered) OUI 80:E1:26; plus the default name prefix "Flipper".
    if (n.contains("flipper")
        || uu.contains("00003082-")
        || mac.startsWith("80E126"))
        threat = QStringLiteral("Flipper Zero");
    else if (n.contains("marauder"))
        threat = QStringLiteral("ESP32 Marauder (WLAN/BLE-Angriff)");
    else if (n.contains("pwnagotchi"))
        threat = QStringLiteral("Pwnagotchi");
    else if (n.contains("bruce"))
        threat = QStringLiteral("Bruce (ESP32-Angriffs-Firmware)");
    else if (n.contains("pineapple"))
        threat = QStringLiteral("WiFi Pineapple");
    else if (n.contains("ubertooth"))
        threat = QStringLiteral("Ubertooth");
    else if (n.contains("hackrf"))
        threat = QStringLiteral("HackRF");
    else if (n.contains("o.mg") || n.contains("omg cable"))
        threat = QStringLiteral("O.MG Cable");
    else if (n.contains("deauth") || n.contains("evil portal") || n.contains("evilportal"))
        threat = QStringLiteral("WLAN-Angriffs-Tool");
    dev.insert("threat", threat);
    dev.insert("isThreat", !threat.isEmpty());

    // colour the skull per attack kind
    QString tcol;
    if (threat.startsWith(QLatin1String("Flipper")))            tcol = "#FF6D00"; // orange
    else if (threat.contains(QLatin1String("Pineapple"))
          || threat.contains(QLatin1String("Marauder"))
          || threat.contains(QLatin1String("Bruce"))
          || threat.contains(QLatin1String("WLAN-Angriffs")))   tcol = "#FFD600"; // yellow
    else if (threat.contains(QLatin1String("O.MG")))            tcol = "#E040FB"; // purple
    else if (threat.contains(QLatin1String("Ubertooth"))
          || threat.contains(QLatin1String("HackRF")))          tcol = "#00E5FF"; // cyan
    else if (threat.contains(QLatin1String("Pwnagotchi")))      tcol = "#76FF03"; // green
    else if (!threat.isEmpty())                                 tcol = "#F44336"; // red
    dev.insert("threatColor", tcol);
}

// ---------------------------------------------------------------------------
//  Airoha "Headphone Jacking" (39C3, ERNW) — CVE-2025-20700/20701/20702.
//  Vulnerable headsets (Airoha SoC) let an unauthenticated nearby attacker read/
//  write memory via the RACE protocol → extract the phone pairing key, eavesdrop,
//  trigger the voice assistant, place calls. Passive flag by known-affected model
//  names on audio devices; the real fix is a firmware update.
// ---------------------------------------------------------------------------
void BtBackend::enrichAudioVuln(QVariantMap &dev)
{
    const QStringList uuids = dev.value("uuids").toStringList();
    const bool audio = dev.value("codMajor").toString() == QLatin1String("Audio/Video")
        || dev.value("appearanceName").toString() == QLatin1String("Ohrhörer")
        || !uuids.filter("110a").isEmpty() || !uuids.filter("110b").isEmpty()  // A2DP src/sink
        || !uuids.filter("111e").isEmpty();                                    // Handsfree
    if (!audio) { dev.insert("audioVuln", false); return; }

    const QString n = (dev.value("name").toString() + " "
                       + dev.value("alias").toString()).toLower();
    static const char *pats[] = {
        "wh-1000xm", "wf-1000xm", "wf-c", "wh-ch", "wh-xb", "wf-1000",
        "linkbuds", "ult wear", "inzone", "marshall", "airoha"
    };
    bool vuln = false;
    for (const char *p : pats)
        if (n.contains(QLatin1String(p))) { vuln = true; break; }

    dev.insert("audioVuln", vuln);
    if (vuln)
        dev.insert("audioVulnInfo",
            QStringLiteral("Airoha-SoC — Headphone Jacking (CVE-2025-20700/20701/"
                "20702): ungepatcht kann ein Fremder Speicher/Pairing-Key auslesen, "
                "mithören, den Sprachassistenten starten. Firmware aktualisieren."));
}

// ---------------------------------------------------------------------------
//  Risk verdict (passive heuristics; refined as we add sniffing tiers)
// ---------------------------------------------------------------------------
void BtBackend::enrichRisk(QVariantMap &dev)
{
    QStringList reasons;
    QString risk = "good";    // good / ok / weak / bad

    if (dev.value("isThreat").toBool()) {
        risk = "bad";
        reasons << (QStringLiteral("☠ Mögliches Hacker-Gadget: ")
                    + dev.value("threat").toString());
    }
    if (dev.value("audioVuln").toBool()) {
        risk = "bad";
        reasons << (QStringLiteral("⚠ ") + dev.value("audioVulnInfo").toString());
    }

    const bool tracker = dev.value("isTracker").toBool();
    const bool randomAddr = dev.value("randomAddr").toBool();
    const bool legacy = dev.value("legacyPairing").toBool();
    const bool hid = dev.value("uuids").toStringList().filter("1812").size()
                   + dev.value("uuids").toStringList().filter("1124").size() > 0;

    if (dev.value("following").toBool()) {
        // the ONLY tracker case that is actually a risk: it keeps following you
        risk = "bad";
        reasons << QStringLiteral("⚠ Tracker folgt dir seit Minuten über mehrere "
                                  "Sichtungen — möglicher Stalking-Verdacht!");
    } else if (tracker) {
        // mere presence of a tracker is NOT a risk — it's informational. (You can
        // even locate it via find-my.) Only flag if it follows you over time.
        reasons << QStringLiteral("Tracker (z. B. AirTag/SmartTag/Tile) — an sich "
            "harmlos/auffindbar. Erst wenn er dir über mehrere Orte folgt, wird er "
            "zum Stalking-Verdacht.");
    }
    if (!randomAddr) {
        // a non-private static public address makes the device trackable
        if (risk == "good") risk = "weak";
        reasons << QStringLiteral("Statische öffentliche MAC → über Zeit trackbar (keine LE-Privacy)");
    } else {
        reasons << QStringLiteral("Zufalls-MAC (LE-Privacy aktiv) — gut");
    }
    if (legacy) {
        if (risk == "good" || risk == "ok") risk = "weak";
        reasons << QStringLiteral("Legacy-Pairing → schwacher MITM-Schutz (kein LE Secure Connections)");
    }
    if (hid) {
        reasons << QStringLiteral("HID-Eingabegerät — bei schwacher Kopplung Keystroke-Injection denkbar");
        if (risk == "good") risk = "ok";
    }

    QString color;
    if (risk == "good")      color = "#4CAF50";
    else if (risk == "ok")   color = "#8BC34A";
    else if (risk == "weak") color = "#FF9800";
    else                     color = "#F44336";

    dev.insert("risk", risk);
    dev.insert("riskColor", color);
    dev.insert("riskReasons", reasons);
}

// On-device (advertising-layer) attack detection: BLE spam/flood. A Flipper Zero /
// ESP32 BLE-spam flood produces MANY rotating random-MAC advertisers carrying
// fast-pair/continuity manufacturer data (Apple 0x004C, Microsoft 0x0006, Samsung
// 0x0075, Google 0x00E0) at once. (Link-layer attacks like jam/hijack need a raw
// sniffer — Ubertooth/micro:bit — and are not visible to the built-in adapter.)
void BtBackend::detectAttacks(const QVariantList &list)
{
    // Warm-up: stay silent right after scan start. Walking into a crowded place
    // (a concert) shows hundreds of advertisers at once, which would otherwise look
    // exactly like a spam flood and fire an immediate false alarm.
    if (inWarmup(QDateTime::currentMSecsSinceEpoch())) {
        m_attackStreak = 0;
        if (!m_attackAlert.isEmpty() || !m_attackInfo.isEmpty()) {
            m_attackAlert.clear();
            m_attackInfo.clear();
        }
        return;
    }

    // Real BLE spam (Flipper/ESP32) = a FLOOD of brand-new random MACs each scan
    // (extreme MAC rotation). Just having many Apple/MS/Samsung advertisers around
    // is normal in populated areas → count only NEW-this-cycle spammy advertisers
    // and require it to be sustained, to avoid false positives.
    int newSpam = 0;
    for (const QVariant &v : list) {
        const QVariantMap d = v.toMap();
        if (!d.value("randomAddr").toBool() || d.value("isTracker").toBool())
            continue;
        if (d.value("seenCount").toInt() != 1)   // only brand-new this scan
            continue;
        const QVariantList mfg = d.value("manufacturerData").toList();
        for (const QVariant &mv : mfg) {
            const quint16 id = (quint16)mv.toMap().value("companyId").toUInt();
            if (id == 0x004C || id == 0x0006 || id == 0x0075 || id == 0x00E0) {
                ++newSpam;
                break;
            }
        }
    }

    // need a sustained burst (>=2 polls); also skip the very first scan where every
    // device is "new" by definition.
    static bool firstScan = true;
    if (firstScan) { firstScan = false; m_attackStreak = 0; m_attackAlert.clear();
                     m_attackInfo.clear(); return; }

    if (newSpam >= 12) m_attackStreak++;
    else               m_attackStreak = 0;

    if (m_attackStreak >= 2) {
        m_attackAlert = QStringLiteral("BLE-Advertising-Spam/Flood");
        m_attackInfo = QStringLiteral("Schwall brandneuer Zufalls-MAC-Advertiser "
            "(%1/Scan, Fast-Pair/Continuity) — Flipper Zero / ESP32 BLE-Spam "
            "wahrscheinlich.").arg(newSpam);
    } else {
        m_attackAlert.clear();
        m_attackInfo.clear();
    }
}

void BtBackend::refresh()
{
    QDBusMessage call = QDBusMessage::createMethodCall(
        QStringLiteral("org.bluez"), QStringLiteral("/"),
        QStringLiteral("org.freedesktop.DBus.ObjectManager"),
        QStringLiteral("GetManagedObjects"));
    QDBusMessage reply = m_bus.call(call);
    if (reply.type() != QDBusMessage::ReplyMessage || reply.arguments().isEmpty())
        return;

    const QDBusArgument arg = reply.arguments().at(0).value<QDBusArgument>();
    const QVariantMap objects = demarshall(arg).toMap();

    findAdapter(objects);

    // BT off (or no adapter) → show nothing. BlueZ still reports cached/paired
    // devices via GetManagedObjects, but with the radio off they are not actually
    // seen, so the list must be empty.
    if (!m_powered) {
        const bool changed = !m_devices.isEmpty()
                          || !m_attackAlert.isEmpty() || !m_attackInfo.isEmpty();
        m_devices.clear();
        m_attackAlert.clear();
        m_attackInfo.clear();
        m_attackStreak = 0;
        if (changed)
            emit updated();
        return;
    }

    QVariantList list;
    for (auto it = objects.constBegin(); it != objects.constEnd(); ++it) {
        const QVariantMap ifaces = it.value().toMap();
        if (!ifaces.contains(QStringLiteral("org.bluez.Device1")))
            continue;
        const QVariantMap props = ifaces.value(QStringLiteral("org.bluez.Device1")).toMap();
        list << buildDevice(it.key(), props);
    }

    // sort by proximity: strongest RSSI (nearest) first; devices without an RSSI
    // reading go last; name as final tiebreaker.
    std::sort(list.begin(), list.end(), [](const QVariant &a, const QVariant &b) {
        const QVariantMap ma = a.toMap(), mb = b.toMap();
        const bool ra = ma.value("hasRssi").toBool(), rb = mb.value("hasRssi").toBool();
        if (ra != rb) return ra;                                   // with-RSSI first
        if (ra && rb && ma.value("rssi").toInt() != mb.value("rssi").toInt())
            return ma.value("rssi").toInt() > mb.value("rssi").toInt();  // nearest first
        return ma.value("displayName").toString() < mb.value("displayName").toString();
    });

    detectAttacks(list);
    m_devices = list;
    emit updated();
}
