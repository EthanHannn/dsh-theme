import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines in sidebar companion order:
// Ahri, Jinx, Lux, Braum & Poro.
const family = createVividFamily({
  id: "lol-ahri",
  signaturePrefix: "lol",
  names: { zh: "英雄联盟", en: "League of Legends" },
  phrases: {
    zh: [
      ["阿狸：樱花落进茶盏里，今天先慢慢聊吧。", "阿狸：循着这点灵火走，夜风也很温柔。"],
      ["金克丝：哇哦，这里连花瓣都在发光，借我涂个鸦！", "金克丝：灯笼飘来飘去的，真想给小猴也挂一盏！"],
      ["拉克丝：艾欧尼亚的溪水和灵光一样澄澈呢。", "拉克丝：夜色下的樱庭，有种让人安心的力量。"],
      ["布隆：哈哈哈，热茶配小点心，魄罗肯定也喜欢！", "布隆：风声再静，我的盾牌也会守在身旁。"],
    ],
    en: [
      ["Ahri: Cherry petals drifted into the tea—let's take our time today.", "Ahri: Follow this little spirit spark; the night breeze is gentle."],
      ["Jinx: Whoa, even the petals glow out here—hand me my spray can!", "Jinx: Floating lanterns! Bet my wind-up monkey wants one too!"],
      ["Lux: Ionia's stream shines almost as brightly as starlight.", "Lux: There is a calm, reassuring magic under these moonlit blossoms."],
      ["Braum: Ha ha! Warm tea and sweet pastries—Poros would love this!", "Braum: Quiet winds or stormy nights, my shield stands by you."],
    ],
  },
  light: {
    paper: "#F4F1EA",
    vividPaper: "#EEE9DF",
    ink: "#232B38",
    brand: "#27578A",
    brandText: "#FFFFFF",
    signature: "#A36B20",
    deepAccent: "#A36B20",
    success: "#2E6E58",
    error: "#B33A4F",
    warning: "#8E5F1A",
  },
  dark: {
    ground: "#121927",
    vividPaper: "#182234",
    text: "#F5F2EA",
    brand: "#79B6F2",
    brandText: "#111A29",
    signature: "#E5BA6B",
    deepAccent: "#E5BA6B",
    success: "#8FD4B6",
    error: "#F7A1B1",
    warning: "#ECC97C",
  },
});

family.dark.textSecondary = "#B3BCCB";

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(38vw, 480px, 48vh)";
family.decor.wallpaperPosition = "right 24px bottom 18px";
family.decor.heroTranslate = "calc(-0.32 * min(38vw, 480px, 48vh)) calc(-1 * min(7vh, 72px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(38vw, 480px, 48vh) - 64px)";

family.originalArtworkNames = { zh: "艾欧尼亚灵境", en: "Ionia Spirit Garden" };
family.legacyFamilies = [
  { id: "lol-ionia" },
  { id: "lol-jinx", artwork: "piltover-zaun" },
  { id: "lol-demacia", artwork: "demacia-citadel" },
];
family.artworks = [
  {
    id: "piltover-zaun",
    names: { zh: "双城霓虹", en: "Piltover & Zaun" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["阿狸：金齿轮与霓虹交错的双城，连心跳都跟着加快了。", "阿狸：在喧嚣屋顶上也能找到一处看风景的角落。"],
          ["金克丝：哈哈，给灰扑扑的管道添点霓虹才够味！", "金克丝：喂艾克，滑板借我兜一圈嘛！"],
          ["拉克丝：海克斯工坊的蓝图真精密，每条线都在发光。", "拉克丝：白天井然有序，夜晚也别有一番活力呢。"],
          ["布隆：好结实的拳套和工具箱，看来今天干劲满满！", "布隆：屋顶上风大，玩滑板可要站稳脚跟呀。"],
        ],
        en: [
          ["Ahri: Golden gears and neon rooftops—every heartbeat feels faster here.", "Ahri: Even above the bustle, there's always a perch for the view."],
          ["Jinx: Heh, rusty pipes look way better with neon graffiti!", "Jinx: Hey Ekko, let me take that hoverboard for a spin!"],
          ["Lux: Those hextech blueprints are dazzling—every line glows.", "Lux: Order by sunlight, electric sparks by midnight."],
          ["Braum: Mighty fine gauntlets and toolbox—full of energy today!", "Braum: Windy up on those roofs; keep sturdy footing on that board!"],
        ],
      },
    },
  },
  {
    id: "demacia-citadel",
    names: { zh: "德玛西亚荣光", en: "Demacia Citadel" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["阿狸：晨光映在洁白石阶上，整座城邦都亮了起来。", "阿狸：星夜下的侦察灯火，比月色还要温暖。"],
          ["金克丝：哇，白金铠甲亮得晃眼，旗子飘得倒挺气派！", "金克丝：那只银蓝色的大鹰飞起来一定超快！"],
          ["拉克丝：保持微笑，今天也会迎来闪闪发亮的好消息！", "拉克丝：奎因和华洛在城垛守望，前方的路已经看清啦。"],
          ["布隆：光明与坚守并肩而行，这正是值得托付的伙伴！", "布隆：举起提灯，让夜里的旅人都能看见归途。"],
        ],
        en: [
          ["Ahri: Morning light across white marble makes the whole citadel glow.", "Ahri: A scout's lantern under starlight feels warmer than the moon."],
          ["Jinx: Whoa, shiny gold armor—okay, those banners do look cool!", "Jinx: Bet that silver-blue falcon flies faster than anything!"],
          ["Lux: Stay positive—bright news is just around the corner!", "Lux: With Quinn and Valor on watch, the path ahead is clear."],
          ["Braum: Light and steadfast hearts together—truly dependable allies!", "Braum: Hold the lantern high so every traveler sees the way home."],
        ],
      },
    },
  },
  {
    id: "freljord-hearth",
    names: { zh: "极北炉光", en: "Freljord Hearth" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(40vw, 500px, 48vh)",
      wallpaperPosition: "right 24px bottom 18px",
      heroTranslate: "calc(-0.32 * min(40vw, 500px, 48vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 500px, 48vh) - 64px)",
      phrases: {
        zh: [
          ["阿狸：毛茸茸的魄罗一见到饼干就迈不开步啦。", "阿狸：极光掠过冰崖的时候，整个夜空都在歌唱。"],
          ["金克丝：哇！四只手的大雪人！我也想坐上去打雪仗！", "金克丝：冰晶长弓拉满那一刻帅呆了！"],
          ["拉克丝：只要有伙伴和热饼干，再冷的雪原也暖洋洋的。", "拉克丝：看呀，翠绿与冰蓝的极光像丝带一样舒展！"],
          ["布隆：来吧小家伙，魄罗佳肴管够，笑一笑就暖和啦！", "布隆：寒风越烈，炉火和彼此的心就越近！"],
        ],
        en: [
          ["Ahri: Those fluffy Poros can never resist a fresh biscuit.", "Ahri: When the aurora sweeps across the glacier, the whole sky sings."],
          ["Jinx: Whoa, a four-armed yeti! I want a turn throwing snowballs!", "Jinx: That glowing crystalline ice bow at full draw looks awesome!"],
          ["Lux: With good friends and warm biscuits, even the tundra feels cozy.", "Lux: Look—ribbons of emerald and glacial aurora across the sky!"],
          ["Braum: Come, little friends—plenty of Poro-Snax to keep hearts warm!", "Braum: The colder the wind, the closer we gather by the hearth!"],
        ],
      },
    },
  },
];

export default family;
