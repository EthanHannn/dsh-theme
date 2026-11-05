import { createVividFamily } from "./create-vivid-family.js";

// 每组短句与对应的侧栏角色配对。
const family = createVividFamily({
  "id": "spy-family-eden",
  "signaturePrefix": "spy-family-eden",
  "names": {
    "zh": "间谍过家家·伊甸星光",
    "en": "Spy x Family · Eden Stars",
  },
  "phrases": {
    "zh": [
      [
        "阿尼亚：今天也要拿星星！",
        "这颗星星，先收好。",
      ],
      [
        "达米安：这题我已经会了。",
        "书借给你，记得还。",
      ],
      [
        "贝姬：放学一起走吧。",
        "阿尼亚，这边有空位。",
      ]
    ],
    "en": [
      [
        "Anya: Another star today!",
        "This star is a keeper.",
      ],
      [
        "Damian: I know this one already.",
        "You can borrow it. Bring it back.",
      ],
      [
        "Becky: Let us walk home together.",
        "Anya, there is a seat here.",
      ]
    ],
  },
  "light": {
    "paper": "#F9F3E8",
    "vividPaper": "#F1E7D6",
    "ink": "#303540",
    "brand": "#8B493E",
    "brandText": "#FFFFFF",
    "signature": "#96702C",
    "deepAccent": "#8B493E",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#211A1B",
    "vividPaper": "#2B2021",
    "text": "#F0EAE0",
    "brand": "#E5AD87",
    "brandText": "#181B24",
    "signature": "#E8CA83",
    "deepAccent": "#E5AD87",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// 提高次要标签在带色悬停表面上的可读性。
family.dark.textSecondary = "#B6B0A9";

// 利用竖幅高度，同时把宽度限制在阅读区外侧。
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

// 同一校园主题的完整场景随图片一起切换，继承原有配色。
family.originalArtworkNames = { zh: "星章时刻", en: "A Little Stella" };
family.artworks = [
  {
    id: "paper-wings",
    names: { zh: "纸翼小队", en: "Paper Wings Club" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["阿尼亚：纸飞机也能拿星星吗？", "这次一定飞过窗边！"],
          ["达米安：折痕压平，才飞得稳。", "这一架……借你试飞。"],
          ["贝姬：下一页，画我们的航线。", "阿尼亚，你的那架飞得最开心。"],
        ],
        en: [
          ["Anya: Can paper planes earn Stellas too?", "This one will make it past the window!"],
          ["Damian: Neat folds make a steady flight.", "You can... test this one for me."],
          ["Becky: Our flight path goes on the next page.", "Anya, yours looks the happiest in the air."],
        ],
      },
    },
  },
  {
    id: "greenhouse",
    names: { zh: "温室观察", en: "Greenhouse Notes" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["阿尼亚：它今天又长高了！", "小叶子，也在努力拿星星。"],
          ["达米安：水要慢慢倒，别浇太多。", "明天再来看看，它会长大的。"],
          ["贝姬：这片叶子，夹在今天这一页。", "你照顾它，我把变化记下来。"],
        ],
        en: [
          ["Anya: It grew taller again today!", "Little leaves are trying for Stellas too."],
          ["Damian: Pour slowly. It only needs a little.", "We can check again tomorrow. It will grow."],
          ["Becky: This leaf belongs on today's page.", "You look after it. I will keep the notes."],
        ],
      },
    },
  },
  {
    id: "garden-snack",
    names: { zh: "庭院点心", en: "Courtyard Treats" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["阿尼亚：花生饼干，一人一块！", "最后这块，留给一起回家的人。"],
          ["达米安：我只是刚好多带了一只杯子。", "慢一点吃，点心时间还没结束。"],
          ["贝姬：篮子装好了，明天还坐这里。", "阿尼亚，餐巾也替你留着呢。"],
        ],
        en: [
          ["Anya: One peanut biscuit for everyone!", "The last one is for our walk home."],
          ["Damian: I just happened to bring an extra cup.", "Take your time. Our break is not over yet."],
          ["Becky: Basket packed. Same spot tomorrow.", "Anya, I saved a napkin for you too."],
        ],
      },
    },
  },
];

export default family;
