# KD401B Interaction Design: Graphical User Interfaces: course site

Lecture slides for KD401B (Malmö University, HT2026). Plain HTML, CSS and JavaScript: no build step.
Published with GitHub Pages from `main`.

## Layout

```
index.html            course home: list of lectures and course links
shared/pane/          Pane design system package (tokens, React components, fonts, docs)
shared/deck.css       deck frame, bottom bar, slide-size Pane components
shared/deck.js        Deck.start(): renders Pane slides, navigation, notes, theme switch
intro/                one folder per lecture; index.html is the deck
_template/            starting point for a new lecture (not linked from the home page)
tools/check_deck.py   checks every slide fits and nothing errors; screenshots to tools/out/
CLAUDE.md             brief and slide guidelines for Claude Code
docs/                 design system and slide-pattern reference
.claude/commands/     /new-lecture command for Claude Code
```

## Adding a lecture

1. Copy `_template/` to a new folder named after the lecture, e.g. `colour/`.
2. In its `index.html`, set the `<title>` and `data-lecture="colour"` on `<body>`.
3. Write slides as objects in `Deck.start([...])`, built from Pane components (see `docs/slide-patterns.md`).
4. Add an `<li>` for it to the list in the root `index.html`.

Or, in Claude Code: `/new-lecture colour`.

## Keys

`←` `→` move · `E` next exercise · `T` theme (light, dark, high contrast) · `I` slide index · `N` notes · `F` full screen · `Esc` closes panels

## Publishing

Pushing to `main` deploys to the `gh-pages` branch (`.github/workflows/deploy.yml`). Pull requests get a
preview link (`.github/workflows/preview.yml`). In Settings → Pages, set the source to the `gh-pages` branch.
