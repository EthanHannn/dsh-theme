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

// 新场景有人物横向互动，按实际宽高比限高，并给输入区留出空间。
const sceneWallpaperSize = "min(38vw, 520px, calc(54vh * var(--dsw-pack-wallpaper-ratio, 1)), max(248px, calc((100vw - 1200px) / 2 + 16px)))";
const sceneLayout = {
  wallpaperSize: sceneWallpaperSize,
  heroTranslate: `calc(-0.3 * ${sceneWallpaperSize}) calc(-1 * min(6vh, 60px))`,
  heroMaxWidth: `calc(100vw - 280px - ${sceneWallpaperSize} - 64px)`,
};

family.originalArtworkNames = { zh: "街角补给", en: "Corner Store Supplies" };
family.artworks = [
  {
    id: "steamed-buns",
    names: { zh: "肉包出笼", en: "Freshly Steamed Buns" },
    decor: {
      ...sceneLayout,
      phrases: {
        zh: [
          ["少糖：肉包出笼，小心烫。", "少糖：有三个，给店长留一个。"],
          ["少糖：拇指按住馅，边转边捏。", "信：我这只是包子，还是饺子？"],
        ],
        en: [
          ["Lu: The buns are ready. Careful, they're hot.", "Lu: There are three. Save one for the boss."],
          ["Lu: Hold the filling with your thumb and pleat as you turn.", "Shin: Is mine a bun or a dumpling?"],
        ],
      },
    },
  },
  {
    id: "neighborhood-delivery",
    names: { zh: "街巷送货", en: "Neighborhood Delivery" },
    decor: {
      ...sceneLayout,
      phrases: {
        zh: [
          ["信：还剩一袋，转过街角就到了。", "信：放心，东西还稳稳在袋里。"],
          ["坂本：慢一点，前面有水洼。", "坂本：箱子放稳了，再走。"],
        ],
        en: [
          ["Shin: One bag left. It's just around the corner.", "Shin: Don't worry, everything's still in the bag."],
          ["Sakamoto: Slow down. There's a puddle ahead.", "Sakamoto: Make sure the crates are steady before we go."],
        ],
      },
    },
  },
  {
    id: "riverside-picnic",
    names: { zh: "河堤野餐", en: "Riverside Picnic" },
    decor: {
      ...sceneLayout,
      phrases: {
        zh: [
          ["花：爸爸，我要那条小章鱼！", "葵：便当放中间，大家都夹得到。"],
          ["坂本：坐稳，鞋带给你系好了。", "花：爸爸，我们下次还来吗？"],
        ],
        en: [
          ["Hana: Dad, I want the little octopus!", "Aoi: Put the bento in the middle so everyone can reach."],
          ["Sakamoto: Sit tight. There, your lace is tied.", "Hana: Dad, can we come back next time?"],
        ],
      },
    },
  },
];

export default family;
