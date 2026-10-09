import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "sumikko-bakery",
  "signaturePrefix": "sumikko-bakery",
  "names": {
    "zh": "角落小伙伴·面包房值日",
    "en": "Sumikko Gurashi · Bakery Helpers",
  },
  "phrases": {
    "zh": [
      [
        "炸猪排：面包还热着呢。",
        "今天也有我的一份吗？",
      ],
      [
        "炸虾尾：这颗小面包给你。",
        "围裙已经收好了。",
      ],
      [
        "猫咪：慢慢揉，别着急。",
        "最后一盘也烤好了。",
      ]
    ],
    "en": [
      [
        "Tonkatsu: The bread is still warm.",
        "Is there a little share for me?",
      ],
      [
        "Ebifurai: This little roll is for you.",
        "The apron is put away.",
      ],
      [
        "Neko: Knead slowly, there is no rush.",
        "The last tray is ready too.",
      ]
    ],
  },
  "light": {
    "paper": "#FFF5E8",
    "vividPaper": "#F7E8D0",
    "ink": "#303540",
    "brand": "#996438",
    "brandText": "#FFFFFF",
    "signature": "#B57854",
    "deepAccent": "#996438",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#2A201B",
    "vividPaper": "#352921",
    "text": "#F0EAE0",
    "brand": "#E2BA88",
    "brandText": "#181B24",
    "signature": "#E6AB8F",
    "deepAccent": "#E2BA88",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B9B1A9";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
