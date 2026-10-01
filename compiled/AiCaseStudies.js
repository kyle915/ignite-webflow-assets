(function(){if (typeof window !== "undefined" && window.AiProof) return;
/* Proof band: OpenAI Dev Day + Claude Code workshop tour. Used on event staffing + trade show service pages. */
const AI_PROOF = [{
  slug: "openai-devday",
  brand: "OpenAI",
  logo: "https://kyle915.github.io/ignite-webflow-assets/assets/logo-openai-mark.png",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  alt: "Attendees seated for the OpenAI Dev Day 2026 keynote, with Ignite ushers on the floor",
  eyebrow: "DEV DAY 2026 // EVENT EXECUTION",
  big: "87",
  unit: "brand ambassadors on site",
  line: "Experiential product areas, keynote ushers, wayfinding, traffic management and F&B support, with lead and supervisor ambassadors across the venue."
}, {
  slug: "claude-code-workshops",
  brand: "Claude",
  logo: "https://kyle915.github.io/ignite-webflow-assets/assets/logo-claude.png",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/claude-workshops-atlanta-team.png",
  alt: "Ignite brand ambassadors at the registration desk for Claude Workshops in Atlanta",
  eyebrow: "CLAUDE CODE WORKSHOP TOUR // 12 CITIES",
  big: "12",
  unit: "city workshop tour",
  line: "Brand ambassador staffing and on-site execution at every stop, so presenters and developers can focus on the workshop."
}];
const AI_STRIP = [["https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-exterior.jpg", "OpenAI Dev Day 2026 entrance with oversized branded installation", "OPENAI // DEV DAY ENTRANCE"], ["https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-hall.jpg", "Open experiential hall at OpenAI Dev Day with lounge and product areas", "OPENAI // EXPERIENTIAL HALL"], ["https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg", "Keynote audience at OpenAI Dev Day 2026", "OPENAI // KEYNOTE USHERS"], ["https://kyle915.github.io/ignite-webflow-assets/assets/claude-workshops-registration.png", "Ignite ambassadors at the Claude registration desk with branded caps", "CLAUDE // REGISTRATION"], ["https://kyle915.github.io/ignite-webflow-assets/assets/claude-workshops-atlanta-team.png", "Ignite crew at Claude Workshops Atlanta registration", "CLAUDE // ATLANTA STOP"]];
const AiProof = ({
  accent = "#D6F35F",
  strip = false
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "AI Proof",
  style: {
    background: "#0A0B0D",
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820,
    marginBottom: 44
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: accent
  }
}, ">>", " RECEIPTS FROM THE AI FLOOR"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4.4vw,60px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "The AI labs ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: accent
  }
}, "staff with us.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)",
    maxWidth: 640
  }
}, "Developer conferences and workshop tours move fast and run on detail. Here's what we put on the floor for OpenAI and Claude.")), /*#__PURE__*/React.createElement("div", {
  className: "ai-proof-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gap: 16
  }
}, AI_PROOF.map(p => /*#__PURE__*/React.createElement("a", {
  key: p.slug,
  href: "/portfolio/" + p.slug,
  style: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    overflow: "hidden",
    color: "#fff",
    textDecoration: "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    aspectRatio: "16/10",
    overflow: "hidden",
    background: "#111"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: p.img,
  alt: p.alt,
  loading: "lazy",
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 16,
    top: 16,
    padding: "10px 14px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.94)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: p.logo,
  alt: p.brand,
  style: {
    height: 22,
    width: "auto",
    display: "block"
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "26px 26px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flex: 1
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    letterSpacing: "0.2em",
    color: "rgba(255,255,255,0.5)"
  }
}, p.eyebrow), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 64,
    lineHeight: 0.9,
    letterSpacing: "-0.04em",
    color: accent
  }
}, p.big), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)"
  }
}, p.unit)), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 15.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.7)"
  }
}, p.line), /*#__PURE__*/React.createElement("span", {
  style: {
    marginTop: "auto",
    paddingTop: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: accent
  }
}, "READ THE CASE STUDY \u2192"))))), strip && /*#__PURE__*/React.createElement("div", {
  className: "ai-strip",
  style: {
    marginTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(5,minmax(0,1fr))",
    gap: 10
  }
}, AI_STRIP.map(([src, alt, cap]) => /*#__PURE__*/React.createElement("figure", {
  key: src,
  style: {
    margin: 0,
    position: "relative",
    aspectRatio: "3/4",
    borderRadius: 12,
    overflow: "hidden",
    background: "#111",
    border: "1px solid rgba(255,255,255,0.1)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: alt,
  loading: "lazy",
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 8,
    right: 8,
    bottom: 8,
    padding: "5px 8px",
    borderRadius: 6,
    background: "rgba(10,11,13,0.78)",
    fontFamily: "var(--font-mono)",
    fontSize: 9.5,
    letterSpacing: "0.14em",
    color: "rgba(255,255,255,0.8)"
  }
}, cap)))), /*#__PURE__*/React.createElement("style", null, "@media (max-width:820px){.ai-proof-grid{grid-template-columns:1fr!important}.ai-strip{grid-template-columns:repeat(2,minmax(0,1fr))!important}}")));
Object.assign(window, {
  AiProof,
  AI_PROOF
});
})();
