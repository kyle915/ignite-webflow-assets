(function(){if (typeof window !== "undefined" && window.PageBrandAmbassadorAgency) return;
/* Auto-extracted from the design project's pages/brand-ambassador-agency.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-brand-ambassador-agency")) return;
  var s = document.createElement("style");
  s.id = "pagecss-brand-ambassador-agency";
  s.textContent = ":root { --ba-ink:#0A0B0D; --ba-orange:#D7453E; --ba-amber:#FFB627; }\n  body { background:#0A0B0D; }\n  @keyframes ba-rise { 0%{opacity:0;transform:translateY(26px)} 100%{opacity:1;transform:translateY(0)} }\n  @keyframes ba-pulse { 0%,100%{opacity:1} 50%{opacity:.3} }\n  @keyframes ba-blob-a { 0%,100%{transform:translate(-4%,-3%) scale(1)} 50%{transform:translate(8%,5%) scale(1.18)} }\n  @keyframes ba-scan { 0%{transform:translateY(-100vh)} 100%{transform:translateY(100vh)} }\n  @keyframes ba-marq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }\n  @keyframes ba-ping { 0%{transform:scale(.6);opacity:.9} 100%{transform:scale(2.8);opacity:0} }\n  @keyframes ba-rowin { 0%{opacity:0;transform:translateX(16px)} 100%{opacity:1;transform:translateX(0)} }\n  @keyframes ba-fill { 0%{width:0} 100%{width:var(--w)} }\n  @keyframes ba-spark-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }\n  .ba-rise{animation:ba-rise 800ms cubic-bezier(.16,.84,.3,1) both}\n  .ba-marq-track{display:inline-flex;gap:40px;padding-right:40px;white-space:nowrap;animation:ba-marq 30s linear infinite}\n  .ba-reveal{opacity:0;transform:translateY(26px);transition:opacity 760ms cubic-bezier(.16,.84,.3,1),transform 760ms cubic-bezier(.16,.84,.3,1)}\n  .ba-reveal.in{opacity:1;transform:none}\n  @media (prefers-reduced-motion: reduce){[class*=\"ba-\"]{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}\n  @media (max-width:920px){ .ba-hero-grid{grid-template-columns:1fr!important} .ba-2col{grid-template-columns:1fr!important} .ba-vs{grid-template-columns:1fr!important} }";
  document.head.appendChild(s);
})();
const INK = "#0A0B0D",
  ORANGE = "#D7453E",
  AMBER = "#FFB627",
  PAPER = "#F5F2EC";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".ba-reveal");
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
    color: color || ORANGE,
    ...style
  }
}, children);

/* ---------- ID-badge avatar ---------- */
const Badge = ({
  initials,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 42,
    height: 42,
    borderRadius: 10,
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    background: `linear-gradient(135deg, ${color}, ${color}99)`,
    color: "#0b0905",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: "-0.02em"
  }
}, initials);

/* ---------- HERO with live roster ---------- */
const ROSTER = [{
  in: "JM",
  name: "James M.",
  role: "Sampling Captain",
  mkt: "Austin, TX",
  tags: ["TIPS", "Bilingual"],
  c: ORANGE
}, {
  in: "AR",
  name: "Ana R.",
  role: "Demo Specialist",
  mkt: "Phoenix, AZ",
  tags: ["Food Handler", "ES/EN"],
  c: AMBER
}, {
  in: "DT",
  name: "Devon T.",
  role: "Street Team Lead",
  mkt: "Chicago, IL",
  tags: ["Guerrilla", "Drives"],
  c: ORANGE
}, {
  in: "KS",
  name: "Kiara S.",
  role: "Trade Show Host",
  mkt: "Las Vegas, NV",
  tags: ["Lead Capture"],
  c: AMBER
}, {
  in: "MB",
  name: "Marcus B.",
  role: "Festival Ambassador",
  mkt: "Atlanta, GA",
  tags: ["Tour-ready"],
  c: ORANGE
}, {
  in: "LP",
  name: "Lena P.",
  role: "Retail Demo",
  mkt: "Seattle, WA",
  tags: ["RBS", "Merch"],
  c: AMBER
}];
const Hero = () => {
  const [feed, setFeed] = React.useState(3);
  React.useEffect(() => {
    const id = setInterval(() => setFeed(f => f >= ROSTER.length ? 3 : f + 1), 1500);
    return () => clearInterval(id);
  }, []);
  const metros = [["SEA", 9, 16], ["SF", 5, 44], ["LA", 12, 57], ["PHX", 22, 60], ["DEN", 34, 45], ["DFW", 46, 67], ["CHI", 60, 35], ["ATL", 70, 60], ["MIA", 82, 87], ["DC", 84, 41], ["NYC", 87, 31], ["BOS", 90, 25]];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 BA Agency Hero",
    style: {
      position: "relative",
      overflow: "hidden",
      background: INK,
      color: "#fff",
      padding: "90px 0 84px",
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: "-12%",
      top: "-18%",
      width: "52%",
      height: "76%",
      background: `radial-gradient(ellipse at center, ${ORANGE}26, transparent 62%)`,
      filter: "blur(58px)",
      animation: "ba-blob-a 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${ORANGE}66, transparent)`,
      animation: "ba-scan 8s linear infinite",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-rise",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingBottom: 18,
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      marginBottom: 50,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
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
      background: ORANGE,
      boxShadow: `0 0 10px ${ORANGE}`,
      animation: "ba-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "257,000+ vetted brand ambassadors"))), /*#__PURE__*/React.createElement("div", {
    className: "ba-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.18fr 1fr",
      gap: 52,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ba-rise",
    style: {
      margin: "0 0 18px",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: 12.5,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: ORANGE
    }
  }, "Brand Ambassador Agency"), /*#__PURE__*/React.createElement("h2", {
    className: "ba-rise",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(48px,6.8vw,116px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.88,
      animationDelay: "120ms"
    }
  }, "The roster", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "that shows up.")), /*#__PURE__*/React.createElement("p", {
    className: "ba-rise",
    style: {
      marginTop: 26,
      fontSize: "clamp(18px,1.9vw,23px)",
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 560,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      animationDelay: "240ms"
    }
  }, "A veteran-owned brand ambassador agency with ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "257,000+ vetted ambassadors"), " in all 50 states: recruited, trained, briefed, and proven on shift with GPS + photo. One partner, every market."), /*#__PURE__*/React.createElement("div", {
    className: "ba-rise",
    style: {
      marginTop: 32,
      display: "flex",
      gap: 13,
      flexWrap: "wrap",
      animationDelay: "360ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.igniteproductions.co/contact",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      padding: "20px 30px",
      borderRadius: 999,
      background: ORANGE,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      textDecoration: "none",
      boxShadow: `0 12px 40px ${ORANGE}44`
    }
  }, "Book a 30-min call ", /*#__PURE__*/React.createElement("span", {
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
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    className: "ba-rise",
    style: {
      marginTop: 30,
      display: "flex",
      gap: 26,
      flexWrap: "wrap",
      animationDelay: "460ms"
    }
  }, [["257,000+", "vetted ambassadors"], ["50", "states + DC"], ["Veteran", "owned · CPG-built"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: ORANGE,
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.5)",
      marginTop: 3
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "ba-rise",
    style: {
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, rgba(215, 69, 62,0.10), rgba(255,182,39,0.05))",
      border: `1px solid ${ORANGE}33`,
      borderRadius: 20,
      padding: 6,
      boxShadow: `0 40px 100px rgba(0,0,0,0.5)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0C0F14",
      borderRadius: 15,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 14px",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["#FF5F57", "#FFBD2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.5)"
    }
  }, "ignite / roster / deploying"), /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minHeight: 300
    }
  }, ROSTER.slice(0, feed).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.in,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "center",
      padding: "9px 11px",
      borderRadius: 11,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      animation: i === feed - 1 ? "ba-rowin 400ms ease both" : "none"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    initials: r.in,
    color: r.c
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: "#fff"
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: r.c
    }
  }, "\u2713 VETTED")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.5)",
      marginTop: 2
    }
  }, r.role, " \xB7 ", r.mkt)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-end"
    }
  }, r.tags.slice(0, 1).map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.7)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: 999,
      padding: "2px 7px"
    }
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.4)",
    style: {
      fontSize: 9
    }
  }, "BRIEFED \xB7 BADGED \xB7 ON SHIFT"), /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "50-STATE BENCH"))))))));
};
const Ticker = () => {
  const items = ["RECRUITED", "BACKGROUND-CHECKED", "TRAINED", "BRAND-BRIEFED", "GPS CLOCK-IN", "PHOTO-VERIFIED", "SAME-DAY RECAP", "50-STATE COVERAGE"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: ORANGE,
      color: INK,
      padding: "15px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderBottom: `1px solid ${INK}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-marq-track"
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

/* ---------- AEO definitional block ---------- */
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
  className: "ba-reveal"
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// THE SHORT ANSWER"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(28px,3.6vw,50px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.08
  }
}, "What is a brand ambassador agency?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)"
  }
}, "A brand ambassador agency recruits, vets, trains, schedules, and manages the people who represent a brand in the field: at sampling programs, retail demos, festivals, trade shows, and activations. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "Ignite Productions"), " runs the full cycle, from staffing through real-time reporting, with ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: ORANGE
  }
}, "257,000+ vetted ambassadors across all 50 states"), ". We're veteran-owned and CPG-built, so the people repping your brand are briefed on the product and the conversion goal, not handed a script to read off their phone."))));

/* ---------- VETTING PIPELINE ---------- */
const Funnel = () => {
  const gates = [["01", "APPLY", "Open pipeline", "Applications from every market, filtered by location, experience and availability."], ["02", "SCREEN", "ID + background", "Identity, background and references checked before anyone moves forward."], ["03", "VET", "Interview + match", "Interviewed by our team and matched to the roles and brands they fit."], ["04", "TRAIN", "Brief + certs", "Brand brief, product training and TIPS, RBS or food-handler certs on file."], ["05", "DEPLOY", "Badged + verified", "Badged onto your program, GPS check-in every shift, reported in Spark."]];
  const [on, setOn] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(4);
      return;
    }
    const id = setInterval(() => setOn(v => (v + 1) % 5), 1500);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E13",
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// HOW THE BENCH IS BUILT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Not a sign-up. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "Five gates.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Marketplace apps hand you whoever taps \"accept.\" Every Ignite ambassador clears five gates before they wear your badge.")), /*#__PURE__*/React.createElement("div", {
    className: "ba-gates ba-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: on / 4 * 100 + "%",
      "--p": on / 4 * 100
    }
  })), gates.map(([n, k, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "ba-gate" + (i <= on ? " lit" : "") + (i === on ? " now" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-node"
  }, /*#__PURE__*/React.createElement("span", null, i < on ? "✓" : n)), /*#__PURE__*/React.createElement("div", {
    className: "ba-k"
  }, k), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))), /*#__PURE__*/React.createElement("style", null, `
          .ba-gates{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px}
          .ba-track{position:absolute;left:28px;right:calc(20% - 28px);top:27px;height:2px;background:rgba(255,255,255,.12)}
          .ba-track span{display:block;height:100%;background:linear-gradient(90deg,${ORANGE},#D6F35F);box-shadow:0 0 12px rgba(214,243,95,.5);transition:width .9s cubic-bezier(.16,.84,.3,1)}
          .ba-gate{position:relative}
          .ba-node{width:56px;height:56px;border-radius:56px;display:grid;place-items:center;background:#0C0E13;border:2px solid rgba(255,255,255,.18);font-family:var(--font-mono);font-weight:700;font-size:14px;color:rgba(255,255,255,.5);transition:all .4s;position:relative;z-index:1}
          .ba-gate.lit .ba-node{border-color:#D6F35F;color:#D6F35F}
          .ba-gate.now .ba-node{background:#D6F35F;color:#0A0B0D;box-shadow:0 0 0 6px rgba(214,243,95,.15),0 0 24px rgba(214,243,95,.5)}
          .ba-k{margin-top:18px;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.22em;color:rgba(255,255,255,.45);transition:color .4s}
          .ba-gate.lit .ba-k{color:#D6F35F}
          .ba-gate h3{margin-top:8px;font-family:var(--font-display);font-weight:700;font-size:20px;letter-spacing:-.01em}
          .ba-gate p{margin-top:8px;font-size:14.5px;line-height:1.55;color:rgba(255,255,255,.62)}
          @media (max-width:900px){.ba-gates{grid-template-columns:1fr;gap:26px;padding-left:76px}.ba-track{left:27px;right:auto;top:28px;bottom:28px;width:2px;height:auto}.ba-track span{width:100%!important;height:calc(var(--p,0)*1%)}.ba-node{position:absolute;left:-76px;top:0}.ba-k{margin-top:4px}}
        `)));
};

/* ---------- VS MARKETPLACE APPS ---------- */
const Versus = () => {
  const rows = [["Who shows up", "Whoever taps accept first", "Ambassadors cleared through five gates and matched to your brand"], ["Training", "None, or a PDF the night before", "Brand brief and product training before the first shift"], ["Certifications", "Self-reported", "TIPS, RBS and food-handler certs verified before a shift can be claimed"], ["On-site lead", "You manage the crew yourself", "A team lead runs the floor on larger programs"], ["Proof", "A timesheet, if you're lucky", "GPS check-in, geotagged photos and a Spark recap every shift"], ["No-shows", "Your problem", "Flagged before the shift, backfilled from the bench"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// AGENCY VS. GIG APP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "A managed bench, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "not a marketplace."))), /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal",
    style: {
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      overflow: "hidden",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: 640
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#12141A"
    }
  }, ["", "GIG APP / MARKETPLACE", "IGNITE"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: "left",
      padding: "16px 20px",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.2em",
      fontWeight: 500,
      color: i === 2 ? "#D6F35F" : "rgba(255,255,255,0.5)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([a, b, c]) => /*#__PURE__*/React.createElement("tr", {
    key: a,
    style: {
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    style: {
      textAlign: "left",
      padding: "18px 20px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      width: "22%"
    }
  }, a), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "18px 20px",
      fontSize: 15.5,
      color: "rgba(255,255,255,0.55)"
    }
  }, b), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "18px 20px",
      fontSize: 15.5,
      color: "#fff",
      background: "rgba(214,243,95,0.05)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#D6F35F",
      fontWeight: 700,
      marginRight: 8
    }
  }, "\u2713"), c))))))));
};

/* ---------- HOW IT WORKS ---------- */
const How = () => {
  const steps = [["01", "BRIEF", "Tell us the program", "Markets, dates, roles and the brand story. A real human replies with a plan and quote within 24 hours."], ["02", "CAST", "We match the crew", "Ambassadors cast from the local bench and matched to your audience, with bilingual crews on request."], ["03", "TRAIN", "They learn your brand", "Product training and talking points before the first shift, so the crew sounds like your own team."], ["04", "RUN + REPORT", "Every shift, verified", "GPS check-in, live counts and photos in Spark, with a recap within hours of the last shift."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E13",
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// HOW IT WORKS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "From brief to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "badged crew."))), /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal ba-how"
  }, steps.map(([n, k, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "28px 24px",
      borderRadius: 16,
      background: "#12141A",
      border: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 48,
      lineHeight: 1,
      color: "transparent",
      WebkitTextStroke: "1.5px rgba(214,243,95,.55)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.22em",
      color: "#D6F35F"
    }
  }, k), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 21
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 15,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.65)"
    }
  }, d)))), /*#__PURE__*/React.createElement("style", null, ".ba-how{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}@media (max-width:900px){.ba-how{grid-template-columns:1fr 1fr}}@media (max-width:560px){.ba-how{grid-template-columns:1fr}}")));
};

/* ---------- SPARK ---------- */
const Spark = () => {
  const [n, setN] = React.useState(3184);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + Math.floor(Math.random() * 2)), 1400);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(214,243,95,0.14), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.r_assets_spark_logo_full_png || "https://kyle915.github.io/ignite-webflow-assets/assets/spark-logo-full.png",
    alt: "Spark by Ignite",
    style: {
      height: 26,
      filter: "drop-shadow(0 0 18px rgba(214,243,95,0.4))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px",
      borderRadius: 999,
      background: "rgba(214,243,95,0.1)",
      border: "1px solid rgba(214,243,95,0.3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "#D6F35F",
      boxShadow: "0 0 10px #D6F35F",
      animation: "ba-spark-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "#D6F35F",
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, "LIVE \xB7 AMBASSADOR NETWORK"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,58px)",
      letterSpacing: "-0.035em",
      lineHeight: 1.0
    }
  }, "Every shift, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#D6F35F"
    }
  }, "verified.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "Spark is our proprietary field platform. GPS-verified clock-in, photo capture, and a same-day recap on every ambassador, every shift. It's the accountability layer most agencies just don't have."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      padding: "14px 22px",
      borderRadius: 999,
      background: "#D6F35F",
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      textDecoration: "none",
      boxShadow: "0 8px 28px rgba(214,243,95,0.28)"
    }
  }, "Explore Spark \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.igniteproductions.co/contact",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      padding: "14px 20px",
      borderRadius: 999,
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.25)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none"
    }
  }, "Get a staffing quote"))), /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal",
    style: {
      background: "linear-gradient(180deg,#14161B,#0F1115)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(214,243,95,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, ["#FF5F57", "#FFBD2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.4)"
    }
  }, "spark.ignite / ambassador-network")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 22px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "rgba(255,255,255,0.45)",
      textTransform: "uppercase"
    }
  }, "Shifts logged today"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#D6F35F",
      boxShadow: "0 0 8px #D6F35F",
      animation: "ba-spark-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "#D6F35F"
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: "#D6F35F",
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginBottom: 20
    }
  }, n.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["GPS", "clock-in / out"], ["Photo", "capture on site"], ["Same-day", "recap delivered"], ["Live", "market dashboard"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "16px 14px",
      background: "rgba(214,243,95,0.06)",
      border: "1px solid rgba(214,243,95,0.2)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "#D6F35F",
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.5)"
    }
  }, l)))))))));
};

/* ---------- FAQ (crawlable single Q/A, matches the page's FAQPage schema) ---------- */
const FAQ_QUESTION = "What is a brand ambassador agency?";
const FAQ_ANSWER = "A brand ambassador agency recruits, vets, trains, and deploys people who represent a brand at sampling, retail demos, festivals, and trade shows. Ignite Productions is a veteran-owned (VOSB) brand ambassador agency founded in 2018 in Sparks, Nevada. We staff 257,000+ vetted brand ambassadors in all 50 states. Contact staffing@igniteproductions.co or 775.406.0435.";
const Faq = () => /*#__PURE__*/React.createElement("section", {
  id: "faq",
  "aria-labelledby": "baa-faq-heading",
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
  className: "ba-reveal",
  style: {
    marginBottom: 34
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "// QUESTIONS BUYERS ASK"), /*#__PURE__*/React.createElement("h2", {
  id: "baa-faq-heading",
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(30px,4vw,56px)",
    letterSpacing: "-0.03em"
  }
}, "Straight answers.")), /*#__PURE__*/React.createElement("article", {
  className: "ba-reveal",
  style: {
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    padding: "22px 0"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    margin: 0
  }
}, FAQ_QUESTION), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 12,
    marginBottom: 0,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)",
    maxWidth: 700
  }
}, FAQ_ANSWER))));

/* ---------- CTA ---------- */
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: ORANGE,
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
  className: "ba-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// PUT THE ROSTER TO WORK"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Tell us the markets.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "We'll bring the team.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Book a 30-minute call. We'll scope coverage, timing, and budget, and have briefed ambassadors ready to deploy."), /*#__PURE__*/React.createElement("div", {
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
}, "Book a 30-min call \u2192"), /*#__PURE__*/React.createElement("a", {
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
}, "Event staffing")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/services/bilingual-brand-ambassadors",
  style: {
    color: INK
  }
}, "Bilingual BAs"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/brand-ambassador-management",
  style: {
    color: INK
  }
}, "BA Management"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/product-sampling",
  style: {
    color: INK
  }
}, "Product Sampling")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Brand Ambassador Agency"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#D7453E",
    label: "Brand Ambassador Agency",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Funnel, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageBrandAmbassadorAgency: Page
});
})();
