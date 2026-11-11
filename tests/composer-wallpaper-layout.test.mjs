import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const template = readFileSync(new URL("../lib/client.tpl.js", import.meta.url), "utf8");
const start = template.indexOf("    function createComposerWallpaperLayout(selector) {");
const end = template.indexOf("    /** 注册主题、恢复偏好，并挂载外观设置。 */", start);
const source = template.slice(start, end) + "\ncreateComposerWallpaperLayout;";

function eventTarget() {
  const listeners = new Map();
  const keyFor = (type, capture = false) => `${type}:${Boolean(capture)}`;
  return {
    addEventListener(type, listener, capture) {
      const key = keyFor(type, capture);
      if (!listeners.has(key)) listeners.set(key, new Set());
      listeners.get(key).add(listener);
    },
    removeEventListener(type, listener, capture) {
      listeners.get(keyFor(type, capture))?.delete(listener);
    },
    emit(type, capture = false) {
      for (const listener of [...listeners.get(keyFor(type, capture)) ?? []]) listener();
    },
    count(type, capture = false) {
      return listeners.get(keyFor(type, capture))?.size ?? 0;
    },
  };
}

function harness({ wide = true } = {}) {
  const frames = new Map();
  const resizeObservers = [];
  const mutationObservers = [];
  let frameId = 0;
  let matches = [];
  const node = (name, parentElement = null, rect = { right: 1280, bottom: 800 }) => {
    const values = new Map();
    return {
      name,
      parentElement,
      rect,
      style: {
        getPropertyValue: (key) => values.get(key) ?? "",
        setProperty(key, value) { values.set(key, value); },
        removeProperty(key) { values.delete(key); },
      },
      getBoundingClientRect() { return { ...this.rect }; },
    };
  };
  const body = node("body");
  const veil = {
    ...node("veil", body, { right: 1280, bottom: 800 }),
    style: {},
  };
  const computed = {
    display: "block",
    backgroundImage: 'url("wallpaper.webp")',
    backgroundPositionX: "calc(100% - 24px)",
    backgroundPositionY: "calc(100% - 20px)",
    backgroundSize: "420px auto",
  };
  const media = { ...eventTarget(), matches: wide };
  const window = {
    ...eventTarget(),
    matchMedia(query) {
      assert.equal(query, "(min-width: 901px)");
      return media;
    },
    requestAnimationFrame(callback) { const id = ++frameId; frames.set(id, callback); return id; },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  const document = {
    ...eventTarget(),
    body,
    getElementById(id) { assert.equal(id, "dsh-themes-veil"); return veil; },
    querySelectorAll(selector) { assert.equal(selector, ".active-composer"); return matches; },
  };
  class ResizeObserver {
    constructor(callback) { this.callback = callback; this.targets = new Set(); resizeObservers.push(this); }
    observe(target) { this.targets.add(target); }
    unobserve(target) { this.targets.delete(target); }
    disconnect() { this.targets.clear(); }
  }
  class MutationObserver {
    constructor(callback) { this.callback = callback; this.target = null; mutationObservers.push(this); }
    observe(target, options) { this.target = target; this.options = options; }
    disconnect() { this.target = null; }
  }
  const factory = vm.runInNewContext(source, {
    window,
    document,
    getComputedStyle: (element) => {
      assert.equal(element, veil);
      return computed;
    },
    ResizeObserver,
    MutationObserver,
  });
  const layout = factory(".active-composer");
  return {
    layout, node, body, veil, computed, window, document, media, frames,
    resizeObservers, mutationObservers,
    setMatches(value) { matches = value; },
    flush() {
      const pending = [...frames.values()];
      frames.clear();
      for (const callback of pending) callback();
    },
    setWide(value) { media.matches = value; media.emit("change"); },
  };
}

test("composer wallpaper copies the veil geometry into seat-local coordinates", () => {
  const h = harness();
  const parent = h.node("parent", h.body);
  const seat = h.node("seat", parent, { right: 1273, bottom: 800 });
  const second = h.node("second", parent, { right: 1200, bottom: 764 });
  h.setMatches([seat, second]);
  h.layout.sync(true);
  assert.equal(h.frames.size, 1);
  h.flush();
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-image"), "var(--dsw-pack-wallpaper)");
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-position"), "right 17px bottom 20px");
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-size"), "420px auto");
  assert.equal(second.style.getPropertyValue("--dsh-theme-composer-wallpaper-position"), "right -56px bottom -16px");
  h.layout.destroy();
});

test("a hidden veil clears the seat copy instead of leaving a stale backdrop", () => {
  const h = harness();
  const seat = h.node("seat", h.body, { right: 1273, bottom: 800 });
  h.setMatches([seat]);
  h.layout.sync(true);
  h.flush();
  assert.notEqual(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-size"), "");
  h.computed.display = "none";
  h.window.emit("resize");
  h.flush();
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-image"), "");
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-position"), "");
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-size"), "");
  h.layout.destroy();
});

test("the shipped composer copy is measured, never a fixed background", () => {
  const bundle = readFileSync(new URL("../lib/client.js", import.meta.url), "utf8");
  assert.ok(!bundle.includes("no-repeat fixed var(--dsh-theme-compact-position"));
  assert.ok(bundle.includes("--dsh-theme-composer-wallpaper-position"));
  assert.ok(bundle.includes("function createComposerWallpaperLayout"));
});

test("narrow windows and disabling the layout release observations and seat variables", () => {
  const h = harness({ wide: false });
  const seat = h.node("seat", h.body, { right: 1273, bottom: 800 });
  h.setMatches([seat]);
  h.layout.sync(true);
  assert.equal(h.frames.size, 0);
  h.setWide(true);
  assert.equal(h.frames.size, 1);
  h.flush();
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-position"), "right 17px bottom 20px");
  h.setWide(false);
  assert.equal(seat.style.getPropertyValue("--dsh-theme-composer-wallpaper-position"), "");
  assert.equal(h.window.count("resize"), 0);
  assert.equal(h.document.count("scroll", true), 0);
  assert.equal(h.resizeObservers[0].targets.size, 0);
  h.layout.destroy();
  assert.equal(h.media.count("change"), 0);
});
