import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines in sidebar companion order:
// Harth Stonebrew, Jaina Proudmoore, The Lich King, Sir Finley Mrrgglton.
const family = createVividFamily({
  id: "hearthstone-jaina",
  signaturePrefix: "hearthstone",
  names: { zh: "炉石传说", en: "Hearthstone" },
  phrases: {
    zh: [
      ["哈斯：欢迎回到旅店，炉火正旺呢！", "哈斯：先来一杯麦酒，再抽一张好牌。"],
      ["吉安娜：旅店暖和得很，正好整理法术笔记。", "吉安娜：不急，慢慢推演下一步。"],
      ["巫妖王：寒风挡不住酒馆的炉火。", "巫妖王：哪怕冰霜，也得讲点规矩。"],
      ["芬利：阁下，今天的茶点与牌局都很精彩！", "芬利：失礼了，请先用一杯热茶。"],
    ],
    en: [
      ["Harth: Welcome back! The hearth is warm tonight.", "Harth: Pull up a chair and draw a fresh card."],
      ["Jaina: Cozy enough in here to review my notes.", "Jaina: Take a breath, then plan your next turn."],
      ["Lich King: Even the Northrend chill yields to this fire.", "Lich King: Patience wins the longest match."],
      ["Finley: Splendid company and fine tea today!", "Finley: A proper explorer never skips a warm cup."],
    ],
  },
  light: {
    paper: "#F7F1E5",
    vividPaper: "#F1E8D7",
    ink: "#2D2722",
    brand: "#2B5B8E",
    brandText: "#FFFFFF",
    signature: "#A66A24",
    deepAccent: "#8B5720",
    success: "#3E6E52",
    error: "#AD3B47",
    warning: "#94621D",
  },
  dark: {
    ground: "#151923",
    vividPaper: "#1B212F",
    text: "#F4ECE0",
    brand: "#8EC0F2",
    brandText: "#132032",
    signature: "#E4B86B",
    deepAccent: "#E4B86B",
    success: "#8EC9A3",
    error: "#F28B95",
    warning: "#E6C17A",
  },
});

family.dark.textSecondary = "#B8B2A9";

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(36vw, 460px, 48vh)";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.32 * min(36vw, 460px, 48vh)) calc(-1 * min(7vh, 72px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 48vh) - 64px)";

family.originalArtworkNames = { zh: "旅店炉火", en: "Fireside Tavern" };
family.legacyFamilies = [
  { id: "hearthstone-lich-king", artwork: "frozen-throne" },
];
family.artworks = [
  {
    id: "frost-arcane",
    names: { zh: "冰霜咏唱", en: "Frost & Arcane" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(34vw, 440px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(34vw, 440px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(34vw, 440px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["哈斯：达拉然的法师们总爱点热可可！", "哈斯：小心别把吧台也冻住啦。"],
          ["吉安娜：先理清思路，再凝聚法力。", "吉安娜：灯下静读，胜过盲目施法。"],
          ["巫妖王：肯瑞托的冰霜，倒也算凌厉。", "巫妖王：寒意渐起，正合我意。"],
          ["芬利：悬浮书塔的藏书真叫人大开眼界！", "芬利：水元素先生，请别打湿我的笔记。"],
        ],
        en: [
          ["Harth: Dalaran mages always order something warm!", "Harth: Careful not to frost over the counter."],
          ["Jaina: Clear your mind, then gather your mana.", "Jaina: Quiet study sharpens every spell."],
          ["Lich King: Kirin Tor frost has a keen edge.", "Lich King: A crisp chill suits the night."],
          ["Finley: Dalaran's libraries are simply marvelous!", "Finley: Mind the ink, little water elemental."],
        ],
      },
    },
  },
  {
    id: "frozen-throne",
    names: { zh: "冰冠王座", en: "Frozen Throne" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(36vw, 460px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(36vw, 460px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 460px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["哈斯：诺森德可真冷，快进屋烤烤火！", "哈斯：哪怕冰冠堡垒的客人也欢迎打一局。"],
          ["吉安娜：面对寒冰，更要守住内心的清醒。", "吉安娜：再凛冽的风雪终会散去。"],
          ["巫妖王：寒冰也需要耐心雕琢。", "巫妖王：冰冠之巅，静候下一场对决。"],
          ["芬利：此处颇有寒意，幸好带了保温茶壶！", "芬利：那头小霜龙看起来精力十足。"],
        ],
        en: [
          ["Harth: Chilly up in Northrend—step by the hearth!", "Harth: Even Citadel guests are welcome for a match."],
          ["Jaina: Stay steady and clear-headed in the cold.", "Jaina: Even the harshest blizzard passes."],
          ["Lich King: Even ice takes patience to shape.", "Lich King: Icecrown awaits the next challenger."],
          ["Finley: Quite brisk up here—good thing I brought hot tea!", "Finley: That little frost wyrm is remarkably spirited."],
        ],
      },
    },
  },
  {
    id: "explorers",
    names: { zh: "寻宝奇兵", en: "League of Explorers" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(40vw, 500px, 48vh)",
      wallpaperPosition: "right 24px bottom 18px",
      heroTranslate: "calc(-0.32 * min(40vw, 500px, 48vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 500px, 48vh) - 64px)",
      phrases: {
        zh: [
          ["哈斯：探险者协会又带着满箱故事回来了！", "哈斯：雷诺，别把沙子抖进酒桶里。"],
          ["吉安娜：星象图上的奥术坐标很有意思。", "吉安娜：做好标注，旅程才不会迷路。"],
          ["巫妖王：寻宝者倒是一如既往地热闹。", "巫妖王：古老遗迹里，往往藏着真正的秘密。"],
          ["芬利：出发！罗盘指向全新的发现！", "芬利：先喝完这杯茶，我们立刻核对星图。"],
        ],
        en: [
          ["Harth: The Explorers are back with another tall tale!", "Harth: Mind the sand near the ale casks, Reno."],
          ["Jaina: Those celestial coordinates look intriguing.", "Jaina: Careful notes keep any expedition on track."],
          ["Lich King: Treasure hunters are never short on noise.", "Lich King: Ancient ruins rarely keep quiet for long."],
          ["Finley: Tally-ho! The compass points to discovery!", "Finley: One sip of tea, then straight to the star map."],
        ],
      },
    },
  },
];

export default family;
