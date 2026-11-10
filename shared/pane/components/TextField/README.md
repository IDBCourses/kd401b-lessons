A labelled text input with optional hint and error.

**You provide** `label`; optionally `hint`, `error` and any input attribute (`type`, `value`, `onChange`, `placeholder`).

- The label is always visible text above the field; a placeholder is an example, never the label.
- An error is text plus an icon, tied to the field with `aria-describedby`, and says how to fix it.
- Field width is capped at `measure`.
