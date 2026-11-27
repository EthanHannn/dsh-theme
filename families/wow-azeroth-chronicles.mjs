import { createVividFamily } from "./create-vivid-family.js";

// Character-inspired lines in sidebar companion order:
// Moon Priestess (Elune), Archmage (Dalaran), Pandaren Brewmaster, Stormwind Paladin Knight.
const family = createVividFamily({
  id: "wow-azeroth-chronicles",
  signaturePrefix: "wac",
  names: { zh: "魔兽世界 · 艾泽拉斯纪事", en: "World of Warcraft · Chronicles of Azeroth" },
  phrases: {
    zh: [
      ["月神祭司：星光落进林叶之间，心静下来就能听见林风低语。", "月神祭司：艾露恩的微光长明，让静谧与守护陪你度过今夜。"],
      ["大法师：晨露与月华都很珍贵，林间古老的魔网正轻轻流转。", "大法师：月井的水光映着星辉，正是梳理繁复思路的好时辰。"],
      ["酒仙：走了一早上的林间小道，歇脚时配一盏温茶才够舒坦！", "酒仙：月井清凉如玉，照得人神清气爽，再忙也要喘口气。"],
      ["暴风城骑士：林哨安稳、伴兽温和，这一段巡途让人安心不少。", "暴风城骑士：月色如水，愿这份宁静护佑你手头的每一桩事。"],
    ],
    en: [
      ["Moon Priestess: Starlight slips through ancient leaves—quiet your mind and hear the woods.", "Moon Priestess: Elune's silver glow endures; may stillness watch over you tonight."],
      ["Archmage: Ancient leylines shimmer softly beneath these silver boughs.", "Archmage: The Moonwell's radiance mirrors the stars—a tranquil hour for clear thought."],
      ["Brewmaster: After a long forest stroll, nothing beats pausing for a warm cup of tea!", "Brewmaster: Cool as carved jade under moonlight—take a steady breath before marching on."],
      ["Paladin Knight: Calm trails and steady companions make the morning watch feel light.", "Paladin Knight: Still waters beneath the silver moon—may calm guard your endeavors tonight."],
    ],
  },
  light: {
    paper: "#F5F3EC",
    vividPaper: "#ECEAE3",
    ink: "#262B35",
    brand: "#2A5784",
    brandText: "#FFFFFF",
    signature: "#9B742C",
    deepAccent: "#5D4282",
    success: "#326B56",
    error: "#A83B48",
    warning: "#8C631C",
  },
  dark: {
    ground: "#111824",
    vividPaper: "#151D2B",
    text: "#F2F4F8",
    brand: "#7BB8EC",
    brandText: "#101824",
    signature: "#E2B96A",
    deepAccent: "#C29FF0",
    success: "#7FD3B0",
    error: "#F29BA6",
    warning: "#ECC574",
  },
});

family.dark.textSecondary = "#B3BDCC";

family.decor.headerArt = { bakedHorizontalFade: true };
family.decor.wallpaperSize = "min(38vw, 480px, 50vh)";
family.decor.wallpaperPosition = "right 24px bottom 16px";
family.decor.heroTranslate = "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)";

family.originalArtworkNames = { zh: "月林哨歌", en: "Moonlit Ashenvale" };
family.artworks = [
  {
    id: "dalaran-spire",
    names: { zh: "紫罗兰星塔", en: "Dalaran Spire" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["月神祭司：星象仪上每一道光轨，都像是林外另一重星海。", "月神祭司：紫金符阵旋转不息，远方也有同道在守护星光。"],
          ["大法师：学徒，看清经纬交汇的那一点，奥术讲究顺势而为。", "大法师：乌鸦带来远方传讯，穿过这扇星门便能抵达下一站。"],
          ["酒仙：会自己转的金色地球仪！可惜不能拿来温两壶陈酿。", "酒仙：夜深了还开传送门赶路？记得回来喝一口热茶歇歇！"],
          ["暴风城骑士：法塔的晨光与星图让我想起暴风要塞的守望盟约。", "暴风城骑士：有紫罗兰塔的传讯法阵在，前线的援军总会及时赶到。"],
        ],
        en: [
          ["Moon Priestess: Each golden ring around the star-globe mirrors another realm of light.", "Moon Priestess: Violet runes spin steady—distant allies guard the night sky too."],
          ["Archmage: Mind where the golden meridians cross, apprentice—arcane craft follows harmony.", "Archmage: Ravens bear news from afar; step through this runic gate when ready."],
          ["Brewmaster: A floating golden world-globe! Shame you can't warm an ale flask on it.", "Brewmaster: Opening portals this late? Promise you'll come back for hot tea!"],
          ["Paladin Knight: Seeing the realm's golden map reminds me of our shared citadel oath.", "Paladin Knight: With Violet Tower's gates open, reinforcements are never far behind."],
        ],
      },
    },
  },
  {
    id: "pandaria-mist",
    names: { zh: "云海醉禅", en: "Mists of Pandaria" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["月神祭司：翠竹林里的茶香很淡，却让人不自觉放慢呼吸。", "月神祭司：碧玉色的真气化作白鹤掠过夜雾，意境真好。"],
          ["大法师：竹叶与茶气看似平常，其实也藏着平衡天地的韵律。", "大法师：不动声色却稳如磐石，东土武僧的修为着实令人敬佩。"],
          ["酒仙：哈哈！刚出笼的热包子配青瓷暖酿，快坐下一起尝尝！", "酒仙：灯火挑亮、双足站稳，这一式云鹤亮掌送给你定心神！"],
          ["暴风城骑士：远离甲胄与号角，竹林石桌旁的一壶暖茶也很难得。", "暴风城骑士：沉肩坠肘、气贯长虹，真正的高手连出招都沉静如山。"],
        ],
        en: [
          ["Moon Priestess: Gentle tea fragrance drifts through sunlit bamboo—easy to breathe slow.", "Moon Priestess: Emerald chi coalesces into a serene spirit crane in the moonlit mist."],
          ["Archmage: Even steamed buns and poured tea follow the natural balance of the land.", "Archmage: Rooted like stone yet fluid as mist—such monastic discipline is rare."],
          ["Brewmaster: Ha! Fresh steamed buns and warm celadon brew—pull up a mossy seat!", "Brewmaster: Lanterns lit and stance grounded—may this jade crane form steady your mind!"],
          ["Paladin Knight: Far from horns and battlements, a bamboo tea table brings real peace.", "Paladin Knight: Planted firm and unshaken—true mastery stays calm even in motion."],
        ],
      },
    },
  },
  {
    id: "stormwind-wings",
    names: { zh: "狮鹫巡空", en: "Stormwind Wings" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, 50vh)",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.32 * min(38vw, 480px, 50vh)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px, 50vh) - 64px)",
      phrases: {
        zh: [
          ["月神祭司：白石露台上的长风吹过羽翼，晨光也格外明亮。", "月神祭司：蓝金锋芒与银月同照城垛，长夜里也有人守望天明。"],
          ["大法师：蓝金双色狮子徽纹亮起时，整座要塞的防线都稳固三分。", "大法师：符文长剑映着满月微光，今夜的巡防不会有半点疏漏。"],
          ["酒仙：这大狮鹫威风归威风，就是爪子别踩到俺的酒葫芦啊！", "酒仙：披风被夜风吹得这么响，换我早躲进哨塔烤火喝茶去喽。"],
          ["暴风城骑士：老伙计，理好羽翼再出发，白昼的钟楼正等着咱们巡视。", "暴风城骑士：长剑出鞘、双翼展空——只要城垛上还有火光，我们就不退半步！"],
        ],
        en: [
          ["Moon Priestess: Morning winds brush white marble and silvered feathers over the keep.", "Moon Priestess: Gold-lit blade and silver moon share the watch until dawn."],
          ["Archmage: Whenever the sapphire-and-gold lion standard flies, the citadel stands firm.", "Archmage: Runic steel gleams beneath the full moon—not a shadow escapes tonight's watch."],
          ["Brewmaster: That armored gryphon looks mighty—just keep its talons off my brew gourd!", "Brewmaster: With night wind snapping that cloak, I'd be inside warming up by the hearth!"],
          ["Paladin Knight: Steady, old friend—one more calm morning patrol above the marble spires.", "Paladin Knight: Blade drawn and wings spread wide—we hold this battlement till morning!"],
        ],
      },
    },
  },
];

export default family;
