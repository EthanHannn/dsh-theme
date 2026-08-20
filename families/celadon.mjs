// Celadon — a standalone neutral family: parchment surfaces, cool
// blue-green ink, and restrained antique-gold accents. Deliberately IP-free.
//
// The palette's single source of truth is families/frieren.mjs. This file
// re-exports its mode params under the neutral identity, minimal style only.

import frieren from "./frieren.mjs";

export default {
  id: "celadon",
  names: { zh: "青瓷", en: "Celadon" },
  // palette kin: this family re-exports frieren's ramp — the settings row
  // renders the two as one palette group (vivid / minimal halves)
  kin: "frieren",
  styles: ["minimal"],
  light: frieren.light,
  dark: frieren.dark,
};
