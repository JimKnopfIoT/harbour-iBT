<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>AboutPage</name>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="17"/>
        <source>Über iBT</source>
        <translation>درباره iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="24"/>
        <source>iBT — passives Bluetooth-/BLE-Sicherheits- und Analyse-Tool.

Scannt über die BlueZ-Schnittstelle des Telefons nahe BT-/BLE-Geräte und liest nur frei gesendete Advertising-Daten: Name, MAC, RSSI, Hersteller, Dienste, Hersteller-/Service-Daten. Dekodiert Beacons (iBeacon/Eddystone/AltBeacon), erkennt Tracker (AirTag/SmartTag/Tile) und werbebasierte Angriffe (BLE-Spam-Fluten) und gibt eine passive Risiko-Einschätzung.

Strikt passiv: iBT liest nur, was Geräte ohnehin frei aussenden, und ruft diese Werte allein aus der lokalen BlueZ-Schnittstelle ab. Auch Dienste, Service-Daten und Kopplungs-/Verbindungs-Status werden nicht beim fremden Gerät erfragt, sondern nur lokal ausgelesen.

Über das übliche Link-Layer-Suchsignal hinaus — das jeder Bluetooth-Scan (auch die System-Einstellungen) nutzt, um Geräte in der Nähe zu finden — sendet iBT keine Informationen und fragt auch aktiv keine ab: keine Verbindung, kein GATT, kein Pairing. Kein Mitschnitt fremden Verkehrs, keine Angriffe, kein Logging, kein Export von Scan-Daten. Der Standort (optional) dient nur dem Zentrieren der Hintergrundkarte und wird nicht gespeichert.

Hinweis: BT-Adressen sind personenbezogene Daten — verantwortungsvoll und nur zur eigenen Lageeinschätzung nutzen.</source>
        <translation>iBT — ابزار غیرفعال امنیت و تحلیل Bluetooth/BLE.

از طریق واسط BlueZ گوشی دستگاه‌های نزدیک BT/BLE را اسکن می‌کند و فقط داده‌های advertising که آزادانه فرستاده می‌شوند را می‌خواند: نام، MAC، RSSI، سازنده، سرویس‌ها، داده‌های سازنده/سرویس. Beaconها (iBeacon/Eddystone/AltBeacon) را رمزگشایی می‌کند، Trackerها (AirTag/SmartTag/Tile) و حملات مبتنی بر advertising (سیل BLE-Spam) را تشخیص می‌دهد و یک ارزیابی غیرفعال از خطر ارائه می‌دهد.

کاملاً غیرفعال: iBT فقط چیزی را می‌خواند که دستگاه‌ها به‌هر‌حال آزادانه می‌فرستند و این مقادیر را منحصراً از واسط محلی BlueZ می‌گیرد. حتی سرویس‌ها، داده‌های سرویس و وضعیت جفت‌شدن/اتصال از دستگاه بیگانه پرسیده نمی‌شوند، بلکه فقط به‌صورت محلی خوانده می‌شوند.

فراتر از سیگنال جست‌وجوی معمول در link-layer — که هر اسکن Bluetooth (از جمله تنظیمات سیستم) برای یافتن دستگاه‌های نزدیک از آن استفاده می‌کند — iBT هیچ اطلاعاتی نمی‌فرستد و فعالانه هم چیزی نمی‌پرسد: نه اتصال، نه GATT، نه pairing. نه ضبط ترافیک دیگران، نه حمله، نه logging، نه صدور داده‌های اسکن. موقعیت مکانی (اختیاری) فقط برای مرکز کردن نقشه پس‌زمینه به کار می‌رود و ذخیره نمی‌شود.

توجه: آدرس‌های BT داده‌های شخصی هستند — مسئولانه و فقط برای ارزیابی وضعیت خودت از آن‌ها استفاده کن.</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="45"/>
        <source>Sprache</source>
        <translation>زبان</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="48"/>
        <source>Sprache wählen</source>
        <translation>انتخاب زبان</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="52"/>
        <source>Adapter</source>
        <translation>Adapter</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="53"/>
        <source>Name</source>
        <translation>نام</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="54"/>
        <source>Adresse</source>
        <translation>آدرس</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="56"/>
        <source>Status</source>
        <translation>وضعیت</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="57"/>
        <source>nicht gefunden</source>
        <translation>یافت نشد</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>an</source>
        <translation>روشن</translation>
    </message>
    <message>
        <location filename="../qml/pages/AboutPage.qml" line="58"/>
        <source>aus</source>
        <translation>خاموش</translation>
    </message>
</context>
<context>
    <name>BtTopologyPage</name>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="82"/>
        <source>Verknüpfungs-Ansicht</source>
        <translation>نمای پیوندها</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="92"/>
        <source>Nur Eingabe-/Audio-/Wearable-Geräte in unmittelbarer Nähe (±12 dB). Das ist KEINE bestätigte Kopplung — die ist passiv nicht feststellbar. Hinweis: Maus/Tastatur/Pen, die bereits mit einem PC verbunden sind, advertisen meist nicht mehr und sind daher unsichtbar.</source>
        <translation>فقط دستگاه‌های ورودی/صوتی/wearable در نزدیکی بی‌واسطه (±12 dB). این یک جفت‌شدن تأییدشده نیست — جفت‌شدن را نمی‌توان غیرفعال تشخیص داد. توجه: موس/صفحه‌کلید/Pen که از پیش به یک رایانه متصل‌اند معمولاً دیگر advertising نمی‌کنند و بنابراین نامرئی‌اند.</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="101"/>
        <source>Keine sichtbaren Begleiter</source>
        <translation>همراه قابل‌مشاهده‌ای نیست</translation>
    </message>
    <message>
        <location filename="../qml/pages/BtTopologyPage.qml" line="102"/>
        <source>Verbundene Eingabegeräte (Maus/Pen) sind im Betrieb nicht discoverable und daher passiv unsichtbar.</source>
        <translation>دستگاه‌های ورودی متصل (موس/Pen) هنگام کار discoverable نیستند و بنابراین غیرفعال نامرئی‌اند.</translation>
    </message>
</context>
<context>
    <name>CoverPage</name>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="23"/>
        <source>BT-Geräte</source>
        <translation>دستگاه‌های BT</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="29"/>
        <source>scannt…</source>
        <translation>در حال اسکن…</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Kein BT-Adapter</source>
        <translation>بدون adapter BT</translation>
    </message>
    <message>
        <location filename="../qml/cover/CoverPage.qml" line="42"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>لطفاً Bluetooth را روشن کن</translation>
    </message>
</context>
<context>
    <name>CveLookup</name>
    <message>
        <location filename="../src/cvelookup.cpp" line="45"/>
        <source>No device to search for</source>
        <translation>دستگاهی برای جست‌وجو نیست</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="60"/>
        <source>Searching EUVD for &quot;%1&quot;…</source>
        <translation>جست‌وجوی EUVD برای &quot;%1&quot;…</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="101"/>
        <source>Network error: %1</source>
        <translation>خطای شبکه: %1</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="109"/>
        <source>Unexpected response from EUVD</source>
        <translation>پاسخ غیرمنتظره از EUVD</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="158"/>
        <source>No CVEs found in EUVD</source>
        <translation>هیچ CVE در EUVD یافت نشد</translation>
    </message>
    <message>
        <location filename="../src/cvelookup.cpp" line="159"/>
        <source>%1 CVE(s) — showing %2</source>
        <translation>%1 CVE — نمایش %2</translation>
    </message>
</context>
<context>
    <name>CvePage</name>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="54"/>
        <source>Known CVEs</source>
        <translation>CVEهای شناخته‌شده</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="60"/>
        <source>Vendor + model</source>
        <translation>سازنده + مدل</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="79"/>
        <source>Also check (opens in browser):</source>
        <translation>همچنین بررسی کن (در مرورگر باز می‌شود):</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="117"/>
        <source>Open on NVD</source>
        <translation>باز کردن در NVD</translation>
    </message>
    <message>
        <location filename="../qml/pages/CvePage.qml" line="121"/>
        <source>Search Exploit-DB</source>
        <translation>جست‌وجو در Exploit-DB</translation>
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
        <translation>بله</translation>
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
        <translation>خیر</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="70"/>
        <location filename="../qml/pages/DevicePage.qml" line="226"/>
        <source>Name</source>
        <translation>نام</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="71"/>
        <source>Name (BlueZ)</source>
        <translation>نام (BlueZ)</translation>
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
        <translation>MAC-Privacy</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>Zufalls-MAC</source>
        <translation>Zufalls-MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="75"/>
        <source>statisch/öffentlich</source>
        <translation>ثابت/عمومی</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="76"/>
        <location filename="../qml/pages/DevicePage.qml" line="253"/>
        <source>Hersteller (OUI)</source>
        <translation>سازنده (OUI)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="77"/>
        <source>Typ</source>
        <translation>نوع</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="78"/>
        <location filename="../qml/pages/DevicePage.qml" line="269"/>
        <source>BlueZ-Icon</source>
        <translation>آیکون BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="83"/>
        <source>Distanz</source>
        <translation>فاصله</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="85"/>
        <source>Richtung</source>
        <translation>جهت</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="86"/>
        <source>Gekoppelt</source>
        <translation>جفت‌شده</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="87"/>
        <location filename="../qml/pages/DevicePage.qml" line="391"/>
        <source>Gebondet</source>
        <translation>Bonded</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="88"/>
        <location filename="../qml/pages/DevicePage.qml" line="394"/>
        <source>Verbunden</source>
        <translation>متصل</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="89"/>
        <source>Vertraut</source>
        <translation>مورد اعتماد</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="90"/>
        <location filename="../qml/pages/DevicePage.qml" line="393"/>
        <source>Blockiert</source>
        <translation>مسدود</translation>
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
        <translation>سرویس‌ها تفکیک شد</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="93"/>
        <source>Risiko</source>
        <translation>خطر</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="97"/>
        <source>Tracker</source>
        <translation>Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="98"/>
        <source>Dienste/UUIDs</source>
        <translation>سرویس‌ها/UUIDs</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="101"/>
        <location filename="../qml/pages/DevicePage.qml" line="468"/>
        <source>Hersteller-Daten</source>
        <translation>داده‌های سازنده</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="109"/>
        <location filename="../qml/pages/DevicePage.qml" line="499"/>
        <source>Service-Daten</source>
        <translation>داده‌های سرویس</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="121"/>
        <source>In die Zwischenablage kopiert</source>
        <translation>در کلیپ‌بورد کپی شد</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="130"/>
        <source>In Zwischenablage kopieren</source>
        <translation>کپی در کلیپ‌بورد</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="134"/>
        <source>Verknüpfungs-Ansicht (Begleitgeräte)</source>
        <translation>نمای پیوندها (دستگاه‌های همراه)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="138"/>
        <source>Richtung hier setzen (zeigt zum Gerät)</source>
        <translation>تنظیم جهت در اینجا (به دستگاه اشاره می‌کند)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="141"/>
        <source>Richtung gespeichert: %1°</source>
        <translation>جهت ذخیره شد: %1°</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="146"/>
        <source>Gerät aus BlueZ entfernen</source>
        <translation>حذف دستگاه از BlueZ</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="148"/>
        <source>Entfernt</source>
        <translation>حذف شد</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="149"/>
        <source>Entfernen fehlgeschlagen</source>
        <translation>حذف ناموفق بود</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="182"/>
        <source>Mögliches Hacker-Gadget: %1</source>
        <translation>ابزارک هکری احتمالی: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="208"/>
        <source>Risiko: %1</source>
        <translation>خطر: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="225"/>
        <source>Identität</source>
        <translation>هویت</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="235"/>
        <source>Adresse (MAC)</source>
        <translation>آدرس (MAC)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="247"/>
        <source>Adress-Typ</source>
        <translation>نوع آدرس</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="250"/>
        <source>Zufalls-MAC (gut)</source>
        <translation>Zufalls-MAC (خوب)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="251"/>
        <source>statisch/öffentlich (trackbar)</source>
        <translation>ثابت/عمومی (قابل ردیابی)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="255"/>
        <source>Geräte-Typ (erkannt)</source>
        <translation>نوع دستگاه (تشخیص‌داده‌شده)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="259"/>
        <source>Identität (vermutet)</source>
        <translation>هویت (حدسی)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="268"/>
        <source>Funk-Typ</source>
        <translation>نوع رادیو</translation>
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
        <translation>سیگنال و فاصله</translation>
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
        <translation>فاصله (تقریبی)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="300"/>
        <source>Gemessene Richtung</source>
        <translation>جهت اندازه‌گیری‌شده</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="303"/>
        <source>— (Pulldown: hier setzen)</source>
        <translation>— (Pulldown: اینجا تنظیم کن)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="307"/>
        <source>Verlauf &amp; Ortung</source>
        <translation>تاریخچه و مکان‌یابی</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="308"/>
        <source>Sichtungen</source>
        <translation>مشاهدات</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="309"/>
        <source>Beobachtet seit</source>
        <translation>مشاهده‌شده از</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="327"/>
        <source>⚠ Stalking-Verdacht: Dieser Tracker läuft seit %1 mit. Bewege dich an einen anderen Ort — bleibt er dabei, ist er vermutlich bei dir/an deinen Sachen.</source>
        <translation>⚠ سوءظن stalking: این Tracker از %1 پیش با تو همراه است. به جای دیگری برو — اگر همچنان ماند، احتمالاً روی تو/روی وسایل توست.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="341"/>
        <source>RSSI-Verlauf — oben weit/rot, unten nah/grün (zum Orten gehen)</source>
        <translation>تاریخچه RSSI — بالا دور/قرمز، پایین نزدیک/سبز (برای مکان‌یابی برو)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="389"/>
        <source>Status</source>
        <translation>وضعیت</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="390"/>
        <source>Gekoppelt (paired)</source>
        <translation>جفت‌شده (paired)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="392"/>
        <source>Vertraut (trusted)</source>
        <translation>مورد اعتماد (trusted)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="397"/>
        <source>ja (schwächer)</source>
        <translation>بله (ضعیف‌تر)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="410"/>
        <source>Beacon</source>
        <translation>Beacon</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="428"/>
        <source>Tracker-Warnung</source>
        <translation>هشدار Tracker</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="434"/>
        <source>Wenn dieses Gerät dir an wechselnden Orten folgt, könnte es zum Tracking/Stalking genutzt werden.</source>
        <translation>اگر این دستگاه در مکان‌های مختلف تو را دنبال کند، ممکن است برای tracking/stalking استفاده شود.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="443"/>
        <source>Dienste / GATT-UUIDs (%1)</source>
        <translation>سرویس‌ها / GATT-UUIDs (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="527"/>
        <source>Mögliche Peripherie in der Nähe (%1)</source>
        <translation>دستگاه‌های جانبی احتمالی نزدیک (%1)</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="536"/>
        <source>Eingabegeräte (Maus/Tastatur/Pen) in Funkreichweite. Ob sie wirklich mit DIESEM Gerät gekoppelt sind, ist passiv NICHT feststellbar (privates Piconet) — hier nur als naheliegende Kandidaten in der Nähe.</source>
        <translation>دستگاه‌های ورودی (موس/صفحه‌کلید/Pen) در بُرد رادیویی. اینکه واقعاً با این دستگاه جفت شده‌اند یا نه، غیرفعال قابل تشخیص نیست (piconet خصوصی) — اینجا فقط به‌عنوان نامزدهای محتمل نزدیک.</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="571"/>
        <source>CVEs für dieses Gerät suchen</source>
        <translation>جست‌وجوی CVEها برای این دستگاه</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="576"/>
        <source>Intern</source>
        <translation>داخلی</translation>
    </message>
    <message>
        <location filename="../qml/pages/DevicePage.qml" line="577"/>
        <source>D-Bus-Pfad</source>
        <translation>مسیر D-Bus</translation>
    </message>
</context>
<context>
    <name>LanguagePage</name>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="22"/>
        <source>Sprache</source>
        <translation>زبان</translation>
    </message>
    <message>
        <location filename="../qml/pages/LanguagePage.qml" line="31"/>
        <source>Wirkt beim nächsten Start der App. Nur Deutsch und Englisch sind geprüft; die übrigen Sprachen sind maschinell übersetzt. Englisch ist hier immer verfügbar.</source>
        <translation>از اجرای بعدی برنامه اعمال می‌شود. فقط آلمانی و انگلیسی بازبینی شده‌اند؛ بقیه زبان‌ها ماشینی ترجمه شده‌اند. انگلیسی همیشه اینجا در دسترس است.</translation>
    </message>
</context>
<context>
    <name>LanguageSettings</name>
    <message>
        <location filename="../src/languagesettings.cpp" line="85"/>
        <source>System language</source>
        <translation>زبان سیستم</translation>
    </message>
</context>
<context>
    <name>ListPage</name>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="35"/>
        <source>⚠ Kamera-Brille: %1 (%2)</source>
        <translation>⚠ Kamera-Brille: %1 (%2)</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="61"/>
        <source>Über iBT</source>
        <translation>درباره iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="65"/>
        <source>Liste leeren</source>
        <translation>پاک کردن فهرست</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan stoppen</source>
        <translation>توقف اسکن</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="69"/>
        <source>Scan starten</source>
        <translation>شروع اسکن</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="77"/>
        <source>Geräte</source>
        <translation>دستگاه‌ها</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="78"/>
        <source>scannt… %1</source>
        <translation>در حال اسکن… %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="87"/>
        <source>Noch nichts gefunden</source>
        <translation>هنوز چیزی یافت نشد</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="88"/>
        <source>Bluetooth ist aus</source>
        <translation>Bluetooth خاموش است</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="89"/>
        <source>Scan läuft — Geräte tauchen gleich auf</source>
        <translation>اسکن در حال اجراست — دستگاه‌ها به‌زودی ظاهر می‌شوند</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="90"/>
        <source>Bitte Bluetooth einschalten</source>
        <translation>لطفاً Bluetooth را روشن کن</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="151"/>
        <source>Zufalls-MAC</source>
        <translation>Zufalls-MAC</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="172"/>
        <source>⚠ Kamera-Brille: %1 · Konfidenz %2</source>
        <translation>⚠ Kamera-Brille: %1 · اطمینان %2</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>verbunden</source>
        <translation>متصل</translation>
    </message>
    <message>
        <location filename="../qml/pages/ListPage.qml" line="202"/>
        <source>gekoppelt</source>
        <translation>جفت‌شده</translation>
    </message>
</context>
<context>
    <name>OsmFetch</name>
    <message>
        <location filename="../src/osmfetch.cpp" line="57"/>
        <source>Loading map…</source>
        <translation>بارگذاری نقشه…</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="66"/>
        <source>Map unavailable (no Overpass mirror reachable)</source>
        <translation>نقشه در دسترس نیست (هیچ Overpass mirror قابل دسترسی نیست)</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="127"/>
        <source>No map data here</source>
        <translation>اینجا داده نقشه‌ای نیست</translation>
    </message>
    <message>
        <location filename="../src/osmfetch.cpp" line="128"/>
        <source>Map loaded (%1 ways)</source>
        <translation>نقشه بارگذاری شد (%1 ways)</translation>
    </message>
</context>
<context>
    <name>RadarPage</name>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="59"/>
        <source>Hintergrundkarte an (braucht GPS-Fix)</source>
        <translation>نقشه پس‌زمینه روشن (به GPS-Fix نیاز دارد)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="60"/>
        <source>Hintergrundkarte aus</source>
        <translation>نقشه پس‌زمینه خاموش</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="98"/>
        <source>Über iBT</source>
        <translation>درباره iBT</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="102"/>
        <source>Heading kalibrieren (0°)</source>
        <translation>کالیبراسیون heading (0°)</translation>
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
        <translation>روشن (Fix)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <source>an (suche…)</source>
        <translation>روشن (جست‌وجو…)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="107"/>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>aus</source>
        <translation>خاموش</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>Koordinaten: %1</source>
        <translation>مختصات: %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="111"/>
        <source>ein</source>
        <translation>روشن</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>Hintergrundkarte (OSM): %1</source>
        <translation>نقشه پس‌زمینه (OSM): %1</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="115"/>
        <source>an</source>
        <translation>روشن</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="119"/>
        <source>Gerätetopologie (BLE-Links)</source>
        <translation>توپولوژی دستگاه‌ها (BLE-Links)</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="123"/>
        <source>Liste anzeigen</source>
        <translation>نمایش فهرست</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan stoppen</source>
        <translation>توقف اسکن</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="127"/>
        <source>Scan starten</source>
        <translation>شروع اسکن</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="141"/>
        <source>iBT — Radar</source>
        <translation>iBT — Radar</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="149"/>
        <source>scannt… %1 Geräte</source>
        <translation>در حال اسکن… %1 دستگاه</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="150"/>
        <source>%1 Geräte</source>
        <translation>%1 دستگاه</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="151"/>
        <source>Rand %1 m · %2× · %3°</source>
        <translation>لبه %1 m · %2× · %3°</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="393"/>
        <source>Zoom — raus für die Karte, rein für nahe Geräte</source>
        <translation>Zoom — بیرون برای نقشه، داخل برای دستگاه‌های نزدیک</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="418"/>
        <source>unauffällig</source>
        <translation>بدون نشانه مشکوک</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="419"/>
        <source>ok</source>
        <translation>ok</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="420"/>
        <source>schwach</source>
        <translation>ضعیف</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="421"/>
        <source>kritisch</source>
        <translation>بحرانی</translation>
    </message>
    <message>
        <location filename="../qml/pages/RadarPage.qml" line="445"/>
        <source>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/beides · voll = Richtung gemessen, hohl = vorläufig.
☠ Angreifer (Farbe = Art): Flipper orange · WLAN-Tool gelb · O.MG lila · Sniffer cyan · Stalking/sonst rot.</source>
        <translation>🎯 Tracker · 📡 Beacon · LE/BR/L+B = BLE/Classic/هر دو · تو‌پُر = جهت اندازه‌گیری‌شده، تو‌خالی = موقت.
☠ مهاجم (رنگ = نوع): Flipper نارنجی · WLAN-Tool زرد · O.MG بنفش · Sniffer فیروزه‌ای · stalking/سایر قرمز.</translation>
    </message>
</context>
<context>
    <name>harbour-ibt</name>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="44"/>
        <source>unauffällig</source>
        <translation>بدون نشانه مشکوک</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="45"/>
        <source>ok</source>
        <translation>ok</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="46"/>
        <source>schwach</source>
        <translation>ضعیف</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="47"/>
        <source>kritisch</source>
        <translation>بحرانی</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="73"/>
        <source>GPS an — nur zum Zentrieren der Hintergrundkarte</source>
        <translation>GPS روشن — فقط برای مرکز کردن نقشه پس‌زمینه</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="74"/>
        <source>GPS aus</source>
        <translation>GPS خاموش</translation>
    </message>
    <message>
        <location filename="../qml/harbour-ibt.qml" line="94"/>
        <source>kein Fix</source>
        <translation>بدون Fix</translation>
    </message>
</context>
</TS>
