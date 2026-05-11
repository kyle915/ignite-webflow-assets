/* Homepage services taxonomy — bold dark grid w/ photo backgrounds.
   Maps 1:1 to the 7-page service nav: each card → its dedicated page. */

const HOME_SERVICES = [{
  n: "01",
  slug: "experiential-marketing",
  flag: true,
  title: "Experiential Marketing",
  sub: "Brand activations, festival footprints, immersive installations",
  bullets: ["Festival Activations", "Pop-Ups", "Brand Activations", "Immersive Installations", "Campus Tours"],
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg",
  imgPos: "center 40%",
  accent: "#FF5A1F"
}, {
  n: "02",
  slug: "mobile-tours",
  flag: true,
  title: "Mobile Marketing Tours",
  sub: "Ad trucks, branded bikes, sprinter vans, sampling tours",
  bullets: ["Ad Trucks", "Mobile Billboards", "Branded Bikes", "Sprinter Vans", "Roadshows"],
  img: window.__resources?.r_68962c63c89c6cf0f46a6b66_SMALLS93_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg",
  accent: "#FFB627"
}, {
  n: "03",
  slug: "fabrication-builds",
  flag: true,
  title: "Fabrication & Builds",
  sub: "Scenic fab, modular activations, touring builds, photo ops",
  bullets: ["Custom Builds", "Scenic Fabrication", "Pop-Up Construction", "Modular Activations", "Touring Builds"],
  img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80",
  imgPos: "center 40%",
  accent: "#FF5A1F"
}, {
  n: "04",
  slug: "event-staffing",
  title: "Event Staffing",
  sub: "42K+ vetted ambassadors, all 50 states, 48hr rush",
  bullets: ["Brand Ambassadors", "Street Teams", "Bilingual Staff", "Tour Managers"],
  img: window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg",
  imgPos: "center 30%",
  accent: "#FFB627"
}, {
  n: "05",
  slug: "product-sampling",
  title: "Product Sampling",
  sub: "GPS-verified counts, retail demos, street + event sampling",
  bullets: ["In-Store Sampling", "Retail Demo Programs", "Street Sampling", "Campus Sampling"],
  img: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp",
  imgPos: "center",
  accent: "#D6F35F"
}, {
  n: "06",
  slug: "trade-shows",
  title: "Trade Show Support",
  sub: "Booth staffing, lead capture, demos, full show management",
  bullets: ["Booth Staffing", "Lead Capture", "Show Management", "Demos"],
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/pressreader-tradeshow.webp",
  imgPos: "center 35%",
  accent: "#FFB627"
}, {
  n: "07",
  slug: "promotional-products",
  title: "Promotional Products & Premiums",
  sub: "Branded merch, swag kits, custom apparel, premium fulfillment",
  bullets: ["Branded Merchandise", "Swag Kits", "Custom Apparel", "Premium Fulfillment"],
  img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80",
  imgPos: "center",
  accent: "#FF5A1F"
}];
const ServiceCard = ({
  s,
  large = false
}) => /*#__PURE__*/React.createElement("a", {
  href: `pages/services-${s.slug}.html`,
  style: {
    position: "relative",
    display: "block",
    borderRadius: 18,
    overflow: "hidden",
    background: "#0F1014",
    minHeight: large ? 460 : 320,
    transition: "transform 240ms var(--ease-out)",
    border: "1px solid rgba(255,255,255,0.06)"
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
  src: s.img,
  alt: s.title,
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: s.imgPos || "center",
    transition: "transform 600ms var(--ease-out)",
    filter: "brightness(0.55) saturate(1.05) contrast(1.05)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, rgba(10,11,13,0.15) 0%, rgba(10,11,13,0.55) 50%, rgba(10,11,13,0.95) 100%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 24,
    left: 24,
    fontFamily: "var(--font-stencil)",
    fontSize: large ? 28 : 22,
    letterSpacing: "0.04em",
    color: s.accent,
    opacity: 0.95
  }
}, s.n), s.flag && /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 26,
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
    padding: large ? 36 : 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: large ? "clamp(34px, 3.3vw, 48px)" : "clamp(22px, 2vw, 28px)",
    letterSpacing: "-0.025em",
    lineHeight: 1,
    marginBottom: 12
  }
}, s.title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: large ? 16 : 13.5,
    lineHeight: 1.45,
    color: "rgba(255,255,255,0.78)",
    margin: 0,
    marginBottom: large ? 20 : 14,
    maxWidth: large ? 460 : "100%"
  }
}, s.sub), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginBottom: large ? 24 : 16
  }
}, s.bullets.slice(0, large ? 5 : 3).map(b => /*#__PURE__*/React.createElement("span", {
  key: b,
  style: {
    padding: "4px 9px",
    borderRadius: 4,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)",
    whiteSpace: "nowrap"
  }
}, b)), !large && s.bullets.length > 3 && /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "4px 9px",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.6)",
    textTransform: "uppercase"
  }
}, "+", s.bullets.length - 3)), /*#__PURE__*/React.createElement("div", {
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
}, "/ ", s.slug.replace(/-/g, " · ")))));
const ServicesGrid = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "140px 0 120px",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid var(--ink-400)"
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
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 64,
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
}, ">>", " CAPABILITIES // 07 SERVICE LANES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(48px, 6.5vw, 96px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.94,
    maxWidth: 1100
  }
}, "Field marketing,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#FFB627"
  }
}, "full-stack.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 640
  }
}, "From strategy to fabrication to 42,000 ambassadors on the ground \u2014 we operate every lane of activation under one roof.")), /*#__PURE__*/React.createElement("a", {
  href: "/ignite-services",
  style: {
    padding: "14px 22px",
    borderRadius: 999,
    border: "1px solid var(--ink-400)",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-1)",
    transition: "border-color 200ms, background 200ms"
  },
  onMouseEnter: e => {
    e.currentTarget.style.borderColor = "var(--ignite-500)";
    e.currentTarget.style.background = "rgba(255,90,31,0.08)";
  },
  onMouseLeave: e => {
    e.currentTarget.style.borderColor = "var(--ink-400)";
    e.currentTarget.style.background = "transparent";
  }
}, "ALL CAPABILITIES \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 16,
    gridAutoRows: "minmax(0, auto)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 2"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[0],
  large: true
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 2"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[1],
  large: true
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 2"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[2],
  large: true
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 3"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[3]
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 3"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[4]
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 3"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[5]
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: "span 3"
  }
}, /*#__PURE__*/React.createElement(ServiceCard, {
  s: HOME_SERVICES[6]
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    padding: "26px 32px",
    borderRadius: 14,
    background: "linear-gradient(90deg, rgba(255,90,31,0.06), rgba(214,243,95,0.04))",
    border: "1px solid var(--ink-400)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "WRAPPED AROUND EVERY ENGAGEMENT"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "-0.015em"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "Creative & Strategy"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-3)",
    margin: "0 14px"
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#FFB627"
  }
}, "Logistics & Production"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-3)",
    margin: "0 14px"
  }
}, "\xB7"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--spark-500)"
  }
}, "Spark Tech Stack"))), /*#__PURE__*/React.createElement("a", {
  href: "/ignite-services",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-2)"
  }
}, "SEE THE FULL CAPABILITIES MAP \u2192"))));
Object.assign(window, {
  ServicesGrid,
  HOME_SERVICES
});