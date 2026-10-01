(function(){if (typeof window !== "undefined" && window.PageSparkCompare) return;
/* Auto-extracted from the design project's pages/spark-compare.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

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
const RIVALS = [{
  k: "demo-wizard",
  name: "Demo Wizard",
  cat: "In-store demo management software",
  good: "Scheduling store events and handling retailer paperwork for demo companies.",
  wins: "Spark verifies every shift by GPS at the venue, auto-builds the recap at clock-out, and comes with the 257K+ field team to actually run the demos. Demo Wizard schedules; Spark schedules, staffs, proves, and reports.",
  seo: "Demo Wizard alternative for CPG demo programs",
  vals: {
    seats: "P:priced per program tier",
    exec: "N:software only",
    demo: "Y",
    gps: "P:check-in, not radius-verified",
    offline: "P",
    certs: "P",
    recap: "Y:manual assembly",
    overdue: "N",
    cps: "P",
    intake: "Y",
    multi: "Y",
    data: "Y",
    min: "P:annual typical",
    free: "N"
  }
}, {
  k: "promomash",
  name: "Promomash",
  cat: "Trade promotion + field execution",
  good: "Trade-spend planning and promotion accounting for CPG finance teams.",
  wins: "Spark is execution-first: staffing boards, GPS-verified shifts, cost-per-sample analytics, and unlimited ambassador seats. Promomash tracks the promotion budget; Spark runs and proves the activation that spends it.",
  seo: "Promomash alternative for field marketing execution",
  vals: {
    seats: "N:per user",
    exec: "N",
    demo: "P:promotion-first",
    gps: "P",
    offline: "P",
    certs: "N",
    recap: "P:promotion reports",
    overdue: "N",
    cps: "P:promo ROI, not per-sample",
    intake: "P",
    multi: "P",
    data: "Y",
    min: "N:annual contracts",
    free: "N"
  }
}, {
  k: "pinata",
  name: "Piñata",
  cat: "Field marketing execution platform",
  good: "Activation-focused software with GPS check-ins and recaps, the closest analog in intent.",
  wins: "Spark ships with the field team. Every program is staffed and executed by Ignite's 257K+ network with unlimited ambassador seats and missing-recap enforcement, so you get the platform and the people from one partner. Piñata hands you software and a per-seat invoice.",
  seo: "Piñata alternative with execution included",
  vals: {
    seats: "N:per seat",
    exec: "N:software only",
    demo: "Y",
    gps: "Y",
    offline: "Y",
    certs: "P",
    recap: "Y",
    overdue: "P",
    cps: "P",
    intake: "P",
    multi: "Y",
    data: "Y",
    min: "N:annual",
    free: "N"
  }
}, {
  k: "repsly",
  name: "Repsly",
  cat: "Retail execution / rep visits",
  good: "Merchandising audits and field-sales rep visits for CPG sales teams.",
  wins: "Spark is built for demos, sampling, and activations staffed by a rotating ambassador bench, with certification gating, auto recaps, and no per-user pricing. Repsly counts rep visits; Spark counts samples in hands.",
  seo: "Repsly alternative for demos and sampling",
  vals: {
    seats: "N:per user",
    exec: "N",
    demo: "P:merchandising-first",
    gps: "Y",
    offline: "Y",
    certs: "N",
    recap: "P:audit forms",
    overdue: "N",
    cps: "N",
    intake: "N",
    multi: "P:enterprise tier",
    data: "Y",
    min: "N:12-mo min",
    free: "N"
  }
}];
const SPARK_VALS = {
  seats: "Y:unlimited, every plan",
  exec: "Y:included, 257K+ bench",
  demo: "Y",
  gps: "Y:venue radius",
  offline: "Y",
  certs: "Y:TIPS / RBS / food",
  recap: "Y:auto at clock-out",
  overdue: "Y",
  cps: "Y",
  intake: "Y:no login",
  multi: "Y",
  data: "Y",
  min: "Y:monthly ok",
  free: "Y:5 events / mo"
};
const ROWS = [{
  g: "THE MOATS",
  rows: [["seats", "Unlimited ambassador seats"], ["exec", "Done-for-you execution included"]]
}, {
  g: "BUILT FOR THE FIELD",
  rows: [["demo", "Purpose-built for demos, sampling & activations"], ["gps", "GPS-verified check-in"], ["offline", "Offline capture with auto-sync"], ["certs", "Certification gating before a shift is claimed"]]
}, {
  g: "PROOF & REPORTING",
  rows: [["recap", "Auto-generated recaps"], ["overdue", "Missing-recap enforcement & overdue aging"], ["cps", "Cost-per-sample & lift-per-door analytics"], ["intake", "Public no-login request intake"]]
}, {
  g: "COMMERCIAL",
  rows: [["multi", "Multi-client isolated workspaces"], ["data", "Your data, exportable"], ["min", "No 12-month minimum"], ["free", "Free tier to start"]]
}];
const Cell = ({
  v,
  hi
}) => {
  const [k, note] = v.split(":");
  const map = {
    Y: ["✓", LIME],
    N: ["✕", RED],
    P: ["Partial", MUT]
  };
  const [t, c] = map[k];
  return /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "center",
      padding: "14px 12px",
      color: c,
      fontFamily: MONO,
      fontSize: 12,
      background: hi ? "rgba(214,243,95,.05)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, t), note && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 9.5,
      color: MUT,
      marginTop: 3,
      letterSpacing: ".02em"
    }
  }, note));
};
const Pill = ({
  v,
  spark
}) => {
  const [k, note] = v.split(":");
  const m = {
    Y: ["✓", "Yes", LIME, "rgba(214,243,95,.12)", "rgba(214,243,95,.4)"],
    N: ["✕", "No", RED, "rgba(226,104,90,.1)", "rgba(226,104,90,.35)"],
    P: ["~", "Partial", MUT, "rgba(250,250,247,.05)", "rgba(250,250,247,.14)"]
  };
  const [g, t, c, bg, bd] = m[k];
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-pill",
    style: {
      borderColor: spark && k === "Y" ? LIME : bd,
      background: bg,
      boxShadow: spark && k === "Y" ? "0 0 18px rgba(214,243,95,.18)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-pill-g",
    style: {
      color: c
    }
  }, g), /*#__PURE__*/React.createElement("span", {
    className: "sp-pill-t",
    style: {
      color: k === "P" ? FG2 : c
    }
  }, t), note && /*#__PURE__*/React.createElement("span", {
    className: "sp-pill-n"
  }, note));
};
const Versus = () => {
  const [rival, setRival] = React.useState(RIVALS[0]);
  const wins = ROWS.flatMap(g => g.rows).filter(([k]) => SPARK_VALS[k].startsWith("Y") && !rival.vals[k].startsWith("Y")).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-vs"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sp-vs-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      color: LIME,
      marginBottom: 12
    }
  }, "PICK A COMPARISON"), RIVALS.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.k,
    className: "sp-rivalcard" + (r.k === rival.k ? " is-on" : ""),
    onClick: () => setRival(r),
    "aria-pressed": r.k === rival.k
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-rivalcard-vs"
  }, "SPARK VS"), /*#__PURE__*/React.createElement("span", {
    className: "sp-rivalcard-n"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-rivalcard-c"
  }, r.cat)))), /*#__PURE__*/React.createElement("div", {
    className: "sp-vs-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-vs-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      color: MUT
    }
  }, rival.cat.toUpperCase()), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "8px 0 0",
      fontFamily: SANS,
      fontWeight: 800,
      fontSize: "clamp(26px,3vw,40px)",
      letterSpacing: "-.03em",
      color: FG,
      lineHeight: 1.05
    }
  }, "Spark ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: MUT,
      fontWeight: 500
    }
  }, "vs"), " ", rival.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: MUT,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: MUT,
      marginRight: 8
    }
  }, "GOOD AT"), rival.good), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 15.5,
      lineHeight: 1.6,
      color: FG,
      maxWidth: 640,
      paddingLeft: 14,
      borderLeft: `2px solid ${LIME}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME,
      marginRight: 8
    }
  }, "WHERE SPARK WINS"), rival.wins)), /*#__PURE__*/React.createElement("div", {
    className: "sp-vs-score"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-vs-score-n"
  }, wins), /*#__PURE__*/React.createElement("span", {
    className: "sp-vs-score-l"
  }, "capabilities", /*#__PURE__*/React.createElement("br", null), "Spark has that", /*#__PURE__*/React.createElement("br", null), rival.name, " doesn't"))), /*#__PURE__*/React.createElement("div", {
    className: "sp-vs-cols"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME
    }
  }, "SPARK"), /*#__PURE__*/React.createElement("span", null, rival.name.toUpperCase())), ROWS.map(grp => /*#__PURE__*/React.createElement("div", {
    key: grp.g,
    className: "sp-vs-grp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-vs-grp-l",
    style: {
      color: grp.g === "THE MOATS" ? LIME : MUT
    }
  }, grp.g), grp.rows.map(([key, label]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    className: "sp-vs-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-vs-lab"
  }, label), /*#__PURE__*/React.createElement(Pill, {
    v: SPARK_VALS[key],
    spark: true
  }), /*#__PURE__*/React.createElement(Pill, {
    v: rival.vals[key]
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "sp-foot",
    style: {
      marginTop: 22
    }
  }, "// BASED ON EACH VENDOR'S PUBLISHED FEATURE + PRICING PAGES \xB7 \"PARTIAL\" = LIMITED FORM OR HIGHER TIER \xB7 UPDATED ", new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  }).toUpperCase()), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontFamily: MONO,
      fontSize: 10,
      lineHeight: 1.6,
      letterSpacing: ".04em",
      color: MUT
    }
  }, "Demo Wizard, Promomash, Pi\xF1ata, and Repsly are trademarks of their respective owners, which are not affiliated with and do not endorse Ignite Productions or Spark. Comparisons reflect publicly available information at the date shown and are provided for informational purposes; features and pricing change. Spot an error? ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:staffing@igniteproductions.co",
    style: {
      color: LIME
    }
  }, "Tell us"), " and we'll correct it."))), /*#__PURE__*/React.createElement("style", null, `
        .sp-vs{display:grid;grid-template-columns:260px 1fr;gap:28px;align-items:start}
        .sp-vs-side{position:sticky;top:96px;display:flex;flex-direction:column;gap:10px}
        .sp-rivalcard{display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left;padding:16px 18px;border-radius:14px;border:1px solid var(--sp-line);background:var(--sp-card);cursor:pointer;transition:border-color .18s,transform .18s,background .18s;color:var(--sp-fg)}
        .sp-rivalcard:hover{border-color:rgba(214,243,95,.4);transform:translateX(4px)}
        .sp-rivalcard.is-on{border-color:var(--sp-lime);background:rgba(214,243,95,.07);box-shadow:0 0 0 1px rgba(214,243,95,.25),0 12px 40px rgba(0,0,0,.4)}
        .sp-rivalcard-vs{font-family:var(--sp-mono);font-size:9.5px;letter-spacing:.2em;color:var(--sp-mut)}
        .sp-rivalcard.is-on .sp-rivalcard-vs{color:var(--sp-lime)}
        .sp-rivalcard-n{font-family:var(--sp-sans);font-weight:700;font-size:18px;letter-spacing:-.02em}
        .sp-rivalcard-c{font-family:var(--sp-mono);font-size:10px;letter-spacing:.04em;color:var(--sp-mut);line-height:1.4}
        .sp-vs-main{background:var(--sp-card);border:1px solid var(--sp-line);border-radius:18px;padding:30px 30px 26px}
        .sp-vs-head{display:flex;justify-content:space-between;gap:28px;align-items:flex-start;padding-bottom:26px;border-bottom:1px solid var(--sp-line)}
        .sp-vs-score{flex-shrink:0;display:flex;align-items:center;gap:14px;padding:16px 20px;border-radius:14px;background:rgba(214,243,95,.08);border:1px solid rgba(214,243,95,.3)}
        .sp-vs-score-n{font-family:var(--sp-mono);font-weight:700;font-size:48px;line-height:1;color:var(--sp-lime);letter-spacing:-.04em}
        .sp-vs-score-l{font-family:var(--sp-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--sp-fg2);line-height:1.5}
        .sp-vs-cols{display:grid;grid-template-columns:1fr 190px 190px;gap:12px;padding:18px 0 6px;font-family:var(--sp-mono);font-size:10.5px;letter-spacing:.16em;color:var(--sp-mut)}
        .sp-vs-cols span:nth-child(n+2){text-align:center}
        .sp-vs-grp{margin-top:8px}
        .sp-vs-grp-l{font-family:var(--sp-mono);font-size:9.5px;letter-spacing:.22em;padding:14px 0 6px}
        .sp-vs-row{display:grid;grid-template-columns:1fr 190px 190px;gap:12px;align-items:center;padding:9px 0}
        .sp-vs-row+.sp-vs-row{border-top:1px solid rgba(250,250,247,.04)}
        .sp-vs-lab{font-family:var(--sp-sans);font-size:14.5px;color:var(--sp-fg)}
        .sp-pill{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:44px;padding:6px 10px;border-radius:10px;border:1px solid;text-align:center}
        .sp-pill-g{font-family:var(--sp-mono);font-weight:700;font-size:13px;line-height:1}
        .sp-pill-t{font-family:var(--sp-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase}
        .sp-pill-n{font-family:var(--sp-mono);font-size:9px;color:var(--sp-mut);letter-spacing:.02em;line-height:1.3}
        @media (max-width:960px){.sp-vs{grid-template-columns:1fr}.sp-vs-side{position:static;flex-direction:row;overflow-x:auto;padding-bottom:6px}.sp-rivalcard{min-width:200px}.sp-vs-head{flex-direction:column}}
        @media (max-width:640px){.sp-vs-cols,.sp-vs-row{grid-template-columns:1fr 1fr 1fr}.sp-vs-lab{grid-column:1/-1;padding-bottom:4px}.sp-vs-cols span:first-child{display:none}.sp-vs-cols{grid-template-columns:1fr 1fr}.sp-vs-main{padding:22px 18px}}
      `));
};
/* Indexable per-competitor sections — one H2 per "Spark vs X" query so search + AI engines have a citable block per rival */
const Alternatives = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Alternatives",
  bg: BG
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> SPARK VS THE FIELD"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Looking for a ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, RIVALS.map(r => r.name).join(", ")), " alternative?"), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Each of these tools is good at what it was built for. Here's where Spark is the better answer, one at a time.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 16
  },
  className: "sp-altgrid"
}, RIVALS.map(r => /*#__PURE__*/React.createElement("article", {
  key: r.k,
  id: "vs-" + r.k,
  className: "sp-rv",
  style: {
    background: CARD,
    border: `1px solid ${LINE}`,
    borderRadius: 14,
    padding: "26px 26px 24px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, r.seo.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: "10px 0 0",
    fontFamily: SANS,
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: "-.02em",
    color: FG
  }
}, "Spark vs ", r.name), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "10px 0 0",
    fontSize: 13.5,
    lineHeight: 1.55,
    color: MUT
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    marginRight: 8
  }
}, "GOOD AT"), r.good), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "10px 0 0",
    fontSize: 15,
    lineHeight: 1.6,
    color: FG,
    paddingLeft: 12,
    borderLeft: `2px solid ${LIME}`
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME,
    marginRight: 8
  }
}, "WHERE SPARK WINS"), r.wins), /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: "16px 0 0",
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: 8
  }
}, [["seats", "Unlimited ambassador seats"], ["exec", "Ignite field team included"], ["overdue", "Missing-recap enforcement"]].map(([key, label]) => /*#__PURE__*/React.createElement("li", {
  key: key,
  style: {
    display: "flex",
    gap: 10,
    alignItems: "baseline",
    fontFamily: MONO,
    fontSize: 12,
    color: FG2,
    flexWrap: "nowrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontWeight: 700
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto",
    whiteSpace: "nowrap",
    flexShrink: 0,
    color: r.vals[key].startsWith("Y") ? MUT : RED
  }
}, r.name, ": ", r.vals[key].split(":")[0] === "Y" ? "yes" : r.vals[key].split(":")[0] === "P" ? "partial" : "no")))), /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact",
  className: "sp-foot",
  style: {
    display: "inline-block",
    marginTop: 18,
    color: LIME,
    textDecoration: "none"
  }
}, "SEE IT ON YOUR PROGRAM \u2192")))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:820px){.sp-altgrid{grid-template-columns:1fr!important}}`)));
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Compare",
  style: {
    position: "relative",
    background: BG,
    padding: "clamp(64px,8vw,104px) 0 0",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("nav", {
  "aria-label": "Breadcrumb",
  style: {
    display: "flex",
    gap: 10,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/",
  className: "sp-foot",
  style: {
    textDecoration: "none",
    color: MUT
  }
}, "SPARK"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot"
}, "/"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, "COMPARE")), /*#__PURE__*/React.createElement("div", {
  className: "sp-cmphero",
  style: {
    marginTop: 36
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 760
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, {
  color: LIME
}, "* HONEST COMPARISON"), /*#__PURE__*/React.createElement("h1", {
  className: "sp-h1"
}, "How Spark ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "compares.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 24
  }
}, "Evaluating Demo Wizard, Promomash, Pi\xF1ata, or Repsly? Most of them price per user and stop at software. Spark is the field marketing platform behind every Ignite program: built for demos, sampling, and activations, with unlimited ambassador seats and a 257K+ field team included. Here's the honest side-by-side.")), /*#__PURE__*/React.createElement("aside", {
  className: "sp-tally sp-rv",
  "aria-label": "Spark at a glance"
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, "SPARK \xB7 AT A GLANCE"), [["257K+", "vetted ambassadors, all 50 states"], ["∞", "ambassador seats, every program"], ["48hr", "coverage in most major metros"], ["24hr", "typical recap turnaround"], ["100%", "GPS-verified check-ins"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  className: "sp-tally-row"
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-tally-v"
}, v), /*#__PURE__*/React.createElement("span", {
  className: "sp-tally-l"
}, l))), /*#__PURE__*/React.createElement("div", {
  className: "sp-foot",
  style: {
    marginTop: 14,
    color: MUT
  }
}, "// INCLUDED WITH EVERY IGNITE PROGRAM"))), /*#__PURE__*/React.createElement("style", null, `
        .sp-cmphero{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:start}
        .sp-tally{background:var(--sp-card);border:1px solid rgba(214,243,95,.28);border-radius:16px;padding:22px 24px;box-shadow:0 0 0 1px rgba(214,243,95,.06),0 30px 80px rgba(0,0,0,.45)}
        .sp-tally-row{display:flex;align-items:baseline;gap:14px;padding:12px 0;border-top:1px solid var(--sp-line)}
        .sp-tally-row:first-of-type{border-top:0}
        .sp-tally-v{font-family:var(--sp-mono);font-weight:700;font-size:26px;color:var(--sp-lime);letter-spacing:-.03em;min-width:84px}
        .sp-tally-l{font-family:var(--sp-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--sp-fg2);line-height:1.4}
        @media (max-width:900px){.sp-cmphero{grid-template-columns:1fr}}
      `), /*#__PURE__*/React.createElement(Versus, null)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 72
  }
}, /*#__PURE__*/React.createElement(SparkTicker, null)));
const NotFit = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Not a fit",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-2col sp-rv",
  style: {
    alignItems: "start",
    gap: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> WHEN WE'RE NOT THE ANSWER"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Not a fit for ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: MUT,
    fontStyle: "italic"
  }
}, "everything."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  className: "sp-lede"
}, "Spark is not built for store-associate task management, shelf image recognition at enterprise scale, or trade promotion financial planning. If that is what you need, Zipline, Trax, and Vividly are better answers than we are."), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "If you're running demos, sampling, street teams, festivals, or ambassador programs \u2014 and you want the platform and the field team from one partner \u2014 keep reading."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "sp-btn",
  href: "https://www.igniteproductions.co/contact"
}, "See Spark on a live program ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
  className: "sp-ghost",
  href: "https://www.igniteproductions.co/contact"
}, "Talk to a human"))))));
const FAQ = [["What is the best Demo Wizard alternative for CPG demo programs?", "Spark by Ignite. Both schedule in-store demos, but Spark adds GPS-verified check-in at the venue radius, recaps that auto-generate at clock-out, missing-recap enforcement, unlimited ambassador seats, and Ignite's 257K+ field team included to staff and execute every demo."], ["How does Spark compare to Promomash for field marketing?", "Promomash is strongest at trade promotion planning and spend; field execution is a module. Spark is execution-first: staffing boards, GPS verification, auto recaps, and cost-per-sample analytics, with no per-user pricing and no annual minimum."], ["Is Spark a Piñata alternative?", "Yes. Both are activation-focused platforms with GPS and recaps. The difference is commercial and operational: Spark comes with execution: every program is staffed and run by Ignite's 257K+ field team with unlimited ambassador seats, and the platform is included. Piñata is software only and prices per seat."], ["Is Spark a retail execution platform like Repsly?", "Adjacent, but no. Retail execution platforms are built for merchandising audits and field-sales rep visits and price per user. Spark is built for demos, sampling, and brand activations staffed by a rotating ambassador bench."], ["Why doesn't Spark charge per brand ambassador seat?", "Because field programs run on large rotating rosters and Spark is included with every Ignite program. There are no per-user fees — ambassador seats are unlimited on every program we run."], ["Can we migrate our program data from Demo Wizard, Promomash, or Piñata?", "Yes. CSV import for events, locations, and rosters, direct Connecteam import, and historical recaps loaded during onboarding so your first quarter has a baseline."], ["Is Spark available as standalone software?", "Not today. Spark is included with every Ignite field program — we staff, execute, and report on it. Standalone licensing is on the roadmap; book a demo to be first in line."]];
sparkSetMeta({
  title: "Spark vs Demo Wizard, Promomash, Piñata & Repsly | Compare",
  desc: "Honest comparison of Spark field marketing software vs Demo Wizard, Promomash, Piñata, and Repsly. Unlimited ambassador seats, GPS-verified recaps, 257K+ field team included.",
  canonical: "https://sparkbyignite.igniteproductions.co/compare",
  faq: FAQ
});
const App = () => {
  useSparkReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Compare"
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "compare"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Alternatives, null), /*#__PURE__*/React.createElement(NotFit, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: FAQ,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Comparison ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, "questions."))
  }), /*#__PURE__*/React.createElement(SparkCta, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkCompare: App
});
})();
