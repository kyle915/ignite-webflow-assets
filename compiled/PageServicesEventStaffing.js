(function(){if (typeof window !== "undefined" && window.PageServicesEventStaffing) return;
/* Auto-extracted from the design project's pages/services-event-staffing.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-event-staffing")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-event-staffing";
  s.textContent = ":root { --es-ink:#0A0B0D; --es-amber:#D7453E; --es-orange:#D7453E; }\n  body { background:#0A0B0D; }\n  @keyframes es-rise{0%{opacity:0;transform:translateY(26px)}100%{opacity:1;transform:translateY(0)}}\n  @keyframes es-pulse{0%,100%{opacity:1}50%{opacity:.3}}\n  @keyframes es-blob{0%,100%{transform:translate(-4%,-3%) scale(1)}50%{transform:translate(8%,5%) scale(1.16)}}\n  @keyframes es-scan{0%{transform:translateY(-100vh)}100%{transform:translateY(100vh)}}\n  @keyframes es-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\n  @keyframes es-rowin{0%{opacity:0;transform:translateX(14px)}100%{opacity:1;transform:translateX(0)}}\n  @keyframes es-fill{0%{width:0}100%{width:var(--w)}}\n  @keyframes es-spark-pulse{0%,100%{opacity:1}50%{opacity:.35}}\n  .es-rise{animation:es-rise 800ms cubic-bezier(.16,.84,.3,1) both}\n  .es-marq-track{display:inline-flex;gap:40px;padding-right:40px;white-space:nowrap;animation:es-marq 30s linear infinite}\n  .es-reveal{opacity:0;transform:translateY(26px);transition:opacity 760ms cubic-bezier(.16,.84,.3,1),transform 760ms cubic-bezier(.16,.84,.3,1)}\n  .es-reveal.in{opacity:1;transform:none}\n  @media (prefers-reduced-motion:reduce){[class*=\"es-\"]{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}\n  @media (max-width:920px){.es-hero-grid{grid-template-columns:1fr!important}.es-2col{grid-template-columns:1fr!important}.es-vs{grid-template-columns:1fr!important}}";
  document.head.appendChild(s);
})();
const INK = "#0A0B0D",
  AMBER = "#D7453E",
  ORANGE = "#D7453E";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".es-reveal");
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

/* ---------- HERO — live shift board ---------- */
const SHIFTS = [{
  ev: "Festival activation",
  mkt: "Austin, TX",
  role: "6 BAs + 1 captain",
  st: "STAFFED",
  c: AMBER
}, {
  ev: "Retail sampling",
  mkt: "Phoenix, AZ",
  role: "4 demo specialists",
  st: "BRIEFED",
  c: "#5ED4A8"
}, {
  ev: "Trade show booth",
  mkt: "Las Vegas, NV",
  role: "3 hosts + lead",
  st: "ON SHIFT",
  c: ORANGE
}, {
  ev: "Street team drop",
  mkt: "Chicago, IL",
  role: "8 BAs, 2 routes",
  st: "STAFFED",
  c: AMBER
}, {
  ev: "Stadium fan zone",
  mkt: "Atlanta, GA",
  role: "12 ambassadors",
  st: "RUSH · 48HR",
  c: "#FF5F57"
}];
const Hero = () => {
  const [n, setN] = React.useState(11920);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + Math.floor(Math.random() * 3)), 1100);
    return () => clearInterval(id);
  }, []);
  const [rows, setRows] = React.useState(3);
  React.useEffect(() => {
    const id = setInterval(() => setRows(r => r >= SHIFTS.length ? 3 : r + 1), 1500);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Event Staffing Hero",
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
      background: `radial-gradient(ellipse at center, ${AMBER}26, transparent 62%)`,
      filter: "blur(58px)",
      animation: "es-blob 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${AMBER}66, transparent)`,
      animation: "es-scan 8s linear infinite",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "es-rise",
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
      background: AMBER,
      boxShadow: `0 0 10px ${AMBER}`,
      animation: "es-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER
  }, n.toLocaleString(), " SHIFTS STAFFED \xB7 YTD"))), /*#__PURE__*/React.createElement("div", {
    className: "es-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.18fr 1fr",
      gap: 52,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "es-rise",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(48px,6.6vw,112px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.88,
      animationDelay: "120ms"
    }
  }, "Staffed in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "48 hours."), /*#__PURE__*/React.createElement("br", null), "Briefed before they arrive."), /*#__PURE__*/React.createElement("p", {
    className: "es-rise",
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
  }, "A national event staffing agency with ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "257,000+ vetted ambassadors"), " \u2014 captains, demo specialists, street teams, bilingual staff \u2014 across all 50 states. Rush-ready, brand-briefed, GPS-verified on every shift."), /*#__PURE__*/React.createElement("div", {
    className: "es-rise",
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
      background: AMBER,
      color: "#0b0905",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      textDecoration: "none",
      boxShadow: `0 12px 40px ${AMBER}44`
    }
  }, "Request staff now ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#crew",
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
  }, "See the crew")), /*#__PURE__*/React.createElement("div", {
    className: "es-rise",
    style: {
      marginTop: 30,
      display: "flex",
      gap: 26,
      flexWrap: "wrap",
      animationDelay: "460ms"
    }
  }, [["48hr", "rush turnaround"], ["257,000+", "vetted staff"], ["50", "states + DC"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: AMBER,
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
    className: "es-rise",
    style: {
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, rgba(215,69,62,0.10), rgba(215, 69, 62,0.05))",
      border: `1px solid ${AMBER}33`,
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
  }, "ignite / shift-board / today"), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER,
    style: {
      fontSize: 9
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minHeight: 286
    }
  }, SHIFTS.slice(0, rows).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.ev,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 10,
      alignItems: "center",
      padding: "11px 13px",
      borderRadius: 11,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      animation: i === rows - 1 ? "es-rowin 400ms ease both" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, s.ev), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.5)",
      marginTop: 2
    }
  }, s.mkt, " \xB7 ", s.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.08em",
      color: s.c,
      border: `1px solid ${s.c}55`,
      borderRadius: 999,
      padding: "3px 9px",
      whiteSpace: "nowrap"
    }
  }, s.st)))), /*#__PURE__*/React.createElement("div", {
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
  }, "CAPTAIN-LED \xB7 GPS-VERIFIED"), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER,
    style: {
      fontSize: 9
    }
  }, "50-STATE BENCH"))))))));
};
const Ticker = () => {
  const items = ["BRAND AMBASSADORS", "DEMO SPECIALISTS", "STREET TEAMS", "TRADE-SHOW HOSTS", "BILINGUAL STAFF", "FIELD CAPTAINS", "TIPS-CERTIFIED", "48-HOUR RUSH"];
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
    className: "es-marq-track"
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
  className: "es-reveal"
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
}, "What is an event staffing agency?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)"
  }
}, "An event staffing agency recruits, vets, trains, schedules, and manages the people who work brand events \u2014 ambassadors, demo specialists, street teams, trade-show hosts, and field captains. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "Ignite"), " staffs all of them from one vetted network of ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: AMBER
  }
}, "257,000+ people across all 50 states"), ", with ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "48-hour rush turnaround"), " and GPS-verified proof on every shift. Veteran-owned and CPG-built."))));

/* ---------- THE CREW ---------- */
const CREW = [["Brand Ambassadors", "Face of the brand — sampling, engagement, conversion. Trained on your product and the ask.", AMBER], ["Demo Specialists", "In-store and retail demo pros who drive trial and move units at the shelf.", "#5ED4A8"], ["Street Teams", "High-energy guerrilla crews for hand-to-hand sampling and density-driven reach.", ORANGE], ["Trade-Show Hosts", "Booth staff trained on lead capture, demos, and qualifying foot traffic.", AMBER], ["Field Captains", "On-site leads who run the shift, manage the team, and own the recap.", "#5ED4A8"], ["Bilingual Staff", "Spanish-language and multicultural ambassadors, requestable per market.", ORANGE]];
const Crew = () => /*#__PURE__*/React.createElement("section", {
  id: "crew",
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "es-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// THE CALL SHEET"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Every role on the ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "floor."))), /*#__PURE__*/React.createElement("div", {
  className: "es-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: 14
  }
}, CREW.map(([t, d, c], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "es-reveal",
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

/* ---------- 48HR TIMELINE ---------- */
const Rush = () => {
  const steps = [["0:00", "Brief", "You send the markets, dates, headcount, and the goal."], ["2:00", "Matched", "We pull role-matched, certified staff from the 50-state bench."], ["12:00", "Briefed", "Brand training + talking points pushed to every phone via Spark."], ["48:00", "On shift", "Badged, GPS clocked-in, photos uploading live."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "es-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// THE 48-HOUR CLOCK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Brief to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "boots-down."))), /*#__PURE__*/React.createElement("div", {
    className: "es-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 14
    }
  }, steps.map(([h, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "es-reveal",
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
      fontSize: 13,
      fontWeight: 700,
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

/* ---------- VS gig apps ---------- */
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "es-reveal",
  style: {
    maxWidth: 800,
    marginBottom: 46
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// MANAGED CREW vs. GIG APP"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Covered, not ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "crossed-fingers."))), /*#__PURE__*/React.createElement("div", {
  className: "es-vs",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "es-reveal",
  style: {
    padding: "32px 28px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "A GIG-STAFFING APP"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Whoever taps accept gets the shift", "No brand brief, no training", "No backup when someone no-shows", "\"It went fine\" with no proof", "A new vendor in every market"].map(x => /*#__PURE__*/React.createElement("div", {
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
  className: "es-reveal",
  style: {
    padding: "32px 28px",
    background: `linear-gradient(180deg, ${AMBER}14, rgba(255,255,255,0.02))`,
    border: `1px solid ${AMBER}55`,
    borderRadius: 16,
    transitionDelay: "80ms"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "IGNITE \u2014 MANAGED STAFFING"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Role-matched, vetted, certified staff", "Brand-briefed before they arrive", "A deep bench that covers call-outs", "GPS + photo-verified, same-day recap", "One partner across all 50 states"].map(x => /*#__PURE__*/React.createElement("div", {
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
    className: "es-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "es-reveal"
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
      animation: "es-spark-pulse 1.6s infinite"
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
  }, "LIVE \xB7 EVENT STAFFING"))), /*#__PURE__*/React.createElement("h2", {
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
  }, "Spark is our proprietary field platform: GPS clock-in/out, photo capture, time-stamped sample counts, and a live shift dashboard. You see each shift as it happens \u2014 never a \"were they actually there?\" question mark."), /*#__PURE__*/React.createElement("div", {
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
    className: "es-reveal",
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
  }, "spark.ignite / event-staffing")), /*#__PURE__*/React.createElement("div", {
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
      animation: "es-spark-pulse 1.6s infinite"
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
  }, [["GPS", "clock-in / out"], ["Photo", "capture on site"], ["Live", "shift dashboard"], ["Same-day", "recap delivered"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
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
const FAQS = [["How large is your ambassador roster?", "257,000+ vetted brand ambassadors across all 50 states, with depth in every major and secondary market."], ["How fast is rush staffing?", "48-hour turnaround for most markets. A short scoping call confirms coverage and timing."], ["Are ambassadors trained on our brand?", "Yes — pre-shift brand training, talking points, product handling, and compliance certs (TIPS, food handler), delivered to every phone via Spark."], ["How are shifts verified?", "GPS check-in/out, photo verification, time-stamped sample counts, and a live shift dashboard."], ["Do you have bilingual staff?", "Yes — Spanish-language and multicultural ambassadors, vetted at hire and requestable per shift."]];
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
    className: "es-reveal",
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
    className: "es-reveal"
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
  className: "es-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// NEED STAFF FAST?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Tell us the shift.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "We'll fill it.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Markets, dates, headcount, the goal. We'll confirm coverage and have briefed, badged staff ready \u2014 often within 48 hours."), /*#__PURE__*/React.createElement("div", {
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
}, "Request staff now \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/brand-ambassador-agency",
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
}, "Brand ambassadors \u2192")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/services/product-sampling",
  style: {
    color: INK
  }
}, "Product Sampling"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/street-teams",
  style: {
    color: INK
  }
}, "Street Teams"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/trade-shows",
  style: {
    color: INK
  }
}, "Trade Shows")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Event Staffing"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#D7453E",
    label: "Event Staffing",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Crew, null), /*#__PURE__*/React.createElement(Rush, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(AiProof, {
    accent: "#FFB627"
  }), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), window.RelatedCases ? React.createElement(window.RelatedCases, {
    ctx: "service",
    slug: "event-staffing"
  }) : null, /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesEventStaffing: Page
});
})();
