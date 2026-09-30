import { createVividFamily } from "./create-vivid-family.js";

// Artwork follows the classic default skin, using Tencent official splash reference:
// https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/131/131-bigskin-1.jpg
// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "hok-li-bai",
  "signaturePrefix": "col7",
  "names": {
    "zh": "王者荣耀·青莲剑仙",
    "en": "Honor of Kings · Azure Lotus",
  },
  "phrases": {
    "zh": [
      [
        "李白：提笔之前，先看一眼远山。",
      ],
      [
        "青鹤：乘风，也要认准方向。",
      ],
    ],
    "en": [
      [
        "Li Bai: Look toward the mountains before you write.",
      ],
      [
        "Azure Crane: Find your course, then ride the wind.",
      ],
    ],
  },
  "light": {
    "paper": "#EEF4EF",
    "vividPaper": "#E9F1EA",
    "ink": "#2B2E39",
    "brand": "#376C67",
    "brandText": "#FFFFFF",
    "signature": "#506DA1",
    "deepAccent": "#506DA1",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#142425",
    "vividPaper": "#172A2B",
    "text": "#FFFFFF",
    "brand": "#A5D3C6",
    "brandText": "#20212B",
    "signature": "#AEC5EE",
    "deepAccent": "#AEC5EE",
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
