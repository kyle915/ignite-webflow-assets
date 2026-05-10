/* Spark product page — dark-dominant, deeper dashboard story */
const SparkHero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: "var(--ink-000)",
    overflow: "hidden",
    padding: "120px 0 100px"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_chrome_splash_png || "https://BASE/assets/chrome-splash.png",
  style: {
    position: "absolute",
    right: "-10%",
    top: "-20%",
    width: "55%",
    opacity: 0.35,
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
    gap: 12,
    alignItems: "center",
    marginBottom: 24
  }
}, /*#__PURE__*/React.createElement(SparkLockup, {
  size: 26
}), /*#__PURE__*/React.createElement(OpsLine, null, "* PRODUCT OVERVIEW")), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(60px, 8vw, 128px)",
    lineHeight: 0.94,
    letterSpacing: "-0.035em",
    maxWidth: 1100,
    margin: 0
  }
}, /*#__PURE__*/React.createElement(Bracket, null, "Field marketing finally gets the intelligence it deserves.")), /*#__PURE__*/React.createElement("p", {
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
    gap: 14
  }
}, /*#__PURE__*/React.createElement(AccentBtn, {
  size: "lg",
  onClick: () => location.href = "contact.html"
}, "Book a demo"), /*#__PURE__*/React.createElement(GhostBtn, {
  size: "lg",
  onClick: () => document.getElementById("dashboard")?.scrollIntoView({
    behavior: "smooth"
  })
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
  key: h
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    marginBottom: 8
  }
}, "STEP 0", i + 1), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: "-0.02em",
    color: "var(--spark-500)"
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
    color: "var(--fg-4)",
    fontFamily: "var(--font-mono)"
  }
}, "\u2192"))))));
const SparkFeatures = () => {
  const rows = [{
    k: "01",
    t: "One centralized system",
    d: "All field marketing data in one place. No more chasing recaps from 8 vendors or piecing together CSVs from 3 regions.",
    v: "central"
  }, {
    k: "02",
    t: "Faster decisions, live dashboards",
    d: "Real-time visibility across programs, markets, SKUs. Know what's working in the next market before the current one ends.",
    v: "live"
  }, {
    k: "03",
    t: "True ROI visibility",
    d: "Event-level cost, per-sample economics, market-by-market conversion. The numbers executives actually ask for.",
    v: "roi"
  }, {
    k: "04",
    t: "Zero client lift",
    d: "Your team doesn't log into anything unless they want to. We run it; you watch it. Included free with every Ignite program.",
    v: "lift"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> WHAT CLIENTS GET"), /*#__PURE__*/React.createElement("h2", {
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
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: "grid",
      gridTemplateColumns: "80px 1fr 1fr",
      gap: 40,
      alignItems: "center",
      padding: "36px 0",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: i === rows.length - 1 ? "1px solid var(--ink-400)" : "none"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "* ", r.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(24px, 2.5vw, 36px)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1
    }
  }, r.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, r.d))))));
};
const SparkDeepDash = () => /*#__PURE__*/React.createElement("section", {
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
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 9
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
}, [["4,228", "Samples today", "+14%", "var(--spark-500)"], ["142", "On-site now", "live", "var(--fg-1)"], ["23", "Events", "6 markets", "var(--fg-1)"], ["91%", "On-time", "7d avg", "var(--success)"]].map(([n, l, d, color]) => /*#__PURE__*/React.createElement("div", {
  key: l,
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
}, /*#__PURE__*/React.createElement(ActivityRows, null)))))))));
const SparkMobile = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
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
}, "Ambassadors clock in", /*#__PURE__*/React.createElement("br", null), "from the actual venue."), /*#__PURE__*/React.createElement("p", {
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
    gap: 8
  }
}, ["GPS check-in on arrival (no paper sign-ins)", "Photo + notes + counts during event", "Auto-recap at clock-out", "Works offline; syncs when back online"].map(t => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    color: "var(--fg-2-inv)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u2192"), " ", t)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
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
    color: "var(--spark-500)"
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
    letterSpacing: "-0.01em"
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
Object.assign(window, {
  SparkHero,
  SparkFeatures,
  SparkDeepDash,
  SparkMobile
});