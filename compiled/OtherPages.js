/* Fractional, Work, About, Contact page components */
const {
  useState: fpState
} = React;

/* ---------- FRACTIONAL ---------- */
const FractionalHero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: "var(--ink-000)",
    padding: "140px 0 100px",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.04
}), /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_chrome_flow_vertical_png || "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-flow-vertical.png",
  style: {
    position: "absolute",
    right: "-5%",
    top: "10%",
    width: 380,
    opacity: 0.22,
    mixBlendMode: "screen"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, "* CPG SALES + EXPERIENTIAL MARKETING"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(64px, 9vw, 140px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    maxWidth: 1200
  }
}, "Stop being your own", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "VP of Everything.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 640
  }
}, "Your fractional CPG Sales & Marketing team. Strategy, retail execution, and activations \u2014 without the full-time overhead. No more wearing every hat."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: "flex",
    gap: 14
  }
}, /*#__PURE__*/React.createElement(AccentBtn, {
  size: "lg",
  onClick: () => location.href = "/contact"
}, "Book a strategy call"), /*#__PURE__*/React.createElement(GhostBtn, {
  size: "lg"
}, "See how it works"))));
const FractionalTiers = () => /*#__PURE__*/React.createElement("section", {
  id: "tiers",
  className: "paper",
  style: {
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">> THREE TIERS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "var(--fg-1-inv)",
    maxWidth: 900
  }
}, "Pick your level", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "embedded.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16
  }
}, [{
  t: "ADVISORY",
  tag: "Strategic counsel",
  d: "Weekly strategic sessions. Market intelligence. We advise; you execute.",
  feats: ["Weekly strategy calls", "Retail channel guidance", "Activation playbook", "Month-to-month after 3 mo"]
}, {
  t: "EMBEDDED",
  tag: "Fractional VP",
  d: "Fractional VP of Sales + Marketing. Your org chart has our name on it.",
  feats: ["Embedded team lead", "Retail + field execution", "Full reporting cadence", "Attends your team meetings"],
  highlight: true
}, {
  t: "LEADERSHIP",
  tag: "Turnkey engagement",
  d: "We run it. Outsourced sales and marketing leadership with P&L ownership.",
  feats: ["Full-stack exec team", "Revenue accountability", "Agency + activations bundled", "Quarterly business reviews"]
}].map((tier, i) => /*#__PURE__*/React.createElement("div", {
  key: tier.t,
  style: {
    padding: 36,
    borderRadius: 20,
    minHeight: 480,
    background: tier.highlight ? "var(--ink-000)" : "var(--paper-000)",
    color: tier.highlight ? "var(--fg-1)" : "var(--fg-1-inv)",
    border: "1px solid " + (tier.highlight ? "var(--ink-400)" : "var(--paper-200)"),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, tier.highlight && /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 16,
    right: 16,
    padding: "4px 10px",
    background: "var(--ignite-500)",
    color: "#fff",
    borderRadius: 999,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em"
  }
}, "MOST POPULAR"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 16,
    letterSpacing: "0.08em",
    color: tier.highlight ? "#FFB627" : "var(--ignite-500)",
    marginBottom: 24
  }
}, "0" + (i + 1), " \xB7 ", tier.t), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 40,
    letterSpacing: "-0.025em",
    lineHeight: 1.05,
    marginBottom: 14,
    textWrap: "balance"
  }
}, tier.tag), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 1.5,
    color: tier.highlight ? "var(--fg-2)" : "var(--fg-2-inv)"
  }
}, tier.d), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "24px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, tier.feats.map(f => /*#__PURE__*/React.createElement("li", {
  key: f,
  style: {
    fontSize: 14,
    display: "flex",
    gap: 8,
    color: tier.highlight ? "var(--fg-2)" : "var(--fg-2-inv)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: tier.highlight ? "#FFB627" : "var(--ignite-500)"
  }
}, "\u2192"), " ", f)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement(AccentBtn, {
  onClick: () => location.href = "/contact",
  style: {
    width: "100%",
    justifyContent: "center"
  }
}, "Get started")))))));
const FractionalProcess = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> HOW IT WORKS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 1
  }
}, "From kickoff to", /*#__PURE__*/React.createElement("br", null), "shelves stocked in ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "30 days.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  }
}, [["01", "Strategy Call", "We learn your brand, your gaps, and your goals. No pitch deck — just an honest conversation."], ["02", "Scope + Retainer", "Custom retainer — Sales, Marketing, or both. Month-to-month after the first 3 months."], ["03", "We Execute. You Grow.", "Meetings get booked, shelves get stocked, activations get executed — you get your time back."]].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
  key: n,
  style: {
    padding: 32,
    background: "var(--ink-100)",
    borderRadius: 16,
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 48,
    color: "var(--ignite-500)",
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 22
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)"
  }
}, d))))));

/* ---------- WORK ---------- */
const WORK_CASES = [{
  slug: "liquid-death",
  brand: "LIQUID DEATH",
  tagline: "Murdering thirst, coast to coast.",
  category: "Brand Ambassador Program",
  stats: [["850+", "Events"], ["47", "Markets"], ["1.4M", "Reached"]],
  img: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp"
}, {
  slug: "white-claw",
  brand: "WHITE CLAW",
  tagline: "Cracking the spirits launch code.",
  category: "National Sampling Rollout",
  stats: [["500+", "Demos"], ["20%", "Conversion"], ["12", "Markets"]],
  img: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg"
}, {
  slug: "mas",
  brand: "MAS+",
  tagline: "Street-level energy. Stadium-level reach.",
  category: "Street Sampling",
  stats: [["320", "Events"], ["180K", "Samples"], ["6", "Stadiums"]],
  img: window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png"
}, {
  slug: "dude-wipes",
  brand: "DUDE WIPES",
  tagline: "Everywhere guys hang out.",
  category: "Experiential Tour",
  stats: [["120", "Events"], ["85K", "Samples"], ["18", "Markets"]],
  img: window.__resources?.r_68968fb1a0824c0e0bb6223b_SMALLS94_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68968fb1a0824c0e0bb6223b_SMALLS94_11_15_2024_Brandy_Wilson_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_2.jpg"
}, {
  slug: "total-wireless",
  brand: "TOTAL WIRELESS",
  tagline: "Retail activation at scale.",
  category: "In-Store Demos",
  stats: [["240", "Stores"], ["22", "Markets"], ["15%", "Lift"]],
  img: window.__resources?.r_68962d00b2b16cc7bb7a21c8_TOTAL53_07_26_2 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962d00b2b16cc7bb7a21c8_TOTAL53_07_26_2025_Deborah_Camp_0feb1a50-ac63-c910-7335-bb5ff6c1b927_8.jpg"
}, {
  slug: "mark-anthony",
  brand: "MARK ANTHONY",
  tagline: "Sampling done with discipline.",
  category: "National Sampling",
  stats: [["450+", "Events"], ["32", "Markets"], ["210K", "Samples"]],
  img: window.__resources?.r_68962cb097c7a94d5a0ff101_MAB7_04_18_2025 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cb097c7a94d5a0ff101_MAB7_04_18_2025_Claire_Thornhill_59e801e1-deb8-c738-9d0e-289faaee2d6c_18.jpg"
}];
const WorkHero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0 80px",
    background: "var(--ink-000)",
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> OUR WORK"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(64px, 9vw, 140px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    maxWidth: 1300
  }
}, "Brands that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "actually moved"), " product."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32,
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 700
  }
}, "Every program we run is measured in conversions, samples distributed, and markets activated \u2014 not impressions. Here's a selection.")));
const WorkGrid = () => /*#__PURE__*/React.createElement("section", {
  className: "paper",
  style: {
    padding: "80px 0 120px"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20
  }
}, WORK_CASES.map((c, i) => /*#__PURE__*/React.createElement("a", {
  key: c.slug,
  id: c.slug,
  href: "#",
  style: {
    position: "relative",
    display: "block",
    borderRadius: 20,
    overflow: "hidden",
    minHeight: 480,
    color: "#fff",
    transition: "transform 240ms var(--ease-out)"
  },
  onMouseEnter: e => {
    e.currentTarget.style.transform = "translateY(-4px)";
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = "scale(1.05)";
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
    transition: "transform 600ms var(--ease-out)",
    filter: "brightness(0.7) saturate(1.1)"
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
    padding: 36,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between"
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
    opacity: 0.8
  }
}, c.category)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 14,
    letterSpacing: "0.12em",
    color: "#FFB627",
    marginBottom: 14
  }
}, c.brand), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 34,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    marginBottom: 20
  }
}, c.tagline), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 24
  }
}, c.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 26,
    color: "#FFB627",
    letterSpacing: "-0.02em",
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    opacity: 0.75,
    marginTop: 4
  }
}, l)))))))))));

/* ---------- ABOUT ---------- */
const AboutHero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0 80px",
    background: "var(--ink-000)",
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ABOUT IGNITE"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(64px, 9vw, 140px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.92,
    maxWidth: 1400
  }
}, "Veteran-owned.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "CPG-built.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--fg-2)"
  }
}, "Ignite was founded in 2018 by ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "var(--fg-1)"
  }
}, "Kyle Christiansen"), ", a 20+ year CPG marketing veteran with leadership stints at Red Bull and Showtime. The mission: bring the discipline of veteran-owned operations to an industry that desperately needed it."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--fg-2)"
  }
}, "Eight years later, we're a nationwide network of ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "var(--fg-1)"
  }
}, "42,000+ brand ambassadors"), " running 5,000+ activations a year for the brands that define culture \u2014 and the agency-run Spark platform has changed how clients see field marketing forever."))));
const AboutStats = () => /*#__PURE__*/React.createElement("section", {
  id: "impact",
  className: "paper",
  style: {
    padding: "120px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">> OUR IMPACT"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "var(--fg-1-inv)",
    maxWidth: 900
  }
}, "The numbers, in a word:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "big.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20
  }
}, [["42,000+", "Vetted ambassadors"], ["5,000+", "Activations per year"], ["200+", "Brands served"], ["50", "States covered"], ["8", "Years in business"], ["25M+", "Consumers reached"], ["87%", "Client retention"], ["20%+", "Avg demo conversion"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: 24,
    background: "var(--paper-000)",
    border: "1px solid var(--paper-200)",
    borderRadius: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 48,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "var(--fg-1-inv)"
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3-inv)"
  }
}, l))))));
const AboutValues = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "120px 0",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> WHAT WE STAND FOR"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    maxWidth: 900
  }
}, "Discipline, creativity,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#FFB627"
  }
}, "and receipts.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  }
}, [["Show up ready", "We prep, brief, and rehearse. Ambassadors are trained on your brand — not reading a script off their phone."], ["Prove it, don't pitch it", "Every program is measured. Spark shows you what happened in real time. No post-event PDFs."], ["Move the product", "Awareness is a side effect. The goal is trial, conversion, and repeat purchase. We optimize for that."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    padding: 32,
    background: "var(--ink-100)",
    borderRadius: 16,
    border: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    color: "var(--ignite-500)",
    fontSize: 28,
    marginBottom: 20
  }
}, "\u25C9"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 22,
    marginBottom: 12
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)"
  }
}, d))))));

/* ---------- CONTACT ---------- */
const ContactForm = () => {
  const urgent = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("urgent");
  const [submitted, setSubmitted] = fpState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "140px 0 120px",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      minHeight: "90vh"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", urgent ? "URGENT STAFFING REQUEST" : "GET IN TOUCH"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(44px, 6vw, 88px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.95
    }
  }, urgent ? /*#__PURE__*/React.createElement(React.Fragment, null, "Need staff ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#FF6969"
    }
  }, "now?")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Let's build", /*#__PURE__*/React.createElement("br", null), "something ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "big."))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 480
    }
  }, urgent ? "We staff short-lead requests in as little as 48 hours across our 50-state network. Tell us when, where, and how many." : "Whether you're scoping a national tour or just trying to get sampling right in three markets, we'll respond within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, [["OFFICE", "Based nationwide · All 50 states"], ["EMAIL", "hello@igniteproductions.co"], ["CERTIFIED", "Veteran-Owned Small Business (VOSB)"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement(OpsLine, null, "* " + k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontSize: 17
    }
  }, v))))), /*#__PURE__*/React.createElement("div", null, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      background: "rgba(214,243,95,0.08)",
      border: "1px solid rgba(214,243,95,0.3)",
      borderRadius: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12
    }
  }, "\u25C9"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: "-0.02em"
    }
  }, "We'll be in touch."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: "var(--fg-2)"
    }
  }, "Response within one business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      padding: 32,
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [["Name", "text", "name"], ["Company", "text", "company"], ["Email", "email", "email"]].map(([l, ty, n]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, l), /*#__PURE__*/React.createElement("input", {
    required: true,
    name: n,
    type: ty,
    style: {
      width: "100%",
      marginTop: 6,
      padding: "12px 14px",
      background: "var(--ink-300)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      borderRadius: 8,
      fontFamily: "var(--font-body)",
      fontSize: 15
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, "What do you need?"), /*#__PURE__*/React.createElement("select", {
    name: "need",
    style: {
      width: "100%",
      marginTop: 6,
      padding: "12px 14px",
      background: "var(--ink-300)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      borderRadius: 8,
      fontFamily: "var(--font-body)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("option", null, "National sampling program"), /*#__PURE__*/React.createElement("option", null, "Experiential activation / tour"), /*#__PURE__*/React.createElement("option", null, "Event staffing (short-lead)"), /*#__PURE__*/React.createElement("option", null, "Fractional CPG leadership"), /*#__PURE__*/React.createElement("option", null, "Spark platform demo"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, "Tell us more"), /*#__PURE__*/React.createElement("textarea", {
    name: "notes",
    rows: "4",
    style: {
      width: "100%",
      marginTop: 6,
      padding: "12px 14px",
      background: "var(--ink-300)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      borderRadius: 8,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(AccentBtn, {
    size: "lg",
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 8
    }
  }, urgent ? "Request staff now" : "Send it"))))));
};
Object.assign(window, {
  FractionalHero,
  FractionalTiers,
  FractionalProcess,
  WorkHero,
  WorkGrid,
  AboutHero,
  AboutStats,
  AboutValues,
  ContactForm
});