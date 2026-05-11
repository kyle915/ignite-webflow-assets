/* Ignite Services — bold, SEO-driven services page covering all 7 lanes.
   Composed from: SiteNav, SiteFooter, ServicesData (SERVICES_DATA),
   and HOME_SERVICES image refs already in the project. */

/* inject a one-off keyframe for the measured pulse */
if (typeof document !== "undefined" && !document.getElementById("svc-measured-kf")) {
  const _kf = document.createElement("style");
  _kf.id = "svc-measured-kf";
  _kf.textContent = `
    @keyframes svcMeasuredPulse {
      0%,100% { opacity: 0.55; transform: scale(1); }
      50%     { opacity: 1;    transform: scale(1.06); }
    }
    @keyframes svcMeasuredTextPulse {
      0%,100% { text-shadow: 0 0 18px rgba(214,243,95,0.35); }
      50%     { text-shadow: 0 0 38px rgba(214,243,95,0.7); }
    }
    @keyframes svcBloomA {
      0%,100% { opacity: 0.55; transform: translate(-10%, 10%) scale(1); }
      50%     { opacity: 0.9;  transform: translate(-6%, 6%)   scale(1.12); }
    }
    @keyframes svcBloomB {
      0%,100% { opacity: 0.4;  transform: translate(10%, 20%) scale(1); }
      50%     { opacity: 0.75; transform: translate(6%, 14%)  scale(1.18); }
    }
    @keyframes svcScanY {
      0%   { transform: translateY(-100%); opacity: 0; }
      8%   { opacity: 1; }
      92%  { opacity: 1; }
      100% { transform: translateY(100vh); opacity: 0; }
    }
    @keyframes svcDrift1 {
      0%,100% { transform: translate(0,0) rotate(-6deg); }
      50%     { transform: translate(10px,-14px) rotate(-6deg); }
    }
    @keyframes svcDrift2 {
      0%,100% { transform: translate(0,0) rotate(4deg); }
      50%     { transform: translate(-12px,10px) rotate(4deg); }
    }
    @keyframes svcTicker {
      0%   { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @keyframes svcCursorBlink {
      0%,50%  { opacity: 1; }
      51%,100%{ opacity: 0; }
    }
  `;
  document.head.appendChild(_kf);
}
const {
  useState: svaState,
  useEffect: svaEffect,
  useRef: svaRef
} = React;
const SVC_LANES = [{
  slug: "experiential-marketing",
  n: "01",
  flag: true,
  accent: "#FF5A1F",
  title: "Experiential Marketing",
  sub: "Brand activations, festival footprints, immersive installations.",
  long: "Festival activations, pop-ups, brand activations, immersive installations, campus tours. We design the moment, build the set, staff the floor, and capture the metric — start to recap.",
  bullets: ["Festival Activations", "Pop-Ups", "Brand Activations", "Immersive Installations", "Campus Tours", "Mall & Lifestyle Centers"],
  img: window.__resources?.r_assets_experiential_liquiddeath_nascar_jpg || "https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg",
  imgPos: "center 40%",
  meta: ["48 markets / yr", "350+ activations", "12 yrs running"]
}, {
  slug: "mobile-tours",
  n: "02",
  flag: true,
  accent: "#FFB627",
  title: "Mobile Marketing Tours",
  sub: "Ad trucks, branded bikes, sprinter vans, sampling roadshows.",
  long: "Multi-city tours engineered end-to-end — vehicles, permits, drivers, on-site teams, daily recaps. Built to land in the right neighborhoods at the right hours.",
  bullets: ["Ad Trucks", "Mobile Billboards", "Branded Bikes", "Sprinter Vans", "Sampling Roadshows", "Tour Routing & Permits"],
  img: window.__resources?.r_68962c63c89c6cf0f46a6b66_SMALLS93_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg",
  imgPos: "center 45%",
  meta: ["50 states ready", "Tour-of-One specialty", "Full DOT compliance"]
}, {
  slug: "fabrication-builds",
  n: "03",
  flag: true,
  accent: "#FF5A1F",
  title: "Fabrication & Builds",
  sub: "Scenic fab, modular activations, touring builds, photo ops.",
  long: "In-house shop for custom builds and modular activations. We ship, set, strike, and store — and we engineer for road wear so your hero piece survives ten markets.",
  bullets: ["Custom Builds", "Scenic Fabrication", "Pop-Up Construction", "Modular Activations", "Touring Builds", "Photo Op Installations"],
  img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80",
  imgPos: "center 40%",
  meta: ["In-house shop", "CAD + CNC", "Tour-ready engineering"]
}, {
  slug: "event-staffing",
  n: "04",
  accent: "#FFB627",
  title: "Event Staffing",
  sub: "42K+ vetted ambassadors, all 50 states, 48-hour rush.",
  long: "Brand ambassadors, street teams, bilingual staff, and tour managers — vetted, trained, and dispatched fast. Real people who learn your brand and report what mattered.",
  bullets: ["Brand Ambassadors", "Street Teams", "Bilingual Staff", "Tour Managers", "Booth Staff", "Mascots & Costume"],
  img: window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg",
  imgPos: "center 30%",
  meta: ["42K+ roster", "All 50 states", "48-hr rush"]
}, {
  slug: "product-sampling",
  n: "05",
  accent: "#D6F35F",
  title: "Product Sampling",
  sub: "GPS-verified counts, retail demos, street + event sampling.",
  long: "Reportable sampling — every can, taste, and conversion tied to a place and a person. Power by Spark, our field-marketing dashboard, so you see numbers the same day.",
  bullets: ["In-Store Sampling", "Retail Demo Programs", "Street Sampling", "Campus Sampling", "Festival Sampling", "GPS-Verified Counts"],
  img: window.__resources?.r_assets_sampling_liquiddeath_petsmart_jpg || "https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquiddeath-petsmart.jpg",
  imgPos: "center 35%",
  meta: ["GPS-verified", "Same-day data", "Spark-powered"]
}, {
  slug: "trade-shows",
  n: "06",
  accent: "#FFB627",
  title: "Trade Show Support",
  sub: "Booth staffing, lead capture, demos, full show management.",
  long: "Booth staffing, lead capture, on-stand demos, and full pre/at/post show management. The team that makes your booth the busiest one on the floor.",
  bullets: ["Booth Staffing", "Lead Capture", "Show Management", "Product Demos", "Speaker Support", "Hospitality Suites"],
  img: window.__resources?.r_assets_pressreader_tradeshow_webp || "https://kyle915.github.io/ignite-webflow-assets/assets/pressreader-tradeshow.webp",
  imgPos: "center 35%",
  meta: ["CES · NAB · NRF", "Lead-cap integration", "On-stand demos"]
}, {
  slug: "promotional-products",
  n: "07",
  accent: "#FF5A1F",
  title: "Promotional Products & Premiums",
  sub: "Branded merch, swag kits, custom apparel, premium fulfillment.",
  long: "Sourced, designed, kitted, warehoused, and shipped — for a tour, a launch, a one-off VIP gift, or an evergreen program. We handle the boring parts so the merch lands hot.",
  bullets: ["Branded Merchandise", "Swag Kits", "Custom Apparel", "Premium Fulfillment", "Kitting & Warehousing", "On-Demand Storefronts"],
  img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1600&q=80",
  imgPos: "center",
  meta: ["Sourced & sampled", "Kit & ship", "Storefront-ready"]
}, {
  slug: "fractional",
  n: "08",
  accent: "#FF5A1F",
  title: "Fractional CPG Leadership",
  sub: "Embedded sales & marketing leadership — without the full-time overhead.",
  long: "Three engagement tiers — Advisory, Embedded, Leadership. We plug into your org chart and run retail strategy, field execution, sponsorships, and activations as a fractional team. Built for emerging CPG and beverage brands scaling into retail.",
  bullets: ["Advisory Tier", "Embedded VP", "Full Leadership", "Retail Strategy", "Field Execution", "Sponsorship Management", "Sales Programs", "Marketing Ops"],
  img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80",
  imgPos: "center 40%",
  href: "fractional.html",
  meta: ["3 engagement tiers", "Monthly retainer", "CPG-specialized"]
}, {
  slug: "spark",
  n: "09",
  accent: "#D6F35F",
  title: "Spark Platform",
  sub: "The field-marketing dashboard — live GPS, photos, samples, auto recaps.",
  long: "Spark is the operational layer underneath every activation we run. GPS check-ins, sample counts, lead capture, photo uploads, and live dashboards. Recaps generate themselves — no PDFs, no 9-day waits. Included free with every engagement.",
  bullets: ["GPS Check-ins", "Sample Counts", "Lead Capture", "Photo Uploads", "Live Dashboards", "Auto Recaps", "Per-SKU Breakdown", "Same-Day Data"],
  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  imgPos: "center",
  href: "spark.html",
  meta: ["Free with engagements", "Live data", "Auto recaps"]
}];

/* ============================================================
   HERO — massive numeric, "07 services"
============================================================ */
const SvcHero = () => {
  const [t, setT] = svaState(0);
  svaEffect(() => {
    const id = setInterval(() => setT(x => x + 1), 100);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Services Hero",
    style: {
      position: "relative",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      overflow: "hidden",
      padding: "140px 0 100px"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-10%",
      bottom: "-30%",
      width: 760,
      height: 760,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,90,31,0.35) 0%, rgba(255,90,31,0.12) 35%, transparent 65%)",
      filter: "blur(40px)",
      animation: "svcBloomA 9s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-12%",
      bottom: "-20%",
      width: 680,
      height: 680,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(214,243,95,0.2) 0%, rgba(214,243,95,0.08) 35%, transparent 65%)",
      filter: "blur(50px)",
      animation: "svcBloomB 11s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "8%",
      top: "12%",
      width: 240,
      height: 240,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,182,39,0.16) 0%, transparent 60%)",
      filter: "blur(30px)",
      animation: "svcDrift1 14s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent 0%, rgba(214,243,95,0.0) 15%, rgba(214,243,95,0.7) 50%, rgba(214,243,95,0.0) 85%, transparent 100%)",
      boxShadow: "0 0 18px rgba(214,243,95,0.4)",
      animation: "svcScanY 14s linear infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "20%",
      left: "3%",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 220,
      lineHeight: 0.85,
      letterSpacing: "-0.06em",
      color: "transparent",
      WebkitTextStroke: "1px rgba(255,90,31,0.18)",
      animation: "svcDrift1 16s ease-in-out infinite",
      pointerEvents: "none",
      userSelect: "none",
      zIndex: 0
    }
  }, "01"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "12%",
      left: "44%",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 180,
      lineHeight: 0.85,
      letterSpacing: "-0.06em",
      color: "transparent",
      WebkitTextStroke: "1px rgba(214,243,95,0.16)",
      animation: "svcDrift2 18s ease-in-out infinite",
      pointerEvents: "none",
      userSelect: "none",
      zIndex: 0
    }
  }, "09"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      top: 0,
      bottom: 0,
      width: 140,
      overflow: "hidden",
      maskImage: "linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      animation: "svcTicker 40s linear infinite",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "rgba(255,255,255,0.22)",
      textTransform: "uppercase"
    }
  }, [...Array(2)].map((_, k) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, ["AUSTIN · TX · LIVE", "BROOKLYN · NY", "CHICAGO · IL", "MIAMI · FL · LIVE", "DENVER · CO", "PORTLAND · OR", "ATLANTA · GA", "DETROIT · MI", "SEATTLE · WA", "PHOENIX · AZ · LIVE", "NASHVILLE · TN", "BOSTON · MA", "LA · CA", "HOUSTON · TX", "DC · MD", "VEGAS · NV · LIVE"].map((s, i) => {
    const live = s.includes("LIVE");
    return /*#__PURE__*/React.createElement("div", {
      key: k + "-" + i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: 999,
        background: live ? "var(--spark-500)" : "rgba(255,255,255,0.25)",
        boxShadow: live ? "0 0 8px rgba(214,243,95,0.7)" : "none"
      }
    }), s);
  }))))), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      opacity: 0.06
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "100",
    y2: "100",
    stroke: "white",
    strokeWidth: "0.05"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "0",
    x2: "0",
    y2: "100",
    stroke: "white",
    strokeWidth: "0.05"
  })), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--ignite-500)"
    }
  }), ">> SERVICES \xB7 INDEX"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.2em",
      color: "var(--fg-3)"
    }
  }, "09 LANES \xB7 58 CAPABILITIES \xB7 ALL 50 STATES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.45fr 1fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(48px, 6.2vw, 104px)",
      lineHeight: 0.92,
      letterSpacing: "-0.04em",
      margin: 0,
      textWrap: "balance",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, "Everything"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)",
      textShadow: "0 0 40px rgba(255,90,31,0.25)"
    }
  }, "experiential")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "0.04em"
    }
  }, "built, staffed,", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "and"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-14% -8%",
      background: "radial-gradient(ellipse at center, rgba(214,243,95,0.4), transparent 65%)",
      filter: "blur(18px)",
      zIndex: 0,
      pointerEvents: "none",
      animation: "svcMeasuredPulse 2.6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      color: "var(--spark-500)",
      textShadow: "0 0 28px rgba(214,243,95,0.45)",
      animation: "svcMeasuredTextPulse 2.6s ease-in-out infinite"
    }
  }, "measured.")))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 19,
      lineHeight: 1.5,
      color: "rgba(245,242,236,0.85)",
      margin: "32px 0 0",
      maxWidth: 620
    }
  }, "Ignite Productions is a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-1)"
    }
  }, "full-service experiential agency"), " \u2014 strategy, fabrication, staffing, mobile tours, sampling, trade shows, and merch. One roster, one platform, every market."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#all-services",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "15px 20px",
      borderRadius: 999,
      background: "var(--ignite-500)",
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-0.01em",
      textDecoration: "none",
      boxShadow: "0 8px 28px rgba(255,90,31,0.32)"
    }
  }, "Browse all nine lanes ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 18px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.18)",
      color: "var(--fg-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Request a quote ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "// The nine lanes"), SVC_LANES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.slug,
    href: `#${s.slug}`,
    style: {
      display: "grid",
      gridTemplateColumns: "32px 1fr auto",
      gap: 14,
      alignItems: "center",
      padding: "11px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      textDecoration: "none",
      transition: "all 180ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.paddingLeft = "8px";
      e.currentTarget.querySelector('[data-arrow]').style.color = s.accent;
      e.currentTarget.querySelector('[data-title]').style.color = "var(--fg-1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.paddingLeft = "0px";
      e.currentTarget.querySelector('[data-arrow]').style.color = "var(--fg-3)";
      e.currentTarget.querySelector('[data-title]').style.color = "var(--fg-1)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 16,
      color: s.accent,
      letterSpacing: "0.04em"
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    "data-title": true,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 17,
      color: "var(--fg-1)",
      letterSpacing: "-0.01em",
      transition: "color 180ms"
    }
  }, s.title), /*#__PURE__*/React.createElement("span", {
    "data-arrow": true,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--fg-3)",
      transition: "color 180ms"
    }
  }, "\u2192")))))));
};

/* ============================================================
   QUICK INDEX — anchored TOC chip strip
============================================================ */
const SvcIndex = () => /*#__PURE__*/React.createElement("section", {
  id: "all-services",
  style: {
    padding: "40px 0",
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)",
    position: "sticky",
    top: 0,
    zIndex: 30,
    backdropFilter: "blur(10px)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    marginRight: 8
  }
}, "// jump to"), SVC_LANES.map(s => /*#__PURE__*/React.createElement("a", {
  key: s.slug,
  href: `#${s.slug}`,
  style: {
    padding: "8px 13px",
    borderRadius: 999,
    background: "var(--ink-200)",
    border: "1px solid var(--ink-400)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    color: "var(--fg-2)",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "all 180ms",
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  },
  onMouseEnter: e => {
    e.currentTarget.style.borderColor = s.accent;
    e.currentTarget.style.color = "var(--fg-1)";
  },
  onMouseLeave: e => {
    e.currentTarget.style.borderColor = "var(--ink-400)";
    e.currentTarget.style.color = "var(--fg-2)";
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: s.accent,
    fontWeight: 700
  }
}, s.n), s.title)))));

/* ============================================================
   LANE — full-bleed alternating service section
============================================================ */
const SvcLane = ({
  s,
  i
}) => {
  const reverse = i % 2 === 1;
  return /*#__PURE__*/React.createElement("section", {
    id: s.slug,
    "data-screen-label": `${s.n} ${s.title}`,
    style: {
      position: "relative",
      padding: "140px 0",
      background: i % 2 === 0 ? "var(--ink-000)" : "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 64,
    opacity: 0.025
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      [reverse ? "right" : "left"]: -40,
      top: 60,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(280px, 32vw, 560px)",
      lineHeight: 0.8,
      letterSpacing: "-0.06em",
      color: "transparent",
      WebkitTextStroke: `1px ${s.accent}`,
      opacity: 0.14,
      pointerEvents: "none",
      userSelect: "none"
    }
  }, s.n), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center",
      [reverse ? "direction" : "x"]: reverse ? "rtl" : "ltr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      direction: "ltr",
      order: reverse ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 22,
      color: s.accent,
      letterSpacing: "0.04em"
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: s.accent,
      opacity: 0.35,
      maxWidth: 80
    }
  }), s.flag && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "5px 10px",
      borderRadius: 4,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.15)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-1)"
    }
  }, "\u2605 FLAGSHIP")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(48px, 6vw, 88px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.95,
      margin: 0,
      textWrap: "balance"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 22,
      lineHeight: 1.4,
      color: "var(--fg-1)",
      margin: "22px 0 0",
      maxWidth: 580,
      fontWeight: 500
    }
  }, s.sub), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--fg-2)",
      maxWidth: 580
    }
  }, s.long), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "32px 0 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px 24px",
      maxWidth: 580
    }
  }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.06em",
      color: "var(--fg-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: s.accent,
      transform: "rotate(45deg)"
    }
  }), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }
  }, s.meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: s.accent
    }
  }), m))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: s.href || `services-${s.slug}.html`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 20px",
      borderRadius: 999,
      background: s.accent,
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-0.01em",
      textDecoration: "none"
    }
  }, "Explore ", s.title.split(" ")[0].toLowerCase(), " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--fg-2)",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Get a quote \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: "ltr",
      order: reverse ? 1 : 2,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 5",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)"
    }
  }, s.slug === "spark" ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 30% 20%, rgba(214,243,95,0.18) 0%, transparent 55%), linear-gradient(180deg, #0d0f0a 0%, #07080a 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(214,243,95,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(214,243,95,0.07) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: "rgba(214,243,95,0.85)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "#D6F35F",
      boxShadow: "0 0 10px rgba(214,243,95,0.8)",
      animation: "svcMeasuredPulse 1.4s ease-in-out infinite"
    }
  }), "LIVE \xB7 142 ACTIVATIONS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.35)"
    }
  }, "v2.4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.r_assets_spark_logo_full_png || "https://kyle915.github.io/ignite-webflow-assets/assets/spark-logo-full.png",
    alt: "Spark",
    style: {
      maxWidth: "78%",
      height: "auto",
      filter: "drop-shadow(0 0 40px rgba(214,243,95,0.45))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.28em",
      color: "rgba(255,255,255,0.55)",
      textTransform: "uppercase"
    }
  }, "THE FIELD MARKETING OS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, [["12,408", "SAMPLES"], ["847", "CHECK-INS"], ["38", "MARKETS"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "10px 12px",
      border: "1px solid rgba(214,243,95,0.25)",
      borderRadius: 8,
      background: "rgba(214,243,95,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "#D6F35F",
      letterSpacing: "-0.02em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.5)",
      marginTop: 2
    }
  }, l))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.title,
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: s.imgPos || "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, rgba(10,11,13,0.0) 50%, rgba(10,11,13,0.65) 100%)`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      padding: "5px 10px",
      borderRadius: 4,
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.18)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.22em",
      color: "var(--fg-1)",
      textTransform: "uppercase"
    }
  }, s.n, " \xB7 ", s.title.toUpperCase()), ["top:14;left:14;border-top;border-left", "top:14;right:14;border-top;border-right", "bottom:14;left:14;border-bottom;border-left", "bottom:14;right:14;border-bottom;border-right"].map((p, j) => {
    const parts = p.split(";");
    const st = {
      position: "absolute",
      width: 18,
      height: 18,
      opacity: 0.65
    };
    parts.slice(0, 2).forEach(kv => {
      const [k, v] = kv.split(":");
      st[k] = v + "px";
    });
    parts.slice(2).forEach(b => {
      st[b.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = `1.5px solid ${s.accent}`;
    });
    return /*#__PURE__*/React.createElement("span", {
      key: j,
      style: st
    });
  }))))));
};

/* ============================================================
   STATS BAND — credibility band between sections
============================================================ */
const SvcStats = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "80px 0",
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24
  }
}, [["42K+", "vetted ambassadors", "var(--spark-500)"], ["50", "states active · national coverage", "var(--ignite-500)"], ["12yrs", "running, still veteran-owned", "var(--ember-500)"], ["48hr", "rush staffing, anywhere", "var(--spark-500)"]].map(([n, l, c]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    paddingTop: 14,
    borderTop: `1px solid ${c}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: c
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, l))))));

/* ============================================================
   FINAL CTA — bold band
============================================================ */
const SvcFinalCTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    padding: "160px 0",
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.05
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 50% 60%, rgba(255,90,31,0.18), transparent 60%)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, ">> READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(56px, 8vw, 140px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.9,
    margin: "18px auto 0",
    maxWidth: 1200,
    textWrap: "balance"
  }
}, "Tell us the brief.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)",
    whiteSpace: "nowrap"
  }
}, "We'll bring the team.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32,
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 720,
    margin: "32px auto 0"
  }
}, "One call covers strategy, fabrication, staffing, tours, sampling, trade shows, and merch. We're an extension of your team \u2014 not another vendor."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44,
    display: "inline-flex",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "contact.html",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "var(--ignite-500)",
    color: "#0A0B0D",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    boxShadow: "0 12px 40px rgba(255,90,31,0.35)"
  }
}, "Request a quote \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "work.html",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.2)",
    color: "var(--fg-1)",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    textDecoration: "none"
  }
}, "See the work \u2192"))));

/* ============================================================
   PAGE ROOT
============================================================ */
const ServicesAllPage = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "01 Services"
}, /*#__PURE__*/React.createElement(SiteNav, {
  rel: "../",
  active: "SERVICES"
}), /*#__PURE__*/React.createElement(SvcHero, null), /*#__PURE__*/React.createElement(SvcIndex, null), SVC_LANES.map((s, i) => /*#__PURE__*/React.createElement(SvcLane, {
  key: s.slug,
  s: s,
  i: i
})), /*#__PURE__*/React.createElement(SvcStats, null), /*#__PURE__*/React.createElement(SvcFinalCTA, null), /*#__PURE__*/React.createElement(SiteFooter, {
  rel: "../"
}));
Object.assign(window, {
  ServicesAllPage,
  SVC_LANES
});