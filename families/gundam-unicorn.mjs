import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "gundam-unicorn",
  "signaturePrefix": "gundam-unicorn",
  "names": {
    "zh": "高达·独角兽觉醒",
    "en": "Gundam · Unicorn Awakening",
  },
  "phrases": {
    "zh": [
      [
        "独角兽：静候下一次启程。",
      ],
      [
        "觉醒：微光也能照见可能。",
      ],
      [
        "哈罗：哈罗，状态良好！",
      ]
    ],
    "en": [
      [
        "Unicorn: Waiting for the next departure.",
      ],
      [
        "Awakening: A small light reveals possibility.",
      ],
      [
        "Haro: Haro! All systems ready!",
      ]
    ],
  },
  "light": {
    "paper": "#F6F7F9",
    "vividPaper": "#EEF0F4",
    "ink": "#273345",
    "brand": "#506581",
    "brandText": "#FFFFFF",
    "signature": "#A83E5D",
    "deepAccent": "#A83E5D",
    "success": "#356B58",
    "error": "#AE3B52",
    "warning": "#7D5F21",
  },
  "dark": {
    "ground": "#111823",
    "vividPaper": "#161F2D",
    "text": "#F0F4FF",
    "brand": "#B8CCEC",
    "brandText": "#162337",
    "signature": "#F2A3BD",
    "deepAccent": "#F2A3BD",
    "success": "#9FD4B6",
    "error": "#F4A6B6",
    "warning": "#E4C98B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B2B6C1";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(28vw, 350px, 40vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(28vw, 350px, 40vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(28vw, 350px, 40vh) - 64px)";

export default family;
