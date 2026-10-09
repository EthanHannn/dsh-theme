import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "lol-demacia",
  "signaturePrefix": "lol-demacia",
  "names": {
    "zh": "英雄联盟·德玛西亚巡礼",
    "en": "League of Legends · Demacia Companions",
  },
  "phrases": {
    "zh": [
      [
        "拉克丝：今天也会有好消息的。",
      ],
      [
        "盖伦：这段路，我们一起走。",
      ],
      [
        "嘉文四世：出发前，再确认一次路线。",
      ],
      [
        "奎因：华洛已经看过前面的路。",
      ]
    ],
    "en": [
      [
        "Lux: There is good news ahead.",
      ],
      [
        "Garen: We walk this road together.",
      ],
      [
        "Jarvan IV: One last look at our route.",
      ],
      [
        "Quinn: Valor has scouted the way.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F7FC",
    "vividPaper": "#EFF0F8",
    "ink": "#283238",
    "brand": "#3A598E",
    "brandText": "#FFFFFF",
    "signature": "#886934",
    "deepAccent": "#886934",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#121D30",
    "vividPaper": "#18253C",
    "text": "#F5FAFF",
    "brand": "#B3C9ED",
    "brandText": "#142333",
    "signature": "#E2C88B",
    "deepAccent": "#E2C88B",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B5BCC5";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
