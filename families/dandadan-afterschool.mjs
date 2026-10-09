import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dandadan-afterschool",
  "signaturePrefix": "dandadan-afterschool",
  "names": {
    "zh": "胆大党·放学怪谈",
    "en": "DAN DA DAN · After-School Rumors",
  },
  "phrases": {
    "zh": [
      [
        "小桃：先听我把话说完！",
        "放学后，老地方见。",
      ],
      [
        "厄卡伦：这次我记下来了。",
        "那个，我有个新发现。",
      ],
      [
        "高速婆婆：少磨蹭，走了。",
        "这个角落归我了。",
      ]
    ],
    "en": [
      [
        "Momo: Let me finish first!",
        "Same place after school.",
      ],
      [
        "Okarun: I wrote it down this time.",
        "Um, I found something new.",
      ],
      [
        "Turbo Granny: Quit dawdling. Move it.",
        "This corner is mine.",
      ]
    ],
  },
  "light": {
    "paper": "#FAF1EE",
    "vividPaper": "#F1E2DE",
    "ink": "#303540",
    "brand": "#A14C54",
    "brandText": "#FFFFFF",
    "signature": "#5A718E",
    "deepAccent": "#A14C54",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#251B27",
    "vividPaper": "#302236",
    "text": "#F0EAE0",
    "brand": "#E4A0B1",
    "brandText": "#181B24",
    "signature": "#ABC0E8",
    "deepAccent": "#E4A0B1",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B0AC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
