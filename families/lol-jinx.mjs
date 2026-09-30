import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines; not quotations from the source.
const family = createVividFamily({
  "id": "lol-jinx",
  "signaturePrefix": "col6",
  "names": {
    "zh": "英雄联盟·爆爆火花",
    "en": "League of Legends · Loose Cannon",
  },
  "phrases": {
    "zh": [
      [
        "金克丝：给今天加点颜色！",
      ],
      [
        "蔚：一件一件，解决掉。",
      ],
    ],
    "en": [
      [
        "Jinx: Give today a little color!",
      ],
      [
        "Vi: One problem at a time.",
      ],
    ],
  },
  "light": {
    "paper": "#EEF3F7",
    "vividPaper": "#E9EFF4",
    "ink": "#2B2E39",
    "brand": "#466695",
    "brandText": "#FFFFFF",
    "signature": "#9E457D",
    "deepAccent": "#9E457D",
    "success": "#416D57",
    "error": "#AE3B51",
    "warning": "#82611D",
  },
  "dark": {
    "ground": "#161C2D",
    "vividPaper": "#1A2034",
    "text": "#FFF8F2",
    "brand": "#A8C6F1",
    "brandText": "#20212B",
    "signature": "#F0A8D3",
    "deepAccent": "#F0A8D3",
    "success": "#A9D4B8",
    "error": "#FFABBA",
    "warning": "#E5CB8A",
  },
});

// Normalize optical artwork mass across modes; keep the central reading area clear.
family.decor.wallpaperSize = "min(40vw, 520px, 52vh)";
family.decor.wallpaperPosition = "right 32px bottom 20px";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 52vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 52vh) - 64px)";
export default family;
