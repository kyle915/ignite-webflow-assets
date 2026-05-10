/* Marquee of REAL brand logos — pulled from the live site */
const CLIENT_LOGOS = [{
  name: "Liquid Death",
  url: window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"
}, {
  name: "White Claw",
  url: window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"
}, {
  name: "Mas+ Messi",
  url: window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp"
}, {
  name: "Krispy Krunchy",
  url: window.__resources?.r_688c1b20a33960875f5d7bc0_krispy_krunchy_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp"
}, {
  name: "Total Wireless",
  url: window.__resources?.r_688c1bb2f2c798b4cb850d2e_total_wireless_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp"
}, {
  name: "Dude Wipes",
  url: window.__resources?.r_688c3839708ed185c2de5ba9_dude_wipes || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp"
}, {
  name: "Glendonough",
  url: window.__resources?.r_688c3841bacf82489917b2b9_glendonough_dis || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp"
}, {
  name: "Smalls Sliders",
  url: window.__resources?.r_688c377975c7a23684962d73_smalls_sliders || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp"
}, {
  name: "Marc Anthony",
  url: window.__resources?.r_688c378239e6dc2ebedde728_marc_anthony_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"
}];
const ClientMarquee = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "56px 0",
    borderTop: "1px solid var(--paper-200)",
    borderBottom: "1px solid var(--paper-200)",
    overflow: "hidden",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-2-inv)"
  }
}, "\u2605 TRUSTED BY"), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    height: 1,
    background: "var(--paper-200)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3-inv)"
  }
}, "+ 200 BRANDS SINCE 2018"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    width: "max-content",
    animation: "marquee 50s linear infinite",
    alignItems: "center"
  }
}, [...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: "0 56px",
    display: "inline-flex",
    alignItems: "center",
    height: 88
  }
}, /*#__PURE__*/React.createElement("img", {
  src: c.url,
  alt: c.name,
  style: {
    maxHeight: 64,
    maxWidth: 200,
    width: "auto",
    objectFit: "contain",
    filter: "grayscale(1) brightness(0.25) contrast(1.2)",
    opacity: 0.85
  }
})))));

/* Two engines — Fractional + BA Staffing / Experiential */
const TwoEngines = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 32,
    marginBottom: 60,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">>", " TWO WAYS TO WORK WITH IGNITE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 6vw, 88px)",
    letterSpacing: "-0.03em",
    lineHeight: 0.98,
    color: "var(--fg-1-inv)",
    maxWidth: 900
  }
}, "Always-on team or ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "big moment?"))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2-inv)",
    maxWidth: 380
  }
}, "Most clients use both \u2014 a fractional team running strategy, plus project-based staffing when a national activation hits. Either way, Spark comes free.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "pages/fractional.html",
  style: {
    display: "block",
    padding: 40,
    borderRadius: 24,
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    position: "relative",
    overflow: "hidden",
    minHeight: 520,
    transition: "transform 240ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.transform = "translateY(-4px)",
  onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 32,
  opacity: 0.035
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 32,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 18,
    letterSpacing: "0.04em",
    color: "var(--ignite-500)",
    padding: "6px 12px",
    border: "1.5px solid var(--ignite-500)",
    borderRadius: 6
  }
}, "01 \xB7 FRACTIONAL"), /*#__PURE__*/React.createElement(OpsLine, null, "* ONGOING \xB7 STRATEGIC \xB7 EMBEDDED")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(32px, 3.5vw, 48px)",
    letterSpacing: "-0.02em",
    lineHeight: 1,
    color: "var(--fg-1)"
  }
}, "Your embedded sales", /*#__PURE__*/React.createElement("br", null), "+ marketing engine."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 440
  }
}, "Dedicated fractional team plugs into your brand to run retail strategy, field execution, and activations \u2014 without the full-time overhead."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, ["Advisory — strategic counsel", "Embedded — fractional VP", "Leadership — turnkey engagement"].map(t => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    letterSpacing: "0.02em",
    color: "var(--fg-2)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u2192"), " ", t))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, "BEST FOR \xB7 brands scaling into retail, launching a new line, or post-Series A")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, "EXPLORE FRACTIONAL \u2192"))), /*#__PURE__*/React.createElement("a", {
  href: "pages/services.html",
  style: {
    display: "block",
    padding: 40,
    borderRadius: 24,
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    position: "relative",
    overflow: "hidden",
    minHeight: 520,
    transition: "transform 240ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.transform = "translateY(-4px)",
  onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: -80,
    top: -80,
    width: 320,
    height: 320,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(255,90,31,0.22), transparent 70%)",
    filter: "blur(20px)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 32,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 18,
    letterSpacing: "0.04em",
    color: "#FFB627",
    padding: "6px 12px",
    border: "1.5px solid #FFB627",
    borderRadius: 6
  }
}, "02 \xB7 ACTIVATION + STAFFING"), /*#__PURE__*/React.createElement(OpsLine, null, "* PROJECT \xB7 NATIONWIDE \xB7 ON-DEMAND")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(32px, 3.5vw, 48px)",
    letterSpacing: "-0.02em",
    lineHeight: 1,
    color: "var(--fg-1)"
  }
}, "Boots on the ground.", /*#__PURE__*/React.createElement("br", null), "Anywhere. On demand."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 440
  }
}, "42,000+ vetted brand ambassadors in all 50 states. Full experiential production \u2014 sampling, mobile tours, ad trucks, fabricated builds, festival activations \u2014 scaled to any footprint."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 10
  }
}, [["42K+", "ambassadors"], ["50", "states"], ["48hr", "turnaround"]].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
  key: a,
  style: {
    padding: "10px 12px",
    background: "var(--ink-200)",
    borderRadius: 8,
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    color: "#FFB627",
    letterSpacing: "-0.02em"
  }
}, a), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, b)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, "BEST FOR \xB7 national sampling tours, trade shows, festival activations, retail sell-in")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#FFB627"
  }
}, "EXPLORE SERVICES \u2192")))), /*#__PURE__*/React.createElement("a", {
  href: "pages/spark.html",
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
    marginTop: 20,
    padding: "22px 28px",
    borderRadius: 16,
    background: "var(--ink-100)",
    color: "var(--fg-1)",
    border: "1px solid var(--ink-400)",
    transition: "transform 200ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.transform = "translateY(-2px)",
  onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "rgba(214,243,95,0.15)",
    color: "var(--spark-500)",
    fontFamily: "var(--font-stencil)",
    fontSize: 16,
    letterSpacing: "0.04em",
    border: "1px solid rgba(214,243,95,0.35)"
  }
}, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--spark-500)"
  }
}, "\u25C9 INCLUDED WITH BOTH"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 4,
    fontFamily: "var(--font-display)",
    fontSize: 19,
    fontWeight: 600,
    letterSpacing: "-0.01em",
    color: "var(--fg-1)"
  }
}, "Every engagement runs on ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--spark-500)"
  }
}, "Spark"), " \u2014 live dashboards, GPS-verified check-ins, instant recaps. Zero extra cost."))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--spark-500)"
  }
}, "SEE THE PLATFORM \u2192"))));
Object.assign(window, {
  ClientMarquee,
  TwoEngines
});