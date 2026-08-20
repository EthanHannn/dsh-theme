// Umber — a standalone neutral family: bone-white paper, espresso ink,
// warm umber accents. Deliberately IP-free.
//
// The palette's single source of truth is families/chainsaw.mjs (the two
// looks share one ramp); this file re-exports its mode params under the
// neutral identity, minimal style only. Edit chainsaw.mjs, not here.

import chainsaw from "./chainsaw.mjs";

export default {
  id: "umber",
  names: { zh: "赭棕", en: "Umber" },
  // palette kin: this family re-exports chainsaw's ramp — the settings row
  // renders the two as one palette group (vivid / minimal halves)
  kin: "chainsaw",
  styles: ["minimal"],
  light: chainsaw.light,
  dark: chainsaw.dark,
};
