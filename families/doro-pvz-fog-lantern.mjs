import { createVividFamily } from "./create-vivid-family.js";

// 锅帽造型与微缩材质串联蘑菇庭院中的不同日常。
const family = createVividFamily({
  id: "doro-pvz-fog-lantern",
  signaturePrefix: "doro-pvz-fog-lantern",
  names: {
    zh: "咕嘎和 Doro · 植物大战僵尸 · 雾庭菇灯",
    en: "Guga & Doro · Plants vs. Zombies · Lanterns in the Fog",
  },
  phrases: {
    zh: [
      [
        "doro～菇苗先睡，石头边很暖和。",
        "doro？这一盆，要搬到月光旁边。",
      ],
      [
        "doro！小灯亮啦，今晚一起巡路。",
        "doro～提高一点，就不怕看不清。",
      ],
      [
        "doro？睡醒了，要不要吹个小泡泡？",
        "doro～石阶这边，我替你看着。",
      ],
      [
        "doro～灯收好，最后一圈也走完啦。",
        "doro！小蘑菇精神，我先打个盹。",
      ],
    ],
    en: [
      [
        "Doro~ Sleep here, little shroom. The stones are cozy.",
        "Doro? This pot belongs beside the moonlight.",
      ],
      [
        "Doro! Lantern lit. Ready for our little patrol.",
        "Doro~ A little higher. Now we can see.",
      ],
      [
        "Doro? Awake already? A tiny puff, perhaps?",
        "Doro~ I will watch this side of the steps.",
      ],
      [
        "Doro~ Lantern away. The last round is done.",
        "Doro! Wide-awake shrooms. One sleepy Doro.",
      ],
    ],
  },
  light: {
    paper: "#F2EFF6",
    vividPaper: "#E6E1ED",
    ink: "#474052",
    brand: "#63517A",
    brandText: "#FFFFFF",
    signature: "#67502D",
    deepAccent: "#63517A",
    success: "#3F7058",
    error: "#A24C5E",
    warning: "#7D5B25",
  },
  dark: {
    ground: "#232733",
    vividPaper: "#333C4A",
    text: "#F3EDF9",
    brand: "#C8B9E3",
    brandText: "#232733",
    signature: "#E9D59E",
    deepAccent: "#C8B9E3",
    success: "#B1D7B7",
    error: "#F1AABB",
    warning: "#ECD49B",
  },
});

family.sortKey = "guga-doro-03-pvz-06-fog-lantern";
family.light.textSecondary = "#625A6D";
family.dark.textSecondary = "#D2CAE2";
// 浅深色保持接近的头部大小，各自保留动作与故事。
family.decor.wallpaperSize = "min(32vw, 460px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(250px, calc((100vw - 1160px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 16px bottom 12px";
family.decor.heroTranslate = "calc(-0.3 * min(32vw, 460px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(32vw, 460px) - 64px)";

family.artworks = [
  {
    id: "mushroom-rain",
    names: { zh: "蘑伞听雨", en: "Rain beneath the Mushroom" },
    decor: {
      phrases: {
        zh: [
          ["doro～蘑菇伞下，刚好坐得下。", "doro？这一滴雨，要落到手心啦。"],
          ["doro！菌褶亮起来，雨夜也暖暖的。", "doro～挤过来一点，叶子还很干。"],
          ["doro？听见了吗，是伞沿的小雨点。", "doro～小蘑菇，陪我等雨停吧。"],
          ["doro～抱紧一点，雨声就变轻啦。", "doro！接到一颗圆圆的雨珠。"],
        ],
        en: [
          ["Doro~ Just enough room beneath our mushroom.", "Doro? This raindrop is landing in my paw."],
          ["Doro! Glowing gills make a rainy night cozy.", "Doro~ Come closer. The leaf is still dry."],
          ["Doro? Hear the raindrops on our little roof?", "Doro~ Little shroom, wait out the rain with me."],
          ["Doro~ A small hug makes the rain sound softer.", "Doro! I caught a round little raindrop."],
        ],
      },
    },
  },
  {
    id: "mushroom-cart",
    names: { zh: "推车运菇", en: "The Little Mushroom Cart" },
    decor: {
      // 横向场景增加宽度，让角色脸部在轮播时保持清晰。
      wallpaperSize: "min(42vw, 580px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 1)), max(320px, calc((100vw - 1160px) / 2 + 80px)))",
      phrases: {
        zh: [
          ["doro～小蘑菇坐稳，出发啦。", "doro？谁把脑袋探出车沿了？"],
          ["doro！满满一车，都是今晚的好伙伴。", "doro～轮子慢慢转，小路慢慢走。"],
          ["doro？睡着的那两只，要轻一点推。", "doro～菇灯一亮，回家的路就清楚啦。"],
          ["doro～最后一段路，拉着你们回家。", "doro！到了到了，可以下车伸懒腰啦。"],
        ],
        en: [
          ["Doro~ Hold tight, little shrooms. Off we go.", "Doro? Who is peeking over the cart?"],
          ["Doro! A whole cart of tonight's good company.", "Doro~ Little wheel, little path, little steps."],
          ["Doro? Two sleepy passengers. Gently now.", "Doro~ Glowing shrooms show us the way home."],
          ["Doro~ One last stretch. I will pull you home.", "Doro! Here we are. Time for a little stretch."],
        ],
      },
    },
  },
  {
    id: "tree-hollow",
    names: { zh: "树洞晚安", en: "Goodnight in the Tree Hollow" },
    decor: {
      phrases: {
        zh: [
          ["doro～树洞里，刚好藏得下一场好梦。", "doro？小蘑菇，你也困了吗？"],
          ["doro～叶子铺好，靠着树根歇一会儿。", "doro！这盏菇灯，替我们守着门。"],
          ["doro～外面有点凉，里面暖暖的。", "doro？嘘，小蘑菇已经睡着啦。"],
          ["doro～抱好小蘑菇，今晚就睡这里。", "doro～晚安，明天再去庭院走走。"],
        ],
        en: [
          ["Doro~ This hollow has room for a lovely dream.", "Doro? Sleepy too, little shroom?"],
          ["Doro~ A leaf bed and a root to lean on.", "Doro! Our little shroom light guards the door."],
          ["Doro~ Chilly outside, cozy in here.", "Doro? Shh. The little shroom is asleep."],
          ["Doro~ One little shroom hug. We sleep here tonight.", "Doro~ Goodnight. More garden walks tomorrow."],
        ],
      },
    },
  },
];

export default family;
