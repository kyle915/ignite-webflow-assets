/* ContentRunner — auto-mounts Glossary hub/term + Topics hub/pillar.
   URL detection:
     /glossary             → GlossaryHub
     /glossary/<slug>      → GlossaryTerm (DefinedTerm + FAQPage JSON-LD)
     /topics               → TopicsHub
     /topics/<slug>        → TopicPillar (Article + BreadcrumbList JSON-LD)
   Inserts #content-root if missing. Safe to ship site-wide via Webflow
   footer custom code. */
(function(){
  if (window.__igniteContentRunnerLoaded) return;
  window.__igniteContentRunnerLoaded = true;

  var CDN = "https://kyle915.github.io/ignite-webflow-assets";

  function pathInfo() {
    var p = (location.pathname || "").replace(/\/+$/, "").toLowerCase();
    var m;
    if ((m = p.match(/^\/glossary\/([^\/?#]+)$/))) return { kind: "glossary", mode: "detail", slug: m[1] };
    if (p === "/glossary") return { kind: "glossary", mode: "hub" };
    if ((m = p.match(/^\/topics\/([^\/?#]+)$/))) return { kind: "topics", mode: "detail", slug: m[1] };
    if (p === "/topics") return { kind: "topics", mode: "hub" };
    return null;
  }

  function loadScript(src, check) {
    return new Promise(function(resolve, reject){
      if (typeof check === "function" && check()) return resolve();
      var srcOnly = src.split("?")[0];
      var existing = Array.prototype.find.call(document.scripts, function(s){ return s.src && s.src.split("?")[0] === srcOnly; });
      if (existing) return resolve();
      var s = document.createElement("script");
      s.src = src; s.async = false;
      s.setAttribute("data-ignite-runtime", "1");
      s.onload = resolve;
      s.onerror = function(){ reject(new Error("Failed: " + src)); };
      document.head.appendChild(s);
    });
  }
  function loadCss(href) {
    if (document.querySelector('link[rel=stylesheet][href="' + href + '"]')) return;
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = href;
    document.head.appendChild(l);
  }
  function ensureRoot() {
    if (document.getElementById("content-root")) return;
    var div = document.createElement("div");
    div.id = "content-root";
    div.style.minHeight = "400px";
    var body = document.body;
    var footer = document.querySelector("footer") || body.lastElementChild;
    if (footer && footer.parentNode === body) body.insertBefore(div, footer);
    else body.appendChild(div);
  }
  function injectLd(obj, id) {
    var sel = 'script[type="application/ld+json"][data-cr="' + id + '"]';
    var s = document.querySelector(sel);
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-cr", id);
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
  function setLink(rel, href, extraAttr) {
    var sel = 'link[rel="' + rel + '"]' + (extraAttr ? '[' + extraAttr.k + '="' + extraAttr.v + '"]' : '');
    var l = document.querySelector(sel);
    if (!l) {
      l = document.createElement("link");
      l.rel = rel;
      if (extraAttr) l.setAttribute(extraAttr.k, extraAttr.v);
      document.head.appendChild(l);
    }
    l.setAttribute("href", href);
  }

  function applyGlossaryTermSeo(term, slug) {
    var url = "https://igniteproductions.co/glossary/" + slug;
    document.title = term.term + " — Definition | Ignite Productions";
    setMeta("description", term.definition.length > 160 ? term.definition.slice(0, 157) + "..." : term.definition, true);
    setLink("canonical", url);
    setLink("alternate", url, { k: "hreflang", v: "en-us" });
    setLink("alternate", url, { k: "hreflang", v: "x-default" });
    setMeta("og:title", term.term + " — Ignite Productions");
    setMeta("og:description", term.short + " — " + term.definition.slice(0, 140));
    setMeta("og:url", url);
    setMeta("og:type", "article");

    injectLd({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.definition,
      "url": url,
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Ignite Productions Field Marketing Glossary",
        "url": "https://igniteproductions.co/glossary"
      },
      "alternateName": term.short,
      "termCode": slug
    }, "gloss-term");
    injectLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://igniteproductions.co/" },
        { "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://igniteproductions.co/glossary" },
        { "@type": "ListItem", "position": 3, "name": term.term, "item": url }
      ]
    }, "gloss-crumbs");
    var faqs = (term.faqs || []).filter(function(f){ return f && f.q && f.a; });
    if (faqs.length) {
      injectLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(function(f){
          return { "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } };
        })
      }, "gloss-faq");
    }
  }
  function applyGlossaryHubSeo() {
    var url = "https://igniteproductions.co/glossary";
    document.title = "Field Marketing Glossary — TIPS, TABC, RBS, COI Definitions | Ignite Productions";
    setMeta("description", "Plain-language definitions for the certifications, programs, and acronyms that come up on every field-marketing brief — TIPS, TABC, RBS, COIs, co-op programs, GPS-verified sampling, and more.", true);
    setLink("canonical", url);
    setLink("alternate", url, { k: "hreflang", v: "en-us" });
    setLink("alternate", url, { k: "hreflang", v: "x-default" });
    setMeta("og:title", "Field Marketing Glossary | Ignite Productions");
    setMeta("og:description", "Plain-language definitions for TIPS, TABC, RBS, COIs, co-op programs, GPS-verified sampling, and the rest of the field-marketing vocabulary.");
    setMeta("og:url", url);
    setMeta("og:type", "website");
    injectLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Field Marketing Glossary",
      "url": url,
      "description": "Definitions of field-marketing certifications, programs, and acronyms.",
      "inLanguage": "en-US"
    }, "gloss-coll");
    injectLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://igniteproductions.co/" },
        { "@type": "ListItem", "position": 2, "name": "Glossary", "item": url }
      ]
    }, "gloss-crumbs");
  }
  function applyTopicSeo(topic, slug) {
    var url = "https://igniteproductions.co/topics/" + slug;
    document.title = topic.title + " — Field Marketing Pillar | Ignite Productions";
    setMeta("description", topic.lede.length > 160 ? topic.lede.slice(0, 157) + "..." : topic.lede, true);
    setLink("canonical", url);
    setLink("alternate", url, { k: "hreflang", v: "en-us" });
    setLink("alternate", url, { k: "hreflang", v: "x-default" });
    setMeta("og:title", topic.title + " — Ignite Productions");
    setMeta("og:description", topic.lede);
    setMeta("og:url", url);
    setMeta("og:type", "article");

    injectLd({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": topic.headline,
      "description": topic.lede,
      "author": { "@type": "Organization", "name": "Ignite Productions", "url": "https://igniteproductions.co/" },
      "publisher": {
        "@type": "Organization",
        "name": "Ignite Productions",
        "logo": { "@type": "ImageObject", "url": "https://igniteproductions.co/assets/ignite-full-white.png" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
      "articleSection": topic.title,
      "keywords": (topic.blogTags || []).join(", ")
    }, "topic-article");
    injectLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://igniteproductions.co/" },
        { "@type": "ListItem", "position": 2, "name": "Topics", "item": "https://igniteproductions.co/topics" },
        { "@type": "ListItem", "position": 3, "name": topic.title, "item": url }
      ]
    }, "topic-crumbs");
  }
  function applyTopicsHubSeo() {
    var url = "https://igniteproductions.co/topics";
    document.title = "Field Marketing Topic Pillars | Ignite Productions";
    setMeta("description", "Five pillars of how we run field-marketing programs: field marketing, experiential activation, brand sampling, trade-show staffing, and mobile tours.", true);
    setLink("canonical", url);
    setLink("alternate", url, { k: "hreflang", v: "en-us" });
    setLink("alternate", url, { k: "hreflang", v: "x-default" });
    setMeta("og:title", "Topic Pillars | Ignite Productions");
    setMeta("og:description", "Five pillars of field-marketing execution — what each is, where it fits, and which brands win with it.");
    setMeta("og:url", url);
    setMeta("og:type", "website");
    injectLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Field Marketing Topic Pillars",
      "url": url,
      "inLanguage": "en-US"
    }, "topic-coll");
    injectLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://igniteproductions.co/" },
        { "@type": "ListItem", "position": 2, "name": "Topics", "item": url }
      ]
    }, "topic-crumbs");
  }

  function start() {
    var info = pathInfo();
    if (!info) return;
    ensureRoot();

    Promise.all([
      loadScript("https://unpkg.com/react@18.3.1/umd/react.production.min.js", function(){ return !!window.React; }),
      loadScript("https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js", function(){ return !!window.ReactDOM; })
    ]).then(function(){
      loadCss(CDN + "/styles/tokens.css");
      loadCss(CDN + "/styles/global.css");
      loadCss(CDN + "/styles/responsive.css");
      return loadScript(CDN + "/compiled/Shared.js", function(){ return !!window.OpsLine; });
    }).then(function(){
      return loadScript(CDN + "/compiled/Primitives.js", function(){ return !!window.Container; });
    }).then(function(){
      return loadScript(CDN + "/compiled/NavFooter.js", function(){ return !!window.SiteNav; });
    }).then(function(){
      if (info.kind === "glossary") {
        return loadScript(CDN + "/compiled/GlossaryData.js", function(){ return !!window.GLOSSARY_TERMS; })
          .then(function(){ return loadScript(CDN + "/compiled/GlossarySection.js", function(){ return !!window.GlossaryHub; }); });
      }
      return loadScript(CDN + "/compiled/TopicData.js", function(){ return !!window.TOPIC_PILLARS; })
        .then(function(){ return loadScript(CDN + "/compiled/TopicSection.js", function(){ return !!window.TopicsHub; }); });
    }).then(function(){
      var root = document.getElementById("content-root");
      if (!root || root.dataset.mounted === "1") return;
      var children = [];
      var includeNav = !!(window.SiteNav && window.SiteFooter);
      if (includeNav) children.push(React.createElement(window.SiteNav, {}));

      if (info.kind === "glossary") {
        if (info.mode === "hub") {
          applyGlossaryHubSeo();
          children.push(React.createElement(window.GlossaryHub, {}));
        } else {
          var term = (window.GLOSSARY_TERMS || {})[info.slug];
          if (term) {
            applyGlossaryTermSeo(term, info.slug);
            children.push(React.createElement(window.GlossaryTerm, { term: term }));
          } else {
            children.push(notFoundFragment("Glossary term not found"));
          }
        }
      } else {
        if (info.mode === "hub") {
          applyTopicsHubSeo();
          children.push(React.createElement(window.TopicsHub, {}));
        } else {
          var topic = (window.TOPIC_PILLARS || {})[info.slug];
          if (topic) {
            applyTopicSeo(topic, info.slug);
            children.push(React.createElement(window.TopicPillar, { topic: topic }));
          } else {
            children.push(notFoundFragment("Topic pillar not found"));
          }
        }
      }
      if (includeNav) children.push(React.createElement(window.SiteFooter, {}));
      try {
        ReactDOM.createRoot(root).render(React.createElement.apply(React, [React.Fragment, null].concat(children)));
        root.dataset.mounted = "1";
        console.log("[content-runner] mounted:", info.kind, info.mode, info.slug || "");
      } catch (e) {
        console.error("[content-runner] render threw:", e);
        root.innerHTML = '<div style="padding:80px 24px;color:#fff;text-align:center;font-family:sans-serif">Content failed to render — check console.</div>';
      }
    }).catch(function(err){
      console.error("[content-runner] startup failed:", err);
    });
  }

  function notFoundFragment(label) {
    return React.createElement("section", {
      style: { padding: "160px 0", background: "var(--ink-000)", color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)", minHeight: "60vh" }
    }, React.createElement(window.Container, null,
      React.createElement("p", { style: { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" } }, ">> NOT FOUND"),
      React.createElement("h1", { style: { marginTop: 22, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(48px, 7vw, 120px)", letterSpacing: "-0.04em", lineHeight: 0.92 } }, label),
      React.createElement("a", { href: "https://igniteproductions.co/contact", style: { display: "inline-block", marginTop: 28, padding: "16px 22px", background: "var(--ignite-500)", color: "#fff", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", borderRadius: 6 } }, "Start a brief")
    ));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
