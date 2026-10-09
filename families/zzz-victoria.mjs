import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "zzz-victoria",
  "signaturePrefix": "zzz-victoria",
  "names": {
    "zh": "绝区零·维多利亚茶歇",
    "en": "Zenless Zone Zero · Victoria Tea Break",
  },
  "phrases": {
    "zh": [
      [
        "艾莲：休息时间到了吧。",
        "糖分补充完毕。",
      ],
      [
        "莱卡恩：一切已经备妥。",
        "请安心交给我。",
      ],
      [
        "丽娜：茶已经泡好了。",
        "先坐下来歇一会儿吧。",
      ]
    ],
    "en": [
      [
        "Ellen: Is it break time yet?",
        "Sugar replenished.",
      ],
      [
        "Lycaon: Everything is prepared.",
        "You may leave it to me.",
      ],
      [
        "Rina: The tea is ready.",
        "Sit and rest for a moment.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F1F1",
    "vividPaper": "#ECE1E2",
    "ink": "#303540",
    "brand": "#874E5E",
    "brandText": "#FFFFFF",
    "signature": "#65707D",
    "deepAccent": "#874E5E",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#251F28",
    "vividPaper": "#352C37",
    "text": "#F0EAE0",
    "brand": "#D9ABB9",
    "brandText": "#181B24",
    "signature": "#BEC9D9",
    "deepAccent": "#D9ABB9",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B1AC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
