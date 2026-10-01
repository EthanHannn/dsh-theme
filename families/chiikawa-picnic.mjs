import { createVividFamily } from "./create-vivid-family.js";

// Playful character-inspired phrases, not a transcript of the series.
const family = createVividFamily({
  "id": "chiikawa-picnic",
  "signaturePrefix": "chiikawa-picnic",
  "names": {
    "zh": "吉伊卡哇·草原野餐",
    "en": "Chiikawa · Meadow Picnic",
  },
  "phrases": {
    "zh": [
      [
        "吉伊：哇……！",
        "吉伊：嗯！",
      ],
      [
        "小八：忙完一起吃点好吃的吧。",
        "小八：一点一点来就好！",
      ],
      [
        "乌萨奇：呀哈！",
        "乌萨奇：乌拉！",
      ],
    ],
    "en": [
      [
        "Chiikawa: Waah...!",
        "Chiikawa: Mm!",
      ],
      [
        "Hachiware: Let's share a snack later.",
        "Hachiware: One little step at a time!",
      ],
      [
        "Usagi: Yaha!",
        "Usagi: Ura!",
      ],
    ],
  },
  "light": {
    "paper": "#FFF8FA",
    "vividPaper": "#FBEFF2",
    "ink": "#44313B",
    "brand": "#A14368",
    "brandText": "#FFFFFF",
    "signature": "#637749",
    "deepAccent": "#876225",
    "success": "#427058",
    "error": "#B43750",
    "warning": "#86601F",
  },
  "dark": {
    "ground": "#221C26",
    "vividPaper": "#2A202D",
    "text": "#FFF3F7",
    "brand": "#F3ADC8",
    "brandText": "#321C2B",
    "signature": "#BFD6A5",
    "deepAccent": "#ECD099",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// Compact triangular trio; the shared runtime scales it down on laptops.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
