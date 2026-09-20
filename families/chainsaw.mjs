import { createVividFamily } from "./create-vivid-family.js";

// Public Safety: shirt white, blue-gray uniforms, charcoal and restrained red.
// Umber keeps its stable ID and re-exports these same mode palettes.
const family = createVividFamily({
  id: "chainsaw",
  signaturePrefix: "csm",
  names: { zh: "电锯人·特异课", en: "Chainsaw Man · Public Safety" },
  // Original character-inspired lines, ordered Denji / Pochita / Makima / Power / Aki.
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

// A larger square ensemble; retain a viewport-height cap in short windows.
family.decor.wallpaperSize = "min(42vw, 540px, 50vh)";
family.decor.heroTranslate = "0 calc(-1 * min(10vh, 100px))";

export default family;
