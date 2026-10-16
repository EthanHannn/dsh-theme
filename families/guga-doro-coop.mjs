import { createVividFamily } from "./create-vivid-family.js";

// Independent day/night activities share plush identities and calibrated head scale.
const family = createVividFamily({
  id: "guga-doro-coop",
  signaturePrefix: "guga-doro-coop",
  names: {
    zh: "咕嘎 Doro·快乐开黑",
    en: "Guga & Doro · Co-op Playtime",
  },
  phrases: {
    zh: [
      [
        "咕嘎。我来配合你。",
        "这一关，我们一起过。",
      ],
      [
        "doro～准备好啦！",
        "doro！差一点就成功了。",
      ],
      [
        "咕嘎。配合得不错。",
        "doro～击个小掌！",
      ],
      [
        "咕嘎。中场休息。",
        "doro～爆米花分你一半。",
      ]
    ],
    en: [
      [
        "Guga. I've got your back.",
        "We'll clear this level together.",
      ],
      [
        "Doro~ Ready to play!",
        "Doro! So close!",
      ],
      [
        "Guga. Nice teamwork.",
        "Doro~ Tiny high-five!",
      ],
      [
        "Guga. Time for a break.",
        "Doro~ Half the popcorn is yours.",
      ]
    ],
  },
  light: {
    paper: "#F6F7FC",
    vividPaper: "#EDF0FA",
    ink: "#36435E",
    brand: "#485DA4",
    brandText: "#FFFFFF",
    signature: "#694A88",
    deepAccent: "#485DA4",
    success: "#3E7562",
    error: "#AD445D",
    warning: "#88631E",
  },
  dark: {
    ground: "#1B2136",
    vividPaper: "#242B43",
    text: "#EDF1FF",
    brand: "#B9C7FC",
    brandText: "#263050",
    signature: "#D4BBED",
    deepAccent: "#B9C7FC",
    success: "#A8D9C5",
    error: "#F0A5BC",
    warning: "#E4C593",
  }
});

family.sortKey = "guga-doro-08-coop";
family.light.textSecondary = "#465470";
family.dark.textSecondary = "#C6CBE5";
// Shared canvas dimensions retain layout; head widths are calibrated per scene.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
