import { createVividFamily } from "./create-vivid-family.js";

function courtLayout(width, maxWidth, height) {
  const size = `min(${width}vw, ${maxWidth}px, calc(${height}vh * var(--dsw-pack-wallpaper-ratio, 1)))`;
  return {
    wallpaperSize: size,
    wallpaperPosition: "right 20px bottom 14px",
    heroTranslate: `calc(-0.3 * ${size}) calc(-1 * min(6vh, 60px))`,
    heroMaxWidth: `calc(100vw - 280px - ${size} - 64px)`,
  };
}

const family = createVividFamily({
  id: "slam-dunk",
  signaturePrefix: "sdk",
  names: { zh: "灌篮高手", en: "Slam Dunk" },
  phrases: {
    zh: [
      ["先站稳，再卡位。", "在球碰筐前，就把位置占住。"],
      ["篮板交给我！", "看好了，这次我站稳了！"],
      ["抢到篮板，第一传交给我。", "准备回防，下一球还没完。"],
      ["卡住位置，我去接应。", "别光盯着球，脚下得站稳。"],
      ["篮板。", "再来一球。"],
    ],
    en: [
      ["Plant your feet, then box out.", "Get position before the ball hits the rim."],
      ["The rebound is mine!", "Watch me. I've got my feet set this time!"],
      ["Grab the board and get me the outlet.", "Get back. The play isn't over yet."],
      ["Seal your man. I'll be ready for the pass.", "Watch your feet as well as the ball."],
      ["Rebound.", "One more."],
    ],
  },
  light: { paper: "#FBF6EB", vividPaper: "#F5EDE0", ink: "#2D2928", brand: "#A33334", brandText: "#FFFFFF", signature: "#9B581E", deepAccent: "#84282B", success: "#386B59", error: "#A33334", warning: "#8A541D" },
  dark: { ground: "#16181C", vividPaper: "#191C21", text: "#F5EDE3", brand: "#FF8881", brandText: "#301619", signature: "#EAB978", deepAccent: "#FFD099", success: "#8CC3AA", error: "#FF8881", warning: "#EAB978" },
});

family.originalArtworkNames = { zh: "篮板课", en: "Rebound Lesson" };
Object.assign(family.decor, courtLayout(31, 430, 48));

// 四组场景共用湘北配色与五位侧栏角色，语录按角色顺序对应。
family.artworks = [
  {
    id: "fast-break",
    names: { zh: "快攻", en: "Fast Break" },
    decor: {
      ...courtLayout(32, 440, 44),
      phrases: {
        zh: [
          ["抢到球就散开，把边路让出来。", "回防时先保护篮下。"],
          ["我已经跑到前面了！", "传高点，我接得住。"],
          ["守住中路，我来带球。", "把重心压低，下一拍再变向。"],
          ["我跟在后面，底角有空位。", "慢半拍，等防守先动。"],
          ["这边。", "跑起来。"],
        ],
        en: [
          ["Spread out when we get the ball. Leave the wing open.", "Protect the rim on the way back."],
          ["I'm already up ahead!", "Throw it high. I'll get it."],
          ["Cover the middle. I'll bring it up.", "Stay low. Change direction on the next bounce."],
          ["I'm trailing. The corner's open.", "Hold half a beat. Let the defender move first."],
          ["Over here.", "Run."],
        ],
      },
    },
  },
  {
    id: "three-point",
    names: { zh: "三分线", en: "Beyond the Arc" },
    decor: {
      ...courtLayout(30, 410, 48),
      phrases: {
        zh: [
          ["掩护交给我，你去外线。", "投完还要准备回防。"],
          ["没进也没事，有我抢篮板。", "最后一球得算上我。"],
          ["接球，外线空了。", "我突进去，你在底角等我。"],
          ["脚踩稳，再出手。", "把鞋带系紧，还能再投一轮。"],
          ["这一球很稳。", "把球传回来。"],
        ],
        en: [
          ["I'll set the screen. Get out to the arc.", "Be ready to get back after the shot."],
          ["If it misses, I've got the board.", "Count me in for the last shot."],
          ["Catch. You're open out there.", "I'll drive. Wait for me in the corner."],
          ["Get your feet set, then shoot.", "Lace up tight. There's time for another round."],
          ["Clean shot.", "Pass it back."],
        ],
      },
    },
  },
  {
    id: "teamwork",
    names: { zh: "湘北默契", en: "Shohoku in Sync" },
    decor: {
      ...courtLayout(32, 440, 47),
      phrases: {
        zh: [
          ["都过来，手叠上。", "开场先守好第一球。"],
          ["这一下配合得不错。", "流川，再来一次！"],
          ["别挤，听队长说完。", "看到空位，我就传。"],
          ["各就各位，我去外线。", "下一球照这个节奏打。"],
          ["接得好。", "下一回合。"],
        ],
        en: [
          ["Bring it in. Hands together.", "Start by getting a stop."],
          ["That play worked pretty well.", "Rukawa, let's do it again!"],
          ["Give him room. Let the captain finish.", "Get open and I'll find you."],
          ["Take your spots. I'm going to the arc.", "Same pace on the next play."],
          ["Nice catch.", "Next possession."],
        ],
      },
    },
  },
];

export default family;
