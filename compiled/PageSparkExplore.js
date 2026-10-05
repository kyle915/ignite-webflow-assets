(function(){if (typeof window !== "undefined" && window.PageSparkExplore) return;
/* Auto-extracted from the design project's pages/spark-explore.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-spark-explore")) return;
  var s = document.createElement("style");
  s.id = "pagecss-spark-explore";
  s.textContent = ".sx-tabs{display:flex;gap:6px;padding:6px;border:1px solid var(--sp-line);border-radius:999px;background:var(--sp-card);width:max-content;max-width:100%;flex-wrap:wrap}\n.sx-tab{padding:11px 20px;border-radius:999px;border:0;background:transparent;cursor:pointer;font-family:var(--sp-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--sp-mut);transition:background .18s,color .18s}\n.sx-tab:hover{color:var(--sp-fg)}\n.sx-tab[aria-selected=\"true\"]{background:var(--sp-lime);color:#0A0B0D;font-weight:700}\n.sx-chips{display:flex;flex-wrap:wrap;gap:8px}\n.sx-chip{padding:9px 15px;border-radius:999px;border:1px solid var(--sp-line);background:transparent;cursor:pointer;font-family:var(--sp-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--sp-fg2);transition:border-color .18s,color .18s,background .18s}\n.sx-chip:hover{border-color:rgba(214,243,95,.5);color:var(--sp-fg)}\n.sx-chip.is-on{background:rgba(214,243,95,.12);border-color:rgba(214,243,95,.55);color:var(--sp-lime)}\n.sx-matrix{width:100%;border-collapse:collapse;min-width:720px;font-family:var(--sp-mono);font-size:11.5px}\n.sx-matrix th,.sx-matrix td{border-bottom:1px solid var(--sp-line);padding:12px 10px;text-align:center}\n.sx-matrix thead th{position:sticky;top:0;background:var(--sp-bg);color:var(--sp-mut);font-weight:500;letter-spacing:.12em;text-transform:uppercase;font-size:9.5px;cursor:pointer}\n.sx-matrix thead th:hover{color:var(--sp-fg)}\n.sx-matrix thead th.is-on{color:var(--sp-lime)}\n.sx-matrix tbody th{text-align:left;font-weight:500;color:var(--sp-fg);font-family:var(--sp-sans);font-size:14px;white-space:nowrap;padding-right:18px}\n.sx-matrix td.on{color:var(--sp-lime)}\n.sx-matrix td.off{color:rgba(250,250,247,.14)}\n.sx-matrix tbody tr:hover th,.sx-matrix tbody tr:hover td{background:rgba(250,250,247,.03)}\n.sx-empty{padding:44px 0;font-family:var(--sp-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--sp-mut)}\n.sx-herogrid{display:grid;grid-template-columns:1.25fr 1fr;gap:56px;align-items:center}\n.sx-herophoto{position:relative;margin:0;border-radius:16px;overflow:hidden;aspect-ratio:4/3;border:1px solid var(--sp-line);box-shadow:0 30px 80px rgba(0,0,0,.5),0 0 0 1px rgba(214,243,95,.08)}\n.sx-herophoto img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 40%}\n.sx-herophoto::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,11,13,0) 50%,rgba(10,11,13,.8) 100%);pointer-events:none}\n.sx-herophoto figcaption{position:absolute;left:16px;right:16px;bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;z-index:1}\n.sx-live{display:inline-flex;align-items:center;gap:8px;padding:6px 11px;border-radius:999px;background:rgba(10,11,13,.7);border:1px solid rgba(214,243,95,.4);font-family:var(--sp-mono);font-size:9.5px;letter-spacing:.16em;color:var(--sp-lime)}\n.sx-live span{width:6px;height:6px;border-radius:999px;background:var(--sp-lime);box-shadow:0 0 8px var(--sp-lime);animation:sp-blink 1.6s infinite}\n@media (max-width:900px){.sx-herogrid{grid-template-columns:1fr;gap:32px}}";
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
const TABS = [["modules", "Modules"], ["solutions", "Solutions"], ["use-cases", "Use cases"]];
const HEADS = {
  "modules": [/*#__PURE__*/React.createElement(React.Fragment, null, "Six modules. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "One loop.")), "Request → Staff → Verify → Recap → Insights, with a managed bench behind it. Every Spark account gets the full platform. No modules sold separately."],
  "solutions": [/*#__PURE__*/React.createElement(React.Fragment, null, "Built for whoever ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "runs the field.")), "Brands with in-house teams. Agencies juggling clients. Distributors with 600 accounts. Retail groups verifying resets. Same platform, tuned to how each of them actually works."],
  "use-cases": [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, "Every kind of field work,"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "one system.")), "Demos, sampling, street teams, festivals, resets, distributor routes, booths, and campus programs. Filter by the part of the loop you care about."]
};
const Hero = ({
  tab,
  setTab
}) => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Explore hero",
  style: {
    position: "relative",
    background: BG,
    padding: "clamp(56px,7vw,92px) 0 0",
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
}, "EXPLORE")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    maxWidth: 920
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, {
  color: LIME
}, "* THE WHOLE PLATFORM, ONE PLACE"), /*#__PURE__*/React.createElement("h1", {
  className: "sp-h1"
}, HEADS[tab][0]), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 22
  }
}, HEADS[tab][1])), /*#__PURE__*/React.createElement("div", {
  className: "sx-tabs",
  role: "tablist",
  "aria-label": "Explore Spark",
  style: {
    marginTop: 34
  }
}, TABS.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
  key: k,
  role: "tab",
  "aria-selected": tab === k,
  className: "sx-tab",
  onClick: () => setTab(k)
}, label)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56
  }
}, /*#__PURE__*/React.createElement(SparkTicker, null)));
const ModulesTab = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Modules",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement(SparkProductGrid, {
  title: false
}))), /*#__PURE__*/React.createElement(SparkSec, {
  label: "03 The loop"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement(SparkLoop, null))));
const SolutionsTab = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Solutions",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement(SparkSolutionGrid, {
  title: false
}))), /*#__PURE__*/React.createElement(SparkSec, {
  label: "03 Two paths"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 860
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> USE SPARK YOUR WAY"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Software only, or ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "software plus the people.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Same platform either way. The only question is who runs the shift.")), /*#__PURE__*/React.createElement("div", {
  className: "sp-2x2 sp-rv",
  style: {
    marginTop: 40,
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-card",
  style: {
    padding: 32,
    position: "relative",
    overflow: "hidden"
  },
  "aria-label": "Software only: coming soon"
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    background: "rgba(10,11,13,.55)",
    backdropFilter: "blur(1.5px)",
    zIndex: 1
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 22,
    right: -38,
    transform: "rotate(28deg)",
    zIndex: 2,
    padding: "7px 56px",
    background: LIME,
    color: "#0A0B0D",
    fontFamily: MONO,
    fontWeight: 700,
    fontSize: 10.5,
    letterSpacing: ".22em",
    boxShadow: "0 6px 24px rgba(214,243,95,.35)"
  }
}, "COMING SOON"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: MUT
  }
}, "PATH 01"), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: "14px 0 0",
    fontSize: 28,
    color: FG2
  }
}, "Software only"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "14px 0 0",
    fontSize: 15,
    lineHeight: 1.6,
    color: MUT
  }
}, "License Spark and run it with your own team and agencies. Unlimited ambassador seats, priced on programs."), /*#__PURE__*/React.createElement("p", {
  className: "sp-foot",
  style: {
    marginTop: 24,
    color: LIME,
    position: "relative",
    zIndex: 2
  }
}, "// STANDALONE LICENSING ON THE ROADMAP \xB7 ", /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact",
  style: {
    color: LIME
  }
}, "JOIN THE LIST \u2192"))), /*#__PURE__*/React.createElement("div", {
  className: "sp-card",
  style: {
    padding: 32,
    borderColor: "rgba(214,243,95,.35)"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, "PATH 02"), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: "14px 0 0",
    fontSize: 28,
    color: FG
  }
}, "With Ignite", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME
  }
}, ": included at no additional cost")), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "14px 0 0",
    fontSize: 15,
    lineHeight: 1.6,
    color: FG2
  }
}, "Hand us the program. Ignite staffs, trains, and executes with a 257K-strong bench, and Spark comes with it at no platform cost."), /*#__PURE__*/React.createElement("a", {
  className: "sp-btn",
  href: "https://sparkbyignite.igniteproductions.co/",
  style: {
    marginTop: 24
  }
}, "How that works ", /*#__PURE__*/React.createElement("span", null, "\u2192")))))));
const UseCasesTab = () => {
  const [sel, setSel] = React.useState([]);
  const toggle = s => setSel(v => v.includes(s) ? v.filter(x => x !== s) : [...v, s]);
  const list = sel.length ? SPARK_USECASES.filter(u => sel.every(m => u.modules.includes(m))) : SPARK_USECASES;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SparkSec, {
    label: "02 Use cases",
    bg: CARD
  }, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 20,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2",
    style: {
      margin: 0
    }
  }, sel.length ? /*#__PURE__*/React.createElement(React.Fragment, null, "Filtered: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, list.length, " of ", SPARK_USECASES.length)) : /*#__PURE__*/React.createElement(React.Fragment, null, "All ", SPARK_USECASES.length, " activation types")), sel.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "sp-ghost",
    onClick: () => setSel([]),
    style: {
      padding: "11px 18px",
      fontSize: 12
    }
  }, "Clear filter")), list.length ? /*#__PURE__*/React.createElement(SparkUseCaseGrid, {
    title: false,
    only: list.map(u => u.slug)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sx-empty"
  }, "Nothing matches that combination."))));
};
const App = () => {
  useSparkReveal();
  const initial = (location.hash || "").replace("#", "");
  const [tab, setTabRaw] = React.useState(TABS.some(t => t[0] === initial) ? initial : "modules");
  const setTab = k => {
    setTabRaw(k);
    history.replaceState(null, "", "#" + k);
  };
  React.useEffect(() => {
    const on = () => {
      const h = (location.hash || "").replace("#", "");
      if (TABS.some(t => t[0] === h)) setTabRaw(h);
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Explore"
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: tab === "modules" ? "product" : tab === "solutions" ? "solutions" : "usecases"
  }), /*#__PURE__*/React.createElement(Hero, {
    tab: tab,
    setTab: setTab
  }), tab === "modules" && /*#__PURE__*/React.createElement(ModulesTab, null), tab === "solutions" && /*#__PURE__*/React.createElement(SolutionsTab, null), tab === "use-cases" && /*#__PURE__*/React.createElement(UseCasesTab, null), /*#__PURE__*/React.createElement(SparkCta, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkExplore: App
});
})();
