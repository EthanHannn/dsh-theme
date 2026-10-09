import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "hsr-firefly",
  "signaturePrefix": "hsr-firefly",
  "names": {
    "zh": "崩坏：星穹铁道·萤火之约",
    "en": "Honkai Star Rail · Firefly Promise",
  },
  "phrases": {
    "zh": [
      [
        "流萤：再多停留一会儿吧。",
        "这份回忆，我会收好。",
      ],
      [
        "星：约好了，一起看。",
        "今天也值得记录。",
      ]
    ],
    "en": [
      [
        "Firefly: Let us stay a little longer.",
        "I will keep this memory.",
      ],
      [
        "Stelle: We promised to see it together.",
        "Today is worth remembering.",
      ]
    ],
  },
  "light": {
    "paper": "#F0F8F4",
    "vividPaper": "#E0EEE7",
    "ink": "#303540",
    "brand": "#3F7165",
    "brandText": "#FFFFFF",
    "signature": "#977844",
    "deepAccent": "#3F7165",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#142B29",
    "vividPaper": "#203A36",
    "text": "#F0EAE0",
    "brand": "#A4D8C5",
    "brandText": "#181B24",
    "signature": "#E3CA9B",
    "deepAccent": "#A4D8C5",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B2B5AD";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
