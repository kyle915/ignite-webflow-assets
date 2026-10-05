(function(){if (typeof window !== "undefined" && window.PageServicesProductSampling) return;
/* Auto-extracted from the design project's pages/services-product-sampling.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-product-sampling")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-product-sampling";
  s.textContent = ":root { --ps-ink:#0A0B0D; --ps-lime:#E68A4C; --ps-orange:#D7453E; }\n  body { background:#0A0B0D; }\n  @keyframes ps-rise{0%{opacity:0;transform:translateY(26px)}100%{opacity:1;transform:translateY(0)}}\n  @keyframes ps-pulse{0%,100%{opacity:1}50%{opacity:.3}}\n  @keyframes ps-blob{0%,100%{transform:translate(-4%,-3%) scale(1)}50%{transform:translate(8%,5%) scale(1.16)}}\n  @keyframes ps-scan{0%{transform:translateY(-100vh)}100%{transform:translateY(100vh)}}\n  @keyframes ps-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\n  @keyframes ps-pop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}\n  @keyframes ps-drop{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}\n  .ps-rise{animation:ps-rise 800ms cubic-bezier(.16,.84,.3,1) both}\n  .ps-marq-track{display:inline-flex;gap:40px;padding-right:40px;white-space:nowrap;animation:ps-marq 30s linear infinite}\n  .ps-reveal{opacity:0;transform:translateY(26px);transition:opacity 760ms cubic-bezier(.16,.84,.3,1),transform 760ms cubic-bezier(.16,.84,.3,1)}\n  .ps-reveal.in{opacity:1;transform:none}\n  @media (prefers-reduced-motion:reduce){[class*=\"ps-\"]{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}\n  @media (max-width:920px){.ps-hero-grid{grid-template-columns:1fr!important}.ps-2col{grid-template-columns:1fr!important}}";
  document.head.appendChild(s);
})();
const INK = "#0A0B0D",
  LIME = "#E68A4C",
  ORANGE = "#D7453E";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".ps-reveal");
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
    color: color || LIME,
    ...style
  }
}, children);

/* ---------- HERO — live sample counter ---------- */
const FEED = [{
  mkt: "Kroger · Columbus OH",
  n: "+128",
  c: LIME
}, {
  mkt: "Sprouts · Phoenix AZ",
  n: "+94",
  c: LIME
}, {
  mkt: "ACL Fest · Austin TX",
  n: "+512",
  c: ORANGE
}, {
  mkt: "7-Eleven · Dallas TX",
  n: "+61",
  c: LIME
}, {
  mkt: "Campus · Ann Arbor MI",
  n: "+203",
  c: ORANGE
}];
const Hero = () => {
  const [samples, setSamples] = React.useState(2418640);
  React.useEffect(() => {
    const id = setInterval(() => setSamples(v => v + Math.floor(Math.random() * 40) + 8), 600);
    return () => clearInterval(id);
  }, []);
  const [feed, setFeed] = React.useState(3);
  React.useEffect(() => {
    const id = setInterval(() => setFeed(f => f >= FEED.length ? 3 : f + 1), 1400);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Product Sampling Hero",
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
      background: `radial-gradient(ellipse at center, ${LIME}22, transparent 62%)`,
      filter: "blur(58px)",
      animation: "ps-blob 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${LIME}66, transparent)`,
      animation: "ps-scan 8s linear infinite",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ps-rise",
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
      background: LIME,
      boxShadow: `0 0 10px ${LIME}`,
      animation: "ps-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: LIME
  }, "SAMPLES HANDED \xB7 YTD"))), /*#__PURE__*/React.createElement("div", {
    className: "ps-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.18fr 1fr",
      gap: 52,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ps-rise",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(48px,6.6vw,112px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.88,
      animationDelay: "120ms"
    }
  }, "Trial you can", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: LIME
    }
  }, "actually count.")), /*#__PURE__*/React.createElement("p", {
    className: "ps-rise",
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
  }, "A CPG product sampling agency that puts product in hands and ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "proves it"), " across in-store demos, street, campus, and festivals. Every sample GPS-verified, every count in your dashboard by end of day."), /*#__PURE__*/React.createElement("div", {
    className: "ps-rise",
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
      background: LIME,
      color: "#0b0905",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      textDecoration: "none",
      boxShadow: `0 12px 40px ${LIME}44`
    }
  }, "Plan a sampling program ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#funnel",
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
  }, "See the conversion")), /*#__PURE__*/React.createElement("div", {
    className: "ps-rise",
    style: {
      marginTop: 30,
      display: "flex",
      gap: 26,
      flexWrap: "wrap",
      animationDelay: "460ms"
    }
  }, [["2.4M+", "samples / year"], ["100%", "GPS-verified"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: LIME,
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
    className: "ps-rise",
    style: {
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, rgba(230,138,76,0.10), rgba(215, 69, 62,0.05))",
      border: `1px solid ${LIME}33`,
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
  }, "spark / sampling / live-count"), /*#__PURE__*/React.createElement(Mono, {
    color: LIME,
    style: {
      fontSize: 9
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 18px 18px",
      textAlign: "center",
      borderBottom: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase"
    }
  }, "Samples handed \xB7 YTD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(36px,5vw,54px)",
      color: LIME,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginTop: 6,
      textShadow: `0 0 30px ${LIME}44`
    }
  }, samples.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      minHeight: 170
    }
  }, FEED.slice(0, feed).map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.mkt,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 12px",
      borderRadius: 10,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      animation: i === feed - 1 ? "ps-drop 400ms ease both" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "rgba(255,255,255,0.72)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, f.mkt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 700,
      color: f.c,
      marginLeft: 10
    }
  }, f.n)))), /*#__PURE__*/React.createElement("div", {
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
  }, "GPS + PHOTO PER COUNT"), /*#__PURE__*/React.createElement(Mono, {
    color: LIME,
    style: {
      fontSize: 9
    }
  }, "SAME-DAY DATA"))))))));
};
const Ticker = () => {
  const items = ["IN-STORE DEMOS", "STREET SAMPLING", "CAMPUS", "FESTIVALS", "ON-PREMISE", "GPS-VERIFIED COUNTS", "TRIAL → PURCHASE", "SAME-DAY DATA"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: LIME,
      color: INK,
      padding: "15px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderBottom: `1px solid ${INK}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ps-marq-track"
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
  className: "ps-reveal"
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
}, "What is a product sampling agency?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)"
  }
}, "A product sampling agency staffs and runs the programs that put your product directly in a consumer's hands: in-store demos, retail sampling, street teams, campus, festivals, and on-premise. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "Ignite"), " hands out ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: LIME
  }
}, "2.4M+ samples a year"), " with ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "GPS-verified counts"), ", so sampling stops being a cost line and starts being a measurable trial engine."))));

/* ---------- CONVERSION FUNNEL ---------- */
const Funnel = () => {
  const steps = [["Reach", "People who walk past the demo", 100, "rgba(255,255,255,0.4)"], ["Sampled", "Product actually in hand", 58, LIME], ["Engaged", "Heard the pitch, asked a question", 39, LIME], ["Converted", "Bought: trial → purchase", 21, ORANGE]];
  return /*#__PURE__*/React.createElement("section", {
    id: "funnel",
    style: {
      background: "#0C0E13",
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "ps-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: LIME
  }, "// WHY SAMPLING WORKS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Hand to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: LIME
    }
  }, "purchase.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Trial is the shortest path to a first purchase. We staff the demo, drive the conversation to the conversion ask, and count every step so you know the real return, not a vibe.")), /*#__PURE__*/React.createElement("div", {
    className: "ps-reveal",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, steps.map(([t, d, w, c], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "ps-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: 18,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
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
      height: 42,
      background: "rgba(255,255,255,0.04)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: w + "%",
      background: `linear-gradient(90deg, ${c}, ${c}77)`,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 800,
      color: i >= 1 && i < 3 ? "#0b0905" : "#fff"
    }
  }, w, "%")))))), /*#__PURE__*/React.createElement("p", {
    className: "ps-reveal",
    style: {
      marginTop: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Illustrative funnel. Real conversion varies by category and channel; top programs hit 28 to 34%.")));
};

/* ---------- CHANNELS ---------- */
const CH = [["In-store demos", "Grocery, mass, club, natural. Table, taste, convert at the shelf.", LIME], ["Street sampling", "High-density hand-to-hand. Corners, transit, events, cans-in-hands.", ORANGE], ["Campus", "Move-in, game days, quads. Where Gen-Z brand defaults get set.", LIME], ["Festivals & events", "Footprints and roving teams at the moments people post about.", ORANGE], ["On-premise", "Bars and restaurants, TIPS-certified pour teams, trial where they buy.", LIME], ["Mobile & tours", "Branded vehicles hitting multiple markets on a routed schedule.", ORANGE]];
const Channels = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ps-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "// WHERE WE SAMPLE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Every channel that ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: LIME
  }
}, "drives trial."))), /*#__PURE__*/React.createElement("div", {
  className: "ps-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: 14
  }
}, CH.map(([t, d, c], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "ps-reveal",
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

/* ---------- SPARK ---------- */
const Spark = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ps-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ps-reveal"
}, /*#__PURE__*/React.createElement(Mono, {
  color: LIME
}, "// THE PROOF LAYER"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(30px,4vw,58px)",
    letterSpacing: "-0.035em",
    lineHeight: 1.0
  }
}, "Every count, ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: LIME
  }
}, "logged.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 16.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.74)"
  }
}, "Spark logs every sample with GPS + photo, tracks per-SKU velocity and trial-to-purchase, and delivers a per-market dashboard the same day. Sampling ROI you can actually put in a deck."), /*#__PURE__*/React.createElement("a", {
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
    color: LIME,
    textDecoration: "none"
  }
}, "Explore Spark \u2192")), /*#__PURE__*/React.createElement("div", {
  className: "ps-reveal",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  }
}, [["GPS", "per-count location"], ["Photo", "proof on site"], ["Per-SKU", "velocity + trial"], ["Same-day", "market dashboard"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "24px 20px",
    background: "rgba(230,138,76,0.06)",
    border: "1px solid rgba(230,138,76,0.25)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    color: LIME,
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
const FAQS = [["How do you measure sampling ROI?", "GPS-verified sample counts, per-SKU velocity, trial-to-purchase conversion, and post-sampling intercept research, delivered same-day in the Spark dashboard."], ["What channels do you sample in?", "Grocery, mass, c-store, natural, on-premise, campus, street, festivals, sporting events, and B2B trade shows, with channel-specific staffing and compliance."], ["Do you sample alcohol and regulated categories?", "Yes. TIPS-certified staff, state-by-state alcohol compliance, and food-handler certs for all F&B sampling."], ["What's typical conversion?", "Conversion varies by category, retailer, and how the demo is staffed. Ignite reports trial-to-purchase from GPS-verified counts after each program."], ["How fast is data turnaround?", "Same-day. Counts, photos, and dashboards are available within hours of shift completion."]];
const Faq = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ps-reveal",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: LIME
  }, "// QUESTIONS BUYERS ASK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.03em"
    }
  }, "Straight answers.")), /*#__PURE__*/React.createElement("div", {
    className: "ps-reveal"
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
      color: LIME,
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
    background: LIME,
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
  className: "ps-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// PUT PRODUCT IN HANDS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Sample it.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "Then count it.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Tell us the product, the markets, and the goal. We'll design the sampling program, staff it, and prove the trial, sample by sample."), /*#__PURE__*/React.createElement("div", {
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
}, "Plan a sampling program \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/services/retail-demo-programs",
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
}, "Retail demos \u2192")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/services/retail-demo-programs",
  style: {
    color: INK
  }
}, "Retail Demos"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/street-teams",
  style: {
    color: INK
  }
}, "Street Teams"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/on-premise-sampling",
  style: {
    color: INK
  }
}, "On-Premise")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Product Sampling"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#E68A4C",
    label: "Product Sampling",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Funnel, null), /*#__PURE__*/React.createElement(Channels, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), window.RelatedCases ? React.createElement(window.RelatedCases, {
    ctx: "service",
    slug: "product-sampling"
  }) : null, /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesProductSampling: Page
});
})();
