import { createVividFamily } from "./create-vivid-family.js";

// 同一戴夫造型连接浅深两幅独立的植物日常。
const family = createVividFamily({
  id: "doro-pvz-coffee-wakeup",
  signaturePrefix: "doro-pvz-coffee-wakeup",
  names: { zh: "咕嘎和 Doro · 植物大战僵尸 · 植物小食铺", en: "Guga & Doro · Plants vs. Zombies · Garden Snack Shop" },
  phrases: {
    zh: [
      [
        "doro～小杯子放好，先闻一闻香气。",
        "doro？这一口，要留给刚醒的朋友。",
      ],
      [
        "doro～小喷菇，困了就再眯一会儿。",
        "doro！餐巾铺好，醒来就能喝啦。",
      ],
      [
        "doro～咖啡豆到位，今晚一起值班。",
        "doro？这颗小豆子，比我还精神。",
      ],
      [
        "doro～小勺子收齐，月亮已经上岗。",
        "doro！锅帽戴好，陪你守到晚安。",
      ],
    ],
    en: [
      [
        "Doro~ Cup ready. Smell that lovely coffee.",
        "Doro? This sip is for our sleepy little friend.",
      ],
      [
        "Doro~ Sleep a little longer, little Puff-shroom.",
        "Doro! Napkin ready for when you wake.",
      ],
      [
        "Doro~ Coffee Bean is here. We share the night watch.",
        "Doro? This little bean is livelier than me.",
      ],
      [
        "Doro~ Spoons packed. The moon is on duty.",
        "Doro! Pot on snug. Here until goodnight.",
      ],
    ],
  },
  light: {
    paper: "#F5F1F6",
    vividPaper: "#E6DDE8",
    ink: "#493C50",
    brand: "#705478",
    brandText: "#FFFFFF",
    signature: "#654832",
    deepAccent: "#705478",
    success: "#38674D",
    error: "#9D454D",
    warning: "#79501F",
  },
  dark: {
    ground: "#26222D",
    vividPaper: "#3E3548",
    text: "#F6F0E9",
    brand: "#D5B8DA",
    brandText: "#26222D",
    signature: "#E7CAA5",
    deepAccent: "#D5B8DA",
    success: "#B3D5BA",
    error: "#F1B1B8",
    warning: "#E9CB9B",
  },
});

family.sortKey = "guga-doro-03-pvz-14-coffee-wakeup";
family.light.textSecondary = "#66556D";
family.dark.textSecondary = "#D4C8DC";
// 对齐浅深角色的头部尺度，为正文与输入区保留空间。
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "咖啡唤醒站", en: "Coffee Wake-up Nook" };
family.legacyFamilies = [
  { id: "doro-pvz-kernel-butter", artwork: "kernel-butter" },
  { id: "doro-pvz-winter-melon", artwork: "winter-melon" },
];
family.artworks = [
  {
    id: "kernel-butter",
    names: { zh: "玉米黄油坊", en: "Kernel Butter Kitchen" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro～黄油切方方，玉米接稳啦。", "doro！这一小块，刚好配一片吐司。"],
          ["doro？叶托放低一点，黄油才不会滑。", "doro～今天的小投手，负责送早餐。"],
          ["doro～吐司暖暖的，慢慢吃呀。", "doro！忙完这一轮，一起歇歇脚。"],
          ["doro～小方巾叠好，明天继续开张。", "doro！锅帽戴稳，黄油坊收工啦。"],
        ],
        en: [
          ["Doro~ Butter squares ready. Catch gently, Kernel!", "Doro! One little pat for one slice of toast."],
          ["Doro? Lower the leaf scoop. Keep that butter steady.", "Doro~ Our little launcher delivers breakfast today."],
          ["Doro~ Toast is warm. Take your time.", "Doro! All done. Time to rest our little feet."],
          ["Doro~ Napkin folded. See you tomorrow.", "Doro! Pot on snug. Butter kitchen closed."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "winter-melon",
    names: { zh: "冰瓜凉饮铺", en: "Winter Melon Refreshments" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro～冰冰凉凉，先装满这一小杯。", "doro？再加一小勺，夏天就不热啦。"],
          ["doro～勺子轻一点，冰花要堆得软软的。", "doro！蓝瓷小碟，也一起凉快一下。"],
          ["doro！这一根，留给最辛苦的小冰瓜。", "doro～咬一小口，慢慢享受。"],
          ["doro～冰箱关好，歇脚时间到。", "doro！今天的凉快，也分你一点。"],
        ],
        en: [
          ["Doro~ One little cup of summer cool.", "Doro? One more scoop to beat the heat."],
          ["Doro~ Gently. Keep the ice fluffy.", "Doro! Even the little saucer feels cool."],
          ["Doro! This pop is for our busy little melon.", "Doro~ A tiny bite. Take your time."],
          ["Doro~ Cooler closed. Time to sit a while.", "Doro! A little summer cool, just for you."],
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
