import { createVividFamily } from "./create-vivid-family.js";

// 同一戴夫造型连接浅深两幅独立的植物日常。
const family = createVividFamily({
  id: "doro-pvz-kernel-butter",
  signaturePrefix: "doro-pvz-kernel-butter",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 玉米黄油坊",
    en: "Guga & Doro · Plants vs. Zombies · Kernel Butter Kitchen",
  },
  phrases: {
    zh: [
      [
        "doro～黄油切方方，玉米接稳啦。",
        "doro！这一小块，刚好配一片吐司。",
      ],
      [
        "doro？叶托放低一点，黄油才不会滑。",
        "doro～今天的小投手，负责送早餐。",
      ],
      [
        "doro～吐司暖暖的，慢慢吃呀。",
        "doro！忙完这一轮，一起歇歇脚。",
      ],
      [
        "doro～小方巾叠好，明天继续开张。",
        "doro！锅帽戴稳，黄油坊收工啦。",
      ],
    ],
    en: [
      [
        "Doro~ Butter squares ready. Catch gently, Kernel!",
        "Doro! One little pat for one slice of toast.",
      ],
      [
        "Doro? Lower the leaf scoop. Keep that butter steady.",
        "Doro~ Our little launcher delivers breakfast today.",
      ],
      [
        "Doro~ Toast is warm. Take your time.",
        "Doro! All done. Time to rest our little feet.",
      ],
      [
        "Doro~ Napkin folded. See you tomorrow.",
        "Doro! Pot on snug. Butter kitchen closed.",
      ],
    ],
  },
  light: {
    paper: "#FAF6E9",
    vividPaper: "#EFE5C8",
    ink: "#4D412B",
    brand: "#786126",
    brandText: "#FFFFFF",
    signature: "#66501F",
    deepAccent: "#786126",
    success: "#38674D",
    error: "#9D454D",
    warning: "#79501F",
  },
  dark: {
    ground: "#2A2821",
    vividPaper: "#454135",
    text: "#F6F0E9",
    brand: "#E4CD8A",
    brandText: "#2A2821",
    signature: "#F0D79F",
    deepAccent: "#E4CD8A",
    success: "#B3D5BA",
    error: "#F1B1B8",
    warning: "#E9CB9B",
  },
});

family.sortKey = "guga-doro-03-pvz-13-kernel-butter";
family.light.textSecondary = "#695C40";
family.dark.textSecondary = "#D8CFB8";
// 对齐浅深角色的头部尺度，为正文与输入区保留空间。
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
