(function(){if (typeof window !== "undefined" && window.PageServicesSponsorshipPartnerships) return;
/* Auto-extracted from the design project's pages/services-sponsorship-partnerships.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-sponsorship-partnerships")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-sponsorship-partnerships";
  s.textContent = "body{background:#0A0B0D}\n@keyframes ep-rise{0%{opacity:0;transform:translateY(24px)}100%{opacity:1;transform:none}}\n@keyframes ep-pulse{0%,100%{opacity:1}50%{opacity:.3}}\n.ep-rv{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,.84,.3,1),transform .7s cubic-bezier(.16,.84,.3,1)}.ep-rv.in{opacity:1;transform:none}\n.ep-ros{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0;border-top:1px solid rgba(255,255,255,.12)}\n.ep-ros>div{position:relative;padding:28px 18px 0 0}.ep-ros>div::before{content:\"\";position:absolute;left:0;top:-5px;width:9px;height:9px;border-radius:9px;background:#0A0B0D;border:2px solid #D7453E}.ep-ros>div.on::before{background:#D7453E;box-shadow:0 0 12px #D7453E}\n.ep-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.ep-hero{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:52px;align-items:center}\n@media (prefers-reduced-motion:reduce){.ep-rv{opacity:1;transform:none;transition:none}[style*=\"ep-pulse\"]{animation:none!important}}\n@media (max-width:980px){.ep-ros{grid-template-columns:1fr 1fr;row-gap:28px}.ep-grid3,.ep-hero{grid-template-columns:1fr}}\n@media (max-width:560px){.ep-ros{grid-template-columns:1fr}}";
  document.head.appendChild(s);
})();
const OR = "#D7453E",
  LIME = "#D6F35F";
const QUOTE = "https://www.igniteproductions.co/contact";
const useRv = () => React.useEffect(() => {
  const els = [...document.querySelectorAll(".ep-rv")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  }), {
    threshold: .1
  });
  els.forEach(e => io.observe(e));
  const t = setTimeout(() => els.forEach(e => e.classList.add("in")), 2400);
  return () => {
    io.disconnect();
    clearTimeout(t);
  };
}, []);
const Mono = ({
  c,
  children,
  s
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: c || OR,
    ...s
  }
}, children);
const Sec = ({
  children,
  bg,
  label,
  id
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  "data-screen-label": label,
  style: {
    background: bg || "#0A0B0D",
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, children));
const H2 = ({
  children
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4vw,60px)",
    letterSpacing: "-0.035em",
    lineHeight: 1
  }
}, children);
const FAQ = [["What does a sponsorship management agency do?", "It runs the sponsorships you've already signed: tracking every property's rights, fees and deadlines, activating those rights on site, measuring what each property delivers, and preparing the data for renewal talks."], ["Can you manage sponsorships across sports, music and festivals?", "Yes. Ignite manages and activates properties across sports venues, festivals, concerts and community events, under one team and one reporting standard."], ["How do you measure the value of a sponsorship?", "Every activation is logged in Spark: attendance, samples, leads, photos and fan engagement, so each property has a clear record of what it delivered."], ["Do you negotiate sponsorship renewals?", "We prepare the renewal case: what the property delivered, which rights went unused, and what to keep, renegotiate or cut. Your team or ours can take that into the negotiation."], ["Can you activate a sponsorship we already have in place?", "Yes. Most clients come to us with signed properties and rights that aren't being fully used."]];
const Faq = ({
  h
}) => /*#__PURE__*/React.createElement(Sec, {
  label: "FAQ"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 900
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> QUESTIONS"), /*#__PURE__*/React.createElement(H2, null, h), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement("details", {
  key: q,
  open: i === 0,
  style: {
    borderTop: "1px solid rgba(255,255,255,.1)",
    padding: "18px 0"
  }
}, /*#__PURE__*/React.createElement("summary", {
  style: {
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 19
  }
}, q), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.7)"
  }
}, a))))));
const Btn = ({
  children,
  href,
  ghost
}) => /*#__PURE__*/React.createElement("a", {
  href: href || QUOTE,
  style: ghost ? {
    display: "inline-flex",
    alignItems: "center",
    height: 52,
    padding: "0 24px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.25)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600
  } : {
    display: "inline-flex",
    alignItems: "center",
    height: 52,
    padding: "0 26px",
    borderRadius: 999,
    background: LIME,
    color: "#0A0B0D",
    fontWeight: 700,
    textDecoration: "none"
  }
}, children);
const Card = ({
  k,
  t,
  d
}) => /*#__PURE__*/React.createElement("div", {
  className: "ep-rv",
  style: {
    padding: 26,
    borderRadius: 14,
    background: "#12141A",
    border: "1px solid rgba(255,255,255,.08)"
  }
}, k && /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  }
}, k), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.65)"
  }
}, d));
const Rel = ({
  items
}) => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "Related"
}, /*#__PURE__*/React.createElement(Mono, null, ">> RELATED"), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid3",
  style: {
    marginTop: 18
  }
}, items.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
  key: h,
  href: h,
  style: {
    padding: 24,
    borderRadius: 14,
    background: "#12141A",
    border: "1px solid rgba(255,255,255,.08)",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19
  }
}, l, " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: OR
  }
}, "\u2192")))));
const CTA = ({
  pull,
  h,
  b
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "CTA",
  style: {
    background: "#0A0B0D",
    color: "#fff",
    padding: "120px 0",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, "< ", pull, " >"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(36px,5vw,76px)",
    letterSpacing: "-0.045em",
    lineHeight: .95
  }
}, h), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement(Btn, null, b)), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: ".16em",
    color: "rgba(255,255,255,.5)"
  }
}, "A REAL HUMAN REPLIES WITHIN 24 HOURS")));
const ROWS = [["NBA arena partner", "Concourse sampling + fan zone", "ACTIVE", "7 of 10 rights used"], ["Music festival series", "Sponsor footprint + exit sampling", "ACTIVE", "9 of 9 rights used"], ["Regional sports league", "Tailgate + in-game moments", "AT RISK", "3 of 8 rights used"], ["Marathon title sponsor", "Expo booth + finish line", "RENEWAL", "Recap ready"]];
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Hero",
  style: {
    background: "#0A0B0D",
    color: "#fff",
    padding: "72px 0 96px",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
    backgroundSize: "56px 56px"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-hero"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    animation: "ep-rise .8s both"
  }
}, /*#__PURE__*/React.createElement(Mono, null, "* SPONSORSHIP MANAGEMENT // ACTIVATION + PROOF"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: .95
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    fontSize: "clamp(44px,5.4vw,86px)"
  }
}, "Sponsorship management."), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    marginTop: 14,
    fontSize: "clamp(22px,2.3vw,34px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "rgba(255,255,255,.88)"
  }
}, "Use every right you paid for. ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: OR,
    fontStyle: "italic"
  }
}, "Prove it at renewal."))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.78)",
    maxWidth: 560
  }
}, "Teams, leagues, festivals and venues sell you rights. We track them, activate them on site with trained crews, and report what each property delivered, so renewals are decided on data instead of a feeling."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 30,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Btn, null, "Review my sponsorships \u2192"), /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "#portfolio"
}, "See the portfolio view"))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#101217",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: 16,
    overflow: "hidden",
    animation: "ep-rise .8s .15s both"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    borderBottom: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    gap: 8,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 7,
    height: 7,
    borderRadius: 7,
    background: OR,
    animation: "ep-pulse 1.4s infinite"
  }
}), /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 9
  }
}, "SPONSORSHIP PORTFOLIO")), /*#__PURE__*/React.createElement(Mono, {
  c: "rgba(255,255,255,.45)",
  s: {
    fontSize: 9
  }
}, "SAMPLE VIEW")), ROWS.map(([p, a, st, u], i) => /*#__PURE__*/React.createElement("div", {
  key: p,
  style: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 12,
    alignItems: "center",
    padding: "14px 16px",
    borderTop: i ? "1px solid rgba(255,255,255,.05)" : "none"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 600,
    fontSize: 15
  }
}, p), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 3,
    fontSize: 13,
    color: "rgba(255,255,255,.55)"
  }
}, a, " \xB7 ", u)), /*#__PURE__*/React.createElement(Mono, {
  c: st === "AT RISK" ? OR : st === "RENEWAL" ? "#FFB627" : LIME,
  s: {
    fontSize: 9.5
  }
}, "\u25CF ", st)))))));
const STEPS = [["01 // AUDIT", "Map the portfolio", "Every property, its fee, its rights, its deadlines and what's gone unused."], ["02 // PLAN", "Activate the rights", "A plan for each property: sampling, fan zones, hospitality, signage and content."], ["03 // RUN", "Execute on site", "Trained crews at every game, show and festival, GPS-checked in through Spark."], ["04 // PROVE", "Report the value", "Attendance, samples, leads and photos per property, rolled up across the portfolio."], ["05 // RENEW", "Build the renewal case", "What to keep, renegotiate or cut, backed by a season of data."]];
const Portfolio = () => /*#__PURE__*/React.createElement(Sec, {
  id: "portfolio",
  label: "02 Portfolio"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> HOW WE RUN A PORTFOLIO"), /*#__PURE__*/React.createElement(H2, null, "From signed contract to renewal decision.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-ros ep-rv",
  style: {
    marginTop: 56,
    gridTemplateColumns: "repeat(5,minmax(0,1fr))"
  }
}, STEPS.map(([k, t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: k,
  className: i === 2 ? "on" : ""
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10.5
  }
}, k), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.65)"
  }
}, d)))));
const Props = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "03 Properties"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> PROPERTIES WE ACTIVATE"), /*#__PURE__*/React.createElement(H2, null, "Wherever the logo shows up, the brand should too.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid3",
  style: {
    marginTop: 48
  }
}, [["Pro + college sports", "Concourse sampling, fan zones, tailgates and in-game moments."], ["Music festivals + concerts", "Sponsor footprints, silent discos, exit sampling and VIP lounges."], ["Venues + arenas", "Season-long activations and premium hospitality."], ["Endurance + community events", "Expo booths, finish-line sampling and race-day crews."], ["Trade + industry events", "Title sponsorships, booths and hosted receptions."], ["Cultural + local moments", "Neighborhood events and community partnerships."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
  key: t,
  t: t,
  d: d
}))));
const Proof = () => /*#__PURE__*/React.createElement(Sec, {
  label: "04 Proof"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-hero",
  style: {
    gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> WHAT YOU GET BACK"), /*#__PURE__*/React.createElement(H2, null, "A season of proof, not a stack of photos."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.7)"
  }
}, "Every shift at every property is logged in Spark with GPS check-in, photos and counts. At the end of the season you have one report that shows what each property delivered side by side."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24
  }
}, /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "https://sparkbyignite.igniteproductions.co/"
}, "How Spark reports it \u2192"))), /*#__PURE__*/React.createElement("ul", {
  className: "ep-rv",
  style: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    borderTop: "1px solid rgba(255,255,255,.12)"
  }
}, ["Rights used vs. rights paid for, per property", "Attendance, samples and leads per activation", "Photo record from every shift", "Unused assets flagged before they expire", "Renewal recommendation: keep, renegotiate or cut"].map(x => /*#__PURE__*/React.createElement("li", {
  key: x,
  style: {
    display: "flex",
    gap: 14,
    padding: "16px 0",
    borderBottom: "1px solid rgba(255,255,255,.1)",
    fontSize: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontFamily: "var(--font-mono)",
    fontWeight: 700
  }
}, "\u2713"), x)))));
const Page = () => {
  useRv();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Sponsorship Management"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Portfolio, null), /*#__PURE__*/React.createElement(Props, null), /*#__PURE__*/React.createElement(Proof, null), window.RelatedCases ? React.createElement(window.RelatedCases, {
    ctx: "service",
    slug: "sponsorship-partnerships",
    heading: "Sponsor activations we've run."
  }) : null, /*#__PURE__*/React.createElement(Faq, {
    h: "Sponsorship management, answered."
  }), /*#__PURE__*/React.createElement(Rel, {
    items: [["Agency of record", "/agency-of-record"], ["Sports marketing activations", "/services/sports-marketing-activations"], ["Festival brand activations", "/services/festival-brand-activations"]]
  }), /*#__PURE__*/React.createElement(CTA, {
    pull: "every right used, every renewal backed",
    h: "Send us your sponsorship list. We'll show you what's unused.",
    b: "Review my sponsorships \u2192"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesSponsorshipPartnerships: Page
});
})();
