(function(){if (typeof window !== "undefined" && window.PageSparkTrust) return;
/* Auto-extracted from the design project's pages/spark-trust.html.
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
const ITEMS = [["EXPORT", "Every record is exportable.", "CSV, PDF, and slide-ready formats. One row per event and ambassador pair."], ["PHOTOS", "Bulk photo download.", "Galleries with embedded GPS coordinates and timestamps, downloadable per event or per program."], ["ACCESS", "Role-based access.", "A brand partner sees their program and nothing else. Agencies isolate every client in its own workspace."], ["SHARE", "Client links, no accounts.", "Share a live dashboard link with stakeholders who never need to create a login."], ["API", "API and data feed.", "Push activation data into your warehouse or BI stack. Webhooks for check-ins, recaps, and photo uploads."], ["OWNERSHIP", "Your data is yours.", "We do not sell, resell, or aggregate your field data. Bring it in on day one, take it with you if you leave."], ["GOVERNANCE", "SSO and audit log.", "Enterprise plans include single sign-on, a full audit trail, and granular admin permissions."], ["OFFLINE", "Offline-safe capture.", "The app captures GPS, photos, and counts without signal and syncs when connection returns. Nothing is lost in a back room."]];
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Trust",
  style: {
    position: "relative",
    background: BG,
    padding: "clamp(64px,8vw,104px) 0 0",
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
}), /*#__PURE__*/React.createElement(SparkW, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("nav", {
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
}, "TRUST & DATA")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    maxWidth: 900
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, {
  color: LIME
}, "* DATA"), /*#__PURE__*/React.createElement("h1", {
  className: "sp-h1"
}, "Your data, your exports, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "your call.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 24
  }
}, "Field data is the whole product. Here is exactly how it moves in, who can see it, how it leaves, and who owns it.")), /*#__PURE__*/React.createElement("div", {
  className: "sp-2x2 sp-rv",
  style: {
    marginTop: 56,
    gap: 14
  }
}, ITEMS.map(([k, t, d]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  className: "sp-card",
  style: {
    padding: "24px 24px 26px",
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: 18,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME,
    paddingTop: 5
  }
}, k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: 0,
    fontSize: 20,
    color: FG
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "8px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: FG2
  }
}, d)))))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 72
  }
}, /*#__PURE__*/React.createElement(SparkTicker, {
  items: [["●", "LIVE"], ["", "CSV · PDF · SLIDES"], ["", "GPS + TIMESTAMP EMBEDDED"], ["", "ROLE-BASED ACCESS"], ["", "API + WEBHOOKS"], ["0", "DATA RESOLD"], ["", "SSO ON ENTERPRISE"], ["", "OFFLINE-SAFE"]]
})));
const EXPORTS = [["csv", "CSV", /*#__PURE__*/React.createElement(React.Fragment, null, "One row per event and ambassador pair. Straight into Excel, Sheets, or your warehouse.")], ["pdf", "PDF recap", /*#__PURE__*/React.createElement(React.Fragment, null, "The client-ready recap: metrics, photos, notes, cost per sample, already formatted.")], ["photos", "Photo bundle", /*#__PURE__*/React.createElement(React.Fragment, null, "Every image with GPS coordinates and capture time embedded in the file.")], ["api", "API / webhook", /*#__PURE__*/React.createElement(React.Fragment, null, "Push check-ins, recaps, and uploads into your own stack the moment they happen.")], ["link", "Share link", /*#__PURE__*/React.createElement(React.Fragment, null, "A live, read-only dashboard for a retailer or distributor. No login, no PDF.")]];
const CSV_ROWS = [["event_id", "market", "account", "ba", "samples", "photos", "gps_ok", "recap_hrs"], ["EV-40812", "Austin, TX", "H-E-B Mueller", "M. Vega", "327", "12", "true", "3.1"], ["EV-40813", "Brooklyn, NY", "Whole Foods Gowanus", "D. Cole", "254", "9", "true", "2.4"], ["EV-40814", "Denver, CO", "King Soopers 041", "R. Vance", "198", "11", "true", "4.0"], ["EV-40815", "Miami, FL", "Publix 0731", "K. Brooks", "301", "10", "true", "2.9"]];
const ExportPreview = () => {
  const [k, setK] = React.useState("csv");
  const meta = EXPORTS.find(e => e[0] === k);
  return /*#__PURE__*/React.createElement(SparkSec, {
    label: "02 What leaves the platform"
  }, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> EXPORTS"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "Look at what ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "actually leaves.")), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 18
    }
  }, "Pick a format. This is the shape of the data you get. Not a promise, a preview.")), /*#__PURE__*/React.createElement("div", {
    className: "sp-xtabs sp-rv",
    role: "tablist",
    "aria-label": "Export formats",
    style: {
      marginTop: 28
    }
  }, EXPORTS.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    role: "tab",
    "aria-selected": k === key,
    className: "sp-xtab" + (k === key ? " is-on" : ""),
    onClick: () => setK(key)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "sp-rv sp-xpanel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-xside"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME
    }
  }, meta[1].toUpperCase()), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 15,
      lineHeight: 1.6,
      color: FG2
    }
  }, meta[2]), /*#__PURE__*/React.createElement("p", {
    className: "sp-foot",
    style: {
      marginTop: 20
    }
  }, "// AVAILABLE ON EVERY PLAN", k === "api" ? " · API ON AGENCY AND UP" : "")), /*#__PURE__*/React.createElement("div", {
    className: "sp-xbody"
  }, k === "csv" && /*#__PURE__*/React.createElement("table", {
    className: "sp-xcsv"
  }, /*#__PURE__*/React.createElement("tbody", null, CSV_ROWS.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: i === 0 ? "h" : ""
  }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, c)))))), k === "pdf" && /*#__PURE__*/React.createElement("div", {
    className: "sp-xdoc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-xdochead"
  }, /*#__PURE__*/React.createElement("span", null, "AUSTIN, TX \xB7 H-E-B MUELLER"), /*#__PURE__*/React.createElement("span", null, "SAT 12 TO 8 \xB7 RECAP READY 24H")), /*#__PURE__*/React.createElement("div", {
    className: "sp-xkpis"
  }, [["327", "SAMPLES"], ["68", "LEADS"], ["$2.18", "COST / SAMPLE"], ["97%", "PHOTO OK"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("div", {
    className: "sp-xphotos"
  }, ["https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquid-death-petsmart.jpg", "https://kyle915.github.io/ignite-webflow-assets/assets/activation-white-claw-tent-3.jpg", "https://kyle915.github.io/ignite-webflow-assets/assets/street-team-liquid-death-miami.jpg", "https://kyle915.github.io/ignite-webflow-assets/assets/activation-liquid-death-walmart.jpg", "https://kyle915.github.io/ignite-webflow-assets/assets/activation-feel-free-festival-cart.jpg", "https://kyle915.github.io/ignite-webflow-assets/assets/activation-liquid-death-festival-two-women.jpg"].map((src, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 6,
      bottom: 6,
      padding: "2px 6px",
      borderRadius: 4,
      background: "rgba(10,11,13,.75)",
      border: "1px solid rgba(214,243,95,.35)",
      fontFamily: MONO,
      fontSize: 8,
      letterSpacing: ".1em",
      color: LIME
    }
  }, "GPS \u2713")))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: 12.5,
      lineHeight: 1.55,
      color: MUT
    }
  }, "Notes: Mueller ran hot 2 to 5pm; 5-variant tasting drove trade-up to the 12-pack. Two OOS flagged on shelf tag audit.")), k === "photos" && /*#__PURE__*/React.createElement("div", {
    className: "sp-xlist"
  }, [["IMG_4412.jpg", "30.2989, -97.7218 · 14:06:22 · H-E-B Mueller"], ["IMG_4413.jpg", "30.2989, -97.7218 · 14:11:04 · shelf + display"], ["IMG_4414.jpg", "30.2989, -97.7218 · 15:38:51 · sampling table"], ["IMG_4415.jpg", "30.2989, -97.7218 · 18:02:10 · end-of-shift count"]].map(([f, m]) => /*#__PURE__*/React.createElement("div", {
    key: f
  }, /*#__PURE__*/React.createElement("b", null, f), /*#__PURE__*/React.createElement("span", null, m)))), k === "api" && /*#__PURE__*/React.createElement("pre", {
    className: "sp-xcode"
  }, `POST /webhooks/recap.completed

{
  "event_id": "EV-40812",
  "market": "Austin, TX",
  "account": "H-E-B Mueller",
  "ambassador": { "id": "BA-1188", "rating": 4.9 },
  "checkin": { "gps": [30.2989, -97.7218], "at": "2026-06-13T14:02:11Z" },
  "samples": { "total": 327, "by_sku": { "og": 141, "lime": 96, "zero": 90 } },
  "photos": 12,
  "recap_url": "https://spark.ignite/r/EV-40812"
}`), k === "link" && /*#__PURE__*/React.createElement("div", {
    className: "sp-xdoc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-xdochead"
  }, /*#__PURE__*/React.createElement("span", null, "SPARK.IGNITE / R / Q3-TOUR"), /*#__PURE__*/React.createElement("span", null, "READ-ONLY \xB7 NO LOGIN")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: 14,
      lineHeight: 1.6,
      color: FG2
    }
  }, "Share one link with a retailer, distributor, or brand partner. They see the markets, photos, and counts you allow. Live, with nothing else in view."), /*#__PURE__*/React.createElement("div", {
    className: "sp-xperms"
  }, [["Markets & counts", "VISIBLE"], ["Photo gallery", "VISIBLE"], ["Ambassador names", "HIDDEN"], ["Cost per sample", "HIDDEN"]].map(([l, s]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("b", {
    className: s === "VISIBLE" ? "on" : ""
  }, s))))))), /*#__PURE__*/React.createElement("style", null, `
          .sp-xtabs{display:flex;flex-wrap:wrap;gap:8px}
          .sp-xtab{padding:10px 17px;border-radius:999px;border:1px solid var(--sp-line);background:transparent;cursor:pointer;font-family:var(--sp-mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--sp-fg2);white-space:nowrap;transition:border-color .18s,color .18s,background .18s}
          .sp-xtab:hover{border-color:rgba(214,243,95,.5);color:var(--sp-fg)}
          .sp-xtab.is-on{background:rgba(214,243,95,.12);border-color:rgba(214,243,95,.55);color:var(--sp-lime)}
          .sp-xpanel{margin-top:24px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:24px;align-items:start}
          .sp-xside{padding:26px 24px;border-radius:14px;background:var(--sp-card);border:1px solid var(--sp-line)}
          .sp-xbody{padding:20px;border-radius:14px;background:#0D0F13;border:1px solid var(--sp-line);overflow:auto}
          .sp-xcsv{width:100%;border-collapse:collapse;font-family:var(--sp-mono);font-size:11px;min-width:560px}
          .sp-xcsv td{padding:9px 10px;border-bottom:1px solid var(--sp-line);color:var(--sp-fg2);white-space:nowrap}
          .sp-xcsv tr.h td{color:var(--sp-lime);letter-spacing:.1em;text-transform:uppercase;font-size:9.5px}
          .sp-xdochead{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-family:var(--sp-mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--sp-mut);padding-bottom:14px;border-bottom:1px solid var(--sp-line)}
          .sp-xkpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:16px}
          .sp-xkpis b{display:block;font-family:var(--sp-mono);font-size:22px;color:var(--sp-lime)}
          .sp-xkpis span{display:block;margin-top:4px;font-family:var(--sp-mono);font-size:8.5px;letter-spacing:.14em;color:var(--sp-mut)}
          .sp-xphotos{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:16px}
          .sp-xphotos span{display:block;aspect-ratio:1;border-radius:6px;background:linear-gradient(135deg,rgba(250,250,247,.09),rgba(250,250,247,.03));border:1px solid var(--sp-line)}
          .sp-xlist{display:flex;flex-direction:column}
          .sp-xlist div{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:12px 0;border-bottom:1px solid var(--sp-line)}
          .sp-xlist b{font-family:var(--sp-mono);font-size:12px;color:var(--sp-fg)}
          .sp-xlist span{font-family:var(--sp-mono);font-size:10px;color:var(--sp-mut)}
          .sp-xcode{margin:0;font-family:var(--sp-mono);font-size:11px;line-height:1.62;color:var(--sp-fg2);white-space:pre;overflow-x:auto}
          .sp-xperms{margin-top:16px;display:flex;flex-direction:column}
          .sp-xperms div{display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid var(--sp-line);font-size:13.5px;color:var(--sp-fg2)}
          .sp-xperms b{font-family:var(--sp-mono);font-size:9.5px;letter-spacing:.14em;color:var(--sp-mut)}
          .sp-xperms b.on{color:var(--sp-lime)}
          @media (max-width:900px){.sp-xpanel{grid-template-columns:1fr}.sp-xkpis,.sp-xphotos{grid-template-columns:repeat(3,1fr)}}
        `)));
};
const Onboard = () => /*#__PURE__*/React.createElement(SparkSec, {
  id: "onboard",
  label: "03 Onboarding",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> ONBOARDING"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Week one, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "not quarter one."))), /*#__PURE__*/React.createElement("div", {
  className: "sp-steps sp-rv",
  style: {
    marginTop: 44,
    gridTemplateColumns: "repeat(5,1fr)"
  }
}, [["DAY 1", "Scoping call.", "Show us how your programs are structured today, including the spreadsheets. Especially the spreadsheets."], ["DAY 2-3", "We build your templates.", "Activation types, brand standards, photo requirements, report fields. You review, we adjust."], ["DAY 4", "Roster upload and access.", "Your team, your agencies, and your ambassadors get in. Fifteen minutes for managers, zero for the field."], ["DAY 5", "First live activation.", "With someone from our team watching the feed next to you."], ["ONGOING", "A real human.", "Someone who knows your program. Not a ticket queue."]].map(([t, h, d]) => /*#__PURE__*/React.createElement("div", {
  key: t
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, t), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: "12px 0 0",
    fontSize: 19,
    color: FG
  }
}, h), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "10px 0 0",
    fontSize: 14.5,
    lineHeight: 1.55,
    color: FG2
  }
}, d)))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1024px){.sp-steps{grid-template-columns:1fr 1fr !important}}@media (max-width:640px){.sp-steps{grid-template-columns:1fr !important}}`)));
const FAQ = [["Who owns the field marketing data stored in Spark?", "You do. Spark does not sell, resell, or aggregate field data, and every record is exportable at any time as CSV, PDF, or slide-ready formats."], ["Can clients view Spark dashboards without creating an account?", "Yes. Share a live link and control exactly what each stakeholder sees. No login required for read-only access."], ["Does Spark have an API or data export for BI and data warehouses?", "Yes. API access, webhooks, and a scheduled data feed push activation data into your warehouse or BI stack."], ["Can we import historical field marketing data into Spark?", "Yes. Prior program data is loaded during onboarding so your first quarter on Spark has a baseline to compare against."], ["Does Spark support SSO and audit logging?", "Yes. SSO and a full audit log are included on the Enterprise plan."]];
sparkSetMeta({
  title: document.title,
  desc: (document.querySelector('meta[name="description"]') || {}).content || "",
  canonical: location.href.split("?")[0],
  faq: FAQ
});
const App = () => {
  useSparkReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Trust & Data"
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "trust"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ExportPreview, null), /*#__PURE__*/React.createElement(Onboard, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: FAQ,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Data ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, "questions."))
  }), /*#__PURE__*/React.createElement(SparkCta, {
    h: "See your own program on it.",
    sub: "Bring a real program. We'll load a sample of your data and show you exactly what leaves the platform and how."
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkTrust: App
});
})();
