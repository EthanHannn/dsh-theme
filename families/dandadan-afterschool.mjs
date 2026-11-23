import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dandadan-afterschool",
  "signaturePrefix": "dandadan-afterschool",
  names: { zh: "胆大党 · 怪奇同盟", en: "Dandadan · Uncanny Alliance" },
  "phrases": {
    "zh": [
      [
        "小桃：先听我把话说完！",
        "放学后，老地方见。",
      ],
      [
        "厄卡伦：这次我记下来了。",
        "那个，我有个新发现。",
      ],
      [
        "高速婆婆：少磨蹭，走了。",
        "这个角落归我了。",
      ]
    ],
    "en": [
      [
        "Momo: Let me finish first!",
        "Same place after school.",
      ],
      [
        "Okarun: I wrote it down this time.",
        "Um, I found something new.",
      ],
      [
        "Turbo Granny: Quit dawdling. Move it.",
        "This corner is mine.",
      ]
    ],
  },
  "light": {
    "paper": "#FAF1EE",
    "vividPaper": "#F1E2DE",
    "ink": "#303540",
    "brand": "#A14C54",
    "brandText": "#FFFFFF",
    "signature": "#5A718E",
    "deepAccent": "#A14C54",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#251B27",
    "vividPaper": "#302236",
    "text": "#F0EAE0",
    "brand": "#E4A0B1",
    "brandText": "#181B24",
    "signature": "#ABC0E8",
    "deepAccent": "#E4A0B1",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#B7B0AC";

// Use the portrait height while keeping its width within the reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "放学怪谈", en: "After-School Rumors" };
family.legacyFamilies = [
  { id: "dandadan-awakening", artwork: "awakening" },
  { id: "dandadan-nightwatch", artwork: "nightwatch" },
];
family.artworks = [
  {
    id: "awakening",
    names: { zh: "灵能交锋", en: "Psychic Awakening" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["小桃：稳住，我来想办法。", "这次可别一个人冲上去。"],
          ["厄卡伦：我会跟上你的。", "先把大家带回去。"],
          ["高速婆婆：总算像点样了。", "可别踩到本婆婆。"],
        ],
        en: [
          ["Momo: Hold steady. I have a plan.", "Do not rush in alone this time."],
          ["Okarun: I will keep up with you.", "Let us get everyone home first."],
          ["Turbo Granny: Now you are getting it.", "Watch where you step."],
        ],
      },
      wallpaperSize: "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(29vw, 430px) - 64px)",
    },
  },
  {
    id: "nightwatch",
    names: { zh: "夜巡同盟", en: "Nightwatch Friends" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["小桃：路线都看清楚了吧？", "天黑之前先集合。"],
          ["厄卡伦：调查笔记准备好了。", "这条线索好像能接上。"],
          ["寺仁：手电筒还有电！", "我来照前面的路。"],
          ["星子：进门记得脱鞋。", "调查之前，先喝杯茶。"],
        ],
        en: [
          ["Momo: Everyone knows the route?", "Meet up before it gets dark."],
          ["Okarun: Investigation notes ready.", "This clue might connect."],
          ["Jiji: The flashlight is charged!", "I will light the way."],
          ["Seiko: Shoes off at the door.", "Tea before the investigation."],
        ],
      },
      wallpaperSize: "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(29vw, 430px) - 64px)",
    },
  },
];

export default family;
