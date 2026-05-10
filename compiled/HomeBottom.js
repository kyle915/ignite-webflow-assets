/* Featured case studies carousel + Core Difference + CTA footer */
const FEATURED_CASES = [{
  brand: "LIQUID DEATH",
  slug: "liquid-death",
  color: "#000",
  tagline: "Murdering thirst, coast to coast.",
  category: "Brand Ambassador Program",
  stats: [["850+", "Events"], ["47", "Markets"], ["1.4M", "Consumers reached"]],
  img: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp"
}, {
  brand: "WHITE CLAW",
  slug: "white-claw",
  color: "#003D7A",
  tagline: "Cracking the spirits launch code.",
  category: "National Sampling Rollout",
  stats: [["500+", "In-store demos"], ["20%", "Conversion rate"], ["12", "Markets in 90d"]],
  img: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg"
}, {
  brand: "MAS+",
  slug: "mas",
  color: "#E30613",
  tagline: "Street-level energy. Stadium-level reach.",
  category: "Street Sampling",
  stats: [["320", "Street events"], ["180K", "Samples"], ["6", "Stadium takeovers"]],
  img: window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png",
  imgPos: "center"
}];
const CaseStudyCarousel = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 56,
    gap: 32,
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
}, ">> OUR WORK // SELECTED"), /*#__PURE__*/React.createElement("h2", {
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
}, "Great brands deserve", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "exceptional"), " people.")), /*#__PURE__*/React.createElement("a", {
  href: "pages/work.html",
  className: "link-mono",
  style: {
    color: "var(--fg-2-inv)"
  }
}, "All case studies \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr",
    gap: 16
  }
}, FEATURED_CASES.map((c, i) => /*#__PURE__*/React.createElement("a", {
  key: c.slug,
  href: "pages/work.html#" + c.slug,
  style: {
    position: "relative",
    display: "block",
    borderRadius: 20,
    overflow: "hidden",
    minHeight: 520,
    background: c.color,
    color: "#fff",
    gridRow: i === 0 ? "span 1" : "auto",
    transition: "transform 240ms var(--ease-out)"
  },
  onMouseEnter: e => {
    e.currentTarget.style.transform = "translateY(-4px)";
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = "scale(1.04)";
  },
  onMouseLeave: e => {
    e.currentTarget.style.transform = "translateY(0)";
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = "scale(1)";
  }
}, /*#__PURE__*/React.createElement("img", {
  src: c.img,
  alt: c.brand,
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: c.imgPos || "center",
    transition: "transform 500ms var(--ease-out)",
    filter: "brightness(0.65) saturate(1.05)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85))"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    padding: 32,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    padding: "4px 8px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: 4,
    backdropFilter: "blur(8px)"
  }
}, "* 0", i + 1), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    opacity: 0.7
  }
}, c.category)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 13,
    letterSpacing: "0.12em",
    color: "#FFB627",
    marginBottom: 14
  }
}, c.brand), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: i === 0 ? "clamp(32px, 3vw, 44px)" : 26,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    marginBottom: 20,
    color: "#fff",
    textShadow: "0 2px 18px rgba(0,0,0,0.6)"
  }
}, c.tagline), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  }
}, c.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    color: "#FFB627",
    letterSpacing: "-0.02em",
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    opacity: 0.75,
    marginTop: 4
  }
}, l)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#FFB627"
  }
}, "Read case study \u2192"))))))));

/* Core difference — 4-col dark strip */
const CORE_DIFFERENCE = [{
  n: "01",
  t: "Veteran-owned, CPG-built",
  d: "Founded by seasoned CPG marketers (Red Bull, Showtime). We bring the discipline of our veteran roots into every activation."
}, {
  n: "02",
  t: "Truly full service",
  d: "Strategy to creative to field execution — one team, full accountability. No agency runaround."
}, {
  n: "03",
  t: "Retail-first, consumer-driven",
  d: "Activations that meet shoppers where they buy. Drive trial, conversion, and brand love at the point of decision."
}, {
  n: "04",
  t: "Nationwide scale",
  d: "42,000+ vetted ambassadors in all 50 states. Execute anywhere — quality high, results consistent."
}, {
  n: "05",
  t: "Tech enabled",
  d: "Spark gives you real-time dashboards, instant recaps, full visibility. No more waiting for reports."
}];
const CoreDifference = () => /*#__PURE__*/React.createElement("section", {
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
  opacity: 0.03
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
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> THE IGNITE CORE DIFFERENCE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 0.98,
    maxWidth: 820
  }
}, "Why brands stay", /*#__PURE__*/React.createElement("br", null), "for ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#FFB627"
  }
}, "years"), ", not quarters.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    padding: "12px 16px",
    borderRadius: 12,
    background: "rgba(255,90,31,0.1)",
    border: "1px solid rgba(255,90,31,0.3)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ignite-500)",
    alignItems: "center",
    gap: 10
  }
}, "\u2605 Veteran-Owned Since 2018")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 1,
    background: "var(--ink-400)",
    border: "1px solid var(--ink-400)",
    borderRadius: 16,
    overflow: "hidden"
  }
}, CORE_DIFFERENCE.map(c => /*#__PURE__*/React.createElement("div", {
  key: c.n,
  style: {
    background: "var(--ink-100)",
    padding: 28,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "background 200ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.background = "var(--ink-200)",
  onMouseLeave: e => e.currentTarget.style.background = "var(--ink-100)"
}, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, "* ", c.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 19,
    lineHeight: 1.15,
    letterSpacing: "-0.015em",
    marginBottom: 10
  }
}, c.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  }
}, c.d)))))));

/* Testimonial + CTA */
const HomeTestimonial = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "60px 0 120px",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> WHAT CLIENTS SAY"), /*#__PURE__*/React.createElement("blockquote", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(32px, 4vw, 54px)",
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    color: "var(--fg-1-inv)",
    margin: 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    fontSize: "1.4em",
    lineHeight: 0
  }
}, "\u201C"), "Ignite's team drove a ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "20% conversion rate"), " across 500+ in-store demos. We scaled from 3 markets to 10+ in under 90 days."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3-inv)"
  }
}, "MARKETING DIRECTOR \xB7 CPG BEVERAGE BRAND"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  }
}, [["Liquid Death", "Their execution and attention to detail sets them apart."], ["Total Wireless", "Their team is the secret to our success."], ["White Claw", "Ignite delivered — from creative to execution."], ["Krispy Krunchy", "They don't just staff events — they create unforgettable brand experiences."]].map(([b, q]) => /*#__PURE__*/React.createElement("div", {
  key: b,
  style: {
    padding: 20,
    borderRadius: 14,
    background: "var(--paper-000)",
    border: "1px solid var(--paper-200)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 160
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "var(--fg-2-inv)",
    margin: 0,
    fontStyle: "italic"
  }
}, "\u201C", q, "\u201D"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, "\u25C9 ", b)))))));

/* Final CTA */
const FinalCTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_chrome_blob_large_png || "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-blob-large.png",
  style: {
    position: "absolute",
    right: "-10%",
    top: "50%",
    transform: "translateY(-50%)",
    width: "55%",
    opacity: 0.3,
    mixBlendMode: "screen",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.03
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(56px, 9vw, 144px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    maxWidth: 1200
  }
}, "Let's build the field team your brand ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "deserves"), "."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    display: "flex",
    gap: 14,
    alignItems: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(AccentBtn, {
  size: "lg",
  onClick: () => location.href = "pages/contact.html"
}, "Request a quote"), /*#__PURE__*/React.createElement(GhostBtn, {
  size: "lg",
  onClick: () => location.href = "pages/contact.html?urgent=1",
  icon: /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "#FF6969"
    }
  }, "\u25CF")
}, "Request staff now"), /*#__PURE__*/React.createElement("a", {
  href: "pages/spark.html",
  style: {
    marginLeft: 8,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#FFB627"
  }
}, "OR TOUR SPARK \u2192"))));
Object.assign(window, {
  CaseStudyCarousel,
  CoreDifference,
  HomeTestimonial,
  FinalCTA
});