import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "spy-family-eden",
  "signaturePrefix": "spy-family-eden",
  "names": {
    "zh": "间谍过家家·伊甸星光",
    "en": "Spy x Family · Eden Stars",
  },
  "phrases": {
    "zh": [
      [
        "阿尼亚：今天也要拿星星！",
        "这颗星星，先收好。",
      ],
      [
        "达米安：这题我已经会了。",
        "书借给你，记得还。",
      ],
      [
        "贝姬：放学一起走吧。",
        "阿尼亚，这边有空位。",
      ]
    ],
    "en": [
      [
        "Anya: Another star today!",
        "This star is a keeper.",
      ],
      [
        "Damian: I know this one already.",
        "You can borrow it. Bring it back.",
      ],
      [
        "Becky: Let us walk home together.",
        "Anya, there is a seat here.",
      ]
    ],
  },
  "light": {
    "paper": "#F9F3E8",
    "vividPaper": "#F1E7D6",
    "ink": "#303540",
    "brand": "#8B493E",
    "brandText": "#FFFFFF",
    "signature": "#96702C",
    "deepAccent": "#8B493E",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#211A1B",
    "vividPaper": "#2B2021",
    "text": "#F0EAE0",
    "brand": "#E5AD87",
    "brandText": "#181B24",
    "signature": "#E8CA83",
    "deepAccent": "#E5AD87",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B6B0A9";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
