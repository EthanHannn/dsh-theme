// Aizome — a standalone neutral family: warm rice paper, indigo ink,
// quiet dyed-blue accents. Deliberately IP-free.
//
// The palette's single source of truth is families/hinamatsuri.mjs (the two
// looks share one ramp); this file re-exports its mode params under the
// neutral identity, minimal style only. Edit hinamatsuri.mjs, not here.

import hinamatsuri from "./hinamatsuri.mjs";

export default {
  id: "aizome",
  names: { zh: "蓝染", en: "Aizome" },
  // palette kin: this family re-exports hinamatsuri's ramp — the settings
  // row renders the two as one palette group (vivid / minimal halves)
  kin: "hinamatsuri",
  styles: ["minimal"],
  light: hinamatsuri.light,
  dark: hinamatsuri.dark,
};
