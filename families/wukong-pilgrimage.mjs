import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "wukong-pilgrimage",
  "signaturePrefix": "wukong-pilgrimage",
  "names": {
    "zh": "黑神话：悟空·古寺行旅",
    "en": "Black Myth Wukong · Temple Pilgrimage",
  },
  "phrases": {
    "zh": [
      [
        "山路还长，慢慢走。",
        "歇一歇，再启程。",
      ],
      [
        "八戒：先吃饱，再赶路。",
        "这一路，总得有个伴。",
      ]
    ],
    "en": [
      [
        "The mountain path is long. One step at a time.",
        "Rest, then carry on.",
      ],
      [
        "Bajie: A meal before the road.",
        "Every journey needs a companion.",
      ]
    ],
  },
  "light": {
    "paper": "#F4F3E9",
    "vividPaper": "#E8EBDD",
    "ink": "#303540",
    "brand": "#506F5A",
    "brandText": "#FFFFFF",
    "signature": "#926B43",
    "deepAccent": "#506F5A",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#202A24",
    "vividPaper": "#2C3830",
    "text": "#F0EAE0",
    "brand": "#B6CCAC",
    "brandText": "#181B24",
    "signature": "#DFC096",
    "deepAccent": "#B6CCAC",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B6B4AB";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(27vw, 380px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(200px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(27vw, 380px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(27vw, 380px) - 64px)";

export default family;
