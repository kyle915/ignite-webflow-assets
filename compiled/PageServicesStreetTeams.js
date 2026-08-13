(function(){if (typeof window !== "undefined" && window.PageServicesStreetTeams) return;
/* Auto-extracted from the design project's pages/services-street-teams.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  ORANGE = "#E68A4C",
  GREEN = "#1F9D62";
const STWrap = ({
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
const STMono = ({
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
    const els = document.querySelectorAll(".st-reveal");
    const revealAll = () => els.forEach(el => {
      el.classList.remove("st-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("st-in");
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12
      });
      const _vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > _vh * 0.85) {
          el.classList.add("st-armed");
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

/* ============ SIGNATURE: live route feed ============ */
const RouteFeed = () => {
  const ROUTES = [["WILLIAMSBURG · NYC", "142 handoffs · 38 QR"], ["WYNWOOD · MIA", "88 handoffs · 24 QR"], ["6TH ST · AUSTIN", "cooler restock"], ["WESTWOOD · LAX", "campus drop complete"], ["RiNo · DENVER", "96 handoffs · 19 QR"], ["WICKER PARK · CHI", "74 handoffs · 12 QR"], ["BROADWAY · NASH", "118 handoffs · 21 QR"], ["MISSION · SF", "63 handoffs · 15 QR"]];
  const [feed, setFeed] = React.useState(() => ROUTES.slice(0, 5).map((r, i) => ({
    r,
    id: i,
    t: i + 1 + "m"
  })));
  const [hr, setHr] = React.useState(612);
  React.useEffect(() => {
    let id = 9;
    const timer = setInterval(() => {
      const r = ROUTES[Math.floor(Math.random() * ROUTES.length)];
      setFeed(f => [{
        r,
        id: id++,
        t: "now"
      }, ...f.slice(0, 4)]);
      setHr(v => v + Math.floor(Math.random() * 7) + 2);
    }, 1700);
    return () => clearInterval(timer);
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
  }, "spark.ignite / street-routes \xB7 live")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(STMono, {
    style: {
      fontSize: 9.5
    }
  }, "Hand-offs \xB7 this hour"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: ORANGE,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginTop: 4
    }
  }, hr.toLocaleString())), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      background: "rgba(230,138,76,0.1)",
      border: `1px solid ${ORANGE}44`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 8px ${ORANGE}`,
      animation: "st-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(STMono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: 16
    }
  }, [["96%", "GPS logged"], ["38%", "QR scanned"], ["12", "social tags"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "#0F1115",
      padding: "12px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "#fff"
    }
  }, v), /*#__PURE__*/React.createElement(STMono, {
    style: {
      fontSize: 8
    }
  }, l)))), /*#__PURE__*/React.createElement(STMono, {
    style: {
      fontSize: 9.5,
      display: "block",
      marginBottom: 10
    }
  }, "Live route feed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, feed.map((row, idx) => /*#__PURE__*/React.createElement("div", {
    key: row.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 12px",
      borderRadius: 9,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      opacity: idx === 0 ? 1 : 0.88 - idx * 0.12,
      animation: idx === 0 ? "st-rise .5s ease" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "st-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: GREEN,
      boxShadow: `0 0 7px ${GREEN}`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 12.5,
      color: "#fff",
      flexShrink: 0
    }
  }, row.r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.55)",
      marginLeft: "auto"
    }
  }, row.r[1]))))));
};

/* ============ HERO ============ */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Street Teams Hero",
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
    backgroundImage: "url(https://kyle915.github.io/ignite-webflow-assets/assets/street-team-liquid-death-miami.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "60% 40%",
    filter: "brightness(0.5) saturate(1.05)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(120deg,rgba(10,11,13,0.95) 0%,rgba(10,11,13,0.78) 44%,rgba(10,11,13,0.5) 100%)"
  }
}), /*#__PURE__*/React.createElement(STWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "st-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "st-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "st-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,5.6vw,92px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.88,
    margin: 0,
    textShadow: "0 6px 30px rgba(0,0,0,0.5)"
  }
}, "Cans in hands.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: ORANGE
  }
}, "One at a time.")), /*#__PURE__*/React.createElement("p", {
  className: "st-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)",
    maxWidth: 530,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Guerilla sampling that hits the corridor, not the office park. ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "Route-mapped, GPS-verified, audience-targeted"), " \u2014 every hand-off logged, every festival and game-day moment worked."), /*#__PURE__*/React.createElement("div", {
  className: "st-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=street-teams",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "18px 30px",
    borderRadius: 999,
    background: ORANGE,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 16,
    textDecoration: "none",
    boxShadow: `0 12px 40px ${ORANGE}55`
  }
}, "Plan your drop ", /*#__PURE__*/React.createElement("span", {
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
  className: "st-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.18)"
  }
}, [["257K+", "ambassador bench"], ["50", "states routed"], ["48hr", "rush window"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
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
    color: ORANGE,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(STMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "st-reveal"
}, /*#__PURE__*/React.createElement(RouteFeed, null)))));

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
  const cans = useCount(184000, run, 1500),
    cities = useCount(18, run, 1000),
    routes = useCount(142, run, 1300);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: INK,
      color: "#fff",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(STWrap, {
    style: {
      padding: "52px 0"
    }
  }, /*#__PURE__*/React.createElement(STMono, {
    color: ORANGE,
    style: {
      display: "block",
      textAlign: "center",
      marginBottom: 24,
      fontSize: 10
    }
  }, "// cans we put in real hands \xB7 this month"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
      gap: 22,
      textAlign: "center"
    }
  }, [[cans.toLocaleString(), "", "Cans sampled"], [cities, "", "Cities active"], [routes, "", "Routes run"], ["180", "/hr", "Velocity · mean"]].map(([n, suf, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(30px,3.6vw,52px)",
      letterSpacing: "-0.03em",
      color: i % 2 ? "#fff" : ORANGE
    }
  }, n, suf), /*#__PURE__*/React.createElement(STMono, {
    style: {
      fontSize: 10
    }
  }, l))))));
};

/* ============ VELOCITY MATH ============ */
const Velocity = () => {
  const steps = [["150", "/ hr", "Per-ambassador velocity", "Mean hand-offs per hour at a high-density corridor.", "×"], ["3,600", "/ day", "Per-crew day", "4-ambassador crew · 6-hour shift = 3,600 cans in hands.", "×"], ["18,000", "+ / wk", "Five-city week", "Same crew, 5 cities, 5 days. 18,000+ hand-offs end of week.", "→"], ["+22%", "recall", "Trial → recall", "Mean uplift in unaided brand recall after a single hand-off.", ""]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(STWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "st-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(STMono, {
    color: ORANGE
  }, "// velocity math"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Guerilla is a ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "math problem.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 600
    }
  }, "We've run enough corridors to give you the planning model \u2014 by ambassador, by hour, by city, by program length.")), /*#__PURE__*/React.createElement("div", {
    className: "st-velo",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14,
      position: "relative"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "st-reveal",
    style: {
      position: "relative",
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      padding: "26px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(30px,3.4vw,44px)",
      color: i === 3 ? GREEN : ORANGE,
      letterSpacing: "-0.03em"
    }
  }, s[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "rgba(255,255,255,0.55)"
    }
  }, s[1])), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16
    }
  }, s[2]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 13,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.62)"
    }
  }, s[3]), s[4] && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: -11,
      top: "50%",
      transform: "translateY(-50%)",
      color: ORANGE,
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      fontWeight: 700,
      zIndex: 2,
      background: "#0C0E12",
      padding: "2px 0"
    }
  }, s[4])))), /*#__PURE__*/React.createElement("p", {
    className: "st-reveal",
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Velocity varies by corridor density, weather, brand category, and program window. We benchmark before quoting.")));
};

/* ============ ON-FOOT KIT ============ */
const Kit = () => {
  const items = [["Branded cooler + ice packs", "Insulated cooler, branded sleeve, 90-min cold hold for a 24-can refresh."], ["144-can restock pack", "Pre-iced restock at central staging. Captain runs the runner cycle."], ["QR scan card", "Wrist-clipped QR card consumers scan post-hand-off — sends to landing page + CRM."], ["Lift card + offer code", "Branded tear-card with a promo code or social handle to take home."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(STWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "st-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(STMono, {
    color: ORANGE
  }, "// the on-foot kit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Everything a crew carries."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 620
    }
  }, "Guerilla works when the crew can pour, log, and refill without going back to the truck. The kit is engineered for the corridor \u2014 light, branded, restock-ready.")), /*#__PURE__*/React.createElement("div", {
    className: "st-kit",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it[0],
    className: "st-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0F1013)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderTop: `3px solid ${ORANGE}`,
      borderRadius: 12,
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: ORANGE,
      marginBottom: 14
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16.5,
      letterSpacing: "-0.01em"
    }
  }, it[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "9px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.62)"
    }
  }, it[1]))))));
};

/* ============ NATIONAL MOMENTS BOARD ============ */
const Moments = () => {
  const rows = [["Coachella + Stagecoach", "FESTIVAL · INDIO, CA", "APR · 2 WKND", 3, "240–300/hr"], ["ACL Festival", "FESTIVAL · AUSTIN, TX", "OCT · 2 WKND", 3, "220–280/hr"], ["Lollapalooza", "FESTIVAL · CHICAGO, IL", "AUG · 4 DAYS", 3, "240–300/hr"], ["EDC + Lovers & Friends", "FESTIVAL · LAS VEGAS, NV", "MAY · 3 DAYS", 3, "220–280/hr"], ["Rolling Loud + Ultra", "FESTIVAL · MIAMI, FL", "MAR + JUL", 3, "240–300/hr"], ["Super Bowl host city", "MAJOR · ROTATING", "FEB · WEEK", 3, "300+/hr"], ["NCAA Final Four", "MAJOR · ROTATING", "APR · WEEK", 3, "260+/hr"], ["World Series + MLB ASG", "MAJOR · ROTATING", "JUL + OCT", 2, "200–260/hr"], ["NYE Times Square + NYFW", "MOMENT · NEW YORK", "DEC+FEB+SEP", 3, "260+/hr"], ["Mardi Gras + Jazz Fest", "MOMENT · NEW ORLEANS", "FEB + APR", 3, "240–300/hr"], ["SXSW + F1 USGP", "MOMENT · AUSTIN, TX", "MAR + OCT", 3, "220–280/hr"], ["Move-in week + bowl games", "COLLEGE · NATIONAL", "AUG + DEC", 3, "200–260/hr"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(STWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "st-reveal",
    style: {
      maxWidth: 760,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(STMono, {
    color: ORANGE
  }, "// national moments board"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Festivals. Games. Moments. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "We sample them all.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "From Coachella to the Super Bowl to NYE Times Square \u2014 if there's a crowd, we've worked the corridor. We staff against the calendar.")), /*#__PURE__*/React.createElement("div", {
    className: "st-moments",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 12
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "st-reveal",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 14,
      alignItems: "center",
      padding: "18px 20px",
      borderRadius: 12,
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.09)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.12em",
      color: "rgba(255,255,255,0.42)",
      marginBottom: 5
    }
  }, r[1]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      gap: 3,
      alignItems: "center"
    }
  }, [0, 1, 2].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    className: "st-densebar",
    style: {
      display: "block",
      width: 22,
      height: 4,
      borderRadius: 2,
      background: d < r[3] ? ORANGE : "rgba(255,255,255,0.12)",
      animationDelay: i * 40 + d * 60 + "ms"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.55)"
    }
  }, r[4]))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.06em",
      color: ORANGE,
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, r[2])))), /*#__PURE__*/React.createElement("p", {
    className: "st-reveal",
    style: {
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B 12 marquee moments shown \xB7 100+ more festivals, games, and brand moments in active rotation.")));
};

/* ============ SPARK ============ */
const Spark = () => /*#__PURE__*/React.createElement("section", {
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
    background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(230,138,76,0.12), transparent 60%)"
  }
}), /*#__PURE__*/React.createElement(STWrap, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "st-spark-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.05fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "st-reveal"
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
    filter: "drop-shadow(0 0 18px rgba(230,138,76,0.4))"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "5px 11px",
    borderRadius: 999,
    background: "rgba(230,138,76,0.1)",
    border: "1px solid rgba(230,138,76,0.3)"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "st-dot",
  style: {
    width: 7,
    height: 7,
    borderRadius: 999,
    background: ORANGE,
    boxShadow: `0 0 10px ${ORANGE}`,
    animation: "st-pulse 1.6s infinite"
  }
}), /*#__PURE__*/React.createElement(STMono, {
  color: ORANGE,
  style: {
    fontSize: 10
  }
}, "LIVE \xB7 ROUTE OPS"))), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(30px,4vw,56px)",
    letterSpacing: "-0.035em",
    lineHeight: 1.0
  }
}, "Streets to dashboard, ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "end of day.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 16.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.74)"
  }
}, "Every drop GPS-tagged, every route completion verified, photo evidence from every neighborhood. The route-level recap ships the day the crew walks \u2014 not four weeks later."), /*#__PURE__*/React.createElement("div", {
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
    background: ORANGE,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 14,
    textDecoration: "none",
    boxShadow: `0 8px 28px ${ORANGE}44`
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
  className: "st-reveal",
  style: {
    background: "linear-gradient(180deg,#14161B,#0F1115)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 18,
    padding: "24px",
    boxShadow: "0 40px 100px rgba(0,0,0,0.55)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10
  }
}, [["GPS-tagged", "drops, real time"], ["Per-route", "coverage map"], ["Photo", "every neighborhood"], ["Route recap", "end of day"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "20px 16px",
    background: "rgba(230,138,76,0.06)",
    border: "1px solid rgba(230,138,76,0.2)",
    borderRadius: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 17,
    color: ORANGE,
    letterSpacing: "-0.01em"
  }
}, v), /*#__PURE__*/React.createElement(STMono, {
  style: {
    fontSize: 9
  }
}, l))))))));

/* ============ FAQ ============ */
const FAQ = () => {
  const items = [["What kinds of street teams do you run?", "Sampling drops, flyer runs, branded moments, guerilla activation, pop-up corridors, branded bike and pedicab routes, and combined foot-plus-vehicle teams. Programs scale from one-day drops to multi-market national tours."], ["How do you make sure samples reach the right audience?", "Route design upfront. We map your sampling against the audience profile you're after — neighborhoods, venues, transit corridors, event ingress paths — then brief the crew on who to engage. Spark logs every drop with location and time."], ["Do you handle permits for street sampling?", "Yes. Where the city or jurisdiction requires permits, we file them. Where street sampling is restricted, we route around it and tell you up front before the program ships."], ["Can you scale to multiple markets at once?", "Yes. Our 257,000+ ambassador bench covers all 50 states. We've run national multi-market street programs across 12–18 metros in a single weekend, coordinated through a single PM."], ["What reporting do we get from a street program?", "Route-level recap end of day — drops per location, photo evidence, GPS verification of route completion, and ambassador notes. Full program recap with photo galleries and per-market breakdowns ships within hours."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(STWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "st-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(STMono, {
    color: ORANGE
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Street teams, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "st-reveal",
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
      color: ORANGE,
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
}, /*#__PURE__*/React.createElement(STWrap, null, /*#__PURE__*/React.createElement(STMono, {
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
}, [["Product Sampling", "/services/product-sampling"], ["Experiential Marketing", "/services/experiential-marketing"], ["Mobile Tours", "/services/mobile-tours"], ["Festival Activations", "/services/festival-brand-activations"], ["Sports & Entertainment", "/industries/sports-entertainment"], ["CPG Beverage", "/industries/cpg-beverage"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
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
    color: ORANGE
  }
}, "\u2192"))))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: `linear-gradient(150deg,${ORANGE},#C63B12)`,
    color: "#fff",
    padding: "120px 0",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.14,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
    backgroundSize: "48px 48px"
  }
}), /*#__PURE__*/React.createElement(STWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "st-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Put it in real hands."), /*#__PURE__*/React.createElement("p", {
  className: "st-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.9)"
  }
}, "Tell us the audience, the moment, and the markets. We'll map the routes, staff the corridor, and log every hand-off."), /*#__PURE__*/React.createElement("div", {
  className: "st-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=street-teams",
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
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.55)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Explore Spark"))));
const App = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 Street Teams"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#E68A4C",
    label: "Street Teams",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Counters, null), /*#__PURE__*/React.createElement(Velocity, null), /*#__PURE__*/React.createElement(Kit, null), /*#__PURE__*/React.createElement(Moments, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesStreetTeams: App
});
})();
