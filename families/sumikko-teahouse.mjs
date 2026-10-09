import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "sumikko-teahouse",
  "signaturePrefix": "sumikko-teahouse",
  "names": {
    "zh": "角落小伙伴·暖茶小憩",
    "en": "Sumikko Gurashi · Cozy Tea Corner",
  },
  "phrases": {
    "zh": [
      [
        "白熊：这杯茶暖暖的。",
        "角落里，刚刚好。",
      ],
      [
        "企鹅？：今天喝哪一种呢？",
        "先把茶罐收好。",
      ],
      [
        "猫咪：这里还有一个靠垫。",
        "一起坐一会儿吧。",
      ]
    ],
    "en": [
      [
        "Shirokuma: This tea is lovely and warm.",
        "This corner feels just right.",
      ],
      [
        "Penguin?: Which tea shall we try?",
        "Let us put the tea tin away.",
      ],
      [
        "Neko: There is another cushion here.",
        "Stay for a little while.",
      ]
    ],
  },
  "light": {
    "paper": "#FCF7ED",
    "vividPaper": "#F4EDD9",
    "ink": "#303540",
    "brand": "#7B7650",
    "brandText": "#FFFFFF",
    "signature": "#729184",
    "deepAccent": "#7B7650",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#26271F",
    "vividPaper": "#313327",
    "text": "#F0EAE0",
    "brand": "#D2CCA1",
    "brandText": "#181B24",
    "signature": "#ADD5BC",
    "deepAccent": "#D2CCA1",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B3AA";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
