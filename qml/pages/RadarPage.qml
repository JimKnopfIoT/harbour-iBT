/*
  harbour-ibt — radar/map of nearby BT devices, placed by RSSI distance and
  (measured or provisional) bearing. Heading-up; tap a marker for full detail;
  swipe right for the list.
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0

Page {
    id: radarPage
    allowedOrientations: Orientation.All

    property real dmax: 25                              // metres to plot at zoom 1.0
    property real zoom: 1.0
    property real dEff: Math.max(1, dmax / zoom)
    property real heading: sensor.heading               // own orientation (view + geo-projection rotated 180° vs. before)

    property bool _attachedList: false

    function worldBearing(dev) {
        var b = devBearings[dev.address]
        return (b !== undefined) ? b : pseudoBearing(dev.address)
    }
    // deterministic placeholder angle from the address (so markers are stable)
    function pseudoBearing(addr) {
        var h = 0
        for (var i = 0; i < addr.length; ++i)
            h = (h * 31 + addr.charCodeAt(i)) & 0xffff
        return h % 360
    }

    onStatusChanged: {
        if (status === PageStatus.Active) {
            sensor.start()
            if (pageStack.depth === 1 && !_attachedList) {
                _attachedList = true
                pageStack.pushAttached(Qt.resolvedUrl("ListPage.qml"))
            }
        }
    }

    // --- OSM silhouette background (opt-in; needs GPS; vector outlines, no plugin) ---
    property bool osmShow: false
    function setOsm(on) {
        osmShow = on
        showToast(on ? qsTr("Hintergrundkarte an (braucht GPS-Fix)")
                     : qsTr("Hintergrundkarte aus"))
        if (on) { if (!gpsEnabled) setGps(true); maybeFetchOsm() }
    }
    property var osmWays: osm.ways
    property real osmLat: osm.lat
    property real osmLon: osm.lon
    property real osmMaxZoom: 3.0
    property bool osmVisible: osmShow && gpsValid && zoom <= osmMaxZoom
    function maybeFetchOsm() {
        if (!gpsEnabled || !gpsValid || !osmShow || osm.busy) return
        if (osmWays.length > 0) {
            var dN = (gpsLat - osmLat) * 111320
            var dE = (gpsLon - osmLon) * 111320 * Math.cos(gpsLat * Math.PI / 180)
            if (Math.sqrt(dN * dN + dE * dE) < 80) return
        }
        osm.fetch(gpsLat, gpsLon, 400)
    }
    Connections {
        target: rootApp
        onGpsValidChanged: radarPage.maybeFetchOsm()
        onGpsLatChanged: radarPage.maybeFetchOsm()
    }
    Connections {
        target: osm
        onChanged: if (radarPage.osmShow && !osm.busy && osm.status.length > 0)
                       showToast(osm.status)
    }
    Connections {
        target: Qt.application
        onStateChanged: if (Qt.application.state !== Qt.ApplicationActive && radarPage.osmShow)
                            radarPage.osmShow = false
    }

    SilicaFlickable {
        anchors.fill: parent

        PullDownMenu {
            MenuItem {
                text: qsTr("Über iBT")
                onClicked: pageStack.push(Qt.resolvedUrl("AboutPage.qml"))
            }
            MenuItem {
                text: qsTr("Heading kalibrieren (0°)")
                onClicked: { sensor.resetHeading(); showToast(qsTr("Heading = 0°")) }
            }
            MenuItem {
                text: qsTr("GPS: %1").arg(gpsEnabled ? (gpsValid ? qsTr("an (Fix)")
                            : qsTr("an (suche…)")) : qsTr("aus"))
                onClicked: setGps(!gpsEnabled)
            }
            MenuItem {
                text: qsTr("Koordinaten: %1").arg(coordsVisible ? qsTr("ein") : qsTr("aus"))
                onClicked: coordsVisible = !coordsVisible
            }
            MenuItem {
                text: qsTr("Hintergrundkarte (OSM): %1").arg(osmShow ? qsTr("an") : qsTr("aus"))
                onClicked: setOsm(!osmShow)
            }
            MenuItem {
                text: qsTr("Gerätetopologie (BLE-Links)")
                onClicked: pageStack.push(Qt.resolvedUrl("BtTopologyPage.qml"))
            }
            MenuItem {
                text: qsTr("Liste anzeigen")
                onClicked: pageStack.navigateForward()
            }
            MenuItem {
                text: bt.discovering ? qsTr("Scan stoppen") : qsTr("Scan starten")
                onClicked: bt.discovering ? bt.stop() : bt.start()
            }
        }

        PageHeader {
            id: hdr
            title: qsTr("iBT — Radar")
            description: bt.discovering ? qsTr("scannt… %1 Geräte").arg(bt.count)
                                        : qsTr("%1 Geräte").arg(bt.count)
        }

        Item {
            id: radar
            anchors { top: hdr.bottom; left: parent.left; right: parent.right
                      bottom: zoomSlider.top }
            clip: true   // rings/markers may extend past the short side
            property real cx: width / 2
            property real cy: height / 2
            property real inset: Theme.itemSizeSmall * 0.6
            // fill the LONG side: scale by the larger half-dimension
            property real rscale: Math.max(cx, cy) - inset

            // Two-finger pinch to zoom. Bottom-most child so it only catches
            // gestures on empty radar space; single taps on device pins (their own
            // MouseAreas, on top) still get through. Drives the zoomSlider, which
            // stays the single source of truth for radarPage.zoom.
            PinchArea {
                anchors.fill: parent
                pinch.target: null
                property real startZoom: 1.0
                onPinchStarted: startZoom = radarPage.zoom
                onPinchUpdated: {
                    var z = startZoom * pinch.scale
                    zoomSlider.value = Math.max(zoomSlider.minimumValue,
                                       Math.min(zoomSlider.maximumValue, z))
                }
            }

            // Persistent zoom-factor readout (always visible, also during a pinch).
            Label {
                anchors { top: parent.top; right: parent.right; margins: Theme.paddingMedium }
                z: 10
                text: radarPage.zoom.toFixed(1) + "×"
                font.pixelSize: Theme.fontSizeSmall
                font.bold: true
                color: Theme.highlightColor
            }

            // OSM silhouette background (streets/buildings outlines), behind rings
            Canvas {
                id: osmCanvas
                anchors.fill: parent
                visible: radarPage.osmVisible
                onPaint: {
                    var ctx = getContext("2d"); ctx.reset()
                    if (!radarPage.osmVisible) return
                    var ways = radarPage.osmWays; if (!ways.length) return
                    var ccx = radar.cx, ccy = radar.cy, rscale = radar.rscale
                    var dEff = radarPage.dEff, hh = radarPage.heading * Math.PI / 180
                    var clat = radarPage.osmLat, clon = radarPage.osmLon
                    var coslat = Math.cos(clat * Math.PI / 180)
                    function proj(la, lo) {
                        var north = (la - clat) * 111320
                        var east = (lo - clon) * 111320 * coslat
                        var theta = Math.atan2(east, north) - hh + Math.PI
                        var r = Math.sqrt(north * north + east * east) / dEff * rscale
                        return { x: ccx + Math.sin(theta) * r, y: ccy - Math.cos(theta) * r }
                    }
                    for (var i = 0; i < ways.length; ++i) {
                        var w = ways[i], pts = w.pts, j
                        ctx.beginPath()
                        for (j = 0; j < pts.length; ++j) {
                            var p = proj(pts[j].lat, pts[j].lon)
                            if (j === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y)
                        }
                        if (w.building) {
                            ctx.closePath()
                            ctx.fillStyle = Theme.rgba(Theme.secondaryColor, 0.07); ctx.fill()
                            ctx.strokeStyle = Theme.rgba(Theme.secondaryColor, 0.22); ctx.lineWidth = 1
                        } else {
                            ctx.strokeStyle = Theme.rgba(Theme.primaryColor, 0.28); ctx.lineWidth = 2
                        }
                        ctx.stroke()
                    }
                }
                Connections {
                    target: radarPage
                    onOsmWaysChanged: osmCanvas.requestPaint()
                    onOsmVisibleChanged: osmCanvas.requestPaint()
                }
                Timer { interval: 200; running: radarPage.osmVisible; repeat: true
                        onTriggered: osmCanvas.requestPaint() }
            }
            Label {
                visible: radarPage.osmVisible && radarPage.osmWays.length > 0
                anchors { left: parent.left; bottom: parent.bottom; margins: Theme.paddingSmall }
                font.pixelSize: Theme.fontSizeTiny
                color: Theme.rgba(Theme.secondaryColor, 0.7)
                text: "© OpenStreetMap"
            }

            // range rings (quarter/half/three-quarter/full of dEff)
            Repeater {
                model: 4
                Rectangle {
                    property real f: (index + 1) / 4
                    width: 2 * radar.rscale * f
                    height: width
                    radius: width / 2
                    x: radar.cx - width / 2
                    y: radar.cy - height / 2
                    color: "transparent"
                    border.color: Theme.rgba(Theme.primaryColor, 0.18)
                    border.width: 1
                }
            }
            // ring distance labels
            Repeater {
                model: 4
                Label {
                    property real f: (index + 1) / 4
                    text: (radarPage.dEff * f).toFixed(1) + " m"
                    font.pixelSize: Theme.fontSizeTiny
                    color: Theme.rgba(Theme.secondaryColor, 0.6)
                    x: radar.cx + 4
                    y: radar.cy - radar.rscale * f - height
                }
            }

            // centre = the phone
            Rectangle {
                width: Theme.paddingMedium; height: width; radius: width / 2
                x: radar.cx - width / 2; y: radar.cy - height / 2
                color: Theme.highlightColor
            }
            // device markers
            Repeater {
                model: bt.devices
                delegate: Item {
                    id: mk
                    property real theta: (radarPage.worldBearing(modelData)
                                          - radarPage.heading + 180) * Math.PI / 180
                    property real ux: Math.sin(theta)
                    property real uy: -Math.cos(theta)
                    property real dnorm: (modelData.distance > 0 && modelData.distance < 300)
                                         ? modelData.distance / radarPage.dEff : 1
                    property real rPix: radar.rscale * Math.min(1.0, dnorm)
                    property bool measured: devBearings[modelData.address] !== undefined
                    // clamp to the radar rectangle; off-screen → edge + arrow
                    property real halfW: radar.cx - radar.inset
                    property real halfH: radar.cy - radar.inset
                    property real tEdge: Math.min(
                            (Math.abs(ux) < 1e-4) ? 1e9 : halfW / Math.abs(ux),
                            (Math.abs(uy) < 1e-4) ? 1e9 : halfH / Math.abs(uy))
                    property bool onScreen: rPix <= tEdge
                    property real px: radar.cx + ux * (onScreen ? rPix : tEdge)
                    property real py: radar.cy + uy * (onScreen ? rPix : tEdge)

                    width: Theme.iconSizeSmall; height: width
                    x: px - width / 2
                    y: py - height / 2

                    Rectangle {
                        visible: mk.onScreen
                        anchors.fill: parent
                        radius: width / 2
                        color: mk.measured ? modelData.riskColor : "transparent"
                        opacity: 0.95
                        border.color: mk.measured ? "white" : modelData.riskColor
                        border.width: mk.measured ? 3 : 2
                    }
                    // off-screen: a direction arrow pointing toward the device
                    Label {
                        visible: !mk.onScreen
                        anchors.centerIn: parent
                        text: (modelData.isThreat || modelData.following) ? "☠" : "➤"
                        font.pixelSize: Theme.fontSizeLarge
                        font.bold: true
                        rotation: (modelData.isThreat || modelData.following) ? 0
                                  : Math.atan2(mk.uy, mk.ux) * 180 / Math.PI
                        color: modelData.isThreat ? (modelData.threatColor || "#F44336")
                               : modelData.following ? "#F44336"
                               : modelData.riskColor
                    }
                    Label {
                        visible: mk.onScreen
                        anchors.centerIn: parent
                        text: (modelData.isThreat || modelData.following) ? "☠"
                              : modelData.isTracker ? "🎯"
                              : modelData.isBeacon ? "📡"
                              : modelData.kind === "le" ? "LE"
                              : modelData.kind === "classic" ? "BR"
                              : modelData.kind === "dual" ? "L+B" : "?"
                        font.pixelSize: (modelData.isThreat || modelData.following)
                                        ? Theme.fontSizeMedium : Theme.fontSizeTiny
                        font.bold: true
                        // skull colour = attack kind; stalking tracker = red
                        color: modelData.isThreat ? (modelData.threatColor || "#F44336")
                               : modelData.following ? "#F44336"
                               : mk.measured ? "white" : modelData.riskColor
                    }
                    // red warning sign above the marker for attackers/threats
                    Label {
                        visible: modelData.isThreat || modelData.following
                        anchors { bottom: parent.top; horizontalCenter: parent.horizontalCenter }
                        text: "⚠"
                        color: "#F44336"
                        font.pixelSize: Theme.fontSizeMedium
                        font.bold: true
                    }
                    // tiny name under the marker — friendly name if we have a
                    // halfway-confident identification, else the MAC tail
                    Label {
                        anchors { top: parent.bottom; horizontalCenter: parent.horizontalCenter }
                        text: modelData.friendlyConfident
                              ? modelData.friendly
                              : "…" + ("" + modelData.address).slice(-5)
                        font.pixelSize: Theme.fontSizeTiny
                        color: modelData.friendlyConfident ? Theme.secondaryColor
                                                           : Theme.rgba(Theme.secondaryColor, 0.6)
                        font.italic: !modelData.friendlyConfident
                        width: Theme.itemSizeMedium * 1.2
                        horizontalAlignment: Text.AlignHCenter
                        wrapMode: Text.Wrap
                        maximumLineCount: 2
                        truncationMode: TruncationMode.Fade
                    }

                    MouseArea {
                        anchors.fill: parent
                        onClicked: {
                            pin(modelData)
                            pageStack.push(Qt.resolvedUrl("DevicePage.qml"),
                                           { dev: modelData })
                        }
                    }
                }
            }
        }

        Slider {
            id: zoomSlider
            anchors { bottom: legend.top; left: parent.left; right: parent.right }
            minimumValue: 0.1
            maximumValue: 8.0
            value: 1.0
            stepSize: 0.1
            label: qsTr("Zoom — raus für die Karte, rein für nahe Geräte")
            valueText: value.toFixed(1) + "×"
            onValueChanged: radarPage.zoom = value
        }

        Column {
            id: legend
            anchors { bottom: parent.bottom; left: parent.left; right: parent.right
                      margins: Theme.paddingSmall }
            spacing: 2

            Label {
                visible: gpsEnabled && coordsVisible
                width: parent.width
                horizontalAlignment: Text.AlignHCenter
                font.pixelSize: Theme.fontSizeTiny
                color: gpsValid ? Theme.highlightColor : "#FF9800"
                text: "📍 " + coordStr()
            }

            // colour key (circle colour = risk)
            Flow {
                width: parent.width
                spacing: Theme.paddingMedium
                Repeater {
                    model: [{ c: "#4CAF50", t: qsTr("unauffällig") },
                            { c: "#8BC34A", t: qsTr("ok") },
                            { c: "#FF9800", t: qsTr("schwach") },
                            { c: "#F44336", t: qsTr("kritisch") }]
                    Row {
                        spacing: 4
                        Rectangle {
                            width: Theme.fontSizeTiny; height: width; radius: width / 2
                            color: modelData.c
                            anchors.verticalCenter: parent.verticalCenter
                        }
                        Label {
                            text: modelData.t
                            font.pixelSize: Theme.fontSizeTiny
                            color: Theme.secondaryColor
                        }
                    }
                }
            }

            // symbol key
            Label {
                width: parent.width
                horizontalAlignment: Text.AlignHCenter
                wrapMode: Text.Wrap
                font.pixelSize: Theme.fontSizeTiny
                color: Theme.secondaryColor
                text: qsTr("🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/beides · "
                    + "voll = Richtung gemessen, hohl = vorläufig.\n"
                    + "☠ Angreifer (Farbe = Art): Flipper orange · WLAN-Tool gelb · "
                    + "O.MG lila · Sniffer cyan · Stalking/sonst rot.")
            }
        }
    }
}
