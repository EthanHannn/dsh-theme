import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dragon-ball-sweets",
  "signaturePrefix": "dragon-ball-sweets",
  "names": {
    "zh": "七龙珠·布欧甜点屋",
    "en": "Dragon Ball · Buu Sweet Retreat",
  },
  "phrases": {
    "zh": [
      [
        "布欧：甜点要留一份给朋友。",
      ],
      [
        "撒旦：这朵奶油花，可是冠军级的！",
      ],
      [
        "比比：汪！",
      ]
    ],
    "en": [
      [
        "Buu: Save something sweet for a friend.",
      ],
      [
        "Satan: That cream swirl is champion class!",
      ],
      [
        "Bee: Woof!",
      ]
    ],
  },
  "light": {
    "paper": "#FCF5F5",
    "vividPaper": "#F6E8EB",
    "ink": "#34362B",
    "brand": "#91516C",
    "brandText": "#FFFFFF",
    "signature": "#856029",
    "deepAccent": "#856029",
    "success": "#406B50",
    "error": "#B23D46",
    "warning": "#805E20",
  },
  "dark": {
    "ground": "#291D29",
    "vividPaper": "#322437",
    "text": "#FAF4E6",
    "brand": "#E8B1CF",
    "brandText": "#28231A",
    "signature": "#EAD099",
    "deepAccent": "#EAD099",
    "success": "#A7CFAB",
    "error": "#F4A5AC",
    "warning": "#E5C983",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#BFB8B1";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
