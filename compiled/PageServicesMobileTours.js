(function(){if (typeof window !== "undefined" && window.PageServicesMobileTours) return;
/* Auto-extracted from the design project's pages/services-mobile-tours.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-mobile-tours")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-mobile-tours";
  s.textContent = ":root { --mt-ink:#0A0B0D; --mt-amber:#4FB58A; --mt-orange:#D7453E; --mt-cyan:#3DC9C0; }\n  body { background:#0A0B0D; }\n  @keyframes mt-rise{0%{opacity:0;transform:translateY(26px)}100%{opacity:1;transform:translateY(0)}}\n  @keyframes mt-pulse{0%,100%{opacity:1}50%{opacity:.3}}\n  @keyframes mt-scan{0%{transform:translateY(-100vh)}100%{transform:translateY(100vh)}}\n  @keyframes mt-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\n  @keyframes mt-dash{to{stroke-dashoffset:-1000}}\n  @keyframes mt-ping{0%{transform:scale(.5);opacity:.9}100%{transform:scale(3);opacity:0}}\n  @keyframes mt-blob{0%,100%{transform:translate(-4%,-3%) scale(1)}50%{transform:translate(6%,5%) scale(1.15)}}\n  .mt-rise{animation:mt-rise 800ms cubic-bezier(.16,.84,.3,1) both}\n  .mt-marq-track{display:inline-flex;gap:40px;padding-right:40px;white-space:nowrap;animation:mt-marq 32s linear infinite}\n  .mt-reveal{opacity:0;transform:translateY(26px);transition:opacity 760ms cubic-bezier(.16,.84,.3,1),transform 760ms cubic-bezier(.16,.84,.3,1)}\n  .mt-reveal.in{opacity:1;transform:none}\n  @media (prefers-reduced-motion:reduce){[class*=\"mt-\"]{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}}\n  @media (max-width:920px){.mt-hero-grid{grid-template-columns:1fr!important}.mt-2col{grid-template-columns:1fr!important}.mt-vs{grid-template-columns:1fr!important}}";
  document.head.appendChild(s);
})();
const INK = "#0A0B0D",
  AMBER = "#4FB58A",
  ORANGE = "#D7453E",
  CYAN = "#3DC9C0";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".mt-reveal");
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
    color: color || AMBER,
    ...style
  }
}, children);

/* ---------- HERO — animated tour itinerary board ---------- */
const STOPS = [{
  c: "Los Angeles",
  s: "CA",
  d: "MAR 04"
}, {
  c: "Phoenix",
  s: "AZ",
  d: "MAR 07"
}, {
  c: "Denver",
  s: "CO",
  d: "MAR 11"
}, {
  c: "Dallas",
  s: "TX",
  d: "MAR 15"
}, {
  c: "Chicago",
  s: "IL",
  d: "MAR 19"
}, {
  c: "Atlanta",
  s: "GA",
  d: "MAR 23"
}, {
  c: "New York",
  s: "NY",
  d: "MAR 27"
}, {
  c: "Miami",
  s: "FL",
  d: "MAR 31"
}];
const RouteMap = () => {
  const [truck, setTruck] = React.useState(2);
  React.useEffect(() => {
    const id = setInterval(() => setTruck(t => (t + 1) % STOPS.length), 1600);
    return () => clearInterval(id);
  }, []);
  const pct = Math.round((truck + 1) / STOPS.length * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      overflow: "hidden",
      background: "#0C0E12",
      border: `1px solid ${AMBER}22`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: AMBER,
      boxShadow: `0 0 10px ${AMBER}`,
      animation: "mt-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER,
    style: {
      fontSize: 9
    }
  }, "LIVE TOUR ROUTE")), /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.5)",
    style: {
      fontSize: 9
    }
  }, "SPRING \xB7 8 MARKETS")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 999,
      background: "rgba(255,255,255,0.08)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: pct + "%",
      background: `linear-gradient(90deg,${ORANGE},${AMBER})`,
      borderRadius: 999,
      transition: "width 1.2s ease",
      boxShadow: `0 0 12px ${AMBER}88`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: "rgba(255,255,255,0.4)",
    style: {
      fontSize: 8
    }
  }, "ROUTE PROGRESS"), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER,
    style: {
      fontSize: 8
    }
  }, pct, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 10px 12px",
      display: "flex",
      flexDirection: "column",
      maxHeight: 300,
      overflowY: "hidden"
    }
  }, STOPS.map((s, i) => {
    const done = i < truck,
      active = i === truck;
    return /*#__PURE__*/React.createElement("div", {
      key: s.c,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 12,
        alignItems: "center",
        padding: "9px 8px",
        borderRadius: 9,
        background: active ? `${AMBER}14` : "transparent",
        border: active ? `1px solid ${AMBER}44` : "1px solid transparent",
        transition: "all 300ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 20,
        display: "grid",
        placeItems: "center"
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        width: 18,
        height: 18,
        borderRadius: 999,
        background: AMBER,
        opacity: 0.35,
        animation: "mt-ping 1.5s ease-out infinite"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: active ? 15 : 0,
        transition: "font-size 200ms"
      }
    }, active ? "🚚" : ""), !active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: done ? AMBER : "rgba(255,255,255,0.25)",
        boxShadow: done ? `0 0 6px ${AMBER}` : "none"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: active ? "#fff" : done ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, s.c, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "rgba(255,255,255,0.4)"
      }
    }, s.s))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: active ? AMBER : done ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)",
        whiteSpace: "nowrap"
      }
    }, active ? "ON SITE" : done ? "✓ DONE" : s.d));
  })), /*#__PURE__*/React.createElement("div", {
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
      fontSize: 8
    }
  }, "GPS-VERIFIED ROUTING"), /*#__PURE__*/React.createElement(Mono, {
    color: CYAN,
    style: {
      fontSize: 8
    }
  }, truck + 1, "/", STOPS.length, " MARKETS")));
};
const Hero = () => {
  const [imp, setImp] = React.useState(184210);
  React.useEffect(() => {
    const id = setInterval(() => setImp(v => v + Math.floor(Math.random() * 40)), 120);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Mobile Tours Hero",
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
      background: `radial-gradient(ellipse at center, ${AMBER}22, transparent 62%)`,
      filter: "blur(58px)",
      animation: "mt-blob 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${AMBER}66, transparent)`,
      animation: "mt-scan 8s linear infinite",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-rise",
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
      background: AMBER,
      boxShadow: `0 0 10px ${AMBER}`,
      animation: "mt-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    color: AMBER
  }, imp.toLocaleString(), " IMPRESSIONS \xB7 THIS TOUR"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: 52,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "mt-rise",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(46px,6.2vw,104px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.9,
      animationDelay: "120ms"
    }
  }, "Your brand,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "on the move.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-rise",
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
  }, "Ad trucks, sprinter vans, branded bikes, and transit takeovers, routed city to city and ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "GPS-tracked the whole way"), ". National reach, compressed into weeks of high-density execution."), /*#__PURE__*/React.createElement("div", {
    className: "mt-rise",
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
      background: AMBER,
      color: "#0b0905",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      textDecoration: "none",
      boxShadow: `0 12px 40px ${AMBER}44`
    }
  }, "Plan a tour ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#fleet",
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
  }, "See the fleet")), /*#__PURE__*/React.createElement("div", {
    className: "mt-rise",
    style: {
      marginTop: 30,
      display: "flex",
      gap: 26,
      flexWrap: "wrap",
      animationDelay: "460ms"
    }
  }, [["6", "vehicle classes"], ["50", "states routed"], ["GPS", "tracked stops"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: AMBER,
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
    className: "mt-rise",
    style: {
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, rgba(79,181,138,0.10), rgba(61,201,192,0.05))",
      border: `1px solid ${AMBER}33`,
      borderRadius: 20,
      padding: 12,
      boxShadow: `0 40px 100px rgba(0,0,0,0.5)`
    }
  }, /*#__PURE__*/React.createElement(RouteMap, null))))));
};
const Ticker = () => {
  const items = ["LED AD TRUCKS", "SPRINTER VANS", "BRANDED BIKES", "PEDICABS", "FOOD CARTS", "TRANSIT TAKEOVERS", "GPS ROUTING", "SAME-DAY DATA"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: AMBER,
      color: INK,
      padding: "15px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderBottom: `1px solid ${INK}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-marq-track"
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
  className: "mt-reveal"
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
}, "What is a mobile marketing tour?"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.82)"
  }
}, "A multi-market activation that uses ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "branded vehicles (ad trucks, sprinter vans, bikes, food carts)"), " to deliver brand experiences and sampling across cities on a routed schedule. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: AMBER
  }
}, "Ignite"), " owns the whole thing: fleet, wraps, permits, drivers, staffing, routing, and same-day Spark reporting. National reach compressed into weeks."))));

/* ---------- FLEET ---------- */
const FLEET = [["LED Ad Trucks", "Full-motion digital billboards on wheels: day-parted creative, dominant in dense urban corridors.", AMBER], ["Vinyl & 3D Wrap Trucks", "High-impact static or sculptural wraps that turn a box truck into a rolling landmark.", ORANGE], ["Sprinter Vans", "Sampling, lounge, or photo-experience builds: a branded room that pulls up anywhere.", CYAN], ["Pedicabs & E-Bikes", "Nimble, dense, and camera-friendly, perfect for festival perimeters and downtown grids.", AMBER], ["Food & Sample Carts", "Bike-mounted sampling that weaves through foot traffic where trucks can't go.", ORANGE], ["Transit Takeovers", "Wraps, station domination, and rideshare integrations for saturation in a single market.", CYAN]];
const Fleet = () => /*#__PURE__*/React.createElement("section", {
  id: "fleet",
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// THE FLEET"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Six ways to ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "roll up."))), /*#__PURE__*/React.createElement("div", {
  className: "mt-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
    gap: 14
  }
}, FLEET.map(([t, d, c], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "mt-reveal",
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

/* ---------- ROUTE TIMELINE ---------- */
const Route = () => {
  const steps = [["ROUTE", "Map", "We build the city-by-city route around your markets, moments, and budget."], ["WRAP", "Build", "Fleet wrapped, built, and outfitted: sampling rigs, LED, lounge, or photo."], ["ROLL", "Deploy", "Drivers + brand ambassadors staffed, permitted, and GPS-tracked market to market."], ["REPORT", "Measure", "Stops, impressions, samples, and leads on a live Spark dashboard, same day."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "118px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "mt-reveal",
    style: {
      maxWidth: 780,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: ORANGE
  }, "// MAP TO MEASURE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px,4.4vw,64px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "How a tour ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: AMBER
    }
  }, "rolls out."))), /*#__PURE__*/React.createElement("div", {
    className: "mt-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 14
    }
  }, steps.map(([h, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "mt-reveal",
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
      color: AMBER
    }
  }, h), /*#__PURE__*/React.createElement("div", {
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
};

/* ---------- VS ---------- */
const Versus = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "118px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal",
  style: {
    maxWidth: 800,
    marginBottom: 46
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// A ROUTED TOUR vs. A RENTED TRUCK"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Miles with a ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "point."))), /*#__PURE__*/React.createElement("div", {
  className: "mt-vs",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal",
  style: {
    padding: "32px 28px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.5)"
}, "A RENTED WRAPPED TRUCK"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Drives loops with no strategy", "No staff, no sampling, no capture", "\"It drove around\" with no proof", "You chase permits and drivers", "One market, one vehicle"].map(x => /*#__PURE__*/React.createElement("div", {
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
  className: "mt-reveal",
  style: {
    padding: "32px 28px",
    background: `linear-gradient(180deg, ${AMBER}14, rgba(255,255,255,0.02))`,
    border: `1px solid ${AMBER}55`,
    borderRadius: 16,
    transitionDelay: "80ms"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "IGNITE: A MANAGED TOUR"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, ["Routed around your markets + moments", "Staffed with brand ambassadors + sampling", "GPS-tracked, same-day impression data", "Permits, DOT, drivers, logistics: handled", "6-20 markets on one managed rollout"].map(x => /*#__PURE__*/React.createElement("div", {
  key: x,
  style: {
    display: "flex",
    gap: 11,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: AMBER,
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

/* ---------- SPARK ---------- */
const Spark = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "mt-2col",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal"
}, /*#__PURE__*/React.createElement(Mono, {
  color: "#D6F35F"
}, "// EVERY MILE, MEASURED"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(30px,4vw,58px)",
    letterSpacing: "-0.035em",
    lineHeight: 1.0
  }
}, "The tour, ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#D6F35F"
  }
}, "on a dashboard.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 16.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.74)"
  }
}, "Spark tracks every stop by GPS, counts samples and leads, logs dwell time, and reports day-parted impressions, so a tour isn't a vibe, it's a number you can put in the recap."), /*#__PURE__*/React.createElement("a", {
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
    color: "#D6F35F",
    textDecoration: "none"
  }
}, "Explore Spark \u2192")), /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  }
}, [["GPS", "every stop"], ["Day-parted", "impressions"], ["Samples", "+ leads"], ["Same-day", "recap"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "24px 20px",
    background: "rgba(214,243,95,0.06)",
    border: "1px solid rgba(214,243,95,0.25)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 22,
    color: "#D6F35F",
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
const FAQS = [["What is a mobile marketing tour?", "A multi-market activation using branded vehicles (ad trucks, vans, bikes, carts) to deliver experiences and sampling across cities on a routed schedule. National reach in weeks."], ["How are mobile tours tracked?", "GPS-verified routing, day-parted impression counts, and a Spark dashboard on stops, samples, leads, and dwell time, same day."], ["What vehicle types do you operate?", "Six classes: LED ad trucks, vinyl/3D-wrap trucks, sprinter vans, pedicab/e-bike fleets, and food-cart bikes, plus transit takeovers. Custom builds available."], ["How long does a tour run?", "From 2-week single-market activations to 12-month national rollouts. Most CPG tours run 4-12 weeks across 6-20 markets."], ["Do you handle permits and routing?", "Yes. Permitting, DOT compliance, driver staffing, hotel/per-diem logistics, and city-by-city routing all in-house."]];
const Faq = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E13",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-reveal",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    color: AMBER
  }, "// QUESTIONS BUYERS ASK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.03em"
    }
  }, "Straight answers.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-reveal"
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
      color: AMBER,
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
    background: AMBER,
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
  className: "mt-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// GOT MARKETS TO HIT?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Give us the map.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "We'll drive it.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Markets, dates, budget, and the goal. We'll design the route, build the fleet, staff it, and hand you the impressions city by city."), /*#__PURE__*/React.createElement("div", {
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
}, "Plan a tour \u2192"), /*#__PURE__*/React.createElement("a", {
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
  href: "/services/product-sampling",
  style: {
    color: INK
  }
}, "Product Sampling"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/fabrication-builds",
  style: {
    color: INK
  }
}, "Fabrication & Builds")))));
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
    backgroundImage: "url(https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center 42%"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(90deg, rgba(10,11,13,0.9) 0%, rgba(10,11,13,0.45) 45%, transparent 75%)`
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
  className: "mt-reveal",
  style: {
    maxWidth: 560
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: AMBER
}, "// ON THE ROAD"), /*#__PURE__*/React.createElement("h2", {
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
}, "Branded wheels that ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "can't be scrolled past.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 460,
    textShadow: "0 2px 14px rgba(0,0,0,0.6)"
  }
}, "From motorsport paddocks to downtown grids: a vehicle people stop, photograph, and post."))));
const TOURS = [["Claude Code workshop tour", "12 cities", "Developer workshop stops with local crews at every city.", "/portfolio/claude-code-workshops"], ["Krispy Krunchy Chicken", "10 cities", "Mobile sampling tour with branded truck and mascot.", "/portfolio/krispy-krunchy-chicken"], ["Smalls Sliders", "Multi-market", "Food truck tour supporting new-market launches.", "/portfolio/smalls-sliders"], ["Breakaway Music Festival", "12 festivals", "A touring sponsor footprint rebuilt at every stop.", "/portfolio/breakaway"]];
const TourProof = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "Tours we've run",
  style: {
    background: INK,
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal"
}, /*#__PURE__*/React.createElement(Mono, null, "// TOURS WE'VE RUN"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(32px,4vw,60px)",
    letterSpacing: "-0.035em",
    lineHeight: 1
  }
}, "Real routes. ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "Real stops."))), /*#__PURE__*/React.createElement("div", {
  className: "mt-2col",
  style: {
    marginTop: 44,
    display: "grid",
    gridTemplateColumns: "repeat(4,minmax(0,1fr))",
    gap: 14
  }
}, TOURS.map(([b, n, d, h]) => /*#__PURE__*/React.createElement("a", {
  key: b,
  href: h,
  className: "mt-reveal",
  style: {
    padding: 24,
    borderRadius: 14,
    background: "#12141A",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 34,
    color: AMBER,
    letterSpacing: "-0.03em"
  }
}, n), /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 18
  }
}, b), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.65)"
  }
}, d), /*#__PURE__*/React.createElement("span", {
  style: {
    marginTop: "auto",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.16em",
    color: AMBER
  }
}, "READ \u2192"))))));
const TourCost = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "What every tour includes",
  style: {
    background: "#0C0E13",
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal"
}, /*#__PURE__*/React.createElement(Mono, null, "// WHAT EVERY TOUR INCLUDES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(32px,4vw,60px)",
    letterSpacing: "-0.035em",
    lineHeight: 1
  }
}, "One team runs the ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: AMBER
  }
}, "whole road.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 680
  }
}, "No piecing together a vehicle vendor, a staffing agency and a permit runner. Send the markets and dates and we'll come back with a full tour plan and quote within 24 hours.")), /*#__PURE__*/React.createElement("div", {
  className: "mt-2col",
  style: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 40
  }
}, /*#__PURE__*/React.createElement("ul", {
  className: "mt-reveal",
  style: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    borderTop: "1px solid rgba(255,255,255,0.12)"
  }
}, ["Vehicle sourcing, wrap or custom build", "Licensed drivers, DOT compliance + insurance", "Trained crew at every stop", "Hotels, per diem + fuel, handled", "City permits + venue stop agreements", "Spark recap after every stop"].map(l => /*#__PURE__*/React.createElement("li", {
  key: l,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "15px 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    fontSize: 15.5
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    color: AMBER,
    fontWeight: 700
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("div", {
  className: "mt-reveal",
  style: {
    display: "grid",
    gap: 16,
    alignContent: "start"
  }
}, [["Route density", "Tight regional routes cut drive days, hotel nights and driver hours."], ["Weather days", "Every outdoor tour carries buffer days in the plan, not in a surprise invoice."], ["Cost per stop", "We report it after every stop so you can move budget toward markets that work."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
  key: t
}, /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 18
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 4,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.65)"
  }
}, d))), /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact",
  style: {
    marginTop: 8,
    alignSelf: "start",
    display: "inline-flex",
    alignItems: "center",
    height: 48,
    padding: "0 22px",
    borderRadius: 999,
    background: AMBER,
    color: "#0A0B0D",
    fontWeight: 700,
    textDecoration: "none"
  }
}, "Get a tour plan \u2192")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Mobile Marketing Tours"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#4FB58A",
    label: "Mobile Marketing Tours",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(WhatIs, null), /*#__PURE__*/React.createElement(TourProof, null), /*#__PURE__*/React.createElement(Fleet, null), /*#__PURE__*/React.createElement(PhotoBand, null), /*#__PURE__*/React.createElement(Route, null), /*#__PURE__*/React.createElement(TourCost, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), window.RelatedCases ? React.createElement(window.RelatedCases, {
    ctx: "service",
    slug: "mobile-tours"
  }) : null, /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesMobileTours: Page
});
})();
