/* Services index page — overview of all 7 lanes */

const ServicesIndexHero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "Services Hero",
  style: {
    position: "relative",
    background: "var(--ink-000)",
    color: "#fff",
    padding: "120px 48px 100px",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.03
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 80% 0%, rgba(255,90,31,0.18), transparent 50%)"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
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
  href: "../index.html",
  style: {
    color: "rgba(255,255,255,0.6)"
  }
}, "HOME"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "rgba(255,255,255,0.3)"
  }
}, "/"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "SERVICES")), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">>", " CAPABILITIES // 07 SERVICE LANES"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(72px, 10vw, 184px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.86,
    maxWidth: 1300
  }
}, "Every lane of", /*#__PURE__*/React.createElement("br", null), "brand activation,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#FFB627"
  }
}, "under one roof.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32,
    fontSize: 20,
    lineHeight: 1.45,
    color: "rgba(255,255,255,0.85)",
    maxWidth: 720
  }
}, "Strategy, fabrication, ambassadors, sampling, mobile media, trade shows, and merch \u2014 designed, built, and run by one team. No agency runaround.")));
const ServicesIndexGrid = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "60px 48px 120px",
    background: "var(--ink-000)",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16
  }
}, Object.entries(SERVICES_DATA).map(([slug, s]) => /*#__PURE__*/React.createElement("a", {
  key: slug,
  href: "services-" + slug + ".html",
  style: {
    position: "relative",
    display: "block",
    borderRadius: 18,
    overflow: "hidden",
    minHeight: 360,
    background: "#0F1014",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "transform 240ms"
  },
  onMouseEnter: e => {
    e.currentTarget.style.transform = "translateY(-4px)";
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.04)";
  },
  onMouseLeave: e => {
    e.currentTarget.style.transform = "translateY(0)";
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1)";
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
    filter: "brightness(0.5) saturate(1.05)",
    transition: "transform 600ms var(--ease-out)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(10,11,13,0.2) 0%, rgba(10,11,13,0.55) 50%, rgba(10,11,13,0.95) 100%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 24,
    left: 24,
    fontFamily: "var(--font-stencil)",
    fontSize: 28,
    letterSpacing: "0.04em",
    color: s.accent
  }
}, s.n), s.flag && /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 28,
    right: 24,
    padding: "5px 10px",
    borderRadius: 4,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(8px)",
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#fff"
  }
}, "\u2605 FLAGSHIP"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(28px, 2.6vw, 38px)",
    letterSpacing: "-0.025em",
    lineHeight: 1,
    marginBottom: 12
  }
}, s.label), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.4,
    color: "rgba(255,255,255,0.78)",
    margin: 0,
    marginBottom: 16,
    maxWidth: 480
  }
}, s.tagline), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginBottom: 16
  }
}, s.sub.slice(0, 4).map(b => /*#__PURE__*/React.createElement("span", {
  key: b.t,
  style: {
    padding: "4px 9px",
    borderRadius: 4,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)"
  }
}, b.t)), s.sub.length > 4 && /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "4px 9px",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.6)",
    textTransform: "uppercase"
  }
}, "+", s.sub.length - 4)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,0.14)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: s.accent
  }
}, "EXPLORE \u2192"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)"
  }
}, s.sub.length, " CAPABILITIES")))))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    padding: "32px 36px",
    borderRadius: 14,
    background: "linear-gradient(90deg, rgba(255,90,31,0.06), rgba(214,243,95,0.04))",
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "WRAPPED AROUND EVERY ENGAGEMENT"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  }
}, [["Creative & Strategy", "Campaign strategy, activation ideation, consumer engagement planning, tour logistics."], ["Logistics & Production", "Nationwide staffing logistics, warehousing, shipping, permits, asset management."], ["Spark Tech Stack", "Live dashboards, GPS-verified check-ins, photo capture, recap-ready reporting."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
  key: t
}, /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 17,
    letterSpacing: "-0.015em",
    marginBottom: 8
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  }
}, d)))))));
const ServicesIndexPage = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "01 Services Index"
}, /*#__PURE__*/React.createElement(SiteNav, {
  rel: "../",
  active: "SERVICES"
}), /*#__PURE__*/React.createElement(ServicesIndexHero, null), /*#__PURE__*/React.createElement(ServicesIndexGrid, null), /*#__PURE__*/React.createElement(SiteFooter, {
  rel: "../"
}));
Object.assign(window, {
  ServicesIndexPage
});