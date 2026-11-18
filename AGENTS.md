# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free, ESM-based theme pack for DeepSeek Harness. Theme definitions live in `families/*.mjs`; each module exports a family ID, localized names, and light/dark parameters. Committed WebP assets belong in `families/assets/`.

Unprocessed image sources and process scripts do NOT live in the repo — they live in a local, non-synced scratch dir with `raw/` (green-screen sources, keyed alpha intermediates) and `outputs/` (per-family asset-build scripts `build-<family>-assets.py`, composite/visibility checks, preview screenshots). On CASTLE the directory is `D:/Documents/development/dsh-theme/`, also registered as the user environment variable `DSH_THEME_DEV`. Resolution order for scripts: `$DSH_THEME_DEV`, then `D:/Documents/development/dsh-theme` on Windows, then `~/Documents/development/dsh-theme`. OneDrive is no longer used for these files; do not recreate the old synced directory or add a junction back to it. On another machine, provision a local copy and set `DSH_THEME_DEV` explicitly. Run scratch-dir scripts from the repo root (they write webp into `families/assets/` relative to the cwd).

Harness runtime homes must stay outside OneDrive and all other synced directories. Leave `DSH_HOME` unset for normal use: Harness defaults to `~/.dsh` (`C:/Users/Ethan/.dsh` on CASTLE). Never use the asset scratch dir for runtime homes or profile dependencies. Only when isolated checks are necessary, use `D:/Documents/dsh-theme-runtime/<purpose>-home` on CASTLE (a local, non-synced directory on other machines), setting `DSH_HOME` only for that process/session. Historical test homes are archived at `D:/Documents/dsh-theme-runtime/archived-homes-20260917/`; they are not the active home.

Preserve the user's running Harness instance during theme development. Reuse it for visual checks when browser access is available; never stop or restart it to load theme changes. If a separate test server is needed, use an isolated runtime home and the source checkout's `pnpm dsh --profile web --port 0 --no-open` to allocate a free port. Do not start a test server on the normal 3080 port. Record the test process/session and stop only that instance after verification.

`scripts/gen-themes.mjs` expands family parameters into `themes/*.json` and embeds the catalog into `lib/client.js`. Treat both as generated outputs. Edit `lib/client.tpl.js` for runtime/UI behavior and regenerate. `scripts/build-banners.py` crops header-scroll sources from the scratch dir's `raw/` into the shipped banner strips (falls back to a legacy in-repo `families/assets/raw/` if the scratch dir is absent). `lib/index.js` is the plugin entry point and `cordis.patch.yml` defines bundle integration. Design rationale lives outside the repo (author's local notes); `docs/DESIGN.md` is gitignored — never commit it.

## Build, Test, and Development Commands

- `npm run build` — generate all theme JSON files, `lib/client.js`, and the ignored `docs/preview.html`.
- `npm run generate` — alias of the build command.
- `npm run check` — regenerate and reject stale outputs, then validate the supported Harness checkout.
- `npm run dsh:link` — build, link the repository into the `web` profile, and verify the effective configuration.
- `npm run dsh:check` — validate Harness compatibility and confirm that the profile still contains the bundle.
- `npm run dsh:repair` — reinstall profile dependencies when an existing `link:` target is broken, without adding a duplicate entry.
- `npm run dsh:start` — run the validated profile through the same Harness source checkout used for linking.
- `node scripts/gen-themes.mjs` — direct generator invocation; requires Node.js 20 or newer.

The workflow commands resolve Harness from `--harness <path>`, then `DSH_HARNESS_ROOT`, then the sibling `../deepseek-harness` checkout. When working against source, use these commands or the source checkout's `pnpm dsh` consistently. Use the global `dsh` command only when both installation and startup use that installed CLI.

There is no unit-test suite or coverage threshold. `npm run check` is the baseline automated check. Review `docs/preview.html` in a browser, verify light/dark/system modes in Harness, and inspect generated diffs before committing. Visual changes should also be checked at narrow widths.

## Harness Compatibility Maintenance

Harness plugin APIs are pre-stable. `compatibility.json` records the last fully verified Harness release plus the client packages and exports this plugin consumes; `scripts/check-dsh-compat.mjs` requires the current checkout to match it, so an upstream version bump fails the check and prompts re-verification. The four `@deepseek-ai/dsh-client-*` peer declarations in `package.json` are release-line ranges (`^0.1.6-alpha.2`), never exact pins — the runtime compatibility gate reads exactly these, so the range is what lets the bundle load on the current release line. An adaptation is complete only after the client adapter is re-checked and the supported-tag CI path builds Harness, links the profile, and boots the real Web application.

The scheduled CI job checks Harness `master` every Monday. Treat its failure as an upstream compatibility alert: inspect upstream changes, re-check the client adapter, then advance the verified baseline and the compatibility table together. Keep the peer ranges on the verified release line and never widen them across major/minor lines to make an unverified runtime load.

## Coding Style & Naming Conventions

Follow existing JavaScript style: two-space indentation, double quotes, semicolons, trailing commas, ESM imports, `camelCase` identifiers, and short explanatory comments for non-obvious token decisions. Family filenames and IDs use lowercase kebab case, for example `chainsaw.mjs` and `chainsaw-dark-vivid`. Name assets `<family>-<mode>.webp`, `<family>-pal-N.webp`, `<family>-panel.webp`, `<family>-banner[-<mode>].webp` (wide header scroll; supersedes the panel as header artwork when present), or `<family>-folder[-open]-<mode>.webp`.

Display names follow `主题 · 子主题 · 名字` / `Theme · Subtheme · Name` when a series has an established subtheme. Use spaces around `·`; for example, `咕嘎和 Doro · 江湖 · 竹涧茶歇` and `Guga & Doro · Jianghu · Bamboo Creek Tea`. Keep shared subthemes consistent (`江湖` / `Jianghu`, `日常` / `Daily Life`, `植物大战僵尸` / `Plants vs. Zombies`, `魔法师` / `Wizard Life`). Without an established subtheme, retain `主题 · 名字` rather than inventing a level. Minimal is an appearance suffix (` · 简约` / ` · Minimal`), and light/dark are appearance modes. 主题库按中文显示名的拼音顺序排列，数字按数值比较，`sortKey` 不再参与排序；默认主题固定在最前，简约项紧随父主题。Keep family/skin IDs, assets, and `kin` stable during display-name changes. See `docs/DEVELOPMENT.md` for the full convention.

Header artwork requirement: every vivid family ships `<family>-banner-light.webp` and `<family>-banner-dark.webp`. The banner is a character-free atmospheric scene (the family's character lives in the bottom-right wallpaper — never duplicate it in the header), composed right-weighted: the motif sits in the right third and near the vertical middle of a ~6:1 strip, with supporting scenery extending through the middle. Bake the left 0–25% and right 90–100% fades into the skin's vivid `paper` color; do not leave the left two-thirds blank. Declare `decor.headerArt.bakedHorizontalFade: true`. Above 1680px with at least 800px height, Full mode uses the bottom fade plus a gentle transparent fade at both horizontal edges, with a wider transition on the right; baked paper colors alone must not be relied on to hide vertical seams. Soft mode and smaller desktop windows retain the broader horizontal and vertical masks, and widths ≤900px hide the artwork. Produce strips by cropping the raw sources with `scripts/build-banners.py` (one entry per mode, band center tuned per artwork). Manga panels (`<family>-panel.webp`) are kept as legacy artwork for families without banners; do not add panels to new families.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative subjects with optional Conventional Commit prefixes such as `fix:` and `docs:`. Keep each commit focused and include regenerated artifacts with source changes. Pull requests should explain the user-visible result, identify affected families and modes, note manual checks, and include screenshots for palette, asset, layout, or interaction changes. Link relevant issues and call out any intentional compatibility tradeoffs.

## IP Artwork Fidelity

Unless the user explicitly requests a different art direction, preserve each anime or game IP's original visual language: canonical character proportions, faces, clothing, linework, coloring and rendering. Doro-specific figurine, plush and miniature preferences are scoped to their requested series and must not become defaults for unrelated IPs. Official references must guide both identity and visual style. Review original-IP resemblance before checking asset counts, layout or contrast.

## Expanding an Existing Single-Artwork Theme

以下要求仅适用于用户要求把已有单图主题拓展成多图主题。从零设计新主题时，按该主题自身的创意与需求设计，不套用本节的扩展流程。所有主题仍须遵循下文的场景总览确认流程。

- 原配图保留作比较，新增配图默认设计为独立场景；不得自行要求每张全员出场、相同站位、相同视角或相同画面比例。
- 制作前先比较各组的人物组合与人数、镜头视角、整体轮廓、空间关系、动作节奏和叙事重心，让不同场景在多项维度上形成清晰差异。更换道具、表情或光照本身不足以构成合格拓展；不规定每组必须使用不同人数。
- 参考图须注明用于人物身份、服装或画风。除非用户要求延续构图，不继承原配图的站位和镜头；可裁出单人身份参考，避免整张群像把新增场景锁回原布局。
- 提示词逐场景编写，不共用会固定人数、前后站位或群像比例的构图模板。主题配色、装饰位置和原作辨识度可以保持一致，场景构图应有独立设计。
- 验收时将原图与全部扩展图并排比较，先检查场景差异、原作辨识与人体结构，再检查透明边缘和界面效果。浅深色分别核对关节连接、遮挡、重心及道具接触；技术检查通过不能代替视觉验收。

## Review Corner Scenes Before Building a Theme

此流程适用于新主题、重新设计及多图拓展，除非用户明确要求跳过场景确认。

- 先设计右下角主图，直接生成一张分镜式场景总览供用户审阅。不要先分别制作全部正式主图，再拼成总览；也不要等整套主题完成后才展示方案。
- 第一版总览生成后先交用户审阅场景方向。发现脚部、手部、裁切或道具接触等局部问题时，随图简短注明待修项，不在用户看图前自行反复修图。等用户选定保留的场景并提出意见后，再按需集中修改，避免为可能被舍弃的场景提前打磨；正式素材交付前仍须完成全部结构检查。
- 同一组浅色与深色主图须分别设计，在动作、镜头、构图、人物组合、服装或具体场景等方面形成清晰可辨的差异；不能复用完全相同的画面，也不能仅调整亮度、配色、光照或日夜背景。两种模式可以延续同一故事与角色关系，不要求更换人物。
- 总览按计划展示各个场景的浅色与深色方案，两种方案都须出现。例如四组浅深色可排成两行八格。每格用简短编号或名称对应场景与模式，呈现人物组合、服装、动作、视角、整体轮廓及必要的场景片段，不制作完整界面效果图。保留足够细节看清人物身份、手脚与道具接触。
- 用户提出意见时，以最新总览为编辑依据，修改有分歧的格子并保留已认可的场景，再交付一张更新后的完整总览。讨论围绕这张图进行，不提前扩展横幅、物件、文件夹、侧栏角色或主题接入。
- 等用户明确认可总览后，才依据确认版逐张制作正式主图并扩展配套素材、配色、主题配置与界面验证。没有回复不代表确认。
- 确认版总览是后续制作的构图依据；正式主图延续已确认的人物组合、服装、动作、镜头和叙事重心，不擅自重新设计。分别制作时使用对应格子的裁切参考，避免其他格子干扰；总览小图不直接充当最终分辨率素材。若需明显改变已确认设计，回到总览重新确认。
- 总览确认不能替代正式素材的结构检查。交付前逐张检查头颈、肩胯、膝踝、鞋尖朝向、重心、遮挡和道具接触，再检查透明边缘及界面效果。
- 在仓库外的素材目录保存总览版本、对应提示词、场景与模式编号及确认记录，文件名使用英文，例如 `scene-sheet-v01.png`。供后续制作使用的版本须能明确追溯到用户确认的总览。
