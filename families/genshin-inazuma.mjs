import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "genshin-inazuma",
  "signaturePrefix": "genshin-inazuma",
  "names": {
    "zh": "原神·鸣神花信",
    "en": "Genshin Impact · Narukami Petals",
  },
  "phrases": {
    "zh": [
      [
        "雷电影：此刻，也值得珍惜。",
        "先尝一口甜点吧。",
      ],
      [
        "八重神子：新故事可别错过。",
        "让我看看你的下一页。",
      ]
    ],
    "en": [
      [
        "Ei: This moment is worth keeping.",
        "A taste of something sweet first.",
      ],
      [
        "Yae Miko: Do not miss the new story.",
        "Let me see your next page.",
      ]
    ],
  },
  "light": {
    "paper": "#FAF1F5",
    "vividPaper": "#EFE2EC",
    "ink": "#303540",
    "brand": "#875071",
    "brandText": "#FFFFFF",
    "signature": "#8D658F",
    "deepAccent": "#875071",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#251D30",
    "vividPaper": "#34263F",
    "text": "#F0EAE0",
    "brand": "#D9ACD0",
    "brandText": "#181B24",
    "signature": "#C0B0E4",
    "deepAccent": "#D9ACD0",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B1AF";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
