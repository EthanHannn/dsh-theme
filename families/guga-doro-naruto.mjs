import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "guga-doro-naruto",
  signaturePrefix: "guga-doro-naruto",
  names: { zh: "咕嘎和 Doro · 火影忍者 · 木叶传奇搭档", en: "Guga & Doro · Naruto · Konoha Legends" },
  phrases: {
    zh: [
      ["doro～这一碗，多加一片鸣门卷。", "任务结束，先吃拉面！"],
      ["咕嘎。慢慢吃，我等你。", "今天的委托，已经处理好了。"],
      ["doro～吃饱了，再去看看小树。", "木叶的风，闻起来暖暖的。"],
      ["咕嘎。有我在，安心休息。", "下一程，也一起走。"],
    ],
    en: [
      ["Doro~ One extra narutomaki, please.", "Mission done. Ramen first!"],
      ["Guga. Take your time. I'll wait.", "Today's mission is handled."],
      ["Doro~ Let's check our tree after lunch.", "The village breeze feels warm."],
      ["Guga. Rest easy. I'm here.", "We'll take the next road together."],
    ],
  },
  light: {
    paper: "#FAF6ED", vividPaper: "#F1E9D6", ink: "#29392F",
    brand: "#3E6550", brandText: "#FFFFFF", signature: "#815177",
    deepAccent: "#3E6550", success: "#416D45", error: "#A4433D", warning: "#83601E",
  },
  dark: {
    ground: "#141B23", vividPaper: "#1C222B", text: "#EAE9DE",
    brand: "#A7C7AE", brandText: "#17231C", signature: "#C2ADE4",
    deepAccent: "#C2ADE4", success: "#AAD19E", error: "#E9A49D", warning: "#DDBD7E",
  },
});

family.sortKey = "guga-doro-05-naruto-01-konoha";
family.light.textSecondary = "#526153";
family.dark.textSecondary = "#BEC8BF";
family.decor.wallpaperSize = "min(34vw, 490px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(270px, calc((100vw - 1120px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(34vw, 490px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(34vw, 490px) - 64px)";
family.originalArtworkNames = { zh: "木叶拉面", en: "Konoha Ramen" };

// 五组场景共享阅读配色与四款伙伴，短句依次对应拉面、警戒、嫩芽和瞳术。
family.artworks = [
  {
    id: "training",
    names: { zh: "木遁修行", en: "Wood Release Training" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro～修行之前，先补充力气。", "拉面不能用木遁变出来呀。"],
          ["咕嘎。看准了，再出手。", "你种树，我来守住四周。"],
          ["doro！今天让小木龙长高一点。", "每一片叶子，都能保护朋友。"],
          ["咕嘎。换个位置，试试这一招。", "别急，我接得住。"],
        ],
        en: [
          ["Doro~ A little fuel before training.", "Wood Release can't grow ramen."],
          ["Guga. Watch carefully, then move.", "You grow the trees. I'll keep watch."],
          ["Doro! Our little wood dragon is growing.", "Every leaf can shelter a friend."],
          ["Guga. Change places. Try again.", "Easy. I've got you."],
        ],
      },
    },
  },
  {
    id: "rain",
    names: { zh: "雨巷归途", en: "Rainy Lane Home" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro～点心包好，别淋湿啦。", "回家再喝热热的汤。"],
          ["咕嘎。靠近一点，伞够大。", "这段路，我陪你走。"],
          ["doro～让枝叶替我们挡一会儿雨。", "雨后的木叶，会更绿一点。"],
          ["咕嘎。灯还亮着，就快到了。", "有些归途，比任务更重要。"],
        ],
        en: [
          ["Doro~ Keep the treats dry.", "Warm soup when we're home."],
          ["Guga. Come closer. There's room.", "I'll walk this road with you."],
          ["Doro~ Let these leaves shelter us.", "The village will be greener after rain."],
          ["Guga. The lights are on. Almost home.", "Some journeys matter more than missions."],
        ],
      },
    },
  },
  {
    id: "rooftop",
    names: { zh: "月下巡村", en: "Moonlit Village Watch" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro～巡村也要带点心。", "最后一串，分你一半。"],
          ["咕嘎。屋顶这边，一切平安。", "今晚的木叶，很安静。"],
          ["doro～明天在院子里种棵新树。", "月亮也在替我们守夜呀。"],
          ["咕嘎。你看星星，我看四周。", "这份安宁，由我们守着。"],
        ],
        en: [
          ["Doro~ Patrol needs snacks too.", "Half the last skewer is yours."],
          ["Guga. All clear on the rooftops.", "The village is quiet tonight."],
          ["Doro~ A new tree in the garden tomorrow.", "Even the moon is keeping watch."],
          ["Guga. You watch the stars. I'll watch our backs.", "We'll keep this peace safe."],
        ],
      },
    },
  },
  {
    id: "battle",
    names: { zh: "森罗并肩", en: "Forest and Susanoo" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["doro！打完这一场，一起吃拉面。", "保护好朋友，也要照顾自己。"],
          ["咕嘎。站稳，我来挡住这一边。", "你的木龙，我会配合。"],
          ["doro！森罗万象，护住我们的家。", "每一条根，都通向木叶。"],
          ["咕嘎。看见了，下一步交给我。", "并肩的时候，没有退路要独行。"],
        ],
        en: [
          ["Doro! Ramen together after this.", "Protect your friends, and yourself."],
          ["Guga. Hold steady. I'll shield this side.", "Your wood dragon has my support."],
          ["Doro! Let the forest guard our home.", "Every root leads back to Konoha."],
          ["Guga. I see it. Leave the next move to me.", "Side by side, we never stand alone."],
        ],
      },
    },
  },
];

export default family;
