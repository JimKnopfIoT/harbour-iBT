/*
  harbour-ibt — device list. Swiped to from the radar; tap a device for full detail.
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0

Page {
    id: listPage
    allowedOrientations: Orientation.All

    // Snapshot model: after any interaction the list is frozen for 5 s so live
    // scan updates never reset the scroll position while the user reads/scrolls.
    property var listModel: []
    Component.onCompleted: listModel = bt.devices
    Timer { id: freeze; interval: 5000; onTriggered: listPage.listModel = bt.devices }
    Connections {
        target: bt
        onUpdated: if (!freeze.running) listPage.listModel = bt.devices
    }

    SilicaListView {
        id: lv
        anchors.fill: parent
        onMovementStarted: freeze.restart()
        onFlickStarted: freeze.restart()
        onMovementEnded: freeze.restart()   // begin the 5 s idle countdown

        PullDownMenu {
            MenuItem {
                text: qsTr("Über iBT")
                onClicked: pageStack.push(Qt.resolvedUrl("AboutPage.qml"))
            }
            MenuItem {
                text: qsTr("Liste leeren")
                onClicked: bt.clear()
            }
            MenuItem {
                text: bt.discovering ? qsTr("Scan stoppen") : qsTr("Scan starten")
                onClicked: bt.discovering ? bt.stop() : bt.start()
            }
        }

        header: Column {
            width: lv.width
            PageHeader {
                title: qsTr("Geräte") + " (" + bt.count + ")"
                description: bt.discovering ? qsTr("scannt… %1").arg(bt.adapterName)
                                            : bt.adapterName
            }
        }

        model: listPage.listModel

        ViewPlaceholder {
            enabled: bt.count === 0
            text: bt.powered ? qsTr("Noch nichts gefunden")
                             : qsTr("Bluetooth ist aus")
            hintText: bt.powered ? qsTr("Scan läuft — Geräte tauchen gleich auf")
                                 : qsTr("Bitte Bluetooth einschalten")
        }

        delegate: BackgroundItem {
            id: item
            height: Theme.itemSizeMedium

            // RSSI bar
            Rectangle {
                id: bar
                anchors { left: parent.left; verticalCenter: parent.verticalCenter }
                width: Theme.paddingSmall
                height: parent.height * 0.7
                radius: 2
                color: modelData.riskColor
                opacity: modelData.hasRssi ? 0.4 + 0.6 * (modelData.signalPct / 100) : 0.25
            }

            Column {
                anchors {
                    left: bar.right; leftMargin: Theme.paddingMedium
                    right: rssiCol.left; rightMargin: Theme.paddingMedium
                    verticalCenter: parent.verticalCenter
                }
                Row {
                    spacing: Theme.paddingSmall
                    Label {
                        text: (modelData.isThreat ? "⚠☠ " : "")
                              + (modelData.audioVuln ? "⚠ " : "")
                              + (modelData.following ? "⚠ " : "")
                              + (modelData.isTracker ? "🎯 " : modelData.isBeacon ? "📡 " : "")
                              + (modelData.friendlyConfident ? modelData.friendly
                                                             : modelData.displayName)
                        color: modelData.isThreat ? (modelData.threatColor || "#F44336")
                               : modelData.following ? "#F44336"
                               : (item.highlighted ? Theme.highlightColor : Theme.primaryColor)
                        font.pixelSize: Theme.fontSizeMedium
                        truncationMode: TruncationMode.Fade
                        width: Math.min(implicitWidth, item.width / 1.7)
                    }
                }
                Label {
                    text: {
                        var parts = [modelData.address]
                        if (modelData.vendor) parts.push(modelData.vendor)
                        else if (modelData.randomAddr) parts.push(qsTr("Zufalls-MAC"))
                        parts.push(kindLabel(modelData.kind))
                        return parts.join("  ·  ")
                    }
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: Theme.secondaryColor
                    truncationMode: TruncationMode.Fade
                    width: parent.width
                }
                Label {
                    visible: modelData.isTracker || modelData.isBeacon
                    text: modelData.isTracker ? modelData.tracker
                                              : ("" + modelData.beacon).split("\n")[0]
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: modelData.following ? "#F44336" : Theme.highlightColor
                    truncationMode: TruncationMode.Fade
                    width: parent.width
                }
            }

            Column {
                id: rssiCol
                anchors { right: parent.right; rightMargin: Theme.horizontalPageMargin
                          verticalCenter: parent.verticalCenter }
                width: Theme.itemSizeSmall * 1.3
                Label {
                    anchors.right: parent.right
                    text: modelData.hasRssi ? (modelData.rssi + " dBm") : "—"
                    font.pixelSize: Theme.fontSizeSmall
                    color: modelData.riskColor
                }
                Label {
                    anchors.right: parent.right
                    visible: modelData.distance >= 0
                    text: "~" + modelData.distance.toFixed(1) + " m"
                    font.pixelSize: Theme.fontSizeExtraSmall
                    color: Theme.secondaryColor
                }
                Label {
                    anchors.right: parent.right
                    visible: modelData.connected || modelData.paired
                    text: modelData.connected ? qsTr("verbunden") : qsTr("gekoppelt")
                    font.pixelSize: Theme.fontSizeTiny
                    color: Theme.secondaryHighlightColor
                }
            }

            onClicked: pageStack.push(Qt.resolvedUrl("DevicePage.qml"),
                                      { dev: modelData })
        }

        VerticalScrollDecorator {}
    }
}
