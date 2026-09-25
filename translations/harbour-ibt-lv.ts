<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>AboutPage</name>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="17"/>
        <source>Über iBT</source>
        <translation>Par iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="24"/>
        <source>iBT — passives Bluetooth-/BLE-Sicherheits- und Analyse-Tool.

Scannt über die BlueZ-Schnittstelle des Telefons nahe BT-/BLE-Geräte und liest nur frei gesendete Advertising-Daten: Name, MAC, RSSI, Hersteller, Dienste, Hersteller-/Service-Daten. Dekodiert Beacons (iBeacon/Eddystone/AltBeacon), erkennt Tracker (AirTag/SmartTag/Tile) und werbebasierte Angriffe (BLE-Spam-Fluten) und gibt eine passive Risiko-Einschätzung.

Strikt passiv: iBT liest nur, was Geräte ohnehin frei aussenden, und ruft diese Werte allein aus der lokalen BlueZ-Schnittstelle ab. Auch Dienste, Service-Daten und Kopplungs-/Verbindungs-Status werden nicht beim fremden Gerät erfragt, sondern nur lokal ausgelesen.

Über das übliche Link-Layer-Suchsignal hinaus — das jeder Bluetooth-Scan (auch die System-Einstellungen) nutzt, um Geräte in der Nähe zu finden — sendet iBT keine Informationen und fragt auch aktiv keine ab: keine Verbindung, kein GATT, kein Pairing. Kein Mitschnitt fremden Verkehrs, keine Angriffe, kein Logging, kein Export von Scan-Daten. Der Standort (optional) dient nur dem Zentrieren der Hintergrundkarte und wird nicht gespeichert.

Hinweis: BT-Adressen sind personenbezogene Daten — verantwortungsvoll und nur zur eigenen Lageeinschätzung nutzen.</source>
        <translation>iBT — pasīvs Bluetooth / BLE drošības un analīzes rīks.

Caur tālruņa BlueZ saskarni skenē tuvumā esošās BT / BLE ierīces un nolasa tikai brīvi raidītos advertising datus: nosaukumu, MAC, RSSI, ražotāju, pakalpojumus, ražotāja / pakalpojumu datus. Dekodē Beacon signālus (iBeacon/Eddystone/AltBeacon), atpazīst Tracker ierīces (AirTag/SmartTag/Tile) un uz reklāmu balstītus uzbrukumus (BLE mēstuļu plūdus) un sniedz pasīvu riska novērtējumu.

Stingri pasīvs: iBT nolasa tikai to, ko ierīces tik un tā brīvi raida, un iegūst šīs vērtības vienīgi no vietējās BlueZ saskarnes. Arī pakalpojumus, pakalpojumu datus un savienošanas pārī / savienojuma statusu tas nepieprasa no svešās ierīces, bet nolasa tikai lokāli.

Bez ierastā Link-Layer meklēšanas signāla — ko izmanto katra Bluetooth skenēšana (arī sistēmas iestatījumi), lai atrastu tuvumā esošās ierīces — iBT nesūta nekādu informāciju un arī aktīvi neko nepieprasa: nekāda savienojuma, nekāda GATT, nekādas savienošanas pārī. Nekādas svešās datplūsmas ierakstīšanas, nekādu uzbrukumu, nekādas reģistrēšanas, nekāda skenēto datu eksporta. Atrašanās vieta (neobligāti) kalpo tikai fona kartes centrēšanai un netiek saglabāta.

Piezīme: BT adreses ir personas dati — izmanto atbildīgi un tikai savas situācijas novērtēšanai.</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="45"/>
        <source>Sprache</source>
        <translation>Valoda</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="48"/>
        <source>Sprache wählen</source>
        <translation>Izvēlēties valodu</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="52"/>
        <source>Adapter</source>
        <translation>Adapteris</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="53"/>
        <source>Name</source>
        <translation>Nosaukums</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="54"/>
        <source>Adresse</source>
        <translation>Adrese</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="56"/>
        <source>Status</source>
        <translation>Statuss</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="57"/>
        <source>nicht gefunden</source>
        <translation>nav atrasts</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>an</source>
        <translation>ieslēgts</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>aus</source>
        <translation>izslēgts</translation>
    </message>
</context>
<context>
    <name>BtTopologyPage</name>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="82"/>
        <source>Verknüpfungs-Ansicht</source>
        <translation>Sasaistes skats</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="92"/>
        <source>Nur Eingabe-/Audio-/Wearable-Geräte in unmittelbarer Nähe (±12 dB). Das ist KEINE bestätigte Kopplung — die ist passiv nicht feststellbar. Hinweis: Maus/Tastatur/Pen, die bereits mit einem PC verbunden sind, advertisen meist nicht mehr und sind daher unsichtbar.</source>
        <translation>Tikai ievades / audio / valkājamās ierīces tiešā tuvumā (±12 dB). Tā NAV apstiprināta savienošana pārī — to pasīvi nevar noteikt. Piezīme: pele / tastatūra / Pen, kas jau ir savienoti ar datoru, parasti vairs neraida advertising signālus un tāpēc nav redzami.</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="101"/>
        <source>Keine sichtbaren Begleiter</source>
        <translation>Nav redzamu pavadoņu</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="102"/>
        <source>Verbundene Eingabegeräte (Maus/Pen) sind im Betrieb nicht discoverable und daher passiv unsichtbar.</source>
        <translation>Savienotās ievades ierīces (pele / Pen) darbības laikā nav discoverable un tāpēc pasīvi nav redzamas.</translation>
    </message>
</context>
<context>
    <name>CoverPage</name>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="23"/>
        <source>BT-Geräte</source>
        <translation>BT ierīces</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="29"/>
        <source>scannt…</source>
        <translation>skenē…</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Kein BT-Adapter</source>
        <translation>Nav BT adaptera</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Lūdzu, ieslēdz Bluetooth</translation>
    </message>
</context>
<context>
    <name>CveLookup</name>
    <message>
        <location filename="../src/cvelookup.cpp" line="45"/>
        <source>No device to search for</source>
        <translation>Nav ierīces, ko meklēt</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="60"/>
        <source>Searching EUVD for &quot;%1&quot;…</source>
        <translation>Meklē EUVD: „%1“…</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="101"/>
        <source>Network error: %1</source>
        <translation>Tīkla kļūda: %1</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="109"/>
        <source>Unexpected response from EUVD</source>
        <translation>Negaidīta EUVD atbilde</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="158"/>
        <source>No CVEs found in EUVD</source>
        <translation>EUVD nav atrasts neviens CVE</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="159"/>
        <source>%1 CVE(s) — showing %2</source>
        <translation>%1 CVE — rāda %2</translation>
    </message>
</context>
<context>
    <name>CvePage</name>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="54"/>
        <source>Known CVEs</source>
        <translation>Zināmie CVE</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="60"/>
        <source>Vendor + model</source>
        <translation>Ražotājs + modelis</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="79"/>
        <source>Also check (opens in browser):</source>
        <translation>Pārbaudi arī (atveras pārlūkā):</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="117"/>
        <source>Open on NVD</source>
        <translation>Atvērt NVD</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="121"/>
        <source>Search Exploit-DB</source>
        <translation>Meklēt Exploit-DB</translation>
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
        <translation>jā</translation>
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
        <translation>nē</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="70"/>
        <location filename="../qml/pages/DevicePage.qml" line="226"/>
        <source>Name</source>
        <translation>Nosaukums</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="71"/>
        <source>Name (BlueZ)</source>
        <translation>Nosaukums (BlueZ)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="72"/>
        <location filename="../qml/pages/DevicePage.qml" line="227"/>
        <source>Alias</source>
        <translation>Aizstājvārds</translation>
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
        <translation>MAC privātums</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>Zufalls-MAC</source>
        <translation>Nejaušs MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>statisch/öffentlich</source>
        <translation>statisks/publisks</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="76"/>
        <location filename="../qml/pages/DevicePage.qml" line="253"/>
        <source>Hersteller (OUI)</source>
        <translation>Ražotājs (OUI)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="77"/>
        <source>Typ</source>
        <translation>Tips</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="78"/>
        <location filename="../qml/pages/DevicePage.qml" line="269"/>
        <source>BlueZ-Icon</source>
        <translation>BlueZ ikona</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="83"/>
        <source>Distanz</source>
        <translation>Attālums</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="85"/>
        <source>Richtung</source>
        <translation>Virziens</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="86"/>
        <source>Gekoppelt</source>
        <translation>Savienots pārī</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="87"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <source>Gebondet</source>
        <translation>Saistīts</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="88"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <source>Verbunden</source>
        <translation>Savienots</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="89"/>
        <source>Vertraut</source>
        <translation>Uzticams</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="90"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <source>Blockiert</source>
        <translation>Bloķēts</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="91"/>
        <location filename="../qml/pages/DevicePage.qml" line="396"/>
        <source>Legacy-Pairing</source>
        <translation>Legacy-Pairing</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="92"/>
        <location filename="../qml/pages/DevicePage.qml" line="400"/>
        <source>Dienste aufgelöst</source>
        <translation>Pakalpojumi noteikti</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="93"/>
        <source>Risiko</source>
        <translation>Risks</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="97"/>
        <source>Tracker</source>
        <translation>Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="98"/>
        <source>Dienste/UUIDs</source>
        <translation>Pakalpojumi/UUIDs</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="101"/>
        <location filename="../qml/pages/DevicePage.qml" line="468"/>
        <source>Hersteller-Daten</source>
        <translation>Ražotāja dati</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="109"/>
        <location filename="../qml/pages/DevicePage.qml" line="499"/>
        <source>Service-Daten</source>
        <translation>Pakalpojumu dati</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="121"/>
        <source>In die Zwischenablage kopiert</source>
        <translation>Nokopēts starpliktuvē</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="130"/>
        <source>In Zwischenablage kopieren</source>
        <translation>Kopēt starpliktuvē</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="134"/>
        <source>Verknüpfungs-Ansicht (Begleitgeräte)</source>
        <translation>Sasaistes skats (pavadoņi)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="138"/>
        <source>Richtung hier setzen (zeigt zum Gerät)</source>
        <translation>Iestatīt virzienu šeit (rāda uz ierīci)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="141"/>
        <source>Richtung gespeichert: %1°</source>
        <translation>Virziens saglabāts: %1°</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="146"/>
        <source>Gerät aus BlueZ entfernen</source>
        <translation>Noņemt ierīci no BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="148"/>
        <source>Entfernt</source>
        <translation>Noņemts</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="149"/>
        <source>Entfernen fehlgeschlagen</source>
        <translation>Noņemšana neizdevās</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="182"/>
        <source>Mögliches Hacker-Gadget: %1</source>
        <translation>Iespējams hakeru rīks: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="208"/>
        <source>Risiko: %1</source>
        <translation>Risks: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="225"/>
        <source>Identität</source>
        <translation>Identitāte</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="235"/>
        <source>Adresse (MAC)</source>
        <translation>Adrese (MAC)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="247"/>
        <source>Adress-Typ</source>
        <translation>Adreses tips</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="250"/>
        <source>Zufalls-MAC (gut)</source>
        <translation>Nejaušs MAC (labi)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="251"/>
        <source>statisch/öffentlich (trackbar)</source>
        <translation>statisks/publisks (izsekojams)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="255"/>
        <source>Geräte-Typ (erkannt)</source>
        <translation>Ierīces tips (atpazīts)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="259"/>
        <source>Identität (vermutet)</source>
        <translation>Identitāte (pieņemta)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="268"/>
        <source>Funk-Typ</source>
        <translation>Radio tips</translation>
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
        <translation>Signāls un attālums</translation>
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
        <translation>Attālums (aptuveni)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="300"/>
        <source>Gemessene Richtung</source>
        <translation>Izmērītais virziens</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="303"/>
        <source>— (Pulldown: hier setzen)</source>
        <translation>— (velc uz leju: iestatīt šeit)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="307"/>
        <source>Verlauf &amp; Ortung</source>
        <translation>Vēsture un atrašanās noteikšana</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="308"/>
        <source>Sichtungen</source>
        <translation>Novērojumi</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="309"/>
        <source>Beobachtet seit</source>
        <translation>Novērots kopš</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="327"/>
        <source>⚠ Stalking-Verdacht: Dieser Tracker läuft seit %1 mit. Bewege dich an einen anderen Ort — bleibt er dabei, ist er vermutlich bei dir/an deinen Sachen.</source>
        <translation>⚠ Aizdomas par vajāšanu: šis Tracker seko jau %1. Pārvietojies uz citu vietu — ja tas paliek līdzi, tas visticamāk ir pie tevis / tavām mantām.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="341"/>
        <source>RSSI-Verlauf — oben weit/rot, unten nah/grün (zum Orten gehen)</source>
        <translation>RSSI vēsture — augšā tālu/sarkans, apakšā tuvu/zaļš (ej meklēt)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="389"/>
        <source>Status</source>
        <translation>Statuss</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <source>Gekoppelt (paired)</source>
        <translation>Savienots pārī (paired)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <source>Vertraut (trusted)</source>
        <translation>Uzticams (trusted)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="397"/>
        <source>ja (schwächer)</source>
        <translation>jā (vājāk)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="410"/>
        <source>Beacon</source>
        <translation>Beacon</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="428"/>
        <source>Tracker-Warnung</source>
        <translation>Tracker brīdinājums</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="434"/>
        <source>Wenn dieses Gerät dir an wechselnden Orten folgt, könnte es zum Tracking/Stalking genutzt werden.</source>
        <translation>Ja šī ierīce seko tev mainīgās vietās, to varētu izmantot izsekošanai / vajāšanai.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="443"/>
        <source>Dienste / GATT-UUIDs (%1)</source>
        <translation>Pakalpojumi / GATT-UUIDs (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="527"/>
        <source>Mögliche Peripherie in der Nähe (%1)</source>
        <translation>Iespējamā perifērija tuvumā (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="536"/>
        <source>Eingabegeräte (Maus/Tastatur/Pen) in Funkreichweite. Ob sie wirklich mit DIESEM Gerät gekoppelt sind, ist passiv NICHT feststellbar (privates Piconet) — hier nur als naheliegende Kandidaten in der Nähe.</source>
        <translation>Ievades ierīces (pele / tastatūra / Pen) radio uztveršanas zonā. Vai tās patiešām ir savienotas pārī ar ŠO ierīci, pasīvi NAV nosakāms (privāts piconet) — šeit tikai kā tuvumā esoši ticami kandidāti.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="571"/>
        <source>CVEs für dieses Gerät suchen</source>
        <translation>Meklēt CVE šai ierīcei</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="576"/>
        <source>Intern</source>
        <translation>Iekšēji</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="577"/>
        <source>D-Bus-Pfad</source>
        <translation>D-Bus ceļš</translation>
    </message>
</context>
<context>
    <name>LanguagePage</name>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="22"/>
        <source>Sprache</source>
        <translation>Valoda</translation>
    </message>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="31"/>
        <source>Wirkt beim nächsten Start der App. Nur Deutsch und Englisch sind geprüft; die übrigen Sprachen sind maschinell übersetzt. Englisch ist hier immer verfügbar.</source>
        <translation>Stājas spēkā, nākamreiz palaižot lietotni. Pārbaudītas tikai vācu un angļu valodas; pārējās valodas ir tulkotas mašīnas veidā. Angļu valoda šeit vienmēr ir pieejama.</translation>
    </message>
</context>
<context>
    <name>LanguageSettings</name>
    <message>
        <location filename="../src/languagesettings.cpp" line="85"/>
        <source>System language</source>
        <translation>Sistēmas valoda</translation>
    </message>
</context>
<context>
    <name>ListPage</name>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="35"/>
        <source>⚠ Kamera-Brille: %1 (%2)</source>
        <translation>⚠ Kameras brilles: %1 (%2)</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="61"/>
        <source>Über iBT</source>
        <translation>Par iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="65"/>
        <source>Liste leeren</source>
        <translation>Notīrīt sarakstu</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan stoppen</source>
        <translation>Apturēt skenēšanu</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan starten</source>
        <translation>Sākt skenēšanu</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="77"/>
        <source>Geräte</source>
        <translation>Ierīces</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="78"/>
        <source>scannt… %1</source>
        <translation>skenē… %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="87"/>
        <source>Noch nichts gefunden</source>
        <translation>Pagaidām nekas nav atrasts</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="88"/>
        <source>Bluetooth ist aus</source>
        <translation>Bluetooth ir izslēgts</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="89"/>
        <source>Scan läuft — Geräte tauchen gleich auf</source>
        <translation>Skenēšana notiek — ierīces tūlīt parādīsies</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="90"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Lūdzu, ieslēdz Bluetooth</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="151"/>
        <source>Zufalls-MAC</source>
        <translation>Nejaušs MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="172"/>
        <source>⚠ Kamera-Brille: %1 · Konfidenz %2</source>
        <translation>⚠ Kameras brilles: %1 · ticamība %2</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>verbunden</source>
        <translation>savienots</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>gekoppelt</source>
        <translation>savienots pārī</translation>
    </message>
</context>
<context>
    <name>OsmFetch</name>
    <message>
        <location filename="../src/osmfetch.cpp" line="57"/>
        <source>Loading map…</source>
        <translation>Ielādē karti…</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="66"/>
        <source>Map unavailable (no Overpass mirror reachable)</source>
        <translation>Karte nav pieejama (nav sasniedzams neviens Overpass spogulis)</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="127"/>
        <source>No map data here</source>
        <translation>Šeit nav kartes datu</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="128"/>
        <source>Map loaded (%1 ways)</source>
        <translation>Karte ielādēta (%1 ceļu)</translation>
    </message>
</context>
<context>
    <name>RadarPage</name>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="59"/>
        <source>Hintergrundkarte an (braucht GPS-Fix)</source>
        <translation>Fona karte ieslēgta (nepieciešama GPS fiksācija)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="60"/>
        <source>Hintergrundkarte aus</source>
        <translation>Fona karte izslēgta</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="98"/>
        <source>Über iBT</source>
        <translation>Par iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="102"/>
        <source>Heading kalibrieren (0°)</source>
        <translation>Kalibrēt virzienu (0°)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="103"/>
        <source>Heading = 0°</source>
        <translation>Virziens = 0°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>GPS: %1</source>
        <translation>GPS: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>an (Fix)</source>
        <translation>ieslēgts (fiksācija)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <source>an (suche…)</source>
        <translation>ieslēgts (meklē…)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>aus</source>
        <translation>izslēgts</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>Koordinaten: %1</source>
        <translation>Koordinātas: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>ein</source>
        <translation>ieslēgts</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>Hintergrundkarte (OSM): %1</source>
        <translation>Fona karte (OSM): %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>an</source>
        <translation>ieslēgts</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="119"/>
        <source>Gerätetopologie (BLE-Links)</source>
        <translation>Ierīču topoloģija (BLE saites)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="123"/>
        <source>Liste anzeigen</source>
        <translation>Rādīt sarakstu</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan stoppen</source>
        <translation>Apturēt skenēšanu</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan starten</source>
        <translation>Sākt skenēšanu</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="141"/>
        <source>iBT — Radar</source>
        <translation>iBT — Radars</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="149"/>
        <source>scannt… %1 Geräte</source>
        <translation>skenē… %1 ierīces</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="150"/>
        <source>%1 Geräte</source>
        <translation>%1 ierīces</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="151"/>
        <source>Rand %1 m · %2× · %3°</source>
        <translation>Mala %1 m · %2× · %3°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="393"/>
        <source>Zoom — raus für die Karte, rein für nahe Geräte</source>
        <translation>Tuvinājums — attālini kartei, pietuvini tuvām ierīcēm</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="418"/>
        <source>unauffällig</source>
        <translation>neuzkrītošs</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="419"/>
        <source>ok</source>
        <translation>ok</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="420"/>
        <source>schwach</source>
        <translation>vājš</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="421"/>
        <source>kritisch</source>
        <translation>kritisks</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="445"/>
        <source>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/beides · voll = Richtung gemessen, hohl = vorläufig.
☠ Angreifer (Farbe = Art): Flipper orange · WLAN-Tool gelb · O.MG lila · Sniffer cyan · Stalking/sonst rot.</source>
        <translation>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/abi · pilns = virziens izmērīts, dobs = provizorisks.
☠ Uzbrucējs (krāsa = veids): Flipper oranžs · WLAN rīks dzeltens · O.MG violets · Sniffer ciāns · vajāšana/cits sarkans.</translation>
    </message>
</context>
<context>
    <name>harbour-ibt</name>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="44"/>
        <source>unauffällig</source>
        <translation>neuzkrītošs</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="45"/>
        <source>ok</source>
        <translation>ok</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="46"/>
        <source>schwach</source>
        <translation>vājš</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="47"/>
        <source>kritisch</source>
        <translation>kritisks</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="73"/>
        <source>GPS an — nur zum Zentrieren der Hintergrundkarte</source>
        <translation>GPS ieslēgts — tikai fona kartes centrēšanai</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="74"/>
        <source>GPS aus</source>
        <translation>GPS izslēgts</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="94"/>
        <source>kein Fix</source>
        <translation>nav fiksācijas</translation>
    </message>
</context>
</TS>
