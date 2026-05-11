/* Services page — sticky category navigator + rich panels */
const {
  useState: svcState,
  useEffect: svcEffect,
  useRef: svcRef
} = React;
const SERVICE_CATEGORIES = [{
  id: "strategy",
  num: "01",
  title: "Strategy & Creative",
  kicker: "IDEATION → EXECUTION",
  intro: "From concept to execution, we build experiential campaigns that stop consumers in their tracks. Bold ideas, flawless logistics, measurable impact.",
  accent: "#FF5A1F",
  hero: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp",
  items: [{
    t: "Experiential Activations",
    d: "High-impact brand experiences at retail, festivals, and events that drive trial, engagement, and lasting brand recall."
  }, {
    t: "Mobile Tours",
    d: "Multi-market mobile tours that bring your brand directly to consumers. Coast to coast, fully staffed and managed."
  }, {
    t: "Custom Builds",
    d: "Branded installations, pop-up environments, and custom activation builds designed to stop traffic and start conversations."
  }, {
    t: "Sweepstakes",
    d: "Turnkey sweepstakes programs with legal compliance, digital entry capture, and post-event analytics."
  }, {
    t: "Promotional Marketing",
    d: "Integrated promotional campaigns combining sampling, couponing, and in-store activations to accelerate trial and conversion."
  }]
}, {
  id: "field",
  num: "02",
  title: "Field Marketing & Retail",
  kicker: "POINT OF DECISION",
  intro: "We meet shoppers exactly where they buy. From on-premise sampling to retail merchandising, our field programs drive trial, conversion, and lasting brand loyalty at the point of decision.",
  accent: "#FFB627",
  hero: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg",
  items: [{
    t: "National Sampling",
    d: "Large-scale product sampling programs across grocery, convenience, and mass retail. Coordinated nationwide with real-time reporting."
  }, {
    t: "On-Premise & Retail Sampling",
    d: "In-store demos, tastings, and on-premise activations that put your product directly in consumers' hands at the point of purchase."
  }, {
    t: "Point-of-Sale & Shopper Marketing",
    d: "POS displays, shelf management, and shopper marketing programs that increase visibility and drive impulse purchase."
  }, {
    t: "Retail Merchandising",
    d: "Shelf resets, endcap builds, planogram compliance, and retail audits to ensure your brand wins at shelf."
  }]
}, {
  id: "talent",
  num: "03",
  title: "Production & Talent",
  kicker: "42K+ AMBASSADORS, 50 STATES",
  intro: "42,000+ vetted brand ambassadors in all 50 states, ready to deploy. Professional teams that bring your brand to life with energy, expertise, and results you can measure.",
  accent: "#FF5A1F",
  hero: window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg",
  items: [{
    t: "Brand Ambassadors",
    d: "Trained, energetic brand representatives for sampling, demos, street teams, and consumer engagement. Anywhere in the country."
  }, {
    t: "Event Staffing",
    d: "Reliable, professional event staff for trade shows, conferences, festivals, and retail activations. Scaled to any size."
  }, {
    t: "Trade Show & Expo Execution",
    d: "Full trade show management: booth design, staffing, lead capture, and on-site logistics handled end to end."
  }, {
    t: "Branded Merchandise",
    d: "Custom branded swag, promotional materials, and activation kits designed and produced to elevate every consumer touchpoint."
  }]
}, {
  id: "data",
  num: "04",
  title: "Data & Insights",
  kicker: "POWERED BY SPARK",
  intro: "Every activation is powered by Spark, our proprietary real-time event platform that gives you full visibility into performance, engagement, and ROI as it happens.",
  accent: "#FFB627",
  hero: window.__resources?.r_68962c63c89c6cf0f46a6b66_SMALLS93_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg",
  items: [{
    t: "Real-Time Reporting",
    d: "Instant event recaps, photo documentation, GPS-verified check-ins, and performance metrics delivered as activations happen."
  }, {
    t: "Analytics Dashboard",
    d: "Live dashboards tracking engagement, conversions, and field activity across every activation and market in real time."
  }, {
    t: "Lead Capture",
    d: "Digital lead capture and data collection at every consumer touchpoint. Integrated with your CRM and marketing stack."
  }, {
    t: "GPS-Verified Events",
    d: "Every activation verified with location data, timestamped photos, and on-site documentation. No more \"trust me, it happened.\""
  }]
}];

/* ---------- Hero ---------- */
const ServicesHero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "Services Hero",
  style: {
    position: "relative",
    background: "#0A0A0A",
    color: "#fff",
    overflow: "hidden",
    padding: "140px 0 120px"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.035
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 85% 15%, rgba(255,90,31,0.18), transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(255,182,39,0.09), transparent 45%)"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "5px 10px",
    background: "#FF5A1F",
    color: "#fff",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    borderRadius: 3
  }
}, "\u2605 FULL-SERVICE EVENT MARKETING"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "rgba(255,255,255,0.7)",
    textTransform: "uppercase"
  }
}, "04 Categories \xB7 17 Capabilities")), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(72px, 11vw, 200px)",
    lineHeight: 0.86,
    letterSpacing: "-0.055em",
    margin: 0,
    maxWidth: 1400
  }
}, "Everything your", /*#__PURE__*/React.createElement("br", null), "brand needs.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    fontWeight: 700,
    background: "linear-gradient(135deg, #FF5A1F 0%, #FFB627 50%, #FF5A1F 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 200%",
    animation: "shimmer 4s linear infinite"
  }
}, "Nothing it doesn't.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 80,
    alignItems: "end"
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 22,
    lineHeight: 1.45,
    color: "rgba(255,255,255,0.85)",
    margin: 0,
    maxWidth: 680
  }
}, "From strategy to creative to boots on the ground, Ignite handles the full spectrum of ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#FFB627",
    fontWeight: 600
  }
}, "field marketing, experiential activations, and brand ambassador programs."), " Nationwide. Real-time. Results-driven."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "#FF5A1F",
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "-0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 12px 32px rgba(255,90,31,0.35)"
  }
}, "Request a quote \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/contact?urgent=1",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.28)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "-0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#FF6969"
  }
}, "\u25CF"), " Request staff now")))));

/* ---------- Sticky nav + categories ---------- */
const CategoryNav = ({
  active,
  onPick
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "sticky",
    top: 120,
    padding: "16px 0",
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 16
  }
}, "\u25CF INDEX"), SERVICE_CATEGORIES.map(c => /*#__PURE__*/React.createElement("a", {
  key: c.id,
  href: "#" + c.id,
  onClick: () => onPick(c.id),
  style: {
    display: "flex",
    gap: 12,
    padding: "10px 0",
    alignItems: "baseline",
    cursor: "pointer",
    borderTop: "1px solid var(--ink-400)",
    color: active === c.id ? "var(--fg-1)" : "var(--fg-3)",
    transition: "color 180ms var(--ease-out)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    width: 24,
    color: active === c.id ? c.accent : "var(--fg-3)"
  }
}, c.num), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: "-0.01em"
  }
}, c.title))), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: "1px solid var(--ink-400)"
  }
}));
const CategoryPanel = ({
  cat,
  onSeen
}) => {
  const [hover, setHover] = svcState(0);
  const ref = svcRef(null);
  svcEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && e.intersectionRatio > 0.35) onSeen(cat.id);
    }, {
      threshold: [0.35, 0.6]
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    id: cat.id,
    style: {
      padding: "120px 0",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 72,
      color: cat.accent,
      lineHeight: 0.8
    }
  }, cat.num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: cat.accent
    }
  }, ">> ", cat.kicker)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(48px, 6vw, 96px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.9,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, cat.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 520
    }
  }, cat.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      flexDirection: "column"
    }
  }, cat.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    onMouseEnter: () => setHover(i),
    style: {
      padding: "24px 0",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: i === cat.items.length - 1 ? "1px solid var(--ink-400)" : "none",
      display: "grid",
      gridTemplateColumns: "48px 1fr 24px",
      gap: 20,
      alignItems: "start",
      cursor: "pointer",
      transition: "background 160ms",
      background: hover === i ? "rgba(255,255,255,0.02)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      color: hover === i ? cat.accent : "var(--fg-3)",
      paddingTop: 6
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: hover === i ? 26 : 24,
      letterSpacing: "-0.015em",
      color: "var(--fg-1)",
      margin: 0,
      transition: "font-size 180ms var(--ease-out)"
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      maxHeight: hover === i ? 200 : 0,
      opacity: hover === i ? 1 : 0,
      transition: "max-height 320ms var(--ease-out), opacity 240ms var(--ease-out), margin-top 200ms",
      marginTop: hover === i ? 10 : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, it.d))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: hover === i ? cat.accent : "var(--fg-4)",
      transform: hover === i ? "translateX(2px)" : "translateX(0)",
      transition: "all 160ms"
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 100,
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      aspectRatio: "4/5",
      boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: cat.hero,
    alt: cat.title,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.85) saturate(1.1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.6))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 20,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "5px 10px",
      background: "rgba(10,10,10,0.6)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: cat.accent,
      textTransform: "uppercase"
    }
  }, "\u25C9 ", cat.kicker)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 24,
      left: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, "NOW SHOWING"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, cat.items[hover].t))))));
};
const ServicesBody = () => {
  const [active, setActive] = svcState("strategy");
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "40px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(CategoryNav, {
    active: active,
    onPick: setActive
  }), /*#__PURE__*/React.createElement("div", null, SERVICE_CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryPanel, {
    key: c.id,
    cat: c,
    onSeen: setActive
  }))))));
};

/* ---------- Stats ticker ---------- */
const ServicesStats = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "64px 0",
    background: "#0A0A0A",
    borderTop: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 48,
    whiteSpace: "nowrap",
    animation: "marquee 48s linear infinite",
    width: "max-content"
  }
}, [...Array(2)].flatMap((_, r) => [["42,000+", "BRAND AMBASSADORS"], ["50", "STATES COVERED"], ["500+", "CAMPAIGNS EXECUTED"], ["100%", "REAL-TIME REPORTING"], ["5,000+", "ACTIVATIONS / YEAR"], ["200+", "BRANDS ACTIVATED"], ["48hr", "RUSH STAFFING"]].map(([n, l], i) => /*#__PURE__*/React.createElement("span", {
  key: r + "-" + i,
  style: {
    display: "inline-flex",
    alignItems: "baseline",
    gap: 16,
    paddingRight: 48,
    borderRight: "1px solid rgba(255,255,255,0.12)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 48,
    letterSpacing: "-0.025em",
    color: "#FFB627"
  }
}, n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    color: "rgba(255,255,255,0.65)"
  }
}, l))))));

/* ---------- Two ways final ---------- */
const TwoWays = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    marginBottom: 60
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">> HOW TO START"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "var(--fg-1-inv)"
  }
}, "Always-on team or ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "big moment?")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    color: "var(--fg-2-inv)",
    maxWidth: 620,
    margin: "16px auto 0"
  }
}, "Most clients use both \u2014 a fractional team driving strategy, plus project-based staffing when national activations hit. Either way, Spark comes free.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    maxWidth: 1040,
    margin: "0 auto"
  }
}, [{
  href: "/fractional",
  kicker: "ONGOING · STRATEGIC",
  label: "01 · FRACTIONAL",
  title: "Fractional Teams",
  d: "Dedicated team embedded in your brand to run retail strategy, field execution, and activations. Advisory, embedded, or full leadership — monthly retainer, no full-time overhead.",
  best: "Scaling into retail · launching a new line · post-Series A",
  cta: "Explore Fractional →",
  accent: "#FF5A1F"
}, {
  href: "/services",
  kicker: "PROJECT · ON-DEMAND",
  label: "02 · STAFFING + EXPERIENTIAL",
  title: "BA Staffing & Experiential",
  d: "42,000+ vetted brand ambassadors across 50 states. Full-scale experiential production — sampling, mobile tours, trade shows, custom builds — deployed in days, not months.",
  best: "National sampling · trade shows · festival activations · retail sell-in",
  cta: "Explore Services →",
  accent: "#FFB627"
}].map(c => /*#__PURE__*/React.createElement("a", {
  key: c.title,
  href: c.href,
  style: {
    padding: 36,
    borderRadius: 20,
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    border: "1px solid var(--ink-400)",
    display: "block",
    borderTop: "3px solid " + c.accent,
    transition: "transform 240ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.transform = "translateY(-4px)",
  onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, c.kicker), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontFamily: "var(--font-stencil)",
    fontSize: 14,
    letterSpacing: "0.08em",
    color: c.accent
  }
}, c.label), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 32,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)"
  }
}, c.title), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)"
  }
}, c.d), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 18,
    paddingTop: 16,
    borderTop: "1px solid var(--ink-400)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, "BEST FOR \xB7 ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-2)",
    textTransform: "none",
    letterSpacing: 0
  }
}, c.best)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: c.accent
  }
}, c.cta)))), /*#__PURE__*/React.createElement("a", {
  href: "/spark",
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
    maxWidth: 1040,
    margin: "20px auto 0",
    padding: "22px 28px",
    borderRadius: 16,
    background: "var(--ink-100)",
    color: "var(--fg-1)",
    border: "1px solid var(--ink-400)",
    transition: "transform 200ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.transform = "translateY(-2px)",
  onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "rgba(214,243,95,0.15)",
    color: "var(--spark-500)",
    fontFamily: "var(--font-stencil)",
    fontSize: 16,
    letterSpacing: "0.04em",
    border: "1px solid rgba(214,243,95,0.35)"
  }
}, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--spark-500)"
  }
}, "\u25C9 INCLUDED WITH BOTH"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 4,
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: "-0.01em",
    color: "var(--fg-1)"
  }
}, "Every engagement runs on ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--spark-500)"
  }
}, "Spark"), " \u2014 live dashboards, GPS-verified check-ins, instant recaps. Zero extra cost."))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--spark-500)"
  }
}, "SEE THE PLATFORM \u2192"))));
Object.assign(window, {
  ServicesHero,
  ServicesBody,
  ServicesStats,
  TwoWays
});