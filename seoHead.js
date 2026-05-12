/* SeoHead — global SEO head injector.
   Loaded site-wide via Webflow custom code. Adds (idempotently) on every page:
     - <link rel="canonical"> (self-referencing current URL, stripped of query/hash)
     - <link rel="alternate" hreflang="en-us"> + hreflang="x-default"
   On homepage only:
     - Organization + LocalBusiness JSON-LD with sameAs array
     - Site-wide FAQPage JSON-LD
   On every page, ensures og:url is set to canonical.
   Idempotent — does nothing if SeoHead has already run. */
(function(){
  if (window.__igniteSeoHeadLoaded) return;
  window.__igniteSeoHeadLoaded = true;

  var ROOT = "https://igniteproductions.co";
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

  /* Homepage-only payloads */
  if (path === "/" || path === "") {
    injectLd({
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "name": "Ignite Productions",
      "alternateName": "Ignite",
      "description": "Veteran-owned experiential marketing and brand activation agency. Event staffing, product sampling, mobile tours, fabrication, trade shows, promotional products across all 50 states.",
      "url": ROOT,
      "logo": ROOT + "/assets/ignite-full-black.png",
      "foundingDate": "2018",
      "areaServed": "United States",
      "sameAs": [
        "https://www.linkedin.com/company/ignite-productionsllc/",
        "https://www.instagram.com/igniteproductionsllc/",
        "https://www.facebook.com/igniteproductionsllc/"
      ],
      "makesOffer": [
        { "@type": "Offer", "name": "Experiential Marketing" },
        { "@type": "Offer", "name": "Mobile Marketing Tours" },
        { "@type": "Offer", "name": "Fabrication & Builds" },
        { "@type": "Offer", "name": "Event Staffing" },
        { "@type": "Offer", "name": "Product Sampling" },
        { "@type": "Offer", "name": "Trade Show Support" },
        { "@type": "Offer", "name": "Promotional Products" }
      ]
    }, "org");

    injectLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How fast can you staff an activation?", "acceptedAnswer": { "@type": "Answer", "text": "Rush queue runs at 48 hours from brief to boots on the ground. Standard staffing books 5-10 business days out. We staff in all 50 states." } },
        { "@type": "Question", "name": "Do you handle permits, COIs, and on-site logistics?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Permits, certificates of insurance, transport, storage, install, and strike are all in scope. We are a turnkey field-to-finish shop." } },
        { "@type": "Question", "name": "What's the minimum engagement?", "acceptedAnswer": { "@type": "Answer", "text": "Single-event activations through national multi-market tours. No long-term contract required. We scope to fit your campaign." } },
        { "@type": "Question", "name": "Can you run alcohol sampling programs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We staff TIPS / TABC / RBS certified ambassadors in every market that requires them." } },
        { "@type": "Question", "name": "Which markets do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "All 50 states and 200+ named metros. Core network runs 30 primary markets daily with surge capacity in 170+ more." } }
      ]
    }, "home-faq");
  }
})();
