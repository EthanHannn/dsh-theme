import { createVividFamily } from "./create-vivid-family.js";

// 海沫青、小岛粉屋与橙色道服串联龟仙流的夏日日常。
const family = createVividFamily({
  id: "dragon-ball-kame",
  signaturePrefix: "kame",
  names: { zh: "七龙珠 · 龟仙流夏日", en: "Dragon Ball · Turtle School Days" },
  phrases: {
    // 短句顺序对应悟空、克林、龟仙人与海龟。
    zh: [
      ["悟空：修行完了，能吃饭了吗？", "悟空：今天还能再跑一圈！", "悟空：嘿嘿，这次我可不会输。"],
      ["克林：等等我，别跑那么快！", "克林：一步一步，总会变强的。", "克林：这次换我先来试试。"],
      ["龟仙人：该练的时候练，该休息时休息。", "龟仙人：先把基础练扎实。", "龟仙人：今天的进步，我看到了。"],
      ["海龟：海风正好，慢慢来吧。", "海龟：歇一会儿，也不耽误出发。", "海龟：太阳落山前，记得回来。"],
    ],
    en: [
      ["Goku: Can we eat after training?", "Goku: I've got another lap in me!", "Goku: Hehe, I won't lose this time."],
      ["Krillin: Wait up! Not so fast!", "Krillin: We get stronger one step at a time.", "Krillin: Let me try first this time."],
      ["Roshi: Train well, and rest well too.", "Roshi: Get the basics right first.", "Roshi: I saw your progress today."],
      ["Turtle: A fine sea breeze. Take your time.", "Turtle: A short rest won't hurt.", "Turtle: Be back before sunset."],
    ],
  },
  light: {
    paper: "#F7FAF5", vividPaper: "#EDF5ED", ink: "#263C39",
    brand: "#27685E", brandText: "#FFFFFF", signature: "#A65332",
    deepAccent: "#976443", success: "#426E4D", error: "#AF4050", warning: "#825F1D",
    parameter: "#7D6286", function: "#A65332",
  },
  dark: {
    ground: "#102324", vividPaper: "#132A2B", text: "#E9F5F0",
    brand: "#A3D3C7", brandText: "#163C35", signature: "#F5B17C",
    deepAccent: "#EDCD98", success: "#AFD4AE", error: "#F3A7AE", warning: "#E5CA91",
    parameter: "#D0BCDE", function: "#F5B17C",
  },
});

family.dark.textSecondary = "#C2D6D0";
family.decor.wallpaperSize = "min(40vw, 500px, 50vh)";
family.decor.heroTranslate = "calc(-0.38 * min(40vw, 500px, 50vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 500px, 50vh) - 64px)";

family.originalArtworkNames = { zh: "海岛修行", en: "Island Training" };
family.artworks = [
  {
    id: "shell-training",
    names: { zh: "龟壳晨练", en: "Turtle Shell Workout" },
    decor: {
      // 横向追跑保留跨步与角色间距，避免套用原群像的竖向比例。
      wallpaperSize: "min(44vw, 620px, calc(55vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.38 * min(44vw, 620px)) calc(-1 * min(8vh, 80px))",
      heroMaxWidth: "calc(100vw - 280px - min(44vw, 620px) - 64px)",
      phrases: {
        zh: [
          ["悟空：背上龟壳，也能再跑一圈！", "悟空：嘿嘿，这点重量难不倒我。"],
          ["克林：别急，先让我站稳！", "克林：今天一定要追上悟空。"],
          ["龟仙人：重心放低，脚下要稳。", "龟仙人：基本功，可不能偷懒。"],
          ["海龟：这副壳，你们还习惯吗？", "海龟：慢一点，脚步就稳了。"],
        ],
        en: [
          ["Goku: One more lap, shell and all!", "Goku: Hehe, I can handle this weight."],
          ["Krillin: Wait, let me find my balance!", "Krillin: Today I am catching up to Goku."],
          ["Roshi: Lower your center. Keep your footing.", "Roshi: No shortcuts with the basics."],
          ["Turtle: Getting used to those shells?", "Turtle: Slow steps are steady steps."],
        ],
      },
    },
  },
  {
    id: "seaside-fishing",
    names: { zh: "海边垂钓", en: "Seaside Fishing" },
    decor: {
      // 竖向独钓按高度限制，保留鱼竿弧线和水面浮漂。
      wallpaperSize: "min(36vw, 440px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.38 * min(36vw, 440px)) calc(-1 * min(8vh, 80px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 440px) - 64px)",
      phrases: {
        zh: [
          ["悟空：这条鱼，够不够大家吃？", "悟空：鱼漂动啦，快看！"],
          ["克林：这次比谁钓得多！", "克林：嘘，别把鱼吓跑。"],
          ["龟仙人：钓鱼也要有耐心。", "龟仙人：海风不错，再坐一会儿。"],
          ["海龟：这一带，我最熟悉。", "海龟：鱼篓放稳，别让海浪带走。"],
        ],
        en: [
          ["Goku: Is this fish enough for everyone?", "Goku: Look! The float is moving!"],
          ["Krillin: Let us see who catches more!", "Krillin: Shh, do not scare the fish."],
          ["Roshi: Fishing takes patience too.", "Roshi: A fine sea breeze. Stay a little longer."],
          ["Turtle: I know these waters well.", "Turtle: Keep the basket clear of the waves."],
        ],
      },
    },
  },
  {
    id: "watermelon-break",
    names: { zh: "西瓜小憩", en: "Watermelon Break" },
    decor: {
      // 俯视围坐按草席整体展开，保留人物与中心瓜盘的关系。
      wallpaperSize: "min(40vw, 540px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.38 * min(40vw, 540px)) calc(-1 * min(8vh, 80px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 540px) - 64px)",
      phrases: {
        zh: [
          ["悟空：练完吃西瓜，最好啦！", "悟空：还能再来一块吗？"],
          ["克林：这块给老师，别都吃光了。", "克林：慢点吃，西瓜籽还没吐呢！"],
          ["龟仙人：休息够了，下午接着练。", "龟仙人：这才像个夏天嘛。"],
          ["海龟：树荫这边，还留着位置。", "海龟：瓜皮记得收好，再去玩。"],
        ],
        en: [
          ["Goku: Watermelon after training is the best!", "Goku: Can I have another slice?"],
          ["Krillin: Save this slice for our teacher.", "Krillin: Slow down. Mind the seeds!"],
          ["Roshi: A good rest, then more practice.", "Roshi: Now this feels like summer."],
          ["Turtle: There is room here in the shade.", "Turtle: Pick up the rinds before you go."],
        ],
      },
    },
  },
];

export default family;
