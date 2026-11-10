# Design system: Pane

Every page loads the Pane design system:

```html
<link rel="stylesheet" href="../shared/pane/bundle.css">
<link rel="stylesheet" href="../shared/deck.css">
…
<script src="../shared/pane/bundle.js"></script>
<script src="../shared/deck.js"></script>
```

> **Placeholder.** `shared/pane/bundle.css` and `bundle.js` are stand-ins written before
> `pane-design-system.zip` was added to the repo. They implement the components below under the class
> names below. When the real bundle is added, replace this file's class names and tokens with Pane's own
> and update the decks to match.

## Components and their class names

| Pane component | Markup used here |
| --- | --- |
| TitleSlide | `<section class="slide title-slide">` with `.kicker`, `h1`, `.subtitle`, `.meta` |
| SectionSlide | `<section class="slide section-slide">` with `.kicker`, `h2`, `p` |
| ContentSlide | `<section class="slide content-slide">` with `.kicker`, `h2`, `.body` |
| FigureSlide | `<section class="slide figure-slide">`: two columns, text and a `<figure>` |
| QuoteSlide | `<section class="slide quote-slide">` with `blockquote` and `cite` |
| Card | `.card`, optional `.card-label`, `h3`, `p`/`ul` |
| Tabs | `.tabs` with `role="tablist"`, `role="tab"` buttons (`aria-controls`), `role="tabpanel"` |
| Alert | `.alert` (info) or `.alert.warning`, with `<strong>` heading and text |
| CodeBlock | `<pre class="code-block">` (escape `<` as `&lt;`) |
| Button | `a.button` or `button.button`; `.button.secondary` for the quieter style |

## Tokens (placeholder)

`--pane-bg`, `--pane-surface`, `--pane-ink`, `--pane-ink-soft`, `--pane-line`, `--pane-accent`,
`--pane-accent-soft`, `--pane-warn`, `--pane-warn-soft`, `--pane-radius`, `--pane-font`, `--pane-mono`.
Use these in lecture-local CSS instead of raw colours.

## Voice

- Light tone, but not overly cheery. Plain and direct, especially in instructions.
- No exclamation marks, emoji, or hype ("amazing", "super easy").
- Headings ≤ 7 words. Kicker lines read `Section name` or `Section name · Detail`.
- No timings on slides.
