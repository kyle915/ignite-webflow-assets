/* SeoHead — global SEO head injector.
   Loaded site-wide via Webflow custom code. Adds (idempotently) on every page:
     - <link rel="canonical"> (self-referencing current URL, stripped of query/hash)
     - <link rel="alternate" hreflang="en-us"> + hreflang="x-default"
   On homepage only:
     - Organization JSON-LD (single block; no LocalBusiness)
   On /brand-ambassador-agency only:
     - FAQPage JSON-LD (one Q/A)
   On every page, ensures og:url is set to canonical.
   Idempotent — does nothing if SeoHead has already run. */
(function(){
  if (window.__igniteSeoHeadLoaded) return;
  window.__igniteSeoHeadLoaded = true;

  var ROOT = "https://www.igniteproductions.co";
  var path = (location.pathname || "/").replace(/\/+$/, "") || "/";
  var canonical = (ROOT + (path === "/" ? "/" : path)).replace(/\/{2,}/g, function(m, off){ return off === 6 ? m : "/"; });

  function ensureLink(rel, hreflang, href) {
    var sel = 'link[rel="' + rel + '"]' + (hreflang ? '[hreflang="' + hreflang + '"]' : "");
    var l = document.querySelector(sel);
    if (!l) {
      l = document.createElement("link");
      l.rel = rel;
      if (hreflang) l.setAttribute("hreflang", hreflang);
      document.head.appendChild(l);
    }
    l.setAttribute("href", href);
  }
  function ensureMeta(prop, content, isName) {
    var attr = isName ? "name" : "property";
    var sel = 'meta[' + attr + '="' + prop + '"]';
    var m = document.querySelector(sel);
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, prop); document.head.appendChild(m); }
    m.setAttribute("content", content);
  }
  function injectLd(obj, id) {
    var sel = 'script[type="application/ld+json"][data-seo="' + id + '"]';
    var s = document.querySelector(sel);
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo", id);
      document.head.appendChild(s);
    }
    s.text = JSON.stringify(obj);
  }

  ensureLink("canonical", null, canonical);
  ensureLink("alternate", "en-us", canonical);
  ensureLink("alternate", "x-default", canonical);
  ensureMeta("og:url", canonical);

  /* Homepage-only Organization schema */
  if (path === "/" || path === "") {
    var staleFaq = document.querySelector('script[type="application/ld+json"][data-seo="home-faq"]');
    if (staleFaq) staleFaq.remove();

    injectLd({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ignite Productions",
      "legalName": "Ignite Productions LLC",
      "description": "Veteran-owned (VOSB) field marketing, event marketing, event staffing, and brand ambassador agency with 257,000+ vetted brand ambassadors. Founded 2018 in Sparks, Nevada.",
      "url": ROOT,
      "foundingDate": "2018",
      "email": "staffing@igniteproductions.co",
      "telephone": "775.406.0435",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sparks",
        "addressRegion": "NV",
        "addressCountry": "US"
      },
      "areaServed": "US",
      "sameAs": "https://www.linkedin.com/company/ignite-productionsllc/"
    }, "org");
  }

  /* Brand ambassador agency FAQ schema */
  if (path === "/brand-ambassador-agency") {
    injectLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is a brand ambassador agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A brand ambassador agency recruits, vets, trains, and deploys people who represent a brand at sampling, retail demos, festivals, and trade shows. Ignite Productions is a veteran-owned (VOSB) brand ambassador agency founded in 2018 in Sparks, Nevada. We staff 257,000+ vetted brand ambassadors in all 50 states. Contact staffing@igniteproductions.co or 775.406.0435."
        }
      }]
    }, "baa-faq");
  }
})();
