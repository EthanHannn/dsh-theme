import { createVividFamily } from "./create-vivid-family.js";

// 青玉龙鳞、雷达绿与四星珠的琥珀色串联早期冒险。
const family = createVividFamily({
  id: "dragon-ball-quest",
  signaturePrefix: "dragonquest",
  names: { zh: "七龙珠 · 神龙奇旅", en: "Dragon Ball · A Wish Beyond the Hills" },
  phrases: {
    // 角色短句依次对应悟空、布尔玛、雅木茶、乌龙、普尔与神龙。
    zh: [
      ["悟空：下一颗龙珠，会在哪里呢？", "悟空：筋斗云，出发！", "悟空：带上如意棒，一起走吧。"],
      ["布尔玛：雷达有反应了！", "布尔玛：先看地图，别急着乱跑。", "布尔玛：交给我，总会有办法的。"],
      ["雅木茶：前面的路，我来探。", "雅木茶：放心，还有我在呢。", "雅木茶：这个方向，看起来不错。"],
      ["乌龙：等等，行李还没收好！", "乌龙：冒险之前，先吃饱嘛。", "乌龙：这次应该没什么危险吧？"],
      ["普尔：我飞高一点看看。", "普尔：找到路了，跟我来！", "普尔：大家一起走，就不会迷路。"],
      ["神龙：想清楚，心中真正的愿望。", "神龙：珍惜你所选择的未来。", "神龙：愿望之后，还有自己的路。"],
    ],
    en: [
      ["Goku: Where's the next Dragon Ball?", "Goku: Flying Nimbus, let's go!", "Goku: Power Pole ready. Come along!"],
      ["Bulma: The radar picked something up!", "Bulma: Check the map before running off.", "Bulma: Leave it to me. I'll find a way."],
      ["Yamcha: I'll scout the road ahead.", "Yamcha: Don't worry. I'm right here.", "Yamcha: This direction looks promising."],
      ["Oolong: Wait! I'm still packing!", "Oolong: A meal before the adventure, please.", "Oolong: This won't be dangerous, right?"],
      ["Puar: I'll fly up and take a look.", "Puar: Found the path. Follow me!", "Puar: Stick together and we won't get lost."],
      ["Shenron: Consider what you truly wish for.", "Shenron: Treasure the future you choose.", "Shenron: Beyond the wish, your path remains."],
    ],
  },
  light: {
    paper: "#FAFAF2", vividPaper: "#F2F3E7", ink: "#2B3B32",
    brand: "#326C58", brandText: "#FFFFFF", signature: "#925A20",
    deepAccent: "#9A5264", success: "#3F6C4C", error: "#AC4051", warning: "#835F19",
    parameter: "#786083", function: "#99546B",
  },
  dark: {
    ground: "#10231E", vividPaper: "#142B25", text: "#EFF5E9",
    brand: "#A4D5BD", brandText: "#173E30", signature: "#F2C17C",
    deepAccent: "#E6ADBD", success: "#B4D7A5", error: "#F1A4AA", warning: "#E8CA8F",
    parameter: "#D2C1DC", function: "#E8B1C3",
  },
});

family.dark.textSecondary = "#CBD8C8";
// 原群像保留现有尺寸与站位，为输入区域留出空间。
family.decor.wallpaperSize = "min(42vw, 530px, 53vh)";
family.decor.heroTranslate = "calc(-0.4 * min(42vw, 530px, 53vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(42vw, 530px, 53vh) - 64px)";

family.originalArtworkNames = { zh: "结伴寻珠", en: "Quest Companions" };
family.artworks = [
  {
    id: "nimbus-flight",
    names: { zh: "筋斗云破风", en: "Nimbus Flight" },
    decor: {
      // 单人云上动作按高度限制，保留云尾与如意棒的完整轮廓。
      wallpaperSize: "min(32vw, 400px, calc(53vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.35 * min(32vw, 400px)) calc(-1 * min(6vh, 64px))",
      heroMaxWidth: "calc(100vw - 280px - min(32vw, 400px) - 64px)",
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["悟空：筋斗云，再飞高一点！", "悟空：下一座山后面，会有什么呢？"],
          ["布尔玛：别飞太远，雷达还在我这里！", "布尔玛：先认好方向，再出发。"],
          ["雅木茶：空中的路，就交给你了。", "雅木茶：我从山脚绕过去。"],
          ["乌龙：在云上也能带午饭吧？", "乌龙：慢一点，我可追不上！"],
          ["普尔：我也飞上去看看！", "普尔：前面的山谷，有一条近路。"],
          ["神龙：越过群山，旅途仍在继续。", "神龙：让心中的方向，引你前行。"],
        ],
        en: [
          ["Goku: Nimbus, a little higher!", "Goku: What is beyond the next mountain?"],
          ["Bulma: Not too far! I have the radar!", "Bulma: Check the direction before taking off."],
          ["Yamcha: The sky route is yours.", "Yamcha: I will go around the mountain."],
          ["Oolong: Can that cloud carry lunch too?", "Oolong: Slow down! I cannot keep up!"],
          ["Puar: I will fly up for a look too!", "Puar: There is a shortcut through the valley."],
          ["Shenron: Beyond the hills, the journey continues.", "Shenron: Let your heart guide the way."],
        ],
      },
    },
  },
  {
    id: "creek-search",
    names: { zh: "溪谷寻珠", en: "Creekside Search" },
    decor: {
      // 溪岸与人物一起缩放，脚下石块和水中龙珠均须可见。
      wallpaperSize: "min(40vw, 510px, calc(54vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.35 * min(40vw, 510px)) calc(-1 * min(6vh, 64px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 510px) - 64px)",
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["悟空：看见啦，就在水里！", "悟空：嘿嘿，这颗龙珠找到啦。"],
          ["布尔玛：雷达的光点，就在这附近。", "布尔玛：踩稳石头，别急着跳过去。"],
          ["雅木茶：溪边的路，我替你们看着。", "雅木茶：沿着水声，就能找到大家。"],
          ["乌龙：找到之后，能歇一会儿吗？", "乌龙：别把行李弄湿了！"],
          ["普尔：水面亮晶晶的，好漂亮。", "普尔：那块大石头，可以落脚。"],
          ["神龙：细小的光，也能指引方向。", "神龙：耐心寻找，终会有所收获。"],
        ],
        en: [
          ["Goku: I see it! Right in the water!", "Goku: Hehe, another Dragon Ball found."],
          ["Bulma: The radar signal is close.", "Bulma: Steady on those stones. No rushing."],
          ["Yamcha: I will watch the creekside path.", "Yamcha: Follow the water to find us."],
          ["Oolong: Can we rest after finding it?", "Oolong: Keep the bags dry!"],
          ["Puar: The water sparkles so beautifully.", "Puar: That big stone is safe to land on."],
          ["Shenron: Even a small light can guide you.", "Shenron: A patient search bears fruit."],
        ],
      },
    },
  },
  {
    id: "desert-repair",
    names: { zh: "沙漠机修", en: "Desert Repairs" },
    decor: {
      // 机车、蹲姿与悬浮角色形成整组轮廓，不裁切轮胎或鞋尖。
      wallpaperSize: "min(42vw, 560px, calc(54vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.35 * min(42vw, 560px)) calc(-1 * min(6vh, 64px))",
      heroMaxWidth: "calc(100vw - 280px - min(42vw, 560px) - 64px)",
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["悟空：修好了吗？我已经准备出发啦！", "悟空：要不要我帮忙推车？"],
          ["布尔玛：这点小故障，交给我。", "布尔玛：扳手递过来，很快就好。"],
          ["雅木茶：轮胎扶稳了，你放心修。", "雅木茶：工具擦好，下一程接着走。"],
          ["乌龙：我负责看好行李和午饭。", "乌龙：有车坐，总比走路强嘛。"],
          ["普尔：擦车布拿来啦！", "普尔：沙子进去了，要仔细清理。"],
          ["神龙：同行之人，让长路不再孤单。", "神龙：每一次停留，也有它的意义。"],
        ],
        en: [
          ["Goku: Fixed yet? I am ready to go!", "Goku: Want me to help push?"],
          ["Bulma: Leave this little fault to me.", "Bulma: Pass the wrench. Almost done."],
          ["Yamcha: I have the tire. Go ahead.", "Yamcha: Tools clean. Ready for the next stretch."],
          ["Oolong: I will guard the bags and lunch.", "Oolong: Riding beats walking, right?"],
          ["Puar: Here is the cleaning cloth!", "Puar: Sand got in. Let us clean it carefully."],
          ["Shenron: Companions make the long road less lonely.", "Shenron: Each stop has meaning too."],
        ],
      },
    },
  },
  {
    id: "shenron-wish",
    names: { zh: "神龙许愿", en: "A Wish to Shenron" },
    decor: {
      // 神龙的完整长躯以高度约束，角、龙须与尾端都留在画内。
      wallpaperSize: "min(40vw, 500px, calc(58vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.35 * min(40vw, 500px)) calc(-1 * min(6vh, 64px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 500px) - 64px)",
      headerArt: { bakedHorizontalFade: true },
      phrases: {
        zh: [
          ["悟空：原来，神龙真的这么大啊！", "悟空：七颗龙珠，终于集齐啦。"],
          ["布尔玛：这一路，真的没有白跑。", "布尔玛：许愿之前，可要想清楚。"],
          ["雅木茶：总算走到这一刻了。", "雅木茶：大家的心愿，都好好听着呢。"],
          ["乌龙：这回，可得认真想个愿望。", "乌龙：我、我只是有一点紧张。"],
          ["普尔：七颗龙珠，一颗也不少！", "普尔：大家一起找到的，真好。"],
          ["神龙：说出你的愿望吧。", "神龙：想清楚，你真正珍视的事物。"],
        ],
        en: [
          ["Goku: Wow, Shenron really is huge!", "Goku: All seven Dragon Balls at last."],
          ["Bulma: Every mile was worth it.", "Bulma: Think carefully before you wish."],
          ["Yamcha: We finally made it here.", "Yamcha: Every wish deserves a hearing."],
          ["Oolong: Time to think of a proper wish.", "Oolong: I am only a little nervous."],
          ["Puar: Seven Dragon Balls. All here!", "Puar: We found them together."],
          ["Shenron: Speak your wish.", "Shenron: Consider what you truly treasure."],
        ],
      },
    },
  },
];

export default family;
