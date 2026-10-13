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

/* Featured by Close: editorial press section between CaseStudyCarousel and CoreDifference.
   Dark ground, Close lockup, scroll reveal. Video loads only on click. */
const CLOSE_STORY_URL = "https://close.com/customers/ignite-productions";
const CLOSE_VIDEO_EMBED = "https://fast.wistia.net/embed/iframe/yxnlt6rza2?autoPlay=true&playerColor=D7453E";
const CLOSE_VIDEO_THUMB = "https://embed-ssl.wistia.com/deliveries/b4dac4b570157a08f2e8f308d3d8026d.jpg?image_crop_resized=1280x720";
const FEATURED_CLOSE_CSS = `
.fc-sec{position:relative;overflow:hidden;padding:128px 0 120px;background:#0A0B0D;color:#FAFAF7;letter-spacing:normal}
/* Webflow normalize makes buttons inherit font + line-height; restore the browser default the design was built on */
.fc-sec button{line-height:normal}
.fc-sec .fc-play{font:-webkit-small-control}
.fc-sec::before{content:"";position:absolute;right:-12%;top:-30%;width:60%;height:120%;background:radial-gradient(closest-side,rgba(215,69,62,.16),rgba(215,69,62,0));pointer-events:none}
.fc-sec>*{position:relative}
.fc-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:72px;align-items:center}
.fc-lock{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.fc-eyebrow{font-family:var(--font-mono);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#FF6A5F}
.fc-lock .fc-eyebrow{white-space:nowrap;flex-shrink:0}
.fc-lock i{width:1px;height:28px;background:rgba(250,250,247,.22)}
.fc-logo{height:34px;width:auto;display:block}
.fc-h2{margin:22px 0 0;font-family:var(--font-display);font-weight:700;font-size:clamp(36px,4.4vw,64px);letter-spacing:-.03em;line-height:1;color:#FAFAF7;text-wrap:balance}
.fc-body{margin:22px 0 0;font-size:18px;line-height:1.6;color:rgba(250,250,247,.78);max-width:520px;text-wrap:pretty}
.fc-ctas{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}
.fc-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 22px;border-radius:12px;font-family:var(--font-display);font-weight:600;font-size:15px;letter-spacing:-.01em;text-decoration:none;cursor:pointer;transition:transform 160ms var(--ease-out),background 160ms,border-color 160ms}
.fc-btn:hover{transform:translateY(-1px)}
.fc-btn:focus-visible,.fc-play:focus-visible{outline:2px solid #FF6A5F;outline-offset:3px}
.fc-btn-p{background:#D7453E;color:#fff;border:1px solid #D7453E}
.fc-btn-p:hover{color:#fff;background:#C23A33}
.fc-btn-g{background:transparent;color:#FAFAF7;border:1px solid rgba(250,250,247,.28)}
.fc-btn-g:hover{color:#FAFAF7;border-color:#FAFAF7}
.fc-frame{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;background:#141519;box-shadow:0 0 0 1px rgba(250,250,247,.08),0 40px 100px rgba(0,0,0,.55)}
.fc-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.fc-play{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;background:#0A0B0D;cursor:pointer;display:block;text-align:left}
.fc-play img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 500ms var(--ease-out)}
.fc-play:hover img{transform:scale(1.02)}
.fc-play::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,11,13,0) 45%,rgba(10,11,13,.82))}
.fc-fallback{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#141519}
.fc-fallback span{font-family:var(--font-display);font-weight:700;font-size:clamp(22px,2.4vw,32px);letter-spacing:-.02em;color:#FAFAF7;text-align:center;padding:0 24px}
.fc-pbtn{position:absolute;left:50%;top:50%;z-index:2;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:999px;background:#D7453E;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(215,69,62,.45);transition:transform 160ms var(--ease-out)}
.fc-play:hover .fc-pbtn{transform:scale(1.06)}
.fc-pbtn svg{margin-left:4px}
.fc-cap{position:absolute;left:22px;right:22px;bottom:18px;z-index:2;display:flex;justify-content:space-between;align-items:flex-end;gap:16px}
.fc-cap b{display:block;font-family:var(--font-display);font-weight:600;font-size:17px;color:#FAFAF7;letter-spacing:-.01em}
.fc-cap small{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(250,250,247,.75)}
.fc-dur{flex-shrink:0;padding:5px 9px;border-radius:6px;background:rgba(10,11,13,.7);font-family:var(--font-mono);font-size:11px;color:#FAFAF7}
.fc-note{margin:14px 0 0;font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:rgba(250,250,247,.6)}
.fc-note a{color:inherit;text-decoration:underline;text-underline-offset:3px}.fc-note a:hover{color:#FAFAF7}
.fc-rv{opacity:0;transform:translateY(24px);transition:opacity 700ms var(--ease-out,cubic-bezier(.2,.7,.2,1)),transform 700ms var(--ease-out,cubic-bezier(.2,.7,.2,1))}
.fc-in .fc-rv{opacity:1;transform:none}
.fc-in .fc-d1{transition-delay:80ms}.fc-in .fc-d2{transition-delay:160ms}.fc-in .fc-d3{transition-delay:240ms}.fc-in .fc-d4{transition-delay:320ms}.fc-in .fc-d5{transition-delay:420ms}
@media (max-width:900px){.fc-sec{padding:80px 0}.fc-grid{grid-template-columns:1fr;gap:40px}.fc-body{font-size:17px}.fc-ctas{flex-direction:column}.fc-btn{width:100%}.fc-pbtn{width:64px;height:64px;margin:-32px 0 0 -32px}.fc-cap b{font-size:15px}}
/* responsive.css restyles every section, h2 and p at 720px and below; hold this section to its own spec */
@media (max-width:720px){.fc-sec.fc-sec{padding-top:80px!important;padding-bottom:80px!important}.fc-sec .fc-h2{font-size:clamp(36px,4.4vw,64px)!important;line-height:1!important;letter-spacing:-.03em!important}.fc-sec .fc-body{font-size:17px!important;line-height:1.6!important}.fc-sec .fc-note{font-size:11px!important;line-height:inherit!important}}
@media (prefers-reduced-motion:reduce){.fc-btn,.fc-play img,.fc-pbtn{transition:none}.fc-rv{opacity:1;transform:none;transition:none}}
`;
const FeaturedByClose = () => {
  const [playing, setPlaying] = React.useState(false);
  const [thumbOk, setThumbOk] = React.useState(true);
  const [inView, setInView] = React.useState(false);
  const secRef = React.useRef(null);
  const play = () => setPlaying(true);
  React.useEffect(() => {
    const el = secRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.2
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: secRef,
    className: "fc-sec" + (inView ? " fc-in" : ""),
    "aria-labelledby": "fc-title",
    "data-screen-label": "Featured by Close"
  }, /*#__PURE__*/React.createElement("style", null, FEATURED_CLOSE_CSS), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "fc-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fc-lock fc-rv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fc-eyebrow"
  }, "Featured by"), /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("img", {
    className: "fc-logo",
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/logos/close-logo-white.png",
    alt: "Close",
    width: "303",
    height: "82"
  })), /*#__PURE__*/React.createElement("h2", {
    id: "fc-title",
    className: "fc-h2 fc-rv fc-d1"
  }, "The systems behind the experience."), /*#__PURE__*/React.createElement("p", {
    className: "fc-body fc-rv fc-d2"
  }, "Close featured Ignite Productions in a look at how we connect event planning, team coordination, and real-time client reporting. Go behind the scenes of the tools and processes that support our work."), /*#__PURE__*/React.createElement("div", {
    className: "fc-ctas fc-rv fc-d3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "fc-btn fc-btn-p",
    href: CLOSE_STORY_URL,
    target: "_blank",
    rel: "noopener"
  }, "Read the story ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fc-btn fc-btn-g",
    onClick: play,
    "aria-controls": "fc-video"
  }, "Watch the conversation"))), /*#__PURE__*/React.createElement("div", {
    className: "fc-rv fc-d2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fc-frame",
    id: "fc-video"
  }, playing ? /*#__PURE__*/React.createElement("iframe", {
    src: CLOSE_VIDEO_EMBED,
    title: "Customer Spotlight: Ignite Productions, a conversation with Kyle Christiansen, published by Close",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowFullScreen: true,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fc-play",
    onClick: play,
    "aria-label": "Play the full interview: Customer Spotlight, Ignite Productions (36 minutes)"
  }, thumbOk ? /*#__PURE__*/React.createElement("img", {
    src: CLOSE_VIDEO_THUMB,
    alt: "",
    width: "1280",
    height: "720",
    loading: "lazy",
    decoding: "async",
    onError: () => setThumbOk(false)
  }) : /*#__PURE__*/React.createElement("span", {
    className: "fc-fallback"
  }, /*#__PURE__*/React.createElement("span", null, "Customer Spotlight: Ignite Productions")), /*#__PURE__*/React.createElement("span", {
    className: "fc-pbtn",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "26",
    viewBox: "0 0 24 26"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5v23L22.5 13z",
    fill: "#FAFAF7"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "fc-cap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Customer Spotlight: Ignite Productions"), /*#__PURE__*/React.createElement("small", null, "Full interview // Kyle Christiansen")), /*#__PURE__*/React.createElement("span", {
    className: "fc-dur"
  }, "36:56")))), /*#__PURE__*/React.createElement("p", {
    className: "fc-note"
  }, "Video plays on Wistia, hosted by Close. ", /*#__PURE__*/React.createElement("a", {
    href: CLOSE_STORY_URL,
    target: "_blank",
    rel: "noopener"
  }, "Read the article instead \u2192"))))));
};
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
