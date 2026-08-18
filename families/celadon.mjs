// Celadon — a standalone neutral family: parchment surfaces, cool
// blue-green ink, and restrained antique-gold accents. Deliberately IP-free.
//
// The palette's single source of truth is families/frieren.mjs. This file
// re-exports its mode params under the neutral identity, minimal style only.

import frieren from "./frieren.mjs";

export default {
  id: "celadon",
  names: { zh: "青瓷", en: "Celadon" },
  styles: ["minimal"],
  light: frieren.light,
  dark: frieren.dark,
};
