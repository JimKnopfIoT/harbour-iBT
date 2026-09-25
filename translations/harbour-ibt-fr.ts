<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>AboutPage</name>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="17"/>
        <source>Über iBT</source>
        <translation>À propos d&apos;iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="24"/>
        <source>iBT — passives Bluetooth-/BLE-Sicherheits- und Analyse-Tool.

Scannt über die BlueZ-Schnittstelle des Telefons nahe BT-/BLE-Geräte und liest nur frei gesendete Advertising-Daten: Name, MAC, RSSI, Hersteller, Dienste, Hersteller-/Service-Daten. Dekodiert Beacons (iBeacon/Eddystone/AltBeacon), erkennt Tracker (AirTag/SmartTag/Tile) und werbebasierte Angriffe (BLE-Spam-Fluten) und gibt eine passive Risiko-Einschätzung.

Strikt passiv: iBT liest nur, was Geräte ohnehin frei aussenden, und ruft diese Werte allein aus der lokalen BlueZ-Schnittstelle ab. Auch Dienste, Service-Daten und Kopplungs-/Verbindungs-Status werden nicht beim fremden Gerät erfragt, sondern nur lokal ausgelesen.

Über das übliche Link-Layer-Suchsignal hinaus — das jeder Bluetooth-Scan (auch die System-Einstellungen) nutzt, um Geräte in der Nähe zu finden — sendet iBT keine Informationen und fragt auch aktiv keine ab: keine Verbindung, kein GATT, kein Pairing. Kein Mitschnitt fremden Verkehrs, keine Angriffe, kein Logging, kein Export von Scan-Daten. Der Standort (optional) dient nur dem Zentrieren der Hintergrundkarte und wird nicht gespeichert.

Hinweis: BT-Adressen sind personenbezogene Daten — verantwortungsvoll und nur zur eigenen Lageeinschätzung nutzen.</source>
        <translation>iBT — outil passif de sécurité et d&apos;analyse Bluetooth/BLE.

Analyse via l&apos;interface BlueZ du téléphone les appareils BT/BLE proches et ne lit que les données d&apos;advertising diffusées librement : nom, MAC, RSSI, fabricant, services, données fabricant/service. Décode les Beacon (iBeacon/Eddystone/AltBeacon), détecte les Tracker (AirTag/SmartTag/Tile) et les attaques basées sur l&apos;advertising (déferlantes de BLE-Spam) et fournit une évaluation passive du risque.

Strictement passif : iBT ne lit que ce que les appareils diffusent déjà librement et n&apos;obtient ces valeurs que depuis l&apos;interface BlueZ locale. Les services, données de service et états de couplage/connexion ne sont pas non plus demandés à l&apos;appareil distant, mais uniquement lus localement.

Au-delà du signal de recherche habituel de la couche liaison — que tout scan Bluetooth (y compris les réglages système) utilise pour trouver les appareils à proximité — iBT n&apos;envoie aucune information et n&apos;en interroge aucune activement : pas de connexion, pas de GATT, pas de pairing. Aucun enregistrement du trafic d&apos;autrui, aucune attaque, aucun logging, aucun export des données de scan. La localisation (optionnelle) sert uniquement à centrer la carte de fond et n&apos;est pas enregistrée.

Remarque : les adresses BT sont des données personnelles — à utiliser de manière responsable et uniquement pour évaluer sa propre situation.</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="45"/>
        <source>Sprache</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="48"/>
        <source>Sprache wählen</source>
        <translation>Choisir la langue</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="52"/>
        <source>Adapter</source>
        <translation>Adaptateur</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="53"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="54"/>
        <source>Adresse</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="56"/>
        <source>Status</source>
        <translation>État</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="57"/>
        <source>nicht gefunden</source>
        <translation>non trouvé</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>an</source>
        <translation>activé</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>aus</source>
        <translation>désactivé</translation>
    </message>
</context>
<context>
    <name>BtTopologyPage</name>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="82"/>
        <source>Verknüpfungs-Ansicht</source>
        <translation>Vue des associations</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="92"/>
        <source>Nur Eingabe-/Audio-/Wearable-Geräte in unmittelbarer Nähe (±12 dB). Das ist KEINE bestätigte Kopplung — die ist passiv nicht feststellbar. Hinweis: Maus/Tastatur/Pen, die bereits mit einem PC verbunden sind, advertisen meist nicht mehr und sind daher unsichtbar.</source>
        <translation>Uniquement les appareils d&apos;entrée/audio/wearable à proximité immédiate (±12 dB). Ce n&apos;est PAS un couplage confirmé — celui-ci n&apos;est pas détectable passivement. Remarque : les souris/claviers/Pen déjà connectés à un PC ne diffusent généralement plus d&apos;advertising et sont donc invisibles.</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="101"/>
        <source>Keine sichtbaren Begleiter</source>
        <translation>Aucun compagnon visible</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="102"/>
        <source>Verbundene Eingabegeräte (Maus/Pen) sind im Betrieb nicht discoverable und daher passiv unsichtbar.</source>
        <translation>Les appareils d&apos;entrée connectés (souris/Pen) ne sont pas découvrables en fonctionnement et donc passivement invisibles.</translation>
    </message>
</context>
<context>
    <name>CoverPage</name>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="23"/>
        <source>BT-Geräte</source>
        <translation>Appareils BT</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="29"/>
        <source>scannt…</source>
        <translation>analyse…</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Kein BT-Adapter</source>
        <translation>Aucun adaptateur BT</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Veuillez activer le Bluetooth</translation>
    </message>
</context>
<context>
    <name>CveLookup</name>
    <message>
        <location filename="../src/cvelookup.cpp" line="45"/>
        <source>No device to search for</source>
        <translation>Aucun appareil à rechercher</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="60"/>
        <source>Searching EUVD for &quot;%1&quot;…</source>
        <translation>Recherche dans EUVD de « %1 »…</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="101"/>
        <source>Network error: %1</source>
        <translation>Erreur réseau : %1</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="109"/>
        <source>Unexpected response from EUVD</source>
        <translation>Réponse inattendue d&apos;EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="158"/>
        <source>No CVEs found in EUVD</source>
        <translation>Aucun CVE trouvé dans EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="159"/>
        <source>%1 CVE(s) — showing %2</source>
        <translation>%1 CVE — affichage de %2</translation>
    </message>
</context>
<context>
    <name>CvePage</name>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="54"/>
        <source>Known CVEs</source>
        <translation>CVE connus</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="60"/>
        <source>Vendor + model</source>
        <translation>Fabricant + modèle</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="79"/>
        <source>Also check (opens in browser):</source>
        <translation>À vérifier aussi (ouvre dans le navigateur) :</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="117"/>
        <source>Open on NVD</source>
        <translation>Ouvrir sur NVD</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="121"/>
        <source>Search Exploit-DB</source>
        <translation>Chercher sur Exploit-DB</translation>
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
        <translation>oui</translation>
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
        <translation>non</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="70"/>
        <location filename="../qml/pages/DevicePage.qml" line="226"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="71"/>
        <source>Name (BlueZ)</source>
        <translation>Nom (BlueZ)</translation>
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
        <translation>Confidentialité MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>Zufalls-MAC</source>
        <translation>MAC aléatoire</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>statisch/öffentlich</source>
        <translation>statique/publique</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="76"/>
        <location filename="../qml/pages/DevicePage.qml" line="253"/>
        <source>Hersteller (OUI)</source>
        <translation>Fabricant (OUI)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="77"/>
        <source>Typ</source>
        <translation>Type</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="78"/>
        <location filename="../qml/pages/DevicePage.qml" line="269"/>
        <source>BlueZ-Icon</source>
        <translation>Icône BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="83"/>
        <source>Distanz</source>
        <translation>Distance</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="85"/>
        <source>Richtung</source>
        <translation>Direction</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="86"/>
        <source>Gekoppelt</source>
        <translation>Couplé</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="87"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <source>Gebondet</source>
        <translation>Lié (bonded)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="88"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <source>Verbunden</source>
        <translation>Connecté</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="89"/>
        <source>Vertraut</source>
        <translation>De confiance</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="90"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <source>Blockiert</source>
        <translation>Bloqué</translation>
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
        <translation>Services résolus</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="93"/>
        <source>Risiko</source>
        <translation>Risque</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="97"/>
        <source>Tracker</source>
        <translation>Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="98"/>
        <source>Dienste/UUIDs</source>
        <translation>Services/UUIDs</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="101"/>
        <location filename="../qml/pages/DevicePage.qml" line="468"/>
        <source>Hersteller-Daten</source>
        <translation>Données fabricant</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="109"/>
        <location filename="../qml/pages/DevicePage.qml" line="499"/>
        <source>Service-Daten</source>
        <translation>Données de service</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="121"/>
        <source>In die Zwischenablage kopiert</source>
        <translation>Copié dans le presse-papiers</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="130"/>
        <source>In Zwischenablage kopieren</source>
        <translation>Copier dans le presse-papiers</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="134"/>
        <source>Verknüpfungs-Ansicht (Begleitgeräte)</source>
        <translation>Vue des associations (appareils compagnons)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="138"/>
        <source>Richtung hier setzen (zeigt zum Gerät)</source>
        <translation>Définir la direction ici (pointe vers l&apos;appareil)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="141"/>
        <source>Richtung gespeichert: %1°</source>
        <translation>Direction enregistrée : %1°</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="146"/>
        <source>Gerät aus BlueZ entfernen</source>
        <translation>Retirer l&apos;appareil de BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="148"/>
        <source>Entfernt</source>
        <translation>Retiré</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="149"/>
        <source>Entfernen fehlgeschlagen</source>
        <translation>Échec du retrait</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="182"/>
        <source>Mögliches Hacker-Gadget: %1</source>
        <translation>Possible gadget de hacker : %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="208"/>
        <source>Risiko: %1</source>
        <translation>Risque : %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="225"/>
        <source>Identität</source>
        <translation>Identité</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="235"/>
        <source>Adresse (MAC)</source>
        <translation>Adresse (MAC)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="247"/>
        <source>Adress-Typ</source>
        <translation>Type d&apos;adresse</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="250"/>
        <source>Zufalls-MAC (gut)</source>
        <translation>MAC aléatoire (bien)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="251"/>
        <source>statisch/öffentlich (trackbar)</source>
        <translation>statique/publique (traçable)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="255"/>
        <source>Geräte-Typ (erkannt)</source>
        <translation>Type d&apos;appareil (détecté)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="259"/>
        <source>Identität (vermutet)</source>
        <translation>Identité (supposée)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="268"/>
        <source>Funk-Typ</source>
        <translation>Type de radio</translation>
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
        <translation>Signal &amp; distance</translation>
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
        <translation>Distance (approx.)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="300"/>
        <source>Gemessene Richtung</source>
        <translation>Direction mesurée</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="303"/>
        <source>— (Pulldown: hier setzen)</source>
        <translation>— (menu déroulant : définir ici)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="307"/>
        <source>Verlauf &amp; Ortung</source>
        <translation>Historique &amp; localisation</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="308"/>
        <source>Sichtungen</source>
        <translation>Détections</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="309"/>
        <source>Beobachtet seit</source>
        <translation>Observé depuis</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="327"/>
        <source>⚠ Stalking-Verdacht: Dieser Tracker läuft seit %1 mit. Bewege dich an einen anderen Ort — bleibt er dabei, ist er vermutlich bei dir/an deinen Sachen.</source>
        <translation>⚠ Soupçon de stalking : ce Tracker te suit depuis %1. Déplace-toi ailleurs — s&apos;il reste, il est probablement sur toi/dans tes affaires.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="341"/>
        <source>RSSI-Verlauf — oben weit/rot, unten nah/grün (zum Orten gehen)</source>
        <translation>Historique RSSI — en haut loin/rouge, en bas proche/vert (se déplacer pour localiser)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="389"/>
        <source>Status</source>
        <translation>État</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <source>Gekoppelt (paired)</source>
        <translation>Couplé (paired)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <source>Vertraut (trusted)</source>
        <translation>De confiance (trusted)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="397"/>
        <source>ja (schwächer)</source>
        <translation>oui (plus faible)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="410"/>
        <source>Beacon</source>
        <translation>Beacon</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="428"/>
        <source>Tracker-Warnung</source>
        <translation>Alerte Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="434"/>
        <source>Wenn dieses Gerät dir an wechselnden Orten folgt, könnte es zum Tracking/Stalking genutzt werden.</source>
        <translation>Si cet appareil te suit à des endroits changeants, il pourrait servir au tracking/stalking.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="443"/>
        <source>Dienste / GATT-UUIDs (%1)</source>
        <translation>Services / GATT-UUIDs (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="527"/>
        <source>Mögliche Peripherie in der Nähe (%1)</source>
        <translation>Périphériques possibles à proximité (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="536"/>
        <source>Eingabegeräte (Maus/Tastatur/Pen) in Funkreichweite. Ob sie wirklich mit DIESEM Gerät gekoppelt sind, ist passiv NICHT feststellbar (privates Piconet) — hier nur als naheliegende Kandidaten in der Nähe.</source>
        <translation>Appareils d&apos;entrée (souris/clavier/Pen) à portée radio. Impossible de déterminer passivement s&apos;ils sont réellement couplés à CET appareil (piconet privé) — présentés ici seulement comme candidats plausibles à proximité.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="571"/>
        <source>CVEs für dieses Gerät suchen</source>
        <translation>Chercher des CVE pour cet appareil</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="576"/>
        <source>Intern</source>
        <translation>Interne</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="577"/>
        <source>D-Bus-Pfad</source>
        <translation>Chemin D-Bus</translation>
    </message>
</context>
<context>
    <name>LanguagePage</name>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="22"/>
        <source>Sprache</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="31"/>
        <source>Wirkt beim nächsten Start der App. Nur Deutsch und Englisch sind geprüft; die übrigen Sprachen sind maschinell übersetzt. Englisch ist hier immer verfügbar.</source>
        <translation>Prend effet au prochain démarrage de l&apos;app. Seuls l&apos;allemand et l&apos;anglais sont vérifiés ; les autres langues sont traduites automatiquement. L&apos;anglais est toujours disponible ici.</translation>
    </message>
</context>
<context>
    <name>LanguageSettings</name>
    <message>
        <location filename="../src/languagesettings.cpp" line="85"/>
        <source>System language</source>
        <translation>Langue du système</translation>
    </message>
</context>
<context>
    <name>ListPage</name>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="35"/>
        <source>⚠ Kamera-Brille: %1 (%2)</source>
        <translation>⚠ Lunettes-caméra : %1 (%2)</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="61"/>
        <source>Über iBT</source>
        <translation>À propos d&apos;iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="65"/>
        <source>Liste leeren</source>
        <translation>Vider la liste</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan stoppen</source>
        <translation>Arrêter le scan</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan starten</source>
        <translation>Démarrer le scan</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="77"/>
        <source>Geräte</source>
        <translation>Appareils</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="78"/>
        <source>scannt… %1</source>
        <translation>analyse… %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="87"/>
        <source>Noch nichts gefunden</source>
        <translation>Rien trouvé pour l&apos;instant</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="88"/>
        <source>Bluetooth ist aus</source>
        <translation>Le Bluetooth est désactivé</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="89"/>
        <source>Scan läuft — Geräte tauchen gleich auf</source>
        <translation>Scan en cours — les appareils apparaîtront bientôt</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="90"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>Veuillez activer le Bluetooth</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="151"/>
        <source>Zufalls-MAC</source>
        <translation>MAC aléatoire</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="172"/>
        <source>⚠ Kamera-Brille: %1 · Konfidenz %2</source>
        <translation>⚠ Lunettes-caméra : %1 · Confiance %2</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>verbunden</source>
        <translation>connecté</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>gekoppelt</source>
        <translation>couplé</translation>
    </message>
</context>
<context>
    <name>OsmFetch</name>
    <message>
        <location filename="../src/osmfetch.cpp" line="57"/>
        <source>Loading map…</source>
        <translation>Chargement de la carte…</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="66"/>
        <source>Map unavailable (no Overpass mirror reachable)</source>
        <translation>Carte indisponible (aucun miroir Overpass joignable)</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="127"/>
        <source>No map data here</source>
        <translation>Aucune donnée cartographique ici</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="128"/>
        <source>Map loaded (%1 ways)</source>
        <translation>Carte chargée (%1 chemins)</translation>
    </message>
</context>
<context>
    <name>RadarPage</name>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="59"/>
        <source>Hintergrundkarte an (braucht GPS-Fix)</source>
        <translation>Carte de fond activée (nécessite un fix GPS)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="60"/>
        <source>Hintergrundkarte aus</source>
        <translation>Carte de fond désactivée</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="98"/>
        <source>Über iBT</source>
        <translation>À propos d&apos;iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="102"/>
        <source>Heading kalibrieren (0°)</source>
        <translation>Calibrer le cap (0°)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="103"/>
        <source>Heading = 0°</source>
        <translation>Cap = 0°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>GPS: %1</source>
        <translation>GPS : %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="106"/>
        <source>an (Fix)</source>
        <translation>activé (fix)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <source>an (suche…)</source>
        <translation>activé (recherche…)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>aus</source>
        <translation>désactivé</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>Koordinaten: %1</source>
        <translation>Coordonnées : %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>ein</source>
        <translation>activé</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>Hintergrundkarte (OSM): %1</source>
        <translation>Carte de fond (OSM) : %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>an</source>
        <translation>activé</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="119"/>
        <source>Gerätetopologie (BLE-Links)</source>
        <translation>Topologie des appareils (liens BLE)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="123"/>
        <source>Liste anzeigen</source>
        <translation>Afficher la liste</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan stoppen</source>
        <translation>Arrêter le scan</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan starten</source>
        <translation>Démarrer le scan</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="141"/>
        <source>iBT — Radar</source>
        <translation>iBT — Radar</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="149"/>
        <source>scannt… %1 Geräte</source>
        <translation>analyse… %1 appareils</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="150"/>
        <source>%1 Geräte</source>
        <translation>%1 appareils</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="151"/>
        <source>Rand %1 m · %2× · %3°</source>
        <translation>Bord %1 m · %2× · %3°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="393"/>
        <source>Zoom — raus für die Karte, rein für nahe Geräte</source>
        <translation>Zoom — dézoomer pour la carte, zoomer pour les appareils proches</translation>
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
        <translation>faible</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="421"/>
        <source>kritisch</source>
        <translation>critique</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="445"/>
        <source>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/beides · voll = Richtung gemessen, hohl = vorläufig.
☠ Angreifer (Farbe = Art): Flipper orange · WLAN-Tool gelb · O.MG lila · Sniffer cyan · Stalking/sonst rot.</source>
        <translation>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/les deux · plein = direction mesurée, creux = provisoire.
☠ Attaquant (couleur = type) : Flipper orange · outil WLAN jaune · O.MG violet · Sniffer cyan · stalking/autre rouge.</translation>
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
        <translation>faible</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="47"/>
        <source>kritisch</source>
        <translation>critique</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="73"/>
        <source>GPS an — nur zum Zentrieren der Hintergrundkarte</source>
        <translation>GPS activé — uniquement pour centrer la carte de fond</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="74"/>
        <source>GPS aus</source>
        <translation>GPS désactivé</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="94"/>
        <source>kein Fix</source>
        <translation>pas de fix</translation>
    </message>
</context>
</TS>
