import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "hsr-express",
  "signaturePrefix": "hsr-express",
  "names": {
    "zh": "崩坏：星穹铁道·列车晨光",
    "en": "Honkai Star Rail · Express Morning",
  },
  "phrases": {
    "zh": [
      [
        "三月七：这一站，也要拍下来！",
        "合影的位置给你留好了。",
      ],
      [
        "丹恒：行程已经记下。",
        "资料库里还有新线索。",
      ],
      [
        "星：下一站，出发。",
        "先把补给收好。",
      ]
    ],
    "en": [
      [
        "March 7th: This stop needs a photo!",
        "I saved you a spot in the picture.",
      ],
      [
        "Dan Heng: The route is recorded.",
        "The archives hold another clue.",
      ],
      [
        "Stelle: On to the next stop.",
        "Supplies first.",
      ]
    ],
  },
  "light": {
    "paper": "#F2F7FB",
    "vividPaper": "#E2EDF4",
    "ink": "#303540",
    "brand": "#3D6387",
    "brandText": "#FFFFFF",
    "signature": "#A56B86",
    "deepAccent": "#3D6387",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#182332",
    "vividPaper": "#223047",
    "text": "#F0EAE0",
    "brand": "#B4CDEB",
    "brandText": "#181B24",
    "signature": "#E2B5CF",
    "deepAccent": "#B4CDEB",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B4B2AF";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
