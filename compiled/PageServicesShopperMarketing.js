(function(){if (typeof window !== "undefined" && window.PageServicesShopperMarketing) return;
/* Auto-extracted from the design project's pages/services-shopper-marketing.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  AMBER = "#E8C24A",
  ORANGE = "#D7453E";
const SMWrap = ({
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
const SMMono = ({
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
    const els = document.querySelectorAll(".sm-reveal");
    const revealAll = () => els.forEach(el => {
      el.classList.remove("sm-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("sm-in");
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.14
      });
      const _vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > _vh * 0.85) {
          el.classList.add("sm-armed");
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

/* ============ SIGNATURE: animated planogram shelf w/ live audit ============ */
const FACINGS = [
// per shelf: array of [colorHue, state]  state: ok | gap | flag
[["#D64545", "ok"], ["#D64545", "ok"], ["#E4A11B", "ok"], ["#E4A11B", "ok"], ["#2F6FED", "ok"], ["#2F6FED", "gap"], ["#1F9D62", "ok"]], [["#7A4DD6", "ok"], ["#7A4DD6", "ok"], ["#2F6FED", "ok"], ["#D64545", "ok"], ["#D64545", "ok"], ["#E4A11B", "ok"], ["#E4A11B", "ok"]], [["#1F9D62", "ok"], ["#1F9D62", "ok"], ["#1F9D62", "ok"], ["#E4A11B", "flag"], ["#7A4DD6", "ok"], ["#7A4DD6", "ok"], ["#D64545", "ok"]], [["#2F6FED", "ok"], ["#2F6FED", "ok"], ["#D64545", "ok"], ["#D64545", "ok"], ["#1F9D62", "ok"], ["#1F9D62", "ok"], ["#E4A11B", "ok"]]];
const ShelfAudit = () => {
  const [scanned, setScanned] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setScanned(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "linear-gradient(180deg,#15171C,#0F1013)",
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,0.1)",
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
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
  }, "spark.ignite / shelf-audit \xB7 whole foods \xB7 brooklyn")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "20px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: "sm-audit-line",
    style: {
      position: "absolute",
      left: 20,
      right: 20,
      height: 2,
      background: `linear-gradient(90deg,transparent,${AMBER},transparent)`,
      boxShadow: `0 0 14px ${AMBER}`,
      animation: "sm-audit 2.6s ease-in-out",
      top: "104%",
      opacity: scanned ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0C0D10",
      borderRadius: 10,
      padding: "10px 10px 4px",
      border: "1px solid rgba(255,255,255,0.06)"
    }
  }, FACINGS.map((shelf, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      position: "relative",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${shelf.length},1fr)`,
      gap: 5,
      alignItems: "end",
      height: 46
    }
  }, shelf.map((f, fi) => {
    const isGap = f[1] === "gap";
    return /*#__PURE__*/React.createElement("div", {
      key: fi,
      style: {
        position: "relative",
        height: isGap ? "46%" : "100%",
        borderRadius: "4px 4px 0 0",
        background: isGap ? "repeating-linear-gradient(45deg,#1a1c22,#1a1c22 4px,#141519 4px,#141519 8px)" : `linear-gradient(180deg,${f[0]},${f[0]}bb)`,
        border: isGap ? "1px dashed rgba(215, 69, 62,0.5)" : "1px solid rgba(255,255,255,0.12)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 3
      }
    }, scanned && !isGap && f[1] !== "flag" && /*#__PURE__*/React.createElement("span", {
      className: "sm-badge",
      style: {
        position: "absolute",
        top: -7,
        right: -4,
        width: 14,
        height: 14,
        borderRadius: 999,
        background: "#1F9D62",
        color: "#fff",
        fontSize: 9,
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        animation: "sm-pop .3s ease " + (si * 0.08 + fi * 0.03) + "s both"
      }
    }, "\u2713"), scanned && f[1] === "flag" && /*#__PURE__*/React.createElement("span", {
      className: "sm-badge",
      style: {
        position: "absolute",
        top: -7,
        right: -4,
        width: 14,
        height: 14,
        borderRadius: 999,
        background: ORANGE,
        color: "#fff",
        fontSize: 9,
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        animation: "sm-pop .3s ease .4s both",
        boxShadow: `0 0 10px ${ORANGE}`
      }
    }, "\u25B3"), scanned && isGap && /*#__PURE__*/React.createElement("span", {
      className: "sm-badge",
      style: {
        position: "absolute",
        top: -7,
        right: -4,
        width: 14,
        height: 14,
        borderRadius: 999,
        background: ORANGE,
        color: "#fff",
        fontSize: 9,
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        animation: "sm-pop .3s ease .5s both",
        boxShadow: `0 0 10px ${ORANGE}`
      }
    }, "!"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "linear-gradient(180deg,#2a2c33,#191a1f)",
      borderRadius: 2,
      marginTop: 2,
      boxShadow: "0 2px 6px rgba(0,0,0,0.5)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, [["96%", "facings compliant", "#1F9D62"], ["2", "gaps flagged", ORANGE], ["100%", "photo-logged", AMBER]].map(([v, l, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "#0F1013",
      padding: "16px 14px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: c,
      letterSpacing: "-0.02em"
    }
  }, scanned ? v : "—"), /*#__PURE__*/React.createElement(SMMono, {
    style: {
      fontSize: 9
    }
  }, l)))));
};

/* ================= HERO ================= */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Shopper Hero",
  style: {
    position: "relative",
    background: "linear-gradient(170deg,#12100B,#0A0B0D)",
    color: "#fff",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: "-8%",
    top: "-10%",
    width: "55%",
    height: "70%",
    background: `radial-gradient(ellipse,${AMBER}1c,transparent 62%)`,
    filter: "blur(60px)"
  }
}), /*#__PURE__*/React.createElement(SMWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sm-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "sm-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "sm-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(42px,5.4vw,86px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    margin: 0
  }
}, "Win the moment", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: AMBER
  }
}, "at the shelf.")), /*#__PURE__*/React.createElement("p", {
  className: "sm-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.8)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Media builds awareness. Shopper marketing ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "closes it at the shelf"), " \u2014 end-caps, POS, in-aisle demos, and scan-back, executed per store and photo-verified so trade spend has receipts."), /*#__PURE__*/React.createElement("div", {
  className: "sm-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=shopper-marketing",
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
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.25)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none"
  }
}, "See our work")), /*#__PURE__*/React.createElement("div", {
  className: "sm-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.14)"
  }
}, [["1,500+", "activations / yr"], ["100%", "photo-evidenced"], ["14", "chains covered"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "18px 26px 0 0",
    marginRight: 26,
    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.14)" : "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 26,
    color: AMBER,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(SMMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "sm-reveal"
}, /*#__PURE__*/React.createElement(ShelfAudit, null)))));

/* ================= COUNTERS ================= */
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
  const a = useCount(1500, run, 1300),
    b = useCount(96, run, 1100),
    c = useCount(50, run, 1000);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: INK,
      color: "#fff",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SMWrap, {
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
  }, [[a.toLocaleString(), "+", "Activations / year"], [b, "%", "Display compliance"], [c, "+", "States staffed"], ["257", "K+", "Ambassador bench"]].map(([n, suf, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(34px,4vw,56px)",
      letterSpacing: "-0.03em",
      color: i % 2 ? "#fff" : AMBER
    }
  }, n, suf), /*#__PURE__*/React.createElement(SMMono, {
    style: {
      fontSize: 10
    }
  }, l))))));
};

/* ================= SHOPPER JOURNEY FUNNEL ================= */
const Journey = () => {
  const steps = [["01", "AWARENESS", "Eye-catching", "End-cap, blade sign, or dump bin breaks the shopper's auto-pilot. The brand registers."], ["02", "TRIAL", "Hand on product", "In-aisle demo, sample, or QR scan moves the shopper from looking to engaging."], ["03", "CONVERSION", "Into the cart", "Lift card, shelf-talker, and scan-back promo seal the decision at the shelf."], ["04", "REORDER", "Velocity rebuild", "Trial converts to repeat. Velocity holds. The buyer reorders. Next reset protected."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "sm-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SMMono, {
    color: AMBER
  }, "// the shopper journey"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Awareness to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "reorder"), ", at the shelf.")), /*#__PURE__*/React.createElement("div", {
    className: "sm-funnel",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s[0],
    className: "sm-reveal",
    style: {
      position: "relative",
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
      letterSpacing: "0.18em",
      color: AMBER,
      marginBottom: 14
    }
  }, s[0], " \xB7 ", s[1]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(19px,2vw,25px)",
      letterSpacing: "-0.02em"
    }
  }, s[2]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.66)"
    }
  }, s[3]), i < 3 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: -11,
      top: "50%",
      transform: "translateY(-50%)",
      color: AMBER,
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      zIndex: 2
    }
  }, "\u2192"))))));
};

/* ================= POS MATERIAL WALL ================= */
const POSWall = () => {
  const mats = [["End-cap displays", "Free-standing or aisle-end branded units. Built to retailer planogram + safety specs.", "CUSTOM · STORE-COMPLIANT"], ["Shelf-talkers + price flags", "Inline shelf-edge signage for promos, new items, and scan-back callouts.", "RETAILER-LICENSED"], ["Blade signs + aisle violators", "Perpendicular signage that breaks the shopper's eye-line. High-impact, low-footprint.", "CHAIN-APPROVED"], ["Dump bins + secondary", "Floor placements for impulse moments. Engineered for high-volume churn.", "CORRUGATED · WOOD · METAL"], ["Cooler clings + decals", "Static cling + adhesive vinyl for cooler doors, cases, and storefront glass.", "REMOVABLE · NON-DAMAGING"], ["Lift cards + tear-pads", "Take-home cards with recipes, coupons, and scan-back QR codes.", "PAD OF 100 · BRAND-PRINTED"], ["Shelf wobblers", "Spring-mounted shelf-edge signage that moves to catch the eye. Promo windows.", "PLANOGRAM-RULE SAFE"], ["Air dancers + activations", "High-traffic attention drivers for lot + entrance events.", "CO-OPS + GRAND OPENINGS"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "sm-reveal",
    style: {
      maxWidth: 740,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SMMono, {
    color: ORANGE
  }, "// pos material library"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em",
      lineHeight: 1.0
    }
  }, "We design it, fab it, ship it, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "and install it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "In-house fabrication for every POS material in your shopper program \u2014 retailer-spec compliant, photographed per piece on install.")), /*#__PURE__*/React.createElement("div", {
    className: "sm-pos-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14
    }
  }, mats.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m[0],
    className: "sm-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0F1013)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: 12,
      padding: "22px 18px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: i % 2 ? AMBER : ORANGE,
      marginBottom: 12
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-0.01em"
    }
  }, m[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 14px",
      fontSize: 13,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)"
    }
  }, m[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.12em",
      color: "rgba(255,255,255,0.42)",
      textTransform: "uppercase"
    }
  }, m[2]))))));
};

/* ================= SCAN-BACK ROI LADDER ================= */
const ScanBack = () => {
  const steps = [["ACTIVATE", "Run the program", "End-cap built, POS installed, demo running, scan-back coordinated.", "Per-store data"], ["SHOPPER", "Hand on product", "Awareness → trial → conversion captured at the shelf with intent flags.", "Per-sample conversion"], ["SCAN LIFT", "Velocity rebuilds", "Where the retailer allows, scan velocity confirmed in the 4 weeks post-activation.", "+12–28% typical"], ["REORDER", "Buyer reorders", "Velocity holds → the buyer reorders the SKU → next reset window protected.", "Multi-week tail"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "sm-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SMMono, {
    color: AMBER
  }, "// scan-back roi"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Tie the activation to the reorder."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "Shopper programs work when they connect to actual reorder data. Every in-store program links to the scan velocity rebuild and buyer reorder cycle that follows.")), /*#__PURE__*/React.createElement("div", {
    className: "sm-scan",
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
    className: "sm-reveal",
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
  }, i + 1), /*#__PURE__*/React.createElement(SMMono, {
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
      color: i === 2 ? "#1F9D62" : "#fff"
    }
  }, s[3])))), /*#__PURE__*/React.createElement("p", {
    className: "sm-reveal",
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Scan velocity tie-back depends on retailer participation. We'll tell you up front which chains allow it.")));
};

/* ================= CHANNELS ================= */
const Channels = () => {
  const rows = [["Grocery & Natural", "WHOLE FOODS · SPROUTS · WEGMANS · EREWHON · KROGER", "End-cap activations, in-aisle demos, scan-back execution"], ["Mass & Club", "TARGET · WALMART · COSTCO · SAM'S CLUB · BJ'S", "Multi-week roadshows, end-cap installs, high-volume sampling"], ["Convenience", "WAWA · SHEETZ · 7-ELEVEN · CIRCLE K", "Quick-hit POS, cooler-cling activation, lift-card distribution"], ["Specialty", "GNC · VITAMIN SHOPPE · PET SUPPLIES PLUS · ULTA", "Application-trained sampling, structured trial, expert-led activation"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "sm-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SMMono, {
    color: ORANGE
  }, "// channels we activate"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Every place the shopper buys.")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "sm-reveal sm-chan",
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
      color: i % 2 ? "#fff" : AMBER
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.45)"
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

/* ================= SPARK ================= */
const Spark = () => {
  const [n, setN] = React.useState(184);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + (Math.random() < 0.5 ? 1 : 0)), 1500);
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
      background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(232,194,74,0.12), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement(SMWrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm-spark-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm-reveal"
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
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: AMBER,
      boxShadow: `0 0 10px ${AMBER}`,
      animation: "sm-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(SMMono, {
    color: AMBER,
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
  }, "Trade spend, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "with receipts.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "Every shopper program runs through Spark \u2014 per-store shelf-state audit, POS placement verified per piece, end-cap install confirmation, and a scan flag the day the crew walks. Brand, broker, and retailer see the same data."), /*#__PURE__*/React.createElement("div", {
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
    className: "sm-reveal",
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
  }, "spark.ignite / shopper-programs")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 22px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SMMono, {
    style: {
      fontSize: 10
    }
  }, "Activations live today"), /*#__PURE__*/React.createElement("span", {
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
      background: AMBER,
      boxShadow: `0 0 8px ${AMBER}`,
      animation: "sm-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(SMMono, {
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
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, [["WHOLE FOODS · BROOKLYN", "END-CAP LIVE", "ok"], ["TARGET · ATLANTA", "DEMO · 42 CONV", "ok"], ["SPROUTS · AUSTIN", "SHELF-TALKER MISSING", "bad"], ["COSTCO · DENVER", "ROADSHOW DAY 3", "ok"]].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 12px",
      borderRadius: 9,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: r[2] === "bad" ? ORANGE : "#1F9D62",
      boxShadow: `0 0 7px ${r[2] === "bad" ? ORANGE : "#1F9D62"}`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "#fff",
      flex: 1
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: r[2] === "bad" ? ORANGE : "rgba(255,255,255,0.55)"
    }
  }, r[1])))))))));
};

/* ================= FAQ ================= */
const FAQ = () => {
  const items = [["What's the difference between shopper marketing and retail merchandising?", "Merchandising executes the shelf — planogram, OOS, POS placement. Shopper marketing is broader: the in-aisle ambassador, the scan-back demo, the end-cap moment, and the buyer-side reporting. We run both, often together."], ["Can you handle scan-back co-op programs?", "Yes. We coordinate retailer-funded demo programs tied to post-event scan velocity. Chain paperwork, COIs, and certifications filed. Recap goes to brand, broker, and retailer the same day."], ["Do you build the POS materials, or just place them?", "Both. We have an in-house fabrication shop for end-caps, branded fixtures, and POS at scale — and we can place materials your existing print partner produces, with photo evidence per piece either way."], ["What chains do you work in?", "Whole Foods, Costco, Sam's Club, Target, Walmart, Kroger, Publix, Wegmans, Sprouts, Erewhon, GNC, Vitamin Shoppe, Pet Supplies Plus, plus most regional banners. Chain-specific paperwork filed before deployment."], ["How quickly do we see results?", "Per-store recap in Spark same-day. Scan-back data flows as the retailer releases it (usually 24–72 hours). Program-level analysis at week-end or month-end depending on cadence."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SMWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SMMono, {
    color: AMBER
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Shopper marketing, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sm-reveal",
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
    background: "#0C0E12",
    color: "#fff",
    padding: "80px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(SMWrap, null, /*#__PURE__*/React.createElement(SMMono, {
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
}, [["Retail Merchandising", "/services/retail-merchandising"], ["Retail Demo Programs", "/services/retail-demo-programs"], ["Field Marketing", "/services/field-marketing"], ["Product Sampling", "/services/product-sampling"], ["CPG Beverage", "/industries/cpg-beverage"], ["CPG Food & Snack", "/industries/cpg-food-snack"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
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
}), /*#__PURE__*/React.createElement(SMWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "sm-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Own the shelf next reset."), /*#__PURE__*/React.createElement("p", {
  className: "sm-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(11,9,5,0.82)"
  }
}, "Tell us the chains and the calendar. We'll come back with a POS plan, a bench, and one platform that photographs every piece."), /*#__PURE__*/React.createElement("div", {
  className: "sm-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=shopper-marketing",
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
    "data-screen-label": "01 Shopper Marketing"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#E8C24A",
    label: "Shopper Marketing",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Counters, null), /*#__PURE__*/React.createElement(Journey, null), /*#__PURE__*/React.createElement(POSWall, null), /*#__PURE__*/React.createElement(ScanBack, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Channels, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesShopperMarketing: App
});
})();
