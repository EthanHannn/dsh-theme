import { createVividFamily } from "./create-vivid-family.js";

// Playful character-inspired phrases, not a transcript of the series.
const family = createVividFamily({
  "id": "chiikawa-picnic",
  "signaturePrefix": "chiikawa-picnic",
  names: { zh: "吉伊卡哇 · 小小生活", en: "Chiikawa · Little Everyday Moments" },
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

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "草原野餐", en: "Meadow Picnic" };
family.legacyFamilies = [
  { id: "chiikawa-stargaze", artwork: "stargaze" },
  { id: "chiikawa-bakery", artwork: "bakery" },
  { id: "chiikawa-rainy", artwork: "rainy-letter" },
];
family.artworks = [
  {
    id: "stargaze",
    names: { zh: "星夜漫游", en: "Stargazing" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["吉伊：哇……！", "吉伊：嗯！"],
          ["小八：今天也发现了新的星星呢。", "小八：一点一点来就好！"],
          ["乌萨奇：呀哈！", "乌萨奇：乌拉！"],
        ],
        en: [
          ["Chiikawa: Waah...!", "Chiikawa: Mm!"],
          ["Hachiware: Another star to discover.", "Hachiware: One little step at a time!"],
          ["Usagi: Yaha!", "Usagi: Ura!"],
        ],
      },
      wallpaperSize: "min(36vw, 460px, 46vh)",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)",
    },
  },
  {
    id: "bakery",
    names: { zh: "烘焙小队", en: "Little Bakery" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["吉伊：哇……烤好了！", "吉伊：嗯！这一袋留给你。"],
          ["小八：面团慢慢揉就会变软哦。", "小八：这个形状，好像我们呀。"],
          ["乌萨奇：呀哈！", "乌萨奇：乌拉！"],
        ],
        en: [
          ["Chiikawa: Waah... freshly baked!", "Chiikawa: Mm! This bag is for you."],
          ["Hachiware: A little kneading makes it soft.", "Hachiware: This bun looks like us!"],
          ["Usagi: Yaha!", "Usagi: Ura!"],
        ],
      },
      wallpaperSize: "min(36vw, 460px, 46vh)",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)",
    },
  },
  {
    id: "rainy-letter",
    names: { zh: "雨后来信", en: "Letters After Rain" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["吉伊：哇……来信了！", "吉伊：嗯！收好了。"],
          ["小八：雨停啦，一起送信吧。", "小八：把想说的话慢慢写下来。"],
          ["乌萨奇：呀哈！", "乌萨奇：普噜噜噜！"],
        ],
        en: [
          ["Chiikawa: Waah... a letter!", "Chiikawa: Mm! Safe and sound."],
          ["Hachiware: The rain stopped. Let's deliver it.", "Hachiware: Take your time with every word."],
          ["Usagi: Yaha!", "Usagi: Purururu!"],
        ],
      },
      wallpaperSize: "min(36vw, 460px, 46vh)",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)",
    },
  },
];

export default family;
