(function(){if (typeof window !== "undefined" && window.PageSparkRetail) return;
/* Auto-extracted from the design project's pages/spark-retail.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  LIME = "#D6F35F",
  ACCENT = "#D7453E",
  PAPER = "#F5F2EC";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".sr-reveal");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    }), {
      threshold: 0.12
    });
    els.forEach(e => obs.observe(e));
    return () => obs.disconnect();
  }, []);
};
const Mono = ({
  children,
  color,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: color || ACCENT,
    ...style
  }
}, children);

/* ============================ HERO ============================ */
const Hero = () => {
  const [live, setLive] = React.useState(2143);
  React.useEffect(() => {
    const id = setInterval(() => setLive(v => v + Math.floor(Math.random() * 3)), 1400);
    return () => clearInterval(id);
  }, []);
  /* live task feed cycling */
  const feed = [{
    store: "KROGER · COLUMBUS OH",
    task: "Shelf audit + OOS check",
    who: "@marcus_field",
    c: LIME
  }, {
    store: "TARGET · AUSTIN TX",
    task: "Planogram compliance photo",
    who: "@ana.l",
    c: ACCENT
  }, {
    store: "7-ELEVEN · MIAMI FL",
    task: "Cooler price check",
    who: "@dvr",
    c: LIME
  }, {
    store: "WHOLE FOODS · BROOKLYN",
    task: "Competitive set photo",
    who: "@sk_nyc",
    c: ACCENT
  }, {
    store: "COSTCO · DENVER CO",
    task: "Roadshow end-cap verify",
    who: "@janelle",
    c: LIME
  }];
  const [claimed, setClaimed] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setClaimed(c => (c + 1) % feed.length), 1800);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Spark Retail Hero",
    style: {
      position: "relative",
      overflow: "hidden",
      background: INK,
      color: "#fff",
      padding: "91px 0 90px",
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: "-12%",
      top: "-16%",
      width: "55%",
      height: "75%",
      background: `radial-gradient(ellipse at center, ${LIME}1f, transparent 62%)`,
      filter: "blur(55px)",
      animation: "sr-blob-a 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: "-14%",
      bottom: "-20%",
      width: "50%",
      height: "62%",
      background: `radial-gradient(ellipse at center, ${ACCENT}1a, transparent 65%)`,
      filter: "blur(60px)",
      animation: "sr-blob-b 27s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${LIME}55, transparent)`,
      animation: "sr-scan 8s linear infinite",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sr-rise",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingBottom: 18,
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.r_assets_spark_logo_full_png || "https://kyle915.github.io/ignite-webflow-assets/assets/spark-logo-full.png",
    alt: "Spark by Ignite",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.3)"
    }
  }, "/"), /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.55)"
  }, "RETAIL EXECUTION"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 10px ${LIME}`,
      animation: "sr-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: LIME
  }, live.toLocaleString(), " TASKS LIVE NOW"))), /*#__PURE__*/React.createElement("div", {
    className: "sr-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sr-rise",
    style: {
      animationDelay: "80ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px",
      borderRadius: 999,
      background: `${LIME}1c`,
      border: `1px solid ${LIME}88`
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: LIME
  }, "// CROWDSOURCED \xB7 BUT VETTED"))), /*#__PURE__*/React.createElement("h1", {
    className: "sr-rise",
    style: {
      marginTop: 30,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(48px, 7vw, 116px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.9,
      textWrap: "balance",
      animationDelay: "200ms"
    }
  }, "Eyes in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: LIME,
      textShadow: `0 0 50px ${LIME}55`
    }
  }, "every aisle.")), /*#__PURE__*/React.createElement("p", {
    className: "sr-rise",
    style: {
      marginTop: 30,
      fontSize: "clamp(18px, 1.9vw, 24px)",
      lineHeight: 1.4,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 560,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      animationDelay: "340ms"
    }
  }, "Post a store task. A vetted ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "257,000-strong field force"), " claims it, completes it, and GPS + photo verifies it. Other platforms send anonymous gig workers. We send a trained roster \u2014 and you watch it happen live in Spark."), /*#__PURE__*/React.createElement("div", {
    className: "sr-rise",
    style: {
      marginTop: 34,
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      animationDelay: "460ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact?intent=spark-retail",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "20px 30px",
      borderRadius: 999,
      background: LIME,
      color: INK,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      textDecoration: "none",
      boxShadow: `0 12px 40px ${LIME}44`
    }
  }, "Post your first task ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    style: {
      padding: "20px 26px",
      borderRadius: 999,
      background: "transparent",
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,0.25)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      textDecoration: "none"
    }
  }, "See how it works"))), /*#__PURE__*/React.createElement("div", {
    className: "sr-rise",
    style: {
      animationDelay: "560ms",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      maxWidth: "100%",
      background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      border: `1px solid ${LIME}33`,
      borderRadius: 30,
      padding: 5,
      boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${LIME}1a`,
      animation: "sr-float 6s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F1117",
      borderRadius: 26,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 20px 8px",
      color: "#fff",
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 5,
      fontSize: 10,
      alignItems: "center"
    }
  }, "\u25CF\u25CF\u25CF\u25CB \xB7 100%")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 18px 8px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: `linear-gradient(135deg, ${LIME}, ${ACCENT})`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 13,
      fontWeight: 700
    }
  }, "Tasks near you"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: LIME,
      fontSize: 10,
      fontFamily: "var(--font-mono)"
    }
  }, "\u25CF 38 within 5 mi")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "rgba(255,255,255,0.4)"
    }
  }, "SPARK")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, feed.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "12px 13px",
      borderRadius: 12,
      background: i === claimed ? `${LIME}1a` : "rgba(255,255,255,0.04)",
      border: i === claimed ? `1px solid ${LIME}66` : "1px solid rgba(255,255,255,0.07)",
      transition: "all 400ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.12em",
      color: f.c
    }
  }, f.store), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      color: "rgba(255,255,255,0.4)"
    }
  }, "$", 8 + i * 2, ".00")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 6
    }
  }, f.task), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "rgba(255,255,255,0.45)"
    }
  }, i === claimed ? "claiming…" : "open"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      color: i === claimed ? LIME : "rgba(255,255,255,0.5)",
      letterSpacing: "0.1em"
    }
  }, i === claimed ? "✓ " + f.who : "CLAIM →")))))))))));
};

/* ============================ TICKER ============================ */
const Ticker = () => /*#__PURE__*/React.createElement("div", {
  style: {
    background: LIME,
    color: INK,
    padding: "18px 0",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sr-marquee-track"
}, [0, 1].map(k => /*#__PURE__*/React.createElement(React.Fragment, {
  key: k
}, ["SHELF AUDITS", "◆", "OUT-OF-STOCK ALERTS", "◆", "PLANOGRAM COMPLIANCE", "◆", "PRICE CHECKS", "◆", "COMPETITIVE INTEL", "◆", "DISPLAY VERIFICATION", "◆", "MYSTERY SHOPS", "◆", "DEMO COVERAGE", "◆"].map((t, i) => /*#__PURE__*/React.createElement("span", {
  key: k + "-" + i,
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: "-0.01em"
  }
}, t))))));

/* ============================ PROBLEM ============================ */
const Problem = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: PAPER,
    color: INK,
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: -100,
    top: -60,
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(220px,30vw,460px)",
    color: "rgba(10,11,13,0.04)",
    lineHeight: 0.85,
    letterSpacing: "-0.05em",
    whiteSpace: "nowrap",
    transform: "rotate(6deg)"
  }
}, "BLIND"), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sr-reveal",
  style: {
    maxWidth: 920
  }
}, /*#__PURE__*/React.createElement(Mono, null, "// THE PROBLEM"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(36px,5vw,76px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.98,
    textWrap: "balance"
  }
}, "Your product ships to 14,000 stores.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "You can see maybe forty.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 19,
    lineHeight: 1.6,
    color: "rgba(10,11,13,0.7)",
    maxWidth: 720
  }
}, "The display never got built. The SKU's been out of stock for nine days. A competitor bought your end-cap. You find out a quarter later \u2014 in a vendor PDF, if at all. Crowdsourced apps promised to fix it, then sent anonymous gig workers with no training and no accountability.")), /*#__PURE__*/React.createElement("div", {
  className: "sr-two-col sr-reveal",
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, [{
  t: "Phantom displays",
  d: "You paid for the end-cap. Nobody verified it got built. The retailer says it did."
}, {
  t: "Silent stockouts",
  d: "OOS is invisible until scan data catches up — weeks of lost velocity later."
}, {
  t: "Anonymous gig data",
  d: "Generic platforms send whoever's nearby. No vetting, no training, no recourse on a bad audit."
}, {
  t: "Recaps that arrive late",
  d: "By the time the deck lands, the window closed and the budget's gone."
}].map((x, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: "28px 26px",
    background: "#fff",
    border: "1px solid rgba(10,11,13,0.1)",
    borderRadius: 14,
    borderLeft: `3px solid ${ACCENT}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 21,
    letterSpacing: "-0.02em",
    marginBottom: 8
  }
}, x.t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.55,
    color: "rgba(10,11,13,0.65)"
  }
}, x.d))))));

/* ============================ HOW IT WORKS ============================ */
const HOW = [{
  n: "01",
  t: "Post the task",
  d: "Pick stores (or a whole chain / DMA), define the task — audit, photo, OOS check, price grab, competitive intel — set the payout. Live in minutes.",
  tag: "BRAND SIDE"
}, {
  n: "02",
  t: "The field force claims it",
  d: "257,000 vetted, trained ambassadors get matched by location. The right person near the store claims it. Not a random gig stranger — a roster member with a track record.",
  tag: "FIELD SIDE"
}, {
  n: "03",
  t: "GPS + photo verified",
  d: "They check in on-site (GPS-confirmed), complete the task, and upload timestamped photo proof. No check-in, no payout. Fraud-screened automatically.",
  tag: "VERIFIED"
}, {
  n: "04",
  t: "Watch it land — live",
  d: "Results stream into your Spark dashboard as they happen. Per-store, per-task, photo-backed. Export, share, or pipe to your BI stack same day.",
  tag: "REAL-TIME"
}];
const How = () => /*#__PURE__*/React.createElement("section", {
  id: "how",
  style: {
    background: INK,
    color: "#fff",
    padding: "120px 0",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${LIME}10, transparent 60%)`,
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sr-reveal",
  style: {
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: LIME
}, "// HOW IT WORKS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(36px,5vw,80px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.96
  }
}, "Task to ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: LIME
  }
}, "verified data."), " Same day.")), /*#__PURE__*/React.createElement("div", {
  className: "sr-two-col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 16
  }
}, HOW.map((h, i) => /*#__PURE__*/React.createElement("div", {
  key: h.n,
  className: "sr-reveal",
  style: {
    padding: "30px 26px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    minHeight: 280,
    display: "flex",
    flexDirection: "column",
    transitionDelay: i * 70 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: `linear-gradient(90deg, ${LIME}, transparent 70%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 54,
    color: LIME,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    textShadow: `0 0 20px ${LIME}44`
  }
}, h.n), /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.4)",
  style: {
    fontSize: 9
  }
}, h.tag)), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 23,
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    marginBottom: 10
  }
}, h.t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)"
  }
}, h.d))))));

/* ============================ DASHBOARD MOCK ============================ */
/* tiny sparkline */
const Spark = ({
  pts,
  color
}) => {
  const max = Math.max(...pts),
    min = Math.min(...pts),
    w = 60,
    h = 18;
  const d = pts.map((p, i) => `${i / (pts.length - 1) * w},${h - (p - min) / (max - min || 1) * h}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: "0.9"
  }));
};

/* CSS-drawn shelf "photo" — reads as a store-shelf snapshot */
const ShelfShot = ({
  store,
  time,
  idx
}) => {
  const shelves = [[["#1f2b14", 3], ["#2a3b1a", 2], ["#3a2a16", 3], ["#22303a", 2]], [["#3a2a16", 2], ["#222a16", 4], ["#2c1f12", 2], ["#1e2a2f", 3]], [["#22303a", 3], ["#2a3b1a", 2], ["#3a2a16", 2], ["#262016", 3]]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3/4",
      borderRadius: 9,
      overflow: "hidden",
      position: "relative",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "linear-gradient(180deg,#1a1d22,#0d0f12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: "16px 7px 7px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  }, shelves.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 2.5,
      height: 26
    }
  }, row.map(([c, span], k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: span,
      display: "flex",
      gap: 1.5,
      alignItems: "flex-end",
      height: "100%"
    }
  }, Array.from({
    length: span + 1
  }).map((_, u) => /*#__PURE__*/React.createElement("div", {
    key: u,
    style: {
      flex: 1,
      height: `${64 + (k + u + r) % 3 * 12}%`,
      background: c,
      borderRadius: "1.5px 1.5px 0 0",
      boxShadow: "inset 0 2px 0 rgba(255,255,255,0.06)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "rgba(255,255,255,0.14)",
      borderRadius: 2,
      marginTop: 1
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.05), transparent 60%), linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.72) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 6,
      left: 7,
      fontFamily: "var(--font-mono)",
      fontSize: 6.5,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: "0.1em"
    }
  }, "IMG\xB7", idx), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 6,
      right: 7,
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      padding: "2px 5px",
      borderRadius: 999,
      background: "rgba(214,243,95,0.18)",
      border: `1px solid ${LIME}55`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 5px ${LIME}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 6,
      color: LIME,
      letterSpacing: "0.06em"
    }
  }, "GPS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      right: 7,
      bottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 6.5,
      color: "#fff",
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, store), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 6,
      color: "rgba(255,255,255,0.55)",
      marginTop: 1
    }
  }, time)));
};
const Dashboard = () => {
  const [n, setN] = React.useState(11872);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + Math.floor(Math.random() * 5)), 1300);
    return () => clearInterval(id);
  }, []);
  const rows = [{
    s: "Kroger · #4471 Columbus OH",
    t: "Shelf audit",
    st: "compliant",
    c: LIME
  }, {
    s: "Target · #1190 Austin TX",
    t: "Planogram",
    st: "2 gaps",
    c: ACCENT
  }, {
    s: "Sprouts · #332 Phoenix AZ",
    t: "OOS check",
    st: "OOS flagged",
    c: "#FF5F57"
  }, {
    s: "Costco · #88 Denver CO",
    t: "End-cap verify",
    st: "built ✓",
    c: LIME
  }, {
    s: "Wegmans · #14 Buffalo NY",
    t: "Price grab",
    st: "captured",
    c: LIME
  }];
  /* metro coverage nodes — roughly-accurate US positions (x%, y%) */
  const metros = [["SEA", 9, 16], ["SF", 5, 44], ["LA", 12, 57], ["PHX", 22, 60], ["DEN", 34, 45], ["DFW", 46, 67], ["CHI", 60, 35], ["ATL", 70, 60], ["MIA", 82, 87], ["DC", 84, 41], ["NYC", 87, 31], ["BOS", 90, 25]];
  const links = [[1, 4], [4, 6], [6, 10], [6, 7], [4, 5], [2, 3], [3, 5], [7, 8], [10, 11], [0, 1], [9, 10], [7, 9]];
  const kpis = [{
    l: "TASKS DONE",
    v: n.toLocaleString(),
    c: LIME,
    d: "▲ 4.2%",
    spark: [4, 6, 5, 8, 7, 9, 11, 10, 13]
  }, {
    l: "COMPLIANCE",
    v: "94%",
    c: LIME,
    d: "▲ 1.1%",
    spark: [88, 90, 89, 91, 92, 91, 93, 94, 94]
  }, {
    l: "OOS FOUND",
    v: "312",
    c: ACCENT,
    d: "▲ 38",
    spark: [2, 4, 3, 6, 5, 8, 7, 9, 12]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "120px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "sr-reveal",
    style: {
      textAlign: "center",
      maxWidth: 760,
      margin: "0 auto 56px"
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: LIME
  }, "// THE COMMAND CENTER"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(36px,5vw,72px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.98
    }
  }, "Every store. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: LIME
    }
  }, "One screen.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 17,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Not a PDF three weeks late. A live operating picture of your shelf, nationwide.")), /*#__PURE__*/React.createElement("div", {
    className: "sr-reveal",
    style: {
      background: "linear-gradient(180deg,#15171C,#0E1014)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 18px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
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
      color: "rgba(255,255,255,0.5)"
    }
  }, "spark.ignite / retail / live-board"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 10px ${LIME}`,
      animation: "sr-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: LIME,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    className: "sr-two-col",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      borderRight: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 10,
      marginBottom: 20
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: k.l,
    style: {
      padding: "14px 14px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 10,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: `linear-gradient(90deg, ${k.c}, transparent 80%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 23,
      color: k.c,
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, k.v), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 7.5,
      letterSpacing: "0.14em",
      color: "rgba(255,255,255,0.5)"
    }
  }, k.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      color: k.c,
      marginTop: 3
    }
  }, k.d)), /*#__PURE__*/React.createElement(Spark, {
    pts: k.spark,
    color: k.c
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 246,
      borderRadius: 12,
      background: "radial-gradient(ellipse at 55% 45%, rgba(214,243,95,0.05), transparent 70%), #0C0E12",
      border: "1px solid rgba(255,255,255,0.08)",
      overflow: "hidden",
      backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 14,
      display: "flex",
      justifyContent: "space-between",
      right: 14
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.4)",
    style: {
      fontSize: 8
    }
  }, ">> ", "LIVE COVERAGE \xB7 50 STATES"), /*#__PURE__*/React.createElement(Mono, {
    color: LIME,
    style: {
      fontSize: 8
    }
  }, "1,204 ACTIVE")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, links.map(([a, b], i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: metros[a][1],
    y1: metros[a][2],
    x2: metros[b][1],
    y2: metros[b][2],
    stroke: "rgba(214,243,95,0.16)",
    strokeWidth: "0.3",
    vectorEffect: "non-scaling-stroke"
  }))), metros.map(([code, x, y], i) => {
    const hot = i % 4 === 0;
    const c = hot ? ACCENT : LIME;
    return /*#__PURE__*/React.createElement("div", {
      key: code,
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        width: 16,
        height: 16,
        marginLeft: -8,
        marginTop: -8,
        borderRadius: 999,
        background: c,
        opacity: 0.35,
        animation: `sr-ping ${2 + i % 3}s ease-out infinite ${i * 0.18}s`
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        width: 5,
        height: 5,
        marginLeft: -2.5,
        marginTop: -2.5,
        borderRadius: 999,
        background: c,
        boxShadow: `0 0 8px ${c}`
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 6,
        top: -5,
        fontFamily: "var(--font-mono)",
        fontSize: 6.5,
        letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.5)",
        whiteSpace: "nowrap"
      }
    }, code));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.5)",
    style: {
      fontSize: 9
    }
  }, ">> ", "TASKS CLEARING NOW"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: LIME,
      animation: "sr-pulse 1.4s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.4)",
    style: {
      fontSize: 8
    }
  }, "STREAMING"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, rows.map((r, i) => {
    const dot = r.st === "OOS flagged" ? "#FF5F57" : r.st === "2 gaps" ? ACCENT : LIME;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 10,
        padding: "11px 13px",
        borderRadius: 9,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: dot,
        boxShadow: `0 0 6px ${dot}`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "#fff",
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, r.s), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        color: "rgba(255,255,255,0.45)",
        marginTop: 2
      }
    }, r.t)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.08em",
        color: r.c,
        whiteSpace: "nowrap",
        textTransform: "uppercase"
      }
    }, r.st));
  })), /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.5)",
    style: {
      fontSize: 9,
      display: "block",
      marginTop: 18
    }
  }, ">> ", "PHOTO PROOF \xB7 GPS-STAMPED"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ShelfShot, {
    idx: 1,
    store: "KROGER #4471",
    time: "2:14p \xB7 39.96,-83.00"
  }), /*#__PURE__*/React.createElement(ShelfShot, {
    idx: 2,
    store: "TARGET #1190",
    time: "2:31p \xB7 30.27,-97.74"
  }), /*#__PURE__*/React.createElement(ShelfShot, {
    idx: 3,
    store: "SPROUTS #332",
    time: "2:48p \xB7 33.45,-112.07"
  }), /*#__PURE__*/React.createElement(ShelfShot, {
    idx: 4,
    store: "COSTCO #88",
    time: "3:02p \xB7 39.74,-104.99"
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "sr-reveal",
    style: {
      marginTop: 16,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.16em",
      color: "rgba(255,255,255,0.4)",
      textTransform: "uppercase"
    }
  }, "\u203B Interface mock \xB7 drop real activation + shelf photos into the proof strip before launch")));
};

/* ============================ TASK TYPES ============================ */
const TASKS = [{
  t: "Shelf & display audits",
  d: "Is it on the shelf, faced, and priced right? Photo-verified, store by store."
}, {
  t: "Out-of-stock detection",
  d: "Same-day OOS flagging with photo proof — route it to the retailer before velocity drops."
}, {
  t: "Planogram compliance",
  d: "Built to spec or not. Gaps flagged, end-caps verified, resets audited."
}, {
  t: "Price & promo checks",
  d: "Capture live shelf price, promo execution, competitor pricing across the set."
}, {
  t: "Competitive intelligence",
  d: "Competitor facings, new items, pricing, and display share — captured in the wild."
}, {
  t: "Demo & sampling coverage",
  d: "Verify your demo actually ran, counted, and converted — not just got booked."
}];
const Tasks = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: PAPER,
    color: INK,
    padding: "120px 0",
    borderTop: "1px solid rgba(10,11,13,0.06)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "sr-reveal",
  style: {
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, null, "// WHAT YOU CAN TASK"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(36px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.98,
    textWrap: "balance",
    maxWidth: 1000
  }
}, "If it happens on a shelf,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "you can task it."))), /*#__PURE__*/React.createElement("div", {
  className: "sr-two-col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 16
  }
}, TASKS.map((x, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "sr-reveal",
  style: {
    padding: "30px 28px",
    background: "#fff",
    border: "1px solid rgba(10,11,13,0.1)",
    borderRadius: 16,
    transitionDelay: i * 60 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: INK,
    color: LIME,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 18,
    marginBottom: 18
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: "-0.02em",
    marginBottom: 8
  }
}, x.t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.55,
    color: "rgba(10,11,13,0.65)"
  }
}, x.d))))));

/* ============================ VS / DIFFERENCE ============================ */
const VS = [["Anonymous gig worker, claimed off a map", "Vetted, trained roster member with a track record"], ["No accountability on a bad or faked audit", "GPS check-in + photo proof + fraud screening, or no payout"], ["Coverage gaps in rural + secondary markets", "257,000 ambassadors · all 50 states · same-week reach"], ["A data vendor that hands you a CSV", "A field-marketing operator that can also fix what it finds"], ["Generic, race-to-the-bottom task pool", "Gamified roster — points, tiers, Cans-in-Hands leaderboard"]];
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "120px 0",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(ellipse 50% 50% at 20% 30%, ${ACCENT}10, transparent 60%)`,
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sr-reveal",
  style: {
    marginBottom: 48,
    maxWidth: 900
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: LIME
}, "// WHY SPARK, NOT A GIG APP"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(36px,5vw,76px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.96,
    textWrap: "balance"
  }
}, "Crowdsourced reach.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: LIME
  }
}, "Agency accountability.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 680
  }
}, "The gig-app platforms get you scale and lose you trust. Traditional merchandising gets you trust and loses you scale + speed. Spark is the only one that's both \u2014 because the \"crowd\" is our own vetted, trained, gamified field force.")), /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "16px 24px",
    background: "rgba(255,255,255,0.02)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    borderRight: "1px solid rgba(255,255,255,0.1)"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "// GENERIC GIG PLATFORMS")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "16px 24px",
    background: `${LIME}10`,
    borderBottom: `1px solid ${LIME}33`,
    borderLeft: `2px solid ${LIME}`
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: LIME
}, "// SPARK BY IGNITE"))), VS.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "sr-vs-row sr-reveal",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    transitionDelay: i * 50 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "22px 24px",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    borderBottom: i < VS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
    fontSize: 15,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.5)",
    textDecoration: "line-through",
    textDecorationColor: "rgba(255,255,255,0.25)"
  }
}, a), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "22px 24px",
    borderLeft: `2px solid ${LIME}`,
    borderBottom: i < VS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
    fontSize: 15.5,
    lineHeight: 1.5,
    fontWeight: 600,
    color: "#fff",
    display: "flex",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontWeight: 800,
    flexShrink: 0
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, b)))))));

/* ============================ STATS ============================ */
const Stats = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: LIME,
    color: INK,
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "sr-two-col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 24
  }
}, [["257,000", "Vetted field force"], ["50", "States, live coverage"], ["<48hr", "To first verified data"], ["GPS+📸", "Verified or no payout"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  className: "sr-reveal",
  style: {
    transitionDelay: i * 70 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(40px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(10,11,13,0.7)"
  }
}, l))))));

/* ============================ CTA ============================ */
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "150px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    left: "-10%",
    top: "-10%",
    width: "50%",
    height: "60%",
    background: `radial-gradient(ellipse at center, ${LIME}1a, transparent 65%)`,
    filter: "blur(60px)",
    animation: "sr-blob-b 24s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: LIME
}, "// SEE YOUR SHELF"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(48px,8vw,150px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.86,
    textWrap: "balance"
  }
}, "Stop guessing", /*#__PURE__*/React.createElement("br", null), "what's ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: LIME
  }
}, "on the shelf.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontSize: "clamp(18px,1.9vw,26px)",
    lineHeight: 1.4,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 680,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Tell us the chains and the question you need answered. We'll spin up your first task batch in Spark and have verified, photo-backed data flowing within 48 hours."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=spark-retail",
  style: {
    padding: "22px 34px",
    borderRadius: 999,
    background: LIME,
    color: INK,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    boxShadow: `0 14px 44px ${LIME}44`
  }
}, "Post your first task ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "https://calendly.com/kyle-igniteproductions/30min?back=1",
  target: "_blank",
  rel: "noopener",
  style: {
    padding: "22px 30px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.35)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 18,
    textDecoration: "none"
  }
}, "Book a 30-min demo")))));
const SparkRetailPage = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Retail"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SPARK"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement(Tasks, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
document.title = "Spark Retail Execution | Crowdsourced In-Store Intelligence — Ignite";
Object.assign(window, {
  PageSparkRetail: SparkRetailPage
});
})();
