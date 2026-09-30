import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "dr-slump",
  "signaturePrefix": "col10",
  "names": {
    "zh": "阿拉蕾·企鹅村",
    "en": "Dr. Slump · Penguin Village",
  },
  "phrases": {
    "zh": [
      [
        "阿拉蕾：今天也去探险吧！",
      ],
      [
        "千兵卫：这回的发明一定行！",
      ],
    ],
    "en": [
      [
        "Arale: Another day for an adventure!",
      ],
      [
        "Senbei: This invention will work!",
      ],
    ],
  },
  "light": {
    "paper": "#F9F2E4",
    "vividPaper": "#F7EEDB",
    "ink": "#2B2E39",
    "brand": "#80602B",
    "brandText": "#FFFFFF",
    "signature": "#805799",
    "deepAccent": "#805799",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#211C31",
    "vividPaper": "#262039",
    "text": "#FFF8F2",
    "brand": "#E7C785",
    "brandText": "#20212B",
    "signature": "#C9B0ED",
    "deepAccent": "#C9B0ED",
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
