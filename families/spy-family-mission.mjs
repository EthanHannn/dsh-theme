import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "spy-family-mission",
  "signaturePrefix": "spy-family-mission",
  "names": {
    "zh": "间谍过家家·月下密语",
    "en": "Spy x Family · Moonlit Mission",
  },
  "phrases": {
    "zh": [
      [
        "黄昏：时间刚刚好。",
        "最后核对一次路线。",
      ],
      [
        "约尔：今晚也请平安回来。",
        "玫瑰已经收好了。",
      ],
      [
        "阿尼亚：这是秘密任务！",
        "信封里面是什么呀？",
      ]
    ],
    "en": [
      [
        "Loid: Right on time.",
        "One last check of the route.",
      ],
      [
        "Yor: Come home safely tonight.",
        "The rose is safely tucked away.",
      ],
      [
        "Anya: A secret mission!",
        "What is inside the envelope?",
      ]
    ],
  },
  "light": {
    "paper": "#F2F5F3",
    "vividPaper": "#E3EBE7",
    "ink": "#303540",
    "brand": "#386369",
    "brandText": "#FFFFFF",
    "signature": "#943F53",
    "deepAccent": "#386369",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#141C28",
    "vividPaper": "#182334",
    "text": "#F0EAE0",
    "brand": "#87C4D0",
    "brandText": "#181B24",
    "signature": "#E5A2BA",
    "deepAccent": "#87C4D0",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B2B0AC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
