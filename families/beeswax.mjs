// Beeswax — a standalone neutral family: cream paper, warm umber ink, and
// quiet honey-amber accents. Deliberately IP-free.
//
// The palette's single source of truth is families/shinchan.mjs. This file
// re-exports its mode params under the neutral identity, minimal style only.
// Edit shinchan.mjs, not here.

import shinchan from "./shinchan.mjs";

export default {
  id: "beeswax",
  names: { zh: "蜜蜡", en: "Beeswax" },
  styles: ["minimal"],
  light: shinchan.light,
  dark: shinchan.dark,
};
