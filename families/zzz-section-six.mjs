import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "zzz-section-six",
  "signaturePrefix": "zzz-section-six",
  "names": {
    "zh": "绝区零·六课雪夜",
    "en": "Zenless Zone Zero · Section Six Snowfall",
  },
  "phrases": {
    "zh": [
      [
        "星见雅：准备好了，就出发。",
        "心静下来，方向就清楚了。",
      ],
      [
        "月城柳：清单已经核对。",
        "记得按时休息。",
      ],
      [
        "苍角：可以开饭了吗？",
        "这份点心，我来保管！",
      ]
    ],
    "en": [
      [
        "Miyabi: Ready? Then let us go.",
        "A calm mind sees the way.",
      ],
      [
        "Yanagi: The checklist is complete.",
        "Remember to rest on time.",
      ],
      [
        "Soukaku: Is it time to eat?",
        "I will guard these snacks!",
      ]
    ],
  },
  "light": {
    "paper": "#F2F6F8",
    "vividPaper": "#E4ECEF",
    "ink": "#303540",
    "brand": "#4C667B",
    "brandText": "#FFFFFF",
    "signature": "#9B697B",
    "deepAccent": "#4C667B",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#1C2730",
    "vividPaper": "#2A3944",
    "text": "#F0EAE0",
    "brand": "#B3CCD9",
    "brandText": "#181B24",
    "signature": "#DDB4C8",
    "deepAccent": "#B3CCD9",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B5B3AF";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
