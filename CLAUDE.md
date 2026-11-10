# KD401B Interaction Design: Graphical User Interfaces: course site

This repo is the public site for **KD401B Interaction Design: Graphical User Interfaces**, a first-year course
in the Interaction Design bachelor's programme at Malmö University (K3), autumn 2026
(HT2026-KD401B-K3030, Canvas course 22861). It holds one HTML slide deck per lecture, published with GitHub Pages.

Teaching team: **David** (Fridays: HTML/CSS lectures and implementation exercises; grades A3 Portfolio) and
**Johannes** (Thursdays: design/theory lectures and Figma/sketching exercises; grades A1 and A2).
David's decks are mainly the Friday sessions.

Read these before building anything:
- `docs/design-system.md`: the Pane design system and how it is used here.
- `docs/slide-patterns.md`: markup for every slide type and component.
- `intro/index.html`: the reference deck. When unsure how to do something, copy what it does.

## Slide guidelines (every deck)

- **No timings on slides.** No clock times, durations or "~10 min" anywhere a student sees it. David manages
  timing himself; leave times out of speaker notes too.
- **Light tone, but not overly cheery**, especially in instructions. Plain, direct sentences. No exclamation
  marks, no "Let's dive in!", no emoji. Instructions say what to do and why, once.
- **Content comes from the Notion outline for each session** (see below). Don't invent course facts
  (dates, deadlines, grading, names). If the outline leaves something open, ask, or put a clear TODO in the
  speaker notes, not on the slide.

## Repo layout

```
index.html            course home: lecture list (add each new lecture here)
shared/pane/          Pane design system: bundle.css + bundle.js (used by every page)
shared/deck.css       deck frame: stage, scaling, bottom bar, index and notes panels
shared/deck.js        navigation, slide index, speaker notes, scaling, helpers (window.Deck)
<lecture>/index.html  one folder per lecture, named after the topic: intro/, colour/, type/ …
_template/            copy this to start a lecture
tools/check_deck.py   verifies decks (run it before saying a deck is done)
docs/                 reference for you; not linked from the site
```

Plain HTML, CSS and JavaScript. **No build step, no frameworks, no npm packages, no CDNs** for code.
Everything must work by opening the files from a static server.

## Design system: Pane

All visuals use the **Pane** design system: `shared/pane/bundle.css` and `shared/pane/bundle.js`, loaded by
every page. Use its components: **TitleSlide, SectionSlide, ContentSlide, FigureSlide, QuoteSlide, Card,
Tabs, Alert, CodeBlock, Button**. Don't write new visual styles when a Pane component does the job; keep
lecture-local CSS to layout (grids, spacing) and small one-off pieces.

> **Status:** the files in `shared/pane/` are currently a **placeholder** written before
> `pane-design-system.zip` was added. When the zip is available, replace `shared/pane/` with its
> bundle.css/bundle.js (and any fonts/assets), update `docs/design-system.md` with its real class names
> and API, update the decks' markup to match, and remove this note.

## Where lecture content comes from

Session outlines live in David's Notion workspace: the **Course Elements** database, rows where
**Course = GUIs**, linked from the page **🗓️ GUIs HT26 Course Plan**. Each row's page holds the session plan.
The deck follows the plan's sections in order (but without the times).

- If a Notion connector is available, read the row from there. Otherwise ask David to paste it.
- Never modify Notion rows. Use Stockholm time for any dates.
- Canvas: course 22861 (https://mau.instructure.com/courses/22861/). Use the row's "Canvas URL" for
  resource links when it is set.

## Working on a lecture

Use `/new-lecture <topic>` for a new deck. The workflow:

1. **Read the plan** in Notion (or as pasted).
2. **Propose an outline before building**, unless David has already given one: one line per slide,
   grouped by the plan's sections, saying which slides are interactive and what the student does.
3. **Build** in `<topic>/index.html`, copied from `_template/`. Set `<title>` and `data-lecture="<topic>"`.
4. **Check**: run `python3 tools/check_deck.py <topic>` and look at the screenshots it writes to
   `tools/out/<topic>/`. Fix any slide that overflows or errors. Click through interactive slides.
5. **List it** on the home page (`index.html`): add an `<li class="card">` with the week, title, one-line
   summary and date.

## Rules that are easy to get wrong

- Slides are a fixed 1280×720 canvas, scaled to fit. Everything must fit at that size; never rely on scrolling.
- Interactive slides (only where they help) need both a presenter use (David drives it on the projector)
  and a student use (on their own laptop with the same link). Keep state per viewer; never require a server.
- Save per-viewer data only with `Deck.store` (this lecture) or `Deck.courseStore` (shared).
- Escape anything a student types before putting it in HTML (`Deck.esc`), or use `textContent`.
- Every slide gets speaker notes (`<aside class="nt">`): what to say, what to ask, common mistakes. No times.
- Keep JavaScript ES5-compatible in style (`var`, `function`) to match the existing files.
- HTML in the decks should itself be valid and semantic: this course teaches W3C-validated markup.

## Changing shared files

`shared/` affects every lecture. Prefer lecture-local CSS in the page's `<style>` block. After any change to
`shared/`, run `python3 tools/check_deck.py` (all lectures).

## Previewing

```
python3 -m http.server 8000      # then open http://localhost:8000/<topic>/
python3 tools/check_deck.py      # all lectures; or pass one folder name
```
`check_deck.py` needs Playwright (`pip install playwright && playwright install chromium`). To use an
already-installed Chromium instead, set `CHROMIUM_PATH=/path/to/chrome`.

## Publishing

`main` is published to GitHub Pages by `.github/workflows/deploy.yml` (to the `gh-pages` branch). Each pull
request gets a preview at `<site>/pr-preview/pr-<number>/` from `.github/workflows/preview.yml`.
In the repo's Settings → Pages, the source must be "Deploy from a branch: gh-pages / (root)".
