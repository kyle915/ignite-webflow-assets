(function(){if (typeof window !== "undefined" && window.IndustriesHub) return;
/* global React, SiteNav, SiteFooter, Container, OpsLine, GridOverlay, AccentBtn */
/* ============================================================
   INDUSTRIES HUB — renders /industries.
   Mirrors the design from pages/industries.html, extracted so
   industriesRunner.js can mount it on a Webflow page.
   ============================================================ */

const CrossVerticalFAQ = () => {
  const [open, setOpen] = React.useState(0);
  const faqs = [{
    q: "We span categories — can you handle mixed-vertical programs?",
    a: "Yes. We've run programs that span beverage and food, beauty and lifestyle, alcohol and hospitality. Each vertical gets its own captain, compliance briefing, and reporting layer — but you stay on one PM, one invoice, one Spark view."
  }, {
    q: "How does pricing change by vertical?",
    a: "Per-rep, per-shift staffing is the same baseline across verticals. Compliance overhead changes the math: regulated alcohol programs carry TIPS / TABC training and liquor liability; auto programs carry waiver capture and trucking; tech programs carry CRM-mapping setup. We're transparent about which adders apply."
  }, {
    q: "Do you carry separate COIs for different verticals?",
    a: "Yes. We carry vertical-appropriate insurance — general liability everywhere, liquor liability for alcohol programs, vehicle and additional-insured riders for auto, and consent-capture-ready protocols for tech and beauty. COIs added to specific named insureds on request."
  }, {
    q: "Can you brief crew on technical product knowledge?",
    a: "Yes — within reason. Sampling and trial crews get product-fact briefings before deployment. For technical demo or specialist roles (auto product specialists, SaaS demo leads, beauty applicators) we staff crew with category background and run extra training pre-event."
  }, {
    q: "Which verticals are you strongest in?",
    a: "Beverage, alcohol & spirits, and food & snack are the deepest benches — we run those daily. Tech / SaaS, automotive, and lifestyle & beauty are full-service practices with senior leads in each category. Pet, cannabis, finance, and gaming we do consistently as well."
  }];
  return /*#__PURE__*/React.createElement("div", null, faqs.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: f.q,
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
    }, "+")), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        paddingBottom: 24,
        paddingLeft: 36,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--fg-2-inv)",
        margin: 0,
        maxWidth: 720
      }
    }, f.a));
  }));
};
const IndustriesHub = () => {
  const list = window.INDUSTRY_LIST || [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ih-grid-drift { from { background-position: 0 0, 0 0; } to { background-position: 96px 96px, 96px 96px; } }
        @keyframes ih-glow-a { 0%,100% { transform: translate3d(-8%, -4%, 0) scale(1); opacity: .55; } 50% { transform: translate3d(6%, 4%, 0) scale(1.12); opacity: .85; } }
        @keyframes ih-glow-b { 0%,100% { transform: translate3d(4%, 6%, 0) scale(1.05); opacity: .35; } 50% { transform: translate3d(-6%, -4%, 0) scale(0.95); opacity: .6; } }
        @keyframes ih-scan { 0% { transform: translateY(-100%); opacity: 0; } 8% { opacity: .55; } 92% { opacity: .55; } 100% { transform: translateY(110vh); opacity: 0; } }
        @keyframes ih-stencil-pan { 0% { transform: translateX(0); } 100% { transform: translateX(-3%); } }
        @keyframes ih-pulse { 0%, 100% { opacity: .9; } 50% { opacity: .55; } }
        @media (prefers-reduced-motion: reduce) { .ih-anim, .ih-anim * { animation: none !important; } }
      `), /*#__PURE__*/React.createElement("section", {
    className: "ih-anim",
    style: {
      position: "relative",
      padding: "150px 0 90px",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), " + "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "48px 48px, 48px 48px",
      animation: "ih-grid-drift 24s linear infinite",
      maskImage: "radial-gradient(ellipse at center, black 40%, transparent 95%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 95%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-10%",
      top: "-15%",
      width: "60%",
      height: "70%",
      background: "radial-gradient(ellipse at center, rgba(255,107,53,0.28) 0%, rgba(255,107,53,0) 65%)",
      filter: "blur(20px)",
      pointerEvents: "none",
      animation: "ih-glow-a 18s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-8%",
      bottom: "-20%",
      width: "55%",
      height: "70%",
      background: "radial-gradient(ellipse at center, rgba(255,176,80,0.18) 0%, rgba(255,176,80,0) 65%)",
      filter: "blur(28px)",
      pointerEvents: "none",
      animation: "ih-glow-b 22s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 2,
      background: "linear-gradient(to bottom, rgba(255,107,53,0) 0%, rgba(255,107,53,0.5) 50%, rgba(255,107,53,0) 100%)",
      pointerEvents: "none",
      animation: "ih-scan 14s linear infinite",
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
      userSelect: "none",
      animation: "ih-stencil-pan 30s ease-in-out infinite alternate"
    }
  }, "INDUSTRIES"), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "ih-pulse 2.4s ease-in-out infinite",
      display: "inline-block"
    }
  }, ">> ", "INDUSTRY VERTICALS \xB7 COMPLIANCE-READY \xB7 50 STATES")), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 22,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(60px, 8.4vw, 152px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.9,
      maxWidth: 1400,
      textWrap: "balance"
    }
  }, "The verticals", /*#__PURE__*/React.createElement("br", null), "we ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "actually"), " run", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(20px, 2.1vw, 28px)",
      lineHeight: 1.35,
      letterSpacing: "-0.015em",
      color: "rgba(255,255,255,0.92)",
      maxWidth: 980
    }
  }, "Most agencies pitch \"experiential marketing\" as one bucket. We don't. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "Different verticals, different rules"), " \u2014 alcohol has TIPS / TABC, food has allergen SOPs, tech has lead capture and CRM handoff. Pick yours."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
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
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", list.length, " VERTICALS \xB7 CLICK ANY TO SEE THE PLAYBOOK"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "rgba(255,255,255,0.08)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
      gap: 18
    }
  }, list.map((ind, i) => /*#__PURE__*/React.createElement("a", {
    key: ind.slug,
    href: "/industries/" + ind.slug,
    className: "ind-card",
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
      gap: 16,
      minHeight: 260,
      transition: "border-color 200ms, transform 200ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = ind.accent;
      e.currentTarget.style.transform = "translateY(-3px)";
      const arr = e.currentTarget.querySelector("[data-arr]");
      if (arr) {
        arr.style.color = ind.accent;
        arr.style.transform = "translateX(6px)";
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--ink-400)";
      e.currentTarget.style.transform = "translateY(0)";
      const arr = e.currentTarget.querySelector("[data-arr]");
      if (arr) {
        arr.style.color = "var(--fg-3)";
        arr.style.transform = "none";
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 4,
      background: `linear-gradient(90deg, ${ind.accent} 0%, ${ind.accent}aa 35%, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -30,
      bottom: -50,
      fontFamily: "var(--font-stencil)",
      fontSize: 200,
      lineHeight: 0.85,
      letterSpacing: "-0.04em",
      color: `${ind.accent}10`,
      textTransform: "uppercase",
      pointerEvents: "none"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: ind.accent,
      padding: "6px 10px",
      borderRadius: 999,
      background: `${ind.accent}1c`,
      border: `1px solid ${ind.accent}55`
    }
  }, String(i + 1).padStart(2, "0"), " \xB7 ", ind.short), /*#__PURE__*/React.createElement("span", {
    "data-arr": true,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      color: "var(--fg-3)",
      transition: "transform 200ms, color 200ms"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px, 2.8vw, 40px)",
      letterSpacing: "-0.025em",
      lineHeight: 1.0,
      margin: 0,
      position: "relative",
      zIndex: 1
    }
  }, ind.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0,
      position: "relative",
      zIndex: 1,
      flex: 1
    }
  }, (ind.hero?.lede || "").split(".")[0] + "."), ind.compliance && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 8,
      position: "relative",
      zIndex: 1
    }
  }, ind.compliance.slice(0, 3).map((c, j) => /*#__PURE__*/React.createElement("span", {
    key: c.lab + j,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      padding: "5px 9px",
      borderRadius: 4,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--ink-400)",
      color: "var(--fg-3)"
    }
  }, c.lab)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--paper-000)",
      color: "var(--fg-1-inv)",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
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
  }, ">> ", "CROSS-VERTICAL FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(38px, 4.6vw, 64px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.96
    }
  }, "Questions when your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "vertical isn't simple."))), /*#__PURE__*/React.createElement(CrossVerticalFAQ, null)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 90px",
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "TRUSTED BY THE BRANDS THAT DEFINE CULTURE")), /*#__PURE__*/React.createElement("style", null, `
          @keyframes ih-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .ih-logo-row { display: flex; gap: 80px; align-items: center; animation: ih-marquee 50s linear infinite; width: max-content; }
          .ih-logo-row:hover { animation-play-state: paused; }
          .ih-logo-row img { max-height: 56px; max-width: 200px; width: auto; object-fit: contain; filter: brightness(0) invert(1) opacity(0.55); transition: filter 200ms, opacity 200ms; flex-shrink: 0; }
          .ih-logo-row img:hover { filter: brightness(0) invert(1) opacity(1); }
          @media (prefers-reduced-motion: reduce) { .ih-logo-row { animation: none; } }
        `), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ih-logo-row"
  }, [...Object.values(window.BRAND_LOGOS || {}), ...Object.values(window.BRAND_LOGOS || {})].map((b, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: b.url,
    alt: b.name
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, window.GridOverlay && /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.05
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "YOUR VERTICAL ISN'T LISTED"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(40px, 5.5vw, 84px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.92,
      textWrap: "balance"
    }
  }, "We've still ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "probably done it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Pet, finance, cannabis, gaming, motorsports, hospitality \u2014 we've staffed and run activation across most consumer categories. Brief us and we'll come back with vertical-specific compliance and crew."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(AccentBtn, {
    onClick: () => location.href = "https://igniteproductions.co/contact?urgent=1"
  }, "Start a brief"), /*#__PURE__*/React.createElement("a", {
    href: "https://igniteproductions.co/services",
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
  }, "See services \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-stencil)",
      color: "var(--ink-300)",
      fontSize: "clamp(96px, 14vw, 220px)",
      lineHeight: 0.85,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      opacity: 0.9,
      userSelect: "none"
    }
  }, "VERT\xB7", /*#__PURE__*/React.createElement("br", null), "ICALS"))));
};
Object.assign(window, {
  IndustriesHub,
  CrossVerticalFAQ
});
})();
