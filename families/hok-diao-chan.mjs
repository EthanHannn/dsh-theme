import { createVividFamily } from "./create-vivid-family.js";

// Artwork follows the classic default skin, using Tencent official splash reference:
// https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/141/141-bigskin-1.jpg
// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "hok-diao-chan",
  "signaturePrefix": "col8",
  "names": {
    "zh": "王者荣耀·绝世舞姬",
    "en": "Honor of Kings · Lotus Dancer",
  },
  "phrases": {
    "zh": [
      [
        "貂蝉：让思绪跟上花开的节奏。",
      ],
      [
        "莲灵：慢慢来，花会开。",
      ],
    ],
    "en": [
      [
        "Diao Chan: Let your thoughts follow the blossoms.",
      ],
      [
        "Lotus Spirit: Take your time. Flowers will bloom.",
      ],
    ],
  },
  "light": {
    "paper": "#F8EEF4",
    "vividPaper": "#F6E9F0",
    "ink": "#2B2E39",
    "brand": "#945477",
    "brandText": "#FFFFFF",
    "signature": "#6464A0",
    "deepAccent": "#6464A0",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#231729",
    "vividPaper": "#291B30",
    "text": "#FFF8F2",
    "brand": "#E7B0D2",
    "brandText": "#20212B",
    "signature": "#C7BBED",
    "deepAccent": "#C7BBED",
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
