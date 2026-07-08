/*
  harbour-ibt — device topology: a hub device (e.g. a phone) in the centre with
  its likely companion devices (headphones / AirTag / smartwatch / HID) around it.
  NOTE: real BT pairings between third-party devices are NOT observable passively;
  the satellites here are inferred by role (category) + co-location (similar RSSI),
  clearly marked as such — a confirmed pairing is not observable passively.
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0

Page {
    id: topo
    allowedOrientations: Orientation.All

    property var dev
    property var hub: dev
    function relink() {
        var src = bt.devices
        for (var i = 0; i < src.length; ++i)
            if (src[i].address === dev.address) { hub = src[i]; return }
    }
    Connections { target: bt; onUpdated: { topo.relink(); topo.sats = topo.related() } }
    Component.onCompleted: { relink(); sats = related() }

    property var sats: []

    // A companion candidate is an INPUT/AUDIO/WEARABLE peripheral (mouse, keyboard,
    // pen, headset, watch). Trackers are deliberately excluded — they are standalone
    // and cannot be attributed to a host passively (they have the stalking view).
    function isCompanion(d) {
        var u = "" + (d.uuids ? d.uuids.join(" ") : "")
        if (d.isTracker) return false
        return d.codMajor === "Audio/Video"
            || d.codMajor === "Peripherie"
            || d.appearanceName === "HID (Eingabegerät)"
            || d.category === "Armbanduhr" || d.appearanceName === "Uhr"
            || u.indexOf("1812") >= 0    // HID
            || u.indexOf("180d") >= 0    // heart rate (wearables)
            || u.indexOf("110b") >= 0 || u.indexOf("110a") >= 0  // A2DP audio
    }
    function related() {
        var out = [], src = bt.devices, h = hub
        if (!h) return out
        for (var i = 0; i < src.length; ++i) {
            var d = src[i]
            if (d.address === h.address) continue
            if (!isCompanion(d)) continue
            // require BOTH to have RSSI and be genuinely co-located (±12 dB)
            if (!(h.hasRssi && d.hasRssi)) continue
            if (Math.abs(h.rssi - d.rssi) > 12) continue
            out.push(d)
        }
        out.sort(function (a, b) { return (b.rssi || -200) - (a.rssi || -200) })
        return out.slice(0, 8)
    }

    function emojiFor(d) {
        return d.isTracker ? "🎯"
             : d.codMajor === "Audio/Video" ? "🎧"
             : (d.category === "Armbanduhr" || d.appearanceName === "Uhr") ? "⌚"
             : (d.codMajor === "Peripherie" || d.appearanceName === "HID (Eingabegerät)") ? "🖱️"
             : "📶"
    }
    function hubEmoji(d) {
        return (d.category === "Smartphone" || d.category === "Mobiltelefon"
                || d.category === "Telefon") ? "📱"
             : (d.category === "Computer" || d.category === "Laptop") ? "💻"
             : emojiFor(d)
    }

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: col.height

        Column {
            id: col
            width: parent.width
            spacing: Theme.paddingSmall

            PageHeader {
                title: qsTr("Verknüpfungs-Ansicht")
                description: hub ? (hub.friendlyConfident ? hub.friendly : hub.displayName) : ""
            }

            Label {
                x: Theme.horizontalPageMargin
                width: parent.width - 2 * Theme.horizontalPageMargin
                wrapMode: Text.Wrap
                font.pixelSize: Theme.fontSizeExtraSmall
                color: Theme.secondaryColor
                text: qsTr("Nur Eingabe-/Audio-/Wearable-Geräte in unmittelbarer Nähe "
                    + "(±12 dB). Das ist KEINE bestätigte Kopplung — die ist passiv "
                    + "nicht feststellbar. Hinweis: Maus/Tastatur/"
                    + "Pen, die bereits mit einem PC verbunden sind, advertisen meist "
                    + "nicht mehr und sind daher unsichtbar.")
            }

            ViewPlaceholder {
                enabled: topo.sats.length === 0
                text: qsTr("Keine sichtbaren Begleiter")
                hintText: qsTr("Verbundene Eingabegeräte (Maus/Pen) sind im Betrieb "
                    + "nicht discoverable und daher passiv unsichtbar.")
            }

            Item {
                id: graph
                visible: topo.sats.length > 0
                width: topo.width
                height: Math.max(topo.width, topo.height - col.y - Theme.itemSizeLarge)
                property real cx: width / 2
                property real cy: height / 2
                property real rr: Math.min(width, height) / 2 - Theme.itemSizeLarge
                function sx(i) { return cx + rr * Math.cos(2 * Math.PI * i / topo.sats.length - Math.PI / 2) }
                function sy(i) { return cy + rr * Math.sin(2 * Math.PI * i / topo.sats.length - Math.PI / 2) }

                // connection lines hub -> satellites
                Canvas {
                    id: lines
                    anchors.fill: parent
                    onPaint: {
                        var ctx = getContext("2d"); ctx.reset()
                        ctx.strokeStyle = Theme.rgba(Theme.primaryColor, 0.35)
                        ctx.lineWidth = 1
                        for (var i = 0; i < topo.sats.length; ++i) {
                            ctx.beginPath()
                            ctx.moveTo(graph.cx, graph.cy)
                            ctx.lineTo(graph.sx(i), graph.sy(i))
                            ctx.stroke()
                        }
                    }
                    Connections { target: topo; onSatsChanged: lines.requestPaint() }
                    onWidthChanged: requestPaint()
                    onHeightChanged: requestPaint()
                    Component.onCompleted: requestPaint()
                }

                // satellites
                Repeater {
                    model: topo.sats
                    delegate: Item {
                        width: Theme.itemSizeSmall * 1.6
                        height: Theme.itemSizeSmall * 1.6
                        x: graph.sx(index) - width / 2
                        y: graph.sy(index) - height / 2
                        Rectangle {
                            id: sc
                            anchors.horizontalCenter: parent.horizontalCenter
                            width: Theme.itemSizeSmall; height: width; radius: width / 2
                            color: Theme.rgba(modelData.riskColor, 0.20)
                            border.color: modelData.riskColor; border.width: 2
                            Label { anchors.centerIn: parent; text: topo.emojiFor(modelData)
                                    font.pixelSize: Theme.fontSizeLarge }
                        }
                        Label {
                            anchors { top: sc.bottom; horizontalCenter: parent.horizontalCenter }
                            width: parent.width
                            horizontalAlignment: Text.AlignHCenter
                            wrapMode: Text.Wrap; maximumLineCount: 2
                            truncationMode: TruncationMode.Fade
                            font.pixelSize: Theme.fontSizeTiny
                            color: Theme.secondaryColor
                            text: (modelData.friendlyConfident ? modelData.friendly
                                                               : modelData.displayName)
                                  + (modelData.hasRssi ? " · " + modelData.rssi : "")
                        }
                        MouseArea {
                            anchors.fill: parent
                            onClicked: pageStack.push(Qt.resolvedUrl("DevicePage.qml"),
                                                      { dev: modelData })
                        }
                    }
                }

                // hub (centre)
                Rectangle {
                    width: Theme.itemSizeMedium; height: width; radius: width / 2
                    x: graph.cx - width / 2; y: graph.cy - height / 2
                    color: Theme.rgba(hub ? hub.riskColor : Theme.highlightColor, 0.25)
                    border.color: hub ? hub.riskColor : Theme.highlightColor; border.width: 3
                    Label { anchors.centerIn: parent; text: hub ? topo.hubEmoji(hub) : "?"
                            font.pixelSize: Theme.fontSizeExtraLarge }
                }
            }
        }
    }
}
