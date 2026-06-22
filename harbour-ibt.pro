# iBT — passive Bluetooth / BLE security & analysis tool for Sailfish OS
#
# TARGET == the QML entry filename, the .desktop name and the icon name.

TARGET = harbour-ibt

CONFIG += sailfishapp

QT += sensors dbus network

HEADERS += \
    src/btbackend.h \
    src/sensorreader.h \
    src/battery.h \
    src/cvelookup.h \
    src/osmfetch.h

SOURCES += \
    src/harbour-ibt.cpp \
    src/btbackend.cpp \
    src/sensorreader.cpp \
    src/battery.cpp \
    src/cvelookup.cpp \
    src/osmfetch.cpp

# Bundled MAC-vendor (OUI) database, derived from Wireshark 'manuf' (GPLv2)
oui.files = data/oui.tsv
oui.path = /usr/share/$${TARGET}
INSTALLS += oui

OTHER_FILES += \
    qml/harbour-ibt.qml \
    qml/cover/CoverPage.qml \
    qml/pages/RadarPage.qml \
    qml/pages/ListPage.qml \
    qml/pages/DevicePage.qml \
    qml/pages/BtTopologyPage.qml \
    qml/pages/CvePage.qml \
    qml/pages/AboutPage.qml \
    rpm/harbour-ibt.spec \
    harbour-ibt.desktop

SAILFISHAPP_ICONS = 86x86 108x108 128x128 172x172 256x256
