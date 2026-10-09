import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "chiikawa-bakery",
  "signaturePrefix": "chiikawa-bakery",
  "names": {
    "zh": "吉伊卡哇·烘焙小队",
    "en": "Chiikawa · Little Bakery",
  },
  "phrases": {
    "zh": [
      [
        "吉伊：哇……烤好了！",
        "吉伊：嗯！这一袋留给你。",
      ],
      [
        "小八：面团慢慢揉就会变软哦。",
        "小八：这个形状，好像我们呀。",
      ],
      [
        "乌萨奇：呀哈！",
        "乌萨奇：乌拉！",
      ]
    ],
    "en": [
      [
        "Chiikawa: Waah... freshly baked!",
        "Chiikawa: Mm! This bag is for you.",
      ],
      [
        "Hachiware: A little kneading makes it soft.",
        "Hachiware: This bun looks like us!",
      ],
      [
        "Usagi: Yaha!",
        "Usagi: Ura!",
      ]
    ],
  },
  "light": {
    "paper": "#FCF7EF",
    "vividPaper": "#F7EEDF",
    "ink": "#3D3028",
    "brand": "#865337",
    "brandText": "#FFFFFF",
    "signature": "#A64769",
    "deepAccent": "#75522C",
    "success": "#476D51",
    "error": "#B2394A",
    "warning": "#806020",
  },
  "dark": {
    "ground": "#231B18",
    "vividPaper": "#2C211D",
    "text": "#FFF4E4",
    "brand": "#E8B582",
    "brandText": "#2D1D16",
    "signature": "#EEA6BE",
    "deepAccent": "#E8CBA2",
    "success": "#A8CEAC",
    "error": "#F5A3AD",
    "warning": "#E8C783",
  }
});

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
