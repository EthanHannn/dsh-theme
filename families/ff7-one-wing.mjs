import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "ff7-one-wing",
  "signaturePrefix": "ff7-one-wing",
  "names": {
    "zh": "最终幻想VII·片翼宿命",
    "en": "Final Fantasy VII · One-Winged Fate",
  },
  "phrases": {
    "zh": [
      [
        "克劳德：这一次，由我选择。",
        "继续向前。",
      ],
      [
        "萨菲罗斯：故事还没有结束。",
        "你会记得这一刻。",
      ]
    ],
    "en": [
      [
        "Cloud: This time, I choose.",
        "Keep moving forward.",
      ],
      [
        "Sephiroth: The story has not ended.",
        "You will remember this moment.",
      ]
    ],
  },
  "light": {
    "paper": "#F1F4F5",
    "vividPaper": "#E2E8EC",
    "ink": "#303540",
    "brand": "#476473",
    "brandText": "#FFFFFF",
    "signature": "#5D786D",
    "deepAccent": "#476473",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#17232D",
    "vividPaper": "#233240",
    "text": "#F0EAE0",
    "brand": "#ABC6D6",
    "brandText": "#181B24",
    "signature": "#B4D7C8",
    "deepAccent": "#ABC6D6",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B2AE";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
