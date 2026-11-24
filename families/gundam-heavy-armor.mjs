import gundam from "./gundam.mjs";

const wallpaperWidth = "min(35vw, 480px)";

export default {
  id: "gundam-heavy-armor",
  names: { zh: "高达 · 重装机动", en: "Gundam · Heavy Armor" },
  originalArtworkNames: { zh: "Hi-ν 高达", en: "Hi-Nu Gundam" },
  styles: ["vivid"],
  wallpaperMotion: {
    original: {
      light: {
        floaters: [
          {
            rect: [0.11189, 0.19556, 0.24913, 0.33333],
            pivot: [0.18861, 0.27259],
            ampX: 0.0032,
            ampY: 0.0115,
            ampRot: 0.032,
            speed: 1.18,
            glowSpeed: 1.85,
          },
        ],
        fluid: { mode: "sway", ampX: 0.0042, ampY: 0.0024, freq: 16, speed: 0.85 },
        glowA: { mode: "beacon", color: [1, 0.78, 0.3], haloColor: [1, 0.58, 0.14], period: 4, intensity: 0.75, dim: 0.68 },
        glowB: { mode: "breathe", color: [1, 0.92, 0.42], period: 5.5, intensity: 0.48 },
      },
      dark: {
        fluid: { mode: "spark", ampX: 0.0018, ampY: 0.0024, freq: 28, speed: 2.4 },
        glowA: { mode: "beam", color: [0.62, 1, 0.7], haloColor: [0.35, 0.96, 0.52], period: 3.4, intensity: 0.65, dim: 0.85 },
        glowB: { mode: "breathe", color: [0.85, 0.94, 1], period: 5.2, intensity: 0.42 },
      },
    },
    sazabi: {
      light: {
        fluid: { mode: "spark", ampX: 0.0022, ampY: 0.0022, freq: 30, speed: 2.6 },
        glowA: { mode: "beam", color: [1, 0.88, 0.56], haloColor: [1, 0.62, 0.45], period: 3.2, intensity: 0.62, dim: 0.86 },
        glowB: { mode: "breathe", color: [0.95, 1, 0.92], period: 4.8, intensity: 0.55 },
      },
      dark: {
        glowA: { mode: "screen", color: [1, 0.78, 0.28], haloColor: [1, 0.62, 0.14], period: 5, intensity: 0.45, dim: 0.9 },
        glowB: { mode: "breathe", color: [1, 0.9, 0.56], period: 6.4, intensity: 0.48 },
      },
    },
    zz: {
      light: {
        fluid: { mode: "sway", ampX: 0.0065, ampY: 0.0022, freq: 13, speed: 0.9 },
        glowA: { mode: "beacon", color: [1, 0.78, 0.3], haloColor: [1, 0.58, 0.14], period: 4, intensity: 0.78, dim: 0.64 },
        glowB: { mode: "breathe", color: [1, 0.92, 0.55], period: 5.8, intensity: 0.42 },
      },
      dark: {
        fluid: { mode: "spark", ampX: 0.002, ampY: 0.002, freq: 28, speed: 2.5 },
        glowA: { mode: "beam", color: [1, 0.86, 0.62], haloColor: [1, 0.56, 0.72], period: 3, intensity: 0.58, dim: 0.86 },
        glowB: { mode: "breathe", color: [1, 0.9, 0.52], period: 5.4, intensity: 0.52 },
      },
    },
    xi: {
      light: {
        fluid: { mode: "sway", ampX: 0.0075, ampY: 0.0032, freq: 10, speed: 0.78 },
        glowB: { mode: "breathe", color: [0.55, 1, 0.75], period: 5, intensity: 0.52 },
      },
      dark: {
        fluid: { mode: "water", ampX: 0.0052, ampY: 0.0008, freq: 42, speed: 1.35 },
        glowA: { mode: "beacon", color: [1, 0.8, 0.34], haloColor: [1, 0.6, 0.16], period: 4.2, intensity: 0.72, dim: 0.68 },
        glowB: { mode: "breathe", color: [1, 0.88, 0.45], period: 5.2, intensity: 0.46 },
      },
    },
  },
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
