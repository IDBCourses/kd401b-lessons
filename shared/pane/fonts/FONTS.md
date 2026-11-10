# Fonts

All three families are open source under the SIL Open Font License 1.1 and may be installed, embedded and redistributed.

| Family | Role | Source |
| --- | --- | --- |
| Jost | headlines, labels, UI text | fonts.google.com/specimen/Jost |
| Source Serif 4 | reading text | fonts.google.com/specimen/Source+Serif+4 |
| Atkinson Hyperlegible Mono | code | fonts.google.com/specimen/Atkinson+Hyperlegible+Mono |

The `.woff2` files here are variable fonts (Latin subset, includes å ä ö) for the web; `tokens.css` loads them with `@font-face`.
For Keynote, PowerPoint, Word and design tools, install the static TTF files from Google Fonts (variable fonts behave badly in Office). If a font is missing, fall back to Century Gothic or Futura for Jost, Georgia for Source Serif 4, Consolas for the mono.
