/* Legal page (Privacy Policy / Terms of Service) — shared renderer.
   Data lives in window.LEGAL_DOCS keyed by "privacy" | "terms".
   ------------------------------------------------------------------ */

const {
  useState: useLegalState,
  useEffect: useLegalEffect,
  useRef: useLegalRef,
  useMemo: useLegalMemo
} = React;

/* ---------------- inline rich-text renderer ---------------- */
/* tokens: **bold**  and  ALL_CAPS chunks get monospace treatment automatically */
const LegalInline = ({
  text
}) => {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return /*#__PURE__*/React.createElement(React.Fragment, null, parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return /*#__PURE__*/React.createElement("strong", {
        key: i,
        style: {
          color: "var(--fg-1)",
          fontWeight: 600
        }
      }, p.slice(2, -2));
    }
    return /*#__PURE__*/React.createElement("span", {
      key: i
    }, p);
  }));
};

/* ---------------- block renderer ---------------- */
const LegalBlock = ({
  b
}) => {
  if (b.type === "p") {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.75,
        color: "var(--fg-2)",
        margin: "0 0 18px"
      }
    }, /*#__PURE__*/React.createElement(LegalInline, {
      text: b.text
    }));
  }
  if (b.type === "h3") {
    return /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: "-0.005em",
        color: "var(--fg-1)",
        margin: "28px 0 12px"
      }
    }, b.text);
  }
  if (b.type === "ul") {
    return /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: "0 0 20px",
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, b.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--fg-2)",
        paddingLeft: 24,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--spark-500)",
        letterSpacing: "0.08em"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement(LegalInline, {
      text: it
    }))));
  }
  if (b.type === "callout") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--ink-100)",
        border: "1px solid var(--ink-400)",
        borderLeft: "3px solid var(--ignite-500)",
        padding: "20px 24px",
        margin: "20px 0 28px",
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.22em",
        color: "var(--ignite-500)",
        textTransform: "uppercase",
        marginBottom: 10
      }
    }, ">> ", b.label || "IMPORTANT"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        lineHeight: 1.7,
        color: "var(--fg-1)",
        margin: 0
      }
    }, /*#__PURE__*/React.createElement(LegalInline, {
      text: b.text
    })));
  }
  if (b.type === "kv") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        border: "1px solid var(--ink-400)",
        borderRadius: 4,
        overflow: "hidden",
        background: "var(--ink-100)"
      }
    }, b.rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: 24,
        padding: "14px 20px",
        borderTop: i ? "1px solid var(--ink-400)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.16em",
        color: "var(--fg-3)",
        textTransform: "uppercase"
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: "var(--fg-1)"
      }
    }, /*#__PURE__*/React.createElement(LegalInline, {
      text: v
    })))));
  }
  return null;
};

/* ---------------- TOC + main ---------------- */
const LegalSection = ({
  s,
  idx
}) => /*#__PURE__*/React.createElement("section", {
  id: s.id,
  style: {
    scrollMarginTop: 100,
    padding: "56px 0 8px",
    borderTop: idx === 0 ? "none" : "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--spark-500)",
    textTransform: "uppercase",
    marginBottom: 12
  }
}, ">> ", "\xA7", String(idx + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(28px, 3vw, 36px)",
    letterSpacing: "-0.02em",
    color: "var(--fg-1)",
    marginBottom: 28,
    lineHeight: 1.1
  }
}, s.title), s.blocks.map((b, i) => /*#__PURE__*/React.createElement(LegalBlock, {
  key: i,
  b: b
})));
const LegalTOC = ({
  sections,
  activeId
}) => /*#__PURE__*/React.createElement("nav", {
  "aria-label": "Document sections",
  style: {
    position: "sticky",
    top: 100,
    border: "1px solid var(--ink-400)",
    borderRadius: 4,
    background: "var(--ink-100)",
    padding: "20px 18px",
    maxHeight: "calc(100vh - 140px)",
    overflowY: "auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 14
  }
}, ">> ", "CONTENTS"), /*#__PURE__*/React.createElement("ol", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2
  }
}, sections.map((s, i) => {
  const isActive = activeId === s.id;
  return /*#__PURE__*/React.createElement("li", {
    key: s.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#" + s.id,
    style: {
      display: "grid",
      gridTemplateColumns: "28px 1fr",
      gap: 8,
      padding: "7px 8px",
      fontSize: 12.5,
      lineHeight: 1.35,
      color: isActive ? "var(--fg-1)" : "var(--fg-3)",
      background: isActive ? "rgba(214,243,95,0.08)" : "transparent",
      borderLeft: isActive ? "2px solid var(--spark-500)" : "2px solid transparent",
      transition: "all 160ms var(--ease-out)",
      borderRadius: 2
    },
    onMouseEnter: e => {
      if (!isActive) e.currentTarget.style.color = "var(--fg-1)";
    },
    onMouseLeave: e => {
      if (!isActive) e.currentTarget.style.color = "var(--fg-3)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: isActive ? "var(--spark-500)" : "var(--fg-4)"
    }
  }, "\xA7", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, s.title)));
})));
const LegalHero = ({
  doc,
  sister
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0 80px",
    position: "relative",
    overflow: "hidden",
    background: "var(--ink-000)",
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 48,
    alignItems: "end"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 920
  }
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "LEGAL \xB7 ", doc.kind.toUpperCase(), " \xB7 v", doc.version), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(56px, 8vw, 112px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92
  }
}, doc.titleA, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, doc.titleB)), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    maxWidth: 720
  }
}, doc.lede)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    minWidth: 220
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "EFFECTIVE"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 20,
    color: "var(--fg-1)",
    letterSpacing: "-0.01em"
  }
}, doc.effective), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 12
  }
}), /*#__PURE__*/React.createElement("a", {
  href: sister.href,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--spark-500)",
    borderTop: "1px solid var(--ink-400)",
    paddingTop: 14
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--spark-400)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--spark-500)"
}, "\u2192 READ ", sister.label)))));
const LegalContactCTA = ({
  doc
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "80px 0 120px",
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--ink-400)",
    borderRadius: 8,
    padding: "40px 44px",
    background: "var(--ink-100)",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 40,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "QUESTIONS ABOUT THIS DOCUMENT"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 12,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(28px, 3vw, 40px)",
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    color: "var(--fg-1)"
  }
}, "Talk to a human at ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "Ignite"), "."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    maxWidth: 520
  }
}, "For data requests, contract questions, or compliance inquiries, reach the team directly. We respond within applicable timeframes.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, doc.contact.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    display: "grid",
    gridTemplateColumns: "100px 1fr",
    gap: 16,
    paddingBottom: 12,
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, k), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: "var(--fg-1)"
  }
}, v)))))));

/* ---------------- main page ---------------- */
const LegalPage = ({
  kind
}) => {
  const doc = window.LEGAL_DOCS[kind];
  const sister = kind === "privacy" ? {
    href: "terms.html",
    label: "TERMS OF SERVICE"
  } : {
    href: "privacy.html",
    label: "PRIVACY POLICY"
  };
  const [activeId, setActiveId] = useLegalState(doc.sections[0]?.id);
  useLegalEffect(() => {
    const obs = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0
    });
    doc.sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, null), /*#__PURE__*/React.createElement(LegalHero, {
    doc: doc,
    sister: sister
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 80px",
      background: "var(--ink-000)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 72,
      alignItems: "start",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(LegalTOC, {
    sections: doc.sections,
    activeId: activeId
  }), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 780
    }
  }, doc.sections.map((s, i) => /*#__PURE__*/React.createElement(LegalSection, {
    key: s.id,
    s: s,
    idx: i
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: "1px solid var(--ink-400)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, "LAST UPDATED \xB7 ", doc.effective), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      color: "var(--spark-500)",
      textTransform: "uppercase"
    },
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, "\u2191 BACK TO TOP")))))), /*#__PURE__*/React.createElement(LegalContactCTA, {
    doc: doc
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  LegalPage
});