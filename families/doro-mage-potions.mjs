import { createVividFamily } from "./create-vivid-family.js";

// One wizard identity connects distinct daily activities in each mode.
const family = createVividFamily({
  id: "doro-mage-potions",
  signaturePrefix: "doro-mage-potions",
  names: { zh: "咕嘎和 Doro · 魔法师 · 奇妙日常", en: "Guga & Doro · Wizard Life · Everyday Wonders" },
  phrases: {
    zh: [
      [
        "doro～晨露两滴，今天就亮一点。",
        "doro？这一锅，会不会有青草香？",
      ],
      [
        "doro！小瓶子里，藏着一颗清晨。",
        "doro～举高一点，看见露珠啦。",
      ],
      [
        "doro～嗯，是刚下过雨的味道。",
        "doro？闻一下，困意也软乎乎。",
      ],
      [
        "doro～软木塞盖好，晚安也装好。",
        "doro！最后两瓶，留给好梦。",
      ],
    ],
    en: [
      [
        "Doro~ Two drops of dew to brighten the day.",
        "Doro? Will this little pot smell of grass?",
      ],
      [
        "Doro! A whole morning in one tiny bottle.",
        "Doro~ A little higher. There is the dewdrop.",
      ],
      [
        "Doro~ Mmm. Just like a garden after rain.",
        "Doro? Even sleepiness smells soft.",
      ],
      [
        "Doro~ Corks in. Good nights tucked away.",
        "Doro! The last two bottles are for sweet dreams.",
      ],
    ],
  },
  light: {
    paper: "#F1F6EF",
    vividPaper: "#E5EFDE",
    ink: "#344839",
    brand: "#496A46",
    brandText: "#FFFFFF",
    signature: "#694821",
    deepAccent: "#496A46",
    success: "#3E705B",
    error: "#A34D63",
    warning: "#805C26",
  },
  dark: {
    ground: "#1D2B27",
    vividPaper: "#293C33",
    text: "#EFF7E9",
    brand: "#C0DBAD",
    brandText: "#1D2B27",
    signature: "#E7C799",
    deepAccent: "#C0DBAD",
    success: "#B2DDBF",
    error: "#F2A6B9",
    warning: "#ECD096",
  },
});

family.sortKey = "guga-doro-04-mage-01-potions";
family.light.textSecondary = "#53684E";
family.dark.textSecondary = "#C5D8BB";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "星露药房", en: "Dewdrop Apothecary" };
family.legacyFamilies = [
  { id: "doro-mage-cloud-bakery", artwork: "cloud-bakery" },
  { id: "doro-mage-moonmail", artwork: "moonmail" },
  { id: "doro-mage-starmoon-atelier", artwork: "starmoon-atelier" },
];
family.artworks = [
  {
    id: "cloud-bakery",
    names: { zh: "云朵烘焙", en: "Cloud Bakery" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro！小面包，轻轻飞起来。", "doro～云朵要烤得松松的。"],
          ["doro？鼻尖这点，也是面粉。", "doro～碗里还有一朵没醒的云。"],
          ["doro～一颗星星，点一滴甜。", "doro！这枚糖霜，画得圆圆的。"],
          ["doro～丝带系好，明天有礼物。", "doro！盒子里，装着刚出炉的好心情。"],
        ],
        en: [
          ["Doro! Little bun, float up gently.", "Doro~ Clouds should bake soft and fluffy."],
          ["Doro? Yes, that is flour on my nose.", "Doro~ One sleepy cloud is still in the bowl."],
          ["Doro~ One star, one little drop of sweet.", "Doro! A round little dot of icing."],
          ["Doro~ Ribbon tied. Tomorrow has a present.", "Doro! A box full of freshly baked happiness."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "moonmail",
    names: { zh: "月邮小屋", en: "Moonlit Mailroom" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro～封好啦，心意不会漏出来。", "doro？这枚月牙，盖得正不正？"],
          ["doro！有一封给你的问候。", "doro～邮包不大，惦记很多。"],
          ["doro～小扫帚，今晚慢一点飞。", "doro！下一站，是亮着灯的窗。"],
          ["doro～最后一封，也平安送到。", "doro！空空的邮包，满满的一天。"],
        ],
        en: [
          ["Doro~ Sealed. The warm wishes stay inside.", "Doro? Is this little crescent straight?"],
          ["Doro! One little hello, addressed to you.", "Doro~ Small mailbag, so many warm thoughts."],
          ["Doro~ Little broom, fly gently tonight.", "Doro! Next stop: that warmly lit window."],
          ["Doro~ The very last letter arrived safely.", "Doro! Empty mailbag. Such a full day."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "starmoon-atelier",
    names: { zh: "星月工坊", en: "Starmoon Atelier" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro～把这颗小星星，嵌进月亮里。", "doro？再转半圈，星晶就坐稳啦。"],
          ["doro！白天做的小月灯，终于亮啦。", "doro～留一小格月光，陪你到很晚。"],
          ["doro？这条星线，是不是通往月亮？", "doro～星镜调好，今晚慢慢看。"],
          ["doro～帽尖也困了，今天先看到这里。", "doro！星图收好，明晚还来呀。"],
        ],
        en: [
          ["Doro~ A little star, tucked inside the moon.", "Doro? Half a turn. The star crystal fits."],
          ["Doro! The moon lamp we made is glowing!", "Doro~ A little moonlight to keep you company."],
          ["Doro? Does this star trail lead to the moon?", "Doro~ Telescope ready. Take your time tonight."],
          ["Doro~ Even my hat tip is sleepy now.", "Doro! Charts packed. See you tomorrow night."],
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
