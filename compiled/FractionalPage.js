/* =========================================================================
   FRACTIONAL — service page (reworked)
   Source of truth: Ignite Fractional · Sales Sheet
   ========================================================================= */
const {
  useState: fpUseState,
  useEffect: fpUseEffect,
  useRef: fpUseRef
} = React;

/* ------- shared primitives (local copies; named to avoid collisions) ----- */
const FpOpsLine = ({
  children,
  color = "var(--ignite-500)"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color
  }
}, /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: color,
    boxShadow: `0 0 12px ${color}`,
    animation: "fpPulse 1.8s infinite"
  }
}), children);
const FpDisplay = ({
  children,
  dark = false,
  size = "clamp(56px, 8vw, 124px)",
  maxWidth = 1200
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: size,
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    maxWidth,
    textWrap: "balance",
    color: dark ? "var(--fg-1-inv)" : "var(--fg-1)"
  }
}, children);
const FpItalic = ({
  children,
  color = "var(--ignite-500)"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color,
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 400
  }
}, children);

/* ==================================================================
   01 · HERO — animated "founder's to-do" chaos
   ================================================================== */

/* a curated, slightly absurd inbox of founder-as-VP tasks */
const FOUNDER_TASKS = [{
  t: "Pitch Whole Foods Northeast buyer (again)",
  tag: "SALES"
}, {
  t: "Refresh sell sheet — investor sees deck Friday",
  tag: "MKTG"
}, {
  t: "Find 4 demo staff for Costco roadshow Sat",
  tag: "OPS"
}, {
  t: "Reconcile slotting fees w/ broker invoice",
  tag: "FIN"
}, {
  t: "Reply to Sprouts category review email",
  tag: "SALES"
}, {
  t: "Approve trade show booth mockup",
  tag: "MKTG"
}, {
  t: "Reorder samples — 2 events out of stock",
  tag: "OPS"
}, {
  t: "Schedule QBR w/ KeHE",
  tag: "SALES"
}, {
  t: "Update CRM accounts (3 weeks behind)",
  tag: "OPS"
}, {
  t: "Draft promo cadence for Q3",
  tag: "MKTG"
}, {
  t: "Sign event insurance COI for Austin",
  tag: "OPS"
}, {
  t: "Review velocity dip — store #12, store #44",
  tag: "DATA"
}, {
  t: "Confirm broker meeting in Dallas",
  tag: "SALES"
}, {
  t: "Photos from Saturday demo — where are they?",
  tag: "MKTG"
}, {
  t: "Push back launch ship date w/ co-packer",
  tag: "OPS"
}, {
  t: "Build trade calendar tied to P&L (Q4)",
  tag: "FIN"
}, {
  t: "Train 6 new ambassadors for tour leg 2",
  tag: "OPS"
}, {
  t: "Negotiate slotting at H-E-B",
  tag: "SALES"
}, {
  t: "Sample drop — 14 buyers, hand-deliver",
  tag: "MKTG"
}, {
  t: "Read 47 unread Slack threads from staff",
  tag: "OPS"
}];

/* small map of tag → accent */
const TAG_COLORS = {
  SALES: "var(--ignite-500)",
  MKTG: "#FFB627",
  OPS: "#9AD7E0",
  DATA: "#C7B8FF",
  FIN: "#85E0A3"
};
const TodoChaos = () => {
  const [items, setItems] = fpUseState(() => {
    /* seed with 5 items so the panel isn't empty on first paint */
    return FOUNDER_TASKS.slice(0, 5).map((task, i) => ({
      id: i,
      ...task,
      done: false,
      age: 5 - i
    }));
  });
  const [tick, setTick] = fpUseState(0);
  const counterRef = fpUseRef(0);
  counterRef.current = items.length ? Math.max(...items.map(i => i.id)) : 0;
  fpUseEffect(() => {
    /* main heartbeat — add a task most ticks; very rarely cross one off */
    const iv = setInterval(() => {
      setTick(t => t + 1);
      setItems(prev => {
        const next = [...prev];
        /* 1-in-7 chance: cross off the oldest unchecked item */
        if (Math.random() < 0.14 && next.some(it => !it.done)) {
          const oldest = next.find(it => !it.done);
          if (oldest) oldest.done = true;
        }
        /* every tick: push a new item on top */
        const taskIdx = (tick + counterRef.current) % FOUNDER_TASKS.length;
        const task = FOUNDER_TASKS[Math.floor(Math.random() * FOUNDER_TASKS.length)];
        next.unshift({
          id: counterRef.current + 1,
          ...task,
          done: false,
          age: 0
        });
        /* keep list bounded — drop checked-off items first, then oldest */
        while (next.length > 9) {
          const doneIdx = next.findIndex(it => it.done);
          if (doneIdx !== -1) next.splice(doneIdx, 1);else next.pop();
        }
        return next;
      });
    }, 1700);
    return () => clearInterval(iv);
    // eslint-disable-next-line
  }, []);

  /* clock that races forward */
  fpUseEffect(() => {
    const iv = setInterval(() => setTick(t => t + 0.001), 50);
    return () => clearInterval(iv);
  }, []);

  /* fake racing timestamp */
  const baseMs = 60 * 60 * 23 * 1000 + 47 * 60 * 1000; // 23:47
  const offsetMs = Date.now() % 60000 * 4;
  const totalMs = baseMs + offsetMs;
  const hh = String(Math.floor(totalMs / 3600000) % 24).padStart(2, "0");
  const mm = String(Math.floor(totalMs / 60000) % 60).padStart(2, "0");
  const ss = String(Math.floor(totalMs / 1000) % 60).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: 560,
      perspective: 1400
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes fpTodoIn {
          0%   { opacity:0; transform: translateY(-22px) rotate(var(--rot, 0deg)) scale(0.96); }
          60%  { opacity:1; }
          100% { opacity:1; transform: translateY(0) rotate(var(--rot, 0deg)) scale(1); }
        }
        @keyframes fpStrike {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fpJitter {
          0%,100% { transform: translate(0,0) rotate(-0.4deg); }
          50%     { transform: translate(1px, -1px) rotate(0.4deg); }
        }
        @keyframes fpPulse {
          0%,100% { opacity: 1; }
          50%     { opacity: 0.35; }
        }
        @keyframes fpClockTick {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(0, -1px); }
        }
        @keyframes fpStampIn {
          0%   { opacity:0; transform: rotate(-12deg) scale(2); }
          70%  { opacity:1; transform: rotate(-12deg) scale(0.95); }
          100% { opacity:0.9; transform: rotate(-12deg) scale(1); }
        }
        @keyframes fpScribble {
          0%   { transform: rotate(8deg) translateX(-3px); }
          100% { transform: rotate(8deg) translateX(3px); }
        }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, #f6f1e6 0%, #efe7d6 100%)",
      borderRadius: 8,
      boxShadow: "0 30px 80px rgba(0,0,0,0.45), 0 4px 0 #c8bd9c inset",
      transform: "rotate(2deg)",
      animation: "fpJitter 3.6s ease-in-out infinite",
      overflow: "hidden"
    }
  }, Array.from({
    length: 18
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: 56,
      right: 24,
      top: 72 + i * 36,
      height: 1,
      background: "rgba(70,40,30,0.10)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 44,
      width: 1,
      background: "rgba(200,40,30,0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 28,
      top: 24,
      width: 64,
      height: 64,
      borderRadius: 999,
      border: "3px solid rgba(120,60,30,0.18)",
      boxShadow: "inset 0 0 0 6px transparent, 0 0 0 2px rgba(120,60,30,0.08)",
      transform: "rotate(-8deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: -18,
      transform: "translateX(-50%)",
      width: 110,
      height: 36,
      background: "#3a3a3a",
      borderRadius: "6px 6px 12px 12px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: -8,
      transform: "translateX(-50%)",
      width: 18,
      height: 18,
      borderRadius: 999,
      background: "#1c1c1c",
      border: "2px solid #555"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      right: 24,
      top: 18,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      fontFamily: "var(--font-mono)",
      color: "rgba(40,25,15,0.7)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605 FOUNDER'S TO-DO \xB7 TUESDAY"), /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "fpClockTick 0.5s ease-in-out infinite",
      color: "rgba(200,40,30,0.85)",
      fontWeight: 700
    }
  }, hh, ":", mm, ":", ss)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      right: 24,
      top: 40,
      fontFamily: "Georgia, serif",
      fontStyle: "italic",
      fontSize: 13,
      color: "rgba(40,25,15,0.55)"
    }
  }, "\"Just one more thing before bed\u2026\""), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      right: 18,
      top: 78,
      bottom: 56
    }
  }, items.map((it, i) => {
    const rot = (it.id * 37 % 7 - 3) * 0.3;
    const tagColor = TAG_COLORS[it.tag] || "#444";
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        "--rot": `${rot}deg`,
        position: "absolute",
        left: 0,
        right: 0,
        top: i * 36,
        display: "flex",
        alignItems: "center",
        gap: 12,
        animation: "fpTodoIn 380ms cubic-bezier(.2,.8,.2,1) both",
        transform: `rotate(${rot}deg)`,
        fontFamily: "'Caveat', 'Bradley Hand', 'Comic Sans MS', cursive",
        color: it.done ? "rgba(40,25,15,0.45)" : "rgba(35,20,10,0.92)",
        fontSize: 22,
        lineHeight: 1,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "0 0 22px",
        width: 22,
        height: 22,
        border: "1.5px solid rgba(40,25,15,0.5)",
        borderRadius: 3,
        background: "rgba(255,250,240,0.4)"
      }
    }, it.done && /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "22",
      height: "22",
      style: {
        position: "absolute",
        inset: -2,
        color: "rgb(200,40,30)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 13l6 6L22 4",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        position: "relative"
      }
    }, it.t, it.done && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -2,
        right: -2,
        top: "55%",
        height: 3,
        background: "rgb(200,40,30)",
        borderRadius: 2,
        transformOrigin: "left center",
        animation: "fpStrike 360ms ease-out both"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontWeight: 700,
        padding: "2px 6px",
        borderRadius: 3,
        background: tagColor,
        color: "#1a1208"
      }
    }, it.tag));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      right: 24,
      bottom: 18,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      fontFamily: "var(--font-mono)",
      color: "rgba(40,25,15,0.6)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, items.filter(i => !i.done).length, " OPEN \xB7 ", items.filter(i => i.done).length, " DONE TODAY"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(200,40,30,0.85)",
      fontWeight: 700
    }
  }, "QUEUE: \u221E")), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 18,
      top: 220,
      padding: "6px 18px",
      border: "3px solid rgba(200,40,30,0.85)",
      color: "rgba(200,40,30,0.85)",
      fontFamily: "var(--font-mono)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "0.12em",
      transform: "rotate(-12deg)",
      animation: "fpStampIn 600ms cubic-bezier(.2,.8,.2,1) both",
      background: "rgba(246,241,230,0.5)"
    }
  }, "OVERDUE"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 12,
      bottom: 100,
      fontFamily: "'Caveat', cursive",
      color: "rgba(200,40,30,0.85)",
      fontSize: 26,
      transform: "rotate(8deg)",
      textShadow: "0 0 1px rgba(200,40,30,0.4)"
    }
  }, "!! URGENT")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -28,
      bottom: -28,
      background: "var(--ignite-500)",
      color: "#0b0905",
      padding: "18px 22px",
      borderRadius: 6,
      boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
      transform: "rotate(-3deg)",
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 6,
      opacity: 0.85
    }
  }, "// IGNITE \xB7 MONDAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-0.02em",
      lineHeight: 1.05
    }
  }, "We take this whole list off your desk.")));
};

/* "VP of [cycling role]" — rotates through founder-as-VP roles, lands on Everything */
const VP_ROLES = ["Sales.", "Marketing.", "Demos.", "Slotting.", "Brokers.", "Trade Shows.", "Sampling.", "Field Ops.", "Hiring.", "Logistics.", "Everything."];
const VpCycler = () => {
  const [idx, setIdx] = fpUseState(0);
  fpUseEffect(() => {
    const iv = setInterval(() => {
      setIdx(c => (c + 1) % VP_ROLES.length);
    }, 2100);
    return () => clearInterval(iv);
  }, []);
  const word = VP_ROLES[idx];
  const showFinal = word === "Everything.";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement(FpItalic, null, "VP\xA0of\xA0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      minWidth: "7ch",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: word,
    style: {
      fontStyle: "italic",
      color: showFinal ? "var(--ignite-500)" : "#FFB627",
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 400,
      display: "inline-block",
      animation: showFinal ? "vpLand 900ms cubic-bezier(.18,.9,.2,1.2) both" : "vpFlick 900ms cubic-bezier(.4,0,.2,1) both",
      textShadow: showFinal ? "0 0 40px rgba(255,90,31,0.45)" : "none"
    }
  }, word), showFinal && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: "0.1em",
      bottom: "0.04em",
      height: 4,
      background: "var(--ignite-500)",
      transformOrigin: "left center",
      animation: "vpUnderline 540ms cubic-bezier(.2,.8,.2,1) 180ms both"
    }
  })), /*#__PURE__*/React.createElement("style", null, `
        @keyframes vpFlick { 0%{opacity:0;transform:translateY(-8px) skewX(-6deg);} 60%{opacity:1;} 100%{opacity:1;transform:translateY(0) skewX(0);} }
        @keyframes vpLand  { 0%{opacity:0;transform:translateY(14px) scale(0.92);} 60%{opacity:1;transform:translateY(-3px) scale(1.04);} 100%{opacity:1;transform:translateY(0) scale(1);} }
        @keyframes vpUnderline { from{transform:scaleX(0);} to{transform:scaleX(1);} }
        @keyframes vpCaret { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes vpJitter { 0%,100%{transform:translate(0,0);} 25%{transform:translate(-1px,1px);} 75%{transform:translate(1px,-1px);} }
        @keyframes vpStatusBlink { 0%,100%{background:rgba(255,90,31,0.12);} 50%{background:rgba(255,90,31,0.28);} }
        @keyframes vpMarquee { from{transform:translateX(0);} to{transform:translateX(-50%);} }
      `));
};
const FractionalHero2 = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: "var(--ink-000)",
    padding: "120px 0 110px",
    overflow: "hidden",
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.05
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 18% 30%, rgba(255,90,31,0.18), transparent 55%)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("link", {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}), /*#__PURE__*/React.createElement("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "1px solid var(--ink-400)",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(6px)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 36,
    padding: "10px 0",
    animation: "vpMarquee 38s linear infinite",
    whiteSpace: "nowrap",
    width: "max-content"
  }
}, Array.from({
  length: 2
}).map((_, k) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: k
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u25CF SYSTEM STATUS"), /*#__PURE__*/React.createElement("span", null, "FOUNDER CPU \xB7 OVERLOADED"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#FFB627"
  }
}, "\u25C6 INBOX: 247 UNREAD"), /*#__PURE__*/React.createElement("span", null, "BUYER PIPELINE \xB7 STALLED"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u25C6 DEMO STAFF \xB7 4 NO-SHOWS"), /*#__PURE__*/React.createElement("span", null, "SELL SHEET \xB7 17 MONTHS OLD"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#FFB627"
  }
}, "\u25CF SLOTTING FEES \xB7 UNRECONCILED"), /*#__PURE__*/React.createElement("span", null, "BROKER LAST CONTACT \xB7 23 DAYS"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u25C6 Q3 PLAN \xB7 NOT STARTED"), /*#__PURE__*/React.createElement("span", null, "\u2605 IGNITE \xB7 STANDING BY"))))), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    marginTop: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.05fr) 520px",
    gap: 80,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "6px 12px",
    borderRadius: 999,
    animation: "vpStatusBlink 1.8s ease-in-out infinite",
    border: "1px solid rgba(255,90,31,0.4)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)",
    marginBottom: 22
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "var(--ignite-500)"
  }
}), "FRACTIONAL \xB7 VETERAN-OWNED \xB7 50 STATES"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 4,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    textWrap: "balance",
    margin: 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    fontSize: "clamp(36px, 4.2vw, 64px)",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: "var(--fg-2)",
    lineHeight: 1.02
  }
}, "Stop being your own"), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    marginTop: 6,
    fontSize: "clamp(64px, 8.2vw, 124px)",
    letterSpacing: "-0.04em",
    lineHeight: 1.08,
    color: "var(--fg-1)",
    minHeight: "2.16em"
  }
}, /*#__PURE__*/React.createElement(VpCycler, null))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32,
    fontSize: 21,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 560
  }
}, "Senior CPG ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "var(--fg-1)"
  }
}, "Sales, Trade Marketing & Field"), " embedded in your brand for a fraction of the cost of hiring it. One team for the work most brands split across a broker, a trade marketing manager, and three agencies. In-market in ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "var(--fg-1)"
  }
}, "~2 weeks"), ". Month-to-month after the first 90 days."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(AccentBtn, {
  size: "lg",
  onClick: () => window.open("https://calendly.com/kyle-igniteproductions/30min?back=1", "_blank")
}, "Book a 30-min call"), /*#__PURE__*/React.createElement(GhostBtn, {
  size: "lg",
  onClick: () => location.href = "/contact"
}, "Get in touch")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, /*#__PURE__*/React.createElement("span", null, "\u21B3 12+ YRS IN CPG"), /*#__PURE__*/React.createElement("span", null, "\u21B3 50 STATES"), /*#__PURE__*/React.createElement("span", null, "\u21B3 NO LOCKED CONTRACTS"))), /*#__PURE__*/React.createElement(TodoChaos, null))));

/* ==================================================================
   01.5 · PAIN BANNER — "we've all been there" scrolling confessions
   ================================================================== */
const PAIN_POINTS = ["Building a sell sheet in Canva at 2am", "Hoping the buyer calls you back after that last-ditch text", "Three Slack DMs to the broker. Two unread. One \"k.\"", "Forecasting Q4 in a spreadsheet you don't fully trust", "Booking a flight to meet a buyer who already rescheduled twice", "Approving a demo team you've never met for a Saturday at Costco", "Reconciling slotting fees against a P&L that hasn't been updated since March", "Re-saving \"FINAL_v9_USE_THIS_ONE.pdf\"", "Following up on the Sprouts review three Mondays in a row", "Wondering why velocity is flat at store #44", "Lying awake doing trade math instead of sleeping", "Posting a job for a VP of Sales you can't actually afford", "Realizing the photos from Saturday's activation never came in", "Negotiating slotting on the same call as picking up your kid", "Showing up to a trade show with a booth and zero leads queued", "Telling your investors \"we just need one more hire\" — again", "Eating a granola bar at your desk because the team needs a recap deck by EOD", "Pretending the broker scorecard isn't a vibe check"];
const FractionalPainBanner = () => {
  /* split into 3 staggered rows for variety */
  const rows = [[PAIN_POINTS.slice(0, 6), 60, "var(--ignite-500)"], [PAIN_POINTS.slice(6, 12), 80, "#FFB627"], [PAIN_POINTS.slice(12), 70, "var(--ignite-500)"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      padding: "70px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes pnMarq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--ignite-500)",
      fontWeight: 700
    }
  }, "// CONFESSIONS \xB7 ANONYMOUS \xB7 CPG FOUNDERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "linear-gradient(90deg, rgba(255,90,31,0.4), transparent)"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(48px, 6.4vw, 104px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.92,
      textWrap: "balance",
      maxWidth: 1200
    }
  }, "We've all been there", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)",
      fontFamily: "Georgia, serif",
      fontWeight: 400
    }
  }, "\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, rows.map(([items, speed, color], ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      overflow: "hidden",
      maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      width: "max-content",
      animation: `pnMarq ${speed}s linear infinite`,
      animationDirection: ri % 2 ? "reverse" : "normal"
    }
  }, [...items, ...items].map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 24px",
      borderRadius: 999,
      border: "1px solid var(--ink-400)",
      background: "var(--ink-000)",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: "var(--fg-1)",
      whiteSpace: "nowrap",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em"
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, line))))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3.2vw, 52px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.05,
      textWrap: "balance"
    }
  }, "And now you're reading the", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      fontStyle: "italic",
      fontFamily: "Georgia, serif",
      fontWeight: 400
    }
  }, " page that fixes it.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, "\u2193 KEEP READING"))));
};

/* ==================================================================
   02 · STATS
   ================================================================== */
const FractionalStats = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)",
    padding: "56px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
    alignItems: "baseline"
  }
}, [["12+", "Years in CPG"], ["42K+", "Brand ambassadors"], ["50", "States covered"], ["~2 wk", "Time to in-market"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    borderLeft: i === 0 ? "none" : "1px solid var(--ink-400)",
    paddingLeft: i === 0 ? 0 : 32
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(48px, 6vw, 96px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.95,
    whiteSpace: "nowrap",
    background: "linear-gradient(180deg, #fff 0%, #ffb8a3 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, l))))));

/* ==================================================================
   03 · TWO ENGINES — Sales & Marketing side-by-side
   ================================================================== */
const FractionalEngines = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 980,
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " TWO ENGINES \xB7 ONE UNIFIED TEAM"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 5.6vw, 88px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    color: "var(--fg-1-inv)",
    textWrap: "balance"
  }
}, "The fastest way to grow a CPG brand isn't another hire \u2014", /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    fontStyle: "italic",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 400,
    color: "#fff",
    background: "var(--ignite-500)",
    padding: "0.04em 0.22em 0.08em",
    transform: "rotate(-2deg)",
    borderRadius: 6,
    boxShadow: "0 18px 44px rgba(255,90,31,0.4)",
    marginLeft: "0.12em"
  }
}, " it's a fractional team plugged in by Monday."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  }
}, [{
  icon: "⚡",
  tag: "ENGINE 01",
  title: "CPG Sales",
  head: "Get on shelf. Stay on shelf.",
  blurb: "Senior sales leadership without the full-time overhead. We own buyer pitching, distribution, slotting, and account management end-to-end.",
  chips: ["Buyer meetings", "Chain mgmt", "Slotting", "Distribution", "Trade programs", "Velocity"],
  accent: "var(--ignite-500)"
}, {
  icon: "✦",
  tag: "ENGINE 02",
  title: "Marketing",
  head: "Make them remember you.",
  blurb: "Sell sheets, trade marketing, co-op & MDF programs, sponsorships & partnerships, demo & sampling, and experiential activations. The presence that gets you remembered — and bought.",
  chips: ["Sell sheets", "Trade marketing", "Co-op / MDF", "Sponsorships", "Partnerships", "Sampling", "Trade shows", "Activations"],
  accent: "#FFB627"
}].map(e => /*#__PURE__*/React.createElement("div", {
  key: e.tag,
  style: {
    position: "relative",
    background: "var(--paper-000)",
    border: "1px solid var(--paper-200)",
    borderRadius: 20,
    padding: 44,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 320,
    height: 320,
    borderRadius: 999,
    background: `radial-gradient(circle, ${e.accent}33, transparent 60%)`,
    filter: "blur(20px)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 44,
    height: 44,
    borderRadius: 8,
    background: e.accent,
    color: "#0b0905",
    display: "grid",
    placeItems: "center",
    fontSize: 22,
    fontWeight: 700
  }
}, e.icon), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 13,
    letterSpacing: "0.16em",
    color: e.accent
  }
}, e.tag)), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--fg-3-inv)",
    marginBottom: 14
  }
}, e.title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(34px, 3.4vw, 52px)",
    letterSpacing: "-0.025em",
    lineHeight: 1.02,
    color: "var(--fg-1-inv)",
    marginBottom: 22,
    textWrap: "balance"
  }
}, e.head), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "var(--fg-2-inv)",
    marginBottom: 28
  }
}, e.blurb), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }
}, e.chips.map(c => /*#__PURE__*/React.createElement("span", {
  key: c,
  style: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "var(--paper-100)",
    color: "var(--fg-1-inv)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    border: "1px solid var(--paper-200)"
  }
}, c)))))))));

/* ==================================================================
   04 · FROM → TO — transformation pairs
   ================================================================== */
const FROM_TO = [["Founder pitching buyers at 11pm", "Senior CPG closer in your seat"], ["Brokers you can't reach", "Weekly read-outs & scorecards"], ["Slotting fees with no plan", "Trade calendar tied to P&L"], ["Demos run by no-shows", "42K vetted ambassadors"], ["Sell sheet from 2022", "Buyer-ready brand kit"], ["$240K+ for two FT hires", "A retainer that flexes monthly"]];
const FractionalFromTo = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " FROM \u2192 TO"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 5.6vw, 88px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    maxWidth: 1100,
    textWrap: "balance"
  }
}, "What changes ", /*#__PURE__*/React.createElement(FpItalic, null, "by month two.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16
  }
}, FROM_TO.map(([from, to], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto 1fr",
    alignItems: "center",
    gap: 18,
    padding: "22px 24px",
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 13,
    letterSpacing: "0.16em",
    color: "var(--fg-3)"
  }
}, "0", i + 1), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    lineHeight: 1.45,
    color: "var(--fg-3)",
    textDecoration: "line-through",
    textDecorationColor: "rgba(255,90,31,0.6)",
    textDecorationThickness: 2
  }
}, from), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 16,
    color: "var(--ignite-500)",
    letterSpacing: "0.1em"
  }
}, "\u2192"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 17,
    lineHeight: 1.3,
    color: "var(--fg-1)",
    letterSpacing: "-0.01em"
  }
}, to))))));

/* ==================================================================
   05 · BUILT FOR + WEEK ONE — two-column promise
   ================================================================== */
const BUILT_FOR = ["Are doing $1M–$50M and ready to scale", "Need senior CPG leadership without $250K+ overhead", "Are stuck managing brokers & demos themselves", "Want results before another funding round", "Have product-market fit but flat velocity", "Are losing time to \"founder-as-VP\" syndrome"];
const WEEK_ONE = [["DAY 1", "Embedded senior team plugged into your stack"], ["WEEK 1", "Brand & account audit — buyer-by-buyer"], ["WEEK 2", "Custom 90-day playbook delivered & approved"], ["WEEK 3", "First buyer pitches & sample drops out the door"], ["ONGOING", "Friday read-outs — what shipped, stuck, next"]];
const FractionalBuiltFor = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 920,
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " BEST FOR \xB7 $1M\u2013$50M BRANDS SCALING DISTRIBUTION"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px, 5.6vw, 88px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    color: "var(--fg-1-inv)",
    textWrap: "balance",
    margin: 0
  }
}, "Built for brands that have product-market fit."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22,
    display: "inline-block"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "clamp(28px, 3.4vw, 52px)",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
    color: "#fff",
    background: "var(--ignite-500)",
    padding: "0.12em 0.32em 0.18em",
    transform: "rotate(-1.5deg)",
    borderRadius: 8,
    boxShadow: "0 18px 44px rgba(255,90,31,0.35)"
  }
}, "Not the bandwidth to scale it."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 40,
    background: "var(--paper-000)",
    border: "1px solid var(--paper-200)",
    borderRadius: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 13,
    letterSpacing: "0.18em",
    color: "var(--ignite-500)",
    marginBottom: 24
  }
}, "\u25CF BUILT FOR BRANDS THAT\u2026"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, BUILT_FOR.map((line, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    paddingBottom: 14,
    borderBottom: i === BUILT_FOR.length - 1 ? "none" : "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    flex: "0 0 24px",
    color: "var(--ignite-500)",
    fontSize: 22,
    lineHeight: 1
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 1.35,
    color: "var(--fg-1-inv)",
    letterSpacing: "-0.01em",
    whiteSpace: "nowrap"
  }
}, line))))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 40,
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    border: "1px solid var(--ink-400)",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 80% 0%, rgba(255,90,31,0.18), transparent 50%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 13,
    letterSpacing: "0.18em",
    color: "var(--ignite-500)",
    marginBottom: 24
  }
}, "\u25CF WHAT YOU GET, WEEK ONE"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 0
  }
}, WEEK_ONE.map(([when, what], i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "grid",
    gridTemplateColumns: "90px 1fr",
    alignItems: "baseline",
    gap: 18,
    padding: "16px 0",
    borderTop: "1px dashed var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    fontWeight: 700
  }
}, when), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.35,
    color: "var(--fg-1)",
    letterSpacing: "-0.01em",
    whiteSpace: "nowrap"
  }
}, what)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    padding: "16px 18px",
    background: "rgba(255,90,31,0.08)",
    borderRadius: 8,
    borderLeft: "3px solid var(--ignite-500)",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.06em",
    color: "var(--fg-2)",
    lineHeight: 1.55
  }
}, "No proposal-then-silence cycle. Senior people, embedded inside your tools \u2014 Slack, Notion, CRM \u2014 on day one."))))));

/* ==================================================================
   06 · CADENCE — Weekly / Monthly / Quarterly
   ================================================================== */
const CADENCE = [{
  when: "WEEKLY",
  head: "Pipeline review · daily Slack",
  body: "Friday read-out on hot accounts. Daily comms on what just shipped, what just stuck, what's next.",
  bullets: ["Hot-account read", "Daily standups", "Slack-native"]
}, {
  when: "MONTHLY",
  head: "P&L impact · trade calendar",
  body: "Account-by-account performance read. Slotting & spend reconciliation. Trade calendar planning for the next 60 days.",
  bullets: ["Per-account P&L", "Slot/spend recon", "60-day plan"]
}, {
  when: "QUARTERLY",
  head: "Joint business plan refresh",
  body: "Brand health check. Broker scorecards. Trade ROI deep-dive. One QBR for the founder — not two siloed updates.",
  bullets: ["Brand health", "Broker scorecards", "Single QBR"]
}];
const FractionalCadence = () => /*#__PURE__*/React.createElement("section", {
  id: "how-we-plug-in",
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " HOW WE PLUG IN"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 5.6vw, 88px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    maxWidth: 1100,
    textWrap: "balance"
  }
}, "A real cadence \u2014", /*#__PURE__*/React.createElement(FpItalic, null, " not a check-in call.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 64,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  }
}, CADENCE.map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: c.when,
  style: {
    position: "relative",
    padding: 36,
    borderRadius: 16,
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 360
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,90,31,0.12)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 24
  }
}, c.when), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 26,
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    marginBottom: 16,
    textWrap: "balance"
  }
}, c.head), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)"
  }
}, c.body)), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "28px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, c.bullets.map(b => /*#__PURE__*/React.createElement("li", {
  key: b,
  style: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u21B3"), b))), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    top: 24,
    right: 24,
    fontFamily: "var(--font-stencil)",
    fontSize: 28,
    color: "var(--fg-3)",
    opacity: 0.4
  }
}, "0", i + 1))))));

/* ==================================================================
   07 · COMPARISON — Ignite vs FT Hire vs Agency
   ================================================================== */
const COMPARE_ROWS = [["Time to start", "~2 weeks", "3–6 mos", "4–8 wks"], ["CPG-specific senior leadership", true, "maybe", false], ["42K+ ambassadors / boots-on-ground", true, false, "subbed"], ["Sales + Marketing under one roof", true, "2 hires", "usually one"], ["Scale up / down monthly", true, "severance", "annual"], ["Skin in the game on revenue", true, "salary only", false]];
const cellRender = v => {
  if (v === true) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      fontSize: 22,
      fontWeight: 700
    }
  }, "\u2713");
  if (v === false) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)",
      fontSize: 22
    }
  }, "\u2715");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.14em",
      color: "var(--fg-2)",
      textTransform: "uppercase"
    }
  }, v);
};
const FractionalCompare = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 920,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " HONEST COMPARISON"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 5.6vw, 88px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    color: "var(--fg-1-inv)",
    textWrap: "balance"
  }
}, "Fractional vs ", /*#__PURE__*/React.createElement(FpItalic, null, "everything else."))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--paper-000)",
    borderRadius: 20,
    border: "1px solid var(--paper-200)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
    padding: "20px 28px",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    alignItems: "center",
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "// WHAT MATTERS"), ["IGNITE FRACTIONAL", "FULL-TIME HIRE", "TYPICAL AGENCY"].map((h, i) => /*#__PURE__*/React.createElement("div", {
  key: h,
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 14,
    letterSpacing: "0.14em",
    color: i === 0 ? "var(--ignite-500)" : "var(--fg-2)",
    textAlign: "center"
  }
}, h))), COMPARE_ROWS.map((row, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
    padding: "22px 28px",
    alignItems: "center",
    gap: 24,
    background: i % 2 ? "var(--paper-050, #f1ebde)" : "var(--paper-000)",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 17,
    color: "var(--fg-1-inv)",
    letterSpacing: "-0.01em"
  }
}, row[0]), row.slice(1).map((v, j) => /*#__PURE__*/React.createElement("div", {
  key: j,
  style: {
    textAlign: "center",
    background: j === 0 ? "rgba(255,90,31,0.06)" : "transparent",
    padding: j === 0 ? "10px 8px" : 0,
    borderRadius: j === 0 ? 8 : 0
  }
}, cellRender(v)))))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3-inv)"
  }
}, "// SAME WORK \xB7 \u2153 THE COST \xB7 MONTH-TO-MONTH")));

/* ==================================================================
   08 · FIRST 90 DAYS — three-phase timeline
   ================================================================== */
const PHASES = [{
  range: "DAYS 1–14",
  name: "Embed",
  body: "Brand audit. Account mapping. Quick-win ID. Tooling embedded inside your stack — Slack, Notion, CRM.",
  out: "Custom 90-day playbook"
}, {
  range: "DAYS 15–45",
  name: "First Wins",
  body: "First buyer pitches go out. Sell sheet refresh. First demo / sampling activation in-market. Weekly Friday read-outs.",
  out: "First chain meetings booked"
}, {
  range: "DAYS 46–90",
  name: "Compounding",
  body: "First POs land. Velocity baselines set. Trade show or activation executed. Decision point: scale up, narrow scope, or stay course.",
  out: "Measurable lift on doors / velocity"
}];
const Fractional90Days = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " THE FIRST 90 DAYS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 5.6vw, 88px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    maxWidth: 1100,
    textWrap: "balance"
  }
}, "From signed to in-market \u2014", /*#__PURE__*/React.createElement(FpItalic, null, " in three phases.")), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    marginTop: 80
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: "8.33%",
    right: "8.33%",
    top: 32,
    height: 2,
    background: "linear-gradient(90deg, var(--ignite-500) 0%, #FFB627 50%, #85E0A3 100%)",
    opacity: 0.5
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  }
}, PHASES.map((p, i) => /*#__PURE__*/React.createElement("div", {
  key: p.name,
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 64,
    height: 64,
    borderRadius: 999,
    background: "var(--ink-100)",
    border: "2px solid var(--ignite-500)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 24,
    color: "var(--ignite-500)",
    margin: "0 auto",
    boxShadow: "0 0 24px rgba(255,90,31,0.4)",
    position: "relative",
    zIndex: 1
  }
}, "0", i + 1), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    padding: 28,
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    minHeight: 280
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 8
  }
}, p.range), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 32,
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    marginBottom: 14
  }
}, p.name), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    marginBottom: 24
  }
}, p.body), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 18,
    borderTop: "1px dashed var(--ink-400)",
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "OUTPUT \u2192"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15,
    color: "var(--fg-1)",
    lineHeight: 1.3
  }
}, p.out)))))))));

/* ==================================================================
   09 · FINAL CTA — match the sales sheet voice
   ================================================================== */
const FractionalFinalCTA = () => {
  const [t, setT] = fpUseState(0);
  fpUseEffect(() => {
    const iv = setInterval(() => setT(x => x + 1), 90);
    return () => clearInterval(iv);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "180px 0 160px",
      background: "#0b0905",
      color: "#fff",
      overflow: "hidden",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
      @keyframes ctaSweep {
        0%   { transform: translate(-30%, -30%) rotate(0deg); }
        100% { transform: translate(-30%, -30%) rotate(360deg); }
      }
      @keyframes ctaPulse {
        0%,100% { opacity: 0.7; transform: scale(1); }
        50%     { opacity: 1;   transform: scale(1.08); }
      }
      @keyframes ctaShimmer {
        0%   { background-position:   0% 50%; }
        100% { background-position: 200% 50%; }
      }
      @keyframes ctaStripe {
        from { transform: translateX(0); }
        to   { transform: translateX(-80px); }
      }
      @keyframes ctaTickerDot {
        0%,100% { transform: scale(1); opacity: 1; }
        50%     { transform: scale(1.6); opacity: 0.4; }
      }
      @keyframes ctaArrow {
        0%,100% { transform: translateX(0); }
        50%     { transform: translateX(6px); }
      }
      @keyframes ctaUnderlineDraw {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
      @keyframes ctaStarSpin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
    `), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: 1800,
      height: 1800,
      marginLeft: -900,
      marginTop: -900,
      background: "conic-gradient(from 0deg, rgba(255,90,31,0) 0deg, rgba(255,90,31,0.18) 45deg, rgba(255,182,39,0.22) 90deg, rgba(255,90,31,0) 180deg, rgba(255,90,31,0.12) 270deg, rgba(255,90,31,0) 360deg)",
      animation: "ctaSweep 24s linear infinite",
      filter: "blur(30px)",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 50% 50%, rgba(255,90,31,0.55) 0%, rgba(255,90,31,0.18) 30%, transparent 60%)",
      animation: "ctaPulse 4.6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "75%",
      top: "20%",
      width: 520,
      height: 520,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,182,39,0.4), transparent 65%)",
      filter: "blur(20px)",
      animation: "ctaPulse 5.4s ease-in-out infinite 0.8s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 14,
      background: "repeating-linear-gradient(135deg, var(--ignite-500) 0 20px, #FFB627 20px 40px)",
      animation: "ctaStripe 1.6s linear infinite",
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 14,
      background: "repeating-linear-gradient(135deg, #FFB627 0 20px, var(--ignite-500) 20px 40px)",
      animation: "ctaStripe 1.6s linear infinite reverse",
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.05
  }), Array.from({
    length: 28
  }).map((_, i) => {
    const x = i * 73 % 100;
    const y = i * 41 % 90 + 5;
    const ph = (t + i * 7) % 80;
    const opacity = ph < 40 ? ph / 40 : (80 - ph) / 40;
    const color = i % 3 === 0 ? "var(--ignite-500)" : i % 3 === 1 ? "#FFB627" : "#fff";
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: i % 4 === 0 ? 6 : 3,
        height: i % 4 === 0 ? 6 : 3,
        borderRadius: 999,
        background: color,
        opacity: opacity * 0.8,
        boxShadow: `0 0 ${i % 4 === 0 ? 14 : 6}px ${color}`
      }
    });
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.55)",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--ignite-500)",
      boxShadow: "0 0 12px var(--ignite-500)",
      animation: "ctaTickerDot 1.2s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      fontWeight: 700
    }
  }, "LIVE TRANSMISSION"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "linear-gradient(90deg, rgba(255,90,31,0.5), transparent)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "// IGNITE FRACTIONAL \xB7 DESK 01")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(44px, 6vw, 96px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
      color: "#fff",
      textWrap: "balance",
      marginBottom: 14,
      margin: 0
    }
  }, "Let's stop talking about", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 400,
      backgroundImage: "linear-gradient(90deg, #FF5A1F 0%, #FFB627 50%, #FF5A1F 100%)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "ctaShimmer 5s linear infinite",
      filter: "drop-shadow(0 0 36px rgba(255,90,31,0.55))"
    }
  }, "growth."), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: "0.08em",
      bottom: "0.08em",
      height: 8,
      background: "var(--ignite-500)",
      transformOrigin: "left center",
      animation: "ctaUnderlineDraw 800ms cubic-bezier(.2,.8,.2,1) 200ms both",
      boxShadow: "0 0 24px var(--ignite-500)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      margin: "28px 0 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 14,
      background: "repeating-linear-gradient(135deg, var(--ignite-500) 0 14px, transparent 14px 28px)",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "var(--ignite-500)",
      fontWeight: 700,
      padding: "6px 14px",
      border: "1px solid rgba(255,90,31,0.5)",
      background: "rgba(255,90,31,0.08)"
    }
  }, "\u25BC THE OFFER"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 14,
      background: "repeating-linear-gradient(135deg, var(--ignite-500) 0 14px, transparent 14px 28px)",
      opacity: 0.85
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 28,
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px, 4.4vw, 72px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.95,
      color: "#fff",
      textWrap: "balance",
      textTransform: "uppercase",
      margin: 0
    }
  }, "And", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontFamily: "Georgia, serif",
      fontWeight: 400,
      textTransform: "none",
      color: "var(--ignite-500)"
    }
  }, "actually"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "0 18px",
      background: "var(--ignite-500)",
      color: "#0b0905",
      transform: "skew(-6deg)",
      boxShadow: "0 18px 50px rgba(255,90,31,0.45)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: "skew(6deg)"
    }
  }, "do\xA0it."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      maxWidth: 320,
      margin: 0,
      color: "rgba(255,255,255,0.72)",
      borderLeft: "2px solid var(--ignite-500)",
      paddingLeft: 18
    }
  }, "30-min strategy call. Custom-scoped retainer. Month-to-month after the first 90 days. ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff"
    }
  }, "No locked-in contracts."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, ["~2 WK TO IN-MARKET", "MONTH-TO-MONTH", "VETERAN-OWNED", "12+ YRS CPG"].map((tag, i) => /*#__PURE__*/React.createElement("span", {
    key: tag,
    style: {
      padding: "8px 14px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,90,31,0.35)",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: i % 2 ? "#FFB627" : "var(--ignite-500)"
    }
  }, "\u2605 ", tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://calendly.com/kyle-igniteproductions/30min?back=1",
    target: "_blank",
    rel: "noopener",
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 20px 50px rgba(255,90,31,0.55)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,90,31,0.4)";
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "22px 30px",
      background: "linear-gradient(90deg, var(--ignite-500) 0%, #FF7A3D 50%, var(--ignite-500) 100%)",
      backgroundSize: "200% 100%",
      animation: "ctaShimmer 5s linear infinite",
      color: "#0b0905",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontWeight: 700,
      textDecoration: "none",
      borderRadius: 4,
      boxShadow: "0 12px 32px rgba(255,90,31,0.4)",
      transition: "transform 220ms var(--ease-spring), box-shadow 220ms"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Book a 30-min call"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      animation: "ctaArrow 1.4s ease-in-out infinite"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "22px 30px",
      background: "rgba(255,255,255,0.05)",
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontWeight: 700,
      textDecoration: "none",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: 4,
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Get in touch")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:staffing@igniteproductions.co",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "22px 30px",
      background: "rgba(255,255,255,0.05)",
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontWeight: 700,
      textDecoration: "none",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: 4,
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "staffing@igniteproductions.co"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      marginTop: 64,
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 60px",
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.5))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      color: "var(--ignite-500)",
      fontSize: 18,
      animation: "ctaStarSpin 8s linear infinite"
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.6)"
    }
  }, "NO PROPOSAL THEATER \xB7 NO LOCKED CONTRACTS"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      color: "var(--ignite-500)",
      fontSize: 18,
      animation: "ctaStarSpin 8s linear infinite reverse"
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 60px",
      height: 1,
      background: "linear-gradient(90deg, rgba(255,90,31,0.5), transparent)"
    }
  }))));
};

/* ==================================================================
   03.5 · PROGRAMS WE RUN — agency-breadth matrix
   ================================================================== */
const PROGRAMS = [{
  icon: "◆",
  accent: "var(--ignite-500)",
  cat: "01 · Sales & Account Mgmt",
  title: "Owning the buyer relationship.",
  items: ["Buyer pitching & line reviews", "Broker management & scorecards", "Slotting negotiation & trade math", "Distribution expansion plans", "Velocity diagnostics by store"]
}, {
  icon: "✦",
  accent: "#FFB627",
  cat: "02 · Trade Marketing",
  title: "Where the money actually moves.",
  items: ["Co-op & MDF program planning", "Scan-back & coupon math", "Retailer-funded ad placements", "Trade calendar tied to P&L", "Promo plan vs. lift modeling"]
}, {
  icon: "★",
  accent: "var(--ignite-500)",
  cat: "03 · Sponsorship & Partnerships",
  title: "Buying attention that converts.",
  items: ["Festival & event sponsorships", "Athlete, creator & team deals", "League / venue / property partnerships", "Brand-to-brand collabs & swaps", "Activation rights & on-site execution"]
}, {
  icon: "▲",
  accent: "#FFB627",
  cat: "04 · Field & Experiential",
  title: "Boots on the ground, statewide.",
  items: ["Costco roadshows & demo programs", "Retail sampling & in-store activations", "Mobile tours & pop-ups", "Trade shows & booth builds", "42K+ vetted ambassadors, 50 states"]
}];
const FractionalPrograms = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)",
    background: "var(--paper-100)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 980,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement(FpOpsLine, null, ">>", " PROGRAMS WE RUN \xB7 ONE TEAM, FOUR DISCIPLINES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(48px, 6.2vw, 104px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.92,
    color: "var(--fg-1-inv)",
    textWrap: "balance",
    margin: 0
  }
}, "The work most brands split across\xA0", /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    fontStyle: "italic",
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    color: "#fff",
    background: "var(--ignite-500)",
    padding: "0.04em 0.22em 0.08em",
    transform: "rotate(-1.5deg)",
    borderRadius: 6,
    boxShadow: "0 18px 44px rgba(255,90,31,0.35)"
  }
}, "a broker, three agencies, and a trade marketing hire.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--fg-2-inv)",
    maxWidth: 740
  }
}, "Trade marketing, co-op math, sponsorship deals, field execution \u2014 managed by one senior team that already knows CPG retail. Pick the lanes you need; we run them together.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 18
  }
}, PROGRAMS.map(p => /*#__PURE__*/React.createElement("div", {
  key: p.cat,
  style: {
    position: "relative",
    background: "var(--paper-000)",
    border: "1px solid var(--paper-200)",
    borderRadius: 16,
    padding: 36,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    top: -80,
    right: -60,
    width: 240,
    height: 240,
    borderRadius: 999,
    background: `radial-gradient(circle, ${p.accent}22, transparent 60%)`,
    filter: "blur(20px)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 36,
    height: 36,
    borderRadius: 6,
    background: p.accent,
    color: "#0b0905",
    display: "grid",
    placeItems: "center",
    fontSize: 18,
    fontWeight: 700
  }
}, p.icon), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 12,
    letterSpacing: "0.18em",
    color: p.accent
  }
}, p.cat)), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(24px, 2.2vw, 32px)",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    color: "var(--fg-1-inv)",
    margin: "0 0 22px",
    textWrap: "balance"
  }
}, p.title), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, p.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    paddingBottom: 10,
    borderBottom: i === p.items.length - 1 ? "none" : "1px dashed var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    flex: "0 0 18px",
    color: p.accent,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    paddingTop: 3
  }
}, "0", i + 1), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 15.5,
    lineHeight: 1.4,
    color: "var(--fg-2-inv)",
    letterSpacing: "-0.005em"
  }
}, it))))))))));
Object.assign(window, {
  FractionalHero2,
  FractionalStats,
  FractionalEngines,
  FractionalFromTo,
  FractionalBuiltFor,
  FractionalCadence,
  FractionalCompare,
  Fractional90Days,
  FractionalFinalCTA,
  FractionalPainBanner,
  FractionalPrograms
});