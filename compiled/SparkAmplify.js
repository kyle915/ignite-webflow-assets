(function(){if (typeof window !== "undefined" && window.SparkAmpStyles) return;
/* Spark amplifier sections — competitive wedge vs software-only platforms.
   Mounted after SparkFeatures on pages/spark.html. */
const {
  useState: sampState,
  useEffect: sampEffect
} = React;
const SampMono = ({
  children,
  color = "rgba(255,255,255,0.55)",
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color,
    ...style
  }
}, children);
const SAMP_LIME = "#D6F35F";
const SparkAmpStyles = () => /*#__PURE__*/React.createElement("style", null, `
    @keyframes samp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.18)} }
    @keyframes samp-bar { 0%{transform:scaleX(0)} 100%{transform:scaleX(1)} }
    .samp-bar { transform-origin:left; }
    .samp-in .samp-bar { animation: samp-bar .9s cubic-bezier(.2,.8,.2,1) both; }
    @media (max-width:900px){
      .samp-2col,.samp-3col,.samp-4col { grid-template-columns:1fr !important; }
      .samp-vs { grid-template-columns:1fr !important; }
    }
    @media (prefers-reduced-motion: reduce){
      .samp-bar { animation:none !important; transform:none !important; }
      .samp-dot { animation:none !important; }
    }
  `);

/* ============================================================
   01 · THE WEDGE — software vs. software + the crew
   ============================================================ */
const SparkVsSoftware = () => {
  const rows = [["Who runs the shift?", "You hire it. Or your agency does.", "257,000+ vetted ambassadors, ours"], ["Coverage gaps", "You backfill the market yourself", "We staff the market — all 50 states"], ["Cancellations", "Your problem at 6am", "Our captain re-staffs before you wake up"], ["Training on your brand", "A PDF you upload", "Briefed, rehearsed, certified per state"], ["Data quality", "Only as good as who you hired", "GPS + photo verified by our own crew"], ["One throat to choke", "Software vendor · staffing vendor · broker", "One PM. One platform. One invoice."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "120px 0",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(ellipse 50% 55% at 80% 30%, rgba(214,243,95,0.1), transparent 62%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    color: SAMP_LIME
  }, "// the difference"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,58px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Most platforms hand you a dashboard.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: SAMP_LIME
    }
  }, "Then hand you the hiring problem.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 660
    }
  }, "Field execution software is only as good as the people carrying the phone. Spark ships with the bench \u2014 so the data is clean because ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--fg-1)"
    }
  }, "our crew generated it."))), /*#__PURE__*/React.createElement("div", {
    className: "samp-vs",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.1fr) 1fr 1fr",
      gap: 0,
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      background: "rgba(255,255,255,0.03)",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    style: {
      fontSize: 9.5
    }
  }, "The question")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      background: "rgba(255,255,255,0.02)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      borderLeft: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    style: {
      fontSize: 9.5
    }
  }, "Software-only platform")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      background: "rgba(214,243,95,0.07)",
      borderBottom: `1px solid ${SAMP_LIME}33`,
      borderLeft: `1px solid ${SAMP_LIME}33`
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    color: SAMP_LIME,
    style: {
      fontSize: 9.5
    }
  }, "Spark by Ignite")), rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r[0]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px",
      borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15.5,
      letterSpacing: "-0.01em"
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px",
      borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
      borderLeft: "1px solid rgba(255,255,255,0.08)",
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: "var(--danger)",
      marginRight: 8,
      fontFamily: "var(--font-mono)"
    }
  }, "\u2715"), r[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px",
      background: "rgba(214,243,95,0.04)",
      borderBottom: i < rows.length - 1 ? `1px solid ${SAMP_LIME}22` : "none",
      borderLeft: `1px solid ${SAMP_LIME}33`,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "var(--fg-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: SAMP_LIME,
      marginRight: 8,
      fontFamily: "var(--font-mono)"
    }
  }, "\u2713"), r[2]))))));
};

/* ============================================================
   02 · GAMIFIED BENCH — earn-to-win, cans in hands
   ============================================================ */
const SparkGamified = () => {
  const [ref, inView] = useInView({
    threshold: 0.2
  });
  const board = [["1", "Marcus R.", "Chicago, IL", 1284, "PLATINUM"], ["2", "Alicia A.", "Miami, FL", 1147, "PLATINUM"], ["3", "Tara D.", "Austin, TX", 1039, "GOLD"], ["4", "Jens R.", "Denver, CO", 962, "GOLD"], ["5", "Liz G.", "Phoenix, AZ", 918, "GOLD"]];
  const max = 1284;
  const tiers = [["ROOKIE", "First 5 shifts", "Base rate · captain-supervised"], ["SILVER", "25+ shifts, 4.7★", "Priority booking on new programs"], ["GOLD", "75+ shifts, 4.8★", "Rate bump · captain track eligible"], ["PLATINUM", "200+ shifts, 4.9★", "Lead captain · national tour rotation"]];
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: inView ? "samp-in" : "",
    style: {
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      padding: "120px 0",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    color: SAMP_LIME
  }, "// earn-to-win"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4.2vw,58px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "The bench competes to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: SAMP_LIME
    }
  }, "put cans in hands.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 640
    }
  }, "Spark is gamified for the field. Ambassadors earn on verified hand-offs, photo quality, and on-time check-in \u2014 then climb tiers that unlock better programs. Your program gets the crew that's ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--fg-1)"
    }
  }, "actually trying to win it."))), /*#__PURE__*/React.createElement("div", {
    className: "samp-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#14161B,#0F1115)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.45)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    style: {
      fontSize: 9.5
    }
  }, "Ambassador leaderboard \xB7 this month"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "samp-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: SAMP_LIME,
      boxShadow: `0 0 8px ${SAMP_LIME}`,
      animation: "samp-pulse 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement(SampMono, {
    color: SAMP_LIME,
    style: {
      fontSize: 9
    }
  }, "LIVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 22px"
    }
  }, board.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b[1],
    style: {
      padding: "13px 0",
      borderBottom: i < board.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: i === 0 ? SAMP_LIME : "rgba(255,255,255,0.45)",
      fontWeight: 700
    }
  }, b[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15
    }
  }, b[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "rgba(255,255,255,0.42)"
    }
  }, b[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.1em",
      color: b[4] === "PLATINUM" ? SAMP_LIME : "#FFB627",
      border: `1px solid ${b[4] === "PLATINUM" ? SAMP_LIME + "66" : "#FFB62766"}`,
      borderRadius: 5,
      padding: "2px 7px"
    }
  }, b[4]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16,
      color: SAMP_LIME,
      minWidth: 52,
      textAlign: "right"
    }
  }, b[3].toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 999,
      background: "rgba(255,255,255,0.07)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "samp-bar",
    style: {
      width: b[3] / max * 100 + "%",
      height: "100%",
      borderRadius: 999,
      background: `linear-gradient(90deg,${SAMP_LIME},${SAMP_LIME}88)`,
      boxShadow: `0 0 10px ${SAMP_LIME}44`,
      animationDelay: i * 90 + "ms"
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      color: "rgba(255,255,255,0.38)"
    }
  }, "\u203B Illustrative board. Scored on verified hand-offs, photo quality, and on-time rate."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t[0],
    style: {
      padding: "20px 22px",
      borderRadius: 14,
      background: i === 3 ? "rgba(214,243,95,0.07)" : "rgba(255,255,255,0.03)",
      border: i === 3 ? `1px solid ${SAMP_LIME}44` : "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: "-0.01em",
      color: i === 3 ? SAMP_LIME : "var(--fg-1)"
    }
  }, t[0]), /*#__PURE__*/React.createElement(SampMono, {
    style: {
      fontSize: 9
    }
  }, t[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "7px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--fg-2)"
    }
  }, t[2])))))));
};

/* ============================================================
   03 · ROLE VIEWS — one dataset, four audiences
   ============================================================ */
const SparkRoles = () => {
  const roles = [["BRAND", "Brand + trade marketing", ["Program-level KPI roll-up", "Per-market sample + conversion counts", "Photo galleries, export-ready", "Scan-back tie-in where allowed"]], ["BROKER", "Broker + agency partner", ["Store-level completion status", "Shelf + POS photo evidence", "OOS flags routed same-day", "Quarterly compliance scorecard"]], ["DISTRIBUTOR", "Distributor account team", ["Pour counts per rep", "GSM + ride-along recaps", "ID-check + refusal log", "Rep-order lift window"]], ["RETAILER", "Retail buyer + category", ["Demo completion per banner", "Planogram compliance score", "Velocity vs comp set", "Reset readiness photos"]]];
  const [active, setActive] = sampState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "120px 0",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    color: SAMP_LIME
  }, "// role-based views"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.8vw,52px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "One dataset. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: SAMP_LIME
    }
  }, "Four audiences.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Everybody in the chain needs a different cut of the same activation. Spark serves the view each one actually asks for \u2014 nobody's rebuilding a deck to answer a question.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 24
    }
  }, roles.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r[0],
    onClick: () => setActive(i),
    "aria-pressed": active === i,
    style: {
      padding: "12px 22px",
      borderRadius: 999,
      cursor: "pointer",
      background: active === i ? SAMP_LIME : "rgba(255,255,255,0.04)",
      color: active === i ? "#0A0B0D" : "var(--fg-1)",
      border: active === i ? `1px solid ${SAMP_LIME}` : "1px solid rgba(255,255,255,0.16)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      fontWeight: 700,
      transition: "all .2s"
    }
  }, r[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,#14161B,#0F1115)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 18,
      padding: "32px clamp(22px,3vw,40px)"
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    style: {
      fontSize: 9.5
    }
  }, roles[active][1]), /*#__PURE__*/React.createElement("div", {
    className: "samp-4col",
    style: {
      marginTop: 22,
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 12
    }
  }, roles[active][2].map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      padding: "16px 18px",
      borderRadius: 11,
      background: "rgba(214,243,95,0.05)",
      border: `1px solid ${SAMP_LIME}22`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: SAMP_LIME,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      marginTop: 1
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.45,
      color: "var(--fg-1)"
    }
  }, item)))))));
};

/* ============================================================
   04 · OPEN DATA — it leaves the platform
   ============================================================ */
const SparkIntegrations = () => {
  const outs = [["Live share link", "Send a read-only dashboard to a retailer or distributor. No login, no PDF."], ["CSV + XLSX export", "Every field, every shift, every photo URL. Straight into your BI stack."], ["Scheduled email recap", "Daily, weekly, or per-program recap pushed to your distribution list."], ["Photo bulk download", "Full-resolution, geo-tagged, date-stamped, folder-structured by market."], ["Slack / Teams alerts", "OOS flags, no-shows, and completion alerts pushed to the channel that cares."], ["API + webhooks", "Push activation data into your CRM, PIM, or data warehouse on completion."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      padding: "120px 0",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(SampMono, {
    color: SAMP_LIME
  }, "// your data, not ours"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(28px,3.8vw,52px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.98
    }
  }, "Data that ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: SAMP_LIME
    }
  }, "leaves the platform.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Field data locked inside a vendor portal is worth nothing at the buyer meeting. Everything Spark captures gets out \u2014 in the format the person asking for it actually uses.")), /*#__PURE__*/React.createElement("div", {
    className: "samp-3col",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, outs.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o[0],
    style: {
      padding: "26px 22px",
      borderRadius: 14,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderTop: `3px solid ${SAMP_LIME}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: SAMP_LIME,
      marginBottom: 12
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16.5,
      letterSpacing: "-0.01em"
    }
  }, o[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "9px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--fg-2)"
    }
  }, o[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      gap: 13,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact?intent=spark-demo",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "16px 28px",
      borderRadius: 999,
      background: SAMP_LIME,
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 15,
      textDecoration: "none",
      boxShadow: `0 10px 32px ${SAMP_LIME}33`
    }
  }, "Book a Spark demo ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/spark-demo",
    style: {
      padding: "16px 24px",
      borderRadius: 999,
      background: "transparent",
      color: "var(--fg-1)",
      border: "1px solid rgba(255,255,255,0.22)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      textDecoration: "none"
    }
  }, "See a live walkthrough")), /*#__PURE__*/React.createElement("a", {
    href: "https://client.igniteproductions.co/login",
    style: {
      padding: "16px 24px",
      borderRadius: 999,
      background: SAMP_LIME,
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      textDecoration: "none"
    }
  }, "Client login"))));
};
Object.assign(window, {
  SparkAmpStyles,
  SparkVsSoftware,
  SparkGamified,
  SparkRoles,
  SparkIntegrations
});
})();
