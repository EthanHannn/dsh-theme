import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines in sidebar companion order:
// Diao Chan, Li Bai, Sun Wukong, Luban No.7.
const family = createVividFamily({
  id: "hok-diao-chan",
  signaturePrefix: "hok",
  names: { zh: "王者荣耀", en: "Honor of Kings" },
  phrases: {
    zh: [
      ["貂蝉：长安莲池风暖，让思绪随花香慢慢舒展吧。", "貂蝉：月色落上夜莲，这一曲只为静谧时光起舞。"],
      ["李白：赏花须趁晓风轻，莫负长安好景致！", "李白：今夜月圆酒满，正宜听曲吟诗。"],
      ["孙悟空：嘿嘿，长安的莲池倒比花果山多了几分雅致！", "孙悟空：夜风再凉，有俺老孙在也照样热闹！"],
      ["鲁班七号：哇！红枫油纸伞和会发光的夜莲都超好看！", "鲁班七号：小机关雀，快帮我记下这只蓝蝴蝶的轨迹！"],
    ],
    en: [
      ["Diao Chan: Warm breezes drift across Chang'an's lotus pond—let your thoughts unfold.", "Diao Chan: Moonlight graces the night lotus; this dance is for a quiet hour."],
      ["Li Bai: Savor the blossoms while the morning breeze is crisp!", "Li Bai: Full moon, brimming cup—a fine evening for verse and melody."],
      ["Sun Wukong: Heh, Chang'an's lotus bridge is fancier than Flower-Fruit Mountain!", "Sun Wukong: Cool night breeze or not, I'll keep things lively!"],
      ["Luban No.7: Whoa! Both the maple umbrella and that glowing lotus look amazing!", "Luban No.7: Clockwork sparrow, log the flight path of that dream butterfly!"],
    ],
  },
  light: {
    paper: "#F7F1E9",
    vividPaper: "#F1E9DE",
    ink: "#2A2530",
    brand: "#8F3B5E",
    brandText: "#FFFFFF",
    signature: "#2A6778",
    deepAccent: "#A36B1E",
    success: "#346E58",
    error: "#B33A4F",
    warning: "#8F5F1A",
  },
  dark: {
    ground: "#171524",
    vividPaper: "#1F1C30",
    text: "#F7F2EB",
    brand: "#E8A8C6",
    brandText: "#1C1524",
    signature: "#85D0E0",
    deepAccent: "#E8C073",
    success: "#93D6B8",
    error: "#F7A1B1",
    warning: "#ECCA7D",
  },
});

family.dark.textSecondary = "#B9B5C7";

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(38vw, 480px, 48vh)";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.32 * min(38vw, 480px, 48vh)) calc(-1 * min(7vh, 72px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(38vw, 480px, 48vh) - 64px)";

family.originalArtworkNames = { zh: "长安花月", en: "Chang'an Blossom Moon" };
family.legacyFamilies = [
  { id: "hok-diaochan-fumeng" },
  { id: "hok-moonlit-bloom" },
  { id: "hok-li-bai", artwork: "changan-sword" },
  { id: "hok-cloud-reverie", artwork: "changan-sword" },
  { id: "hok-wukong-wuxiang", artwork: "cloud-sanctuary" },
  { id: "hok-dawn-strike", artwork: "dawn-mecha" },
];
family.artworks = [
  {
    id: "changan-sword",
    names: { zh: "青莲剑影", en: "Azure Lotus Blade" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["貂蝉：桃花落满石案，一局棋、一杯茶最是惬意。", "貂蝉：银月流光与金凤相映，真如画卷一般。"],
          ["李白：哈哈，孔明兄这步妙棋，当浮一大白！", "李白：御剑乘风凌云去，凤鸣九霄月色明！"],
          ["孙悟空：下棋太费神，不如看剑客御风耍一套剑法！", "孙悟空：这青莲飞剑飞得挺快，可未必赶得上俺的筋斗云！"],
          ["鲁班七号：棋盘的走法我都算完啦，要不要听听我的建议？", "鲁班七号：哇！飞剑不需要燃料也能悬空，原理是什么呀！"],
        ],
        en: [
          ["Diao Chan: Peach petals drift over the Go table—what a peaceful afternoon.", "Diao Chan: Silver moonlight and golden phoenix trails paint the night sky."],
          ["Li Bai: Ha! A brilliant move, Strategist—this calls for a toast!", "Li Bai: Riding the azure blade through cloud and moonlight!"],
          ["Sun Wukong: Too much sitting for chess—let's see some swordplay!", "Sun Wukong: Swift flying sword, though my somersault cloud still wins!"],
          ["Luban No.7: I've calculated twelve moves ahead—want a hint?", "Luban No.7: Whoa, hovering without thrusters?! How does that sword work?"],
        ],
      },
    },
  },
  {
    id: "cloud-sanctuary",
    names: { zh: "齐天云梦", en: "Cloud Sanctuary" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(36vw, 460px, 52vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(36vw, 460px, 52vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(36vw, 460px, 52vh) - 64px)",
      phrases: {
        zh: [
          ["貂蝉：松林云涧清泉流淌，小鹿灵动极了。", "貂蝉：金云漫卷星河，气势真令人震撼。"],
          ["李白：松风鹤影配清泉，好一处云梦仙乡！", "李白：大圣踏云破长夜，豪情直冲斗牛！"],
          ["孙悟空：哈哈，在松枝上歇歇脚，晒晒太阳最痛快！", "孙悟空：吃俺老孙一棒神火，漫天乌云全给它扫干净！"],
          ["鲁班七号：会发光的小鹿精灵，能不能借我测测灵能数据？", "鲁班七号：金箍棒冒火的时候好威风，大师也给我装一个吧！"],
        ],
        en: [
          ["Diao Chan: Clear springs wind beneath ancient pines—the spirit fawn is enchanting.", "Diao Chan: Golden clouds surge across the starlit sky in awesome majesty."],
          ["Li Bai: Mountain pines and crystal brooks—a true cloud-dream paradise!", "Li Bai: The Great Sage ascends on thunderclouds with unmatched spirit!"],
          ["Sun Wukong: Ha ha, lounging up in the sunlit pines beats everything!", "Sun Wukong: One sweep of this blazing staff clears every storm cloud!"],
          ["Luban No.7: A glowing deer spirit! Can I scan its luminescent aura?", "Luban No.7: That flaming golden staff is so cool—Master, build me one too!"],
        ],
      },
    },
  },
  {
    id: "dawn-mecha",
    names: { zh: "机关破晓", en: "Dawn Mechanica" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["貂蝉：细密精巧的黄铜齿轮，原来也能奏出韵律。", "貂蝉：星图化作流光披风，像把整片银河披在肩上。"],
          ["李白：稷下机关巧夺天工，连麻雀都会展翅报晓！", "李白：以星辰为刃、以穹宇为台，果真大开眼界！"],
          ["孙悟空：嘿，这些会自己转圈的小齿轮还挺有意思！", "孙悟空：亮闪闪的铁甲配光翼，改天切磋两招！"],
          ["鲁班七号：智商二百五！大师调好的新齿轮运转完美！", "鲁班七号：全息光翼启动完成，星穹破晓，全速出发！"],
        ],
        en: [
          ["Diao Chan: Even intricate brass clockwork carries its own graceful rhythm.", "Diao Chan: A star-map cape glowing like the Milky Way itself."],
          ["Li Bai: Jixia's craftsmanship is wondrous—even brass sparrows take flight!", "Li Bai: Wielding starlight blades above the cosmos—what a sight!"],
          ["Sun Wukong: Heh, these self-spinning brass gears are pretty clever!", "Sun Wukong: Gleaming starlight armor and wings—let's spar sometime!"],
          ["Luban No.7: Genius IQ 250! Master's newly tuned gears run like magic!", "Luban No.7: Holographic wings online—full speed toward dawn!"],
        ],
      },
    },
  },
];

export default family;
