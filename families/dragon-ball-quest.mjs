import { createVividFamily } from "./create-vivid-family.js";

// The early adventure: jade scales, the radar's teal and four-star amber.
const family = createVividFamily({
  id: "dragon-ball-quest",
  signaturePrefix: "dragonquest",
  names: { zh: "七龙珠·神龙奇旅", en: "Dragon Ball · A Wish Beyond the Hills" },
  phrases: {
    // Original lines: child Goku, Bulma, Yamcha, Oolong, Puar, Shenron.
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
// Shenron's coil stays behind the explorers, with room for the composer.
family.decor.wallpaperSize = "min(42vw, 530px, 53vh)";
family.decor.heroTranslate = "calc(-0.4 * min(42vw, 530px, 53vh)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(42vw, 530px, 53vh) - 64px)";

export default family;
