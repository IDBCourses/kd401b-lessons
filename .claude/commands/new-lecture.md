---
description: Plan and build a new lecture deck from its Notion session outline
argument-hint: <topic, e.g. "colour" or "typography">
---

Build a new lecture deck for: **$ARGUMENTS**

Follow CLAUDE.md, `docs/design-system.md` and `docs/slide-patterns.md` throughout.

## 1. Gather the plan

- Find the session in the Notion Course Elements database (Course = GUIs) whose name or topic matches
  "$ARGUMENTS". Fridays (David) are the usual case. If there are several matches, list them and ask which.
  If no Notion connector is available, ask David to paste the outline.
- Note: date (Stockholm), week, the session plan's sections, materials, Canvas URL.
- Skim earlier lecture folders so the new deck continues the same style and can refer back.

## 2. Propose an outline and wait for approval

Unless David gave a slide list already, write one line per slide, grouped by the plan's sections, marking
interactive slides and what the student does. No times on the slides. Ask about anything the plan leaves
open. Don't start building until David answers.

## 3. Build

- `cp -r _template $ARGUMENTS` (folder name: short, lowercase), then set `<title>` and `data-lecture`.
- Use Pane components (TitleSlide, SectionSlide, ContentSlide, FigureSlide, QuoteSlide, Card, Tabs, Alert,
  CodeBlock, Button). Every slide gets speaker notes.
- Slides are objects in `Deck.start([...])` (see `docs/slide-patterns.md`). Follow `shared/pane/SKILL.md`.
- Tone: light but not overly cheery, especially in instructions.

## 4. Check

- Run `python3 tools/check_deck.py $ARGUMENTS`. Fix every overflow and error.
- Look at each screenshot in `tools/out/$ARGUMENTS/`. Exercise each interactive slide once.
- Press `T` to check the slides in the dark and high-contrast themes.

## 5. Finish

- Add the lecture to the list in the root `index.html`.
- Summarise for David: the slide list, what each interactive slide does, and anything you assumed.
