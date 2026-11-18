import { createVividFamily } from "./create-vivid-family.js";

// 衬衫白、冷灰蓝、炭黑与暗红串联日常、雨夜和战斗。
// 冷墨保留稳定标识，继续复用本家族的阅读配色。
const family = createVividFamily({
  id: "chainsaw",
  signaturePrefix: "csm",
  names: { zh: "电锯人 · 人间愿望", en: "Chainsaw Man · Human Wishes" },
  // 短句按电次、波奇塔、玛奇玛、帕瓦、秋的侧栏顺序排列。
  phrases: {
    "zh": [
      [
        "电次：干完这票，吃顿好的！",
        "电次：果酱要抹厚一点！",
        "电次：今天也想过好日子。",
        "电次：有早餐就有干劲！",
        "电次：波奇塔，咱们上！"
      ],
      [
        "波奇塔：汪！陪你一起。",
        "波奇塔：汪汪！该歇一会儿啦。",
        "波奇塔：今天的梦想是什么？",
        "波奇塔：面包分你一半。",
        "波奇塔：拉响今天的小小勇气！"
      ],
      [
        "玛奇玛：慢慢来，我在听。",
        "玛奇玛：今天想从哪里开始？",
        "玛奇玛：期待你的表现。",
        "玛奇玛：先挑一个喜欢的颜色吧。",
        "玛奇玛：辛苦了，喝杯咖啡？"
      ],
      [
        "帕瓦：本大爷才是配色天才！",
        "帕瓦：这份功劳归我！",
        "帕瓦：先说好，肉都是我的！",
        "帕瓦：今天也要威风登场！",
        "帕瓦：喵子也说这个好看！"
      ],
      [
        "早川秋：先把手头的事做完。",
        "早川秋：咖啡还热，慢慢喝。",
        "早川秋：出门前检查好装备。",
        "早川秋：别吵，早餐马上好。",
        "早川秋：今天也平安收工吧。"
      ]
    ],
    "en": [
      [
        "Denji: Finish the job, feast later!",
        "Denji: More jam on that toast!",
        "Denji: Here's to the good life.",
        "Denji: Breakfast gets me going!",
        "Denji: Let's go, Pochita!"
      ],
      [
        "Pochita: Woof! Right beside you.",
        "Pochita: Woof! Time for a break.",
        "Pochita: What's today's dream?",
        "Pochita: Half my bread is yours.",
        "Pochita: A little courage today!"
      ],
      [
        "Makima: Take your time. I'm listening.",
        "Makima: Where shall we begin?",
        "Makima: I look forward to your work.",
        "Makima: Pick a color you like.",
        "Makima: Good work. Coffee?"
      ],
      [
        "Power: Behold my color genius!",
        "Power: All credit goes to me!",
        "Power: The meat is mine!",
        "Power: Time for my grand entrance!",
        "Power: Meowy likes this one too!"
      ],
      [
        "Aki: Finish what's in front of you.",
        "Aki: The coffee's hot. Take your time.",
        "Aki: Check your gear before we go.",
        "Aki: Quiet. Breakfast is almost ready.",
        "Aki: Let's all get home safely."
      ]
    ]
  },
  light: {
    paper: "#F1F3F4", vividPaper: "#E8EEF1", ink: "#242C38",
    brand: "#36556F", brandText: "#FFFFFF", signature: "#A33443",
    deepAccent: "#943746", success: "#3B6858", error: "#AF3445", warning: "#82591F",
  },
  dark: {
    ground: "#11151C", vividPaper: "#151C26", text: "#E8EDF2",
    brand: "#93B6CC", brandText: "#15212B", signature: "#F07982",
    deepAccent: "#C2CDDE", success: "#92BEA9", error: "#FF8B92", warning: "#D6B576",
  },
});

// 五组故事共用稳定家族标识，浅深色分别延续获准的独立构图。
family.sortKey = "chainsaw-human-wishes";
family.originalArtworkNames = { zh: "面包与梦", en: "Bread and a Dream" };
family.decor.wallpaperSize = "min(36vw, 460px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))";
family.decor.wallpaperPosition = "right 28px bottom 16px";
family.decor.heroTranslate = "calc(-0.30 * min(36vw, 460px)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px) - 64px)";

family.artworks = [
  {
    id: "noisy-way-home",
    names: { zh: "吵闹归途", en: "Noisy Way Home" },
    decor: {
      phrases: {
        zh: [
          ["电次：买了什么好吃的？", "电次：我的那份可别忘了！"],
          ["波奇塔：汪！一起回家。", "波奇塔：晚饭的香味，闻到了。"],
          ["玛奇玛：今天也平安收工了。", "玛奇玛：回去好好休息吧。"],
          ["帕瓦：本大爷还要吃肉！", "帕瓦：喵子说这条路归我管！"],
          ["早川秋：先把东西拿稳。", "早川秋：别闹，苹果又掉了。"],
        ],
        en: [
          ["Denji: What good stuff did you buy?", "Denji: Do not forget my share!"],
          ["Pochita: Woof! Let us go home.", "Pochita: I can smell dinner already."],
          ["Makima: Everyone made it home today.", "Makima: Get some rest."],
          ["Power: I demand more meat!", "Power: Meowy says this street is mine!"],
          ["Aki: Hold the bags properly.", "Aki: Easy. There goes another apple."],
        ],
      },
    },
  },
  {
    id: "midnight-screening",
    names: { zh: "午夜放映", en: "Midnight Screening" },
    decor: {
      phrases: {
        zh: [
          ["电次：电影散场后，吃点什么？", "电次：原来电影还能这么看。"],
          ["波奇塔：陪你把故事看完。", "波奇塔：汪，别急着走。"],
          ["玛奇玛：有些片段，会留很久。", "玛奇玛：散场了，再坐一会儿吧。"],
          ["帕瓦：本大爷看得懂！", "帕瓦：爆米花还剩多少？"],
          ["早川秋：开场前，把手机收好。", "早川秋：回去的车还赶得上。"],
        ],
        en: [
          ["Denji: What are we eating after the film?", "Denji: So this is what movies can be."],
          ["Pochita: I will stay until the story ends.", "Pochita: Woof. No need to rush."],
          ["Makima: Some scenes stay with you.", "Makima: It is over. Stay a little longer."],
          ["Power: Of course I understood it!", "Power: How much popcorn is left?"],
          ["Aki: Put your phone away before it starts.", "Aki: We can still catch the last train."],
        ],
      },
    },
  },
  {
    id: "meeting-in-rain",
    names: { zh: "雨中偶遇", en: "Meeting in the Rain" },
    decor: {
      phrases: {
        zh: [
          ["电次：这雨，再下一会儿也行。", "电次：热的，拿好了。"],
          ["波奇塔：汪！别淋湿啦。", "波奇塔：等雨停了再出发。"],
          ["玛奇玛：今天遇见谁了？", "玛奇玛：路上小心。"],
          ["帕瓦：下雨也拦不住本大爷！", "帕瓦：给喵子留个干地方！"],
          ["早川秋：伞记得带回来。", "早川秋：别站在风口。"],
        ],
        en: [
          ["Denji: I would not mind a little more rain.", "Denji: It is warm. Hold it carefully."],
          ["Pochita: Woof! Stay dry.", "Pochita: We can leave when the rain stops."],
          ["Makima: Who did you meet today?", "Makima: Take care on your way."],
          ["Power: A little rain cannot stop me!", "Power: Keep a dry spot for Meowy!"],
          ["Aki: Bring the umbrella back.", "Aki: Stay out of the wind."],
        ],
      },
    },
  },
  {
    id: "chainsaw-dawn",
    names: { zh: "锯刃破晓", en: "Chainsaw Dawn" },
    decor: {
      phrases: {
        zh: [
          ["电次：拉响了，就一口气冲过去！", "电次：等收工，我要吃顿好的！"],
          ["波奇塔：把你的梦，做给我看吧。", "波奇塔：汪！一起向前。"],
          ["玛奇玛：让我看看你的本事。", "玛奇玛：接下来，交给你了。"],
          ["帕瓦：可别抢走本大爷的风头！", "帕瓦：这场面，勉强够看！"],
          ["早川秋：落脚前，看清楚下面。", "早川秋：活着回来，听见没有。"],
        ],
        en: [
          ["Denji: Pull the cord and go all the way!", "Denji: A big meal when this is over!"],
          ["Pochita: Show me your dreams.", "Pochita: Woof! Forward, together."],
          ["Makima: Show me what you can do.", "Makima: I leave the rest to you."],
          ["Power: Do not steal my glory!", "Power: That is almost impressive!"],
          ["Aki: Check your landing first.", "Aki: Come back alive. Understood?"],
        ],
      },
    },
  },
];

export default family;
