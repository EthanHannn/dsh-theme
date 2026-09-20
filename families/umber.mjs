// Stable legacy ID, now the Public Safety palette's quiet blue-gray companion.
//
// The palette's single source of truth is families/chainsaw.mjs (the two
// looks share one ramp); this file re-exports its mode params under the
// neutral identity, minimal style only. Edit chainsaw.mjs, not here.

import chainsaw from "./chainsaw.mjs";

export default {
  id: "umber",
  names: { zh: "冷墨", en: "Cool Ink" },
  // palette kin: this family re-exports chainsaw's ramp — the settings row
  // renders the two as one palette group (vivid / minimal halves)
  kin: "chainsaw",
  styles: ["minimal"],
  light: chainsaw.light,
  dark: chainsaw.dark,
};
