# 开发指南

本项目使用 ESM，无第三方构建依赖，需要 Node.js 20 或更新版本。安装和使用方法见 [README](../README.md)。

## 构建与检查

在仓库根目录执行：

```sh
npm run build
npm run check
```

`build` 生成 `themes/*.json`、`lib/client.js` 和本地配色预览 `docs/preview.html`。`check` 运行测试、检查生成文件是否与源码一致，并验证 Harness checkout 的兼容性。提交时应包含更新后的生成文件；本地预览不提交。

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

修改客户端行为时，编辑 `lib/client.tpl.js` 后运行构建。`lib/client.js` 和 `themes/*.json` 为生成文件。

原始图片、素材处理脚本和检查截图放在仓库外的本地目录，通过 `DSH_THEME_DEV` 指定。该目录包含 `raw/` 和 `outputs/`，素材处理脚本从仓库根目录运行。素材目录和 Harness 运行目录均应位于非同步磁盘目录中，分别存放。日常运行保持 `DSH_HOME` 未设置，使用 Harness 默认的 `~/.dsh`。

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

## Harness 兼容性

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
