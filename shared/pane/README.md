# Pane design system — export package

For the Graphical User Interface course, Interaction Design, Malmö University.

Start with `SKILL.md`. It is written for a Claude instance (or a person) picking this up cold.

| Folder | What |
| --- | --- |
| `SKILL.md` | Instructions and hard rules |
| `tokens/` | `tokens.json` (source), `tokens.css`, `tokens.md` (readable) |
| `components/` | React bundle (`bundle.js`, `bundle.css`), typings, per-component README and preview |
| `docs/` | Brand book, accessibility, slide guide, MAU dialogue, make-your-own |
| `fonts/` | Variable woff2 for the web, licences and install notes |
| `assets/logo/` | Lockup and mark SVGs |
| `templates/` | PowerPoint / Keynote template (.pptx, .potx) |
| `examples/` | Starter pages that run offline |
| `vendor/` | React 18 UMD, so nothing needs the network |

Open any `components/*/preview.html` in a browser to check the package works.
