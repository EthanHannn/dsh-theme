import { createVividFamily } from "./create-vivid-family.js";

const family = createVividFamily({
  id: "wukong-destined-journey",
  signaturePrefix: "wukong-destined-journey",
  names: { zh: "黑神话：悟空 · 天命西行", en: "Black Myth: Wukong · Journey of the Destined One" },
  phrases: {
    zh: [["林间香火未冷。", "听，石阶那头有动静。"]],
    en: [["The incense is still warm.", "Listen. Something is beyond the steps."]],
  },
  light: {
    paper: "#F0F2EB",
    vividPaper: "#E3E7DD",
    ink: "#292E2A",
    brand: "#3C594B",
    brandText: "#FFFFFF",
    signature: "#805530",
    deepAccent: "#3C594B",
    success: "#476B4A",
    error: "#9E4339",
    warning: "#875F23",
  },
  dark: {
    ground: "#1B221F",
    vividPaper: "#232A27",
    text: "#EAEFE8",
    brand: "#B9CBB9",
    brandText: "#1B221F",
    signature: "#DAB580",
    deepAccent: "#B9CBB9",
    success: "#A0C09B",
    error: "#E49C8B",
    warning: "#E4BA76",
  },
});

// 深色卡片悬停时保留次要文字的对比度。
family.dark.textSecondary = "#C2CCC4";

const wallpaperWidth = "min(34vw, 470px)";
// 以插画比例限制高度，给右侧会话区留出空间。
family.decor.wallpaperSize = `min(${wallpaperWidth}, calc(56vh * var(--dsw-pack-wallpaper-ratio, 1)), max(172px, calc((100vw - 1200px) / 2 - 22px)))`;
family.decor.wallpaperPosition = "right 20px bottom 16px";
family.decor.heroTranslate = `calc(-0.28 * ${wallpaperWidth}) calc(-1 * min(6vh, 58px))`;
family.decor.heroMaxWidth = `calc(100vw - 280px - ${wallpaperWidth} - 64px)`;

family.originalArtworkNames = { zh: "黑风山", en: "Black Wind Mountain" };
family.artworks = [
  {
    id: "yellow-wind",
    names: { zh: "黄风岭", en: "Yellow Wind Ridge" },
    decor: {
      phrases: {
        zh: [["石阶还在，随它吹。", "沙歇了，再走。"]],
        en: [["The steps will outlast the wind.", "We move when the sand settles."]],
      },
    },
  },
  {
    id: "new-west",
    names: { zh: "小西天", en: "The New West" },
    decor: {
      phrases: {
        zh: [["先探一探冰。", "雪声轻，灯还亮着。"]],
        en: [["Test the ice first.", "The snow is quiet. The lamp still burns."]],
      },
    },
  },
  {
    id: "webbed-hollow",
    names: { zh: "盘丝岭", en: "Webbed Hollow" },
    decor: {
      phrases: {
        zh: [["细丝在颤。", "洞底有响声。"]],
        en: [["The silk is trembling.", "Something stirs below."]],
      },
    },
  },
];

export default family;
