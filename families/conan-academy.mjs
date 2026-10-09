import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "conan-academy",
  "signaturePrefix": "conan-academy",
  "names": {
    "zh": "名侦探柯南·警校余晖",
    "en": "Detective Conan · Academy Days",
  },
  "phrases": {
    "zh": [
      [
        "降谷：这一页，我会好好记住。",
      ],
      [
        "景光：咖啡还热，先歇一会儿。",
      ],
      [
        "松田：别急，齿轮还没对上。",
      ],
      [
        "萩原：小零件也有自己的脾气。",
      ],
      [
        "伊达：人齐了，再一起出发。",
      ]
    ],
    "en": [
      [
        "Furuya: This page is worth keeping.",
      ],
      [
        "Hiromitsu: Coffee is still warm. Take a break.",
      ],
      [
        "Matsuda: Give it a moment. The gears need aligning.",
      ],
      [
        "Hagiwara: Even little parts have a personality.",
      ],
      [
        "Date: Everyone here? Then we move together.",
      ]
    ],
  },
  "light": {
    "paper": "#F6F5EF",
    "vividPaper": "#F0EFE3",
    "ink": "#283445",
    "brand": "#3D5C79",
    "brandText": "#FFFFFF",
    "signature": "#8A652E",
    "deepAccent": "#8A652E",
    "success": "#3D6D59",
    "error": "#B13D51",
    "warning": "#826021",
  },
  "dark": {
    "ground": "#17212B",
    "vividPaper": "#1B2935",
    "text": "#F0F4FC",
    "brand": "#AACCE8",
    "brandText": "#152336",
    "signature": "#E6C38B",
    "deepAccent": "#E6C38B",
    "success": "#A3CEB4",
    "error": "#F3A5B7",
    "warning": "#E1C989",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B3B9C1";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
