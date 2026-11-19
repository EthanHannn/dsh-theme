import { createVividFamily } from "./create-vivid-family.js";

// Each role keeps its own costume and distinct light/dark daily activities.
const family = createVividFamily({
  id: "doro-oasis-gold",
  signaturePrefix: "doro-oasis-gold",
  names: {
    zh: "咕嘎和 Doro · 中东土豪 · 金穗绿洲",
    en: "Guga & Doro · Arabian Luxury · Golden Oasis",
  },
  phrases: {
    zh: [
      [
        "doro～先来一小杯，金壶刚刚温好。",
        "doro！今天的咖啡也要认真招待。",
      ],
      [
        "doro～椰枣甜甜的，你也拿一颗。",
        "doro！最好的盘子，装最想分享的点心。",
      ],
      [
        "doro？这颗像不像绿洲里的小水滴？",
        "doro～宝石很亮，也没有你来做客开心。",
      ],
      [
        "doro～小箱锁好，月亮替我看庭院。",
        "doro！锦垫软软的，今晚不数宝石啦。",
      ],
    ],
    en: [
      [
        "Doro~ A little cup first. The gold pot is warm.",
        "Doro! Fresh coffee for our welcome guest.",
      ],
      [
        "Doro~ A sweet little date. Have one too.",
        "Doro! My best dish for a treat worth sharing.",
      ],
      [
        "Doro? A tiny drop of oasis blue, perhaps?",
        "Doro~ A bright gem. An even brighter visit.",
      ],
      [
        "Doro~ Chest locked. Moonlight watches the courtyard.",
        "Doro! Soft cushions. No counting gems tonight.",
      ],
    ],
  },
  light: {
    paper: "#FAF3E5",
    vividPaper: "#F0E3CB",
    ink: "#4B3B25",
    brand: "#705127",
    brandText: "#FFFFFF",
    signature: "#65461F",
    deepAccent: "#705127",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#292C32",
    vividPaper: "#3A3E44",
    text: "#F7F0DE",
    brand: "#DEC58F",
    brandText: "#292C32",
    signature: "#F2D59C",
    deepAccent: "#DEC58F",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-06-oasis-01-gold";
family.light.textSecondary = "#69583C";
family.dark.textSecondary = "#DDD2BA";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

family.originalArtworkNames = { zh: "金穗绿洲", en: "Golden Oasis" };

// 沙丘和海湾的主图横向铺开，给车身、船体和双人小聚留出空间。
const wideArtworkLayout = {
  wallpaperSize: "min(36vw, 510px, calc(62vh * var(--dsw-pack-wallpaper-ratio, 1)), max(270px, calc((100vw - 1100px) / 2 - 24px)))",
  heroTranslate: "calc(-0.3 * min(36vw, 510px)) calc(-1 * min(6vh, 60px))",
  heroMaxWidth: "calc(100vw - 280px - min(36vw, 510px) - 64px)",
};

family.artworks = [
  {
    id: "palace-garden",
    names: { zh: "宫苑闲游", en: "Palace Garden" },
    decor: {
      phrases: {
        zh: [
          ["doro～让玫瑰沿着水波漂一会儿。", "doro！池面上有一朵粉红色的小船。"],
          ["doro～摘一枝就好，其他的留给蜜蜂。", "doro！水边的石头晒得暖暖的。"],
          ["doro～茉莉开了，风也是香的。", "doro！帮我轻轻推一下秋千。"],
          ["doro～花架底下还能看见星星。", "doro！再荡一小会儿，就回屋啦。"],
        ],
        en: [
          ["Doro~ Let the rose drift on the ripples a little longer.", "Doro! A tiny pink boat in the fountain."],
          ["Doro~ One flower is enough. The bees can have the rest.", "Doro! The sun has warmed the stones by the water."],
          ["Doro~ The jasmine is blooming. Even the breeze smells sweet.", "Doro! Give the swing a little push."],
          ["Doro~ I can see the stars through the trellis.", "Doro! One more swing before we go inside."],
        ],
      },
    },
  },
  {
    id: "dune-holiday",
    names: { zh: "沙丘度假", en: "Dune Holiday" },
    decor: {
      ...wideArtworkLayout,
      phrases: {
        zh: [
          ["doro！翻过前面那道沙脊，就能看见营帐。", "doro～头巾的尾巴被风举起来啦。"],
          ["doro！这一串轮印，是我们刚刚走过的路。", "doro～再慢一点，沙丘拐弯真好看。"],
          ["doro～杯子是暖的，沙漠的风凉凉的。", "doro？你看，那边亮的是第一颗星吗？"],
          ["doro～今天走够啦，就在这里躺一会儿。", "doro！明早再出发，今晚把星星看够。"],
        ],
        en: [
          ["Doro! The camp is just over that ridge.", "Doro~ The wind caught the tail of my headcloth."],
          ["Doro! Those tire tracks are ours.", "Doro~ A little slower. The curve of this dune is lovely."],
          ["Doro~ The cup is warm and the desert breeze is cool.", "Doro? Is that the first star over there?"],
          ["Doro~ We’ve gone far enough today. Let’s lie here awhile.", "Doro! We leave in the morning. Tonight is for stars."],
        ],
      },
    },
  },
  {
    id: "gulf-retreat",
    names: { zh: "海湾假日", en: "Gulf Retreat" },
    decor: {
      ...wideArtworkLayout,
      phrases: {
        zh: [
          ["doro！快看，船头的浪像雪一样白。", "doro～这阵风，连头巾也想跟着出海。"],
          ["doro～扶稳栏杆，给岸上挥挥手。", "doro！回去时再绕过那排棕榈树。"],
          ["doro！咕嘎来了，可以点蜡烛啦。", "doro～切一块带最多椰枣的给你。"],
          ["doro～吃完蛋糕，再坐一会儿听海。", "doro！下次换你来吹蜡烛。"],
        ],
        en: [
          ["Doro! Look how white the foam is at the bow.", "Doro~ Even my headcloth wants to go sailing in this breeze."],
          ["Doro~ Hold the rail and wave to the shore.", "Doro! Let’s pass those palms again on the way home."],
          ["Doro! Guga’s here. We can light the candle.", "Doro~ I’ll cut you the slice with the most dates."],
          ["Doro~ Let’s listen to the sea a little longer after cake.", "Doro! Next time you get to blow out the candle."],
        ],
      },
    },
  },
];

export default family;
