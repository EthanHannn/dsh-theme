import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "lol-ahri",
  "signaturePrefix": "col5",
  "names": {
    "zh": "英雄联盟·九尾妖狐",
    "en": "League of Legends · Nine-Tailed Fox",
  },
  "phrases": {
    "zh": [
      [
        "阿狸：跟着这点灵光走吧。",
      ],
      [
        "亚索：风会带来新的方向。",
      ],
    ],
    "en": [
      [
        "Ahri: Follow this little spark.",
      ],
      [
        "Yasuo: The wind brings a new direction.",
      ],
    ],
  },
  "light": {
    "paper": "#F8EEF2",
    "vividPaper": "#F5E8EE",
    "ink": "#2B2E39",
    "brand": "#944E70",
    "brandText": "#FFFFFF",
    "signature": "#3A7687",
    "deepAccent": "#3A7687",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#221627",
    "vividPaper": "#281A2D",
    "text": "#FFF8F2",
    "brand": "#E8ACC9",
    "brandText": "#20212B",
    "signature": "#9BD2E0",
    "deepAccent": "#9BD2E0",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
