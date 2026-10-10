import { createVividFamily } from "./create-vivid-family.js";

// A handmade paper star becomes the warm light for an evening story together.
const family = createVividFamily({
  id: "guga-doro-starlamp",
  signaturePrefix: "guga-doro-starlamp",
  names: { zh: "咕嘎 Doro·星灯小屋", en: "Guga & Doro · Starlamp Cottage" },
  phrases: {
    zh: [
      ["咕嘎。这颗小星星，送给你。", "doro～一起把星星折好呀！"],
      ["咕嘎。故事翻到这里啦。", "doro～再一起读一页吧。"],
      ["咕嘎。我们做的灯亮起来了。", "doro～把今晚照得暖暖的。"],
    ],
    en: [
      ["Guga. This little star is for you.", "Doro~ Let's fold our stars together!"],
      ["Guga. Here's where our story begins.", "Doro~ Let's read one more page."],
      ["Guga. Our little lamp is glowing.", "Doro~ It makes tonight feel warm."],
    ],
  },
  light: {
    paper: "#F9F3EA",
    vividPaper: "#F2E8D9",
    ink: "#39313E",
    brand: "#70567E",
    brandText: "#FFFFFF",
    signature: "#946125",
    deepAccent: "#70567E",
    success: "#4B715B",
    error: "#AD485E",
    warning: "#866125",
  },
  dark: {
    ground: "#25212B",
    vividPaper: "#302936",
    text: "#F5EDF3",
    brand: "#D0B8E2",
    brandText: "#312337",
    signature: "#EDC48B",
    deepAccent: "#D0B8E2",
    success: "#B0D0B7",
    error: "#ECA5B6",
    warning: "#E7C78E",
  },
});

family.sortKey = "guga-doro-05-starlamp";
// Keep secondary text clear on the layered plum settings surfaces.
family.dark.textSecondary = "#CEC0D2";
family.decor.wallpaperSize = "min(30vw, 440px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(30vw, 440px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(30vw, 440px) - 64px)";

export default family;
