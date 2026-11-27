import { createVividFamily } from "./create-vivid-family.js";

// Ivory and vermilion courtyard / indigo night watch with silver-teal accents.
const family = createVividFamily({
  id: "kimetsu-hashira",
  signaturePrefix: "kmh",
  names: { zh: "鬼灭之刃 · 柱之誓约", en: "Demon Slayer · Hashira Oath" },
  phrases: {
    // Imagined ensemble and original mood lines, not quotations from the work.
    zh: [
      ["炼狱：带着热忱向前吧！", "炼狱：每一步都要坚定！", "炼狱：这份便当，很有精神！"],
      ["义勇：沉住气。", "义勇：我会守住这里。", "义勇：先做好眼前的事。"],
      ["忍：休息也是修行的一部分。", "忍：今天的状态还好吗？", "忍：慢一点，别弄伤自己。"],
      ["无一郎：云又飘过去了。", "无一郎：记住要守护的东西。", "无一郎：该出发了。"],
    ],
    en: [
      ["Rengoku: Move forward with passion!", "Rengoku: Make every step count!", "Rengoku: What a spirited meal!"],
      ["Giyu: Stay composed.", "Giyu: I'll hold this place.", "Giyu: Focus on what is before you."],
      ["Shinobu: Rest is part of training.", "Shinobu: How are you feeling today?", "Shinobu: Take care of yourself."],
      ["Muichiro: There goes another cloud.", "Muichiro: Remember what you protect.", "Muichiro: Time to go."],
    ],
  },
  light: {
    paper: "#FAF5ED", vividPaper: "#F5EDE4", ink: "#352D3C",
    brand: "#993E36", brandText: "#FFFFFF", signature: "#456777",
    deepAccent: "#754A79", success: "#4C694C", error: "#AE324B", warning: "#80591C",
  },
  dark: {
    ground: "#14131F", vividPaper: "#1B1928", text: "#F2EAE5",
    brand: "#F2AD86", brandText: "#362019", signature: "#A5C9D5",
    deepAccent: "#C6B1E0", success: "#B0CF9A", error: "#FF91A4", warning: "#E8C384",
  },
});

family.decor.wallpaperSize = "min(40vw, 520px, 49vh)";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 49vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 49vh) - 64px)";

family.originalArtworkNames = { zh: "柱合整装", en: "Hashira Assembly" };
family.artworks = [
  {
    id: "flame-express",
    names: { zh: "烈焰旅途", en: "Flame Express" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["炼狱：唔姆！这盒铁路便当分量十足，吃饱就更有精神守夜！", "炼狱：夜风虽凉，心中之火绝不动摇——向前迈进吧！"],
          ["义勇：列车途中也能保持冷静，份量……倒是确实不少。", "义勇：背影和炎势都很稳，这一段站台不会有半点破绽。"],
          ["忍：旅途上先垫垫肚子总是好的，不过可别一次吃太急哦。", "忍：明亮如炬的战意，连夜里的薄雾都被照暖了几分呢。"],
          ["无一郎：列车窗外经过的铁桥和白云，看起来挺远挺清净。", "无一郎：金橙色的火环映亮栈桥的时候，夜路就不会迷方向了。"],
        ],
        en: [
          ["Rengoku: Delicious! A hearty railway bento builds true spirit for the road ahead!", "Rengoku: Hold your stance tall in the night mist—keep your heart ablaze!"],
          ["Giyu: Even in a moving carriage he stays earnest... and that is quite a stack of boxes.", "Giyu: Solid footing, steady blade—nothing slips past a guard like that."],
          ["Shinobu: Eating well on a long train ride is wise, just remember not to rush!", "Shinobu: Warm crimson-gold flames bright enough to push back midnight chill."],
          ["Muichiro: Watching morning clouds drift past railway bridges feels oddly peaceful.", "Muichiro: Those bright golden flames make the timber walkway easy to read at night."],
        ],
      },
    },
  },
  {
    id: "mist-and-water",
    names: { zh: "水雾林泉", en: "Mist & Still Water" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["炼狱：难得在缘侧静静吹风折纸飞机，这样的宁静也很珍贵！", "炼狱：澄澈如镜的夜间湖面！沉静之中同样藏着惊人的力量！"],
          ["义勇：晴日看着池面发一会儿呆，脑子反而会更清楚。", "义勇：呼吸放缓，水面归于平静——「凪」。"],
          ["忍：纸飞机要是飞进锦鲤池里，可要记得自己去捞回来呀。", "忍：连倒影都纹丝不动的静止水面，真是让人安心的守护呢。"],
          ["无一郎：折角再压实一点……这架白纸飞机一定能飞过池塘。", "无一郎：在静湖边看着波纹慢慢散开，烦躁一下子就消失了。"],
        ],
        en: [
          ["Rengoku: Folding paper planes on a sunlit veranda brings real calm between duties!", "Rengoku: Mirror-still midnight water! There is tremendous strength in such poise!"],
          ["Giyu: Watching bright clouds over the koi pond clears the mind without words.", "Giyu: Breath quieted, ripples stilled—Dead Calm."],
          ["Shinobu: If that paper glider lands among the lily pads, someone has to fish it out.", "Shinobu: Not a single wasted motion across that starlit mirror surface."],
          ["Muichiro: Crease the wings cleanly... this paper glider will soar right across the water.", "Muichiro: Concentric cyan ripples spreading slow help every hurried thought settle."],
        ],
      },
    },
  },
  {
    id: "butterfly-moonmist",
    names: { zh: "蝶药月雾", en: "Butterfly & Moon Mist" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["炼狱：蝶屋的白昼药香沁人心脾，后方的补给果然令人放心！", "炼狱：好轻灵的夜雾身法！无一郎的脚步既稳又干脆！"],
          ["义勇：每次看到整整齐齐排好药瓶的工作台，就知道屋里很安稳。", "义勇：夜雾和脚步同步流转，这一式拔刀毫无多余声响。"],
          ["忍：紫藤药露按比例调匀了，瓶塞记得轻轻扣紧别洒出来。", "忍：夜色起雾时记得看清脚下石板，别总走神踩滑了哟。"],
          ["无一郎：胡蝶小姐桌面上的紫花和蓝蝶，让药房亮堂了不少。", "无一郎：借着薄雾转身出鞘——杂念越少，剑尖越清晰。"],
        ],
        en: [
          ["Rengoku: Crisp wisteria remedies on the sunlit bench—our healing wing stands strong!", "Rengoku: Swift and balanced through the midnight bamboo mist—splendid form!"],
          ["Giyu: Neat glass vials and dried blossoms mean the estate is well tended.", "Giyu: Mist and footwork moving as one—silent, clean, decisive."],
          ["Shinobu: One gentle pour of pale-violet wisteria essence, measured cleanly by hand.", "Shinobu: Keep track of the mossy garden stones when the silver mist rises."],
          ["Muichiro: Pressed blossoms and blue butterflies brighten the quiet wooden study.", "Muichiro: Turning smoothly inside silver-mint mist—a clear mind finds the line."],
        ],
      },
    },
  },
];

export default family;
