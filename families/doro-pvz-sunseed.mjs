import { createVividFamily } from "./create-vivid-family.js";

// One sculpted Dave Doro connects distinct PvZ daily activities.
const family = createVividFamily({
  id: "doro-pvz-sunseed",
  signaturePrefix: "doro-pvz-sunseed",
  names: { zh: "咕嘎和 Doro · 植物大战僵尸 · 庭院营造记", en: "Guga & Doro · Plants vs. Zombies · Garden Workshop Days" },
  phrases: {
    zh: [
      [
        "doro～这一包，种下明天的小太阳。",
        "doro？先给小苗找个舒服的位置。",
      ],
      [
        "doro～慢慢浇，小叶子也要喝水。",
        "doro！今天又长高一点点。",
      ],
      [
        "doro！接住啦，一枚暖暖的阳光。",
        "doro～这枚先存着，明天还要用。",
      ],
      [
        "doro～种箱关好，希望都在里面。",
        "doro！收工啦，明天再开小铺。",
      ],
    ],
    en: [
      [
        "Doro~ A little packet of tomorrow's sunshine.",
        "Doro? A cozy place for this tiny seedling first.",
      ],
      [
        "Doro~ A gentle drink for the little leaves.",
        "Doro! A tiny bit taller today.",
      ],
      [
        "Doro! Caught one warm little sun.",
        "Doro~ Saving this one for tomorrow.",
      ],
      [
        "Doro~ Box closed. Little hopes tucked inside.",
        "Doro! Shop closed. See you tomorrow.",
      ],
    ],
  },
  light: {
    paper: "#F9F4E5",
    vividPaper: "#F0E7CF",
    ink: "#463F29",
    brand: "#5E682F",
    brandText: "#FFFFFF",
    signature: "#72501E",
    deepAccent: "#5E682F",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#27271D",
    vividPaper: "#383B29",
    text: "#F6F0D9",
    brand: "#D0D69A",
    brandText: "#27271D",
    signature: "#EBD197",
    deepAccent: "#D0D69A",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-03-pvz-05-sunseed";
family.light.textSecondary = "#656044";
family.dark.textSecondary = "#D4D3B4";
// Match apparent head scale while keeping each mode's own pose and story.
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

// 合并入口保留稳定标识，各场景沿用原有构图与整套配图。
family.originalArtworkNames = { zh: "阳光种子铺", en: "Sunshine Seed Shop" };
family.legacyFamilies = [
  { id: "doro-pvz-pea-practice", artwork: "pea-practice" },
  { id: "doro-pvz-walnut-workshop", artwork: "walnut-workshop" },
  { id: "doro-pvz-magnet-salvage", artwork: "magnet-salvage" },
];
family.artworks = [
  {
    id: "pea-practice",
    names: { zh: "豌豆练习场", en: "Peashooter Practice" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro～小豌豆，先瞄准这个圈圈。", "doro？再挪一点点，靶子就正啦。"],
          ["doro！今天的圈圈，已经越过一半啦。", "doro～慢慢来，每一发都算练习。"],
          ["doro！这一枚，奖励最认真的小射手。", "doro～奖牌不大，开心可不少。"],
          ["doro～豌豆收好，明天接着练。", "doro！锅帽戴稳，今天也有进步。"],
        ],
        en: [
          ["Doro~ Little pea, aim for this little hoop.", "Doro? One tiny nudge. The target is ready."],
          ["Doro! More than halfway through our hoops!", "Doro~ Take your time. Every shot is practice."],
          ["Doro! A little medal for our patient shooter.", "Doro~ Tiny medal, plenty of joy."],
          ["Doro~ Peas packed. More practice tomorrow.", "Doro! Pot straight. A little better today."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "walnut-workshop",
    names: { zh: "坚果修补铺", en: "Walnut Mending Shop" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro～补丁小小的，贴得牢牢的。", "doro？这一卷，够照顾好几颗坚果。"],
          ["doro～别担心，裂缝已经包好啦。", "doro！拍一拍，又是可靠的小伙伴。"],
          ["doro！工具收齐，送你回去站岗。", "doro～小铁箱不大，办法还挺多。"],
          ["doro～最后一颗，也平安归队。", "doro！修补铺打烊，锅帽也歇一会。"],
        ],
        en: [
          ["Doro~ A tiny patch, snug and secure.", "Doro? One little roll for several brave nuts."],
          ["Doro~ There. That little crack is wrapped up.", "Doro! A gentle pat. Ready to help again."],
          ["Doro! Tools packed. Back to your post we go.", "Doro~ Little tin. Plenty of little fixes."],
          ["Doro~ The last walnut is safely back.", "Doro! Shop closed. Even my pot needs a rest."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
  {
    id: "magnet-salvage",
    names: { zh: "磁菇回收站", en: "Magnet-shroom Salvage" },
    decor: {
      headerArt: {
        bakedHorizontalFade: true,
      },
      phrases: {
        zh: [
          ["doro？这个圆圈圈，还能派什么用场？", "doro～先擦干净，再找个新位置。"],
          ["doro！磁菇吸过来，我来分好格子。", "doro～小螺帽，也有自己的小房间。"],
          ["doro！旧铁杯一碰，叮叮当当真好听。", "doro～原来小零件，也会唱歌呀。"],
          ["doro～回收箱关好，风铃陪我们收工。", "doro！今天又把一点旧东西变好了。"],
        ],
        en: [
          ["Doro? What could this little ring become?", "Doro~ Wipe it clean. Find it a new home."],
          ["Doro! Magnet brings it. I sort it.", "Doro~ Every little nut gets its own cubby."],
          ["Doro! Little old cups, such a lovely chime.", "Doro~ Even spare parts can sing."],
          ["Doro~ Box closed. Chimes for closing time.", "Doro! A few old things made useful again."],
        ],
      },
      wallpaperSize: "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))",
      wallpaperPosition: "right 16px bottom 12px",
      heroTranslate: "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 460px) - 64px)",
    },
  },
];

export default family;
