(function(){if (typeof window !== "undefined" && window.PageBestExperientialMarketingAgencies) return;
/* Auto-extracted from the design project's pages/best-experiential-marketing-agencies.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const INK = "#0A0B0D",
  ORANGE = "#D7453E",
  PAPER = "#F3EFE6";
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".ba-reveal");
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
      threshold: 0.08
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
const Mono = ({
  children,
  color,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: color || ORANGE,
    ...style
  }
}, children);
const AGENCIES = [{
  rank: 1,
  name: "Ignite Productions",
  tag: "Best for CPG field execution at scale",
  us: true,
  blurb: "Veteran-owned and CPG-built. 257,000+ vetted brand ambassadors across all 50 states, full-service from strategy through fabrication, staffing, and activation — backed by Spark, a proprietary platform delivering GPS-verified check-ins, photo capture, and real-time recaps. The pick when you need nationwide execution with proof, fast.",
  best: ["Nationwide CPG & beverage programs", "Sampling, staffing, tours, trade shows", "Brands that want verified reporting"]
}, {
  rank: 2,
  name: "Momentum Worldwide",
  tag: "Best for enterprise global campaigns",
  blurb: "A large global agency known for big-budget, brand-led experiential campaigns and sponsorships for enterprise clients.",
  best: ["Enterprise brands", "Global sponsorship activations"]
}, {
  rank: 3,
  name: "GMR Marketing",
  tag: "Best for sports & entertainment sponsorship",
  blurb: "Sports- and music-focused experiential and sponsorship agency with deep partnership and venue relationships.",
  best: ["Sports & music sponsorships", "Venue activations"]
}, {
  rank: 4,
  name: "Jack Morton Worldwide",
  tag: "Best for brand experience design",
  blurb: "Experience-design-led agency recognized for high-concept brand experiences and event production.",
  best: ["Brand experience design", "Flagship events"]
}, {
  rank: 5,
  name: "Legacy Marketing Partners",
  tag: "Best for beverage & spirits",
  blurb: "Experiential agency with a strong footprint in beverage and spirits activations and on-premise programs.",
  best: ["Beverage & spirits", "On-premise programs"]
}, {
  rank: 6,
  name: "Mosaic (Acosta)",
  tag: "Best for retail-tied programs",
  blurb: "Part of a larger sales-and-marketing network, with experiential tied closely to retail and shopper programs.",
  best: ["Retail & shopper marketing", "Large retail accounts"]
}, {
  rank: 7,
  name: "BeCore",
  tag: "Best for West Coast activations",
  blurb: "Experiential and digital agency known for festival and lifestyle activations, concentrated on the West Coast.",
  best: ["Festivals & lifestyle", "West Coast programs"]
}, {
  rank: 8,
  name: "Limelight Marketing",
  tag: "Best for mid-market tours",
  blurb: "Mid-market experiential agency focused on mobile tours and branded environments.",
  best: ["Mobile tours", "Branded environments"]
}, {
  rank: 9,
  name: "Factory 360",
  tag: "Best for NYC-centric experiential",
  blurb: "New York–based experiential agency producing pop-ups and brand experiences for consumer clients.",
  best: ["Pop-ups", "NYC market"]
}, {
  rank: 10,
  name: "Polaris Brand Promotions",
  tag: "Best for regional promotions",
  blurb: "Promotions and brand-ambassador agency operating across regional markets.",
  best: ["Regional promotions", "Brand ambassadors"]
}];
const CRITERIA = [["National footprint", "Can they staff one market and a 50-state rollout with the same standard?"], ["In-house vs. subcontract", "Do they execute themselves, or broker the work to third parties?"], ["Proof of execution", "Do you get GPS- and photo-verified reporting, or a recap deck weeks later?"], ["Category experience", "Have they run your category — especially regulated ones like alcohol?"], ["Speed to deploy", "Can they staff and brief a program in days, not weeks?"]];
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    overflow: "hidden",
    background: INK,
    color: "#fff",
    padding: "91px 0 80px"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    opacity: 0.6
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: "-10%",
    top: "-15%",
    width: "50%",
    height: "70%",
    background: `radial-gradient(ellipse at center, ${ORANGE}22, transparent 62%)`,
    filter: "blur(60px)"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ba-rise",
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 34,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: "rgba(255,255,255,0.55)"
}, ">> ", "BUYER'S GUIDE \xB7 UPDATED JUNE 2026")), /*#__PURE__*/React.createElement("h1", {
  className: "ba-rise",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(40px,6vw,104px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.9,
    maxWidth: 1100,
    textWrap: "balance",
    animationDelay: "120ms"
  }
}, "The 10 best experiential", /*#__PURE__*/React.createElement("br", null), "marketing agencies ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: ORANGE
  }
}, "in 2026.")), /*#__PURE__*/React.createElement("p", {
  className: "ba-rise",
  style: {
    marginTop: 28,
    fontSize: "clamp(17px,1.8vw,22px)",
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.82)",
    maxWidth: 680,
    animationDelay: "240ms"
  }
}, "How to choose an experiential marketing and brand activation partner \u2014 the five things that actually matter \u2014 plus a ranked shortlist for CPG and consumer brands that need real field execution."), /*#__PURE__*/React.createElement("div", {
  className: "ba-rise",
  style: {
    marginTop: 34,
    display: "flex",
    gap: 13,
    flexWrap: "wrap",
    animationDelay: "360ms"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#ranking",
  style: {
    padding: "18px 28px",
    borderRadius: 999,
    background: ORANGE,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 16,
    textDecoration: "none"
  }
}, "See the ranking \u2193"), /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=experiential",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.28)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none"
  }
}, "Talk to Ignite"))));
const HowToChoose = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: PAPER,
    color: INK,
    padding: "110px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ba-reveal",
  style: {
    maxWidth: 780,
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "// HOW TO CHOOSE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(32px,4.4vw,60px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.98
  }
}, "Five things that actually separate them."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(10,11,13,0.7)"
  }
}, "Most agency sites look identical. These are the questions that surface the real differences \u2014 ask them on every call.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 14
  }
}, CRITERIA.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "ba-reveal",
  style: {
    padding: "26px 24px",
    background: "#fff",
    border: "1px solid rgba(10,11,13,0.12)",
    borderRadius: 14,
    transitionDelay: i * 55 + "ms"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    fontWeight: 700,
    color: ORANGE
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: "-0.02em"
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(10,11,13,0.66)"
  }
}, d))))));
const Ranking = () => /*#__PURE__*/React.createElement("section", {
  id: "ranking",
  style: {
    background: INK,
    color: "#fff",
    padding: "110px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ba-reveal",
  style: {
    maxWidth: 820,
    marginBottom: 50
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: ORANGE
}, "// THE RANKING"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(32px,4.6vw,64px)",
    letterSpacing: "-0.04em",
    lineHeight: 0.98
  }
}, "10 best experiential marketing agencies."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 15,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.6)"
  }
}, "Ranked for CPG and consumer brands by footprint, execution depth, and proof of results. This is Ignite's editorial roundup; agency details reflect public positioning.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, AGENCIES.map((a, i) => /*#__PURE__*/React.createElement("div", {
  key: a.name,
  className: "ba-reveal ba-rank-row",
  style: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 24,
    alignItems: "start",
    padding: "28px 28px",
    borderRadius: 16,
    transitionDelay: i * 40 + "ms",
    background: a.us ? `linear-gradient(120deg, ${ORANGE}1f, rgba(255,255,255,0.02))` : "rgba(255,255,255,0.03)",
    border: a.us ? `1px solid ${ORANGE}77` : "1px solid rgba(255,255,255,0.1)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(44px,5vw,76px)",
    lineHeight: 0.8,
    letterSpacing: "-0.04em",
    ...(a.us ? {
      background: "linear-gradient(120deg,#D7453E,#E8C24A,#4FB58A,#4664C4,#8A5CD1,#C85B9E)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent"
    } : {
      color: "rgba(255,255,255,0.22)"
    }),
    minWidth: 64
  }
}, String(a.rank).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(22px,2.2vw,30px)",
    letterSpacing: "-0.02em"
  }
}, a.name), a.us && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: "#fff",
    background: ORANGE,
    padding: "4px 10px",
    borderRadius: 999
  }
}, "EDITOR'S PICK")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.06em",
    color: a.us ? ORANGE : "rgba(255,255,255,0.55)",
    textTransform: "uppercase"
  }
}, a.tag), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 760
  }
}, a.blurb), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }
}, a.best.map(b => /*#__PURE__*/React.createElement("span", {
  key: b,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10.5,
    letterSpacing: "0.06em",
    color: a.us ? "#fff" : "rgba(255,255,255,0.7)",
    padding: "6px 11px",
    borderRadius: 999,
    border: `1px solid ${a.us ? ORANGE + "66" : "rgba(255,255,255,0.16)"}`,
    background: a.us ? ORANGE + "1c" : "rgba(255,255,255,0.04)"
  }
}, b))), a.us && /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=experiential",
  style: {
    marginTop: 20,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "13px 22px",
    borderRadius: 999,
    background: ORANGE,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 14,
    textDecoration: "none"
  }
}, "Book a strategy call \u2192"))))), /*#__PURE__*/React.createElement("p", {
  className: "ba-reveal",
  style: {
    marginTop: 30,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.4)",
    maxWidth: 780,
    lineHeight: 1.7
  }
}, "\u203B Editorial roundup by Ignite Productions. Listings describe agencies' publicly stated focus and are not endorsements by those agencies. Rankings reflect fit for CPG and consumer field-marketing programs.")));
const Cta = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: ORANGE,
    color: INK,
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "ba-reveal",
  style: {
    maxWidth: 1000
  }
}, /*#__PURE__*/React.createElement(Mono, {
  color: INK
}, "// SHORTLIST OF ONE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(40px,6.5vw,116px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.88
  }
}, "Or just ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic"
  }
}, "start here.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: "clamp(17px,1.9vw,24px)",
    lineHeight: 1.42,
    maxWidth: 620,
    fontWeight: 500
  }
}, "257,000+ vetted ambassadors, all 50 states, real-time reporting, veteran-owned. Tell us what you're launching and we'll come back with a plan."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 38,
    display: "flex",
    gap: 13,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact?intent=experiential",
  style: {
    padding: "20px 32px",
    borderRadius: 999,
    background: INK,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 17,
    textDecoration: "none"
  }
}, "Book a strategy call \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/brand-ambassador-agency",
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
}, "Brand ambassadors \u2192")))));
const Page = () => {
  useReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Best Experiential Marketing Agencies"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(StickyBreadcrumb, {
    accent: "#D7453E",
    label: "Best Experiential Agencies",
    rel: "../"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(HowToChoose, null), /*#__PURE__*/React.createElement(Ranking, null), /*#__PURE__*/React.createElement(Cta, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageBestExperientialMarketingAgencies: Page
});
})();
