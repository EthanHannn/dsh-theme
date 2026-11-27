import { createVividFamily } from "./create-vivid-family.js";

// Original character-inspired lines, paired with each sidebar companion.
const family = createVividFamily({
  "id": "dragon-ball-family",
  "signaturePrefix": "dragon-ball-family",
  "names": {
    "zh": "七龙珠 · 包子山家书",
    "en": "Dragon Ball · Mount Paozu Family",
  },
  "phrases": {
    "zh": [
      [
        "悟空：这碗吃完，再练一会儿吧。",
      ],
      [
        "琪琪：饭盒带上，别只顾着跑。",
      ],
      [
        "悟饭：这页看完，就陪你出去。",
      ],
      [
        "悟天：这一大口，分给你！",
      ]
    ],
    "en": [
      [
        "Goku: One more bowl, then a little training.",
      ],
      [
        "Chi-Chi: Take your lunch before you run off.",
      ],
      [
        "Gohan: One more page, then we can go.",
      ],
      [
        "Goten: This big bite is for you!",
      ]
    ],
  },
  "light": {
    "paper": "#FAF7EE",
    "vividPaper": "#F1F0DE",
    "ink": "#34362B",
    "brand": "#546B3C",
    "brandText": "#FFFFFF",
    "signature": "#9D542F",
    "deepAccent": "#9D542F",
    "success": "#406B50",
    "error": "#B23D46",
    "warning": "#805E20",
  },
  "dark": {
    "ground": "#1C2521",
    "vividPaper": "#243029",
    "text": "#FAF4E6",
    "brand": "#C6D999",
    "brandText": "#28231A",
    "signature": "#ECB286",
    "deepAccent": "#ECB286",
    "success": "#A7CFAB",
    "error": "#F4A5AC",
    "warning": "#E5C983",
  }
});

// Keep secondary labels readable on tinted hover surfaces.
family.dark.textSecondary = "#BCBAAF";

// Keep the group compact and the central reading area clear.
family.decor.wallpaperSize = "min(36vw, 460px, 46vh)";
family.decor.wallpaperPosition = "right 24px bottom 20px";
family.decor.heroTranslate = "calc(-0.3 * min(36vw, 460px, 46vh)) calc(-1 * min(6vh, 60px))";
family.decor.heroMaxWidth = "calc(100vw - 280px - min(36vw, 460px, 46vh) - 64px)";

family.originalArtworkNames = { zh: "包子山野餐", en: "Mount Paozu Picnic" };
family.artworks = [
  {
    id: "creek-fishing",
    names: { zh: "山涧垂钓", en: "Creekside Fishing" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["悟空：嘿嘿！抓紧竹竿别松手，这条溪鱼大得够咱们晚上吃两顿了！", "悟空：滋滋烤得金黄喷香！悟天，先把你那串吹凉了再啃！"],
          ["琪琪：钓回来的大鱼正好放进汤锅里，别把衣服弄得全是泥水哦。", "琪琪：森林夜里露水重，烤完鱼记得把石堆火苗踩灭干净！"],
          ["悟饭：爸爸和悟天钓起的那条大蓝鱼也太有精神了吧！", "悟饭：松林篝火边的烤鱼香气隔着老远就能闻到呢。"],
          ["悟天：哇——爸爸快看！大鱼直接跳出水面啦！", "悟天：香喷喷的烤溪鱼最好吃啦，我要先咬一大口！"],
        ],
        en: [
          ["Goku: Hehe! Hang tight to that bamboo pole—this huge river fish is dinner!", "Goku: Grilled golden over pine embers! Careful not to burn your tongue, Goten!"],
          ["Chi-Chi: What a massive catch! Just try not to splash mud all over those gi pants.", "Chi-Chi: Pine forest nights get brisk—make sure the campfire embers cool completely."],
          ["Gohan: Dad and Goten landed an enormous spotted creek fish this morning!", "Gohan: Fresh skewered fish around a crackling forest fire never fails."],
          ["Goten: Whoa, Dad! That huge goofy fish leaped right out of the stream!", "Goten: Crispy campfire brook fish tastes the best!"],
        ],
      },
    },
  },
  {
    id: "nimbus-moonlight",
    names: { zh: "筋斗云与月茶", en: "Nimbus & Moonlit Tea" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["悟空：哥俩早上骑筋斗云顺路去学堂真快，回头给我带块馅饼呀！", "悟空：哈哈，晚上干完活喝一盏琪琪泡的茉莉热茶最解乏啦！"],
          ["琪琪：悟饭帮妈妈看好悟天，别让他在云上乱晃把书包甩飞！", "琪琪：刚沏好的茉莉花茶正暖和，今晚就先不急着去山里练功了。"],
          ["悟饭：坐稳了悟天，前面那片云拐过去就是山外大道啦。", "悟饭：晚上回屋陪爸爸妈妈喝杯温茶歇歇，一天过得很踏实。"],
          ["悟天：哥哥你看那边的山顶！筋斗云今天飞得好快呀！", "悟天：木廊上亮着小灯笼的时候，茶香味可真让人犯困……"],
        ],
        en: [
          ["Goku: Riding Nimbus together saves half the morning walk—have fun at school!", "Goku: Nothing beats winding down with Chi-Chi's hot jasmine tea under a crescent moon!"],
          ["Chi-Chi: Gohan, keep an arm around your little brother so his satchel doesn't tumble!", "Chi-Chi: Warm tea on the wooden porch beats staying out late training."],
          ["Gohan: Hold steady, Goten—just past this morning ridge is the road to town.", "Gohan: Peaceful evenings on the porch make Mount Paozu feel extra cozy."],
          ["Goten: Look that way, Gohan! Nimbus is flying faster than the wind!", "Goten: Steaming jasmine tea and a warm lantern on the veranda feel so sleepy..."],
        ],
      },
    },
  },
  {
    id: "homestead-spark",
    names: { zh: "山居烟火", en: "Homestead Hearth" },
    decor: {
      headerArt: { bakedHorizontalFade: true },
      wallpaperSize: "min(38vw, 480px, calc(52vh * var(--dsw-pack-wallpaper-ratio, 1)))",
      wallpaperPosition: "right 24px bottom 16px",
      heroTranslate: "calc(-0.34 * min(38vw, 480px)) calc(-1 * min(7vh, 72px))",
      heroMaxWidth: "calc(100vw - 280px - min(38vw, 480px) - 64px)",
      phrases: {
        zh: [
          ["悟空：嘿嘿……琪琪别念叨啦，这一摞二十个大碗我稳着呢！", "悟空：哇，悟天连小气弹都控制得挺圆，饭后练练手真不错！"],
          ["琪琪：刚收完满满一箱白萝卜，饭前怎么又捧着这么多空碗要添饭！", "琪琪：在院子里轻手轻脚练就行，可别把院墙石板震裂了哟！"],
          ["悟饭：妈妈的白萝卜汤刚入锅，爸爸就已经先把碗全端齐啦。", "悟饭：重心收稳，看着那颗蓝色小气弹抛过来——不错哦悟天！"],
          ["悟天：爸爸手里的白瓷碗叠得好高！我要帮着接住最上面那个！", "悟天：看招哥哥！接好我这颗亮晶晶的小气功弹！"],
        ],
        en: [
          ["Goku: Hehe, go easy with the spoon! I've got every single rice bowl balanced!", "Goku: Look at that neat little energy spark—after-dinner practice beats sitting still!"],
          ["Chi-Chi: Fresh radishes are barely crated and you already brought a tower of empty bowls!", "Chi-Chi: Practice light out in the stone courtyard, and leave the masonry in one piece!"],
          ["Gohan: Dinner isn't even dished yet and Dad stacked every bowl in the kitchen.", "Gohan: Good balance, Goten—send that sapphire spark straight across!"],
          ["Goten: That stack of bowls reaches above Dad's hair!", "Goten: Heads up, Gohan! Catch my bright blue ki spark!"],
        ],
      },
    },
  },
];

export default family;
