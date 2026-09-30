import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "hearthstone-jaina",
  "signaturePrefix": "col3",
  "names": {
    "zh": "炉石传说·冰霜法师",
    "en": "Hearthstone · Frost Mage",
  },
  "phrases": {
    "zh": [
      [
        "吉安娜：先理清思路，再凝聚法力。",
      ],
      [
        "水元素：让烦恼慢慢融化。",
      ],
    ],
    "en": [
      [
        "Jaina: Clear your thoughts, then gather your mana.",
      ],
      [
        "Water Elemental: Let your worries melt away.",
      ],
    ],
  },
  "light": {
    "paper": "#EEF4F7",
    "vividPaper": "#E8F1F4",
    "ink": "#2B2E39",
    "brand": "#37618D",
    "brandText": "#FFFFFF",
    "signature": "#76639C",
    "deepAccent": "#76639C",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#122031",
    "vividPaper": "#152539",
    "text": "#FFF8F2",
    "brand": "#A0C9F0",
    "brandText": "#20212B",
    "signature": "#C9ACE9",
    "deepAccent": "#C9ACE9",
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
