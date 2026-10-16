import { createVividFamily } from "./create-vivid-family.js";

// One sculpted Dave Doro connects distinct PvZ daily activities.
const family = createVividFamily({
  id: "doro-pvz-fog-lantern",
  signaturePrefix: "doro-pvz-fog-lantern",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 雾庭菇灯",
    en: "Guga & Doro · Plants vs. Zombies · Lanterns in the Fog",
  },
  phrases: {
    zh: [
      [
        "doro～菇苗先睡，石头边很暖和。",
        "doro？这一盆，要搬到月光旁边。",
      ],
      [
        "doro！小灯亮啦，今晚一起巡路。",
        "doro～提高一点，就不怕看不清。",
      ],
      [
        "doro？睡醒了，要不要吹个小泡泡？",
        "doro～石阶这边，我替你看着。",
      ],
      [
        "doro～灯收好，最后一圈也走完啦。",
        "doro！小蘑菇精神，我先打个盹。",
      ],
    ],
    en: [
      [
        "Doro~ Sleep here, little shroom. The stones are cozy.",
        "Doro? This pot belongs beside the moonlight.",
      ],
      [
        "Doro! Lantern lit. Ready for our little patrol.",
        "Doro~ A little higher. Now we can see.",
      ],
      [
        "Doro? Awake already? A tiny puff, perhaps?",
        "Doro~ I will watch this side of the steps.",
      ],
      [
        "Doro~ Lantern away. The last round is done.",
        "Doro! Wide-awake shrooms. One sleepy Doro.",
      ],
    ],
  },
  light: {
    paper: "#F2EFF6",
    vividPaper: "#E6E1ED",
    ink: "#474052",
    brand: "#63517A",
    brandText: "#FFFFFF",
    signature: "#67502D",
    deepAccent: "#63517A",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#232733",
    vividPaper: "#333C4A",
    text: "#F3EDF9",
    brand: "#C8B9E3",
    brandText: "#232733",
    signature: "#E9D59E",
    deepAccent: "#C8B9E3",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-03-pvz-06-fog-lantern";
family.light.textSecondary = "#625A6D";
family.dark.textSecondary = "#D2CAE2";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
