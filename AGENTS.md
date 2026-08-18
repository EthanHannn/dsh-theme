# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free, ESM-based theme pack for DeepSeek Harness. Theme definitions live in `families/*.mjs`; each module exports a family ID, localized names, and light/dark parameters. Committed WebP assets belong in `families/assets/`, while unprocessed image sources belong in the ignored `families/assets/raw/` directory.

`scripts/gen-themes.mjs` expands family parameters into `themes/*.json` and embeds the catalog into `lib/client.js`. Treat both as generated outputs. Edit `lib/client.tpl.js` for runtime/UI behavior and regenerate. `lib/index.js` is the plugin entry point, `cordis.patch.yml` defines bundle integration, and `docs/DESIGN.md` documents architecture and theme constraints.

## Build, Test, and Development Commands

- `npm run build` — generate all theme JSON files, `lib/client.js`, and the ignored `docs/preview.html`.
- `npm run generate` — alias of the build command.
- `node scripts/gen-themes.mjs` — direct generator invocation; requires Node.js 20 or newer.
- `dsh plugin --profile web add /absolute/path/to/dsh-themes` — link the pack into a local Harness profile. Restart with `dsh --profile web` after changes.

There is no automated test suite or coverage threshold. A successful generator run is the baseline check. Review `docs/preview.html` in a browser, verify light/dark/system modes in Harness, and inspect generated diffs before committing. Visual changes should also be checked at narrow widths.

## Coding Style & Naming Conventions

Follow existing JavaScript style: two-space indentation, double quotes, semicolons, trailing commas, ESM imports, `camelCase` identifiers, and short explanatory comments for non-obvious token decisions. Family filenames and IDs use lowercase kebab case, for example `chainsaw.mjs` and `chainsaw-dark-vivid`. Name assets `<family>-<mode>.webp`, `<family>-pal-N.webp`, `<family>-panel.webp`, or `<family>-folder[-open]-<mode>.webp`.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative subjects with optional Conventional Commit prefixes such as `fix:` and `docs:`. Keep each commit focused and include regenerated artifacts with source changes. Pull requests should explain the user-visible result, identify affected families and modes, note manual checks, and include screenshots for palette, asset, layout, or interaction changes. Link relevant issues and call out any intentional compatibility tradeoffs.
