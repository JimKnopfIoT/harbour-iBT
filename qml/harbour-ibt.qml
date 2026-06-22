/*
  harbour-ibt — passive Bluetooth / BLE security & analysis tool for Sailfish OS
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0
import QtPositioning 5.0

import "pages"

ApplicationWindow {
    id: rootApp

    allowedOrientations: defaultAllowedOrientations
    _defaultPageOrientations: defaultAllowedOrientations

    initialPage: Qt.resolvedUrl("pages/RadarPage.qml")
    cover: Qt.resolvedUrl("cover/CoverPage.qml")

    // ---- measured bearings per device (filled by the radar direction finder) ----
    property var devBearings: ({})
    function setBearing(addr, deg) {
        var m = devBearings
        m[addr] = deg
        devBearings = m
    }

    // ---- pinned devices: keep a tapped device on the radar even if it drops out
    //      of the live scan for a poll cycle. (in-memory only, nothing persisted) ----
    property var pinned: ({})
    function pin(dev) {
        var m = pinned
        m[dev.address] = dev
        pinned = m
    }

    function riskColor(r) {
        if (r === "good") return "#4CAF50"
        if (r === "ok")   return "#8BC34A"
        if (r === "weak") return "#FF9800"
        return "#F44336"
    }
    function riskLabel(r) {
        if (r === "good") return qsTr("unauffällig")
        if (r === "ok")   return qsTr("ok")
        if (r === "weak") return qsTr("schwach")
        return qsTr("kritisch")
    }
    function kindLabel(k) {
        if (k === "le")      return "BLE"
        if (k === "classic") return "BT-Classic"
        if (k === "dual")    return "Dual (LE+Classic)"
        return k
    }

    // ---- toast ----
    property string toastMsg: ""
    function showToast(m) { toastMsg = m; toastTimer.restart() }
    Timer { id: toastTimer; interval: 4000; onTriggered: rootApp.toastMsg = "" }

    // --- GPS (opt-in; off by default for privacy + power; off in background) ---
    // Used only to centre the live OpenStreetMap background under the radar. The
    // position is never stored, tagged onto findings, or sent anywhere.
    property bool gpsEnabled: false
    property bool coordsVisible: false   // start with coordinates hidden
    property real gpsLat: 0
    property real gpsLon: 0
    property real gpsAcc: -1
    property bool gpsValid: false
    function setGps(on) {
        gpsEnabled = on
        if (!on) gpsValid = false
        showToast(on ? qsTr("GPS an — nur zum Zentrieren der Hintergrundkarte")
                     : qsTr("GPS aus"))
    }
    PositionSource {
        id: gps
        active: rootApp.gpsEnabled
        preferredPositioningMethods: PositionSource.SatellitePositioningMethods
        updateInterval: 1000
        onPositionChanged: {
            if (position.latitudeValid && position.longitudeValid) {
                rootApp.gpsLat = position.coordinate.latitude
                rootApp.gpsLon = position.coordinate.longitude
                rootApp.gpsAcc = position.horizontalAccuracyValid
                               ? position.horizontalAccuracy : -1
                rootApp.gpsValid = true
            }
        }
    }
    function coordStr() {
        return gpsValid ? (gpsLat.toFixed(6) + ", " + gpsLon.toFixed(6)
                           + (gpsAcc >= 0 ? "  ±" + Math.round(gpsAcc) + "m" : ""))
                        : qsTr("kein Fix")
    }

    Component.onCompleted: {
        bt.start()
    }

    Connections {
        target: Qt.application
        onStateChanged: {
            if (Qt.application.state === Qt.ApplicationActive) {
                bt.start()
                sensor.start()
            } else {
                bt.stop()
                sensor.stop()
                gpsEnabled = false   // don't leave GPS running in the background
                gpsValid = false
            }
        }
    }

    // ---- global attack alert banner (BLE spam/flood detected on-device) ----
    Rectangle {
        z: 1100
        visible: bt.attackAlert.length > 0
        anchors { left: parent.left; right: parent.right; top: parent.top }
        height: alertCol.height + 2 * Theme.paddingMedium
        color: Theme.rgba("#F44336", 0.96)
        Column {
            id: alertCol
            anchors { left: parent.left; right: parent.right
                      verticalCenter: parent.verticalCenter
                      leftMargin: Theme.horizontalPageMargin
                      rightMargin: Theme.horizontalPageMargin }
            spacing: 2
            Label {
                text: "⚠ " + bt.attackAlert
                font.bold: true; color: "white"
                font.pixelSize: Theme.fontSizeSmall
            }
            Label {
                width: parent.width; wrapMode: Text.Wrap
                text: bt.attackInfo
                color: "white"; font.pixelSize: Theme.fontSizeExtraSmall
            }
        }
        MouseArea { anchors.fill: parent; onClicked: {} }
    }

    // ---- toast overlay ----
    Rectangle {
        z: 1000
        visible: rootApp.toastMsg.length > 0
        anchors { left: parent.left; right: parent.right; bottom: parent.bottom }
        height: toastLbl.height + 2 * Theme.paddingLarge
        color: Theme.rgba(Theme.highlightDimmerColor, 0.95)
        Label {
            id: toastLbl
            anchors { left: parent.left; right: parent.right
                      verticalCenter: parent.verticalCenter
                      leftMargin: Theme.horizontalPageMargin
                      rightMargin: Theme.horizontalPageMargin }
            wrapMode: Text.WrapAnywhere
            font.pixelSize: Theme.fontSizeExtraSmall
            color: Theme.highlightColor
            text: rootApp.toastMsg
        }
        MouseArea { anchors.fill: parent; onClicked: rootApp.toastMsg = "" }
    }

    // ---- persistent battery indicator (top-left, every page) ----
    Row {
        id: batteryIndicator
        z: 1000
        spacing: Theme.paddingSmall / 2
        anchors { left: parent.left; top: parent.top
                  leftMargin: Theme.paddingMedium; topMargin: Theme.paddingSmall }
        property int lvl: battery.level
        property color lvlColor: lvl < 0 ? Theme.rgba(Theme.primaryColor, 0.4)
                               : lvl <= 10 ? "#F44336"
                               : lvl <= 30 ? "#FF9800"
                               : lvl <= 50 ? "#FFD700" : "#4CAF50"
        Item {
            width: Theme.iconSizeSmall * 0.9; height: Theme.iconSizeSmall * 0.5
            anchors.verticalCenter: parent.verticalCenter
            Rectangle {
                id: batBody; anchors.fill: parent; radius: 2; color: "transparent"
                border.color: Theme.rgba(Theme.primaryColor, 0.7); border.width: 1
            }
            Rectangle {
                anchors { left: batBody.left; top: batBody.top; bottom: batBody.bottom; margins: 2 }
                width: Math.max(1, (batBody.width - 4)
                       * (batteryIndicator.lvl < 0 ? 0 : batteryIndicator.lvl / 100))
                radius: 1; color: batteryIndicator.lvlColor
            }
            Rectangle {
                anchors { left: batBody.right; verticalCenter: batBody.verticalCenter }
                width: 2; height: parent.height * 0.4
                color: Theme.rgba(Theme.primaryColor, 0.7)
            }
        }
        Label {
            anchors.verticalCenter: parent.verticalCenter
            text: batteryIndicator.lvl < 0 ? "—" : batteryIndicator.lvl + "%"
            font.pixelSize: Theme.fontSizeExtraSmall
            color: batteryIndicator.lvlColor
        }
    }
}
