import { createVividFamily } from "./create-vivid-family.js";

// Guga and Doro plant daisies in the sun and share cocoa on a rainy evening.
const family = createVividFamily({
  id: "guga-doro-together",
  signaturePrefix: "guga-doro-together",
  names: { zh: "咕嘎和 Doro · 日常 · 相伴小日子", en: "Guga & Doro · Daily Life · Little Days Together" },
  phrases: {
    zh: [
      ["咕嘎。花开啦，你看。", "doro～这朵小花送给你！"],
      ["咕嘎。热可可，给你留了一杯。", "doro～毯子分你一半。"],
      ["咕嘎。靠近一点，淋不到雨。", "doro～晴天雨天，都一起呀。"],
    ],
    en: [
      ["Guga. Look, our flowers are blooming.", "Doro~ This little flower is for you!"],
      ["Guga. I saved you a cup of cocoa.", "Doro~ Half the blanket is yours."],
      ["Guga. Stay close, out of the rain.", "Doro~ Sunshine or rain, we're together."],
    ],
  },
  light: {
    paper: "#F4F8FB",
    vividPaper: "#EAF2F7",
    ink: "#283546",
    brand: "#496A83",
    brandText: "#FFFFFF",
    signature: "#A16A27",
    deepAccent: "#A55875",
    success: "#3F745E",
    error: "#B54565",
    warning: "#8C6628",
  },
  dark: {
    ground: "#1B2432",
    vividPaper: "#242F40",
    text: "#F1F3FA",
    brand: "#AFCEE2",
    brandText: "#243247",
    signature: "#EFC385",
    deepAccent: "#E7B2CB",
    success: "#AAD2BC",
    error: "#F0A0B8",
    warning: "#E8CB92",
  },
});

family.sortKey = "guga-doro-02-daily-03-guga-doro-together";
// Cool rainy-night layers need a clear secondary label on stacked hover fills.
family.dark.textSecondary = "#BECBDC";
family.decor.wallpaperSize = "min(30vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.85)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(30vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(30vw, 440px) - 64px)";

// 场景整套切换，稳定入口与阅读配色由集合统一保留。
family.originalArtworkNames = { zh: "晴雨相伴", en: "Sunshine & Rain" };
family.legacyFamilies = [
  { id: "guga-doro-starlamp", artwork: "starlamp" },
  { id: "guga-doro-cafe", artwork: "cafe" },
  { id: "guga-doro-hotpot", artwork: "hotpot" },
  { id: "guga-doro-coop", artwork: "coop" },
  { id: "guga-doro-camping", artwork: "camping" },
];
family.artworks = [
  {
    id: "starlamp",
    names: { zh: "星灯小屋", en: "Starlamp Cottage" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。这颗小星星，送给你。", "doro～一起把星星折好呀！"],
          ["咕嘎。故事翻到这里啦。", "doro～再一起读一页吧。"],
          ["咕嘎。我们做的灯亮起来了。", "doro～把今晚照得暖暖的。"],
        ],
        en: [
          ["Guga. This little star is for you.", "Doro~ Let's fold our stars together!"],
          ["Guga. Here's where our story begins.", "Doro~ Let's read one more page."],
          ["Guga. Our little lamp is glowing.", "Doro~ It makes tonight feel warm."],
        ],
      },
      wallpaperSize: "min(30vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(220px, calc((100vw - 1200px) / 2 - 24px)))",
      wallpaperPosition: "right 24px bottom 20px",
      heroTranslate: "calc(-0.3 * min(30vw, 440px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(30vw, 440px) - 64px)",
    },
  },
  {
    id: "cafe",
    names: { zh: "街角咖啡", en: "Corner Cafe" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。这块酥酥的，留给你。", "doro～一起吃才更香呀！"],
          ["咕嘎。热饮还暖着呢。", "doro～在这里多坐一会儿吧。"],
          ["咕嘎。今天也有小小的快乐。", "doro～有你在，刚刚好。"],
        ],
        en: [
          ["Guga. This flaky bite is for you.", "Doro~ It tastes better together!"],
          ["Guga. Our drink is still warm.", "Doro~ Let's stay a little longer."],
          ["Guga. A little joy for today.", "Doro~ Being with you feels just right."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "hotpot",
    names: { zh: "咕嘟火锅", en: "Hotpot Together" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。锅开啦，先吃一口。", "这一碗，给你留着。"],
          ["doro～番茄汤好香呀！", "doro！再煮一颗丸子。"],
          ["咕嘎。一起吃才热闹。", "doro～碰个小碗！"],
          ["咕嘎。慢慢吃，不着急。", "doro～吃饱了，歇一会儿。"],
        ],
        en: [
          ["Guga. The pot is bubbling!", "I saved this bowl for you."],
          ["Doro~ That tomato broth smells lovely!", "Doro! One more bite."],
          ["Guga. Meals are better together.", "Doro~ Cheers, little bowls!"],
          ["Guga. Take your time.", "Doro~ Full and happy."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "coop",
    names: { zh: "快乐开黑", en: "Co-op Playtime" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。我来配合你。", "这一关，我们一起过。"],
          ["doro～准备好啦！", "doro！差一点就成功了。"],
          ["咕嘎。配合得不错。", "doro～击个小掌！"],
          ["咕嘎。中场休息。", "doro～爆米花分你一半。"],
        ],
        en: [
          ["Guga. I've got your back.", "We'll clear this level together."],
          ["Doro~ Ready to play!", "Doro! So close!"],
          ["Guga. Nice teamwork.", "Doro~ Tiny high-five!"],
          ["Guga. Time for a break.", "Doro~ Half the popcorn is yours."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "camping",
    names: { zh: "湖畔露营", en: "Lakeside Camping" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["咕嘎。湖边的风刚刚好。", "坐下来，喝口热的。"],
          ["doro～棉花糖烤好啦！", "doro，这颗分给你。"],
          ["咕嘎。毯子够我们俩。", "doro～再靠近一点点。"],
          ["咕嘎。天上的星星亮了。", "doro～今晚一起数星星。"],
        ],
        en: [
          ["Guga. The lake breeze feels lovely.", "Sit down for something warm."],
          ["Doro~ Marshmallows are ready!", "Doro. This one is for you."],
          ["Guga. Room for both under this blanket.", "Doro~ A little closer."],
          ["Guga. The stars are out.", "Doro~ Let's count them together."],
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
