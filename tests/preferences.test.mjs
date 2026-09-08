import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const catalog = ["naruto", "gundam"].map((id) => ({ id, names:{ zh:id, en:id }, skins:["light", "dark"].map((mode) => ({ id:`${id}-${mode}-vivid`, colorScheme:mode })) }));
function load(saved, unavailable = false) {
  let raw = saved;
  let api;
  const nodes = new Set();
  const body = { dataset:{}, setAttribute(key, value) { this[key] = value; }, removeAttribute(key) { delete this[key]; }, appendChild(node) { node.isConnected = true; nodes.add(node); } };
  const document = { body, head:body, createElement:() => ({ isConnected:false, setAttribute() {}, remove() { this.isConnected = false; nodes.delete(this); } }) };
  const source = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8")
    .replace("__CATALOG__", JSON.stringify(catalog))
    .replace("    exports.CATALOG = CATALOG;", "    Object.assign(exports, { readPref, writePref, readDocument, appearanceFor, normalizeDocument, parseSkin, resolveSkin });");
  const window = { matchMedia:() => ({ matches:false, addEventListener() {}, removeEventListener() {} }), localStorage:{ getItem:() => raw, setItem:(_, value) => { if (unavailable) throw Error("blocked"); raw = value; } }, __ModuleLoader__:{ load:({ factory }) => { api = factory(() => ({ defineStore:(value) => value })); } } };
  vm.runInNewContext(source, { window, document, setTimeout:() => 1, clearTimeout() {} });
  return { api, document, nodes, raw:() => raw };
}

test("legacy clarity migrates to its family and survives default selection", () => {
  const { api, raw } = load(JSON.stringify({ family:"naruto", mode:"system", style:"vivid", wallpaper:"full" }));
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.appearanceFor("gundam").wallpaper, "soft");
  api.writePref(api.readPref());
  assert.equal(JSON.parse(raw()).version, 2);
  api.writePref(null);
  assert.equal(api.readPref(), null);
  assert.equal(api.appearanceFor("naruto").wallpaper, "full");
});

test("family settings remain independent and reset affects only current family", () => {
  const { api } = load(null);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false, pal:false, wallpaper:"full" });
  api.writePref({ family:"gundam", mode:"light", style:"vivid", character:false });
  assert.equal(api.appearanceFor("naruto").props, false);
  assert.equal(api.appearanceFor("gundam").props, true);
  api.writePref({ family:"gundam", mode:"system", style:"vivid", ...api.appearanceFor(null) });
  assert.equal(api.appearanceFor("gundam").character, true);
  assert.equal(api.appearanceFor("naruto").pal, false);
});

test("corrupt and obsolete fields normalize without admitting nonexistent skins", () => {
  for (const value of ["{", "null", "[]", "42"]) assert.equal(load(value).api.readPref(), null);
  const { api } = load(JSON.stringify({ family:"naruto", mode:"garbage", style:"minimal", wallpaper:"broken" }));
  assert.equal(api.readPref().mode, "system");
  assert.equal(api.readPref().style, "vivid");
  assert.equal(api.readPref().wallpaper, "soft");
  assert.equal(api.parseSkin("naruto-light"), null);
  assert.equal(api.resolveSkin(api.readPref()), "naruto-light-vivid");
  assert.equal(api.normalizeDocument({ version:2, selected:{family:"removed"}, families:{ naruto:{ props:false, header:"false" } } }).families.naruto.props, false);
});

test("blocked localStorage retains preferences for the session", () => {
  const { api } = load(null, true);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false });
  assert.equal(api.readPref().props, false);
});

test("section applies same-skin decorations, restores default, and tears down", () => {
  const { api, document, nodes } = load(null);
  const cleanups = [];
  const listeners = [];
  const registrations = [];
  let snapshot = { preference:"system", revision:0 };
  const ctx = {
    theme:{ register:() => () => {}, getTheme:() => snapshot, setTheme(preference) { if (preference === snapshot.preference) return; snapshot = { preference, revision:snapshot.revision+1 }; for (const listener of listeners) listener(snapshot); } },
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => cleanups.push(fn()),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{ inject:(_, fn) => fn(), register:(meta, component) => { registrations.push({ meta, component }); } },
  };
  api.apply(ctx);
  const section = registrations.find(({ meta }) => meta.name === "settings.section");
  assert.ok(section);
  assert.equal(registrations.some(({ meta }) => meta.name === "settings.general.item"), false);
  const actions = section.meta.inject({ sync() {} });
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  const revision = snapshot.revision;
  actions.applyDraft({ family:"naruto", mode:"dark", props:false, character:false, header:false, pal:false, wallpaper:"full" });
  assert.equal(snapshot.revision, revision);
  const override = [...nodes].find((node) => node.id === "dsh-theme-decoration-overrides");
  assert.match(override.textContent, /--dsw-pack-scene-props-secondary:none!important/);
  assert.match(override.textContent, /--dsw-pack-wallpaper:none!important/);
  assert.match(override.textContent, /--dsw-pack-panel:none!important/);
  actions.applyDraft({ family:null, mode:"light" });
  assert.equal(snapshot.preference, "light");
  assert.equal(api.appearanceFor("naruto").props, false);
  for (const cleanup of cleanups.reverse()) cleanup?.();
  assert.equal(nodes.size, 0);
  assert.equal(document.body.dataset.dshThemesPal, undefined);
});
