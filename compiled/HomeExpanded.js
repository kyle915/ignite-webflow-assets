(function(){if (typeof window !== "undefined" && window.HomeExpanded) return;
/* Homepage — "Beyond the field" band surfacing the expanded service stack.
   Pure internal-linking + SEO: every card deep-links to a real page. */

const HOME_EXPANDED = [{
  n: "08",
  title: "Sales & Distribution",
  accent: "#D7453E",
  sub: "Fractional CPG sales — brokers, buyer pitches, trade, and distribution that sticks.",
  tags: ["Fractional Sales", "Broker Mgmt", "Buyer Pitch", "Trade", "Retail Readiness"],
  href: "/services/fractional-sales-team",
  foot: "fractional sales team"
}, {
  n: "09",
  title: "AI Management",
  accent: "#2DE2E6",
  sub: "We run the AI layer of your marketing — recaps, forecasting, creative, audience scoring.",
  tags: ["Recap Automation", "Forecasting", "Vision OOS", "Audience"],
  href: "/services/ai-management",
  foot: "ai management"
}, {
  n: "10",
  title: "Spark Retail Execution",
  accent: "#D6F35F",
  sub: "Crowdsourced in-store audits, OOS + price checks — run by a vetted 257K field force.",
  tags: ["Audits", "OOS Detection", "Photo Proof", "Live Board"],
  href: "/spark-retail",
  foot: "spark retail"
}, {
  n: "11",
  title: "Creative & Content",
  accent: "#FFB627",
  sub: "A studio with a fab shop attached, plus content crews that leave with launch-ready assets.",
  tags: ["Creative Studio", "Content Capture", "Influencer", "Design"],
  href: "/services/creative-design-studio",
  foot: "creative studio"
}, {
  n: "12",
  title: "Hospitality & Events",
  accent: "#D4AF7F",
  sub: "White-glove wedding + private-event staffing and in-house group & event travel.",
  tags: ["Weddings", "Private Events", "Group Travel", "VIP"],
  href: "/weddings",
  foot: "hospitality"
}, {
  n: "13",
  title: "Sponsorship & Partnerships",
  accent: "#D7453E",
  sub: "Deal sourcing to on-site activation — sponsorships managed end to end, measured for ROI.",
  tags: ["Sponsorship", "Partnerships", "Activation", "Measurement"],
  href: "/services/sponsorship-partnerships",
  foot: "sponsorship"
}];
const ExpandedCard = ({
  s
}) => /*#__PURE__*/React.createElement("a", {
  href: s.href,
  style: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 240,
    padding: 28,
    borderRadius: 16,
    textDecoration: "none",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012))",
    border: "1px solid var(--ink-400)",
    overflow: "hidden",
    transition: "transform 240ms var(--ease-out), border-color 240ms"
  },
  onMouseEnter: e => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.borderColor = s.accent + "88";
  },
  onMouseLeave: e => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "var(--ink-400)";
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: `linear-gradient(90deg, ${s.accent}, transparent 75%)`
  }
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 22,
    letterSpacing: "0.04em",
    color: s.accent
  }
}, s.n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 16,
    color: s.accent
  }
}, "\u2192")), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(24px, 2vw, 30px)",
    letterSpacing: "-0.025em",
    lineHeight: 1.02,
    color: "var(--fg-1)"
  }
}, s.title), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 12,
    fontSize: 14.5,
    lineHeight: 1.5,
    color: "var(--fg-2)"
  }
}, s.sub)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    gap: 6
  }
}, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
  key: t,
  style: {
    padding: "4px 9px",
    borderRadius: 4,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontFamily: "var(--font-mono)",
    fontSize: 9.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.8)",
    whiteSpace: "nowrap"
  }
}, t))));
const HomeExpanded = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "0 0 120px",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 960,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, ">>", " BEYOND THE FIELD // ONE PARTNER"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    color: "var(--fg-1)",
    maxWidth: 760
  }
}, "Field execution is the floor, not the ceiling. Sales, AI, retail intelligence, creative, hospitality, and sponsorships \u2014 run by the same operators, so the brief and the receipts never get lost in a handoff.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16
  }
}, HOME_EXPANDED.map(s => /*#__PURE__*/React.createElement(ExpandedCard, {
  key: s.n,
  s: s
})))));
Object.assign(window, {
  HomeExpanded,
  HOME_EXPANDED
});
})();
