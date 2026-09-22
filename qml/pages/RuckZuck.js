/*
  harbour-ibt — "Ruck Zuck": passive detection of camera / smart glasses from
  their BLE advertising. One place for the fingerprint table; used inline by
  ListPage.qml to mark & warn about a matched device right in the scan list.

  Copyright (C) JimKnopfIoT — GPLv3 or later.

  Matching is on the Bluetooth-SIG *company ID* in the manufacturer-specific
  data (mandatory + immutable, survives the randomized MAC), plus service-UUID
  and advertised-name corroboration. Company ID alone = false-positive risk
  (a vendor makes more than glasses — e.g. 0x058E also = Quest VR), so a single
  weak signal is reported at low confidence, never as a certain hit.

  Verified against the open-source detectors NullPxl/banrays and
  yjeanrenaud/yj_nearbyglasses (see memory: ruckzuck-glasses-fingerprints).
*/
.pragma library

// company IDs -> { label, strong }.  strong=true means the vendor is glasses-
// specific enough to matter on its own; strong=false is a chip/OEM shared with
// many non-glasses products (low confidence unless corroborated).
var COMPANY = {
    0x01AB: { label: "Ray-Ban Meta",            strong: true  }, // Meta Platforms
    0x058E: { label: "Meta-Wearable / Oakley Meta", strong: true }, // Meta Platforms Technologies (also Quest!)
    0x0D53: { label: "Ray-Ban / Oakley Meta",   strong: true  }, // Luxottica (frame maker)
    0x03C2: { label: "Snap Spectacles",         strong: true  }, // Snap, Inc.
    0x05D6: { label: "AI-Brille (HeyCyan-Chip)", strong: false } // Zhuhai Jieli (Nilox/Rogbird/Rollme + viele andere)
}

// service-UUID substrings (lowercase) -> label
var UUID_HINTS = [
    { needle: "fd5f",     label: "Meta/Oculus-Service (0xFD5F)" },
    { needle: "7905fff0", label: "HeyCyan-Brillen-Service" }
]

// advertised-name substrings (lowercase)
var NAME_HINTS = ["rayban", "ray-ban", "spectacles", "heycyan"]
// "meta" as a name is weak on its own (matches too much) -> low signal only
var NAME_WEAK = ["meta"]

// Classify one device map (as produced by BtBackend::buildDevice).
// Returns { hit, model, confidence: "hoch"|"mittel"|"niedrig", reasons: [..] }.
function classify(dev) {
    var res = { hit: false, model: "", confidence: "", reasons: [] }
    if (!dev) return res

    var strongVendor = false, weakVendor = false, uuidHit = false
    var nameHit = false, nameWeak = false
    var model = ""

    // --- manufacturer company IDs ---
    var mfg = dev.manufacturerData || []
    for (var i = 0; i < mfg.length; ++i) {
        var id = mfg[i].companyId
        var c = COMPANY[id]
        if (!c) continue
        if (c.strong) { strongVendor = true; if (!model) model = c.label }
        else          { weakVendor = true;  if (!model) model = c.label }
        res.reasons.push("Company-ID " + (mfg[i].company || ("0x" + id.toString(16)))
                         + " → " + c.label)
    }

    // --- service UUIDs ---
    var uuids = dev.uuids || []
    for (var u = 0; u < uuids.length; ++u) {
        var us = ("" + uuids[u]).toLowerCase()
        for (var h = 0; h < UUID_HINTS.length; ++h) {
            if (us.indexOf(UUID_HINTS[h].needle) !== -1) {
                uuidHit = true
                res.reasons.push(UUID_HINTS[h].label)
            }
        }
    }

    // --- advertised name ---
    var nm = ("" + (dev.name || dev.alias || "")).toLowerCase()
    if (nm.length) {
        for (var n = 0; n < NAME_HINTS.length; ++n)
            if (nm.indexOf(NAME_HINTS[n]) !== -1) {
                nameHit = true
                res.reasons.push("Name enthält „" + NAME_HINTS[n] + "“")
            }
        for (var w = 0; w < NAME_WEAK.length; ++w)
            if (nm.indexOf(NAME_WEAK[w]) !== -1) nameWeak = true
    }

    // --- verdict ---
    var signals = (strongVendor ? 1 : 0) + (uuidHit ? 1 : 0) + (nameHit ? 1 : 0)
    if (strongVendor && signals >= 2) {
        res.hit = true; res.confidence = "hoch"
    } else if (strongVendor || uuidHit || nameHit) {
        res.hit = true; res.confidence = "mittel"
    } else if (weakVendor || nameWeak) {
        res.hit = true; res.confidence = "niedrig"
        if (!model && nameWeak) model = "Smart-Brille (unklar)"
    }

    res.model = model || (res.hit ? "Smart-Brille" : "")
    return res
}

// Scan a device list -> array of hits, each { dev, model, confidence, reasons },
// sorted strongest signal first, then by RSSI (nearest first).
function scan(devices) {
    var out = []
    if (!devices) return out
    var order = { "hoch": 0, "mittel": 1, "niedrig": 2 }
    for (var i = 0; i < devices.length; ++i) {
        var c = classify(devices[i])
        if (c.hit) out.push({ dev: devices[i], model: c.model,
                              confidence: c.confidence, reasons: c.reasons })
    }
    out.sort(function (a, b) {
        var d = order[a.confidence] - order[b.confidence]
        if (d !== 0) return d
        var ra = a.dev.hasRssi ? a.dev.rssi : -999
        var rb = b.dev.hasRssi ? b.dev.rssi : -999
        return rb - ra
    })
    return out
}
