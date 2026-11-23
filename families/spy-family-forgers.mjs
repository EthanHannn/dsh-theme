import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "spy-family-forgers",
  "signaturePrefix": "spy-family-forgers",
  names: { zh: "间谍过家家 · 福杰一家", en: "Spy x Family · The Forgers" },
  "phrases": {
    "zh": [
      [
        "阿尼亚：花生，要分着吃！",
        "今天的任务是全家一起玩。",
      ],
      [
        "黄昏：购物清单核对完毕。",
        "休息日，也要准时回家。",
      ],
      [
        "约尔：给你留了热茶。",
        "毯子准备好了，别着凉。",
      ],
      [
        "邦德：汪呜。",
        "邦德：今天也一起回家。",
      ]
    ],
    "en": [
      [
        "Anya: Peanuts are for sharing!",
        "Today we all get to play.",
      ],
      [
        "Loid: Shopping list checked.",
        "Home on time, even on a day off.",
      ],
      [
        "Yor: I saved you some warm tea.",
        "The blanket is ready. Stay warm.",
      ],
      [
        "Bond: Borf.",
        "Bond: Home together today.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F4EB",
    "vividPaper": "#EEEFE3",
    "ink": "#303540",
    "brand": "#436A57",
    "brandText": "#FFFFFF",
    "signature": "#A14C50",
    "deepAccent": "#436A57",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#17221F",
    "vividPaper": "#1B2923",
    "text": "#F0EAE0",
    "brand": "#9BC8AB",
    "brandText": "#181B24",
    "signature": "#EDA4A3",
    "deepAccent": "#9BC8AB",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B2AA";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "福杰家的休息日", en: "Forger Family Day" };
family.legacyFamilies = [
  { id: "spy-family-mission", artwork: "moonlit-mission" },
];
family.artworks = [
  {
    id: "moonlit-mission",
    names: { zh: "月下密语", en: "Moonlit Mission" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["黄昏：时间刚刚好。", "最后核对一次路线。"],
          ["约尔：今晚也请平安回来。", "玫瑰已经收好了。"],
          ["阿尼亚：这是秘密任务！", "信封里面是什么呀？"],
        ],
        en: [
          ["Loid: Right on time.", "One last check of the route."],
          ["Yor: Come home safely tonight.", "The rose is safely tucked away."],
          ["Anya: A secret mission!", "What is inside the envelope?"],
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
