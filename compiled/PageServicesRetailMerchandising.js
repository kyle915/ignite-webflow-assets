(function(){if (typeof window !== "undefined" && window.PageServicesRetailMerchandising) return;
/* Auto-extracted from the design project's pages/services-retail-merchandising.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  BLUE = "#E8C24A",
  ORANGE = "#D7453E",
  GREEN = "#1F9D62",
  AMBER = "#FFB627";
const RMWrap = ({
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
const RMMono = ({
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
    const els = document.querySelectorAll(".rm-reveal");
    const revealAll = () => els.forEach(el => {
      el.classList.remove("rm-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("rm-in");
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12
      });
      const _vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > _vh * 0.85) {
          el.classList.add("rm-armed");
          el.style.transitionDelay = i % 4 * 80 + "ms";
          io.observe(el);
        }
      });
    } catch (e) {
      revealAll();
    }
    // safety fallbacks: never leave content hidden if the observer doesn't fire
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

/* ============ SIGNATURE: live compliance board ============ */
const ComplianceBoard = () => {
  const SEED = [["WHOLE FOODS", "Brooklyn, NY", 100, "ok"], ["TARGET", "Atlanta, GA", 94, "warn"], ["SPROUTS", "Austin, TX", 78, "oos"], ["COSTCO", "Denver, CO", 100, "ok"], ["WEGMANS", "Boston, MA", 97, "ok"]];
  const [total, setTotal] = React.useState(642);
  React.useEffect(() => {
    const id = setInterval(() => setTotal(t => t + Math.floor(Math.random() * 3) + 1), 1600);
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
  }, "spark.ignite / planogram-audit \xB7 live")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RMMono, {
    style: {
      fontSize: 9.5
    }
  }, "Stores audited \xB7 today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: BLUE,
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
      border: `1px solid ${BLUE}44`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: BLUE,
      boxShadow: `0 0 8px ${BLUE}`,
      animation: "rm-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(RMMono, {
    color: BLUE,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, SEED.map((r, i) => {
    const c = r[3] === "ok" ? GREEN : r[3] === "warn" ? AMBER : ORANGE;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "11px 13px",
        borderRadius: 9,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rm-dot",
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: c,
        boxShadow: `0 0 7px ${c}`,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 12.5,
        color: "#fff"
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        color: "rgba(255,255,255,0.4)"
      }
    }, r[1])), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 14,
        color: c
      }
    }, r[3] === "oos" ? "OOS" : r[2] + "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rm-bar-in",
      style: {
        "--w": r[2] + "%",
        height: "100%",
        borderRadius: 999,
        background: c,
        boxShadow: `0 0 10px ${c}66`,
        animationDelay: i * 120 + "ms"
      }
    })));
  }))));
};

/* ============ HERO ============ */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Merchandising Hero",
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
    backgroundImage: "url(https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=2400&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center 45%",
    filter: "brightness(0.4) saturate(0.9)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(115deg,rgba(10,11,13,0.96) 0%,rgba(10,11,13,0.82) 46%,rgba(10,11,13,0.55) 100%)"
  }
}), /*#__PURE__*/React.createElement(RMWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "rm-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "rm-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "rm-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(42px,5.4vw,86px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    margin: 0,
    textShadow: "0 6px 30px rgba(0,0,0,0.5)"
  }
}, "What's on the shelf", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: BLUE
  }
}, "is what sells.")), /*#__PURE__*/React.createElement("p", {
  className: "rm-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Planogram audits, POS resets, end-cap builds, and OOS recovery \u2014 ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "per-store, photographed, scored against your reset deck."), " Your trade team sees the shelf without flying to the store."), /*#__PURE__*/React.createElement("div", {
  className: "rm-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=retail-merchandising",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "18px 30px",
    borderRadius: 999,
    background: BLUE,
    color: "#04121f",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 16,
    textDecoration: "none",
    boxShadow: `0 12px 40px ${BLUE}44`
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
  className: "rm-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.18)"
  }
}, [["50", "states staffed"], ["48hr", "rush window"], ["4,200+", "stores / quarter"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
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
    color: BLUE,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(RMMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "rm-reveal"
}, /*#__PURE__*/React.createElement(ComplianceBoard, null)))));

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
  const a = useCount(4212, run, 1500),
    b = useCount(96, run, 1100),
    c = useCount(312, run, 1300);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: INK,
      color: "#fff",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RMWrap, {
    style: {
      padding: "52px 0"
    }
  }, /*#__PURE__*/React.createElement(RMMono, {
    color: BLUE,
    style: {
      display: "block",
      textAlign: "center",
      marginBottom: 24,
      fontSize: 10
    }
  }, "// Q3 2026 \xB7 one dashboard, every store"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
      gap: 22,
      textAlign: "center"
    }
  }, [[a.toLocaleString(), "", "Stores audited"], [b, "%", "Planogram compliance"], [c, "", "OOS recovered"], ["+18", "%", "Post-reset lift"]].map(([n, suf, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(30px,3.6vw,52px)",
      letterSpacing: "-0.03em",
      color: i % 2 ? "#fff" : BLUE
    }
  }, n, suf), /*#__PURE__*/React.createElement(RMMono, {
    style: {
      fontSize: 10
    }
  }, l))))));
};

/* ============ OOS RECOVERY FLOW ============ */
const OOSFlow = () => {
  const steps = [["01 · DETECT", "Found", "Merchandiser walks the shelf. OOS flagged in Spark mobile with photo + barcode.", ORANGE], ["02 · ROUTE", "Flagged", "Flag routed to retailer ops, distributor, and brand within the hour.", AMBER], ["03 · RESTOCK", "Recovered", "Restock request executed. Merchandiser returns to verify the shelf state.", BLUE], ["04 · VERIFY", "Closed", "Photo evidence of the restocked shelf logged in Spark. Loop closed.", GREEN]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "rm-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(RMMono, {
    color: ORANGE
  }, "// out-of-stock recovery"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "OOS caught the day it happens, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: BLUE
    }
  }, "not the week after.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 600
    }
  }, "Most brands find out a SKU went out of stock when the scan data drops two weeks later. We flag it the moment the crew walks the aisle \u2014 and close the loop.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-flow",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14,
      position: "relative"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-reveal",
    style: {
      position: "relative",
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: `3px solid ${s[3]}`,
      borderRadius: 14,
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.14em",
      color: s[3],
      marginBottom: 12
    }
  }, s[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(20px,2.2vw,26px)",
      letterSpacing: "-0.02em"
    }
  }, s[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "9px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.64)"
    }
  }, s[2]), i < 3 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: -11,
      top: "50%",
      transform: "translateY(-50%)",
      color: BLUE,
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      fontWeight: 700,
      zIndex: 2,
      background: "#0C0E12",
      padding: "2px 0"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-reveal",
    style: {
      marginTop: 16,
      display: "flex",
      gap: 24,
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "rgba(255,255,255,0.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: GREEN
    }
  }, "72hr"), " median OOS\u2192restock"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: BLUE
    }
  }, "+18%"), " post-reset scan lift"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: AMBER
    }
  }, "100%"), " photo evidence"))));
};

/* ============ QUARTERLY ROLLUP ============ */
const Rollup = () => {
  const rows = [["Whole Foods · Northeast region audit", "NORTHEAST · 6 STATES", 412], ["Target · Q3 reset compliance sweep", "NATIONAL · 18 DMAs", 1820], ["Costco · Roadshow week 1–4 audits", "WEST · 6 STATES", 186], ["Sprouts · New-item launch verification", "TX + CO + AZ", 210], ["Kroger · End-cap install audit", "SOUTHEAST · 4 DMAs", 780], ["Wegmans · Quarterly planogram check", "NY + PA · 8 MARKETS", 94], ["Sam's Club · POS verification sweep", "NATIONAL · 12 DMAs", 320], ["GNC · Specialty SKU compliance", "NATIONAL · 30 DMAs", 390]];
  const max = 1820;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "rm-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(RMMono, {
    color: BLUE
  }, "// quarterly chain rollup"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Audit 4,200 stores. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: BLUE
    }
  }, "See it in one view.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "Single-store audits tell stories. Quarters tell strategy. Spark rolls every store visit into the view your trade and ops team defends next quarter's program with.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-reveal",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.4fr) 1fr 84px",
      gap: 18,
      alignItems: "center",
      padding: "16px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "rgba(255,255,255,0.42)",
      marginTop: 4
    }
  }, r[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: "rgba(255,255,255,0.07)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-bar-in",
    style: {
      "--w": Math.max(r[2] / max * 100, 6) + "%",
      height: "100%",
      borderRadius: 999,
      background: `linear-gradient(90deg,${BLUE},${BLUE}99)`,
      boxShadow: `0 0 12px ${BLUE}44`,
      animationDelay: i * 70 + "ms"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 15,
      color: BLUE
    }
  }, r[2].toLocaleString()))))));
};

/* ============ CHANNEL GRID ============ */
const Channels = () => {
  const rows = [["Grocery & Natural", "WHOLE FOODS · SPROUTS · WEGMANS · EREWHON · KROGER", "Per-store audits, photo verification, end-cap installs, scan-back tie-in"], ["Mass & Club", "TARGET · WALMART · COSTCO · SAM'S CLUB · BJ'S", "Reset window execution, high-volume facings audit, end-cap builds"], ["Convenience", "WAWA · SHEETZ · 7-ELEVEN · AMPM · CIRCLE K", "Route-based merch audits, POS reset, cooler facings verification"], ["Specialty", "GNC · VITAMIN SHOPPE · PET SUPPLIES PLUS · ULTA · SEPHORA", "Application-trained audits, planogram + display verification"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "rm-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(RMMono, {
    color: ORANGE
  }, "// channels we audit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Every banner, its own reset deck.")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "rm-reveal rm-chan",
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
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
      fontSize: "clamp(20px,2.2vw,28px)",
      letterSpacing: "-0.02em",
      color: i % 2 ? "#fff" : BLUE
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
  }, r[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.72)",
      alignSelf: "center"
    }
  }, r[2])))));
};

/* ============ SPARK ============ */
const Spark = () => {
  const [n, setN] = React.useState(96);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + (Math.random() < 0.4 ? 1 : 0)), 1600);
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
  }), /*#__PURE__*/React.createElement(RMWrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-spark-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-reveal"
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
    className: "rm-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: BLUE,
      boxShadow: `0 0 10px ${BLUE}`,
      animation: "rm-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(RMMono, {
    color: BLUE,
    style: {
      fontSize: 10
    }
  }, "LIVE \xB7 SHELF STATE"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 1.0
    }
  }, "The shelf state, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: BLUE
    }
  }, "without the flight.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "Every store visit runs through Spark \u2014 planogram compliance scored, before-and-after photos, OOS flagged same-day, end-cap install status verified. Brand, broker, and retail account manager see the same dashboard."), /*#__PURE__*/React.createElement("div", {
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
      background: BLUE,
      color: "#04121f",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      textDecoration: "none",
      boxShadow: `0 8px 28px ${BLUE}44`
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
    className: "rm-reveal",
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
  }, "spark.ignite / merchandising")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(RMMono, {
    style: {
      fontSize: 10
    }
  }, "Compliance \xB7 live avg"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: BLUE,
      boxShadow: `0 0 8px ${BLUE}`,
      animation: "rm-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(RMMono, {
    color: BLUE,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: BLUE,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginBottom: 18
    }
  }, n, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["Planogram", "scored live"], ["Before/after", "photo per visit"], ["OOS", "flagged same-day"], ["End-cap", "install verified"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
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
      color: BLUE,
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement(RMMono, {
    style: {
      fontSize: 8.5
    }
  }, l)))))))));
};

/* ============ FAQ ============ */
const FAQ = () => {
  const items = [["What kinds of merchandising do you handle?", "Planogram audits, POS resets, end-cap installs, new-item shelf placement, back-stock pulls, out-of-stock recovery, signage installation, scan-back demo coordination, and competitive intel where the program calls for it."], ["Can you audit hundreds of stores in a single week?", "Yes. Our 257,000+ ambassador bench covers all 50 states. We run multi-thousand-store audit windows routinely, all reported per-store through Spark with photo evidence and GPS verification."], ["What chains do you work with?", "Whole Foods, Costco, Sam's Club, Target, Walmart, Kroger, Publix, Wegmans, Sprouts, Erewhon, GNC, Vitamin Shoppe, Pet Supplies Plus, plus most regional grocery and specialty banners. We file the chain-specific paperwork and brand-standard compliance."], ["How do we see what actually happened in each store?", "Every store visit shows up in Spark — GPS check-in/check-out, photo gallery, ambassador notes, planogram compliance flag, OOS list. Brand, broker, and retail account team see the same dashboard."], ["Can merchandising be combined with demo programs?", "Yes. We run combined programs where merchandising walks the shelf the day before a demo arrives, so the shelf is reset, the POS is in place, and the BA isn't sampling next to an empty facing."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(RMWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(RMMono, {
    color: BLUE
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Merchandising, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-reveal",
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
      color: BLUE,
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
}, /*#__PURE__*/React.createElement(RMWrap, null, /*#__PURE__*/React.createElement(RMMono, {
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
}, [["Retail Demo Programs", "/services/retail-demo-programs"], ["Shopper Marketing", "/services/shopper-marketing"], ["Field Marketing", "/services/field-marketing"], ["Product Sampling", "/services/product-sampling"], ["CPG Beverage", "/industries/cpg-beverage"], ["CPG Food & Snack", "/industries/cpg-food-snack"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
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
    color: BLUE
  }
}, "\u2192"))))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: `linear-gradient(150deg,${BLUE},#2E7FC0)`,
    color: "#04121f",
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
}), /*#__PURE__*/React.createElement(RMWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "rm-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Make the shelf tell the truth."), /*#__PURE__*/React.createElement("p", {
  className: "rm-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(4,18,31,0.82)"
  }
}, "Give us the chains, the reset deck, and the calendar. We'll walk every store, score it, and put the photo evidence on your trade desk."), /*#__PURE__*/React.createElement("div", {
  className: "rm-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=retail-merchandising",
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
    color: "#04121f",
    border: "1.5px solid rgba(4,18,31,0.4)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Explore Spark"))));
const App = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 Retail Merchandising"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#E8C24A",
    label: "Retail Merchandising",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Counters, null), /*#__PURE__*/React.createElement(OOSFlow, null), /*#__PURE__*/React.createElement(Rollup, null), /*#__PURE__*/React.createElement(Channels, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesRetailMerchandising: App
});
})();
