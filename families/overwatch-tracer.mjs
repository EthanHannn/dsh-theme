import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "overwatch-tracer",
  "signaturePrefix": "col1",
  "names": {
    "zh": "守望先锋·时间跃迁",
    "en": "Overwatch · Chronal Blink",
  },
  "phrases": {
    "zh": [
      [
        "猎空：跟上我的节奏！",
      ],
      [
        "温斯顿：先把计划想清楚。",
      ],
    ],
    "en": [
      [
        "Tracer: Keep up with my pace!",
      ],
      [
        "Winston: Think the plan through first.",
      ],
    ],
  },
  "light": {
    "paper": "#F7F1E6",
    "vividPaper": "#F4ECDD",
    "ink": "#2B2E39",
    "brand": "#91551D",
    "brandText": "#FFFFFF",
    "signature": "#316D88",
    "deepAccent": "#316D88",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#1C202B",
    "vividPaper": "#202532",
    "text": "#FFFFFF",
    "brand": "#E8B970",
    "brandText": "#20212B",
    "signature": "#8FCEF0",
    "deepAccent": "#8FCEF0",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.4 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
