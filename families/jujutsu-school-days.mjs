import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "jujutsu-school-days",
  "signaturePrefix": "jujutsu-school-days",
  "names": {
    "zh": "咒术回战·高专旧日",
    "en": "Jujutsu Kaisen · School Days",
  },
  "phrases": {
    "zh": [
      [
        "五条：冰棒快要化了。",
        "走吧，今天还有时间。",
      ],
      [
        "夏油：别又把墨镜弄丢。",
        "这条路我们走过很多次。",
      ],
      [
        "硝子：给我留一瓶茶。",
        "你们两个，小声一点。",
      ]
    ],
    "en": [
      [
        "Gojo: The ice pop is melting.",
        "Come on, we still have time.",
      ],
      [
        "Geto: Do not lose your glasses again.",
        "We have walked this path so often.",
      ],
      [
        "Shoko: Save a bottle of tea for me.",
        "You two, keep it down.",
      ]
    ],
  },
  "light": {
    "paper": "#F5F8F2",
    "vividPaper": "#E8F0E5",
    "ink": "#303540",
    "brand": "#487A70",
    "brandText": "#FFFFFF",
    "signature": "#9A6D35",
    "deepAccent": "#487A70",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#182724",
    "vividPaper": "#20332E",
    "text": "#F0EAE0",
    "brand": "#9CD2BF",
    "brandText": "#181B24",
    "signature": "#EDD09A",
    "deepAccent": "#9CD2BF",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B4B3AB";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
