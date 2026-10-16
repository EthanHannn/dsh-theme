import { createVividFamily } from "./create-vivid-family.js";

// Dave Doro keeps the same reference outfit across each distinct daily activity.
const family = createVividFamily({
  id: "doro-pvz-pea-practice",
  signaturePrefix: "doro-pvz-pea-practice",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 豌豆练习场",
    en: "Guga & Doro · Plants vs. Zombies · Peashooter Practice",
  },
  phrases: {
    zh: [
      [
        "doro～小豌豆，先瞄准这个圈圈。",
        "doro？再挪一点点，靶子就正啦。",
      ],
      [
        "doro！今天的圈圈，已经越过一半啦。",
        "doro～慢慢来，每一发都算练习。",
      ],
      [
        "doro！这一枚，奖励最认真的小射手。",
        "doro～奖牌不大，开心可不少。",
      ],
      [
        "doro～豌豆收好，明天接着练。",
        "doro！锅帽戴稳，今天也有进步。",
      ],
    ],
    en: [
      [
        "Doro~ Little pea, aim for this little hoop.",
        "Doro? One tiny nudge. The target is ready.",
      ],
      [
        "Doro! More than halfway through our hoops!",
        "Doro~ Take your time. Every shot is practice.",
      ],
      [
        "Doro! A little medal for our patient shooter.",
        "Doro~ Tiny medal, plenty of joy.",
      ],
      [
        "Doro~ Peas packed. More practice tomorrow.",
        "Doro! Pot straight. A little better today.",
      ],
    ],
  },
  light: {
    paper: "#F3F7EA",
    vividPaper: "#E0EBD5",
    ink: "#33452D",
    brand: "#426932",
    brandText: "#FFFFFF",
    signature: "#614A20",
    deepAccent: "#426932",
    success: "#356E53",
    error: "#A34C59",
    warning: "#795222",
  },
  dark: {
    ground: "#202B20",
    vividPaper: "#344533",
    text: "#F4F1E9",
    brand: "#B9D795",
    brandText: "#202B20",
    signature: "#E7D296",
    deepAccent: "#B9D795",
    success: "#B0D9BE",
    error: "#F0ADB8",
    warning: "#EBD09F",
  },
});

family.sortKey = "guga-doro-03-pvz-08-pea-practice";
family.light.textSecondary = "#4F6346";
family.dark.textSecondary = "#C9D7BD";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

export default family;
