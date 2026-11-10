/* @ds-bundle: {"format":4,"namespace":"Pane","components":[{"name":"PaneFrame"},{"name":"Slide"},{"name":"TitleSlide"},{"name":"SectionSlide"},{"name":"ContentSlide"},{"name":"FigureSlide"},{"name":"QuoteSlide"},{"name":"CodeBlock"},{"name":"Logo"},{"name":"Button"},{"name":"TextField"},{"name":"Select"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Tabs"},{"name":"Alert"},{"name":"Card"}]} */
var Pane = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../src/index.jsx
  var index_exports = {};
  __export(index_exports, {
    Alert: () => Alert,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    CodeBlock: () => CodeBlock,
    ContentSlide: () => ContentSlide,
    FigureSlide: () => FigureSlide,
    Logo: () => Logo,
    PaneFrame: () => PaneFrame,
    QuoteSlide: () => QuoteSlide,
    Radio: () => Radio,
    SectionSlide: () => SectionSlide,
    Select: () => Select,
    Slide: () => Slide,
    Tabs: () => Tabs,
    TextField: () => TextField,
    TitleSlide: () => TitleSlide
  });

  // ../src/logo.js
  var WORDMARK_D = "M126.81 13.60V78.00H142.36V13.60ZM136.56 26.39H149.16Q153.86 26.39 156.52 28.50Q159.19 30.62 159.19 34.67Q159.19 38.62 156.52 40.74Q153.86 42.86 149.16 42.86H136.56V55.64H149.16Q157.35 55.64 162.92 53.11Q168.48 50.58 171.34 45.85Q174.19 41.11 174.19 34.67Q174.19 28.04 171.34 23.35Q168.48 18.66 162.92 16.13Q157.35 13.60 149.16 13.60H136.56Z M193.51 64.75Q193.51 63.19 194.24 62.13Q194.98 61.07 196.45 60.52Q197.92 59.97 200.41 59.97Q203.63 59.97 206.53 60.84Q209.42 61.72 211.63 63.37V57.21Q210.53 56.01 208.32 54.91Q206.11 53.80 203.03 53.07Q199.95 52.33 196.08 52.33Q188.17 52.33 183.85 55.87Q179.52 59.42 179.52 65.49Q179.52 69.81 181.59 72.85Q183.66 75.88 187.11 77.40Q190.56 78.92 194.61 78.92Q198.66 78.92 202.16 77.49Q205.65 76.07 207.86 73.26Q210.07 70.46 210.07 66.41L208.60 60.89Q208.60 63.83 207.31 65.86Q206.02 67.88 204.00 68.89Q201.97 69.90 199.58 69.90Q197.92 69.90 196.54 69.31Q195.16 68.71 194.34 67.56Q193.51 66.41 193.51 64.75ZM187.34 48.65Q188.26 48.10 190.29 47.23Q192.31 46.35 195.03 45.71Q197.74 45.06 200.59 45.06Q202.52 45.06 204.04 45.43Q205.56 45.80 206.57 46.63Q207.58 47.46 208.09 48.61Q208.60 49.76 208.60 51.32V78.00H221.94V48.19Q221.94 43.78 219.36 40.74Q216.78 37.70 212.37 36.09Q207.95 34.48 202.34 34.48Q196.36 34.48 191.30 36.05Q186.24 37.61 182.65 39.36Z M259.84 52.24V78.00H274.28V50.77Q274.28 43.13 270.70 38.90Q267.11 34.67 259.20 34.67Q254.50 34.67 251.33 36.60Q248.16 38.53 246.32 42.03V35.68H232.33V78.00H246.32V52.24Q246.32 49.76 247.24 48.01Q248.16 46.26 249.81 45.34Q251.47 44.42 253.68 44.42Q256.99 44.42 258.41 46.44Q259.84 48.47 259.84 52.24Z M306.76 78.92Q314.86 78.92 320.51 75.79Q326.17 72.66 329.48 66.41L317.06 63.37Q315.50 66.13 312.88 67.51Q310.26 68.89 306.58 68.89Q303.36 68.89 301.15 67.47Q298.94 66.04 297.84 63.28Q296.73 60.52 296.73 56.66Q296.82 52.42 297.88 49.62Q298.94 46.81 301.06 45.43Q303.17 44.05 306.30 44.05Q308.78 44.05 310.62 45.16Q312.46 46.26 313.48 48.28Q314.49 50.31 314.49 53.07Q314.49 53.71 314.17 54.68Q313.84 55.64 313.38 56.29L316.70 52.06H290.57V59.78H329.21Q329.39 59.14 329.39 58.17Q329.39 57.21 329.39 56.20Q329.39 49.39 326.72 44.60Q324.06 39.82 319.00 37.29Q313.94 34.76 306.58 34.76Q299.22 34.76 293.83 37.43Q288.45 40.10 285.60 45.06Q282.75 50.03 282.75 56.84Q282.75 63.56 285.69 68.52Q288.64 73.49 294.02 76.21Q299.40 78.92 306.76 78.92Z";

  // ../src/index.jsx
  var React = window.React;
  var h = React.createElement;
  var { useState, useRef, useLayoutEffect, useId } = React;
  var cx = (...a) => a.filter(Boolean).join(" ");
  var lines = (v) => Array.isArray(v) ? v : String(v).split("|");
  var Icon = ({ d, size = 20 }) => h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "square", strokeLinejoin: "miter", "aria-hidden": true, focusable: "false" }, h("path", { d }));
  var ICONS = {
    info: "M12 11v6M12 7v.01M3 3h18v18H3z",
    success: "M6 12.5l4 4 8-9M3 3h18v18H3z",
    warning: "M12 4l9 16H3zM12 10v4M12 17v.01",
    danger: "M7 7l10 10M17 7L7 17M3 3h18v18H3z",
    chevron: "M6 9l6 6 6-6"
  };
  function Logo({ variant = "lockup", height = 48, title = "Pane", className }) {
    const mark = [
      h("rect", { key: "a", x: 3, y: 3, width: 58, height: 58, className: "pn-logo__back" }),
      h("rect", { key: "b", x: 35, y: 35, width: 58, height: 58, className: "pn-logo__front" })
    ];
    const lock = variant === "lockup";
    const w = lock ? 336 : 96;
    return h(
      "svg",
      { className: cx("pn-logo", className), viewBox: `0 0 ${w} 96`, height, width: height * w / 96, role: "img", "aria-label": title },
      mark,
      lock && h("path", { d: WORDMARK_D, className: "pn-logo__word" })
    );
  }
  var INDENT = [0, 0.9, 0.35, 1.2];
  function PaneFrame({ lines: l, children, tone = "plum", size = 96, as = "h1", stagger = true, className, style }) {
    const ls = lines(l ?? children);
    return h(
      as,
      { className: cx("pn-frame", `pn-frame--${tone}`, className), style: { fontSize: size, ...style } },
      ls.map((t, i) => h("span", { key: i, className: "pn-frame__line", style: { marginLeft: stagger ? `${INDENT[i % 4]}em` : 0 } }, t, " "))
    );
  }
  function Slide({ tone = "paper", number, footer, label = "Slide", children, className }) {
    const wrap = useRef(null);
    const [k, setK] = useState(0.3);
    useLayoutEffect(() => {
      const el = wrap.current;
      if (!el) return;
      const fit = () => setK(el.clientWidth / 1920);
      fit();
      if (typeof ResizeObserver === "undefined") return;
      const ro = new ResizeObserver(fit);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    return h(
      "div",
      { className: "pn-slide-wrap", ref: wrap, role: "group", "aria-roledescription": "slide", "aria-label": label },
      h(
        "section",
        { className: cx("pn-slide", `pn-slide--${tone}`, className), style: { transform: `scale(${k})` } },
        children,
        (footer || number != null) && h(
          "footer",
          { className: "pn-slide__foot" },
          h("span", null, footer),
          number != null && h("span", null, number)
        )
      )
    );
  }
  function TitleSlide({ title, subtitle, meta, tone = "paper", ...rest }) {
    return h(
      Slide,
      { tone, label: "Title slide", ...rest },
      h(
        "div",
        { className: "pn-title" },
        h(Logo, { height: 72 }),
        h(
          "div",
          { className: "pn-title__main" },
          h(PaneFrame, { lines: title, size: 144, tone: tone === "ink" ? "plum" : "plum" }),
          subtitle && h("p", { className: "pn-title__sub" }, subtitle)
        ),
        meta && h("p", { className: "pn-caption" }, meta)
      ),
      h(
        "div",
        { className: "pn-title__art", "aria-hidden": true },
        h("i", { className: "pn-pane pn-pane--teal" }),
        h("i", { className: "pn-pane pn-pane--pink" }),
        h("i", { className: "pn-pane pn-pane--plum" }),
        h("i", { className: "pn-dots" })
      )
    );
  }
  function SectionSlide({ number, title, tone = "teal", ...rest }) {
    return h(
      Slide,
      { tone, label: "Section slide", ...rest },
      h(
        "div",
        { className: "pn-section" },
        number != null && h("p", { className: "pn-bignum", "aria-hidden": true }, number),
        h(PaneFrame, { lines: title, tone: tone === "ink" ? "plum" : tone === "plum" ? "ink" : "paper", size: 120 })
      ),
      h("i", { className: "pn-dots pn-dots--corner", "aria-hidden": true })
    );
  }
  function ContentSlide({ title, children, aside, asideTitle, tone = "paper", ...rest }) {
    return h(
      Slide,
      { tone, label: "Content slide", ...rest },
      h(
        "div",
        { className: "pn-content" },
        h(PaneFrame, { lines: title, size: 88, tone: tone === "plum" ? "ink" : "plum" }),
        h(
          "div",
          { className: cx("pn-content__body", aside && "pn-content__body--split") },
          h("div", { className: "pn-content__text" }, children),
          aside && h("aside", { className: "pn-aside" }, asideTitle && h("h3", null, asideTitle), aside)
        )
      )
    );
  }
  function FigureSlide({ title, figure, caption, children, tone = "paper", ...rest }) {
    return h(
      Slide,
      { tone, label: "Figure slide", ...rest },
      h(
        "div",
        { className: "pn-content" },
        h(PaneFrame, { lines: title, size: 88, tone: "plum" }),
        h(
          "div",
          { className: "pn-figure" },
          h("figure", null, h("div", { className: "pn-figure__frame" }, figure), caption && h("figcaption", { className: "pn-caption" }, caption)),
          h("div", { className: "pn-content__text" }, children)
        )
      )
    );
  }
  function QuoteSlide({ quote, source, tone = "paper", ...rest }) {
    return h(
      Slide,
      { tone, label: "Quote slide", ...rest },
      h(
        "div",
        { className: "pn-quote" },
        h("span", { className: "pn-quote__mark", "aria-hidden": true }, "\u201C"),
        h("blockquote", null, quote),
        source && h(PaneFrame, { lines: source, size: 44, tone: "plum", as: "p", stagger: false })
      )
    );
  }
  function CodeBlock({ children, label, size = "ui", className }) {
    return h(
      "figure",
      { className: cx("pn-code", `pn-code--${size}`, className) },
      label && h("figcaption", null, label),
      h("pre", { tabIndex: 0 }, h("code", null, children))
    );
  }
  function Button({ variant = "primary", children, className, ...rest }) {
    return h("button", { type: "button", className: cx("pn-btn", `pn-btn--${variant}`, className), ...rest }, children);
  }
  function Field({ id, label, hint, error, children }) {
    return h(
      "div",
      { className: "pn-field" },
      h("label", { htmlFor: id, className: "pn-label" }, label),
      hint && h("p", { id: id + "-hint", className: "pn-hint" }, hint),
      children,
      error && h("p", { id: id + "-err", className: "pn-error" }, h(Icon, { d: ICONS.danger, size: 18 }), h("span", null, h("b", null, "Error: "), error))
    );
  }
  function TextField({ label, hint, error, id, ...rest }) {
    const uid = useId();
    const i = id || "tf" + uid.replace(/:/g, "");
    return h(
      Field,
      { id: i, label, hint, error },
      h("input", { id: i, className: "pn-input", "aria-invalid": error ? true : void 0, "aria-describedby": [hint && i + "-hint", error && i + "-err"].filter(Boolean).join(" ") || void 0, ...rest })
    );
  }
  function Select({ label, hint, error, id, options = [], ...rest }) {
    const uid = useId();
    const i = id || "sl" + uid.replace(/:/g, "");
    return h(
      Field,
      { id: i, label, hint, error },
      h(
        "div",
        { className: "pn-select" },
        h(
          "select",
          { id: i, className: "pn-input", "aria-invalid": error ? true : void 0, "aria-describedby": [hint && i + "-hint", error && i + "-err"].filter(Boolean).join(" ") || void 0, ...rest },
          options.map((o) => h("option", { key: o.value ?? o, value: o.value ?? o }, o.label ?? o))
        ),
        h(Icon, { d: ICONS.chevron, size: 20 })
      )
    );
  }
  function Checkbox({ label, hint, ...rest }) {
    return h("label", { className: "pn-check" }, h("input", { type: "checkbox", ...rest }), h("span", null, label, hint && h("small", null, hint)));
  }
  function Radio({ label, hint, ...rest }) {
    return h("label", { className: "pn-check pn-check--radio" }, h("input", { type: "radio", ...rest }), h("span", null, label, hint && h("small", null, hint)));
  }
  function Tabs({ tabs = [], defaultId, label = "Sections" }) {
    const [sel, setSel] = useState(defaultId || tabs[0] && tabs[0].id);
    const uid = useId().replace(/:/g, "");
    const refs = useRef({});
    const onKey = (e, idx) => {
      let n = null;
      if (e.key === "ArrowRight") n = (idx + 1) % tabs.length;
      if (e.key === "ArrowLeft") n = (idx - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") n = 0;
      if (e.key === "End") n = tabs.length - 1;
      if (n != null) {
        e.preventDefault();
        setSel(tabs[n].id);
        refs.current[tabs[n].id] && refs.current[tabs[n].id].focus();
      }
    };
    return h(
      "div",
      { className: "pn-tabs" },
      h(
        "div",
        { role: "tablist", "aria-label": label, className: "pn-tabs__list" },
        tabs.map((t, idx) => h("button", { key: t.id, ref: (el) => refs.current[t.id] = el, role: "tab", id: `${uid}-t-${t.id}`, "aria-selected": sel === t.id, "aria-controls": `${uid}-p-${t.id}`, tabIndex: sel === t.id ? 0 : -1, className: "pn-tab", onClick: () => setSel(t.id), onKeyDown: (e) => onKey(e, idx) }, t.label))
      ),
      tabs.map((t) => h("div", { key: t.id, role: "tabpanel", id: `${uid}-p-${t.id}`, "aria-labelledby": `${uid}-t-${t.id}`, hidden: sel !== t.id, className: "pn-tabs__panel", tabIndex: 0 }, t.content))
    );
  }
  var WORD = { info: "Note", success: "Success", warning: "Warning", danger: "Error" };
  function Alert({ tone = "info", title, children }) {
    return h(
      "div",
      { className: cx("pn-alert", `pn-alert--${tone}`), role: tone === "danger" ? "alert" : "status" },
      h(Icon, { d: ICONS[tone], size: 24 }),
      h("div", null, h("p", { className: "pn-alert__title" }, h("span", { className: "pn-sr" }, WORD[tone] + ": "), title), children && h("p", { className: "pn-alert__body" }, children))
    );
  }
  function Card({ title, children, as = "article", interactive = false, tone = "paper", className, ...rest }) {
    return h(
      as,
      { className: cx("pn-card", interactive && "pn-card--interactive", `pn-card--${tone}`, className), ...rest },
      title && h("h3", { className: "pn-card__title" }, title),
      children
    );
  }
  return __toCommonJS(index_exports);
})();
