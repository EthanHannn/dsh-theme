import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "doro-hufflepuff",
  signaturePrefix: "doro-hufflepuff",
  names: {
    zh: "咕嘎和 Doro · 魔法师 · 赫奇帕奇日记",
    en: "Guga & Doro · Wizard Life · Hufflepuff Diary",
  },
  phrases: {
    zh: [
      ["doro～炉边的点心，给你留一块。", "doro！杯子暖暖的，坐近一点呀。"],
      ["doro～小芽也来听壁炉的故事。", "doro？明天给你换个向阳的位置。"],
      ["doro～翻过这一页，饼干就烤好啦。", "doro！书签夹好，先歇一小会儿。"],
      ["doro～一点小魔法，让茶再暖一会儿。", "doro！星光也想尝一口蜂蜜。"],
    ],
    en: [
      ["Doro~ A fireside treat, saved just for you.", "Doro! Warm cup ready. Come sit closer."],
      ["Doro~ Our little sprout likes fireside stories too.", "Doro? A sunnier spot for you tomorrow."],
      ["Doro~ One more page, then the biscuits are ready.", "Doro! Bookmark in. Time for a little rest."],
      ["Doro~ A tiny spell to keep our tea warm.", "Doro! Even starlight wants a taste of honey."],
    ],
  },
  light: {
    paper: "#FBF6EA",
    vividPaper: "#F4E6C5",
    ink: "#3B3020",
    brand: "#785619",
    brandText: "#FFFFFF",
    signature: "#8B641C",
    deepAccent: "#785619",
    success: "#46663D",
    error: "#A04345",
    warning: "#805619",
  },
  dark: {
    ground: "#1C1A16",
    vividPaper: "#25221C",
    text: "#F4EAD3",
    brand: "#E5BE64",
    brandText: "#25221C",
    signature: "#E9C77B",
    deepAccent: "#E5BE64",
    success: "#B5D39F",
    error: "#F0AAA1",
    warning: "#E8C47B",
  },
});

family.sortKey = "guga-doro-04-mage-05-hufflepuff";
family.light.textSecondary = "#67583D";
family.dark.textSecondary = "#D2C4A5";
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";
family.originalArtworkNames = { zh: "炉边点心", en: "Fireside Treats" };

// 四组场景共用阅读配色、文件夹与侧栏伙伴，短句顺序对应点心、嫩芽、书本、魔杖。
family.artworks = [
  {
    id: "greenhouse",
    names: { zh: "温室新芽", en: "Greenhouse Sprouts" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro～忙完浇水，再喝一口蜂蜜茶。", "doro！小饼干放好，别沾到泥土呀。"],
          ["doro！新芽冒头啦，今天也长高一点。", "doro～慢慢浇，叶尖的小水珠会发亮。"],
          ["doro～把今天的新叶，记在这一页。", "doro？这张叶脉书签，像不像小地图？"],
          ["doro～一点暖光，陪小种子醒过来。", "doro！魔杖轻一点，别吓着嫩芽。"],
        ],
        en: [
          ["Doro~ Watering done. Time for honey tea.", "Doro! Keep the biscuits away from the soil."],
          ["Doro! A new sprout, a little taller today.", "Doro~ Water gently. The leaf tips will sparkle."],
          ["Doro~ Today's new leaf belongs on this page.", "Doro? Does this leaf bookmark look like a map?"],
          ["Doro~ A little warm light to wake our seed.", "Doro! Gently with the wand. Our sprout is shy."],
        ],
      },
    },
  },
  {
    id: "library",
    names: { zh: "书页微光", en: "Library Glow" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro～茶杯放远一点，书页要干干的。", "doro！看完这一章，就去吃点心。"],
          ["doro～窗边的小芽，也在认真听故事。", "doro？这盆小绿叶，替我们守着书桌。"],
          ["doro～小声一点，故事刚刚开始。", "doro！找到啦，答案藏在这一页。"],
          ["doro～留一颗小光点，照亮下一行。", "doro！魔杖收好，书签已经记住啦。"],
        ],
        en: [
          ["Doro~ Cup a little farther away. Keep our pages dry.", "Doro! Finish this chapter, then a little treat."],
          ["Doro~ The window sprout is listening to our story.", "Doro? These little leaves are watching our desk."],
          ["Doro~ Softly now. Our story is just beginning.", "Doro! Found it. The answer was on this page."],
          ["Doro~ One little glow to light the next line.", "Doro! Wand away. Our bookmark remembers."],
        ],
      },
    },
  },
  {
    id: "charms",
    names: { zh: "星夜习咒", en: "Starlit Charms" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro～练完这一遍，就喝暖暖的茶。", "doro！给努力了一晚的你留块小饼干。"],
          ["doro～小芽别怕，今晚只练温柔的咒语。", "doro！叶尖上，也落了一点星光。"],
          ["doro～咒语慢慢念，书页轻轻翻。", "doro？再看一眼，最后那个音要轻一点。"],
          ["doro！小星星亮啦，这次成功了。", "doro～魔杖收好，把好梦留到今晚。"],
        ],
        en: [
          ["Doro~ One more try, then a cup of warm tea.", "Doro! A little biscuit for your hard work tonight."],
          ["Doro~ Don't worry, little sprout. Only gentle spells.", "Doro! A little starlight landed on your leaf."],
          ["Doro~ Read the spell slowly. Turn the page softly.", "Doro? One more look. Soften that final sound."],
          ["Doro! Our little star is glowing. We did it!", "Doro~ Wand tucked away. Sweet dreams tonight."],
        ],
      },
    },
  },
];

export default family;
