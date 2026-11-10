# Make your own design system

Use Pane as a model, not a template. These are the choices it makes, in the order to make them, so you can make different ones.

1. **Start from a purpose and a reader.** Pane exists to teach interface design with slides and sample interfaces. Write one sentence like that for yours.
2. **Pick a relationship to what is around you.** Pane relates to the university as a distant relative. Decide whether yours is a sibling, a cousin or a stranger, and name the two or three ideas you keep.
3. **Choose one idea and build everything from it.** Pane's idea is the overlapping pane. It shows up in the logo, headline frames, art and shadows. Test yours: can you find it in five places?
4. **Choose fonts you can legally share.** Use open-licence fonts (Google Fonts) and check that they cover the letters your language needs. Choose one for headings and one for reading; add a mono only if you show code.
5. **Choose colours by role, then check contrast.** Name tokens by what they do (`surface-100`, `ink`, `on-plum`), not what they look like. Write the grounds each text colour is used on in its usage note, and measure every pair.
6. **Add themes.** Dark and high-contrast are separate sets of values for the same names, not new tokens.
7. **Set a small scale.** Use a spacing scale, a handful of radii and one shadow style. Fewer steps make better consistency.
8. **Build components from tokens only.** A component that needs a raw hex value points to a missing token.
9. **Write rules that name tokens.** "Primary buttons use `plum` with `on-plum` text and an `ink` border" is a rule. "Buttons should feel friendly" is not.
10. **Show it in use.** Make a title slide, a content slide, a form and an error state, and look at them in every theme.

Deliver your tokens as a `tokens.json` with a usage note on every token, a README with your rules, and previews that render the real components.
