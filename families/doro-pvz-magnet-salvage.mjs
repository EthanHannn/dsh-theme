import { createVividFamily } from "./create-vivid-family.js";

// Dave Doro keeps the same reference outfit across each distinct daily activity.
const family = createVividFamily({
  id: "doro-pvz-magnet-salvage",
  signaturePrefix: "doro-pvz-magnet-salvage",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 磁菇回收站",
    en: "Guga & Doro · Plants vs. Zombies · Magnet-shroom Salvage",
  },
  phrases: {
    zh: [
      [
        "doro？这个圆圈圈，还能派什么用场？",
        "doro～先擦干净，再找个新位置。",
      ],
      [
        "doro！磁菇吸过来，我来分好格子。",
        "doro～小螺帽，也有自己的小房间。",
      ],
      [
        "doro！旧铁杯一碰，叮叮当当真好听。",
        "doro～原来小零件，也会唱歌呀。",
      ],
      [
        "doro～回收箱关好，风铃陪我们收工。",
        "doro！今天又把一点旧东西变好了。",
      ],
    ],
    en: [
      [
        "Doro? What could this little ring become?",
        "Doro~ Wipe it clean. Find it a new home.",
      ],
      [
        "Doro! Magnet brings it. I sort it.",
        "Doro~ Every little nut gets its own cubby.",
      ],
      [
        "Doro! Little old cups, such a lovely chime.",
        "Doro~ Even spare parts can sing.",
      ],
      [
        "Doro~ Box closed. Chimes for closing time.",
        "Doro! A few old things made useful again.",
      ],
    ],
  },
  light: {
    paper: "#F8F0EA",
    vividPaper: "#EBDDD4",
    ink: "#4D3B34",
    brand: "#795143",
    brandText: "#FFFFFF",
    signature: "#603E28",
    deepAccent: "#795143",
    success: "#356E53",
    error: "#A34C59",
    warning: "#795222",
  },
  dark: {
    ground: "#2C2327",
    vividPaper: "#49383C",
    text: "#F4F1E9",
    brand: "#E3BDA9",
    brandText: "#2C2327",
    signature: "#ECD19D",
    deepAccent: "#E3BDA9",
    success: "#B0D9BE",
    error: "#F0ADB8",
    warning: "#EBD09F",
  },
});

family.sortKey = "guga-doro-03-pvz-10-magnet-salvage";
family.light.textSecondary = "#6B5147";
family.dark.textSecondary = "#DCC7C2";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
