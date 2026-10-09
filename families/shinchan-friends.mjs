import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "shinchan-friends",
  "signaturePrefix": "shinchan-friends",
  "names": {
    "zh": "蜡笔小新·春日部探险队",
    "en": "Shin-chan · Kasukabe Explorers",
  },
  "phrases": {
    "zh": [
      [
        "小新：春日部探险队，出发！",
      ],
      [
        "风间：先看清楚地图啦。",
      ],
      [
        "妮妮：这次轮到我来安排。",
      ],
      [
        "正男：大家等等我嘛。",
      ],
      [
        "阿呆：这块石头，很特别。",
      ]
    ],
    "en": [
      [
        "Shinchan: Kasukabe explorers, move out!",
      ],
      [
        "Kazama: Read the map first!",
      ],
      [
        "Nene: My turn to make the plan.",
      ],
      [
        "Masao: Wait for me, everyone!",
      ],
      [
        "Bo: This stone is special.",
      ]
    ],
  },
  "light": {
    "paper": "#FBF9ED",
    "vividPaper": "#F4F0DC",
    "ink": "#39332E",
    "brand": "#677743",
    "brandText": "#FFFFFF",
    "signature": "#A95341",
    "deepAccent": "#A95341",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#202B2D",
    "vividPaper": "#293639",
    "text": "#FFF9F1",
    "brand": "#CAD99C",
    "brandText": "#2B2026",
    "signature": "#F1B19C",
    "deepAccent": "#F1B19C",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#C1BFBA";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
