import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "i-am-mt-alliance-camp",
  "signaturePrefix": "i-am-mt-alliance-camp",
  "names": {
    "zh": "我叫MT·联盟补给站",
    "en": "I Am MT · Alliance Camp Break",
  },
  "phrases": {
    "zh": [
      [
        "方砖：补给齐了，法力也快回来了。",
      ],
      [
        "大小姐：每个人都有份，别抢。",
      ],
      [
        "暗夜男：下一站，我来带路。",
      ]
    ],
    "en": [
      [
        "Fangzhuan: Supplies ready. Mana almost back.",
      ],
      [
        "Daxiaojie: There is enough for everyone.",
      ],
      [
        "Anyenan: I will lead the next stretch.",
      ]
    ],
  },
  "light": {
    "paper": "#FCF6ED",
    "vividPaper": "#F5E9D7",
    "ink": "#33352F",
    "brand": "#975949",
    "brandText": "#FFFFFF",
    "signature": "#8B6B39",
    "deepAccent": "#8B6B39",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#30231F",
    "vividPaper": "#3B2D28",
    "text": "#FFF9EF",
    "brand": "#E9BAA1",
    "brandText": "#20261D",
    "signature": "#DDCC9A",
    "deepAccent": "#DDCC9A",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#C5BDB5";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
