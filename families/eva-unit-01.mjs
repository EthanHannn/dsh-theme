import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, not quotations from the series.
const family = createVividFamily({
  "id": "eva-unit-01",
  "signaturePrefix": "ev1",
  "names": {
    "zh": "EVA·初号机·觉醒",
    "en": "Evangelion · Unit-01 · Awakening"
  },
  "phrases": {
    "zh": [
      [
        "真嗣：先把眼前这一步做好。",
        "真嗣：这一次，我会认真面对。"
      ],
      [
        "绫波丽：我在这里。",
        "绫波丽：准备好了，就开始吧。"
      ]
    ],
    "en": [
      [
        "Shinji: First, take care of this step.",
        "Shinji: This time, I will face it."
      ],
      [
        "Rei: I am here.",
        "Rei: Begin when you are ready."
      ]
    ]
  },
  "light": {
    "paper": "#F3F0F8",
    "vividPaper": "#ECE8F4",
    "ink": "#302C42",
    "brand": "#654398",
    "brandText": "#FFFFFF",
    "signature": "#477335",
    "deepAccent": "#674487",
    "success": "#42765D",
    "error": "#B33D59",
    "warning": "#86651E"
  },
  "dark": {
    "ground": "#171320",
    "vividPaper": "#1D182B",
    "text": "#EEEAF5",
    "brand": "#B9A0EE",
    "brandText": "#251B39",
    "signature": "#B7DD76",
    "deepAccent": "#B7DD76",
    "success": "#9BCFB2",
    "error": "#FF91AD",
    "warning": "#E3C16C"
  }
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
