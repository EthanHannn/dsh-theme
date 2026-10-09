import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dandadan-awakening",
  "signaturePrefix": "dandadan-awakening",
  "names": {
    "zh": "胆大党·灵能交锋",
    "en": "DAN DA DAN · Psychic Awakening",
  },
  "phrases": {
    "zh": [
      [
        "小桃：稳住，我来想办法。",
        "这次可别一个人冲上去。",
      ],
      [
        "厄卡伦：我会跟上你的。",
        "先把大家带回去。",
      ],
      [
        "高速婆婆：总算像点样了。",
        "可别踩到本婆婆。",
      ]
    ],
    "en": [
      [
        "Momo: Hold steady. I have a plan.",
        "Do not rush in alone this time.",
      ],
      [
        "Okarun: I will keep up with you.",
        "Let us get everyone home first.",
      ],
      [
        "Turbo Granny: Now you are getting it.",
        "Watch where you step.",
      ]
    ],
  },
  "light": {
    "paper": "#F4F2F9",
    "vividPaper": "#E8E5F1",
    "ink": "#303540",
    "brand": "#6C5599",
    "brandText": "#FFFFFF",
    "signature": "#AD4E67",
    "deepAccent": "#6C5599",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#181727",
    "vividPaper": "#222137",
    "text": "#F0EAE0",
    "brand": "#BCA6E8",
    "brandText": "#181B24",
    "signature": "#F0A6BE",
    "deepAccent": "#BCA6E8",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B4AFAC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
