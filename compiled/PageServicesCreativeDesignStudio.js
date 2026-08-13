(function(){if (typeof window !== "undefined" && window.PageServicesCreativeDesignStudio) return;
/* Auto-extracted from the design project's pages/services-creative-design-studio.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const PAPER = "#F3EFE6",
  INK = "#14110C",
  ORANGE = "#4F7DA6",
  CLAY = "#3A6086";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".cs-reveal");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const reveal = () => els.forEach(e => {
      if (!e.classList.contains("in") && e.getBoundingClientRect().top < window.innerHeight * 0.92) e.classList.add("in");
    });
    reveal();
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    }), {
      threshold: 0.1
    });
    els.forEach(e => {
      if (!e.classList.contains("in")) obs.observe(e);
    });
    window.addEventListener("scroll", reveal, {
      passive: true
    });
    const t = setTimeout(() => els.forEach(e => e.classList.add("in")), 2600);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", reveal);
      clearTimeout(t);
    };
  }, []);
};
const Eyebrow = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    color: color || CLAY
  }
}, children);

/* Labeled placeholder — user drops stock/real art here later */
const Slot = ({
  label,
  tall,
  accent,
  rot = 0,
  big
}) => /*#__PURE__*/React.createElement("div", {
  className: "cs-tile",
  style: {
    position: "relative",
    borderRadius: 14,
    overflow: "hidden",
    transform: `rotate(${rot}deg)`,
    aspectRatio: tall ? "3/4" : big ? "16/10" : "4/3",
    background: `linear-gradient(135deg, ${accent || ORANGE}22, ${INK}10), repeating-linear-gradient(45deg, rgba(20,17,12,0.04) 0 14px, transparent 14px 28px)`,
    border: "1px solid rgba(20,17,12,0.16)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
    minHeight: 120
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "cs-slot-label",
  style: {
    color: INK,
    opacity: 0.55
  }
}, "IMG"), /*#__PURE__*/React.createElement("span", {
  style: {
    width: 22,
    height: 22,
    borderRadius: 999,
    border: `1.5px solid ${accent || ORANGE}`,
    display: "grid",
    placeItems: "center",
    color: accent || ORANGE,
    fontSize: 13,
    fontWeight: 700
  }
}, "+")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 34,
    height: 3,
    background: accent || ORANGE,
    borderRadius: 2,
    marginBottom: 8
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "cs-slot-label",
  style: {
    color: INK
  }
}, label)));

/* ============ HERO ============ */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    overflow: "hidden",
    background: PAPER,
    color: INK,
    padding: "84px 0 70px"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "radial-gradient(rgba(20,17,12,0.05) 1px, transparent 1px)",
    backgroundSize: "26px 26px",
    opacity: 0.6
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: "-8%",
    top: "-12%",
    width: "46%",
    height: "60%",
    background: `radial-gradient(ellipse at center, ${ORANGE}26, transparent 64%)`,
    filter: "blur(46px)"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "cs-rise",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    paddingBottom: 16,
    borderBottom: `1px solid rgba(20,17,12,0.16)`,
    marginBottom: 44,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto"
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: INK
}, "EST. on the floor, not the cloud"))), /*#__PURE__*/React.createElement("div", {
  className: "cs-hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  className: "cs-rise",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(52px, 7.4vw, 128px)",
    lineHeight: 0.92,
    letterSpacing: "-0.04em",
    margin: 0,
    animationDelay: "120ms"
  }
}, "Creative built", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 400,
    color: ORANGE
  }
}, "to be built.")), /*#__PURE__*/React.createElement("p", {
  className: "cs-rise",
  style: {
    marginTop: 26,
    fontSize: "clamp(17px,1.7vw,21px)",
    lineHeight: 1.5,
    color: "rgba(20,17,12,0.78)",
    maxWidth: 520,
    animationDelay: "240ms"
  }
}, "Campaign creative, key art, POS, and packaging \u2014 designed by a studio that knows exactly how it gets fabricated, printed, permitted, and staffed. Beautiful and buildable. Approved is shipped."), /*#__PURE__*/React.createElement("div", {
  className: "cs-rise",
  style: {
    marginTop: 32,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    animationDelay: "340ms"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=creative",
  style: {
    padding: "18px 28px",
    borderRadius: 999,
    background: INK,
    color: PAPER,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 16,
    textDecoration: "none"
  }
}, "Plan your activation \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "transparent",
    color: INK,
    border: `1.5px solid rgba(20,17,12,0.25)`,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none"
  }
}, "See our work"))), /*#__PURE__*/React.createElement("div", {
  className: "cs-rise",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    animationDelay: "420ms"
  }
}, /*#__PURE__*/React.createElement(Slot, {
  label: "Hero key art",
  tall: true,
  accent: ORANGE,
  rot: -1.5
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: 14,
    marginTop: 26
  }
}, /*#__PURE__*/React.createElement(Slot, {
  label: "POS / signage",
  accent: CLAY,
  rot: 1.2
}), /*#__PURE__*/React.createElement(Slot, {
  label: "Packaging",
  accent: INK,
  rot: -0.8
}))))));

/* ============ MARQUEE ============ */
const Marquee = () => {
  const items = ["KEY ART", "POS & SIGNAGE", "PACKAGING", "EXPERIENTIAL DESIGN", "KITS & GWP", "BRAND SYSTEMS", "LOCALIZATION", "PRODUCTION-READY"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: INK,
      color: PAPER,
      padding: "15px 0",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-mq"
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: "0.16em",
      display: "inline-flex",
      alignItems: "center",
      gap: 38
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ORANGE
    }
  }, "\u2726")))));
};

/* ============ PORTFOLIO GALLERY ============ */
const Gallery = () => {
  const tiles = [{
    label: "Festival key art",
    a: ORANGE,
    tall: false
  }, {
    label: "End-cap / POS",
    a: CLAY,
    tall: true
  }, {
    label: "Sample kit packaging",
    a: INK,
    tall: false
  }, {
    label: "Booth / footprint design",
    a: ORANGE,
    tall: false
  }, {
    label: "Social / paid cutdowns",
    a: CLAY,
    tall: false
  }, {
    label: "Signage system",
    a: INK,
    tall: true
  }, {
    label: "Vehicle / tour wrap",
    a: ORANGE,
    tall: false
  }, {
    label: "GWP / premium",
    a: CLAY,
    tall: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: PAPER,
      color: INK,
      padding: "100px 0 110px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "cs-reveal",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 20,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "// THE PORTFOLIO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(34px,4.6vw,68px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Work that left ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontFamily: "Georgia, serif",
      fontWeight: 400,
      color: ORANGE
    }
  }, "the screen."))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 360,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(20,17,12,0.7)"
    }
  }, "A working studio \u2014 every piece here was designed to be fabricated, printed, and staffed. Drop your own work into these frames.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-gallery cs-reveal",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      alignItems: "start"
    }
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: i % 2 === 1 ? 30 : 0
    }
  }, /*#__PURE__*/React.createElement(Slot, {
    label: t.label,
    accent: t.a,
    tall: t.tall,
    rot: i % 3 === 0 ? -1 : i % 3 === 1 ? 0.8 : 0
  })))), /*#__PURE__*/React.createElement("p", {
    className: "cs-reveal",
    style: {
      marginTop: 28,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      color: "rgba(20,17,12,0.45)",
      textTransform: "uppercase"
    }
  }, "\u203B Placeholder frames \u2014 drop real campaign work or stock before launch")));
};

/* ============ THE TAKE ============ */
const Take = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: INK,
    color: PAPER,
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    left: "-6%",
    bottom: "-30%",
    fontFamily: "var(--font-stencil)",
    fontSize: "clamp(180px,26vw,400px)",
    color: "rgba(79,125,166,0.07)",
    lineHeight: 0.8,
    fontStyle: "italic",
    whiteSpace: "nowrap"
  }
}, "buildable"), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "cs-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: ORANGE
}, "// THE TAKE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(36px,5.4vw,86px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.96
  }
}, "Design that can't be built", /*#__PURE__*/React.createElement("br", null), "is ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    color: ORANGE
  }
}, "decoration.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 26,
    fontSize: "clamp(17px,1.8vw,22px)",
    lineHeight: 1.5,
    color: "rgba(243,239,230,0.82)",
    maxWidth: 680
  }
}, "We design and fabricate under one roof, so the creative you approve is the creative that ships \u2014 permitted, printed, installed, and staffed without a translation layer."))));

/* ============ CAPABILITIES ============ */
const CAPS = [{
  t: "Campaign creative",
  d: "Big idea, key art, and the system that carries it across every activation surface."
}, {
  t: "POS & signage",
  d: "Shelf, end-cap, and event signage designed to print, ship, and install clean."
}, {
  t: "Experiential design",
  d: "Footprints, booths, and brand worlds designed with our fabrication team."
}, {
  t: "Packaging & kits",
  d: "Sample kits, gift-with-purchase, and limited-run packaging design."
}, {
  t: "Localization-ready",
  d: "Creative systems built to localize per market and language (EN + ES) fast."
}, {
  t: "Production-ready files",
  d: "Specs, dielines, and print files our build and print teams run immediately."
}];
const Caps = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: PAPER,
    color: INK,
    padding: "110px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "cs-reveal",
  style: {
    maxWidth: 760,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "// WHAT THE STUDIO MAKES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "A studio with a ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    color: ORANGE
  }
}, "fab shop"), " attached.")), /*#__PURE__*/React.createElement("div", {
  className: "cs-two",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
    gap: 16
  }
}, CAPS.map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: c.t,
  className: "cs-reveal",
  style: {
    padding: "28px 26px",
    background: "#fff",
    border: "1px solid rgba(20,17,12,0.12)",
    borderRadius: 14,
    transitionDelay: i * 55 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: CLAY,
    fontWeight: 700
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: "-0.02em"
  }
}, c.t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 9,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(20,17,12,0.68)"
  }
}, c.d))))));

/* ============ PROCESS ============ */
const STEPS = [["BRIEF", "Align on the idea, the surfaces, and the markets it has to live in."], ["DESIGN", "Key art and the creative system across every activation surface."], ["PRODUCE", "Production-ready files handed to our build and print teams."], ["DEPLOY", "Fabricated, printed, installed, and staffed in-market."]];
const Process = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "#fff",
    color: INK,
    padding: "110px 0",
    borderTop: "1px solid rgba(20,17,12,0.1)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "cs-reveal",
  style: {
    marginBottom: 46
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "// BRIEF TO BUILT"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,64px)",
    letterSpacing: "-0.035em"
  }
}, "How it ships.")), /*#__PURE__*/React.createElement("div", {
  className: "cs-two",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: 16
  }
}, STEPS.map(([n, d], i) => /*#__PURE__*/React.createElement("div", {
  key: n,
  className: "cs-reveal",
  style: {
    padding: "26px 24px",
    background: PAPER,
    borderRadius: 14,
    border: "1px solid rgba(20,17,12,0.1)",
    transitionDelay: i * 60 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    fontWeight: 700,
    color: ORANGE
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: "-0.02em"
  }
}, n), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 9,
    fontSize: 14,
    lineHeight: 1.55,
    color: "rgba(20,17,12,0.68)"
  }
}, d))))));

/* ============ SEO BLOCK ============ */
const Seo = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: PAPER,
    color: INK,
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    maxWidth: 880
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "cs-reveal"
}, /*#__PURE__*/React.createElement(Eyebrow, null, "// DEEP DIVE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(28px,3.4vw,46px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.04
  }
}, "A creative studio with a fabrication shop attached."), ["Our creative and design studio covers campaign creative, key art, POS and signage, experiential design, and packaging — the visual system that carries a brand across every activation surface.", "What makes it different is execution: the same company that designs the booth also fabricates it, prints the signage, and staffs the floor. So creative is designed production-ready, with specs, dielines, and venue rules accounted for from the first sketch.", "Creative systems are built localization-ready — per market and per language (EN + ES) — so a national program ships consistent but locally relevant, fast.", "Best for CPG, beverage, and lifestyle brands who want activation creative that's beautiful and buildable, from one team, on time and on budget."].map((p, i) => /*#__PURE__*/React.createElement("p", {
  key: i,
  style: {
    marginTop: 18,
    fontSize: 16.5,
    lineHeight: 1.6,
    color: "rgba(20,17,12,0.78)"
  },
  dangerouslySetInnerHTML: {
    __html: p
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 26,
    display: "flex",
    flexWrap: "wrap",
    gap: 9
  }
}, ["activation creative agency", "CPG design studio", "POS design", "key art", "experiential creative", "signage design", "packaging design CPG", "production-ready creative"].map(k => /*#__PURE__*/React.createElement("span", {
  key: k,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.05em",
    color: CLAY,
    padding: "7px 12px",
    borderRadius: 999,
    border: `1px solid ${CLAY}44`,
    background: `${CLAY}10`
  }
}, k))))));

/* ============ FAQ ============ */
const FAQS = [["Do you design and build, or just design?", "Both. Our studio designs and our fabrication + print teams build — so approved creative ships without a translation layer."], ["Can you localize creative per market?", "Yes. Creative systems are built localization-ready for multiple markets and languages (EN + ES)."], ["Do you deliver production-ready files?", "Yes — specs, dielines, and print-ready files our own build and print teams run immediately."], ["Can you work from our existing brand guidelines?", "Absolutely. We design within your guidelines, or help extend them for activation surfaces."], ["Do you handle packaging and kits?", "Yes — sample kits, gift-with-purchase, and limited-run packaging design and production."]];
const Faq = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      color: INK,
      padding: "100px 0",
      borderTop: "1px solid rgba(20,17,12,0.1)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-reveal",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "// QUESTIONS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,56px)",
      letterSpacing: "-0.03em"
    }
  }, "Good questions.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-reveal"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      borderBottom: "1px solid rgba(20,17,12,0.14)",
      padding: "22px 0",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ORANGE,
      fontSize: 22,
      fontFamily: "var(--font-mono)",
      transform: open === i ? "rotate(45deg)" : "none",
      transition: "transform 300ms"
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "rgba(20,17,12,0.72)",
      maxWidth: 680
    }
  }, a))))));
};

/* ============ CTA ============ */
const CTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: ORANGE,
    color: INK,
    padding: "130px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "cs-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: INK
}, "// LET'S MAKE SOMETHING"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(44px,7vw,128px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Beautiful.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    fontFamily: "Georgia, serif",
    fontWeight: 400
  }
}, "And buildable.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "Tell us what you're launching. We'll design it, build it, print it, and put it in front of real people \u2014 one team, start to finish."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 38,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=creative",
  style: {
    padding: "20px 32px",
    borderRadius: 999,
    background: INK,
    color: PAPER,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Start the brief \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/services/fabrication-builds",
  style: {
    padding: "20px 28px",
    borderRadius: 999,
    background: "transparent",
    color: INK,
    border: `1.5px solid ${INK}`,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    textDecoration: "none"
  }
}, "See Fabrication")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.08em"
  }
}, "Pairs with ", /*#__PURE__*/React.createElement("a", {
  href: "/services/fabrication-builds",
  style: {
    color: INK
  }
}, "Fabrication & Builds"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/content-capture",
  style: {
    color: INK
  }
}, "Content Capture"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "/services/experiential-marketing",
  style: {
    color: INK
  }
}, "Experiential")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Creative & Design Studio"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#4F7DA6",
    label: "Creative & Design Studio",
    rel: "../",
    restOnLight: true
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Take, null), /*#__PURE__*/React.createElement(Caps, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Seo, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesCreativeDesignStudio: Page
});
})();
