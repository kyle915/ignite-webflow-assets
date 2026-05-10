/* global React */
/* ============================================================
   ENGAGEMENT SPECTRUM — Option 1, bolder rev.
   Full-bleed dark, dramatic stencil numerals, big type,
   color-flooded active tier. Matrix kept for reference.
   ============================================================ */

const SPECTRUM_TIERS = [{
  num: "01",
  tag: "CALL US IN",
  accent: "#FFB627",
  accentBg: "#FFB627",
  accentInk: "#1a1100",
  title: "Project.",
  depth: "SHALLOW · TACTICAL",
  sub: "One-off campaigns, staffing, single activations.",
  body: "Drop us into a specific moment — a festival weekend, a campus tour, a trade show booth, a sampling sprint. We handle the brief, scale to the footprint, and break it back down.",
  best: "FOR · single activations · trade shows · seasonal pushes",
  includes: ["Brand ambassadors", "Mobile tours", "Trade show staff", "Sampling programs"],
  cta: "Explore services",
  href: "pages/services.html"
}, {
  num: "02",
  tag: "PLUG US IN",
  accent: "var(--ignite-500)",
  accentBg: "var(--ignite-500)",
  accentInk: "#fff",
  title: "Embedded.",
  depth: "MEDIUM · FUNCTIONAL",
  sub: "A discipline-as-a-service — sponsorships, sales, marketing, OR key accounts.",
  body: "Pick a function. We run it like in-house. Sponsorship ops without hiring a sponsorship team. Field sales without a sales VP. Brand marketing without the agency overhead. One discipline, fully managed.",
  best: "FOR · brands scaling one channel · post-Series-A teams · pre-IPO ops",
  includes: ["Sponsorship management", "Field sales programs", "Brand & marketing ops", "Retail strategy"],
  cta: "Explore fractional",
  href: "pages/fractional.html"
}, {
  num: "03",
  tag: "BUILD WITH US",
  accent: "#D6F35F",
  accentBg: "#D6F35F",
  accentInk: "#0a0a0a",
  title: "Leadership.",
  depth: "DEEP · FULL-STACK",
  sub: "Full retail engine. Sponsorships + sales + marketing + key accounts, run end-to-end.",
  body: "We become the team. Fractional leadership across every consumer-facing function — sponsorships, sales, marketing, activations. Strategy, execution, measurement. Reports into your CEO.",
  best: "FOR · emerging CPG · launching a line · DTC going retail",
  includes: ["Full fractional team", "Senior leadership", "Cross-functional ops", "Quarterly roadmaps"],
  cta: "Explore leadership",
  href: "pages/fractional.html"
}];
const EngagementSpectrum = () => {
  const [active, setActive] = React.useState(1);
  const t = SPECTRUM_TIERS[active];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-000)",
      color: "#fff",
      padding: "140px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${15 + active * 30}%`,
      top: "30%",
      width: 600,
      height: 600,
      borderRadius: 999,
      background: `radial-gradient(circle, ${t.accent === "var(--ignite-500)" ? "rgba(255,90,31,0.18)" : t.accent === "#FFB627" ? "rgba(255,182,39,0.14)" : "rgba(214,243,95,0.14)"}, transparent 70%)`,
      filter: "blur(60px)",
      transition: "left 600ms var(--ease-out)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "HOW YOU ENGAGE WITH IGNITE \xB7 3 DEPTHS \xB7 ANY DISCIPLINE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(56px, 8.5vw, 144px)",
      letterSpacing: "-0.045em",
      lineHeight: 0.88,
      color: "#fff",
      maxWidth: 1400
    }
  }, "Plug us in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "deep"), ".", /*#__PURE__*/React.createElement("br", null), "Or call us in ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#FFB627"
    }
  }, "clutch"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--fg-2)",
      maxWidth: 760,
      fontWeight: 400
    }
  }, "Sponsorships, sales, marketing, key accounts, activations \u2014 at any depth, in any combination. Same operators. Same Spark dashboard. Different scope."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      padding: "24px 32px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      display: "flex",
      gap: 40,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, "\u25C9 DISCIPLINES COVERED"), ["Sponsorships", "Sales", "Marketing", "Key Accounts / Retail", "Activations & Staffing"].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "-0.015em",
      color: "#fff"
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 6
    }
  }, SPECTRUM_TIERS.map((tier, i) => {
    const isActive = active === i;
    return /*#__PURE__*/React.createElement("button", {
      key: tier.num,
      onClick: () => setActive(i),
      style: {
        padding: "44px 36px",
        textAlign: "left",
        cursor: "pointer",
        background: isActive ? tier.accentBg : "rgba(255,255,255,0.04)",
        border: isActive ? `2px solid ${tier.accentBg}` : "2px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        color: isActive ? tier.accentInk : "var(--fg-2)",
        transition: "all 320ms var(--ease-out)",
        position: "relative",
        minHeight: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-stencil)",
        fontSize: 80,
        lineHeight: 0.85,
        letterSpacing: "-0.02em",
        color: isActive ? tier.accentInk : tier.accent,
        opacity: isActive ? 1 : 0.55,
        transition: "all 320ms"
      }
    }, tier.num), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: isActive ? "rgba(0,0,0,0.6)" : "var(--fg-3)",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)"
      }
    }, tier.depth)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-stencil)",
        fontSize: 14,
        letterSpacing: "0.08em",
        color: isActive ? "rgba(0,0,0,0.55)" : tier.accent,
        marginBottom: 12
      }
    }, tier.tag), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "clamp(36px, 4vw, 56px)",
        letterSpacing: "-0.03em",
        lineHeight: 0.95,
        fontStyle: "italic"
      }
    }, tier.title)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2190 LESS DEPTH"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u2501\u2501\u2501\u2501 DEPTH OF ENGAGEMENT \u2501\u2501\u2501\u2501"), /*#__PURE__*/React.createElement("span", null, "MORE DEPTH \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      padding: "64px 56px",
      borderRadius: 24,
      background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
      border: `2px solid ${t.accent === "var(--ignite-500)" ? "rgba(255,90,31,0.35)" : t.accent === "#FFB627" ? "rgba(255,182,39,0.3)" : "rgba(214,243,95,0.3)"}`,
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 72,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      bottom: -100,
      fontFamily: "var(--font-stencil)",
      fontSize: 480,
      lineHeight: 0.8,
      letterSpacing: "-0.04em",
      color: t.accent,
      opacity: 0.05,
      pointerEvents: "none"
    }
  }, t.num), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: t.accent,
      marginBottom: 24
    }
  }, ">>", " TIER ", t.num, " \xB7 NOW VIEWING"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(32px, 3.8vw, 52px)",
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      color: "#fff",
      margin: 0,
      textWrap: "balance"
    }
  }, t.sub), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      maxWidth: 580
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      paddingTop: 28,
      borderTop: "1px solid rgba(255,255,255,0.08)",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, t.best), /*#__PURE__*/React.createElement("a", {
    href: t.href,
    style: {
      marginTop: 32,
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "18px 28px",
      borderRadius: 999,
      background: t.accentBg,
      color: t.accentInk,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textDecoration: "none",
      fontWeight: 700
    }
  }, t.cta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 24
    }
  }, "* WHAT'S INCLUDED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, t.includes.map(inc => /*#__PURE__*/React.createElement("div", {
    key: inc,
    style: {
      padding: "20px 24px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12,
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      fontSize: 20
    }
  }, "\u25B8"), " ", inc))))), /*#__PURE__*/React.createElement("a", {
    href: "pages/spark.html",
    style: {
      marginTop: 24,
      padding: "28px 36px",
      borderRadius: 16,
      background: "rgba(214,243,95,0.06)",
      border: "1px solid rgba(214,243,95,0.25)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 32,
      flexWrap: "wrap",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 56,
      height: 56,
      borderRadius: 12,
      background: "var(--spark-500)",
      color: "#0a0a0a",
      fontFamily: "var(--font-stencil)",
      fontSize: 24,
      letterSpacing: "0.04em",
      fontWeight: 700
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--spark-500)"
    }
  }, "\u25C9 INCLUDED AT EVERY TIER"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.015em",
      color: "#fff"
    }
  }, "Every engagement runs on ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--spark-500)"
    }
  }, "Spark"), " \u2014 live dashboards. GPS check-ins. Instant recaps."))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--spark-500)",
      fontWeight: 700
    }
  }, "SEE THE PLATFORM \u2192"))));
};
Object.assign(window, {
  EngagementSpectrum
});