# Übersetzungs-Status

Quelltext: die Strings stehen direkt im Code, **überwiegend Deutsch**, einige
technische Strings (CVE-Suche, Karte) Englisch. Pro Zielsprache eine `.ts`; die
`.qm` ist Build-Ergebnis (`lrelease`, vom `sailfishapp_i18n`-Build erzeugt).
`libsailfishapp` lädt die zur Geräte-Locale passende `.qm` und fällt sonst auf
den Quellstring zurück. Der In-App-Sprachwähler (About → Sprache) überschreibt
die Geräte-Locale; das geht nur mit einer echten `.qm` — deshalb haben auch
`de` und `en` eine eigene Datei (`de` glättet die englischen Quellstrings, `en`
ist der internationale Fallback).

## Sprachumfang

EU-Amtssprachen plus Russisch, Norwegisch Bokmål, Isländisch, vereinfachtes
Chinesisch, Hindi, Japanisch, Persisch und Arabisch — derselbe Satz wie beim
Schwesterprojekt xmatic (31 Ziele + Deutsch als Quelle).

Persisch und Arabisch sind Rechts-nach-links. Die Kataloge sind vollständig,
das Layout ist **noch nicht gespiegelt** — der Text läuft innerhalb der Zeile
korrekt, die Seite steht aber wie in der LTR-Fassung. Das ist eine eigene
UI-Änderung und braucht ein Gerät zur Beurteilung.

## Review-Spalte (das Einzige, was zählt)

**machine** = in einem Durchlauf ohne Muttersprachler erzeugt — brauchbar, nicht
verifiziert. So wie bei xmatic ist der Großteil unverifizierte Maschinen-Ausgabe.

| lang | Sprache | Review | Notiz |
|---|---|---|---|
| de | Deutsch | **nativ** | Projektsprache; identisch zum Quelltext, nur die engl. Quellstrings eingedeutscht |
| en | English | **reviewed** | internationaler Fallback |
| fr es it pt nl | | machine | |
| da sv nb | | machine | |
| fi et hu is | | machine | |
| pl cs sk sl hr bg ru | | machine | |
| el ro lt lv | | machine | |
| ga mt | Irisch, Maltesisch | machine, geringe Konfidenz | kleinste Korpora |
| zh_CN | vereinf. Chinesisch | machine | |
| hi | Hindi | machine, geringe Konfidenz | |
| ja | Japanisch | machine | |
| fa | Persisch | machine, geringe Konfidenz | **RTL, Layout noch nicht gespiegelt** |
| ar | Arabisch | machine, geringe Konfidenz | **RTL, Layout noch nicht gespiegelt** |

## Nicht übersetzt (Absicht)

Fachbegriffe/Eigennamen bleiben in allen Sprachen wörtlich: `iBT`, `BLE`,
`BT-Classic`, `RSSI`, `TxPower`, `MAC`, `OUI`, `GATT`, `UUID`, `CVE`, `NVD`,
`EUVD`, `Exploit-DB`, `BlueZ`, `D-Bus`, `GPS`, `OSM`, `iBeacon`, `Eddystone`,
`AltBeacon`, `AirTag`, `SmartTag`, `Tile`, `Class of Device`, `Appearance`.

## Eine Sprache bauen / prüfen

```sh
lrelease-qt5 translations/harbour-ibt-XX.ts
```

Button-Labels können mehrzeilig werden — dafür gibt es `qml/pages/WrapButton.qml`
(Silica-`Button` ist einzeilig und wächst sonst aus der Seite). Wo eine
Übersetzung länger ist als das deutsche Original, bricht der Button um statt
abzuschneiden.
