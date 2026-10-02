(function(){if (typeof window !== "undefined" && window.PageSparkForBrands) return;
/* Auto-extracted from the design project's pages/spark-for-brands.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-spark-for-brands")) return;
  var s = document.createElement("style");
  s.id = "pagecss-spark-for-brands";
  s.textContent = ".fb-win{border:1px solid var(--sp-line);border-radius:14px;overflow:hidden;background:#07080A;box-shadow:0 30px 80px rgba(0,0,0,.55)}\n.fb-bar{display:flex;align-items:center;gap:7px;padding:9px 14px;background:#15181D;border-bottom:1px solid var(--sp-line)}\n.fb-bar i{width:9px;height:9px;border-radius:999px;display:block;flex:0 0 auto}\n.fb-url{margin-left:10px;font-family:var(--sp-mono);font-size:10px;letter-spacing:.08em;color:#7A7F8B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.fb-screen{position:relative;aspect-ratio:16/10;overflow:hidden;background:#07080A}\n.v2-appframe{position:absolute;inset:0;overflow:hidden;background:#07080A}\n.v2-appframe iframe{display:block}\n.fb-split{display:grid;grid-template-columns:1fr 1.15fr;gap:clamp(32px,4.5vw,64px);align-items:center}\n.fb-split.rev>.fb-visual{order:-1}\n.fb-paths{display:grid;grid-template-columns:1fr 1fr;gap:22px}\n.fb-path{position:relative;display:flex;flex-direction:column;gap:14px;padding:clamp(24px,2.6vw,34px);border:1px solid var(--sp-line);border-radius:16px;background:#0A0B0D}\n.fb-path[data-k=\"in\"]{border-color:rgba(214,243,95,.34)}\n.fb-path[data-k=\"out\"]{border-color:rgba(168,124,224,.34)}\n.fb-list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:11px}\n.fb-list li{display:flex;gap:11px;font-size:15px;line-height:1.55;color:#B8BCC5}\n.fb-list li b{color:#FAFAF7;font-weight:600}\n.fb-tick{color:var(--sp-lime);font-family:var(--sp-mono);font-size:12px;padding-top:3px;flex:0 0 auto}\n.fb-merge{display:flex;align-items:center;gap:16px;margin-top:26px;padding:20px 24px;border:1px dashed rgba(214,243,95,.4);border-radius:14px;background:rgba(214,243,95,.05)}\n.fb-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--sp-line);border-radius:14px;overflow:hidden}\n.fb-role{padding:26px 24px;border-right:1px solid var(--sp-line);border-bottom:1px solid var(--sp-line);background:#0A0B0D}\n.fb-role:nth-child(3n){border-right:0}\n.fb-role:nth-last-child(-n+3){border-bottom:0}\n.fb-ba{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--sp-line);border-radius:14px;overflow:hidden}\n.fb-col{padding:clamp(24px,2.6vw,34px)}\n.fb-col+.fb-col{border-left:1px solid var(--sp-line)}\n.fb-ba h3{margin:0 0 20px;font-family:var(--sp-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase}\n.fb-ba ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:14px}\n.fb-ba li{display:flex;gap:11px;font-size:15.5px;line-height:1.5}\n.fb-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}\n@media (max-width:1020px){.fb-split{grid-template-columns:1fr}.fb-split.rev>.fb-visual{order:0}.fb-roles{grid-template-columns:1fr 1fr}.fb-role:nth-child(3n){border-right:1px solid var(--sp-line)}.fb-role:nth-child(2n){border-right:0}.fb-role:nth-last-child(-n+3){border-bottom:1px solid var(--sp-line)}.fb-role:nth-last-child(-n+2){border-bottom:0}}\n@media (max-width:760px){.fb-paths{grid-template-columns:1fr}.fb-ba{grid-template-columns:1fr}.fb-col+.fb-col{border-left:0;border-top:1px solid var(--sp-line)}.fb-roles{grid-template-columns:1fr}.fb-role{border-right:0 !important;border-bottom:1px solid var(--sp-line) !important}.fb-role:last-child{border-bottom:0 !important}.fb-merge{flex-direction:column;align-items:flex-start;gap:10px}}";
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
const PURPLE = "#A87CE0";
const FAQ = [["Can our retailers request an activation themselves?", "Yes. Every account, chain, or region can get its own branded request link, no login needed, or a workspace login if they want to see history. A store manager or category buyer submits the door, the date window, and the reason. It lands in your approval queue with their name on it. You approve, reschedule, or decline with a reason, and they're notified automatically."], ["How do requests from our own field team get in?", "Your marketing and field managers submit through the same intake, with your SKU catalog, brand standards, and budget codes already attached. For a whole quarter, drop a spreadsheet into Bulk Upload. Every row is validated before anything writes, so a typo on row 7 doesn't break rows 1 through 6."], ["We already have a field team. Why do we need field activation software?", "Because the program currently lives in six places. Spark puts intake, approvals, staffing, GPS verification, recaps, and cost-per-sample in one record per activation, so you can defend the field budget with proof instead of anecdotes."], ["Can a CPG brand use Spark to manage multiple field marketing agencies?", "Yes. Every agency reports into one recap standard, so you can compare partners on completion, on-time rate, photo compliance, and report quality side by side, in the same view as your in-house team."], ["How long does it take a brand to get live on Spark?", "Days, not quarters. Send your program structure and account list and you'll be watching live check-ins the same week. Ambassadors need no training, and retail requesters never see a login screen."]];
const Screen = ({
  view,
  top = 0,
  url,
  label
}) => /*#__PURE__*/React.createElement("div", {
  className: "fb-win fb-visual sp-rv"
}, /*#__PURE__*/React.createElement("div", {
  className: "fb-bar"
}, /*#__PURE__*/React.createElement("i", {
  style: {
    background: "#FF5F57"
  }
}), /*#__PURE__*/React.createElement("i", {
  style: {
    background: "#FFBD2E"
  }
}), /*#__PURE__*/React.createElement("i", {
  style: {
    background: "#28C840"
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "fb-url"
}, url)), /*#__PURE__*/React.createElement("div", {
  className: "fb-screen"
}, /*#__PURE__*/React.createElement(V2AppFrame, {
  view: view,
  top: top,
  label: label
})));
const Hero = () => {
  const [ref, inv] = useSparkInView(.15);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "01 For Brands, hero",
    style: {
      position: "relative",
      background: BG,
      padding: "clamp(56px,7vw,96px) 0 0",
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
      top: -240,
      right: -180,
      width: 720,
      height: 720,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(214,243,95,0.16), transparent 60%)",
      pointerEvents: "none",
      animation: "sp-glow 6s ease-in-out infinite"
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
      alignItems: "center",
      flexWrap: "wrap"
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
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/explore#solutions",
    className: "sp-foot",
    style: {
      textDecoration: "none",
      color: MUT
    }
  }, "SOLUTIONS"), /*#__PURE__*/React.createElement("span", {
    className: "sp-foot"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME
    }
  }, "FOR BRANDS")), /*#__PURE__*/React.createElement("div", {
    className: "fb-split",
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, {
    color: LIME
  }, "* 01 \xB7 CPG & BEVERAGE BRANDS WITH FIELD PROGRAMS"), /*#__PURE__*/React.createElement("h1", {
    className: "sp-h1"
  }, "Be ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "on top of"), " every store and event activation."), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 24
    }
  }, "Your team requests activations. Your retailers, buyers, and distributor reps request their own. Everything lands in one queue you approve, watch live, and close out with proof, without adding a coordinator to chase it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "sp-btn",
    href: "https://www.igniteproductions.co/contact"
  }, "See Spark on a live program ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "sp-ghost",
    href: "/spark-demo"
  }, "See the live dashboard")), /*#__PURE__*/React.createElement("p", {
    className: "sp-foot",
    style: {
      marginTop: 28,
      color: MUT
    }
  }, "NO PER-SEAT FEES \xB7 UNLIMITED AMBASSADOR SEATS \xB7 LIVE IN WEEK ONE")), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: inv ? 1 : 0,
      transform: inv ? "none" : "translateY(18px)",
      transition: "opacity .7s ease,transform .7s ease"
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    view: "tracker",
    top: 276,
    url: "app.spark.co / master-tracker",
    label: "Spark master tracker, every activation request and its status"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sp-statrow",
    style: {
      marginTop: 18,
      borderRadius: 14,
      overflow: "hidden"
    }
  }, [["24H", "RECAP TURNAROUND"], ["97%", "PHOTO COMPLIANCE"], ["1", "SOURCE OF TRUTH"], ["$0", "PER-SEAT FEES"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: "clamp(22px,2.2vw,32px)",
      color: LIME,
      letterSpacing: "-.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      marginTop: 6
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(SparkTicker, null)));
};
const Paths = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Two ways work gets in",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 880
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> INTAKE"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Requests come from your team, ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "and from theirs.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Most brands lose activations before they ever get scheduled: a rep texts a request, a buyer emails the wrong person, a market manager keeps a private spreadsheet. Spark gives both sides one front door.")), /*#__PURE__*/React.createElement("div", {
  className: "fb-paths sp-rv",
  style: {
    marginTop: 44
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fb-path",
  "data-k": "in"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, "PATH 01 \xB7 INTERNAL"), /*#__PURE__*/React.createElement("span", {
  className: "sp-pill"
}, "YOUR TEAM")), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: 0,
    fontSize: 26,
    color: FG
  }
}, "You put the program in."), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: FG2
  }
}, "Brand, shopper, and field managers submit activations against your own catalog: market, account, date, SKUs, sample target, brand standard, budget code."), /*#__PURE__*/React.createElement("ul", {
  className: "fb-list"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Your SKUs, your standards."), " The form only offers what's actually in the program.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "A whole quarter at once."), " Drop a spreadsheet into Bulk Upload; every row is validated before anything writes.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Nothing arrives half-filled."), " Required fields at intake mean no back-and-forth to schedule.")))), /*#__PURE__*/React.createElement("div", {
  className: "fb-path",
  "data-k": "out"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: PURPLE
  }
}, "PATH 02 \xB7 INBOUND"), /*#__PURE__*/React.createElement("span", {
  className: "sp-pill"
}, "RETAILERS & REPS")), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: 0,
    fontSize: 26,
    color: FG
  }
}, "They ask for it themselves."), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: FG2
  }
}, "Store managers, category buyers, distributor reps, and regional sales request a demo for their own door, from a branded link with no login, or their own workspace if they want the history."), /*#__PURE__*/React.createElement("ul", {
  className: "fb-list"
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick",
  style: {
    color: PURPLE
  }
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "No login to ask."), " A branded public form per chain, region, or distributor.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick",
  style: {
    color: PURPLE
  }
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Attributable."), " Every request carries who asked, which door, when, and why.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick",
  style: {
    color: PURPLE
  }
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Demand you can read."), " Which accounts are asking becomes a signal, not a lost text thread."))))), /*#__PURE__*/React.createElement("div", {
  className: "fb-merge sp-rv"
}, /*#__PURE__*/React.createElement(SparkDot, {
  c: LIME,
  s: 8
}), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.55,
    color: FG
  }
}, "Both paths land in the same queue. ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: MUT
  }
}, "Nothing gets staffed, sampled, or spent against that you didn't approve.")))));
const Queue = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "03 The approval queue"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "fb-split"
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv"
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> CONTROL"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "The queue is your ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "control panel.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Every inbound request sits in one list with the door, the date, the ask, and what it costs. Approve and it goes to staffing. Decline and the requester hears why. Nothing sits in someone's inbox until it's too late to staff."), /*#__PURE__*/React.createElement("ul", {
  className: "fb-list",
  style: {
    marginTop: 26,
    gap: 13
  }
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Approve, reschedule, or decline"), ", with a reason that goes back automatically.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Route by market or manager"), " so regional leads clear their own doors.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "One master tracker"), " holds every activation from request through recap approval.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Recaps get approved here too"), ". Nothing reaches a buyer before you've read it."))), /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/product/request",
  style: {
    display: "inline-flex",
    gap: 8,
    marginTop: 26,
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: LIME,
    textDecoration: "none"
  }
}, "How intake works ", /*#__PURE__*/React.createElement("span", null, "\u2192"))), /*#__PURE__*/React.createElement(Screen, {
  view: "approvals",
  url: "app.spark.co / approvals",
  label: "Spark approvals queue, pending activation requests and recaps"
}))));
const Live = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "04 Live execution",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "fb-split rev"
}, /*#__PURE__*/React.createElement(Screen, {
  view: "today",
  url: "app.spark.co / today",
  label: "Spark live view, today's activations with GPS check-ins"
}), /*#__PURE__*/React.createElement("div", {
  className: "sp-rv"
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> LIVE"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Know it ran ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "while it's running.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Not a phone call on Monday. GPS check-in at the door, geotagged photos landing during the shift, and per-SKU counts as they're logged, so a market manager can answer \"is it happening?\" without calling anyone."), /*#__PURE__*/React.createElement("ul", {
  className: "fb-list",
  style: {
    marginTop: 26,
    gap: 13
  }
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Who's clocked in, where,"), " across every market on one live board.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Photos with a location stamp"), ": shelf, display, setup, and crowd.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Exceptions surface themselves:"), " no-shows, late starts, missing capture.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Coverage gap? Fill it."), " A 257K-strong managed bench is one request away.")))))));
const Coverage = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "05 Account coverage"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "fb-split"
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv"
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> COVERAGE"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "\"Which doors have we ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "actually touched"), " this quarter?\""), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Every account you sell into, on one map: visited, scheduled, or needs attention. Filter by chain, market, or manager and answer a buyer's coverage question in the meeting instead of after it."), /*#__PURE__*/React.createElement("ul", {
  className: "fb-list",
  style: {
    marginTop: 26,
    gap: 13
  }
}, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Store-level status"), " across all 50 states, not a market-level guess.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Gaps are visible"), " before the retailer points them out.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
  className: "fb-tick"
}, "\u25B8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Plan the next wave from the map"), ": request straight off an untouched door.")))), /*#__PURE__*/React.createElement(Screen, {
  view: "accountmap",
  url: "app.spark.co / account-map",
  label: "Spark account map, store-level coverage by status"
}))));
const Proof = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "06 Proof",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 880
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> PROOF"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Proof your CFO ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "and your buyer"), " both accept."), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "The recap writes itself from what happened in the field: photos, counts, notes, timestamps, and lands within 24 hours instead of at quarter-end. Same record, two audiences: the retailer sees their doors, finance sees cost per sample.")), /*#__PURE__*/React.createElement("div", {
  className: "sp-3col sp-rv",
  style: {
    marginTop: 44
  }
}, [["01", "Per-door recap", "Photos, counts, and conditions for the exact store the buyer asked about, shareable as a link, not a 40MB deck."], ["02", "Cost per sample", "Program spend against samples delivered and doors covered, live, by market and by SKU."], ["03", "Field sampling report", "The rollup: SKU mix, velocity by window, and the year-to-date picture your team presents internally."]].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
  key: n,
  className: "sp-card",
  style: {
    padding: "26px 24px",
    background: BG
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    fontSize: 22,
    fontWeight: 700,
    color: LIME
  }
}, n), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: "12px 0 0",
    fontSize: 22,
    color: FG
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "10px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: FG2
  }
}, d)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36
  }
}, /*#__PURE__*/React.createElement(Screen, {
  view: "field",
  url: "app.spark.co / field-sampling-report",
  label: "Spark field sampling report, SKU mix and sampling velocity"
}))));
const Roles = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "07 Who sees what"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 860
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> ACCESS"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Everyone gets the slice ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "they need.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "One record per activation, five different windows onto it. Nobody sees a spreadsheet that isn't theirs, and nobody has to ask you for a status update.")), /*#__PURE__*/React.createElement("div", {
  className: "fb-roles sp-rv",
  style: {
    marginTop: 44
  }
}, [["BRAND HQ", "Every market, every agency, every door, plus the budget view and the export.", LIME], ["REGIONAL / FIELD MANAGER", "Their markets, their staff, their approvals. They clear their own queue.", LIME], ["RETAIL PARTNER", "Submits a request for their store, sees the outcome and the recap for that door. Nothing else.", PURPLE], ["DISTRIBUTOR REP", "Requests demos for their accounts from the truck. No login, no training.", PURPLE], ["AGENCY PARTNER", "Executes and reports into your standard, so partners are actually comparable.", "#7A9BE0"], ["AMBASSADOR", "The shift, the checklist, the capture. Mobile, offline-tolerant, 90 seconds to learn.", "#7A9BE0"]].map(([t, d, c]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "fb-role"
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: c
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "12px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: FG2
  }
}, d))))));
const Shift = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "08 What changes",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 860
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> THE HONEST VERSION"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "What actually changes ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "in the first month."))), /*#__PURE__*/React.createElement("div", {
  className: "fb-ba sp-rv",
  style: {
    marginTop: 40,
    background: BG
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "fb-col"
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    color: RED
  }
}, "\u2715 TODAY"), /*#__PURE__*/React.createElement("ul", null, ["A rep texts a market manager for a demo. It gets lost.", "Your buyer asks which of their 40 stores you hit. You promise to circle back.", "Recaps arrive weeks later, formatted differently by every partner.", "Finance asks what a sample costs. Nobody has a defensible number.", "The program lives across email, a shared drive, and three spreadsheets."].map(t => /*#__PURE__*/React.createElement("li", {
  key: t
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: RED,
    fontFamily: MONO,
    fontSize: 12,
    paddingTop: 3
  }
}, "\u2715"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: FG2
  }
}, t))))), /*#__PURE__*/React.createElement("div", {
  className: "fb-col"
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    color: LIME
  }
}, "\u2713 ON SPARK"), /*#__PURE__*/React.createElement("ul", null, ["The rep submits from a link. It's in your queue in seconds, with their name on it.", "You open the account map and answer in the meeting.", "Every recap lands within 24 hours in one format, whoever ran it.", "Cost per sample is on the dashboard, by market and by SKU.", "One record per activation, request through proof."].map(t => /*#__PURE__*/React.createElement("li", {
  key: t
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontFamily: MONO,
    fontSize: 12,
    paddingTop: 3
  }
}, "\u2713"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: FG
  }
}, t)))))), /*#__PURE__*/React.createElement("div", {
  className: "fb-chips sp-rv"
}, /*#__PURE__*/React.createElement("a", {
  className: "sp-btn",
  href: "https://www.igniteproductions.co/contact"
}, "See Spark on a live program ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
  className: "sp-ghost",
  href: "https://sparkbyignite.igniteproductions.co/"
}, "See pricing"))));
const Related = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "09 Related",
  pad: "clamp(56px,7vw,90px) 0"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    marginRight: 8
  }
}, "RELATED \u2192"), [["https://sparkbyignite.igniteproductions.co/use-cases/in-store-demos", "In-Store Demos & Retail Sampling"], ["https://sparkbyignite.igniteproductions.co/use-cases/distributor-demos", "Distributor & Route Demos"], ["https://sparkbyignite.igniteproductions.co/solutions/distributors", "For Distributors & Brokers"], ["https://sparkbyignite.igniteproductions.co/solutions/agencies", "For Agencies"], ["https://sparkbyignite.igniteproductions.co/solutions/retail", "For Retail & QSR"], ["https://sparkbyignite.igniteproductions.co/compare", "Compare Spark"]].map(([h, l]) => /*#__PURE__*/React.createElement("a", {
  key: h,
  href: h,
  className: "sp-pill",
  style: {
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: 11,
    color: FG
  }
}, l)))));
const App = () => {
  useSparkReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark, For Brands"
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "solutions"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Paths, null), /*#__PURE__*/React.createElement(Queue, null), /*#__PURE__*/React.createElement(Live, null), /*#__PURE__*/React.createElement(Coverage, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Roles, null), /*#__PURE__*/React.createElement(Shift, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: FAQ,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Questions from ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, "brand teams."))
  }), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(SparkCta, {
    h: "Bring us one real market.",
    sub: "We'll load your accounts, turn on a request link for one chain or one distributor, and show you the queue filling up with your own doors."
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkForBrands: App
});
})();
