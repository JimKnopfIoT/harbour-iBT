/*
  harbour-ibt — full device detail. Shows every field BlueZ exposes plus our
  decoded beacon/tracker/risk. Re-binds to the live scan entry so RSSI stays fresh.
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0

Page {
    id: page
    allowedOrientations: Orientation.All

    // snapshot passed in; `live` is the fresh entry from bt.devices (same address)
    property var dev
    property var live: dev
    function relink() {
        var src = bt.devices
        for (var i = 0; i < src.length; ++i)
            if (src[i].address === dev.address) { live = src[i]; return }
        // gone from scan — keep last snapshot
    }
    Connections { target: bt; onUpdated: page.relink() }
    Component.onCompleted: relink()

    // swipe-right → topology (hub + companions); from there swipe again → tracking
    property bool _topoAttached: false
    onStatusChanged: {
        if (status === PageStatus.Active && !_topoAttached) {
            _topoAttached = true
            pageStack.pushAttached(Qt.resolvedUrl("BtTopologyPage.qml"), { dev: dev })
        }
    }

    // Nearby HID/peripheral devices — candidate peripherals of this host. NOTE:
    // a real pairing link can't be seen passively; this is co-location/role only.
    property var nearbyPeripherals: {
        var out = [], src = bt.devices
        for (var n = 0; n < src.length; ++n) {
            var d = src[n]
            if (d.address === live.address) continue
            var hid = d.codMajor === "Peripherie"
                   || d.appearanceName === "HID (Eingabegerät)"
                   || ("" + d.category).indexOf("Zeigegerät") >= 0
                   || ("" + d.category).indexOf("Tastatur") >= 0
                   || ("" + d.uuids.join(" ")).indexOf("1812") >= 0
            if (hid) out.push(d)
        }
        return out
    }
    function fmtDuration(s) {
        s = Math.max(0, Math.round(s))
        if (s < 60) return s + " s"
        if (s < 3600) return Math.floor(s / 60) + " min " + (s % 60) + " s"
        return Math.floor(s / 3600) + " h " + Math.floor((s % 3600) / 60) + " min"
    }
    function cveTerms() {
        if (live.audioVuln) return "Airoha RACE CVE-2025-20700 headphone"
        var t = []
        if (live.vendor) t.push(live.vendor)
        if (live.name) t.push(live.name)
        return t.join(" ").replace(/[()!,]/g, " ").replace(/\s+/g, " ").trim()
    }

    // ---- build a readable text of THIS device's detail (clipboard copy) ----
    function _yn(b) { return b ? qsTr("ja") : qsTr("nein") }
    function deviceAsText(d) {
        var L = []
        L.push("iBT — Geräte-Details")
        L.push("==================")
        L.push(qsTr("Name") + ": " + d.displayName)
        if (d.name)  L.push(qsTr("Name (BlueZ)") + ": " + d.name)
        if (d.alias) L.push(qsTr("Alias") + ": " + d.alias)
        L.push(qsTr("MAC") + ": " + d.address + "  (" + d.addressType + ")")
        L.push(qsTr("MAC-Privacy") + ": "
               + (d.randomAddr ? qsTr("Zufalls-MAC") : qsTr("statisch/öffentlich")))
        L.push(qsTr("Hersteller (OUI)") + ": " + (d.vendor || "—"))
        L.push(qsTr("Typ") + ": " + kindLabel(d.kind))
        if (d.icon)       L.push(qsTr("BlueZ-Icon") + ": " + d.icon)
        if (d.cls)        L.push("Class of Device: 0x" + d.cls.toString(16))
        if (d.appearance) L.push("Appearance: 0x" + d.appearance.toString(16))
        L.push("RSSI: " + (d.hasRssi ? (d.rssi + " dBm (" + d.signalPct + "%)") : "—"))
        if (d.hasTxPower) L.push("TxPower: " + d.txPower + " dBm")
        if (d.distance >= 0) L.push(qsTr("Distanz") + ": ~" + d.distance.toFixed(1) + " m")
        if (devBearings[d.address] !== undefined)
            L.push(qsTr("Richtung") + ": " + Math.round(devBearings[d.address]) + "°")
        L.push(qsTr("Gekoppelt") + ": " + _yn(d.paired)
               + " · " + qsTr("Gebondet") + ": " + _yn(d.bonded)
               + " · " + qsTr("Verbunden") + ": " + _yn(d.connected)
               + " · " + qsTr("Vertraut") + ": " + _yn(d.trusted)
               + " · " + qsTr("Blockiert") + ": " + _yn(d.blocked))
        L.push(qsTr("Legacy-Pairing") + ": " + _yn(d.legacyPairing)
               + " · " + qsTr("Dienste aufgelöst") + ": " + _yn(d.servicesResolved))
        L.push(qsTr("Risiko") + ": " + riskLabel(d.risk))
        for (var r = 0; r < d.riskReasons.length; ++r)
            L.push("  - " + d.riskReasons[r])
        if (d.isBeacon)  L.push("Beacon: " + ("" + d.beacon).replace(/\n/g, " | "))
        if (d.isTracker) L.push(qsTr("Tracker") + ": " + d.tracker)
        L.push(qsTr("Dienste/UUIDs") + " (" + d.uuids.length + "):")
        for (var u = 0; u < d.uuidNames.length; ++u) L.push("  • " + d.uuidNames[u])
        if (d.manufacturerData.length) {
            L.push(qsTr("Hersteller-Daten") + ":")
            for (var m = 0; m < d.manufacturerData.length; ++m) {
                var e = d.manufacturerData[m]
                L.push("  • " + e.company + (e.companyName ? " " + e.companyName : "")
                       + " = " + e.data)
            }
        }
        if (d.serviceData.length) {
            L.push(qsTr("Service-Daten") + ":")
            for (var s = 0; s < d.serviceData.length; ++s) {
                var se = d.serviceData[s]
                L.push("  • " + (se.uuidName ? se.uuidName + " " : "") + se.uuid
                       + " = " + se.data)
            }
        }
        L.push("D-Bus: " + d.path)
        return L.join("\n") + "\n"
    }
    function copyClip() {
        Clipboard.text = deviceAsText(live)
        showToast(qsTr("In die Zwischenablage kopiert"))
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: col.height + Theme.paddingLarge

        PullDownMenu {
            MenuItem {
                text: qsTr("In Zwischenablage kopieren")
                onClicked: copyClip()
            }
            MenuItem {
                text: qsTr("Verknüpfungs-Ansicht (Begleitgeräte)")
                onClicked: pageStack.push(Qt.resolvedUrl("BtTopologyPage.qml"), { dev: live })
            }
            MenuItem {
                text: qsTr("Richtung hier setzen (zeigt zum Gerät)")
                onClicked: {
                    setBearing(live.address, sensor.heading)
                    showToast(qsTr("Richtung gespeichert: %1°").arg(Math.round(sensor.heading)))
                }
            }
            MenuItem {
                visible: live.paired || live.bonded
                text: qsTr("Gerät aus BlueZ entfernen")
                onClicked: {
                    if (bt.removeDevice(live.path)) showToast(qsTr("Entfernt"))
                    else showToast(qsTr("Entfernen fehlgeschlagen"))
                }
            }
        }

        Column {
            id: col
            width: parent.width
            spacing: Theme.paddingSmall

            PageHeader {
                title: live.displayName
                description: live.address
            }

            // hacker-gadget warning banner (☠ + ⚠)
            Rectangle {
                visible: live.isThreat === true
                x: Theme.horizontalPageMargin
                width: page.width - 2 * Theme.horizontalPageMargin
                height: thrLbl.height + 2 * Theme.paddingMedium
                radius: Theme.paddingSmall
                color: Theme.rgba("#FF6D00", 0.20)
                border.color: "#F44336"; border.width: 2
                Label {
                    id: thrLbl
                    anchors { verticalCenter: parent.verticalCenter
                              left: parent.left; right: parent.right
                              leftMargin: Theme.paddingMedium; rightMargin: Theme.paddingMedium }
                    wrapMode: Text.Wrap
                    font.pixelSize: Theme.fontSizeSmall
                    font.bold: true
                    color: "#FF6D00"
                    text: "⚠ ☠  " + qsTr("Mögliches Hacker-Gadget: %1").arg(live.threat || "")
                }
            }

            // ---- badge: device emoji in a coloured circle ----
            Rectangle {
                anchors.horizontalCenter: parent.horizontalCenter
                width: Theme.itemSizeHuge; height: width; radius: width / 2
                color: Theme.rgba(live.riskColor, 0.18)
                border.color: live.riskColor; border.width: 2
                Label {
                    anchors.centerIn: parent
                    font.pixelSize: Theme.fontSizeHuge
                    text: live.isTracker ? "🎯"
                          : live.isBeacon ? "📡"
                          : (live.category === "Smartphone" || live.category === "Mobiltelefon"
                             || live.category === "Telefon") ? "📱"
                          : (live.codMajor === "Audio/Video") ? "🎧"
                          : (live.category === "Computer" || live.category === "Laptop") ? "💻"
                          : (live.category === "Armbanduhr" || live.appearanceName === "Uhr") ? "⌚"
                          : (live.codMajor === "Peripherie" || live.appearanceName === "HID (Eingabegerät)") ? "⌨️"
                          : "📶"
                }
            }
            Label {
                anchors.horizontalCenter: parent.horizontalCenter
                text: qsTr("Risiko: %1").arg(riskLabel(live.risk))
                font.bold: true
                color: live.riskColor
            }
            Repeater {
                model: live.riskReasons
                Label {
                    x: Theme.horizontalPageMargin
                    width: page.width - 2 * Theme.horizontalPageMargin
                    horizontalAlignment: Text.AlignHCenter
                    wrapMode: Text.Wrap
                    text: "• " + modelData
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: Theme.secondaryColor
                }
            }

            SectionHeader { text: qsTr("Identität") }
            DetailItem { label: qsTr("Name"); value: live.name || "—" }
            DetailItem { label: qsTr("Alias"); value: live.alias || "—" }
            // BT MAC — blue when merged with a WiFi device (strong candidate)
            Item {
                x: Theme.horizontalPageMargin
                width: page.width - 2 * Theme.horizontalPageMargin
                height: macVal.height + Theme.paddingSmall
                Label {
                    anchors { left: parent.left; verticalCenter: macVal.verticalCenter }
                    text: qsTr("Adresse (MAC)")
                    font.pixelSize: Theme.fontSizeSmall
                    color: Theme.secondaryColor
                }
                Label {
                    id: macVal
                    anchors { right: parent.right; top: parent.top }
                    text: live.address
                    font.pixelSize: Theme.fontSizeSmall
                    color: Theme.primaryColor
                }
            }
            DetailItem { label: qsTr("Adress-Typ"); value: live.addressType || "—" }
            DetailItem {
                label: qsTr("MAC-Privacy")
                value: live.randomAddr ? qsTr("Zufalls-MAC (gut)")
                                       : qsTr("statisch/öffentlich (trackbar)")
            }
            DetailItem { label: qsTr("Hersteller (OUI)"); value: live.vendor || "—" }
            DetailItem {
                label: qsTr("Geräte-Typ (erkannt)")
                value: live.category || "—"
            }
            DetailItem {
                label: qsTr("Identität (vermutet)")
                value: {
                    var parts = []
                    if (live.vendor) parts.push(live.vendor)
                    if (live.name) parts.push(live.name)
                    if (live.category) parts.push(live.category)
                    return parts.length ? parts.join(" · ") : "—"
                }
            }
            DetailItem { label: qsTr("Funk-Typ"); value: kindLabel(live.kind) }
            DetailItem { label: qsTr("BlueZ-Icon"); value: live.icon || "—" }
            DetailItem {
                label: qsTr("Class of Device")
                value: live.cls
                       ? ("0x" + live.cls.toString(16)
                          + (live.codMajor ? "  " + live.codMajor : "")
                          + (live.codMinor ? " / " + live.codMinor : ""))
                       : "—"
            }
            DetailItem {
                label: qsTr("Appearance")
                value: live.appearance
                       ? ("0x" + live.appearance.toString(16)
                          + (live.appearanceName ? "  " + live.appearanceName : ""))
                       : "—"
            }

            SectionHeader { text: qsTr("Signal & Distanz") }
            DetailItem {
                label: qsTr("RSSI")
                value: live.hasRssi ? (live.rssi + " dBm  (" + live.signalPct + "%)") : "—"
            }
            DetailItem {
                label: qsTr("TxPower (1 m)")
                value: live.hasTxPower ? (live.txPower + " dBm") : "—"
            }
            DetailItem {
                label: qsTr("Distanz (grob)")
                value: live.distance >= 0 ? ("~ " + live.distance.toFixed(1) + " m") : "—"
            }
            DetailItem {
                label: qsTr("Gemessene Richtung")
                value: devBearings[live.address] !== undefined
                       ? (Math.round(devBearings[live.address]) + "°")
                       : qsTr("— (Pulldown: hier setzen)")
            }

            // ---- sighting history, stalking alarm, RSSI sparkline (locating) ----
            SectionHeader { text: qsTr("Verlauf & Ortung") }
            DetailItem { label: qsTr("Sichtungen"); value: "" + (live.seenCount || 0) }
            DetailItem { label: qsTr("Beobachtet seit"); value: fmtDuration(live.seenSeconds || 0) }

            Rectangle {
                visible: live.following === true
                x: Theme.horizontalPageMargin
                width: page.width - 2 * Theme.horizontalPageMargin
                height: stalkLbl.height + 2 * Theme.paddingMedium
                radius: Theme.paddingSmall
                color: Theme.rgba("#F44336", 0.18)
                border.color: "#F44336"; border.width: 1
                Label {
                    id: stalkLbl
                    anchors { verticalCenter: parent.verticalCenter
                              left: parent.left; right: parent.right
                              leftMargin: Theme.paddingMedium; rightMargin: Theme.paddingMedium }
                    wrapMode: Text.Wrap
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: "#F44336"
                    text: qsTr("⚠ Stalking-Verdacht: Dieser Tracker läuft seit %1 mit. "
                        + "Bewege dich an einen anderen Ort — bleibt er dabei, ist er "
                        + "vermutlich bei dir/an deinen Sachen.").arg(fmtDuration(live.seenSeconds || 0))
                }
            }

            Item {
                visible: (live.rssiHistory || []).length > 1
                x: Theme.horizontalPageMargin
                width: page.width - 2 * Theme.horizontalPageMargin
                height: Theme.itemSizeMedium * 1.4
                Label {
                    id: sparkLbl
                    anchors.top: parent.top
                    text: qsTr("RSSI-Verlauf — oben weit/rot, unten nah/grün (zum Orten gehen)")
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: Theme.secondaryColor
                }
                // semi-transparent distance gradient: red (far) → orange → green (near)
                Rectangle {
                    id: sparkBg
                    anchors { left: parent.left; right: parent.right
                              top: sparkLbl.bottom; bottom: parent.bottom
                              topMargin: Theme.paddingSmall / 2 }
                    radius: Theme.paddingSmall
                    color: "transparent"
                    border.color: Theme.rgba(Theme.primaryColor, 0.25)
                    border.width: 1
                    Canvas {
                        id: spark
                        anchors.fill: parent
                        onPaint: {
                            var ctx = getContext("2d"); ctx.reset()
                            var s = live.rssiHistory || []
                            if (s.length < 2) return
                            var lo = -100, hi = -30, w = width, h = height, i
                            // the line itself is coloured by height: top=red (far),
                            // middle=orange, bottom=green (near)
                            var grad = ctx.createLinearGradient(0, 0, 0, h)
                            grad.addColorStop(0.0, "#F44336")
                            grad.addColorStop(0.5, "#FF9800")
                            grad.addColorStop(1.0, "#4CAF50")
                            ctx.strokeStyle = grad
                            ctx.lineWidth = 3
                            ctx.lineJoin = "round"
                            ctx.beginPath()
                            for (i = 0; i < s.length; ++i) {
                                var x = w * i / (s.length - 1)
                                var v = Math.max(lo, Math.min(hi, s[i]))
                                // near (strong) -> bottom (green), far (weak) -> top (red)
                                var y = h * (v - lo) / (hi - lo)
                                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
                            }
                            ctx.stroke()
                        }
                        Connections { target: bt; onUpdated: spark.requestPaint() }
                        Component.onCompleted: requestPaint()
                        onWidthChanged: requestPaint()
                    }
                }
            }

            SectionHeader { text: qsTr("Status") }
            DetailItem { label: qsTr("Gekoppelt (paired)"); value: live.paired ? qsTr("ja") : qsTr("nein") }
            DetailItem { label: qsTr("Gebondet"); value: live.bonded ? qsTr("ja") : qsTr("nein") }
            DetailItem { label: qsTr("Vertraut (trusted)"); value: live.trusted ? qsTr("ja") : qsTr("nein") }
            DetailItem { label: qsTr("Blockiert"); value: live.blocked ? qsTr("ja") : qsTr("nein") }
            DetailItem { label: qsTr("Verbunden"); value: live.connected ? qsTr("ja") : qsTr("nein") }
            DetailItem {
                label: qsTr("Legacy-Pairing")
                value: live.legacyPairing ? qsTr("ja (schwächer)") : qsTr("nein")
            }
            DetailItem {
                label: qsTr("Dienste aufgelöst")
                value: live.servicesResolved ? qsTr("ja") : qsTr("nein")
            }

            // ---- beacon ----
            Loader {
                active: live.isBeacon
                width: parent.width
                sourceComponent: Column {
                    width: page.width
                    SectionHeader { text: qsTr("Beacon") }
                    Label {
                        x: Theme.horizontalPageMargin
                        width: page.width - 2 * Theme.horizontalPageMargin
                        wrapMode: Text.Wrap
                        text: live.beacon
                        color: Theme.highlightColor
                        font.pixelSize: Theme.fontSizeSmall
                    }
                }
            }

            // ---- tracker ----
            Loader {
                active: live.isTracker
                width: parent.width
                sourceComponent: Column {
                    width: page.width
                    SectionHeader { text: qsTr("Tracker-Warnung") }
                    Label {
                        x: Theme.horizontalPageMargin
                        width: page.width - 2 * Theme.horizontalPageMargin
                        wrapMode: Text.Wrap
                        text: "🎯 " + live.tracker + "\n"
                              + qsTr("Wenn dieses Gerät dir an wechselnden Orten folgt, "
                                     + "könnte es zum Tracking/Stalking genutzt werden.")
                        color: "#F44336"
                        font.pixelSize: Theme.fontSizeSmall
                    }
                }
            }

            // ---- services / UUIDs ----
            SectionHeader { text: qsTr("Dienste / GATT-UUIDs (%1)").arg(live.uuids.length) }
            Repeater {
                model: live.uuidNames
                Label {
                    x: Theme.horizontalPageMargin
                    width: page.width - 2 * Theme.horizontalPageMargin
                    wrapMode: Text.WrapAnywhere
                    text: "• " + modelData
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: Theme.secondaryColor
                }
            }
            Label {
                visible: live.uuids.length === 0
                x: Theme.horizontalPageMargin
                text: "—"
                color: Theme.secondaryColor
            }

            // ---- manufacturer data ----
            Loader {
                active: live.manufacturerData.length > 0
                width: parent.width
                sourceComponent: Column {
                    width: page.width
                    SectionHeader { text: qsTr("Hersteller-Daten") }
                    Repeater {
                        model: live.manufacturerData
                        Column {
                            x: Theme.horizontalPageMargin
                            width: page.width - 2 * Theme.horizontalPageMargin
                            Label {
                                text: modelData.company
                                      + (modelData.companyName ? "  " + modelData.companyName : "")
                                font.pixelSize: Theme.fontSizeExtraSmall
                                color: Theme.highlightColor
                            }
                            Label {
                                width: parent.width
                                wrapMode: Text.WrapAnywhere
                                text: modelData.data
                                font.pixelSize: Theme.fontSizeTiny
                                font.family: "monospace"
                                color: Theme.secondaryColor
                            }
                        }
                    }
                }
            }

            // ---- service data ----
            Loader {
                active: live.serviceData.length > 0
                width: parent.width
                sourceComponent: Column {
                    width: page.width
                    SectionHeader { text: qsTr("Service-Daten") }
                    Repeater {
                        model: live.serviceData
                        Column {
                            x: Theme.horizontalPageMargin
                            width: page.width - 2 * Theme.horizontalPageMargin
                            Label {
                                text: (modelData.uuidName ? modelData.uuidName + "  " : "")
                                      + modelData.uuid
                                font.pixelSize: Theme.fontSizeExtraSmall
                                color: Theme.highlightColor
                            }
                            Label {
                                width: parent.width
                                wrapMode: Text.WrapAnywhere
                                text: modelData.data
                                font.pixelSize: Theme.fontSizeTiny
                                font.family: "monospace"
                                color: Theme.secondaryColor
                            }
                        }
                    }
                }
            }

            // ---- candidate peripherals nearby (HID mice/keyboards/pens) ----
            SectionHeader {
                visible: page.nearbyPeripherals.length > 0
                text: qsTr("Mögliche Peripherie in der Nähe (%1)").arg(page.nearbyPeripherals.length)
            }
            Label {
                visible: page.nearbyPeripherals.length > 0
                x: Theme.horizontalPageMargin
                width: page.width - 2 * Theme.horizontalPageMargin
                wrapMode: Text.Wrap
                font.pixelSize: Theme.fontSizeExtraSmall
                color: Theme.secondaryColor
                text: qsTr("Eingabegeräte (Maus/Tastatur/Pen) in Funkreichweite. "
                    + "Ob sie wirklich mit DIESEM Gerät gekoppelt sind, ist passiv "
                    + "NICHT feststellbar (privates Piconet) — hier nur als "
                    + "naheliegende Kandidaten in der Nähe.")
            }
            Repeater {
                model: page.nearbyPeripherals
                delegate: BackgroundItem {
                    width: page.width
                    height: Theme.itemSizeSmall
                    Label {
                        anchors { left: parent.left; leftMargin: Theme.horizontalPageMargin
                                  verticalCenter: parent.verticalCenter
                                  right: rrssi.left; rightMargin: Theme.paddingMedium }
                        truncationMode: TruncationMode.Fade
                        text: "🖱️ " + modelData.displayName
                              + (modelData.vendor ? "  ·  " + modelData.vendor : "")
                              + (modelData.category ? "  ·  " + modelData.category : "")
                    }
                    Label {
                        id: rrssi
                        anchors { right: parent.right; rightMargin: Theme.horizontalPageMargin
                                  verticalCenter: parent.verticalCenter }
                        text: modelData.hasRssi ? modelData.rssi + " dBm" : ""
                        font.pixelSize: Theme.fontSizeExtraSmall
                        color: Theme.secondaryColor
                    }
                    onClicked: pageStack.push(Qt.resolvedUrl("DevicePage.qml"),
                                              { dev: modelData })
                }
            }


            Button {
                anchors.horizontalCenter: parent.horizontalCenter
                text: qsTr("CVEs für dieses Gerät suchen")
                onClicked: pageStack.push(Qt.resolvedUrl("CvePage.qml"),
                                          { terms: cveTerms() })
            }

            SectionHeader { text: qsTr("Intern") }
            DetailItem { label: qsTr("D-Bus-Pfad"); value: live.path }
        }
        VerticalScrollDecorator {}
    }
}
