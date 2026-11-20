import gundam from "./gundam.mjs";

const wallpaperWidth = "min(35vw, 480px)";

export default {
  id: "gundam-heavy-armor",
  names: { zh: "高达 · 重装机动", en: "Gundam · Heavy Armor" },
  originalArtworkNames: { zh: "Hi-ν 高达", en: "Hi-Nu Gundam" },
  styles: ["vivid"],
  decor: {
    headerArt: { bakedHorizontalFade: true },
    // 给会话输入框留出间距，让机体脚部和着地接触点保持可见。
    wallpaperSize: `min(${wallpaperWidth}, calc(59vh * var(--dsw-pack-wallpaper-ratio, 1)), max(164px, calc((100vw - 1240px) / 2)))`,
    wallpaperPosition: "right 16px bottom 14px",
    heroTranslate: `calc(-0.3 * ${wallpaperWidth}) calc(-1 * min(6vh, 60px))`,
    heroMaxWidth: `calc(100vw - 280px - ${wallpaperWidth} - 64px)`,
    phrases: {
      zh: [["着舰标线已亮。", "浮游炮已离架。"]],
      en: [["Landing markers are lit.", "Fin funnels deployed."]],
    },
  },
  artworks: [
    {
      id: "sazabi",
      names: { zh: "沙扎比", en: "Sazabi" },
      decor: {
        phrases: {
          zh: [["盾牌撑稳了。", "夜间整备开始。"]],
          en: [["Shield braced.", "Starting the night inspection."]],
        },
      },
    },
    {
      id: "zz",
      names: { zh: "ZZ 高达", en: "ZZ Gundam" },
      decor: {
        phrases: {
          zh: [["阿伽马号，冲刺计时开始。", "抓稳了，对接灯在上方。"]],
          en: [["Argama, start the sprint timer.", "Got a grip. The docking lights are above."]],
        },
      },
    },
    {
      id: "xi",
      names: { zh: "Ξ 高达", en: "Xi Gundam" },
      decor: {
        phrases: {
          zh: [["穿过云层，目视确认。", "补给船，照我的手势靠岸。"]],
          en: [["Through the clouds. Visual contact.", "Supply boat, follow my signal to the quay."]],
        },
      },
    },
  ],
  light: gundam.light,
  dark: gundam.dark,
  vivid: {
    light: {
      paper: "#E9EDF5",
      bgBase: "rgba(233, 237, 245, 0.72)",
      layer1: "rgba(233, 237, 245, 0.72)",
      layer2: "#DEE6F1",
      layer3: "#CCD7E7",
      overlay: "#E9EDF5",
      inputMajor: "#E9EDF5",
      loginInput: "#DEE6F1",
      sidebar: {
        fill: "#D2DEF0",
        active: "rgba(30, 79, 216, 0.15)",
        activeAccent: "#1E4FD8",
        hover: "rgba(30, 79, 216, 0.08)",
      },
    },
    dark: {
      paper: "#101827",
      bgBase: "rgba(16, 24, 39, 0.72)",
      layer1: "rgba(16, 24, 39, 0.72)",
      layer2: "#24344D",
      layer3: "#354964",
      overlay: "#24344D",
      sidebar: {
        fill: "#182943",
        active: "rgba(255, 255, 255, 0.14)",
        activeAccent: "#FFC72C",
        hover: "rgba(255, 255, 255, 0.07)",
      },
    },
  },
};
