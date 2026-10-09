import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "conan-jewel",
  "signaturePrefix": "conan-jewel",
  "names": {
    "zh": "名侦探柯南·宝石谜夜",
    "en": "Detective Conan · Jewel Enigma",
  },
  "phrases": {
    "zh": [
      [
        "柯南：再小的线索，也不会白白出现。",
        "柯南：这颗宝石，还有没说完的故事。",
      ],
      [
        "灰原：先把线索收好，别急着下结论。",
        "灰原：你又发现什么了？",
      ],
      [
        "基德：今夜的谜题，就留给你了。",
        "基德：比宝石更耀眼的，是揭晓的那一刻。",
      ]
    ],
    "en": [
      [
        "Conan: Even the smallest clue has a reason.",
        "Conan: This jewel still has a story to tell.",
      ],
      [
        "Haibara: Keep the clues. Conclusions can wait.",
        "Haibara: What have you found this time?",
      ],
      [
        "Kid: Tonight's mystery is yours to solve.",
        "Kid: The reveal shines brighter than the jewel.",
      ]
    ],
  },
  "light": {
    "paper": "#F5F6FA",
    "vividPaper": "#EAEFF7",
    "ink": "#28313B",
    "brand": "#385D8D",
    "brandText": "#FFFFFF",
    "signature": "#775190",
    "deepAccent": "#775190",
    "success": "#386B55",
    "error": "#AD3D4E",
    "warning": "#806024",
  },
  "dark": {
    "ground": "#161E2F",
    "vividPaper": "#202B42",
    "text": "#F6F5F1",
    "brand": "#ACCBEF",
    "brandText": "#19202B",
    "signature": "#CCB4EB",
    "deepAccent": "#CCB4EB",
    "success": "#A7D2B4",
    "error": "#F1A8B2",
    "warning": "#E7C58B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B9BB";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
