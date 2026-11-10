/* KD401B deck runtime: navigation, slide index, speaker notes, theme switch, scaling.
   Slides themselves are Pane components (shared/pane/), rendered with React.

   Load order at the end of <body>:
     <script src="../shared/pane/vendor/react.production.min.js"></script>
     <script src="../shared/pane/vendor/react-dom.production.min.js"></script>
     <script src="../shared/pane/components/bundle.js"></script>
     <script src="../shared/deck.js"></script>
     <script> … Deck.start([ …slides… ]) </script>

   Page conventions:
     <html lang="en" data-theme="light">
     <body data-lecture="intro" data-home="../">      data-lecture namespaces saved data
     <main id="stage"><div id="deck"></div></main>

   A slide is an object:
     { id:"weeks",                 its #link; unique
       sec:"Structure",            section name shown in the bottom bar
       title:"The weeks ahead",    name in the slide index
       notes:"…",                  speaker notes (HTML allowed), shown with N
       ex:"Name",                  optional: a "Your turn" exercise (E jumps between them)
       demo:"Name",                optional: an interactive demo
       render:function(n){ return h(P.ContentSlide,{…, number:n}) } }   n = slide number

   Exposes window.Deck. */
(function(){
"use strict";
var COURSE="kd401b";
var LECTURE=document.body.dataset.lecture||"lecture";
var HOME=document.body.dataset.home||"../";
var THEMES=["light","dark","contrast"];

/* ============ helpers ============ */
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
/* Per-viewer storage. store = this lecture; courseStore = shared by every lecture. */
function mk(prefix){return {
  get:function(k){try{return localStorage.getItem(prefix+k)}catch(e){return null}},
  set:function(k,v){try{localStorage.setItem(prefix+k,v)}catch(e){}}
}}
var store=mk(COURSE+":"+LECTURE+":"),courseStore=mk(COURSE+":");

/* Theme: light | dark | contrast, remembered per viewer for every lecture. */
function setTheme(t){
  if(THEMES.indexOf(t)<0)t="light";
  document.documentElement.setAttribute("data-theme",t);
  courseStore.set("theme",t);
  var b=$("#theme-btn");if(b)b.firstChild.nodeValue="Theme: "+t+" ";
}
function nextTheme(){setTheme(THEMES[(THEMES.indexOf(document.documentElement.getAttribute("data-theme"))+1)%THEMES.length])}
setTheme(courseStore.get("theme")||document.documentElement.getAttribute("data-theme")||"light");

var keys={},escapes=[],slides=[],defs=[],cur=0,booted=false,bar,sheet,notes;

/* Add a button to the bar (before Index) with an optional keyboard shortcut. */
function addButton(o){
  var b=document.createElement("button");
  b.className="cb";b.textContent=o.label;
  if(o.key){var k=document.createElement("kbd");k.textContent=o.key.toUpperCase();b.appendChild(k);keys[o.key.toLowerCase()]=o.onClick}
  b.addEventListener("click",o.onClick);
  bar.insertBefore(b,bar.querySelector('[data-nav="index"]'));
  return b;
}

function go(n){
  n=Math.max(0,Math.min(slides.length-1,n));
  if(booted&&n===cur)return;
  slides[cur].hidden=true;
  cur=n;var s=slides[cur],d=defs[cur];s.hidden=false;booted=true;
  $("#rail").style.width=((cur+1)/slides.length*100)+"%";
  $("#where-n").textContent=(cur+1)+"/"+slides.length;
  $("#where-sec").textContent=d.sec||"";
  $("#notetext").innerHTML=d.notes?"<p>"+d.notes+"</p>":"<p>No notes on this slide.</p>";
  $$("#idxlist button").forEach(function(b,i){b.classList.toggle("cur",i===cur)});
  try{if(location.hash.slice(1)!==d.id)history.replaceState(null,"","#"+d.id)}catch(e){}
}
function nextEx(){for(var i=1;i<=slides.length;i++){var j=(cur+i)%slides.length;if(defs[j].ex){go(j);return}}}

/* Fit a 16:9 box into the stage; Pane slides scale themselves to its width. */
function scale(){
  var st=$("#stage"),deck=$("#deck");
  var w=st.clientWidth-24,h=st.clientHeight-24;
  var dw=Math.max(160,Math.min(w,h*16/9));
  deck.style.width=dw+"px";
}
function setBarH(){document.documentElement.style.setProperty("--barh",bar.offsetHeight+"px");scale()}

var fsOK=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);
function toggleFS(){
  if(!fsOK)return;
  try{
    if(document.fullscreenElement||document.webkitFullscreenElement){(document.exitFullscreen||document.webkitExitFullscreen).call(document)}
    else{var r=document.documentElement;(r.requestFullscreen||r.webkitRequestFullscreen).call(r)}
  }catch(e){}
}

function start(list){
  var stageEl=$("#stage"),deck=$("#deck");
  stageEl.setAttribute("aria-live","polite");
  defs=list;
  var hasEx=defs.some(function(d){return d.ex});

  /* render every slide once; hidden slides keep their state (open tab etc.) */
  defs.forEach(function(d,i){
    var s=document.createElement("div");
    s.className="slide";s.id=d.id;s.hidden=true;
    if(d.ex){var t=document.createElement("span");t.className="turn";t.textContent="Your turn";s.appendChild(t)}
    var mount=document.createElement("div");s.appendChild(mount);
    deck.appendChild(s);slides.push(s);
    var root=ReactDOM.createRoot(mount);
    ReactDOM.flushSync(function(){root.render(d.render(i+1))});
  });

  bar=document.createElement("nav");
  bar.id="bar";bar.setAttribute("aria-label","Slide controls");
  bar.innerHTML='<div id="rail" style="width:0"></div>'+
    '<a class="cb" href="'+esc(HOME)+'">All lectures</a>'+
    '<button class="cb" data-nav="prev" aria-label="Previous slide">Back</button>'+
    '<button class="cb" data-nav="next" aria-label="Next slide">Next</button>'+
    '<div id="where"><span id="where-n">1/1</span><span id="where-sec"></span></div>'+
    (hasEx?'<button class="cb" data-nav="ex">Next exercise<kbd>E</kbd></button>':'')+
    '<button class="cb" data-nav="theme" id="theme-btn">Theme <kbd>T</kbd></button>'+
    '<button class="cb" data-nav="index">Index<kbd>I</kbd></button>'+
    '<button class="cb" data-nav="notes">Notes<kbd>N</kbd></button>'+
    '<button class="cb" data-nav="fs" id="fs-btn">Full screen<kbd>F</kbd></button>';
  document.body.appendChild(bar);
  setTheme(document.documentElement.getAttribute("data-theme"));
  if(!fsOK)$("#fs-btn").hidden=true;

  sheet=document.createElement("div");
  sheet.className="sheet";sheet.id="index";sheet.hidden=true;sheet.setAttribute("role","dialog");sheet.setAttribute("aria-label","Slide index");
  sheet.innerHTML='<h2>All slides</h2><div id="idxlist"></div>';
  document.body.appendChild(sheet);
  notes=document.createElement("div");
  notes.className="sheet";notes.id="notes";notes.hidden=true;notes.setAttribute("role","dialog");notes.setAttribute("aria-label","Speaker notes");
  notes.innerHTML='<h2>Notes</h2><div id="notetext"></div>';
  document.body.appendChild(notes);

  defs.forEach(function(d,i){
    var b=document.createElement("button");
    b.innerHTML='<b>'+String(i+1).padStart(2,"0")+'</b><span>'+esc(d.title||d.id)+'</span>'+(d.ex?'<span class="t">Your turn</span>':"");
    b.addEventListener("click",function(){go(i);sheet.hidden=true});
    $("#idxlist").appendChild(b);
  });

  document.addEventListener("keydown",function(e){
    var tg=e.target.tagName;
    if(/^(INPUT|TEXTAREA|SELECT)$/.test(tg))return;
    if(e.metaKey||e.ctrlKey||e.altKey)return;
    var k=e.key,lk=k.length===1?k.toLowerCase():k;
    /* inside a Pane Tabs list, arrows/Home/End belong to the tabs */
    if(e.target.closest&&e.target.closest('[role="tablist"]')&&/^(ArrowLeft|ArrowRight|Home|End)$/.test(k))return;
    if(k==="ArrowRight"||k==="PageDown"||(k===" "&&tg!=="BUTTON"&&tg!=="A")){e.preventDefault();go(cur+1)}
    else if(k==="ArrowLeft"||k==="PageUp"){e.preventDefault();go(cur-1)}
    else if(k==="Home")go(0);else if(k==="End")go(slides.length-1);
    else if(lk==="i")sheet.hidden=!sheet.hidden;
    else if(lk==="n")notes.hidden=!notes.hidden;
    else if(lk==="e"&&hasEx)nextEx();
    else if(lk==="t")nextTheme();
    else if(lk==="f")toggleFS();
    else if(keys[lk]){e.preventDefault();keys[lk]()}
    else if(k==="Escape"){sheet.hidden=true;notes.hidden=true;escapes.forEach(function(f){f()})}
  });
  $$("[data-nav]",bar).forEach(function(b){b.addEventListener("click",function(){
    var a=b.dataset.nav;
    if(a==="prev")go(cur-1);else if(a==="next")go(cur+1);
    else if(a==="index")sheet.hidden=!sheet.hidden;
    else if(a==="notes")notes.hidden=!notes.hidden;
    else if(a==="theme")nextTheme();
    else if(a==="ex")nextEx();else if(a==="fs")toggleFS();
  })});
  var tx=null;
  stageEl.addEventListener("touchstart",function(e){if(e.target.closest("button,input,textarea,a,label,[role=tab]"))return;tx=e.touches[0].clientX},{passive:true});
  stageEl.addEventListener("touchend",function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>60)go(cur+(dx<0?1:-1))},{passive:true});

  window.addEventListener("resize",setBarH);
  if(window.ResizeObserver)new ResizeObserver(scale).observe(stageEl);
  setBarH();
  var hsh=location.hash.slice(1),first=0;
  defs.forEach(function(d,i){if(d.id===hsh)first=i});
  go(first);
  window.addEventListener("hashchange",function(){var id=location.hash.slice(1);defs.forEach(function(d,i){if(d.id===id)go(i)})});
  Deck.defs=defs;Deck.ready=true;
}

window.Deck={
  course:COURSE,lecture:LECTURE,ready:false,
  $:$,$$:$$,esc:esc,store:store,courseStore:courseStore,
  start:start,go:function(n){go(n)},addButton:addButton,setTheme:setTheme,
  onEscape:function(f){escapes.push(f)}
};
})();
