import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "jujutsu-first-years",
  "signaturePrefix": "jujutsu-first-years",
  "names": {
    "zh": "咒术回战·一年级集结",
    "en": "Jujutsu Kaisen · First-Year Assembly",
  },
  "phrases": {
    "zh": [
      [
        "虎杖：大家都到齐了吗？",
        "结束之后去吃点东西吧。",
      ],
      [
        "伏黑：先把路线看清楚。",
        "别把笔记又落下了。",
      ],
      [
        "钉崎：工具我已经带齐。",
        "这次轮到我选店！",
      ],
      [
        "五条：老师带了甜点。",
        "别紧张，一起出发吧。",
      ]
    ],
    "en": [
      [
        "Yuji: Is everyone here?",
        "Food after this?",
      ],
      [
        "Megumi: Check the route first.",
        "Do not leave your notes behind.",
      ],
      [
        "Nobara: Tools packed and ready.",
        "I pick the shop this time!",
      ],
      [
        "Gojo: Your teacher brought dessert.",
        "Easy now. Let us head out.",
      ]
    ],
  },
  "light": {
    "paper": "#F2F4F7",
    "vividPaper": "#E6EBF1",
    "ink": "#303540",
    "brand": "#425E83",
    "brandText": "#FFFFFF",
    "signature": "#AE4B4C",
    "deepAccent": "#425E83",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#151C2B",
    "vividPaper": "#1C2638",
    "text": "#F0EAE0",
    "brand": "#9CBCE4",
    "brandText": "#181B24",
    "signature": "#EEA29E",
    "deepAccent": "#9CBCE4",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B0AD";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
