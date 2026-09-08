# dsh-themes

**DeepSeek Harness** 主题合集插件：一个插件装全部主题，设置页一行统一入口，每个家族支持浅色 / 深色 / 跟随系统。

当前收录家族（24 个，按呈现风格分两类）：

**角色氛围家族**（IP 主题，带壁纸水印、角色化设置入口、头部漫画装饰、文件夹开合图标等氛围玩法）：

- **高达（gundam）** —— RX-78-2 装甲配色：装甲白 / 高达蓝 / 高达红 / V 字天线黄
- **电锯人（chainsaw）** —— 作品视觉配色：骨白 / 波奇塔橙 / 血红 / 炭黑，整体暖调无蓝色
- **蜡笔小新（shinchan）** —— 小新衣服配色：红衣 / 黄短裤 / 巧克力饼绿 / 片头天蓝（文件夹图标是巧克力饼盒，展开时星星饼干探出来）
- **芙莉莲（frieren）** —— 月夜魔法配色：羊皮纸 / 魔力蓝青 / 记忆金 / 森林绿
- **超能力女儿（hinamatsuri）** —— 雏祭配色：米纸 / 小雏蓝 / 鲑鱼籽红 / 菱饼绿，深色版是夜祭灯笼与靛蓝河面
- **夏目友人帐（natsume）** —— 友人帐配色：稻草纸 / 帐本绿 / 三毛猫柿红 / 青枫绿，深色版是夜参道的石灯笼与萤火
- **大侠咕嘎与Doro（daxia）** —— 抖音梗侠客配色：宣纸 / 天水碧 / 水墨金（签名）/ 竹青，深色版是冷墨夜色与鎏金剑气；壁纸是斗笠背剑的咕嘎与 Doro 双人同框
- **海贼王（one-piece）** —— 海洋蓝 / 海贼红 / 阳光金 / 暖羊皮纸，草帽路飞与航海长卷
- **火影忍者（naruto）** —— 查克拉橙 / 木叶蓝 / 暖纸色，鸣人、忍者卷轴与木叶村
- **灌篮高手（slam-dunk）** —— 湘北红 / 球场琥珀 / 黑白，流川枫与海边球场
- **电光奇旅（pokemon）** —— 星光金 / 旅途红 / 电光蓝 / 草地绿，原创电气伙伴与原野旅途
- **我的世界（minecraft）** —— 草方块绿 / 钻石青 / 土棕 / 火把琥珀，Steve、苦力怕与方块世界
- **魔兽世界·血精灵（wow-blood-elf）** —— 辛多雷绯红 / 奥术金 / 翡翠绿 / 深紫，永歌森林与法术刃
- **魔兽世界·牛头人德鲁伊（wow-tauren）** —— 莫高雷赭石 / 图腾青 / 皮革棕 / 篝火金
- **魔兽世界·兽人战士（wow-orc）** —— 部落红 / 兽人绿 / 铁灰 / 杜隆塔尔橙
- **魔兽世界·矮人战士（wow-dwarf）** —— 锻炉琥珀 / 山地蓝 / 铜须红 / 钢铁灰
- **我叫 MT（i-am-mt）** —— MT 赭黄 / 副本紫 / 喜剧红 / 治疗青，劣人与呆贼并肩冒险
- **小林家的龙女仆（dragon-maid）** —— 龙尾绿 / 龙焰橙 / 女仆藏青 / 奶油粉，托尔与暖厨房

**中性简约家族**（无 IP 的克制配色，纯色表面，适合日常长时间使用）：

- **青灰（slate）** —— 装甲白纸面 / 青灰墨色 / 钢蓝点缀（与高达族共享色板，但克制到认不出 IP）
- **赭棕（umber）** —— 骨白纸面 / 浓缩咖啡墨色 / 暖棕点缀（与电锯人族共享色板）
- **青瓷（celadon）** —— 羊皮纸面 / 青绿墨色 / 哑光金点缀（与芙莉莲族共享色板）
- **蜜蜡（beeswax）** —— 奶油纸面 / 暖棕墨色 / 蜂蜜琥珀点缀（与蜡笔小新族共享色板）
- **蓝染（aizome）** —— 米纸 / 靛蓝墨色 / 染蓝点缀（与超能力女儿族共享色板）
- **抹茶（matcha）** —— 稻草纸面 / 森林墨色 / 茶绿点缀（与夏目友人帐族共享色板）

> 历史：早期版本里高达 / 电锯人同时提供「简约」与「氛围」两种风格；后来简约版拆分为独立的 slate / umber 家族，芙莉莲进合集时直接照此拆出 celadon，蜡笔小新随后照此拆出 beeswax（配色单一事实源仍分别在 gundam / chainsaw / frieren / shinchan 参数里，见 `families/slate.mjs` 等文件的再导出注释）。现在每个族只提供一种风格，设置页不再有风格切换芯片。

角色氛围家族的两个玩法：

- **角色化设置入口**：侧栏底部的「设置」按钮由该族角色替代——角色图 + 角色语录气泡（小新的「你回来啦～」、高达的「出击准备完毕！」、波奇塔的「汪！」；语录跟随设置里的界面语言，中文界面显示中文，否则显示英文）。悬停有摇摆小动画，点击弹跳一下、换一张角色图换一句台词，然后设置面板打开。中性简约家族和「默认」下保持原生设置按钮
- **头部装饰**：会话头部右侧可以是一大块漫画分镜格场景图，从头部向下破格探出、底缘渐隐融进聊天区，图后角落还有签名色修饰色块；提供了横幅长卷（`<family>-banner-<mode>.webp`）的家族则升级为通栏氛围长卷——无框插画铺满整条头部，右实左虚、左侧渐隐让出文字区、底缘融化进聊天区。两种形态下文字和按钮始终压在图上层、清晰可辨、点击不受影响，窄窗口自动隐藏

## 兼容性

Harness 的插件 API 尚未稳定，本仓库只承诺通过自动化验证的版本，不用宽泛的预发布 semver 范围猜测兼容性。

| dsh-themes | 已验证的 DeepSeek Harness | 状态 |
| --- | --- | --- |
| `0.2.x` | `0.1.3-alpha.1`（tag `dsh-v0.1.3-alpha.1`） | 当前支持 |

[`compatibility.json`](compatibility.json) 是支持版本和所需客户端包的单一清单。CI 对当前支持 tag 做完整构建、profile 链接和真实 Web 启动测试，并在每周一检查 Harness `master`；上游变化会让预警任务失败，更新适配时必须同时修改兼容清单、`peerDependencies`、客户端适配代码和本表。

## 安装

### 从 Harness 源码仓库运行（推荐用于本地开发）

两个仓库同级放置为 `deepseek-harness/` 和 `dsh-theme/` 时，在主题仓库运行：

```sh
npm run dsh:link       # 构建主题、链接进 web profile、验证有效配置
npm run dsh:start      # 验证兼容性和 profile 后启动 Web
```

Harness 在其他位置时显式传入路径：

```sh
npm run dsh:link -- --harness /absolute/path/to/deepseek-harness
npm run dsh:start -- --harness /absolute/path/to/deepseek-harness
```

等价的手动命令是：

```sh
cd /absolute/path/to/deepseek-harness
pnpm dsh plugin --profile web add /absolute/path/to/dsh-theme
pnpm dsh --profile web
```

安装和启动必须使用同一份 Harness CLI；不要用全局 `dsh` 安装后再用源码仓库的 `pnpm dsh` 启动。

### 从已安装的 Harness 运行

```sh
dsh plugin --profile web add /absolute/path/to/dsh-theme
dsh --profile web
```

- 用绝对路径或相对路径均可（`dsh plugin` 会把相对路径锚定到当前目录）。也可以直接给 npm 包名 / git 源安装。
- 安装后**必须重启 web 服务**（`dsh --profile web`）——合集是 bundle 插件，bundle 层在启动时组合，运行中的进程不会热加载它。
- 装的是**目录链接**（`link:` 依赖），主题源码目录要一直留在原位，删了它主题就解析不到了。

> 早期装过独立主题插件（`dsh-theme-gundam`）的话，先卸载再装本合集，避免设置页出现多行入口：
>
> ```sh
> dsh plugin --profile web remove dsh-theme-gundam
> ```

## 更新与故障排查

从 Harness 源码运行时，`git pull` 后需要重新构建 Harness；这是上游源码运行方式的要求，不表示主题被卸载。构建前先停止 Web 进程，避免旧 Host 进程和新 Client 产物混用：

```sh
cd /absolute/path/to/deepseek-harness
git pull
pnpm install --frozen-lockfile
pnpm run build

cd /absolute/path/to/dsh-theme
git pull
npm run build
npm run dsh:check -- --harness /absolute/path/to/deepseek-harness
npm run dsh:start -- --harness /absolute/path/to/deepseek-harness
```

正常更新不需要再次 `add`。按以下顺序定位：

1. `npm run dsh:check` 同时验证 Harness 版本、所需客户端包、profile 的 `dsh-themes` 配置层；失败信息会指出需要更新适配还是重新链接。
2. profile 依赖存在但链接损坏时运行 `npm run dsh:repair`，它执行 profile 自己的 `pnpm install` 并再次验证；不要重复 `add`。
3. 配置检查通过但浏览器仍显示旧界面时，停止 Web 服务、重新运行 `npm run dsh:start`，再强制刷新页面。
4. Harness 版本不受支持时不要只改版本号绕过检查；先让客户端适配和真实 Web smoke 通过，再同步更新兼容清单、精确 peer 和 README 表。CI 会直接读取兼容清单中的 tag。

## 使用

打开 web UI → **设置 → 通用 → 主题**：

1. **选家族**：默认 + 每族一张卡片（整卡可点，卡面是该族浅/深拼色预览），卡片最多两行、超出纵向滚动。同一色板的两种表达相邻摆放、同名加后缀——如「电锯人·氛围」「电锯人·简约」。简约版底层是独立的中性族（青灰 / 赭棕 / 青瓷 / 蜜蜡 / 蓝染 / 抹茶，与 IP 族共享色板），设置页不额外展示这个名字
2. **选模式**：浅色 / 深色 / **跟随系统**——跟随系统时，OS 切换明暗，主题自动在同一家族的浅深两套之间翻转
3. **选壁纸浓度**（仅氛围族显示）：**柔和**（默认，壁纸透过半透纸面隐约渗出）/ **清晰**（右下角全浓度直出，上左边缘渐隐融入界面，不挡点击；为宽屏设计，窗口窄于 1200px 时自动回退柔和）

选择「默认」则完全交还内建外观（内建的跟随系统照常工作，本插件零注入）。

主题选择按浏览器持久化在 `localStorage`（存的是 `{family, mode, style, wallpaper}` 元偏好），重启后自动恢复。

## 卸载

```sh
dsh plugin --profile web remove dsh-themes
dsh --profile web        # 重启 web 服务，bundle 层完全卸载
```

## 开发

无第三方依赖，Node 20+：

```sh
npm run build          # 生成 themes/*.json、lib/client.js 和本地预览
npm run check          # 生成物 freshness + 当前 Harness 兼容性
npm run dsh:check      # 再验证当前 web profile 已加载主题层
```

`npm run check:compat -- --harness <path>` 可单独检查另一个 Harness checkout；未传路径时依次使用 `DSH_HARNESS_ROOT` 和同级 `../deepseek-harness`。`npm run dsh:start -- --no-open` 可禁止自动打开浏览器。

**新增一个主题家族**：在 `families/` 下加一个 `.mjs` 文件，导出 `{ id, names: { zh, en }, light: {…params}, dark: {…params} }`（照抄 `gundam.mjs` 的参数结构改色值即可；可选 `styles: ["minimal", "vivid"]` 声明提供的风格、`vivid: { light, dark }` 做氛围参数覆写），然后跑一遍生成器——token 表、设置页卡片、跟随系统全部自动获得。设置页卡片按文件名顺序平铺；若新族是某 IP 族色板的简约再导出（照 `slate.mjs`），加 `kin: "<ip族id>"` 就会与该族相邻成对（显示为 `<IP族名>·氛围` / `<IP族名>·简约`），不加则以本名单卡平铺。

**角色氛围家族的图片资产**：往 `families/assets/` 放 `<family>-light.webp` / `<family>-dark.webp`（壁纸）、`<family>-pal-N.webp`（设置区角色图，N 从 1 起，可多张，透明底 ≤256px）、`<family>-panel.webp`（头部漫画分镜装饰，透明底 ≤600px 宽）、`<family>-banner-light.webp` / `<family>-banner-dark.webp`（头部通栏长卷，右实左虚的无框横幅，主体放在画面右侧与垂直中段，左右/下缘融向纸色；存在时取代分镜图成为头部装饰，也可用单色 `<family>-banner.webp` 通吃）、`<family>-folder[-open]-light/dark.webp`（文件夹关/开两态图标，深浅色各一），生成器会把它们以 data URI 嵌进该族的皮肤（角色图与语录则嵌进 catalog 的 `decor` 字段）。左下角独立物件使用 `<family>-props.webp`（或 `-props-light.webp` / `-props-dark.webp`），不再复用箱盒式文件夹图标；未提供时保留原有文件夹组合。没有图片的家族照样能用，只是没有对应装饰。角色语录在家族文件的 `decor.phrases`（zh/en）里维护。

**调色预览**：生成器会同时产出 `docs/preview.html`（本地文件，不提交），用浏览器打开即可逐套皮肤过目配色，不用装插件。

## 致谢

- 插件结构参考 [zhijun-dai/Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme)（MIT）与其致敬的 [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 许可

MIT
