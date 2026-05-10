/* Top nav + footer — used on every page. SERVICES exposes a hover mega-menu. */
const {
  useState: useNavState,
  useEffect: useNavEffect,
  useRef: useNavRef
} = React;

/* The 7-lane services taxonomy. Used by the mega-menu and the footer. */
const SITE_SERVICES = [{
  slug: "experiential-marketing",
  label: "Experiential Marketing",
  sub: "Festivals, pop-ups, immersive installations"
}, {
  slug: "mobile-tours",
  label: "Mobile Marketing Tours",
  sub: "Ad trucks, branded bikes, sprinter vans"
}, {
  slug: "fabrication-builds",
  label: "Fabrication & Builds",
  sub: "Custom builds, scenic fab, photo ops"
}, {
  slug: "event-staffing",
  label: "Event Staffing",
  sub: "42K+ ambassadors, 50 states, 48hr rush"
}, {
  slug: "product-sampling",
  label: "Product Sampling",
  sub: "In-store, retail, street, campus"
}, {
  slug: "trade-shows",
  label: "Trade Show Support",
  sub: "Booth staffing, lead capture, demos"
}, {
  slug: "promotional-products",
  label: "Promotional Products & Premiums",
  sub: "Branded merch, swag kits, fulfillment"
}];
const NAV_ITEMS = [{
  label: "SPARK",
  href: "pages/spark.html"
}, {
  label: "FRACTIONAL",
  href: "pages/fractional.html"
}, {
  label: "SERVICES",
  href: "pages/services.html",
  mega: "services"
}, {
  label: "OUR WORK",
  href: "pages/work.html"
}, {
  label: "ABOUT",
  href: "pages/about.html"
}, {
  label: "CONTACT",
  href: "pages/contact.html"
}];

/* rel: "" when on root, "../" when on a page inside /pages/ */
const SiteNav = ({
  rel = "",
  active = ""
}) => {
  const [scrolled, setScrolled] = useNavState(false);
  const [megaOpen, setMegaOpen] = useNavState(null);
  const closeTimer = useNavRef(null);
  useNavEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, {
      passive: true
    });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  const openMega = key => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMegaOpen(key);
  };
  const closeMegaSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(null), 160);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 80,
      background: scrolled ? "rgba(10,11,13,0.92)" : "rgba(10,11,13,0.55)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      transition: "background 200ms var(--ease-out), border-color 200ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rel + "index.html",
    "aria-label": "Ignite Productions \u2014 home",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: rel + (window.__resources?.r_assets_ignite_typemark_white_png || "https://BASE/assets/ignite-typemark-white.png"),
    alt: "Ignite",
    height: "22",
    style: {
      height: 22,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, NAV_ITEMS.map(it => {
    const isActive = active === it.label;
    const hasMega = !!it.mega;
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      onMouseEnter: () => hasMega && openMega(it.mega),
      onMouseLeave: () => hasMega && closeMegaSoon(),
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: rel + it.href,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: isActive ? "var(--ignite-500)" : "var(--fg-2)",
        position: "relative",
        padding: "8px 0",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        transition: "color 160ms var(--ease-out)"
      },
      onMouseEnter: e => !isActive && (e.currentTarget.style.color = "var(--fg-1)"),
      onMouseLeave: e => !isActive && (e.currentTarget.style.color = "var(--fg-2)")
    }, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -14,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--ignite-500)",
        fontSize: 10
      }
    }, "\u25C9"), it.label, hasMega && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        opacity: 0.6
      }
    }, "\u25BE")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rel + "pages/contact.html",
    className: "link-mono"
  }, "Request a quote"), /*#__PURE__*/React.createElement(AccentBtn, {
    size: "sm",
    onClick: () => location.href = rel + "pages/contact.html?urgent=1"
  }, "Request staff now"))), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => openMega("services"),
    onMouseLeave: closeMegaSoon,
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: "rgba(10,11,13,0.98)",
      backdropFilter: "blur(18px)",
      borderBottom: megaOpen === "services" ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      opacity: megaOpen === "services" ? 1 : 0,
      pointerEvents: megaOpen === "services" ? "auto" : "none",
      transform: megaOpen === "services" ? "translateY(0)" : "translateY(-8px)",
      transition: "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "32px 32px 36px",
      display: "grid",
      gridTemplateColumns: "1fr 3fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, ">>", " 07 SERVICE LANES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      letterSpacing: "-0.025em",
      color: "#fff",
      marginBottom: 14
    }
  }, "What we do, end to end."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      marginBottom: 20
    }
  }, "Strategy, fabrication, staffing, sampling \u2014 every lane of brand activation under one roof."), /*#__PURE__*/React.createElement("a", {
    href: rel + "pages/services.html",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase"
    }
  }, "ALL CAPABILITIES \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 4
    }
  }, SITE_SERVICES.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: s.slug,
    href: rel + "pages/services-" + s.slug + ".html",
    style: {
      display: "block",
      padding: "14px 14px",
      borderRadius: 8,
      transition: "background 160ms",
      color: "#fff"
    },
    onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.05)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "var(--ignite-500)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "var(--fg-3)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: "-0.015em",
      marginBottom: 4
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      lineHeight: 1.4,
      color: "var(--fg-2)"
    }
  }, s.sub)))))));
};
const SiteFooter = ({
  rel = ""
}) => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    padding: "80px 32px 32px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.025
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    gap: 12,
    marginBottom: 60
  }
}, /*#__PURE__*/React.createElement("img", {
  src: rel + (window.__resources?.r_assets_ignite_typemark_outline_webp || "https://BASE/assets/ignite-typemark-outline.webp"),
  alt: "IGNITE",
  style: {
    width: "100%",
    maxWidth: 1280,
    height: "auto",
    display: "block",
    opacity: 0.85
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(80px, 16vw, 240px)",
    lineHeight: 0.9,
    marginLeft: -14
  }
}, ".")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.6fr 2fr 1fr 1fr",
    gap: 40,
    marginBottom: 72
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "HEADQUARTERS"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 280
  }
}, "Veteran-owned field marketing agency. Nationwide coverage, boutique service. Founded 2018."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 20,
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    borderRadius: 6,
    background: "rgba(255,90,31,0.12)",
    color: "var(--ignite-500)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    border: "1px solid rgba(255,90,31,0.3)"
  }
}, "\u2605 Veteran-Owned"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "SERVICES // 07 LANES"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px 24px"
  }
}, SITE_SERVICES.map(s => /*#__PURE__*/React.createElement("li", {
  key: s.slug
}, /*#__PURE__*/React.createElement("a", {
  href: rel + "pages/services-" + s.slug + ".html",
  style: {
    fontSize: 13.5,
    color: "var(--fg-2)"
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--spark-500)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--fg-2)"
}, s.label))))), [["AGENCY", [["Our Work", "pages/work.html"], ["About", "pages/about.html"], ["Contact", "pages/contact.html"], ["Spark Platform", "pages/spark.html"], ["Fractional", "pages/fractional.html"]]], ["TALENT", [["Apply", "pages/contact.html?role=ambassador"], ["LinkedIn", "#"], ["Press", "#"]]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
  key: h
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> " + h), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, items.map(([l, href]) => /*#__PURE__*/React.createElement("li", {
  key: l
}, /*#__PURE__*/React.createElement("a", {
  href: rel + href,
  style: {
    fontSize: 14,
    color: "var(--fg-2)"
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--spark-500)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--fg-2)"
}, l))))))), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 24,
    borderTop: "1px solid var(--ink-400)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, "\xA9 2026 IGNITE PRODUCTIONS LLC \xB7 ALL 50 STATES \xB7 SINCE 2018"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 24
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, "PRIVACY"), /*#__PURE__*/React.createElement(OpsLine, null, "TERMS"), /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, "\u2605 IGNITEPRODUCTIONS.CO")))));
Object.assign(window, {
  SiteNav,
  SiteFooter,
  SITE_SERVICES
});