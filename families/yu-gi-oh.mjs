import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "yu-gi-oh",
  "signaturePrefix": "col9",
  "names": {
    "zh": "游戏王·决斗之魂",
    "en": "Yu-Gi-Oh! · Heart of the Duel",
  },
  "phrases": {
    "zh": [
      [
        "游戏：相信自己的下一步。",
      ],
      [
        "黑魔术师：专注，力量便会凝聚。",
      ],
    ],
    "en": [
      [
        "Yugi: Believe in your next move.",
      ],
      [
        "Dark Magician: Focus, and power will gather.",
      ],
    ],
  },
  "light": {
    "paper": "#F5EFE2",
    "vividPaper": "#F2EAD8",
    "ink": "#2B2E39",
    "brand": "#76539B",
    "brandText": "#FFFFFF",
    "signature": "#886923",
    "deepAccent": "#886923",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#1C162E",
    "vividPaper": "#211A35",
    "text": "#FFF8F2",
    "brand": "#CBB1EF",
    "brandText": "#20212B",
    "signature": "#E6CB86",
    "deepAccent": "#E6CB86",
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
