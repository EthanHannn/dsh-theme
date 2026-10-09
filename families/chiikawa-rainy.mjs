import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "chiikawa-rainy",
  "signaturePrefix": "chiikawa-rainy",
  "names": {
    "zh": "吉伊卡哇·雨后来信",
    "en": "Chiikawa · Letters After Rain",
  },
  "phrases": {
    "zh": [
      [
        "吉伊：哇……来信了！",
        "吉伊：嗯！收好了。",
      ],
      [
        "小八：雨停啦，一起送信吧。",
        "小八：把想说的话慢慢写下来。",
      ],
      [
        "乌萨奇：呀哈！",
        "乌萨奇：普噜噜噜！",
      ]
    ],
    "en": [
      [
        "Chiikawa: Waah... a letter!",
        "Chiikawa: Mm! Safe and sound.",
      ],
      [
        "Hachiware: The rain stopped. Let's deliver it.",
        "Hachiware: Take your time with every word.",
      ],
      [
        "Usagi: Yaha!",
        "Usagi: Purururu!",
      ]
    ],
  },
  "light": {
    "paper": "#F4F8F6",
    "vividPaper": "#EBF3F0",
    "ink": "#2A3E40",
    "brand": "#356F72",
    "brandText": "#FFFFFF",
    "signature": "#9B633B",
    "deepAccent": "#785632",
    "success": "#436D54",
    "error": "#B33B52",
    "warning": "#82601F",
  },
  "dark": {
    "ground": "#142429",
    "vividPaper": "#14262B",
    "text": "#F5FFFC",
    "brand": "#91D0CF",
    "brandText": "#152D30",
    "signature": "#E8B88C",
    "deepAccent": "#D9CDA0",
    "success": "#9ACAB0",
    "error": "#F0A5B7",
    "warning": "#DCC682",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B6C2C1";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
