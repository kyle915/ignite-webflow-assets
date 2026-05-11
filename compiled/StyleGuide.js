/* global React */
const {
  useState
} = React;

/* ============================================================
   STYLE GUIDE — Ignite Productions
   Documents brand identity: logo system, colors, typography,
   patterns, motion. Single page. Match the dark editorial
   feel of the rest of the site.
   ============================================================ */

const SG_FONTS = [{
  key: "display",
  label: "Display",
  token: "--font-display",
  family: "Space Grotesk",
  usage: "Headlines, page titles, button labels, big numbers.",
  weights: ["400", "500", "600", "700"],
  sample: "Brand activation, end to end.",
  size: 56,
  italic: true,
  italicSample: "actually moved"
}, {
  key: "body",
  label: "Body",
  token: "--font-body",
  family: "Inter",
  usage: "Long-form copy, paragraphs, form fields.",
  weights: ["400", "500", "600", "700"],
  sample: "We staff, build, and run brand activations across all 50 states — from one-night pop-ups to multi-city tours.",
  size: 18
}, {
  key: "mono",
  label: "Mono / Ops",
  token: "--font-mono",
  family: "JetBrains Mono",
  usage: "Eyebrows, metadata, captions, tactical labels. Always letter-spaced 0.22em uppercase.",
  weights: ["400", "500", "700"],
  sample: ">> AUSTIN // LIVE // 14 ON-SITE",
  size: 16,
  tracking: "0.22em",
  upper: true
}, {
  key: "stencil",
  label: "Stencil",
  token: "--font-stencil",
  family: "Bungee",
  usage: "Veteran-owned nod. Single accents and decorative numerals. Never body.",
  weights: ["400"],
  sample: "07",
  size: 96
}];
const SG_COLOR_GROUPS = [{
  title: "Ignite — Brand",
  swatches: [{
    name: "Ignite 500",
    token: "--ignite-500",
    hex: "#FF5A1F",
    role: "Primary brand accent. Buttons, links, highlights."
  }, {
    name: "Ignite 400",
    token: "--ignite-400",
    hex: "#FF7A47",
    role: "Hover, soft highlight."
  }, {
    name: "Ignite 600",
    token: "--ignite-600",
    hex: "#E04510",
    role: "Pressed state, deep accent."
  }, {
    name: "Ignite 700",
    token: "--ignite-700",
    hex: "#B83206",
    role: "Heavy emphasis, on-light contrast."
  }, {
    name: "Ember 500",
    token: "--ember-500",
    hex: "#FFB627",
    role: "Warm amber highlight. Pair with Ignite."
  }]
}, {
  title: "Spark — Sister product",
  swatches: [{
    name: "Spark 500",
    token: "--spark-500",
    hex: "#D6F35F",
    role: "Spark dashboard accent. Lime."
  }, {
    name: "Spark 400",
    token: "--spark-400",
    hex: "#E2F785",
    role: "Lighter Spark accent."
  }, {
    name: "Spark 600",
    token: "--spark-600",
    hex: "#B8D43E",
    role: "Pressed Spark accent."
  }]
}, {
  title: "Ink — Dark surfaces",
  swatches: [{
    name: "Ink 000",
    token: "--ink-000",
    hex: "#0A0B0D",
    role: "Page background."
  }, {
    name: "Ink 100",
    token: "--ink-100",
    hex: "#111317",
    role: "Elevated panel."
  }, {
    name: "Ink 200",
    token: "--ink-200",
    hex: "#1A1D23",
    role: "Card."
  }, {
    name: "Ink 300",
    token: "--ink-300",
    hex: "#242830",
    role: "Raised card, inputs."
  }, {
    name: "Ink 400",
    token: "--ink-400",
    hex: "#2F343E",
    role: "Borders on dark."
  }, {
    name: "Ink 500",
    token: "--ink-500",
    hex: "#3A4050",
    role: "Muted dividers."
  }]
}, {
  title: "Paper — Light surfaces",
  swatches: [{
    name: "Paper 000",
    token: "--paper-000",
    hex: "#FAFAF7",
    role: "Off-white page.",
    light: true
  }, {
    name: "Paper 100",
    token: "--paper-100",
    hex: "#F0EFE9",
    role: "Light panel.",
    light: true
  }, {
    name: "Paper 200",
    token: "--paper-200",
    hex: "#E4E2D8",
    role: "Borders, dividers.",
    light: true
  }]
}, {
  title: "Semantic",
  swatches: [{
    name: "Success",
    token: "--success",
    hex: "#6BE486",
    role: "Confirmation, positive states."
  }, {
    name: "Warn",
    token: "--warn",
    hex: "#FFB627",
    role: "Caution, watch states."
  }, {
    name: "Danger",
    token: "--danger",
    hex: "#FF4D4D",
    role: "Errors, rush flags."
  }, {
    name: "Info",
    token: "--info",
    hex: "#5AB8FF",
    role: "Informational accents."
  }, {
    name: "Live",
    token: "--live",
    hex: "#FF4D4D",
    role: "Real-time / 'live now' indicator."
  }]
}];

/* Logo gallery — pulls real files from /assets */
const SG_LOGOS = [{
  title: "Full lockup — White",
  file: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-full-white.png",
  bg: "var(--ink-200)",
  note: "Default on dark. Always use this on photography, video, dark panels."
}, {
  title: "Full lockup — Black",
  file: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-full-black.png",
  bg: "var(--paper-000)",
  light: true,
  note: "Default on light. Off-white paper backgrounds and bright photography."
}, {
  title: "Typemark — White",
  file: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
  bg: "var(--ink-200)",
  note: "Use when 'PRODUCTIONS' is implied by context. Navigation, video bugs, social."
}, {
  title: "Typemark — Black",
  file: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-black.png",
  bg: "var(--paper-000)",
  light: true,
  note: "Same rules, light surfaces."
}, {
  title: "Typemark — Outline",
  file: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-outline.webp",
  bg: "var(--ink-000)",
  note: "Decorative only. Giant footers, watermarks, ghost layers behind content.",
  large: true
}];

/* ============================================================
   COMPONENT SHELL
   ============================================================ */

const SGSection = ({
  id,
  eyebrow,
  title,
  sub,
  children
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--ink-400)",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", eyebrow), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5.5vw, 76px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.96,
    maxWidth: 1000
  }
}, title), sub && /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 760,
    textWrap: "pretty"
  }
}, sub), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 64
  }
}, children)));

/* ----- Logo cards ----- */
const LogoCard = ({
  logo
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    overflow: "hidden",
    background: "var(--ink-100)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: logo.bg,
    padding: logo.large ? "80px 48px" : "64px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 240,
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: logo.file,
  alt: logo.title,
  style: {
    maxWidth: "100%",
    maxHeight: logo.large ? 140 : 110,
    width: "auto",
    height: "auto",
    display: "block"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 8
  }
}, logo.title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  }
}, logo.note)));

/* ----- Color swatch ----- */
const Swatch = ({
  s
}) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(s.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1100);
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      textAlign: "left",
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      overflow: "hidden",
      background: "var(--ink-100)",
      cursor: "pointer",
      padding: 0,
      fontFamily: "inherit",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: s.hex,
      height: 120,
      position: "relative",
      borderBottom: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      padding: "4px 8px",
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      borderRadius: 4,
      textTransform: "uppercase"
    }
  }, copied ? "COPIED" : "COPY")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 4
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-2)",
      marginBottom: 8,
      letterSpacing: "0.04em"
    }
  }, s.hex.toUpperCase(), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, s.token)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: "var(--fg-3)"
    }
  }, s.role)));
};

/* ----- Type spec ----- */
const TypeSpec = ({
  f
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    background: "var(--ink-100)",
    padding: 32,
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 32,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 8
  }
}, f.label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 28,
    letterSpacing: "-0.02em",
    marginBottom: 6
  }
}, f.family), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-3)",
    marginBottom: 18,
    letterSpacing: "0.04em"
  }
}, f.token), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  }
}, f.usage), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginTop: 18
  }
}, f.weights.map(w => /*#__PURE__*/React.createElement("span", {
  key: w,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    padding: "4px 8px",
    border: "1px solid var(--ink-400)",
    borderRadius: 4,
    color: "var(--fg-2)"
  }
}, w)))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "24px 28px",
    background: "var(--ink-000)",
    border: "1px solid var(--ink-400)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 180
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: `var(${f.token})`,
    fontSize: f.size,
    fontWeight: f.key === "display" ? 700 : 500,
    letterSpacing: f.tracking || (f.key === "display" ? "-0.025em" : "normal"),
    textTransform: f.upper ? "uppercase" : "none",
    lineHeight: 1.08
  }
}, f.sample, f.italic && f.italicSample && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, f.italicSample)))));

/* ============================================================
   PAGE
   ============================================================ */

const StyleGuidePage = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
  active: ""
}), /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    padding: "160px 0 88px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "BRAND IDENTITY \xB7 STYLE GUIDE v1.0"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(72px, 10vw, 188px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.86,
    maxWidth: 1300
  }
}, "How we", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "look, sound,"), " and", /*#__PURE__*/React.createElement("br", null), "show up."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 36,
    fontSize: 21,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 760,
    textWrap: "pretty"
  }
}, "One file. The logo system, color, typography, and visual vocabulary that make Ignite Productions look like Ignite Productions \u2014 no matter who's building the deck, the spec sheet, or the truck wrap."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 40
  }
}, [["01 Logo", "#logo"], ["02 Color", "#color"], ["03 Typography", "#type"], ["04 Voice", "#voice"], ["05 Patterns", "#patterns"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: h,
  className: "link-mono",
  style: {
    padding: "10px 16px",
    border: "1px solid var(--ink-400)",
    borderRadius: 999,
    color: "var(--fg-1)",
    textDecoration: "none",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  }
}, l, " \u2192"))))), /*#__PURE__*/React.createElement(SGSection, {
  id: "logo",
  eyebrow: "01 LOGO SYSTEM",
  title: "The wordmark, in five flavors.",
  sub: /*#__PURE__*/React.createElement(React.Fragment, null, "The Ignite typemark is an italic, slab-cut sans \u2014 built to feel like motion. Lead with the full lockup on official documents and the typemark in compact UI. Never reset or redraw the letters.")
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: 20,
    marginBottom: 56
  }
}, SG_LOGOS.map(l => /*#__PURE__*/React.createElement(LogoCard, {
  key: l.title,
  logo: l
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    background: "var(--ink-100)",
    padding: 32
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
}, "CLEAR SPACE"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "-0.015em",
    marginBottom: 14
  }
}, "Give it room to breathe."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    marginBottom: 28
  }
}, "Minimum clear space around any logo lockup is equal to the height of the \"I\" cap. No type, edge, or graphic should enter that zone."), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--ink-000)",
    padding: 48,
    borderRadius: 10,
    border: "1px dashed var(--ink-400)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 28,
    border: "1px dashed var(--ignite-500)",
    borderRadius: 6,
    opacity: 0.5
  }
}), /*#__PURE__*/React.createElement("img", {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
  alt: "Ignite",
  style: {
    height: 56,
    width: "auto",
    display: "block"
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    background: "var(--ink-100)",
    padding: 32
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
}, "MINIMUM SIZE"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "-0.015em",
    marginBottom: 14
  }
}, "Never smaller than this."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    marginBottom: 28
  }
}, "Digital: 96px wide for the full lockup, 72px for the typemark. Print: 0.75 in wide for the full lockup, 0.5 in for the typemark."), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--ink-000)",
    padding: 32,
    borderRadius: 10,
    border: "1px solid var(--ink-400)",
    display: "flex",
    alignItems: "center",
    gap: 36,
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-full-white.png",
  alt: "Ignite Productions",
  style: {
    width: 96,
    height: "auto",
    display: "block",
    margin: "0 auto 8px"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "FULL \xB7 96PX")), /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
  alt: "Ignite",
  style: {
    width: 72,
    height: "auto",
    display: "block",
    margin: "0 auto 8px"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "TYPEMARK \xB7 72PX"))))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    padding: 32,
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    background: "var(--ink-100)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "#FF6969",
    textTransform: "uppercase",
    marginBottom: 14
  }
}, ">> ", "DO NOT"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "-0.015em",
    marginBottom: 28
  }
}, "Five ways to break the mark."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 16
  }
}, [{
  sample: /*#__PURE__*/React.createElement("img", {
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
    alt: "",
    style: {
      height: 38,
      transform: "skewX(-12deg)",
      filter: "saturate(0)"
    }
  }),
  text: "Don't re-skew or re-italicize. The mark already leans 12°."
}, {
  sample: /*#__PURE__*/React.createElement("img", {
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
    alt: "",
    style: {
      height: 38,
      transform: "scaleY(0.6)"
    }
  }),
  text: "Don't squash or stretch. Scale uniformly."
}, {
  sample: /*#__PURE__*/React.createElement("img", {
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
    alt: "",
    style: {
      height: 38,
      filter: "drop-shadow(0 0 12px rgba(255,90,31,0.9))"
    }
  }),
  text: "Don't add glows, shadows, or strokes. The mark is solid."
}, {
  sample: /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontStyle: "italic",
      fontSize: 30,
      letterSpacing: "-0.02em",
      color: "var(--fg-1)"
    }
  }, "IGNITE"),
  text: "Don't substitute another font for the wordmark — only the supplied files."
}, {
  sample: /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
    alt: "",
    style: {
      height: 30,
      filter: "hue-rotate(140deg) saturate(2)"
    }
  })),
  text: "Don't recolor. Only black, white, or the supplied outline."
}].map((d, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: 20,
    background: "var(--ink-000)",
    borderRadius: 10,
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    position: "relative"
  }
}, d.sample, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 999,
    background: "#FF6969",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    fontWeight: 700
  }
}, "\xD7")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 12.5,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    margin: 0
  }
}, d.text))))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    padding: "20px 24px",
    border: "1px solid var(--ignite-500)",
    borderRadius: 12,
    background: "rgba(255,90,31,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 6
  }
}, ">> ", "LOGO ASSETS"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 18
  }
}, "All five files live in ", /*#__PURE__*/React.createElement("code", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 14,
    padding: "2px 8px",
    background: "var(--ink-200)",
    borderRadius: 4
  }
}, "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-*"))), /*#__PURE__*/React.createElement("a", {
  href: "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-full-white.png",
  download: true,
  className: "link-mono",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    textDecoration: "none"
  }
}, "DOWNLOAD KIT \u2192"))), /*#__PURE__*/React.createElement(SGSection, {
  id: "color",
  eyebrow: "02 COLOR",
  title: "Ignite lives in the dark. Orange does the work.",
  sub: "The palette is deliberately tight \u2014 one orange that carries 90% of the brand work, one amber that sweetens it, one lime for the Spark sub-product, and a wide ink/paper system to hold it all together."
}, SG_COLOR_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
  key: g.title,
  style: {
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    marginBottom: 18
  }
}, ">> ", g.title), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16
  }
}, g.swatches.map(s => /*#__PURE__*/React.createElement(Swatch, {
  key: s.token,
  s: s
})))))), /*#__PURE__*/React.createElement(SGSection, {
  id: "type",
  eyebrow: "03 TYPOGRAPHY",
  title: "Four families. Strict roles.",
  sub: "No font soup. Every typeface in the system earns its place \u2014 and never trades jobs with another."
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
}, SG_FONTS.map(f => /*#__PURE__*/React.createElement(TypeSpec, {
  key: f.key,
  f: f
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    padding: 32,
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    background: "var(--ink-100)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 22
  }
}, ">> ", "TYPE SCALE"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 18
  }
}, [["Display XL", "--t-display-xl", "clamp(72→144)", 96], ["Display L", "--t-display-l", "clamp(56→96)", 72], ["Display M", "--t-display-m", "clamp(40→64)", 56], ["H1", "--t-h1", "44px", 44], ["H2", "--t-h2", "32px", 32], ["H3", "--t-h3", "22px", 22], ["Body L", "--t-body-l", "18px", 18], ["Body", "--t-body", "16px", 16], ["Eyebrow", "--t-eyebrow", "12px / 0.22em", 12, true]].map(([l, tok, spec, px, mono]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: "grid",
    gridTemplateColumns: "160px 1fr 200px",
    gap: 24,
    alignItems: "baseline",
    paddingBottom: 14,
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.16em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, l), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: mono ? "var(--font-mono)" : "var(--font-display)",
    fontSize: px,
    fontWeight: mono ? 500 : 700,
    letterSpacing: mono ? "0.22em" : "-0.025em",
    textTransform: mono ? "uppercase" : "none",
    lineHeight: 1.05,
    color: "var(--fg-1)"
  }
}, mono ? ">> LIVE ON-SITE" : "Brand activation"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-3)",
    textAlign: "right",
    letterSpacing: "0.04em"
  }
}, tok, /*#__PURE__*/React.createElement("br", null), spec)))))), /*#__PURE__*/React.createElement(SGSection, {
  id: "voice",
  eyebrow: "04 VOICE & TONE",
  title: "Veteran-built. Operator-direct. Slightly cocky.",
  sub: "We don't write like a marketing agency. We write like the people doing the work \u2014 short sentences, specific numbers, zero corporate haze."
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    marginBottom: 48
  }
}, [["Specific over flowery", "Say '850 events, 47 markets, 1.4M reached.' Not 'a strategic, scalable solution that drives meaningful impact.'"], ["Active, not passive", "Write 'We staffed it.' Not 'The activation was successfully executed by our team.'"], ["Short sentences", "Then longer ones, when the point earns the room to breathe. Vary the rhythm so it sounds like a person."], ["Receipts > claims", "Every promise should pair with a number, a market, or a brand name. If you can't, cut the claim."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    padding: 28,
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    color: "var(--ignite-500)",
    fontSize: 22,
    marginBottom: 14
  }
}, "\u25C9"), /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 19,
    letterSpacing: "-0.015em",
    marginBottom: 10
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0
  }
}, d)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 28,
    background: "rgba(107,228,134,0.06)",
    border: "1px solid rgba(107,228,134,0.3)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--success)",
    textTransform: "uppercase",
    marginBottom: 12
  }
}, "✓ ", "WE SAY"), /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: 0,
    paddingLeft: 18,
    fontSize: 15,
    lineHeight: 1.7,
    color: "var(--fg-1)"
  }
}, /*#__PURE__*/React.createElement("li", null, "\"Stop being your own VP of Everything.\""), /*#__PURE__*/React.createElement("li", null, "\"Murdering thirst, coast to coast.\""), /*#__PURE__*/React.createElement("li", null, "\"42,000+ vetted ambassadors. All 50 states.\""), /*#__PURE__*/React.createElement("li", null, "\"Awareness is a side effect. The goal is trial.\""))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 28,
    background: "rgba(255,105,105,0.06)",
    border: "1px solid rgba(255,105,105,0.3)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "#FF6969",
    textTransform: "uppercase",
    marginBottom: 12
  }
}, "× ", "WE DON'T"), /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: 0,
    paddingLeft: 18,
    fontSize: 15,
    lineHeight: 1.7,
    color: "var(--fg-2)"
  }
}, /*#__PURE__*/React.createElement("li", null, "\"Synergistic brand activation solutions.\""), /*#__PURE__*/React.createElement("li", null, "\"Elevating consumer experiences at scale.\""), /*#__PURE__*/React.createElement("li", null, "\"World-class team of marketing professionals.\""), /*#__PURE__*/React.createElement("li", null, "\"Driving meaningful impact through innovation.\""))))), /*#__PURE__*/React.createElement(SGSection, {
  id: "patterns",
  eyebrow: "05 PATTERNS",
  title: "The signal markers.",
  sub: "A small vocabulary of recurring graphic devices that show up across every page, deck, and spec sheet. Use them deliberately \u2014 never decoratively."
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20
  }
}, [{
  name: "Ops eyebrow",
  sample: /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", "AUSTIN // LIVE // 14 ON-SITE"),
  use: "Section starters. Live indicators. Tactical metadata. Always letter-spaced 0.22em uppercase mono."
}, {
  name: "Italic accent",
  sample: /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: "-0.02em"
    }
  }, "actually ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "moved"), " product"),
  use: "Italicize 2-3 words inside a headline and tint them Ignite. The signature headline move — use once per headline, never twice."
}, {
  name: "Bullseye target",
  sample: /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--fg-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)",
      fontSize: 32,
      marginRight: 8
    }
  }, "\u25C9"), " Active engagement"),
  use: "Used as a bullet/marker. Replaces dots and dashes when something is 'on' or 'targeted.'"
}, {
  name: "Bracket quote",
  sample: /*#__PURE__*/React.createElement("span", {
    className: "bracket-quote",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontStyle: "italic"
    }
  }, "field-tested receipts"),
  use: "ASCII-style framing for pulled quotes and key phrases. The brackets stay Spark lime."
}, {
  name: "Number stamp",
  sample: /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-stencil)",
      fontSize: 64,
      color: "var(--ignite-500)",
      lineHeight: 1
    }
  }, "07"),
  use: "Stencil numerals for service lanes, step counters, case-study indices. Sparingly."
}, {
  name: "Grid overlay",
  sample: /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: 100,
      background: "var(--ink-200)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    }
  })),
  use: "Subtle grid texture behind hero sections. 24-48px cell, 3-6% opacity — never louder."
}].map(p => /*#__PURE__*/React.createElement("div", {
  key: p.name,
  style: {
    padding: 24,
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "32px 24px",
    background: "var(--ink-000)",
    border: "1px solid var(--ink-400)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
    marginBottom: 18
  }
}, p.sample), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    marginBottom: 6
  }
}, p.name), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  }
}, p.use))))), /*#__PURE__*/React.createElement(SiteFooter, null));
Object.assign(window, {
  StyleGuidePage
});