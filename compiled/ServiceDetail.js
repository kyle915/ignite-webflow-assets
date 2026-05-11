/* Shared renderer for an individual service detail page.
   Each /pages/services-{slug}.html sets window.__SERVICE_SLUG before mounting. */

const ServiceHero = ({
  s
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": s.label + " Hero",
  style: {
    position: "relative",
    background: "#0A0A0A",
    color: "#fff",
    minHeight: 560,
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: s.hero,
  alt: s.label,
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: s.heroPos || "center 35%",
    filter: "brightness(0.38) saturate(1.05) contrast(1.05)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(ellipse at 80% 15%, rgba(255,90,31,0.30), transparent 50%), linear-gradient(180deg, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.96) 100%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 2,
    padding: "60px 48px 56px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    marginBottom: 36,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/",
  style: {
    color: "rgba(255,255,255,0.6)"
  }
}, "HOME"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "rgba(255,255,255,0.3)"
  }
}, "/"), /*#__PURE__*/React.createElement("a", {
  href: "/ignite-services",
  style: {
    color: "rgba(255,255,255,0.6)"
  }
}, "SERVICES"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "rgba(255,255,255,0.3)"
  }
}, "/"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: s.accent
  }
}, s.short.toUpperCase())), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 16,
    letterSpacing: "0.04em",
    color: s.accent,
    padding: "6px 12px",
    border: "1.5px solid " + s.accent,
    borderRadius: 6
  }
}, s.n, " \xB7 ", s.eyebrow), s.flag && /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "6px 12px",
    borderRadius: 6,
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(8px)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#fff"
  }
}, "\u2605 FLAGSHIP CAPABILITY")), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(64px, 9vw, 144px)",
    lineHeight: 0.88,
    letterSpacing: "-0.045em",
    margin: 0,
    maxWidth: 1300
  }
}, s.label), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 64,
    alignItems: "end",
    marginTop: 40
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(22px, 2.4vw, 32px)",
    lineHeight: 1.18,
    letterSpacing: "-0.02em",
    color: "rgba(255,255,255,0.92)",
    margin: 0,
    maxWidth: 720,
    textWrap: "pretty"
  }
}, s.tagline), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12
  }
}, s.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "14px 14px",
    background: "rgba(10,10,10,0.55)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: "-0.02em",
    color: s.accent,
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-mono)",
    fontSize: 9.5,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.7)"
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact",
  style: {
    padding: "16px 24px",
    borderRadius: 999,
    background: s.accent,
    color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15.5,
    letterSpacing: "-0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, "Brief us on a ", s.short.toLowerCase(), " project ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "/contact?urgent=1",
  style: {
    padding: "16px 24px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.28)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15.5,
    letterSpacing: "-0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#FF6969"
  }
}, "\u25CF"), " Need it fast? Rush queue"))));

/* ---------- POV — edgy single-statement belief with marquee + glitch ---------- */
const ServicePOV = ({
  s
}) => {
  if (!s.pov) return null;
  const SQ = "\u25A0";
  const customWords = s.pov && s.pov.marquee;
  const marqueeWords = customWords && customWords.length ? customWords.flatMap((w, i) => i === customWords.length - 1 ? [w, SQ] : [w, SQ]) : ["OUR TAKE", SQ, "UNPOPULAR OPINION", SQ, "WE'LL SAY IT", SQ, "FIELD-TESTED", SQ];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0A0A0A",
      color: "#fff",
      padding: "0 0 120px",
      borderTop: `2px solid ${s.accent}`,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ig-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ig-glitch-shift { 0%,90%,100% { transform: translate(0,0); } 92% { transform: translate(-2px,1px); } 94% { transform: translate(2px,-1px); } 96% { transform: translate(-1px,2px); } 98% { transform: translate(1px,-1px); } }
        @keyframes ig-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0.15; } }
        .ig-pov-marquee { display: flex; gap: 36px; white-space: nowrap; animation: ig-marquee 36s linear infinite; }
        .ig-pov-marquee--rev { animation-direction: reverse; animation-duration: 48s; }
        .ig-pov-lead { position: relative; display: inline-block; animation: ig-glitch-shift 6s steps(1,end) infinite; }
        .ig-pov-lead::before, .ig-pov-lead::after { content: attr(data-text); position: absolute; inset: 0; pointer-events: none; mix-blend-mode: screen; }
        .ig-pov-lead::before { color: #00E5FF; transform: translate(-3px, 0); clip-path: polygon(0 0,100% 0,100% 33%,0 33%); opacity: 0.55; }
        .ig-pov-lead::after { color: var(--accent-color, #FF5A1F); transform: translate(3px, 0); clip-path: polygon(0 66%,100% 66%,100% 100%,0 100%); opacity: 0.65; }
      `), /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: -120,
      top: 80,
      width: 460,
      height: 460,
      background: s.accent,
      clipPath: "polygon(0 0, 100% 0, 100% 100%)",
      opacity: 0.18,
      filter: "blur(60px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: -80,
      bottom: -40,
      width: 340,
      height: 340,
      border: `2px solid ${s.accent}`,
      opacity: 0.15,
      transform: "rotate(8deg)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      paddingTop: 110,
      paddingBottom: 40,
      "--accent-color": s.accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "6px 14px",
      background: s.accent,
      color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff",
      marginBottom: 36,
      transform: "skew(-12deg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "skew(12deg)",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-stencil)",
      fontSize: 16,
      letterSpacing: "0.08em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "ig-blink 1.2s infinite"
    }
  }, "\u25CF"), " THE TAKE")), /*#__PURE__*/React.createElement("h2", {
    className: "ig-pov-lead",
    "data-text": s.pov.lead,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(64px, 10vw, 168px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.86,
      margin: 0,
      maxWidth: 1500,
      textWrap: "balance"
    }
  }, s.pov.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "grid",
      gridTemplateColumns: "40px 1fr",
      gap: 24,
      alignItems: "start",
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      height: "100%",
      minHeight: 80,
      width: 4,
      background: s.accent
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(22px, 2.4vw, 34px)",
      lineHeight: 1.3,
      letterSpacing: "-0.015em",
      color: "rgba(255,255,255,0.92)",
      textWrap: "pretty",
      margin: 0
    }
  }, s.pov.body))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      padding: "14px 0",
      background: "rgba(255,255,255,0.02)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-pov-marquee ig-pov-marquee--rev",
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 18,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)"
    }
  }, [...Array(2)].map((_, j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, [s.short, "\u25A0", s.label, "\u25A0", "FIELD-TESTED", "\u25A0", "VETERAN-OWNED", "\u25A0", "50-STATE", "\u25A0"].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: j + ":" + i
  }, w)))))));
};

/* ---------- Pain Banner — "if you're on this page, you're probably…" ---------- */
const ServicePainBanner = ({
  s
}) => {
  if (!s.pains || !s.pains.items || !s.pains.items.length) return null;
  const items = s.pains.items;
  const accent = s.accent || "var(--ignite-500)";
  const mid = Math.ceil(items.length / 2);
  const rows = [[items.slice(0, mid), 55, accent], [items.slice(mid), 70, "#FFB627"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      padding: "56px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes spnMarq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: accent,
      fontWeight: 700
    }
  }, "// FOUND-YOU MOMENT"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: `linear-gradient(90deg, ${accent}66, transparent)`
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3.6vw, 56px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      textWrap: "balance",
      maxWidth: 1100,
      margin: 0
    }
  }, s.pains.opener)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, rows.map(([list, speed, color], ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      overflow: "hidden",
      maskImage: "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      width: "max-content",
      animation: `spnMarq ${speed}s linear infinite`,
      animationDirection: ri % 2 ? "reverse" : "normal"
    }
  }, [...list, ...list].map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 18px",
      borderRadius: 999,
      border: "1px solid var(--ink-400)",
      background: "var(--ink-000)",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "-0.005em",
      color: "var(--fg-1)",
      whiteSpace: "nowrap",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.16em"
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, line))))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(20px, 2vw, 32px)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      textWrap: "balance"
    }
  }, s.pains.sinker.split("—")[0], /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      fontStyle: "italic",
      fontFamily: "Georgia, serif",
      fontWeight: 400
    }
  }, s.pains.sinker.includes("—") ? " — " + s.pains.sinker.split("—")[1] : "")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: accent
    }
  }, "\u2193 KEEP READING"))));
};

/* ---------- Comparison — most agencies vs Ignite ---------- */
const ServiceComparison = ({
  s
}) => {
  if (!s.comparison || !s.comparison.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "paper",
    style: {
      padding: "120px 0",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "DIFFERENCE ENGINE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.98,
      color: "var(--fg-1-inv)",
      maxWidth: 1000
    }
  }, "Most agencies. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: s.accent
    }
  }, "Then us.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--paper-200)",
      border: "1px solid var(--paper-200)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 28px",
      background: "var(--paper-100)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3-inv)"
    }
  }, "// MOST AGENCIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 28px",
      background: "#0A0A0A",
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent
    }
  }, "// IGNITE")), s.comparison.map(([a, b], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 28px",
      background: "var(--paper-000)",
      fontFamily: "var(--font-display)",
      fontSize: 19,
      lineHeight: 1.35,
      color: "var(--fg-2-inv)",
      textDecoration: "line-through",
      textDecorationColor: "rgba(0,0,0,0.2)"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 28px",
      background: "#0A0A0A",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.35,
      letterSpacing: "-0.01em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      marginRight: 10
    }
  }, "\u2713"), b))))));
};

/* ---------- ProofBar — real client logo wall (same source as homepage marquee) ---------- */
const BRAND_LOGOS = {
  "LIQUID DEATH": window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp",
  "WHITE CLAW": window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp",
  "MAS+": window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp",
  "KRISPY KRUNCHY": window.__resources?.r_688c1b20a33960875f5d7bc0_krispy_krunchy_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp",
  "TOTAL WIRELESS": window.__resources?.r_688c1bb2f2c798b4cb850d2e_total_wireless_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp",
  "DUDE WIPES": window.__resources?.r_688c3839708ed185c2de5ba9_dude_wipes || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp",
  "GLENDALOUGH": window.__resources?.r_688c3841bacf82489917b2b9_glendonough_dis || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp",
  "SMALLS SLIDERS": window.__resources?.r_688c377975c7a23684962d73_smalls_sliders || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp",
  "MARC ANTHONY": window.__resources?.r_688c378239e6dc2ebedde728_marc_anthony_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"
};
const BrandMark = ({
  name
}) => {
  const url = BRAND_LOGOS[name];
  if (!url) return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 16,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.6)"
    }
  }, name);
  return /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: name,
    style: {
      maxHeight: 56,
      maxWidth: "80%",
      objectFit: "contain",
      filter: "brightness(0) invert(1)",
      opacity: 0.88
    }
  });
};
const ServiceProofBar = ({
  s
}) => {
  if (!s.proof) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0A0A0A",
      color: "#fff",
      padding: "100px 0",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 40,
    opacity: 0.025
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      flexWrap: "wrap",
      gap: 18,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: s.accent
    }
  }, "// trusted by"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(28px, 3vw, 44px)",
      letterSpacing: "-0.025em",
      lineHeight: 1
    }
  }, "Brands running ", s.short.toLowerCase(), " on us.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)",
      maxWidth: 320,
      textAlign: "right"
    }
  }, s.proof.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${s.proof.logos.length}, 1fr)`,
      gap: 1,
      background: "rgba(255,255,255,0.08)",
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)"
    }
  }, s.proof.logos.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#0A0A0A",
      padding: "40px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 120,
      transition: "background 240ms, color 240ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "#141414";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "#0A0A0A";
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    name: b
  }))))));
};

/* ---------- Industries Served — edgy stencil chip wall ---------- */
const ServiceIndustries = ({
  s
}) => {
  if (!s.industries || !s.industries.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0A0A0A",
      color: "#fff",
      padding: "120px 0",
      borderTop: `2px dashed ${s.accent}`,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ig-ind-flicker { 0%,98%,100% { opacity: 1; } 99% { opacity: 0.35; } }
        .ig-ind-chip { transition: transform 220ms, background 220ms, color 220ms, border-color 220ms; }
        .ig-ind-chip:hover { transform: translate(-3px,-3px) rotate(-1deg); }
      `), /*#__PURE__*/React.createElement(GridOverlay, {
    size: 40,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: -60,
      top: 40,
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(140px, 22vw, 360px)",
      letterSpacing: "-0.05em",
      color: "rgba(255,255,255,0.04)",
      fontWeight: 700,
      lineHeight: 0.85,
      transform: "rotate(-6deg)",
      whiteSpace: "nowrap",
      pointerEvents: "none"
    }
  }, "CATEGORIES"), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: s.accent,
      textTransform: "uppercase",
      animation: "ig-ind-flicker 4s infinite"
    }
  }, "// who runs this // ", String(s.industries.length).padStart(2, "0"), " verticals"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 100,
      background: s.accent,
      opacity: 0.4
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(48px, 6.5vw, 108px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.92,
      margin: 0,
      maxWidth: 1300
    }
  }, "Categories we know ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: s.accent,
      textShadow: `0 0 32px ${s.accent}88`
    }
  }, "cold.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      flexWrap: "wrap",
      gap: 14
    }
  }, s.industries.map((ind, i) => {
    const variant = i % 3;
    const base = {
      padding: "14px 22px",
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(16px, 1.4vw, 22px)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      lineHeight: 1,
      transform: `rotate(${i % 2 ? -0.6 : 0.6}deg)`
    };
    const styles = variant === 0 ? {
      ...base,
      background: s.accent,
      color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff",
      border: `1.5px solid ${s.accent}`
    } : variant === 1 ? {
      ...base,
      background: "transparent",
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,0.4)"
    } : {
      ...base,
      background: "#fff",
      color: "#0A0A0A",
      border: "1.5px solid #fff"
    };
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ig-ind-chip",
      style: styles
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.5,
        fontSize: "0.7em"
      }
    }, String(i + 1).padStart(2, "0")), ind);
  }))));
};

/* ---------- National Reach — hero stat + dot-map + market list for SEO ---------- */
const ServiceMarkets = ({
  s
}) => {
  const markets = window.SERVICE_MARKETS || [];
  if (!markets.length) return null;
  // 28 plotted US-shape dots (approximate continental layout) + the city names below provide SEO long-tail
  const dots = [[12, 42], [16, 38], [18, 55], [20, 48], [22, 62], [24, 40], [26, 52], [28, 46], [30, 58], [32, 42], [34, 50], [36, 38], [38, 56], [40, 46], [42, 52], [44, 40], [46, 60], [48, 48], [50, 42], [52, 54], [54, 46], [56, 38], [58, 52], [60, 44], [62, 58], [64, 48], [66, 40], [68, 54], [70, 46], [72, 38], [74, 50], [76, 42], [78, 56], [80, 48], [82, 40], [84, 52], [86, 44], [88, 38], [15, 30], [25, 32], [38, 28], [50, 30], [62, 30], [74, 32], [18, 68], [30, 72], [45, 70], [58, 68], [70, 72], [80, 66]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#0A0A0A",
      color: "#fff",
      padding: "140px 0",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ig-dot-pulse { 0%,100% { opacity: 0.85; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.85); } }
      `), /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      color: s.accent,
      textTransform: "uppercase"
    }
  }, "// coverage / 50.states / ", markets.length, "+.markets"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "linear-gradient(90deg, rgba(255,90,31,0.5), rgba(255,255,255,0.08))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(140px, 22vw, 360px)",
      lineHeight: 0.85,
      color: "rgba(255,255,255,0.025)",
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      userSelect: "none",
      overflow: "hidden"
    }
  }, "50\xA0STATES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: "relative",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(72px, 13vw, 220px)",
      letterSpacing: "-0.05em",
      lineHeight: 0.82,
      margin: 0,
      color: "#fff"
    }
  }, "Brooklyn", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.35)"
    }
  }, " to "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      fontStyle: "italic"
    }
  }, "Burbank."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginLeft: 20,
      verticalAlign: "middle",
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(28px, 3vw, 56px)",
      letterSpacing: "0.04em",
      color: "rgba(255,255,255,0.85)",
      padding: "8px 18px",
      border: `2px solid ${s.accent}`,
      borderRadius: 4,
      transform: "rotate(-2deg)",
      background: "rgba(255,90,31,0.08)"
    }
  }, "+ EVERY ZIP\xA0IN\xA0BETWEEN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(22px, 2.2vw, 30px)",
      lineHeight: 1.3,
      letterSpacing: "-0.015em",
      color: "rgba(255,255,255,0.9)"
    }
  }, "We don't just say ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      fontWeight: 700
    }
  }, "national"), " \u2014 we ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: `2px solid ${s.accent}`
    }
  }, "show up"), " in every DMA. One roster. One platform. One PO. Detroit on Tuesday, Tampa on Wednesday, doesn't matter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 0,
      border: `2px solid ${s.accent}`,
      borderRadius: 8,
      overflow: "hidden"
    }
  }, [["50", "STATES"], [markets.length + "+", "MARKETS"], ["48HR", "RUSH"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: i === 1 ? s.accent : "#0A0A0A",
      padding: "26px 18px",
      borderRight: i < 2 ? `2px solid ${s.accent}` : "none",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(36px, 4vw, 56px)",
      color: i === 1 ? "#0A0A0A" : s.accent,
      letterSpacing: "-0.03em",
      lineHeight: 0.9
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: i === 1 ? "rgba(10,10,10,0.7)" : "rgba(255,255,255,0.55)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: s.accent,
      textTransform: "uppercase"
    }
  }, "// just a few of the major markets we run"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: "rgba(255,255,255,0.1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, markets.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: "7px 12px",
      borderRadius: 6,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.02)",
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.7)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      fontSize: 8
    }
  }, "\u25CF"), m))))));
};
const ServiceIntro = ({
  s
}) => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderBottom: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 80,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: s.accent
  }
}, ">>", " OVERVIEW"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-3-inv)",
    textTransform: "uppercase"
  }
}, "CAPABILITY ", s.n, " OF 07")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(22px, 2.2vw, 30px)",
    lineHeight: 1.3,
    letterSpacing: "-0.015em",
    color: "var(--fg-1-inv)",
    margin: 0,
    textWrap: "pretty"
  }
}, s.intro)))));
const SubServicesGrid = ({
  s
}) => {
  const cols = s.sub.length >= 8 ? 4 : s.sub.length >= 6 ? 3 : 3;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 40,
    opacity: 0.025
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 56,
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", s.short.toUpperCase(), " // ", String(s.sub.length).padStart(2, "0"), " CAPABILITIES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.98,
      maxWidth: 900
    }
  }, "What we run inside ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: s.accent
    }
  }, s.short.toLowerCase()), "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 1,
      background: "var(--ink-400)",
      border: "1px solid var(--ink-400)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, s.sub.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      background: "var(--ink-100)",
      padding: 28,
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "background 200ms"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--ink-200)",
    onMouseLeave: e => e.currentTarget.style.background = "var(--ink-100)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: s.accent
    }
  }, "* ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: "-0.015em",
      marginBottom: 10,
      lineHeight: 1.15
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--fg-2)",
      margin: 0
    }
  }, it.d)))))));
};
const ServiceProcess = ({
  s
}) => {
  const steps = [["BRIEF", "Quick 30-min call. We scope, ballpark, and align on the goal."], ["DESIGN", "Concept, footprint, route, or kit — engineered for the goal, not for the deck."], ["BUILD/STAFF", "In-house fabrication, vetted ambassadors, full kit and logistics."], ["EXECUTE", "Spark live-tracks every shift, every check-in, every count, every mile."], ["RECAP", "Same-week recap with photos, metrics, and what we'd change next round."]];
  return /*#__PURE__*/React.createElement("section", {
    className: "paper",
    style: {
      padding: "120px 0",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "HOW THIS RUNS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.98,
      color: "var(--fg-1-inv)",
      maxWidth: 900
    }
  }, "From brief to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: s.accent
    }
  }, "recap.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 1,
      background: "var(--paper-200)",
      border: "1px solid var(--paper-200)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "var(--paper-000)",
      padding: 24,
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 22,
      color: s.accent
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3-inv)"
    }
  }, i + 1, "/5")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.015em",
      color: "var(--fg-1-inv)",
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--fg-2-inv)",
      margin: 0
    }
  }, d)))))));
};
const FeaturedCase = ({
  s
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "IN THE FIELD"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    borderRadius: 20,
    overflow: "hidden",
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    minHeight: 460,
    position: "relative",
    overflow: "hidden",
    background: `url(${s.featured.img}) center/cover`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7))"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 28,
    left: 28
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "6px 12px",
    borderRadius: 6,
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(8px)",
    fontFamily: "var(--font-stencil)",
    fontSize: 16,
    letterSpacing: "0.04em",
    color: "#FFB627",
    border: "1px solid rgba(255,255,255,0.2)"
  }
}, "\u2605 ", s.featured.brand))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--ink-100)",
    padding: 48,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, "* CASE STUDY"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "clamp(28px, 3vw, 40px)",
    lineHeight: 1.12,
    letterSpacing: "-0.025em"
  }
}, s.featured.line), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    marginTop: 32,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: s.accent
  }
}, "SEE THE FULL CASE STUDY \u2192")))));
const AdjacentServices = ({
  s
}) => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "OFTEN PAIRED WITH"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(36px, 4vw, 56px)",
    letterSpacing: "-0.025em",
    lineHeight: 1,
    color: "var(--fg-1-inv)",
    maxWidth: 900
  }
}, "These run great together."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16
  }
}, s.adjacent.map(slug => {
  const o = SERVICES_DATA[slug];
  if (!o) return null;
  return /*#__PURE__*/React.createElement("a", {
    key: slug,
    href: "/services/" + slug,
    style: {
      display: "block",
      borderRadius: 16,
      overflow: "hidden",
      position: "relative",
      minHeight: 280,
      background: "#111",
      transition: "transform 240ms"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "translateY(-4px)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
  }, /*#__PURE__*/React.createElement("img", {
    src: o.hero,
    alt: o.label,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 24,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 14,
      color: o.accent,
      letterSpacing: "0.04em",
      marginBottom: 10
    }
  }, o.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, o.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: o.accent
    }
  }, "EXPLORE \u2192")));
}))));
const ServiceCTA = ({
  s
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.03
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(56px, 8vw, 128px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    maxWidth: 1200
  }
}, "Brief us on a ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: s.accent
  }
}, s.short.toLowerCase()), /*#__PURE__*/React.createElement("br", null), "project."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44,
    display: "flex",
    gap: 14,
    alignItems: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "https://igniteproductions.co/contact?urgent=1",
  style: {
    padding: "20px 28px",
    borderRadius: 999,
    background: s.accent,
    color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 17,
    letterSpacing: "-0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, "Request a quote ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "https://igniteproductions.co/contact?urgent=1",
  style: {
    padding: "20px 28px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.28)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 17,
    letterSpacing: "-0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#FF6969"
  }
}, "\u25CF"), " Request staff now"))));

/* ---------- SEO Block (long-form keyword-rich section for SEO) ---------- */
const ServiceSEOBlock = ({
  s
}) => {
  if (!s.seoBlock) return null;
  const {
    eyebrow,
    head,
    paras,
    chips
  } = s.seoBlock;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-100)",
      padding: "100px 0",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
      gap: 60,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: s.accent,
      textTransform: "uppercase"
    }
  }, "// ", eyebrow || "deep dive"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: s.accent,
      opacity: 0.3,
      maxWidth: 80
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.4vw, 64px)",
      letterSpacing: "-0.025em",
      lineHeight: 0.98,
      color: "var(--fg-1)"
    }
  }, head), chips && chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--fg-2)",
      padding: "8px 12px",
      border: "1px solid var(--ink-400)",
      borderRadius: 999,
      background: "var(--ink-000)"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--fg-2)",
      fontFamily: "var(--font-body)"
    },
    dangerouslySetInnerHTML: {
      __html: p
    }
  }))))));
};

/* ---------- FAQ ---------- */
const ServiceFAQ = ({
  s
}) => {
  if (!s.faqs || !s.faqs.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-000)",
      padding: "100px 0",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: s.accent,
      textTransform: "uppercase"
    }
  }, "// faq"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: s.accent,
      opacity: 0.3,
      maxWidth: 120
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 64px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      margin: "0 0 56px",
      maxWidth: 900,
      textWrap: "balance"
    }
  }, "Frequently asked."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      maxWidth: 1000
    }
  }, s.faqs.map(([q, a], i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    style: {
      padding: "22px 26px",
      borderRadius: 14,
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: "pointer",
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 18,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 19,
      color: "var(--fg-1)",
      letterSpacing: "-0.01em"
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      fontFamily: "var(--font-mono)",
      fontSize: 14
    }
  }, "+")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--fg-2)"
    }
  }, a))))));
};
const ServiceDetailPage = ({
  slug
}) => {
  const s = SERVICES_DATA[slug];
  if (!s) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 80,
      color: "#fff"
    }
  }, "Service not found: ", slug);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 " + s.label
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(ServiceHero, {
    s: s
  }), /*#__PURE__*/React.createElement(ServicePOV, {
    s: s
  }), /*#__PURE__*/React.createElement(ServicePainBanner, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceIntro, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceComparison, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceProofBar, {
    s: s
  }), /*#__PURE__*/React.createElement(SubServicesGrid, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceIndustries, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceProcess, {
    s: s
  }), /*#__PURE__*/React.createElement(FeaturedCase, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceSEOBlock, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceMarkets, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceFAQ, {
    s: s
  }), /*#__PURE__*/React.createElement(AdjacentServices, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceCTA, {
    s: s
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  ServiceDetailPage
});