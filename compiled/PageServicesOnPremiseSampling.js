(function(){if (typeof window !== "undefined" && window.PageServicesOnPremiseSampling) return;
/* Auto-extracted from the design project's pages/services-on-premise-sampling.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  ORANGE = "#E68A4C",
  GREEN = "#1F9D62";
const OPWrap = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 clamp(20px,4vw,56px)",
    ...style
  }
}, children);
const OPMono = ({
  children,
  color = "rgba(255,255,255,0.55)",
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color,
    ...style
  }
}, children);
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".op-reveal");
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("op-in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach((el, i) => {
      el.style.animationDelay = i % 4 * 90 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
};
const useCount = (target, run, dur = 1400) => {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    let raf, t0;
    const step = t => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / dur, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, dur]);
  return v;
};

/* ============ SIGNATURE: live cert board ============ */
const CertBoard = () => {
  const crew = [["MARCUS J.", "NY · Bartender", ["TIPS", "TABC"], "ok"], ["ANA L.", "CA · Brand specialist", ["RBS", "BRAND"], "ok"], ["DEVON R.", "TX · Bartender", ["TABC", "TIPS"], "ok"], ["SARAH K.", "IL · Bar-back", ["ServSafe"], "renew"], ["JORDAN P.", "NV · Captain", ["TIPS", "TABC", "RBS"], "ok"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#15130F,#0F0D0B)",
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,0.1)",
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.55)"
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
  }, "spark.ignite / pour-certs \xB7 pre-shift check")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    style: {
      fontSize: 9.5
    }
  }, "Cert board \xB7 doors in 3:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "op-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: GREEN,
      boxShadow: `0 0 8px ${GREEN}`,
      animation: "op-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(OPMono, {
    color: GREEN,
    style: {
      fontSize: 9
    }
  }, "VERIFYING"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, crew.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "11px 13px",
      borderRadius: 10,
      background: "rgba(255,255,255,0.03)",
      border: `1px solid ${c[3] === "renew" ? "rgba(230,138,76,0.3)" : "rgba(255,255,255,0.06)"}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: c[3] === "renew" ? `${ORANGE}22` : `${GREEN}22`,
      border: `1px solid ${c[3] === "renew" ? ORANGE : GREEN}66`,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: c[3] === "renew" ? ORANGE : GREEN,
      flexShrink: 0
    }
  }, c[3] === "renew" ? "△" : "✓"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13.5,
      color: "#fff"
    }
  }, c[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "rgba(255,255,255,0.42)"
    }
  }, c[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      justifyContent: "flex-end"
    }
  }, c[2].map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.06em",
      padding: "3px 7px",
      borderRadius: 5,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.75)"
    }
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, [["100%", "current", GREEN], ["1", "renew soon", ORANGE], ["0", "lapsed", "#fff"]].map(([v, l, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "#100E0B",
      padding: "12px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: c
    }
  }, v), /*#__PURE__*/React.createElement(OPMono, {
    style: {
      fontSize: 8
    }
  }, l))))));
};

/* ============ HERO ============ */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 On-Premise Hero",
  style: {
    position: "relative",
    color: "#fff",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(https://kyle915.github.io/ignite-webflow-assets/assets/on-premise-white-claw-bar.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(120deg,rgba(10,11,13,0.96) 0%,rgba(10,11,13,0.82) 42%,rgba(10,11,13,0.6) 100%)"
  }
}), /*#__PURE__*/React.createElement(OPWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "op-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "op-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "op-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(42px,5.4vw,86px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    margin: 0,
    textShadow: "0 6px 30px rgba(0,0,0,0.5)"
  }
}, "Pour the brand.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: ORANGE
  }
}, "By the book.")), /*#__PURE__*/React.createElement("p", {
  className: "op-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Bars, restaurants, and brand houses. Every pourer ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "TIPS / TABC / RBS certified"), ", every pour size documented, every refusal logged. Liquor liability carried, COIs filed, distributor paperwork handled."), /*#__PURE__*/React.createElement("div", {
  className: "op-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=on-premise-sampling",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "18px 30px",
    borderRadius: 999,
    background: ORANGE,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 16,
    textDecoration: "none",
    boxShadow: `0 12px 40px ${ORANGE}55`
  }
}, "Plan your pour ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(6px)",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.3)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none"
  }
}, "See our work")), /*#__PURE__*/React.createElement("div", {
  className: "op-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.18)"
  }
}, [["100%", "TIPS / TABC / RBS"], ["50", "states + ABC"], ["3-tier", "distributor-friendly"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "18px 26px 0 0",
    marginRight: 26,
    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.18)" : "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    color: ORANGE,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(OPMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "op-reveal"
}, /*#__PURE__*/React.createElement(CertBoard, null)))));

/* ============ PRE-EVENT RUN-OF-SHOW BOARD ============ */
const Timeline = () => {
  const cols = [["LOAD-IN", "T-5HR → T-4HR", ORANGE, [["Crew arrives, briefs the floor lead", "IGNITE"], ["Bar load-in: ice, glassware, garnish, tools staged", "IGNITE"], ["Brand bar build: stencils, signage, sample case", "IGNITE"], ["COI handed off to venue manager, copy filed", "IGNITE"]]], ["CERT & TRAIN", "T-3HR → T-2HR", "#FFB627", [["Pour-cert check: TIPS / TABC / RBS cards verified", "CAPTAIN"], ["Training pour: brand rep walks the flight + talking points", "BRAND"], ["Refusal SOP rehearsal: ID check, over-served, cap", "CAPTAIN"], ["Soft-shift dress + brand-apparel inspection", "CAPTAIN"]]], ["FINAL PREP", "T-1HR → T-15M", "#5ED4A8", [["Final ice top-up, glassware re-stock, garnish refresh", "IGNITE"], ["Comms check: Spark app online, captain channel up", "IGNITE"], ["Final walk-through with venue manager + brand PM", "JOINT"]]]];
  const owColor = {
    IGNITE: ORANGE,
    CAPTAIN: "#FFB627",
    BRAND: "#5ED4A8",
    JOINT: "rgba(255,255,255,0.6)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OPWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE
  }, "// before the doors open"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Doors at 6. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "Crew at 1.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 600
    }
  }, "The full run-of-show before the first guest walks in \u2014 bar built, glassware washed, certs verified, refusal SOP rehearsed.")), /*#__PURE__*/React.createElement("div", {
    className: "op-sop",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, cols.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: c[0],
    className: "op-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: `3px solid ${c[2]}`,
      borderRadius: 14,
      padding: "22px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: c[2],
    style: {
      fontSize: 11
    }
  }, c[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.4)"
    }
  }, c[1])), c[3].map((t, ti) => /*#__PURE__*/React.createElement("div", {
    key: ti,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      padding: "11px 0",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      background: `${c[2]}1c`,
      border: `1px solid ${c[2]}55`,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: c[2],
      flexShrink: 0,
      marginTop: 1
    }
  }, ti + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.82)"
    }
  }, t[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.1em",
      color: owColor[t[1]]
    }
  }, t[1]))))))), /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      marginTop: 16,
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "20px 24px",
      borderRadius: 14,
      background: `linear-gradient(90deg,${ORANGE}1a,transparent)`,
      border: `1px solid ${ORANGE}44`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 14px ${ORANGE}`,
      animation: "op-pulse 1.6s infinite",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 700,
      color: ORANGE,
      letterSpacing: "0.06em"
    }
  }, "T-0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(16px,2vw,22px)",
      color: "#fff"
    }
  }, "Doors open. First pour clock running."))));
};

/* ============ POURS THROUGH THE NIGHT ============ */
const PourNight = () => {
  const hours = [["6PM", 42], ["7PM", 88], ["8PM", 124], ["9PM", 168], ["10PM", 195], ["11PM", 142], ["12AM", 83]];
  const max = 195;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OPWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE
  }, "// spark on the bar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Pours, conversions, refusals \u2014 logged live."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 620
    }
  }, "Every pour is logged. Every refusal is logged. Conversion-to-account interest captured at the bar in real time.")), /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: "28px 26px 20px",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    style: {
      fontSize: 10
    }
  }, "Pours logged \xB7 by the hour"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "op-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 8px ${ORANGE}`,
      animation: "op-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "842 TOTAL"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${hours.length},1fr)`,
      gap: 14,
      alignItems: "end",
      height: 200
    }
  }, hours.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h[0],
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      color: h[1] === max ? ORANGE : "rgba(255,255,255,0.85)"
    }
  }, h[1]), /*#__PURE__*/React.createElement("div", {
    className: "op-bar",
    style: {
      width: "100%",
      maxWidth: 46,
      height: h[1] / max * 150 + "px",
      borderRadius: "6px 6px 0 0",
      background: h[1] === max ? `linear-gradient(180deg,${ORANGE},#C63B12)` : "linear-gradient(180deg,rgba(230,138,76,0.55),rgba(230,138,76,0.2))",
      border: "1px solid rgba(230,138,76,0.3)",
      animationDelay: i * 90 + "ms"
    }
  }), /*#__PURE__*/React.createElement(OPMono, {
    style: {
      fontSize: 9.5
    }
  }, h[0])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 10,
      overflow: "hidden"
    }
  }, [["94%", "pours logged", "Logged in Spark mobile, GPS + timestamp."], ["38%", "conversion intent", "Guests following the brand or claiming an offer."], ["12", "account leads", "On-premise reps + GMs flagged for distributor follow-up."]].map(([v, l, d]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "#0F1013",
      padding: "18px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      color: ORANGE,
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.55)",
      margin: "3px 0 7px"
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.55)"
    }
  }, d)))))));
};

/* ============ REFUSAL SOP ============ */
const RefusalSOP = () => {
  const branches = [["Guest can't show valid ID", ["Polite refusal, brand-tone language", "Captain pulled in for de-escalation", "No pour. No exceptions."], "ID-check failure"], ["Guest appears intoxicated", ["Bar lead refuses pour", "Captain offers water + a seat", "Venue security looped in if needed"], "Over-served refusal"], ["Pour cap reached for venue", ["Crew checks the program max per state law", "Refusal explained politely", "Brand swag handoff instead"], "Cap-reached refusal"], ["Under-21 attempt", ["Refusal scripted, no negotiation", "Captain alerted, venue staff notified", "Logged with timestamp + photo where allowed"], "Minor refusal — escalated"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OPWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE
  }, "// refusal-to-serve"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Refusal happens on script. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "Every time.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 600
    }
  }, "Our crews don't improvise. Every pour shift runs the same decision tree, captain-supervised, logged in Spark.")), /*#__PURE__*/React.createElement("div", {
    className: "op-sop",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 16
    }
  }, branches.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "op-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      padding: "24px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: `${ORANGE}22`,
      border: `1px solid ${ORANGE}55`,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: ORANGE,
      flexShrink: 0
    }
  }, "\u25B3"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.25
    }
  }, b[0])), b[1].map((s, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: "flex",
      gap: 10,
      padding: "7px 0",
      borderTop: j === 0 ? "1px solid rgba(255,255,255,0.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: ORANGE,
      flexShrink: 0
    }
  }, j + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.74)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: GREEN,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: GREEN
    }
  }), "Logged: ", b[2]))))));
};

/* ============ LIABILITY BAND ============ */
const Liability = () => {
  const cov = [["General Liability", "$2M / $5M", "Per-occurrence + aggregate. Standard for retail and on-premise."], ["Liquor Liability", "$2M / $5M", "Dedicated alcohol-program coverage. Per-occurrence + aggregate."], ["Host Liability", "$1M", "Brand house, trade tasting, and sponsored event hosting."], ["Workers' Comp", "PER STATE", "Statutory in every state we operate. Crew never on a 1099 dodge."], ["Auto Liability", "$1M", "Ride-along, route, and mobile-tour programs requiring vehicle ops."], ["Signed Waivers", "100%", "Every consumer-facing program backed by waivers + ID-check protocol."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OPWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE
  }, "// insured for the pour"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Most agencies hide coverage. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "We lead with it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 620
    }
  }, "Every program ships with named-additional-insured COIs to the brand, distributor, and venue \u2014 filed before crew lands.")), /*#__PURE__*/React.createElement("div", {
    className: "op-liab",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, cov.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c[0],
    className: "op-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0F1013)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: 12,
      padding: "22px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16
    }
  }, c[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      color: ORANGE
    }
  }, c[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)"
    }
  }, c[2])))), /*#__PURE__*/React.createElement("p", {
    className: "op-reveal",
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Limits scale to program \u2014 higher limits available on request.")));
};

/* ============ BRAND-HOUSE ROSTER ============ */
const Roster = () => {
  const roles = [["Bartender", 4, "Pour lead. Builds drinks, runs the bar conversation, handles ID checks.", ["TIPS", "TABC", "RBS"]], ["Bar-back", 3, "Keeps ice, glassware, and garnish flowing. Restocks the bar mid-shift.", ["ServSafe"]], ["Runner", 2, "Moves sample cases from staging to bar. Handles bottle exchange + recycling.", ["ServSafe"]], ["Brand specialist", 2, "Brand-trained presenter. Talking points, flight pace, comp questions.", ["TIPS", "BRAND"]], ["Captain", 1, "Floor lead. Schedules, coordinates the venue, escalates refusals, owns the recap.", ["TIPS", "TABC", "RBS", "BRAND"]]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OPWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE
  }, "// brand house roster"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Twelve people. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "Five roles.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 620
    }
  }, "A typical Friday-to-Sunday brand-house roster. Scales to 18\u201324 across the weekend for larger venues.")), /*#__PURE__*/React.createElement("div", {
    className: "op-roster",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 12
    }
  }, roles.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "op-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      padding: "22px 18px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 38,
      color: ORANGE,
      letterSpacing: "-0.03em",
      lineHeight: 1
    }
  }, "\xD7", r[1]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "10px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16
    }
  }, r[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 12px",
      fontSize: 12.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)"
    }
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, r[3].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8,
      letterSpacing: "0.06em",
      padding: "3px 6px",
      borderRadius: 5,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.7)"
    }
  }, c))))))));
};

/* ============ SPARK ============ */
const Spark = () => {
  const [n, setN] = React.useState(12480);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + (Math.random() < 0.4 ? 1 : 0)), 1700);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
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
      background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(230,138,76,0.12), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement(OPWrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-spark-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal"
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
      filter: "drop-shadow(0 0 18px rgba(230,138,76,0.4))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px",
      borderRadius: 999,
      background: "rgba(230,138,76,0.1)",
      border: "1px solid rgba(230,138,76,0.3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "op-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 10px ${ORANGE}`,
      animation: "op-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE,
    style: {
      fontSize: 10
    }
  }, "LIVE \xB7 CERT TRACKING"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 1.0
    }
  }, "Nothing comes back ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "to bite you.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "Documented pour sizes, ID-check completion, refusal incidents, cert expiry \u2014 all logged in Spark. The distributor and the brand see the same audit-ready dashboard."), /*#__PURE__*/React.createElement("div", {
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
      background: ORANGE,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      textDecoration: "none",
      boxShadow: `0 8px 28px ${ORANGE}44`
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
    className: "op-reveal",
    style: {
      background: "linear-gradient(180deg,#14161B,#0F1115)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.55)"
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
  }, "spark.ignite / on-premise")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(OPMono, {
    style: {
      fontSize: 10
    }
  }, "Active pour certs \xB7 network"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "op-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 8px ${ORANGE}`,
      animation: "op-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: ORANGE,
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
  }, [["Pour size", "documented"], ["ID-check", "completion rate"], ["Refusals", "incident log"], ["Certs", "expiry-tracked"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "16px 14px",
      background: "rgba(230,138,76,0.06)",
      border: "1px solid rgba(230,138,76,0.2)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16,
      color: ORANGE,
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement(OPMono, {
    style: {
      fontSize: 9
    }
  }, l)))))))));
};

/* ============ FAQ ============ */
const FAQ = () => {
  const items = [["Are all your pour staff TIPS / TABC / RBS certified?", "Yes. We don't staff a regulated pour with anyone who isn't currently certified for the jurisdiction. Cards on file, refreshed before expiry, available for distributor audit or regulator request."], ["Can you coordinate with our distributor for an in-bar demo?", "Yes. We've run programs through RNDC, Southern Glazer's, Breakthru Beverage, and most regional houses. We file the demo paperwork on your behalf and the distributor's."], ["Do you handle liquor liability and COIs?", "Yes. We carry general liability and liquor liability across every regulated program. Additional insureds are added per venue, distributor, and brand requirement before deployment."], ["Can you sample in dry counties or restricted jurisdictions?", "Where state and county law permits — yes. Where it doesn't, we tell you up front. We don't take chances with regulated programs."], ["Can you handle bars in NYC, Texas, and California simultaneously?", "Yes. Each state has different cert requirements — RBS in California, TABC in Texas, TIPS in New York. We staff certified ambassadors per state and track expiry through Spark."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OPWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "op-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(OPMono, {
    color: ORANGE
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "On-premise, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "op-reveal",
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      textAlign: "left",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "22px 0",
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      alignItems: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(17px,1.9vw,22px)",
      letterSpacing: "-0.01em"
    }
  }, it[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ORANGE,
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      flexShrink: 0,
      transform: open === i ? "rotate(45deg)" : "none",
      transition: "transform .25s"
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: 16,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.72)",
      maxWidth: 720
    }
  }, it[1])))));
};
const Related = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E12",
    color: "#fff",
    padding: "80px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(OPWrap, null, /*#__PURE__*/React.createElement(OPMono, {
  color: "rgba(255,255,255,0.5)",
  style: {
    display: "block",
    marginBottom: 20
  }
}, "// pairs with"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12
  }
}, [["Product Sampling", "/services/product-sampling"], ["Event Staffing", "/services/event-staffing"], ["Distributor Demo Programs", "/services/distributor-demo-programs"], ["Field Marketing", "/services/field-marketing"], ["Alcohol & Spirits", "/industries/alcohol-spirits"], ["Hospitality & Travel", "/industries/hospitality-travel"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: h,
  style: {
    padding: "12px 20px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.03)",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 14.5
  }
}, l, " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: ORANGE
  }
}, "\u2192"))))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: `linear-gradient(150deg,${ORANGE},#C63B12)`,
    color: "#fff",
    padding: "120px 0",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.14,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
    backgroundSize: "48px 48px"
  }
}), /*#__PURE__*/React.createElement(OPWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "op-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Pour it right."), /*#__PURE__*/React.createElement("p", {
  className: "op-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.9)"
  }
}, "Tell us the SKUs, the states, and the distributor. We'll bring certified pour teams, the COIs, and one platform that logs every pour."), /*#__PURE__*/React.createElement("div", {
  className: "op-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=on-premise-sampling",
  style: {
    padding: "18px 34px",
    borderRadius: 999,
    background: "#0A0B0D",
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Start planning"), /*#__PURE__*/React.createElement("a", {
  href: "/spark",
  style: {
    padding: "18px 30px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.55)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Explore Spark"))));
const App = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 On-Premise Sampling"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#E68A4C",
    label: "On-Premise Sampling",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(PourNight, null), /*#__PURE__*/React.createElement(RefusalSOP, null), /*#__PURE__*/React.createElement(Liability, null), /*#__PURE__*/React.createElement(Roster, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesOnPremiseSampling: App
});
})();
