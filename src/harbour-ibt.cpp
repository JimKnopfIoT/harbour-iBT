/*
  harbour-ibt — passive Bluetooth / BLE security & analysis tool for Sailfish OS
  Copyright (C) JimKnopfIoT — GPLv3 or later.
*/
#ifdef QT_QML_DEBUG
#include <QtQuick>
#endif

#include <QGuiApplication>
#include <QQmlContext>
#include <QQuickView>
#include <QScopedPointer>

#include <sailfishapp.h>

#include "btbackend.h"
#include "sensorreader.h"
#include "battery.h"
#include "cvelookup.h"
#include "osmfetch.h"
#include "languagesettings.h"

int main(int argc, char *argv[])
{
    QScopedPointer<QGuiApplication> application(SailfishApp::application(argc, argv));
    QScopedPointer<QQuickView> view(SailfishApp::createView());

    // After createView(): it has installed libsailfishapp's device-locale
    // translator, and the translator installed last is consulted first. A UI
    // language chosen in the app must win over the device, so it goes on now.
    LanguageSettings language;
    LanguageSettings::applyTo(application.data());
    view->rootContext()->setContextProperty("language", &language);

    QScopedPointer<BtBackend> bt(new BtBackend(view.data()));
    view->rootContext()->setContextProperty("bt", bt.data());

    QScopedPointer<SensorReader> sensor(new SensorReader(view.data()));
    view->rootContext()->setContextProperty("sensor", sensor.data());

    QScopedPointer<Battery> battery(new Battery(view.data()));
    view->rootContext()->setContextProperty("battery", battery.data());

    QScopedPointer<CveLookup> cve(new CveLookup(view.data()));
    view->rootContext()->setContextProperty("cve", cve.data());

    QScopedPointer<OsmFetch> osm(new OsmFetch(view.data()));
    view->rootContext()->setContextProperty("osm", osm.data());

    view->setSource(SailfishApp::pathTo("qml/harbour-ibt.qml"));
    view->show();

    return application->exec();
}
