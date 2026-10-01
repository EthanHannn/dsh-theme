import { createVividFamily } from "./create-vivid-family.js";

// Playful character-inspired phrases, not a transcript of the series.
const family = createVividFamily({
  "id": "chiikawa-stargaze",
  "signaturePrefix": "chiikawa-stargaze",
  "names": {
    "zh": "吉伊卡哇·星夜漫游",
    "en": "Chiikawa · Stargazing",
  },
  "phrases": {
    "zh": [
      [
        "吉伊：哇……！",
        "吉伊：嗯！",
      ],
      [
        "小八：今天也发现了新的星星呢。",
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
        "Hachiware: Another star to discover.",
        "Hachiware: One little step at a time!",
      ],
      [
        "Usagi: Yaha!",
        "Usagi: Ura!",
      ],
    ],
  },
  "light": {
    "paper": "#F7F8FF",
    "vividPaper": "#EDF0FA",
    "ink": "#30354F",
    "brand": "#565B9C",
    "brandText": "#FFFFFF",
    "signature": "#946A37",
    "deepAccent": "#80568E",
    "success": "#426F64",
    "error": "#B53B60",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#171C31",
    "vividPaper": "#1E2540",
    "text": "#F0F3FF",
    "brand": "#BAC5FF",
    "brandText": "#222A48",
    "signature": "#EDD193",
    "deepAccent": "#D9B9EF",
    "success": "#A1D3C4",
    "error": "#F5A8BF",
    "warning": "#EED395",
  },
});

// Keep secondary labels readable over the brighter lavender hover wash.
family.dark.textSecondary = "#C8CEE5";

// Compact triangular trio; the shared runtime scales it down on laptops.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
