import { createVividFamily } from "./create-vivid-family.js";

// 口袋道具与日常陪伴串起四组独立场景。
const family = createVividFamily({
  "id": "doraemon-pocket",
  "signaturePrefix": "doraemon-pocket",
  names: { zh: "哆啦A梦 · 奇妙同行", en: "Doraemon · Everyday Adventures" },
  "phrases": {
    "zh": [
      [
        "哆啦A梦：口袋里还有办法。",
        "铜锣烧，留一块给我。",
      ],
      [
        "大雄：这次一定能做到！",
        "竹蜻蜓准备好了。",
      ],
      [
        "哆啦美：道具要记得收好。",
        "先看看说明图吧。",
      ]
    ],
    "en": [
      [
        "Doraemon: There is a way in my pocket.",
        "Save a dorayaki for me.",
      ],
      [
        "Nobita: I can do it this time!",
        "The bamboo-copter is ready.",
      ],
      [
        "Dorami: Put the gadgets away safely.",
        "Let us check the picture guide.",
      ]
    ],
  },
  "light": {
    "paper": "#F1F8FC",
    "vividPaper": "#E4F1F8",
    "ink": "#303540",
    "brand": "#24729D",
    "brandText": "#FFFFFF",
    "signature": "#B65050",
    "deepAccent": "#24729D",
    "success": "#487653",
    "error": "#B3464C",
    "warning": "#946A27",
  },
  "dark": {
    "ground": "#152338",
    "vividPaper": "#192D43",
    "text": "#F0EAE0",
    "brand": "#8BCDE8",
    "brandText": "#181B24",
    "signature": "#F1B4A0",
    "deepAccent": "#8BCDE8",
    "success": "#98C79D",
    "error": "#EF9199",
    "warning": "#EAC47F",
  }
});

// 保证深色悬浮表面的次级文字清楚可读。
family.dark.textSecondary = "#B3B2B1";

function sceneDecor(phrases, width = 460) {
  return {
    headerArt: { bakedHorizontalFade: true },
    // 按每张主图的实际比例限高，正文页同时避开中央阅读区。
    wallpaperSize: `min(38vw, ${width}px, calc(55vh * var(--dsw-pack-wallpaper-ratio, 1)), max(220px, calc((100vw - 1200px) / 2 - 24px)))`,
    wallpaperPosition: "right 24px bottom 16px",
    heroTranslate: `calc(-0.3 * min(38vw, ${width}px)) calc(-1 * min(6vh, 60px))`,
    heroMaxWidth: `calc(100vw - 280px - min(38vw, ${width}px) - 64px)`,
    phrases,
  };
}

Object.assign(family.decor, sceneDecor(family.decor.phrases, 420));

// 保留原有入口与场景标识，浅深色分别使用确认后的独立构图。
family.originalArtworkNames = { zh: "口袋奇遇", en: "Pocket Wonders" };
family.legacyFamilies = [
  { id: "doraemon-afterschool", artwork: "afterschool" },
  { id: "doraemon-starlight", artwork: "starlight" },
];
family.artworks = [
  {
    id: "afterschool",
    names: { zh: "放学约定", en: "After-School Promise" },
    decor: sceneDecor({
      zh: [
        ["哆啦A梦：先吃点心再出发。", "约好了，要一起回家。"],
        ["大雄：今天的作业先写完。", "这页我没有忘记！"],
        ["静香：放学后一起走吧。", "书包不要落下哦。"],
      ],
      en: [
        ["Doraemon: A snack before we go.", "We promised to walk home together."],
        ["Nobita: Homework first today.", "I remembered this page!"],
        ["Shizuka: Let us walk home after class.", "Do not forget your schoolbag."],
      ],
    }),
  },
  {
    id: "starlight",
    names: { zh: "星空航路", en: "Starlit Journey" },
    decor: sceneDecor({
      zh: [
        ["哆啦A梦：下一站，看星星！", "航路已经记下了。"],
        ["大雄：那颗星好亮啊。", "这回我来拿地图！"],
        ["静香：灯光会陪着我们。", "一起找到那颗星吧。"],
      ],
      en: [
        ["Doraemon: Next stop, the stars!", "Our route is marked."],
        ["Nobita: That star is so bright.", "I will carry the map this time!"],
        ["Shizuka: The lantern will guide us.", "Let us find that star together."],
      ],
    }),
  },
  {
    id: "undersea",
    names: { zh: "海底探险", en: "Undersea Explorers" },
    decor: sceneDecor({
      zh: [
        ["哆啦A梦：海底也有新发现。", "潜艇准备好了，一起出发！"],
        ["胖虎：地图拿稳，这回听我的。", "伙伴们，一个也不能少。"],
        ["小夫：看，舷窗外有条小鱼！", "这条航线，我已经记下了。"],
      ],
      en: [
        ["Doraemon: There is more to discover below.", "The submarine is ready. Let us go!"],
        ["Gian: Hold the map steady. Follow me.", "We are keeping everyone together."],
        ["Suneo: Look, a fish outside the window!", "I have marked our route."],
      ],
    }, 470),
  },
];

export default family;
