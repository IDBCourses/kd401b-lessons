# Building slides

Pane slides come in two forms that look the same: HTML slides built from the `Slide` components, and Keynote or PowerPoint decks built by hand from the tokens. Both use a 16:9 canvas of 1920 x 1080 units.

## HTML

Load `tokens.css`, `components/bundle.css`, React 18 and `components/bundle.js`, then compose slides from `TitleSlide`, `SectionSlide`, `ContentSlide`, `FigureSlide` and `QuoteSlide`. Each slide scales to the width of its container, so put each in a column of any width and keep one idea per slide. Pass headlines as an array of lines or as a string with `|` between lines. Switch theme by setting `data-theme` on the root element. Use `CodeBlock` with `size="slide"` for code.

## Fonts for Keynote and PowerPoint

Install the static fonts from Google Fonts: Jost (Medium, SemiBold, Bold), Source Serif 4 (Regular, Italic) and Atkinson Hyperlegible Mono (Regular). Install the static files, not the variable ones, because PowerPoint handles variable fonts poorly. If you present from another machine, export a PDF or embed fonts first. Fallbacks, if a font is missing: Century Gothic or Futura for Jost, Georgia for Source Serif 4, Consolas for the mono.

## Setting up the deck

- Keynote: choose a custom slide size of 1920 x 1080. Type sizes below are in points as written.
- PowerPoint: use Widescreen 16:9 (13.33 x 7.5 in). Divide every size below by two.
- Define the colours once in the theme: surface-100 `#F5F2F8`, ink `#1E1530`, plum `#5B2A86` (white text), teal `#19B5B0` (ink text), pink `#FF5C8A` (ink text), link `#5B2A86`, surface-200 `#FFFFFF`, surface-300 `#E6DFEE`, plus the three soft grounds `#E6DAF3`, `#CDEFEE`, `#FFDCE6`. For a dark deck use the dark values from the Colors tab.

| Style | Font | Keynote size | PowerPoint size |
| --- | --- | --- | --- |
| Display | Jost Bold | 144 | 72 |
| Headline (`slide-h1`) | Jost Bold | 96 | 48 |
| Sub-headline (`slide-h2`) | Jost Bold | 64 | 32 |
| Lead (`slide-lead`) | Source Serif 4 | 44 | 22 |
| Body (`slide-body`) | Source Serif 4 | 36 | 18 |
| Caption (`slide-caption`) | Jost Medium | 28 | 14 |
| Code (`slide-code`) | Atkinson Hyperlegible Mono | 32 | 16 |

Margins: 120 left and right, 96 top. Make these guides in the slide master.

## Making the Pane frame by hand

Write one text box per headline line. Fill each box with plum, set the text to Jost Bold in white, and set the inner margin to 0.26 em left and right and 0.1 em top and bottom. Stack the boxes so each overlaps the one above by 4% of the type size, and indent the lines 0, 0.9, 0.35 and 1.2 em from the left. Use teal boxes with ink text, pink boxes with ink text, or ink boxes with paper text for variety. Group the boxes and name the group "Headline" so it is read as one heading.

## Title and section art

Draw three rectangles with a 3 pt ink outline (6 px on a 1920 canvas): teal 420 x 420, pink 360 x 360, plum 420 x 300, each offset down and right from the last. Add a dot grid of 7 x 7 ink circles, 10 px across, at a 32 px pitch.

## Before you present

Add alt text to every image and shape that carries meaning, set the reading order in the accessibility panel, check that no text is smaller than 14 pt in PowerPoint (28 pt in Keynote), and test the deck in light and high-contrast colours.
