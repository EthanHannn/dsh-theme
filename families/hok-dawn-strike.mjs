import { createVividFamily } from "./create-vivid-family.js";

// Official skin references: game.gtimg.cn/images/yxzj/img201606/skin/hero-info/
// 111/111-bigskin-6.jpg (末日机甲), 107/107-bigskin-7.jpg (引擎之心),
// 167/167-bigskin-8.jpg (零号·赤焰), 193/193-bigskin-5.jpg (绛天战甲).
// Original character-inspired lines, in the same order as the companions.
const family = createVividFamily({
  id: "hok-dawn-strike",
  signaturePrefix: "hok-dawn-strike",
  names: {
    zh: "王者荣耀·破晓机动",
    en: "Honor of Kings · Dawn Strike",
  },
  phrases: {
    zh: [
      ["孙尚香：炮口校准完毕，准备出击！", "绿灯亮了，这一炮看我的。"],
      ["赵云：引擎就绪，长枪指向前方。", "蓝色装甲到位，开始突进。"],
      ["孙悟空：赤焰充能，金箍棒热身！", "这身战甲，正好陪俺闯一闯。"],
      ["铠：刀锋就位，守住这条防线。", "战甲仍亮着，夜巡还未结束。"],
    ],
    en: [
      ["Sun Shangxiang: Cannon calibrated. Ready to fire!", "Green light. Leave this shot to me."],
      ["Zhao Yun: Engines ready, spear pointing ahead.", "Blue armor in position. Begin the charge."],
      ["Wukong: Red flame charged. Staff warmed up!", "This armor is ready for an adventure."],
      ["Kai: Blade ready. Hold this line.", "Armor lights on. The night patrol continues."],
    ],
  },
  light: {
    paper: "#F4F7FA",
    vividPaper: "#EAF0F5",
    ink: "#273646",
    brand: "#356486",
    brandText: "#FFFFFF",
    signature: "#844628",
    deepAccent: "#98512E",
    success: "#39735D",
    error: "#B83E51",
    warning: "#865F20",
  },
  dark: {
    ground: "#15202B",
    vividPaper: "#1B2B3A",
    text: "#EDF4FC",
    brand: "#A4D2F3",
    brandText: "#142536",
    signature: "#F0B486",
    deepAccent: "#F0B486",
    success: "#A4D4B6",
    error: "#F1A3B2",
    warning: "#E6CA88",
  },
});

// Keep secondary labels readable on the blue-grey settings hover surfaces.
family.dark.textSecondary = "#BACAD9";

// Confine the armored group to the desktop reading gutter.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
