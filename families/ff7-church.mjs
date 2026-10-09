import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "ff7-church",
  "signaturePrefix": "ff7-church",
  "names": {
    "zh": "最终幻想VII·教堂花信",
    "en": "Final Fantasy VII · Church Letters",
  },
  "phrases": {
    "zh": [
      [
        "爱丽丝：花也在等你回来。",
        "给今天留一点温柔。",
      ],
      [
        "扎克：约好了，我会回来。",
        "这份心意，收到了。",
      ]
    ],
    "en": [
      [
        "Aerith: The flowers are waiting too.",
        "Save a little kindness for today.",
      ],
      [
        "Zack: I promised I would return.",
        "Your message reached me.",
      ]
    ],
  },
  "light": {
    "paper": "#FBF3EE",
    "vividPaper": "#F2E5DF",
    "ink": "#303540",
    "brand": "#925D63",
    "brandText": "#FFFFFF",
    "signature": "#8C7845",
    "deepAccent": "#925D63",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#2B2027",
    "vividPaper": "#392C33",
    "text": "#F0EAE0",
    "brand": "#E4B6B8",
    "brandText": "#181B24",
    "signature": "#D8C58D",
    "deepAccent": "#E4B6B8",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B9B1AC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
