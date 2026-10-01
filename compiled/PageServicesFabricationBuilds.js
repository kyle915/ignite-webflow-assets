(function(){if (typeof window !== "undefined" && window.PageServicesFabricationBuilds) return;
/* Auto-extracted from the design project's pages/services-fabrication-builds.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-fabrication-builds")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-fabrication-builds";
  s.textContent = ":root{--fb-ink:#0A0B0D;--fb-orange:#4FB58A;--fb-blue:#4C8DFF;--fb-amber:#FFB627;}\n  body{background:#0A0B0D;}\n  @keyframes fb-rise{0%{opacity:0;transform:translateY(26px)}100%{opacity:1;transform:translateY(0)}}\n  @keyframes fb-pulse{0%,100%{opacity:1}50%{opacity:.3}}\n  @keyframes fb-draw{to{stroke-dashoffset:0}}\n  @keyframes fb-scan{0%{transform:translateY(-100vh)}100%{transform:translateY(100vh)}}\n  @keyframes fb-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\n  @keyframes fb-blob{0%,100%{transform:translate(-4%,-3%) scale(1)}50%{transform:translate(6%,5%) scale(1.15)}}\n  @keyframes fb-blink{0%,45%{opacity:1}50%,100%{opacity:.2}}\n  @keyframes fb-fadein{from{opacity:0}to{opacity:1}}\n  .fb-rise{animation:fb-rise 800ms cubic-bezier(.16,.84,.3,1) both}\n  .fb-marq-track{display:inline-flex;gap:40px;padding-right:40px;white-space:nowrap;animation:fb-marq 30s linear infinite}\n  .fb-reveal{opacity:0;transform:translateY(26px);transition:opacity 760ms cubic-bezier(.16,.84,.3,1),transform 760ms cubic-bezier(.16,.84,.3,1)}\n  .fb-reveal.in{opacity:1;transform:none}\n  @media (prefers-reduced-motion:reduce){[class*=\"fb-\"]{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}\n  @media (max-width:920px){.fb-hero-grid{grid-template-columns:1fr!important}.fb-2col{grid-template-columns:1fr!important}.fb-vs{grid-template-columns:1fr!important}}";
  document.head.appendChild(s);
})();
const INK = "#0A0B0D",
  ORANGE = "#4FB58A",
  BLUE = "#4C8DFF",
  AMBER = "#FFB627";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fb-reveal");
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
    color: color || BLUE,
    ...style
  }
}, children);

/* ---- HERO: animated blueprint that "draws" a booth ---- */
const Blueprint = () => {
  /* labels still cycle for flavor, but the drawing itself only ever
     plays ONCE on mount and then stays fully built — no erase/redraw loop */
  const [labelIdx, setLabelIdx] = React.useState(0);
  const [built, setBuilt] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setBuilt(true), 80); // kick the draw-in on next tick
    const id = setInterval(() => setLabelIdx(p => (p + 1) % 3), 2600);
    return () => {
      clearTimeout(t);
      clearInterval(id);
    };
  }, []);
  const labels = ["DRAFTING", "CUT LIST", "BUILD-READY"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1.2/1",
      borderRadius: 16,
      overflow: "hidden",
      background: "#0B1220",
      border: `1px solid ${BLUE}33`,
      backgroundImage: `linear-gradient(${BLUE}18 1px,transparent 1px),linear-gradient(90deg,${BLUE}18 1px,transparent 1px)`,
      backgroundSize: "7% 7%",
      boxShadow: `0 40px 100px rgba(0,0,0,0.5)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 14,
      right: 14,
      display: "flex",
      justifyContent: "space-between",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: BLUE,
    style: {
      fontSize: 8
    }
  }, "\u25A6 SHEET 01 \xB7 BOOTH-40x40"), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER,
    style: {
      fontSize: 8
    }
  }, labels[labelIdx], /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "fb-blink 1s infinite"
    }
  }, " \u258A"))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 170",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,120 L40,55 L100,30 L160,55 L160,120 L40,120",
    fill: "none",
    stroke: ORANGE,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    style: {
      strokeDasharray: 600,
      strokeDashoffset: built ? 0 : 600,
      transition: "stroke-dashoffset 1.6s ease"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62,78 L138,78 L138,120 L62,120 L62,78",
    fill: "none",
    stroke: BLUE,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
    style: {
      strokeDasharray: 220,
      strokeDashoffset: built ? 0 : 220,
      transition: "stroke-dashoffset 1.2s ease 1.1s"
    }
  }), /*#__PURE__*/React.createElement("g", {
    opacity: built ? 1 : 0,
    style: {
      transition: "opacity .6s ease 2.2s"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "138",
    x2: "160",
    y2: "138",
    stroke: AMBER,
    strokeWidth: "0.6",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "134",
    x2: "40",
    y2: "142",
    stroke: AMBER,
    strokeWidth: "0.6",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "160",
    y1: "134",
    x2: "160",
    y2: "142",
    stroke: AMBER,
    strokeWidth: "0.6",
    vectorEffect: "non-scaling-stroke"
  })), [[40, 120], [40, 55], [100, 30], [160, 55], [160, 120]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x,
    cy: y,
    r: "2.2",
    fill: ORANGE,
    opacity: built ? 1 : 0,
    style: {
      transition: `opacity .3s ease ${1.6 + i * 0.08}s`
    }
  }))), built && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: 22,
      transform: "translateX(-50%)",
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: AMBER,
      opacity: 0,
      animation: "fb-fadein .6s ease 2.2s forwards"
    }
  }, "40'-0\""), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "14%",
      background: `linear-gradient(180deg,transparent,${BLUE}18,transparent)`,
      animation: "fb-scan 5s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 14,
      right: 14,
      display: "flex",
      justifyContent: "space-between",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.4)",
    style: {
      fontSize: 8
    }
  }, "IN-HOUSE SHOP"), /*#__PURE__*/React.createElement(Mono, {
    color: BLUE,
    style: {
      fontSize: 8
    }
  }, "DESIGN \u2192 BUILD \u2192 SHIP")));
};
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Fabrication Hero",
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
    background: `radial-gradient(ellipse at center, ${ORANGE}22, transparent 62%)`,
    filter: "blur(58px)",
    animation: "fb-blob 22s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fb-rise",
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
    animation: "fb-pulse 1.5s infinite"
  }
}), /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "DESIGNED + BUILT UNDER ONE ROOF"))), /*#__PURE__*/React.createElement("div", {
  className: "fb-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 52,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  className: "fb-rise",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(46px,6.2vw,104px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    animationDelay: "120ms"
  }
}, "Renderings", /*#__PURE__*/React.createElement("br", null), "don't ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "load in.")), /*#__PURE__*/React.createElement("p", {
  className: "fb-rise",
  style: {
    marginTop: 26,
    fontSize: "clamp(18px,1.8vw,23px)",
    lineHeight: 1.45,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    animationDelay: "240ms"
  }
}, "Booths, pop-ups, scenic sets, and photo-ops \u2014 ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "drawn, engineered, and built in our own shop"), ", then shipped, installed, and struck by our crew. The thing you approved is the thing that shows up."), /*#__PURE__*/React.createElement("div", {
  className: "fb-rise",
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
}, "Scope a build ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "#capabilities",
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
}, "Shop capabilities")), /*#__PURE__*/React.createElement("div", {
  className: "fb-rise",
  style: {
    marginTop: 30,
    display: "flex",
    gap: 26,
    flexWrap: "wrap",
    animationDelay: "460ms"
  }
}, [["8'–40'", "build scale"], ["1", "team, end to end"], ["Ship-", "ready cases"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
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
  className: "fb-rise",
  style: {
    animationDelay: "560ms"
  }
}, /*#__PURE__*/React.createElement(Blueprint, null)))));
const Ticker = () => {
  const items = ["CARPENTRY", "METALWORK", "SCENIC PAINT", "VINYL & PRINT", "CNC ROUTING", "ELECTRICAL", "MODULAR ENGINEERING", "INSTALL & STRIKE"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: ORANGE,
      color: "#fff",
      padding: "15px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderBottom: `1px solid ${INK}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-marq-track"
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
      opacity: 0.55
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
  className: "fb-reveal"
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// ONE TEAM, START TO STRIKE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(28px,3.6vw,50px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.08
  }
}, "A design studio with a build shop attached."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)"
  }
}, "Most agencies design an activation and hand a spec to a vendor. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: ORANGE
  }
}, "We draw it, engineer it, and build it ourselves"), " \u2014 carpentry, metal, paint, vinyl, and electrical in-house \u2014 then ship it in cases, install it on-site, and strike it. No translation layer, no finger-pointing, no \"that's not what the render looked like.\""))));
const CAPS = [["Trade show booths", "10x10 inline to 40x60 island — engineered to ship, set fast, and reconfigure show to show.", BLUE], ["Pop-up & branded retail", "Temporary storefronts and shop-in-shops built to code and built to move.", ORANGE], ["Scenic & photo-ops", "Sculptural moments, oversized props, and set pieces designed for the camera.", AMBER], ["Modular touring sets", "Reconfigurable footprints that pack in standard cases and scale per market.", BLUE], ["Custom POS & displays", "Retail displays, coolers, and end-caps that survive the store and sell the shelf.", ORANGE], ["Festival & sponsor builds", "Weatherized footprints, stages, and activations engineered for the field.", AMBER]];
const Caps = () => /*#__PURE__*/React.createElement("section", {
  id: "capabilities",
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "fb-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: BLUE
}, "// WHAT THE SHOP MAKES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "If it can be ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "drawn,"), " it can be built.")), /*#__PURE__*/React.createElement("div", {
  className: "fb-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: 14
  }
}, CAPS.map(([t, d, c], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "fb-reveal",
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

/* photo band using a real event build */
const PhotoBand = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    height: "56vh",
    minHeight: 380,
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(https://kyle915.github.io/ignite-webflow-assets/assets/trade-show-nra-chicago.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center 42%"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(90deg, rgba(10,11,13,0.9) 0%, rgba(10,11,13,0.45) 45%, transparent 78%)`
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fb-reveal",
  style: {
    maxWidth: 560
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "// BUILT + DEPLOYED"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(30px,3.8vw,56px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98,
    color: "#fff",
    textShadow: "0 4px 24px rgba(0,0,0,0.5)"
  }
}, "From cut list to ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "convention floor.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 460,
    textShadow: "0 2px 14px rgba(0,0,0,0.6)"
  }
}, "Booths and builds engineered in the shop, trucked in, and standing on the floor by doors-open."))));
const STEPS = [["DESIGN", "Draw + engineer", "Concept, CAD, and structural engineering — costed and build-ready before a board is cut."], ["BUILD", "Fabricate in-house", "Carpentry, metal, paint, vinyl, and electrical under one roof, on one timeline."], ["SHIP", "Case + transport", "Packed in ship-ready cases with load plans, labeled and mapped for the crew."], ["DEPLOY", "Install + strike", "On-site crew builds it, supervises the run, strikes it, and returns it to shop."]];
const Process = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "fb-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// DRAW TO DEPLOY"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "How a build ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "comes together."))), /*#__PURE__*/React.createElement("div", {
  className: "fb-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 14
  }
}, STEPS.map(([h, t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "fb-reveal",
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
    color: BLUE
  }
}, String(i + 1).padStart(2, "0"), " \xB7 ", h), /*#__PURE__*/React.createElement("div", {
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
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "fb-reveal",
  style: {
    maxWidth: 800,
    marginBottom: 46
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: BLUE
}, "// IN-HOUSE vs. OUTSOURCED"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "No hand-off, ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "no excuses."))), /*#__PURE__*/React.createElement("div", {
  className: "fb-vs",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fb-reveal",
  style: {
    padding: "32px 28px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "AGENCY + OUTSIDE VENDOR"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Design tossed over a wall to a shop", "Renders that don't match the build", "Timeline lost between two companies", "Nobody owns the on-site problem", "Change orders and finger-pointing"].map(x => /*#__PURE__*/React.createElement("div", {
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
  className: "fb-reveal",
  style: {
    padding: "32px 28px",
    background: `linear-gradient(180deg, ${ORANGE}14, rgba(255,255,255,0.02))`,
    border: `1px solid ${ORANGE}55`,
    borderRadius: 16,
    transitionDelay: "80ms"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "IGNITE \u2014 DESIGN + BUILD"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Designers and builders in one shop", "What you approve is what ships", "One timeline, one owner", "Our crew installs and strikes it", "Build-ready costing before you commit"].map(x => /*#__PURE__*/React.createElement("div", {
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
const FAQS = [["Do you fabricate in-house?", "Yes — an in-house build shop with carpentry, metalwork, paint, vinyl, and electrical. Design, fabricate, ship, install, strike — one team."], ["What scales of build do you do?", "From 8-foot photo-ops to 40-foot immersive sets, single one-offs through multiple touring builds at once."], ["Can you build modular/touring activations?", "Yes — reconfigurable footprints engineered to ship in standard cases, set fast, and scale from 10x10 to 40x60."], ["Do you handle install and strike?", "Full-service: fabrication, transport, install crew, on-site supervision, strike, and return-to-shop refurb."], ["What categories do you build for?", "CPG, beverage, tech, hospitality, retail pop-ups, festival sponsors, and B2B trade show booths."]];
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
    className: "fb-reveal",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: BLUE
  }, "// BUILD QUESTIONS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.03em"
    }
  }, "Straight answers.")), /*#__PURE__*/React.createElement("div", {
    className: "fb-reveal"
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
  className: "fb-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// GOT A RENDER?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Send the sketch.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "We'll build it.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Napkin drawing, render, or a Pinterest board \u2014 we'll engineer it, cost it, build it, and stand it up on-site."), /*#__PURE__*/React.createElement("div", {
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
}, "Scope a build \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/services/experiential-marketing",
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
}, "Experiential \u2192")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/services/experiential-marketing",
  style: {
    color: INK
  }
}, "Experiential"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/trade-shows",
  style: {
    color: INK
  }
}, "Trade Shows"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/creative-design-studio",
  style: {
    color: INK
  }
}, "Creative Studio")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Fabrication & Builds"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#4FB58A",
    label: "Fabrication & Builds",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(Caps, null), /*#__PURE__*/React.createElement(PhotoBand, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), window.RelatedCases ? React.createElement(window.RelatedCases, {
    ctx: "service",
    slug: "fabrication-builds"
  }) : null, /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesFabricationBuilds: Page
});
})();
