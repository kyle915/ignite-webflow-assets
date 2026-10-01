/* ig-chrome.js: swaps legacy Webflow header + footer for the React BrandBar/SiteNav/SiteFooter
   on CMS templates (blog posts, blog categories, team, careers). Needs React, ReactDOM and
   NavFooter.js (all loaded site-wide). Idempotent. */
(function () {
  if (window.IgChrome) return; window.IgChrome = true;
  var BASE = "https://kyle915.github.io/ignite-webflow-assets/";
  if (!document.getElementById("ig-chrome-css")) {
    var l = document.createElement("link"); l.id = "ig-chrome-css"; l.rel = "stylesheet";
    l.href = BASE + "styles/ig-chrome.css"; document.head.appendChild(l);
  }
  if (!document.getElementById("ig-chrome-hide")) {
    var st = document.createElement("style"); st.id = "ig-chrome-hide";
    st.textContent = "html.ig-chrome-on .header-wrapper---absolute,html.ig-chrome-on .header-wrapper,html.ig-chrome-on [data-ig-old-footer]{display:none !important}";
    document.head.appendChild(st);
  }
  function findOldFooter() {
    var c = document.querySelectorAll(".footer-wrapper, footer, [class*='footer-section'], [class*='footer']");
    for (var i = 0; i < c.length; i++) {
      var e = c[i];
      if (e.closest("[data-ig-chrome]")) continue;
      if (/(^|\s)footer/.test(e.className || "") || e.tagName === "FOOTER") return e.closest("footer, .footer-wrapper") || e;
    }
    return null;
  }
  function mount() {
    if (!window.React || !window.ReactDOM || !window.SiteNav || !window.SiteFooter) return false;
    if (document.querySelector("[data-ig-chrome]")) return true;
    var h = React.createElement;
    var top = document.createElement("div"); top.setAttribute("data-ig-chrome", "top");
    document.body.insertBefore(top, document.body.firstChild);
    ReactDOM.createRoot(top).render(h(window.SiteNav, { rel: "" }));
    var old = findOldFooter();
    if (old) old.setAttribute("data-ig-old-footer", "");
    var bot = document.createElement("div"); bot.setAttribute("data-ig-chrome", "bottom");
    var wrap = document.querySelector(".page-wrapper");
    if (wrap && wrap.parentNode === document.body) wrap.parentNode.insertBefore(bot, wrap.nextSibling);
    else document.body.appendChild(bot);
    ReactDOM.createRoot(bot).render(h(window.SiteFooter, { rel: "" }));
    document.documentElement.classList.add("ig-chrome-on");
    return true;
  }
  function go() { if (!mount()) { var n = 0, t = setInterval(function () { if (mount() || ++n > 50) clearInterval(t); }, 100); } }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go, { once: true }); else go();
})();
