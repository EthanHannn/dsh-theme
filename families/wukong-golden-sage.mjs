import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "wukong-golden-sage",
  "signaturePrefix": "wukong-golden-sage",
  "names": {
    "zh": "黑神话：悟空·齐天金甲",
    "en": "Black Myth Wukong · Golden Sage",
  },
  "phrases": {
    "zh": [
      [
        "此行，踏过重山。",
        "金甲在身，脚下有路。",
      ],
      [
        "桃子先收好。",
        "歇够了，便继续。",
      ]
    ],
    "en": [
      [
        "Beyond another mountain.",
        "Golden armor, an open road.",
      ],
      [
        "Keep the peach for later.",
        "Rested and ready to continue.",
      ]
    ],
  },
  "light": {
    "paper": "#F8F2E7",
    "vividPaper": "#EEE3CF",
    "ink": "#303540",
    "brand": "#8B6334",
    "brandText": "#FFFFFF",
    "signature": "#A65345",
    "deepAccent": "#8B6334",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#291F1D",
    "vividPaper": "#3B2A26",
    "text": "#F0EAE0",
    "brand": "#E1BE7F",
    "brandText": "#181B24",
    "signature": "#E7A596",
    "deepAccent": "#E1BE7F",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B8B1A9";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
