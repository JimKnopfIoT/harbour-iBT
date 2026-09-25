<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>AboutPage</name>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="17"/>
        <source>Über iBT</source>
        <translation>Um iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="24"/>
        <source>iBT — passives Bluetooth-/BLE-Sicherheits- und Analyse-Tool.

Scannt über die BlueZ-Schnittstelle des Telefons nahe BT-/BLE-Geräte und liest nur frei gesendete Advertising-Daten: Name, MAC, RSSI, Hersteller, Dienste, Hersteller-/Service-Daten. Dekodiert Beacons (iBeacon/Eddystone/AltBeacon), erkennt Tracker (AirTag/SmartTag/Tile) und werbebasierte Angriffe (BLE-Spam-Fluten) und gibt eine passive Risiko-Einschätzung.

Strikt passiv: iBT liest nur, was Geräte ohnehin frei aussenden, und ruft diese Werte allein aus der lokalen BlueZ-Schnittstelle ab. Auch Dienste, Service-Daten und Kopplungs-/Verbindungs-Status werden nicht beim fremden Gerät erfragt, sondern nur lokal ausgelesen.

Über das übliche Link-Layer-Suchsignal hinaus — das jeder Bluetooth-Scan (auch die System-Einstellungen) nutzt, um Geräte in der Nähe zu finden — sendet iBT keine Informationen und fragt auch aktiv keine ab: keine Verbindung, kein GATT, kein Pairing. Kein Mitschnitt fremden Verkehrs, keine Angriffe, kein Logging, kein Export von Scan-Daten. Der Standort (optional) dient nur dem Zentrieren der Hintergrundkarte und wird nicht gespeichert.

Hinweis: BT-Adressen sind personenbezogene Daten — verantwortungsvoll und nur zur eigenen Lageeinschätzung nutzen.</source>
        <translation>iBT — óvirkt Bluetooth-/BLE-öryggis- og greiningartól.

Skannar nálæg BT-/BLE-tæki gegnum BlueZ-viðmót símans og les aðeins frjálst útsend advertising-gögn: nafn, MAC, RSSI, framleiðandi, þjónustur, framleiðanda-/þjónustugögn. Afkóðar Beacon (iBeacon/Eddystone/AltBeacon), greinir Tracker (AirTag/SmartTag/Tile) og auglýsingatengdar árásir (BLE-spam-flóð) og gefur óvirkt áhættumat.

Algjörlega óvirkt: iBT les aðeins það sem tæki senda hvort eð er frjálst út, og sækir þessi gildi eingöngu úr staðbundnu BlueZ-viðmótinu. Þjónustur, þjónustugögn og pörunar-/tengingarstaða eru heldur ekki fengin frá ókunnuga tækinu, heldur aðeins lesin staðbundið.

Umfram venjulega link-layer-leitarmerkið — sem hver Bluetooth-skönnun (líka kerfisstillingarnar) notar til að finna nálæg tæki — sendir iBT engar upplýsingar og spyr ekki heldur virkt um neinar: engin tenging, ekkert GATT, engin pörun. Engin upptaka á umferð annarra, engar árásir, engin skráning, enginn útflutningur á skönnunargögnum. Staðsetningin (valfrjáls) er aðeins notuð til að miðja bakgrunnskortið og er ekki vistuð.

Athugið: BT-vistföng eru persónuupplýsingar — notaðu ábyrgt og aðeins til að meta þína eigin stöðu.</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="45"/>
        <source>Sprache</source>
        <translation>Tungumál</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="48"/>
        <source>Sprache wählen</source>
        <translation>Velja tungumál</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="52"/>
        <source>Adapter</source>
        <translation>Millistykki</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="53"/>
        <source>Name</source>
        <translation>Nafn</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="54"/>
        <source>Adresse</source>
        <translation>Vistfang</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="56"/>
        <source>Status</source>
        <translation>Staða</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="57"/>
        <source>nicht gefunden</source>
        <translation>fannst ekki</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>an</source>
        <translation>á</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>aus</source>
        <translation>af</translation>
    </message>
</context>
<context>
    <name>BtTopologyPage</name>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="82"/>
        <source>Verknüpfungs-Ansicht</source>
        <translation>Tengslasýn</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="92"/>
        <source>Nur Eingabe-/Audio-/Wearable-Geräte in unmittelbarer Nähe (±12 dB). Das ist KEINE bestätigte Kopplung — die ist passiv nicht feststellbar. Hinweis: Maus/Tastatur/Pen, die bereits mit einem PC verbunden sind, advertisen meist nicht mehr und sind daher unsichtbar.</source>
        <translation>Aðeins inntaks-/hljóð-/klæðanleg tæki í næsta nágrenni (±12 dB). Þetta er EKKI staðfest pörun — hana er ekki hægt að staðfesta óvirkt. Athugið: mús/lyklaborð/penni sem eru þegar tengd við PC advertise-a yfirleitt ekki lengur og eru því ósýnileg.</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="101"/>
        <source>Keine sichtbaren Begleiter</source>
        <translation>Engin sýnileg fylgitæki</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="102"/>
        <source>Verbundene Eingabegeräte (Maus/Pen) sind im Betrieb nicht discoverable und daher passiv unsichtbar.</source>
        <translation>Tengd inntakstæki (mús/penni) eru ekki discoverable í notkun og því óvirkt ósýnileg.</translation>
    </message>
</context>
<context>
    <name>CoverPage</name>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="23"/>
        <source>BT-Geräte</source>
        <translation>BT-tæki</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="29"/>
        <source>scannt…</source>
        <translation>skannar…</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Kein BT-Adapter</source>
        <translation>Ekkert BT-millistykki</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Kveiktu á Bluetooth</translation>
    </message>
</context>
<context>
    <name>CveLookup</name>
    <message>
        <location filename="../src/cvelookup.cpp" line="45"/>
        <source>No device to search for</source>
        <translation>Ekkert tæki til að leita að</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="60"/>
        <source>Searching EUVD for &quot;%1&quot;…</source>
        <translation>Leita í EUVD að &quot;%1&quot;…</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="101"/>
        <source>Network error: %1</source>
        <translation>Netvilla: %1</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="109"/>
        <source>Unexpected response from EUVD</source>
        <translation>Óvænt svar frá EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="158"/>
        <source>No CVEs found in EUVD</source>
        <translation>Engin CVE fundust í EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="159"/>
        <source>%1 CVE(s) — showing %2</source>
        <translation>%1 CVE — sýni %2</translation>
    </message>
</context>
<context>
    <name>CvePage</name>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="54"/>
        <source>Known CVEs</source>
        <translation>Þekkt CVE</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="60"/>
        <source>Vendor + model</source>
        <translation>Framleiðandi + gerð</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="79"/>
        <source>Also check (opens in browser):</source>
        <translation>Athugaðu líka (opnast í vafra):</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="117"/>
        <source>Open on NVD</source>
        <translation>Opna á NVD</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="121"/>
        <source>Search Exploit-DB</source>
        <translation>Leita í Exploit-DB</translation>
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
        <translation>já</translation>
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
        <translation>nei</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="70"/>
        <location filename="../qml/pages/DevicePage.qml" line="226"/>
        <source>Name</source>
        <translation>Nafn</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="71"/>
        <source>Name (BlueZ)</source>
        <translation>Nafn (BlueZ)</translation>
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
        <translation>MAC-friðhelgi</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>Zufalls-MAC</source>
        <translation>Slembið MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>statisch/öffentlich</source>
        <translation>fast/opinbert</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="76"/>
        <location filename="../qml/pages/DevicePage.qml" line="253"/>
        <source>Hersteller (OUI)</source>
        <translation>Framleiðandi (OUI)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="77"/>
        <source>Typ</source>
        <translation>Gerð</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="78"/>
        <location filename="../qml/pages/DevicePage.qml" line="269"/>
        <source>BlueZ-Icon</source>
        <translation>BlueZ-tákn</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="83"/>
        <source>Distanz</source>
        <translation>Fjarlægð</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="85"/>
        <source>Richtung</source>
        <translation>Stefna</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="86"/>
        <source>Gekoppelt</source>
        <translation>Parað</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="87"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <source>Gebondet</source>
        <translation>Bundið</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="88"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <source>Verbunden</source>
        <translation>Tengt</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="89"/>
        <source>Vertraut</source>
        <translation>Treyst</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="90"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <source>Blockiert</source>
        <translation>Lokað</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="91"/>
        <location filename="../qml/pages/DevicePage.qml" line="396"/>
        <source>Legacy-Pairing</source>
        <translation>Legacy-pörun</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="92"/>
        <location filename="../qml/pages/DevicePage.qml" line="400"/>
        <source>Dienste aufgelöst</source>
        <translation>Þjónustur uppleystar</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="93"/>
        <source>Risiko</source>
        <translation>Áhætta</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="97"/>
        <source>Tracker</source>
        <translation>Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="98"/>
        <source>Dienste/UUIDs</source>
        <translation>Þjónustur/UUID</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="101"/>
        <location filename="../qml/pages/DevicePage.qml" line="468"/>
        <source>Hersteller-Daten</source>
        <translation>Framleiðandagögn</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="109"/>
        <location filename="../qml/pages/DevicePage.qml" line="499"/>
        <source>Service-Daten</source>
        <translation>Þjónustugögn</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="121"/>
        <source>In die Zwischenablage kopiert</source>
        <translation>Afritað á klippiborð</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="130"/>
        <source>In Zwischenablage kopieren</source>
        <translation>Afrita á klippiborð</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="134"/>
        <source>Verknüpfungs-Ansicht (Begleitgeräte)</source>
        <translation>Tengslasýn (fylgitæki)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="138"/>
        <source>Richtung hier setzen (zeigt zum Gerät)</source>
        <translation>Stilla stefnu hér (bendir á tækið)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="141"/>
        <source>Richtung gespeichert: %1°</source>
        <translation>Stefna vistuð: %1°</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="146"/>
        <source>Gerät aus BlueZ entfernen</source>
        <translation>Fjarlægja tæki úr BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="148"/>
        <source>Entfernt</source>
        <translation>Fjarlægt</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="149"/>
        <source>Entfernen fehlgeschlagen</source>
        <translation>Fjarlæging mistókst</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="182"/>
        <source>Mögliches Hacker-Gadget: %1</source>
        <translation>Mögulegt hakkaratól: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="208"/>
        <source>Risiko: %1</source>
        <translation>Áhætta: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="225"/>
        <source>Identität</source>
        <translation>Auðkenni</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="235"/>
        <source>Adresse (MAC)</source>
        <translation>Vistfang (MAC)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="247"/>
        <source>Adress-Typ</source>
        <translation>Vistfangsgerð</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="250"/>
        <source>Zufalls-MAC (gut)</source>
        <translation>Slembið MAC (gott)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="251"/>
        <source>statisch/öffentlich (trackbar)</source>
        <translation>fast/opinbert (rekjanlegt)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="255"/>
        <source>Geräte-Typ (erkannt)</source>
        <translation>Tækjagerð (greind)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="259"/>
        <source>Identität (vermutet)</source>
        <translation>Auðkenni (grunað)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="268"/>
        <source>Funk-Typ</source>
        <translation>Fjarskiptagerð</translation>
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
        <translation>Merki &amp; fjarlægð</translation>
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
        <translation>Fjarlægð (gróf)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="300"/>
        <source>Gemessene Richtung</source>
        <translation>Mæld stefna</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="303"/>
        <source>— (Pulldown: hier setzen)</source>
        <translation>— (Pulldown: stilla hér)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="307"/>
        <source>Verlauf &amp; Ortung</source>
        <translation>Ferill &amp; staðsetning</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="308"/>
        <source>Sichtungen</source>
        <translation>Athuganir</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="309"/>
        <source>Beobachtet seit</source>
        <translation>Vaktað síðan</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="327"/>
        <source>⚠ Stalking-Verdacht: Dieser Tracker läuft seit %1 mit. Bewege dich an einen anderen Ort — bleibt er dabei, ist er vermutlich bei dir/an deinen Sachen.</source>
        <translation>⚠ Grunur um eltihrelli: Þessi Tracker hefur fylgt þér í %1. Farðu á annan stað — ef hann fylgir áfram er hann líklega hjá þér eða á hlutunum þínum.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="341"/>
        <source>RSSI-Verlauf — oben weit/rot, unten nah/grün (zum Orten gehen)</source>
        <translation>RSSI-ferill — efst fjarri/rautt, neðst nálægt/grænt (farðu að staðsetja)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="389"/>
        <source>Status</source>
        <translation>Staða</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <source>Gekoppelt (paired)</source>
        <translation>Parað (paired)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <source>Vertraut (trusted)</source>
        <translation>Treyst (trusted)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="397"/>
        <source>ja (schwächer)</source>
        <translation>já (veikara)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="410"/>
        <source>Beacon</source>
        <translation>Beacon</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="428"/>
        <source>Tracker-Warnung</source>
        <translation>Tracker-viðvörun</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="434"/>
        <source>Wenn dieses Gerät dir an wechselnden Orten folgt, könnte es zum Tracking/Stalking genutzt werden.</source>
        <translation>Ef þetta tæki fylgir þér á breytilega staði gæti það verið notað til rakningar/eltihrellinga.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="443"/>
        <source>Dienste / GATT-UUIDs (%1)</source>
        <translation>Þjónustur / GATT-UUID (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="527"/>
        <source>Mögliche Peripherie in der Nähe (%1)</source>
        <translation>Möguleg jaðartæki nálægt (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="536"/>
        <source>Eingabegeräte (Maus/Tastatur/Pen) in Funkreichweite. Ob sie wirklich mit DIESEM Gerät gekoppelt sind, ist passiv NICHT feststellbar (privates Piconet) — hier nur als naheliegende Kandidaten in der Nähe.</source>
        <translation>Inntakstæki (mús/lyklaborð/penni) innan útvarpsdrægni. Hvort þau eru raunverulega pöruð við ÞETTA tæki er EKKI hægt að staðfesta óvirkt (einka-piconet) — hér aðeins sem nálægir líklegir kandídatar.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="571"/>
        <source>CVEs für dieses Gerät suchen</source>
        <translation>Leita að CVE fyrir þetta tæki</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="576"/>
        <source>Intern</source>
        <translation>Innra</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="577"/>
        <source>D-Bus-Pfad</source>
        <translation>D-Bus-slóð</translation>
    </message>
</context>
<context>
    <name>LanguagePage</name>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="22"/>
        <source>Sprache</source>
        <translation>Tungumál</translation>
    </message>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="31"/>
        <source>Wirkt beim nächsten Start der App. Nur Deutsch und Englisch sind geprüft; die übrigen Sprachen sind maschinell übersetzt. Englisch ist hier immer verfügbar.</source>
        <translation>Tekur gildi við næstu ræsingu forritsins. Aðeins þýska og enska eru yfirfarnar; önnur tungumál eru vélþýdd. Enska er alltaf tiltæk hér.</translation>
    </message>
</context>
<context>
    <name>LanguageSettings</name>
    <message>
        <location filename="../src/languagesettings.cpp" line="85"/>
        <source>System language</source>
        <translation>Tungumál kerfis</translation>
    </message>
</context>
<context>
    <name>ListPage</name>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="35"/>
        <source>⚠ Kamera-Brille: %1 (%2)</source>
        <translation>⚠ Myndavélagleraugu: %1 (%2)</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="61"/>
        <source>Über iBT</source>
        <translation>Um iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="65"/>
        <source>Liste leeren</source>
        <translation>Hreinsa lista</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan stoppen</source>
        <translation>Stöðva skönnun</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan starten</source>
        <translation>Hefja skönnun</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="77"/>
        <source>Geräte</source>
        <translation>Tæki</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="78"/>
        <source>scannt… %1</source>
        <translation>skannar… %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="87"/>
        <source>Noch nichts gefunden</source>
        <translation>Ekkert fundist enn</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="88"/>
        <source>Bluetooth ist aus</source>
        <translation>Bluetooth er af</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="89"/>
        <source>Scan läuft — Geräte tauchen gleich auf</source>
        <translation>Skönnun í gangi — tæki birtast bráðum</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="90"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Kveiktu á Bluetooth</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="151"/>
        <source>Zufalls-MAC</source>
        <translation>Slembið MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="172"/>
        <source>⚠ Kamera-Brille: %1 · Konfidenz %2</source>
        <translation>⚠ Myndavélagleraugu: %1 · Vissa %2</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>verbunden</source>
        <translation>tengt</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>gekoppelt</source>
        <translation>parað</translation>
    </message>
</context>
<context>
    <name>OsmFetch</name>
    <message>
        <location filename="../src/osmfetch.cpp" line="57"/>
        <source>Loading map…</source>
        <translation>Hleð korti…</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="66"/>
        <source>Map unavailable (no Overpass mirror reachable)</source>
        <translation>Kort ekki tiltækt (enginn Overpass-spegill næst)</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="127"/>
        <source>No map data here</source>
        <translation>Engin kortagögn hér</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="128"/>
        <source>Map loaded (%1 ways)</source>
        <translation>Kort hlaðið (%1 leiðir)</translation>
    </message>
</context>
<context>
    <name>RadarPage</name>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="59"/>
        <source>Hintergrundkarte an (braucht GPS-Fix)</source>
        <translation>Bakgrunnskort á (þarf GPS-fix)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="60"/>
        <source>Hintergrundkarte aus</source>
        <translation>Bakgrunnskort af</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="98"/>
        <source>Über iBT</source>
        <translation>Um iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="102"/>
        <source>Heading kalibrieren (0°)</source>
        <translation>Kvarða Heading (0°)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="103"/>
        <source>Heading = 0°</source>
        <translation>Heading = 0°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>GPS: %1</source>
        <translation>GPS: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>an (Fix)</source>
        <translation>á (Fix)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <source>an (suche…)</source>
        <translation>á (leitar…)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>aus</source>
        <translation>af</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>Koordinaten: %1</source>
        <translation>Hnit: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>ein</source>
        <translation>á</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>Hintergrundkarte (OSM): %1</source>
        <translation>Bakgrunnskort (OSM): %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>an</source>
        <translation>á</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="119"/>
        <source>Gerätetopologie (BLE-Links)</source>
        <translation>Tækjatópólógía (BLE-tengingar)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="123"/>
        <source>Liste anzeigen</source>
        <translation>Sýna lista</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan stoppen</source>
        <translation>Stöðva skönnun</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan starten</source>
        <translation>Hefja skönnun</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="141"/>
        <source>iBT — Radar</source>
        <translation>iBT — Ratsjá</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="149"/>
        <source>scannt… %1 Geräte</source>
        <translation>skannar… %1 tæki</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="150"/>
        <source>%1 Geräte</source>
        <translation>%1 tæki</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="151"/>
        <source>Rand %1 m · %2× · %3°</source>
        <translation>Jaðar %1 m · %2× · %3°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="393"/>
        <source>Zoom — raus für die Karte, rein für nahe Geräte</source>
        <translation>Aðdráttur — út fyrir kortið, inn fyrir nálæg tæki</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="418"/>
        <source>unauffällig</source>
        <translation>lítt áberandi</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="419"/>
        <source>ok</source>
        <translation>í lagi</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="420"/>
        <source>schwach</source>
        <translation>veikt</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="421"/>
        <source>kritisch</source>
        <translation>alvarlegt</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="445"/>
        <source>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/beides · voll = Richtung gemessen, hohl = vorläufig.
☠ Angreifer (Farbe = Art): Flipper orange · WLAN-Tool gelb · O.MG lila · Sniffer cyan · Stalking/sonst rot.</source>
        <translation>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/bæði · fyllt = stefna mæld, hol = bráðabirgða.
☠ Árásaraðili (litur = tegund): Flipper appelsínugulur · WLAN-tól gult · O.MG fjólublátt · Sniffer blágrænt · eltihrellingar/annað rautt.</translation>
    </message>
</context>
<context>
    <name>harbour-ibt</name>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="44"/>
        <source>unauffällig</source>
        <translation>lítt áberandi</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="45"/>
        <source>ok</source>
        <translation>í lagi</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="46"/>
        <source>schwach</source>
        <translation>veikt</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="47"/>
        <source>kritisch</source>
        <translation>alvarlegt</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="73"/>
        <source>GPS an — nur zum Zentrieren der Hintergrundkarte</source>
        <translation>GPS á — aðeins til að miðja bakgrunnskortið</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="74"/>
        <source>GPS aus</source>
        <translation>GPS af</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="94"/>
        <source>kein Fix</source>
        <translation>enginn fix</translation>
    </message>
</context>
</TS>
