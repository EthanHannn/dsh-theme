import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "zzz-sixth-street",
  "signaturePrefix": "zzz-sixth-street",
  "names": {
    "zh": "绝区零·六分街委托",
    "en": "Zenless Zone Zero · Sixth Street Errands",
  },
  "phrases": {
    "zh": [
      [
        "妮可：这单委托，交给我们！",
        "预算要精打细算。",
      ],
      [
        "安比：先补充能量。",
        "路线已经确认。",
      ],
      [
        "比利：好戏开场！",
        "今天也要帅气收工。",
      ]
    ],
    "en": [
      [
        "Nicole: Leave this commission to us!",
        "Every coin counts.",
      ],
      [
        "Anby: Refuel first.",
        "Route confirmed.",
      ],
      [
        "Billy: Showtime!",
        "Another stylish finish today.",
      ]
    ],
  },
  "light": {
    "paper": "#F6F7ED",
    "vividPaper": "#E9EDD9",
    "ink": "#303540",
    "brand": "#566B35",
    "brandText": "#FFFFFF",
    "signature": "#A75D75",
    "deepAccent": "#566B35",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#23291F",
    "vividPaper": "#303A28",
    "text": "#F0EAE0",
    "brand": "#C8DA94",
    "brandText": "#181B24",
    "signature": "#E9B2C4",
    "deepAccent": "#C8DA94",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B4AA";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
