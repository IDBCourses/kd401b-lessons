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
shared/pane/          Pane design system package, unchanged (tokens, components, fonts, React, docs)
shared/deck.css       deck frame, bottom bar, panels, slide-size Pane components, layout helpers
shared/deck.js        Deck.start(): renders slides, navigation, index, notes, theme switch
<lecture>/index.html  one folder per lecture, named after the topic: intro/, colour/, type/ …
_template/            copy this to start a lecture
tools/check_deck.py   verifies decks (run it before saying a deck is done)
docs/                 reference for you; not linked from the site
```

Plain HTML, CSS and JavaScript, plus the React copy that ships with Pane. **No build step, no JSX, no npm
packages, no CDNs** for code.
Everything must work by opening the files from a static server.

## Design system: Pane

All visuals use the **Pane** design system, kept unchanged in `shared/pane/` (from `pane-design-system.zip`).
Start with `shared/pane/SKILL.md` and follow its hard rules. Pane's components are React components on
`window.Pane`; use them: **TitleSlide, SectionSlide, ContentSlide, FigureSlide, QuoteSlide, Card, Tabs,
Alert, CodeBlock, Button**, with `tokens.css`, `bundle.css` and `bundle.js`. React is vendored in
`shared/pane/vendor/`, so nothing loads from the network.

- Never edit `shared/pane/`. Slide-size versions of the UI components and layout helpers live in
  `shared/deck.css` (see `docs/design-system.md`). Lecture-local CSS is for layout only.
- Tokens only, never hex values. Every slide must work in light, dark and high-contrast themes (`T`).
- Slides are 1920×1080. Body text 36px minimum, nothing below 28px. One idea and one Pane frame per slide.

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
   Slides are objects passed to `Deck.start([...])`; see `docs/slide-patterns.md`.
4. **Check**: run `python3 tools/check_deck.py <topic>` and look at the screenshots it writes to
   `tools/out/<topic>/`. Fix any slide that overflows or errors. Click through interactive slides.
5. **List it** on the home page (`index.html`): add an `<li class="card">` with the week, title, one-line
   summary and date.

## Rules that are easy to get wrong

- Slides are a fixed 1920×1080 canvas, scaled to fit. Everything must fit at that size; never rely on scrolling.
- Interactive slides (only where they help) need both a presenter use (David drives it on the projector)
  and a student use (on their own laptop with the same link). Keep state per viewer; never require a server.
- Save per-viewer data only with `Deck.store` (this lecture) or `Deck.courseStore` (shared).
- Escape anything a student types before putting it in HTML (`Deck.esc`), or use `textContent`.
- Every slide gets speaker notes (its `notes` field): what to say, what to ask, common mistakes. No times.
- Keep JavaScript in the existing style (`var`, `function`, `h = React.createElement`); no JSX, no build step.
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

GitHub Actions publishes the site to GitHub Pages (`.github/workflows/pages.yml`). Repo settings needed:
Settings → Pages → Source: **GitHub Actions**, and Settings → Environments → `github-pages` must allow
deployments from `main`.

- Every run rebuilds the whole site: `main` at the root, and the head of each open pull request at
  `<site>/pr-preview/pr-<number>/`. `tools/`, `docs/`, `.claude/` and `CLAUDE.md` are left out.
- It runs on pushes to `main`, and after `pr-preview-trigger.yml` (which runs when a pull request is opened,
  updated, reopened or closed). The preview link is posted, and kept up to date, as a comment on the pull
  request; closing the PR removes the preview.
- `pages.yml` always runs from `main` (via `workflow_run`), so pull request code is only copied, never run,
  and changes to `pages.yml` itself only take effect once merged. Pull requests from forks are not previewed.
- Previews share the live site's origin, so they see the same saved data (theme etc.) as the live decks.
