(function(){if (typeof window !== "undefined" && window.GlossaryHub) return;
/* global React, Container, OpsLine, AccentBtn, GLOSSARY_LIST, GLOSSARY_TERMS */
/* ============================================================
   GLOSSARY HUB + PER-TERM RENDERER
   Mounts via glossaryRunner.js on /glossary and /glossary/<slug>.
   Per-term page emits DefinedTerm + FAQPage JSON-LD.
   ============================================================ */

const GlossaryHub = () => {
  const list = window.GLOSSARY_LIST || [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes gl-rise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
        .gl-card { animation: gl-rise 600ms cubic-bezier(0.2,0.7,0.2,1) both; }
        .gl-card:hover { border-color: var(--ignite-500) !important; transform: translateY(-3px); }
        @media (prefers-reduced-motion: reduce) { .gl-card { animation:none; transition:none; } .gl-card:hover { transform:none; } }
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
  }, ">> ", "GLOSSARY \xB7 FIELD MARKETING TERMS \xB7 DEFINITIONS"), /*#__PURE__*/React.createElement("h1", {
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
  }, "The words you'll hear", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "before"), " the brief."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: "clamp(18px, 1.6vw, 22px)",
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 820
    }
  }, "Plain-language definitions for the certifications, programs, and acronyms that come up on every brief \u2014 TIPS, TABC, RBS, COIs, co-op programs, GPS-verified sampling, and more."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 120px",
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", list.length, " TERMS \xB7 A\u2192Z"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "rgba(255,255,255,0.08)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 16
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("a", {
    key: t.slug,
    href: "/glossary/" + t.slug,
    className: "gl-card",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "28px 26px",
      background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
      border: "1px solid var(--ink-400)",
      borderRadius: 14,
      textDecoration: "none",
      color: "inherit",
      transition: "border-color 200ms, transform 200ms",
      animationDelay: i * 50 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, String(i + 1).padStart(2, "0"), " \xB7 ", t.short), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "-0.015em",
      lineHeight: 1.1,
      margin: 0,
      color: "#fff"
    }
  }, t.term), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, (t.definition || "").split(".").slice(0, 1).join(".") + "."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, "Read definition \u2192")))))));
};
const GlossaryTerm = ({
  term
}) => {
  if (!term) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .gt-hero h1 { color: #fff !important; }
        .gt-paper { background: var(--paper-000); color: var(--fg-1-inv); }
        .gt-paper h2 { color: #0A0B0D !important; }
        .gt-paper p, .gt-paper li { color: #2A2D33 !important; }
      `), /*#__PURE__*/React.createElement("section", {
    className: "gt-hero",
    style: {
      position: "relative",
      padding: "150px 0 70px",
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
  }, ">> ", "GLOSSARY \xB7 ", term.short.toUpperCase()), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(48px, 7vw, 108px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.95,
      color: "#fff",
      textWrap: "balance"
    }
  }, term.term), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 26,
      fontSize: "clamp(18px, 1.6vw, 22px)",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.88)",
      maxWidth: 860
    }
  }, term.definition))), term.bullets && term.bullets.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "gt-paper",
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
      color: "var(--ignite-500)"
    }
  }, ">> ", "KEY POINTS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px, 4vw, 52px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.0
    }
  }, "What you need", /*#__PURE__*/React.createElement("br", null), "to know.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, term.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      paddingBottom: 16,
      borderBottom: i < term.bullets.length - 1 ? "1px solid var(--paper-200)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.14em",
      color: "var(--ignite-500)",
      fontWeight: 600,
      paddingTop: 3
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1.55
    }
  }, b))))))), term.faqs && term.faqs.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "gt-paper",
    style: {
      padding: "80px 0",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", "FAQ \xB7 ", term.short.toUpperCase()), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      marginBottom: 32,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(32px, 4vw, 52px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.0
    }
  }, "Common questions."), /*#__PURE__*/React.createElement("div", null, term.faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: i === 0 ? "1px solid var(--paper-200)" : "none",
      borderBottom: "1px solid var(--paper-200)",
      padding: "22px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      letterSpacing: "-0.015em"
    }
  }, f.q), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 15.5,
      lineHeight: 1.65,
      maxWidth: 880
    }
  }, f.a)))))), term.relatedIndustries && term.relatedIndustries.length || term.relatedServices && term.relatedServices.length || term.relatedMarkets && term.relatedMarkets.length ? /*#__PURE__*/React.createElement("section", {
    className: "gt-paper",
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
      color: "var(--ignite-500)"
    }
  }, ">> ", "RELATED"), /*#__PURE__*/React.createElement("span", {
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
  }, term.relatedIndustries && term.relatedIndustries.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, term.relatedIndustries.map(slug => /*#__PURE__*/React.createElement("a", {
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
  }, slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), " \u2197")))), term.relatedServices && term.relatedServices.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, term.relatedServices.map(slug => /*#__PURE__*/React.createElement("a", {
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
  }, slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), " \u2197")))), term.relatedMarkets && term.relatedMarkets.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, term.relatedMarkets.map(slug => /*#__PURE__*/React.createElement("a", {
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
  }, ">> ", "NEED THIS RUN?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(36px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.95,
      color: "#fff"
    }
  }, "We've staffed ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "this"), " in every state."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AccentBtn, {
    onClick: () => location.href = "https://igniteproductions.co/contact?urgent=1"
  }, "Start a brief"), /*#__PURE__*/React.createElement("a", {
    href: "/glossary",
    className: "link-mono",
    style: {
      padding: "16px 20px",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "\u2190 All terms")))));
};
Object.assign(window, {
  GlossaryHub,
  GlossaryTerm
});
})();
