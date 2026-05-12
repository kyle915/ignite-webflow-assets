(function(){if (typeof window !== "undefined" && window.TopicsHub) return;
/* global React, Container, OpsLine, AccentBtn, TOPIC_PILLARS, TOPIC_LIST */
/* ============================================================
   TOPICS HUB + PER-TOPIC PILLAR RENDERER
   Mounts via topicsRunner.js on /topics and /topics/<slug>.
   Per-topic page emits Article JSON-LD.
   ============================================================ */

const TopicsHub = () => {
  const list = window.TOPIC_LIST || [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes tp-rise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
        .tp-card { animation: tp-rise 600ms cubic-bezier(0.2,0.7,0.2,1) both; transition: border-color 200ms, transform 200ms; }
        .tp-card:hover { border-color: var(--ignite-500) !important; transform: translateY(-3px); }
        @media (prefers-reduced-motion: reduce) { .tp-card { animation:none; transition:none; } .tp-card:hover { transform:none; } }
      `), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "150px 0 90px",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "TOPIC PILLARS \xB7 WHAT WE DO \xB7 WHY IT WORKS"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 22,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(56px, 8vw, 132px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.92,
      maxWidth: 1300,
      textWrap: "balance",
      color: "#fff"
    }
  }, "Five disciplines.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "One playbook.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: "clamp(18px, 1.6vw, 22px)",
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 820
    }
  }, "Field marketing, experiential activation, brand sampling, trade-show staffing, mobile tours. The five pillars of how we run programs \u2014 what each one is, where it fits, and which brands win with it."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 120px",
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
      gap: 18
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t.slug,
    href: "/topics/" + t.slug,
    className: "tp-card",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "36px 32px 32px",
      background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
      border: "1px solid var(--ink-400)",
      borderRadius: 14,
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 280,
      animationDelay: i * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 4,
      background: `linear-gradient(90deg, ${t.accent} 0%, ${t.accent}aa 35%, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: "flex-start",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: t.accent,
      padding: "6px 10px",
      borderRadius: 999,
      background: `${t.accent}1c`,
      border: `1px solid ${t.accent}55`
    }
  }, String(i + 1).padStart(2, "0"), " \xB7 PILLAR"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px, 2.6vw, 36px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.0,
      margin: 0,
      color: "#fff"
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0,
      flex: 1
    }
  }, t.lede), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: t.accent
    }
  }, "Read the pillar \u2192")))))));
};
const TopicPillar = ({
  topic
}) => {
  if (!topic) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .tp-hero h1 { color: #fff !important; }
        .tp-paper { background: var(--paper-000); color: var(--fg-1-inv); }
        .tp-paper h2 { color: #0A0B0D !important; }
        .tp-paper p { color: #2A2D33 !important; }
      `), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("section", {
    className: "tp-hero",
    style: {
      position: "relative",
      padding: "150px 0 80px",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", topic.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 22,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(48px, 7vw, 120px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.93,
      color: "#fff",
      textWrap: "balance",
      maxWidth: 1300
    }
  }, topic.acc ? (() => {
    const parts = topic.headline.split(topic.acc);
    return /*#__PURE__*/React.createElement(React.Fragment, null, parts[0], /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic",
        color: topic.accent
      }
    }, topic.acc), parts[1]);
  })() : topic.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: "clamp(18px, 1.7vw, 24px)",
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.88)",
      maxWidth: 960
    }
  }, topic.lede))), topic.sections && topic.sections.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    className: "tp-paper",
    style: {
      padding: "80px 0",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 60,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: topic.accent
    }
  }, ">> ", String(i + 1).padStart(2, "0"), " \xB7 SECTION")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px, 3.4vw, 44px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.05
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: 880
    }
  }, s.p)))))), topic.services && topic.services.length || topic.industries && topic.industries.length || topic.cities && topic.cities.length ? /*#__PURE__*/React.createElement("section", {
    className: "tp-paper",
    style: {
      padding: "70px 0",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 18,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: topic.accent
    }
  }, ">> ", "WHERE THIS LIVES"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--paper-200)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 28
    }
  }, topic.services && topic.services.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 10,
      opacity: 0.7
    }
  }, "SERVICES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, topic.services.map(slug => /*#__PURE__*/React.createElement("a", {
    key: slug,
    href: "/services/" + slug,
    style: {
      display: "inline-flex",
      padding: "10px 14px",
      borderRadius: 999,
      background: "var(--paper-100)",
      border: "1px solid var(--paper-200)",
      color: "var(--fg-1-inv)",
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 14
    }
  }, slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), " \u2197")))), topic.industries && topic.industries.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 10,
      opacity: 0.7
    }
  }, "INDUSTRIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, topic.industries.map(slug => /*#__PURE__*/React.createElement("a", {
    key: slug,
    href: "/industries/" + slug,
    style: {
      display: "inline-flex",
      padding: "10px 14px",
      borderRadius: 999,
      background: "var(--paper-100)",
      border: "1px solid var(--paper-200)",
      color: "var(--fg-1-inv)",
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 14
    }
  }, slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), " \u2197")))), topic.cities && topic.cities.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 10,
      opacity: 0.7
    }
  }, "MARKETS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, topic.cities.map(slug => /*#__PURE__*/React.createElement("a", {
    key: slug,
    href: "/cities/" + slug,
    style: {
      display: "inline-flex",
      padding: "10px 14px",
      borderRadius: 999,
      background: "var(--paper-100)",
      border: "1px solid var(--paper-200)",
      color: "var(--fg-1-inv)",
      textDecoration: "none",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.04em"
    }
  }, slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())))))))) : null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "BRIEF US"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(36px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.95,
      color: "#fff"
    }
  }, "Run a ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: topic.accent
    }
  }, topic.short.toLowerCase()), " program with us."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AccentBtn, {
    onClick: () => location.href = "https://igniteproductions.co/contact?urgent=1"
  }, "Start a brief"), /*#__PURE__*/React.createElement("a", {
    href: "/topics",
    className: "link-mono",
    style: {
      padding: "16px 20px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "\u2190 All pillars"))))));
};
Object.assign(window, {
  TopicsHub,
  TopicPillar
});
})();
