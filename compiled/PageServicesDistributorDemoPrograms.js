(function(){if (typeof window !== "undefined" && window.PageServicesDistributorDemoPrograms) return;
/* Auto-extracted from the design project's pages/services-distributor-demo-programs.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  ORANGE = "#9FC24E",
  GREEN = "#1F9D62",
  AMBER = "#FFB627";
const DDWrap = ({
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
const DDMono = ({
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
    const els = document.querySelectorAll(".dd-reveal");
    const revealAll = () => els.forEach(el => {
      el.classList.remove("dd-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("dd-in");
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.12
      });
      const _vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > _vh * 0.85) {
          el.classList.add("dd-armed");
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

/* ============ SIGNATURE: live event feed ============ */
const EventFeed = () => {
  const SRC = [["RNDC TX · HOUSTON GSM", "142 pours · 38 reps", "ok"], ["SGWS FL · TAMPA GSM", "88 pours · 24 reps", "ok"], ["BREAKTHRU NV · RIDE-ALONG", "6 stops complete", "ok"], ["RNC NJ · WAREHOUSE", "OOS flag raised", "bad"], ["RNDC GA · ATLANTA GSM", "96 pours · 31 reps", "ok"], ["SGWS AZ · PHOENIX BUYER DAY", "+8 new accounts", "ok"]];
  const [feed, setFeed] = React.useState(() => SRC.slice(0, 5).map((r, i) => ({
    r,
    id: i
  })));
  const [pours, setPours] = React.useState(1842);
  React.useEffect(() => {
    let id = 8;
    const timer = setInterval(() => {
      const r = SRC[Math.floor(Math.random() * SRC.length)];
      setFeed(f => [{
        r,
        id: id++
      }, ...f.slice(0, 4)]);
      setPours(v => v + Math.floor(Math.random() * 6) + 2);
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
  }, "spark.ignite / distributor-ops \xB7 shared")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 9.5
    }
  }, "Pours logged \xB7 today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: ORANGE,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginTop: 4
    }
  }, pours.toLocaleString())), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      background: "rgba(159,194,78,0.1)",
      border: `1px solid ${ORANGE}44`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dd-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 8px ${ORANGE}`,
      animation: "dd-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "SHARED \xB7 LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: 16
    }
  }, [["Brand", "sees this view"], ["Distributor", "sees this view"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      background: "#0F1115",
      padding: "12px 10px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 15,
      color: "#fff"
    }
  }, v), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 8
    }
  }, l)))), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 9.5,
      display: "block",
      marginBottom: 10
    }
  }, "Event feed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, feed.map((row, idx) => {
    const bad = row.r[2] === "bad";
    return /*#__PURE__*/React.createElement("div", {
      key: row.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 12px",
        borderRadius: 9,
        background: bad ? "rgba(159,194,78,0.08)" : "rgba(255,255,255,0.03)",
        border: bad ? `1px solid ${ORANGE}44` : "1px solid rgba(255,255,255,0.06)",
        opacity: idx === 0 ? 1 : 0.88 - idx * 0.12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "dd-dot",
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: bad ? ORANGE : GREEN,
        boxShadow: `0 0 7px ${bad ? ORANGE : GREEN}`,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 12,
        color: "#fff",
        flexShrink: 0
      }
    }, row.r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9.5,
        color: bad ? ORANGE : "rgba(255,255,255,0.55)",
        marginLeft: "auto",
        textAlign: "right"
      }
    }, row.r[1]));
  }))));
};

/* ============ HERO ============ */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Distributor Demo Hero",
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
    backgroundImage: "url(../assets/experiential-liquiddeath-nascar.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    filter: "brightness(0.42) saturate(1.05)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(115deg,rgba(10,11,13,0.96) 0%,rgba(10,11,13,0.8) 46%,rgba(10,11,13,0.5) 100%)"
  }
}), /*#__PURE__*/React.createElement(DDWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "dd-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "dd-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "dd-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(42px,5.2vw,84px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    margin: 0,
    textShadow: "0 6px 30px rgba(0,0,0,0.5)"
  }
}, "The demo dies in the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: ORANGE
  }
}, "paperwork.")), /*#__PURE__*/React.createElement("p", {
  className: "dd-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "GSM pour bars, rep ride-alongs, and 3-tier demos that ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "actually happen"), " \u2014 because we file the COIs, ABC permits, and TIPS cards on every side before the crew lands."), /*#__PURE__*/React.createElement("div", {
  className: "dd-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=distributor-demo-programs",
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
}, "Plan your program ", /*#__PURE__*/React.createElement("span", {
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
  className: "dd-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.18)"
  }
}, [["3-tier", "compliant"], ["50", "states + DC"], ["TIPS/TABC", "RBS certified"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
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
    fontSize: 22,
    color: ORANGE,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(DDMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "dd-reveal"
}, /*#__PURE__*/React.createElement(EventFeed, null)))));

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
  const a = useCount(7, run, 900),
    b = useCount(22, run, 1100);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: INK,
      color: "#fff",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, {
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
  }, [[a, "-day", "Demo to distributor PO"], ["+" + b, "%", "Rep-order lift"], ["6", "+", "Distributors coordinated"], ["100", "%", "Paperwork filed"]].map(([n, suf, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(30px,3.6vw,52px)",
      letterSpacing: "-0.03em",
      color: i % 2 ? "#fff" : ORANGE
    }
  }, n, suf), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 10
    }
  }, l)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Velocity and PO windows vary by category, market, and distributor.")));
};

/* ============ GSM RUN-OF-SHOW ============ */
const GSMDay = () => {
  const sched = [["06:30", "Load-in + pour bar build", "Crew arrives, builds the brand bar, ices product, stages cups and rep packets.", "IGNITE"], ["07:30", "Walk-through + COI handoff", "Distributor warehouse manager walks the floor, COIs handed off, fire-marshal sign-off.", "DISTRIBUTOR"], ["08:00", "GSM opens, reps arrive", "Reps roll in, grab coffee, head to brand bars. Crew already in position pouring.", ""], ["08:15", "Brand training pour", "Brand manager runs the talking points; crew pours flights paced to the script.", "BRAND"], ["09:30", "Q&A + sell-sheet handoff", "Reps get comp data, a talking-point card, and a sample 4-pack to take with them.", "IGNITE"], ["11:30", "Strike + load-out", "Bar broken down, branded materials inventoried, leftover product handed back.", "IGNITE"], ["EOD", "Same-day recap delivered", "Spark dashboard — pour count, rep headcount, photos, notes — sent to brand + distributor.", "SPARK"]];
  const oc = {
    IGNITE: ORANGE,
    DISTRIBUTOR: "#5AB8FF",
    BRAND: AMBER,
    SPARK: GREEN,
    "": "rgba(255,255,255,0.5)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE
  }, "// gsm day \xB7 run of show"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "What a GSM day ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "actually looks like.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 620
    }
  }, "We run the distributor general sales meeting demo end to end \u2014 load-in through same-day recap. Brand, distributor, and reps all leave with the same data.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingLeft: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      bottom: 8,
      width: 2,
      background: "linear-gradient(180deg,rgba(159,194,78,0.5),rgba(255,255,255,0.08))"
    }
  }), sched.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dd-reveal",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "70px 1fr",
      gap: 18,
      padding: "13px 0",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: -24,
      top: 18,
      width: 12,
      height: 12,
      borderRadius: 999,
      background: s[0] === "EOD" ? GREEN : "#0C0E12",
      border: `2px solid ${s[0] === "EOD" ? GREEN : "rgba(159,194,78,0.6)"}`,
      boxShadow: s[0] === "EOD" ? `0 0 12px ${GREEN}` : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: s[0] === "EOD" ? GREEN : "rgba(255,255,255,0.85)",
      paddingTop: 2
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "baseline",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-0.01em"
    }
  }, s[1]), s[3] && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.1em",
      color: oc[s[3]],
      border: `1px solid ${oc[s[3]]}55`,
      borderRadius: 5,
      padding: "2px 7px"
    }
  }, s[3])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.64)"
    }
  }, s[2]))))), /*#__PURE__*/React.createElement("p", {
    className: "dd-reveal",
    style: {
      marginTop: 20,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\u203B Schedule shifts by distributor \u2014 RNDC runs different than Southern Glazer's, and we know both.")));
};

/* ============ RIDE-ALONG WEEK ============ */
const RideAlong = () => {
  const week = [["MON", "Houston", "RNDC TX", 8, 3], ["TUE", "Dallas", "RNDC TX", 7, 4], ["WED", "Austin", "RNDC TX", 6, 3], ["THU", "San Antonio", "RNDC TX", 8, 3], ["FRI", "Round-up + recap", "BRAND HQ", 0, 13]];
  const totals = [["37", "retail + on-prem stops"], ["13", "reps supported"], ["1", "brand crew"], ["1", "recap dashboard"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE
  }, "// rep ride-along week"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Five cities. One crew. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "In the rep's truck.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 620
    }
  }, "Most demo agencies stop at the warehouse. We get in the truck \u2014 a managed crew of pourers and brand specialists rides with sales reps for a full week of retail and on-premise stops.")), /*#__PURE__*/React.createElement("div", {
    className: "dd-week",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 12,
      marginBottom: 24
    }
  }, week.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dd-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderTop: `3px solid ${i === 4 ? GREEN : ORANGE}`,
      borderRadius: 12,
      padding: "20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      color: i === 4 ? GREEN : ORANGE,
      marginBottom: 10
    }
  }, d[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "-0.01em"
    }
  }, d[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "rgba(255,255,255,0.42)",
      marginTop: 5,
      marginBottom: 14
    }
  }, d[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "#fff"
    }
  }, d[3] || "—"), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 8
    }
  }, "stops")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      color: "#fff"
    }
  }, d[4]), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 8
    }
  }, "reps")))))), /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, totals.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "#0F1013",
      padding: "20px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(24px,3vw,38px)",
      color: ORANGE,
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 9
    }
  }, l))))));
};

/* ============ DEMO → PO LADDER ============ */
const Ladder = () => {
  const steps = [["DEMO", "Run the floor", "Crew runs the GSM pour bar or rep ride-along. Pour count + rep headcount logged in Spark.", "Per-event data"], ["REP ORDER", "Reps order from warehouse", "Distributor warehouse pulls show the immediate post-event rep-order spike.", "+22% typical"], ["DISTRIBUTOR PO", "Distributor reorders brand", "Rep velocity → distributor PO → brand POS data confirms downstream sell-through.", "~7 day window"], ["RECAP", "Shared dashboard", "Brand + distributor + broker see the same recap. Spark rolls it into one view.", "1 dashboard"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE
  }, "// demo \u2192 rep order \u2192 PO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Best programs convert in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "seven days.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "When a GSM demo is run right, reps walk out, order from the warehouse, and the distributor's PO clears within a week. We measure to that window.")), /*#__PURE__*/React.createElement("div", {
    className: "dd-ladder",
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
    className: "dd-reveal",
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
      background: `${ORANGE}1f`,
      border: `1px solid ${ORANGE}55`,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: ORANGE,
      marginBottom: 16
    }
  }, i + 1), /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE,
    style: {
      fontSize: 10
    }
  }, s[0]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17
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
      fontSize: 15,
      color: i === 1 ? GREEN : "#fff"
    }
  }, s[3]))))));
};

/* ============ ENABLEMENT KIT ============ */
const Kit = () => {
  const items = [["Sell-sheet (1-pager)", "Front: brand story + key flavor notes. Back: pour build, comp set, suggested price point."], ["Talking-point card", "Wallet-sized cheat sheet with on-premise pitch, retail pitch, and 3 objection handles."], ["Comp-data sheet", "Velocity vs comp set, retail price ladder, distributor margin call-out."], ["Sample 4-pack", "Rep takes home product to share with on-premise GMs and retail buyers."], ["Branded swag", "Tee, hat, or pin set — rep wear on the next ride-along becomes brand exposure."], ["QR → digital pitch deck", "Always-current sell deck the rep can open on phone or laptop, mid-meeting."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE
  }, "// rep enablement kit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Every rep walks out with ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "the same packet.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.68)",
      maxWidth: 640
    }
  }, "Reps remember the brand for as long as they have the materials. We build the take-home kit so it's the rep's pitch deck for the next 30 days \u2014 not a stack of paper.")), /*#__PURE__*/React.createElement("div", {
    className: "dd-kit",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it[0],
    className: "dd-reveal",
    style: {
      background: "linear-gradient(180deg,#131518,#0F1013)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: 12,
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: ORANGE,
      marginBottom: 12
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

/* ============ CHANNELS ============ */
const Channels = () => {
  const rows = [["Wine & Spirits", "RNDC · SOUTHERN GLAZER'S · BREAKTHRU · REPUBLIC NATIONAL", "On-premise placements, points of distribution, brand-rep order lift"], ["Beer wholesale", "DBI · STANDARD · ANDREWS · PROGRESSIVE", "Reps trained, sample SKUs poured, retail placement growth"], ["Beverage DSD", "GUARANTEED EAGLE · ANDREWS · TENN BEVERAGE", "Route stops, in-store placements, reorder velocity"], ["Food broker", "ACOSTA · CROSSMARK · ADVANTAGE · BRIDGE", "Buyer meetings closed, scan-back lift, retailer pull-through"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE
  }, "// distributor partners"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Every tier, its own paperwork.")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "dd-reveal dd-chan",
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
      fontSize: "clamp(19px,2.1vw,26px)",
      letterSpacing: "-0.02em",
      color: i % 2 ? "#fff" : ORANGE
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.6
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

/* ============ COMPLIANCE BELT ============ */
const Compliance = () => {
  const items = [["3-tier paperwork", "Distributor demo requests filed in advance through RNDC, SGWS, Breakthru, regional houses."], ["ABC permits per state", "State Alcoholic Beverage Commission permits filed per jurisdiction. Dry counties flagged."], ["TIPS / TABC / RBS", "Every regulated pour ambassador certified for the state. Cards on file."], ["COIs + liquor liability", "Liquor liability per program. Brand, distributor, venue named as additional insureds."], ["Refusal SOP", "Documented refusal-to-serve protocol per shift. Incident log. Captain review post-event."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "90px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE,
    className: "dd-reveal",
    style: {
      display: "block",
      marginBottom: 28
    }
  }, "// compliance, handled on every side"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: 14
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it[0],
    className: "dd-reveal",
    style: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12,
      padding: "22px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: `${GREEN}22`,
      border: `1px solid ${GREEN}66`,
      display: "grid",
      placeItems: "center",
      color: GREEN,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      marginBottom: 14
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15.5,
      letterSpacing: "-0.01em"
    }
  }, it[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 13,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.6)"
    }
  }, it[1]))))));
};

/* ============ SPARK ============ */
const Spark = () => {
  const [n, setN] = React.useState(12);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + (Math.random() < 0.3 ? 1 : 0)), 1800);
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
      background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(159,194,78,0.12), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement(DDWrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dd-spark-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal"
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
      filter: "drop-shadow(0 0 18px rgba(159,194,78,0.4))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px",
      borderRadius: 999,
      background: "rgba(159,194,78,0.1)",
      border: "1px solid rgba(159,194,78,0.3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dd-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 10px ${ORANGE}`,
      animation: "dd-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE,
    style: {
      fontSize: 10
    }
  }, "SHARED \xB7 LIVE"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 1.0
    }
  }, "One dashboard. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "Brand and distributor.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "No more vendor PDFs to the brand and Excel to the distributor. Spark is the single recap surface \u2014 pour counts per rep, ID-check completion, refusal incidents, retailer notes. Distributor account managers get pulled into the same workspace."), /*#__PURE__*/React.createElement("div", {
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
    className: "dd-reveal",
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
  }, "spark.ignite / distributor-recap")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 22px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 10
    }
  }, "Events live this week"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dd-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ORANGE,
      boxShadow: `0 0 8px ${ORANGE}`,
      animation: "dd-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: ORANGE,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginBottom: 18
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["Per-pour", "count live"], ["ID-check", "completion"], ["Refusal", "incident log"], ["Shared", "brand + distrib"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "16px 14px",
      background: "rgba(159,194,78,0.06)",
      border: "1px solid rgba(159,194,78,0.2)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16,
      color: ORANGE,
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement(DDMono, {
    style: {
      fontSize: 8.5
    }
  }, l)))))))));
};

/* ============ FAQ ============ */
const FAQ = () => {
  const items = [["Which distributors do you work with?", "RNDC, Southern Glazer's, Breakthru Beverage, Republic National, Empire Merchants, and most regional houses. We file paperwork on your behalf and the distributor's; programs scale state by state."], ["Does the distributor or the brand pay for the demo?", "Depends on the program structure. Distributor-funded, brand-funded, and co-op programs are all common — we handle the paperwork and reporting regardless of who's writing the check."], ["Can you file ABC permits in every state?", "Yes. Each state's Alcoholic Beverage Commission has its own paperwork; we file per jurisdiction. Restricted states and dry counties are flagged up front before the program ships."], ["What's the recap format the distributor sees?", "Same dashboard as the brand. Pour counts, pour sizes, photos, retailer notes, refusal incidents — all share-ready for the distributor account manager's quarterly review."], ["Can you handle multi-distributor national programs?", "Yes. Most national alcohol programs route through 3–6 distributors depending on state coverage. We coordinate paperwork, demo calendars, and reporting across all distributor partners through a single PM."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(DDWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dd-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(DDMono, {
    color: ORANGE
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Distributor demos, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dd-reveal",
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
    background: "#0C0E12",
    color: "#fff",
    padding: "80px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(DDWrap, null, /*#__PURE__*/React.createElement(DDMono, {
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
}, [["On-Premise Sampling", "/services/on-premise-sampling"], ["Retail Demo Programs", "/services/retail-demo-programs"], ["Product Sampling", "/services/product-sampling"], ["Field Marketing", "/services/field-marketing"], ["Alcohol & Spirits", "/industries/alcohol-spirits"], ["CPG Beverage", "/industries/cpg-beverage"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
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
}), /*#__PURE__*/React.createElement(DDWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "dd-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Make the demo actually happen."), /*#__PURE__*/React.createElement("p", {
  className: "dd-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.9)"
  }
}, "Give us the brand, the distributors, and the markets. We'll file the paperwork on every side and pour on schedule."), /*#__PURE__*/React.createElement("div", {
  className: "dd-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=distributor-demo-programs",
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
    "data-screen-label": "01 Distributor Demo Programs"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#9FC24E",
    label: "Distributor Demo Programs",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Counters, null), /*#__PURE__*/React.createElement(GSMDay, null), /*#__PURE__*/React.createElement(RideAlong, null), /*#__PURE__*/React.createElement(Ladder, null), /*#__PURE__*/React.createElement(Kit, null), /*#__PURE__*/React.createElement(Channels, null), /*#__PURE__*/React.createElement(Compliance, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesDistributorDemoPrograms: App
});
})();
