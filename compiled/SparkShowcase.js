/* Live Spark dashboard moment — dark, the "wow" section */
const {
  useState: shState,
  useEffect: shEffect,
  useRef: shRef
} = React;
const US_CITIES = [{
  name: "SEATTLE",
  x: 16,
  y: 20,
  brand: "White Claw"
}, {
  name: "PORTLAND",
  x: 13,
  y: 26,
  brand: "Krispy Krunchy"
}, {
  name: "SAN FRANCISCO",
  x: 10,
  y: 46,
  brand: "Liquid Death"
}, {
  name: "LOS ANGELES",
  x: 15,
  y: 60,
  brand: "Dude Wipes"
}, {
  name: "PHOENIX",
  x: 25,
  y: 62,
  brand: "Mas+"
}, {
  name: "DENVER",
  x: 35,
  y: 44,
  brand: "Liquid Death"
}, {
  name: "DALLAS",
  x: 47,
  y: 68,
  brand: "Smalls Sliders"
}, {
  name: "HOUSTON",
  x: 51,
  y: 76,
  brand: "Total Wireless"
}, {
  name: "AUSTIN",
  x: 47,
  y: 74,
  brand: "White Claw"
}, {
  name: "MIAMI",
  x: 76,
  y: 82,
  brand: "Mark Anthony"
}, {
  name: "ATLANTA",
  x: 68,
  y: 62,
  brand: "Krispy Krunchy"
}, {
  name: "NASHVILLE",
  x: 62,
  y: 52,
  brand: "White Claw"
}, {
  name: "CHICAGO",
  x: 56,
  y: 34,
  brand: "Total Wireless"
}, {
  name: "DETROIT",
  x: 63,
  y: 32,
  brand: "Liquid Death"
}, {
  name: "BROOKLYN",
  x: 80,
  y: 32,
  brand: "Liquid Death"
}, {
  name: "BOSTON",
  x: 85,
  y: 26,
  brand: "White Claw"
}, {
  name: "DC",
  x: 76,
  y: 42,
  brand: "Dude Wipes"
}];
const CoverageMap = () => {
  const [focus, setFocus] = shState(null);
  const [pulseIdx, setPulseIdx] = shState(0);
  shEffect(() => {
    const id = setInterval(() => setPulseIdx(i => (i + 1) % US_CITIES.length), 900);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1.6 / 1",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 24,
    opacity: 0.06
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 65",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8,22 Q 4,28 6,38 Q 10,44 14,48 Q 18,56 22,58 Q 30,62 36,60 Q 42,58 48,60 Q 54,62 60,60 Q 66,58 72,56 Q 80,54 86,50 Q 92,44 92,36 Q 90,28 84,22 Q 78,18 72,18 Q 64,18 58,18 Q 50,18 42,18 Q 34,18 26,18 Q 18,18 14,18 Q 10,18 8,22 Z",
    fill: "rgba(214,243,95,0.04)",
    stroke: "rgba(214,243,95,0.22)",
    strokeWidth: "0.18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 73,56 Q 76,60 76,64",
    fill: "none",
    stroke: "rgba(214,243,95,0.22)",
    strokeWidth: "0.18"
  }), [15, 25, 35, 45, 55].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "2",
    y1: y,
    x2: "98",
    y2: y,
    stroke: "rgba(255,255,255,0.04)",
    strokeWidth: "0.08",
    strokeDasharray: "0.5,0.5"
  }))), US_CITIES.map((c, i) => {
    const isPulse = i === pulseIdx;
    const isFocus = focus === i;
    return /*#__PURE__*/React.createElement("div", {
      key: c.name,
      onMouseEnter: () => setFocus(i),
      onMouseLeave: () => setFocus(null),
      style: {
        position: "absolute",
        left: c.x + "%",
        top: c.y + "%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: isFocus ? 10 : 1
      }
    }, isPulse && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 8,
        height: 8,
        borderRadius: 999,
        border: "1.5px solid var(--spark-500)",
        animation: "radar 1.5s var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: isFocus ? 12 : 8,
        height: isFocus ? 12 : 8,
        borderRadius: 999,
        background: "var(--spark-500)",
        boxShadow: "0 0 10px rgba(214,243,95,0.8)",
        transition: "width 160ms, height 160ms"
      }
    }), (isFocus || i === pulseIdx) && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "calc(100% + 6px)",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        padding: "4px 8px",
        background: "rgba(10,11,13,0.95)",
        border: "1px solid var(--ink-400)",
        borderRadius: 6,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--spark-500)",
        pointerEvents: "none"
      }
    }, c.name, " \xB7 ", c.brand));
  }));
};
const BarChart = ({
  animate
}) => {
  const bars = [38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100, 84, 92];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 120
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: animate ? `${h}%` : "0%",
      background: `linear-gradient(to top, var(--spark-600), var(--spark-500))`,
      borderRadius: "3px 3px 0 0",
      transition: `height 700ms cubic-bezier(0.2,0.7,0.2,1) ${i * 40}ms`
    }
  })));
};
const ActivityRows = () => {
  const rows = [{
    t: "09:14",
    place: "AUSTIN, TX",
    brand: "White Claw",
    status: "checked-in",
    fg: "var(--spark-500)"
  }, {
    t: "09:12",
    place: "BROOKLYN, NY",
    brand: "Liquid Death",
    status: "on-site",
    fg: "var(--spark-500)"
  }, {
    t: "09:08",
    place: "DENVER, CO",
    brand: "Liquid Death",
    status: "setup",
    fg: "var(--ember-500)"
  }, {
    t: "08:56",
    place: "MIAMI, FL",
    brand: "Mark Anthony",
    status: "dispatched",
    fg: "var(--fg-2)"
  }, {
    t: "08:52",
    place: "CHICAGO, IL",
    brand: "Total Wireless",
    status: "photo upload",
    fg: "var(--info)"
  }, {
    t: "08:44",
    place: "LA, CA",
    brand: "Dude Wipes",
    status: "recap sent",
    fg: "var(--success)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "64px 1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "10px 12px",
      borderRadius: 8,
      background: i === 0 ? "rgba(214,243,95,0.08)" : "transparent",
      border: "1px solid " + (i === 0 ? "rgba(214,243,95,0.25)" : "transparent")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)"
    }
  }, r.t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, r.place), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 13.5,
      marginTop: 2
    }
  }, r.brand)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: r.fg
    }
  }, r.status))));
};
const SparkShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const onsite = shRef(0); // placeholder
  const [count, setCount] = shState(4208);
  shEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 6 + 2)), 1100);
    return () => clearInterval(id);
  }, [inView]);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Spark Showcase",
    style: {
      position: "relative",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "120px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.r_assets_chrome_blob_medium_png || "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-blob-medium.png",
    style: {
      position: "absolute",
      left: "-10%",
      top: "20%",
      width: "38%",
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
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SparkLockup, {
    size: 22
  }), /*#__PURE__*/React.createElement(LivePill, null)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(44px, 6vw, 88px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.96,
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(Bracket, null, "Field marketing finally gets the intelligence it deserves."))), /*#__PURE__*/React.createElement(AccentBtn, {
    size: "lg",
    onClick: () => location.href = "pages/spark.html"
  }, "Tour the platform")), /*#__PURE__*/React.createElement("div", {
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
      display: "flex",
      justifyContent: "center",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)"
    }
  }, "spark.igniteproductions.co / dashboard")), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--ink-400)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      background: "rgba(0,0,0,0.15)"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> PROGRAMS"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, [["Liquid Death / Q2 Tour", true], ["White Claw / Retail Demos", false], ["Mark Anthony / Sampling", false], ["Dude Wipes / Festivals", false]].map(([n, a]) => /*#__PURE__*/React.createElement("div", {
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
  }, a ? "◉" : "○"), " ", n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> VIEWS")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, ["Map", "Activity", "Recaps", "Ambassadors", "Requests"].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "8px 12px",
      fontSize: 13,
      color: "var(--fg-2)"
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
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
  }, [{
    n: count.toLocaleString(),
    l: "Samples today",
    d: "+14%",
    color: "var(--spark-500)"
  }, {
    n: "142",
    l: "On-site now",
    d: "live",
    color: "var(--fg-1)"
  }, {
    n: "23",
    l: "Events today",
    d: "6 markets",
    color: "var(--fg-1)"
  }, {
    n: "91%",
    l: "On-time rate",
    d: "7d avg",
    color: "var(--success)"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
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
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: s.color
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, s.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.12em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> COVERAGE // LIVE"), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "17 MARKETS ACTIVE")), /*#__PURE__*/React.createElement(CoverageMap, null)), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ACTIVITY FEED"), /*#__PURE__*/React.createElement(OpsLine, null, "LAST 30 MIN")), /*#__PURE__*/React.createElement(ActivityRows, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> SAMPLES / HOUR"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    animate: inView
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, [["GPS-verified check-ins", "Every ambassador clocks in from the actual venue. No paper sign-in sheets, no fudged timesheets."], ["Auto-generated recaps", "Event summaries write themselves — photos, notes, counts, attendance — sent to your inbox within hours."], ["Real-time dashboards", "Watch 17 markets at once. Leadership shouldn't have to ask 'what did we get?' — they should already see it."], ["Self-service requests", "Your team submits activation requests through Spark. Staffing, permits, briefs — all tracked."]].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--spark-500)",
      fontFamily: "var(--font-mono)",
      marginBottom: 10
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 17,
      marginBottom: 8
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, d))))));
};
Object.assign(window, {
  CoverageMap,
  SparkShowcase,
  BarChart,
  ActivityRows
});