/* IndustriesRunner — auto-mounts the Industries hub or per-industry detail
   page on Webflow. Detects pathname:
     /industries           → IndustriesHub
     /industries/<slug>    → IndustrySection (slug looked up in INDUSTRIES_DATA)
   Inserts a #industries-root if the page doesn't already have one.
   Safe to load globally via Project Settings → Footer Code. */
(function(){
  if (window.__igniteIndustriesRunnerLoaded) return;
  window.__igniteIndustriesRunnerLoaded = true;

  var CDN = "https://kyle915.github.io/ignite-webflow-assets";

  function pathInfo() {
    var p = (location.pathname || "").replace(/\/+$/, "").toLowerCase();
    var m = p.match(/^\/industries\/([^\/?#]+)$/);
    if (m) return { mode: "detail", slug: m[1] };
    if (p === "/industries" || p === "") return p === "/industries" ? { mode: "hub" } : null;
    return null;
  }

  function loadScript(src, alreadyLoadedCheck) {
    return new Promise(function(resolve, reject){
      if (typeof alreadyLoadedCheck === "function" && alreadyLoadedCheck()) {
        window.__indRunnerStage = "skip:" + src.split("/").pop();
        return resolve();
      }
      var srcOnly = src.split("?")[0];
      var existing = Array.prototype.find.call(
        document.scripts,
        function(s){ return s.src && s.src.split("?")[0] === srcOnly; }
      );
      if (existing) {
        window.__indRunnerStage = "exists:" + srcOnly.split("/").pop();
        return resolve();
      }
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.setAttribute("data-ignite-runtime", "1");
      s.onload = function(){
        window.__indRunnerStage = "loaded:" + srcOnly.split("/").pop();
        resolve();
      };
      s.onerror = function(){
        window.__indRunnerStage = "ERR:" + srcOnly.split("/").pop();
        reject(new Error("Failed to load " + src));
      };
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
    if (document.getElementById("industries-root")) return;
    var div = document.createElement("div");
    div.id = "industries-root";
    div.style.minHeight = "400px";
    var body = document.body;
    var footer = document.querySelector("footer") || body.lastElementChild;
    if (footer && footer.parentNode === body) body.insertBefore(div, footer);
    else body.appendChild(div);
  }

  function injectLd(obj) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  }
  function setMeta(prop, content) {
    var m = document.querySelector('meta[property="' + prop + '"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); }
    m.setAttribute("content", content);
  }
  function applyDetailSeo(ind, slug) {
    var url = "https://igniteproductions.co/industries/" + slug;
    document.title = ind.name + " — Activation, Staffing, Sampling | Ignite Productions";
    var md = document.querySelector("meta[name=description]");
    var desc = "Ignite Productions supports " + ind.name.toLowerCase() +
      " brands with experiential marketing, sampling, event staffing, mobile tours, and trade show programs." +
      (ind.compliance ? " Full compliance, certifications, and paperwork handled." : "");
    if (md) md.setAttribute("content", desc);
    var canonical = document.querySelector("link[rel=canonical]");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.setAttribute("href", url);
    setMeta("og:title", ind.name + " — Ignite Productions");
    setMeta("og:description", (ind.hero && ind.hero.lede) || "");
    setMeta("og:url", url);
    setMeta("og:type", "website");

    injectLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://igniteproductions.co/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://igniteproductions.co/industries" },
        { "@type": "ListItem", "position": 3, "name": ind.name, "item": url }
      ]
    });
    injectLd({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": ind.name + " activation, staffing, and sampling",
      "provider": { "@type": "Organization", "name": "Ignite Productions", "url": "https://igniteproductions.co/" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "url": url,
      "description": (ind.hero && ind.hero.lede) || ""
    });
    var faqs = (ind.faqs || []).filter(function(f){ return f && f.q && f.a; });
    if (faqs.length) {
      injectLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(function(f){
          return { "@type": "Question", "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a } };
        })
      });
    }
  }

  function start() {
    window.__indRunnerStage = "start";
    var info = pathInfo();
    if (!info) { window.__indRunnerStage = "not-industries-page"; return; }
    window.__indRunnerStage = "ensureRoot:" + info.mode;
    ensureRoot();

    Promise.all([
      loadScript("https://unpkg.com/react@18.3.1/umd/react.production.min.js",
        function(){ return !!window.React; }),
      loadScript("https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
        function(){ return !!window.ReactDOM; })
    ]).then(function(){
      window.__indRunnerStage = "react-ready";
      loadCss(CDN + "/styles/tokens.css");
      loadCss(CDN + "/styles/global.css");
      loadCss(CDN + "/styles/responsive.css");
      return loadScript(CDN + "/compiled/Shared.js",
        function(){ return !!window.OpsLine; });
    }).then(function(){
      return loadScript(CDN + "/compiled/Primitives.js",
        function(){ return !!window.Container; });
    }).then(function(){
      return loadScript(CDN + "/compiled/NavFooter.js",
        function(){ return !!window.SiteNav; });
    }).then(function(){
      return loadScript(CDN + "/compiled/IndustriesData.js",
        function(){ return !!window.INDUSTRIES_DATA; });
    }).then(function(){
      if (info.mode === "hub") {
        return loadScript(CDN + "/compiled/IndustriesHub.js",
          function(){ return !!window.IndustriesHub; });
      }
      return loadScript(CDN + "/compiled/IndustrySection.js",
        function(){ return !!window.IndustrySection; });
    }).then(function(){
      window.__indRunnerStage = "scripts-loaded:" + info.mode;
      var root = document.getElementById("industries-root");
      if (!root) return console.error("[industries-runner] no #industries-root");
      if (root.dataset.mounted === "1") return;

      var children = [];
      var includeNav = !!(window.SiteNav && window.SiteFooter);

      if (info.mode === "hub") {
        if (includeNav) children.push(React.createElement(window.SiteNav, { active: "INDUSTRIES" }));
        children.push(React.createElement(window.IndustriesHub, {}));
        if (includeNav) children.push(React.createElement(window.SiteFooter, {}));
      } else {
        var ind = (window.INDUSTRIES_DATA || {})[info.slug];
        if (includeNav) children.push(React.createElement(window.SiteNav, { active: "INDUSTRIES" }));
        if (!ind) {
          children.push(React.createElement("section", {
            style: { padding: "180px 0", background: "var(--ink-000)", color: "var(--fg-1)",
              borderTop: "1px solid var(--ink-400)", minHeight: "60vh" }
          },
            React.createElement(window.Container, null,
              React.createElement("p", { style: { fontFamily: "var(--font-mono)", fontSize: 12,
                letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" } },
                ">> INDUSTRY NOT YET LIVE"),
              React.createElement("h1", { style: { marginTop: 22, fontFamily: "var(--font-display)",
                fontWeight: 800, fontSize: "clamp(48px, 7vw, 120px)",
                letterSpacing: "-0.04em", lineHeight: 0.92 } },
                "We cover that vertical."),
              React.createElement("p", { style: { marginTop: 28, fontSize: 19, color: "var(--fg-2)", maxWidth: 640 } },
                "The dedicated industry page isn't published yet — but the work is. Brief us and we'll send the right specialists, certifications, and a quote within 48 hours."),
              React.createElement("a", { href: "https://igniteproductions.co/contact?urgent=1",
                style: { display: "inline-block", marginTop: 32, padding: "16px 22px",
                  background: "var(--ignite-500)", color: "#fff", textDecoration: "none",
                  fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em",
                  textTransform: "uppercase", borderRadius: 6 } }, "Start a brief")
            )
          ));
        } else {
          applyDetailSeo(ind, info.slug);
          children.push(React.createElement(window.IndustrySection, { ind: ind }));
        }
        if (includeNav) children.push(React.createElement(window.SiteFooter, {}));
      }

      try {
        ReactDOM.createRoot(root).render(
          React.createElement.apply(React, [React.Fragment, null].concat(children))
        );
        root.dataset.mounted = "1";
        console.log("[industries-runner] mounted:", info.mode, info.slug || "");
      } catch (e) {
        console.error("[industries-runner] render threw:", e);
        root.innerHTML = '<div style="padding:80px 24px;color:#fff;text-align:center;font-family:sans-serif">Industries failed to render — check console.</div>';
      }
    }).catch(function(err){
      window.__indRunnerStage = "ERR: " + (err && err.message || err);
      console.error("[industries-runner] startup failed:", err);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
