(function(){if (typeof window !== "undefined" && window.PageServicesRetailDemoPrograms) return;
/* Auto-extracted from the design project's pages/services-retail-demo-programs.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  AMBER = "#E8C24A",
  ORANGE = "#D7453E",
  GREEN = "#1F9D62";
const RDWrap = ({
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
const RDMono = ({
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
    const els = document.querySelectorAll(".rd-reveal");
    const revealAll = () => els.forEach(el => {
      el.classList.remove("rd-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("rd-in");
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12
      });
      const _vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > _vh * 0.85) {
          el.classList.add("rd-armed");
          el.style.transitionDelay = i % 4 * 80 + "ms";
          io.observe(el);
        }
      });
    } catch (e) {
      revealAll();
    }
    const t = setTimeout(revealAll, 1400);
    window.addEventListener("load", revealAll, {
      once: true
    });
    return () => {
      io && io.disconnect();
      clearTimeout(t);
    };
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

/* ============ SIGNATURE: live per-store scoreboard ============ */
const Scoreboard = () => {
  const SEED = [["WHOLE FOODS", "Brooklyn, NY", 142, "live"], ["COSTCO", "Denver, CO", 318, "live"], ["SPROUTS", "Austin, TX", 0, "oos"], ["TARGET", "Atlanta, GA", 95, "live"], ["WEGMANS", "Boston, MA", 128, "live"]];
  const [rows, setRows] = React.useState(SEED);
  const [total, setTotal] = React.useState(8412);
  React.useEffect(() => {
    const id = setInterval(() => {
      setRows(rs => rs.map(r => r[3] === "oos" ? r : [r[0], r[1], r[2] + Math.floor(Math.random() * 4), r[3]]));
      setTotal(t => t + Math.floor(Math.random() * 9) + 2);
    }, 1500);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#14161B,#0F1115)",
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
  }, "spark.ignite / demo-scoreboard \xB7 live")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 9.5
    }
  }, "Samples handed \xB7 today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: AMBER,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginTop: 4
    }
  }, total.toLocaleString())), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      background: "rgba(232,194,74,0.1)",
      border: `1px solid ${AMBER}44`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rd-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: AMBER,
      boxShadow: `0 0 8px ${AMBER}`,
      animation: "rd-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(RDMono, {
    color: AMBER,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, rows.map((r, i) => {
    const oos = r[3] === "oos";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 11,
        alignItems: "center",
        padding: "10px 13px",
        borderRadius: 9,
        background: oos ? "rgba(215, 69, 62,0.08)" : "rgba(255,255,255,0.03)",
        border: oos ? `1px solid ${ORANGE}44` : "1px solid rgba(255,255,255,0.06)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rd-dot",
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: oos ? ORANGE : GREEN,
        boxShadow: `0 0 7px ${oos ? ORANGE : GREEN}`,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 13,
        color: "#fff"
      }
    }, r[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9.5,
        color: "rgba(255,255,255,0.45)"
      }
    }, r[1])), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 16,
        color: oos ? ORANGE : "#fff",
        whiteSpace: "nowrap"
      }
    }, oos ? "△ OOS" : r[2].toLocaleString()));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 1,
      marginTop: 14,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, [["98%", "on-time"], ["100%", "photo'd"], ["1", "OOS flag"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "#0F1115",
      padding: "12px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "#fff"
    }
  }, v), /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 8
    }
  }, l))))));
};

/* ============ HERO ============ */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Retail Demo Hero",
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
    backgroundImage: "url(../assets/sampling-liquid-death-petsmart.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center 28%",
    filter: "brightness(0.42) saturate(1.05)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(115deg,rgba(10,11,13,0.96) 0%,rgba(10,11,13,0.8) 46%,rgba(10,11,13,0.5) 100%)"
  }
}), /*#__PURE__*/React.createElement(RDWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "rd-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "rd-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "rd-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(43px,5.4vw,88px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    margin: 0,
    textShadow: "0 6px 30px rgba(0,0,0,0.5)"
  }
}, "Demos that move units,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: AMBER
  }
}, "not just hands.")), /*#__PURE__*/React.createElement("p", {
  className: "rd-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "In-store sampling inside the chains where the shopper actually buys \u2014 ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "food-handler certified crews, per-store counts, live reporting."), " Recap on Monday, not three weeks later."), /*#__PURE__*/React.createElement("div", {
  className: "rd-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=retail-demo-programs",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "18px 30px",
    borderRadius: 999,
    background: AMBER,
    color: "#0b0905",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 16,
    textDecoration: "none",
    boxShadow: `0 12px 40px ${AMBER}44`
  }
}, "Plan your program ", /*#__PURE__*/React.createElement("span", {
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
  className: "rd-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.18)"
  }
}, [["50", "states staffed"], ["48hr", "rush window"], ["100%", "ServSafe covered"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
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
    color: AMBER,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(RDMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "rd-reveal"
}, /*#__PURE__*/React.createElement(Scoreboard, null)))));

/* ============ COUNTERS ============ */
const Counters = () => {
  const [run, setRun] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setRun(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const a = useCount(300, run, 1200),
    b = useCount(98, run, 1100);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: INK,
      color: "#fff",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RDWrap, {
    style: {
      padding: "52px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
      gap: 22,
      textAlign: "center"
    }
  }, [[a, "-store", "Largest single rollout"], [b, "%", "On-time demo start"], ["50", "+", "States staffed"], ["257", "K+", "Ambassador bench"]].map(([n, suf, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(32px,3.8vw,54px)",
      letterSpacing: "-0.03em",
      color: i % 2 ? "#fff" : AMBER
    }
  }, n, suf), /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 10
    }
  }, l))))));
};

/* ============ SCAN-BACK ROI LADDER ============ */
const ScanBack = () => {
  const steps = [["DEMO", "Sample + convert", "Crew runs the demo, logs count, captures conversion intent at the shelf.", "Per-store data"], ["SCAN", "Retailer scan lift", "Where the retailer allows, we tie demo windows to UPC scan velocity changes.", "+12–35% typical"], ["REORDER", "Retailer reorders", "Velocity moves → the retailer reorders → your trade team has a defensible story.", "Multi-week tail"], ["RECAP", "Quarterly proof", "Spark rolls demo activity, scan lift, and reorder data into one trade-ready dashboard.", "1 dashboard"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "rd-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(RDMono, {
    color: AMBER
  }, "// scan-back roi"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Tie the demo to the ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "reorder.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "Demos work when they connect to actual sell-through. We link every demo to the scan velocity rebuild and retailer reorder cycle your trade team defends the quarter with.")), /*#__PURE__*/React.createElement("div", {
    className: "rd-scan",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0,
      marginTop: 32,
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s[0],
    className: "rd-reveal",
    style: {
      padding: "26px 22px",
      background: i % 2 ? "#0F1114" : "#111316",
      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: `${AMBER}1f`,
      border: `1px solid ${AMBER}55`,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: AMBER,
      marginBottom: 16
    }
  }, i + 1), /*#__PURE__*/React.createElement(RDMono, {
    color: AMBER,
    style: {
      fontSize: 10
    }
  }, s[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18
    }
  }, s[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 14px",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.62)"
    }
  }, s[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16,
      color: i === 1 ? GREEN : "#fff"
    }
  }, s[3])))), /*#__PURE__*/React.createElement("p", {
    className: "rd-reveal",
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Scan-back data flow depends on retailer participation. We'll tell you up front which chains allow it.")));
};

/* ============ CHANNEL / BANNER GRID ============ */
const Channels = () => {
  const rows = [["Grocery & Natural", "WHOLE FOODS · SPROUTS · WEGMANS · EREWHON · KROGER", "Chain demo permits, allergen disclosure, store COIs", "Sample-and-talk, 4–6 hr, captain-led"], ["Mass & Club", "TARGET · WALMART · COSTCO · SAM'S CLUB", "Roadshow registration, multi-store rollout paperwork", "High-volume sampling, line management, multi-day"], ["Convenience & Gas", "WAWA · SHEETZ · 7-ELEVEN · AMPM · CIRCLE K", "Per-store demo agreements, ride-along route paperwork", "Quick-sample drops, ride-along routes"], ["Specialty", "GNC · VITAMIN SHOPPE · PET SUPPLIES PLUS · ULTA", "Category certs, ingredient training, brand standards", "Application-trained, product-specialist flow"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "rd-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(RDMono, {
    color: ORANGE
  }, "// channels we staff"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Every banner, its own playbook.")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "rd-reveal rd-chan",
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr 1fr",
      gap: 24,
      padding: "24px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(19px,2.1vw,26px)",
      letterSpacing: "-0.02em",
      color: i % 2 ? "#fff" : AMBER
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.6
    }
  }, r[1])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 9,
      color: ORANGE
    }
  }, "Paperwork"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "7px 0 0",
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.72)"
    }
  }, r[2])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 9,
      color: ORANGE
    }
  }, "Format"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "7px 0 0",
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.72)"
    }
  }, r[3]))))));
};

/* ============ DEMO-DAY RUN SHEET ============ */
const RunSheet = () => {
  const steps = [["BRIEF", "Pre-shift", "Product training, SKU details, and the conversion play loaded into Spark. Certs verified before anyone's staffed."], ["SET", "T-30 min", "Crew arrives early, sets the table, stages the cooler and brand kit. Photo of the setup uploaded."], ["DEMO", "On shift", "Sample-and-talk to plan. Counts logged live, conversions flagged, OOS reported the moment a shelf runs dry."], ["STRIKE", "Close", "Table struck in 10, final count confirmed, per-store recap pushed with photos + ambassador notes."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "rd-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(RDMono, {
    color: ORANGE
  }, "// demo-day run sheet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Brief to strike, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "every store."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14
    },
    className: "rd-scan"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s[0],
    className: "rd-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: `3px solid ${AMBER}`,
      borderRadius: 14,
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.16em",
      color: AMBER,
      marginBottom: 4
    }
  }, s[1]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-0.02em"
    }
  }, s[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.64)"
    }
  }, s[2]))))));
};

/* ============ SPARK ============ */
const Spark = () => {
  const [n, setN] = React.useState(214);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + (Math.random() < 0.5 ? 1 : 0)), 1500);
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
      background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(232,194,74,0.12), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement(RDWrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-spark-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-reveal"
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
      filter: "drop-shadow(0 0 18px rgba(232,194,74,0.4))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px",
      borderRadius: 999,
      background: "rgba(232,194,74,0.1)",
      border: "1px solid rgba(232,194,74,0.3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rd-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: AMBER,
      boxShadow: `0 0 10px ${AMBER}`,
      animation: "rd-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(RDMono, {
    color: AMBER,
    style: {
      fontSize: 10
    }
  }, "LIVE \xB7 DEMO OPS"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 1.0
    }
  }, "Counts to your desk, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "same day.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "Every demo runs through Spark \u2014 per-store unit counts logged live, GPS ambassador check-ins, photo evidence from the aisle, and UPC scan-back where the retailer allows. Brand, broker, and retailer see the same dashboard."), /*#__PURE__*/React.createElement("div", {
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
      background: AMBER,
      color: "#0b0905",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      textDecoration: "none",
      boxShadow: `0 8px 28px ${AMBER}44`
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
    className: "rd-reveal",
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
  }, "spark.ignite / demo-programs")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 10
    }
  }, "Demos live today"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rd-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: AMBER,
      boxShadow: `0 0 8px ${AMBER}`,
      animation: "rd-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(RDMono, {
    color: AMBER,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: AMBER,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginBottom: 18
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["Per-store", "counts live"], ["GPS", "check-in / out"], ["Photo", "from the aisle"], ["Scan-back", "where allowed"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "16px 14px",
      background: "rgba(232,194,74,0.06)",
      border: "1px solid rgba(232,194,74,0.2)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16,
      color: AMBER,
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement(RDMono, {
    style: {
      fontSize: 8.5
    }
  }, l)))))))));
};

/* ============ FAQ ============ */
const FAQ = () => {
  const items = [["Can you staff inside Whole Foods, Costco, and Target?", "Yes. We staff inside Whole Foods, Sprouts, Wegmans, Costco, Target, Sam's Club, Kroger, Publix, and most regional banners. We file the chain-specific demo permits, COIs, and paperwork on your behalf."], ["Are your demo staff food handler certified?", "Every ambassador staffed to a food, beverage, or sampling demo holds the certification their state requires — ServSafe, state food handler card, or equivalent. For allergen-sensitive SKUs we add cross-contact prevention protocols."], ["How fast can you launch a national retail demo program?", "Single market: 5–10 business days standard, 48 hours rush. Multi-banner rollouts: 2–4 weeks for full briefing, paperwork, and crew readiness across markets."], ["What reporting do we get from each demo?", "Per-store sample count, photos, ambassador notes, GPS check-in/out, and — where the retailer permits — UPC-level scan-back data, all live in Spark. Same-day, every day of the program."], ["Can you handle co-op or distributor-funded demos?", "Yes. We run co-op programs where the retailer or distributor funds part of the demo. We file the chain-specific paperwork, COIs, and demo permits, and report cleanly back to brand, retailer, and distributor."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RDWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rd-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(RDMono, {
    color: AMBER
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Retail demos, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rd-reveal",
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
      color: AMBER,
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
    background: INK,
    color: "#fff",
    padding: "80px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(RDWrap, null, /*#__PURE__*/React.createElement(RDMono, {
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
}, [["Product Sampling", "/services/product-sampling"], ["Shopper Marketing", "/services/shopper-marketing"], ["Retail Merchandising", "/services/retail-merchandising"], ["Distributor Demos", "/services/distributor-demo-programs"], ["CPG Beverage", "/industries/cpg-beverage"], ["CPG Food & Snack", "/industries/cpg-food-snack"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
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
    color: AMBER
  }
}, "\u2192"))))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: `linear-gradient(150deg,${AMBER},#D98A0E)`,
    color: "#0b0905",
    padding: "120px 0",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.12,
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.4) 1px,transparent 1px)",
    backgroundSize: "48px 48px"
  }
}), /*#__PURE__*/React.createElement(RDWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "rd-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Put a demo in every aisle."), /*#__PURE__*/React.createElement("p", {
  className: "rd-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(11,9,5,0.82)"
  }
}, "Tell us the chains, the SKUs, and the calendar. We'll staff it, certify it, run it, and report every store the same day."), /*#__PURE__*/React.createElement("div", {
  className: "rd-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=retail-demo-programs",
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
    color: "#0b0905",
    border: "1.5px solid rgba(11,9,5,0.4)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Explore Spark"))));
const App = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 Retail Demo Programs"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#E8C24A",
    label: "Retail Demo Programs",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Counters, null), /*#__PURE__*/React.createElement(ScanBack, null), /*#__PURE__*/React.createElement(Channels, null), /*#__PURE__*/React.createElement(RunSheet, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesRetailDemoPrograms: App
});
})();
