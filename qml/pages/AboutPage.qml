/*
  harbour-ibt — about page.
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0

Page {
    allowedOrientations: Orientation.All
    SilicaFlickable {
        anchors.fill: parent
        contentHeight: col.height + Theme.paddingLarge
        Column {
            id: col
            width: parent.width
            spacing: Theme.paddingMedium
            PageHeader { title: qsTr("Über iBT") }
            Label {
                x: Theme.horizontalPageMargin
                width: parent.width - 2 * Theme.horizontalPageMargin
                wrapMode: Text.Wrap
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
                text: qsTr("iBT — passives Bluetooth-/BLE-Sicherheits- und Analyse-Tool.\n\n"
                  + "Scannt über die BlueZ-Schnittstelle des Telefons nahe BT-/BLE-Geräte "
                  + "und liest nur frei gesendete Advertising-Daten: Name, MAC, RSSI, "
                  + "Hersteller, Dienste, Hersteller-/Service-Daten. Dekodiert Beacons "
                  + "(iBeacon/Eddystone/AltBeacon), erkennt Tracker (AirTag/SmartTag/Tile) "
                  + "und werbebasierte Angriffe (BLE-Spam-Fluten) und gibt eine passive "
                  + "Risiko-Einschätzung.\n\n"
                  + "Strikt passiv: iBT liest nur, was Geräte ohnehin frei aussenden, "
                  + "und ruft diese Werte allein aus der lokalen BlueZ-Schnittstelle ab. "
                  + "Auch Dienste, Service-Daten und Kopplungs-/Verbindungs-Status werden "
                  + "nicht beim fremden Gerät erfragt, sondern nur lokal ausgelesen.\n\n"
                  + "Über das übliche Link-Layer-Suchsignal hinaus — das jeder Bluetooth-Scan "
                  + "(auch die System-Einstellungen) nutzt, um Geräte in der Nähe zu finden — "
                  + "sendet iBT keine Informationen und fragt auch aktiv keine ab: keine "
                  + "Verbindung, kein GATT, kein Pairing. Kein Mitschnitt fremden Verkehrs, "
                  + "keine Angriffe, kein Logging, kein Export von Scan-Daten. Der Standort "
                  + "(optional) dient nur dem Zentrieren der Hintergrundkarte und wird "
                  + "nicht gespeichert.\n\n"
                  + "Hinweis: BT-Adressen sind personenbezogene Daten — verantwortungsvoll "
                  + "und nur zur eigenen Lageeinschätzung nutzen.")
            }
            SectionHeader { text: qsTr("Adapter") }
            DetailItem { label: qsTr("Name"); value: bt.adapterName || "—" }
            DetailItem { label: qsTr("Adresse"); value: bt.adapterAddress || "—" }
            DetailItem {
                label: qsTr("Status")
                value: !bt.available ? qsTr("nicht gefunden")
                       : bt.powered ? qsTr("an") : qsTr("aus")
            }
        }
        VerticalScrollDecorator {}
    }
}
