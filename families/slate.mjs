// Slate — a standalone neutral family: armor-white paper, gunmetal ink,
// quiet steel-blue accents. Deliberately IP-free.
//
// The palette's single source of truth is families/gundam.mjs (the two
// looks share one ramp); this file re-exports its mode params under the
// neutral identity, minimal style only. Edit gundam.mjs, not here.

import gundam from "./gundam.mjs";

export default {
  id: "slate",
  names: { zh: "青灰", en: "Slate" },
  styles: ["minimal"],
  light: gundam.light,
  dark: gundam.dark,
};
