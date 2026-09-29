import frieren from "./frieren.mjs";

// Preserve the original staff portraits as a separate journey collection.
export default {
  ...frieren,
  id: "frieren-moonlit",
  names: { zh: "芙莉莲·月下旅人", en: "Frieren · Moonlit Journey" },
  decor: {
    ...frieren.decor,
    phrases: {
      zh: [
        ["下一座城镇，慢慢走过去吧。", "这条路，似乎还和从前一样。", "旅途中，总会遇到有趣的魔法。"],
        ["这片花瓣，让我想起以前的旅途。", "有些回忆，走远了才明白。", "今晚就在这里歇一会儿吧。"],
        ["菲伦：路线已经确认好了。", "菲伦：行李带齐了，可以出发了。"],
        ["修塔尔克：行李我来拿吧。", "修塔尔克：下一段路，我走前面。"],
      ],
      en: [
        ["Let's take our time walking to the next town.", "This road seems just as it used to be.", "There's always curious magic along the way."],
        ["This petal reminds me of an old journey.", "Some memories make sense only much later.", "Let's rest here for a while tonight."],
        ["Fern: I've checked our route.", "Fern: Everything is packed. We can leave."],
        ["Stark: I'll carry the bags.", "Stark: I'll take the lead on the next stretch."],
      ],
    },
  },
};
