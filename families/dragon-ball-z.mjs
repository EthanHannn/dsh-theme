import { createVividFamily } from "./create-vivid-family.js";

// Cell-era allies: cobalt armor, Piccolo's violet and Super Saiyan gold.
const family = createVividFamily({
  id: "dragon-ball-z",
  signaturePrefix: "zwarriors",
  names: { zh: "七龙珠 · 金焰并肩", en: "Dragon Ball · Golden Resolve" },
  phrases: {
    // Original lines: Goku, Vegeta, Gohan, Piccolo, Future Trunks.
    zh: [
      ["悟空：来吧，一起开始下一轮！", "悟空：先站稳，再试着发力。", "悟空：做得不错，再试一次！"],
      ["贝吉塔：这点程度，还远远不够。", "贝吉塔：下一次，我会做得更好。", "贝吉塔：少分心，专注眼前的事。"],
      ["悟饭：先稳住气，再慢慢发力。", "悟饭：这一轮，我想再试一次。", "悟饭：我能控制住这股力量！"],
      ["比克：沉住气，看清对方的动作。", "比克：先稳住呼吸。", "比克：力量，也需要控制。"],
      ["特兰克斯：剑带固定好了，随时可以开始。", "特兰克斯：这一次，我们一起面对。", "特兰克斯：下一轮对练，我准备好了。"],
    ],
    en: [
      ["Goku: Come on, let's start the next round!", "Goku: Get your footing before adding power.", "Goku: Nice work! Give it another try!"],
      ["Vegeta: That is nowhere near enough.", "Vegeta: I'll do better next time.", "Vegeta: Focus on what's in front of you."],
      ["Gohan: Steady my ki, then build it up slowly.", "Gohan: I'd like to try this round again.", "Gohan: I can control this power!"],
      ["Piccolo: Stay calm. Watch their moves.", "Piccolo: Steady your breathing first.", "Piccolo: Power needs control."],
      ["Trunks: Sword strap secured. Ready when you are.", "Trunks: This time, we face it together.", "Trunks: I'm ready for the next sparring round."],
    ],
  },
  light: {
    paper: "#F8F8FC", vividPaper: "#F0F1F8", ink: "#2D324A",
    brand: "#465895", brandText: "#FFFFFF", signature: "#915C18",
    deepAccent: "#785693", success: "#466D58", error: "#B13D50", warning: "#885D18",
    parameter: "#795894", function: "#925066",
  },
  dark: {
    ground: "#13182D", vividPaper: "#191E37", text: "#EFF1FC",
    brand: "#B3C6FF", brandText: "#202C50", signature: "#EBC369",
    deepAccent: "#CFB1EA", success: "#A8D0AF", error: "#F2A2B0", warning: "#EBC369",
    parameter: "#D1BCEC", function: "#EDB0BF",
  },
});

family.dark.textSecondary = "#CDD0E5";
family.decor.wallpaperSize = "min(43vw, 540px, 54vh)";
family.decor.heroTranslate = "calc(-0.4 * min(43vw, 540px, 54vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(43vw, 540px, 54vh) - 64px)";

family.originalArtworkNames = { zh: "赛亚集结", en: "Z Warriors Assembly" };
family.artworks = [
  {
    id: "time-chamber",
    names: { zh: "精神时光屋", en: "Time Chamber" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["悟空：穿上新战斗服挺舒展吧？活动开肩膀，咱们开始第一组对练！", "悟空：好！把金焰稳稳收在身体周围，让光球安静聚在掌心。"],
          ["贝吉塔：白色无垠房间里最适合逼出极限，别白白浪费那一天时间。", "贝吉塔：哼，父子俩金焰倒还算稳定——接下来轮到我上场了。"],
          ["悟饭：手套扣紧了爸爸！这次在时光屋里我一定会跟上你的步调。", "悟饭：蓝白光球在掌间越聚越稳了……我真的能完全驾驭这股金焰！"],
          ["比克：先适应纯白地板的呼吸节奏，再谈爆发也不迟。", "比克：金焰看似炽烈，真正可贵的是两人都守住了冷静。"],
          ["特兰克斯：这种白蓝赛亚战斗服虽然简单，活动起来非常利索。", "特兰克斯：连岩石都被金光照亮了——两位前辈的协同真令人赞叹。"],
        ],
        en: [
          ["Goku: Loose enough in the shoulders? Warm up cleanly and we will start round one!", "Goku: Keep those golden flames tucked tight and let the cyan sphere hum steadily."],
          ["Vegeta: One day inside that endless white chamber counts for a full year—make it matter.", "Vegeta: Fairly stable golden pressure from both of you... now stay sharp."],
          ["Gohan: Combat gloves secured, Dad! I'll keep pace through every drill today.", "Gohan: Holding this bright energy orb steady between both hands feels completely clear!"],
          ["Piccolo: Master breathing inside silent white halls before rushing power.", "Piccolo: Fierce golden fire, yet completely disciplined—that is real progress."],
          ["Trunks: Simple cobalt-and-white battle armor never restricts full-speed footwork.", "Trunks: Starlight and golden aura side by side—truly an inspiring sight."],
        ],
      },
    },
  },
  {
    id: "saiyan-pride",
    names: { zh: "赛亚血脉", en: "Saiyan Pride" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["悟空：嘿嘿，这父子俩话不多，心里可都互相惦记着下一轮比试呢！", "悟空：哇，贝吉塔和特兰克斯一齐亮出金发，气势比峡谷风还要猛！"],
          ["贝吉塔：站在高原崖顶把呼吸和护腕整理好——战士不会毫无准备。", "贝吉塔：别落下我的节奏！看清掌心这一击的专注与锋芒！"],
          ["悟饭：看着贝吉塔叔叔和特兰克斯并肩站在崖脊，有种很可靠的魄力。", "悟饭：银亮长剑配金焰气场，这一战无论怎么配合都很稳妥！"],
          ["比克：少废话多观察，他们两人各自的步法已经完全合拍。", "比克：长剑压肩、左掌聚电——各自守住擅长的战线，没有多余动作。"],
          ["特兰克斯：检查完剑带扣环，和父亲站在风口眺望原野让我干劲十足。", "特兰克斯：长剑稳稳扛上肩头——这一次，我们父子共同守住这片夜空！"],
        ],
        en: [
          ["Goku: Those two don't talk much on the ridge, yet both are itching for a clean match!", "Goku: Standing shoulder-to-shoulder under moonlight—now THAT is serious energy!"],
          ["Vegeta: Clear high-ridge wind and steady footing—discipline comes before any clash.", "Vegeta: Match my pace if you can! Clean precision right down to the fingertip spark."],
          ["Gohan: Watching Vegeta and Trunks survey the canyon ridge feels reassuring.", "Gohan: Gleaming broadsword and crackling sapphire ki leave zero blind spots."],
          ["Piccolo: Quiet footing, sharp gaze—neither of them wastes energy.", "Piccolo: Blade poised over shoulder, palm charged—two styles locked cleanly in sync."],
          ["Trunks: Shoulder strap buckled tight; standing watch beside my father feels steadying.", "Trunks: Steel across my shoulder and golden aura lit—we hold this cliff together!"],
        ],
      },
    },
  },
  {
    id: "lookout-starlight",
    names: { zh: "天神殿与星夜", en: "Lookout & Starlight" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(54vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["悟空：天神殿的白云砖地静极了，比克一打坐整片云海都跟着稳下来。", "悟空：嘿！定好那边的气息啦——马上瞬间移动过去碰面！"],
          ["贝吉塔：哼，盘腿浮空冥想倒是比无头苍蝇似的热身清醒得多。", "贝吉塔：收起多余压迫感、用气感知锁定坐标，总算有点章法了。"],
          ["悟饭：比克叔叔在棋盘石砖上浮空闭目的时候，连小石子都在轻轻跟着浮起。", "悟饭：看到爸爸带着微笑双指点额，就知道再远他都能稳稳赶回来！"],
          ["比克：心定下来之后，天界四面八方的细微气流与动静都会自动传入耳中。", "比克：那个家伙总爱在最后用瞬间移动笑着赶来……还真是一如既往。"],
          ["特兰克斯：站在高耸的神殿云阶俯瞰大地，心神一下子变得无比澄澈。", "特兰克斯：星夜山崖上轻轻比出指诀的悟空先生，像随时能跨过群山照应大家。"],
        ],
        en: [
          ["Goku: Even pebbles float gently around Piccolo when he settles onto those palace tiles.", "Goku: Found that familiar energy signature—see you right over there in an instant!"],
          ["Vegeta: Silent meditation above the clouds beats pointless fidgeting.", "Vegeta: Cleanly suppressing wild flares to lock onto distant ki—useful technique."],
          ["Gohan: Watching Piccolo meditate above the checkered terrace always keeps me calm.", "Gohan: That confident two-finger salute on the cliff means Dad can reach anywhere!"],
          ["Piccolo: Quiet the breath and the whole sky beneath the Lookout becomes effortless to read.", "Piccolo: Classic Goku—grinned, locked on, and vanished before anyone blinked."],
          ["Trunks: Sunlit clouds beside the white sanctuary dome clear every doubt away.", "Trunks: Golden sparks twinkling on a starry crag—one step away from anywhere."],
        ],
      },
    },
  },
];

export default family;
