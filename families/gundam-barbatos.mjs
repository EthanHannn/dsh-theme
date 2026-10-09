import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "gundam-barbatos",
  "signaturePrefix": "gundam-barbatos",
  "names": {
    "zh": "高达·巴巴托斯",
    "en": "Gundam · Barbatos",
  },
  "phrases": {
    "zh": [
      [
        "巴巴托斯：下一段路，继续向前。",
        "巴巴托斯：白甲上的尘土，是走过的路。",
      ],
      [
        "整备记录：关节检查完成。",
        "整备记录：把每一处细节照顾好。",
      ],
      [
        "出击准备：机体状态良好。",
        "出击准备：铁与火之间，保持清醒。",
      ]
    ],
    "en": [
      [
        "Barbatos: Onward to the next stretch.",
        "Barbatos: Dust on white armor marks the road.",
      ],
      [
        "Maintenance: Joint checks complete.",
        "Maintenance: Every small detail matters.",
      ],
      [
        "Ready: All systems in good order.",
        "Ready: Steady between iron and fire.",
      ]
    ],
  },
  "light": {
    "paper": "#F7F4EE",
    "vividPaper": "#EEE6DA",
    "ink": "#28313B",
    "brand": "#835538",
    "brandText": "#FFFFFF",
    "signature": "#8D4450",
    "deepAccent": "#8D4450",
    "success": "#386B55",
    "error": "#AD3D4E",
    "warning": "#806024",
  },
  "dark": {
    "ground": "#1B2028",
    "vividPaper": "#242B34",
    "text": "#F6F5F1",
    "brand": "#DEC09B",
    "brandText": "#19202B",
    "signature": "#E6A8AA",
    "deepAccent": "#E6A8AA",
    "success": "#A7D2B4",
    "error": "#F1A8B2",
    "warning": "#E7C58B",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B9B9B9";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
