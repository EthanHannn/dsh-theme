import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, not quotations from the series.
const family = createVividFamily({
  "id": "eva-unit-02",
  "signaturePrefix": "ev2",
  "names": {
    "zh": "EVA·二号机·烈焰",
    "en": "Evangelion · Unit-02 · Crimson"
  },
  "phrases": {
    "zh": [
      [
        "明日香：看好了，这才是我的节奏！",
        "明日香：准备完毕，漂亮地完成吧！"
      ],
      [
        "美里：作战之前，先把计划讲清楚。",
        "美里：辛苦啦，记得好好吃饭。"
      ]
    ],
    "en": [
      [
        "Asuka: Watch me set the pace!",
        "Asuka: Ready. Let us make this count!"
      ],
      [
        "Misato: Brief the plan before we begin.",
        "Misato: Good work. Remember to eat."
      ]
    ]
  },
  "light": {
    "paper": "#F7F0EA",
    "vividPaper": "#F3E8E0",
    "ink": "#392E34",
    "brand": "#A53E36",
    "brandText": "#FFFFFF",
    "signature": "#365E79",
    "deepAccent": "#A75B29",
    "success": "#4C725F",
    "error": "#B33450",
    "warning": "#87601B"
  },
  "dark": {
    "ground": "#20151B",
    "vividPaper": "#291B23",
    "text": "#FFF4ED",
    "brand": "#F49780",
    "brandText": "#351C22",
    "signature": "#A3C8E4",
    "deepAccent": "#E9AF70",
    "success": "#A6CCB2",
    "error": "#FFA1B9",
    "warning": "#E7BE79"
  }
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
