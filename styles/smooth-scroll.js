/* Ignite site-wide smooth scroll.
   Wheel-lerp inertia on the window scroll only — no transform wrapper, no
   overlay — so sticky nav, fixed elements and pointer interactions stay intact.
   Self-disables on touch devices and prefers-reduced-motion. Inner scrollers
   (overflow:auto/scroll) keep native behavior. Anchor jumps are handled by
   CSS scroll-behavior in global.css. */
(function () {
  if (window.__igniteSmoothScroll) return;
  var mm = window.matchMedia;
  if (!mm || mm("(prefers-reduced-motion: reduce)").matches || mm("(pointer: coarse)").matches) return;
  window.__igniteSmoothScroll = true;

  // Anchor jumps: global.css sets this, but pages on their own stylesheet get it here too.
  try {
    var de = document.documentElement;
    if (getComputedStyle(de).scrollBehavior !== "smooth") de.style.scrollBehavior = "smooth";
  } catch (err) {}

  var EASE = 0.112, MULT = 1.2;
  var target = window.scrollY, current = target, raf = null, running = false;

  function maxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }
  function canNativeScroll(node) {
    for (var el = node; el && el !== document.body && el.nodeType === 1; el = el.parentElement) {
      var s = getComputedStyle(el);
      if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 2) return true;
    }
    return false;
  }
  function tick() {
    current += (target - current) * EASE;
    if (Math.abs(target - current) < 0.4) { current = target; running = false; }
    window.scrollTo({ top: current, behavior: "instant" });
    raf = running ? requestAnimationFrame(tick) : null;
  }
  function onWheel(e) {
    if (e.ctrlKey || e.deltaMode !== 0) return;      // pinch-zoom / line mode → native
    if (canNativeScroll(e.target)) return;           // inner scrollers keep native
    e.preventDefault();
    if (!running) { current = target = window.scrollY; }
    target = Math.min(Math.max(0, target + e.deltaY * MULT), maxScroll());
    if (!running) { running = true; raf = requestAnimationFrame(tick); }
  }
  function resync() { target = current = window.scrollY; }

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", resync, { passive: true });
  window.addEventListener("keydown", resync);
  window.addEventListener("scroll", function () { if (!running) resync(); }, { passive: true });
})();
