/** Build a self-contained GitHub Release archive; never publish to npm. */
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const compatibility = JSON.parse(readFileSync(join(root, "compatibility.json"), "utf8"));
const tag = process.env.GITHUB_REF_TYPE === "tag" ? process.env.GITHUB_REF_NAME : null;
if (tag && tag !== `v${manifest.version}`) throw new Error(`Tag ${tag} does not match v${manifest.version}`);

function run(command, args, capture = false) {
  const result = spawnSync(command, args, { cwd: root, encoding: "utf8", stdio: capture ? "pipe" : "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(result.stderr || `${command} failed (${result.status})`);
  return result.stdout;
}

run(process.execPath, [join(root, "scripts/gen-themes.mjs")]);
const destination = join(root, "dist");
mkdirSync(destination, { recursive: true });
// npm supplies its JS entry to scripts, avoiding Windows shell quoting/shims.
if (!process.env.npm_execpath) throw new Error("Run this script with npm run release:pack");
const [pack] = JSON.parse(run(process.execPath, [process.env.npm_execpath, "pack", "--ignore-scripts", "--json", "--pack-destination", destination], true));
const required = new Set(["package.json", "LICENSE", "README.md", "compatibility.json", "cordis.patch.yml", "lib/index.js", "lib/client.js"]);
for (const file of pack.files) {
  if (!required.delete(file.path)) throw new Error(`Unexpected release file: ${file.path}`);
}
if (required.size) throw new Error(`Missing release files: ${[...required].join(", ")}`);
const digest = createHash("sha256").update(readFileSync(join(destination, pack.filename))).digest("hex");
writeFileSync(join(destination, "SHA256SUMS.txt"), `${digest}  ${pack.filename}\n`);
writeFileSync(join(destination, "release-notes.md"), `# dsh-themes ${manifest.version}

已验证的 Harness 版本：${compatibility.harness.version}。

下载附件 \`${pack.filename}\`，无需解压或构建。

安装或更新（将路径替换为下载文件的绝对路径）：

\`\`\`sh
dsh plugin --profile web add "/absolute/path/to/${pack.filename}"
\`\`\`

安装和启动应使用同一份 Harness CLI 和同一个 profile。从 Harness 源码运行时，使用 \`pnpm dsh\` 代替 \`dsh\`。安装或更新后重启 Harness 服务并刷新网页，在设置 → 主题与外观中选择主题。

回退时，下载旧版本安装包并执行相同命令。浏览器中的主题偏好会保留；若旧版本没有当前主题，请重新选择。

\`SHA256SUMS.txt\` 用于核对下载文件完整性。请将安装包保留在固定的本地目录，以便重装或回退。
`);
console.log(`Release archive: ${join(destination, pack.filename)} (${pack.size} bytes)`);
