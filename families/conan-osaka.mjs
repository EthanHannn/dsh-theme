import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "conan-osaka",
  "signaturePrefix": "conan-osaka",
  "names": {
    "zh": "名侦探柯南·大阪同行",
    "en": "Detective Conan · Osaka Companions",
  },
  "phrases": {
    "zh": [
      [
        "柯南：这条路线，好像还有另一种走法。",
      ],
      [
        "平次：先吃一口，线索又不会跑。",
      ],
      [
        "和叶：护身符可要收好哦。",
      ],
      [
        "小兰：走慢一点，大家一起看。",
      ]
    ],
    "en": [
      [
        "Conan: This route might have another turn.",
      ],
      [
        "Heiji: One bite first. The clue can wait.",
      ],
      [
        "Kazuha: Keep that little charm safe.",
      ],
      [
        "Ran: Slow down. Let us all have a look.",
      ]
    ],
  },
  "light": {
    "paper": "#FAF5EC",
    "vividPaper": "#F5EBD9",
    "ink": "#283445",
    "brand": "#356D72",
    "brandText": "#FFFFFF",
    "signature": "#A24E38",
    "deepAccent": "#A24E38",
    "success": "#3D6D59",
    "error": "#B13D51",
    "warning": "#826021",
  },
  "dark": {
    "ground": "#14262B",
    "vividPaper": "#193036",
    "text": "#F0F4FC",
    "brand": "#A2D6D6",
    "brandText": "#152336",
    "signature": "#ECB392",
    "deepAccent": "#ECB392",
    "success": "#A3CEB4",
    "error": "#F3A5B7",
    "warning": "#E1C989",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B2BAC1";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

export default family;
