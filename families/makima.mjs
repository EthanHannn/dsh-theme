import { createVividFamily } from "./create-vivid-family.js";

// 纸白与炭黑承接公安制服，朱红和暗金呼应红辫与圈纹眼。
const family = createVividFamily({
  id: "makima",
  signaturePrefix: "mkm",
  names: { zh: "电锯人 · 玛奇玛", en: "Chainsaw Man · Makima" },
  phrases: {
    // 氛围短句按仪式、能力与咖啡三款侧栏角色排列。
    zh: [
      ["玛奇玛：安静，集中注意力。", "玛奇玛：接下来，交给我吧。", "玛奇玛：有些力量，不必喧哗。", "玛奇玛：一切都在掌握之中。"],
      ["玛奇玛：看着我指的方向。", "玛奇玛：接下来，听我的。", "玛奇玛：该轮到我了。", "玛奇玛：准备好了吗？"],
      ["玛奇玛：坐下，喝杯咖啡。", "玛奇玛：今天想聊些什么？", "玛奇玛：慢慢来，我在听。", "玛奇玛：期待你明天的表现。"],
    ],
    en: [
      ["Makima: Quiet. Focus.", "Makima: Leave the rest to me.", "Makima: Power need not be loud.", "Makima: Everything is in hand."],
      ["Makima: Look where I point.", "Makima: Now, listen to me.", "Makima: My turn.", "Makima: Are you ready?"],
      ["Makima: Sit down. Have some coffee.", "Makima: What shall we talk about?", "Makima: Take your time. I'm listening.", "Makima: I look forward to tomorrow."],
    ],
  },
  light: {
    paper: "#F5F3EF", vividPaper: "#F0EEEA", ink: "#292A2F",
    brand: "#973F3D", brandText: "#FFFFFF", signature: "#806022",
    deepAccent: "#833C38", success: "#4C6859", error: "#AE3541", warning: "#82601F",
  },
  dark: {
    ground: "#14151A", vividPaper: "#191A20", text: "#F0EDE8",
    brand: "#E7A09A", brandText: "#2A1719", signature: "#D9B876",
    deepAccent: "#D9B876", success: "#9DBFA9", error: "#FF929C", warning: "#DEBB7C",
  },
});

// 保留家族和皮肤标识，沿用已有收藏与外观偏好。
family.sortKey = "chainsaw-makima";
family.originalArtworkNames = { zh: "神社密令", en: "Shrine Orders" };
// 日间结印与夜间行动各用独立画面，高度限制随真实图片比例换算。
family.decor.wallpaperSize = "min(37vw, 460px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))";
family.decor.wallpaperPosition = "right 28px bottom 16px";
family.decor.heroTranslate = "calc(-0.36 * min(37vw, 460px)) calc(-1 * min(8vh, 80px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(37vw, 460px) - 64px)";

family.artworks = [
  {
    id: "office",
    names: { zh: "公安日程", en: "Public Safety Hours" },
    decor: {
      wallpaperSize: "min(40vw, 520px, calc(50vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.36 * min(40vw, 520px)) calc(-1 * min(8vh, 80px))",
      heroMaxWidth: "calc(100vw - 280px - min(40vw, 520px) - 64px)",
      phrases: {
        zh: [
          ["玛奇玛：先把这页看完。", "玛奇玛：不必着急，按顺序来。"],
          ["玛奇玛：接下来的安排，在这里。", "玛奇玛：这份报告，我看过了。"],
          ["玛奇玛：咖啡还热，坐一会儿。", "玛奇玛：今天辛苦了。"],
        ],
        en: [
          ["Makima: Finish this page first.", "Makima: No rush. One thing at a time."],
          ["Makima: Here is what comes next.", "Makima: I have read your report."],
          ["Makima: The coffee is still warm. Sit awhile.", "Makima: Good work today."],
        ],
      },
    },
  },
  {
    id: "dogs",
    names: { zh: "与犬相伴", en: "Life with Dogs" },
    decor: {
      // 日间遛犬与夜间居家均按整体人物与犬群保留横向空间。
      wallpaperSize: "min(43vw, 580px, calc(48vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.38 * min(43vw, 580px)) calc(-1 * min(8vh, 80px))",
      heroMaxWidth: "calc(100vw - 280px - min(43vw, 580px) - 64px)",
      phrases: {
        zh: [
          ["玛奇玛：慢慢来，它们会陪着你。", "玛奇玛：今天也要好好照顾它们。"],
          ["玛奇玛：到这边来。", "玛奇玛：别急，大家都有份。"],
          ["玛奇玛：它们也在等你。", "玛奇玛：再陪它们一会儿吧。"],
        ],
        en: [
          ["Makima: Take your time. They will keep you company.", "Makima: Let us take good care of them today."],
          ["Makima: Come over here.", "Makima: Easy. There is enough for everyone."],
          ["Makima: They are waiting for you too.", "Makima: Stay with them a little longer."],
        ],
      },
    },
  },
  {
    id: "cinema",
    names: { zh: "电影之约", en: "A Date at the Movies" },
    decor: {
      wallpaperSize: "min(35vw, 430px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      heroTranslate: "calc(-0.36 * min(35vw, 430px)) calc(-1 * min(8vh, 80px))",
      heroMaxWidth: "calc(100vw - 280px - min(35vw, 430px) - 64px)",
      phrases: {
        zh: [
          ["玛奇玛：今天想看哪一部？", "玛奇玛：有些片段，我还记得。"],
          ["玛奇玛：不必急着走。", "玛奇玛：有些故事，散场后才开始。"],
          ["玛奇玛：下次，还一起看电影吧。", "玛奇玛：能陪我一会儿吗？"],
        ],
        en: [
          ["Makima: What would you like to see today?", "Makima: Some scenes stay with me."],
          ["Makima: No need to rush away.", "Makima: Some stories begin after the film."],
          ["Makima: Let us see another film sometime.", "Makima: Will you stay with me awhile?"],
        ],
      },
    },
  },
];

export default family;
