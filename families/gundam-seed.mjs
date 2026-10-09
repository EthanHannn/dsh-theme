import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "gundam-seed",
  "signaturePrefix": "gundam-seed",
  "names": {
    "zh": "高达·自由与正义",
    "en": "Gundam · Freedom and Justice",
  },
  "phrases": {
    "zh": [
      [
        "自由：航路已经展开。",
      ],
      [
        "正义：与你并肩，准备出发。",
      ],
      [
        "哈罗：哈罗，检查完成！",
      ]
    ],
    "en": [
      [
        "Freedom: The route is open.",
      ],
      [
        "Justice: Alongside you, ready to launch.",
      ],
      [
        "Haro: Haro! Checks complete!",
      ]
    ],
  },
  "light": {
    "paper": "#F5F6FC",
    "vividPaper": "#EDF0FA",
    "ink": "#273345",
    "brand": "#375A98",
    "brandText": "#FFFFFF",
    "signature": "#9B4769",
    "deepAccent": "#9B4769",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#111C2F",
    "vividPaper": "#16223A",
    "text": "#F0F4FF",
    "brand": "#ABC9F4",
    "brandText": "#162337",
    "signature": "#EBAFCA",
    "deepAccent": "#EBAFCA",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B2B8C5";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
