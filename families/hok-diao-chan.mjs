import { createVividFamily } from "./create-vivid-family.js";

// Artwork follows the classic default skin, using Tencent official splash reference:
// https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/141/141-bigskin-1.jpg
// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "hok-diao-chan",
  "signaturePrefix": "col8",
  names: { zh: "王者荣耀 · 貂蝉 · 花间舞梦", en: "Honor of Kings · Diao Chan · Blossom Dance" },
  "phrases": {
    "zh": [
      [
        "貂蝉：让思绪跟上花开的节奏。",
      ],
      [
        "莲灵：慢慢来，花会开。",
      ],
    ],
    "en": [
      [
        "Diao Chan: Let your thoughts follow the blossoms.",
      ],
      [
        "Lotus Spirit: Take your time. Flowers will bloom.",
      ],
    ],
  },
  "light": {
    "paper": "#F8EEF4",
    "vividPaper": "#F6E9F0",
    "ink": "#2B2E39",
    "brand": "#945477",
    "brandText": "#FFFFFF",
    "signature": "#6464A0",
    "deepAccent": "#6464A0",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#231729",
    "vividPaper": "#291B30",
    "text": "#FFF8F2",
    "brand": "#E7B0D2",
    "brandText": "#20212B",
    "signature": "#C7BBED",
    "deepAccent": "#C7BBED",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "绝世舞姬", en: "Lotus Dancer" };
family.legacyFamilies = [
  { id: "hok-diaochan-fumeng", artwork: "fragrant-dream" },
];
family.artworks = [
  {
    id: "fragrant-dream",
    names: { zh: "馥梦繁花", en: "Diaochan: Fumeng Fanhua" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["貂蝉：让灵感像花一样舒展。", "把眼前这一页，慢慢写好。"],
          ["貂蝉：夜色静了，思绪更清。", "留一点余裕，等灵感落下。"],
        ],
        en: [
          ["Diaochan: Let your ideas unfold like flowers.", "Give this page the time it needs."],
          ["Diaochan: A quiet night makes room for thought.", "Leave a little room for inspiration."],
        ],
      },
      wallpaperSize: "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(29vw, 430px) - 64px)",
    },
  },
];

export default family;
