import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "i-am-mt-huntress",
  "signaturePrefix": "i-am-mt-huntress",
  "names": {
    "zh": "我叫MT·美屡的林间手札",
    "en": "I Am MT · Huntress Field Notes",
  },
  "phrases": {
    "zh": [
      [
        "美屡：这条小路，先记下来。",
      ],
      [
        "美屡：弓弦检查好了，走吧。",
      ],
      [
        "美屡：灯还亮着，不着急。",
      ]
    ],
    "en": [
      [
        "Meilv: Let me mark this little trail.",
      ],
      [
        "Meilv: Bow checked. Ready to go.",
      ],
      [
        "Meilv: The lantern is still bright.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F8EE",
    "vividPaper": "#EEF0DE",
    "ink": "#33352F",
    "brand": "#657A45",
    "brandText": "#FFFFFF",
    "signature": "#8A623F",
    "deepAccent": "#8A623F",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#192920",
    "vividPaper": "#21352A",
    "text": "#FFF9EF",
    "brand": "#BED49C",
    "brandText": "#20261D",
    "signature": "#DEBD95",
    "deepAccent": "#DEBD95",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#BFBFB5";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(27vw, 350px, 42vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 350px, 42vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 350px, 42vh) - 64px)";

export default family;
