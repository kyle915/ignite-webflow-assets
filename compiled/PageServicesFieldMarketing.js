(function(){if (typeof window !== "undefined" && window.PageServicesFieldMarketing) return;
/* Auto-extracted from the design project's pages/services-field-marketing.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  ORANGE = "#8A5CD1",
  MINT = "#A87CE0";
const FMWrap = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1480,
    margin: "0 auto",
    padding: "0 32px",
    ...style
  }
}, children);
const FMMono = ({
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
    const els = document.querySelectorAll(".fm-reveal");
    const revealAll = () => els.forEach(el => {
      el.classList.remove("fm-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("fm-in");
            io.unobserve(e.target);
          }
        });
      }, {
        threshold: 0.14
      });
      const _vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > _vh * 0.85) {
          el.classList.add("fm-armed");
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

/* ---- markets + rolling field events for the live ops board ---- */
const OPS_MARKETS = ["Austin", "Chicago", "Miami", "Denver", "Seattle", "Dallas", "Atlanta", "Phoenix", "Boston", "Nashville", "Portland", "Tampa", "Detroit", "Houston", "San Diego", "Charlotte", "Minneapolis", "Las Vegas", "New Orleans", "Columbus", "Kansas City", "Philadelphia", "New York", "Salt Lake City", "Indianapolis"];
const OPS_EVENTS = [["shift live", "#A87CE0"], ["recap sent", "#A87CE0"], ["demo started", "#8A5CD1"], ["check-in ✓", "#A87CE0"], ["photos uploaded", "#A87CE0"], ["distributor synced", "#8A5CD1"], ["samples logged", "#A87CE0"], ["captain on site", "#8A5CD1"]];
const STATE_ABBR = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
const LiveOpsBoard = () => {
  const [feed, setFeed] = React.useState(() => Array.from({
    length: 5
  }, (_, i) => ({
    m: OPS_MARKETS[i * 3 % OPS_MARKETS.length],
    e: OPS_EVENTS[i % OPS_EVENTS.length],
    id: i,
    t: 9 + i + "m"
  })));
  const [lit, setLit] = React.useState(() => new Set([4, 43, 8, 5, 47]));
  const [count, setCount] = React.useState(4820);
  React.useEffect(() => {
    let id = 6;
    const feedTimer = setInterval(() => {
      const m = OPS_MARKETS[Math.floor(Math.random() * OPS_MARKETS.length)];
      const e = OPS_EVENTS[Math.floor(Math.random() * OPS_EVENTS.length)];
      setFeed(f => [{
        m,
        e,
        id: id++,
        t: "now"
      }, ...f.slice(0, 4)]);
      setCount(c => c + Math.floor(Math.random() * 3) + 1);
      setLit(s => {
        const n = new Set(s);
        n.add(Math.floor(Math.random() * 50));
        if (n.size > 34) n.delete([...n][0]);
        return n;
      });
    }, 1600);
    return () => clearInterval(feedTimer);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      background: "linear-gradient(180deg,#14161B,#0F1115)",
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,0.1)",
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
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
  }, "spark.ignite / field-ops \xB7 live")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FMMono, {
    style: {
      fontSize: 9.5
    }
  }, "Activations logged \xB7 this quarter"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 38,
      color: MINT,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginTop: 4
    }
  }, count.toLocaleString())), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      background: "rgba(168,124,224,0.1)",
      border: `1px solid ${MINT}44`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: MINT,
      boxShadow: `0 0 8px ${MINT}`,
      animation: "fm-pulse 1.5s infinite"
    }
  }), /*#__PURE__*/React.createElement(FMMono, {
    color: MINT,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(10,1fr)",
      gap: 4,
      marginBottom: 18
    }
  }, STATE_ABBR.map((s, i) => {
    const on = lit.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        textAlign: "center",
        padding: "5px 0",
        borderRadius: 4,
        fontFamily: "var(--font-mono)",
        fontSize: 8.5,
        letterSpacing: "0.02em",
        transition: "all .5s",
        background: on ? "rgba(168,124,224,0.16)" : "rgba(255,255,255,0.03)",
        border: on ? `1px solid ${MINT}66` : "1px solid rgba(255,255,255,0.05)",
        color: on ? MINT : "rgba(255,255,255,0.32)",
        boxShadow: on ? `0 0 10px ${MINT}22` : "none"
      }
    }, s);
  })), /*#__PURE__*/React.createElement(FMMono, {
    style: {
      fontSize: 9.5,
      display: "block",
      marginBottom: 10
    }
  }, "Field check-ins"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, feed.map((r, idx) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 12px",
      borderRadius: 9,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      opacity: idx === 0 ? 1 : 0.86 - idx * 0.12,
      animation: idx === 0 ? "fm-rise .5s ease" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: r.e[1],
      boxShadow: `0 0 7px ${r.e[1]}`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13,
      color: "#fff",
      minWidth: 96
    }
  }, r.m), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: r.e[1]
    }
  }, r.e[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, r.t))))));
};

/* =================== HERO =================== */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Field Marketing Hero",
  style: {
    position: "relative",
    background: "linear-gradient(170deg,#0E1013,#0A0B0D)",
    color: "#fff",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    left: "-10%",
    top: "-10%",
    width: "55%",
    height: "70%",
    background: `radial-gradient(ellipse,${ORANGE}18,transparent 62%)`,
    filter: "blur(60px)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement(FMWrap, {
  style: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 88
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fm-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.02fr 0.98fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
    flexWrap: "wrap"
  }
}), /*#__PURE__*/React.createElement("h1", {
  className: "fm-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(42px,5.4vw,88px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.9,
    margin: 0
  }
}, "One operation.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: MINT
  }
}, "All fifty states.")), /*#__PURE__*/React.createElement("p", {
  className: "fm-reveal",
  style: {
    marginTop: 24,
    fontSize: "clamp(16px,1.4vw,20px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.8)",
    maxWidth: 540,
    fontFamily: "var(--font-display)",
    fontWeight: 500
  }
}, "Field marketing is the discipline of getting brand programs executed in physical markets. We're the ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "embedded execution layer"), " \u2014 staffing, distributor coordination, logistics, and reporting in one operation instead of six regional vendors."), /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=field-marketing",
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
    boxShadow: `0 12px 40px ${ORANGE}44`
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
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.25)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none"
  }
}, "See our work")), /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255,255,255,0.14)"
  }
}, [["257K+", "ambassador bench"], ["5K+", "activations / yr"], ["1", "PM · 1 platform"]].map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "18px 26px 0 0",
    marginRight: 26,
    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.14)" : "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 26,
    color: MINT,
    letterSpacing: "-0.02em"
  }
}, v), /*#__PURE__*/React.createElement(FMMono, {
  style: {
    fontSize: 9.5
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal"
}, /*#__PURE__*/React.createElement(LiveOpsBoard, null)))));

/* =================== COVERAGE COUNTERS =================== */
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
  const states = useCount(50, run, 1100),
    markets = useCount(200, run, 1400),
    yrs = useCount(5, run, 900);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: INK,
      color: "#fff",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(FMWrap, {
    style: {
      padding: "56px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: 24,
      textAlign: "center"
    }
  }, [[states, "+", "States covered"], [markets, "+", "Named metros"], [yrs, "K+", "Activations / year"], ["257", "K+", "Vetted ambassadors"]].map(([n, suf, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(36px,4vw,58px)",
      letterSpacing: "-0.03em",
      color: i % 2 ? MINT : ORANGE
    }
  }, typeof n === "number" ? n.toLocaleString() : n, suf), /*#__PURE__*/React.createElement(FMMono, {
    style: {
      fontSize: 10
    }
  }, l))))));
};

/* =================== COMPARISON SPINE =================== */
const Spine = () => {
  const rows = [["6 vendors, 6 reporting formats, 6 invoices", "1 PM, 1 platform, 1 invoice across markets"], ["Quarterly recap built by hand from PDFs", "Live dashboard with per-market roll-up"], ["Regional crew you've never met", "Captain-led national bench, vetted + trained"], ["Distributor finds out from an email Monday", "Distributor sees the recap in real time"], ["Soft accountability across markets", "GPS check-ins, photo capture, per-event sign-off"], ["Scale up, lose the consistency", "Same playbook, same crew tier, national"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(FMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal",
    style: {
      maxWidth: 760,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(FMMono, {
    color: ORANGE
  }, "// the patchwork problem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,58px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Stitching vendors together ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: ORANGE
    }
  }, "isn't a program.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.7)"
    }
  }, "The way most brands run multi-market field work versus the way it runs through one accountable operation.")), /*#__PURE__*/React.createElement("div", {
    className: "fm-cmp-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#111013",
      padding: "22px 24px"
    }
  }, /*#__PURE__*/React.createElement(FMMono, {
    color: "#E9776B"
  }, "The patchwork")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F1512",
      padding: "22px 24px"
    }
  }, /*#__PURE__*/React.createElement(FMMono, {
    color: MINT
  }, "One operation")), rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal",
    style: {
      background: "#0D0C0F",
      padding: "20px 24px",
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E9776B",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      lineHeight: 1.4
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.62)"
    }
  }, r[0])), /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal",
    style: {
      background: "#0B120F",
      padding: "20px 24px",
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: MINT,
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      lineHeight: 1.4
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: "#fff",
      fontWeight: 500
    }
  }, r[1])))))));
};

/* =================== WHAT'S INCLUDED — numbered rows =================== */
const Included = () => {
  const rows = [["Strategy & program design", "We map your field strategy across markets, channels, distributors, and trial moments before the program ships."], ["Staffing & training", "257K+ vetted ambassadors, pre-shift product training, category certifications, captain rotation across markets."], ["Distributor coordination", "RNDC, Southern Glazer's, Breakthru, plus regional houses. We file paperwork, coordinate demos, share recaps."], ["Retail account activation", "Co-op programs, scan-back demos, end-cap support, planogram audits, shelf-ready execution."], ["Sponsorship & event activation", "Stadium, festival, fan-zone, brand-house operations. Field crew that knows the venue rules."], ["Mobile & tour execution", "Routing, staffing, logistics, recap — we run the road program from kickoff to wrap."], ["Real-time reporting", "Every check-in, count, photo, and recap logged in Spark. Brand and distributor see the same numbers."], ["Recap & optimization", "Per-market recaps, trend analysis across programs, next-quarter playbook recommendations."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(FMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal",
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(FMMono, {
    color: MINT
  }, "// what's included"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em",
      lineHeight: 1.0
    }
  }, "Eight capabilities, one accountable team.")), /*#__PURE__*/React.createElement("div", null, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "fm-reveal",
    style: {
      display: "grid",
      gridTemplateColumns: "64px 1fr",
      gap: 20,
      padding: "22px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: i % 2 ? MINT : ORANGE,
      letterSpacing: "0.1em"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(19px,2vw,26px)",
      letterSpacing: "-0.02em"
    }
  }, r[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "7px 0 0",
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.66)",
      maxWidth: 760
    }
  }, r[1])))))));
};

/* =================== PROGRAM FLOW — horizontal rail =================== */
const Flow = () => {
  const steps = [["BRIEF", "Map field strategy across markets, channels, distributors, trial moments."], ["STAFF", "Captains + ambassadors selected per market. Compliance briefed pre-deployment."], ["EXECUTE", "Spark live-tracks every shift, count, photo, and check-in."], ["REPORT", "Real-time dashboard for brand, distributor, retailer — same numbers, same time."], ["OPTIMIZE", "Per-market trend analysis, recap-to-recap insight, next-quarter playbook."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0C0E12",
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(FMWrap, null, /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal",
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(FMMono, {
    color: ORANGE
  }, "// how a program runs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Brief to recap, one thread.")), /*#__PURE__*/React.createElement("div", {
    className: "fm-flow",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 16,
      position: "relative"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s[0],
    className: "fm-reveal",
    style: {
      position: "relative",
      background: "linear-gradient(180deg,#131518,#0E1013)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: i % 2 ? `${MINT}22` : `${ORANGE}22`,
      border: `1px solid ${i % 2 ? MINT : ORANGE}55`,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      color: i % 2 ? MINT : ORANGE
    }
  }, i + 1), /*#__PURE__*/React.createElement(FMMono, {
    color: i % 2 ? MINT : ORANGE,
    style: {
      fontSize: 11
    }
  }, s[0])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.7)"
    }
  }, s[1]))))));
};

/* =================== SPARK DASHBOARD =================== */
const Spark = () => {
  const [n, setN] = React.useState(4820);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v + Math.floor(Math.random() * 3)), 1300);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
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
      background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(168,124,224,0.13), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement(FMWrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-spark-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal"
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
      filter: "drop-shadow(0 0 18px rgba(168,124,224,0.4))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px",
      borderRadius: 999,
      background: "rgba(168,124,224,0.1)",
      border: "1px solid rgba(168,124,224,0.3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: MINT,
      boxShadow: `0 0 10px ${MINT}`,
      animation: "fm-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(FMMono, {
    color: MINT,
    style: {
      fontSize: 10
    }
  }, "LIVE \xB7 FIELD OPS"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.035em",
      lineHeight: 1.0
    }
  }, "One source of truth, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: MINT
    }
  }, "every market.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.74)"
    }
  }, "Every program runs through Spark \u2014 our in-house field platform. Live dashboards, GPS-verified check-ins, real-time counts, and auto-generated recaps. Brand, distributor, and retailer see the same numbers at the same time."), /*#__PURE__*/React.createElement("div", {
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
      background: MINT,
      color: "#08110D",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      textDecoration: "none",
      boxShadow: `0 8px 28px ${MINT}44`
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
    className: "fm-reveal",
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
  }, "spark.ignite / field-marketing")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(FMMono, {
    style: {
      fontSize: 10
    }
  }, "Activations logged this quarter"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: MINT,
      boxShadow: `0 0 8px ${MINT}`,
      animation: "fm-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(FMMono, {
    color: MINT,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: MINT,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginBottom: 20
    }
  }, n.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["GPS", "check-ins"], ["Photo", "field capture"], ["Live", "market roll-up"], ["Same-day", "recaps"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "16px 14px",
      background: "rgba(168,124,224,0.06)",
      border: "1px solid rgba(168,124,224,0.2)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: MINT,
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement(FMMono, {
    style: {
      fontSize: 9.5
    }
  }, l)))))))));
};

/* =================== PROOF RAIL =================== */
const Proof = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    color: "#fff",
    padding: "96px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url(../assets/staffing-liquid-death-acl.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center 42%"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg,rgba(10,11,13,0.86),rgba(10,11,13,0.94))"
  }
}), /*#__PURE__*/React.createElement(FMWrap, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal",
  style: {
    textAlign: "center",
    maxWidth: 640,
    margin: "0 auto 40px"
  }
}, /*#__PURE__*/React.createElement(FMMono, {
  color: ORANGE
}, "// brands running field through ignite"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(20px,2.4vw,30px)",
    letterSpacing: "-0.02em",
    lineHeight: 1.25
  }
}, "Beverage, spirits, telco, sports, CPG \u2014 executed market by market.")), /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal",
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    justifyContent: "center"
  }
}, ["LIQUID DEATH", "WHITE CLAW", "MARC ANTHONY", "MAS+", "TOTAL WIRELESS", "DUDE WIPES"].map(b => /*#__PURE__*/React.createElement("span", {
  key: b,
  style: {
    padding: "12px 22px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.04)",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: "0.02em"
  }
}, b)))));

/* =================== FAQ =================== */
const FAQ = () => {
  const items = [["What's the difference between field marketing and experiential?", "Experiential is one tool inside field marketing. Field marketing is broader — it owns retail, distributor coordination, sponsorship activation, sampling, and trade marketing. Experiential is the moment; field marketing is the discipline."], ["Can you run multi-market programs through a single partner?", "Yes — it's our core competency. Single PM, single platform, single recap across markets. We run programs from 3 markets up through national 50-state rollouts without changing the playbook."], ["Do you coordinate with our distributor partners?", "Yes. We work cleanly with RNDC, Southern Glazer's, Breakthru, and most regional houses. We file paperwork, coordinate demo schedules, and share recaps with both the brand and distributor."], ["How quickly can you scale a program?", "Single market: 5–10 business days standard, 48 hours rush. Multi-market national rollout: 2–4 weeks for briefing, paperwork, certifications, and crew readiness."], ["Do you replace our internal field marketing team?", "No. We're the embedded execution layer. Your team owns strategy, brand, and the retailer relationship; we bring vetted ambassadors, captains, compliance, and reporting at national scale."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: INK,
      color: "#fff",
      padding: "110px 0",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(FMWrap, {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-reveal",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(FMMono, {
    color: MINT
  }, "// questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.6vw,50px)",
      letterSpacing: "-0.03em"
    }
  }, "Field marketing, answered.")), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fm-reveal",
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

/* =================== RELATED + CTA =================== */
const Related = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#0C0E12",
    color: "#fff",
    padding: "80px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(FMWrap, null, /*#__PURE__*/React.createElement(FMMono, {
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
}, [["Event Staffing", "/services/event-staffing"], ["Product Sampling", "/services/product-sampling"], ["Experiential Marketing", "/services/experiential-marketing"], ["Mobile Tours", "/services/mobile-tours"], ["Retail Demo Programs", "/services/retail-demo-programs"], ["CPG Beverage", "/industries/cpg-beverage"], ["Spark", "/spark"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
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
    color: MINT
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
}), /*#__PURE__*/React.createElement(FMWrap, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("h2", {
  className: "fm-reveal",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,5vw,72px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: 0
  }
}, "Run it as one program."), /*#__PURE__*/React.createElement("p", {
  className: "fm-reveal",
  style: {
    margin: "20px auto 0",
    maxWidth: 560,
    fontSize: 18,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.9)"
  }
}, "Tell us the markets. We'll come back with a plan, a bench, and one platform to watch it all happen."), /*#__PURE__*/React.createElement("div", {
  className: "fm-reveal",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=field-marketing",
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
    "data-screen-label": "01 Field Marketing"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#8A5CD1",
    label: "Field Marketing",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Counters, null), /*#__PURE__*/React.createElement(Spine, null), /*#__PURE__*/React.createElement(Included, null), /*#__PURE__*/React.createElement(Flow, null), /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesFieldMarketing: App
});
})();
