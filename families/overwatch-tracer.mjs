import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines in sidebar companion order:
// Tracer, Mercy, Winston, Bastion & Ganymede.
const family = createVividFamily({
  id: "overwatch-tracer",
  signaturePrefix: "overwatch",
  names: { zh: "守望先锋", en: "Overwatch" },
  phrases: {
    zh: [
      ["猎空：别眨眼，我这就闪回来！", "猎空：晚风不错，喝完这杯热咖啡再出发。"],
      ["天使：注意安全，别冲太快哦。", "天使：状态良好，需要支援随时叫我。"],
      ["温斯顿：时空加速器读数稳定，继续保持！", "温斯顿：今晚的路线我都标好了。"],
      ["堡垒：哔——嘟嘟！（妮妮轻轻啄了啄肩甲）", "堡垒：嘟——哔！（小黄鸟展开翅膀打招呼）"],
    ],
    en: [
      ["Tracer: Blink and you'll miss me!", "Tracer: Nice evening breeze—one warm coffee before we head out."],
      ["Mercy: Stay safe out there, love.", "Mercy: Vitals look steady. Call if you need backup."],
      ["Winston: Chronal accelerator readings look solid!", "Winston: I've charted the route for tonight."],
      ["Bastion: Beep-boop! (Ganymede chirps happily on its shoulder)", "Bastion: Dwee-boop! (The little yellow bird flutters hello)"],
    ],
  },
  light: {
    paper: "#F6F5F0",
    vividPaper: "#EFECE4",
    ink: "#262B35",
    brand: "#2A6196",
    brandText: "#FFFFFF",
    signature: "#C46312",
    deepAccent: "#9E5313",
    success: "#356F54",
    error: "#B53844",
    warning: "#945E16",
  },
  dark: {
    ground: "#121824",
    vividPaper: "#182030",
    text: "#EEF2F7",
    brand: "#82BEF5",
    brandText: "#101E30",
    signature: "#F5A345",
    deepAccent: "#F5A345",
    success: "#7ECBA3",
    error: "#F58B94",
    warning: "#F0C36B",
  },
});

family.dark.textSecondary = "#B2BCCB";

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(36vw, 460px, 48vh)";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.32 * min(36vw, 460px, 48vh)) calc(-1 * min(7vh, 72px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 48vh) - 64px)";

family.originalArtworkNames = { zh: "国王大道闪现", en: "King's Row Blink" };
family.legacyFamilies = [
  { id: "overwatch-mercy", artwork: "hanamura-blossoms" },
];
family.artworks = [
  {
    id: "hanamura-blossoms",
    names: { zh: "花村樱下", en: "Hanamura Blossoms" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(36vw, 460px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(36vw, 460px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 460px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["猎空：花村的樱花真好看，可惜我跑得太快总撞花瓣！", "猎空：灯笼亮起来的时候最安静啦。"],
          ["天使：英雄不朽，但今晚还是早点休息吧。", "天使：护臂微调好了，别再硬撑了。"],
          ["温斯顿：古老庭院的静谧氛围很有助于思考。", "温斯顿：记录好观测笔记再返航。"],
          ["堡垒：嘟——！（一片樱花落在了妮妮头顶）", "堡垒：哔哔……（安静地听着风声与虫鸣）"],
        ],
        en: [
          ["Tracer: Hanamura's blossoms are lovely—even at full sprint!", "Tracer: Everything feels so calm once the lanterns glow."],
          ["Mercy: Heroes never die, yet even heroes need rest.", "Mercy: Forearm bracer calibrated—take it easy tonight."],
          ["Winston: A quiet courtyard does wonders for clear thinking.", "Winston: Let's log our notes before heading back."],
          ["Bastion: Dwee! (A pink cherry petal lands on Ganymede)", "Bastion: Beep... (Listening quietly to the evening breeze)"],
        ],
      },
    },
  },
  {
    id: "watchpoint-gibraltar",
    names: { zh: "直布罗陀整备", en: "Watchpoint Gibraltar" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(40vw, 500px, 48vh)",
      wallpaperPosition: "right 24px bottom 18px",
      heroTranslate: "calc(-0.32 * min(40vw, 500px, 48vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 500px, 48vh) - 64px)",
      phrases: {
        zh: [
          ["猎空：温斯顿，护盾修好了吗？我来帮你测试！", "猎空：全息地球亮起来真帅！"],
          ["天使：实验做到一半也记得按时吃饭哦。", "天使：小美，热茶已经帮你们泡好啦。"],
          ["温斯顿：嗯……有人说花生酱吗？", "温斯顿：这个世界需要更多英雄，先从核对坐标开始。"],
          ["堡垒：哔嘟嘟！（好奇地盯着转动的全息地球）", "堡垒：嘟——哔！（雪球和妮妮在空中转了个圈）"],
        ],
        en: [
          ["Tracer: Barrier ready, Winston? I'll volunteer for a test run!", "Tracer: That holographic globe looks brilliant!"],
          ["Mercy: Remember to take a meal break between experiments.", "Mercy: Hot tea is ready whenever you finish those notes."],
          ["Winston: Hmm... did someone say peanut butter?", "Winston: The world could always use more heroes—let's check the coordinates."],
          ["Bastion: Beep-boop! (Watching the spinning hologram in awe)", "Bastion: Dwee-beep! (Snowball and Ganymede circle overhead)"],
        ],
      },
    },
  },
  {
    id: "honor-and-watch",
    names: { zh: "荣耀与守望", en: "Honor and Watch" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(40vw, 500px, 48vh)",
      wallpaperPosition: "right 24px bottom 18px",
      heroTranslate: "calc(-0.32 * min(40vw, 500px, 48vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 500px, 48vh) - 64px)",
      phrases: {
        zh: [
          ["猎空：哈哈，莱因哈特的护盾后面永远最稳妥！", "猎空：卢西奥，把音量再调高一点！"],
          ["天使：大家今天配合得太默契了。", "天使：难得收工，今晚好好庆祝一下吧。"],
          ["温斯顿：团队协作的声学与力场效率都很完美！", "温斯顿：干杯，敬每一位并肩同行的伙伴。"],
          ["堡垒：哔——嘟！（跟着卢西奥的节拍轻轻点头）", "堡垒：嘟嘟！（妮妮停在指尖欢快地唱起歌）"],
        ],
        en: [
          ["Tracer: Always feels safe right behind Reinhardt's barrier!", "Tracer: Turn it up a notch, Lucio!"],
          ["Mercy: Splendid teamwork from everyone today.", "Mercy: Mission complete—time to unwind together."],
          ["Winston: Remarkable barrier and acoustic synergy!", "Winston: Cheers to every teammate standing watch."],
          ["Bastion: Beep-boop! (Bobbing gently to Lucio's beat)", "Bastion: Dwee-dwee! (Ganymede sings cheerfully on its finger)"],
        ],
      },
    },
  },
];

export default family;
