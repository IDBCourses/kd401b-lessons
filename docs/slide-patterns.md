# Slide patterns

Every slide is a `<section class="slide …">` inside `#deck`. `intro/index.html` uses all of these.

## Slide attributes

- `id="…"` becomes the slide's link: `…/intro/#weeks`. Required and unique.
- `data-sec="…"` is the section name shown in the bottom bar.
- `data-ex="…"` marks an exercise: add `<span class="turn">Your turn</span>`; `E` jumps between them.
- `data-demo="…"` marks an interactive demo.
- `<aside class="nt">…</aside>` holds speaker notes (press `N`). Every slide has them.

## Slide types

```html
<section class="slide title-slide" id="cover" data-sec="Opening">
  <div class="kicker">KD401B · Week 46</div>
  <h1>Title</h1>
  <p class="subtitle">Subtitle</p>
  <div class="meta"><span>David</span><span>KD401B HT26</span></div>
  <aside class="nt">…</aside>
</section>

<section class="slide section-slide" id="layout" data-sec="Layout">
  <div class="kicker">Section</div><h2>Heading</h2><p>Line</p>
  <aside class="nt">…</aside>
</section>

<section class="slide content-slide" id="x" data-sec="…">
  <div class="kicker">Section</div><h2>Heading</h2>
  <div class="body"> cards, tabs, alerts, code </div>
  <aside class="nt">…</aside>
</section>

<section class="slide figure-slide" id="y" data-sec="…">
  <div><div class="kicker">Section</div><h2>Heading</h2><p>Text</p></div>
  <figure><img src="img/example.png" alt="…"><figcaption>Caption</figcaption></figure>
  <aside class="nt">…</aside>
</section>

<section class="slide quote-slide" id="z" data-sec="…">
  <div class="kicker">Section</div>
  <blockquote>A question or quote.</blockquote><cite>Attribution or prompt</cite>
  <aside class="nt">…</aside>
</section>
```

## Components

```html
<div class="card"><div class="card-label">Label</div><h3>Title</h3><p>Text</p></div>

<div class="tabs">
  <div role="tablist" aria-label="…">
    <button role="tab" id="tab-a" aria-controls="panel-a" aria-selected="true">A</button>
    <button role="tab" id="tab-b" aria-controls="panel-b">B</button>
  </div>
  <div role="tabpanel" id="panel-a" aria-labelledby="tab-a">…</div>
  <div role="tabpanel" id="panel-b" aria-labelledby="tab-b" hidden>…</div>
</div>

<div class="alert warning" role="note"><div><strong>Heading.</strong>Text.</div></div>

<pre class="code-block">&lt;h1&gt;Hello&lt;/h1&gt;</pre>

<a class="button" href="…">Primary</a> <a class="button secondary" href="…">Secondary</a>
```

Lecture-local layout helpers used in `intro/` (copy into the page's `<style>` if needed):
`.grid2`, `.grid3`, `.grid2x2`.

## Interactive slides

Put each slide's script in its own small block in the page's final `<script>`, using `Deck` helpers:
`Deck.$`, `Deck.$$`, `Deck.esc`, `Deck.fb`, `Deck.store`, `Deck.courseStore`, `Deck.go`.
Example: the week picker on `intro/#weeks` (a list of buttons with `aria-pressed`, and a detail panel
with `aria-live="polite"`).
