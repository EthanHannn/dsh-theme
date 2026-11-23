import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "wukong-four-trials",
  signaturePrefix: "wukong-four-trials",
  names: { zh: "黑神话：悟空 · 山河四劫", en: "Black Myth: Wukong · Four Trials" },
  phrases: {
    zh: [["石灯上又生苔了。", "林深路暗，且借这点火。"]],
    en: [["Moss has found the stone lantern again.", "The woods are dark. This flame will do."]],
  },
  light: {
    paper: "#F4EEE2",
    vividPaper: "#E9E2D3",
    ink: "#302A24",
    brand: "#704924",
    brandText: "#FFFFFF",
    signature: "#8A5834",
    deepAccent: "#704924",
    success: "#476B4A",
    error: "#9E4339",
    warning: "#875F23",
  },
  dark: {
    ground: "#201E1C",
    vividPaper: "#292725",
    text: "#F2E9DB",
    brand: "#DDB47A",
    brandText: "#241A12",
    signature: "#E2BC85",
    deepAccent: "#DDB47A",
    success: "#A0C09B",
    error: "#E49C8B",
    warning: "#E4BA76",
  },
});

// 深色卡片悬停时仍需读清次要文字。
family.dark.textSecondary = "#C1B9AE";

const wallpaperWidth = "min(34vw, 470px)";
// 以插画比例限制高度，给右侧会话区留下可用宽度。
family.decor.wallpaperSize = `min(${wallpaperWidth}, calc(56vh * var(--dsw-pack-wallpaper-ratio, 1)), max(172px, calc((100vw - 1200px) / 2 - 22px)))`;
family.decor.wallpaperPosition = "right 20px bottom 16px";
family.decor.heroTranslate = `calc(-0.28 * ${wallpaperWidth}) calc(-1 * min(6vh, 58px))`;
family.decor.heroMaxWidth = `calc(100vw - 280px - ${wallpaperWidth} - 64px)`;

family.originalArtworkNames = { zh: "黑风山 · 广智", en: "Black Wind Mountain · Guangzhi" };
family.artworks = [
  {
    id: "yellow-wind",
    names: { zh: "黄风岭 · 黄风大圣", en: "Yellow Wind Ridge · Yellow Wind Sage" },
    decor: {
      phrases: {
        zh: [["石阶还在，随它吹。", "这岭上的沙，认得风向。"]],
        en: [["The steps will outlast the wind.", "The sand on this ridge knows which way the wind blows."]],
      },
    },
  },
  {
    id: "new-west",
    names: { zh: "小西天 · 黄眉", en: "The New West · Yellowbrow" },
    decor: {
      phrases: {
        zh: [["雪落阶前，且坐一坐。", "天色不早了，寺里还亮着灯。"]],
        en: [["Snow falls on the steps. Sit a while.", "It grows late. The temple lamps are still lit."]],
      },
    },
  },
  {
    id: "webbed-hollow",
    names: { zh: "盘丝岭 · 四妹", en: "Webbed Hollow · The Fourth Sister" },
    decor: {
      phrases: {
        zh: [["桥上滑，脚下慢些。", "提上灯，前面还有路。"]],
        en: [["The bridge is slick. Watch your step.", "Take the lantern. The path goes on."]],
      },
    },
  },
];

export default family;
