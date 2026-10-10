import { readFileSync } from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const catalog = ["naruto", "gundam"].map((id) => ({ id, category:"anime", names:{ zh:id, en:id }, skins:["light", "dark"].map((mode) => ({ id:`${id}-${mode}-vivid`, colorScheme:mode, tokens:{ "--dsw-pack-wallpaper":"url(test.webp)" } })) }));
catalog.push({ id:"slate", kin:"gundam", category:"anime", names:{ zh:"青灰", en:"Slate" }, skins:["light", "dark"].map((mode) => ({ id:`slate-${mode}`, colorScheme:mode })) });
catalog[0].decor = { wallpaperPosition: "right 32px bottom 20px", wallpaperSize: "min(34vw, 420px, 40vh)", heroTranslate: "0 -80px", heroMaxWidth: "600px" };
function load(saved, unavailable = false, reactApi = {}, browser = {}) {
  let raw = saved;
  let api;
  const nodes = new Set();
  const properties = new Map();
  const style = {
    setProperty(key, value) { properties.set(key, value); },
    removeProperty(key) { properties.delete(key); },
    getPropertyValue(key) { return properties.get(key) ?? ""; },
  };
  const body = { dataset:{}, style, setAttribute(key, value) { this[key] = value; }, removeAttribute(key) { delete this[key]; }, appendChild(node) { node.isConnected = true; nodes.add(node); } };
  const document = { body, head:body, createElement:() => ({ isConnected:false, setAttribute() {}, remove() { this.isConnected = false; nodes.delete(this); } }) };
  const source = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8")
    .replace("__CATALOG__", JSON.stringify(catalog))
    .replace("    exports.CATALOG = CATALOG;", "    Object.assign(exports, { readPref, writePref, readDocument, appearanceFor, settingsFor, writeSettings, normalizeDocument, parseSkin, resolveSkin, filterCatalog, writeLibrarySettings, ThemeSection });");
  const window = { matchMedia:() => ({ matches:false, addEventListener() {}, removeEventListener() {} }), localStorage:{ getItem:() => raw, setItem:(_, value) => { if (unavailable) throw Error("blocked"); raw = value; } }, __ModuleLoader__:{ load:({ factory }) => { api = factory((id) => id === "react" ? reactApi : ({ defineStore:(value) => value })); } } };
  Object.assign(window, browser.window);
  Object.assign(document, browser.document);
  vm.runInNewContext(source, { window, document, MutationObserver:browser.MutationObserver, setTimeout:() => 1, clearTimeout() {} });
  return { api, document, nodes, raw:() => raw };
}

test("legacy clarity migrates to its family and survives default selection", () => {
  const { api, raw } = load(JSON.stringify({ family:"naruto", mode:"system", style:"vivid", wallpaper:"full" }));
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.appearanceFor("gundam").wallpaper, "full");
  api.writePref(api.readPref());
  assert.equal(JSON.parse(raw()).version, 3);
  api.writePref(null);
  assert.equal(api.readPref(), null);
  assert.equal(api.appearanceFor("naruto").wallpaper, "full");
});

function desktopTheme(systemDark, mode = systemDark ? "light" : "dark") {
  const tasks = [];
  const mediaListeners = new Set();
  const observers = new Set();
  let nativeSource = "system";
  let source = "system";
  let pendingMutation = false;
  const media = {
    get matches() { return nativeSource === "system" ? systemDark : nativeSource === "dark"; },
    addEventListener:(_, fn) => mediaListeners.add(fn),
    removeEventListener:(_, fn) => mediaListeners.delete(fn),
  };
  const notifyMedia = () => tasks.push(() => {
    for (const listener of mediaListeners) listener();
  });
  const root = {
    getAttribute:() => source,
    setAttribute(name, value) {
      assert.equal(name, "data-ds-theme-source");
      source = value;
      if (pendingMutation) return;
      pendingMutation = true;
      tasks.push(() => {
        pendingMutation = false;
        for (const observer of observers) observer();
      });
    },
  };
  // Electron receives the DOM preference before notifying media-query listeners.
  observers.add(() => {
    const before = media.matches;
    nativeSource = source;
    if (before !== media.matches) notifyMedia();
  });
  class MutationObserver {
    constructor(callback) { this.callback = callback; }
    observe(target) { assert.equal(target, root); observers.add(this.callback); }
    disconnect() { observers.delete(this.callback); }
  }
  const harness = load(JSON.stringify({ family:"naruto", mode, style:"vivid" }), false, {}, {
    window:{ dshDesktop:{}, matchMedia:() => media },
    document:{ documentElement:root },
    MutationObserver,
  });
  const cleanups = [];
  const listeners = new Set();
  const sections = [];
  const skins = new Map(["light", "dark"].map(colorScheme => [colorScheme, { colorScheme }]));
  let snapshot = { preference:"system", active:{ colorScheme:media.matches ? "dark" : "light" }, revision:0 };
  const ctx = {
    theme:{
      register(skin) { skins.set(skin.id, skin); return () => skins.delete(skin.id); },
      getTheme:() => snapshot,
      setTheme(preference) {
        if (preference === snapshot.preference) return;
        const active = skins.get(preference === "system" ? (media.matches ? "dark" : "light") : preference);
        assert.ok(active, "The chosen theme must be registered");
        snapshot = { preference, active, revision:snapshot.revision + 1 };
        for (const listener of listeners) listener(snapshot);
        root.setAttribute("data-ds-theme-source", preference === "system" ? "system" : active.colorScheme);
      },
    },
    on:(_, fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    effect:fn => cleanups.push(fn()),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{
      inject:(_, fn) => fn(),
      entriesOfSlot:() => [{ store:{} }],
      register(meta) { if (meta.name === "settings.section") sections.push(meta); },
    },
  };
  const flush = () => {
    let count = 0;
    while (tasks.length) {
      assert.ok(++count < 100, "Native appearance and theme selection must settle");
      tasks.shift()();
    }
  };
  harness.api.apply(ctx);
  flush();
  return {
    ...harness,
    actions:sections[0].inject({ sync() {} }),
    snapshot:() => snapshot,
    source:() => source,
    flush,
    changeSystem(dark) {
      const before = media.matches;
      systemDark = dark;
      if (media.matches !== before) notifyMedia();
      flush();
    },
    presentAgain() {
      root.setAttribute("data-ds-theme-source", snapshot.active.colorScheme);
      flush();
    },
    dispose() {
      for (const cleanup of cleanups.reverse()) cleanup?.();
      flush();
      assert.equal(observers.size, 1, "Only Electron's own observer remains");
      assert.equal(mediaListeners.size, 0);
    },
  };
}

for (const systemDark of [true, false]) {
  test("Desktop system mode follows the OS after an opposite manual appearance: " + (systemDark ? "dark OS" : "light OS"), () => {
    const desktop = desktopTheme(systemDark);
    const expected = systemDark ? "dark" : "light";
    assert.notEqual(desktop.snapshot().active.colorScheme, expected);
    desktop.actions.saveDraft({ family:"naruto", mode:"system", ...desktop.api.appearanceFor("naruto") });
    desktop.flush();
    assert.equal(desktop.source(), "system");
    assert.equal(desktop.snapshot().active.colorScheme, expected);
    desktop.actions.applyDraft({ family:"naruto", mode:"system", ...desktop.api.appearanceFor("naruto") });
    desktop.flush();
    desktop.presentAgain();
    assert.equal(desktop.source(), "system");
    assert.equal(desktop.api.readPref().mode, "system");
    desktop.changeSystem(!systemDark);
    assert.equal(desktop.snapshot().active.colorScheme, systemDark ? "light" : "dark");
    assert.equal(desktop.api.readPref().mode, "system");
    desktop.actions.saveDraft({ family:"naruto", mode:desktop.snapshot().active.colorScheme, ...desktop.api.appearanceFor("naruto") });
    desktop.flush();
    const pinned = desktop.snapshot().active.colorScheme;
    assert.equal(desktop.source(), pinned);
    desktop.changeSystem(systemDark);
    assert.equal(desktop.snapshot().active.colorScheme, pinned);
    desktop.dispose();
  });
}

test("Desktop default-theme preview follows the OS and cancellation restores the selected family", () => {
  const desktop = desktopTheme(true, "dark");
  desktop.actions.previewTheme({ family:null, mode:"light" });
  desktop.flush();
  assert.equal(desktop.snapshot().active.colorScheme, "light");
  desktop.actions.previewTheme({ family:null, mode:"system" });
  desktop.flush();
  assert.equal(desktop.snapshot().preference, "dsh-preview-dark");
  assert.equal(desktop.source(), "system");
  desktop.actions.cancelPreview();
  desktop.flush();
  assert.equal(desktop.snapshot().preference, "naruto-dark-vivid");
  assert.equal(desktop.source(), "dark");
  assert.equal(desktop.api.readPref().mode, "dark");
  desktop.dispose();
});

test("family settings remain independent and reset affects only current family", () => {
  const { api } = load(null);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false, pal:false, wallpaper:"full" });
  api.writePref({ family:"gundam", mode:"light", style:"vivid", character:false, wallpaper:"soft" });
  assert.equal(api.appearanceFor("naruto").props, false);
  assert.equal(api.appearanceFor("gundam").props, true);
  assert.equal(api.appearanceFor("gundam").wallpaper, "soft");
  api.writePref({ family:"gundam", mode:"system", style:"vivid", ...api.appearanceFor(null) });
  assert.equal(api.appearanceFor("gundam").character, true);
  assert.equal(api.appearanceFor("gundam").wallpaper, "full");
  assert.equal(api.appearanceFor("naruto").pal, false);
});

test("corrupt and obsolete fields normalize without admitting nonexistent skins", () => {
  for (const value of ["{", "null", "[]", "42"]) assert.equal(load(value).api.readPref(), null);
  const { api } = load(JSON.stringify({ family:"naruto", mode:"garbage", style:"minimal", wallpaper:"broken" }));
  assert.equal(api.readPref().mode, "system");
  assert.equal(api.readPref().style, "vivid");
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.parseSkin("naruto-light"), null);
  assert.equal(api.resolveSkin(api.readPref()), "naruto-light-vivid");
  assert.equal(api.normalizeDocument({ version:2, selected:{family:"removed"}, families:{ naruto:{ props:false, header:"false" } } }).families.naruto.props, false);
});

test("v2 migration preserves the active mode and defaults other families to system", () => {
  const { api } = load(JSON.stringify({ version:2, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ wallpaper:"soft" }, gundam:{ props:false } } }));
  assert.equal(api.settingsFor("naruto").mode, "dark");
  assert.equal(api.settingsFor("gundam").mode, "system");
  assert.equal(api.settingsFor("naruto").wallpaper, "soft");
});

test("family settings auto-save across reload without changing the current theme", () => {
  const { api, raw } = load(null);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  api.writeSettings({ family:"gundam", mode:"light", wallpaper:"soft", props:false });
  const reloaded = load(raw()).api;
  assert.equal(reloaded.readPref().family, "naruto");
  assert.equal(reloaded.readPref().mode, "dark");
  assert.equal(reloaded.settingsFor("gundam").mode, "light");
  assert.equal(reloaded.settingsFor("gundam").wallpaper, "soft");
  assert.equal(reloaded.settingsFor("gundam").props, false);
  reloaded.writeSettings({ family:"naruto", mode:"light", wallpaper:"soft" });
  assert.equal(reloaded.readPref().family, "naruto");
  assert.equal(reloaded.readPref().mode, "light");
});

test("blocked localStorage retains preferences for the session", () => {
  const { api } = load(null, true);
  api.writePref({ family:"naruto", mode:"dark", style:"vivid", props:false });
  assert.equal(api.readPref().props, false);
});

test("minimal visibility defaults on, persists, and never changes the selected theme", () => {
  const { api, raw } = load(null);
  assert.equal(api.readDocument().library.showMinimal, true);
  assert.equal(api.normalizeDocument({ library:{ showMinimal:"false" } }).library.showMinimal, true);
  api.writePref({ family:"slate", mode:"dark", style:"minimal", props:false });
  api.writeLibrarySettings(false);
  api.writeSettings({ family:"naruto", mode:"light", wallpaper:"soft" });
  const reloaded = load(raw()).api;
  assert.equal(reloaded.readDocument().library.showMinimal, false);
  assert.equal(reloaded.resolveSkin(reloaded.readPref()), "slate-dark");
  assert.equal(reloaded.appearanceFor("slate").props, false);
  const blocked = load(null, true).api;
  blocked.writeLibrarySettings(false);
  assert.equal(blocked.readDocument().library.showMinimal, false);
});

test("search and category keep palette pairs together while minimal filtering only hides cards", () => {
  const { api } = load(null);
  const ids = (query, category, show) => Array.from(api.filterCatalog(query, category, show), (entry) => entry.id);
  assert.deepEqual(ids("", "all", true), ["naruto", "gundam", "slate"]);
  assert.deepEqual(ids(" 青灰 ", "anime", true), ["gundam", "slate"]);
  assert.deepEqual(ids("SLATE", "anime", false), ["gundam"]);
  assert.deepEqual(ids("", "game", false), []);
  assert.deepEqual(ids("unknown", "all", true), []);
});

test("fine controls start collapsed and toggling them preserves artwork preferences", () => {
  // Lightweight element/hook harness: exercise section callbacks without a DOM or browser.
  const state = [];
  let cursor = 0;
  const reactApi = {
    Fragment:"fragment",
    createElement(type, props, ...children) {
      if (typeof type === "function") return type({ ...props, children });
      return { type, props:props ?? {}, children:children.flat(Infinity).filter((entry) => entry != null) };
    },
    useState(initial) {
      const index = cursor++;
      if (!(index in state)) state[index] = typeof initial === "function" ? initial() : initial;
      return [state[index], (value) => { state[index] = typeof value === "function" ? value(state[index]) : value; }];
    },
    useId:() => `id-${cursor++}`,
    useRef:() => ({ current:null }),
    useEffect() {},
  };
  const { api } = load(null, false, reactApi);
  let saved;
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:"naruto", mode:"light" }), saveDraft:(draft) => { saved = draft; }, previewTheme() {}, applyDraft() {}, cancelPreview() {} };
  const render = () => { cursor = 0; return api.ThemeSection(props); };
  const find = (node, predicate) => typeof node === "object" ? (predicate(node) ? node : node.children?.map((child) => find(child, predicate)).find(Boolean)) : undefined;
  let tree = render();
  const disclosure = (node) => node.props.className === "dsh-theme-advanced-toggle";
  const character = (node) => node.props.role === "switch" && node.children[0]?.children[0] === "右下角角色";
  assert.equal(find(tree, disclosure).props["aria-expanded"], false);
  assert.equal(find(tree, character), undefined);
  assert.equal(saved, undefined);
  find(tree, disclosure).props.onClick();
  tree = render();
  assert.equal(find(tree, character).props["aria-checked"], true);
  find(tree, character).props.onClick();
  assert.equal(saved.character, false);
  tree = render();
  find(tree, disclosure).props.onClick();
  tree = render();
  assert.equal(find(tree, character), undefined);
  find(tree, disclosure).props.onClick();
  tree = render();
  assert.equal(find(tree, character).props["aria-checked"], false);
});

test("section applies same-skin decorations, restores default, and tears down", () => {
  const { api, document, nodes, raw } = load(null);
  const cleanups = [];
  const listeners = [];
  const registrations = [];
  let snapshot = { preference:"system", revision:0 };
  const ctx = {
    theme:{ register:() => () => {}, getTheme:() => snapshot, setTheme(preference) { if (preference === snapshot.preference) return; snapshot = { preference, revision:snapshot.revision+1 }; for (const listener of listeners) listener(snapshot); } },
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => cleanups.push(fn()),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{
      inject:(_, fn) => fn(),
      entriesOfSlot:() => [{ store:{} }],
      register:(meta, component) => { registrations.push({ meta, component }); },
    },
  };
  api.apply(ctx);
  const section = registrations.find(({ meta }) => meta.name === "settings.section");
  assert.ok(section);
  assert.equal(registrations.some(({ meta }) => meta.name === "settings.general.item"), false);
  const actions = section.meta.inject({ sync() {} });
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), catalog[0].decor.wallpaperSize);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), catalog[0].decor.wallpaperPosition);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), catalog[0].decor.heroTranslate);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), catalog[0].decor.heroMaxWidth);
  const saved = raw();
  actions.previewTheme({ family:"gundam", mode:"light", ...api.appearanceFor(null), props:false });
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), "");
  assert.equal(snapshot.preference, "gundam-light-vivid");
  assert.equal(raw(), saved);
  assert.equal(api.appearanceFor("gundam").props, true);
  actions.previewTheme({ family:null, mode:"dark" });
  assert.equal(snapshot.preference, "dsh-preview-dark");
  assert.equal(raw(), saved);
  actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-dark-vivid");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), catalog[0].decor.wallpaperSize);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), catalog[0].decor.wallpaperPosition);
  assert.equal(raw(), saved);
  actions.previewTheme({ family:"gundam", mode:"light", ...api.appearanceFor(null) });
  actions.applyDraft({ family:"gundam", mode:"light", ...api.appearanceFor(null) });
  actions.cancelPreview();
  assert.equal(snapshot.preference, "gundam-light-vivid");
  assert.equal(api.readPref().family, "gundam");
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  actions.saveDraft({ family:"gundam", mode:"system", wallpaper:"soft", props:false });
  assert.equal(api.readPref().family, "naruto");
  assert.equal(api.settingsFor("gundam").mode, "system");
  assert.equal(api.settingsFor("gundam").wallpaper, "soft");
  actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-dark-vivid");
  assert.equal(api.settingsFor("gundam").props, false);
  actions.saveDraft({ family:"naruto", mode:"light", wallpaper:"soft" });
  const restored = actions.cancelPreview();
  assert.equal(snapshot.preference, "naruto-light-vivid");
  assert.equal(restored.mode, "light");
  assert.equal(restored.wallpaper, "soft");
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  const revision = snapshot.revision;
  actions.applyDraft({ family:"naruto", mode:"dark", props:false, character:false, header:false, pal:false, wallpaper:"full" });
  assert.equal(snapshot.revision, revision);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), "");
  const override = [...nodes].find((node) => node.id === "dsh-theme-decoration-overrides");
  assert.match(override.textContent, /--dsw-pack-scene-props-secondary:none!important/);
  assert.match(override.textContent, /--dsw-pack-wallpaper:none!important/);
  assert.match(override.textContent, /--dsw-pack-panel:none!important/);
  actions.applyDraft({ family:null, mode:"light" });
  assert.equal(snapshot.preference, "light");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), "");
  assert.equal(api.appearanceFor("naruto").props, false);
  actions.applyDraft({ family:"naruto", mode:"dark", ...api.appearanceFor(null) });
  for (const cleanup of cleanups.reverse()) cleanup?.();
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-wallpaper-position"), "");
  assert.equal(nodes.size, 0);
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-translate"), "");
  assert.equal(document.body.style.getPropertyValue("--dsh-theme-hero-max-width"), "");
  assert.equal(document.body.dataset.dshThemesPal, undefined);
});
