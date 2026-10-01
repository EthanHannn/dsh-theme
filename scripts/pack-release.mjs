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

支持的 Harness：${compatibility.harness.version}（${compatibility.harness.tag}）。

下载附件 \`${pack.filename}\`，无需解压或构建。不要下载 GitHub 自动生成的 Source code 压缩包。

安装或更新（将路径替换为下载文件的绝对路径）：

\`\`\`sh
dsh plugin --profile web add /absolute/path/to/${pack.filename}
\`\`\`

使用同一份 Harness CLI 和 profile。更新后重启自己的 Harness 服务并刷新网页，在设置 → 主题与外观中选择主题。普通用户无需主题源码目录或图片生成服务。

回退：下载旧 Release 的安装包，执行相同的 add 命令。浏览器中的主题偏好保留，但旧包可能不包含新主题。

\`SHA256SUMS.txt\` 用于核对下载文件完整性。维护者发布前请补充本版更新内容。
`);
console.log(`Release archive: ${join(destination, pack.filename)} (${pack.size} bytes)`);
