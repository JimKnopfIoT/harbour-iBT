<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>AboutPage</name>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="17"/>
        <source>Über iBT</source>
        <translation>Despre iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="24"/>
        <source>iBT — passives Bluetooth-/BLE-Sicherheits- und Analyse-Tool.

Scannt über die BlueZ-Schnittstelle des Telefons nahe BT-/BLE-Geräte und liest nur frei gesendete Advertising-Daten: Name, MAC, RSSI, Hersteller, Dienste, Hersteller-/Service-Daten. Dekodiert Beacons (iBeacon/Eddystone/AltBeacon), erkennt Tracker (AirTag/SmartTag/Tile) und werbebasierte Angriffe (BLE-Spam-Fluten) und gibt eine passive Risiko-Einschätzung.

Strikt passiv: iBT liest nur, was Geräte ohnehin frei aussenden, und ruft diese Werte allein aus der lokalen BlueZ-Schnittstelle ab. Auch Dienste, Service-Daten und Kopplungs-/Verbindungs-Status werden nicht beim fremden Gerät erfragt, sondern nur lokal ausgelesen.

Über das übliche Link-Layer-Suchsignal hinaus — das jeder Bluetooth-Scan (auch die System-Einstellungen) nutzt, um Geräte in der Nähe zu finden — sendet iBT keine Informationen und fragt auch aktiv keine ab: keine Verbindung, kein GATT, kein Pairing. Kein Mitschnitt fremden Verkehrs, keine Angriffe, kein Logging, kein Export von Scan-Daten. Der Standort (optional) dient nur dem Zentrieren der Hintergrundkarte und wird nicht gespeichert.

Hinweis: BT-Adressen sind personenbezogene Daten — verantwortungsvoll und nur zur eigenen Lageeinschätzung nutzen.</source>
        <translation>iBT — instrument pasiv de securitate și analiză Bluetooth/BLE.

Scanează prin interfața BlueZ a telefonului dispozitivele BT-/BLE din apropiere și citește doar datele de advertising transmise liber: nume, MAC, RSSI, producător, servicii, date de producător/servicii. Decodează Beacon-uri (iBeacon/Eddystone/AltBeacon), recunoaște Tracker-e (AirTag/SmartTag/Tile) și atacuri bazate pe advertising (inundații de BLE-spam) și oferă o evaluare pasivă a riscului.

Strict pasiv: iBT citește doar ceea ce dispozitivele transmit oricum liber și obține aceste valori exclusiv din interfața locală BlueZ. Nici serviciile, datele serviciilor sau starea de împerechere/conectare nu sunt solicitate de la dispozitivul străin, ci sunt citite doar local.

Dincolo de semnalul obișnuit de căutare la nivel link-layer — pe care îl folosește orice scanare Bluetooth (inclusiv setările de sistem) pentru a găsi dispozitive din apropiere — iBT nu trimite nicio informație și nici nu solicită activ vreuna: fără conectare, fără GATT, fără împerechere. Fără interceptarea traficului străin, fără atacuri, fără logare, fără export de date de scanare. Locația (opțional) servește doar la centrarea hărții de fundal și nu este salvată.

Notă: adresele BT sunt date cu caracter personal — folosește-le responsabil și doar pentru propria evaluare a situației.</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="45"/>
        <source>Sprache</source>
        <translation>Limbă</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="48"/>
        <source>Sprache wählen</source>
        <translation>Alege limba</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="52"/>
        <source>Adapter</source>
        <translation>Adaptor</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="53"/>
        <source>Name</source>
        <translation>Nume</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="54"/>
        <source>Adresse</source>
        <translation>Adresă</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="56"/>
        <source>Status</source>
        <translation>Stare</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="57"/>
        <source>nicht gefunden</source>
        <translation>negăsit</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>an</source>
        <translation>pornit</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>aus</source>
        <translation>oprit</translation>
    </message>
</context>
<context>
    <name>BtTopologyPage</name>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="82"/>
        <source>Verknüpfungs-Ansicht</source>
        <translation>Vizualizare conexiuni</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="92"/>
        <source>Nur Eingabe-/Audio-/Wearable-Geräte in unmittelbarer Nähe (±12 dB). Das ist KEINE bestätigte Kopplung — die ist passiv nicht feststellbar. Hinweis: Maus/Tastatur/Pen, die bereits mit einem PC verbunden sind, advertisen meist nicht mehr und sind daher unsichtbar.</source>
        <translation>Doar dispozitive de intrare/audio/purtabile în imediata apropiere (±12 dB). Aceasta NU este o împerechere confirmată — ea nu poate fi stabilită pasiv. Notă: mouse/tastatură/stylus deja conectate la un PC de obicei nu mai fac advertising și de aceea sunt invizibile.</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="101"/>
        <source>Keine sichtbaren Begleiter</source>
        <translation>Niciun însoțitor vizibil</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="102"/>
        <source>Verbundene Eingabegeräte (Maus/Pen) sind im Betrieb nicht discoverable und daher passiv unsichtbar.</source>
        <translation>Dispozitivele de intrare conectate (mouse/stylus) nu sunt detectabile în timpul funcționării și de aceea sunt pasiv invizibile.</translation>
    </message>
</context>
<context>
    <name>CoverPage</name>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="23"/>
        <source>BT-Geräte</source>
        <translation>Dispozitive BT</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="29"/>
        <source>scannt…</source>
        <translation>scanează…</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Kein BT-Adapter</source>
        <translation>Niciun adaptor BT</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Te rog activează Bluetooth</translation>
    </message>
</context>
<context>
    <name>CveLookup</name>
    <message>
        <location filename="../src/cvelookup.cpp" line="45"/>
        <source>No device to search for</source>
        <translation>Niciun dispozitiv de căutat</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="60"/>
        <source>Searching EUVD for &quot;%1&quot;…</source>
        <translation>Se caută în EUVD după „%1”…</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="101"/>
        <source>Network error: %1</source>
        <translation>Eroare de rețea: %1</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="109"/>
        <source>Unexpected response from EUVD</source>
        <translation>Răspuns neașteptat de la EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="158"/>
        <source>No CVEs found in EUVD</source>
        <translation>Niciun CVE găsit în EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="159"/>
        <source>%1 CVE(s) — showing %2</source>
        <translation>%1 CVE — se afișează %2</translation>
    </message>
</context>
<context>
    <name>CvePage</name>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="54"/>
        <source>Known CVEs</source>
        <translation>CVE-uri cunoscute</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="60"/>
        <source>Vendor + model</source>
        <translation>Producător + model</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="79"/>
        <source>Also check (opens in browser):</source>
        <translation>Verifică și (se deschide în browser):</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="117"/>
        <source>Open on NVD</source>
        <translation>Deschide pe NVD</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="121"/>
        <source>Search Exploit-DB</source>
        <translation>Caută în Exploit-DB</translation>
    </message>
</context>
<context>
    <name>DevicePage</name>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="65"/>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <location filename="../qml/pages/DevicePage.qml" line="401"/>
        <source>ja</source>
        <translation>da</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="65"/>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <location filename="../qml/pages/DevicePage.qml" line="397"/>
        <location filename="../qml/pages/DevicePage.qml" line="401"/>
        <source>nein</source>
        <translation>nu</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="70"/>
        <location filename="../qml/pages/DevicePage.qml" line="226"/>
        <source>Name</source>
        <translation>Nume</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="71"/>
        <source>Name (BlueZ)</source>
        <translation>Nume (BlueZ)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="72"/>
        <location filename="../qml/pages/DevicePage.qml" line="227"/>
        <source>Alias</source>
        <translation>Alias</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="73"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="74"/>
        <location filename="../qml/pages/DevicePage.qml" line="249"/>
        <source>MAC-Privacy</source>
        <translation>Confidențialitate MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>Zufalls-MAC</source>
        <translation>MAC aleatoriu</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>statisch/öffentlich</source>
        <translation>static/public</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="76"/>
        <location filename="../qml/pages/DevicePage.qml" line="253"/>
        <source>Hersteller (OUI)</source>
        <translation>Producător (OUI)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="77"/>
        <source>Typ</source>
        <translation>Tip</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="78"/>
        <location filename="../qml/pages/DevicePage.qml" line="269"/>
        <source>BlueZ-Icon</source>
        <translation>Pictogramă BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="83"/>
        <source>Distanz</source>
        <translation>Distanță</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="85"/>
        <source>Richtung</source>
        <translation>Direcție</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="86"/>
        <source>Gekoppelt</source>
        <translation>Împerecheat</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="87"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <source>Gebondet</source>
        <translation>Legat (bonded)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="88"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <source>Verbunden</source>
        <translation>Conectat</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="89"/>
        <source>Vertraut</source>
        <translation>De încredere</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="90"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <source>Blockiert</source>
        <translation>Blocat</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="91"/>
        <location filename="../qml/pages/DevicePage.qml" line="396"/>
        <source>Legacy-Pairing</source>
        <translation>Împerechere Legacy</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="92"/>
        <location filename="../qml/pages/DevicePage.qml" line="400"/>
        <source>Dienste aufgelöst</source>
        <translation>Servicii rezolvate</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="93"/>
        <source>Risiko</source>
        <translation>Risc</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="97"/>
        <source>Tracker</source>
        <translation>Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="98"/>
        <source>Dienste/UUIDs</source>
        <translation>Servicii/UUID-uri</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="101"/>
        <location filename="../qml/pages/DevicePage.qml" line="468"/>
        <source>Hersteller-Daten</source>
        <translation>Date producător</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="109"/>
        <location filename="../qml/pages/DevicePage.qml" line="499"/>
        <source>Service-Daten</source>
        <translation>Date serviciu</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="121"/>
        <source>In die Zwischenablage kopiert</source>
        <translation>Copiat în clipboard</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="130"/>
        <source>In Zwischenablage kopieren</source>
        <translation>Copiază în clipboard</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="134"/>
        <source>Verknüpfungs-Ansicht (Begleitgeräte)</source>
        <translation>Vizualizare conexiuni (dispozitive însoțitoare)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="138"/>
        <source>Richtung hier setzen (zeigt zum Gerät)</source>
        <translation>Setează direcția aici (indică spre dispozitiv)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="141"/>
        <source>Richtung gespeichert: %1°</source>
        <translation>Direcție salvată: %1°</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="146"/>
        <source>Gerät aus BlueZ entfernen</source>
        <translation>Elimină dispozitivul din BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="148"/>
        <source>Entfernt</source>
        <translation>Eliminat</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="149"/>
        <source>Entfernen fehlgeschlagen</source>
        <translation>Eliminare eșuată</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="182"/>
        <source>Mögliches Hacker-Gadget: %1</source>
        <translation>Posibil gadget de hacker: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="208"/>
        <source>Risiko: %1</source>
        <translation>Risc: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="225"/>
        <source>Identität</source>
        <translation>Identitate</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="235"/>
        <source>Adresse (MAC)</source>
        <translation>Adresă (MAC)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="247"/>
        <source>Adress-Typ</source>
        <translation>Tip adresă</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="250"/>
        <source>Zufalls-MAC (gut)</source>
        <translation>MAC aleatoriu (bine)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="251"/>
        <source>statisch/öffentlich (trackbar)</source>
        <translation>static/public (urmăribil)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="255"/>
        <source>Geräte-Typ (erkannt)</source>
        <translation>Tip dispozitiv (recunoscut)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="259"/>
        <source>Identität (vermutet)</source>
        <translation>Identitate (presupusă)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="268"/>
        <source>Funk-Typ</source>
        <translation>Tip radio</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="271"/>
        <source>Class of Device</source>
        <translation>Class of Device</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="279"/>
        <source>Appearance</source>
        <translation>Appearance</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="286"/>
        <source>Signal &amp; Distanz</source>
        <translation>Semnal și distanță</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="288"/>
        <source>RSSI</source>
        <translation>RSSI</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="292"/>
        <source>TxPower (1 m)</source>
        <translation>TxPower (1 m)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="296"/>
        <source>Distanz (grob)</source>
        <translation>Distanță (aproximativ)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="300"/>
        <source>Gemessene Richtung</source>
        <translation>Direcție măsurată</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="303"/>
        <source>— (Pulldown: hier setzen)</source>
        <translation>— (trage în jos: setează aici)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="307"/>
        <source>Verlauf &amp; Ortung</source>
        <translation>Istoric și localizare</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="308"/>
        <source>Sichtungen</source>
        <translation>Observări</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="309"/>
        <source>Beobachtet seit</source>
        <translation>Observat din</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="327"/>
        <source>⚠ Stalking-Verdacht: Dieser Tracker läuft seit %1 mit. Bewege dich an einen anderen Ort — bleibt er dabei, ist er vermutlich bei dir/an deinen Sachen.</source>
        <translation>⚠ Suspiciune de urmărire: acest Tracker te însoțește de %1. Mută-te în alt loc — dacă rămâne, probabil este la tine/pe lucrurile tale.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="341"/>
        <source>RSSI-Verlauf — oben weit/rot, unten nah/grün (zum Orten gehen)</source>
        <translation>Istoric RSSI — sus departe/roșu, jos aproape/verde (mergi să localizezi)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="389"/>
        <source>Status</source>
        <translation>Stare</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <source>Gekoppelt (paired)</source>
        <translation>Împerecheat (paired)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <source>Vertraut (trusted)</source>
        <translation>De încredere (trusted)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="397"/>
        <source>ja (schwächer)</source>
        <translation>da (mai slab)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="410"/>
        <source>Beacon</source>
        <translation>Beacon</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="428"/>
        <source>Tracker-Warnung</source>
        <translation>Avertisment Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="434"/>
        <source>Wenn dieses Gerät dir an wechselnden Orten folgt, könnte es zum Tracking/Stalking genutzt werden.</source>
        <translation>Dacă acest dispozitiv te urmează în locuri diferite, ar putea fi folosit pentru urmărire/hărțuire.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="443"/>
        <source>Dienste / GATT-UUIDs (%1)</source>
        <translation>Servicii / GATT-UUID-uri (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="527"/>
        <source>Mögliche Peripherie in der Nähe (%1)</source>
        <translation>Posibilă periferie în apropiere (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="536"/>
        <source>Eingabegeräte (Maus/Tastatur/Pen) in Funkreichweite. Ob sie wirklich mit DIESEM Gerät gekoppelt sind, ist passiv NICHT feststellbar (privates Piconet) — hier nur als naheliegende Kandidaten in der Nähe.</source>
        <translation>Dispozitive de intrare (mouse/tastatură/stylus) în raza radio. Dacă sunt cu adevărat împerecheate cu ACEST dispozitiv, pasiv NU se poate stabili (piconet privat) — aici doar drept candidați probabili din apropiere.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="571"/>
        <source>CVEs für dieses Gerät suchen</source>
        <translation>Caută CVE-uri pentru acest dispozitiv</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="576"/>
        <source>Intern</source>
        <translation>Intern</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="577"/>
        <source>D-Bus-Pfad</source>
        <translation>Cale D-Bus</translation>
    </message>
</context>
<context>
    <name>LanguagePage</name>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="22"/>
        <source>Sprache</source>
        <translation>Limbă</translation>
    </message>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="31"/>
        <source>Wirkt beim nächsten Start der App. Nur Deutsch und Englisch sind geprüft; die übrigen Sprachen sind maschinell übersetzt. Englisch ist hier immer verfügbar.</source>
        <translation>Se aplică la următoarea pornire a aplicației. Doar germana și engleza sunt verificate; celelalte limbi sunt traduse automat. Engleza este întotdeauna disponibilă aici.</translation>
    </message>
</context>
<context>
    <name>LanguageSettings</name>
    <message>
        <location filename="../src/languagesettings.cpp" line="85"/>
        <source>System language</source>
        <translation>Limba sistemului</translation>
    </message>
</context>
<context>
    <name>ListPage</name>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="35"/>
        <source>⚠ Kamera-Brille: %1 (%2)</source>
        <translation>⚠ Ochelari cu cameră: %1 (%2)</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="61"/>
        <source>Über iBT</source>
        <translation>Despre iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="65"/>
        <source>Liste leeren</source>
        <translation>Golește lista</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan stoppen</source>
        <translation>Oprește scanarea</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan starten</source>
        <translation>Pornește scanarea</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="77"/>
        <source>Geräte</source>
        <translation>Dispozitive</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="78"/>
        <source>scannt… %1</source>
        <translation>scanează… %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="87"/>
        <source>Noch nichts gefunden</source>
        <translation>Încă nimic găsit</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="88"/>
        <source>Bluetooth ist aus</source>
        <translation>Bluetooth este oprit</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="89"/>
        <source>Scan läuft — Geräte tauchen gleich auf</source>
        <translation>Scanare în curs — dispozitivele apar imediat</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="90"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Te rog activează Bluetooth</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="151"/>
        <source>Zufalls-MAC</source>
        <translation>MAC aleatoriu</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="172"/>
        <source>⚠ Kamera-Brille: %1 · Konfidenz %2</source>
        <translation>⚠ Ochelari cu cameră: %1 · încredere %2</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>verbunden</source>
        <translation>conectat</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>gekoppelt</source>
        <translation>împerecheat</translation>
    </message>
</context>
<context>
    <name>OsmFetch</name>
    <message>
        <location filename="../src/osmfetch.cpp" line="57"/>
        <source>Loading map…</source>
        <translation>Se încarcă harta…</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="66"/>
        <source>Map unavailable (no Overpass mirror reachable)</source>
        <translation>Hartă indisponibilă (niciun mirror Overpass accesibil)</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="127"/>
        <source>No map data here</source>
        <translation>Nu există date de hartă aici</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="128"/>
        <source>Map loaded (%1 ways)</source>
        <translation>Hartă încărcată (%1 căi)</translation>
    </message>
</context>
<context>
    <name>RadarPage</name>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="59"/>
        <source>Hintergrundkarte an (braucht GPS-Fix)</source>
        <translation>Hartă de fundal pornită (necesită GPS-fix)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="60"/>
        <source>Hintergrundkarte aus</source>
        <translation>Hartă de fundal oprită</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="98"/>
        <source>Über iBT</source>
        <translation>Despre iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="102"/>
        <source>Heading kalibrieren (0°)</source>
        <translation>Calibrează direcția (0°)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="103"/>
        <source>Heading = 0°</source>
        <translation>Direcție = 0°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>GPS: %1</source>
        <translation>GPS: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>an (Fix)</source>
        <translation>pornit (fix)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <source>an (suche…)</source>
        <translation>pornit (caută…)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>aus</source>
        <translation>oprit</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>Koordinaten: %1</source>
        <translation>Coordonate: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>ein</source>
        <translation>pornit</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>Hintergrundkarte (OSM): %1</source>
        <translation>Hartă de fundal (OSM): %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>an</source>
        <translation>pornit</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="119"/>
        <source>Gerätetopologie (BLE-Links)</source>
        <translation>Topologia dispozitivelor (BLE-linkuri)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="123"/>
        <source>Liste anzeigen</source>
        <translation>Afișează lista</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan stoppen</source>
        <translation>Oprește scanarea</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan starten</source>
        <translation>Pornește scanarea</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="141"/>
        <source>iBT — Radar</source>
        <translation>iBT — Radar</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="149"/>
        <source>scannt… %1 Geräte</source>
        <translation>scanează… %1 dispozitive</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="150"/>
        <source>%1 Geräte</source>
        <translation>%1 dispozitive</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="151"/>
        <source>Rand %1 m · %2× · %3°</source>
        <translation>Margine %1 m · %2× · %3°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="393"/>
        <source>Zoom — raus für die Karte, rein für nahe Geräte</source>
        <translation>Zoom — depărtează pentru hartă, apropie pentru dispozitivele din apropiere</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="418"/>
        <source>unauffällig</source>
        <translation>discret</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="419"/>
        <source>ok</source>
        <translation>ok</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="420"/>
        <source>schwach</source>
        <translation>slab</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="421"/>
        <source>kritisch</source>
        <translation>critic</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="445"/>
        <source>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/beides · voll = Richtung gemessen, hohl = vorläufig.
☠ Angreifer (Farbe = Art): Flipper orange · WLAN-Tool gelb · O.MG lila · Sniffer cyan · Stalking/sonst rot.</source>
        <translation>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/ambele · plin = direcție măsurată, gol = provizoriu.
☠ Atacator (culoare = tip): Flipper portocaliu · unealtă WLAN galben · O.MG mov · Sniffer cyan · urmărire/altele roșu.</translation>
    </message>
</context>
<context>
    <name>harbour-ibt</name>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="44"/>
        <source>unauffällig</source>
        <translation>discret</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="45"/>
        <source>ok</source>
        <translation>ok</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="46"/>
        <source>schwach</source>
        <translation>slab</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="47"/>
        <source>kritisch</source>
        <translation>critic</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="73"/>
        <source>GPS an — nur zum Zentrieren der Hintergrundkarte</source>
        <translation>GPS pornit — doar pentru centrarea hărții de fundal</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="74"/>
        <source>GPS aus</source>
        <translation>GPS oprit</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="94"/>
        <source>kein Fix</source>
        <translation>fără fix</translation>
    </message>
</context>
</TS>
