/* Mounts the site header + footer (compiled NavFooter.js, loaded site-wide) into #site-nav / #site-footer
   and exposes the nav height as --navh for sticky bars. Idempotent. */
(function () {
  if (window.IgTsMount) return; window.IgTsMount = true;
  function go() {
    if (!window.React || !window.ReactDOM || !window.SiteNav || !window.SiteFooter) return false;
    var navEl = document.getElementById("site-nav"), ftEl = document.getElementById("site-footer");
    if (navEl && !navEl.childElementCount) ReactDOM.createRoot(navEl).render(React.createElement(window.SiteNav, { rel: "", active: navEl.dataset.active || "" }));
    if (ftEl && !ftEl.childElementCount) ReactDOM.createRoot(ftEl).render(React.createElement(window.SiteFooter, { rel: "" }));
    if (navEl && window.ResizeObserver) { var set = function () { document.documentElement.style.setProperty("--navh", navEl.offsetHeight + "px"); }; new ResizeObserver(set).observe(navEl); set(); }
    return true;
  }
  function start() { if (!go()) { var n = 0, t = setInterval(function () { if (go() || ++n > 50) clearInterval(t); }, 100); } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true }); else start();
})();
