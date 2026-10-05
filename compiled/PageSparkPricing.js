(function(){if (typeof window !== "undefined" && window.PageSparkPricing) return;
/* Auto-extracted from the design project's pages/spark-pricing.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-spark-pricing")) return;
  var s = document.createElement("style");
  s.id = "pagecss-spark-pricing";
  s.textContent = ".sp-plans{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;align-items:stretch}\n  .sp-plan{background:var(--sp-card);border:1px solid var(--sp-line);border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;position:relative}\n  .sp-plan.sp-pop{border-color:rgba(214,243,95,.55);background:linear-gradient(180deg,rgba(214,243,95,.08),var(--sp-card) 40%);box-shadow:0 0 0 1px rgba(214,243,95,.12),0 24px 70px rgba(214,243,95,.07)}\n  .sp-plan .sp-price{font-family:var(--sp-mono);font-weight:700;font-size:34px;letter-spacing:-.02em;color:var(--sp-fg);margin-top:16px}\n  .sp-plan .sp-price small{font-size:13px;color:var(--sp-mut);font-weight:500;margin-left:4px}\n  .sp-plan ul{list-style:none;padding:0;margin:20px 0 0;display:flex;flex-direction:column;gap:9px;flex:1}\n  .sp-plan li{display:flex;gap:9px;font-size:13.5px;line-height:1.45;color:var(--sp-fg2)}\n  .sp-plan li.off{color:var(--sp-mut);opacity:.6}\n  .sp-plan li i{font-family:var(--sp-mono);font-style:normal;flex-shrink:0;color:var(--sp-lime)}\n  .sp-plan li.off i{color:var(--sp-mut)}\n  .sp-seg{display:inline-flex;padding:3px;background:rgba(250,250,247,.05);border:1px solid var(--sp-line);border-radius:999px}\n  .sp-seg button{padding:8px 16px;border-radius:999px;border:0;cursor:pointer;background:transparent;color:var(--sp-mut);font-family:var(--sp-mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase}\n  .sp-seg button[aria-pressed=\"true\"]{background:var(--sp-lime);color:#0F0F0D;font-weight:700}\n  .sp-cmp{width:100%;border-collapse:collapse;font-size:13.5px;min-width:820px}\n  .sp-cmp th,.sp-cmp td{padding:13px 14px;border-bottom:1px solid var(--sp-line);text-align:center}\n  .sp-cmp th:first-child,.sp-cmp td:first-child{text-align:left;color:var(--sp-fg2);position:sticky;left:0;background:var(--sp-bg);z-index:1}\n  .sp-cmp thead th{font-family:var(--sp-mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--sp-mut)}\n  .sp-cmp thead th.sp-pop{color:var(--sp-lime);background:rgba(214,243,95,.06)}\n  .sp-cmp td.sp-pop{background:rgba(214,243,95,.06)}\n  @media (max-width:1180px){.sp-plans{grid-template-columns:repeat(3,1fr)}}\n  @media (max-width:760px){.sp-plans{grid-template-columns:1fr}}";
  document.head.appendChild(s);
})();
const {
  LIME,
  RED,
  BG,
  CARD,
  FG,
  FG2,
  MUT,
  LINE,
  MONO,
  SANS
} = SPK;
/* $XX / $XXX are placeholders — set real prices before publishing */
const PLANS = [{
  n: "FREE",
  best: "Trying it out",
  m: "$0",
  a: "$0",
  cta: "Start free",
  href: "https://www.igniteproductions.co/contact",
  f: {
    ws: "1",
    ev: "5 / mo",
    adm: "1",
    forms: "1",
    tmpl: false,
    ai: false,
    wl: false,
    api: false,
    sso: false,
    csm: false
  }
}, {
  n: "FIELD",
  best: "One brand, one program",
  m: "$XX",
  a: "$XX",
  cta: "Start free trial",
  href: "https://www.igniteproductions.co/contact",
  f: {
    ws: "1",
    ev: "50 / mo",
    adm: "3",
    forms: "1",
    tmpl: false,
    ai: false,
    wl: false,
    api: false,
    sso: false,
    csm: false
  }
}, {
  n: "PROGRAM",
  best: "Multi-market brand",
  m: "$XXX",
  a: "$XXX",
  pop: true,
  cta: "Start free trial",
  href: "https://www.igniteproductions.co/contact",
  f: {
    ws: "1",
    ev: "250 / mo",
    adm: "10",
    forms: "3",
    tmpl: true,
    ai: true,
    wl: false,
    api: false,
    sso: false,
    csm: false
  }
}, {
  n: "AGENCY",
  best: "Agencies with multiple clients",
  m: "$XXX",
  a: "$XXX",
  cta: "See Spark on a live program",
  href: "https://www.igniteproductions.co/contact",
  f: {
    ws: "Up to 10",
    ev: "Unlimited",
    adm: "25",
    forms: "1 per workspace",
    tmpl: true,
    ai: true,
    wl: true,
    api: true,
    sso: false,
    csm: false
  }
}, {
  n: "ENTERPRISE",
  best: "Multi-agency consolidation",
  m: "Custom",
  a: "Custom",
  cta: "Talk to sales",
  href: "https://www.igniteproductions.co/contact",
  f: {
    ws: "Unlimited",
    ev: "Unlimited",
    adm: "Unlimited",
    forms: "Unlimited",
    tmpl: true,
    ai: true,
    wl: true,
    api: true,
    sso: true,
    csm: true
  }
}];
const ROWS = [["Client workspaces", "ws"], ["Active events per month", "ev"], ["Ambassador seats", () => "Unlimited"], ["Admin seats", "adm"], ["GPS check-in and time clock", () => true], ["Auto recaps and photo capture", () => true], ["Missing-recap enforcement", () => true], ["Public request forms", "forms"], ["Custom recap templates", "tmpl"], ["Ask AI and insights", "ai"], ["White-label client portal", "wl"], ["API and integrations", "api"], ["SSO and audit log", "sso"], ["Dedicated CSM", "csm"]];
const val = (p, k) => typeof k === "function" ? k(p) : p.f[k];
const Cell = ({
  v
}) => v === true ? /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    color: LIME
  }
}, "\u2713") : v === false ? /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    color: MUT,
    opacity: .5
  }
}, "-") : /*#__PURE__*/React.createElement("span", {
  style: {
    color: FG
  }
}, v);
const recommend = (ev, ws) => {
  if (ws >= 25) return "ENTERPRISE";
  if (ws > 1) return "AGENCY";
  if (ev <= 5) return "FREE";
  if (ev <= 50) return "FIELD";
  if (ev <= 250) return "PROGRAM";
  return "AGENCY";
};
const Finder = ({
  ev,
  setEv,
  ws,
  setWs
}) => {
  const rec = recommend(ev, ws);
  const plan = PLANS.find(p => p.n === rec);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "02 Plan finder",
    style: {
      background: BG,
      padding: "0 0 clamp(40px,5vw,64px)"
    }
  }, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
    className: "sp-card sp-rv sp-finder"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, {
    color: LIME
  }, ">> FIND YOUR PLAN"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h3",
    style: {
      margin: "12px 0 0",
      fontSize: 26,
      color: FG
    }
  }, "How much field work are you running?"), /*#__PURE__*/React.createElement("label", {
    className: "sp-fnlabel",
    htmlFor: "sp-ev"
  }, "Active events per month", /*#__PURE__*/React.createElement("b", null, ev >= 300 ? "300+" : ev)), /*#__PURE__*/React.createElement("input", {
    id: "sp-ev",
    className: "sp-range",
    type: "range",
    min: "1",
    max: "300",
    step: "1",
    value: ev,
    onChange: e => setEv(+e.target.value),
    "aria-valuetext": ev + " events per month"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sp-fnticks"
  }, /*#__PURE__*/React.createElement("span", null, "1"), /*#__PURE__*/React.createElement("span", null, "50"), /*#__PURE__*/React.createElement("span", null, "150"), /*#__PURE__*/React.createElement("span", null, "300+")), /*#__PURE__*/React.createElement("span", {
    className: "sp-fnlabel",
    style: {
      marginTop: 26
    }
  }, "Client workspaces"), /*#__PURE__*/React.createElement("div", {
    className: "sp-seg",
    role: "group",
    "aria-label": "Client workspaces"
  }, /*#__PURE__*/React.createElement("button", {
    "aria-pressed": ws === 1,
    onClick: () => setWs(1)
  }, "Just us"), /*#__PURE__*/React.createElement("button", {
    "aria-pressed": ws === 5,
    onClick: () => setWs(5)
  }, "2 to 10 clients"), /*#__PURE__*/React.createElement("button", {
    "aria-pressed": ws === 25,
    onClick: () => setWs(25)
  }, "10+ clients"))), /*#__PURE__*/React.createElement("div", {
    className: "sp-fnres"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME
    }
  }, "RECOMMENDED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: ".06em",
      color: FG,
      marginTop: 10
    }
  }, plan.n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      lineHeight: 1.5,
      color: FG2
    }
  }, plan.best, ". ", plan.f.ev, " active events, ", plan.f.ws, " workspace", plan.f.ws === "1" ? "" : "s", ", unlimited ambassador seats."), /*#__PURE__*/React.createElement("a", {
    href: plan.href,
    className: "sp-btn",
    style: {
      marginTop: 20,
      justifyContent: "center",
      padding: "12px 18px",
      fontSize: 13.5
    }
  }, plan.cta, " ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("p", {
    className: "sp-foot",
    style: {
      marginTop: 14
    }
  }, "// EXCEED THE LIMIT AND NOTHING BREAKS. WE FLAG IT AND TALK"))), /*#__PURE__*/React.createElement("style", null, `
        .sp-finder{padding:clamp(24px,3vw,38px);display:grid;grid-template-columns:1.35fr 1fr;gap:clamp(24px,4vw,52px);align-items:center}
        .sp-fnlabel{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-top:24px;font-family:var(--sp-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--sp-mut)}
        .sp-fnlabel b{font-size:18px;letter-spacing:.02em;color:var(--sp-lime)}
        .sp-range{-webkit-appearance:none;appearance:none;width:100%;height:4px;margin-top:14px;border-radius:999px;background:linear-gradient(90deg,var(--sp-lime) 0%,var(--sp-lime) var(--p,30%),rgba(250,250,247,.14) var(--p,30%),rgba(250,250,247,.14) 100%);cursor:pointer}
        .sp-range::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:999px;background:var(--sp-lime);border:3px solid #0A0B0D;box-shadow:0 0 0 1px var(--sp-lime),0 6px 18px rgba(214,243,95,.4);cursor:grab}
        .sp-range::-moz-range-thumb{width:16px;height:16px;border:3px solid #0A0B0D;border-radius:999px;background:var(--sp-lime)}
        .sp-fnticks{display:flex;justify-content:space-between;margin-top:8px;font-family:var(--sp-mono);font-size:9px;letter-spacing:.14em;color:rgba(250,250,247,.32)}
        .sp-fnres{padding:clamp(20px,2.4vw,28px);border-radius:14px;background:rgba(214,243,95,.06);border:1px solid rgba(214,243,95,.3);display:flex;flex-direction:column}
        .sp-finder .sp-seg button{white-space:nowrap}
        .sp-plan.sp-rec{border-color:rgba(214,243,95,.55);box-shadow:0 0 0 1px rgba(214,243,95,.25)}
        @media (max-width:900px){.sp-finder{grid-template-columns:1fr}}
      `)));
};
const Hero = ({
  annual,
  setAnnual
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Pricing Hero",
  style: {
    position: "relative",
    background: BG,
    padding: "clamp(64px,8vw,104px) 0 40px",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(250,250,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(250,250,247,0.04) 1px,transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: -220,
    left: "40%",
    width: 700,
    height: 700,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(214,243,95,0.14), transparent 60%)",
    pointerEvents: "none",
    animation: "sp-glow 6s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement(SparkW, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, {
  color: LIME
}, ">> PRICING"), /*#__PURE__*/React.createElement("h1", {
  className: "sp-h1",
  style: {
    margin: "18px auto 0",
    maxWidth: 900
  }
}, "Priced on programs, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "not people.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    margin: "22px auto 0",
    textAlign: "center"
  }
}, "Every plan includes unlimited brand ambassador seats. Monthly or annual. No twelve-month minimum."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 34,
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-seg",
  role: "group",
  "aria-label": "Billing period"
}, /*#__PURE__*/React.createElement("button", {
  "aria-pressed": !annual,
  onClick: () => setAnnual(false)
}, "Monthly"), /*#__PURE__*/React.createElement("button", {
  "aria-pressed": annual,
  onClick: () => setAnnual(true)
}, "Annual")), /*#__PURE__*/React.createElement("span", {
  className: "sp-pill sp-pill-lime"
}, "ANNUAL SAVES 2 MONTHS"))));
const Plans = ({
  annual,
  rec
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "02 Plans",
  style: {
    background: BG,
    padding: "0 0 clamp(72px,9vw,120px)"
  }
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-plans"
}, PLANS.map(p => /*#__PURE__*/React.createElement("div", {
  key: p.n,
  className: "sp-plan" + (p.pop ? " sp-pop" : "") + (p.n === rec ? " sp-rec" : "")
}, p.n === rec && /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: -1,
    right: 18,
    transform: "translateY(-50%)",
    padding: "5px 10px",
    background: "#0A0B0D",
    border: "1px solid rgba(214,243,95,.6)",
    color: LIME,
    fontFamily: MONO,
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: ".16em",
    borderRadius: 999,
    whiteSpace: "nowrap"
  }
}, "YOUR FIT"), p.pop && /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: -1,
    left: 22,
    transform: "translateY(-50%)",
    padding: "5px 10px",
    background: LIME,
    color: "#0F0F0D",
    fontFamily: MONO,
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: ".16em",
    borderRadius: 999
  }
}, "MOST POPULAR"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    fontSize: 12,
    letterSpacing: ".18em",
    color: p.pop ? LIME : FG,
    fontWeight: 700
  }
}, p.n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    color: MUT,
    marginTop: 6
  }
}, p.best), /*#__PURE__*/React.createElement("div", {
  className: "sp-price"
}, annual ? p.a : p.m, /^\$\d|\$X/.test(p.m) && /*#__PURE__*/React.createElement("small", null, "/ mo")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", null, "\u2192"), p.f.ws, " workspace", p.f.ws === "1" ? "" : "s"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", null, "\u2192"), p.f.ev, " active events"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", null, "\u2192"), "Unlimited ambassador seats"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", null, "\u2192"), p.f.adm, " admin seat", p.f.adm === "1" ? "" : "s"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", null, "\u2192"), "GPS, recaps, photo capture"), /*#__PURE__*/React.createElement("li", {
  className: p.f.tmpl ? "" : "off"
}, /*#__PURE__*/React.createElement("i", null, p.f.tmpl ? "→" : "-"), "Custom recap templates"), /*#__PURE__*/React.createElement("li", {
  className: p.f.ai ? "" : "off"
}, /*#__PURE__*/React.createElement("i", null, p.f.ai ? "→" : "-"), "Ask AI and insights"), /*#__PURE__*/React.createElement("li", {
  className: p.f.wl ? "" : "off"
}, /*#__PURE__*/React.createElement("i", null, p.f.wl ? "→" : "-"), "White-label client portal"), /*#__PURE__*/React.createElement("li", {
  className: p.f.sso ? "" : "off"
}, /*#__PURE__*/React.createElement("i", null, p.f.sso ? "→" : "-"), "SSO, audit log, dedicated CSM")), /*#__PURE__*/React.createElement("a", {
  href: p.href,
  className: p.pop ? "sp-btn" : "sp-ghost",
  style: {
    marginTop: 22,
    justifyContent: "center",
    padding: "13px 18px",
    fontSize: 14
  }
}, p.cta)))), /*#__PURE__*/React.createElement("p", {
  className: "sp-foot",
  style: {
    marginTop: 18,
    color: LIME
  }
}, "// UNLIMITED AMBASSADOR SEATS ON EVERY TIER \xB7 $XX PLACEHOLDERS PENDING FINAL PRICING")));
const Table = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "03 Compare plans",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> FULL COMPARISON"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Every plan, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "line by line."))), /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    marginTop: 40,
    overflowX: "auto",
    border: `1px solid ${LINE}`,
    borderRadius: 14,
    background: BG
  }
}, /*#__PURE__*/React.createElement("table", {
  className: "sp-cmp"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
  scope: "col"
}, "Feature"), PLANS.map(p => /*#__PURE__*/React.createElement("th", {
  key: p.n,
  scope: "col",
  className: p.pop ? "sp-pop" : ""
}, p.n)))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map(([l, k]) => /*#__PURE__*/React.createElement("tr", {
  key: l
}, /*#__PURE__*/React.createElement("td", null, l), PLANS.map(p => /*#__PURE__*/React.createElement("td", {
  key: p.n,
  className: p.pop ? "sp-pop" : ""
}, /*#__PURE__*/React.createElement(Cell, {
  v: val(p, k)
}))))))))));
const Bench = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "04 Add-on",
  pad: "clamp(56px,7vw,90px) 0"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv sp-card",
  style: {
    borderLeft: `4px solid ${LIME}`,
    padding: "clamp(26px,3vw,42px)",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 40,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, {
  color: LIME
}, ">> ADD-ON"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h3",
  style: {
    margin: "14px 0 0",
    fontSize: "clamp(26px,3.2vw,44px)",
    color: FG
  }
}, "Need bodies, not just software?"), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 14
  }
}, "Ignite staffs and executes on Spark in all 50 states. Agency fees are always a visible line item, never baked into the rate."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "sp-btn",
  href: "https://sparkbyignite.igniteproductions.co/"
}, "Talk to us ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
  className: "sp-ghost",
  href: "https://sparkbyignite.igniteproductions.co/product/network"
}, "About the bench"))), /*#__PURE__*/React.createElement("div", {
  className: "sp-statrow",
  style: {
    gridTemplateColumns: "1fr 1fr 1fr",
    borderRadius: 12,
    overflow: "hidden"
  }
}, [["257K+", "AMBASSADORS"], ["50", "STATES"], ["48HR", "RUSH"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: MONO,
    fontWeight: 700,
    fontSize: 26,
    color: LIME
  }
}, v), /*#__PURE__*/React.createElement("div", {
  className: "sp-foot",
  style: {
    marginTop: 5
  }
}, l))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){.sp-card[style*="grid-template-columns: 1.3fr"]{grid-template-columns:1fr !important}}`)));
const FAQS = [["Do you really not charge per ambassador?", "Correct. Load 500 brand ambassadors onto the Field plan and the price does not move. We price on programs because that is what actually drives our cost."], ["What counts as an active event?", "One activation, at one venue, on one date. A three-day festival with a single setup is one event. Three stores on one day is three."], ["What is the contract length?", "Monthly or annual, your choice. Annual saves two months. There is no twelve-month minimum."], ["Can we switch between software and full service?", "Yes, in either direction, and your historical data comes with you."], ["What happens if we exceed our event limit?", "Nothing breaks. We flag it and talk to you about the next tier."]];
const App = () => {
  useSparkReveal();
  const [annual, setAnnual] = React.useState(false);
  const [ev, setEv] = React.useState(40);
  const [ws, setWs] = React.useState(1);
  React.useEffect(() => {
    const el = document.getElementById("sp-ev");
    if (el) el.style.setProperty("--p", (ev - 1) / 299 * 100 + "%");
  }, [ev]);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Pricing"
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "pricing"
  }), /*#__PURE__*/React.createElement(Hero, {
    annual: annual,
    setAnnual: setAnnual
  }), /*#__PURE__*/React.createElement(Finder, {
    ev: ev,
    setEv: setEv,
    ws: ws,
    setWs: setWs
  }), /*#__PURE__*/React.createElement(Plans, {
    annual: annual,
    rec: recommend(ev, ws)
  }), /*#__PURE__*/React.createElement(Table, null), /*#__PURE__*/React.createElement(Bench, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: FAQS,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Pricing ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, "questions."))
  }), /*#__PURE__*/React.createElement(SparkCta, {
    h: "Your next activation is next week. Start there.",
    sub: "Free to start. Unlimited ambassadors. No card required."
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkPricing: App
});
})();
