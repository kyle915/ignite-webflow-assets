(function(){if (typeof window !== "undefined" && window.PageVeteranOwned) return;
/* Auto-extracted from the design project's pages/veteran-owned.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-veteran-owned")) return;
  var s = document.createElement("style");
  s.id = "pagecss-veteran-owned";
  s.textContent = "body{background:#0A0B0D}\n@keyframes ep-rise{0%{opacity:0;transform:translateY(24px)}100%{opacity:1;transform:none}}\n.ep-rv{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,.84,.3,1),transform .7s cubic-bezier(.16,.84,.3,1)}.ep-rv.in{opacity:1;transform:none}\n.ep-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.ep-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n.ep-hero{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:52px;align-items:center}\n.vo-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(255,255,255,.12)}\n.vo-steps>div{padding:24px 20px 0 0}.vo-steps>div+div{padding-left:20px;border-left:1px solid rgba(255,255,255,.08)}\n@media (prefers-reduced-motion:reduce){.ep-rv{opacity:1;transform:none;transition:none}}\n@media (max-width:980px){.ep-grid3,.ep-grid2,.ep-hero{grid-template-columns:1fr}.vo-steps{grid-template-columns:1fr 1fr;row-gap:24px}.vo-steps>div:nth-child(3){padding-left:0;border-left:0}}\n@media (max-width:560px){.vo-steps{grid-template-columns:1fr}.vo-steps>div+div{padding-left:0;border-left:0}}";
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
const FAQ = [["Is Ignite Productions a veteran-owned business?", "Yes. Ignite Productions is a veteran-owned small business, founded in 2018 and operating in all 50 states."], ["Is Ignite a certified Veteran-Owned Small Business (VOSB)?", "Yes. Ignite holds VOSB certification. We can share the certificate and registration details with procurement teams on request."], ["Can working with Ignite count toward supplier diversity goals?", "Often, yes. Many brands and agencies track spend with veteran-owned suppliers. Check your program's rules, and we'll provide the documentation your team needs."], ["Do you work as a subcontractor on larger programs?", "Yes. We regularly support prime agencies and brands as the field execution partner, which can help primes meet veteran-owned subcontracting goals."], ["What does veteran-owned mean for how you run programs?", "Clear briefs, a named lead on every shift, plans with a backup, and reporting that shows what actually happened. It's how we were trained to run an operation, and it's how we run yours."]];
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
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, "* VETERAN-OWNED // VOSB CERTIFIED // SINCE 2018"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: .95,
    fontSize: "clamp(42px,5.4vw,88px)"
  }
}, "Veteran-owned experiential marketing ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "agency.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.78)",
    maxWidth: 600
  }
}, "Ignite Productions is a veteran-owned small business running event staffing, sampling, trade shows and brand activations in all 50 states. We run programs the way we were trained to run an operation: a clear brief, a named lead, a backup plan, and proof that it happened."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 30,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Btn, null, "Get a staffing quote \u2192"), /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "#diversity"
}, "Supplier diversity details"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
    background: "#101217",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: 16,
    padding: "32px 24px",
    animation: "ep-rise .8s .15s both"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: window.__resources && window.__resources.r_assets_vosb_logo_png || "https://kyle915.github.io/ignite-webflow-assets/assets/vosb-logo.png",
  alt: "Veteran-Owned Small Business certification mark",
  style: {
    width: "min(220px,60%)",
    height: "auto"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%"
  }
}, [["5,000+", "events executed"], ["257,000+", "vetted brand ambassadors"], ["50", "states, 200+ metros"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 14,
    padding: "14px 0",
    borderTop: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 30,
    letterSpacing: "-0.03em",
    color: LIME
  }
}, n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    color: "rgba(255,255,255,.7)"
  }
}, l))))))));
const How = () => /*#__PURE__*/React.createElement(Sec, {
  label: "02 How we operate"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> HOW A VETERAN-OWNED TEAM OPERATES"), /*#__PURE__*/React.createElement(H2, null, "Run it like an operation, report it like a mission."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)"
  }
}, "Field marketing fails in the same places every time: a vague brief, nobody in charge on site, no backup when someone drops, and a recap nobody believes. We built Ignite to fix those four things.")), /*#__PURE__*/React.createElement("div", {
  className: "vo-steps",
  style: {
    marginTop: 44
  }
}, [["01 // BRIEF", "Commander's intent", "Every program starts with what success looks like, the must-dos and the no-gos, written down before a single ambassador is cast."], ["02 // LEAD", "A named lead per shift", "One person on site owns the floor, the breaks and the call to escalate. You always know who that is."], ["03 // BACKUP", "Plan for the drop", "Backup staff are lined up for every shift, so a no-show is a swap, not an empty table."], ["04 // DEBRIEF", "Proof, not a vibe", "GPS check-ins, photos and counts in Spark, with a recap within hours of the shift ending."]].map(([k, t, d]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, {
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
}, d)))));
const Diversity = () => /*#__PURE__*/React.createElement(Sec, {
  id: "diversity",
  bg: "#0C0E13",
  label: "03 Supplier diversity"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-grid2",
  style: {
    alignItems: "start",
    gap: 48
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, ">> FOR PROCUREMENT TEAMS"), /*#__PURE__*/React.createElement(H2, null, "Supplier diversity, without the paperwork chase."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)"
  }
}, "Many brands and prime agencies track spend with veteran-owned suppliers. If yours does, we'll send what your team needs to onboard us and count the spend.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: 12
  }
}, [["VOSB certificate", "Copy of our Veteran-Owned Small Business certification."], ["W-9 and insurance", "W-9, general liability and workers' comp certificates for vendor setup."], ["Spend reporting", "Program invoices and recaps organized for supplier diversity reporting."], ["Subcontracting support", "Field execution as a veteran-owned sub to a prime agency or integrator."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
  key: t,
  t: t,
  d: d
})))));
const Proof = () => /*#__PURE__*/React.createElement(Sec, {
  label: "04 Proof"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> WHO TRUSTS THE OPERATION"), /*#__PURE__*/React.createElement(H2, null, "Brands that needed it done right the first time."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)"
  }
}, "Veteran-owned is how we run programs, not the reason brands hire us. They come back because the shift happened, the right people were on it, and the recap matched what they saw. From an 87-person developer conference to a national retail program that runs every week, the same operating standard applies: a clear brief, a named lead, a backup on call and proof in Spark. Here are three programs that put that standard to work.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid3",
  style: {
    marginTop: 36
  }
}, [["OPENAI · DEV DAY 2026", "87 ambassadors on site", "Keynote ushers, wayfinding, traffic and hospitality across the venue.", "/portfolio/openai-devday"], ["LIQUID DEATH · SINCE 2018", "1,000+ retail demos a year", "Retail, festival and field programs coast to coast.", "/portfolio/liquid-death"], ["TORCH THC · NATIONAL", "2,500+ retail activations a year", "POS, kitting, scheduling and staffing under one team.", "/portfolio/torch-thc"]].map(([k, t, d, h]) => /*#__PURE__*/React.createElement("a", {
  key: h,
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
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  },
  c: LIME
}, k), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.65)"
  }
}, d), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    marginTop: 14,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: ".16em",
    color: LIME
  }
}, "READ THE CASE \u2192")))));
const App = () => {
  useRv();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    active: "ABOUT"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Diversity, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Faq, {
    h: "Veteran-owned, answered."
  }), /*#__PURE__*/React.createElement(Rel, {
    items: [["About Ignite", "/about"], ["Event staffing", "/services/event-staffing"], ["Agency of record", "/agency-of-record"]]
  }), /*#__PURE__*/React.createElement(CTA, {
    pull: "mission-ready crews in all 50 states",
    h: "Brief us like a mission. We'll run it like one.",
    b: "Get a staffing quote"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageVeteranOwned: App
});
})();
