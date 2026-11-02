import { createVividFamily } from "./create-vivid-family.js";

// 以专属日常场景组织浅深两种活动，简约配对复用同一色板。
const family = createVividFamily({
  "id": "sakamoto-corner-supply",
  "phrases": {
    "zh": [
      [
        "坂本：面包和蔬菜，都装好了。",
        "坂本：袋底托稳，慢慢拿。"
      ],
      [
        "信：补货箱到了，先从这边摆。",
        "信：这点货，我来搬就好。"
      ],
      [
        "坂本：饭团包好，肚子饿了再吃。",
        "坂本：忙完这一阵，记得吃饭。"
      ],
      [
        "信：饮料留了一瓶，刚好一起休息。",
        "信：今天的补给，也算齐了。"
      ]
    ],
    "en": [
      [
        "Sakamoto: Bread and vegetables, all packed.",
        "Sakamoto: Support the bag from underneath."
      ],
      [
        "Shin: The supplies are here. This shelf first.",
        "Shin: I can carry this crate."
      ],
      [
        "Sakamoto: Rice ball wrapped. Save it for later.",
        "Sakamoto: Remember to eat when the rush is over."
      ],
      [
        "Shin: I saved a drink. Break time?",
        "Shin: That is the last of our supplies."
      ]
    ]
  },
  "light": {
    "paper": "#F8F5E9",
    "vividPaper": "#F1EEDC",
    "ink": "#343D32",
    "brand": "#38634B",
    "brandText": "#FFFFFF",
    "signature": "#704A22",
    "deepAccent": "#38634B",
    "success": "#3E6849",
    "error": "#A6453C",
    "warning": "#785A21"
  },
  "dark": {
    "ground": "#1A201B",
    "vividPaper": "#252B25",
    "text": "#F2F1E4",
    "brand": "#BAD3AE",
    "brandText": "#1C261E",
    "signature": "#E3C282",
    "deepAccent": "#BAD3AE",
    "success": "#B4D5B7",
    "error": "#F1B1A5",
    "warning": "#E6CC8C"
  },
  "signaturePrefix": "sakamoto-corner-supply",
  "names": {
    "zh": "坂本日常 · 街角补给",
    "en": "Sakamoto Days · Corner Store Supplies"
  }
});

family.sortKey = "sakamoto-01-corner-supply";
family.light.textSecondary = "#5E6552";
family.dark.textSecondary = "#CDD4C5";
family.decor.wallpaperSize = "min(29vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.72)), max(230px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 440px) - 64px)";

export default family;
