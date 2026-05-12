/* SeoEnhance — runs site-wide and decorates two existing templates:

   1. Blog Post pages (/blog/<slug>) — pulls headline + dek + date from the
      rendered React content (or the page <title> / <meta>) and injects
      Article + BreadcrumbList JSON-LD + canonical + hreflang + OG.

   2. Case Study pages (/work/<slug> or /case-studies/<slug>) — reads the
      case study record, runs slug-mapping (sector → industry, tags →
      services, body text → market matches), and injects a "Related"
      block of pill links above the existing "Keep reading" section.

   Idempotent. Safe to load globally. */
(function(){
  if (window.__igniteSeoEnhanceLoaded) return;
  window.__igniteSeoEnhanceLoaded = true;

  function injectLd(obj, id) {
    var sel = 'script[type="application/ld+json"][data-en="' + id + '"]';
    var s = document.querySelector(sel);
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-en", id);
      document.head.appendChild(s);
    }
    s.text = JSON.stringify(obj);
  }
  function setMeta(prop, content, isName) {
    var attr = isName ? "name" : "property";
    var sel = 'meta[' + attr + '="' + prop + '"]';
    var m = document.querySelector(sel);
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, prop); document.head.appendChild(m); }
    m.setAttribute("content", content);
  }
  function setLink(rel, href, hreflang) {
    var sel = 'link[rel="' + rel + '"]' + (hreflang ? '[hreflang="' + hreflang + '"]' : '');
    var l = document.querySelector(sel);
    if (!l) {
      l = document.createElement("link");
      l.rel = rel;
      if (hreflang) l.setAttribute("hreflang", hreflang);
      document.head.appendChild(l);
    }
    l.setAttribute("href", href);
  }

  function getPath() {
    return (location.pathname || "/").replace(/\/+$/, "") || "/";
  }
  function readMeta(name) {
    var m = document.querySelector('meta[name="' + name + '"]') ||
            document.querySelector('meta[property="' + name + '"]');
    return m ? m.getAttribute("content") : "";
  }
  function readHeroImage() {
    var og = readMeta("og:image");
    if (og) return og;
    var img = document.querySelector('article img, .blog-post img, .case-study img, main img');
    return img ? img.src : "";
  }

  /* ----------------------------- BLOG POST ----------------------------- */
  function isBlogPostPath(p) {
    return /^\/blog\/[^\/]+$/.test(p);
  }
  function enhanceBlogPost() {
    var p = getPath();
    var slug = p.split("/").pop();
    var url = "https://igniteproductions.co/blog/" + slug;
    /* Read what's available from the page */
    var pageTitle = (document.title || "").replace(/\s*[|—-]\s*Ignite Productions.*$/, "").trim();
    var desc = readMeta("description") || readMeta("og:description") || "";
    var image = readHeroImage();

    /* Try to pull the publish date from a <time> element or data attribute */
    var dateEl = document.querySelector('time[datetime], [data-published]');
    var datePublished = dateEl ? (dateEl.getAttribute("datetime") || dateEl.getAttribute("data-published")) : "";

    setLink("canonical", url);
    setLink("alternate", url, "en-us");
    setLink("alternate", url, "x-default");
    setMeta("og:title", pageTitle);
    setMeta("og:description", desc);
    setMeta("og:url", url);
    setMeta("og:type", "article");
    if (image) setMeta("og:image", image);

    var article = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle,
      "description": desc,
      "author": { "@type": "Organization", "name": "Ignite Productions", "url": "https://igniteproductions.co/" },
      "publisher": {
        "@type": "Organization",
        "name": "Ignite Productions",
        "logo": { "@type": "ImageObject", "url": "https://igniteproductions.co/assets/ignite-full-white.png" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": url }
    };
    if (image) article.image = [image];
    if (datePublished) {
      article.datePublished = datePublished;
      article.dateModified = datePublished;
    }
    injectLd(article, "blog-article");
    injectLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://igniteproductions.co/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://igniteproductions.co/blog" },
        { "@type": "ListItem", "position": 3, "name": pageTitle, "item": url }
      ]
    }, "blog-crumbs");
  }

  /* ----------------------------- CASE STUDY ----------------------------- */
  function isCaseStudyPath(p) {
    return /^\/(work|case-studies)\/[^\/]+$/.test(p);
  }
  /* Mapping logic — preserved verbatim from the handoff spec */
  function sectorToIndustry(sector) {
    var s = (sector || "").toLowerCase();
    if (s.indexOf("spirit") >= 0 || s.indexOf("alcohol") >= 0) return { slug: "alcohol-spirits", label: "Alcohol & Spirits" };
    if (s.indexOf("beverage") >= 0) return { slug: "cpg-beverage", label: "CPG Beverage" };
    if (s.indexOf("qsr") >= 0 || s.indexOf("food") >= 0) return { slug: "cpg-food-snack", label: "CPG Food & Snack" };
    if (s.indexOf("cpg") >= 0 || s.indexOf("personal") >= 0) return { slug: "cpg-food-snack", label: "CPG Food & Snack" };
    if (s.indexOf("telco") >= 0 || s.indexOf("retail") >= 0) return { slug: "qsr-restaurant", label: "QSR & Restaurant" };
    if (s.indexOf("sport") >= 0) return { slug: "sports-entertainment", label: "Sports & Entertainment" };
    return null;
  }
  function tagToService(t) {
    var x = (t || "").toLowerCase();
    if (x.indexOf("sampling") >= 0) return { slug: "product-sampling", label: "Product Sampling" };
    if (x.indexOf("staff") >= 0 || x.indexOf("ambassador") >= 0) return { slug: "event-staffing", label: "Event Staffing" };
    if (x.indexOf("mobile") >= 0 || x.indexOf("tour") >= 0 || x.indexOf("truck") >= 0) return { slug: "mobile-tours", label: "Mobile Tours" };
    if (x.indexOf("trade") >= 0 || x.indexOf("show") >= 0) return { slug: "trade-shows", label: "Trade Show Support" };
    if (x.indexOf("experien") >= 0 || x.indexOf("activation") >= 0 || x.indexOf("event") >= 0) return { slug: "experiential-marketing", label: "Experiential Marketing" };
    if (x.indexOf("promo") >= 0 || x.indexOf("co-op") >= 0) return { slug: "promotional-products", label: "Promotional Products" };
    if (x.indexOf("fabri") >= 0 || x.indexOf("build") >= 0) return { slug: "fabrication-builds", label: "Fabrication & Builds" };
    return null;
  }
  function readCaseContext() {
    /* CaseStudyData is loaded with the page if present; otherwise pull from the DOM */
    var slug = location.pathname.split("/").pop();
    var rec = null;
    if (window.CASE_STUDIES) {
      rec = window.CASE_STUDIES.find ? window.CASE_STUDIES.find(function(c){ return c.slug === slug; }) :
            (Array.isArray(window.CASE_STUDIES) ? null : window.CASE_STUDIES[slug]);
    }
    if (rec) return rec;
    /* Fallback — sniff text content */
    var heroH1 = document.querySelector("h1");
    var pageText = (document.body.innerText || "").slice(0, 4000);
    return {
      slug: slug,
      headline: heroH1 ? heroH1.textContent.trim() : "",
      sector: "",
      tags: [],
      subhead: "",
      category: "",
      _pageText: pageText
    };
  }
  function buildRelatedBlock(c) {
    var industry = sectorToIndustry(c.sector);
    var services = [];
    var seenSvc = {};
    (c.tags || []).forEach(function(t){
      var s = tagToService(t);
      if (s && !seenSvc[s.slug]) { services.push(s); seenSvc[s.slug] = true; }
    });
    if (services.length === 0 && c.category) {
      var cat = tagToService(c.category);
      if (cat) services.push(cat);
    }
    var allText = [c.headline, c.subhead || "", (c.tags || []).join(" "), c.category || "", c._pageText || ""].join(" ").toLowerCase();
    var cityHits = [];
    var seenCity = {};
    var markets = window.MARKETS_BY_SLUG || {};
    Object.keys(markets).forEach(function(slug){
      var m = markets[slug];
      var name = (m.name || "").toLowerCase();
      if (name && allText.indexOf(name) >= 0 && !seenCity[m.slug]) { cityHits.push(m); seenCity[m.slug] = true; }
    });
    if (!industry && services.length === 0 && cityHits.length === 0) return null;

    var wrap = document.createElement("section");
    wrap.id = "ignite-related";
    wrap.style.cssText = "padding:70px 0;background:var(--paper-000,#F5F2EC);color:var(--fg-1-inv,#0A0B0D);border-top:1px solid var(--paper-200,#E4DFCE);border-bottom:1px solid var(--paper-200,#E4DFCE)";
    var inner = document.createElement("div");
    inner.style.cssText = "max-width:1320px;margin:0 auto;padding:0 32px";
    wrap.appendChild(inner);

    inner.innerHTML =
      '<div style="display:flex;align-items:baseline;gap:18px;margin-bottom:22px;flex-wrap:wrap">' +
      '<span style="font-family:var(--font-mono,monospace);font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:var(--ignite-500,#FF5A1F)">&gt;&gt; RELATED</span>' +
      '<span style="flex:1;height:1px;background:var(--paper-200,#E4DFCE)"></span></div>' +
      '<div id="ignite-related-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px"></div>';

    var grid = inner.querySelector("#ignite-related-grid");

    function pill(label, href, fontFamily) {
      return '<a href="' + href + '" style="display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:var(--paper-100,#FBF8EE);border:1px solid var(--paper-200,#E4DFCE);color:var(--fg-1-inv,#0A0B0D);text-decoration:none;font-family:' + (fontFamily || 'var(--font-display,sans-serif)') + ';font-weight:500;font-size:14px">' + label + ' <span style="font-size:11px;color:var(--ignite-500,#FF5A1F)">↗</span></a>';
    }
    function col(label, html) {
      return '<div><div style="font-family:var(--font-mono,monospace);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#54585e;margin-bottom:10px">' + label + '</div><div style="display:flex;flex-wrap:wrap;gap:8px">' + html + '</div></div>';
    }
    var cols = "";
    if (industry) cols += col("INDUSTRY", pill(industry.label, "/industries/" + industry.slug));
    if (services.length) cols += col("SERVICES", services.map(function(s){ return pill(s.label, "/services/" + s.slug); }).join(""));
    if (cityHits.length) cols += col("MARKETS", cityHits.slice(0, 6).map(function(m){ return pill(m.name, "/cities/" + m.slug, "var(--font-mono,monospace)"); }).join(""));
    grid.innerHTML = cols;

    return wrap;
  }
  function enhanceCaseStudy() {
    if (document.getElementById("ignite-related")) return;
    var c = readCaseContext();
    var block = buildRelatedBlock(c);
    if (!block) return;
    /* Try to insert above an existing "keep reading" / related-cases section */
    var anchor = document.querySelector('[data-keep-reading], #keep-reading, .keep-reading') ||
                 document.querySelector('footer');
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(block, anchor);
    } else {
      document.body.appendChild(block);
    }
  }

  function run() {
    var p = getPath();
    if (isBlogPostPath(p)) enhanceBlogPost();
    if (isCaseStudyPath(p)) {
      /* Wait one frame for React content to mount */
      var tries = 0;
      var attempt = function() {
        try { enhanceCaseStudy(); } catch (e) { console.error("[seo-enhance]", e); }
        tries++;
        if (tries < 6 && !document.getElementById("ignite-related")) setTimeout(attempt, 300 * tries);
      };
      attempt();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
