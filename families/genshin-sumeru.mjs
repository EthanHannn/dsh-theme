import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "genshin-sumeru",
  "signaturePrefix": "genshin-sumeru",
  "names": {
    "zh": "原神·净善书庭",
    "en": "Genshin Impact · Sanctuary of Pages",
  },
  "phrases": {
    "zh": [
      [
        "纳西妲：好奇心会带来新答案。",
        "这页故事，一起读吧。",
      ],
      [
        "艾尔海森：先把资料整理好。",
        "结论需要证据。",
      ],
      [
        "卡维：这里还可以更漂亮。",
        "给灵感留一点空间。",
      ]
    ],
    "en": [
      [
        "Nahida: Curiosity brings new answers.",
        "Let us read this page together.",
      ],
      [
        "Alhaitham: Organize the sources first.",
        "A conclusion needs evidence.",
      ],
      [
        "Kaveh: This could be more beautiful.",
        "Leave a little room for inspiration.",
      ]
    ],
  },
  "light": {
    "paper": "#F5F8EF",
    "vividPaper": "#E8EEDB",
    "ink": "#303540",
    "brand": "#496B3E",
    "brandText": "#FFFFFF",
    "signature": "#A87838",
    "deepAccent": "#496B3E",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#19291F",
    "vividPaper": "#23352A",
    "text": "#F0EAE0",
    "brand": "#BCD998",
    "brandText": "#181B24",
    "signature": "#DBBC80",
    "deepAccent": "#BCD998",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B4B4AA";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
