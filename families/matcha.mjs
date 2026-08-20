// Matcha — a standalone neutral family: warm straw paper, forest ink,
// quiet tea-green accents. Deliberately IP-free.
//
// The palette's single source of truth is families/natsume.mjs (the two
// looks share one ramp); this file re-exports its mode params under the
// neutral identity, minimal style only. Edit natsume.mjs, not here.

import natsume from "./natsume.mjs";

export default {
  id: "matcha",
  names: { zh: "抹茶", en: "Matcha" },
  // palette kin: this family re-exports natsume's ramp — the settings row
  // renders the two as one palette group (vivid / minimal halves)
  kin: "natsume",
  styles: ["minimal"],
  light: natsume.light,
  dark: natsume.dark,
};
