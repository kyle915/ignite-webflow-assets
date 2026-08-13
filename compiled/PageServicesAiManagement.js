(function(){if (typeof window !== "undefined" && window.PageServicesAiManagement) return;
/* Auto-extracted from the design project's pages/services-ai-management.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  CYAN = "#D6F35F",
  VIOLET = "#B7E23A",
  ACCENT = "#D7453E",
  PAPER = "#F5F2EC";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".ai-reveal");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const reveal = () => els.forEach(e => {
      if (!e.classList.contains("in") && e.getBoundingClientRect().top < window.innerHeight * 0.92) e.classList.add("in");
    });
    reveal();
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
    window.addEventListener("scroll", reveal, {
      passive: true
    });
    const failsafe = setTimeout(() => els.forEach(e => e.classList.add("in")), 2600);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", reveal);
      clearTimeout(failsafe);
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
    color: color || CYAN,
    ...style
  }
}, children);

/* Neural-net SVG that lives behind the hero */
const NeuralBg = () => {
  const nodes = [[12, 22], [8, 52], [15, 80], [30, 16], [34, 46], [31, 76], [50, 30], [52, 60], [68, 20], [70, 50], [66, 80], [86, 30], [90, 58], [84, 82]];
  const links = [[0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [6, 9], [7, 9], [7, 10], [8, 11], [9, 11], [9, 12], [10, 12], [10, 13], [11, 12], [12, 13]];
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": true,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.5
    }
  }, links.map(([a, b], i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: nodes[a][0],
    y1: nodes[a][1],
    x2: nodes[b][0],
    y2: nodes[b][1],
    stroke: i % 3 === 0 ? VIOLET : CYAN,
    strokeWidth: "0.12",
    strokeOpacity: "0.5",
    vectorEffect: "non-scaling-stroke",
    strokeDasharray: "2 3",
    style: {
      animation: `ai-dash ${4 + i % 5}s linear infinite`
    }
  })), nodes.map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: i % 4 === 0 ? 0.9 : 0.55,
    fill: i % 4 === 0 ? VIOLET : CYAN
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "2.4",
    fill: "none",
    stroke: CYAN,
    strokeWidth: "0.1",
    strokeOpacity: "0.5",
    vectorEffect: "non-scaling-stroke",
    style: {
      transformOrigin: `${x}px ${y}px`,
      animation: `ai-ping ${2.4 + i % 4 * 0.6}s ease-out infinite ${i * 0.2}s`
    }
  }))));
};

/* ============================ HERO ============================ */
const AGENT_LINES = [{
  t: "recap.agent",
  m: "Compiling 4,212 field photos → market recap",
  c: CYAN
}, {
  t: "forecast.agent",
  m: "Phoenix sampling demand ▲ 18% — reallocating",
  c: VIOLET
}, {
  t: "creative.agent",
  m: "Localizing 12 market scripts · ES + EN",
  c: CYAN
}, {
  t: "vision.agent",
  m: "OOS flagged · Kroger #4471 · shelf gap",
  c: ACCENT
}, {
  t: "audience.agent",
  m: "Scoring 1,840 sweepstakes leads → CRM",
  c: VIOLET
}];
const Hero = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1600);
    return () => clearInterval(id);
  }, []);
  const visible = AGENT_LINES.slice(0, Math.min(AGENT_LINES.length, tick % (AGENT_LINES.length + 1) + 1));
  const [tokens, setTokens] = React.useState(1284502);
  React.useEffect(() => {
    const id = setInterval(() => setTokens(v => v + Math.floor(Math.random() * 900)), 700);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 AI Management Hero",
    style: {
      position: "relative",
      overflow: "hidden",
      background: INK,
      color: "#fff",
      padding: "91px 0 90px",
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: "-12%",
      top: "-18%",
      width: "55%",
      height: "78%",
      background: `radial-gradient(ellipse at center, ${CYAN}22, transparent 62%)`,
      filter: "blur(60px)",
      animation: "ai-blob-a 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: "-14%",
      bottom: "-22%",
      width: "52%",
      height: "64%",
      background: `radial-gradient(ellipse at center, ${VIOLET}1f, transparent 65%)`,
      filter: "blur(64px)",
      animation: "ai-blob-b 27s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${CYAN}66, transparent)`,
      animation: "ai-scan 8s linear infinite",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-rise",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      paddingBottom: 18,
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      marginBottom: 52,
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
      background: CYAN,
      boxShadow: `0 0 10px ${CYAN}`,
      animation: "ai-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: CYAN
  }, tokens.toLocaleString(), " TOKENS PROCESSED TODAY"))), /*#__PURE__*/React.createElement("div", {
    className: "ai-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ai-rise",
    style: {
      animationDelay: "80ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px",
      borderRadius: 999,
      background: `${CYAN}16`,
      border: `1px solid ${CYAN}77`
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: CYAN
  }, "// AI, RUN BY OPERATORS"))), /*#__PURE__*/React.createElement("h1", {
    className: "ai-rise",
    style: {
      marginTop: 30,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(46px, 6.6vw, 112px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.9,
      textWrap: "balance",
      animationDelay: "200ms"
    }
  }, "Your AI", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      background: `linear-gradient(100deg, ${CYAN}, ${VIOLET})`,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      textShadow: "none"
    }
  }, "department.")), /*#__PURE__*/React.createElement("p", {
    className: "ai-rise",
    style: {
      marginTop: 28,
      fontSize: "clamp(18px, 1.9vw, 24px)",
      lineHeight: 1.42,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 580,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      animationDelay: "340ms"
    }
  }, "Most brands buy AI tools and let them rot. We ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "run the whole layer"), " \u2014 recaps, forecasting, creative localization, audience scoring \u2014 fed by real field data and watched by operators. You get the output. We run the models."), /*#__PURE__*/React.createElement("div", {
    className: "ai-rise",
    style: {
      marginTop: 34,
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      animationDelay: "460ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact?intent=ai-management",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "20px 30px",
      borderRadius: 999,
      background: ACCENT,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      textDecoration: "none",
      boxShadow: `0 12px 40px ${ACCENT}44`
    }
  }, "Plan your AI build ", /*#__PURE__*/React.createElement("span", {
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
  }, "See how it works"))), /*#__PURE__*/React.createElement("div", {
    className: "ai-rise",
    style: {
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, rgba(214,243,95,0.10), rgba(183,226,58,0.06))",
      border: `1px solid ${CYAN}33`,
      borderRadius: 20,
      padding: 6,
      boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${CYAN}14`,
      animation: "ai-float 6s ease-in-out infinite"
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
  }, "ignite-ai / orchestrator"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      border: `2px solid ${CYAN}`,
      borderTopColor: "transparent",
      borderRadius: 999,
      animation: "ai-spin 1s linear infinite"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 9,
      minHeight: 256
    }
  }, visible.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.t,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      animation: "ai-rise 400ms ease both"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 3,
      width: 6,
      height: 6,
      borderRadius: 999,
      background: a.c,
      boxShadow: `0 0 8px ${a.c}`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: a.c,
      letterSpacing: "0.08em"
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    className: i === visible.length - 1 ? "ai-cursor" : "",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,0.85)",
      marginTop: 2,
      lineHeight: 1.35
    }
  }, a.m)), i < visible.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: CYAN,
      flexShrink: 0
    }
  }, "\u2713")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
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
  }, "5 AGENTS \xB7 HUMAN-IN-LOOP"), /*#__PURE__*/React.createElement(Mono, {
    color: CYAN,
    style: {
      fontSize: 9
    }
  }, "\u25CF ALL SYSTEMS LIVE"))))))));
};

/* ============================ TICKER ============================ */
const Ticker = () => {
  const items = ["AUTOMATED RECAPS", "DEMAND FORECASTING", "CREATIVE LOCALIZATION", "AUDIENCE SCORING", "OOS VISION DETECTION", "LEAD ROUTING", "MEDIA MIX MODELING", "FIELD INTELLIGENCE"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: CYAN,
      color: INK,
      padding: "16px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderBottom: `1px solid ${INK}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-marquee-track"
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      display: "inline-flex",
      alignItems: "center",
      gap: 44
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\u25C6")))));
};

/* ============================ PROBLEM ============================ */
const Problem = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "120px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ai-reveal",
  style: {
    maxWidth: 880
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ACCENT
}, "// THE GAP"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4.6vw,68px)",
    letterSpacing: "-0.04em",
    lineHeight: 1.0
  }
}, "Everyone bought AI. ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: VIOLET
  }
}, "Almost nobody runs it."))), /*#__PURE__*/React.createElement("div", {
  className: "ai-two-col ai-reveal",
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, [{
  t: "A graveyard of seats",
  d: "You're paying for five AI tools. Two people log in. The licenses renew anyway."
}, {
  t: "Recaps still take weeks",
  d: "Thousands of field photos sit in a drive. The deck is built by hand, three weeks late."
}, {
  t: "Generic in, generic out",
  d: "Off-the-shelf models don't know your brand, your markets, or your shelf. So the output sounds like everyone else."
}, {
  t: "No one to own it",
  d: "Marketing isn't a data team. Prompts, pipelines, governance, and review have no home — so AI stays a toy, not a system."
}].map((p, i) => /*#__PURE__*/React.createElement("div", {
  key: p.t,
  style: {
    padding: "30px 28px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 14,
    transitionDelay: i * 60 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 22,
    color: "#fff"
  }
}, p.t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 15.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)"
  }
}, p.d))))));

/* ============================ CAPABILITIES ============================ */
const CAPS = [{
  tag: "recap.agent",
  c: CYAN,
  t: "Automated activation recaps",
  d: "Thousands of GPS-stamped photos and check-ins become a branded, same-day recap — KPIs, highlights, market notes, all written for you.",
  k: ["Same-day", "Photo-backed", "Brand voice"]
}, {
  tag: "forecast.agent",
  c: VIOLET,
  t: "Demand & sell-through forecasting",
  d: "Model which markets and SKUs need more sampling, staffing, or inventory — before the week goes sideways.",
  k: ["By market", "By SKU", "Reallocation"]
}, {
  tag: "creative.agent",
  c: CYAN,
  t: "Creative & script localization",
  d: "One brief becomes market-specific scripts, signage copy, and social — in English and Spanish — in minutes, on brand.",
  k: ["EN + ES", "Per market", "On-brand"]
}, {
  tag: "vision.agent",
  c: ACCENT,
  t: "Shelf & compliance vision",
  d: "Computer vision reads store photos for out-of-stocks, planogram gaps, and competitive sets — flagged automatically.",
  k: ["OOS", "Planogram", "Competitive"]
}, {
  tag: "audience.agent",
  c: VIOLET,
  t: "Audience scoring & lead routing",
  d: "Score and route leads from sampling and sweepstakes into your CRM, ranked by intent, in real time.",
  k: ["Lead score", "CRM sync", "Real-time"]
}, {
  tag: "mix.agent",
  c: CYAN,
  t: "Spend & media-mix modeling",
  d: "Tie field activity to outcomes and model where the next dollar of activation budget actually moves the needle.",
  k: ["Attribution", "Budget", "ROI"]
}];
const Capabilities = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "120px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ai-reveal",
  style: {
    maxWidth: 820,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: CYAN
}, "// THE AGENTS WE RUN"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4.8vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.98
  }
}, "Six workers that ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: CYAN
  }
}, "never sleep.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 640
  }
}, "Run as a managed layer \u2014 connected to your Spark field data, governed, and reviewed by operators before anything ships.")), /*#__PURE__*/React.createElement("div", {
  className: "ai-two-col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 16
  }
}, CAPS.map((cap, i) => /*#__PURE__*/React.createElement("div", {
  key: cap.tag,
  className: "ai-reveal",
  style: {
    position: "relative",
    overflow: "hidden",
    padding: "30px 28px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    transitionDelay: i * 55 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: `linear-gradient(90deg, ${cap.c}, transparent 75%)`
  }
}), /*#__PURE__*/React.createElement(Mono, {
  color: cap.c,
  style: {
    fontSize: 10
  }
}, cap.tag), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 23,
    letterSpacing: "-0.02em",
    lineHeight: 1.04
  }
}, cap.t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)"
  }
}, cap.d), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 18,
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }
}, cap.k.map(k => /*#__PURE__*/React.createElement("span", {
  key: k,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: cap.c,
    padding: "5px 10px",
    borderRadius: 999,
    border: `1px solid ${cap.c}44`,
    background: `${cap.c}12`
  }
}, k))))))));

/* ============================ HOW ============================ */
const HOW = [{
  n: "01",
  t: "Audit",
  d: "We map your data, tools, and the workflows eating your team's time. You get a prioritized AI build plan — no jargon."
}, {
  n: "02",
  t: "Build",
  d: "We wire the models, prompts, and data pipes — connected to Spark field data — and set the human-in-the-loop review gates."
}, {
  n: "03",
  t: "Deploy",
  d: "Workflows go live behind your brand. Recaps generate, forecasts publish, creative localizes, leads route — automatically."
}, {
  n: "04",
  t: "Optimize",
  d: "We monitor accuracy, tune the models against real outcomes, and add agents as the program grows. You get a monthly read."
}];
const How = () => /*#__PURE__*/React.createElement("section", {
  id: "how",
  style: {
    background: INK,
    color: "#fff",
    padding: "120px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ai-reveal",
  style: {
    maxWidth: 820,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: VIOLET
}, "// HOW WE PLUG IN"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4.8vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.98
  }
}, "From audit to ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: VIOLET
  }
}, "autopilot."))), /*#__PURE__*/React.createElement("div", {
  className: "ai-two-col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 16
  }
}, HOW.map((h, i) => /*#__PURE__*/React.createElement("div", {
  key: h.n,
  className: "ai-reveal",
  style: {
    padding: "30px 26px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    transitionDelay: i * 60 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    fontWeight: 700,
    color: CYAN,
    letterSpacing: "0.1em"
  }
}, h.n), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 26,
    letterSpacing: "-0.02em"
  }
}, h.t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)"
  }
}, h.d))))));

/* ============================ VERSUS ============================ */
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "120px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ai-reveal",
  style: {
    maxWidth: 820,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ACCENT
}, "// THE DIFFERENCE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4.8vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.98
  }
}, "A tool vs. ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: CYAN
  }
}, "a team that runs it."))), /*#__PURE__*/React.createElement("div", {
  className: "ai-vs-row",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ai-reveal",
  style: {
    padding: "34px 30px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "DIY AI TOOLS"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 18,
    display: "flex",
    flexDirection: "column",
    gap: 13
  }
}, ["You staff the prompting and the cleanup", "Generic models that don't know your brand", "Output nobody reviews before it ships", "Disconnected from real field data", "Renews whether you use it or not"].map(x => /*#__PURE__*/React.createElement("div", {
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
  className: "ai-reveal",
  style: {
    padding: "34px 30px",
    background: `linear-gradient(180deg, ${CYAN}14, rgba(255,255,255,0.02))`,
    border: `1px solid ${CYAN}55`,
    borderRadius: 16,
    transitionDelay: "80ms"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: CYAN
}, "IGNITE AI MANAGEMENT"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 18,
    display: "flex",
    flexDirection: "column",
    gap: 13
  }
}, ["We run the prompts, pipes, and governance", "Tuned to your brand, markets, and shelf", "Human-in-the-loop review before anything ships", "Fed live by GPS + photo-verified Spark data", "You pay for outcomes, not idle seats"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  style: {
    display: "flex",
    gap: 11,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: CYAN,
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

/* ============================ STATS ============================ */
const Stats = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: CYAN,
    color: INK,
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ai-two-col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 24
  }
}, [["257,000", "Field force feeding the models"], ["<48hr", "Recaps, not 3 weeks"], ["EN + ES", "Localized in minutes"], ["Human", "In the loop, always"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  className: "ai-reveal",
  style: {
    transitionDelay: i * 70 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4vw,60px)",
    letterSpacing: "-0.03em",
    lineHeight: 1
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(10,11,13,0.7)"
  }
}, l))))));

/* ============================ CTA ============================ */
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "150px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    left: "-10%",
    top: "-10%",
    width: "50%",
    height: "60%",
    background: `radial-gradient(ellipse at center, ${VIOLET}1c, transparent 65%)`,
    filter: "blur(60px)",
    animation: "ai-blob-b 24s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: CYAN
}, "// STOP BABYSITTING TOOLS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(46px,7.5vw,140px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.86,
    textWrap: "balance"
  }
}, "Let the AI ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    background: `linear-gradient(100deg, ${CYAN}, ${VIOLET})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }
}, "do the work.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontSize: "clamp(18px,1.9vw,26px)",
    lineHeight: 1.4,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 680,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Tell us where your team is drowning \u2014 recaps, forecasting, creative, leads. We'll scope the AI build, wire it to your data, and have the first workflow live in weeks."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=ai-management",
  style: {
    padding: "22px 34px",
    borderRadius: 999,
    background: ACCENT,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    boxShadow: `0 14px 44px ${ACCENT}44`
  }
}, "Plan your AI build ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "/spark",
  style: {
    padding: "22px 30px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.35)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 18,
    textDecoration: "none"
  }
}, "Explore Spark")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 26,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.4)"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/spark",
  style: {
    color: CYAN,
    textDecoration: "none"
  }
}, "Spark"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/event-reporting-recaps",
  style: {
    color: CYAN,
    textDecoration: "none"
  }
}, "Event Reporting"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/field-marketing",
  style: {
    color: CYAN,
    textDecoration: "none"
  }
}, "Field Marketing")))));
const AIPage = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "AI Management"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#D6F35F",
    label: "AI Management",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
document.title = "AI Management for CPG Marketing | Ignite Productions";
Object.assign(window, {
  PageServicesAiManagement: AIPage
});
})();
