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

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
