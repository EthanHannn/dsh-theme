import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "ff7-seventh-heaven",
  "signaturePrefix": "ff7-seventh-heaven",
  "names": {
    "zh": "最终幻想VII·第七天堂",
    "en": "Final Fantasy VII · Seventh Heaven",
  },
  "phrases": {
    "zh": [
      [
        "克劳德：这件事，交给我。",
        "先休息一下。",
      ],
      [
        "蒂法：回来就好。",
        "补给已经准备好了。",
      ],
      [
        "巴雷特：伙计们，准备出发！",
        "这回可别落下东西。",
      ]
    ],
    "en": [
      [
        "Cloud: Leave this to me.",
        "Take a short break.",
      ],
      [
        "Tifa: It is good to have you back.",
        "The supplies are ready.",
      ],
      [
        "Barret: Team, get ready to move!",
        "Do not leave anything behind.",
      ]
    ],
  },
  "light": {
    "paper": "#F8F3EB",
    "vividPaper": "#EDE5D7",
    "ink": "#303540",
    "brand": "#766044",
    "brandText": "#FFFFFF",
    "signature": "#526E65",
    "deepAccent": "#766044",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#222624",
    "vividPaper": "#303630",
    "text": "#F0EAE0",
    "brand": "#C7BA91",
    "brandText": "#181B24",
    "signature": "#A9CEC0",
    "deepAccent": "#C7BA91",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B6B3AB";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
