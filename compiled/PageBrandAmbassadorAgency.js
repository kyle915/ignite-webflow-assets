(function(){if (typeof window !== "undefined" && window.PageBrandAmbassadorAgency) return;
/* Auto-extracted from the design project's pages/brand-ambassador-agency.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

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
  tags: ["Guerilla", "Drives"],
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
  const [n, setN] = React.useState(41980);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + Math.floor(Math.random() * 4)), 900);
    return () => clearInterval(id);
  }, []);
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
  }, n.toLocaleString(), " VETTED \xB7 ON CALL"))), /*#__PURE__*/React.createElement("div", {
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
  }, "257,000+ vetted ambassadors"), " in all 50 states \u2014 recruited, trained, briefed, and proven on shift with GPS + photo. One partner, every market."), /*#__PURE__*/React.createElement("div", {
    className: "ba-rise",
    style: {
      marginTop: 32,
      display: "flex",
      gap: 13,
      flexWrap: "wrap",
      animationDelay: "360ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact?intent=brand-ambassadors",
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
}, "A brand ambassador agency recruits, vets, trains, schedules, and manages the people who represent a brand in the field \u2014 at sampling programs, retail demos, festivals, trade shows, and activations. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "Ignite Productions"), " runs the full cycle, from staffing through real-time reporting, with ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: ORANGE
  }
}, "257,000+ vetted ambassadors across all 50 states"), ". We're veteran-owned and CPG-built, so the people repping your brand are briefed on the product and the conversion goal \u2014 not handed a script to read off their phone."))));

/* ---------- VETTING FUNNEL ---------- */
const Funnel = () => {
  const steps = [["Applications", "Open pipeline, every market", 7400, "rgba(255,255,255,0.55)"], ["Screened", "ID, background, references", 4600, "#4FB58A"], ["Vetted", "Interviewed + role-matched", 2500, "#4664C4"], ["Trained", "Brand brief + certs (TIPS/RBS/Food)", 1550, "#E68A4C"], ["Deployed", "Badged, on shift, GPS-verified", 890, "#fff"]];
  const max = steps[0][2];
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
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// HOW THE BENCH IS BUILT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.4vw,60px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Not a sign-up. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "A vetting funnel.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Marketplace apps hand you whoever taps \"accept.\" We filter the network down to the people who actually show up and represent \u2014 then brief and badge them for your brand.")), /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, steps.map(([t, d, v, c], i) => {
    const pct = Math.round(v / max * 100);
    const barW = Math.max(pct, 14); /* floor so every stage stays visibly rendered */
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "grid",
        gridTemplateColumns: "200px 1fr 90px",
        gap: 18,
        alignItems: "center"
      },
      className: "ba-3col"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 18,
        color: typeof c === "string" && c.startsWith("#") ? c : "#fff"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "rgba(255,255,255,0.45)",
        marginTop: 3,
        letterSpacing: "0.04em"
      }
    }, d)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 14,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 999,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        width: barW + "%",
        background: `linear-gradient(90deg, ${c}, ${c}99)`,
        borderRadius: 999,
        boxShadow: i < 4 ? `0 0 14px ${c}55` : "none"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 15,
        color: typeof c === "string" && c.startsWith("#") ? c : "#fff"
      }
    }, v.toLocaleString()));
  })), /*#__PURE__*/React.createElement("p", {
    className: "ba-reveal",
    style: {
      marginTop: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Illustrative funnel \u2014 only fully vetted, briefed ambassadors get badged onto your program.")));
};

/* ---------- VS marketplace ---------- */
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ba-reveal",
  style: {
    maxWidth: 800,
    marginBottom: 46
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// MANAGED BENCH vs. MARKETPLACE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Booked, not ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "gambled."))), /*#__PURE__*/React.createElement("div", {
  className: "ba-vs",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ba-reveal",
  style: {
    padding: "32px 28px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "A STAFFING MARKETPLACE"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Whoever taps accept gets the shift", "No training, no brand brief", "No-shows are your problem", "\"Trust me, it went fine\" reporting", "A different vendor in every market"].map(x => /*#__PURE__*/React.createElement("div", {
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
  className: "ba-reveal",
  style: {
    padding: "32px 28px",
    background: `linear-gradient(180deg, ${ORANGE}14, rgba(255,255,255,0.02))`,
    border: `1px solid ${ORANGE}55`,
    borderRadius: 16,
    transitionDelay: "80ms"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "IGNITE \u2014 MANAGED AGENCY"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Role-matched, vetted ambassadors", "Briefed + trained on your brand", "A bench deep enough to cover call-outs", "GPS + photo-verified, same-day recap", "One partner across all 50 states"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  style: {
    display: "flex",
    gap: 11,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: ORANGE,
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

/* ---------- HOW ---------- */
const How = () => {
  const steps = [["01", "Brief", "A 30-min call: brand, markets, dates, the conversion goal. We ballpark coverage and budget."], ["02", "Match", "We pull role-matched ambassadors from the 50-state bench — certs, language, experience to fit."], ["03", "Train", "Every ambassador is briefed on your product, the ask, and the rules of the room before they arrive."], ["04", "Deploy", "Badged and on shift, GPS clock-in, photos uploaded live to Spark."], ["05", "Report", "Same-day recap — who, where, counts, photos — not a deck three weeks later."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
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
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// FROM BRIEF TO RECAP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "How it runs.")), /*#__PURE__*/React.createElement("div", {
    className: "ba-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
      gap: 14
    }
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "ba-reveal",
    style: {
      padding: "26px 24px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      transitionDelay: i * 55 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 700,
      color: ORANGE
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 23,
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
  }, "Spark is our proprietary field platform. GPS-verified clock-in, photo capture, and a same-day recap on every ambassador, every shift \u2014 the accountability layer most agencies just don't have."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/spark",
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
    href: "/contact",
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
  }, "Book a demo"))), /*#__PURE__*/React.createElement("div", {
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

/* ---------- FAQ ---------- */
const FAQS = [["What does a brand ambassador agency do?", "It recruits, vets, trains, schedules, and manages the people who represent a brand in the field — sampling, demos, festivals, trade shows, activations. Ignite runs the full cycle through real-time reporting, in all 50 states."], ["How many brand ambassadors does Ignite have?", "A vetted network of 257,000+ across all 50 states, so programs scale from a single market to a national rollout."], ["How fast can you staff a program?", "For most markets, within days. A 30-minute scoping call gives us what we need to ballpark timing, coverage, and budget."], ["Do you train and brief the ambassadors?", "Yes. Every ambassador is briefed and trained on your brand, the activation goal, and the conversion ask — not handed a script."], ["How do I know the ambassadors actually showed up?", "Spark gives you GPS-verified clock-in, photo uploads, and real-time reporting — you see each shift as it happens, not weeks later."], ["Are you a nationwide brand ambassador agency?", "Yes. We staff all 50 states from one vetted national network, so you get one consistent partner instead of a different local vendor in every market."]];
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
    className: "ba-reveal",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// QUESTIONS BUYERS ASK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.03em"
    }
  }, "Straight answers.")), /*#__PURE__*/React.createElement("div", {
    className: "ba-reveal"
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
      color: ORANGE,
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
}, "Book a 30-minute call. We'll scope coverage, timing, and budget \u2014 and have briefed ambassadors ready to deploy."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 38,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=brand-ambassadors",
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
