/* global React */
/* ============================================================
   MARKETS HUB — /markets (or /cities) page body.
   Regional groupings, hover chips, CTA to brief us.
   ============================================================ */

const {
  useState: useStateMH
} = React;

/* ---------- Hero band ---------- */
const MARKETS_HERO_ANIM_CSS = `
@keyframes mhGridDrift { from { background-position: 0 0, 0 0; } to { background-position: 96px 96px, 96px 96px; } }
@keyframes mhGlowA { 0%,100% { transform: translate3d(-8%, -4%, 0) scale(1); opacity: .55; } 50% { transform: translate3d(6%, 4%, 0) scale(1.12); opacity: .85; } }
@keyframes mhGlowB { 0%,100% { transform: translate3d(4%, 6%, 0) scale(1.05); opacity: .35; } 50% { transform: translate3d(-6%, -4%, 0) scale(0.95); opacity: .6; } }
@keyframes mhScan { 0% { transform: translateY(-100%); opacity: 0; } 8% { opacity: .55; } 92% { opacity: .55; } 100% { transform: translateY(110vh); opacity: 0; } }
@keyframes mhStencilPan { 0% { transform: translateX(0); } 100% { transform: translateX(-3%); } }
@keyframes mhTickerPulse { 0%, 100% { opacity: .9; } 50% { opacity: .55; } }
@keyframes mhNationalShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
@keyframes mhStatBar { 0%, 100% { transform: scaleY(0.4); opacity: 0.4; } 50% { transform: scaleY(1); opacity: 1; } }
@keyframes mhMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes mhTier1Pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,53,0.0); } 50% { box-shadow: 0 0 0 4px rgba(255,107,53,0.18); } }
@media (prefers-reduced-motion: reduce) {
  .mh-anim, .mh-anim * { animation: none !important; }
}
`;
const MarketsHero = ({
  rel = ""
}) => /*#__PURE__*/React.createElement("section", {
  className: "mh-anim",
  style: {
    position: "relative",
    padding: "150px 0 100px",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("style", {
  dangerouslySetInnerHTML: {
    __html: MARKETS_HERO_ANIM_CSS
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), " + "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "48px 48px, 48px 48px",
    animation: "mhGridDrift 24s linear infinite",
    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 95%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 95%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: "-10%",
    top: "-15%",
    width: "60%",
    height: "70%",
    background: "radial-gradient(ellipse at center, rgba(255,107,53,0.28) 0%, rgba(255,107,53,0) 65%)",
    filter: "blur(20px)",
    pointerEvents: "none",
    animation: "mhGlowA 18s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: "-8%",
    bottom: "-20%",
    width: "55%",
    height: "70%",
    background: "radial-gradient(ellipse at center, rgba(255,176,80,0.18) 0%, rgba(255,176,80,0) 65%)",
    filter: "blur(28px)",
    pointerEvents: "none",
    animation: "mhGlowB 22s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 2,
    background: "linear-gradient(to bottom, rgba(255,107,53,0) 0%, rgba(255,107,53,0.5) 50%, rgba(255,107,53,0) 100%)",
    pointerEvents: "none",
    animation: "mhScan 14s linear infinite",
    animationDelay: "3s"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: "-3%",
    top: "-2%",
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(180px, 26vw, 420px)",
    lineHeight: 0.85,
    letterSpacing: "-0.04em",
    color: "rgba(255,255,255,0.025)",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    pointerEvents: "none",
    userSelect: "none",
    animation: "mhStencilPan 30s ease-in-out infinite alternate"
  }
}, "MARKETS"), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, /*#__PURE__*/React.createElement("span", {
  style: {
    animation: "mhTickerPulse 2.4s ease-in-out infinite",
    display: "inline-block"
  }
}, ">> ", "NATIONAL COVERAGE \xB7 50 STATES \xB7 200+ METROS")), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(64px, 9.5vw, 168px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88,
    maxWidth: 1300,
    textWrap: "balance"
  }
}, "The major markets", /*#__PURE__*/React.createElement("br", null), "we ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "activate"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, ".")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontFamily: "var(--font-mono)",
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--fg-1)",
    maxWidth: 900,
    lineHeight: 1.4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u203B"), " ", "Building a page for every city would take longer than driving to one.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "2px",
    animation: "mhTickerPulse 2.4s ease-in-out infinite",
    display: "inline-block",
    whiteSpace: "nowrap",
    marginTop: 6
  }
}, "So we picked the loud ones.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(20px, 2.1vw, 28px)",
    lineHeight: 1.35,
    letterSpacing: "-0.015em",
    color: "rgba(255,255,255,0.92)",
    maxWidth: 880,
    textWrap: "pretty"
  }
}, "Coverage is ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--ignite-500)",
    fontWeight: 800,
    backgroundImage: "linear-gradient(90deg, var(--ignite-500), #ffb050, var(--ignite-500))",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "mhNationalShimmer 4s linear infinite",
    display: "inline-block"
  }
}, "national"), " \u2014 all 50 states and 200+ named metros. From one-market pop-ups to nationwide rollouts: staffing, sampling, experiential, mobile tours, and trade-show programs, wherever the brief lands."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 64,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 0,
    border: "1px solid var(--ink-400)",
    borderRadius: 12,
    overflow: "hidden",
    background: "linear-gradient(180deg, rgba(17,19,23,0.92), rgba(10,11,13,0.92))",
    boxShadow: "0 30px 80px -40px rgba(255,107,53,0.18)"
  }
}, [["STATES", "50", "all of them"], ["NAMED METROS", "200+", "core + surge"], ["AMBASSADORS", "42,000+", "vetted, in-market"], ["RUSH WINDOW", "48 HR", "brief to boots"]].map(([k, v, sub], i, arr) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    padding: "28px 28px",
    borderRight: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    background: "linear-gradient(180deg, var(--ignite-500), rgba(255,107,53,0))",
    animation: `mhStatBar 3s ease-in-out ${i * 0.18}s infinite`,
    transformOrigin: "top"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.24em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, k), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 56,
    letterSpacing: "-0.035em",
    color: "var(--ignite-500)",
    lineHeight: 0.95,
    textShadow: "0 0 30px rgba(255,107,53,0.35)"
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-2)",
    letterSpacing: "0.04em"
  }
}, sub))))));

/* ---------- Marquee ticker band ---------- */
const RegionTicker = () => {
  const items = ["50 STATES", "200+ METROS", "42,000 AMBASSADORS", "48 HR RUSH WINDOW", "PERMITS HANDLED", "LOCAL CREWS", "NATIONAL ROLLOUTS", "SAMPLING", "MOBILE TOURS", "TRADE-SHOW STAFF", "POP-UPS", "BRAND AMBASSADORS", "FIELD MARKETING"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "mh-anim",
    "aria-hidden": "true",
    style: {
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      background: "var(--ink-100)",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      whiteSpace: "nowrap",
      width: "max-content",
      animation: "mhMarquee 60s linear infinite"
    }
  }, row.map((label, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 18,
      padding: "18px 28px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: i % 4 === 1 ? "var(--ignite-500)" : "var(--fg-1)"
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      opacity: 0.55
    }
  }, "\u25C7")))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(90deg, var(--ink-100) 0%, transparent 8%, transparent 92%, var(--ink-100) 100%)"
    }
  }));
};

/* ---------- Region card ---------- */
const RegionCard = ({
  region,
  rel,
  idx,
  filter = ""
}) => {
  const q = filter.trim().toLowerCase();
  const matches = q ? region.cities.filter(c => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q) || c.slug.includes(q)) : region.cities;
  if (q && matches.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mh-region-card",
    style: {
      background: "linear-gradient(180deg, var(--ink-100), rgba(17,19,23,0.85))",
      border: "1px solid var(--ink-400)",
      borderRadius: 14,
      padding: "32px 32px 28px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 200ms, transform 200ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 3,
      background: "linear-gradient(90deg, var(--ignite-500) 0%, rgba(255,107,53,0) 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -10,
      top: -30,
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(160px, 22vw, 320px)",
      lineHeight: 0.85,
      letterSpacing: "-0.04em",
      color: "rgba(255,255,255,0.025)",
      pointerEvents: "none",
      userSelect: "none",
      textTransform: "uppercase"
    }
  }, "0", idx + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px, 3.4vw, 44px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1)"
    }
  }, region.label, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, region.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 22,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, matches.map(c => {
    const isLive = !!c.available;
    const href = isLive ? window.CITY_URL ? window.CITY_URL(c.slug) : "/cities/" + c.slug : null;
    const Tag = isLive ? "a" : "span";
    const isTier1 = c.tier === 1 && isLive;
    return /*#__PURE__*/React.createElement(Tag, {
      key: c.slug,
      href: href || undefined,
      className: isLive ? isTier1 ? "markets-chip markets-chip--live markets-chip--tier1" : "markets-chip markets-chip--live" : "markets-chip markets-chip--stub",
      "aria-disabled": !isLive ? "true" : undefined,
      title: !isLive ? "Coverage available — page coming soon" : undefined,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        border: isTier1 ? "1px solid rgba(255,107,53,0.45)" : "1px solid var(--ink-400)",
        borderRadius: 999,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: isTier1 ? 700 : 500,
        letterSpacing: "0.06em",
        textTransform: "none",
        background: isLive ? isTier1 ? "rgba(255,107,53,0.08)" : "var(--ink-200)" : "transparent",
        color: isLive ? "var(--fg-1)" : "var(--fg-3)",
        opacity: isLive ? 1 : 0.55,
        textDecoration: "none",
        transition: "background 160ms, border-color 160ms, color 160ms, transform 160ms",
        cursor: isLive ? "pointer" : "default"
      }
    }, /*#__PURE__*/React.createElement("span", null, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: 0.65,
        letterSpacing: "0.18em"
      }
    }, "/ ", c.state), isLive && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--ignite-500)",
        marginLeft: 2
      }
    }, "\u2197"));
  })));
};

/* ---------- Hub body ---------- */
const MarketsHub = ({
  rel = ""
}) => {
  const regions = window.MARKETS_REGIONS || [];
  const totalCities = regions.reduce((n, r) => n + r.cities.length, 0);
  const liveCities = regions.reduce((n, r) => n + r.cities.filter(c => c.available).length, 0);
  const [filter, setFilter] = useStateMH("");
  const q = filter.trim().toLowerCase();
  const visibleCount = q ? regions.reduce((n, r) => n + r.cities.filter(c => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q) || c.slug.includes(q)).length, 0) : totalCities;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .markets-chip--live:hover {
          background: var(--ignite-500) !important;
          color: #0A0B0D !important;
          border-color: var(--ignite-500) !important;
          transform: translateY(-2px);
        }
        .markets-chip--live:hover span { color: #0A0B0D !important; }
        .markets-chip--tier1::before { content: ""; width: 6px; height: 6px; border-radius: 999px; background: var(--ignite-500); box-shadow: 0 0 8px rgba(255,107,53,0.6); display: inline-block; margin-right: 2px; }
        .mh-region-card:hover { border-color: rgba(255,107,53,0.45) !important; transform: translateY(-3px); }
      `), /*#__PURE__*/React.createElement(MarketsHero, {
    rel: rel
  }), /*#__PURE__*/React.createElement(RegionTicker, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "MAJOR MARKETS ORGANIZED BY REGION"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "rgba(255,255,255,0.08)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 18px",
      border: "1px solid var(--ink-400)",
      borderRadius: 999,
      background: "var(--ink-100)",
      transition: "border-color 200ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase"
    }
  }, ">> ", "FILTER"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: filter,
    onChange: e => setFilter(e.target.value),
    placeholder: "City, state, or slug \u2014 try \u2018TX\u2019, \u2018miami\u2019, \u2018festival\u2019\u2026",
    "aria-label": "Filter markets",
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--fg-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.04em",
      padding: "4px 0"
    }
  }), filter && /*#__PURE__*/React.createElement("button", {
    onClick: () => setFilter(""),
    style: {
      border: "1px solid var(--ink-400)",
      background: "transparent",
      color: "var(--fg-2)",
      padding: "6px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, "CLEAR \xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24
    }
  }, regions.map((r, i) => /*#__PURE__*/React.createElement(RegionCard, {
    key: r.id,
    region: r,
    rel: rel,
    idx: i,
    filter: filter
  })), q && visibleCount === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 32px",
      border: "1px dashed var(--ink-400)",
      borderRadius: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--fg-2)",
      letterSpacing: "0.06em"
    }
  }, "No matches for \u201C", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, filter), "\u201D \u2014 we may still cover it. ", /*#__PURE__*/React.createElement("a", {
    href: rel + "pages/contact.html",
    style: {
      color: "var(--ignite-500)"
    }
  }, "Brief us"), " and we'll confirm in 48 hours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, "+ 170 ADDITIONAL METROS \xB7 ALASKA \xB7 HAWAII \xB7 PUERTO RICO"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.05
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 56,
      alignItems: "center"
    },
    className: "markets-cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "DON'T SEE YOUR MARKET"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(40px, 5.5vw, 84px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.92,
      textWrap: "balance"
    }
  }, "Brief us and we'll", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "confirm coverage"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "We staff 200+ metros and surge into the rest. If your market isn't listed, send us the brief \u2014 we'll come back inside 48 hours with a local crew, permits, and a quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AccentBtn, {
    onClick: () => location.href = rel + "pages/contact.html"
  }, "Request staff now"), /*#__PURE__*/React.createElement("a", {
    href: rel + "pages/services.html",
    className: "link-mono",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "16px 20px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "See services \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-stencil)",
      color: "var(--ink-300)",
      fontSize: "clamp(96px, 14vw, 220px)",
      lineHeight: 0.85,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      opacity: 0.9,
      userSelect: "none"
    }
  }, "ALL", /*#__PURE__*/React.createElement("br", null), "50."))));
};
Object.assign(window, {
  MarketsHub,
  MarketsHero,
  RegionCard
});