import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "sumikko-rainy",
  "signaturePrefix": "sumikko-rainy",
  "names": {
    "zh": "角落小伙伴·雨窗来信",
    "en": "Sumikko Gurashi · Rainy Window Letters",
  },
  "phrases": {
    "zh": [
      [
        "蜥蜴：雨停了就出发。",
        "信要好好收着。",
      ],
      [
        "白熊：收到一封暖暖的信。",
        "这里可以躲一会儿雨。",
      ],
      [
        "企鹅？：毯子分你一半。",
        "等雨小一点再走吧。",
      ]
    ],
    "en": [
      [
        "Tokage: We can leave when the rain stops.",
        "Keep the letter safe.",
      ],
      [
        "Shirokuma: A letter full of warmth.",
        "You can shelter here for a while.",
      ],
      [
        "Penguin?: Half the blanket is yours.",
        "Let us wait for lighter rain.",
      ]
    ],
  },
  "light": {
    "paper": "#F2F8F8",
    "vividPaper": "#E2F0F0",
    "ink": "#303540",
    "brand": "#477B85",
    "brandText": "#FFFFFF",
    "signature": "#9A795B",
    "deepAccent": "#477B85",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#17252B",
    "vividPaper": "#1E3039",
    "text": "#F0EAE0",
    "brand": "#A1D0D8",
    "brandText": "#181B24",
    "signature": "#E1C49C",
    "deepAccent": "#A1D0D8",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B3AD";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
