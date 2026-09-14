/* Ignite mobile guard.
   Phone-width safety net for layouts the stylesheet can't reach: sub-12px type,
   fixed-track grids, unwrappable flex rows, and single-line text wider than its
   frame. Runs at ≤720px only, in read-then-write phases so it never thrashes
   layout, and records every change so a resize back to desktop reverts it. */
(function () {
  var MQ = "(max-width: 720px)";
  var touched = [];

  function revert() {
    for (var i = 0; i < touched.length; i++) touched[i].el.style[touched[i].prop] = touched[i].prev;
    touched = [];
  }
  function apply(edits) {
    for (var i = 0; i < edits.length; i++) {
      var e = edits[i];
      touched.push({ el: e.el, prop: e.prop, prev: e.el.style[e.prop] });
      e.el.style[e.prop] = e.val;
    }
  }
  function clipBound(el) {
    for (var p = el.parentElement; p && p.nodeType === 1; p = p.parentElement) {
      if (getComputedStyle(p).overflowX !== "visible") return p.getBoundingClientRect();
    }
    return { left: 0, right: document.documentElement.clientWidth };
  }
  function animatedUp(el) {
    for (var p = el, n = 0; p && p.nodeType === 1 && n < 12; p = p.parentElement, n++) {
      var cs = getComputedStyle(p);
      if (cs.animationName && cs.animationName !== "none") return true;
    }
    return false;
  }
  function ownText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.textContent.trim().length > 1) return true;
    }
    return false;
  }

  /* One read-only sweep collecting edits, then one write sweep. */
  function pass(withText) {
    var root = document.getElementById("root") || document.body;
    if (!root) return;
    var nodes = root.querySelectorAll("*");
    if (nodes.length > 9000) return;          // very large page: leave it alone
    var edits = [];

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], cs = getComputedStyle(el);
      if (cs.display === "none") continue;

      if (ownText(el)) {
        var fs = parseFloat(cs.fontSize);
        if (fs && fs < 12) edits.push({ el: el, prop: "fontSize", val: "12px" });
      }

      var isGrid = cs.display.indexOf("grid") >= 0;
      var isRow = cs.display.indexOf("flex") >= 0 && cs.flexDirection.indexOf("column") !== 0;
      if (!isGrid && !isRow) continue;
      if (el.scrollWidth <= el.clientWidth + 2) continue;
      if (isGrid) {
        edits.push({ el: el, prop: "gridTemplateColumns", val: "minmax(0, 1fr)" });
        for (var g = 0; g < el.children.length; g++) edits.push({ el: el.children[g], prop: "minWidth", val: "0" });
      } else if (cs.overflowX === "visible" && !animatedUp(el)) {
        for (var f = 0; f < el.children.length; f++) edits.push({ el: el.children[f], prop: "minWidth", val: "0" });
        if (cs.flexWrap === "nowrap") edits.push({ el: el, prop: "flexWrap", val: "wrap" });
      }
    }
    apply(edits);

    if (!withText) return;

    /* Single-line text still wider than its frame → scale down (min 12px). */
    var text = root.querySelectorAll("h1, h2, h3, h4, span, div, p, a, li, td, th");
    var shrink = [];
    for (var k = 0; k < text.length; k++) {
      var t = text[k];
      if (!ownText(t)) continue;
      var b = t.getBoundingClientRect();
      if (!b.width) continue;
      var tcs = getComputedStyle(t), cur = parseFloat(tcs.fontSize);
      if (b.height > cur * 2.2) continue;      // multi-line: wrapping handles it
      if (animatedUp(t)) continue;
      var bound = clipBound(t);
      var avail = bound.right - Math.max(b.left, bound.left);
      if (b.width > avail + 2 && avail > 40) {
        var next = Math.max(12, Math.floor(cur * (avail / b.width) * 0.96));
        if (next < cur) shrink.push({ el: t, prop: "fontSize", val: next + "px" });
      }
    }
    apply(shrink);
  }

  var timer = null;
  function run() {
    revert();
    if (!window.matchMedia(MQ).matches) return;
    pass(false);
    pass(true);
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(run, 200); }

  if (document.readyState === "complete") setTimeout(run, 900);
  else window.addEventListener("load", function () { setTimeout(run, 900); });
  setTimeout(run, 2600);              // React/Babel pages finish rendering late
  window.addEventListener("resize", schedule);
  window.addEventListener("orientationchange", schedule);
  window.__igniteMobileGuard = run;   // manual re-run after client-side view swaps
})();
