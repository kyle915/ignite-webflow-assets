/* Spark product page — dark-dominant, with motion + pop */
const {
  useState: spState,
  useEffect: spEffect,
  useRef: spRef
} = React;

/* ---------- Shared animation styles (injected once) ---------- */
const SparkAnimStyles = () => /*#__PURE__*/React.createElement("style", null, `
    @keyframes sp-pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.8); }
    }
    @keyframes sp-marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes sp-bracket-draw {
      0% { opacity: 0; transform: translateX(-12px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes sp-bracket-draw-r {
      0% { opacity: 0; transform: translateX(12px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes sp-grid-scan {
      0% { transform: translateY(-100%); opacity: 0; }
      30% { opacity: 1; }
      100% { transform: translateY(100vh); opacity: 0; }
    }
    @keyframes sp-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(214,243,95,0.0); }
      50% { box-shadow: 0 0 30px 6px rgba(214,243,95,0.25); }
    }
    @keyframes sp-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes sp-radar-big {
      0% { width: 12px; height: 12px; opacity: 1; }
      100% { width: 80px; height: 80px; opacity: 0; }
    }
    @keyframes sp-shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes sp-bar-rise {
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    }
    @keyframes sp-blink-caret {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }

    .sp-hero-scan {
      position: absolute; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(214,243,95,0.6), transparent);
      animation: sp-grid-scan 6s linear infinite;
      pointer-events: none;
    }
    .sp-tick-strip {
      display: flex; gap: 48px;
      animation: sp-marquee 40s linear infinite;
      width: max-content;
    }
    .sp-tick-strip:hover { animation-play-state: paused; }
    .sp-bracket-l { display: inline-block; animation: sp-bracket-draw 800ms cubic-bezier(0.2,0.7,0.2,1) both; }
    .sp-bracket-r { display: inline-block; animation: sp-bracket-draw-r 800ms cubic-bezier(0.2,0.7,0.2,1) both; animation-delay: 200ms; }

    .sp-feat-row { transform: translateY(40px); opacity: 0; transition: transform 700ms cubic-bezier(0.2,0.7,0.2,1), opacity 700ms; }
    .sp-feat-row.in { transform: translateY(0); opacity: 1; }
    .sp-feat-row:hover .sp-feat-num { color: var(--spark-500); transform: translateX(4px); }
    .sp-feat-row:hover .sp-feat-h { color: var(--spark-500); }
    .sp-feat-num, .sp-feat-h { transition: color 200ms, transform 200ms; }

    .sp-stat-card { transition: transform 200ms, border-color 200ms, background 200ms; }
    .sp-stat-card:hover { transform: translateY(-4px); border-color: rgba(214,243,95,0.4); background: var(--ink-300); }

    .sp-dash-frame { transform: scale(0.95) translateY(40px); opacity: 0; transition: all 900ms cubic-bezier(0.2,0.7,0.2,1); }
    .sp-dash-frame.in { transform: scale(1) translateY(0); opacity: 1; animation: sp-glow 4s ease-in-out infinite 1s; }

    .sp-bar { transform-origin: bottom; animation: sp-bar-rise 700ms cubic-bezier(0.2,0.7,0.2,1) both; }

    .sp-phone-wrap { animation: sp-float 6s ease-in-out infinite; }

    .sp-shimmer {
      background: linear-gradient(90deg, transparent, rgba(214,243,95,0.4), transparent);
      background-size: 200% 100%;
      animation: sp-shimmer 2.5s linear infinite;
      -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; color: transparent;
    }

    .sp-step { position: relative; transition: transform 200ms; }
    .sp-step:hover { transform: translateY(-3px); }
    .sp-step .sp-step-h { background: linear-gradient(90deg, var(--spark-500), var(--spark-500) 50%, var(--fg-1) 50%, var(--fg-1)); background-size: 200% 100%; background-position: 100% 0; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; transition: background-position 400ms; }
    .sp-step:hover .sp-step-h { background-position: 0 0; }

    .sp-caret::after {
      content: "▍"; color: var(--spark-500); margin-left: 4px;
      animation: sp-blink-caret 1s infinite;
    }

    .sp-cta-btn { position: relative; overflow: hidden; }
    .sp-cta-btn::before {
      content: ""; position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transform: translateX(-100%);
      transition: transform 600ms;
    }
    .sp-cta-btn:hover::before { transform: translateX(100%); }

    @keyframes sp-pin-pop { 0% { transform: translate(-50%,-50%) scale(0); } 60% { transform: translate(-50%,-50%) scale(1.4); } 100% { transform: translate(-50%,-50%) scale(1); } }
    .sp-pin { animation: sp-pin-pop 500ms cubic-bezier(0.2,0.9,0.2,1) both; }
  `);

/* ---------- LIVE STAT TICKER ---------- */
const SparkTicker = () => {
  const items = ["● LIVE", "4,228 SAMPLES TODAY", "142 ON-SITE NOW", "17 MARKETS ACTIVE", "↑ 91% ON-TIME RATE", "23 EVENTS / 6 STATES", "LIQUID DEATH · Q2 TOUR", "WHITE CLAW · RETAIL DEMOS", "MARK ANTHONY · SAMPLING", "DUDE WIPES · FESTIVALS", "↑ +14% WoW", "GPS-VERIFIED CHECK-INS", "AUTO-GENERATED RECAPS"];
  const doubled = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      background: "var(--ink-100)",
      overflow: "hidden",
      padding: "14px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-tick-strip"
  }, doubled.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      color: t.startsWith("●") || t.startsWith("↑") ? "var(--spark-500)" : "var(--fg-2)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, t))));
};

/* ---------- HERO ---------- */
const SparkHero = () => {
  const [count, setCount] = spState(4208);
  spEffect(() => {
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 4 + 1)), 1400);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--ink-000)",
      overflow: "hidden",
      padding: "120px 0 80px"
    }
  }, /*#__PURE__*/React.createElement(SparkAnimStyles, null), /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.05
  }), /*#__PURE__*/React.createElement("div", {
    className: "sp-hero-scan",
    style: {
      top: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -200,
      right: -200,
      width: 700,
      height: 700,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(214,243,95,0.18), transparent 60%)",
      pointerEvents: "none",
      animation: "sp-glow 6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.r_assets_chrome_splash_png || "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-splash.png",
    style: {
      position: "absolute",
      right: "-10%",
      top: "-20%",
      width: "55%",
      opacity: 0.32,
      mixBlendMode: "screen",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginBottom: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SparkLockup, {
    size: 26
  }), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "* PRODUCT OVERVIEW"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      borderRadius: 999,
      background: "rgba(214,243,95,0.1)",
      border: "1px solid rgba(214,243,95,0.3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--spark-500)",
      boxShadow: "0 0 8px var(--spark-500)",
      animation: "sp-pulse-dot 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--spark-500)",
      textTransform: "uppercase"
    }
  }, count.toLocaleString(), " samples today"))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(60px, 8vw, 128px)",
      lineHeight: 0.94,
      letterSpacing: "-0.035em",
      maxWidth: 1100,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-bracket-l",
    style: {
      color: "var(--spark-500)",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: "0.55em",
      verticalAlign: "0.22em",
      marginRight: 12
    }
  }, "<"), "Field marketing finally gets the intelligence it ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--spark-500)",
      fontWeight: 700
    }
  }, "deserves"), /*#__PURE__*/React.createElement("span", {
    className: "sp-caret"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sp-bracket-r",
    style: {
      color: "var(--spark-500)",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: "0.55em",
      verticalAlign: "0.22em",
      marginLeft: 12
    }
  }, ">")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--fg-2)",
      maxWidth: 720
    }
  }, "Spark is Ignite's real-time field marketing platform \u2014 designed to give clients instant visibility into every demo, event, tour, sample, and activation we run. It replaces inconsistent recaps, spreadsheet chaos, and vendor fragmentation with one centralized, agency-run system."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "sp-cta-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "16px 28px",
      borderRadius: 999,
      background: "var(--ignite-500)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 16,
      textDecoration: "none",
      transition: "transform 160ms, background 160ms"
    }
  }, "Book a demo ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#dashboard",
    className: "sp-cta-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "16px 28px",
      borderRadius: 999,
      background: "transparent",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 16,
      textDecoration: "none"
    }
  }, "See the dashboard")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32,
      paddingTop: 32,
      borderTop: "1px solid var(--ink-400)"
    }
  }, [["REQUESTS", "Submit activations from your team"], ["STAFFING", "GPS-verified check-ins, real ambassadors"], ["EXECUTION", "Live field ops, photo uploads"], ["RECAPS", "Auto-generated, in your inbox"]].map(([h, d], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "sp-step"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      marginBottom: 8
    }
  }, "STEP 0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "sp-step-h",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-0.02em"
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13.5,
      color: "var(--fg-2)",
      lineHeight: 1.5
    }
  }, d), i < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      color: "var(--spark-500)",
      fontFamily: "var(--font-mono)",
      opacity: 0.6
    }
  }, "\u2192"))))));
};

/* ---------- FEATURES ---------- */
const SparkFeatures = () => {
  const rows = [{
    k: "01",
    t: "One centralized system",
    d: "All field marketing data in one place. No more chasing recaps from 8 vendors or piecing together CSVs from 3 regions."
  }, {
    k: "02",
    t: "Faster decisions, live dashboards",
    d: "Real-time visibility across programs, markets, SKUs. Know what's working in the next market before the current one ends."
  }, {
    k: "03",
    t: "True ROI visibility",
    d: "Event-level cost, per-sample economics, market-by-market conversion. The numbers executives actually ask for."
  }, {
    k: "04",
    t: "Zero client lift",
    d: "Your team doesn't log into anything unless they want to. We run it; you watch it. Included free with every Ignite program."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.03
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> WHAT CLIENTS GET"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      maxWidth: 900
    }
  }, "Stop waiting for", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--spark-500)"
    }
  }, "post-event reports.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(SparkFeatureRow, {
    key: r.k,
    row: r,
    i: i,
    last: i === rows.length - 1
  })))));
};
const SparkFeatureRow = ({
  row,
  i,
  last
}) => {
  const [ref, inView] = useInView({
    threshold: 0.25
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "sp-feat-row " + (inView ? "in" : ""),
    style: {
      display: "grid",
      gridTemplateColumns: "80px 1fr 1fr",
      gap: 40,
      alignItems: "center",
      padding: "36px 0",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: last ? "1px solid var(--ink-400)" : "none",
      transitionDelay: i * 100 + "ms",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-feat-num",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      display: "inline-block"
    }
  }, "* ", row.k), /*#__PURE__*/React.createElement("h3", {
    className: "sp-feat-h",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(24px, 2.5vw, 36px)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      margin: 0,
      color: "var(--fg-1)"
    }
  }, row.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, row.d));
};

/* ---------- DEEP DASHBOARD ---------- */
const SparkDeepDash = () => {
  const [ref, inView] = useInView({
    threshold: 0.18
  });
  const [count, setCount] = spState(4228);
  spEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 5 + 2)), 1100);
    return () => clearInterval(id);
  }, [inView]);
  return /*#__PURE__*/React.createElement("section", {
    id: "dashboard",
    style: {
      padding: "120px 0",
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> LIVE DASHBOARD"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      maxWidth: 900
    }
  }, "The command center for", /*#__PURE__*/React.createElement("br", null), "every program you run.")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "sp-dash-frame " + (inView ? "in" : ""),
    style: {
      background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
      border: "1px solid var(--ink-400)",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 20px",
      borderBottom: "1px solid var(--ink-400)",
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["#FF5F57", "#FFBD2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)"
    }
  }, "spark.igniteproductions.co / dashboard"), /*#__PURE__*/React.createElement(LivePill, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--ink-400)",
      padding: 20,
      background: "rgba(0,0,0,0.15)"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> PROGRAMS"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, [["Liquid Death / Q2 Tour", true], ["White Claw / Retail", false], ["Mark Anthony / Sampling", false], ["Dude Wipes / Festivals", false]].map(([n, a]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "10px 12px",
      borderRadius: 8,
      background: a ? "rgba(214,243,95,0.1)" : "transparent",
      border: "1px solid " + (a ? "rgba(214,243,95,0.3)" : "transparent"),
      color: a ? "var(--spark-500)" : "var(--fg-2)",
      fontSize: 13,
      fontWeight: a ? 600 : 400,
      display: "flex",
      alignItems: "center",
      gap: 8,
      transition: "all 200ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      animation: a ? "sp-pulse-dot 1.6s infinite" : "none"
    }
  }, a ? "◉" : "○"), " ", n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 24
    }
  }, [[count.toLocaleString(), "Samples today", "+14%", "var(--spark-500)"], ["142", "On-site now", "live", "var(--fg-1)"], ["23", "Events", "6 markets", "var(--fg-1)"], ["91%", "On-time", "7d avg", "var(--success)"]].map(([n, l, d, color]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "sp-stat-card",
    style: {
      padding: "14px 16px",
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      color
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "var(--fg-3)",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> COVERAGE // LIVE"), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "17 MARKETS")), /*#__PURE__*/React.createElement(CoverageMap, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ACTIVITY FEED"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(ActivityRows, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> SAMPLES / HOUR"), /*#__PURE__*/React.createElement(SparkBars, {
    animate: inView
  })))))))));
};
const SparkBars = ({
  animate
}) => {
  const bars = [38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100, 84, 92];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 110,
      marginTop: 10
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: animate ? "sp-bar" : "",
    style: {
      flex: 1,
      height: h + "%",
      background: "linear-gradient(to top, var(--spark-600), var(--spark-500))",
      borderRadius: "3px 3px 0 0",
      animationDelay: i * 40 + "ms"
    }
  })));
};

/* ---------- MOBILE / FOR THE FIELD ---------- */
const SparkMobile = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">> FOR THE FIELD"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(36px, 4vw, 64px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "var(--fg-1-inv)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    whiteSpace: "nowrap"
  }
}, "Ambassadors clock in"), /*#__PURE__*/React.createElement("br", null), "from the actual venue."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2-inv)",
    maxWidth: 480
  }
}, "Spark's mobile app is what your brand ambassadors use in the field. GPS-verified check-in. One-tap photo upload. Event reports while the event is still happening. Built for loud venues, bad reception, and fast-moving crews."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, ["GPS check-in on arrival (no paper sign-ins)", "Photo + notes + counts during event", "Auto-recap at clock-out", "Works offline; syncs when back online"].map((t, i) => /*#__PURE__*/React.createElement(SparkMobileItem, {
  key: t,
  text: t,
  i: i
})))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-phone-wrap",
  style: {
    width: 320,
    aspectRatio: "9/19",
    borderRadius: 40,
    background: "var(--ink-000)",
    border: "10px solid #1a1a1a",
    boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
    overflow: "hidden",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 24,
  opacity: 0.04
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "20px 16px 12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-1)"
  }
}, "9:14"), /*#__PURE__*/React.createElement(SparkLogomark, {
  size: 18
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-1)"
  }
}, "\u25CF\u25CF\u25CF")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "12px 16px"
  }
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> TODAY'S SHIFT"), /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    marginTop: 10,
    color: "var(--fg-1)"
  }
}, "White Claw"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginTop: 4
  }
}, "AUSTIN, TX \xB7 12:00 \u2013 8:00 PM"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 20,
    padding: 16,
    background: "rgba(214,243,95,0.1)",
    border: "1px solid rgba(214,243,95,0.3)",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    marginBottom: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--spark-500)",
    animation: "sp-pulse-dot 1.6s infinite"
  }
}, "\u25C9"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--spark-500)"
  }
}, "GPS VERIFIED")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15,
    color: "var(--fg-1)"
  }
}, "You're at The Mohawk Patio"), /*#__PURE__*/React.createElement("button", {
  style: {
    marginTop: 16,
    width: "100%",
    padding: "14px",
    borderRadius: 10,
    background: "var(--spark-500)",
    color: "#0A0B0D",
    border: "none",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: "-0.01em",
    cursor: "pointer"
  }
}, "Clock in")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 12,
    background: "var(--ink-200)",
    borderRadius: 10,
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "SAMPLES GOAL"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20,
    color: "var(--fg-1)",
    marginTop: 4
  }
}, "320")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 12,
    background: "var(--ink-200)",
    borderRadius: 10,
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "BRIEF"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20,
    color: "var(--spark-500)",
    marginTop: 4
  }
}, "READY")))))))));
const SparkMobileItem = ({
  text,
  i
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--fg-2-inv)",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-20px)",
      transition: "all 500ms cubic-bezier(0.2,0.7,0.2,1)",
      transitionDelay: i * 100 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u2192"), " ", text);
};
Object.assign(window, {
  SparkHero,
  SparkFeatures,
  SparkDeepDash,
  SparkMobile,
  SparkTicker
});