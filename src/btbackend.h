/*
  harbour-ibt — Bluetooth / BLE security & analysis tool for Sailfish OS
  Copyright (C) JimKnopfIoT — GPLv3 or later.

  Tier-1 (on-device) Bluetooth backend. Talks to BlueZ over the system D-Bus
  (org.bluez) directly — NOT via QtBluetooth, because:
    * the Qt5Bluetooth devel package is missing from the SDK target, and
    * Qt 5.6's QBluetoothDeviceInfo has no manufacturerData() (added in 5.12),
      which we need for beacon/tracker decoding.
  BlueZ exposes everything we want: RSSI, UUIDs, ManufacturerData, ServiceData,
  TxPower, Appearance, Class-of-Device, Paired/Bonded/Connected, address type…

  The model is rebuilt by polling ObjectManager.GetManagedObjects on a timer
  while discovery runs (robust, captures RSSI refreshes; DuplicateData filter on).
  Each device is enriched in C++ with: OUI vendor, random/static address, rough
  distance, device kind (LE/Classic/dual), decoded beacon (iBeacon / Eddystone /
  AltBeacon), tracker detection (AirTag / SmartTag / Tile), and a risk verdict.
*/
#ifndef BTBACKEND_H
#define BTBACKEND_H

#include <QObject>
#include <QString>
#include <QStringList>
#include <QVariant>
#include <QVariantList>
#include <QVariantMap>
#include <QHash>
#include <QList>
#include <QTimer>
#include <QDBusConnection>

class BtBackend : public QObject
{
    Q_OBJECT
    Q_PROPERTY(bool available  READ available  NOTIFY availableChanged)   // adapter present
    Q_PROPERTY(bool powered    READ powered    NOTIFY poweredChanged)     // adapter powered on
    Q_PROPERTY(bool discovering READ discovering NOTIFY discoveringChanged)
    Q_PROPERTY(int  count      READ count      NOTIFY updated)
    Q_PROPERTY(QVariantList devices READ devices NOTIFY updated)
    Q_PROPERTY(QString adapterName READ adapterName NOTIFY availableChanged)
    Q_PROPERTY(QString adapterAddress READ adapterAddress NOTIFY availableChanged)
    // on-device attack detection (advertising-layer): BLE spam/flood
    Q_PROPERTY(QString attackAlert READ attackAlert NOTIFY updated)
    Q_PROPERTY(QString attackInfo READ attackInfo NOTIFY updated)
public:
    explicit BtBackend(QObject *parent = nullptr);

    bool available() const { return !m_adapterPath.isEmpty(); }
    bool powered() const { return m_powered; }
    bool discovering() const { return m_discovering; }
    int count() const { return m_devices.size(); }
    QVariantList devices() const { return m_devices; }
    QString adapterName() const { return m_adapterName; }
    QString adapterAddress() const { return m_adapterAddress; }
    QString attackAlert() const { return m_attackAlert; }
    QString attackInfo() const { return m_attackInfo; }

    Q_INVOKABLE void start();          // power on (if needed) + StartDiscovery + poll
    Q_INVOKABLE void stop();           // StopDiscovery + stop polling
    Q_INVOKABLE void refresh();        // one-shot rebuild from GetManagedObjects
    Q_INVOKABLE void clear();          // forget devices BlueZ no longer advertises
    Q_INVOKABLE bool removeDevice(const QString &path); // org.bluez RemoveDevice

    // Helpers also usable from QML.
    Q_INVOKABLE QString vendor(const QString &mac);
    Q_INVOKABLE bool isRandomAddress(const QString &mac) const;
    Q_INVOKABLE double distanceMeters(int rssi, int txPower) const;

signals:
    void availableChanged();
    void poweredChanged();
    void discoveringChanged();
    void updated();

private slots:
    void poll();

private:
    QDBusConnection m_bus;
    QTimer m_timer;
    QString m_adapterPath;
    QString m_adapterName;
    QString m_adapterAddress;
    bool m_powered = false;
    bool m_discovering = false;
    QVariantList m_devices;
    QString m_attackAlert;
    QString m_attackInfo;
    int m_attackStreak = 0;   // consecutive polls with high new-spam churn

    // Warm-up: after (re)starting discovery we hold ALL alarm-level classification
    // for a short window. Opening the app in a crowded place (a concert: hundreds
    // of devices at once) otherwise produces an instant flood of warnings before
    // the picture has settled.
    qint64 m_scanStartMs = 0;
    bool inWarmup(qint64 now) const { return m_scanStartMs > 0 && (now - m_scanStartMs) < 10000; }

    void detectAttacks(const QVariantList &list);   // advertising-spam/flood

    // OUI vendor DB (data/oui.tsv, Wireshark-derived)
    QHash<QString, QString> m_oui;
    QList<int> m_ouiLengths;       // distinct prefix nibble-lengths, descending
    bool m_ouiLoaded = false;

    // per-device sighting history (in-session) for stalking detection + sparkline
    struct Sighting { qint64 first = 0; qint64 last = 0; int count = 0; QList<int> rssi; };
    QHash<QString, Sighting> m_sight;

    void ensureOui();
    void findAdapter(const QVariantMap &objects);
    void setAdapterPowered(bool on);
    void callAdapter(const QString &method, const QVariantList &args = QVariantList());
    void setDiscoveryFilter();

    // build one enriched device map from raw org.bluez.Device1 props
    QVariantMap buildDevice(const QString &path, const QVariantMap &props);
    void enrichBeaconAndTracker(QVariantMap &dev,
                                const QVariantList &mfgList,
                                const QVariantList &svcList);
    void enrichThreat(QVariantMap &dev);   // hacker-gadget detection (Flipper etc.)
    void enrichAudioVuln(QVariantMap &dev);// Airoha headphone-jacking (CVE-2025-2070x)
    void enrichRisk(QVariantMap &dev);
};

#endif // BTBACKEND_H
