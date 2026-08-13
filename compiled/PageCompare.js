(function(){if (typeof window !== "undefined" && window.PageCompare) return;
/* Auto-extracted from the design project's pages/compare.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const COMPARE_ROWS = [{
  cat: "Staffing speed",
  them: "2–3 weeks for a 'rush' market, with crew you've never met.",
  us: "48-hour rush window. Same crew, every market. We don't sub it out."
}, {
  cat: "Quote transparency",
  them: "Bundled markup, line-item ambiguity, surprise change orders.",
  us: "Line-item quote. Crew cost, fees, and pass-through clearly broken out. No surprise invoices."
}, {
  cat: "Compliance & certifications",
  them: "Ambassadors 'should be' TIPS-certified. Food handler cards 'on request.'",
  us: "TIPS/TABC/RBS, ServSafe, and category-specific certifications verified per shift. COIs on file before deployment."
}, {
  cat: "Reporting & recap",
  them: "PowerPoint sent 9 business days after the event. Photos missing. Counts estimated.",
  us: "Auto-generated recap inside Spark within hours. GPS-verified counts, photo capture, ambassador notes."
}, {
  cat: "Subcontracting",
  them: "Bid won by national, delivered by a local sub you'll never know.",
  us: "Direct employer-of-record. Captains in every market on our roster, not a vendor's."
}, {
  cat: "Communication",
  them: "Account exec. Junior PM. Subcontractor PM. 3 emails deep before you reach anyone with authority.",
  us: "Senior account lead with category background. One PM, one phone number, one invoice."
}, {
  cat: "In-house tech",
  them: "A spreadsheet. Maybe a CSV from a third-party staffing platform.",
  us: "Spark — proprietary field-ops platform. Live dashboard, request intake, GPS check-ins, recap engine."
}, {
  cat: "Geographic coverage",
  them: "Top 10 markets in-house, the rest 'we partner with locals.'",
  us: "All 50 states, 200+ named metros, 257K+ vetted ambassadors. No partner network markup."
}];
const ComparePage = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, null), /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    padding: "150px 0 100px",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("style", null, `
        @keyframes cmp-grid-drift { from { background-position: 0 0, 0 0; } to { background-position: 96px 96px, 96px 96px; } }
        @keyframes cmp-glow { 0%,100% { transform: scale(1); opacity: .55; } 50% { transform: scale(1.12); opacity: .85; } }
        @keyframes cmp-scan { 0% { transform: translateY(-100%); opacity: 0; } 8% { opacity: .55; } 92% { opacity: .55; } 100% { transform: translateY(110vh); opacity: 0; } }
        @keyframes cmp-pulse { 0%, 100% { opacity: .9; } 50% { opacity: .55; } }
        @keyframes cmp-rise { 0% { opacity: 0; transform: translateY(14px); } 100% { opacity: 1; transform: translateY(0); } }
        .cmp-rise { opacity: 0; animation: cmp-rise 700ms cubic-bezier(0.2,0.7,0.2,1) forwards; }
        @media (prefers-reduced-motion: reduce) { .cmp-anim, .cmp-anim * { animation: none !important; } .cmp-rise { animation: none; opacity: 1; } }
      `), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  className: "cmp-anim",
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), " + "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "48px 48px, 48px 48px",
    animation: "cmp-grid-drift 24s linear infinite",
    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 95%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 95%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  className: "cmp-anim",
  style: {
    position: "absolute",
    left: "-10%",
    top: "-15%",
    width: "60%",
    height: "70%",
    background: "radial-gradient(ellipse at center, rgba(215, 69, 62,0.28) 0%, rgba(215, 69, 62,0) 65%)",
    filter: "blur(20px)",
    pointerEvents: "none",
    animation: "cmp-glow 18s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  className: "cmp-anim",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 2,
    background: "linear-gradient(to bottom, transparent, rgba(215, 69, 62,0.5), transparent)",
    animation: "cmp-scan 14s linear infinite",
    animationDelay: "3s"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: "-3%",
    top: "-2%",
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(180px, 26vw, 420px)",
    lineHeight: 0.85,
    letterSpacing: "-0.04em",
    color: "rgba(255,255,255,0.025)",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    pointerEvents: "none",
    userSelect: "none"
  }
}, "VS."), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "cmp-rise"
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, /*#__PURE__*/React.createElement("span", {
  style: {
    animation: "cmp-pulse 2.4s ease-in-out infinite",
    display: "inline-block"
  }
}, ">> ", "IGNITE VS. THE TYPICAL FIELD-MARKETING AGENCY"))), /*#__PURE__*/React.createElement("h1", {
  className: "cmp-rise",
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(56px, 8vw, 144px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.9,
    maxWidth: 1400,
    textWrap: "balance",
    animationDelay: "120ms"
  }
}, "Ignite vs.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "everyone else.")), /*#__PURE__*/React.createElement("p", {
  className: "cmp-rise",
  style: {
    marginTop: 28,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(20px, 2.1vw, 28px)",
    lineHeight: 1.4,
    letterSpacing: "-0.015em",
    color: "rgba(255,255,255,0.92)",
    maxWidth: 1020,
    textWrap: "pretty",
    animationDelay: "240ms"
  }
}, "A direct comparison. Eight places where we operate differently \u2014 and what that means for your program, your invoice, and the answer when leadership asks ", /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\"what happened?\"")), /*#__PURE__*/React.createElement("p", {
  className: "cmp-rise",
  style: {
    marginTop: 18,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    animationDelay: "360ms"
  }
}, "\u203B All claims verifiable in references or live demo."))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 0",
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "cmp-rise",
  style: {
    marginBottom: 32,
    display: "flex",
    alignItems: "center",
    gap: 14
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "8 POINTS OF COMPARISON"), /*#__PURE__*/React.createElement("span", {
  style: {
    flex: 1,
    height: 1,
    background: "rgba(255,255,255,0.08)"
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "cmp-rise",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr 1.4fr",
    gap: 0,
    marginBottom: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "20px 24px",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "20px 24px",
    background: "var(--ink-200)",
    border: "1px solid var(--ink-400)",
    borderRight: "1px solid var(--ink-400)",
    borderBottom: "none",
    borderRadius: "14px 14px 0 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 8
  }
}, "\"THE OTHERS\""), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)"
  }
}, "Typical field-marketing agency")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "20px 24px",
    background: "linear-gradient(180deg, rgba(215, 69, 62,0.18), rgba(215, 69, 62,0.06))",
    border: "1px solid rgba(215, 69, 62,0.5)",
    borderBottom: "none",
    borderRadius: "14px 14px 0 0",
    boxShadow: "0 -8px 40px -10px rgba(215, 69, 62,0.3)",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 7,
    height: 7,
    borderRadius: 999,
    background: "var(--ignite-500)",
    boxShadow: "0 0 12px var(--ignite-500)",
    animation: "cmp-pulse 2.4s ease-in-out infinite"
  }
}), "IGNITE PRODUCTIONS"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)"
  }
}, "Veteran-owned. Operator-built."))), /*#__PURE__*/React.createElement("div", null, COMPARE_ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: r.cat,
  className: "cmp-rise",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr 1.4fr",
    gap: 0,
    animationDelay: i * 80 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "26px 24px",
    background: "var(--ink-000)",
    borderLeft: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)",
    borderRight: "1px solid var(--ink-400)",
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    letterSpacing: "-0.015em",
    color: "var(--fg-1)",
    lineHeight: 1.2
  }
}, r.cat)), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "26px 24px",
    background: "var(--ink-200)",
    borderBottom: "1px solid var(--ink-400)",
    borderRight: "1px solid var(--ink-400)",
    color: "var(--fg-3)",
    fontSize: 15.5,
    lineHeight: 1.55,
    position: "relative",
    paddingLeft: 50
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    left: 24,
    top: 26,
    width: 18,
    height: 18,
    borderRadius: 999,
    background: "rgba(216,118,84,0.18)",
    border: "1px solid rgba(216,118,84,0.4)",
    color: "#D87654",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700
  }
}, "\u2715"), r.them), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "26px 24px",
    background: "linear-gradient(180deg, rgba(215, 69, 62,0.06), rgba(10,11,13,0.85))",
    borderBottom: "1px solid rgba(215, 69, 62,0.35)",
    borderRight: "1px solid rgba(215, 69, 62,0.35)",
    color: "var(--fg-1)",
    fontSize: 15.5,
    lineHeight: 1.55,
    fontWeight: 500,
    position: "relative",
    paddingLeft: 50
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    left: 24,
    top: 26,
    width: 18,
    height: 18,
    borderRadius: 999,
    background: "rgba(215, 69, 62,0.18)",
    border: "1px solid rgba(215, 69, 62,0.55)",
    color: "var(--ignite-500)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700
  }
}, "\u2713"), r.us)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    padding: "20px 24px",
    background: "var(--ink-000)",
    border: "1px solid var(--ink-400)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 12,
    height: 12,
    borderRadius: 3,
    background: "#D87654"
  }
}), "\"The others\""), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 12,
    height: 12,
    borderRadius: 3,
    background: "var(--ignite-500)"
  }
}), "Ignite Productions")), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "\u203B References & live demo available")))), /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0",
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(215, 69, 62,0.18), transparent 60%)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: -60,
    bottom: -80,
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(120px, 18vw, 280px)",
    lineHeight: 0.85,
    letterSpacing: "-0.04em",
    color: "rgba(215, 69, 62,0.06)",
    textTransform: "uppercase",
    pointerEvents: "none",
    userSelect: "none"
  }
}, "PROOF."), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 64,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "STILL COMPARING?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(40px, 5.5vw, 84px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    textWrap: "balance"
  }
}, "Brief us. We'll back", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "every claim"), " with a\xA0reference."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 620
  }
}, "Send the brief and we'll come back in 48 hours with a quote, a reference call from a comparable program, and (if you want it) a live Spark demo on your category."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(AccentBtn, {
  onClick: () => location.href = "/contact"
}, "Start a brief"), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  className: "link-mono",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "16px 20px",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase"
  }
}, "See our work \u2192"))), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "right",
    fontFamily: "var(--font-stencil)",
    color: "var(--ink-300)",
    fontSize: "clamp(96px, 14vw, 200px)",
    lineHeight: 0.85,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    opacity: 0.9,
    userSelect: "none"
  }
}, "IGNITE."))), /*#__PURE__*/React.createElement(SiteFooter, null));
Object.assign(window, {
  PageCompare: ComparePage
});
})();
