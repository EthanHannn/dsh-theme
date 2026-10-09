import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "shinchan-family",
  "signaturePrefix": "shinchan-family",
  "names": {
    "zh": "蜡笔小新·野原家的周末",
    "en": "Shin-chan · Nohara Family Weekend",
  },
  "phrases": {
    "zh": [
      [
        "小新：周末就要慢慢过嘛。",
      ],
      [
        "广志：一家人一起，就挺好。",
      ],
      [
        "美冴：便当带好了，准备出门。",
      ],
      [
        "小葵：哒呀呀！",
      ],
      [
        "小白：汪！",
      ]
    ],
    "en": [
      [
        "Shinchan: Weekends are for taking it easy.",
      ],
      [
        "Hiroshi: Together is a good place to be.",
      ],
      [
        "Misae: Lunch packed. Ready to go!",
      ],
      [
        "Himawari: Da-ya-ya!",
      ],
      [
        "Shiro: Woof!",
      ]
    ],
  },
  "light": {
    "paper": "#FCF7F1",
    "vividPaper": "#F7ECE1",
    "ink": "#39332E",
    "brand": "#976050",
    "brandText": "#FFFFFF",
    "signature": "#547D95",
    "deepAccent": "#547D95",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#2D2430",
    "vividPaper": "#392F3D",
    "text": "#FFF9F1",
    "brand": "#E9BCAA",
    "brandText": "#2B2026",
    "signature": "#A6CCDF",
    "deepAccent": "#A6CCDF",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#C4BDBB";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
