An inline message with an icon, a word and a colour tone.

**You provide** `title`; optionally `children` for detail and `tone` (`info`, `success`, `warning`, `danger`).

- Each tone has its own icon and a hidden "Note", "Success", "Warning" or "Error" prefix for screen readers.
- `danger` uses `role="alert"`; the others use `role="status"`.
- Say what happened and what to do; do not use alerts for marketing.
