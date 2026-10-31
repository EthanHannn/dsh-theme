# 开发指南

本项目使用 ESM，无第三方构建依赖，需要 Node.js 20 或更新版本。安装和使用方法见 [README](../README.md)。

## 构建与检查

在仓库根目录执行：

```sh
npm run build
npm run check
```

`build` 生成 `themes/*.json`、`lib/client.js`、`lib/client.assets-*.js` 和本地配色预览 `docs/preview.html`。`check` 运行测试、检查生成文件是否与源码一致，并验证 Harness checkout 的兼容性。提交时应包含更新后的生成文件；本地预览不提交。

图片数据按主题写入带内容哈希的客户端分块，主文件保留目录与配色。激活插件前通过 Harness 的 `require.async` 加载分块，再注册完整皮肤；沿用同一包内的图片数据，画质与离线使用方式不变。分块适用于 Web 与 Desktop 的模块载入通道，避免单个生成文件超过 GitHub 的 100 MB 限制。`compatibility.json` 同时记录模块加载器及其分块能力；升级 Harness 时复查 `ClientBundleRequire.async` 和 `ClientBundleRegistration.chunk`。

## 连接 Harness 源码

将本仓库与 Harness 仓库放在同一级目录，分别命名为 `dsh-theme` 和 `deepseek-harness`，然后执行：

```sh
npm run dsh:link
npm run dsh:check
```

命令按 `--harness <path>`、环境变量 `DSH_HARNESS_ROOT`、`../deepseek-harness` 的顺序查找 Harness。例如：

```sh
npm run dsh:link -- --harness /absolute/path/to/deepseek-harness
```

`dsh:link` 构建主题、链接到 `web` profile 并检查配置。`dsh:check` 检查兼容性和主题配置；链接依赖损坏时，使用 `npm run dsh:repair` 修复。需要启动服务时，使用 `npm run dsh:start`，可追加 `-- --no-open` 禁止自动打开浏览器。

开发期间保留正在运行的 Harness 服务，优先复用它检查效果。需要独立测试服务时，为该进程设置独立的 `DSH_HOME`，在 Harness 源码仓库执行 `pnpm dsh --profile web --port 0 --no-open`。记录测试进程，并在验证完成后仅关闭该进程。

## 源码与素材

| 路径 | 用途 |
| --- | --- |
| `families/*.mjs` | 主题名称、配色与装饰参数 |
| `families/categories.json` | 主题分类 |
| `families/assets/` | 提交到仓库的 WebP 素材 |
| `lib/client.tpl.js` | 客户端行为与设置界面源码 |
| `scripts/gen-themes.mjs` | 主题与客户端生成器 |
| `lib/index.js`、`cordis.patch.yml` | 插件入口与集成配置 |
| `docs/screenshots/` | 公开展示截图 |

修改客户端行为时，编辑 `lib/client.tpl.js` 后运行构建。`lib/client.js`、`lib/client.assets-*.js` 和 `themes/*.json` 为生成文件。

原始图片、素材处理脚本和检查截图放在仓库外的本地目录，通过 `DSH_THEME_DEV` 指定。该目录包含 `raw/` 和 `outputs/`，素材处理脚本从仓库根目录运行。素材目录和 Harness 运行目录均应位于非同步磁盘目录中，分别存放。日常运行保持 `DSH_HOME` 未设置，使用 Harness 默认的 `~/.dsh`。

## 主题显示名

有明确子主题的系列采用「主题 · 子主题 · 名字」，中英文层级一致，分隔符统一为两侧有空格的 ` · `。

| 层级 | 含义 | 示例 |
| --- | --- | --- |
| 主题 | 作品、IP 或角色系列 | 咕嘎和 Doro / Guga & Doro |
| 子主题 | 可容纳多套设计的题材、世界观或角色分支 | 江湖 / Jianghu、日常 / Daily Life、植物大战僵尸 / Plants vs. Zombies、魔法师 / Wizard Life |
| 名字 | 本套设计的场景或故事 | 竹涧茶歇 / Bamboo Creek Tea、睡莲护航队 / Lily Pad Patrol |

完整名称如「咕嘎和 Doro · 江湖 · 竹涧茶歇」。咕嘎和 Doro 是系列名；单角色或双人场景在简介中说明。已有「EVA · 初号机 · 觉醒」等明确分支沿用同一层级含义。没有稳定子主题的系列保留「主题 · 名字」；只有作品名的旧主题也可保留，新增设计先确定具体故事名。

简约是外观变体，在完整名称后加 ` · 简约` / ` · Minimal`；简约家族从父家族的 `names` 派生名称，避免两处维护。浅色、深色和跟随系统属于外观模式，通过模式选项展示。

同一系列的 `sortKey` 按子主题、具体设计排序，让相同分支相邻，简约项继续紧随父主题。修改显示名时保持 Family ID、皮肤 ID、素材文件名和 `kin` 不变。同步维护中英文名称、README 目录、完整图库及 Obsidian 制作记录，并重新生成客户端目录与皮肤 JSON。

## 添加主题

在 `families/` 中创建小写连字符命名的 `.mjs` 文件，参考现有主题导出 `id`、`names`、`light`、`dark` 和装饰参数。每个氛围主题都应提供简约配对；简约主题复用基础配色，通过 `kin` 指向氛围主题，并在设置列表中相邻显示。同步更新分类后运行构建。

素材按以下规则命名：

| 素材 | 文件名 |
| --- | --- |
| 角色壁纸 | `<family>-light.webp`、`<family>-dark.webp` |
| 侧栏角色 | `<family>-pal-N.webp`，序号从 1 开始 |
| 场景横幅 | `<family>-banner-light.webp`、`<family>-banner-dark.webp` |
| 文件夹图标 | `<family>-folder[-open]-<mode>.webp` |
| 左下角物件 | `<family>-props.webp` 或 `<family>-props-<mode>.webp` |

氛围主题必须提供浅深色横幅。横幅使用无角色的场景插画，比例约为 6:1，主要景物位于右侧三分之一、靠近垂直中部，其余景物延伸至画面中部。左侧 0–25% 与右侧 90–100% 渐变至对应氛围主题的 `paper` 色，并设置 `decor.headerArt.bakedHorizontalFade: true`。使用 `scripts/build-banners.py` 裁切原始素材，分别调整浅深色图片的裁切位置。新增主题使用横幅；`<family>-panel.webp` 仅用于现有主题的兼容。

使用本地 `docs/preview.html` 检查配色，并在 Harness 中检查浅色、深色、跟随系统及窄窗口效果。公开截图应使用无个人会话、路径或账户信息的演示环境。

README 首页采用精选展示：保留用户指定的条目，其他作品与系列各选一套，优先群像。同系列新增主题更新[完整图库](screenshots/README.md)与 README 的折叠目录；新作品可补充一套精选代表。完整图库始终包含全部主题和浅深截图。

主题设置页在 `≤600px` 时把宿主导航改为横向滚动，按钮高度 44px，并为内容区保留完整宽度。规则只在设置弹窗包含 `.dsh-theme-page` 时生效；调整主题控件时检查 390px 和 320px 视口及导航滚动。

## 收藏、主题轮换与同主题图片

客户端偏好保存在 `dsh-themes:pref`，文档版本为 5，兼容旧版偏好迁移，保留各主题外观、图片和原轮换名单。根级 `favorites` 按收藏顺序保存稳定的主题 ID，去重并过滤失效条目；`library.tab` 保存主题库标签（`all` / `favorites`），`library.showMinimal` 保存简约可见性，更新时合并字段。

“全部主题 / 我的收藏”是主题库中的常驻同级标签，独立于轮换开关。收藏页按最近收藏在前排列，支持搜索、分类、预览与应用；每页分别保留本次访问中的搜索和分类。收藏精确到单个条目，简约配对不会因分组搜索自动加入收藏结果；原生默认外观不参与收藏。卡片主体与星标使用并列按钮，避免按钮嵌套和收藏时误触预览。

根级 `rotation` 保存主题池、开关、间隔和顺序，与收藏互不约束。轮换选择器的全部／收藏／已选标签共享临时勾选，搜索或切换范围不丢弃隐藏选择；完成后一次保存，取消、Esc、收起面板或离开外观页丢弃草稿。已有成员保留顺序，新成员追加。选择器独立维护浏览状态，不改变外部主题库标签；取消收藏不移出轮换，加入轮换不自动收藏，零收藏也可正常配置轮换。

每个 `families[id].artwork` 独立保存 `variant` 和图片轮换配置。两层计时各自推进，切换图片不会推迟主题轮换；同时到期时优先切换主题，并重新计算目标主题的图片计时。

自动轮换只在本包主题已应用时运行。主题外观页、未结束的预览、页面隐藏、最近 15 秒的输入和宿主 `[data-streaming="true"]` 回复期间暂停。关闭外观页、手动应用主题或页面恢复显示时重新计时，不补切后台错过的次数。随机模式排除当前项，列表少于两项时自动关闭轮换；插件卸载时释放计时器和监听。

每个氛围主题自动包含保留 ID `original` 的原配图。后续在该主题的 `.mjs` 中声明额外变体，无需新增主题或皮肤 ID：

```js
artworks: [
  {
    id: "rain",
    names: { zh: "雨中小憩", en: "Rest in the Rain" },
    decor: {
      wallpaperSize: "min(34vw, 420px, 40vh)",
      wallpaperPosition: "right bottom",
      headerArt: { bakedHorizontalFade: true },
    },
  },
],
```

素材放入 `families/assets/`，前缀固定为 `<family>-<variant>`，例如 `gundam-rain-light.webp`、`gundam-rain-dark.webp`。变体 ID 使用小写英文与数字，以连字符分隔，同一主题内唯一，不得使用 `original`。

| 变体素材 | 文件名 |
| --- | --- |
| 主壁纸 | `<family>-<variant>-light.webp`、`<family>-<variant>-dark.webp` |
| 横幅 | `<family>-<variant>-banner-<mode>.webp`，或共用 `-banner.webp` |
| 文件夹 | `<family>-<variant>-folder[-open]-<mode>.webp` |
| 左下角物件 | `<family>-<variant>-props[-<mode>].webp` |
| 设置角色 | `<family>-<variant>-pal-N.webp` |

未提供的图片沿用原配图，可仅扩展主壁纸；没有任何有效素材、ID 重复或名称不完整时构建失败。主壁纸尺寸自动写入比例变量。浅深色分别检查；新横幅继续遵循无角色、对应主题纸色及两侧渐隐约定，不使用旧式 panel。

`decor` 可覆盖四个构图字段 `wallpaperSize`、`wallpaperPosition`、`heroTranslate`、`heroMaxWidth`，以及双语 `phrases`；其余部分继承原主题。变体通过图片分块加载，运行时只允许覆盖图片和构图变量，不能覆盖配色。原配图、清晰度和四个装饰开关均可继续使用。

本轮只实现切换能力，未补充新图片。增加素材后运行 `npm run build` 与 `npm run test`，并在 Harness 检查手动切换、自动轮换、浅深／系统模式、恢复原配图和窄屏。`tests/artwork-variants.test.mjs` 覆盖构建与分块还原；`tests/preferences.test.mjs` 覆盖偏好迁移、独立计时、暂停、图片覆盖和清理。

## Harness 兼容性

### 侧栏角色的设置入口

Web 与 Desktop 的侧栏角色都直达“主题与外观”。主题等待 `settings.launcher` 声明后，将 `sidebar.settings` 当前有效注册的共享 Store handle 同时声明到角色所在的 `sidebar.footer.action`。渲染器管理实例并提供 `actions.openSection("themes")`；角色不自行创建 Store，也不模拟快捷键。Web 隐藏原有设置按钮，Desktop 保留账号菜单。设置声明撤销时，角色注册随之释放。

快捷键和原生菜单继续调用 Harness 的 `open` action；关闭设置时，设置壳会清除 `activeId`，因此下次通过这些入口打开时仍显示默认页面。角色按钮通过 `aria-label` 标明“主题与外观”，不设置 `title`，以免悬停提示遮挡角色短句。升级 Harness 时需复查共享 Store、`openSection`／`close` action 及侧栏两个插槽的 root scope。`tests/pal-settings.test.mjs` 覆盖两端角色选择主题页、可访问名称、原有按钮可见性和声明释放。Windows Desktop `0.2.1-alpha.2` 的实际验证与完整兼容基线分别记录在 README 中。

### 桌面端的系统外观

Electron 的 `nativeTheme.themeSource` 同时控制原生窗口外观和渲染器的 `prefers-color-scheme` 查询。Harness 根据 `html[data-ds-theme-source]` 同步该值；注册皮肤默认写入其解析后的浅深色。因此，主题在保存或预览模式为 `system` 时保持该属性为 `system`，再通过媒体查询选择对应皮肤；固定模式则同步当前皮肤的浅深色。

适配仅作用于本包的当前主题和默认外观预览。模式改变但皮肤 ID 未变化时也需同步；属性观察用于保持 Harness 重绘后的系统模式，卸载时释放观察并交还已解析的外观。升级 Harness 时需复查该原生同步属性。`tests/preferences.test.mjs` 覆盖手动外观切回系统模式、系统外观变化、固定模式、预览取消及观察释放。

### 版本验证

[`compatibility.json`](../compatibility.json) 记录已完整验证的 Harness 版本、客户端包和导出入口。`npm run check:compat` 要求本地 checkout 与该基线一致。

`package.json` 中四个 `@deepseek-ai/dsh-client-*` 的 peer 范围供 Harness 判断运行时版本是否匹配。当前范围为 `^0.2.0-rc.1`，具体匹配遵循 semver 规则；版本匹配不代表已经完成兼容性验证。

更新兼容基线时，检查客户端 API 适配，运行支持版本的 CI，完成 Harness 构建、安装包安装和真实 Web 启动验证，再同步更新兼容记录、peer 范围及 README 兼容表。peer 范围应保持在已验证的版本线上，不跨越未经验证的主版本或次版本。

CI 每周一检查 Harness `master`。检查失败时，应分析上游变化并完成适配验证后再更新基线。

## GitHub Release

1. 更新 `package.json` 的版本号；有兼容性变化时，完成上述验证并更新兼容记录。
2. 运行 `npm run check` 和 `npm run release:pack`。
3. 检查 `dist/` 中的 `.tgz`、`SHA256SUMS.txt` 和发布说明。`dist/` 不提交到 Git。
4. 提交源码和生成文件，推送与包版本一致的 `v<版本>` 标签。
5. Release workflow 验证安装包并创建 GitHub Release 草稿。在草稿中补充本版主题、修复和兼容性变化，审阅后发布。

Release 使用 CI 验证过的同一份安装包。打包脚本检查文件清单和标签版本；安装包包含运行所需文件，图片已嵌入客户端。项目通过 GitHub Release 分发，`private: true` 禁止发布到 npm，但允许使用 `npm pack` 生成安装包。
