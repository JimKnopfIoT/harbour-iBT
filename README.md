<p align="center">
  <img src="icons/256x256/harbour-ibt.png" width="128" alt="iBT logo">
</p>

<h1 align="center">iBT — a passive Bluetooth / BLE observer for Sailfish OS</h1>

iBT turns a Sailfish OS phone into a **strictly passive** Bluetooth / BLE
security and analysis tool. Using only the phone's own radio (via BlueZ), it
listens to the advertising data that nearby devices broadcast anyway and makes
sense of it — without ever transmitting, connecting, intercepting, attacking,
logging or exporting anything.

> Developed and tested on a **Sony Xperia 10 III** (`pdx213`). Much of it should
> work on other Sailfish OS devices too, but the Xperia 10 III is the reference
> device.

## What it does

- **Live device scan** — name, MAC, address type (random/static), RSSI, rough
  distance, device kind (LE / Classic / dual), advertised services and
  manufacturer data.
- **Radar view** — a heading-up proximity radar of the devices around you,
  plus a sortable list and a per-device detail page.
- **Beacon decoding** — iBeacon, Eddystone and AltBeacon.
- **Unwanted-tracker detection** — flags AirTag / SmartTag / Tile-style trackers
  that may be following you.
- **Threat-gadget recognition** — passively classifies well-known hostile
  Bluetooth gadgets by their advertising signature.
- **Attack detection** — spots advertising-layer BLE-spam / flood activity.
- **Vendor fingerprinting** — offline OUI → vendor lookup.
- **CVE lookup** — on request, queries public vulnerability data for a device's
  vendor / model (egress happens only when you tap it).
- **Map view** — an optional OpenStreetMap view, used purely to centre on your
  current position; the location never leaves the device except for the tile
  request you trigger.

## What it deliberately does NOT do

iBT is built to be legally unambiguous and privacy-respecting:

- beyond the ordinary link-layer discovery signal that every Bluetooth scan
  (including the phone's own system settings) uses to find nearby devices, it
  **sends no information and actively queries nothing** — no connection, no
  GATT, no pairing;
- it **never intercepts** or decrypts traffic;
- it **never attacks**, jams or manipulates anything;
- it keeps **no logs**, performs **no data export**, and does **no background
  data collection** or aggregation;
- the only thing it persists is your own app settings.

Everything it shows — device fields, advertised services, service data and the
connection/pairing status — is read locally from the phone's BlueZ interface,
never asked of the remote device. It reads what every device freely advertises
into the air — nothing more.

## Build

A standard Sailfish OS application built with the Sailfish SDK:

```
mb2 -t <your-target> build
```

This produces an RPM under `RPMS/` that you can install on the device.

## Status & responsible use

**Proof of concept / work in progress.** This is a hobby project, shared **as is**
with **no warranty** of any kind (see the GPLv3). It may be incomplete, rough
around the edges, or change without notice — use it at your own risk.

iBT is a **passive analysis / defensive** tool. It does not transmit, connect,
attack, intercept or decrypt anything, and it neither logs nor exports scan data.
Even so, **how you use it is your responsibility**:

- Bluetooth MAC addresses can constitute personal data. Use iBT to understand and
  harden **your own** environment, and respect the privacy of others.
- Observe only where you are permitted to.

Use it to understand and harden your own Bluetooth environment.
See `LICENSE` (GPLv3) and `THIRD-PARTY-NOTICES.md`.
