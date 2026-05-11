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
    minHeight: 720,
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
    filter: "brightness(0.45) saturate(1.05) contrast(1.05)"
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
  href: "/services",
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
  href: "/contact",
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
  href: "/contact?urgent=1",
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
    rel: "../",
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(ServiceHero, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceIntro, {
    s: s
  }), /*#__PURE__*/React.createElement(SubServicesGrid, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceProcess, {
    s: s
  }), /*#__PURE__*/React.createElement(FeaturedCase, {
    s: s
  }), /*#__PURE__*/React.createElement(AdjacentServices, {
    s: s
  }), /*#__PURE__*/React.createElement(ServiceCTA, {
    s: s
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    rel: "../"
  }));
};
Object.assign(window, {
  ServiceDetailPage
});