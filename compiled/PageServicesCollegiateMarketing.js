(function(){if (typeof window !== "undefined" && window.PageServicesCollegiateMarketing) return;
/* Auto-extracted from the design project's pages/services-collegiate-marketing.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

/* =========================================================
   COLLEGIATE / GEN-Z — bespoke page
   Zine + streetwear visual vocabulary.
   Custom sections — does NOT use ServiceDetail template.
========================================================= */
const ACCENT = "#9FC24E";
const LIME = "#D6F35F";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".col-rise-on-view");
    if (!els.length) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.15
    });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/* =========================================================
   01 / HERO — editorial zine cover
========================================================= */
const Hero = () => {
  /* Animated counter: ticks slowly up to 7, holds, resets — techy/digital feel */
  const [chatCount, setChatCount] = React.useState(0);
  React.useEffect(() => {
    let v = 0;
    let hold = 0;
    const id = setInterval(() => {
      if (v < 7) {
        v += 1;
      } else if (hold < 8) {
        hold += 1;
      } else {
        v = 0;
        hold = 0;
      }
      setChatCount(v);
    }, 520);
    return () => clearInterval(id);
  }, []);

  /* Group chat messages that cascade in */
  const allMsgs = [{
    who: "Maya 💙",
    text: "ok who has that new can",
    t: 0
  }, {
    who: "Sam",
    text: "chapter house has like a case",
    t: 1800
  }, {
    who: "Devon",
    text: "the RA literally walked it floor to floor",
    t: 3800
  }, {
    who: "Maya 💙",
    text: "send me one rn",
    t: 5800
  }, {
    who: "You",
    text: "got u",
    t: 7600,
    mine: true
  }];
  const [visible, setVisible] = React.useState(0);
  const [typing, setTyping] = React.useState(false);
  React.useEffect(() => {
    const tick = setInterval(() => {
      setVisible(v => {
        if (v >= allMsgs.length) {
          setTimeout(() => {
            setVisible(0);
          }, 2200);
          return v;
        }
        return v + 1;
      });
      setTyping(true);
      setTimeout(() => setTyping(false), 380);
    }, 1100);
    return () => clearInterval(tick);
  }, []);

  /* Live activity pills */
  const activities = [{
    campus: "UT AUSTIN",
    action: "DORM ROW · 142 SAMPLES"
  }, {
    campus: "OHIO STATE",
    action: "TAILGATE · 480 TOUCH-POINTS"
  }, {
    campus: "MIAMI · FIU",
    action: "BILINGUAL CREW · 360 SAMPLES"
  }, {
    campus: "LSU · BATON ROUGE",
    action: "PRE-GAME · SAMPLING NOW"
  }];
  const [actIdx, setActIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActIdx(i => (i + 1) % activities.length), 2400);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Collegiate Hero",
    style: {
      position: "relative",
      overflow: "hidden",
      minHeight: 560,
      padding: "67px 0 64px",
      background: "var(--col-ink)",
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center 35%",
      opacity: 0.18,
      filter: "saturate(0.7) contrast(1.1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,11,13,0.85) 0%, rgba(10,11,13,0.7) 40%, rgba(10,11,13,0.95) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: "-10%",
      bottom: "-15%",
      width: "60%",
      height: "70%",
      background: `radial-gradient(ellipse at center, ${ACCENT}33 0%, transparent 65%)`,
      filter: "blur(40px)",
      animation: "col-blob-a 18s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: "-15%",
      top: "-10%",
      width: "55%",
      height: "60%",
      background: `radial-gradient(ellipse at center, ${LIME}1a 0%, transparent 65%)`,
      filter: "blur(50px)",
      animation: "col-blob-b 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${ACCENT}55, transparent)`,
      animation: "col-scan 8s linear infinite",
      opacity: 0.6,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 64,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "col-rise",
    style: {
      animationDelay: "100ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px",
      borderRadius: 999,
      background: `${ACCENT}1c`,
      border: `1px solid ${ACCENT}88`,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.24em",
      color: ACCENT,
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: ACCENT,
      boxShadow: `0 0 10px ${ACCENT}`,
      animation: "col-pulse 1.4s infinite"
    }
  }), "// COLLEGIATE MARKETING")), /*#__PURE__*/React.createElement("h1", {
    className: "col-rise",
    style: {
      marginTop: 24,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(44px, 6vw, 100px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.92,
      textWrap: "balance",
      animationDelay: "240ms"
    }
  }, "Your media buy hit", " ", /*#__PURE__*/React.createElement("span", {
    key: chatCount,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: ACCENT,
      animation: "col-counter-pop 320ms ease-out"
    }
  }, String(chatCount).padStart(2, "0")), " ", "group chats."), /*#__PURE__*/React.createElement("p", {
    className: "col-rise",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(20px, 2.2vw, 30px)",
      lineHeight: 1.3,
      letterSpacing: "-0.015em",
      color: "rgba(255,255,255,0.92)",
      margin: "32px 0 0",
      animationDelay: "440ms",
      maxWidth: 660,
      textWrap: "pretty"
    }
  }, "We engaged 50% of the student population and became best friends with the chapter house. Algorithms can't reach the dorm row \u2014 we can."), /*#__PURE__*/React.createElement("div", {
    className: "col-rise",
    style: {
      marginTop: 36,
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      animationDelay: "560ms"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact?intent=campus",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "20px 28px",
      borderRadius: 999,
      background: ACCENT,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      textDecoration: "none",
      letterSpacing: "-0.005em",
      boxShadow: `0 0 0 1px ${ACCENT}88, 0 12px 40px ${ACCENT}55`
    }
  }, "Talk to us about your campus play ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#five-lanes",
    style: {
      padding: "20px 24px",
      borderRadius: 999,
      background: "transparent",
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,0.25)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      textDecoration: "none",
      letterSpacing: "-0.005em"
    }
  }, "See the playbook"))), /*#__PURE__*/React.createElement("div", {
    className: "col-rise",
    style: {
      animationDelay: "680ms",
      alignSelf: "flex-start",
      position: "relative",
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      background: "rgba(15,17,23,0.96)",
      border: `1px solid ${LIME}55`,
      borderRadius: 22,
      padding: "18px 18px 16px",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
      backdropFilter: "blur(10px)",
      minHeight: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingBottom: 14,
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${ACCENT}, ${LIME})`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 13,
      fontWeight: 700,
      fontFamily: "var(--font-display)"
    }
  }, "Alpha Chi Omega ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.4)",
      fontWeight: 400
    }
  }, "(47)")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: LIME,
      fontSize: 10,
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.08em"
    }
  }, typing ? "typing…" : "active now")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontSize: 9,
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.12em",
      whiteSpace: "nowrap"
    }
  }, "\u25CF DORM ROW")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 14,
      minHeight: 210,
      justifyContent: "flex-end"
    }
  }, allMsgs.slice(0, visible).map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.mine ? "flex-end" : "flex-start",
      maxWidth: "82%",
      animation: "col-msg-in 360ms cubic-bezier(0.16,0.84,0.3,1) both"
    }
  }, !m.mine && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontFamily: "var(--font-mono)",
      color: "rgba(255,255,255,0.45)",
      marginBottom: 3,
      marginLeft: 4,
      letterSpacing: "0.04em"
    }
  }, m.who), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "9px 13px",
      borderRadius: 14,
      fontSize: 13,
      lineHeight: 1.35,
      background: m.mine ? ACCENT : "rgba(255,255,255,0.08)",
      color: m.mine ? "#fff" : "rgba(255,255,255,0.92)",
      borderBottomRightRadius: m.mine ? 4 : 14,
      borderBottomLeftRadius: m.mine ? 14 : 4
    }
  }, m.text))), typing && visible < allMsgs.length && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "flex-start",
      display: "flex",
      gap: 4,
      padding: "10px 14px",
      borderRadius: 14,
      background: "rgba(255,255,255,0.08)"
    }
  }, [0, 1, 2].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "rgba(255,255,255,0.6)",
      animation: `col-typing 1s infinite ${d * 0.18}s`
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: -34,
      right: -34,
      zIndex: 3,
      padding: "10px 14px",
      borderRadius: 14,
      background: "rgba(15,17,23,0.95)",
      border: `1px solid ${ACCENT}88`,
      boxShadow: `0 12px 32px ${ACCENT}44, 0 0 0 1px ${ACCENT}33`,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "#fff",
      letterSpacing: "0.05em",
      minWidth: 180,
      transform: "rotate(7deg)",
      animation: "col-float 4s ease-in-out infinite 0.2s",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ACCENT,
      boxShadow: `0 0 8px ${ACCENT}`,
      animation: "col-pulse 1.2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 700,
      letterSpacing: "0.18em"
    }
  }, "NEW MESSAGE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.85)"
    }
  }, "FAMU Greek (62)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.5)",
      marginTop: 2
    }
  }, "\"yo who's the brand rep again\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: "0 6px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase"
    }
  }, "\u2191 SAM IS A STUDENT BRAND MANAGER"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: -56,
      left: -54,
      width: "68%",
      background: "linear-gradient(180deg, rgba(15,17,23,0.92), rgba(15,17,23,0.85))",
      border: `1px solid ${LIME}44`,
      borderRadius: 20,
      transform: "rotate(-7deg)",
      zIndex: 1,
      padding: "14px 16px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
      opacity: 0.88,
      animation: "col-float 6s ease-in-out infinite 0.4s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: `linear-gradient(135deg, ${ACCENT}, ${LIME})`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 12,
      fontWeight: 700
    }
  }, "Alpha Chi Omega (47)"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: LIME,
      fontSize: 10,
      opacity: 0.7
    }
  }, "typing\u2026")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontSize: 9,
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      whiteSpace: "nowrap"
    }
  }, "\u25CF 03 NEW"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: -64,
      right: -42,
      zIndex: 3,
      padding: "10px 14px",
      borderRadius: 14,
      background: "rgba(15,17,23,0.95)",
      border: `1px solid ${ACCENT}88`,
      boxShadow: `0 12px 32px ${ACCENT}44, 0 0 0 1px ${ACCENT}33`,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "#fff",
      letterSpacing: "0.05em",
      minWidth: 180,
      transform: "rotate(8deg)",
      animation: "col-float 4s ease-in-out infinite 0.2s",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ACCENT,
      boxShadow: `0 0 8px ${ACCENT}`,
      animation: "col-pulse 1.2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 700,
      letterSpacing: "0.18em"
    }
  }, "NEW MESSAGE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.85)"
    }
  }, "FAMU Greek (62)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.5)",
      marginTop: 2
    }
  }, "\"yo who's the brand rep again\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: "0 6px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase"
    }
  }, "\u2191 SAM IS A STUDENT BRAND MANAGER"))), /*#__PURE__*/React.createElement("div", {
    className: "col-rise",
    style: {
      display: "none"
    }
  }, [["COAST TO COAST", "EVERY CONFERENCE · EVERY CAMPUS TYPE"], ["5 LANES", "BACK-TO-SCHOOL · SBM · SEEDING · DOOR HANGERS · ACTIVATIONS"], ["4 GROUP CHATS", "PER DORM · OUR TRIAL-CASCADE METHODOLOGY"], ["SPARK", "REAL-TIME GPS CHECK-IN + PHOTO PROOF"]].map(([v, l], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", null, v), /*#__PURE__*/React.createElement("div", null, l))))));
};

/* =========================================================
   02 / TICKER — moving brand voice marquee
========================================================= */
const Ticker = () => /*#__PURE__*/React.createElement("div", {
  style: {
    background: ACCENT,
    color: "#fff",
    padding: "22px 0",
    overflow: "hidden",
    borderTop: "1px solid rgba(0,0,0,0.2)",
    borderBottom: "1px solid rgba(0,0,0,0.2)"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "col-marquee-track"
}, Array(2).fill(0).map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, ["NO CORPORATE CRINGE", "★", "GROUP-CHAT-NATIVE", "★", "PEER-RECOMMENDED", "★", "DOOR-HANGER VERIFIED", "★", "NIL-COMPLIANT", "★", "200+ CAMPUSES", "★", "REACH IS DEAD", "★", "TRIAL CASCADES", "★"].map((t, j) => /*#__PURE__*/React.createElement("span", {
  key: i + "-" + j,
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 26,
    letterSpacing: "-0.015em",
    textTransform: "uppercase"
  }
}, t))))));

/* =========================================================
   03 / MANIFESTO — 5 numbered statements
========================================================= */
const MANIFESTO = [{
  n: "01",
  t: "They skipped the ad.",
  d: "Your 30-second spot got muted at second one. Your paid social impression got 0.4 seconds before a thumb. Door hangers don't have a skip button."
}, {
  n: "02",
  t: "Hire someone who actually goes there.",
  d: "Not a 32-year-old writing 'rizz' on a deck. Not a vendor parachuting in for the day. A student who lives in the dorm + posts to their followers all semester."
}, /* Belief 03 carries the cascade math — see render below */
{
  n: "03",
  t: "Group chats run the world.",
  d: "We don't sell to one Gen Z kid. We sell to 47 of their roommates, group-chat friends, lab partners. One trial cascades through four group chats per dorm.",
  math: true
}, {
  n: "04",
  t: "The campus calendar is the only one that matters.",
  d: "Move-in week. First home game. Greek philanthropy. Finals at 11pm. Spring break. Homecoming. Brands that miss the calendar miss the year."
}, {
  n: "05",
  t: "Receipts in 24 hours.",
  d: "Not 4 weeks. Not next quarter. Per-campus dashboard live in Spark with GPS check-in + photo evidence + sweeps capture. Done before your Monday meeting."
}];
const Manifesto = () => /*#__PURE__*/React.createElement("section", {
  id: "why-college",
  style: {
    padding: "120px 0 140px",
    background: "var(--col-paper)",
    color: "var(--col-ink)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: -120,
    top: -60,
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(240px, 32vw, 520px)",
    color: "rgba(10,11,13,0.04)",
    letterSpacing: "-0.05em",
    lineHeight: 0.85,
    whiteSpace: "nowrap",
    transform: "rotate(8deg)",
    pointerEvents: "none"
  }
}, "WHY"), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 56,
    alignItems: "flex-end",
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 18
  }
}, "// WHY COLLEGE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(48px, 7vw, 120px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.92,
    color: "var(--col-ink)",
    margin: 0,
    textWrap: "balance"
  }
}, "Five things we believe", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "about Gen Z."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(10,11,13,0.7)",
    maxWidth: 420,
    paddingBottom: 16
  }
}, "They're not who your media plan thinks they are. Build the program around what they actually do."))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridAutoRows: "minmax(220px, auto)",
    gap: 16
  }
}, MANIFESTO.map((m, i) => {
  /* Variable spans + rotations for collage feel */
  const layouts = [{
    col: "span 3",
    row: "span 1",
    rot: -1.2
  }, {
    col: "span 3",
    row: "span 1",
    rot: 0.8
  }, {
    col: "span 2",
    row: "span 1",
    rot: -0.8
  }, {
    col: "span 2",
    row: "span 1",
    rot: 1.2
  }, {
    col: "span 2",
    row: "span 1",
    rot: -1
  }];
  const layout = layouts[i] || layouts[0];
  const isHero = i === 0 || i === 1;
  return /*#__PURE__*/React.createElement("article", {
    key: m.n,
    className: "col-rise-on-view",
    style: {
      gridColumn: layout.col,
      padding: isHero ? "36px 32px" : "28px 26px",
      background: "var(--col-ink)",
      color: "#fff",
      borderRadius: 16,
      position: "relative",
      overflow: "hidden",
      transform: `rotate(${layout.rot}deg)`,
      opacity: 0,
      transition: "opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 700ms cubic-bezier(0.2,0.7,0.2,1), box-shadow 200ms",
      transitionDelay: i * 80 + "ms",
      boxShadow: "0 12px 32px rgba(10,11,13,0.18)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      cursor: "default"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = `rotate(${layout.rot}deg) translateY(-4px)`;
      e.currentTarget.style.boxShadow = "0 24px 50px rgba(10,11,13,0.28)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = `rotate(${layout.rot}deg)`;
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(10,11,13,0.18)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: `linear-gradient(90deg, ${ACCENT}, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: isHero ? 64 : 48,
      lineHeight: 1,
      letterSpacing: "-0.04em",
      color: ACCENT,
      textShadow: `0 0 24px ${ACCENT}66`
    }
  }, m.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.24em",
      color: "rgba(255,255,255,0.4)",
      textTransform: "uppercase"
    }
  }, "/ POV")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: isHero ? "clamp(22px, 2.4vw, 32px)" : "clamp(18px, 1.8vw, 24px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      color: "#fff",
      margin: 0
    }
  }, m.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: isHero ? 15 : 14,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.72)",
      margin: 0,
      flex: 1
    }
  }, m.d), m.math && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "14px 16px",
      background: `${LIME}08`,
      border: `1px solid ${LIME}33`,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: LIME,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "// TRIAL CASCADE \xB7 DO THE MATH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      gap: "4px 8px",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 700
    }
  }, "1"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "seed")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontWeight: 700
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 700
    }
  }, "4"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "roommates")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontWeight: 700
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 700
    }
  }, "12"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "group chats")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontWeight: 700
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontWeight: 700
    }
  }, "30"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "peers")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontWeight: 700
    }
  }, "="), /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontWeight: 800,
      fontSize: 16,
      textShadow: `0 0 14px ${LIME}88`
    }
  }, "47")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.18em",
      color: "rgba(255,255,255,0.45)",
      textTransform: "uppercase"
    }
  }, "peer touch-points / seeded student")));
}))), /*#__PURE__*/React.createElement("style", null, `
      .col-rise-on-view.in { opacity: 1 !important; }
    `));
/* =========================================================
   05 / FIVE LANES — equal billing for the 5 core programs
   Sits between POV and Tactics grid.
========================================================= */
const LANES = [{
  n: "01",
  t: "Back-to-School Sampling",
  d: "The first two weeks of fall semester set the brand defaults for the next four years. We hit dorm row, welcome fairs, off-campus rows, and the first home football game in one coordinated sweep.",
  tag: "PEAK DENSITY",
  color: ACCENT,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-3-fuel-focus.jpg",
  rot: -0.8,
  span: "span 4"
}, {
  n: "02",
  t: "Student Brand Managers",
  d: "Vetted student reps who live on campus, post to their followers, and feed you cultural intel no agency deck can fake. Tracked through Spark all semester.",
  tag: "EMBEDDED",
  color: LIME,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-2-fuel-your-day.jpg",
  rot: 0.6,
  span: "span 4"
}, {
  n: "03",
  t: "Product Seeding",
  d: "Free product in the hands of the kids whose roommates already listen to them. RAs, chapter presidents, club leadership, student creators.",
  tag: "PEER-LED",
  color: ACCENT,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-6-owala-engraving.jpg",
  rot: -0.4,
  span: "span 4"
}, {
  n: "04",
  t: "Door Hanger Programs",
  d: "Off-campus apartment rows where the sample truck can't reach upperclassmen. Walked block by block, tied to QR or coupon redemption.",
  tag: "REDEMPTION-TRACKED",
  color: LIME,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-5-liquid-death-dorm.jpg",
  rot: 0.8,
  span: "span 4"
}, {
  n: "05",
  t: "On-Campus Activations",
  d: "Quad takeovers, rec center installs, tailgate footprints, student union booths. Permits, vendor coordination, staffing, recap. You show up to a finished activation.",
  tag: "TURNKEY",
  color: ACCENT,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-1-tailgate.jpg",
  rot: -0.6,
  span: "span 4"
}, {
  n: "06",
  t: "Sorority / Fraternity Gifting",
  d: "Branded gifting straight into Greek life — chapter houses, recruitment week, formals, philanthropy events, big/little reveals. Get your product into the highest-influence social networks on campus, hand-delivered.",
  tag: "GREEK NETWORK",
  color: LIME,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-4-apartment-pool.jpg",
  rot: 0.4,
  span: "span 4"
}, {
  n: "07",
  t: "Collegiate Experiential Tours",
  d: "A branded footprint that travels — multi-campus tours hitting a new school every few days. Custom builds, photo moments, sampling, and content capture, rolled out city to city on a single coordinated route.",
  tag: "MULTI-CAMPUS ROUTE",
  color: ACCENT,
  photo: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-7-owala-team.jpg",
  rot: -0.5,
  span: "span 6"
}];
const FiveLanes = () => /*#__PURE__*/React.createElement("section", {
  id: "five-lanes",
  style: {
    padding: "120px 0 140px",
    background: "var(--col-paper)",
    color: "var(--col-ink)",
    borderTop: "1px solid rgba(10,11,13,0.06)",
    borderBottom: "1px solid rgba(10,11,13,0.06)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 80,
    right: 60,
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.32em",
    color: "rgba(10,11,13,0.4)",
    textTransform: "uppercase",
    transform: "rotate(90deg)",
    transformOrigin: "top right"
  }
}, "\u203B MIX + MATCH \xB7 ALL SEVEN AVAILABLE"), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 36,
    flexWrap: "wrap",
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "// THE SEVEN LANES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(40px, 5.5vw, 80px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.96,
    color: "var(--col-ink)",
    margin: 0,
    textWrap: "balance",
    maxWidth: 1000
  }
}, "We run seven core programs.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "Most clients run a mix."))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(10,11,13,0.65)",
    maxWidth: 360,
    margin: 0
  }
}, "Seven lanes. Different jobs to be done. Most programs stitch 2\u20133 together; the boldest run the whole board.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "minmax(320px, auto)",
    gap: 16
  }
}, LANES.map((l, i) => /*#__PURE__*/React.createElement("article", {
  key: l.n,
  className: "col-rise-on-view",
  style: {
    gridColumn: l.span,
    background: "var(--col-ink)",
    color: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
    opacity: 0,
    transform: `rotate(${l.rot}deg) translateY(20px)`,
    transition: "opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 350ms cubic-bezier(0.2,0.7,0.2,1), box-shadow 200ms",
    transitionDelay: i * 80 + "ms",
    boxShadow: "0 16px 40px rgba(10,11,13,0.18)",
    cursor: "default"
  },
  onMouseEnter: e => {
    e.currentTarget.style.transform = "rotate(0deg) translateY(-6px)";
    e.currentTarget.style.boxShadow = `0 30px 60px rgba(10,11,13,0.32), 0 0 0 1px ${l.color}88`;
    e.currentTarget.style.zIndex = 5;
  },
  onMouseLeave: e => {
    e.currentTarget.style.transform = `rotate(${l.rot}deg) translateY(0)`;
    e.currentTarget.style.boxShadow = "0 16px 40px rgba(10,11,13,0.18)";
    e.currentTarget.style.zIndex = 1;
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${l.photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.38,
    filter: "saturate(1.1) contrast(1.1)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, rgba(10,11,13,0.4) 0%, rgba(10,11,13,0.85) 60%, rgba(10,11,13,0.95) 100%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${l.color}, transparent 80%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: -10,
    bottom: -36,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 240,
    lineHeight: 0.85,
    letterSpacing: "-0.05em",
    color: l.color,
    opacity: 0.12,
    pointerEvents: "none"
  }
}, l.n), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    padding: "26px 26px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    minHeight: 320
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 48,
    color: l.color,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    textShadow: `0 0 24px ${l.color}66`
  }
}, l.n), /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "4px 10px",
    borderRadius: 4,
    background: "rgba(10,11,13,0.55)",
    border: `1px solid ${l.color}88`,
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: l.color,
    textTransform: "uppercase",
    backdropFilter: "blur(6px)",
    whiteSpace: "nowrap"
  }
}, l.tag)), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    color: "#fff",
    margin: 0
  }
}, l.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.78)",
    margin: 0,
    flex: 1
  }
}, l.d), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: "auto",
    paddingTop: 12,
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: l.color,
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 5,
    height: 5,
    borderRadius: 999,
    background: l.color,
    boxShadow: `0 0 6px ${l.color}`
  }
}), "LANE 0", i + 1, " / 07")))), /*#__PURE__*/React.createElement("article", {
  className: "col-rise-on-view",
  style: {
    gridColumn: "span 6",
    padding: "26px 26px",
    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}dd)`,
    color: "#fff",
    borderRadius: 18,
    position: "relative",
    overflow: "hidden",
    opacity: 0,
    transform: "rotate(1.2deg) translateY(20px)",
    transition: "opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 350ms cubic-bezier(0.2,0.7,0.2,1), box-shadow 200ms",
    transitionDelay: "400ms",
    boxShadow: `0 16px 40px ${ACCENT}33`,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    justifyContent: "space-between"
  },
  onMouseEnter: e => {
    e.currentTarget.style.transform = "rotate(0deg) translateY(-6px)";
    e.currentTarget.style.boxShadow = `0 30px 60px ${ACCENT}55`;
  },
  onMouseLeave: e => {
    e.currentTarget.style.transform = "rotate(1.2deg) translateY(0)";
    e.currentTarget.style.boxShadow = `0 16px 40px ${ACCENT}33`;
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 40,
    height: 40,
    borderRadius: 999,
    background: LIME,
    color: "#0A0B0D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 18,
    transform: "rotate(-12deg)",
    boxShadow: `0 6px 20px ${LIME}66`
  }
}, "\u2605"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: "rgba(255,255,255,0.85)",
    textTransform: "uppercase",
    marginBottom: 16
  }
}, "// FULL-STACK PROGRAM"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(28px, 2.8vw, 38px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.05,
    color: "#fff",
    margin: 0
  }
}, "Run all", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#0A0B0D",
    display: "inline-block",
    fontStyle: "italic",
    textShadow: "0 0 24px rgba(0,0,0,0.4)"
  }
}, "seven.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 13.5,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.92)",
    margin: "14px 0 0"
  }
}, "One captain. One PM. One recap dashboard. Seven lanes operating in concert across a semester.")), /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=campus",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 16px",
    borderRadius: 999,
    background: "#0A0B0D",
    color: "#fff",
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    textDecoration: "none",
    alignSelf: "flex-start"
  }
}, "Brief us \u2192 ")))));

/* =========================================================
   06 / TACTICS — magazine grid of 9 services (expanded from the 5 lanes)
========================================================= */
const TACTICS = [{
  n: "01",
  t: "Back-to-school sweep",
  d: "5-day blitz: dorm row → Greek row → apartments → game-day. The week you skip is the week the competitor owns Q4.",
  tags: ["MOVE-IN", "5 DAYS", "PEAK DENSITY"],
  color: ACCENT
}, {
  n: "02",
  t: "Student Brand Managers",
  d: "Vetted student reps who actually live there. 200 hand-offs / month, social posts that don't get roasted, chapter sponsorships, all semester.",
  tags: ["EMBEDDED", "ALL SEMESTER", "MONTHLY QUOTA"],
  color: LIME
}, {
  n: "03",
  t: "Product seedings",
  d: "Free product to the kids whose roommates already listen to them. RAs, chapter presidents, NIL athletes, club leadership. Peer-led trial cascade.",
  tags: ["PRE-LAUNCH", "INFLUENCERS", "TRIAL CASCADE"],
  color: ACCENT
}, {
  n: "04",
  t: "Door hangers + apartments",
  d: "Off-campus apartment rows. Door hangers, sample kits, leave-behinds at the door. Upperclassmen don't live in dorms anymore — and your sample truck isn't reaching them.",
  tags: ["OFF-CAMPUS", "UPPERCLASSMEN", "APARTMENT ROW"],
  color: LIME
}, {
  n: "05",
  t: "Move-in week",
  d: "Highest-density Gen-Z window of the year. Dorm row, parent traffic, welcome events. Catch them before they pick brands for the next 4 years.",
  tags: ["AUG-SEP", "DORM ROW", "PARENT-INCLUSIVE"],
  color: ACCENT
}, {
  n: "06",
  t: "Greek row + philanthropy",
  d: "IFC + Panhellenic coordination, philanthropy sponsorships, formals, recruitment week. Compliance handled so you don't eat fines.",
  tags: ["IFC/PANHELLENIC", "PHILANTHROPY", "FORMALS"],
  color: LIME
}, {
  n: "07",
  t: "Game-day + tailgate",
  d: "Pre-game tailgate footprint, ingress sampling, post-game corridor. SEC, Big Ten, ACC, Big 12, Pac-12, AAC. Where college brand identity gets formed.",
  tags: ["SEC", "B1G", "TAILGATE"],
  color: ACCENT
}, {
  n: "08",
  t: "Finals + late-night",
  d: "11pm-3am sampling at libraries, study lounges, dorm common rooms. Coffee, energy, snacks own this window because nobody else shows up.",
  tags: ["11PM-3AM", "LIBRARY", "DEAD WEEK"],
  color: LIME
},
/* TODO Kyle: confirm we've executed NCAA-compliant NIL deals before launch.
   If aspirational, remove this card and update the SBM card to mention athletes there instead. */
{
  n: "09",
  t: "NIL athlete activation",
  d: "NCAA-compliant deals with student-athletes. In-stadium activation, social posts, roster-player appearances at brand moments. Full deal + activation under one PM.",
  tags: ["NCAA-COMPLIANT", "SOCIAL", "ROSTER-PLAYER"],
  color: ACCENT
}];
const Tactics = () => /*#__PURE__*/React.createElement("section", {
  id: "tactics",
  style: {
    padding: "140px 0",
    background: "var(--col-ink)",
    color: "#fff",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `radial-gradient(ellipse 60% 50% at 80% 30%, ${ACCENT}14, transparent 60%)`
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 36,
    flexWrap: "wrap",
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "// 09 TACTICS \xB7 ONE PLAYBOOK"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px, 6vw, 96px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.94,
    color: "#fff",
    margin: 0,
    textWrap: "balance",
    maxWidth: 1100
  }
}, "How we actually", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "get in the room."))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 400,
    margin: 0
  }
}, "Five lanes, plus the long tail of tactics that fit inside them. Most programs run a mix.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: 22
  }
}, TACTICS.map((t, i) => /*#__PURE__*/React.createElement("article", {
  key: t.n,
  className: "col-rise-on-view",
  style: {
    padding: "32px 28px 28px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
    border: `1px solid ${t.color}33`,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 800ms, transform 800ms, border-color 200ms, background 200ms",
    transitionDelay: i % 3 * 80 + "ms",
    minHeight: 320,
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  onMouseEnter: e => {
    e.currentTarget.style.borderColor = t.color;
    e.currentTarget.style.background = `linear-gradient(180deg, ${t.color}10, rgba(255,255,255,0.01))`;
  },
  onMouseLeave: e => {
    e.currentTarget.style.borderColor = t.color + "33";
    e.currentTarget.style.background = "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))";
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: `linear-gradient(90deg, ${t.color}, transparent 70%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 52,
    color: t.color,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    textShadow: `0 0 20px ${t.color}33`
  }
}, t.n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.22em",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase"
  }
}, "TACTIC")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 26,
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    color: "#fff",
    margin: 0
  }
}, t.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)",
    margin: 0,
    flex: 1
  }
}, t.d), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: "auto",
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,0.06)"
  }
}, t.tags.map(tag => /*#__PURE__*/React.createElement("span", {
  key: tag,
  style: {
    padding: "4px 9px",
    borderRadius: 4,
    background: `${t.color}1a`,
    border: `1px solid ${t.color}44`,
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: t.color,
    textTransform: "uppercase"
  }
}, tag))))))));

/* =========================================================
   05 / WHY IGNITE — 4-up grid (replaces Cascade)
========================================================= */
const WHY_IGNITE = [{
  icon: "◉",
  t: "All 50 states.",
  sub: "Every campus type.",
  d: "Big 10, SEC, Ivy, community college, art school, HBCU. We've staffed across all of them."
}, {
  icon: "⬡",
  t: "Spark.",
  sub: "Our proprietary field platform.",
  d: "GPS-verified clock-in, photo uploads, real-time reporting. You see the activation as it's happening, not three weeks later in a deck."
}, {
  icon: "✪",
  t: "Veteran-owned.",
  sub: "Operator-led.",
  d: "We're not a deck-first agency. We're built for execution and we run the field ourselves."
}, {
  icon: "✦",
  t: "Trusted by national CPG.",
  sub: "Real moments, real people.",
  d: "Liquid Death, White Claw, Total Wireless, and more trust us to put their brand in front of real people in real moments."
}];
const Cascade = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0",
    background: "var(--col-ink)",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `radial-gradient(ellipse 60% 60% at 30% 60%, ${LIME}10, transparent 70%)`
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 36,
    flexWrap: "wrap",
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: LIME,
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "// WHY IGNITE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px, 6vw, 96px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.94,
    color: "#fff",
    margin: 0,
    textWrap: "balance",
    maxWidth: 1100
  }
}, "Built for execution.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: LIME
  }
}, "Not for the deck."))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 420,
    margin: 0
  }
}, "Four reasons CPG brands hand us their campus program \u2014 and don't take it back.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 18
  }
}, WHY_IGNITE.map((w, i) => {
  const isLime = i % 2 === 1;
  const accentColor = isLime ? LIME : ACCENT;
  return /*#__PURE__*/React.createElement("article", {
    key: w.t,
    className: "col-rise-on-view",
    style: {
      padding: "32px 28px",
      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
      border: `1px solid ${accentColor}33`,
      borderRadius: 16,
      position: "relative",
      overflow: "hidden",
      opacity: 0,
      transition: "opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 700ms cubic-bezier(0.2,0.7,0.2,1), border-color 200ms, box-shadow 200ms",
      transitionDelay: i * 80 + "ms",
      display: "flex",
      flexDirection: "column",
      gap: 14
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = accentColor;
      e.currentTarget.style.boxShadow = `0 24px 50px ${accentColor}33`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = accentColor + "33";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: `linear-gradient(90deg, ${accentColor}, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 12,
      background: `${accentColor}1a`,
      border: `1px solid ${accentColor}55`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 32,
      color: accentColor,
      lineHeight: 1,
      textShadow: `0 0 16px ${accentColor}88`
    }
  }, w.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      color: "#fff",
      margin: 0
    }
  }, w.t, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: accentColor,
      fontSize: "0.7em",
      fontStyle: "italic",
      fontWeight: 700
    }
  }, w.sub)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.7)",
      margin: 0
    }
  }, w.d));
}))));

/* =========================================================
   06 / CAMPUSES — marquee + grid of the schools
========================================================= */
const SCHOOLS = [{
  city: "AUSTIN · TX",
  name: "UT Austin",
  note: "Hispanic-strong"
}, {
  city: "TUSCALOOSA · AL",
  name: "Alabama",
  note: "SEC · The Strip"
}, {
  city: "ATHENS · GA",
  name: "UGA",
  note: "Sanford Stadium"
}, {
  city: "ANN ARBOR · MI",
  name: "Michigan",
  note: "Big House"
}, {
  city: "COLUMBUS · OH",
  name: "Ohio State",
  note: "Horseshoe"
}, {
  city: "STATE COLLEGE · PA",
  name: "Penn State",
  note: "Beaver Stadium"
}, {
  city: "BERKELEY · CA",
  name: "UC Berkeley",
  note: "Telegraph Ave"
}, {
  city: "LOS ANGELES · CA",
  name: "UCLA + USC",
  note: "Westwood + Galen"
}, {
  city: "BATON ROUGE · LA",
  name: "LSU",
  note: "Death Valley · night games"
}, {
  city: "OXFORD · MS",
  name: "Ole Miss",
  note: "The Grove"
}, {
  city: "TALLAHASSEE · FL",
  name: "FSU + FAMU",
  note: "HBCU adjacent"
}, {
  city: "ATLANTA · GA",
  name: "Georgia Tech + Spelman/Morehouse",
  note: "HBCU multi-school"
}, {
  city: "MIAMI · FL",
  name: "FIU + UM",
  note: "Hispanic-strong · 70% HSI"
}, {
  city: "CHICAGO · IL",
  name: "Northwestern + DePaul + UIC",
  note: "Multi-school"
}, {
  city: "BOSTON · MA",
  name: "BU + BC + NU + Harvard + MIT",
  note: "150K+ undergrads"
}, {
  city: "NEW YORK · NY",
  name: "NYU + Columbia + Fordham",
  note: "Multi-school"
}, {
  city: "EL PASO · TX",
  name: "UTEP",
  note: "HSI · 80% Hispanic enrollment"
}, {
  city: "WASHINGTON DC",
  name: "Howard + Georgetown + GWU",
  note: "HBCU + multi-school"
}];
const CONFERENCES = [{
  conf: "SEC",
  schools: ["Alabama", "Georgia", "LSU", "Tennessee", "Texas", "Texas A&M", "Florida", "Ole Miss", "Auburn", "Kentucky", "South Carolina", "Arkansas", "Missouri", "Mississippi State", "Vanderbilt", "Oklahoma"]
}, {
  conf: "Big Ten",
  schools: ["Ohio State", "Michigan", "Penn State", "USC", "UCLA", "Oregon", "Washington", "Wisconsin", "Iowa", "Nebraska", "Michigan State", "Minnesota", "Maryland", "Rutgers", "Illinois", "Indiana", "Purdue", "Northwestern"]
}, {
  conf: "ACC",
  schools: ["Clemson", "Florida State", "Miami", "UNC", "NC State", "Duke", "Virginia", "Virginia Tech", "Louisville", "Pitt", "Boston College", "Georgia Tech", "Syracuse", "Wake Forest", "SMU", "Cal", "Stanford"]
}, {
  conf: "Big 12",
  schools: ["Kansas", "Kansas State", "Oklahoma State", "Baylor", "TCU", "Texas Tech", "Iowa State", "West Virginia", "Cincinnati", "UCF", "Houston", "BYU", "Arizona", "Arizona State", "Colorado", "Utah"]
}, {
  conf: "Pac-12 + West",
  schools: ["Oregon State", "Washington State", "Boise State", "San Diego State", "Fresno State", "Colorado State", "UNLV"]
}, {
  conf: "American (AAC)",
  schools: ["Memphis", "Tulane", "USF", "East Carolina", "Temple", "Navy", "Tulsa"]
}, {
  conf: "Sun Belt + MAC",
  schools: ["App State", "Coastal Carolina", "Georgia Southern", "James Madison", "Toledo", "Ohio U", "Miami (OH)", "Western Michigan"]
}, {
  conf: "Ivy League",
  schools: ["Harvard", "Yale", "Princeton", "Columbia", "Penn", "Cornell", "Brown", "Dartmouth"]
}, {
  conf: "HBCU (MEAC + SWAC)",
  schools: ["Howard", "FAMU", "Jackson State", "Southern", "Grambling", "NC A&T", "Hampton", "Morehouse", "Spelman", "Tennessee State", "Texas Southern", "Alabama State"]
}, {
  conf: "Urban + Multi-School Metros",
  schools: ["NYU", "Fordham", "DePaul", "Loyola Chicago", "Northeastern", "Boston U", "Georgetown", "GWU", "UT El Paso", "FIU", "ASU Downtown", "Pratt Institute"]
}];

/* ============ GREEK LIFE ============ */
const GreekLife = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0",
    background: "var(--col-ink)",
    color: "#fff",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: LIME,
    textTransform: "uppercase",
    marginBottom: 16
  }
}, "// GREEK LIFE \xB7 THE HIGH-INFLUENCE NETWORK"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4.8vw,68px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.96
  }
}, "The chapter house is the ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "original group chat.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)"
  }
}, "Sororities and fraternities are the densest, highest-influence social graphs on any campus. Recruitment week, big/little reveals, formals, philanthropy events \u2014 we get your brand hand-delivered into the rooms where campus taste actually gets set.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: 16
  }
}, [["Recruitment / rush week", "Branded gifting into bid-day bags and rush events — peak attention, peak new-member reach."], ["Big / little reveals", "Product seeded into the most-posted week of the Greek calendar. Built for the camera."], ["Philanthropy + formals", "Sponsorship and product presence at the events chapters actually promote to campus."], ["Panhellenic + IFC programs", "Multi-chapter activations coordinated across an entire Greek system, one point of contact."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    padding: "26px 24px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 19,
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

/* ============ ACADEMIC CALENDAR ============ */
const CampusCalendar = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0",
    background: "var(--col-paper)",
    color: "var(--col-ink)",
    borderTop: "1px solid rgba(10,11,13,0.06)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820,
    marginBottom: 44
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 16
  }
}, "// THE ONLY CALENDAR THAT MATTERS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(34px,4.8vw,68px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.96,
    color: "var(--col-ink)"
  }
}, "When to hit ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "campus.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(10,11,13,0.7)"
  }
}, "The campus year has a handful of windows where attention spikes and brand defaults get set. Miss them and you're invisible till next semester.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
    gap: 12
  }
}, [["AUG–SEP", "Move-In + Welcome Week", "Highest-density window of the year. Brand defaults set for 4 years.", ACCENT], ["SEP–NOV", "Game Days + Homecoming", "Tailgates, fan zones, alumni traffic. Peak social posting.", LIME], ["OCT–NOV", "Recruitment + Midterms", "Greek rush, club fairs, the fuel-me-up moment.", ACCENT], ["DEC / APR", "Finals Weeks", "11pm energy-need windows. Dorm + library sampling.", LIME], ["MAR", "Spring Break", "Beach + destination activations. The travel-brand window.", ACCENT], ["APR", "Spring Philanthropy", "Greek philanthropy, day-parties, end-of-year events.", LIME]].map(([w, t, d, c]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    padding: "22px 18px",
    background: "#fff",
    border: "1px solid rgba(10,11,13,0.1)",
    borderRadius: 12,
    borderTop: `3px solid ${c}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: c
  }
}, w), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 17,
    letterSpacing: "-0.02em",
    lineHeight: 1.1
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 12.5,
    lineHeight: 1.5,
    color: "rgba(10,11,13,0.62)"
  }
}, d))))));

/* ============ COMPLIANCE ============ */
const CampusCompliance = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "110px 0",
    background: "var(--col-ink)",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: 56,
    alignItems: "center"
  },
  className: "col-comply-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: LIME,
    textTransform: "uppercase",
    marginBottom: 16
  }
}, "// WE OPERATE BY THE RULES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(30px,4vw,56px)",
    letterSpacing: "-0.035em",
    lineHeight: 1.0
  }
}, "Campus access is ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "earned,"), " not assumed."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)"
  }
}, "Every university has its own solicitation policy, vendor approval, and space-reservation process. We handle the paperwork so your brand is on campus legally \u2014 not escorted off it.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  }
}, [["Solicitation policy", "We confirm each school's vendor + solicitation rules before we step on campus."], ["Space reservations", "Quad, union, and rec-center space booked through the proper office."], ["On-campus permits", "Tabling permits, vendor approvals, and COIs filed in advance."], ["NIL compliance", "Athlete activations structured to current NIL + school guidelines."], ["Alcohol / age-gating", "TIPS-certified staff and 21+ controls where the program requires it."], ["Off-campus rows", "Apartment + Greek-row programs run on private property, by permission."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    padding: "20px 18px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontFamily: "var(--font-mono)",
    fontWeight: 700
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15
  }
}, t)), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 12.5,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.62)"
  }
}, d)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 860px){ .col-comply-grid{ grid-template-columns: 1fr !important; } }`));
const Campuses = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0 0",
    background: "var(--col-paper)",
    color: "var(--col-ink)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 18
  }
}, "// 120+ CAMPUSES \xB7 COAST TO COAST"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px, 6vw, 96px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.94,
    color: "var(--col-ink)",
    margin: 0,
    textWrap: "balance",
    maxWidth: 1100,
    marginBottom: 22
  }
}, "We know the dorm row.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "You name the school.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.55,
    color: "rgba(10,11,13,0.7)",
    maxWidth: 700,
    margin: 0,
    marginBottom: 56
  }
}, "SEC. Big Ten. Pac-12. ACC. Big 12. AAC. MAC. Sun Belt. MWC. Ivy. MEAC + SWAC (HBCU). Tell us the campus, we've got the playbook.")), /*#__PURE__*/React.createElement(Container, {
  style: {
    marginBottom: 40
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 30
  }
}, CONFERENCES.map(c => /*#__PURE__*/React.createElement("div", {
  key: c.conf,
  className: "col-rise-on-view",
  style: {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 600ms, transform 600ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: `2px solid ${ACCENT}`
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: "-0.02em",
    color: "var(--col-ink)"
  }
}, c.conf), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    color: "rgba(10,11,13,0.5)",
    textTransform: "uppercase"
  }
}, c.schools.length, " campuses")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "7px 8px"
  }
}, c.schools.map(s => /*#__PURE__*/React.createElement("span", {
  key: s,
  style: {
    padding: "6px 11px",
    borderRadius: 999,
    border: "1px solid rgba(10,11,13,0.16)",
    fontFamily: "var(--font-mono)",
    fontSize: 11.5,
    letterSpacing: "0.02em",
    color: "rgba(10,11,13,0.82)",
    background: "rgba(10,11,13,0.02)",
    transition: "background 160ms, color 160ms, border-color 160ms",
    cursor: "default"
  },
  onMouseEnter: e => {
    e.currentTarget.style.background = ACCENT;
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.borderColor = ACCENT;
  },
  onMouseLeave: e => {
    e.currentTarget.style.background = "rgba(10,11,13,0.02)";
    e.currentTarget.style.color = "rgba(10,11,13,0.82)";
    e.currentTarget.style.borderColor = "rgba(10,11,13,0.16)";
  }
}, s)))))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 50,
    fontSize: 14.5,
    lineHeight: 1.65,
    color: "rgba(10,11,13,0.6)",
    maxWidth: 960,
    fontFamily: "var(--font-body)"
  }
}, "Ignite runs collegiate marketing, back-to-school sampling, student brand-ambassador programs, product seeding, door-hanger drops, and on-campus activations across the ", /*#__PURE__*/React.createElement("b", null, "SEC, Big Ten, ACC, Big 12, Pac-12, American, Mountain West, Sun Belt, MAC, Ivy League, and HBCU (MEAC + SWAC)"), " conferences \u2014 plus community colleges, art schools, and urban multi-school metros nationwide. Don't see your campus? We staff all 50 states.")));

/* =========================================================
   06.5 / ON THE GROUND — real photo gallery of campus work
========================================================= */
const PHOTOS = [{
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-1-tailgate.jpg",
  lane: "GAME-DAY TAILGATE",
  title: "Tailgate footprint · home opener",
  detail: "Branded canopy. Coolers stocked. Sample-to-attendee handoffs in front of the stadium gates.",
  aspect: "4 / 5",
  span: "row 1 / span 2"
}, {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-5-liquid-death-dorm.jpg",
  lane: "DOOR HANGER PROGRAM",
  title: "Liquid Death · dorm door drop",
  detail: "Branded door hangers + cans, walked floor by floor. The package waits on the door until they get home.",
  aspect: "1 / 1"
}, {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-2-fuel-your-day.jpg",
  lane: "ON-CAMPUS ACTIVATION",
  title: "Quad takeover · daytime traffic",
  detail: "Branded tent + sampling + take-home tote. Catches every class commuter between buildings.",
  aspect: "4 / 5"
}, {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-3-fuel-focus.jpg",
  lane: "BACK-TO-SCHOOL SAMPLING",
  title: "Welcome week sampling station",
  detail: "Sample-and-sign-up flow. Branded merch handoff. Clipboard captures opt-ins for follow-up.",
  aspect: "4 / 5"
}, {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-4-apartment-pool.jpg",
  lane: "OFF-CAMPUS ACTIVATION",
  title: "Apartment pool deck · move-in week",
  detail: "Off-campus apartment community activation. Welcome-to-the-neighborhood sampling around the pool.",
  aspect: "4 / 5"
}, {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/collegiate-6-owala-engraving.jpg",
  lane: "ON-CAMPUS ACTIVATION",
  title: "Owala · custom engraving station",
  detail: "Branded experience that pulls a line. Personalized product creates earned social moments.",
  aspect: "4 / 5"
}];
const OnTheGround = () => /*#__PURE__*/React.createElement("section", {
  id: "on-the-ground",
  style: {
    padding: "140px 0",
    background: "var(--col-ink)",
    color: "#fff",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `radial-gradient(ellipse 50% 50% at 20% 30%, ${ACCENT}10, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, ${LIME}08, transparent 60%)`
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 36,
    flexWrap: "wrap",
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "// ON THE GROUND"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px, 6vw, 96px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.94,
    color: "#fff",
    margin: 0,
    textWrap: "balance",
    maxWidth: 1100
  }
}, "Real activations.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "Real campuses."))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)",
    maxWidth: 420,
    margin: 0
  }
}, "Not stock photography. Not renderings. Actual programs Ignite has staffed across the country.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "minmax(180px, auto)",
    gap: 14
  }
}, PHOTOS.map((p, i) => {
  /* Hand-tuned spans + rotations for editorial collage feel */
  const layouts = [{
    col: "span 5",
    row: "span 2",
    rot: -0.6
  }, /* tailgate */
  {
    col: "span 4",
    row: "span 2",
    rot: 0.8
  }, /* dorm door */
  {
    col: "span 3",
    row: "span 2",
    rot: -1
  }, /* fuel your day */
  {
    col: "span 4",
    row: "span 2",
    rot: 1
  }, /* fuel focus */
  {
    col: "span 4",
    row: "span 2",
    rot: -0.8
  }, /* pool */
  {
    col: "span 4",
    row: "span 2",
    rot: 0.6
  }, /* owala engraving */
  {
    col: "span 12",
    row: "span 2",
    rot: -0.2
  } /* owala team — full width */];
  const layout = layouts[i] || layouts[0];
  const isLime = i % 3 === 1;
  const accentColor = isLime ? LIME : ACCENT;
  return /*#__PURE__*/React.createElement("figure", {
    key: p.src,
    className: "col-rise-on-view",
    style: {
      gridColumn: layout.col,
      gridRow: layout.row,
      margin: 0,
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      border: `1px solid ${accentColor}33`,
      transform: `rotate(${layout.rot}deg)`,
      opacity: 0,
      transition: "opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 350ms cubic-bezier(0.2,0.7,0.2,1), border-color 200ms, box-shadow 200ms",
      transitionDelay: i % 4 * 90 + "ms",
      cursor: "default",
      background: "#0F1117",
      boxShadow: "0 16px 40px rgba(0,0,0,0.4)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = `rotate(0deg) translateY(-4px) scale(1.015)`;
      e.currentTarget.style.borderColor = accentColor;
      e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.6), 0 0 40px ${accentColor}44`;
      e.currentTarget.style.zIndex = 10;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = `rotate(${layout.rot}deg)`;
      e.currentTarget.style.borderColor = accentColor + "33";
      e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
      e.currentTarget.style.zIndex = 1;
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.title,
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "saturate(1.05) contrast(1.05)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "20px 22px 18px",
      background: "linear-gradient(180deg, transparent 0%, rgba(10,11,13,0.5) 40%, rgba(10,11,13,0.92) 100%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 9px",
      borderRadius: 4,
      background: `${accentColor}1c`,
      border: `1px solid ${accentColor}66`,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: accentColor,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: accentColor,
      boxShadow: `0 0 6px ${accentColor}`
    }
  }), p.lane), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-0.015em",
      lineHeight: 1.2,
      marginBottom: 4
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.75)",
      maxWidth: 540
    }
  }, p.detail)));
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    padding: "22px 28px",
    background: `${ACCENT}10`,
    border: `1px solid ${ACCENT}44`,
    borderRadius: 14,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 18,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.18em",
    color: ACCENT,
    textTransform: "uppercase",
    fontWeight: 700
  }
}, "// EVERY ACTIVATION DOCUMENTED IN SPARK \xB7 PER-CAMPUS RECAP IN 24HR"), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "#fff",
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: 700,
    padding: "10px 16px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)"
  }
}, "SEE MORE WORK \u2192"))));
const Receipts = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0",
    background: "var(--col-ink)",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${ACCENT}10, transparent 70%)`
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: LIME,
    textTransform: "uppercase",
    marginBottom: 32,
    textAlign: "center"
  }
}, "// THE RECEIPTS"), /*#__PURE__*/React.createElement("blockquote", {
  style: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(34px, 4.5vw, 76px)",
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    textAlign: "center",
    color: "#fff",
    textWrap: "balance",
    maxWidth: 1300,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: ACCENT,
    fontStyle: "italic"
  }
}, "\"They were in the group chat by Friday."), /*#__PURE__*/React.createElement("br", null), "I didn't even tell anyone they were coming.\""), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    color: "rgba(255,255,255,0.55)",
    textTransform: "uppercase",
    textAlign: "center"
  }
}, "\u2014 STUDENT BRAND MANAGER \xB7 UT AUSTIN \xB7 Q3 PROGRAM"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 80,
    paddingTop: 56,
    borderTop: "1px solid rgba(255,255,255,0.1)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    marginBottom: 22,
    textAlign: "center"
  }
}, "// BRANDS WE'VE ACTIVATED ON CAMPUS"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 0,
    alignItems: "center"
  }
}, ["LIQUID DEATH", "DUDE WIPES", "WHITE CLAW", "MAS+ × MESSI", "MARC ANTHONY", "SMALLS SLIDERS", "KRISPY KRUNCHY", "TOTAL WIRELESS"].map((b, i, arr) => /*#__PURE__*/React.createElement("div", {
  key: b,
  style: {
    padding: "30px 18px",
    textAlign: "center",
    borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.65)",
    transition: "color 160ms"
  },
  onMouseEnter: e => e.currentTarget.style.color = "#fff",
  onMouseLeave: e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"
}, b))))));

/* =========================================================
   07.2 / SPARK — the field operation platform
========================================================= */
const SparkField = () => {
  /* Live-ish counters */
  const [cans, setCans] = React.useState(184230);
  const [onCampus, setOnCampus] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setCans(c => c + Math.floor(Math.random() * 7) + 1), 900);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    /* count up to 17,400 once */
    let v = 0;
    const target = 17400;
    const id = setInterval(() => {
      v += Math.ceil(target / 40);
      if (v >= target) {
        v = target;
        clearInterval(id);
      }
      setOnCampus(v);
    }, 40);
    return () => clearInterval(id);
  }, []);

  /* Live leaderboard */
  const leaders = [{
    rank: 1,
    name: "maya_atx",
    campus: "UT AUSTIN",
    pts: 4820,
    you: false
  }, {
    rank: 2,
    name: "dlo_ohio",
    campus: "OHIO STATE",
    pts: 4610,
    you: false
  }, {
    rank: 3,
    name: "sam.bama",
    campus: "ALABAMA",
    pts: 4390,
    you: false
  }, {
    rank: 4,
    name: "jaylenFIU",
    campus: "FIU",
    pts: 4205,
    you: true
  }, {
    rank: 5,
    name: "kayla_uga",
    campus: "UGA",
    pts: 3980,
    you: false
  }];
  const [hl, setHl] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setHl(h => (h + 1) % leaders.length), 1600);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "spark",
    style: {
      padding: "140px 0",
      background: "var(--col-ink)",
      color: "#fff",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: `radial-gradient(ellipse 55% 50% at 80% 25%, ${LIME}14, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, ${ACCENT}0c, transparent 60%)`
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 56,
      alignItems: "flex-end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 14px",
      borderRadius: 999,
      background: `${LIME}14`,
      border: `1px solid ${LIME}66`,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: LIME,
      textTransform: "uppercase",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 10px ${LIME}`,
      animation: "col-pulse 1.4s infinite"
    }
  }), "POWERED BY SPARK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(40px, 5.5vw, 88px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.94,
      color: "#fff",
      margin: 0,
      textWrap: "balance"
    }
  }, "Our field runs on", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: LIME,
      textShadow: `0 0 50px ${LIME}55`
    }
  }, "a platform, not a phone tree."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.75)",
      maxWidth: 420,
      margin: 0,
      paddingBottom: 8
    }
  }, "Spark is our proprietary field-ops platform \u2014 257,000 brand ambassadors, gamified and game-ready. You see who's on which campus, in real time, as the cans hit hands.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      border: `1px solid rgba(255,255,255,0.1)`,
      borderRadius: 14,
      overflow: "hidden",
      marginBottom: 24
    }
  }, [{
    v: "257,000",
    l: "BRAND AMBASSADORS",
    c: "#fff"
  }, {
    v: "40%+",
    l: "CURRENTLY IN COLLEGE",
    c: LIME
  }, {
    v: onCampus.toLocaleString(),
    l: "ON-CAMPUS RIGHT NOW",
    c: ACCENT
  }, {
    v: "50",
    l: "STATES · LIVE COVERAGE",
    c: "#fff"
  }].map((s, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: "28px 24px",
      background: i === 1 || i === 2 ? "rgba(255,255,255,0.02)" : "transparent",
      borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(28px, 3.2vw, 48px)",
      color: s.c,
      letterSpacing: "-0.035em",
      lineHeight: 1,
      textShadow: s.c !== "#fff" ? `0 0 24px ${s.c}55` : "none"
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.2em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase"
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, #14161B, #0F1115)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "13px 18px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["#FF5F57", "#FFBD2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "rgba(255,255,255,0.5)"
    }
  }, "spark.ignite / brand-view / on-campus"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: LIME,
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 10px ${LIME}`,
      animation: "col-pulse 1.4s infinite"
    }
  }), "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: LIME,
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, ">> ", "BAS ON CAMPUS \xB7 BY SCHOOL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, [["UT Austin · TX", 1240, ACCENT], ["Ohio State · OH", 1080, LIME], ["Alabama · AL", 940, ACCENT], ["FIU · Miami · FL", 880, LIME], ["UGA · Athens · GA", 760, ACCENT]].map(([name, n, c], idx) => {
    const pct = Math.round(n / 1240 * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        display: "grid",
        gridTemplateColumns: "150px 1fr auto",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "rgba(255,255,255,0.8)"
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18,
        background: "rgba(255,255,255,0.05)",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + "%",
        height: "100%",
        background: `linear-gradient(90deg, ${c}, ${c}88)`,
        boxShadow: `0 0 12px ${c}66`
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 14,
        color: c,
        minWidth: 44,
        textAlign: "right"
      }
    }, n.toLocaleString()));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase"
    }
  }, "FILTER: YOUR BRAND \xB7 ON-CAMPUS \xB7 AVAILABLE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: LIME,
      textTransform: "uppercase"
    }
  }, onCampus.toLocaleString(), " MATCHES \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
      border: `1px solid ${LIME}33`,
      borderRadius: 18,
      overflow: "hidden",
      padding: 22,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: LIME,
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, ">> ", "EARN-TO-WIN"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.16em",
      color: "rgba(255,255,255,0.4)",
      textTransform: "uppercase"
    }
  }, "THIS WEEK")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      borderRadius: 12,
      marginBottom: 14,
      background: `${ACCENT}12`,
      border: `1px solid ${ACCENT}44`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.2em",
      color: ACCENT,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "\u2605 CANS IN HANDS \xB7 ALL CAMPUSES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 40,
      color: ACCENT,
      letterSpacing: "-0.035em",
      lineHeight: 1,
      textShadow: `0 0 24px ${ACCENT}55`,
      fontVariantNumeric: "tabular-nums"
    }
  }, cans.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.2em",
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "\u21B3 AMBASSADOR LEADERBOARD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, leaders.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 10,
      alignItems: "center",
      padding: "9px 12px",
      borderRadius: 8,
      background: hl === i ? `${LIME}1a` : b.you ? "rgba(255,255,255,0.04)" : "transparent",
      border: hl === i ? `1px solid ${LIME}55` : "1px solid transparent",
      transition: "background 300ms, border-color 300ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      color: b.rank === 1 ? LIME : "rgba(255,255,255,0.6)",
      minWidth: 18
    }
  }, b.rank), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "#fff"
    }
  }, "@", b.name, b.you && /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      marginLeft: 6
    }
  }, "\xB7 YOU")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      color: "rgba(255,255,255,0.4)",
      letterSpacing: "0.1em"
    }
  }, b.campus)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      color: ACCENT
    }
  }, b.pts.toLocaleString())))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.14em",
      color: "rgba(255,255,255,0.4)",
      textTransform: "uppercase",
      lineHeight: 1.5
    }
  }, "\u203B BAs earn points per shift, sample, + photo \u2014 redeemable for cash, gear, and tickets. Gamified means staffed-fast.")))));
};

/* =========================================================
   07.5 / PEDIGREE — built by operators from the brands that own Gen-Z
========================================================= */
const PEDIGREE = [{
  brand: "Energy-drink leader",
  role: "Collegiate + field marketing",
  color: ACCENT
}, {
  brand: "Sports-hydration brand",
  role: "Sports + creator activation",
  color: LIME
}, {
  brand: "Wellness brand",
  role: "Wellness + campus sampling",
  color: ACCENT
}, {
  brand: "Beverage disruptor",
  role: "Brand-world activations",
  color: LIME
}];
const Pedigree = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0",
    background: "var(--col-ink)",
    color: "#fff",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: `radial-gradient(ellipse 55% 50% at 75% 25%, ${ACCENT}12, transparent 60%), radial-gradient(ellipse 50% 50% at 15% 80%, ${LIME}0a, transparent 60%)`
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 64,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 18
  }
}, "// WHO'S RUNNING IT"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(40px, 5.5vw, 88px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.94,
    color: "#fff",
    margin: 0,
    textWrap: "balance"
  }
}, "Run by the people who built", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ACCENT
  }
}, "the brands you're chasing.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.75)",
    maxWidth: 540
  }
}, "Our team didn't learn campus from a case study. They ran it inside the brands that ", /*#__PURE__*/React.createElement("em", {
  style: {
    color: "#fff",
    fontStyle: "italic"
  }
}, "own"), " Gen-Z \u2014 student-marketeer programs, creator engines, and campus wellness machines. We've sat in your seat. Now we run the field for you.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 0
  }
}, PEDIGREE.map((p, i) => /*#__PURE__*/React.createElement("div", {
  key: p.brand,
  className: "col-rise-on-view",
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    padding: "24px 4px",
    borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    opacity: 0,
    transform: "translateX(16px)",
    transition: "opacity 600ms cubic-bezier(0.2,0.7,0.2,1), transform 600ms cubic-bezier(0.2,0.7,0.2,1)",
    transitionDelay: i * 90 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 14
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    color: p.color,
    letterSpacing: "0.1em"
  }
}, "EX"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(26px, 3vw, 40px)",
    letterSpacing: "-0.02em",
    color: "#fff"
  }
}, p.brand)), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    textAlign: "right",
    maxWidth: 200
  }
}, p.role))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "rgba(255,255,255,0.45)",
    textTransform: "uppercase"
  }
}, "\u203B + veteran-owned \xB7 operator-led \xB7 200+ campuses staffed")))));

/* =========================================================
   08 / CTA — "Get in the room"
========================================================= */
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "160px 0",
    background: ACCENT,
    color: "#fff",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    color: "#0A0B0D",
    textTransform: "uppercase",
    marginBottom: 22
  }
}, "// GET IN THE ROOM"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(56px, 8vw, 160px)",
    letterSpacing: "-0.05em",
    lineHeight: 0.86,
    color: "#fff",
    margin: 0,
    textWrap: "balance"
  }
}, "Tell us the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#0A0B0D",
    fontStyle: "italic"
  }
}, "school."), /*#__PURE__*/React.createElement("br", null), "We've got the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#0A0B0D",
    fontStyle: "italic"
  }
}, "playbook.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=campus",
  style: {
    padding: "22px 32px",
    borderRadius: 999,
    background: "#0A0B0D",
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none",
    letterSpacing: "-0.005em",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 12px 40px rgba(0,0,0,0.4)"
  }
}, "Start a brief ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "https://calendly.com/kyle-igniteproductions/30min?back=1",
  target: "_blank",
  rel: "noopener",
  style: {
    padding: "22px 32px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.4)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none",
    letterSpacing: "-0.005em"
  }
}, "Book a 30-min call")))));

/* =========================================================
   ROOT
========================================================= */
const CollegiatePage = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Collegiate Marketing"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: ""
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#9FC24E",
    label: "Collegiate Marketing",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(FiveLanes, null), /*#__PURE__*/React.createElement(Tactics, null), /*#__PURE__*/React.createElement(OnTheGround, null), /*#__PURE__*/React.createElement(SparkField, null), /*#__PURE__*/React.createElement(Pedigree, null), /*#__PURE__*/React.createElement(Campuses, null), /*#__PURE__*/React.createElement(CampusCalendar, null), /*#__PURE__*/React.createElement(GreekLife, null), /*#__PURE__*/React.createElement(CampusCompliance, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
document.title = "Collegiate Marketing | Gen-Z Campus Activation — Ignite";
Object.assign(window, {
  PageServicesCollegiateMarketing: CollegiatePage
});
})();
