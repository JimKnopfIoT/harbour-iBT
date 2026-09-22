/*
  harbour-ibt — Bluetooth / BLE security & analysis tool for Sailfish OS
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
import QtQuick 2.2
import Sailfish.Silica 1.0

CoverBackground {

    Column {
        anchors.centerIn: parent
        visible: bt.available && bt.powered
        spacing: Theme.paddingSmall

        Label {
            anchors.horizontalCenter: parent.horizontalCenter
            font.bold: true
            font.pixelSize: Theme.fontSizeHuge
            text: bt.count
        }
        Label {
            anchors.horizontalCenter: parent.horizontalCenter
            text: qsTr("BT-Geräte")
            color: Theme.secondaryColor
        }
        Label {
            anchors.horizontalCenter: parent.horizontalCenter
            visible: bt.discovering
            text: qsTr("scannt…")
            font.pixelSize: Theme.fontSizeExtraSmall
            color: Theme.highlightColor
        }
    }

    Label {
        anchors.fill: parent
        anchors.margins: Theme.paddingMedium
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
        wrapMode: Text.Wrap
        visible: !bt.available || !bt.powered
        text: !bt.available ? qsTr("Kein BT-Adapter") : qsTr("Bitte Bluetooth einschalten")
    }

    CoverActionList {
        enabled: bt.available
        CoverAction {
            iconSource: bt.discovering ? "image://theme/icon-cover-pause"
                                       : "image://theme/icon-cover-play"
            onTriggered: bt.discovering ? bt.stop() : bt.start()
        }
    }
}
