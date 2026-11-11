# Design system: Pane

All visuals use **Pane**, the design system for this course. The full package is in `shared/pane/`
(unchanged from `pane-design-system.zip`). Read, in this order:

1. `shared/pane/SKILL.md`: hard rules (tokens only, three themes, contrast, type sizes, one frame per slide).
2. `shared/pane/tokens/tokens.md`: every colour, type style and spacing value.
3. `shared/pane/docs/accessibility.md` and `shared/pane/docs/slides.md`.
4. `shared/pane/components/<Name>/README.md` and `components/index.d.ts` for each component's props.
5. `shared/pane/docs/brand-book.md`: voice, frames, imagery.

Don't edit anything in `shared/pane/`. If a new version of the zip arrives, replace the folder wholesale.

## How the decks use it

Pane's components are React components on `window.Pane`. Every deck loads:

```html
<link rel="stylesheet" href="../shared/pane/tokens/tokens.css">
<link rel="stylesheet" href="../shared/pane/components/bundle.css">
<link rel="stylesheet" href="../shared/deck.css">
…
<script src="../shared/pane/vendor/react.production.min.js"></script>
<script src="../shared/pane/vendor/react-dom.production.min.js"></script>
<script src="../shared/pane/components/bundle.js"></script>
<script src="../shared/deck.js"></script>
```

Slides are built with `TitleSlide`, `SectionSlide`, `ContentSlide`, `FigureSlide` and `QuoteSlide`; inside
them use `Card`, `Tabs`, `Alert`, `CodeBlock` (`size:"slide"`) and `Button`. See `docs/slide-patterns.md`.

## What this repo adds (shared/deck.css)

- **Slide-size UI components.** Pane's Card, Tabs, Alert and Button are sized for interfaces (16–20px).
  Inside a `.pn-slide`, `deck.css` sets them to the slide type scale: body 36px (`slide-body`),
  card titles 44px (`slide-h3`), nothing under 28px (`slide-caption`). Values come from tokens.
- **`.wide`**: ContentSlide's text column is 1040px wide. Wrap grids of cards, tabs and other wide
  content in `className:"wide"` to use the full 1680px.
- **Layout helpers** for slide bodies: `.grid2`, `.grid3`, `.stack`, `.h3` (44px block label),
  `.lead` (44px lead text), `.muted`, `.tags` (a row of tags, radius-sm).
- **Solid-fill cards**: `className:"fill-plum" | "fill-teal" | "fill-pink"` on a `Card` gives a solid
  Pane fill with its `on-*` text colour, an ink border and a hard shadow. Bolder than Pane's tinted
  `tone`s; use them for the main callouts, and plain cards for supporting content.
- **Dark by default**: decks and the home page start in Pane's `dark` theme (`data-theme="dark"` on `<html>`).
- **Theme switch**: `T` or the Theme button cycles light, dark and high contrast. The choice is remembered
  per viewer (`kd401b:theme`) and also used by the home page.

## Variety across a deck

A deck of identical slides goes flat quickly. Mix:
- slide grounds: `ContentSlide` takes `tone:"plum"` or `tone:"teal"` as well as the default; alternate
  them through the deck (the intro deck uses roughly every other slide). Keep `pink` for one section slide.
- callouts: solid-fill cards for the slide's main point, plain cards on coloured slides.
- Don't put `Tabs` on a plum or teal slide: tab labels use `ink`, which lacks contrast on the fills.

## Rules to keep (from Pane)

- Never write a hex value. Use tokens: `var(--plum)`, `var(--ink)`, `var(--surface-200)` …
- Check every slide in all three themes (`T`).
- Headlines in sentence case, two to four lines, one Pane frame per slide.
- `teal` and `pink` are fills only, never text colours on paper.
- Pink section slide at most once per deck. Three to five section slides in a deck.
- Status (Alert) is never colour alone; the component already adds the icon and word.
- Show real interfaces in a `FigureSlide`, with alt text and a caption starting "Figure N."
- Photographs are not part of Pane. The intro deck's "Who we are" slide is an exception David asked for.

## Voice

Light tone, but not overly cheery. Plain and direct, especially in instructions. No exclamation marks,
emoji or hype. Address students as "you" and the course as "we". No timings on slides.
