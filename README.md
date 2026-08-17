# dsh-themes

**DeepSeek Harness** 主题合集插件：一个插件装全部主题，设置页一行统一入口，每个家族支持浅色 / 深色 / 跟随系统。

当前收录家族：

- **高达（gundam）** —— RX-78-2 装甲配色：装甲白 / 高达蓝 / 高达红 / V 字天线黄，氛围版（壁纸水印、logo 品牌色块、更浓用色）
- **电锯人（chainsaw）** —— 作品视觉配色：骨白 / 波奇塔橙 / 血红 / 炭黑，整体暖调无蓝色，氛围版
- **蜡笔小新（shinchan）** —— 小新衣服配色：红衣 / 黄短裤 / 巧克力饼绿 / 片头天蓝，氛围版（文件夹图标是巧克力饼盒，展开时星星饼干探出来）
- **青灰（slate）** —— 中性简约：装甲白纸面 / 青灰墨色 / 钢蓝点缀（与高达族共享色板，但克制到认不出 IP）
- **赭棕（umber）** —— 中性简约：骨白纸面 / 浓缩咖啡墨色 / 暖棕点缀（与电锯人族共享色板）

氛围版的两个玩法：

- **角色化设置入口**：侧栏底部的「设置」按钮由该族角色替代——角色图 + 角色语录气泡（小新的「你回来啦～」、高达的「出击准备完毕！」、波奇塔的「汪！」；语录跟随设置里的界面语言，中文界面显示中文，否则显示英文）。悬停有摇摆小动画，点击弹跳一下、换一张角色图换一句台词，然后设置面板打开。简约风格和「默认」下保持原生设置按钮
- **头部分镜装饰**：会话头部右侧是一大块漫画分镜格场景图，从头部向下破格探出、底缘渐隐融进聊天区，图后角落还有签名色修饰色块（透明底；文字和按钮始终压在图上层、清晰可辨、点击不受影响，窄窗口自动隐藏）

## 安装

```sh
dsh plugin --profile web add -w /path/to/dsh-themes
dsh --profile web        # 重启 web 服务 → http://127.0.0.1:3080/
```

> 如果装过独立的 `dsh-gundam-theme` / `dsh-chainsaw-theme`，先卸载它们再装本合集，避免设置页出现多行入口：
>
> ```sh
> dsh plugin --profile web remove dsh-gundam-theme
> dsh plugin --profile web remove dsh-chainsaw-theme
> ```

## 使用

打开 web UI → **设置 → 通用 → 主题**：

1. **选家族**：默认 / 高达 / 电锯人 / 蜡笔小新 / 青灰 / 赭棕（卡片左右两半分别预览该族的浅色与深色）。高达、电锯人、蜡笔小新是氛围版（主题壁纸水印、logo 品牌色块、更浓的用色，一眼认出主题）；青灰、赭棕是中性简约版（纯色表面，克制）
2. **选模式**：浅色 / 深色 / **跟随系统**——跟随系统时，OS 切换明暗，主题自动在同一家族的浅深两套之间翻转

（如果某个家族同时提供简约和氛围两种风格，会再出现第三个风格芯片行；当前四个族各只有一种风格，所以该行不显示。）

选择「默认」则完全交还内建外观（内建的跟随系统照常工作，本插件零注入）。

主题选择按浏览器持久化在 `localStorage`（存的是 `{family, mode, style}` 元偏好），重启后自动恢复。

## 卸载

```sh
dsh plugin --profile web remove dsh-themes
```

## 开发

无第三方依赖，Node 20+：

```sh
node scripts/gen-themes.mjs   # 扫描 families/，生成 themes/*.json 并嵌入 lib/client.js
```

**新增一个主题家族**：在 `families/` 下加一个 `.mjs` 文件，导出 `{ id, names: { zh, en }, light: {…params}, dark: {…params} }`（照抄 `gundam.mjs` 的参数结构改色值即可；可选 `styles: ["minimal", "vivid"]` 限制提供的风格、`vivid: { light, dark }` 做氛围版参数覆写），然后跑一遍生成器——token 表、设置页卡片、跟随系统全部自动获得。详见 [docs/DESIGN.md](docs/DESIGN.md)。

**氛围版图片资产**：往 `families/assets/` 放 `<family>-light.webp` / `<family>-dark.webp`（壁纸）、`<family>-pal-N.webp`（设置区角色图，N 从 1 起，可多张，透明底 ≤256px）、`<family>-panel.webp`（头部漫画分镜装饰，透明底 ≤600px 宽）、`<family>-folder[-open]-light/dark.webp`（文件夹关/开两态图标，深浅色各一），生成器会把它们以 data URI 嵌进该族的 vivid 皮肤（角色图与语录则嵌进 catalog 的 `decor` 字段）。没有图片的家族也有「氛围」档，只是不带图。角色语录在家族文件的 `decor.phrases`（zh/en）里维护。

**调色预览**：生成器会同时产出 `docs/preview.html`（本地文件，不提交），用浏览器打开即可逐套皮肤过目配色，不用装插件。

## 致谢

- 插件结构参考 [zhijun-dai/Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme)（MIT）与其致敬的 [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

## 许可

MIT
