import { createVividFamily } from "./create-vivid-family.js";

// Celadon travel daylight / moonlit teal, with Nezuko's wisteria-pink accent.
const family = createVividFamily({
  id: "kimetsu-bonds",
  signaturePrefix: "kmb",
  names: { zh: "鬼灭之刃 · 羁绊同行", en: "Demon Slayer · Bonds" },
  phrases: {
    // Original character-inspired lines; order matches the four pal assets.
    zh: [
      ["炭治郎：一起走下去吧。", "炭治郎：先调整呼吸，再往前一步。", "炭治郎：大家都要平安回来。"],
      ["祢豆子：唔，唔！", "祢豆子：嗯嗯！", "祢豆子：唔——！"],
      ["善逸：休息一下，好不好？", "善逸：这次我也会保护大家！", "善逸：饭团要留我一份啊。"],
      ["伊之助：跟上本大爷！", "伊之助：下一个山头也要拿下！", "伊之助：再来一碗！"],
    ],
    en: [
      ["Tanjiro: Let's keep going together.", "Tanjiro: Breathe, then take one more step.", "Tanjiro: Everyone comes home safely."],
      ["Nezuko: Mmm, mm!", "Nezuko: Mm-hmm!", "Nezuko: Mmmm!"],
      ["Zenitsu: Can we take a little break?", "Zenitsu: I'll protect everyone too!", "Zenitsu: Save a rice ball for me."],
      ["Inosuke: Keep up with me!", "Inosuke: That next mountain is mine!", "Inosuke: Another bowl!"],
    ],
  },
  light: {
    paper: "#F3F6EF", vividPaper: "#EAF2E9", ink: "#233C35",
    brand: "#286454", brandText: "#FFFFFF", signature: "#845079",
    deepAccent: "#845079", success: "#386A47", error: "#AF3748", warning: "#805B19",
  },
  dark: {
    ground: "#0D191C", vividPaper: "#111F22", text: "#E8F0E9",
    brand: "#8FD0B2", brandText: "#122B23", signature: "#D6A2CE",
    deepAccent: "#D6A2CE", success: "#A4CE94", error: "#FF8D9B", warning: "#EBC27C",
  },
});

// Four full-body figures retain a portrait canvas and a short-window height cap.
family.decor.wallpaperSize = "min(40vw, 520px, 49vh)";
family.decor.heroTranslate = "calc(-0.35 * min(40vw, 520px, 49vh)) calc(-1 * min(10vh, 100px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(40vw, 520px, 49vh) - 64px)";

family.originalArtworkNames = { zh: "驿道同行", en: "Roadside Bonds" };
family.artworks = [
  {
    id: "wisteria-veranda",
    names: { zh: "紫藤花舍", en: "Wisteria Veranda" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["炭治郎：藤花开得很安稳，先理好发带再喝口热茶吧。", "炭治郎：庭院外月色清朗，今夜轮流守在檐下就行。"],
          ["祢豆子：唔、唔嗯~（乖乖歪头任由哥哥系好粉色发带）", "祢豆子：唔！（轻轻拉住竹筒，在月夜藤影下安心点头）"],
          ["善逸：紫藤香气让人安心多了，明天再鼓起干劲……！", "善逸：呼吸定神——这一瞬，把全部注意力集中到脚尖与刀柄。"],
          ["伊之助：屋檐这么宽敞，先让本大爷占好最暖和的位置！", "伊之助：月光照得石板发亮，夜里正适合练几手双刀！"],
        ],
        en: [
          ["Tanjiro: The wisteria courtyard is calm today—let's fix that ribbon cleanly.", "Tanjiro: Clear moonlight over the flagstones; we will keep watch smoothly tonight."],
          ["Nezuko: Mmm, hmm! (tilting happily while the pink ribbon is tied)", "Nezuko: Mmm! (patting the wooden box calmly beneath moonlit wisteria)"],
          ["Zenitsu: Wisteria gardens feel safe enough for once—just one cup of tea first!", "Zenitsu: Steady my breathing... one focused instant, steel ready at the hilt."],
          ["Inosuke: This wide sunny veranda belongs to me for the afternoon nap!", "Inosuke: Bright moonlight on stone—perfect time to test my footing!"],
        ],
      },
    },
  },
  {
    id: "butterfly-training",
    names: { zh: "蝶屋修行", en: "Butterfly Estate Training" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["炭治郎：呼——再把全集中保持下去，大葫芦一定能吹破！", "炭治郎：稳住步幅与重心，每一道火环都要干净利落。"],
          ["祢豆子：嗯嗯！（坐在庭院树荫里替大家鼓掌加油）", "祢豆子：唔嗯——（眼角亮晶晶地看着哥哥练完收势）"],
          ["善逸：连伊之助都能扛起那个特大号葫芦了……我也加把劲吧！", "善逸：晚上院子竹影沙沙响的时候，出招声势可真让人精神一振！"],
          ["伊之助：哈哈哈！看好了炭治郎，本大爷举得比谁都稳！", "伊之助：好快的回旋剑弧！喂，下次夜练算我一个！"],
        ],
        en: [
          ["Tanjiro: Keep breathing evenly—even the giant training gourd will give way!", "Tanjiro: Ground both sandals firmly and carry every solar arc cleanly through."],
          ["Nezuko: Mm-hmm! (clapping along cheerfully from the shaded garden corner)", "Nezuko: Mmm! (watching proudly as glowing embers settle around the tiles)"],
          ["Zenitsu: If Inosuke can hoist a gourd that huge, I suppose I'll try too...", "Zenitsu: Hearing that crisp flame ring in the night courtyard wakes me right up!"],
          ["Inosuke: Hahaha! Look at me go—the biggest gourd in the garden is mine!", "Inosuke: Sharp spin! Next night session, let's spar side-by-side!"],
        ],
      },
    },
  },
  {
    id: "autumn-return",
    names: { zh: "霜叶归途", en: "Autumn Return" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["炭治郎：金黄银杏叶飘下来了，歇够之后慢慢下山吧。", "炭治郎：提灯照着前面的石板路，抓紧手就不用怕夜色黑。"],
          ["祢豆子：唔~（跟着哥哥的步调牵手踩过晚间石阶）", "祢豆子：嗯……（看着萤火虫微光安稳地走在哥哥身边）"],
          ["善逸：喂伊之助！这一包烤饭团是我好不容易护住的，别硬抢啊！", "善逸：夜风有点凉，幸好炭治郎的提灯一直亮在最前面。"],
          ["伊之助：银杏坡的烤饭团最香了，快分本大爷一个尝尝！", "伊之助：哈哈，那盏纸灯笼比星星还显眼，绝对走不丢！"],
        ],
        en: [
          ["Tanjiro: Golden ginkgo leaves along the brook—rest up before we head down.", "Tanjiro: Keep hold of my hand; this amber lantern lights every stepping stone."],
          ["Nezuko: Mmm~ (following gently step for step beneath the starry pines)", "Nezuko: Mm-hmm! (smiling softly at tiny green fireflies beside the path)"],
          ["Zenitsu: Hey! Keep your paws off my wrapped rice balls, you wild boar!", "Zenitsu: Evening mountain air gets brisk, so that warm paper lantern helps."],
          ["Inosuke: Toasted rice balls taste twice as good by an autumn mountain stream!", "Inosuke: That glowing lantern cuts right through the dark trail—no one falls behind!"],
        ],
      },
    },
  },
];

export default family;
