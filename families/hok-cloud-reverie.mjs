import { createVividFamily } from "./create-vivid-family.js";

// Official skin references: game.gtimg.cn/images/yxzj/img201606/skin/hero-info/
// 131/131-bigskin-4.jpg (凤求凰), 150/150-bigskin-4.jpg (白龙吟),
// 190/190-bigskin-4.jpg (武陵仙君), 196/196-bigskin-4.jpg (朱雀志).
// Original character-inspired lines, in the same order as the companions.
const family = createVividFamily({
  id: "hok-cloud-reverie",
  signaturePrefix: "hok-cloud-reverie",
  names: {
    zh: "王者荣耀·云阙长歌",
    en: "Honor of Kings · Cloudside Ballad",
  },
  phrases: {
    zh: [
      ["李白：葫芦里留着一口春风。", "此间有酒，也有好山河。"],
      ["韩信：路已看清，便向前走。", "长枪暂歇，等你一程。"],
      ["诸葛亮：借这柄羽扇，拂去一页浮尘。", "桃花落在扇上，先留着吧。"],
      ["百里守约：别急，我替你留意远方。", "约好了，就一同走到最后。"],
    ],
    en: [
      ["Li Bai: A sip of spring waits in this gourd.", "Good wine, and a fine view to share."],
      ["Han Xin: The path is clear. Onward.", "My spear can rest while I wait for you."],
      ["Zhuge Liang: A flick of this fan clears the page.", "Let that peach petal rest on my fan."],
      ["Shouyue: Take your time. I will keep watch.", "A promise carries us to the end."],
    ],
  },
  light: {
    paper: "#F5F7FA",
    vividPaper: "#EDF1F8",
    ink: "#283246",
    brand: "#426393",
    brandText: "#FFFFFF",
    signature: "#745025",
    deepAccent: "#91642E",
    success: "#397361",
    error: "#B44151",
    warning: "#866019",
  },
  dark: {
    ground: "#171E30",
    vividPaper: "#1D273D",
    text: "#F1F4FC",
    brand: "#B5CEF5",
    brandText: "#19233A",
    signature: "#E5C58F",
    deepAccent: "#E5C58F",
    success: "#A3D3BD",
    error: "#F4A1B2",
    warning: "#E5C58F",
  },
});

// Secondary labels need extra contrast on tinted settings hover surfaces.
family.dark.textSecondary = "#BCC6D9";

// Keep the four-person portrait inside the reading gutter at desktop widths.
family.decor.wallpaperSize = "min(29vw, 430px, calc(68vh * var(--dsw-pack-wallpaper-ratio, 0.67)), max(220px, calc((100vw - 1200px) / 2 - 24px)))";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(29vw, 430px)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(29vw, 430px) - 64px)";

export default family;
