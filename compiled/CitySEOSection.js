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
  primaryHref: "contact.html",
  secondaryLabel: "See the work",
  secondaryHref: "work.html"
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
  if (!s) return "USA";
  const trim = String(s).trim();
  if (trim.length === 2) return trim.toUpperCase();
  return US_STATE_ABBR[trim] || trim.slice(0, 2).toUpperCase();
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
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    "data-city-anim": true,
    style: {
      position: "absolute",
      right: "-3%",
      top: "-2%",
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(180px, 28vw, 460px)",
      lineHeight: 0.85,
      letterSpacing: "-0.04em",
      color: "rgba(255,255,255,0.025)",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      pointerEvents: "none",
      userSelect: "none",
      animation: "city-ghost-pan 22s ease-in-out infinite"
    }
  }, city.name), /*#__PURE__*/React.createElement("div", {
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
  }), ">> ", "LOCAL MARKET \xB7 ", region.toUpperCase())), /*#__PURE__*/React.createElement("h2", {
    className: "city-intro-cell",
    style: {
      marginTop: 22,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(64px, 9.5vw, 168px)",
      letterSpacing: "-0.045em",
      lineHeight: 0.88,
      maxWidth: 1300,
      textWrap: "balance",
      animationDelay: "180ms"
    }
  }, "Brand activations", /*#__PURE__*/React.createElement("br", null), "in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)",
      animation: "city-intro-glow 1600ms var(--ease-out) 600ms both",
      display: "inline-block"
    }
  }, city.name), city.state && /*#__PURE__*/React.createElement("span", {
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
  }, ".")), /*#__PURE__*/React.createElement("p", {
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
  }, isNonEmpty(city.intro) ? city.intro : cityFallbackIntro(city)), /*#__PURE__*/React.createElement("div", {
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
  }, [["AMBASSADORS", city.ambassadors || "1,200+", "in-market"], ["RUSH WINDOW", "48 HR", "brief to boots"], ["YEARS ACTIVE", city.yearsActive || "Since 2018", "in this metro"], ["COVERAGE", city.coverageNote || "Full metro", "+ surrounding"]].map(([k, v, sub], i, arr) => /*#__PURE__*/React.createElement("div", {
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
  const activations = isNonEmpty(city.activations) ? city.activations : CITY_DEFAULT_ACTIVATIONS;
  if (activations.length === 0) return null;
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
  }, activations.map((a, i) => /*#__PURE__*/React.createElement("div", {
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
  href: "/services/event-staffing"
}, {
  slug: "brand-ambassadors",
  title: "Brand Ambassadors",
  desc: "Trained ambassadors who represent your brand, capture leads, distribute samples, and drive guest interaction.",
  href: "/ignite-services"
}, {
  slug: "product-sampling",
  title: "Product Sampling",
  desc: "Compliant, high-volume sampling teams for CPG, beverage, food, wellness, and lifestyle brands.",
  href: "/services/product-sampling"
}, {
  slug: "experiential-marketing",
  title: "Experiential Marketing",
  desc: "Pop-ups, launch events, mobile activations, street teams, and brand experiences built for attention.",
  href: "/services/experiential-marketing"
}, {
  slug: "mobile-tours",
  title: "Mobile Tours",
  desc: "Route planning, staffing, logistics, and market support for regional or national mobile campaigns.",
  href: "/services/mobile-tours"
}, {
  slug: "trade-shows",
  title: "Trade Shows",
  desc: "Booth staff, lead capture, demo support, hospitality teams, and post-show reporting.",
  href: "/services/trade-shows"
}, {
  slug: "custom-fabrication",
  title: "Custom Fabrication",
  desc: "Branded displays, photo moments, sampling carts, event assets, and activation builds.",
  href: "/services/fabrication-builds"
}, {
  slug: "promotional-products",
  title: "Promotional Products",
  desc: "Sourcing, kitting, shipping, and on-site distribution for branded merchandise.",
  href: "/services/promotional-products"
}, {
  slug: "spark-reporting",
  title: "Spark Reporting",
  desc: "Field recaps, photos, attendance notes, lead capture, and activation reporting.",
  href: "/spark"
}, {
  slug: "logistics-permitting",
  title: "Logistics & Permitting",
  desc: "Local planning support for venues, public spaces, routes, permits, and production details.",
  href: "/ignite-services"
}];

/* ---------- DEFAULT FALLBACKS (per spec) ---------- */
const CITY_DEFAULT_ACTIVATIONS = ["Event staffing", "Brand ambassador programs", "Product sampling", "Retail activations", "Mobile tours", "Trade shows", "Pop-ups", "Street teams"];
const cityFallbackIntro = city => {
  const region = city.state ? city.name + ", " + city.state : city.name;
  return "Ignite Productions supports brand activations, event staffing, product sampling, and experiential marketing programs in " + region + ". Our teams help brands plan, staff, execute, and report on local and multi-market campaigns.";
};
const cityFallbackFaqs = city => [{
  q: "Do you staff activations in " + city.name + "?",
  a: "Yes. We staff brand ambassadors, sampling teams, demo specialists, and event support in " + city.name + " and the surrounding metro for one-day activations through multi-month programs."
}, {
  q: "How fast can you book a program in " + city.name + "?",
  a: "Our rush window is 48 hours from brief to boots on the ground for in-market staffing. Larger fabrication or multi-market builds typically need a longer lead time — brief us and we'll scope it."
}, {
  q: "What kinds of brands do you run in " + city.name + "?",
  a: "CPG (beverage, food, wellness), tech, automotive, hospitality, beauty, and B2B/industrial. The same Ignite playbook we run nationally — adapted to the " + city.name + " market."
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
  }, "What Ignite runs in ", /*#__PURE__*/React.createElement("span", {
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
  }, "Categories we book in ", /*#__PURE__*/React.createElement("span", {
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
  }, "Within reach of ", /*#__PURE__*/React.createElement("span", {
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
  }, markets.map((m, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: m.name + i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px",
      borderBottom: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--fg-1)"
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
  }, "\u2192"), m.name), m.miles && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, m.miles, " MI"))))))));
};

/* ---------- FAQ (max 3) ---------- */
const CitySeoFaqs = ({
  city
}) => {
  const source = isNonEmpty(city.faqs) ? city.faqs : cityFallbackFaqs(city);
  const faqs = source.filter(f => isNonEmpty(f?.q)).slice(0, 3);
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
      lineHeight: 0.96
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
      color: "var(--fg-2-inv)"
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
        color: "inherit",
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
        color: "var(--fg-2-inv)",
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
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    "data-city-anim": true,
    style: {
      textAlign: "right",
      fontFamily: "var(--font-stencil)",
      color: "var(--ink-300)",
      fontSize: "clamp(96px, 14vw, 240px)",
      lineHeight: 0.85,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      textShadow: "0 0 60px rgba(255,90,31,0.18)",
      opacity: 0.92,
      userSelect: "none",
      animation: "city-ghost-pan 22s ease-in-out infinite"
    }
  }, city.name, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      opacity: 0.65
    }
  }, stateAbbr(city.state)))));
};

/* ---------- JSON-LD generators ---------- */
const SITE_ORIGIN = "https://www.igniteproductions.co";
const citySlug = city => (city.slug || city.name).toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const cityCanonical = city => SITE_ORIGIN + "/cities/" + citySlug(city);
const buildCityJsonLd = city => {
  if (!city || !isNonEmpty(city.name)) return [];
  const region = city.state ? city.name + ", " + city.state : city.name;
  const canonical = city.canonical || cityCanonical(city);
  const services = resolveServices(city.services).map(s => s.title);
  const faqs = (isNonEmpty(city.faqs) ? city.faqs : cityFallbackFaqs(city)).filter(f => isNonEmpty(f?.q) && isNonEmpty(f?.a)).slice(0, 3);
  const docs = [];
  // Service schema
  docs.push({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": canonical + "#service",
    name: "Field marketing & event staffing in " + region,
    serviceType: "Field marketing, event staffing, brand activations",
    provider: {
      "@type": "Organization",
      name: "Ignite Productions LLC",
      url: SITE_ORIGIN
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      ...(city.state ? {
        containedInPlace: {
          "@type": "State",
          name: city.state
        }
      } : {})
    },
    url: canonical,
    description: isNonEmpty(city.intro) ? city.intro : cityFallbackIntro(city),
    ...(services.length ? {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services in " + city.name,
        itemListElement: services.map((t, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: t
          }
        }))
      }
    } : {})
  });
  // FAQPage schema
  if (faqs.length > 0) {
    docs.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": canonical + "#faq",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a
        }
      }))
    });
  }
  // BreadcrumbList schema
  docs.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": canonical + "#breadcrumb",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_ORIGIN + "/"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Cities",
      item: SITE_ORIGIN + "/cities"
    }, {
      "@type": "ListItem",
      position: 3,
      name: region,
      item: canonical
    }]
  });
  return docs;
};

/* Mount the JSON-LD into <head> once per city. Idempotent: removes any
   previously-injected city-seo blocks before adding new ones. Safe to call
   multiple times. */
const injectCityJsonLd = city => {
  if (typeof document === "undefined") return;
  const head = document.head;
  if (!head) return;
  // Remove prior city-seo blocks (do not touch Webflow's Organization schema)
  Array.from(document.querySelectorAll('script[data-city-seo-jsonld]')).forEach(n => n.remove());
  buildCityJsonLd(city).forEach((doc, i) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-city-seo-jsonld", String(i));
    s.text = JSON.stringify(doc);
    head.appendChild(s);
  });
};
const CitySeoJsonLd = ({
  city
}) => {
  React.useEffect(() => {
    injectCityJsonLd(city);
  }, [city && city.name, city && city.state]);
  return null;
};

/* ---------- COMPOSED SECTION ---------- */
const CitySEOSection = ({
  city
}) => {
  if (!city || !isNonEmpty(city.name)) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CitySeoJsonLd, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoIntro, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoActivations, {
    city: city
  }), /*#__PURE__*/React.createElement(CitySeoServices, {
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
  CitySeoIndustriesMarkets,
  CitySeoFaqs,
  CitySeoCta,
  DEFAULT_SERVICES,
  CITY_DEFAULT_ACTIVATIONS,
  cityFallbackIntro,
  cityFallbackFaqs,
  buildCityJsonLd,
  injectCityJsonLd
});