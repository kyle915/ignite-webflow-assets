/* CityRunner — auto-mounts CitySEOSection on Webflow BA Locations template pages.
   Reads the current city slug from body[data-wf-item-slug], fetches cities.json
   from the CDN, builds the city object, renders into #city-seo-root.
   Safe to load globally via Project Settings → Footer Code. */
(function(){
  if (window.__igniteCityRunnerLoaded) return;
  window.__igniteCityRunnerLoaded = true;

  var BA_LOCATIONS_COLLECTION_ID = "69e06354cc3d76c0127e1976";
  var CITIES_JSON_URL = "https://kyle915.github.io/ignite-webflow-assets/cities.json";
  var CDN = "https://kyle915.github.io/ignite-webflow-assets";

  function isCityPage() {
    var body = document.body;
    if (!body) return false;
    var col = body.getAttribute("data-wf-collection");
    return col === BA_LOCATIONS_COLLECTION_ID && !!body.getAttribute("data-wf-item-slug");
  }
  function getSlug() {
    return (document.body.getAttribute("data-wf-item-slug") || "").trim().toLowerCase();
  }

  function loadScript(src) {
    return new Promise(function(resolve, reject){
      var existing = document.querySelector('script[data-ignite-runtime="' + src + '"]');
      if (existing) return resolve();
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.setAttribute("data-ignite-runtime", src);
      s.onload = resolve;
      s.onerror = function(){ reject(new Error("Failed to load " + src)); };
      document.head.appendChild(s);
    });
  }
  function loadCss(href) {
    if (document.querySelector('link[rel=stylesheet][href="' + href + '"]')) return;
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    document.head.appendChild(l);
  }
  function ensureRoot() {
    if (document.getElementById("city-seo-root")) return;
    // Fallback: inject root if the template doesn't have one
    var div = document.createElement("div");
    div.id = "city-seo-root";
    div.style.minHeight = "400px";
    var body = document.body;
    // Try to insert before the footer if present, otherwise append to body
    var footer = document.querySelector("footer") || body.lastElementChild;
    if (footer && footer.parentNode === body) body.insertBefore(div, footer);
    else body.appendChild(div);
  }

  /* ---------- helpers for parsing CMS data ---------- */
  function splitList(s) {
    if (Array.isArray(s)) return s.filter(Boolean);
    if (s == null) return [];
    return String(s).split(/\r?\n|,|•|;|\|/g).map(function(x){return x.trim();}).filter(Boolean);
  }
  function parseNearby(s) {
    return splitList(s).map(function(e){
      var m = e.match(/^(.+?)(?:\s*[—\-|]\s*(\d+)\s*(?:mi|miles)?)?$/i);
      return !m ? {name:e} : (m[2] ? {name:m[1].trim(), miles:Number(m[2])} : {name:m[1].trim()});
    });
  }
  function setIf(o, k, v) {
    if (v != null && String(v).trim() !== "") o[k] = String(v).trim();
  }
  /* Parse a rich-text FAQ HTML blob into { q, a }. */
  function parseFaqHtml(html) {
    if (!html) return null;
    var holder = document.createElement("div");
    holder.innerHTML = html;
    var heading = holder.querySelector("h1, h2, h3, h4, h5, h6");
    var q, a;
    if (heading) {
      q = (heading.textContent || "").trim();
      heading.parentNode.removeChild(heading);
      a = (holder.textContent || "").replace(/\s+/g, " ").trim();
    } else {
      var strong = holder.querySelector("strong, b");
      if (strong) {
        q = (strong.textContent || "").trim();
        strong.parentNode.removeChild(strong);
        a = (holder.textContent || "").replace(/\s+/g, " ").trim();
      } else {
        var raw = (holder.textContent || "").trim();
        var qmark = raw.indexOf("?");
        if (qmark > -1 && qmark < raw.length - 1) {
          q = raw.slice(0, qmark + 1).trim();
          a = raw.slice(qmark + 1).trim();
        }
      }
    }
    if (!q || !a) return null;
    return { q: q, a: a };
  }
  function buildCity(rec) {
    var c = {};
    setIf(c, "slug",         rec.slug);
    setIf(c, "name",         rec.name);
    setIf(c, "state",        rec.state);
    setIf(c, "metro",        rec.metro);
    setIf(c, "intro",        rec.intro);
    setIf(c, "rushWindow",   rec.rushWindow);
    setIf(c, "yearsActive",  rec.yearsActive);
    setIf(c, "coverageNote", rec.coverageNote);
    setIf(c, "ambassadors",  rec.ambassadors);

    var acts = splitList(rec.activations);
    if (acts.length) c.activations = acts;
    var inds = splitList(rec.industries);
    if (inds.length) c.industries = inds;
    var nm = parseNearby(rec.nearbyMarkets);
    if (nm.length) c.nearbyMarkets = nm;

    var faqs = [];
    for (var i = 1; i <= 4; i++) {
      var f = parseFaqHtml(rec["faq" + i]);
      if (f) faqs.push(f);
    }
    if (faqs.length) c.faqs = faqs;

    var cta = {};
    if (rec.ctaHeadline) cta.heading = rec.ctaHeadline;
    if (rec.ctaBody) cta.body = rec.ctaBody;
    if (rec.ctaButtonText) cta.primaryLabel = rec.ctaButtonText;
    if (rec.ctaButtonUrl) cta.primaryHref = rec.ctaButtonUrl;
    if (rec.secondaryButtonText) cta.secondaryLabel = rec.secondaryButtonText;
    if (rec.secondaryButtonUrl) cta.secondaryHref = rec.secondaryButtonUrl;
    if (Object.keys(cta).length) c.cta = cta;

    c.generic = !c.intro;
    return c;
  }

  function fetchCities() {
    return fetch(CITIES_JSON_URL, { cache: "no-cache" }).then(function(r){
      if (!r.ok) throw new Error("cities.json HTTP " + r.status);
      return r.json();
    });
  }

  function start() {
    if (!isCityPage()) return;
    ensureRoot();

    Promise.all([
      loadScript("https://unpkg.com/react@18.3.1/umd/react.production.min.js"),
      loadScript("https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js")
    ]).then(function(){
      loadCss(CDN + "/styles/tokens.css");
      loadCss(CDN + "/styles/global.css");
      loadCss(CDN + "/styles/responsive.css");
      return loadScript(CDN + "/compiled/Shared.js");
    }).then(function(){
      return loadScript(CDN + "/compiled/Primitives.js");
    }).then(function(){
      return loadScript(CDN + "/compiled/MarketsData.js");
    }).then(function(){
      return loadScript(CDN + "/compiled/CitySEOSection.js");
    }).then(fetchCities).then(function(allCities){
      var slug = getSlug();
      var rec = (allCities || []).find(function(c){ return (c.slug || "").toLowerCase() === slug; });
      if (!rec) {
        console.warn("[city-runner] no record for slug:", slug);
        return;
      }
      var city = buildCity(rec);
      if (!city.name) {
        console.warn("[city-runner] CMS record missing name:", slug);
        return;
      }
      var root = document.getElementById("city-seo-root");
      if (!root) return console.error("[city-runner] no #city-seo-root in DOM");
      if (root.dataset.mounted === "1") return;
      try {
        ReactDOM.createRoot(root).render(
          React.createElement(window.CitySEOSection, { city: city })
        );
        root.dataset.mounted = "1";
        console.log("[city-runner] mounted:", city.name, "| faqs:", (city.faqs||[]).length);
      } catch (e) {
        console.error("[city-runner] render threw:", e);
        root.innerHTML = '<div style="padding:80px 24px;color:#fff;text-align:center;font-family:sans-serif">City failed to render — check console.</div>';
      }
    }).catch(function(err){
      console.error("[city-runner] startup failed:", err);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
