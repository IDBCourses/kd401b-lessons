Pane is the visual language for the Graphical User Interface course in the Interaction Design programme at Malmö University. It builds slides (HTML, Keynote, PowerPoint) and the course's sample interfaces from one set of tokens, and it is written to be read by students as a worked example of a design system. Read `mau-dialogue.md` for how it relates to the university's graphic manual, `accessibility.md` for the rules behind the colours, `slides.md` to build decks, and `make-your-own.md` to make a system of your own.

## Content fundamentals

Write in plain English, in sentence case, for a student reader who is learning. Address the reader as "you" and the course as "we": "You will build a login form. We will test it on Thursday."

- Headlines say the point as a sentence, not a topic: "Contrast is a design material", not "Contrast". Two to four lines in a Pane frame, never more.
- Buttons and links name the result: "Save changes", "Download slides". Never "Click here" or "Submit".
- Errors say what happened and what to do, in that order: "Upload failed. The file is larger than 20 MB." Never blame the reader.
- No emoji, no exclamation marks, no filler statistics. Numbers on slides are real and carry a source line.
- Swedish place names and terms keep their letters (Malmö, å, ä, ö); all fonts in the system include them.

## Visual foundations

**Idea.** A pane is one window in a stack of windows. The whole system is built from rectangles that overlap and offset: the logo, the headline frames, the title-slide art, the hard shadows on cards. Square corners belong to slides and frames; softer radii belong to controls.

**Colour.** Cool lilac paper (`surface-100`) and near-black ink (`ink`) carry almost everything. The lead colour is `plum`, a deep 80s-shell-jacket purple: it fills primary buttons, checked states and the main headline frame, and it always carries `on-plum` text. `teal` is the second voice for frames, section slides, the selected-tab bar and the back pane of the logo, and carries `on-teal` (ink) text. `pink` is the hot accent for emphasis frames and at most one section slide per deck, and carries `on-pink` (ink) text; it is never used for errors. Links are `link`, a plum that holds 4.5:1 on paper, and are underlined. The ground is a cool lilac white, not pure white. Soft grounds `plum-tint`, `teal-tint` and `pink-tint` hold notes and selected tabs with `ink` text. Status colours `success`, `warning` and `danger` exist only inside alerts and form errors, and each is paired with an icon and a word. Dark and high-contrast themes are first-class: switch with `data-theme="dark"` or `data-theme="contrast"` on the root element.

**Type.** Headlines, labels and UI text are set in Jost (`display` family), a geometric sans in the Futura tradition. Reading text is set in Source Serif 4 (`text` family). Code is set in Atkinson Hyperlegible Mono (`mono`). Use the named styles: slide headlines `slide-h1` and `slide-h2`, slide body `slide-body`, interface headings `ui-h1` to `ui-h3`, interface body `ui-body`. Slide sizes are written for a 1920 x 1080 canvas; in PowerPoint (13.33 in wide) divide by two to get points. The smallest text on a slide is `slide-caption` at 28 px (14 pt).

**Space and shape.** Use the 4 px scale, `space-1` to `space-10`. Controls use `radius-md` (8 px), cards `radius-lg` (16 px), tags and checkboxes `radius-sm`, radios `radius-full`. Slides, frames, figures and panes use `radius-0`. Borders are `border-width` (2 px) in `ink`; hairlines use `border`. Elevation is a hard offset shadow, `shadow-pane-sm` on interactive raised things and `shadow-pane-md` on figures and aside panels. There are no blurred shadows and no gradients.

**Frames.** Headlines on slides sit in Pane frames: one box per line, text-width, each line indented a little from the last (0, 0.9, 0.35, 1.2 em) and overlapping by 4% of the type size. Write the headline as one sentence and let the component split lines. Use one frame per slide.

**Pattern.** The dot grid is the system's one pattern: round dots at a 32 px pitch, in the slide's text colour. It stands for pixels. Use it in one corner of a slide, never as a full background.

**Imagery.** Show real interfaces. Put every screenshot in a `FigureSlide` or a bordered frame with `shadow-pane-md`, write alt text, and add a caption that starts with a figure number. Photographs are not part of this system.

**Motion.** Transitions are 120 ms on transform and shadow only, and are removed under `prefers-reduced-motion`. Slides do not animate.

**States.** Hover lifts a button or card 2 to 4 px up and left and reveals its hard shadow. Pressed removes the lift. Focus is a 3 px `focus` outline, 2 px away from the control. Disabled uses `surface-300` and `ink-muted` with a `border-control` outline, and is not the only way to learn that something is unavailable.

## Iconography

Four built-in glyphs (info, check, warning, cross) plus a chevron are drawn inside the components on a 24 px grid with a 2.5 px stroke and square ends, in `currentColor`. For anything else, use Lucide at the same stroke weight and size 20 or 24; it is not bundled here. Icons never stand alone as the only carrier of meaning: add a visible word.

## Logo

The mark is two offset squares, teal behind plum, both outlined in `ink`; the lockup sets the word Pane in Jost Bold beside it. Use the colour lockup on `surface-100`, the reverse lockup on dark grounds, and the mono lockup for one-colour print. Keep clear space of half the mark's height on every side, and do not recolour, rotate, outline or separate the mark and the word. Files are in the Logos group; the inline `Logo` component follows the active theme.

## Rules for tokens

- Set text in `ink` on `surface-100`, `surface-200` and `surface-300`; use `ink-muted` only for secondary text on those same grounds.
- Never put `ink-muted`, `link` or any status colour on `plum`, `teal` or `pink`; those fills take their own `on-` token.
- Use `plum`, `teal` and `pink` as fills only; they are not text colours on paper.
- Make every pressable control at least `target-min` (44 px) high and wide.
- Keep body lines to `measure` (62ch) in interfaces and to about 1040 px on slides.
