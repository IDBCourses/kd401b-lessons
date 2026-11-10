# Pane tokens

Generated from `tokens.json` (the source of truth). Colour values per theme; use the token name, never the hex.

## Colour

| Token | Light | Dark | High contrast | Usage |
| --- | --- | --- | --- | --- |
| `surface-100` | `#F5F2F8` | `#14101F` | `#FFFFFF` | Page and slide background. Default ground for `ink`, `ink-muted` and `link`. |
| `surface-200` | `#FFFFFF` | `#1F1830` | `#FFFFFF` | Raised ground: cards, inputs, dialogs, slide content panels. Same text colours as `surface-100`. |
| `surface-300` | `#E6DFEE` | `#0C0914` | `#EDEDED` | Sunken ground: code blocks, hover rows, disabled fields. Same text colours as `surface-100`. |
| `ink` | `#1E1530` | `#F5F2F8` | `#000000` | Primary text and icons on `surface-100`, `surface-200`, `surface-300`, `teal`, `pink` and the tints. Also the border colour of controls, cards and slide panes. |
| `ink-muted` | `#54496A` | `#BDB3D1` | `#1A1A1A` | Secondary text (captions, helper text, placeholders) on `surface-100`, `surface-200`, `surface-300`. Never on a coloured fill. |
| `border` | `#CFC6DC` | `#3A3050` | `#000000` | Decorative hairlines and dividers. Carries no meaning on its own, so it is exempt from 3:1. |
| `border-control` | `#756A8C` | `#8E84A6` | `#000000` | Borders of inputs, checkboxes, radios and secondary buttons. At least 3:1 on `surface-100` and `surface-200` in every theme. |
| `plum` | `#5B2A86` | `#8A4FC4` | `#4A1D73` | Lead colour: primary button fill, checked states, the main headline frame, the front pane of the logo. Always carries `on-plum` text. |
| `on-plum` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | Text and icons on `plum`. |
| `teal` | `#19B5B0` | `#19B5B0` | `#19B5B0` | Second voice: frame fill, section slides, selected-tab bar, the back pane of the logo. Always carries `on-teal` text; never used as text on paper. |
| `on-teal` | `#1E1530` | `#14101F` | `#000000` | Text and icons on `teal`. |
| `pink` | `#FF5C8A` | `#FF5C8A` | `#FF5C8A` | Hot accent for emphasis frames and one section slide per deck. Carries `on-pink` text; never used for errors (see `danger`) and never as text on paper. |
| `on-pink` | `#1E1530` | `#14101F` | `#000000` | Text and icons on `pink`. |
| `link` | `#5B2A86` | `#C9A8F0` | `#3D1566` | Inline links and link-like controls on `surface-100`, `surface-200`. Always also underlined. |
| `focus` | `#1E1530` | `#F5F2F8` | `#000000` | Focus ring colour, drawn 2px off the control so it lands on the surface. At least 3:1 on `surface-100`, `surface-200`, `surface-300`. |
| `plum-tint` | `#E6DAF3` | `#2D1F45` | `#EFE6F8` | Soft plum ground for selected tabs and highlights. Text: `ink`. |
| `teal-tint` | `#CDEFEE` | `#123A3B` | `#D8F3F2` | Soft teal ground for info callouts. Text: `ink`. |
| `pink-tint` | `#FFDCE6` | `#4A1B2B` | `#FFE4EC` | Soft pink ground for warm notes. Text: `ink`. |
| `frame-ink` | `{ink}` | `{ink}` | `{ink}` | Ink-toned Pane frame fill; pair with `on-frame-ink`. Inverts in the dark theme. |
| `on-frame-ink` | `{surface-100}` | `{surface-100}` | `{surface-100}` | Text on `frame-ink`. |
| `success` | `#0B5E83` | `#7CC4E8` | `#064A68` | Success text and icons on `success-bg`, `surface-100`, `surface-200`. Blue rather than green so it never relies on a red/green difference; always paired with a check icon and the word. |
| `success-bg` | `#DDF0F8` | `#12303F` | `#FFFFFF` | Ground for success messages. Text: `success` or `ink`. |
| `warning` | `#7A4B00` | `#F2C35B` | `#5C3800` | Warning text and icons on `warning-bg`, `surface-100`, `surface-200`. Always paired with a triangle icon and the word. |
| `warning-bg` | `#FFF1CC` | `#3A2C0A` | `#FFFFFF` | Ground for warning messages. Text: `warning` or `ink`. |
| `danger` | `#B02A12` | `#FF9C85` | `#8A1500` | Error text, icons and error borders on `danger-bg`, `surface-100`, `surface-200`. Always paired with a cross icon and the word; a warm red, distinct from `pink` in hue and lightness. |
| `danger-bg` | `#FFE2DA` | `#43201A` | `#FFFFFF` | Ground for error messages. Text: `danger` or `ink`. |

## Type

Families: `display` = "Jost", "Futura", "Avenir Next", "Century Gothic", system-ui, sans-serif; `text` = "Source Serif 4", "Sabon", Georgia, "Times New Roman", serif; `mono` = "Atkinson Hyperlegible Mono", ui-monospace, Menlo, Consolas, monospace

| Style | Family | Size / line height | Weight | Usage |
| --- | --- | --- | --- | --- |
| `slide-display` | display | 144px / 136px | 700 | Title slide name only. 72pt in PowerPoint (16:9, 13.33in), 144pt in a 1920x1080 Keynote. |
| `slide-h1` | display | 96px / 104px | 700 | Slide headline (Pane frame text). 48pt PowerPoint. |
| `slide-h2` | display | 64px / 72px | 700 | Sub-headline, two-column heads. 32pt PowerPoint. |
| `slide-h3` | display | 44px / 52px | 600 | Block labels. 22pt PowerPoint. |
| `slide-number` | display | 220px / 200px | 700 | One big figure per slide. Pair with a slide-caption. |
| `slide-caption` | display | 28px / 38px | 500 | Figure captions, source lines, footers. 14pt PowerPoint: the smallest size allowed on a slide. |
| `slide-lead` | text | 44px / 60px | 400 | Opening statement under a headline. 22pt PowerPoint. |
| `slide-body` | text | 36px / 54px | 400 | Body copy and list items. 18pt PowerPoint: the smallest body size. |
| `slide-quote` | text | 64px / 80px | 400 | Pull quotes, set in italic via the `quote` slide. |
| `slide-code` | mono | 32px / 48px | 400 | Code and values on slides. 16pt PowerPoint. |
| `ui-h1` | display | 40px / 48px | 700 | Page title. |
| `ui-h2` | display | 28px / 36px | 700 | Section title. |
| `ui-h3` | display | 20px / 28px | 600 | Card and dialog title. |
| `ui-label` | display | 16px / 24px | 500 | Form labels, button text, tabs. |
| `ui-small` | display | 14px / 20px | 500 | Helper text, tags. Smallest interface size. |
| `ui-body` | text | 18px / 28px | 400 | Paragraphs and descriptions. 18px so serif text stays comfortable. |
| `ui-body-small` | text | 16px / 24px | 400 | Dense secondary copy. |
| `ui-code` | mono | 15px / 24px | 400 | Inline code, code blocks, tokens in documentation. |

## Spacing

| Token | Value | Usage |
| --- | --- | --- |
| `space-1` | `4px` | Icon gaps, tight inline spacing. |
| `space-2` | `8px` | Gap between label and field, chip padding. |
| `space-3` | `12px` | Button vertical padding, list gaps. |
| `space-4` | `16px` | Card padding, field gaps. Default step. |
| `space-5` | `24px` | Between related groups; button horizontal padding. |
| `space-6` | `32px` | Between sections in an interface. |
| `space-7` | `48px` | Large gaps; frame stagger. |
| `space-8` | `64px` | Slide gutters between columns. |
| `space-9` | `96px` | Slide inner margin top/bottom. |
| `space-10` | `120px` | Slide outer margin left/right (1920x1080 canvas). |

## Radius

| Token | Value | Usage |
| --- | --- | --- |
| `radius-0` | `0` | Pane frames, slides, images: square, like a window pane. |
| `radius-sm` | `4px` | Tags, code blocks, checkboxes. |
| `radius-md` | `8px` | Buttons, inputs, alerts. |
| `radius-lg` | `16px` | Cards and dialogs. |
| `radius-full` | `999px` | Radios, switches, dots. Not for buttons. |

## Size

| Token | Value | Usage |
| --- | --- | --- |
| `target-min` | `44px` | Minimum height and width of any pressable control (WCAG 2.5.5). |
| `border-width` | `2px` | Control and frame borders. |
| `focus-width` | `3px` | Focus ring thickness. |
| `focus-offset` | `2px` | Gap between control and focus ring. |
| `slide-width` | `1920px` | Slide canvas width. PowerPoint 16:9 equals 960pt, so 1px = 0.5pt. |
| `slide-height` | `1080px` | Slide canvas height. |
| `measure` | `62ch` | Maximum line length for body text in interfaces. |

## Shadow

| Token | Light | Dark | High contrast | Usage |
| --- | --- | --- | --- | --- |
| `shadow-pane-sm` | `4px 4px 0 0 #1E1530` | `4px 4px 0 0 #000000` | `4px 4px 0 0 #000000` | Hard offset shadow: raised cards and buttons on hover. Echoes the stacked pane in the logo. |
| `shadow-pane-md` | `8px 8px 0 0 #1E1530` | `8px 8px 0 0 #000000` | `8px 8px 0 0 #000000` | Screenshots and figures on slides; dialogs. |
