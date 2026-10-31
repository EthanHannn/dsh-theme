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
    .replace("__CATALOG__", JSON.stringify(browser.catalog ?? catalog))
    .replace("    exports.CATALOG = CATALOG;", "    Object.assign(exports, { readPref, writePref, readDocument, appearanceFor, settingsFor, writeSettings, normalizeDocument, parseSkin, resolveSkin, filterCatalog, writeLibrarySettings, writeFavorites, toggleFavorite, writeRotation, orderRotationSelection, nextInPool, createRotationClock, artworkTokensFor, artworkDecorFor, artworkVariantsFor, ThemeSection, ThemeRotationPicker });");
  const window = { matchMedia:() => ({ matches:false, addEventListener() {}, removeEventListener() {} }), localStorage:{ getItem:() => raw, setItem:(_, value) => { if (unavailable) throw Error("blocked"); raw = value; } }, __ModuleLoader__:{ load:({ factory }) => { api = factory((id) => id === "react" ? reactApi : ({ defineStore:(value) => value })); } } };
  Object.assign(window, browser.window);
  Object.assign(document, browser.document);
  vm.runInNewContext(source, {
    window, document, MutationObserver:browser.MutationObserver, Date:browser.Date ?? Date,
    setTimeout:browser.setTimeout ?? (() => 1), clearTimeout:browser.clearTimeout ?? (() => {}),
  });
  return { api, document, nodes, raw:() => raw };
}

test("legacy clarity migrates to its family and survives default selection", () => {
  const { api, raw } = load(JSON.stringify({ family:"naruto", mode:"system", style:"vivid", wallpaper:"full" }));
  assert.equal(api.readPref().wallpaper, "full");
  assert.equal(api.appearanceFor("gundam").wallpaper, "full");
  api.writePref(api.readPref());
  assert.equal(JSON.parse(raw()).version, 5);
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

function variantCatalog() {
  const entries = structuredClone(catalog);
  entries[0].artworks = [{
    id:"rain", names:{ zh:"雨景", en:"Rain" },
    modes:{ light:{ "--dsw-pack-wallpaper":"url(rain-light.webp)", "--dsw-pack-paper":"red" }, dark:{ "--dsw-pack-wallpaper":"url(rain-dark.webp)", "--dsw-pack-wallpaper-ratio":"0.75" } },
    decor:{ wallpaperPosition:"right bottom", wallpaperSize:"360px" },
  }];
  return entries;
}

function fakeClock() {
  let time = 0;
  let serial = 0;
  const tasks = new Map();
  return {
    now:() => time,
    schedule:(fn, delay) => { const id = ++serial; tasks.set(id, { fn, due:time + delay }); return id; },
    cancel:(id) => tasks.delete(id),
    count:() => tasks.size,
    advance(milliseconds) {
      const until = time + milliseconds;
      let count = 0;
      while (true) {
        const next = [...tasks].filter(([, value]) => value.due <= until).sort((a, b) => a[1].due - b[1].due)[0];
        if (!next) break;
        assert.ok(++count < 500, "Timers must settle without a busy loop");
        tasks.delete(next[0]);
        time = next[1].due;
        next[1].fn();
      }
      time = until;
    },
  };
}

test("v3 migration adds opt-in rotation and scopes artwork to its own family", () => {
  const { api, raw } = load(JSON.stringify({ version:3, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark", props:false } } }), false, {}, { catalog:variantCatalog() });
  assert.equal(api.readPref().mode, "dark");
  assert.equal(api.readPref().props, false);
  assert.equal(api.readDocument().rotation.enabled, false);
  assert.equal(api.readPref().artwork.enabled, false);
  api.writeRotation({ enabled:true, pool:["naruto", "naruto", "missing", "gundam"], interval:1, order:"random" });
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["naruto", "gundam"]);
  api.writeSettings({ ...api.readPref(), artwork:{ enabled:true, variant:"rain", pool:["original", "rain", "gundam"], interval:5 } });
  const restored = load(raw(), false, {}, { catalog:variantCatalog() }).api;
  assert.equal(restored.readPref().artwork.variant, "rain");
  assert.deepEqual(Array.from(restored.readPref().artwork.pool), ["original", "rain"]);
  assert.equal(restored.readPref().artwork.enabled, true);
  assert.equal(restored.artworkTokensFor("naruto", "light", restored.readPref())["--dsw-pack-paper"], undefined);
  restored.writeSettings({ family:"gundam", artwork:{ variant:"rain", enabled:true, pool:["original", "rain"] } });
  assert.equal(restored.settingsFor("gundam").artwork.variant, "original");
  assert.equal(restored.settingsFor("gundam").artwork.enabled, false);
  assert.equal(restored.settingsFor("naruto").artwork.variant, "rain");
  restored.writeRotation({ enabled:true, pool:["naruto"], interval:0 });
  assert.equal(restored.readDocument().rotation.enabled, false);
  assert.equal(restored.readDocument().rotation.interval, 30);
});

test("rotation follows the pool order and random rotation never repeats the current item", () => {
  const { api } = load(null);
  assert.equal(api.nextInPool([], "a", "sequence"), null);
  assert.equal(api.nextInPool(["b", "a", "c"], "a", "sequence"), "c");
  assert.equal(api.nextInPool(["b", "a", "c"], "c", "sequence"), "b");
  assert.equal(api.nextInPool(["b", "a"], "outside", "sequence"), "b");
  for (const random of [0, 0.5, 0.999]) assert.notEqual(api.nextInPool(["b", "a", "c"], "a", "random", () => random), "a");
});

test("theme and artwork deadlines remain independent and a theme change supersedes simultaneous artwork", () => {
  const { api } = load(null);
  const time = fakeClock();
  const doc = { selected:{ family:"naruto" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:5, order:"sequence" }, families:{ naruto:{ artwork:{ enabled:true, pool:["original", "rain"], interval:1, order:"sequence" } } } };
  let themes = 0;
  let pictures = 0;
  let blocked = false;
  const clock = api.createRotationClock({ read:() => doc, onTheme:() => { themes++; doc.selected.family = "gundam"; }, onArtwork:() => { pictures++; clock.sync(); }, blocked:() => blocked, now:time.now, schedule:time.schedule, cancel:time.cancel });
  time.advance(240000);
  assert.equal(pictures, 4);
  assert.equal(themes, 0);
  blocked = true;
  time.advance(60000);
  assert.equal(themes, 0);
  blocked = false;
  time.advance(5000);
  assert.equal(themes, 1);
  assert.equal(pictures, 4);
  clock.destroy();
  assert.equal(time.count(), 0);
});

function rotationRuntime(saved) {
  const time = fakeClock();
  const events = new Map();
  let streaming = false;
  const harness = load(JSON.stringify(saved), false, {}, {
    catalog:variantCatalog(), Date:class extends Date { static now() { return time.now(); } },
    setTimeout:time.schedule, clearTimeout:time.cancel,
    document:{ hidden:false, addEventListener:(name, fn) => events.set(name, fn), removeEventListener:(name) => events.delete(name), querySelector:() => streaming ? {} : null },
  });
  const listeners = new Set();
  const cleanups = [];
  let section;
  let snapshot = { preference:"system", revision:0 };
  const ctx = {
    theme:{ register:() => () => {}, getTheme:() => snapshot, setTheme(preference) {
      if (preference === snapshot.preference) return;
      snapshot = { preference, revision:snapshot.revision + 1 };
      for (const listener of listeners) listener(snapshot);
    } },
    on:(_, fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    effect:(fn) => cleanups.push(fn()), locale:{ register:() => () => {}, getLocale:() => ({ active:"zh" }) },
    slots:{ inject:(_, fn) => fn(), entriesOfSlot:() => [{ store:{} }], register:(meta) => { if (meta.name === "settings.section") section = meta; } },
  };
  harness.api.apply(ctx);
  time.advance(0);
  return { ...harness, time, events, actions:section.inject({ sync() {} }), snapshot:() => snapshot, streaming:(value) => { streaming = value; }, dispose:() => { for (const fn of cleanups.reverse()) fn?.(); } };
}

test("runtime rotates themes with the current mode, keeps per-family artwork, and pauses during appearance editing", () => {
  const runtime = rotationRuntime({ version:4, selected:{ family:"naruto", mode:"system", style:"vivid" }, rotation:{ enabled:true, pool:["naruto", "gundam"], interval:1 }, families:{ naruto:{ mode:"system", artwork:{ variant:"rain" } }, gundam:{ mode:"dark", props:false } } });
  runtime.actions.setEditing(true);
  runtime.time.advance(120000);
  assert.equal(runtime.api.readPref().family, "naruto");
  runtime.actions.setEditing(false);
  runtime.time.advance(59999);
  assert.equal(runtime.api.readPref().family, "naruto");
  runtime.time.advance(1);
  assert.equal(runtime.snapshot().preference, "gundam-light-vivid");
  assert.equal(runtime.api.readPref().mode, "system");
  assert.equal(runtime.api.readPref().props, false);
  runtime.actions.nextTheme();
  assert.equal(runtime.api.readPref().family, "naruto");
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  runtime.actions.applyDraft({ family:null, mode:"dark" });
  runtime.time.advance(120000);
  assert.equal(runtime.api.readPref(), null);
  runtime.dispose();
  assert.equal(runtime.time.count(), 0);
  assert.equal(runtime.events.size, 0);
});

test("runtime switches artwork without changing skin, cleans overrides, and respects streaming, input, visibility, and preview", () => {
  const runtime = rotationRuntime({ version:4, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark", artwork:{ enabled:true, pool:["original", "rain"], interval:1 } } } });
  const initial = runtime.snapshot();
  runtime.streaming(true);
  runtime.time.advance(60000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  runtime.streaming(false);
  runtime.events.get("input")();
  runtime.time.advance(10000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  runtime.time.advance(5000);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  assert.equal(runtime.snapshot(), initial);
  const override = [...runtime.nodes].find((node) => node.id === "dsh-theme-decoration-overrides");
  assert.match(override.textContent, /rain-dark.webp/);
  assert.doesNotMatch(override.textContent, /--dsw-pack-paper:/);
  assert.equal(runtime.document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), "360px");
  runtime.actions.previewTheme({ family:"gundam", mode:"light" });
  runtime.time.advance(60000);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  runtime.actions.cancelPreview();
  runtime.document.hidden = true;
  runtime.events.get("visibilitychange")();
  runtime.time.advance(120000);
  assert.equal(runtime.api.readPref().artwork.variant, "rain");
  runtime.document.hidden = false;
  runtime.events.get("visibilitychange")();
  runtime.time.advance(60000);
  assert.equal(runtime.api.readPref().artwork.variant, "original");
  assert.equal(override.isConnected, false);
  assert.equal(runtime.document.body.style.getPropertyValue("--dsh-theme-wallpaper-size"), catalog[0].decor.wallpaperSize);
  runtime.dispose();
  runtime.time.advance(0);
  assert.equal(runtime.time.count(), 0);
});

test("minimal visibility defaults on, persists, and never changes the selected theme", () => {
  const { api, raw } = load(null);
  assert.equal(api.readDocument().library.showMinimal, true);
  assert.equal(api.normalizeDocument({ library:{ showMinimal:"false" } }).library.showMinimal, true);
  api.writePref({ family:"slate", mode:"dark", style:"minimal", props:false });
  api.writeLibrarySettings({ showMinimal:false });
  api.writeSettings({ family:"naruto", mode:"light", wallpaper:"soft" });
  const reloaded = load(raw()).api;
  assert.equal(reloaded.readDocument().library.showMinimal, false);
  assert.equal(reloaded.resolveSkin(reloaded.readPref()), "slate-dark");
  assert.equal(reloaded.appearanceFor("slate").props, false);
  const blocked = load(null, true).api;
  blocked.writeLibrarySettings({ showMinimal:false });
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

function elementRenderer() {
  // 用轻量元素树驱动真实回调；浏览器检查负责布局、焦点和原生事件。
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
    useRef(initial) {
      const index = cursor++;
      if (!(index in state)) state[index] = { current:initial };
      return state[index];
    },
    useEffect() {},
  };
  const all = (node, predicate) => node && typeof node === "object" ? [...(predicate(node) ? [node] : []), ...(node.children ?? []).flatMap((child) => all(child, predicate))] : [];
  return { reactApi, render:(component, props) => { cursor = 0; return component(props); }, all, find:(node, predicate) => all(node, predicate)[0] };
}

test("v4 migration preserves appearance, artwork, and rotation while adding an independent empty library", () => {
  const saved = { version:4, selected:{ family:"naruto", mode:"dark", style:"vivid" }, library:{ showMinimal:false }, families:{ naruto:{ mode:"dark", props:false, artwork:{ variant:"rain", enabled:true, pool:["original", "rain"], interval:5 } } }, rotation:{ enabled:true, pool:["gundam", "naruto"], interval:60, order:"random" } };
  const { api, raw } = load(JSON.stringify(saved), false, {}, { catalog:variantCatalog() });
  assert.equal(api.readDocument().version, 5);
  assert.equal(api.readDocument().favorites.length, 0);
  assert.equal(api.readDocument().library.tab, "all");
  api.writeLibrarySettings({ tab:"favorites" });
  api.writeLibrarySettings({ showMinimal:true });
  const restored = load(raw(), false, {}, { catalog:variantCatalog() }).api;
  assert.equal(restored.readDocument().library.tab, "favorites");
  assert.equal(restored.readDocument().library.showMinimal, true);
  assert.equal(restored.readPref().family, "naruto");
  assert.equal(restored.readPref().mode, "dark");
  assert.equal(restored.readPref().props, false);
  assert.equal(restored.readPref().artwork.variant, "rain");
  assert.equal(restored.readPref().artwork.enabled, true);
  assert.deepEqual(Array.from(restored.readDocument().rotation.pool), ["gundam", "naruto"]);
  assert.equal(restored.readDocument().rotation.enabled, true);
  assert.equal(restored.readDocument().rotation.interval, 60);
});

test("favorites normalize stable IDs, survive unrelated saves, and never constrain rotation", () => {
  const { api, raw } = load(null);
  api.writePref({ family:"naruto", mode:"system", style:"vivid", props:false });
  api.writeFavorites(["slate", "naruto", "slate", "missing", "default", null, 12]);
  api.writeRotation({ enabled:true, pool:["gundam", "naruto"], interval:5 });
  api.toggleFavorite("naruto");
  assert.deepEqual(Array.from(api.readDocument().favorites), ["slate"]);
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["gundam", "naruto"]);
  api.toggleFavorite("gundam");
  api.writeLibrarySettings({ tab:"favorites" });
  api.writeSettings({ family:"gundam", mode:"light", wallpaper:"soft" });
  api.writePref(null);
  const restored = load(raw()).api;
  assert.deepEqual(Array.from(restored.readDocument().favorites), ["slate", "gundam"]);
  assert.deepEqual(Array.from(restored.readDocument().rotation.pool), ["gundam", "naruto"]);
  assert.equal(restored.readDocument().rotation.enabled, true);
  assert.equal(restored.readPref(), null);
  assert.equal(restored.appearanceFor("naruto").props, false);
  assert.equal(restored.readDocument().library.tab, "favorites");
  assert.equal(restored.normalizeDocument({ library:{ tab:"unknown" }, favorites:"naruto" }).library.tab, "all");
  const blocked = load(null, true).api;
  blocked.toggleFavorite("naruto");
  assert.deepEqual(Array.from(blocked.readDocument().favorites), ["naruto"]);
});

test("favorite and selected scopes preserve exact entries and caller order without leaking palette pairs", () => {
  const { api } = load(null);
  const ids = (query, showMinimal, scope) => Array.from(api.filterCatalog(query, "all", showMinimal, scope), (entry) => entry.id);
  assert.deepEqual(ids("", true, ["slate"]), ["slate"]);
  assert.deepEqual(ids("gundam", true, ["slate"]), ["slate"]);
  assert.deepEqual(ids("", false, ["slate"]), []);
  assert.deepEqual(ids("", true, ["slate", "naruto"]), ["slate", "naruto"]);
  assert.deepEqual(ids("", true, []), []);
  assert.deepEqual(Array.from(api.orderRotationSelection(["gundam", "naruto"], ["naruto", "slate", "gundam", "slate", "missing"])), ["gundam", "naruto", "slate"]);
});

test("the independent favorites tab supports preview and apply without configuring rotation", () => {
  const renderer = elementRenderer();
  const { api } = load(null, false, renderer.reactApi);
  let previewed;
  let applied;
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:"naruto", mode:"light" }), saveDraft() {}, previewTheme:(draft) => { previewed = draft; }, applyDraft:(draft) => { applied = draft; }, cancelPreview() {} };
  const render = () => renderer.render(api.ThemeSection, props);
  const tab = (tree, id) => renderer.find(tree, (node) => node.props.role === "tab" && node.props.id.endsWith(`-${id}`));
  let tree = render();
  tab(tree, "favorites").props.onClick();
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.className === "dsh-theme-card").length, 0);
  assert.ok(renderer.find(tree, (node) => node.type === "button" && node.children[0] === "去全部主题看看"));
  tab(tree, "all").props.onClick();
  tree = render();
  renderer.find(tree, (node) => node.props.className === "dsh-theme-favorite").props.onClick({});
  assert.equal(previewed, undefined);
  assert.equal(applied, undefined);
  tab(tree, "favorites").props.onClick();
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.className === "dsh-theme-card").length, 1);
  renderer.find(tree, (node) => node.props.className === "dsh-theme-card-preview").props.onClick();
  assert.equal(previewed.family, "naruto");
  tree = render();
  renderer.find(tree, (node) => node.props.className === "dsh-theme-apply").props.onClick();
  assert.equal(applied.family, "naruto");
  assert.equal(api.readDocument().rotation.pool.length, 0);
  assert.equal(api.readDocument().rotation.enabled, false);
  renderer.find(tree, (node) => node.props.type === "search").props.onChange({ target:{ value:"naruto" } });
  tree = render();
  tab(tree, "all").props.onClick();
  tree = render();
  assert.equal(renderer.find(tree, (node) => node.props.type === "search").props.value, "");
  tab(tree, "favorites").props.onClick();
  tree = render();
  assert.equal(renderer.find(tree, (node) => node.props.type === "search").props.value, "naruto");
});

test("rotation picker mixes favorites and other themes, keeps hidden selections, and saves only on completion", () => {
  const renderer = elementRenderer();
  const { api } = load(null, false, renderer.reactApi);
  api.writeFavorites(["naruto"]);
  api.writeRotation({ pool:["gundam"], enabled:false });
  let tab = "all";
  let cancelled = false;
  const props = { rotation:api.readDocument().rotation, get tab() { return tab; }, onTabChange:(value) => { tab = value; }, onCancel:() => { cancelled = true; }, onSave:(pool) => api.writeRotation({ ...api.readDocument().rotation, pool }), text:(zh) => zh, t:(key) => key };
  const render = () => renderer.render(api.ThemeRotationPicker, props);
  const checkbox = (tree, label) => renderer.find(tree, (node) => node.props.type === "checkbox" && node.props["aria-label"] === `轮换 ${label}`);
  let tree = render();
  checkbox(tree, "family.naruto").props.onChange({ target:{ checked:true } });
  tab = "favorites";
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.type === "checkbox").length, 1);
  assert.equal(checkbox(tree, "family.naruto").props.checked, true);
  tab = "all";
  tree = render();
  checkbox(tree, "family.gundam · style.minimal").props.onChange({ target:{ checked:true } });
  checkbox(tree, "family.gundam").props.onChange({ target:{ checked:false } });
  tree = render();
  checkbox(tree, "family.gundam").props.onChange({ target:{ checked:true } });
  tree = render();
  renderer.find(tree, (node) => node.props.type === "search").props.onChange({ target:{ value:"naruto" } });
  tree = render();
  assert.equal(renderer.all(tree, (node) => node.props.type === "checkbox").length, 1);
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["gundam"]);
  renderer.find(tree, (node) => node.type === "button" && node.children[0] === "完成选择").props.onClick();
  assert.deepEqual(Array.from(api.readDocument().rotation.pool), ["gundam", "naruto", "slate"]);
  assert.deepEqual(Array.from(api.readDocument().favorites), ["naruto"]);
  const before = JSON.stringify(api.readDocument());
  checkbox(tree, "family.naruto").props.onChange({ target:{ checked:false } });
  tree = render();
  renderer.find(tree, (node) => node.type === "button" && node.children[0] === "取消").props.onClick();
  assert.equal(cancelled, true);
  assert.equal(JSON.stringify(api.readDocument()), before);
});

test("section follows the saved selection when preference events precede the host store update", () => {
  const renderer = elementRenderer();
  const effects = [];
  renderer.reactApi.useEffect = (effect, dependencies) => { if (dependencies?.length === 2) effects.push(effect); };
  const { api } = load(null, false, renderer.reactApi);
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:null, mode:"light" }), previewTheme() {}, cancelPreview() {} };
  renderer.render(api.ThemeSection, props);
  const cleanups = effects.map((effect) => effect());
  api.writePref({ family:"naruto", mode:"dark", style:"vivid" });
  const tree = renderer.render(api.ThemeSection, props);
  const selected = renderer.find(tree, (node) => node.props.className === "dsh-theme-card" && node.props["data-selected"]);
  assert.equal(selected.props["data-family"], "naruto");
  for (const cleanup of cleanups) cleanup?.();
});

test("fine controls start collapsed and toggling them preserves artwork preferences", () => {
  const renderer = elementRenderer();
  const { api } = load(null, false, renderer.reactApi);
  let saved;
  const props = { t:(key) => key === "theme.title" ? "主题" : key, useStore:(pick) => pick({ family:"naruto", mode:"light" }), saveDraft:(draft) => { saved = draft; }, previewTheme() {}, applyDraft() {}, cancelPreview() {} };
  const render = () => renderer.render(api.ThemeSection, props);
  const { find } = renderer;
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

/**
 * The ThemeService adopts its durable Host preference and republishes
 * "light"/"dark"/"system" whenever the settings document is refreshed; a model
 * switch recomposes the profile and resubmits it. That transient used to look
 * like another plugin's takeover and erased the stored skin permanently, and
 * before the echo rule landed the pack also stopped taking the preference
 * back once its fixed boot window closed.
 */
test("a built-in preference never erases the stored skin preference", () => {
  let raw = JSON.stringify({ version:3, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark" } } });
  const pending = [];
  const { api } = load(null, false, {}, {
    window:{ localStorage:{ getItem:() => raw, setItem:(_, value) => { raw = value; } } },
    setTimeout:(fn) => { pending.push(fn); return pending.length; },
    clearTimeout() {},
  });
  const listeners = [];
  let snapshot = { preference:"naruto-dark-vivid", revision:0 };
  const theme = { register:() => () => {}, getTheme:() => snapshot, setTheme(preference) {
    if (preference === snapshot.preference) return;
    snapshot = { preference, revision:snapshot.revision+1 };
    for (const listener of listeners) listener(snapshot);
  } };
  const ctx = {
    theme,
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => fn(),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"en" }) },
    slots:{ inject:(_, fn) => fn(), register() {}, entriesOfSlot:() => [{ store:{} }] },
  };
  // Let every deferred re-assert run, as it would on the real task queue.
  const flush = () => {
    while (pending.length > 0) for (const fn of pending.splice(0)) fn();
  };
  api.apply(ctx);
  flush();
  const before = raw;
  assert.equal(api.readPref().family, "naruto");
  assert.equal(snapshot.preference, "naruto-dark-vivid");

  // The Host echo of its durable built-in preference lands long after the
  // plugin's boot window: it must neither erase the skin nor win.
  snapshot = { preference:"system", revision:snapshot.revision+1 };
  for (const listener of listeners) listener(snapshot);
  flush();
  assert.equal(api.readPref().family, "naruto");
  assert.equal(raw, before);
  assert.equal(snapshot.preference, "naruto-dark-vivid");

  // A real third-party takeover still drops this plugin's preference.
  snapshot = { preference:"someone-elses-theme", revision:snapshot.revision+1 };
  for (const listener of listeners) listener(snapshot);
  flush();
  assert.equal(api.readPref(), null);
});

test("picking the default appearance hands the preference back", () => {
  let raw = JSON.stringify({ version:3, selected:{ family:"naruto", mode:"dark", style:"vivid" }, families:{ naruto:{ mode:"dark" } } });
  const pending = [];
  const { api } = load(null, false, {}, {
    window:{ localStorage:{ getItem:() => raw, setItem:(_, value) => { raw = value; } } },
    setTimeout:(fn) => { pending.push(fn); return pending.length; },
    clearTimeout() {},
  });
  const listeners = [];
  let snapshot = { preference:"naruto-dark-vivid", revision:0 };
  const theme = { register:() => () => {}, getTheme:() => snapshot, setTheme(preference) {
    if (preference === snapshot.preference) return;
    snapshot = { preference, revision:snapshot.revision+1 };
    for (const listener of listeners) listener(snapshot);
  } };
  const registrations = [];
  const ctx = {
    theme,
    on:(_, callback) => { listeners.push(callback); return () => {}; },
    effect:(fn) => fn(),
    locale:{ register:() => () => {}, getLocale:() => ({ active:"en" }) },
    slots:{
      inject:(_, fn) => fn(),
      register:(meta) => { registrations.push(meta); },
      entriesOfSlot:() => [{ store:{} }],
    },
  };
  const flush = () => {
    while (pending.length > 0) for (const fn of pending.splice(0)) fn();
  };
  api.apply(ctx);
  flush();
  const actions = registrations.find(({ name }) => name === "settings.section").inject({ sync() {} });
  // The user picks the built-in default: no family, so no stored skin remains.
  actions.applyDraft({ family:null, mode:"light" });
  flush();
  assert.equal(api.readPref(), null);
  assert.equal(snapshot.preference, "light");
  // A later Host echo must not resurrect anything.
  snapshot = { preference:"system", revision:snapshot.revision+1 };
  for (const listener of listeners) listener(snapshot);
  flush();
  assert.equal(api.readPref(), null);
  assert.equal(snapshot.preference, "system");
});
