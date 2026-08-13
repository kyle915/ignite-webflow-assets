(function(){if (typeof window !== "undefined" && window.MarketsHub) return;
/* global React */
/* ============================================================
   MARKETS HUB — /markets (or /cities) page body.
   Regional groupings, hover chips, CTA to brief us.
   ============================================================ */

const {
  useState: useStateMH
} = React;

/* Region primary colors — single source of truth lives in MarketsData
   (window.REGION_HUES). Kept here as a fallback for isolated renders.
   Every city chip in a region inherits its region's hue (via --chip). */
const REGION_HUES = window.REGION_HUES || {
  "northeast": "#5E8B7E",
  // slate green — temperate deciduous
  "southeast": "#E39A4C",
  // warm amber — humid subtropical
  "midwest": "#4F86C6",
  // lake blue — Great Lakes
  "southwest": "#CE6B3E",
  // desert terracotta — arid
  "west": "#E7B84A",
  // coastal gold — Mediterranean
  "pacific-northwest": "#3E8060",
  // evergreen — temperate rainforest
  "mountain": "#6C6FB2" // alpine slate-violet — high country
};

/* ---------- Hero band ---------- */
const MARKETS_HERO_ANIM_CSS = `
@keyframes mhGridDrift { from { background-position: 0 0, 0 0; } to { background-position: 96px 96px, 96px 96px; } }
@keyframes mhGlowA { 0%,100% { transform: translate3d(-8%, -4%, 0) scale(1); opacity: .55; } 50% { transform: translate3d(6%, 4%, 0) scale(1.12); opacity: .85; } }
@keyframes mhGlowB { 0%,100% { transform: translate3d(4%, 6%, 0) scale(1.05); opacity: .35; } 50% { transform: translate3d(-6%, -4%, 0) scale(0.95); opacity: .6; } }
@keyframes mhScan { 0% { transform: translateY(-100%); opacity: 0; } 8% { opacity: .55; } 92% { opacity: .55; } 100% { transform: translateY(110vh); opacity: 0; } }
@keyframes mhStencilPan { 0% { transform: translateX(0); } 100% { transform: translateX(-3%); } }
@keyframes mhTickerPulse { 0%, 100% { opacity: .9; } 50% { opacity: .55; } }
@keyframes mhNationalShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
@keyframes mhStatBar { 0%, 100% { transform: scaleY(0.4); opacity: 0.4; } 50% { transform: scaleY(1); opacity: 1; } }
@keyframes mhMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes mhTier1Pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,53,0.0); } 50% { box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.09); } }
@media (prefers-reduced-motion: reduce) {
  .mh-anim, .mh-anim * { animation: none !important; }
}
`;
const MarketsHero = ({
  rel = ""
}) => /*#__PURE__*/React.createElement("section", {
  className: "mh-anim",
  style: {
    position: "relative",
    padding: "var(--hero-pad-compact) 0",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("style", {
  dangerouslySetInnerHTML: {
    __html: MARKETS_HERO_ANIM_CSS
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: "-10%",
    top: "-15%",
    width: "60%",
    height: "70%",
    background: "transparent",
    filter: "blur(20px)",
    pointerEvents: "none",
    animation: "mhGlowA 18s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: "-8%",
    bottom: "-20%",
    width: "55%",
    height: "70%",
    background: "transparent",
    filter: "blur(28px)",
    pointerEvents: "none",
    animation: "mhGlowB 22s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 2,
    background: "linear-gradient(to bottom, rgba(255,107,53,0) 0%, rgba(255,107,53,0.5) 50%, rgba(255,107,53,0) 100%)",
    pointerEvents: "none",
    animation: "mhScan 14s linear infinite",
    animationDelay: "3s"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: "-3%",
    top: "-2%",
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(180px, 26vw, 420px)",
    lineHeight: 0.85,
    letterSpacing: "-0.04em",
    color: "rgba(255,255,255,0.025)",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    pointerEvents: "none",
    userSelect: "none",
    animation: "mhStencilPan 30s ease-in-out infinite alternate"
  }
}, "MARKETS"), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, /*#__PURE__*/React.createElement("span", {
  style: {
    animation: "mhTickerPulse 2.4s ease-in-out infinite",
    display: "inline-block"
  }
}, ">> ", "NATIONAL COVERAGE \xB7 50 STATES \xB7 200+ METROS")), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(64px, 9.5vw, 168px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88,
    maxWidth: 1300,
    textWrap: "balance"
  }
}, "The major markets", /*#__PURE__*/React.createElement("br", null), "we ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "activate"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, ".")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontFamily: "var(--font-mono)",
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--fg-1)",
    maxWidth: 900,
    lineHeight: 1.4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u203B"), " ", "Building a page for every city would take longer than driving to one.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "2px",
    animation: "mhTickerPulse 2.4s ease-in-out infinite",
    display: "inline-block",
    whiteSpace: "nowrap",
    marginTop: 6
  }
}, "So we picked the loud ones.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(20px, 2.1vw, 28px)",
    lineHeight: 1.35,
    letterSpacing: "-0.015em",
    color: "rgba(255,255,255,0.92)",
    maxWidth: 880,
    textWrap: "pretty"
  }
}, "Coverage is ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--ignite-500)",
    fontWeight: 800,
    backgroundImage: "linear-gradient(90deg, var(--ignite-500), #ffb050, var(--ignite-500))",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "mhNationalShimmer 4s linear infinite",
    display: "inline-block"
  }
}, "national"), " \u2014 all 50 states and 200+ named metros. From one-market pop-ups to nationwide rollouts: staffing, sampling, experiential, mobile tours, and trade-show programs, wherever the brief lands."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 64,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 0,
    border: "1px solid var(--ink-400)",
    borderRadius: 12,
    overflow: "hidden",
    background: "linear-gradient(180deg, rgba(17,19,23,0.92), rgba(10,11,13,0.92))"
  }
}, [["STATES", "50", "all of them"], ["NAMED METROS", "200+", "core + surge"], ["AMBASSADORS", "257,000+", "vetted, in-market"], ["RUSH WINDOW", "48 HR", "brief to boots"]].map(([k, v, sub], i, arr) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    padding: "28px 28px",
    borderRight: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    background: "linear-gradient(180deg, var(--ignite-500), rgba(255,107,53,0))",
    animation: `mhStatBar 3s ease-in-out ${i * 0.18}s infinite`,
    transformOrigin: "top"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.24em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, k), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 56,
    letterSpacing: "-0.035em",
    color: "var(--ignite-500)",
    lineHeight: 0.95,
    textShadow: "0 0 30px rgba(255, 107, 53, 0.175)"
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-2)",
    letterSpacing: "0.04em"
  }
}, sub))))));

/* ---------- Marquee ticker band ---------- */
const RegionTicker = () => {
  const items = ["50 STATES", "200+ METROS", "257,000 AMBASSADORS", "48 HR RUSH WINDOW", "PERMITS HANDLED", "LOCAL CREWS", "NATIONAL ROLLOUTS", "SAMPLING", "MOBILE TOURS", "TRADE-SHOW STAFF", "POP-UPS", "BRAND AMBASSADORS", "FIELD MARKETING"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "mh-anim",
    "aria-hidden": "true",
    style: {
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      background: "var(--ink-100)",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      whiteSpace: "nowrap",
      width: "max-content",
      animation: "mhMarquee 60s linear infinite"
    }
  }, row.map((label, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 18,
      padding: "18px 28px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: i % 4 === 1 ? "var(--ignite-500)" : "var(--fg-1)"
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      opacity: 0.55
    }
  }, "\u25C7")))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(90deg, var(--ink-100) 0%, transparent 8%, transparent 92%, var(--ink-100) 100%)"
    }
  }));
};

/* ---------- Region card ---------- */
const RegionCard = ({
  region,
  rel,
  idx,
  filter = ""
}) => {
  const q = filter.trim().toLowerCase();
  const matches = q ? region.cities.filter(c => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q) || c.slug.includes(q)) : region.cities;
  if (q && matches.length === 0) return null;
  const regionHue = REGION_HUES[region.id] || "var(--ignite-500)";
  return /*#__PURE__*/React.createElement("div", {
    className: "mh-region-card",
    style: {
      background: "linear-gradient(180deg, var(--ink-100), rgba(17,19,23,0.85))",
      border: "1px solid var(--ink-400)",
      borderRadius: 14,
      padding: "32px 32px 28px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 200ms, transform 200ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 3,
      background: `linear-gradient(90deg, ${regionHue} 0%, transparent 60%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -10,
      top: -30,
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(160px, 22vw, 320px)",
      lineHeight: 0.85,
      letterSpacing: "-0.04em",
      color: "rgba(255,255,255,0.025)",
      pointerEvents: "none",
      userSelect: "none",
      textTransform: "uppercase"
    }
  }, "0", idx + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px, 3.4vw, 44px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1)"
    }
  }, region.label, /*#__PURE__*/React.createElement("span", {
    style: {
      color: regionHue
    }
  }, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, region.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 22,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, matches.map(c => {
    const href = window.CITY_URL ? window.CITY_URL(c.slug) : "/cities/" + c.slug;
    const Tag = "a";
    const isTier1 = c.tier === 1;
    const hue = regionHue;
    return /*#__PURE__*/React.createElement(Tag, {
      key: c.slug,
      href: href || undefined,
      className: href ? isTier1 ? "markets-chip markets-chip--live markets-chip--tier1" : "markets-chip markets-chip--live" : "markets-chip markets-chip--stub",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        "--chip": hue,
        padding: "10px 14px",
        border: `1px solid color-mix(in srgb, ${hue} ${isTier1 ? 55 : 32}%, var(--ink-400))`,
        borderRadius: 999,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: isTier1 ? 700 : 500,
        letterSpacing: "0.06em",
        textTransform: "none",
        background: href ? isTier1 ? `color-mix(in srgb, ${hue} 10%, var(--ink-200))` : "var(--ink-200)" : "transparent",
        color: href ? "var(--fg-1)" : "var(--fg-3)",
        textDecoration: "none",
        transition: "background 160ms, border-color 160ms, color 160ms, transform 160ms",
        cursor: href ? "pointer" : "default"
      }
    }, /*#__PURE__*/React.createElement("span", null, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: 0.65,
        letterSpacing: "0.18em"
      }
    }, "/ ", c.state), href && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: hue,
        marginLeft: 2
      }
    }, "\u2197"));
  })));
};

/* ---------- Coverage map — 50-state outline, regions stroked in their hues ---------- */
const MHMAP_FIPS_USPS = {
  "01": "AL",
  "02": "AK",
  "04": "AZ",
  "05": "AR",
  "06": "CA",
  "08": "CO",
  "09": "CT",
  "10": "DE",
  "11": "DC",
  "12": "FL",
  "13": "GA",
  "15": "HI",
  "16": "ID",
  "17": "IL",
  "18": "IN",
  "19": "IA",
  "20": "KS",
  "21": "KY",
  "22": "LA",
  "23": "ME",
  "24": "MD",
  "25": "MA",
  "26": "MI",
  "27": "MN",
  "28": "MS",
  "29": "MO",
  "30": "MT",
  "31": "NE",
  "32": "NV",
  "33": "NH",
  "34": "NJ",
  "35": "NM",
  "36": "NY",
  "37": "NC",
  "38": "ND",
  "39": "OH",
  "40": "OK",
  "41": "OR",
  "42": "PA",
  "44": "RI",
  "45": "SC",
  "46": "SD",
  "47": "TN",
  "48": "TX",
  "49": "UT",
  "50": "VT",
  "51": "VA",
  "53": "WA",
  "54": "WV",
  "55": "WI",
  "56": "WY"
};
const MHMAP_STATE_REGION = (() => {
  const g = {
    northeast: ["CT", "DE", "DC", "ME", "MD", "MA", "NH", "NJ", "NY", "PA", "RI", "VT"],
    southeast: ["AL", "AR", "FL", "GA", "KY", "LA", "MS", "NC", "SC", "TN", "VA", "WV"],
    midwest: ["IL", "IN", "IA", "KS", "MI", "MN", "MO", "NE", "ND", "OH", "SD", "WI"],
    southwest: ["AZ", "NM", "OK", "TX"],
    west: ["CA", "HI", "NV"],
    "pacific-northwest": ["OR", "WA", "AK"],
    mountain: ["CO", "ID", "MT", "UT", "WY"]
  };
  const out = {};
  Object.entries(g).forEach(([r, arr]) => arr.forEach(s => {
    out[s] = r;
  }));
  return out;
})();
const MarketsCoverageMap = () => {
  const [paths, setPaths] = React.useState(null);
  const hues = typeof window !== "undefined" && window.REGION_HUES || {};
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        if (!window.d3 || !window.topojson) return;
        const topo = await fetch("https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json").then(r => r.json());
        if (!alive) return;
        const fc = window.topojson.feature(topo, topo.objects.states);
        const feats = fc.features.filter(f => MHMAP_FIPS_USPS[String(f.id).padStart(2, "0")]);
        const W = 640,
          H = 400;
        const proj = window.d3.geoAlbersUsa().fitSize([W, H], {
          type: "FeatureCollection",
          features: feats
        });
        const gp = window.d3.geoPath(proj);
        const out = feats.map(f => {
          const usps = MHMAP_FIPS_USPS[String(f.id).padStart(2, "0")];
          const region = MHMAP_STATE_REGION[usps];
          return {
            d: gp(f),
            region,
            color: hues[region] || "#6b7280"
          };
        }).filter(p => p.d);
        setPaths({
          W,
          H,
          out
        });
      } catch (e) {/* leave unrendered on failure */}
    })();
    return () => {
      alive = false;
    };
  }, []);
  if (!paths) return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "640 / 400"
    },
    "aria-hidden": "true"
  });
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${paths.W} ${paths.H}`,
    role: "img",
    "aria-label": "Ignite coverage across all 50 states, colored by region",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      overflow: "visible"
    }
  }, paths.out.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p.d,
    fill: p.color,
    fillOpacity: 0.16,
    stroke: p.color,
    strokeOpacity: 0.85,
    strokeWidth: 1,
    strokeLinejoin: "round"
  })));
};

/* ---------- Hub body ---------- */
const MarketsHub = ({
  rel = ""
}) => {
  const regions = window.MARKETS_REGIONS || [];
  const totalCities = regions.reduce((n, r) => n + r.cities.length, 0);
  const liveCities = regions.reduce((n, r) => n + r.cities.filter(c => c.available).length, 0);
  const [filter, setFilter] = useStateMH("");
  const q = filter.trim().toLowerCase();
  const visibleCount = q ? regions.reduce((n, r) => n + r.cities.filter(c => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q) || c.slug.includes(q)).length, 0) : totalCities;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .markets-chip--live:hover {
          background: var(--chip, var(--ignite-500)) !important;
          color: #0A0B0D !important;
          border-color: var(--chip, var(--ignite-500)) !important;
          transform: translateY(-2px);
        }
        .markets-chip--live:hover span { color: #0A0B0D !important; }
        .markets-chip::before { content: ""; width: 7px; height: 7px; border-radius: 999px; background: var(--chip, var(--ignite-500)); display: inline-block; margin-right: 4px; flex: 0 0 auto; }
        .markets-chip--tier1::before { box-shadow: 0 0 8px color-mix(in srgb, var(--chip, var(--ignite-500)) 45%, transparent); }
        .mh-region-card:hover { border-color: rgba(255,107,53,0.45) !important; transform: translateY(-3px); }
      `), /*#__PURE__*/React.createElement(MarketsHero, {
    rel: rel
  }), /*#__PURE__*/React.createElement(RegionTicker, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "BY REGION \xB7 ", visibleCount, "/", totalCities, " NAMED MARKETS \xB7 ", liveCities, " LIVE PAGES"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "rgba(255,255,255,0.08)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 18px",
      border: "1px solid var(--ink-400)",
      borderRadius: 999,
      background: "var(--ink-100)",
      transition: "border-color 200ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase"
    }
  }, ">> ", "FILTER"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: filter,
    onChange: e => setFilter(e.target.value),
    placeholder: "City, state, or slug \u2014 try \u2018TX\u2019, \u2018miami\u2019, \u2018festival\u2019\u2026",
    "aria-label": "Filter markets",
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--fg-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.04em",
      padding: "4px 0"
    }
  }), filter && /*#__PURE__*/React.createElement("button", {
    onClick: () => setFilter(""),
    style: {
      border: "1px solid var(--ink-400)",
      background: "transparent",
      color: "var(--fg-2)",
      padding: "6px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, "CLEAR \xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24
    }
  }, regions.map((r, i) => /*#__PURE__*/React.createElement(RegionCard, {
    key: r.id,
    region: r,
    rel: rel,
    idx: i,
    filter: filter
  })), q && visibleCount === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 32px",
      border: "1px dashed var(--ink-400)",
      borderRadius: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--fg-2)",
      letterSpacing: "0.06em"
    }
  }, "No matches for \u201C", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, filter), "\u201D \u2014 we may still cover it. ", /*#__PURE__*/React.createElement("a", {
    href: rel + "/contact",
    style: {
      color: "var(--ignite-500)"
    }
  }, "Brief us"), " and we'll confirm in 48 hours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, "+ 170 ADDITIONAL METROS \xB7 ALASKA \xB7 HAWAII \xB7 PUERTO RICO"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 56,
      alignItems: "center"
    },
    className: "markets-cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "DON'T SEE YOUR MARKET"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(40px, 5.5vw, 84px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.92,
      textWrap: "balance"
    }
  }, "Brief us and we'll", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "confirm coverage"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "We staff 200+ metros and surge into the rest. If your market isn't listed, send us the brief \u2014 we'll come back inside 48 hours with a local crew, permits, and a quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AccentBtn, {
    accent: "spark",
    onClick: () => location.href = rel + "/contact"
  }, "Request staff now"), /*#__PURE__*/React.createElement("a", {
    href: rel + "/ignite-services",
    className: "link-mono",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "16px 20px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "See services \u2192"))), /*#__PURE__*/React.createElement(MarketsCoverageMap, null))));
};
Object.assign(window, {
  MarketsHub,
  MarketsHero,
  RegionCard
});
})();
