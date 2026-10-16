import { createVividFamily } from "./create-vivid-family.js";

// Fitted tilted pot hats and Doro's small shirt tie the independent scenes together.
const family = createVividFamily({
  id: "guga-doro-pvz-pool",
  signaturePrefix: "guga-doro-pvz-pool",
  names: {
    zh: "咕嘎 Doro·睡莲护航队",
    en: "Guga & Doro · Lily Pad Patrol",
  },
  phrases: {
    zh: [
      [
        "咕嘎。桨放稳，下一站是睡莲。",
        "咕嘎。这条泳道，我们来守。",
      ],
      [
        "doro～这片叶子，刚好托住小勇气。",
        "doro！香蒲的座位准备好啦。",
      ],
      [
        "咕嘎。绳结系好，阳光也带上。",
        "咕嘎。小木筏，今天辛苦啦。",
      ],
      [
        "doro～我提着灯，你慢慢划。",
        "doro！锅帽戴稳，出发护航！",
      ],
    ],
    en: [
      [
        "Guga. Paddle ready. Next stop, lily pads.",
        "Guga. We will guard this lane.",
      ],
      [
        "Doro~ A little leaf for a little courage.",
        "Doro! Cattail has a seat ready.",
      ],
      [
        "Guga. Tie the knot. Bring the sunshine.",
        "Guga. Good work today, little raft.",
      ],
      [
        "Doro~ I have the light. Take your time.",
        "Doro! Pot hats on. Patrol begins!",
      ],
    ],
  },
  light: {
    paper: "#F3FAF8",
    vividPaper: "#E5F2EE",
    ink: "#294A47",
    brand: "#326B65",
    brandText: "#FFFFFF",
    signature: "#755021",
    deepAccent: "#326B65",
    success: "#39714F",
    error: "#AF514C",
    warning: "#855D20",
  },
  dark: {
    ground: "#152C2E",
    vividPaper: "#1E3B3E",
    text: "#EDF8F3",
    brand: "#AADFD1",
    brandText: "#193C35",
    signature: "#F0D38E",
    deepAccent: "#AADFD1",
    success: "#B5DFA5",
    error: "#F5AAA2",
    warning: "#F0D38E",
  },
});

family.sortKey = "guga-doro-12-pvz-pool";
family.light.textSecondary = "#48635D";
family.dark.textSecondary = "#C3DDD4";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
