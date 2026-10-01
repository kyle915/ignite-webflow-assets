(function(){if (typeof window !== "undefined" && window.PageAgencyOfRecord) return;
/* Auto-extracted from the design project's pages/agency-of-record.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-agency-of-record")) return;
  var s = document.createElement("style");
  s.id = "pagecss-agency-of-record";
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
const FAQ = [["What is an experiential agency of record?", "An agency of record (AOR) is the one partner a brand trusts with its field and experiential marketing all year: strategy, production, staffing, sampling, tours and reporting under one contract and one team."], ["What's the difference between an AOR and a project agency?", "A project agency is hired one brief at a time. An AOR owns the whole calendar, keeps the learning from every program, and is accountable for results across the year."], ["How does an AOR relationship with Ignite start?", "With a 90-day onboarding: an audit of current programs and vendors, a yearly plan, and the first programs live, followed by quarterly business reviews."], ["Can an AOR work alongside our other agencies?", "Yes. Ignite can own field and experiential while your creative, media and PR agencies keep their lanes, with one shared calendar and reporting standard."], ["Do you publish who you are agency of record for?", "No. We keep AOR relationships confidential. We're happy to share relevant references during a scoping conversation."]];
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
    fontSize: "clamp(30px,3.6vw,56px)",
    letterSpacing: "-0.04em",
    lineHeight: 1.02
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
}, /*#__PURE__*/React.createElement(Mono, null, "* AGENCY OF RECORD // FIELD + EXPERIENTIAL"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: .95
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
    fontSize: "clamp(44px,5.6vw,92px)"
  }
}, "Experiential", /*#__PURE__*/React.createElement("span", {
  "aria-hidden": true,
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px,1vw,15px)",
    fontWeight: 700,
    letterSpacing: ".2em",
    color: "#0A0B0D",
    background: LIME,
    padding: ".45em .8em",
    borderRadius: 999,
    transform: "translateY(-.4em)"
  }
}, "AOR")), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    fontSize: "clamp(44px,5.6vw,92px)"
  }
}, "agency ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: OR,
    fontStyle: "italic"
  }
}, "of record.")), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    marginTop: 14,
    fontSize: "clamp(22px,2.3vw,34px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "rgba(255,255,255,.88)"
  }
}, "One team for the whole year,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: OR,
    fontStyle: "italic",
    whiteSpace: "nowrap"
  }
}, "not one brief at a time."))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.78)",
    maxWidth: 580
  }
}, "Strategy, production, staffing, sampling, tours and reporting under one contract. Your AOR keeps what worked last quarter, fixes what didn't, and answers for the results."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 30,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Btn, null, "Talk about an AOR partnership \u2192"), /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "#model"
}, "See how it works"))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#101217",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: 16,
    padding: "22px 22px 8px",
    animation: "ep-rise .8s .15s both"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 9
  }
}, "WHAT AN ALWAYS-ON PROGRAM LOOKS LIKE"), [["5,000+", "events executed"], ["257,000+", "vetted brand ambassadors"], ["50", "states, 200+ metros"], ["24hr", "human reply on every brief"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 14,
    padding: "16px 0",
    borderBottom: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 36,
    letterSpacing: "-0.03em",
    color: LIME
  }
}, n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    color: "rgba(255,255,255,.7)"
  }
}, l)))))));
const Covers = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "02 What the AOR owns"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> WHAT YOUR AOR OWNS"), /*#__PURE__*/React.createElement(H2, null, "Every field and experiential line, under one roof.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid3",
  style: {
    marginTop: 48
  }
}, [["Strategy + annual plan", "A yearly field calendar built around launches, seasons and retail resets.", "/services/brand-strategy"], ["Event production", "Brief to strike for launches, pop-ups and brand events.", "/services/event-production"], ["Staffing", "A 257,000+ ambassador bench, trained on your brand.", "/services/event-staffing"], ["Retail sampling + demos", "Always-on in-store programs scheduled with retail partners.", "/services/product-sampling"], ["Tours + activations", "Mobile tours, festivals, sports and street teams.", "/services/mobile-tours"], ["Reporting", "Every shift verified in Spark, rolled up quarterly.", "https://sparkbyignite.igniteproductions.co/"]].map(([t, d, h]) => /*#__PURE__*/React.createElement("a", {
  key: t,
  href: h,
  className: "ep-rv",
  style: {
    padding: 26,
    borderRadius: 14,
    background: "#12141A",
    border: "1px solid rgba(255,255,255,.08)",
    color: "#fff",
    textDecoration: "none"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20
  }
}, t, " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: OR
  }
}, "\u2192")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.65)"
  }
}, d)))));
const PH = [["DAYS 1 TO 30", "Audit", "Current programs, vendors, spend and reporting, mapped in one place."], ["DAYS 31 TO 60", "Plan", "The yearly field calendar, budget by quarter and the measures that matter."], ["DAYS 61 TO 90", "Launch", "First programs live under one team and one reporting standard."], ["EVERY QUARTER", "Review", "A business review: what ran, what it delivered, what changes next."]];
const Model = () => /*#__PURE__*/React.createElement(Sec, {
  id: "model",
  label: "03 First 90 days"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> THE FIRST 90 DAYS"), /*#__PURE__*/React.createElement(H2, null, "How an AOR relationship starts.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-ros ep-rv",
  style: {
    marginTop: 56,
    gridTemplateColumns: "repeat(4,minmax(0,1fr))"
  }
}, PH.map(([k, t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: k,
  className: i === 3 ? "on" : ""
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
const VS = [["Briefs", "One at a time, rebid each time", "One calendar, planned a year out"], ["Learning", "Starts over with every vendor", "Carried from program to program"], ["Accountability", "Per project", "Across the whole year"], ["Reporting", "Different format per vendor", "One standard, rolled up quarterly"], ["Speed", "Onboard a new team every time", "Same team, ready the next week"], ["Account lead", "Changes with each project", "One named lead who knows the brand"]];
const Versus = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "04 AOR vs project"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> AOR VS. PROJECT AGENCY"), /*#__PURE__*/React.createElement(H2, null, "Which model fits your brand?")), /*#__PURE__*/React.createElement("div", {
  className: "ep-rv",
  style: {
    marginTop: 40,
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: 14,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    background: "#12141A",
    padding: "14px 20px"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: "rgba(255,255,255,.5)",
  s: {
    fontSize: 10
  }
}, " "), /*#__PURE__*/React.createElement(Mono, {
  c: "rgba(255,255,255,.5)",
  s: {
    fontSize: 10
  }
}, "PROJECT AGENCY"), /*#__PURE__*/React.createElement(Mono, {
  c: LIME,
  s: {
    fontSize: 10
  }
}, "AGENCY OF RECORD")), VS.map(([r, p, a]) => /*#__PURE__*/React.createElement("div", {
  key: r,
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 12,
    padding: "16px 20px",
    borderTop: "1px solid rgba(255,255,255,.07)",
    fontSize: 15
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: "var(--font-display)"
  }
}, r), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "rgba(255,255,255,.55)"
  }
}, p), /*#__PURE__*/React.createElement("span", null, a)))), /*#__PURE__*/React.createElement("p", {
  className: "ep-rv",
  style: {
    marginTop: 18,
    fontSize: 15,
    color: "rgba(255,255,255,.6)",
    maxWidth: 720
  }
}, "A project agency is the right call for a single launch or a one-off moment. An AOR makes sense once field marketing runs all year across retail, events and tours."));
const Page = () => {
  useRv();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Agency of Record"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Covers, null), /*#__PURE__*/React.createElement(Model, null), /*#__PURE__*/React.createElement(Versus, null), /*#__PURE__*/React.createElement(Faq, {
    h: "Agency of record, answered."
  }), /*#__PURE__*/React.createElement(Rel, {
    items: [["Sponsorship management", "/services/sponsorship-partnerships"], ["Event production", "/services/event-production"], ["Spark field reporting", "https://sparkbyignite.igniteproductions.co/"]]
  }), /*#__PURE__*/React.createElement(CTA, {
    pull: "one team. one calendar. one standard",
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Tell us what your year looks like.", /*#__PURE__*/React.createElement("br", null), "We'll show you how we'd run it."),
    b: "Talk about an AOR partnership \u2192"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageAgencyOfRecord: Page
});
})();
