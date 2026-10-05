(function(){if (typeof window !== "undefined" && window.PageServicesTradeShows) return;
/* Auto-extracted from the design project's pages/services-trade-shows.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-trade-shows")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-trade-shows";
  s.textContent = ":root { --ts-ink:#0A0B0D; --ts-amber:#9FC24E; --ts-orange:#D7453E; --ts-cyan:#3DC9C0; }\n  body { background:#0A0B0D; }\n  @keyframes ts-rise{0%{opacity:0;transform:translateY(26px)}100%{opacity:1;transform:translateY(0)}}\n  @keyframes ts-pulse{0%,100%{opacity:1}50%{opacity:.3}}\n  @keyframes ts-blob{0%,100%{transform:translate(-4%,-3%) scale(1)}50%{transform:translate(8%,5%) scale(1.16)}}\n  @keyframes ts-scan{0%{transform:translateY(-100vh)}100%{transform:translateY(100vh)}}\n  @keyframes ts-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\n  @keyframes ts-rowin{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}\n  @keyframes ts-count{0%{opacity:.4}50%{opacity:1}100%{opacity:.4}}\n  @keyframes ts-sweep{0%{left:-40%}100%{left:120%}}\n  @keyframes ts-radar{0%{transform:scale(0.5);opacity:.9}100%{transform:scale(3.4);opacity:0}}\n  @keyframes ts-walk{0%{transform:translateY(0);opacity:0}8%{opacity:1}92%{opacity:1}100%{transform:translateY(2100%);opacity:0}}\n  .ts-rise{animation:ts-rise 800ms cubic-bezier(.16,.84,.3,1) both}\n  .ts-marq-track{display:inline-flex;gap:40px;padding-right:40px;white-space:nowrap;animation:ts-marq 30s linear infinite}\n  .ts-reveal{opacity:0;transform:translateY(26px);transition:opacity 760ms cubic-bezier(.16,.84,.3,1),transform 760ms cubic-bezier(.16,.84,.3,1)}\n  .ts-reveal.in{opacity:1;transform:none}\n  @media (prefers-reduced-motion:reduce){[class*=\"ts-\"]{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}\n  @media (max-width:920px){.ts-hero-grid{grid-template-columns:1fr!important}.ts-2col{grid-template-columns:1fr!important}.ts-vs{grid-template-columns:1fr!important}}\n  @media (max-width:720px){[data-screen-label=\"01 Trade Show Hero\"]{min-height:0!important}[data-screen-label=\"01 Trade Show Hero\"]>div[style*=\"flex-end\"]{justify-content:flex-start!important;padding-top:24px!important;padding-bottom:44px!important}}";
  document.head.appendChild(s);
})();
const INK = "#0A0B0D",
  AMBER = "#9FC24E",
  ORANGE = "#D7453E",
  CYAN = "#3DC9C0";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".ts-reveal");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const go = () => els.forEach(e => {
      if (!e.classList.contains("in") && e.getBoundingClientRect().top < window.innerHeight * 0.92) e.classList.add("in");
    });
    go();
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    }), {
      threshold: 0.1
    });
    els.forEach(e => {
      if (!e.classList.contains("in")) obs.observe(e);
    });
    window.addEventListener("scroll", go, {
      passive: true
    });
    const t = setTimeout(() => els.forEach(e => e.classList.add("in")), 2600);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", go);
      clearTimeout(t);
    };
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
    color: color || AMBER,
    ...style
  }
}, children);

/* ---------- HERO — live lead-capture board ---------- */
const LEADS = [{
  co: "Meridian Foods",
  title: "VP Category",
  tag: "HOT",
  c: ORANGE
}, {
  co: "Northwind Retail",
  title: "Buyer, Grocery",
  tag: "QUALIFIED",
  c: AMBER
}, {
  co: "Cedar & Co.",
  title: "Innovation Lead",
  tag: "DEMO'D",
  c: CYAN
}, {
  co: "Harbor Distributing",
  title: "Regional Mgr",
  tag: "HOT",
  c: ORANGE
}, {
  co: "Vista Brands",
  title: "Sr. Brand Mgr",
  tag: "QUALIFIED",
  c: AMBER
}, {
  co: "Peak Naturals",
  title: "Founder",
  tag: "BOOKED",
  c: CYAN
}];
const Hero = () => {
  const [scans, setScans] = React.useState(1284);
  React.useEffect(() => {
    const id = setInterval(() => setScans(v => v + Math.floor(Math.random() * 4)), 900);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Trade Show Hero",
    style: {
      position: "relative",
      background: "#0A0A0A",
      color: "#fff",
      minHeight: 420,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "sd-hero-img",
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/trade-show-pressreader-booth.jpg",
    alt: "Ignite booth staff working the PressReader trade show booth",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      filter: "brightness(0.5) saturate(1.05) contrast(1.05)"
    },
    loading: "eager",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(105deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.78) 46%, rgba(10,10,10,0.45) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "12%",
      background: `linear-gradient(180deg, transparent, ${AMBER}10, transparent)`,
      animation: "ts-scan 9s linear infinite",
      pointerEvents: "none",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1480,
      width: "100%",
      margin: "0 auto",
      padding: "67px 32px 56px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-rise",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 24,
      padding: "7px 13px",
      borderRadius: 999,
      background: "rgba(10,10,10,0.55)",
      backdropFilter: "blur(10px)",
      border: `1px solid ${AMBER}44`,
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: AMBER,
      boxShadow: `0 0 10px ${AMBER}`,
      animation: "ts-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER,
    style: {
      fontSize: 9
    }
  }, scans.toLocaleString(), " LEADS SCANNED \xB7 LIVE FLOOR")), /*#__PURE__*/React.createElement("h1", {
    className: "ts-rise",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(56px,7.6vw,124px)",
      lineHeight: 0.92,
      letterSpacing: "-0.045em",
      margin: 0,
      maxWidth: 1300,
      textWrap: "balance",
      animationDelay: "120ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      whiteSpace: "nowrap"
    }
  }, "Work the floor"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      whiteSpace: "nowrap",
      fontStyle: "italic",
      color: AMBER
    }
  }, "like you own it.")), /*#__PURE__*/React.createElement("div", {
    className: "ts-rise",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 64,
      alignItems: "end",
      marginTop: 40,
      animationDelay: "380ms"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(22px,2.4vw,32px)",
      lineHeight: 1.18,
      letterSpacing: "-0.02em",
      color: "rgba(255,255,255,0.92)",
      margin: 0,
      maxWidth: 720,
      textWrap: "pretty"
    }
  }, "Booth staffing, lead-capture teams, and demo specialists who qualify traffic instead of scanning badges, from pre-show training through same-day CRM handoff."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, [["Same-day", "CRM handoff"], ["257K+", "vetted staff"], ["50", "states + Canada"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "14px 14px",
      background: "rgba(10,10,10,0.55)",
      backdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: AMBER,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "ts-rise",
    style: {
      marginTop: 40,
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      alignItems: "center",
      animationDelay: "460ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.igniteproductions.co/contact",
    style: {
      padding: "16px 24px",
      borderRadius: 999,
      background: AMBER,
      color: "#0b0905",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15.5,
      letterSpacing: "-0.01em",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, "Staff my booth ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#floor",
    style: {
      padding: "16px 24px",
      borderRadius: 999,
      background: "transparent",
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,0.28)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15.5,
      letterSpacing: "-0.01em",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, "How we run a floor"))));
};
const Ticker = () => {
  const items = ["BOOTH STAFFING", "LEAD CAPTURE", "DEMO SPECIALISTS", "REGISTRATION", "BADGE SCANNING", "SHOW MANAGEMENT", "SAME-DAY CRM", "PRE-SHOW TRAINING"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: AMBER,
      color: INK,
      padding: "15px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderBottom: `1px solid ${INK}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-marq-track"
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      display: "inline-flex",
      alignItems: "center",
      gap: 40
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\u25C6")))));
};
const WhatIs = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    maxWidth: 900
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal"
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "// THE SHORT ANSWER"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(28px,3.6vw,50px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.08
  }
}, "What does trade show support cover?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)"
  }
}, "It's the people and the process that turn a rented 20x20 into a pipeline: ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "booth staffing, lead-capture teams, demo specialists, registration, and full show management"), ". ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: AMBER
  }
}, "Ignite"), " runs it end-to-end (pre-show training through same-day CRM handoff) from one vetted network across all 50 states and Canada. Veteran-owned, CPG-built, Spark-verified."))));

/* ---------- WHAT WE STAFF ---------- */
const ROLES = [["Booth Staff", "Trained hosts who greet, qualify, and route traffic: on-brand, on-message, all show.", AMBER], ["Lead-Capture Teams", "Badge-scan and app-based capture with qualifying questions, tagged hot to cold.", CYAN], ["Demo Specialists", "Product pros who run the demo that turns a walk-by into a booked follow-up.", ORANGE], ["Registration & Greeters", "Check-in, badge, and traffic-flow staff that keep the entrance moving.", AMBER], ["Field Captains", "On-site leads who run the booth schedule, breaks, and the end-of-day recap.", CYAN], ["Full Show Management", "Creative, booth design/fab, staffing, capture, and post-show CRM: one partner.", ORANGE]];
const Roles = () => /*#__PURE__*/React.createElement("section", {
  id: "floor",
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// WHAT WE PUT ON YOUR FLOOR"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Every role in the ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "booth."))), /*#__PURE__*/React.createElement("div", {
  className: "ts-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: 14
  }
}, ROLES.map(([t, d, c], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "ts-reveal",
  style: {
    position: "relative",
    overflow: "hidden",
    padding: "28px 26px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 14,
    transitionDelay: i * 50 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: `linear-gradient(90deg, ${c}, transparent 75%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 21,
    letterSpacing: "-0.02em"
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)"
  }
}, d))))));

/* ---------- SHOW TIMELINE ---------- */
const Timeline = () => {
  const steps = [["PRE-SHOW", "Brief + train", "Brand training, talking points, and qualifying script pushed to every phone via Spark."], ["MOVE-IN", "Booth ready", "Staff badged, booth set, lead-capture and CRM integration tested before doors open."], ["ON FLOOR", "Qualify + capture", "Traffic greeted, qualified, and tagged hot-to-cold; captains manage the schedule live."], ["SAME DAY", "CRM handoff", "Tagged leads synced to your CRM and a recap delivered before the show even closes."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ts-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// BADGE-IN TO CRM"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "The whole show, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "handled."))), /*#__PURE__*/React.createElement("div", {
    className: "ts-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 14
    }
  }, steps.map(([h, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "ts-reveal",
    style: {
      padding: "26px 24px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      transitionDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.12em",
      color: AMBER
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-0.02em"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 9,
      fontSize: 14,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)"
    }
  }, d))))));
};

/* ---------- VS ---------- */
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal",
  style: {
    maxWidth: 800,
    marginBottom: 46
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// A REAL BOOTH TEAM vs. TEMP HELP"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Pipeline, not a ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "badge pile."))), /*#__PURE__*/React.createElement("div", {
  className: "ts-vs",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal",
  style: {
    padding: "32px 28px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "TEMP BOOTH HELP"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Scans every badge, qualifies none", "No brand brief, no demo skill", "Leads exported two weeks later", "No captain, no coverage for breaks", "A different face at every show"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  style: {
    display: "flex",
    gap: 11,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "rgba(255,255,255,0.35)",
    fontFamily: "var(--font-mono)",
    marginTop: 1
  }
}, "\u2715"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.65)"
  }
}, x))))), /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal",
  style: {
    padding: "32px 28px",
    background: `linear-gradient(180deg, ${AMBER}14, rgba(255,255,255,0.02))`,
    border: `1px solid ${AMBER}55`,
    borderRadius: 16,
    transitionDelay: "80ms"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "IGNITE | MANAGED TRADE SHOW TEAM"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Qualifies traffic, tags hot to cold", "Brand-briefed with a demo that converts", "Leads synced to CRM same-day", "Captain-led with backup on the bench", "Consistent talent across your calendar"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  style: {
    display: "flex",
    gap: 11,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: AMBER,
    fontFamily: "var(--font-mono)",
    marginTop: 1
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    lineHeight: 1.5,
    color: "#fff"
  }
}, x))))))));

/* ---------- SPARK ---------- */
const Spark = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ts-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal"
}, /*#__PURE__*/React.createElement(Mono, {
  color: "#D6F35F"
}, "// LEADS IN, PROOF OUT"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(30px,4vw,58px)",
    letterSpacing: "-0.035em",
    lineHeight: 1.0
  }
}, "Every lead, ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#D6F35F"
  }
}, "accounted for.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 16.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.74)"
  }
}, "Spark is our proprietary field platform: live lead counts, staff GPS check-in, photo capture, and same-day CRM sync. You watch the booth perform in real time, and every qualified lead is in your pipeline before you land."), /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/",
  style: {
    marginTop: 24,
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#D6F35F",
    textDecoration: "none"
  }
}, "Explore Spark \u2192")), /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  }
}, [["Live", "lead counter"], ["Tagged", "hot to cold"], ["Same-day", "CRM sync"], ["Photo", "booth proof"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "24px 20px",
    background: "rgba(214,243,95,0.06)",
    border: "1px solid rgba(214,243,95,0.25)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    color: "#D6F35F",
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)"
  }
}, l)))))));
const FAQS = [["Do you staff individual trade shows or full annual programs?", "Both. Ignite Productions provides single-show booth staffing through full multi-show annual trade show staffing programs with consistent talent nationwide. Veteran-owned (VOSB), founded 2018 in Sparks, Nevada. Contact staffing@igniteproductions.co or 775.406.0435."], ["How are trade show leads captured and delivered to our CRM?", "Badge-scan, lead-capture apps, custom CRM integrations, and live Spark dashboards. Qualified leads land in your CRM the same day. Contact staffing@igniteproductions.co or 775.406.0435."], ["Can you staff large multi-booth trade shows for national brands?", "Yes. Ignite staffs large and multi-booth trade show programs with booth staff, demo specialists, lead-capture teams, and on-site leads drawn from 257,000+ vetted brand ambassadors across all 50 states. Veteran-owned (VOSB), founded 2018 in Sparks, Nevada. Contact staffing@igniteproductions.co or 775.406.0435."], ["Do you provide booth staffing nationwide for major conventions?", "Yes. Ignite deploys trade show booth staffing nationwide for major conventions and B2B shows, including markets such as Las Vegas, New York, Chicago, Orlando, San Francisco, and every market in between. Contact staffing@igniteproductions.co or 775.406.0435."], ["Can you run our entire trade show booth program end-to-end?", "Yes. Pre-show training, booth design and fabrication support, booth staffing, lead capture, demo execution, and post-show recap with CRM handoff. Contact staffing@igniteproductions.co or 775.406.0435."], ["How do you staff large trade show programs at scale?", "Ignite recruits, vets, and deploys from a nationwide roster of 257,000+ brand ambassadors, with pre-show product training and day-of brand standards so large floors stay consistent across multi-day shows. Veteran-owned (VOSB), founded 2018 in Sparks, Nevada. Contact staffing@igniteproductions.co or 775.406.0435."], ["What industries do you provide trade show staffing for?", "Tech and SaaS, CPG, automotive, hospitality, healthcare, beauty, telecom, fintech, and B2B/industrial, plus adjacent categories when the brief fits. Contact staffing@igniteproductions.co or 775.406.0435."], ["Do you staff international trade shows?", "US and Canada full coverage. International shows by partner network. Contact staffing@igniteproductions.co or 775.406.0435."]];
const Faq = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E13",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-reveal",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: AMBER
  }, "// QUESTIONS BUYERS ASK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.03em"
    }
  }, "Straight answers.")), /*#__PURE__*/React.createElement("div", {
    className: "ts-reveal"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      padding: "22px 0",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: AMBER,
      fontSize: 22,
      fontFamily: "var(--font-mono)",
      transform: open === i ? "rotate(45deg)" : "none",
      transition: "transform 300ms"
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.72)",
      maxWidth: 700
    }
  }, a))))));
};
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: AMBER,
    color: INK,
    padding: "130px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ts-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// GOT A SHOW ON THE CALENDAR?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Send us the show.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "We'll work it.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Show, dates, booth size, and the goal. We'll staff it, train the team, capture the leads, and hand them to your CRM before you fly home."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 38,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact",
  style: {
    padding: "20px 32px",
    borderRadius: 999,
    background: INK,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Staff my booth \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/services/event-staffing",
  style: {
    padding: "20px 28px",
    borderRadius: 999,
    background: "transparent",
    color: INK,
    border: `1.5px solid ${INK}`,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Event staffing \u2192")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/services/event-staffing",
  style: {
    color: INK
  }
}, "Event Staffing"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/fabrication-builds",
  style: {
    color: INK
  }
}, "Fabrication & Builds"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/product-sampling",
  style: {
    color: INK
  }
}, "Product Sampling")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Trade Show Support"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#9FC24E",
    label: "Trade Show Support",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Roles, null), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(AiProof, {
    accent: "#9FC24E",
    strip: true
  }), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesTradeShows: Page
});
})();
