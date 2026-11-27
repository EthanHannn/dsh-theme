import { createVividFamily } from "./create-vivid-family.js";

// Mitsuri's sakura-pink braids and leaf-green tips anchor both ensemble palettes.
const family = createVividFamily({
  id: "kimetsu-sakura",
  signaturePrefix: "kms",
  names: { zh: "鬼灭之刃 · 樱庭恋歌", en: "Demon Slayer · Sakura Hearts" },
  phrases: {
    // Original mood lines, matching Mitsuri / Obanai / Shinobu / Kanao pals.
    zh: [
      ["蜜璃：一起吃樱饼吧！", "蜜璃：今天也有好多美好的事！", "蜜璃：想守护大家的心，不会输！"],
      ["伊黑：别走得太远。", "伊黑：樱饼给你留着。", "伊黑：镝丸，前面交给我们。"],
      ["忍：喝杯茶，再继续吧。", "忍：花开的时候，也要记得休息。", "忍：今天的茶很香呢。"],
      ["香奈乎：这次，由我来决定。", "香奈乎：花瓣落在这里了。", "香奈乎：我想和大家一起回去。"],
    ],
    en: [
      ["Mitsuri: Let's share some sakura mochi!", "Mitsuri: So many lovely things today!", "Mitsuri: My heart won't stop protecting you!"],
      ["Obanai: Don't wander too far.", "Obanai: I saved some mochi for you.", "Obanai: Kaburamaru, leave this to us."],
      ["Shinobu: Have some tea before we continue.", "Shinobu: Remember to rest among the blossoms.", "Shinobu: The tea smells lovely today."],
      ["Kanao: This time, I'll decide.", "Kanao: A petal landed here.", "Kanao: I want us all to go home together."],
    ],
  },
  light: {
    paper: "#FBF5F5", vividPaper: "#F5E9ED", ink: "#3D2C39",
    brand: "#925068", brandText: "#FFFFFF", signature: "#4D6A4D",
    deepAccent: "#78506E", success: "#4D6A4D", error: "#B13650", warning: "#805B21",
  },
  dark: {
    ground: "#1B141D", vividPaper: "#231923", text: "#F5EAF0",
    brand: "#E7A6BF", brandText: "#351D2B", signature: "#B8D69F",
    deepAccent: "#B8D69F", success: "#B8D69F", error: "#FF99AC", warning: "#E7C48D",
  },
});

family.decor.wallpaperSize = "min(40vw, 520px, 49vh)";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 49vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 49vh) - 64px)";

family.originalArtworkNames = { zh: "樱庭茶歇", en: "Sakura Courtyard" };
family.artworks = [
  {
    id: "sakura-lane",
    names: { zh: "樱道同行", en: "Sakura Lane" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["蜜璃：哇！樱花一路落下来了，和伊黑先生并肩走走最开心了！", "蜜璃：夜樱下也不认输——看我的粉色长刃像缎带一样轻巧展开！"],
          ["伊黑：樱饼盒拿稳，别在石板路上蹦太快摔了。……不过心情不错就好。", "伊黑：夜里花瓣会遮视线，收势时先注意落脚点，镝丸会帮着看路。"],
          ["忍：春风一吹整条石道都飘着花瓣香，两位今天看起来格外轻松呢。", "忍：柔韧长刃在夜光下如丝似缎，既华丽又不失精准节奏。"],
          ["香奈乎：看到蜜璃前辈开心地捧着点心盒，院子里也暖融融的。", "香奈乎：粉光与花瓣随着回旋铺开，在夜色里格外明亮。"],
        ],
        en: [
          ["Mitsuri: Sakura petals all along the cobblestones—walking with Obanai feels so bright!", "Mitsuri: Swirling through night blossoms—my ribbon-blade dances cleanly under starlight!"],
          ["Obanai: Watch your footing on the cobbles while skipping with that box... glad you're happy.", "Obanai: Night petals drift fast; keep your sandals planted cleanly on the stone."],
          ["Shinobu: Spring breezes carry blossom fragrance right down the whole promenade.", "Shinobu: Graceful, sweeping curves—like woven silk catching plum moonlight."],
          ["Kanao: Watching Mitsuri beam over her sakura sweets box warms the whole lane.", "Kanao: Glowing pink arcs and falling petals shimmer together in the dark grove."],
        ],
      },
    },
  },
  {
    id: "bronze-coin",
    names: { zh: "蝶语铜币", en: "Butterfly & Coin" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["蜜璃：小香奈乎坐在石阶上微微笑着呢——是不是想到开心的事了？", "蜜璃：姐妹并肩站在紫藤花下轻声说话的画面，看得人心软软的！"],
          ["伊黑：日光正好，偶尔安静坐下来喘口气也是不错的选择。", "伊黑：夜藤垂檐下的防线交给我们看守，你们安心歇会儿吧。"],
          ["忍：这次不用靠抛铜币决定，香奈乎，你想怎么走都可以听自己的心。", "忍：累了的时候随时靠过来，姐姐一直在这里陪着你。"],
          ["香奈乎：铜币在阳光下闪了一下……这次不用抛完，我也知道答案了。", "香奈乎：听到忍姐姐在身边温柔叮嘱，握紧刀柄的心也踏实下来。"],
        ],
        en: [
          ["Mitsuri: Look at Kanao smiling softly on the sunny steps—what a gentle moment!", "Mitsuri: Seeing both sisters stand together under glowing wisteria warms my heart!"],
          ["Obanai: Calm daylight on cedar steps—a quiet moment before duties resume.", "Obanai: Rest easy beneath the wisteria trellis; the perimeter is well guarded."],
          ["Shinobu: You need not leave every choice to a bronze coin—trust your own heart.", "Shinobu: Whenever the night feels heavy, lean on me for a moment."],
          ["Kanao: The bronze coin catches warm sunlight... this time, I already know my answer.", "Kanao: With Shinobu's hand on my shoulder, every step forward feels steady."],
        ],
      },
    },
  },
  {
    id: "lantern-teahouse",
    names: { zh: "花灯茶肆", en: "Lantern Teahouse" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["蜜璃：红纸伞下的三色团子软糯又甜！忍小姐也快多吃一串呀！", "蜜璃：抬头看见灯笼枝头上的伊黑先生啦，夜风里也要多留神呀！"],
          ["伊黑：红布茶凳那边的笑声隔着半条街都能听见……你们慢用就好。", "伊黑：在樱枝与纸灯笼间俯瞰夜道最清楚，镝丸也在上头盯着呢。"],
          ["忍：微苦的抹茶正好衬托甜团子，蜜璃选的小茶摊真雅致。", "忍：挂灯的夜樱树枝虽高，还请记得留神脚下平衡哦。"],
          ["香奈乎：红伞底下既有抹茶香又有甜甜的团子，真像春天节日一样。", "香奈乎：两盏金黄纸灯笼在樱花间静静亮着，把夜晚衬得柔和极了。"],
        ],
        en: [
          ["Mitsuri: Soft tri-color dango under the red parasol! Have another skewer with tea!", "Mitsuri: Spotted Obanai resting up among the lantern-lit blossoms!"],
          ["Obanai: Laughter from that crimson bench carries down the whole lane... enjoy the sweets.", "Obanai: High on a cherry bough with paper lanterns, every path below stays clear."],
          ["Shinobu: Warm whisked matcha pairs wonderfully with sweet tri-color dango.", "Shinobu: That lantern-hung branch makes a fine lookout, just mind your perch."],
          ["Kanao: Red teahouse bench, warm tea, and blossoms feel just like a spring festival.", "Kanao: Twin amber lanterns beneath night sakura soften the whole dark sky."],
        ],
      },
    },
  },
];

export default family;
