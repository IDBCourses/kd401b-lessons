/* =====================================================================
   PLACEHOLDER — replace with bundle.js from pane-design-system.zip.
   Gives the stand-in components their behaviour until the real Pane bundle
   is added. Currently: Tabs (arrow keys move between tabs).
   Markup:
     <div class="tabs">
       <div role="tablist"><button role="tab" aria-controls="p1">One</button>…</div>
       <div role="tabpanel" id="p1">…</div>…
     </div>
   ===================================================================== */
(function(){
"use strict";
function initTabs(root){
  var tabs=[].slice.call(root.querySelectorAll('[role="tab"]'));
  function select(t){
    tabs.forEach(function(x){
      var on=x===t;
      x.setAttribute("aria-selected",on?"true":"false");
      x.tabIndex=on?0:-1;
      var p=document.getElementById(x.getAttribute("aria-controls"));
      if(p)p.hidden=!on;
    });
  }
  tabs.forEach(function(t,i){
    t.addEventListener("click",function(){select(t)});
    t.addEventListener("keydown",function(e){
      var d=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;
      if(!d)return;
      e.preventDefault();e.stopPropagation();
      var n=tabs[(i+d+tabs.length)%tabs.length];select(n);n.focus();
    });
  });
  var first=tabs.filter(function(t){return t.getAttribute("aria-selected")==="true"})[0]||tabs[0];
  if(first)select(first);
}
[].forEach.call(document.querySelectorAll(".tabs"),initTabs);
window.Pane={initTabs:initTabs};
})();
