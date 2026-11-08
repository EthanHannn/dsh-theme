import { createVividFamily } from "./create-vivid-family.js";

// Planting and defense share a material palette, with separately staged scenes.
const family = createVividFamily({
  id: "guga-doro-pvz-garden",
  signaturePrefix: "guga-doro-pvz-garden",
  names: { zh: "咕嘎和 Doro · 植物大战僵尸 · 庭院守卫队", en: "Guga & Doro · Plants vs. Zombies · Garden Guardians" },
  phrases: {
    zh: [
      [
        "咕嘎。这一铲，给小苗留个家。",
        "咕嘎。豌豆这一排，我来种。",
      ],
      [
        "doro～这颗阳光，先存起来！",
        "doro！离下一株向日葵又近一点。",
      ],
      [
        "咕嘎。坚果站稳，后面交给我。",
        "咕嘎。今天种下的，一棵也不让。",
      ],
      [
        "doro～喝饱水，明天一起守家。",
        "doro！浇完这壶，我们就收工。",
      ],
    ],
    en: [
      [
        "Guga. A little home for this seedling.",
        "Guga. I will plant the Peashooter row.",
      ],
      [
        "Doro~ Saving this bit of sunshine!",
        "Doro! One step closer to another Sunflower.",
      ],
      [
        "Guga. Stand firm, Wall-nut. I have your back.",
        "Guga. Every seedling stays safe tonight.",
      ],
      [
        "Doro~ Drink up. Tomorrow we guard the garden.",
        "Doro! One last watering, then we rest.",
      ],
    ],
  },
  light: {
    paper: "#F8FAEE",
    vividPaper: "#F0F3DF",
    ink: "#35482C",
    brand: "#4A6C31",
    brandText: "#FFFFFF",
    signature: "#715317",
    deepAccent: "#4A6C31",
    success: "#3F6D49",
    error: "#AD4C43",
    warning: "#89621D",
  },
  dark: {
    ground: "#1C281E",
    vividPaper: "#263629",
    text: "#F1F6E8",
    brand: "#C8DDA1",
    brandText: "#273821",
    signature: "#E9CF89",
    deepAccent: "#C8DDA1",
    success: "#AFD7AA",
    error: "#F1AAA0",
    warning: "#E9CF89",
  },
});

family.sortKey = "guga-doro-03-pvz-01-guga-doro-pvz-garden";
family.light.textSecondary = "#50603A";
family.dark.textSecondary = "#C7D4B9";
// Independent poses use matched head scale on a shared portrait canvas.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

// 场景整套切换，稳定入口与阅读配色由集合统一保留。
family.originalArtworkNames = { zh: "戴夫种植队", en: "Dave Garden Crew" };
family.legacyFamilies = [
  { id: "guga-doro-pvz-moonwatch", artwork: "moonwatch" },
  { id: "guga-doro-pvz-pool", artwork: "pool" },
  { id: "guga-doro-pvz-rooftop", artwork: "rooftop" },
];
family.artworks = [
  {
    id: "moonwatch",
    names: { zh: "月夜守卫战", en: "Moonlight Garden Defense" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。蘑菇在这格，小路留给我们。", "咕嘎。先看路线，再开种。"],
          ["doro～先睡一会，月亮来叫你。", "doro！给小喷菇找好位置啦。"],
          ["咕嘎。坚果别怕，蘑菇阵醒了。", "咕嘎。这条小路，今晚不让。"],
          ["doro～跟着灯走，我照着你。", "doro！月亮上班，我们也上班。"],
        ],
        en: [
          ["Guga. Mushrooms here. Keep our path clear.", "Guga. Check the route, then plant."],
          ["Doro~ Rest a little. The moon will wake you.", "Doro! A perfect spot for Puff-shroom."],
          ["Guga. Easy, Wall-nut. Our mushrooms are awake.", "Guga. This path is ours tonight."],
          ["Doro~ Follow my lantern. I will light the way.", "Doro! The moon is up. Our shift begins."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "pool",
    names: { zh: "睡莲护航队", en: "Lily Pad Patrol" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。桨放稳，下一站是睡莲。", "咕嘎。这条泳道，我们来守。"],
          ["doro～这片叶子，刚好托住小勇气。", "doro！香蒲的座位准备好啦。"],
          ["咕嘎。绳结系好，阳光也带上。", "咕嘎。小木筏，今天辛苦啦。"],
          ["doro～我提着灯，你慢慢划。", "doro！锅帽戴稳，出发护航！"],
        ],
        en: [
          ["Guga. Paddle ready. Next stop, lily pads.", "Guga. We will guard this lane."],
          ["Doro~ A little leaf for a little courage.", "Doro! Cattail has a seat ready."],
          ["Guga. Tie the knot. Bring the sunshine.", "Guga. Good work today, little raft."],
          ["Doro~ I have the light. Take your time.", "Doro! Pot hats on. Patrol begins!"],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "rooftop",
    names: { zh: "屋顶投手队", en: "Rooftop Pult Crew" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。花盆坐稳，玉米就上班。", "咕嘎。屋顶这一格，留给你。"],
          ["doro～小篮子装满，肚肚也圆圆。", "doro！补给送到，白衬衣没弄脏。"],
          ["咕嘎。抬高一点，黄油准备。", "咕嘎。这次走弧线。"],
          ["doro～这一小块，留给大场面。", "doro！锅帽歪了，勇气没歪。"],
        ],
        en: [
          ["Guga. Pot steady. Corn is on duty.", "Guga. This rooftop tile is yours."],
          ["Doro~ Full little basket, round little belly.", "Doro! Supplies here. Shirt still clean."],
          ["Guga. A little higher. Butter ready.", "Guga. This one takes the curved route."],
          ["Doro~ One little square for a big moment.", "Doro! Hat tilted. Courage steady."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
];

export default family;
