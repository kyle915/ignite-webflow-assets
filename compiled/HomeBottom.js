(function(){if (typeof window !== "undefined" && window.CaseStudyCarousel) return;
/* Featured case studies carousel + Featured by Close + Core Difference + CTA footer */
const FEATURED_CASES = [{
  brand: "OPENAI",
  slug: "openai-devday",
  color: "#0B1A14",
  tagline: "87 ambassadors. One Dev Day.",
  category: "Event Execution · Brand Ambassador Staffing",
  stats: [["87", "Ambassadors"], ["5", "Role areas"], ["2026", "Dev Day"]],
  img: window.__resources?.r_assets_openai_devday_keynote_jpg || "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  logo: window.__resources?.r_assets_logo_openai_mark_png || "https://kyle915.github.io/ignite-webflow-assets/assets/logo-openai-mark.png"
}, {
  brand: "TORCH THC",
  slug: "torch-thc",
  color: "#2A0E07",
  tagline: "National retail, planned to the shelf.",
  category: "National Retail Marketing · Field Activations",
  stats: [["2,500+", "Activations / yr"], ["National", "U.S. retail"], ["1", "Agency"]],
  img: window.__resources?.r_assets_torch_thc_kings_liquor_activation_png || "https://kyle915.github.io/ignite-webflow-assets/assets/torch-thc-kings-liquor-activation.png",
  imgPos: "center 30%",
  logo: window.__resources?.r_assets_logo_torch_thc_png || "https://kyle915.github.io/ignite-webflow-assets/assets/logo-torch-thc.png"
}, {
  brand: "BREW DR.",
  slug: "brew-dr",
  color: "#06282B",
  tagline: "From the Pacific Northwest to new markets.",
  category: "Retail Sampling Program",
  stats: [["~150", "Demos / month"], ["PNW+", "Expanding"], ["1", "Partner"]],
  img: window.__resources?.r_assets_brewdr_king_soopers_demo_jpg || "https://kyle915.github.io/ignite-webflow-assets/assets/brewdr-king-soopers-demo.jpg",
  imgPos: "center 40%",
  logo: window.__resources?.r_assets_logo_brew_dr_png || "https://kyle915.github.io/ignite-webflow-assets/assets/logo-brew-dr.png"
}, {
  brand: "LIQUID DEATH",
  slug: "liquid-death",
  color: "#000",
  tagline: "Murdering thirst, coast to coast.",
  category: "Experiential · Field Events · Retail Sampling",
  stats: [["1,000+", "Retail demos / yr"], ["Nationwide", "Coverage"], ["2018", "Partner since"]],
  img: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp",
  logo: window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"
}, {
  brand: "WHITE CLAW",
  slug: "white-claw",
  color: "#003D7A",
  tagline: "Cracking the spirits launch code.",
  category: "National Sampling Rollout",
  stats: [["500+", "In-store demos"], ["20%", "Conversion rate"], ["12", "Markets in 90d"]],
  img: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg",
  logo: window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"
}, {
  brand: "MAS+",
  slug: "mas",
  color: "#E30613",
  tagline: "Street-level energy. Stadium-level reach.",
  category: "Street Sampling",
  stats: [["320", "Street events"], ["180K", "Samples"], ["6", "Stadium takeovers"]],
  img: window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png",
  imgPos: "center",
  logo: window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp"
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
  href: "/work",
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
  href: "/portfolio/" + c.slug,
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
  },
  loading: "lazy",
  decoding: "async"
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
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
}, c.logo ? /*#__PURE__*/React.createElement("img", {
  src: c.logo,
  alt: c.brand,
  style: {
    height: "auto",
    maxHeight: 96,
    width: "auto",
    maxWidth: 220,
    display: "block",
    objectFit: "contain",
    filter: "brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0,0,0,0.6))"
  },
  loading: "lazy",
  decoding: "async"
}) : /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(26px,3vw,44px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "#fff",
    margin: "12px 0"
  }
}, c.brand)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#FFB627",
    marginBottom: 12
  }
}, c.category), /*#__PURE__*/React.createElement("h3", {
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
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "9px 15px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.5)",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(6px)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#fff",
    whiteSpace: "nowrap"
  }
}, "View case study ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    lineHeight: 1
  }
}, "\u2192")))))))));

/* Core difference — 4-col dark strip */
const CORE_DIFFERENCE = [{
  n: "01",
  t: "Veteran-owned, CPG-built",
  d: "Founded by seasoned CPG marketers (Red Bull, Showtime). We bring the discipline of our veteran roots into every activation."
}, {
  n: "02",
  t: "Truly full service",
  d: "Strategy to creative to field execution, one team, full accountability. No agency runaround."
}, {
  n: "03",
  t: "Retail-first, consumer-driven",
  d: "Activations that meet shoppers where they buy. Drive trial, conversion, and brand love at the point of decision."
}, {
  n: "04",
  t: "Nationwide scale",
  d: "257,000+ vetted ambassadors in all 50 states. Execute anywhere, quality high, results consistent."
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
}, /*#__PURE__*/React.createElement(Container, {
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
}, "years"), ", not quarters.")), /*#__PURE__*/React.createElement("a", {
  href: "/about",
  className: "link-mono",
  style: {
    color: "var(--fg-2)",
    flexShrink: 0
  }
}, "Learn more about Ignite \u2192")), /*#__PURE__*/React.createElement("div", {
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
    gridTemplateColumns: "1fr 1.5fr",
    gap: 80,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> WHAT CLIENTS SAY"), /*#__PURE__*/React.createElement("blockquote", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-serif)",
    fontWeight: 500,
    fontSize: "clamp(32px, 4vw, 54px)",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
    color: "var(--fg-1-inv)",
    margin: 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    fontSize: "1.0em",
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
}, [["Liquid Death", "Their execution and attention to detail sets them apart."], ["Total Wireless", "Their team is the secret to our success."], ["White Claw", "Ignite delivered, from creative to execution."], ["Krispy Krunchy", "They don't just staff events, they create unforgettable brand experiences."]].map(([b, q]) => /*#__PURE__*/React.createElement("div", {
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
    fontFamily: "var(--font-serif)",
    fontSize: 32,
    lineHeight: 1.45,
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

/* Final CTA — ambassador graphic emerging over a full-width card */
const FinalCTA = () => /*#__PURE__*/React.createElement("section", {
  className: "svc-final",
  style: {
    position: "relative",
    padding: "84px 0 96px",
    background: "var(--ink-000)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("style", null, `
      .svc-final-stage { position: relative; }
      .svc-final-card { position: relative; width: 100%;
        border: 1px solid rgba(255,255,255,0.14); border-radius: 32px;
        background: linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012) 60%, rgba(255,255,255,0));
        padding: 48px 56px 0; z-index: 1; }
      .svc-final-woman { position: absolute; right: -60px; top: 50%; transform: translateY(-50%);
        height: 600px; width: auto; max-width: none; z-index: 2; pointer-events: none; user-select: none; }
      .svc-final-ctas { position: relative; margin-top: 34px; transform: translateY(50%);
        display: flex; gap: 14px; width: max-content; z-index: 3; }
      @media (max-width: 1024px) {
        .svc-final-card { width: 100%; padding: 40px 36px 0; }
        .svc-final-woman { right: -100px; height: 520px; }
      }
      @media (max-width: 720px) {
        .svc-final { padding: 0 0 72px; }
        .svc-final-stage { display: flex; flex-direction: column; }
        .svc-final-woman { order: -1; position: relative; right: auto; top: auto; transform: none; display: block;
          height: 420px; width: 100%; max-width: 100%; object-fit: cover; object-position: 88% 50%;
          margin: 0 auto 20px; }
        .svc-final-card { position: relative; width: 100%; padding: 30px 22px 30px; border-radius: 22px; }
        .svc-final-ctas { transform: none; margin-top: 24px; width: auto;
          flex-direction: column; align-items: stretch; }
        .svc-final-ctas a { justify-content: center; text-align: center; }
      }
    `), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "svc-final-stage"
}, /*#__PURE__*/React.createElement("div", {
  className: "svc-final-card"
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, ">>", " READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(30px, 3.7vw, 59px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98,
    margin: "22px 0 0",
    maxWidth: 560,
    color: "var(--fg-1)"
  }
}, "Let's build the field team your brand", " ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--spark-500)"
  }
}, "deserves.")), /*#__PURE__*/React.createElement("div", {
  className: "svc-final-ctas"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "16px 24px",
    borderRadius: 999,
    background: "var(--spark-500)",
    color: "#0A0B0D",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    boxShadow: "0 14px 40px rgba(0,0,0,0.45)"
  }
}, "Request a quote ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "16px 24px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.24)",
    background: "rgba(10,11,13,0.72)",
    backdropFilter: "blur(8px)",
    color: "var(--fg-1)",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "-0.01em",
    textDecoration: "none"
  }
}, "Request a quote ", /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "var(--spark-500)"
  }
})))), /*#__PURE__*/React.createElement("img", {
  className: "svc-final-woman",
  src: window.__resources?.r_assets_cta_ambassador_png || "https://kyle915.github.io/ignite-webflow-assets/assets/cta-ambassador.png",
  alt: "Ignite brand ambassador holding a phone",
  loading: "lazy",
  decoding: "async"
}))));

/* Close customer story, alongside the existing case-study proof. No player or tracking embed. */
const CLOSE_STORY_URL = "https://close.com/customers/ignite-productions";
const FEATURED_CLOSE_CSS = `
.fc-sec{padding:56px 0;background:var(--ink-000);color:var(--fg-1);border-top:1px solid var(--ink-300);border-bottom:1px solid var(--ink-300);letter-spacing:normal}
.fc-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2.5fr) auto;gap:32px;align-items:center}
.fc-lock{display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.fc-eyebrow{font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ignite-400)}
.fc-logo{height:28px;width:auto;display:block}
.fc-sec .fc-h2{margin:0;font-family:var(--font-display);font-weight:700;font-size:clamp(24px,2.5vw,32px);letter-spacing:-.025em;line-height:1.15;color:var(--fg-1)}
.fc-sec .fc-body{margin:12px 0 0;font-family:var(--font-body);font-size:16px;line-height:1.6;color:var(--fg-2);max-width:660px}
.fc-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:12px 20px;border-radius:12px;background:var(--ignite-500);color:#fff;border:1px solid var(--ignite-500);font-family:var(--font-display);font-weight:600;font-size:15px;line-height:1.4;text-decoration:none;white-space:nowrap}
.fc-btn:hover{color:#fff;background:var(--ignite-600)}
.fc-btn:focus-visible{outline:2px solid var(--ignite-400);outline-offset:4px}
@media(max-width:900px){.fc-grid{grid-template-columns:1fr;gap:24px}.fc-lock{flex-direction:row;align-items:center}.fc-btn{justify-self:start}}
/* Hold the compact section against responsive.css's broad element rules. */
@media(max-width:720px){.fc-sec.fc-sec{padding-top:40px!important;padding-bottom:40px!important}.fc-sec .fc-h2{font-size:26px!important;line-height:1.15!important;letter-spacing:-.025em!important}.fc-sec .fc-body{font-size:16px!important;line-height:1.6!important}}
`;
const FeaturedByClose = () => /*#__PURE__*/React.createElement("section", {
  className: "fc-sec",
  "aria-labelledby": "fc-title",
  "data-screen-label": "Featured by Close"
}, /*#__PURE__*/React.createElement("style", null, FEATURED_CLOSE_CSS), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "fc-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "fc-lock"
}, /*#__PURE__*/React.createElement("span", {
  className: "fc-eyebrow"
}, "Featured by"), /*#__PURE__*/React.createElement("img", {
  className: "fc-logo",
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/logos/close-logo-white.png",
  alt: "Close",
  width: "303",
  height: "82",
  loading: "lazy",
  decoding: "async"
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  id: "fc-title",
  className: "fc-h2"
}, "The systems behind your event."), /*#__PURE__*/React.createElement("p", {
  className: "fc-body"
}, "Close profiled how Ignite connects client planning, staffing preparation and field reporting through Close and Spark. See how our team keeps event details connected from the first conversation to the recap.")), /*#__PURE__*/React.createElement("a", {
  className: "fc-btn",
  href: CLOSE_STORY_URL,
  target: "_blank",
  rel: "noopener noreferrer"
}, "Read the Close story ", /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true"
}, "\u2192")))));
Object.assign(window, {
  CaseStudyCarousel,
  FeaturedByClose,
  CoreDifference,
  HomeTestimonial,
  FinalCTA
});

/* The homepage's Webflow embeds have no slot for this section, so mount it in its own node
   right before the Core Difference embed (i.e. directly after the case study carousel).
   Homepage only: both neighbours must be present. */
(function () {
  function mount() {
    if (document.getElementById("ignite-featured-close")) return;
    var cases = document.getElementById("ignite-case-studies");
    var core = document.getElementById("ignite-core-difference");
    if (!cases || !core || !window.React || !window.ReactDOM) return;
    var anchor = core.closest(".w-embed") || core;
    var el = document.createElement("div");
    el.id = "ignite-featured-close";
    anchor.parentNode.insertBefore(el, anchor);
    ReactDOM.createRoot(el).render(React.createElement(FeaturedByClose));
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, {
      once: true
    });
  } else {
    mount();
  }
})();
})();
