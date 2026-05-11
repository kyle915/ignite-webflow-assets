/* Spark page — extras: before/after, replaces strip, live toasts */
const {
  useState: spxState,
  useEffect: spxEffect,
  useRef: spxRef
} = React;

/* ---------- #1: BEFORE / AFTER RECAP ---------- */
const SparkBeforeAfter = () => {
  const [ref, inView] = useInView({
    threshold: 0.2
  });
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
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> THE DIFFERENCE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      maxWidth: 1000
    }
  }, "How a recap used to look", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--spark-500)"
    }
  }, "vs. how it lands now.")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      marginTop: 64,
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 32,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1A1612",
      border: "1px solid #3A2A1E",
      borderRadius: 16,
      padding: 28,
      position: "relative",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-30px)",
      transition: "all 700ms cubic-bezier(0.2,0.7,0.2,1)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "#D87654",
      textTransform: "uppercase",
      padding: "6px 10px",
      borderRadius: 6,
      background: "rgba(216,118,84,0.12)",
      border: "1px solid rgba(216,118,84,0.3)",
      marginBottom: 18
    }
  }, "\u2715 BEFORE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)",
      letterSpacing: "0.12em"
    }
  }, "From: vendor-recaps@gmail.com", /*#__PURE__*/React.createElement("br", null), "Subject: RE: Re: Re: Q2 Tour - Austin Recap (FINAL_v3_USE_THIS)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "9 days after event")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: "rgba(0,0,0,0.3)",
      borderRadius: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--fg-2)",
      lineHeight: 1.6
    }
  }, "\"Hey team \u2014 attached is the recap deck for the Austin event. ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(216,118,84,0.2)",
      padding: "0 4px"
    }
  }, "Some of the photos got lost"), ", BA didn't submit her count sheet so I estimated ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(216,118,84,0.2)",
      padding: "0 4px"
    }
  }, "~250?"), ". Manager said it went great. ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(216,118,84,0.2)",
      padding: "0 4px"
    }
  }, "Will send full numbers next week."), "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, ["✕ Sample count: unknown", "✕ Attendance: 'felt good'", "✕ Photos: 4 out of 60 sent", "✕ Spend per sample: ???", "✕ Comparable markets: in another inbox"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "#D87654",
      opacity: 0.85
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 20,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "#D87654",
      textTransform: "uppercase"
    }
  }, "// 9 days \xB7 14 emails \xB7 0 confidence")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      opacity: inView ? 1 : 0,
      transition: "opacity 700ms",
      transitionDelay: "400ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      marginBottom: 12
    }
  }, "BECOMES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      color: "var(--spark-500)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
      border: "1px solid var(--ink-400)",
      borderRadius: 16,
      position: "relative",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(30px)",
      transition: "all 700ms cubic-bezier(0.2,0.7,0.2,1)",
      transitionDelay: "200ms",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 0 60px rgba(214,243,95,0.08)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--spark-500)",
      textTransform: "uppercase",
      padding: "6px 10px",
      borderRadius: 6,
      background: "rgba(214,243,95,0.12)",
      border: "1px solid rgba(214,243,95,0.3)",
      margin: "28px 28px 0"
    }
  }, "\u25C9 WITH SPARK"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "18px 28px 28px",
      borderRadius: 12,
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderBottom: "1px solid var(--ink-400)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#3A3F4A"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#3A3F4A"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#3A3F4A"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      textAlign: "center"
    }
  }, "spark.ignite / recaps / austin \xB7 white claw"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--spark-500)",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor",
      animation: "sp-pulse-dot 1.6s infinite"
    }
  }), "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 14px",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, "RECAP \xB7 AUSTIN, TX"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--fg-1)",
      letterSpacing: "-0.01em",
      marginTop: 4
    }
  }, "White Claw \xB7 Q2 Tour")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--spark-500)",
      textTransform: "uppercase"
    }
  }, "READY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg-3)",
      marginTop: 3
    }
  }, "3h after event")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, [["327", "samples", "var(--spark-500)"], ["68", "leads", "var(--fg-1)"], ["1,240", "attendees", "var(--fg-1)"], ["$2.18", "$/sample", "var(--success)"]].map(([n, l, c], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "14px 14px",
      borderRight: i < 3 ? "1px solid var(--ink-400)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: c,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      marginTop: 5
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 14px",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, "SAMPLES / HOUR"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--spark-500)",
      textTransform: "uppercase"
    }
  }, "\u2191 Peak 6PM \xB7 84")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 40",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: 40,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "spkGrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(214,243,95,0.4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(214,243,95,0)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 0,32 L 20,28 L 40,30 L 60,22 L 80,18 L 100,14 L 120,8 L 140,12 L 160,18 L 180,22 L 200,28 L 200,40 L 0,40 Z",
    fill: "url(#spkGrad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0,32 L 20,28 L 40,30 L 60,22 L 80,18 L 100,14 L 120,8 L 140,12 L 160,18 L 180,22 L 200,28",
    fill: "none",
    stroke: "var(--spark-500)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "8",
    r: "2.5",
    fill: "var(--spark-500)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, "GPS-VERIFIED PHOTOS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "var(--fg-2)",
      textTransform: "uppercase"
    }
  }, "62 \xB7 View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 4
    }
  }, ["linear-gradient(135deg, #3a2e22, #5c4731)", "linear-gradient(135deg, #2a3340, #1c2935)", "linear-gradient(135deg, #4a3a2e, #2e2418)", "linear-gradient(135deg, #2e3a3a, #1e2a2a)", "linear-gradient(135deg, #3a2e3a, #25182a)"].map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: "1 / 1",
      borderRadius: 4,
      background: g,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 2,
      left: 3,
      fontFamily: "var(--font-mono)",
      fontSize: 7,
      color: "rgba(214,243,95,0.9)",
      letterSpacing: "0.1em"
    }
  }, "\u25C9"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      flex: 1
    }
  }, [["Per-SKU breakdown", "5 variants"], ["Side-by-side vs Brooklyn", "+18% samples"], ["BA notes", "\"long line, ran out\""], ["Shared with", "8 stakeholders"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-2)",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--spark-500)"
    }
  }, "\u2713"), " ", k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg-3)",
      letterSpacing: "0.08em"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 28px 24px",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "var(--spark-500)",
      textTransform: "uppercase"
    }
  }, "// live in dashboard \xB7 3h after event \xB7 0 follow-ups")))));
};

/* ---------- #5: WHAT SPARK REPLACES ---------- */
const SparkReplaces = () => {
  const items = [{
    kill: "Excel recap files",
    with: "Live dashboard"
  }, {
    kill: "Vendor PDF reports",
    with: "Auto-generated recaps"
  }, {
    kill: "Photo Slack channels",
    with: "Geo-tagged uploads"
  }, {
    kill: "Post-event surveys",
    with: "Real-time field notes"
  }, {
    kill: "Calling for status",
    with: "Activity feed"
  }, {
    kill: "Counting paper sign-ins",
    with: "GPS check-ins"
  }, {
    kill: "Chasing samples data",
    with: "Per-event ROI"
  }, {
    kill: "Quarterly readouts",
    with: "Daily visibility"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> WHAT IT REPLACES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      maxWidth: 1000
    }
  }, "The eight things you can ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "stop doing"), " on day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(SparkKillCell, {
    key: it.kill,
    it: it,
    i: i
  })))));
};
const SparkKillCell = ({
  it,
  i
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const [hovered, setHovered] = spxState(false);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      position: "relative",
      padding: 24,
      background: hovered ? "rgba(214,243,95,0.06)" : "var(--ink-100)",
      border: "1px solid " + (hovered ? "rgba(214,243,95,0.4)" : "var(--ink-400)"),
      borderRadius: 12,
      minHeight: 160,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: "all 500ms cubic-bezier(0.2,0.7,0.2,1)",
      transitionDelay: i * 60 + "ms",
      cursor: "default",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: "-0.015em",
      color: hovered ? "rgba(245,242,236,0.4)" : "var(--fg-1)",
      textDecoration: hovered ? "line-through" : "none",
      textDecorationColor: "var(--ignite-500)",
      textDecorationThickness: "2px",
      transition: "all 300ms",
      lineHeight: 1.2
    }
  }, it.kill), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: hovered ? 12 : 8,
      paddingTop: hovered ? 12 : 0,
      borderTop: hovered ? "1px solid rgba(214,243,95,0.2)" : "1px solid transparent",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.06em",
      color: "var(--spark-500)",
      opacity: hovered ? 1 : 0.6,
      transition: "all 300ms"
    }
  }, "\u2192 ", it.with));
};

/* ---------- #14: LIVE TOAST FEED (page-level) ---------- */
const SparkToasts = () => {
  const events = [{
    brand: "Liquid Death",
    place: "Brooklyn, NY",
    action: "Check-in",
    color: "var(--spark-500)",
    icon: "◉"
  }, {
    brand: "White Claw",
    place: "Austin, TX",
    action: "Samples +24",
    color: "var(--spark-500)",
    icon: "↑"
  }, {
    brand: "Mark Anthony",
    place: "Miami, FL",
    action: "Setup complete",
    color: "var(--ember-500)",
    icon: "●"
  }, {
    brand: "Dude Wipes",
    place: "Denver, CO",
    action: "Photo uploaded",
    color: "var(--info)",
    icon: "▦"
  }, {
    brand: "Liquid Death",
    place: "LA, CA",
    action: "Recap sent",
    color: "var(--success)",
    icon: "✓"
  }, {
    brand: "Total Wireless",
    place: "Chicago, IL",
    action: "Lead captured",
    color: "var(--spark-500)",
    icon: "+"
  }, {
    brand: "Krispy Krunchy",
    place: "Atlanta, GA",
    action: "Check-in",
    color: "var(--spark-500)",
    icon: "◉"
  }, {
    brand: "White Claw",
    place: "Boston, MA",
    action: "Samples +18",
    color: "var(--spark-500)",
    icon: "↑"
  }, {
    brand: "Mas+",
    place: "Phoenix, AZ",
    action: "Shift started",
    color: "var(--ember-500)",
    icon: "●"
  }, {
    brand: "Smalls Sliders",
    place: "Dallas, TX",
    action: "Recap sent",
    color: "var(--success)",
    icon: "✓"
  }];
  const [toasts, setToasts] = spxState([]);
  const [enabled, setEnabled] = spxState(true);
  const idxRef = spxRef(0);
  spxEffect(() => {
    if (!enabled) return;
    const push = () => {
      const e = events[idxRef.current % events.length];
      idxRef.current += 1;
      const id = Date.now() + Math.random();
      setToasts(ts => [...ts, {
        ...e,
        id
      }].slice(-3));
      setTimeout(() => {
        setToasts(ts => ts.filter(t => t.id !== id));
      }, 4500);
    };
    // first toast after 3s, then every 3.5s
    const startT = setTimeout(() => {
      push();
      const i = setInterval(push, 3500);
      window.__sparkToastInterval = i;
    }, 3000);
    return () => {
      clearTimeout(startT);
      if (window.__sparkToastInterval) clearInterval(window.__sparkToastInterval);
    };
  }, [enabled]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes sp-toast-in {
          0% { opacity: 0; transform: translateX(120%); }
          60% { opacity: 1; transform: translateX(-6px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes sp-toast-out {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(120%); }
        }
        .sp-toast { animation: sp-toast-in 500ms cubic-bezier(0.2,0.9,0.3,1) both, sp-toast-out 400ms ease-in 4s forwards; }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      zIndex: 90,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      pointerEvents: "none",
      maxWidth: 320
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "sp-toast",
    style: {
      pointerEvents: "auto",
      background: "rgba(10,11,13,0.92)",
      backdropFilter: "blur(14px)",
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      padding: "12px 14px",
      boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: "rgba(214,243,95,0.08)",
      border: "1px solid rgba(214,243,95,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: t.color,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      flexShrink: 0
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: t.color,
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, t.action), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--fg-1)",
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      marginTop: 2
    }
  }, t.place)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: "var(--spark-500)",
      flexShrink: 0,
      animation: "sp-pulse-dot 1.6s infinite"
    }
  }, "\u25CF")))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEnabled(e => !e),
    style: {
      position: "fixed",
      right: 20,
      bottom: toasts.length > 0 ? 230 : 20,
      zIndex: 91,
      background: "rgba(10,11,13,0.92)",
      backdropFilter: "blur(14px)",
      border: "1px solid var(--ink-400)",
      borderRadius: 999,
      padding: "8px 14px",
      color: enabled ? "var(--spark-500)" : "var(--fg-3)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 200ms",
      display: "flex",
      alignItems: "center",
      gap: 8
    },
    title: enabled ? "Pause live feed" : "Resume live feed"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor",
      animation: enabled ? "sp-pulse-dot 1.6s infinite" : "none"
    }
  }), enabled ? "LIVE FEED" : "PAUSED"));
};
Object.assign(window, {
  SparkBeforeAfter,
  SparkReplaces,
  SparkToasts
});