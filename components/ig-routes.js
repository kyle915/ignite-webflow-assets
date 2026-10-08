/* IG ROUTES: maps project file names (pages/x.html?…) to live URLs.
   www.igniteproductions.co for Ignite, sparkbyignite.igniteproductions.co for Spark.
   Only rewrites links when running on *.igniteproductions.co, so the design preview keeps working.
   Single source of truth: also used to build ROUTES.csv. */
(function () {
  var HOST = "https://www.igniteproductions.co";
  var SPARK = "https://sparkbyignite.igniteproductions.co";
  var STATIC = {
    "index.html": "/", "about.html": "/about", "contact.html": "/contact", "work.html": "/work",
    "blog.html": "/blog", "fractional.html": "/fractional", "markets.html": "/markets",
    "industries.html": "/industries", "compare.html": "/compare", "glossary.html": "/glossary",
    "best-experiential-marketing-agencies.html": "/best-experiential-marketing-agencies",
    "brand-ambassador-agency.html": "/brand-ambassador-agency", "agency-of-record.html": "/agency-of-record",
    "weddings.html": "/weddings", "travel.html": "/travel", "privacy.html": "/privacy", "terms.html": "/terms",
    "accessibility.html": "/accessibility", "thank-you.html": "/thank-you", "services.html": "/ignite-services",
    "topics.html": "/topics", "spark-retail.html": "/spark-retail",
    "spark-for-brands.html": "/spark-for-brands",
    "veteran-owned.html": "/veteran-owned", "trade-show-calendar.html": "/trade-show-calendar", "booth-staffing-checklist.html": "/booth-staffing-checklist",
    "trade-show-staffing-cost.html": "/trade-show-staffing/cost", "trade-show-staffing-calculator.html": "/trade-show-staffing/calculator", "trade-shows-tech-ai.html": "/trade-show-staffing/tech-ai-conferences", "404.html": "/404"
  };
  /* Spark pages live on the subdomain. Pricing + for-brands live on www (like Spark Retail) until the Spark site is redeployed. */
  var SPARK_STATIC = {
    "spark-platform-v2.html": "/", "spark.html": "/", "spark-platform.html": "/",
    "spark-products.html": "/product", "spark-solutions.html": "/solutions",
    "spark-use-cases.html": "/use-cases", "spark-compare.html": "/compare",
    "spark-trust.html": "/trust", "spark-explore.html": "/explore",
    "spark-pricing.html": "/demo" /* /spark-pricing held until real prices (2026-10-01) */
  };
  /* Project slug -> live Webflow CMS slug, where they differ */
  var CASE_ALIAS = { "krispy-krunchy": "krispy-krunchy-chicken", "marc-anthony": "marc-anthony-brands", "glendalough": "glendalough-distillery" };
  var PARAM = {
    "case-study.html": ["slug", "/portfolio/", "/work"],
    "blog-post.html": ["slug", "/post/", "/blog"],
    "city.html": ["c", "/cities/", "/markets"],
    "industry.html": ["i", "/industries/", "/industries"],
    "topic.html": ["t", "/topics/", "/topics"],
    "trade-show.html": ["s", "/trade-show-staffing/", "/services/trade-shows"]
  };
  var SPARK_PARAM = {
    "spark-product.html": ["p", "/product/", "/product"],
    "spark-solution.html": ["s", "/solutions/", "/solutions"],
    "spark-use-case.html": ["u", "/use-cases/", "/use-cases"]
  };
  /* Carry only campaign metadata already in the current URL. No cookies, storage,
     form data, click IDs, referrer collection, or additional network requests. */
  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term"];
  function buyerHost(host) { return /^(?:www\.)?igniteproductions\.co$/i.test(host); }
  function excludedJourney(url) {
    return /^\/(?:careers?|jobs?|apply|application|contact-thank-you|thank-you|privacy|terms|accessibility)(?:\/|$)/i.test(url.pathname)
      || /^(?:ambassador|applicant|talent|job)$/i.test(url.searchParams.get("role") || "");
  }
  function campaignValue(params, key) {
    var values = params.getAll(key);
    if (values.length !== 1) return null;
    var value = values[0].trim();
    /* Marketing labels/IDs only. Reject obvious email, URL, control-character,
       encoded payload and phone-shaped values rather than forwarding them. */
    if (!/^[a-z0-9][a-z0-9 ._~+-]{0,159}$/i.test(value)) return null;
    if (key !== "utm_id" && /^\+?[\d ().-]{7,}$/.test(value)) return null;
    return value;
  }
  function campaignLink(href, originalHref) {
    if (!href || /^(?:mailto:|tel:|#|javascript:|data:)/i.test(originalHref || href)) return null;
    try {
      var current = new URL(location.href), target = new URL(href, current.href);
      var original = new URL(originalHref || href, current.href);
      if (!buyerHost(current.hostname) || current.protocol !== "https:" || excludedJourney(current)) return null;
      if (!buyerHost(target.hostname) || target.origin !== current.origin || target.protocol !== "https:" || target.port || target.username || target.password || excludedJourney(target) || excludedJourney(original)) return null;
      /* A destination's explicit campaign takes precedence as a complete set.
         Never mix incoming campaign fields into a separately tagged destination. */
      if (UTM_KEYS.some(function (key) { return target.searchParams.has(key); })) return null;
      var explicit = UTM_KEYS.some(function (key) { return original.searchParams.has(key); });
      var source = explicit ? original.searchParams : current.searchParams, added = false;
      UTM_KEYS.forEach(function (key) {
        var value = campaignValue(source, key);
        if (value !== null) { target.searchParams.set(key, value); added = true; }
      });
      return added ? target.href : null;
    } catch (_) { return null; }
  }
  function route(href) {
    if (!href || /^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) return null;
    var m = href.match(/^(?:\.\.\/|\.\/)*(?:pages\/)?([a-z0-9-]+\.html)(\?[^#]*)?(#.*)?$/i);
    if (!m) return null;
    var file = m[1].toLowerCase(), qs = m[2] || "", hash = m[3] || "", host = HOST, path, p, v;
    if (/^services-[a-z0-9-]+\.html$/.test(file)) path = "/services/" + file.slice(9, -5);
    else if (/^city-[a-z0-9-]+\.html$/.test(file)) path = "/cities/" + file.slice(5, -5);
    else if (/^trade-show-staffing-(las-vegas|orlando|chicago)\.html$/.test(file)) path = "/trade-show-staffing/" + file.slice(20, -5);
    else if (SPARK_PARAM[file]) { p = SPARK_PARAM[file]; v = new URLSearchParams(qs).get(p[0]); host = SPARK; path = v ? p[1] + v : p[2]; qs = ""; }
    else if (SPARK_STATIC[file]) { host = SPARK; path = SPARK_STATIC[file]; }
    else if (PARAM[file]) {
      p = PARAM[file]; v = new URLSearchParams(qs).get(p[0]);
      if (file === "case-study.html" && v && CASE_ALIAS[v]) v = CASE_ALIAS[v];
      path = v && p[1] ? p[1] + v : p[2];
      qs = "";
    } else if (STATIC[file]) path = STATIC[file];
    else return null;
    if (qs) { var q = new URLSearchParams(qs); ["slug","c","i","t","p","s","u"].forEach(function (k) { q.delete(k); }); qs = q.toString() ? "?" + q.toString() : ""; }
    return host + path + qs + hash;
  }
  function rewrite(href) {
    var mapped = route(href);
    return campaignLink(mapped || href, href) || mapped;
  }
  window.IG_ROUTE = rewrite;
  window.IG_ROUTES_STATIC = STATIC; window.IG_ROUTES_PARAM = PARAM;
  window.IG_ROUTES_SPARK = SPARK_STATIC; window.IG_ROUTES_SPARK_PARAM = SPARK_PARAM; window.IG_CASE_ALIAS = CASE_ALIAS;
  if (!/igniteproductions\.co$/i.test(location.hostname)) return;
  function fixLink(a) {
    var href = a.getAttribute("href"), mapped = route(href);
    var applicant = a.getAttribute("data-ig-audience") === "applicant";
    var result = (!applicant && campaignLink(mapped || href, href)) || mapped;
    if (result && result !== href) a.setAttribute("href", result);
  }
  function fix(root) {
    (root.querySelectorAll ? root.querySelectorAll("a[href]") : []).forEach(function (a) {
      fixLink(a);
    });
  }
  function start() {
    fix(document);
    new MutationObserver(function (ms) { ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) { if (n.matches && n.matches("a[href]")) fix(n.parentNode || n); else fix(n); } }); if (m.type === "attributes" && m.target.matches("a[href]")) fixLink(m.target); }); })
      .observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });
    /* Covers links inserted and activated before the observer's next microtask. */
    function navigation(e) {
      var node = e.target && (e.target.nodeType === 1 ? e.target : e.target.parentElement);
      var a = node && node.closest && node.closest("a[href]");
      if (a) fixLink(a);
    }
    document.addEventListener("click", navigation, true);
    document.addEventListener("auxclick", navigation, true);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
