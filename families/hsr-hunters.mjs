import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "hsr-hunters",
  "signaturePrefix": "hsr-hunters",
  "names": {
    "zh": "崩坏：星穹铁道·星核夜话",
    "en": "Honkai Star Rail · Hunters After Hours",
  },
  "phrases": {
    "zh": [
      [
        "卡芙卡：稍等，故事才刚开始。",
        "咖啡还温着。",
      ],
      [
        "银狼：这关，我熟。",
        "进度已经保存。",
      ],
      [
        "刃：走吧。",
        "该收尾了。",
      ]
    ],
    "en": [
      [
        "Kafka: Wait. The story has just begun.",
        "The coffee is still warm.",
      ],
      [
        "Silver Wolf: I know this level.",
        "Progress saved.",
      ],
      [
        "Blade: Let us go.",
        "Time to finish this.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F1F7",
    "vividPaper": "#EDE2EE",
    "ink": "#303540",
    "brand": "#794E7B",
    "brandText": "#FFFFFF",
    "signature": "#526F87",
    "deepAccent": "#794E7B",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#251C2C",
    "vividPaper": "#34263B",
    "text": "#F0EAE0",
    "brand": "#D5ADD9",
    "brandText": "#181B24",
    "signature": "#A4C7DB",
    "deepAccent": "#D5ADD9",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B0AE";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
