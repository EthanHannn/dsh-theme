import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "genshin-fontaine",
  "signaturePrefix": "genshin-fontaine",
  "names": {
    "zh": "原神·枫丹茶会",
    "en": "Genshin Impact · Fontaine Tea Hour",
  },
  "phrases": {
    "zh": [
      [
        "芙宁娜：今天的甜点，由我推荐。",
        "茶会现在开始！",
      ],
      [
        "那维莱特：不妨稍作休息。",
        "这杯水，口感很清澈。",
      ]
    ],
    "en": [
      [
        "Furina: Let me recommend dessert.",
        "Tea time begins!",
      ],
      [
        "Neuvillette: A short break would be welcome.",
        "This water tastes remarkably clear.",
      ]
    ],
  },
  "light": {
    "paper": "#F2F6FB",
    "vividPaper": "#E4EDF5",
    "ink": "#303540",
    "brand": "#355F8B",
    "brandText": "#FFFFFF",
    "signature": "#99783D",
    "deepAccent": "#355F8B",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#142236",
    "vividPaper": "#1D2C43",
    "text": "#F0EAE0",
    "brand": "#9FC4E9",
    "brandText": "#181B24",
    "signature": "#E2C78F",
    "deepAccent": "#9FC4E9",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B2B2B0";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
