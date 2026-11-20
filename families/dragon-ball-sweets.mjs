import { createVividFamily } from "./create-vivid-family.js";

// 草莓粉、奶油金和暮色李紫贯穿四个甜点场景。
const family = createVividFamily({
  "id": "dragon-ball-sweets",
  "signaturePrefix": "dragon-ball-sweets",
  "names": {
    "zh": "七龙珠 · 甜点日常",
    "en": "Dragon Ball · Sweet Moments",
  },
  "phrases": {
    "zh": [
      [
        "布欧：甜点要留一份给朋友。",
      ],
      [
        "撒旦：这个蝴蝶结，可是冠军级的！",
      ],
      [
        "比比：汪！",
      ]
    ],
    "en": [
      [
        "Buu: Save something sweet for a friend.",
      ],
      [
        "Satan: Now that's a champion-class bow!",
      ],
      [
        "Bee: Woof!",
      ]
    ],
  },
  "light": {
    "paper": "#FCF5F5",
    "vividPaper": "#F6E8EB",
    "ink": "#34362B",
    "brand": "#91516C",
    "brandText": "#FFFFFF",
    "signature": "#856029",
    "deepAccent": "#856029",
    "success": "#406B50",
    "error": "#B23D46",
    "warning": "#805E20",
  },
  "dark": {
    "ground": "#291D29",
    "vividPaper": "#322437",
    "text": "#FAF4E6",
    "brand": "#E8B1CF",
    "brandText": "#28231A",
    "signature": "#EAD099",
    "deepAccent": "#EAD099",
    "success": "#A7CFAB",
    "error": "#F4A5AC",
    "warning": "#E5C983",
  }
});

// 让带色悬停底上的次级文字保持清晰。
family.dark.textSecondary = "#BFB8B1";

// 按右侧可用宽度与实际图高限制装饰，避免宽构图伸入会话输入框。
const wallpaperSize = "min(36vw, 440px, calc(45vh * var(--dsw-pack-wallpaper-ratio, 1)), max(156px, calc((100vw - 1224px) / 2 - 24px)))";
family.decor.wallpaperSize = wallpaperSize;
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = `calc(-0.3 * ${wallpaperSize}) calc(-1 * min(6vh, 60px))`;
family.decor.heroMaxWidth = `calc(100vw - 280px - ${wallpaperSize} - 64px)`;

family.originalArtworkNames = { zh: "布欧甜点屋", en: "Buu's Sweet Shop" };
family.artworks = [
  {
    id: "boardwalk-ice",
    names: { zh: "海滨冰站", en: "Boardwalk Ice Stand" },
    decor: {
      phrases: {
        zh: [
          ["18 号：接着，再不吃就要化了。", "18 号：这杯草莓芭菲，我留给自己。"],
          ["克林：海风正好，要不要再走一圈？", "克林：草莓味的！谢啦。"],
        ],
        en: [
          ["Android 18: Take it before it melts.", "Android 18: I'm keeping this strawberry parfait."],
          ["Krillin: Nice sea breeze. Another lap?", "Krillin: Strawberry! Thanks."],
        ],
      },
    },
  },
  {
    id: "capsule-baking",
    names: { zh: "胶囊烘焙实验", en: "Capsule Baking Lab" },
    decor: {
      phrases: {
        zh: [
          ["布尔玛：压力刚好，这回奶油能挤成形。", "布尔玛：奇怪，试验样品怎么少了一枚？"],
          ["贝吉塔：我只是确认它能不能吃。", "贝吉塔：哼，勉强合格。"],
        ],
        en: [
          ["Bulma: Pressure looks good. The cream should hold its shape.", "Bulma: Funny. Where did my test sample go?"],
          ["Vegeta: I was checking if it was edible.", "Vegeta: Hmph. Acceptable, barely."],
        ],
      },
    },
  },
  {
    id: "divine-tea",
    names: { zh: "破坏神下午茶", en: "God of Destruction's Tea" },
    decor: {
      phrases: {
        zh: [
          ["比鲁斯：焦糖要刚好有一点苦，才算合格。", "比鲁斯：维斯，下一份布丁呢？"],
          ["维斯：比鲁斯大人，甜点已经送到了。", "维斯：路上很稳，连蝴蝶结都没歪。"],
        ],
        en: [
          ["Beerus: The caramel needs just a touch of bitterness.", "Beerus: Whis, where's the next pudding?"],
          ["Whis: Dessert has arrived, Lord Beerus.", "Whis: Smooth trip. Even the bow stayed straight."],
        ],
      },
    },
  },
];

export default family;
