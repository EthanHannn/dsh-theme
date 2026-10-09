import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "doraemon-pocket",
  "signaturePrefix": "doraemon-pocket",
  "names": {
    "zh": "哆啦A梦·口袋奇遇",
    "en": "Doraemon · Pocket Wonders",
  },
  "phrases": {
    "zh": [
      [
        "哆啦A梦：口袋里还有办法。",
        "铜锣烧，留一块给我。",
      ],
      [
        "大雄：这次一定能做到！",
        "竹蜻蜓准备好了。",
      ],
      [
        "哆啦美：道具要记得收好。",
        "先看看说明图吧。",
      ]
    ],
    "en": [
      [
        "Doraemon: There is a way in my pocket.",
        "Save a dorayaki for me.",
      ],
      [
        "Nobita: I can do it this time!",
        "The bamboo-copter is ready.",
      ],
      [
        "Dorami: Put the gadgets away safely.",
        "Let us check the picture guide.",
      ]
    ],
  },
  "light": {
    "paper": "#F1F8FC",
    "vividPaper": "#E4F1F8",
    "ink": "#303540",
    "brand": "#24729D",
    "brandText": "#FFFFFF",
    "signature": "#B65050",
    "deepAccent": "#24729D",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#152338",
    "vividPaper": "#192D43",
    "text": "#F0EAE0",
    "brand": "#8BCDE8",
    "brandText": "#181B24",
    "signature": "#F1B4A0",
    "deepAccent": "#8BCDE8",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B2B1";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
