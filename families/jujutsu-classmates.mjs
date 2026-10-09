import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "jujutsu-classmates",
  "signaturePrefix": "jujutsu-classmates",
  "names": {
    "zh": "咒术回战·同窗并肩",
    "en": "Jujutsu Kaisen · Classmates United",
  },
  "phrases": {
    "zh": [
      [
        "乙骨：今天也请多指教。",
        "这次，我会跟上的。",
      ],
      [
        "真希：姿势再稳一点。",
        "练完记得收好装备。",
      ],
      [
        "狗卷：鲑鱼。",
        "狗卷：金枪鱼蛋黄酱。",
      ],
      [
        "熊猫：饭团还有一份。",
        "休息一下再练吧。",
      ]
    ],
    "en": [
      [
        "Yuta: Thank you for practicing with me.",
        "I will keep up this time.",
      ],
      [
        "Maki: Steady your stance.",
        "Put the gear away after training.",
      ],
      [
        "Toge: Salmon.",
        "Toge: Tuna mayo.",
      ],
      [
        "Panda: There is one rice ball left.",
        "Take a break before the next round.",
      ]
    ],
  },
  "light": {
    "paper": "#F6F5ED",
    "vividPaper": "#EDEDDD",
    "ink": "#303540",
    "brand": "#566B46",
    "brandText": "#FFFFFF",
    "signature": "#9D6C33",
    "deepAccent": "#566B46",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#1D241C",
    "vividPaper": "#273026",
    "text": "#F0EAE0",
    "brand": "#B8CB91",
    "brandText": "#181B24",
    "signature": "#E6BF83",
    "deepAccent": "#B8CB91",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B5B3A9";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
