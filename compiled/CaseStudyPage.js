/* Case Study detail template — driven by ?slug= query param */

const {
  useState: csState,
  useEffect: csEffect
} = React;

/* ------------------------------------------------------------------ KEYFRAMES */
if (typeof document !== "undefined" && !document.getElementById("cs-kf")) {
  const _cs = document.createElement("style");
  _cs.id = "cs-kf";
  _cs.textContent = `
    @keyframes csPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
    @keyframes csFade { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
    .cs-thumb { cursor:zoom-in; transition: transform 500ms cubic-bezier(.2,.7,.2,1), box-shadow 500ms; }
    .cs-thumb:hover { transform: translateY(-3px) scale(1.012); box-shadow: 0 30px 60px rgba(0,0,0,0.45); }
    .cs-lightbox-bg { animation: csFade 200ms ease-out; }
    .cs-arrow:hover { background: var(--ignite-500); color:#fff; }
  `;
  document.head.appendChild(_cs);
}
const CsOpsLine = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.24em",
    color: color || "var(--ignite-500)",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 99,
    background: "currentColor",
    animation: "csPulse 2.4s ease-in-out infinite"
  }
}), children);

/* ------------------------------------------------------------------ MISSING CASE FALLBACK */
const CaseMissing = ({
  slug
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "160px 0",
    background: "var(--ink-000)",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 680,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement(CsOpsLine, null, ">>", " CASE NOT FOUND"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 6vw, 80px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.95,
    color: "var(--fg-1)"
  }
}, "We couldn't find ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    fontStyle: "italic"
  }
}, slug || "that case"), "."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: 18,
    color: "var(--fg-2)"
  }
}, "It may have moved. Head back to Our Work and pick a different one."), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    display: "inline-block",
    marginTop: 36,
    padding: "18px 28px",
    borderRadius: 99,
    background: "var(--ignite-500)",
    color: "#fff",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontWeight: 700,
    textDecoration: "none"
  }
}, "\u2190 Back to Our Work")));

/* ------------------------------------------------------------------ HERO */
const CaseHero = ({
  c
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Case Hero",
  style: {
    background: c.surface,
    color: c.ink,
    position: "relative",
    overflow: "hidden",
    borderBottom: `1px solid ${c.accent}33`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(900px 600px at 85% 30%, ${c.accent}33, transparent 60%),
                  radial-gradient(600px 500px at 10% 100%, ${c.accent}22, transparent 65%)`,
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.05,
    pointerEvents: "none",
    backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
    backgroundSize: "60px 60px"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "36px 32px 32px",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    padding: "8px 0"
  }
}, "\u2190 Back to Our Work")), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "40px 32px 100px",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CsOpsLine, {
  color: c.accent
}, ">>", " CASE STUDY \xB7 ", c.year), /*#__PURE__*/React.createElement("img", {
  src: c.logo,
  alt: c.brand,
  style: {
    height: 64,
    maxWidth: 340,
    objectFit: "contain",
    objectPosition: "left",
    filter: "brightness(0) invert(1)",
    marginTop: 32,
    marginBottom: 32
  }
}), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(44px, 6vw, 92px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    color: c.ink,
    margin: 0,
    textWrap: "balance"
  }
}, c.headline), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }
}, c.tags.map(t => /*#__PURE__*/React.createElement("span", {
  key: t,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    padding: "8px 14px",
    borderRadius: 99,
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(255,255,255,0.18)"
  }
}, t))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    borderTop: `1px solid ${c.accent}33`,
    paddingTop: 32
  }
}, c.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(28px, 3vw, 44px)",
    letterSpacing: "-0.025em",
    color: c.accent,
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "rgba(255,255,255,0.6)",
    textTransform: "uppercase"
  }
}, l))))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    aspectRatio: "4/5",
    borderRadius: 20,
    overflow: "hidden",
    border: `1px solid ${c.accent}55`,
    boxShadow: "0 50px 100px rgba(0,0,0,0.5)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: c.hero,
  alt: `${c.brand} activation`,
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, transparent 55%, ${c.surface}cc 100%)`,
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 24,
    bottom: 24,
    right: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 18
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: c.accent,
    textTransform: "uppercase"
  }
}, c.category), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "rgba(255,255,255,0.75)"
  }
}, c.location)))))));

/* ------------------------------------------------------------------ NARRATIVE */
const CaseNarrative = ({
  c
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "02 Narrative",
  className: "paper",
  style: {
    padding: "120px 0",
    borderBottom: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 80,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "sticky",
    top: 32
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, ">>", " PROJECT DETAILS"), /*#__PURE__*/React.createElement("dl", {
  style: {
    marginTop: 24,
    fontSize: 13,
    lineHeight: 1.5
  }
}, [["Client", c.brand], ["Category", c.category], ["Sector", c.sector], ["Year", c.year], ["Markets", c.location]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 0",
    borderBottom: "1px solid var(--paper-200)",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("dt", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3-inv)"
  }
}, k), /*#__PURE__*/React.createElement("dd", {
  style: {
    margin: 0,
    color: "var(--fg-1-inv)",
    textAlign: "right",
    fontWeight: 600
  }
}, v)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3-inv)",
    textTransform: "uppercase"
  }
}, "Services"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, c.services.map(s => /*#__PURE__*/React.createElement("div", {
  key: s,
  style: {
    fontSize: 13,
    color: "var(--fg-2-inv)",
    display: "flex",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "+"), s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.28em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    margin: 0
  }
}, ">>", " BACKGROUND & CHALLENGE"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(22px, 2vw, 30px)",
    lineHeight: 1.4,
    color: "var(--fg-1-inv)",
    maxWidth: 780,
    textWrap: "pretty",
    letterSpacing: "-0.01em"
  }
}, c.challenge)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.28em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    margin: 0
  }
}, ">>", " SOLUTION & EXECUTION"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 1.65,
    color: "var(--fg-2-inv)",
    maxWidth: 780,
    textWrap: "pretty"
  }
}, c.solution)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.28em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    margin: 0
  }
}, ">>", " POST-CAMPAIGN OUTCOMES"), /*#__PURE__*/React.createElement("ul", {
  style: {
    marginTop: 24,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, c.outcomes.map((o, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    gap: 18,
    padding: "18px 22px",
    background: "var(--paper-000)",
    border: "1px solid var(--paper-200)",
    borderRadius: 12,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: c.accent,
    fontWeight: 700,
    paddingTop: 3,
    minWidth: 30
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "var(--fg-1-inv)"
  }
}, o)))))))));

/* ------------------------------------------------------------------ GALLERY */
const CaseGallery = ({
  c
}) => {
  const [open, setOpen] = csState(-1);
  const total = c.gallery.length;
  csEffect(() => {
    if (open < 0) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") setOpen(i => (i + 1) % total);
      if (e.key === "ArrowLeft") setOpen(i => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, total]);
  if (!total) return null;

  /* Editorial layout: alternating sizes for visual rhythm */
  const sizeFor = i => {
    const mod = i % 6;
    /* col span, aspect */
    if (mod === 0) return {
      col: "span 8",
      aspect: "16/10"
    };
    if (mod === 1) return {
      col: "span 4",
      aspect: "4/5"
    };
    if (mod === 2) return {
      col: "span 4",
      aspect: "4/5"
    };
    if (mod === 3) return {
      col: "span 4",
      aspect: "4/5"
    };
    if (mod === 4) return {
      col: "span 4",
      aspect: "4/5"
    };
    return {
      col: "span 12",
      aspect: "21/9"
    };
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "03 Gallery",
    style: {
      background: "var(--ink-000)",
      padding: "100px 0 140px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CsOpsLine, {
    color: c.accent
  }, ">>", " FROM THE FIELD \xB7 ", total, " FRAMES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(36px, 4.4vw, 64px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1)",
      margin: "14px 0 0"
    }
  }, "Receipts, not renders.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--fg-3)",
      maxWidth: 380,
      margin: 0,
      lineHeight: 1.55,
      fontFamily: "var(--font-mono)",
      textTransform: "uppercase",
      letterSpacing: "0.12em"
    }
  }, "Tap any photo to expand \xB7 \u2190 \u2192 to navigate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: 16
    }
  }, c.gallery.map((src, i) => {
    const {
      col,
      aspect
    } = sizeFor(i);
    /* Support optional #pos=... hash to override object-position */
    const posMatch = (src || "").match(/#pos=([^&]+)/);
    const objPos = posMatch ? decodeURIComponent(posMatch[1]) : "center";
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setOpen(i),
      className: "cs-thumb",
      style: {
        gridColumn: col,
        aspectRatio: aspect,
        border: "1px solid var(--ink-400)",
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--ink-100)",
        padding: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: `${c.brand} field photo ${i + 1}`,
      loading: "lazy",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: objPos,
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 10,
        left: 10,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.18em",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        padding: "4px 8px",
        borderRadius: 99,
        backdropFilter: "blur(4px)"
      }
    }, String(i + 1).padStart(2, "0"), " / ", String(total).padStart(2, "0")));
  }))), open >= 0 && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(-1),
    className: "cs-lightbox-bg",
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.94)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(-1);
    },
    style: {
      position: "absolute",
      top: 24,
      right: 24,
      width: 48,
      height: 48,
      borderRadius: 99,
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.2)",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      cursor: "pointer"
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(i => (i - 1 + total) % total);
    },
    className: "cs-arrow",
    style: {
      position: "absolute",
      left: 24,
      top: "50%",
      transform: "translateY(-50%)",
      width: 56,
      height: 56,
      borderRadius: 99,
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      transition: "all 160ms ease"
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setOpen(i => (i + 1) % total);
    },
    className: "cs-arrow",
    style: {
      position: "absolute",
      right: 24,
      top: "50%",
      transform: "translateY(-50%)",
      width: 56,
      height: 56,
      borderRadius: 99,
      background: "rgba(255,255,255,0.08)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 18,
      transition: "all 160ms ease"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("img", {
    src: c.gallery[open],
    alt: `${c.brand} ${open + 1}`,
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: "90vw",
      maxHeight: "86vh",
      objectFit: "contain",
      boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.7)"
    }
  }, String(open + 1).padStart(2, "0"), " / ", String(total).padStart(2, "0"), " \xB7 ", c.brand)));
};

/* ------------------------------------------------------------------ MORE WORK */
const CaseMoreWork = ({
  c
}) => {
  const list = (window.WORK_CASES || []).filter(x => x.slug !== c.slug).slice(0, 3);
  if (!list.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "04 More Work",
    className: "paper",
    style: {
      padding: "100px 0",
      borderTop: "1px solid var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 40,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase"
    }
  }, ">>", " MORE WORK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(32px, 3.6vw, 52px)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--fg-1-inv)",
      margin: "14px 0 0"
    }
  }, "Keep reading.")), /*#__PURE__*/React.createElement("a", {
    href: "/work",
    style: {
      padding: "14px 22px",
      borderRadius: 99,
      background: "transparent",
      color: "var(--fg-1-inv)",
      border: "1px solid var(--paper-300)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "See all 9 cases \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, list.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.slug,
    href: `case-study.html?slug=${n.slug}`,
    style: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      color: "#fff",
      background: n.surface,
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      minHeight: 300,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(500px 400px at 80% 0%, ${n.accent}44, transparent 60%)`,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WORK_BRAND_LOGOS && window.WORK_BRAND_LOGOS[n.slug] || "",
    alt: n.brand,
    style: {
      height: 44,
      maxWidth: 200,
      objectFit: "contain",
      objectPosition: "left",
      filter: "brightness(0) invert(1)",
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      margin: 0
    }
  }, n.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: n.accent,
      textTransform: "uppercase"
    }
  }, n.category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.55)",
      textTransform: "uppercase"
    }
  }, "Read \u2192"))))))));
};

/* ------------------------------------------------------------------ CTA */
const CaseCTA = ({
  c
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "05 CTA",
  style: {
    background: c.surface,
    color: c.ink,
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(800px 600px at 50% 0%, ${c.accent}33, transparent 60%)`,
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "0 32px",
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(CsOpsLine, {
  color: c.accent
}, ">>", " READY TO IGNITE YOUR NEXT CAMPAIGN?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5.4vw, 84px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.95,
    color: c.ink
  }
}, "Let's build your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: c.accent
  }
}, "next case study.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact",
  style: {
    padding: "20px 30px",
    borderRadius: 99,
    background: c.accent,
    color: "#0A0A0A",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontWeight: 700,
    textDecoration: "none"
  }
}, "Contact us \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    padding: "20px 30px",
    borderRadius: 99,
    background: "transparent",
    color: c.ink,
    border: `1px solid ${c.accent}66`,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontWeight: 700,
    textDecoration: "none"
  }
}, "See more work"))));

/* ------------------------------------------------------------------ ROOT */
const CaseStudyPage = () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  /* If someone lands on /case-study without a slug, render the WorkPage
     (the case-study index) inline instead of defaulting to one case. */
  if (!slug && typeof window !== "undefined" && typeof window.WorkPage === "function") {
    return React.createElement(window.WorkPage);
  }
  const c = (window.CASE_STUDIES || {})[slug];
  React.useEffect(() => {
    if (!c) return;
    const url = `https://www.igniteproductions.co/case-study.html?slug=${c.slug}`;
    if (typeof document !== "undefined") document.title = `${c.brand} — ${c.headline} | Ignite Productions Case Study`;
    const cleanups = [];
    cleanups.push(window.injectJsonLd && window.injectJsonLd("case-study", {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "CreativeWork",
        "@id": url + "#case-study",
        name: `${c.brand} — ${c.headline}`,
        headline: c.headline,
        url,
        image: [c.hero, ...(c.gallery || []).slice(0, 3)].filter(Boolean),
        about: c.brand,
        keywords: (c.tags || []).join(", "),
        genre: c.category,
        inLanguage: "en-US",
        creator: window.IGNITE_ORG_LD,
        author: window.IGNITE_ORG_LD,
        publisher: window.IGNITE_ORG_LD,
        datePublished: String(c.year || "").match(/\d{4}/) ? String(c.year).match(/\d{4}/)[0] : undefined,
        description: c.challenge,
        text: [c.challenge, c.solution].filter(Boolean).join(" "),
        spatialCoverage: c.location ? { "@type": "Place", name: c.location } : undefined,
        mentions: { "@type": "Brand", name: c.brand, logo: c.logo }
      }, {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.igniteproductions.co/" },
          { "@type": "ListItem", position: 2, name: "Our Work", item: "https://www.igniteproductions.co/work" },
          { "@type": "ListItem", position: 3, name: c.brand, item: url }
        ]
      }]
    }));
    return () => cleanups.forEach(fn => fn && fn());
  }, [c && c.slug]);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": c ? `Case · ${c.brand}` : "Case · 404"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "WORK"
  }), c ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CaseHero, {
    c: c
  }), /*#__PURE__*/React.createElement(CaseNarrative, {
    c: c
  }), /*#__PURE__*/React.createElement(CaseGallery, {
    c: c
  }), /*#__PURE__*/React.createElement(CaseMoreWork, {
    c: c
  }), /*#__PURE__*/React.createElement(CaseCTA, {
    c: c
  })) : /*#__PURE__*/React.createElement(CaseMissing, {
    slug: slug
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  CaseStudyPage
});