The 1920 x 1080 stage every slide is built on; it scales to the width of its container and sets the slide's background and text colour.

**You provide** children positioned inside the stage, and optionally `tone` (`paper`, `ink`, `plum`, `teal`, `pink`), `number`, `footer` and an accessible `label`.

- Use it directly only for custom layouts; the layout components already use it.
- Absolutely position content inside the stage, keeping 120 px side margins and 96 px top margin.
- Text on the stage is `slide-body` by default. Do not set text smaller than 28 px.
