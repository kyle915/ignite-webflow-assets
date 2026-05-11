/* Our Work — case studies index. Editorial bento + imagery-driven. */

const {
  useState: wkState,
  useEffect: wkEffect,
  useRef: wkRef
} = React;

/* ------------------------------------------------------------------ KEYFRAMES */
if (typeof document !== "undefined" && !document.getElementById("wk-kf")) {
  const _wk = document.createElement("style");
  _wk.id = "wk-kf";
  _wk.textContent = `
    @keyframes wkPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.25)} }
    @keyframes wkFade  { 0%{opacity:0;transform:translateY(14px)} 100%{opacity:1;transform:translateY(0)} }
    @keyframes wkMarq  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    @keyframes wkScan  { 0%{transform:translateY(-100%)} 100%{transform:translateY(120%)} }
    @keyframes wkGrain { 0%,100%{transform:translate(0,0)} 25%{transform:translate(-2%,1%)} 50%{transform:translate(1%,-2%)} 75%{transform:translate(-1%,-1%)} }
    @keyframes wkBlob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-8%,6%) scale(1.15)} 66%{transform:translate(10%,-4%) scale(0.92)} }
    @keyframes wkBlob2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-12%,-8%) scale(1.18)} }
    @keyframes wkBlob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(8%,10%) scale(1.1)} }
    @keyframes wkGridSlide { 0%{background-position:0 0} 100%{background-position:80px 80px} }
    @keyframes wkScanH { 0%{transform:translateY(-100%);opacity:0} 50%{opacity:1} 100%{transform:translateY(120vh);opacity:0} }
    @keyframes wkWordIn { 0%{opacity:0;transform:translateY(110%) skewY(8deg)} 100%{opacity:1;transform:translateY(0) skewY(0)} }
    @keyframes wkWordOut { 0%{opacity:1;transform:translateY(0) skewY(0)} 100%{opacity:0;transform:translateY(-110%) skewY(-8deg)} }
    @keyframes wkUnderline { 0%{transform:scaleX(0);transform-origin:left} 60%{transform:scaleX(1);transform-origin:left} 60.01%{transform-origin:right} 100%{transform:scaleX(0);transform-origin:right} }
    @keyframes wkCharIn { 0%{opacity:0;transform:translateY(80%) rotate(8deg)} 100%{opacity:1;transform:translateY(0) rotate(0)} }
    .wk-char { display:inline-block; opacity:0; animation: wkCharIn 600ms cubic-bezier(.2,.7,.2,1) forwards; }
    .wk-word-cycle { position:relative; display:inline-block; vertical-align:baseline; }
    .wk-word-cycle span { display:inline-block; }

    .wk-card { transition: transform 400ms cubic-bezier(.2,.7,.2,1); }
    .wk-card:hover { transform: translateY(-4px); }
    .wk-card:hover .wk-cover-img { transform: scale(1.06); }
    .wk-card:hover .wk-arrow { transform: translate(8px, -8px) rotate(-12deg); }
    .wk-card:hover .wk-cta-ribbon { transform: translateY(0); opacity: 1; }

    .wk-row { transition: background 200ms ease; }
    .wk-row:hover { background: rgba(255,90,31,0.04); }
    .wk-row:hover .wk-row-num { color: var(--ignite-500); transform: translateX(4px); }
    .wk-row:hover .wk-row-brand { color: var(--ignite-500); }
    .wk-row:hover .wk-row-arrow { opacity: 1; transform: translate(0,0); }
    .wk-row:hover .wk-row-preview { opacity: 1; transform: translateX(0); }

    .wk-chip { transition: all 160ms ease; }
    .wk-chip:hover { background: var(--ignite-500); color: #fff; border-color: var(--ignite-500); }
  `;
  document.head.appendChild(_wk);
}

/* ------------------------------------------------------------------ DATA */
const WORK_BRAND_LOGOS = {
  "liquid-death": "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp",
  "white-claw": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp",
  "mas": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp",
  "krispy-krunchy": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp",
  "total-wireless": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp",
  "dude-wipes": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp",
  "glendalough": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp",
  "smalls-sliders": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp",
  "marc-anthony": "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"
};

/* Pull hero imagery + canonical headlines from CASE_STUDIES for accurate visuals */
const WORK_CASES = [{
  slug: "liquid-death",
  bento: "lg-tall",
  featured: true,
  accent: "#FF2D2D",
  surface: "#0A0A0A",
  stats: [["500+", "Activations / yr"], ["All US", "Markets"], ["7yr", "Partner"]]
}, {
  slug: "mas",
  bento: "md",
  accent: "#FF5A1F",
  surface: "#1A0E0A",
  stats: [["75K+", "Samples 2025"], ["6", "West Coast mkts"], ["MLS", "+ fútbol"]]
}, {
  slug: "white-claw",
  bento: "lg-wide",
  accent: "#7BD0E8",
  surface: "#0B1A22",
  stats: [["1,400+", "Demos"], ["35%", "Conversion"], ["+7%", "Sales lift"]]
}, {
  slug: "smalls-sliders",
  bento: "md",
  accent: "#FFC727",
  surface: "#231708",
  stats: [["Multi", "Mobile tour"], ["Custom", "Truck buildout"], ["South", "U.S. region"]]
}, {
  slug: "total-wireless",
  bento: "lg-wide",
  accent: "#D31920",
  surface: "#1A0606",
  stats: [["300+", "Stores"], ["9", "TX markets"], ["VR", "Build"]]
}, {
  slug: "krispy-krunchy",
  bento: "md",
  accent: "#F5B83A",
  surface: "#1F1408",
  stats: [["10", "Cities"], ["100K+", "Reached"], ["Doug", "The Nug"]]
}, {
  slug: "marc-anthony",
  bento: "md",
  accent: "#C99C5E",
  surface: "#1A140C",
  stats: [["250+", "Demos / yr"], ["All US", "Markets"], ["Multi", "SKU"]]
}, {
  slug: "dude-wipes",
  bento: "md",
  accent: "#1A8CFF",
  surface: "#06101F",
  stats: [["100K+", "Sampled"], ["Super", "Bowl"], ["NFL", "Sundays"]]
}, {
  slug: "glendalough",
  bento: "md",
  accent: "#7FB069",
  surface: "#0E1A0B",
  stats: [["Premium", "Set"], ["Midwest", "Region"], ["Full", "Program"]]
}];
const wkLookupCase = slug => {
  const base = WORK_CASES.find(c => c.slug === slug);
  const detail = typeof window !== "undefined" && window.CASE_STUDIES && window.CASE_STUDIES[slug] || {};
  return {
    ...base,
    ...detail,
    /* shorthand fallbacks */
    brand: detail.brand,
    headline: detail.headline,
    category: detail.category,
    sector: detail.sector,
    year: detail.year,
    hero: detail.hero,
    logo: WORK_BRAND_LOGOS[slug] || detail.logo
  };
};
const WORK_FILTERS = ["All work", "Sampling", "Mobile tours", "Retail", "Stadium & sport", "Spirits", "Premium"];
const WORK_FILTER_MAP = {
  "All work": () => true,
  "Sampling": c => /sampling|demo/i.test((c.category || "") + " " + (c.services || []).join(" ")),
  "Mobile tours": c => /mobile|tour/i.test((c.category || "") + " " + (c.services || []).join(" ")),
  "Retail": c => /retail|store/i.test((c.category || "") + " " + (c.services || []).join(" ")),
  "Stadium & sport": c => /stadium|sport|nascar|nfl|mls|fútbol|futbol|game/i.test((c.headline || "") + " " + (c.solution || "") + " " + (c.sector || "")),
  "Spirits": c => /spirits|whiskey|liquor/i.test((c.sector || "") + " " + (c.category || "")),
  "Premium": c => /premium|education/i.test((c.sector || "") + " " + (c.category || "") + " " + (c.services || []).join(" "))
};

/* ------------------------------------------------------------------ SHARED */
const WkOpsLine = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.24em",
    color: color || "var(--ignite-500)",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 99,
    background: "currentColor",
    animation: "wkPulse 2.4s ease-in-out infinite"
  }
}), children);

/* ------------------------------------------------------------------ MARQUEE */
const WorkBrandMarquee = () => {
  const cases = WORK_CASES.map(c => wkLookupCase(c.slug));
  const items = [...cases, ...cases];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      background: "var(--ink-100)",
      overflow: "hidden",
      padding: "22px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "max-content",
      animation: "wkMarq 60s linear infinite",
      alignItems: "center",
      gap: 80
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: `${c.slug}-${i}`,
    href: `/case-studies?slug=${c.slug}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 18,
      textDecoration: "none",
      color: "var(--fg-2)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: c.accent,
      boxShadow: `0 0 14px ${c.accent}99`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.025em",
      color: "var(--fg-1)"
    }
  }, (c.brand || c.slug).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, c.category || "")))));
};

/* ------------------------------------------------------------------ HERO */
const WORK_CYCLE_WORDS = ["receipts.", "proof.", "evidence.", "case files.", "track record."];
const WorkCyclingWord = () => {
  const [idx, setIdx] = wkState(0);
  const [phase, setPhase] = wkState("in"); /* in → hold → out */
  wkEffect(() => {
    let t;
    if (phase === "in") t = setTimeout(() => setPhase("hold"), 700);else if (phase === "hold") t = setTimeout(() => setPhase("out"), 1900);else if (phase === "out") t = setTimeout(() => {
      setIdx(i => (i + 1) % WORK_CYCLE_WORDS.length);
      setPhase("in");
    }, 500);
    return () => clearTimeout(t);
  }, [phase]);
  const word = WORK_CYCLE_WORDS[idx];
  const anim = phase === "in" ? "wkWordIn 700ms cubic-bezier(.2,.7,.2,1) forwards" : phase === "out" ? "wkWordOut 500ms cubic-bezier(.7,.2,.7,1) forwards" : "none";
  /* Longest word reserves layout width so right-side content doesn't shift */
  const longest = WORK_CYCLE_WORDS.reduce((a, b) => a.length >= b.length ? a : b);
  return /*#__PURE__*/React.createElement("span", {
    className: "wk-word-cycle",
    style: {
      position: "relative",
      display: "inline-block",
      color: "var(--ignite-500)",
      fontStyle: "italic",
      verticalAlign: "baseline",
      paddingBottom: "0.22em" /* room for descenders + underline */
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      visibility: "hidden",
      whiteSpace: "nowrap"
    }
  }, longest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "-0.08em",
      bottom: 0,
      overflow: "hidden",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: `${idx}-${phase}`,
    style: {
      animation: anim,
      display: "inline-block"
    }
  }, word)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "0.08em",
      background: "var(--ignite-500)",
      animation: "wkUnderline 3.1s cubic-bezier(.7,.1,.3,.9) infinite"
    }
  }));
};
const WorkHero = () => {
  const [tickerN, setTickerN] = wkState(0);
  wkEffect(() => {
    const id = setInterval(() => setTickerN(n => n + 1), 2200);
    return () => clearInterval(id);
  }, []);
  /* Per-char delays for "The" */
  const theChars = "The".split("");
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Work Hero",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "140px 0 90px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-20%",
      left: "60%",
      width: "50vw",
      height: "50vw",
      background: "radial-gradient(circle at center, rgba(255,90,31,0.30), transparent 60%)",
      animation: "wkBlob1 22s ease-in-out infinite",
      filter: "blur(10px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-30%",
      left: "-10%",
      width: "60vw",
      height: "60vw",
      background: "radial-gradient(circle at center, rgba(255,45,45,0.20), transparent 65%)",
      animation: "wkBlob2 28s ease-in-out infinite",
      filter: "blur(10px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "40%",
      right: "-15%",
      width: "40vw",
      height: "40vw",
      background: "radial-gradient(circle at center, rgba(255,199,39,0.10), transparent 60%)",
      animation: "wkBlob3 34s ease-in-out infinite",
      filter: "blur(10px)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.07,
      pointerEvents: "none",
      backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
      backgroundSize: "80px 80px",
      animation: "wkGridSlide 12s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: "40vh",
      pointerEvents: "none",
      background: "linear-gradient(180deg, transparent 0%, rgba(255,90,31,0.12) 50%, transparent 100%)",
      animation: "wkScanH 9s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 36,
      right: 36,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      textAlign: "right",
      opacity: 0.6,
      lineHeight: 1.8,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, "34.0522\xB0 N \xB7 118.2437\xB0 W"), /*#__PURE__*/React.createElement("div", null, "\u25CF transmitting")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(WkOpsLine, null, ">>", " OUR WORK \xB7 INDEX \xB7 2018 \u2192 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, WORK_CASES.length, " cases"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "50 states"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u25CF Live programs running today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 80,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(72px, 13vw, 240px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.82,
      color: "var(--fg-1)",
      margin: 0,
      textWrap: "balance"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      overflow: "hidden"
    }
  }, theChars.map((ch, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "wk-char",
    style: {
      animationDelay: `${i * 80}ms`
    }
  }, ch))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(WorkCyclingWord, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(20px, 1.6vw, 26px)",
      lineHeight: 1.4,
      color: "var(--fg-2)",
      maxWidth: 480,
      margin: 0,
      textWrap: "pretty"
    }
  }, "Every case below is a real program \u2014 sampled, staffed, fabricated, and measured by Ignite."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1.7,
      color: "var(--fg-3)",
      letterSpacing: "0.04em",
      maxWidth: 480
    }
  }, "No mood boards. No renders. No vibes-only decks. Real brands, real markets, real numbers."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 0,
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, [["7,000+", "Activations\nsince 2018"], ["50", "States\ncovered"], ["42K+", "Vetted\nambassadors"], ["98%", "On-time\ndeployment"], ["9", "Featured\ncases"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "28px 24px",
      borderLeft: i === 0 ? "none" : "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.2vw, 60px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      whiteSpace: "pre-line",
      lineHeight: 1.5
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: "16px 20px",
      border: "1px solid rgba(255,90,31,0.4)",
      borderRadius: 8,
      background: "rgba(255,90,31,0.06)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      color: "var(--fg-2)",
      textTransform: "uppercase",
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: "var(--ignite-500)",
      animation: "wkPulse 1.8s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "Live"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, ["Liquid Death · Daytona, FL · today", "Marc Anthony · Target Brooklyn · today", "Dude Wipes · NFL Sunday · this weekend", "Mas+ · MLS Atlanta · this weekend"][tickerN % 4]))));
};

/* ------------------------------------------------------------------ HERO RAIL — horizontal scroll of cases */
const WorkHeroRail = () => {
  const cases = WORK_CASES.map(c => wkLookupCase(c.slug));
  const railRef = wkRef(null);
  const scroll = dir => {
    if (railRef.current) railRef.current.scrollBy({
      left: dir * 540,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "02 Featured Rail",
    style: {
      background: "var(--ink-000)",
      padding: "80px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px",
      marginBottom: 32,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WkOpsLine, null, ">>", " ALL ", cases.length, " CASES \xB7 SWIPE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 76px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.95,
      color: "var(--fg-1)",
      margin: "14px 0 0"
    }
  }, "Pick a brand,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "read the case."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scroll(-1),
    "aria-label": "Scroll left",
    style: {
      width: 52,
      height: 52,
      borderRadius: 99,
      background: "transparent",
      border: "1px solid var(--ink-400)",
      color: "var(--fg-1)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      transition: "all 160ms ease"
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => scroll(1),
    "aria-label": "Scroll right",
    style: {
      width: 52,
      height: 52,
      borderRadius: 99,
      background: "var(--ignite-500)",
      border: "1px solid var(--ignite-500)",
      color: "#fff",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 18
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    style: {
      display: "flex",
      gap: 20,
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      padding: "4px 32px 30px",
      scrollbarWidth: "none"
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.slug,
    href: `/case-studies?slug=${c.slug}`,
    className: "wk-card",
    style: {
      flex: "0 0 480px",
      scrollSnapAlign: "start",
      position: "relative",
      display: "block",
      textDecoration: "none",
      color: "#fff",
      background: c.surface,
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      height: 560,
      marginLeft: i === 0 ? "max(0px, calc((100vw - 1256px) / 2))" : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.hero,
    alt: c.brand,
    className: "wk-cover-img",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.8,
      transition: "transform 800ms cubic-bezier(.2,.7,.2,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, ${c.surface}22 0%, transparent 30%, ${c.surface}f0 90%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(500px 400px at 80% 0%, ${c.accent}22, transparent 60%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      left: 24,
      right: 24,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "#fff",
      padding: "6px 12px",
      background: "rgba(0,0,0,0.5)",
      borderRadius: 99,
      backdropFilter: "blur(8px)",
      border: `1px solid ${c.accent}66`
    }
  }, c.year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: c.accent,
      textTransform: "uppercase"
    }
  }, String(i + 1).padStart(2, "0"), " / ", String(cases.length).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.logo,
    alt: c.brand,
    style: {
      height: 54,
      maxWidth: 240,
      objectFit: "contain",
      objectPosition: "left",
      filter: "brightness(0) invert(1)",
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(24px, 2vw, 32px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.05,
      color: "#fff",
      margin: 0,
      textWrap: "balance",
      maxWidth: 380
    }
  }, c.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 6
    }
  }, c.stats.slice(0, 3).map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-0.025em",
      color: c.accent,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.65)",
      textTransform: "uppercase"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 18,
      borderTop: `1px solid ${c.accent}33`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.7)",
      textTransform: "uppercase"
    }
  }, c.category), /*#__PURE__*/React.createElement("div", {
    className: "wk-arrow",
    style: {
      width: 40,
      height: 40,
      borderRadius: 99,
      background: c.accent,
      color: "#0A0A0A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 280ms cubic-bezier(.2,.7,.2,1)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 13L13 3M13 3H5M13 3V11",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 32px"
    }
  })));
};

/* ------------------------------------------------------------------ BENTO GRID */
const WorkBento = () => {
  /* Editorial bento with mixed shapes */
  const cases = WORK_CASES.map(c => wkLookupCase(c.slug));

  /* Grid plan (12 col): each case picks {col, row} */
  const plan = {
    "liquid-death": {
      col: "span 8",
      row: "span 2"
    },
    // BIG
    "mas": {
      col: "span 4",
      row: "span 1"
    },
    "white-claw": {
      col: "span 4",
      row: "span 1"
    },
    "smalls-sliders": {
      col: "span 4",
      row: "span 1"
    },
    "total-wireless": {
      col: "span 4",
      row: "span 1"
    },
    "krispy-krunchy": {
      col: "span 4",
      row: "span 1"
    },
    "dude-wipes": {
      col: "span 6",
      row: "span 1"
    },
    "marc-anthony": {
      col: "span 6",
      row: "span 1"
    },
    "glendalough": {
      col: "span 12",
      row: "span 1"
    } // WIDE
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "03 Bento Grid",
    className: "paper",
    style: {
      padding: "100px 0 140px",
      borderTop: "1px solid var(--paper-200)",
      borderBottom: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WkOpsLine, null, ">>", " EDITORIAL VIEW \xB7 BENTO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.4vw, 68px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1-inv)",
      margin: "14px 0 0",
      textWrap: "balance"
    }
  }, "Field photos.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "Real numbers."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--fg-3-inv)",
      maxWidth: 380,
      margin: 0,
      lineHeight: 1.6,
      fontFamily: "var(--font-mono)",
      textTransform: "uppercase",
      letterSpacing: "0.12em"
    }
  }, "Sized by impact \u2014 bigger square, bigger program.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridAutoRows: "260px",
      gap: 16
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.slug,
    href: `/case-studies?slug=${c.slug}`,
    className: "wk-card",
    style: {
      gridColumn: plan[c.slug]?.col || "span 4",
      gridRow: plan[c.slug]?.row || "span 1",
      position: "relative",
      display: "block",
      textDecoration: "none",
      borderRadius: 18,
      overflow: "hidden",
      color: "#fff",
      background: c.surface,
      border: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.hero,
    alt: c.brand,
    className: "wk-cover-img",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.92,
      transition: "transform 800ms cubic-bezier(.2,.7,.2,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, ${c.surface}33 0%, transparent 35%, ${c.surface}ee 95%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: c.accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 18,
      left: 18,
      right: 18,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "#fff",
      padding: "5px 10px",
      background: "rgba(0,0,0,0.55)",
      borderRadius: 99,
      backdropFilter: "blur(6px)"
    }
  }, c.category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: c.accent
    }
  }, String(i + 1).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.logo,
    alt: c.brand,
    style: {
      height: plan[c.slug]?.col === "span 8" ? 52 : 36,
      maxWidth: 200,
      objectFit: "contain",
      objectPosition: "left",
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: plan[c.slug]?.col === "span 8" ? "clamp(28px, 2.4vw, 40px)" : plan[c.slug]?.col === "span 12" ? "clamp(28px, 2.4vw, 40px)" : "clamp(18px, 1.4vw, 22px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.05,
      color: "#fff",
      margin: 0,
      textWrap: "balance",
      maxWidth: plan[c.slug]?.col === "span 8" ? 520 : plan[c.slug]?.col === "span 12" ? 720 : 320
    }
  }, c.headline), (plan[c.slug]?.col === "span 8" || plan[c.slug]?.col === "span 12") && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      gap: 24,
      paddingTop: 14,
      borderTop: `1px solid ${c.accent}33`
    }
  }, c.stats.slice(0, 3).map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-0.025em",
      color: c.accent,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.65)",
      textTransform: "uppercase"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "wk-cta-ribbon",
    style: {
      position: "absolute",
      top: 60,
      right: 18,
      padding: "8px 14px",
      borderRadius: 99,
      background: c.accent,
      color: "#0A0A0A",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: 700,
      opacity: 0,
      transform: "translateY(-6px)",
      transition: "all 280ms cubic-bezier(.2,.7,.2,1)"
    }
  }, "Read case \u2197"))))));
};

/* ------------------------------------------------------------------ INDEX LIST (Typographic) */
const WorkIndexList = () => {
  const cases = WORK_CASES.map(c => wkLookupCase(c.slug));
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "04 Index List",
    style: {
      background: "var(--ink-000)",
      padding: "100px 0 120px",
      color: "var(--fg-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WkOpsLine, null, ">>", " CASE INDEX \xB7 TYPOGRAPHIC VIEW"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.4vw, 68px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1)",
      margin: "14px 0 0"
    }
  }, "Hover, read,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "click in.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ink-400)"
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.slug,
    href: `/case-studies?slug=${c.slug}`,
    className: "wk-row",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "100px 1.5fr 1.5fr 1fr 200px 60px",
      gap: 24,
      alignItems: "center",
      padding: "32px 18px",
      borderBottom: "1px solid var(--ink-400)",
      textDecoration: "none",
      color: "var(--fg-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wk-row-num",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      transition: "all 240ms cubic-bezier(.2,.7,.2,1)"
    }
  }, String(i + 1).padStart(2, "0"), " / ", String(cases.length).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "wk-row-brand",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 2.6vw, 44px)",
      letterSpacing: "-0.025em",
      lineHeight: 1,
      color: "var(--fg-1)",
      transition: "color 240ms ease"
    }
  }, c.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "clamp(15px, 1.2vw, 20px)",
      color: "var(--fg-2)",
      lineHeight: 1.3,
      textWrap: "balance"
    }
  }, c.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", null, c.category), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      color: c.accent
    }
  }, c.year)), /*#__PURE__*/React.createElement("div", {
    className: "wk-row-preview",
    style: {
      width: 200,
      height: 120,
      borderRadius: 10,
      overflow: "hidden",
      border: `1px solid ${c.accent}55`,
      opacity: 0.4,
      transform: "translateX(8px)",
      transition: "all 280ms cubic-bezier(.2,.7,.2,1)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.hero,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "wk-row-arrow",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      color: c.accent,
      opacity: 0.3,
      transform: "translateX(-8px)",
      transition: "all 280ms cubic-bezier(.2,.7,.2,1)",
      justifySelf: "end"
    }
  }, "\u2192"))))));
};

/* ------------------------------------------------------------------ SECTORS */
const WorkSectors = () => {
  const sectors = [{
    name: "Beverage & Spirits",
    count: 4,
    brands: ["Liquid Death", "White Claw", "Mas+", "Glendalough"],
    color: "#FF2D2D"
  }, {
    name: "QSR & Food",
    count: 2,
    brands: ["Smalls Sliders", "Krispy Krunchy"],
    color: "#FFC727"
  }, {
    name: "CPG & Personal Care",
    count: 2,
    brands: ["Marc Anthony", "Dude Wipes"],
    color: "#1A8CFF"
  }, {
    name: "Telco & Retail",
    count: 1,
    brands: ["Total Wireless"],
    color: "#D31920"
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "05 Sectors",
    className: "paper",
    style: {
      padding: "100px 0",
      borderTop: "1px solid var(--paper-200)",
      borderBottom: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement(WkOpsLine, null, ">>", " SECTOR DEPTH"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.4vw, 64px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1-inv)",
      maxWidth: 980,
      textWrap: "balance"
    }
  }, "We don't dabble.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "We run programs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18
    }
  }, sectors.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      padding: 28,
      background: "var(--paper-000)",
      border: "1px solid var(--paper-200)",
      borderRadius: 14,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 54,
      letterSpacing: "-0.03em",
      color: "var(--fg-1-inv)",
      lineHeight: 1
    }
  }, s.count), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3-inv)",
      textTransform: "uppercase"
    }
  }, "Featured brands"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--fg-1-inv)"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--fg-3-inv)"
    }
  }, s.brands.join(" · ")))))));
};

/* ------------------------------------------------------------------ CTA */
const WorkCTA = () => {
  const cases = WORK_CASES.map(c => wkLookupCase(c.slug));
  const marqItems = [...cases, ...cases, ...cases];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "06 Work CTA",
    style: {
      background: "var(--ignite-500)",
      padding: "0",
      position: "relative",
      overflow: "hidden",
      color: "#0A0A0A"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0A0A0A",
      padding: "22px 0",
      overflow: "hidden",
      borderBottom: "3px solid #0A0A0A"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "max-content",
      animation: "wkMarq 45s linear infinite",
      alignItems: "center",
      gap: 64
    }
  }, marqItems.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: `${c.slug}-t-${i}`,
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "-0.025em",
      color: "var(--ignite-500)",
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: 24
    }
  }, c.brand, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 18
    }
  }, "\u2726"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "140px 0 130px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.12,
      pointerEvents: "none",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 240,
      height: 240,
      opacity: 0.18,
      background: "repeating-linear-gradient(45deg, #0A0A0A 0 2px, transparent 2px 14px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: 240,
      height: 240,
      opacity: 0.18,
      background: "repeating-linear-gradient(45deg, #0A0A0A 0 2px, transparent 2px 14px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 99,
      background: "#0A0A0A",
      animation: "wkPulse 1.8s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "#0A0A0A"
    }
  }, ">>", " What's next \xB7 Build with us")), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 32,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(56px, 9vw, 160px)",
      letterSpacing: "-0.05em",
      lineHeight: 1.05,
      color: "#FFFFFF",
      textAlign: "center",
      margin: "32px 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, "Your brand."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "Your"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      background: "#0A0A0A",
      color: "var(--ignite-500)",
      padding: "0.06em 0.22em 0.20em",
      borderRadius: 16,
      transform: "rotate(-2deg)",
      fontStyle: "italic",
      lineHeight: 1
    }
  }, "case study"), /*#__PURE__*/React.createElement("span", null, "."))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 44,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(20px, 1.8vw, 28px)",
      lineHeight: 1.4,
      color: "#0A0A0A",
      maxWidth: 780,
      margin: "44px auto 0",
      textAlign: "center",
      textWrap: "balance"
    }
  }, "Tell us what you're trying to move \u2014 trial, retention, retail sell-through, reach.", /*#__PURE__*/React.createElement("br", null), "We'll come back with a program shaped for it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      padding: "24px 38px",
      borderRadius: 99,
      background: "#0A0A0A",
      color: "var(--ignite-500)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      boxShadow: "0 14px 38px rgba(0,0,0,0.3)"
    }
  }, "Start a program", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 99,
      background: "var(--ignite-500)",
      color: "#0A0A0A",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/services",
    style: {
      padding: "24px 38px",
      borderRadius: 99,
      background: "transparent",
      color: "#0A0A0A",
      border: "2px solid #0A0A0A",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "See our services")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      padding: "24px 32px",
      background: "#0A0A0A",
      borderRadius: 14,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, [["48 hr", "Brief → first response"], ["50 states", "Coverage on day one"], ["7,000+", "Past activations"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      borderLeft: "2px solid var(--ignite-500)",
      paddingLeft: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: "-0.025em",
      color: "var(--ignite-500)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "#fff",
      textTransform: "uppercase",
      lineHeight: 1.5
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0A0A0A",
      padding: "22px 0",
      overflow: "hidden",
      borderTop: "3px solid #0A0A0A"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "max-content",
      animation: "wkMarq 38s linear infinite reverse",
      alignItems: "center",
      gap: 64
    }
  }, marqItems.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: `${c.slug}-b-${i}`,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "#fff",
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: 24
    }
  }, "Ready when you are", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u25CF"))))));
};

/* ------------------------------------------------------------------ ROOT */
const WorkPage = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "Our Work"
}, /*#__PURE__*/React.createElement(SiteNav, {
  active: "WORK"
}), /*#__PURE__*/React.createElement(WorkHero, null), /*#__PURE__*/React.createElement(WorkBrandMarquee, null), /*#__PURE__*/React.createElement(WorkHeroRail, null), /*#__PURE__*/React.createElement(WorkBento, null), /*#__PURE__*/React.createElement(WorkCTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
Object.assign(window, {
  WorkPage,
  WORK_CASES,
  WORK_BRAND_LOGOS
});