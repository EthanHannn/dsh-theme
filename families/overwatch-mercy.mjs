import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "overwatch-mercy",
  "signaturePrefix": "col2",
  "names": {
    "zh": "守望先锋·守护天使",
    "en": "Overwatch · Guardian Angel",
  },
  "phrases": {
    "zh": [
      [
        "天使：我会照看好大家。",
      ],
      [
        "源氏：让心先静下来。",
      ],
    ],
    "en": [
      [
        "Mercy: I will look after everyone.",
      ],
      [
        "Genji: Let the mind grow still.",
      ],
    ],
  },
  "light": {
    "paper": "#F6F4E8",
    "vividPaper": "#F3F0E1",
    "ink": "#2B2E39",
    "brand": "#806124",
    "brandText": "#FFFFFF",
    "signature": "#487484",
    "deepAccent": "#487484",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#16222E",
    "vividPaper": "#192735",
    "text": "#FFFFFF",
    "brand": "#E6CD87",
    "brandText": "#20212B",
    "signature": "#9ACCD8",
    "deepAccent": "#9ACCD8",
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
