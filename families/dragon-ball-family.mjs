import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dragon-ball-family",
  "signaturePrefix": "dragon-ball-family",
  "names": {
    "zh": "七龙珠·包子山家书",
    "en": "Dragon Ball · Mount Paozu Family",
  },
  "phrases": {
    "zh": [
      [
        "悟空：这碗吃完，再练一会儿吧。",
      ],
      [
        "琪琪：饭盒带上，别只顾着跑。",
      ],
      [
        "悟饭：这页看完，就陪你出去。",
      ],
      [
        "悟天：这一大口，分给你！",
      ]
    ],
    "en": [
      [
        "Goku: One more bowl, then a little training.",
      ],
      [
        "Chi-Chi: Take your lunch before you run off.",
      ],
      [
        "Gohan: One more page, then we can go.",
      ],
      [
        "Goten: This big bite is for you!",
      ]
    ],
  },
  "light": {
    "paper": "#FAF7EE",
    "vividPaper": "#F1F0DE",
    "ink": "#34362B",
    "brand": "#546B3C",
    "brandText": "#FFFFFF",
    "signature": "#9D542F",
    "deepAccent": "#9D542F",
    "success": "#406B50",
    "error": "#B23D46",
    "warning": "#805E20",
  },
  "dark": {
    "ground": "#1C2521",
    "vividPaper": "#243029",
    "text": "#FAF4E6",
    "brand": "#C6D999",
    "brandText": "#28231A",
    "signature": "#ECB286",
    "deepAccent": "#ECB286",
    "success": "#A7CFAB",
    "error": "#F4A5AC",
    "warning": "#E5C983",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#BCBAAF";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
