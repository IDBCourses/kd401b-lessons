# Slide patterns

A deck is a list of slide objects passed to `Deck.start([...])`. `intro/index.html` uses every pattern
below; `_template/index.html` is the starting point.

```js
var P=window.Pane,h=React.createElement;
var FOOT="KD401B · Lecture title";
Deck.start([
  { id:"weeks",                  // the slide's #link; unique
    sec:"Structure",             // section name in the bottom bar
    title:"The weeks ahead",     // name in the slide index (I)
    notes:"…",                   // speaker notes (N); every slide has them; no times
    ex:"Name",                   // optional: a "Your turn" exercise (E jumps here)
    demo:"Name",                 // optional: an interactive demo
    render:function(n){ return h(P.ContentSlide,{title:"…",number:n,footer:FOOT}, …) } }
]);
```

`n` is the slide number: pass it as `number` to Content, Figure and Quote slides. Don't pass `number`
to `SectionSlide`: there it becomes a huge section numeral.

## Slide types

```js
h(P.TitleSlide,{title:["Headline as","a sentence"],subtitle:"One sentence",meta:"David · KD401B HT26"})
h(P.SectionSlide,{title:["Section name"],tone:"teal",footer:FOOT})        // tone: teal | ink | plum | pink (pink once per deck)
h(P.ContentSlide,{title:"Say the point",number:n,footer:FOOT,aside:"…",asideTitle:"Rule"}, children)
h(P.FigureSlide,{title:"…",number:n,footer:FOOT,caption:"Figure 1. …",
  figure:h("img",{src:"img/x.png",alt:"…"})}, children)
h(P.QuoteSlide,{quote:"Two lines at most.",source:["Author, Year"],number:n,footer:FOOT})
```

Titles: a string, an array of lines, or a string with `|` between lines. Two to four lines.

## Components on slides

```js
h(P.Card,{title:"Title",tone:"teal"}, h("p",null,"Text"))                 // tone: paper | plum | teal | pink
h(P.Card,{interactive:true,className:"linkcard"}, h("a",{className:"pn-link",href:"…"},"Link"))
h(P.Tabs,{label:"Weeks",tabs:[{id:"a",label:"A",content:…},{id:"b",label:"B",content:…}]})
h(P.Alert,{tone:"warning",title:"What to do."},"Detail.")                 // info | success | warning | danger
h(P.CodeBlock,{size:"slide",label:"index.html"},"<p>Hello</p>")
h(P.Button,{variant:"primary",onClick:fn},"Show the answer")             // actions only; use links to navigate
```

Body layout (from `shared/deck.css`):

```js
h("div",{className:"wide grid2"}, card1, card2)     // .wide = use the full slide width
h("div",{className:"wide grid3"}, a, b, c)
h("div",{className:"wide stack"}, row, alert)
h("ul",{className:"tags"}, h("li",null,"Colour"), …)
```

Keep to about six lines of body text; split rather than shrink. Run `python3 tools/check_deck.py <lecture>`:
it flags anything outside the slide or running past the bottom of the content area.

## Interactive slides

Prefer Pane's own interactive components (`Tabs`, `Button`, form fields) inside the slide. For custom
behaviour, write a small React function component in the lecture script with `React.useState`.
`deck.js` lets arrow keys, Home and End work inside a tab list without changing slides.
Helpers on `Deck`: `$`, `$$`, `esc`, `store`, `courseStore`, `go`, `setTheme`, `addButton`, `onEscape`.
Save per-viewer data only with `Deck.store` / `Deck.courseStore`.
