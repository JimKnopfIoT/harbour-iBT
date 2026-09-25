# iBT — passive Bluetooth / BLE security & analysis tool for Sailfish OS
#
# TARGET == the QML entry filename, the .desktop name and the icon name.

TARGET = harbour-ibt

CONFIG += sailfishapp sailfishapp_i18n

QT += sensors dbus network

HEADERS += \
    src/btbackend.h \
    src/sensorreader.h \
    src/battery.h \
    src/cvelookup.h \
    src/osmfetch.h \
    src/languagesettings.h

SOURCES += \
    src/harbour-ibt.cpp \
    src/btbackend.cpp \
    src/sensorreader.cpp \
    src/battery.cpp \
    src/cvelookup.cpp \
    src/osmfetch.cpp \
    src/languagesettings.cpp

# Bundled MAC-vendor (OUI) database, derived from Wireshark 'manuf' (GPLv2)
oui.files = data/oui.tsv
oui.path = /usr/share/$${TARGET}
INSTALLS += oui

OTHER_FILES += \
    qml/harbour-ibt.qml \
    qml/cover/CoverPage.qml \
    qml/pages/RadarPage.qml \
    qml/pages/ListPage.qml \
    qml/pages/RuckZuck.js \
    qml/images/ruckzuck.svg \
    qml/images/ruckzuck-alarm.svg \
    qml/pages/DevicePage.qml \
    qml/pages/BtTopologyPage.qml \
    qml/pages/CvePage.qml \
    qml/pages/AboutPage.qml \
    qml/pages/LanguagePage.qml \
    qml/pages/WrapButton.qml \
    rpm/harbour-ibt.spec \
    harbour-ibt.desktop

SAILFISHAPP_ICONS = 86x86 108x108 128x128 172x172 256x256

# Source strings live in the code (mostly German, some English); the files below
# carry the catalogues. libsailfishapp loads the .qm matching the device locale
# and falls back to the source strings where a catalogue has none. `de` and `en`
# get their own file too: `de` normalises the few English source strings, and the
# in-app picker can only override the device locale with a real .qm — English
# included. German and English are reviewed; the rest is machine output. Review
# state per language is in translations/STATUS.md.
TRANSLATIONS += \
    translations/harbour-ibt-ar.ts \
    translations/harbour-ibt-bg.ts \
    translations/harbour-ibt-cs.ts \
    translations/harbour-ibt-da.ts \
    translations/harbour-ibt-de.ts \
    translations/harbour-ibt-el.ts \
    translations/harbour-ibt-en.ts \
    translations/harbour-ibt-es.ts \
    translations/harbour-ibt-et.ts \
    translations/harbour-ibt-fa.ts \
    translations/harbour-ibt-fi.ts \
    translations/harbour-ibt-fr.ts \
    translations/harbour-ibt-ga.ts \
    translations/harbour-ibt-hi.ts \
    translations/harbour-ibt-hr.ts \
    translations/harbour-ibt-hu.ts \
    translations/harbour-ibt-is.ts \
    translations/harbour-ibt-it.ts \
    translations/harbour-ibt-ja.ts \
    translations/harbour-ibt-lt.ts \
    translations/harbour-ibt-lv.ts \
    translations/harbour-ibt-mt.ts \
    translations/harbour-ibt-nb.ts \
    translations/harbour-ibt-nl.ts \
    translations/harbour-ibt-pl.ts \
    translations/harbour-ibt-pt.ts \
    translations/harbour-ibt-ro.ts \
    translations/harbour-ibt-ru.ts \
    translations/harbour-ibt-sk.ts \
    translations/harbour-ibt-sl.ts \
    translations/harbour-ibt-sv.ts \
    translations/harbour-ibt-zh_CN.ts \

# lupdate scans these for qsTr()/tr(); listing them here keeps the .qml out of the
# compile while still feeding the string extractor.
lupdate_only {
    SOURCES += qml/*.qml qml/cover/*.qml qml/pages/*.qml
}
