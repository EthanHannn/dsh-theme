import { createVividFamily } from "./create-vivid-family.js";

// 以专属日常场景组织浅深两种活动，简约配对复用同一色板。
const family = createVividFamily({
  "id": "rezero-snow-tea",
  "phrases": {
    "zh": [
      [
        "爱蜜莉雅：雪景和热茶，刚刚好。",
        "爱蜜莉雅：这一杯，可以再慢慢喝。"
      ],
      [
        "蕾姆：茶已经备好了。",
        "蕾姆：托盘很稳，请放心。"
      ],
      [
        "爱蜜莉雅：谢谢，毯子很暖和。",
        "爱蜜莉雅：天晚了，也还想多坐一会儿。"
      ],
      [
        "蕾姆：杯子还空着，要再添一点吗？",
        "蕾姆：壶里的茶还温着。"
      ]
    ],
    "en": [
      [
        "Emilia: Snow outside, warm tea in hand. Perfect.",
        "Emilia: I can take my time with this cup."
      ],
      [
        "Rem: The tea is ready.",
        "Rem: The tray is steady. Please relax."
      ],
      [
        "Emilia: Thank you. This blanket is lovely and warm.",
        "Emilia: It is getting late, but I would like to stay."
      ],
      [
        "Rem: Shall I top up your cup?",
        "Rem: There is still warm tea in the pot."
      ]
    ]
  },
  "light": {
    "paper": "#F7F6FB",
    "vividPaper": "#ECF0F5",
    "ink": "#34344A",
    "brand": "#63508F",
    "brandText": "#FFFFFF",
    "signature": "#315775",
    "deepAccent": "#63508F",
    "success": "#426B5B",
    "error": "#A64462",
    "warning": "#7A5D2A"
  },
  "dark": {
    "ground": "#1B1D2B",
    "vividPaper": "#232637",
    "text": "#F1F0FA",
    "brand": "#C9B5EE",
    "brandText": "#241F34",
    "signature": "#A9D1EC",
    "deepAccent": "#C9B5EE",
    "success": "#ADD4C5",
    "error": "#F0B0C5",
    "warning": "#E7CE9F"
  },
  "signaturePrefix": "rezero-snow-tea",
  "names": {
    "zh": "Re:从零开始的异世界生活 · 雪庭茶约",
    "en": "Re:Zero · Snow Garden Tea"
  }
});

family.sortKey = "rezero-01-snow-tea";
family.light.textSecondary = "#5D6074";
family.dark.textSecondary = "#CDD0E2";
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
