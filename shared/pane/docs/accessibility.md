# Accessibility

Accessibility is the first design goal of Pane, not a final check. These are the rules the tokens and components already follow, so a student can see what "built in" means.

## Contrast

Body text meets 4.5:1 and large text (24 px and up, or bold 19 px and up) meets 3:1 on the grounds named in each token's usage note. Control borders, focus rings and icons that carry meaning meet 3:1. The high-contrast theme raises every text pair to 7:1 and sets surfaces apart with borders instead of shade. Measured ratios, light / dark / high contrast:

| Pair | Light | Dark | High contrast |
| --- | --- | --- | --- |
| `ink` on `surface-100` | 15.7:1 | 16.9:1 | 21.0:1 |
| `ink` on `surface-200` | 17.4:1 | 15.4:1 | 21.0:1 |
| `ink-muted` on `surface-100` | 7.5:1 | 9.4:1 | 17.4:1 |
| `ink-muted` on `surface-300` | 6.4:1 | 9.9:1 | 14.9:1 |
| `link` on `surface-100` | 8.9:1 | 9.2:1 | 14.0:1 |
| `on-plum` on `plum` | 9.9:1 | 5.3:1 | 12.2:1 |
| `on-teal` on `teal` | 6.9:1 | 7.4:1 | 8.3:1 |
| `on-pink` on `pink` | 5.9:1 | 6.4:1 | 7.1:1 |
| `on-frame-ink` on `frame-ink` | 15.7:1 | 16.9:1 | 21.0:1 |
| `success` on `success-bg` | 6.1:1 | 7.2:1 | 9.6:1 |
| `warning` on `warning-bg` | 6.6:1 | 8.2:1 | 10.4:1 |
| `danger` on `danger-bg` | 5.4:1 | 7.1:1 | 9.6:1 |
| `ink` on `teal-tint` | 14.3:1 | 11.2:1 | 18.0:1 |
| `border-control` on `surface-200` (3:1 needed) | 5.0:1 | 4.9:1 | 21.0:1 |
| `focus` on `surface-100` (3:1 needed) | 15.7:1 | 16.9:1 | 21.0:1 |

`teal` and `pink` are mid-tone fills: they carry ink text (never white) and are never used as text colours on paper. `plum` is dark enough to carry white text and to stand apart from `surface-100` and `surface-200` at 3:1 or more in every theme, with a lighter plum in the dark theme.

## Colour is never the only signal

Success, warning and danger each have an icon, a word ("Success", "Warning", "Error") and a colour. Success is blue, not green, so it never depends on a red/green difference; danger is a warm red that also differs in shape (a crossed box against a ticked box). Selected tabs get a thick bar and bold text. Links are underlined.

## Type for projection and reading

Slide body text is 36 px on a 1920 canvas (18 pt in PowerPoint) and the smallest allowed text is 28 px (14 pt). Line height is at least 1.4 for text and no more than 1.2 for headlines. Source Serif 4 and Jost have open, legible forms; Atkinson Hyperlegible Mono separates look-alike characters in code. Do not set paragraphs in all capitals or italics beyond a short quote.

## Keyboard, focus and targets

Every control is reachable by keyboard. Focus is a solid 3 px outline in `focus`, offset 2 px so it lands on the surface, never on the control. Pressable controls are at least 44 x 44 px. Tabs follow the ARIA pattern: arrow keys, Home and End move between tabs, and only the selected tab is in the tab order.

## Structure and language

A Pane frame renders as one heading whose lines are visual only, so a screen reader reads a single sentence. Slides are marked up as groups with the role description "slide". Set `lang="en"` on the page, and `lang="sv"` on any Swedish passage. Always supply alt text for figures, or `aria-hidden` for pure decoration such as pane art and dot grids.

## Motion

Transitions last 120 ms and are removed when the reader asks for reduced motion.

## Check before you ship

1. Switch to each theme and read every slide or screen.
2. Tab through the interface without a mouse.
3. Zoom the page to 200% and check nothing is cut off.
4. Run a contrast check on any colour pair you add, and write it in the token's usage note.
