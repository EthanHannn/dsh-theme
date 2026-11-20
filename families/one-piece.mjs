import { createVividFamily } from "./create-vivid-family.js";

function sceneLayout(maxWidth, height) {
  const size = `min(38vw, ${maxWidth}px, calc(${height}vh * var(--dsw-pack-wallpaper-ratio, 1)))`;
  return {
    wallpaperSize: size,
    wallpaperPosition: "right 24px bottom 16px",
    heroTranslate: `calc(-0.31 * ${size}) calc(-1 * min(7vh, 70px))`,
    heroMaxWidth: `calc(100vw - 280px - ${size} - 64px)`,
  };
}

const family = createVividFamily({
  id: "one-piece",
  signaturePrefix: "opc",
  names: { zh: "海贼王", en: "One Piece" },
  phrases: {
    zh: [
      ["路飞：出航啦！", "路飞：下一座岛在哪儿？"],
      ["甚平：舵交给我。", "甚平：抓稳，浪来了！"],
    ],
    en: [
      ["Luffy: Set sail!", "Luffy: Where's the next island?"],
      ["Jinbe: Leave the helm to me.", "Jinbe: Hold tight. Here comes a wave!"],
    ],
  },
  light: { paper: "#FBF6E9", vividPaper: "#FAF3DF", ink: "#233548", brand: "#175F83", brandText: "#FFFFFF", signature: "#BA3C32", deepAccent: "#9E5D1C", success: "#267353", error: "#BA3C32", warning: "#945A19" },
  dark: { ground: "#0C1824", vividPaper: "#101D2A", text: "#F7F0DD", brand: "#80CAF2", brandText: "#0B2230", signature: "#FF8C80", deepAccent: "#F0C16B", success: "#77CDA1", error: "#FF8C80", warning: "#F0C16B" },
});

family.originalArtworkNames = { zh: "桑尼号出航", en: "The Sunny Sets Sail" };
Object.assign(family.decor, sceneLayout(475, 52));

family.artworks = [
  {
    id: "sea-galley",
    names: { zh: "海上厨房", en: "The Sunny's Galley" },
    decor: {
      ...sceneLayout(470, 50),
      phrases: {
        zh: [
          ["乔巴：这盘是给我的吗？", "乔巴：我拿好叉子啦！"],
          ["山治：先盛一盘，趁热吃。", "山治：路飞，我听见你开门了。"],
        ],
        en: [
          ["Chopper: Is that plate for me?", "Chopper: I've got my fork!"],
          ["Sanji: Have a plate while it's hot.", "Sanji: Luffy, I heard that door."],
        ],
      },
    },
  },
  {
    id: "skypiea-traces",
    names: { zh: "空岛寻迹", en: "Traces of Skypiea" },
    decor: {
      ...sceneLayout(425, 50),
      phrases: {
        zh: [
          ["乌索普：这只贝壳里有声音！", "乌索普：可以踩在云上，真的！"],
          ["罗宾：苔藓下面还有一行。", "罗宾：让我再看一眼碑文。"],
        ],
        en: [
          ["Usopp: There's a sound in this shell!", "Usopp: You really can stand on the clouds!"],
          ["Robin: There's another line under the moss.", "Robin: Let me take another look at the inscription."],
        ],
      },
    },
  },
  {
    id: "wano-festival",
    names: { zh: "和之国", en: "Land of Wano" },
    decor: {
      ...sceneLayout(450, 51),
      phrases: {
        zh: [
          ["索隆：过了这座桥就是花之都吧？", "索隆：我记得来时走的是这条路。"],
          ["布鲁克：烟花开场前，还来得及拉一曲！", "布鲁克：哟嚯嚯嚯！再来一首。"],
        ],
        en: [
          ["Zoro: The Flower Capital's across this bridge, right?", "Zoro: I'm pretty sure this is the way I came."],
          ["Brook: There's time for a tune before the fireworks!", "Brook: Yohohoho! One more tune."],
        ],
      },
    },
  },
];

export default family;
