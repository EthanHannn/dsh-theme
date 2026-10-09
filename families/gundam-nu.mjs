import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "gundam-nu",
  "signaturePrefix": "gundam-nu",
  "names": {
    "zh": "高达·ν高达",
    "en": "Gundam · Nu Gundam",
  },
  "phrases": {
    "zh": [
      [
        "ν高达：沿着光，继续向前。",
        "ν高达：航路已确认。",
      ],
      [
        "航行记录：把下一步看清楚。",
        "航行记录：细微的变化，也值得留意。",
      ],
      [
        "哈啰：哈啰，准备好了！",
        "哈啰：今天也一起出发！",
      ]
    ],
    "en": [
      [
        "Nu Gundam: Follow the light onward.",
        "Nu Gundam: Flight path confirmed.",
      ],
      [
        "Flight log: Keep the next step in sight.",
        "Flight log: Small changes matter too.",
      ],
      [
        "Haro: Haro! Ready to go!",
        "Haro: Let us set off together!",
      ]
    ],
  },
  "light": {
    "paper": "#F4F7F7",
    "vividPaper": "#E8EFF0",
    "ink": "#29333D",
    "brand": "#3D586F",
    "brandText": "#FFFFFF",
    "signature": "#8A543C",
    "deepAccent": "#3E665C",
    "success": "#386B55",
    "error": "#AD3D4E",
    "warning": "#806024",
  },
  "dark": {
    "ground": "#111D28",
    "vividPaper": "#192B39",
    "text": "#F2F7F8",
    "brand": "#B1CCD9",
    "brandText": "#15242B",
    "signature": "#E7BF8C",
    "deepAccent": "#A7D2C4",
    "success": "#A7D2B4",
    "error": "#F1A8B2",
    "warning": "#E7C58B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3BABE";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
