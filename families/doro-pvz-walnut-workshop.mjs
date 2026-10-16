import { createVividFamily } from "./create-vivid-family.js";

// One sculpted Dave Doro connects distinct PvZ daily activities.
const family = createVividFamily({
  id: "doro-pvz-walnut-workshop",
  signaturePrefix: "doro-pvz-walnut-workshop",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 坚果修补铺",
    en: "Guga & Doro · Plants vs. Zombies · Walnut Mending Shop",
  },
  phrases: {
    zh: [
      [
        "doro～补丁小小的，贴得牢牢的。",
        "doro？这一卷，够照顾好几颗坚果。",
      ],
      [
        "doro～别担心，裂缝已经包好啦。",
        "doro！拍一拍，又是可靠的小伙伴。",
      ],
      [
        "doro！工具收齐，送你回去站岗。",
        "doro～小铁箱不大，办法还挺多。",
      ],
      [
        "doro～最后一颗，也平安归队。",
        "doro！修补铺打烊，锅帽也歇一会。",
      ],
    ],
    en: [
      [
        "Doro~ A tiny patch, snug and secure.",
        "Doro? One little roll for several brave nuts.",
      ],
      [
        "Doro~ There. That little crack is wrapped up.",
        "Doro! A gentle pat. Ready to help again.",
      ],
      [
        "Doro! Tools packed. Back to your post we go.",
        "Doro~ Little tin. Plenty of little fixes.",
      ],
      [
        "Doro~ The last walnut is safely back.",
        "Doro! Shop closed. Even my pot needs a rest.",
      ],
    ],
  },
  light: {
    paper: "#F0F4F5",
    vividPaper: "#E2EBEE",
    ink: "#344650",
    brand: "#405E72",
    brandText: "#FFFFFF",
    signature: "#684B24",
    deepAccent: "#405E72",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#202C36",
    vividPaper: "#2E404D",
    text: "#EEF4F5",
    brand: "#B8D5DF",
    brandText: "#202C36",
    signature: "#EDD09A",
    deepAccent: "#B8D5DF",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-03-pvz-07-walnut-workshop";
family.light.textSecondary = "#526774";
family.dark.textSecondary = "#C4D6DF";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
