(function(){if (typeof window !== "undefined" && window.CitySEOSection) return;
/* global React */
/* ============================================================
   CITY SEO SECTION — reusable Webflow CMS template block.
   ------------------------------------------------------------
   Drop into any city page. Every field is CMS-bindable and the
   section degrades cleanly when fields are empty:
     - intro paragraph optional
     - activations / industries / nearby markets each hide their
       sub-band when the array is empty
     - FAQ band hides when fewer than 1 entry
     - CTA always renders (with safe defaults)

   Props (city):
     name           string  — "Reno"            (required)
     state          string  — "Nevada"          (optional)
     metro          string  — "Reno-Sparks"     (optional, fallbacks to name)
     intro          string  — local paragraph   (optional)
     activations    string[]                    (optional)
     industries     string[]                    (optional)
     nearbyMarkets  Array<string | {name, miles}> (optional)
     faqs           Array<{q,a}>                (optional, max 3 shown)
     cta            { eyebrow, heading, body, primaryLabel, primaryHref,
                      secondaryLabel, secondaryHref }   (optional)
     lastUpdated    string  — "May 2026"        (optional)
   ============================================================ */

const CITY_FALLBACK_CTA = {
  eyebrow: "READY WHEN YOU ARE",
  heading: "Let's run something here.",
  body: "Brief us on the program. Single-night activation through national tour — we'll scope it to fit.",
  primaryLabel: "Start a brief",
  primaryHref: "https://igniteproductions.co/contact?urgent=1",
  secondaryLabel: "See the work",
  secondaryHref: "https://igniteproductions.co/work"
};
const US_STATE_ABBR = {
  "Alabama": "AL",
  "Alaska": "AK",
  "Arizona": "AZ",
  "Arkansas": "AR",
  "California": "CA",
  "Colorado": "CO",
  "Connecticut": "CT",
  "Delaware": "DE",
  "Florida": "FL",
  "Georgia": "GA",
  "Hawaii": "HI",
  "Idaho": "ID",
  "Illinois": "IL",
  "Indiana": "IN",
  "Iowa": "IA",
  "Kansas": "KS",
  "Kentucky": "KY",
  "Louisiana": "LA",
  "Maine": "ME",
  "Maryland": "MD",
  "Massachusetts": "MA",
  "Michigan": "MI",
  "Minnesota": "MN",
  "Mississippi": "MS",
  "Missouri": "MO",
  "Montana": "MT",
  "Nebraska": "NE",
  "Nevada": "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  "Ohio": "OH",
  "Oklahoma": "OK",
  "Oregon": "OR",
  "Pennsylvania": "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  "Tennessee": "TN",
  "Texas": "TX",
  "Utah": "UT",
  "Vermont": "VT",
  "Virginia": "VA",
  "Washington": "WA",
  "West Virginia": "WV",
  "Wisconsin": "WI",
  "Wyoming": "WY",
  "District of Columbia": "DC",
  "Puerto Rico": "PR"
};
const stateAbbr = s => {
  if (!s) return "";
  const trim = String(s).trim();
  if (trim.length === 2 && /^[A-Za-z]{2}$/.test(trim)) return trim.toUpperCase();
  return US_STATE_ABBR[trim] || ""; // empty string = render nothing for regional labels
};
const isNonEmpty = v => Array.isArray(v) ? v.length > 0 : v != null && String(v).trim() !== "";

/* ---------- Tactical grid background (matches Ignite vocab) ---------- */
const CityGridBg = ({
  opacity = 0.05,
  animated = false
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," + "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    opacity,
    maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
    animation: animated ? "city-grid-drift 28s linear infinite" : undefined
  }
}), animated && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(ellipse 36% 50% at 20% 30%, rgba(255,90,31,0.16), transparent 60%)",
    animation: "city-glow-a 14s ease-in-out infinite",
    mixBlendMode: "screen"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(ellipse 30% 40% at 80% 70%, rgba(255,182,39,0.12), transparent 60%)",
    animation: "city-glow-b 18s ease-in-out infinite",
    mixBlendMode: "screen"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1,
    pointerEvents: "none",
    background: "linear-gradient(90deg, transparent, var(--ignite-500), transparent)",
    opacity: 0.5,
    animation: "city-scan 7s linear infinite"
  }
})));

/* ---------- INTRO BAND ---------- */
const CITY_INTRO_KEYFRAMES = `
@keyframes city-intro-rise {
  0%   { opacity: 0; transform: translateY(14px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes city-intro-line {
  0%   { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
@keyframes city-intro-blink {
  0%, 60%, 100% { opacity: 1; }
  70%, 80%      { opacity: 0.2; }
}
@keyframes city-intro-glow {
  0%   { text-shadow: 0 0 0 rgba(255,90,31,0); }
  60%  { text-shadow: 0 0 28px rgba(255,90,31,0.55); }
  100% { text-shadow: 0 0 12px rgba(255,90,31,0.25); }
}
@keyframes city-grid-drift {
  0%   { background-position: 0 0, 0 0; }
  100% { background-position: 48px 48px, 48px 48px; }
}
@keyframes city-glow-a {
  0%, 100% { transform: translate(0,0); opacity: 0.9; }
  50%      { transform: translate(40px,-20px); opacity: 0.5; }
}
@keyframes city-glow-b {
  0%, 100% { transform: translate(0,0); opacity: 0.7; }
  50%      { transform: translate(-30px,15px); opacity: 1; }
}
@keyframes city-scan {
  0%   { transform: translateY(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
@keyframes city-ghost-pan {
  0%, 100% { transform: translate(0,0); }
  50%      { transform: translate(-30px, 8px); }
}
.city-intro-cell {
  opacity: 0;
  animation: city-intro-rise 700ms var(--ease-out) forwards;
}
@media (prefers-reduced-motion: reduce) {
  .city-intro-cell { animation: none; opacity: 1; }
  [data-city-anim] { animation: none !important; }
}
`;
const CitySeoIntro = ({
  city
}) => {
  const region = city.state ? `${city.name}, ${city.state}` : city.name;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "140px 0 90px",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, CITY_INTRO_KEYFRAMES), /*#__PURE__*/React.createElement(CityGridBg, {
    animated: true
  }), (() => {
    const n = (city.name || "").toUpperCase();
    const vbW = Math.max(n.length, 4) * 62;
    return /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      "data-city-anim": true,
      viewBox: `0 0 ${vbW} 110`,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        position: "absolute",
        right: 0,
        top: "-1.5%",
        width: "94vw",
        height: "auto",
        maxHeight: "62%",
        pointerEvents: "none",
        userSelect: "none",
        animation: "city-ghost-pan 22s ease-in-out infinite",
        overflow: "visible"
      }
    }, /*#__PURE__*/React.createElement("text", {
      x: "50%",
      y: "92",
      textAnchor: "middle",
      fontSize: "100",
      fill: "rgba(255,255,255,0.035)",
      textLength: vbW - 6,
      lengthAdjust: "spacingAndGlyphs",
      style: {
        fontFamily: "var(--font-stencil)"
      }
    }, n));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "city-intro-cell",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
      animationDelay: "60ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "var(--ignite-500)",
      boxShadow: "0 0 8px var(--ignite-500)",
      animation: "city-intro-blink 2.4s var(--ease-out) infinite"
    }
  }), ">> ", "LOCAL MARKET \xB7 ", region.toUpperCase())), (() => {
    const nameLen = (city.name || "").length;
    const stateLen = city.state ? 5 : 1; // "/ XX." or "."
    const longestLine = Math.max(17, 3 + nameLen + stateLen);
    const fontCap = Math.min(168, Math.floor(168 * 17 / longestLine));
    const vwMax = (9.5 * 17 / longestLine).toFixed(2);
    const baseMin = longestLine > 22 ? 44 : longestLine > 19 ? 52 : 64;
    return /*#__PURE__*/React.createElement("h2", {
      className: "city-intro-cell",
      style: {
        marginTop: 22,
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: `clamp(${baseMin}px, ${vwMax}vw, ${fontCap}px)`,
        letterSpacing: "-0.045em",
        lineHeight: 0.88,
        maxWidth: 1300,
        textWrap: "balance",
        animationDelay: "180ms"
      }
    }, "Brand activations", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap"
      }
    }, "in ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic",
        color: "var(--ignite-500)",
        animation: "city-intro-glow 1600ms var(--ease-out) 600ms both",
        display: "inline-block"
      }
    }, city.name), stateAbbr(city.state) && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-3)",
        fontWeight: 500,
        fontStyle: "normal",
        fontSize: "0.4em",
        letterSpacing: "-0.01em",
        verticalAlign: "0.65em",
        marginLeft: 18
      }
    }, "/ ", stateAbbr(city.state)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ignite-500)"
      }
    }, ".")));
  })(), /*#__PURE__*/React.createElement("p", {
    className: "city-intro-cell",
    style: {
      marginTop: 36,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(20px, 2.1vw, 28px)",
      lineHeight: 1.35,
      letterSpacing: "-0.015em",
      color: "rgba(255,255,255,0.92)",
      maxWidth: 880,
      textWrap: "pretty",
      animationDelay: "340ms",
      position: "relative"
    }
  }, isNonEmpty(city.intro) ? city.intro : `Ignite Productions supports brand activations, event staffing, product sampling, experiential marketing, mobile tours, and trade show programs in ${city.state ? city.name + ", " + city.state : city.name}. Our team helps brands plan, staff, execute, and report on single-market and multi-market campaigns.`), /*#__PURE__*/React.createElement("div", {
    className: "city-intro-cell",
    style: {
      marginTop: 32,
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "center",
      animationDelay: "420ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: city.cta && city.cta.primaryHref || "https://igniteproductions.co/contact?urgent=1",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "16px 24px",
      borderRadius: 999,
      background: "var(--ignite-500)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15.5,
      letterSpacing: "-0.01em",
      textDecoration: "none",
      boxShadow: "0 12px 32px rgba(255,90,31,0.35)",
      transition: "transform 200ms, box-shadow 200ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 20px 48px rgba(255,90,31,0.5)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,90,31,0.35)";
    }
  }, "Brief us on ", city.name, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 0,
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      overflow: "hidden",
      background: "rgba(17,19,23,0.85)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }
  }, (city.generic ? [["COVERAGE", "Nationwide", "all 50 states"], ["RUSH WINDOW", city.rushWindow || "48 HR", "brief to boots"], ["BENCH", "12,000+", "ambassadors active"], ["MARKETS", "200+", "named metros"]] : [["AMBASSADORS", city.ambassadors || "1,200+", "in-market"], ["RUSH WINDOW", city.rushWindow || "48 HR", "brief to boots"], ["YEARS ACTIVE", city.yearsActive || "Since 2018", "in this metro"], ["COVERAGE", city.coverageNote || "Full metro", "+ surrounding"]]).map(([k, v, sub], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "city-intro-cell",
    style: {
      padding: "22px 24px",
      borderRight: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
      animationDelay: 480 + i * 90 + "ms",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent, var(--ignite-500), transparent)",
      transform: "scaleX(0)",
      transformOrigin: "left",
      animation: `city-intro-line 900ms var(--ease-out) ${600 + i * 90}ms both`,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 8
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: "-0.02em",
      color: "var(--fg-1)"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--fg-3)",
      marginTop: 4
    }
  }, sub))))));
};

/* ---------- ACTIVATION TYPES ---------- */
const CitySeoActivations = ({
  city
}) => {
  if (!isNonEmpty(city.activations)) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", "WHAT WE RUN HERE"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.94
    }
  }, "Activation", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#FFB627"
    }
  }, "types.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      maxWidth: 360
    }
  }, "The lanes we book most often in ", city.name, ". We run others too \u2014 brief us if you don't see yours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 10
    }
  }, city.activations.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a + i,
    style: {
      padding: "18px 20px",
      background: "var(--ink-200)",
      border: "1px solid var(--ink-400)",
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ignite-500)",
      letterSpacing: "0.1em"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: "-0.005em",
      color: "var(--fg-1)"
    }
  }, a)))))));
};

/* ---------- "SERVICES WE RUN IN THIS MARKET" ----------
   Default catalog of the 10 Ignite service lanes. CMS can:
     - omit city.services entirely → render all 10 defaults
     - pass city.services = ["event-staffing","sampling",...] (slug filter)
     - pass city.services = [{slug,title,desc,href}, ...] (full override)
   --------------------------------------------------------------- */
const DEFAULT_SERVICES = [{
  slug: "event-staffing",
  title: "Event Staffing",
  desc: "Vetted field teams for festivals, trade shows, retail programs, nightlife, and private events.",
  href: "../Ignite Services.html#event-staffing"
}, {
  slug: "brand-ambassadors",
  title: "Brand Ambassadors",
  desc: "Trained ambassadors who represent your brand, capture leads, distribute samples, and drive guest interaction.",
  href: "../Ignite Brand Ambassadors.html"
}, {
  slug: "product-sampling",
  title: "Product Sampling",
  desc: "Compliant, high-volume sampling teams for CPG, beverage, food, wellness, and lifestyle brands.",
  href: "../Ignite Services.html#product-sampling"
}, {
  slug: "experiential-marketing",
  title: "Experiential Marketing",
  desc: "Pop-ups, launch events, mobile activations, street teams, and brand experiences built for attention.",
  href: "../Ignite Services.html#experiential-marketing"
}, {
  slug: "mobile-tours",
  title: "Mobile Tours",
  desc: "Route planning, staffing, logistics, and market support for regional or national mobile campaigns.",
  href: "../Ignite Services.html#mobile-tours"
}, {
  slug: "trade-shows",
  title: "Trade Shows",
  desc: "Booth staff, lead capture, demo support, hospitality teams, and post-show reporting.",
  href: "../Trade Show Staffing.html"
}, {
  slug: "custom-fabrication",
  title: "Custom Fabrication",
  desc: "Branded displays, photo moments, sampling carts, event assets, and activation builds.",
  href: "../Ignite Services.html#fabrication-builds"
}, {
  slug: "promotional-products",
  title: "Promotional Products",
  desc: "Sourcing, kitting, shipping, and on-site distribution for branded merchandise.",
  href: "../Ignite Services.html#promotional-products"
}, {
  slug: "spark-reporting",
  title: "Spark Reporting",
  desc: "Field recaps, photos, attendance notes, lead capture, and activation reporting.",
  href: "../Ignite Spark.html"
}, {
  slug: "logistics-permitting",
  title: "Logistics & Permitting",
  desc: "Local planning support for venues, public spaces, routes, permits, and production details.",
  href: "../Ignite Services.html#logistics"
}];
const resolveServices = input => {
  if (!Array.isArray(input) || input.length === 0) return DEFAULT_SERVICES;
  const bySlug = Object.fromEntries(DEFAULT_SERVICES.map(s => [s.slug, s]));
  const out = [];
  for (const item of input) {
    if (typeof item === "string") {
      if (bySlug[item]) out.push(bySlug[item]);
    } else if (item && item.slug) {
      out.push({
        ...(bySlug[item.slug] || {}),
        ...item
      });
    } else if (item && item.title) {
      out.push(item);
    }
  }
  return out.filter(s => isNonEmpty(s?.title));
};
const CitySeoServices = ({
  city
}) => {
  const services = resolveServices(city.services);
  if (services.length === 0) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "100px 0",
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(CityGridBg, {
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 32,
      flexWrap: "wrap",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", "SERVICES IN MARKET"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(32px, 4vw, 56px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.98,
      textWrap: "balance"
    }
  }, "What Ignite runs in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, city.name), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      textWrap: "pretty"
    }
  }, "From one-day street teams to multi-market rollouts, Ignite supports the same core service lanes in ", city.name, " that we execute nationwide.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      padding: "6px 10px",
      border: "1px solid var(--ink-400)",
      borderRadius: 4,
      whiteSpace: "nowrap"
    }
  }, String(services.length).padStart(2, "0"), " LANES")), /*#__PURE__*/React.createElement("div", {
    className: "city-services-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 12
    }
  }, services.map((s, i) => {
    const Card = s.href ? "a" : "div";
    return /*#__PURE__*/React.createElement(Card, {
      key: s.slug || s.title,
      href: s.href || undefined,
      style: {
        display: "block",
        textDecoration: "none",
        color: "inherit",
        position: "relative",
        padding: "22px 22px 20px",
        background: "var(--ink-100)",
        border: "1px solid var(--ink-400)",
        borderRadius: 12,
        transition: "border-color 160ms var(--ease-out), background 160ms var(--ease-out), transform 160ms var(--ease-out)"
      },
      onMouseEnter: e => {
        if (!s.href) return;
        e.currentTarget.style.borderColor = "var(--ignite-500)";
        e.currentTarget.style.background = "rgba(255,90,31,0.04)";
        const ar = e.currentTarget.querySelector("[data-arrow]");
        if (ar) {
          ar.style.color = "var(--ignite-500)";
          ar.style.transform = "translateX(4px)";
        }
      },
      onMouseLeave: e => {
        if (!s.href) return;
        e.currentTarget.style.borderColor = "var(--ink-400)";
        e.currentTarget.style.background = "var(--ink-100)";
        const ar = e.currentTarget.querySelector("[data-arrow]");
        if (ar) {
          ar.style.color = "var(--fg-3)";
          ar.style.transform = "none";
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 12,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.18em",
        color: "var(--ignite-500)"
      }
    }, String(i + 1).padStart(2, "0")), s.href && /*#__PURE__*/React.createElement("span", {
      "data-arrow": true,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--fg-3)",
        transition: "transform 160ms var(--ease-out), color 160ms var(--ease-out)"
      }
    }, "\u2192")), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: "-0.015em",
        color: "var(--fg-1)",
        marginBottom: 8
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.55,
        color: "var(--fg-2)",
        margin: 0
      }
    }, s.desc));
  }))));
};

/* ---------- INDUSTRIES + NEARBY MARKETS (paired band) ---------- */
const CitySeoIndustriesMarkets = ({
  city
}) => {
  const hasInd = isNonEmpty(city.industries);
  const hasMkt = isNonEmpty(city.nearbyMarkets);
  if (!hasInd && !hasMkt) return null;

  // Normalize nearby markets to {name, miles?}
  const markets = (city.nearbyMarkets || []).map(m => typeof m === "string" ? {
    name: m
  } : m);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--ink-000)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: hasInd && hasMkt ? "1fr 1fr" : "1fr",
      gap: 64
    }
  }, hasInd && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", "INDUSTRIES SERVED"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3.2vw, 42px)",
      letterSpacing: "-0.025em",
      lineHeight: 1
    }
  }, "Categories we book in", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, city.name), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, city.industries.map((ind, i) => /*#__PURE__*/React.createElement("span", {
    key: ind + i,
    style: {
      padding: "8px 14px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--ink-400)",
      borderRadius: 999,
      fontFamily: "var(--font-display)",
      fontSize: 13.5,
      fontWeight: 500,
      letterSpacing: "-0.005em",
      color: "var(--fg-1)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: "var(--ignite-500)"
    }
  }), ind)))), hasMkt && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "#FFB627"
    }
  }, ">> ", "NEARBY MARKETS \xB7 SURGE"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3.2vw, 42px)",
      letterSpacing: "-0.025em",
      lineHeight: 1
    }
  }, "Within reach of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#FFB627"
    }
  }, city.name), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "1fr",
      border: "1px solid var(--ink-400)",
      borderRadius: 10,
      overflow: "hidden",
      background: "var(--ink-100)"
    }
  }, markets.map((m, i, arr) => {
    const slug = (window.NAME_TO_SLUG || {})[String(m.name).toLowerCase().trim()];
    const href = slug ? window.CITY_URL && window.CITY_URL(slug) || "/cities/" + slug : null;
    const Tag = href ? "a" : "div";
    return /*#__PURE__*/React.createElement(Tag, {
      key: m.name + i,
      href: href || undefined,
      className: href ? "city-nearby-link" : undefined,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 18px",
        borderBottom: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
        fontFamily: "var(--font-display)",
        fontSize: 15,
        fontWeight: 500,
        color: "var(--fg-1)",
        textDecoration: "none",
        transition: "background 160ms, color 160ms",
        cursor: href ? "pointer" : "default"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#FFB627",
        fontFamily: "var(--font-mono)",
        fontSize: 12
      }
    }, "\u2192"), m.name, href && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#FFB627",
        fontSize: 10,
        marginLeft: 4,
        opacity: 0.75
      }
    }, "\u2197")), m.miles && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--fg-3)"
      }
    }, m.miles, " MI"));
  }))))));
};

/* ---------- FAQ (max 3) ---------- */
const CitySeoFaqs = ({
  city
}) => {
  // Strict completeness: both question AND answer must be non-empty.
  const faqs = (city.faqs || []).filter(f => f && isNonEmpty(f.q) && isNonEmpty(f.a)).slice(0, 3);
  const [open, setOpen] = React.useState(0);
  if (faqs.length === 0) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--paper-000)",
      color: "var(--fg-1-inv)",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", city.name.toUpperCase(), " \xB7 FAQ"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(38px, 4.6vw, 64px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.96,
      color: "#0A0B0D"
    }
  }, "Quick", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "answers"), /*#__PURE__*/React.createElement("br", null), "for ", city.name, "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "#3A4050"
    }
  }, "The three questions we get most for this market.")), /*#__PURE__*/React.createElement("div", null, faqs.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: f.q + i,
      style: {
        borderTop: i === 0 ? "1px solid var(--paper-200)" : "none",
        borderBottom: "1px solid var(--paper-200)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        padding: "24px 0",
        background: "none",
        border: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        textAlign: "left",
        color: "#0A0B0D",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 19,
        letterSpacing: "-0.015em",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 16,
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.14em",
        color: "var(--ignite-500)"
      }
    }, String(i + 1).padStart(2, "0")), f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ignite-500)",
        fontSize: 22,
        flexShrink: 0,
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "transform 200ms"
      }
    }, "+")), isOpen && isNonEmpty(f.a) && /*#__PURE__*/React.createElement("p", {
      style: {
        paddingBottom: 24,
        paddingLeft: 36,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "#3A4050",
        margin: 0,
        maxWidth: 700
      }
    }, f.a));
  })))));
};

/* ---------- CTA ---------- */
const CitySeoCta = ({
  city
}) => {
  const cta = {
    ...CITY_FALLBACK_CTA,
    ...(city.cta || {})
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "120px 0",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(CityGridBg, {
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(255,90,31,0.18), transparent 60%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", cta.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(48px, 6.5vw, 108px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.9,
      textWrap: "balance"
    }
  }, cta.heading.replace(/\{city\}/g, city.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 540
    }
  }, cta.body.replace(/\{city\}/g, city.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: cta.primaryHref,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      padding: "14px 22px",
      borderRadius: 10,
      cursor: "pointer",
      background: "var(--ignite-500)",
      color: "#fff",
      boxShadow: "0 0 0 1px rgba(255,90,31,0.3), 0 8px 32px rgba(255,90,31,0.25)",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, cta.primaryLabel, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), cta.secondaryLabel && /*#__PURE__*/React.createElement("a", {
    href: cta.secondaryHref || "#",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      padding: "14px 22px",
      borderRadius: 10,
      cursor: "pointer",
      background: "transparent",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, cta.secondaryLabel, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--fg-3)"
    }
  }, "\u2192")))), (() => {
    const n = (city.name || "").toUpperCase();
    const sa = stateAbbr(city.state) || "";
    const vbW = Math.max(n.length, 4) * 62;
    return /*#__PURE__*/React.createElement("svg", {
      "data-city-anim": true,
      viewBox: `0 0 ${vbW} ${sa ? 175 : 110}`,
      preserveAspectRatio: "xMaxYMid meet",
      style: {
        display: "block",
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        opacity: 0.92,
        userSelect: "none",
        animation: "city-ghost-pan 22s ease-in-out infinite",
        filter: "drop-shadow(0 0 60px rgba(255,90,31,0.18))"
      }
    }, /*#__PURE__*/React.createElement("text", {
      x: "100%",
      y: "92",
      textAnchor: "end",
      fontSize: "100",
      fill: "var(--ink-300)",
      textLength: vbW - 6,
      lengthAdjust: "spacingAndGlyphs",
      style: {
        fontFamily: "var(--font-stencil)"
      }
    }, n), sa && /*#__PURE__*/React.createElement("text", {
      x: "100%",
      y: "168",
      textAnchor: "end",
      fontSize: "62",
      fill: "var(--ignite-500)",
      fillOpacity: "0.65",
      style: {
        fontFamily: "var(--font-stencil)"
      }
    }, sa));
  })()));
};

/* ---------- VENUES / ANCHORS ---------- */
const CitySeoVenues = ({
  city
}) => {
  const venues = (city.venues || []).filter(Boolean);
  if (venues.length === 0) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", "VENUES & ANCHORS"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(32px, 4vw, 56px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.96
    }
  }, "Where we\u2019ve ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "worked"), " in", /*#__PURE__*/React.createElement("br", null), city.name, ".")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, venues.length, " NAMED VENUES")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 0,
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      overflow: "hidden",
      background: "var(--ink-000)"
    }
  }, venues.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v + i,
    style: {
      padding: "18px 20px",
      borderRight: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--fg-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--ignite-500)",
      letterSpacing: "0.14em"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, "+ ROOFTOPS, POP-UP SITES, AND PRIVATE PROPERTIES ON REQUEST")));
};

/* ---------- COMPOSED SECTION ---------- */
const CitySEOSection = ({
  city
}) => {
  if (!city || !isNonEmpty(city.name)) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CitySeoIntro, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoServices, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoVenues, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoIndustriesMarkets, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoFaqs, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoCta, {
    city: city
  }));
};
Object.assign(window, {
  CitySEOSection,
  CitySeoIntro,
  CitySeoActivations,
  CitySeoServices,
  CitySeoVenues,
  CitySeoIndustriesMarkets,
  CitySeoFaqs,
  CitySeoCta,
  DEFAULT_SERVICES
});
})();
