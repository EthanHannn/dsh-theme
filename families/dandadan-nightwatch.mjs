import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dandadan-nightwatch",
  "signaturePrefix": "dandadan-nightwatch",
  "names": {
    "zh": "胆大党·夜巡同盟",
    "en": "DAN DA DAN · Nightwatch Friends",
  },
  "phrases": {
    "zh": [
      [
        "小桃：路线都看清楚了吧？",
        "天黑之前先集合。",
      ],
      [
        "厄卡伦：调查笔记准备好了。",
        "这条线索好像能接上。",
      ],
      [
        "寺仁：手电筒还有电！",
        "我来照前面的路。",
      ],
      [
        "星子：进门记得脱鞋。",
        "调查之前，先喝杯茶。",
      ]
    ],
    "en": [
      [
        "Momo: Everyone knows the route?",
        "Meet up before it gets dark.",
      ],
      [
        "Okarun: Investigation notes ready.",
        "This clue might connect.",
      ],
      [
        "Jiji: The flashlight is charged!",
        "I will light the way.",
      ],
      [
        "Seiko: Shoes off at the door.",
        "Tea before the investigation.",
      ]
    ],
  },
  "light": {
    "paper": "#F3F5F1",
    "vividPaper": "#E5ECE4",
    "ink": "#303540",
    "brand": "#466D71",
    "brandText": "#FFFFFF",
    "signature": "#9D6546",
    "deepAccent": "#466D71",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#192528",
    "vividPaper": "#203236",
    "text": "#F0EAE0",
    "brand": "#A5CDD1",
    "brandText": "#181B24",
    "signature": "#E9C093",
    "deepAccent": "#A5CDD1",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B4B3AC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
