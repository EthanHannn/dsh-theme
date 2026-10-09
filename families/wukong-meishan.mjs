import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "wukong-meishan",
  "signaturePrefix": "wukong-meishan",
  "names": {
    "zh": "黑神话：悟空·梅山雪誓",
    "en": "Black Myth Wukong · Meishan Snow",
  },
  "phrases": {
    "zh": [
      [
        "二郎：山雪未歇。",
        "且看前路。",
      ],
      [
        "哮天：守在这里。",
        "雪地里的脚印，还很清楚。",
      ]
    ],
    "en": [
      [
        "Erlang: The mountain snow continues.",
        "Watch the road ahead.",
      ],
      [
        "Xiaotian: Keeping watch.",
        "The tracks are clear in the snow.",
      ]
    ],
  },
  "light": {
    "paper": "#F4F6F7",
    "vividPaper": "#E6ECF0",
    "ink": "#303540",
    "brand": "#53697A",
    "brandText": "#FFFFFF",
    "signature": "#927950",
    "deepAccent": "#53697A",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#18212C",
    "vividPaper": "#25303E",
    "text": "#F0EAE0",
    "brand": "#B5CBDC",
    "brandText": "#181B24",
    "signature": "#DCC89C",
    "deepAccent": "#B5CBDC",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B4B2AE";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
