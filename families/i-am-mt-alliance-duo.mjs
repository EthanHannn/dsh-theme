import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "i-am-mt-alliance-duo",
  "signaturePrefix": "i-am-mt-alliance-duo",
  "names": {
    "zh": "我叫MT·联盟值日生",
    "en": "I Am MT · Alliance Watch Partners",
  },
  "phrases": {
    "zh": [
      [
        "大小姐：名单拿好，可别又迷路。",
      ],
      [
        "暗夜男：放心，这段路我认得。",
      ]
    ],
    "en": [
      [
        "Daxiaojie: Keep the schedule. No getting lost.",
      ],
      [
        "Anyenan: Relax. I know this road.",
      ]
    ],
  },
  "light": {
    "paper": "#F8F7F0",
    "vividPaper": "#F0EEDF",
    "ink": "#33352F",
    "brand": "#566F91",
    "brandText": "#FFFFFF",
    "signature": "#92723D",
    "deepAccent": "#92723D",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#1C2734",
    "vividPaper": "#263345",
    "text": "#FFF9EF",
    "brand": "#B4CBEA",
    "brandText": "#20261D",
    "signature": "#E5CB95",
    "deepAccent": "#E5CB95",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#BFBEBB";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
