---
name: pane-design-system
description: Use when making slides, web pages, UI or documents for the Graphical User Interface course (Interaction Design, Malmö University) or any output that should use the "Pane" design system. Provides tokens, React components, fonts, logo and a PowerPoint/Keynote template.
---

# Pane design system

Pane is the design system for the Graphical User Interface course at Malmö University. It is a distant relative of the MAU graphic manual: it borrows the idea of offset, staggered frames and a purple-led palette, but is not a copy, so do not add MAU's logo or official brand assets. Accessibility is a design goal, not an extra.

## Read first, in this order

1. `tokens/tokens.md` — every colour, type style, spacing, radius, size and shadow value, per theme. Source of truth is `tokens/tokens.json`.
2. `docs/accessibility.md` — the rules below, with the reasoning.
3. `docs/slides.md` — slide anatomy when making decks.
4. `components/<Name>/README.md` and `preview.html` — props and a working example for each component. Typings: `components/index.d.ts`.
5. `docs/brand-book.md` — voice, logo use, the staggered "pane" frame.
6. `docs/make-your-own.md` — only if the task is teaching or building a student's own system.

## Hard rules

- Never write a hex value in output. Use tokens: CSS `var(--plum)`, `var(--ink)`, `var(--surface-100)` etc. (see `tokens/tokens.css`), or the names in `tokens.md` when the target has no CSS.
- Three themes exist: `light` (default), `dark`, `contrast` (high contrast). Set `data-theme="..."` on `<html>`. Everything must work in all three, so never hard-code colours that only suit one.
- Text contrast 4.5:1 (7:1 in `contrast`), large text and control borders 3:1. Use the `on-*` tokens for text on coloured fills (`on-plum`, `on-teal`, `on-pink`). Do not put `teal` or `pink` text on a light surface; they are fills.
- Interactive targets at least 44px (`--target-min`). Focus ring 3px with offset, never removed. Respect `prefers-reduced-motion`.
- Status is never colour alone: pair colour with an icon and a word. Success is blue (`--success`), not green, on purpose.
- Fonts: Jost for headlines and UI labels, Source Serif 4 for reading text, Atkinson Hyperlegible Mono for code. Use `--font-display`, `--font-text`, `--font-mono`.
- Slides are 1920×1080. Type scale is in `tokens.md` (`slide-display` 144 down to `slide-caption` 28). Minimum body size on slides is 36px. One idea per slide.
- Write in English, plain and direct. Sentence case for headings. Alt text on every image; `Logo` already carries a title.
- Keep to the supplied component API. If something is missing, compose it from tokens and say so rather than editing `bundle.js`.

## Using the web components

Offline, no build step. In an HTML file:

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<body class="pn-base"><div id="root"></div>
<script src="vendor/react.production.min.js"></script>
<script src="vendor/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const P = window.Pane, h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(P.ContentSlide, { title: ['Interfaces are', 'conversations'], number: 2 }, 'Body text here'));
</script>
```

Paths are relative to the file; adjust `../` when the page sits in a subfolder (see any `components/*/preview.html`). Components are `PaneFrame, Slide, TitleSlide, SectionSlide, ContentSlide, FigureSlide, QuoteSlide, CodeBlock, Logo, Button, TextField, Select, Checkbox, Radio, Tabs, Alert, Card`, exposed on `window.Pane`. Tones: `plum, teal, pink, ink, paper`. A slide deck is one `.pn-slide` per slide, 1920×1080, scaled with CSS `transform` to fit the viewport; see `examples/slides.html`.

## Using the PowerPoint / Keynote template

`templates/Pane-template.pptx` (and `.potx`) has six layouts (Title, Section, Content, Figure, Quote, Title Only) and sample slides. Install the static fonts first (Jost, Source Serif 4, Atkinson Hyperlegible Mono from Google Fonts). Keynote opens the .pptx; use File > Save as Theme to keep it. To generate decks programmatically, open the template with python-pptx or unzip it and duplicate slides; use the layouts, do not draw new frames by hand. Titles are a single filled box; the staggered frame on the sample "how to" slide is built manually.

## Logo

`assets/logo/` has lockup and mark in colour, reverse (for dark backgrounds) and mono. Read `assets/logo/README.md` for clear space and minimum size. Do not recolour, stretch or add effects.

## Checking your work

Render in all three themes. Check contrast of anything you added against `tokens.md`. Tab through every interactive element. If you add a new colour pairing, calculate its contrast ratio and report it.
