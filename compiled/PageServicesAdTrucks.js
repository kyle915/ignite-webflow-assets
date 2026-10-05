(function(){if (typeof window !== "undefined" && window.PageServicesAdTrucks) return;
/* Auto-extracted from the design project's pages/services-ad-trucks.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-ad-trucks")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-ad-trucks";
  s.textContent = "body{background:#0A0B0D}\n@keyframes ep-rise{0%{opacity:0;transform:translateY(24px)}100%{opacity:1;transform:none}}\n@keyframes at-drive{0%{transform:translateX(-4%)}50%{transform:translateX(4%)}100%{transform:translateX(-4%)}}\n.ep-rv{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,.84,.3,1),transform .7s cubic-bezier(.16,.84,.3,1)}.ep-rv.in{opacity:1;transform:none}\n.ep-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.ep-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n.at-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:48px;align-items:center}\n.at-photo{position:relative;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.12);aspect-ratio:16/10;background:#12141A}\n.at-photo img{width:100%;height:100%;object-fit:cover;display:block;animation:at-drive 18s ease-in-out infinite;transform-origin:center}\n.at-photo figcaption{position:absolute;left:12px;bottom:12px;padding:6px 10px;border-radius:6px;background:rgba(10,11,13,.82);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:rgba(255,255,255,.8)}\n.at-from{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12)}\n.at-from b{font-family:var(--font-display);font-weight:800;font-size:56px;letter-spacing:-.04em;line-height:1;color:#D6F35F}\n.at-tools{display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:16px}\n.at-seg{display:inline-flex;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:4px;gap:4px;flex-wrap:wrap}\n.at-seg button{white-space:nowrap;height:38px;padding:0 16px;border-radius:999px;border:0;background:none;color:rgba(255,255,255,.7);font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;cursor:pointer}\n.at-seg button[aria-pressed=true]{background:#D6F35F;color:#0A0B0D;font-weight:700}\n.at-search{height:44px;min-width:240px;padding:0 16px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:#12141A;color:#fff;font-size:15px}\n.at-wrap{border:1px solid rgba(255,255,255,.1);border-radius:14px;overflow:auto;max-height:640px;background:#101217}\n.at-tbl{width:100%;border-collapse:collapse;min-width:640px}\n.at-tbl th,.at-tbl td{text-align:left;padding:13px 18px;border-bottom:1px solid rgba(255,255,255,.06);font-size:15px}\n.at-tbl thead th{position:sticky;top:0;background:#16181F;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.18em;color:rgba(255,255,255,.55);font-weight:500;z-index:1}\n.at-tbl tbody th{font-family:var(--font-display);font-weight:600}\n.at-tbl td{font-family:var(--font-mono);color:rgba(255,255,255,.72);font-variant-numeric:tabular-nums}\n.at-tbl td.on,.at-tbl thead th.on{color:#D6F35F}\n.at-tbl td.on{font-weight:700;background:rgba(214,243,95,.05)}\n.at-tbl tr.else th{color:#D6F35F}\n.at-tbl tr[hidden]{display:none}\n.at-gal{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:220px;gap:10px}\n.at-gal figure{margin:0;border-radius:12px;overflow:hidden;position:relative;background:#12141A}\n.at-gal figure.big{grid-column:span 2;grid-row:span 2}\n.at-gal figure.wide{grid-column:span 2}\n.at-gal img{width:100%;height:100%;object-fit:cover;transition:transform .6s}\n.at-gal figure:hover img{transform:scale(1.04)}\n.at-gal figcaption{position:absolute;left:10px;bottom:10px;padding:5px 9px;border-radius:6px;background:rgba(10,11,13,.8);font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.8)}\n.at-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(255,255,255,.12)}\n.at-steps>div{padding:24px 20px 0 0}.at-steps>div+div{padding-left:20px;border-left:1px solid rgba(255,255,255,.08)}\n.at-tick{border-bottom:1px solid rgba(255,255,255,.08);background:#0C0E13;overflow:hidden;padding:16px 0}\n.at-tick-in{display:flex;gap:44px;width:max-content;animation:at-scroll 60s linear infinite}\n.at-tick span{font-family:var(--font-mono);font-size:12px;letter-spacing:.2em;color:rgba(255,255,255,.55);white-space:nowrap}\n.at-tick span b{color:#D6F35F;font-weight:700;margin-left:10px}\n@keyframes at-scroll{to{transform:translateX(-50%)}}\n.at-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}\n.at-stats>div{padding:28px 24px}.at-stats>div+div{border-left:1px solid rgba(255,255,255,.08)}\n.at-stats b{display:block;font-family:var(--font-display);font-weight:900;font-size:clamp(36px,4vw,56px);letter-spacing:-.04em;line-height:1;color:#fff}\n.at-stats b i{display:inline!important;font-style:normal;color:#D6F35F}\n.at-stats span{display:block;margin-top:10px;font-size:14.5px;color:rgba(255,255,255,.62)}\n.at-car img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.06);transition:opacity .9s ease,transform 5s ease;animation:none}\n.at-car img.on{opacity:1;transform:scale(1)}\n.at-car figcaption{z-index:2}\n.at-car-ctl{position:absolute;right:12px;bottom:12px;z-index:2;display:flex;align-items:center;gap:8px;padding:6px;border-radius:999px;background:rgba(10,11,13,.78)}\n.at-car-ctl>button{width:30px;height:30px;border-radius:30px;border:1px solid rgba(255,255,255,.2);background:none;color:#fff;cursor:pointer;font-size:14px}\n.at-car-ctl>button:hover{border-color:#D6F35F;color:#D6F35F}\n.at-car-ctl .dots{display:flex;gap:6px;padding:0 4px}\n.at-car-ctl .dots button{width:7px;height:7px;padding:0;border-radius:7px;border:0;background:rgba(255,255,255,.35);cursor:pointer;transition:width .3s,background .3s}\n.at-car-ctl .dots button.on{width:20px;background:#D6F35F}\n@media (max-width:560px){.at-car-ctl .dots{display:none}}\n.at-fmt2{border-top:1px solid rgba(255,255,255,.12)}\n.at-fmt2 .row{display:grid;grid-template-columns:140px minmax(0,1.3fr) minmax(0,.9fr);gap:40px;align-items:center;padding:34px 0;border-bottom:1px solid rgba(255,255,255,.12);transition:background .25s,padding .25s}\n.at-fmt2 .row:hover{background:linear-gradient(90deg,rgba(214,243,95,.07),transparent 70%);padding-left:18px}\n.at-fmt2 .n{font-family:var(--font-display);font-weight:900;font-size:96px;line-height:.85;letter-spacing:-.05em;color:transparent;-webkit-text-stroke:1.5px rgba(214,243,95,.55);transition:color .25s}\n.at-fmt2 .row:hover .n{color:#D6F35F;-webkit-text-stroke-color:#D6F35F}\n.at-fmt2 h3{margin-top:10px;font-family:var(--font-display);font-weight:800;font-size:clamp(24px,2.4vw,32px);letter-spacing:-.025em}\n.at-fmt2 p{margin-top:10px;font-size:16px;line-height:1.55;color:rgba(255,255,255,.68);max-width:560px}\n.at-fmt2 ul{margin:0;padding:0;list-style:none;display:grid;gap:10px}\n.at-fmt2 li{padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.12);font-size:14px;color:rgba(255,255,255,.82)}\n.at-fmt2 li::before{content:\"✓  \";color:#D6F35F;font-weight:700}\n@media (max-width:980px){.at-fmt2 .row{grid-template-columns:1fr;gap:16px}.at-fmt2 .n{font-size:64px}}\n.at-fmt{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.at-fmt>div{position:relative;padding:30px 28px 28px;border-radius:16px;background:#12141A;border:1px solid rgba(255,255,255,.08);overflow:hidden;transition:border-color .25s,transform .25s}\n.at-fmt>div:hover{border-color:rgba(214,243,95,.45);transform:translateY(-3px)}\n.at-fmt .pnl{height:120px;border-radius:10px;margin-bottom:22px;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.1)}\n.at-fmt .pnl.dig{background:#000}\n.at-fmt .pnl.dig::before{content:\"\";position:absolute;inset:0;background-image:radial-gradient(rgba(214,243,95,.9) 1px,transparent 1.6px);background-size:7px 7px;opacity:.16}\n.at-fmt .pnl.dig em{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--font-display);font-weight:900;font-style:normal;font-size:30px;letter-spacing:-.03em;color:#D6F35F;text-shadow:0 0 18px rgba(214,243,95,.6);animation:at-flip 6s steps(1) infinite}\n@keyframes at-flip{0%{content:\"\"}}\n.at-fmt .pnl.stat{background:repeating-linear-gradient(135deg,#1C1F27 0 14px,#16181F 14px 28px)}\n.at-fmt .pnl.stat em{position:absolute;left:16px;bottom:14px;font-family:var(--font-display);font-weight:900;font-style:normal;font-size:24px;color:#fff;letter-spacing:-.02em}\n.at-fmt .pnl.ded{background:#0E1015}\n.at-fmt .pnl.ded i{position:absolute;bottom:20px;width:9px;height:9px;border-radius:9px;background:#D6F35F;box-shadow:0 0 12px #D6F35F}\n.at-fmt h3{font-family:var(--font-display);font-weight:700;font-size:22px}\n.at-fmt p{margin-top:10px;font-size:15px;line-height:1.55;color:rgba(255,255,255,.66)}\n.at-fmt ul{margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px}\n.at-fmt li{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;color:rgba(255,255,255,.7)}\n.at-fmt li::before{content:\"✓ \";color:#D6F35F}\n.at-est{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:stretch}\n.at-est .in,.at-est .out{padding:30px;border-radius:16px;border:1px solid rgba(255,255,255,.1);background:#12141A}\n.at-est .out{border-color:rgba(214,243,95,.4);background:linear-gradient(160deg,rgba(214,243,95,.1),rgba(214,243,95,.02) 60%)}\n.at-est label{display:block;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.18em;color:rgba(255,255,255,.55);margin-bottom:10px}\n.at-est select{width:100%;height:52px;padding:0 16px;border-radius:12px;border:1px solid rgba(255,255,255,.16);background:#0A0B0D;color:#fff;font-size:16px}\n.at-est input[type=range]{width:100%;accent-color:#D6F35F}\n.at-est .dv{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}\n.at-est .dv b{font-family:var(--font-display);font-weight:800;font-size:30px;color:#fff}\n.at-est .tierpill{display:inline-flex;margin-top:16px;padding:6px 12px;border-radius:999px;border:1px solid rgba(214,243,95,.4);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:#D6F35F}\n.at-est .big{font-family:var(--font-display);font-weight:900;font-size:clamp(46px,5vw,72px);letter-spacing:-.045em;line-height:.95;color:#D6F35F;margin-top:12px;font-variant-numeric:tabular-nums}\n.at-est .row{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:15px}\n.at-est .row span:last-child{font-family:var(--font-mono);color:#fff}\n.at-route{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:0;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#0E1015}\n.at-route .map{position:relative;min-height:420px;background:#0C0E12}\n.at-route .map svg{position:absolute;inset:0;width:100%;height:100%}\n.at-route .log{border-left:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column}\n.at-route .bar{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:rgba(255,255,255,.55)}\n.at-route .bar .live{width:8px;height:8px;border-radius:8px;background:#D6F35F;box-shadow:0 0 10px #D6F35F;animation:at-blink 1.6s infinite}\n.at-route .bar .sd{margin-left:auto;padding:2px 8px;border-radius:999px;border:1px solid rgba(255,182,39,.5);color:#FFB627}\n@keyframes at-blink{50%{opacity:.3}}\n.at-route .ln{display:grid;grid-template-columns:52px 1fr auto;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);font-size:13.5px;align-items:baseline;opacity:.35;transition:opacity .4s}\n.at-route .ln.on{opacity:1}\n.at-route .ln .t{font-family:var(--font-mono);font-size:11px;color:rgba(255,255,255,.5)}\n.at-route .ln .s{font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;color:#D6F35F}\n@media (prefers-reduced-motion:reduce){.at-tick-in{animation:none}.at-route .bar .live{animation:none}}\n@media (max-width:980px){.at-stats{grid-template-columns:1fr 1fr}.at-stats>div:nth-child(3){border-left:0}.at-stats>div:nth-child(n+3){border-top:1px solid rgba(255,255,255,.08)}.at-fmt,.at-est,.at-route{grid-template-columns:1fr}.at-route .log{border-left:0;border-top:1px solid rgba(255,255,255,.08)}.at-route .map{min-height:300px}}\n@media (prefers-reduced-motion:reduce){.ep-rv{opacity:1;transform:none;transition:none}.at-photo img{animation:none}}\n@media (max-width:980px){.ep-grid3,.ep-grid2,.at-hero{grid-template-columns:1fr}.at-steps{grid-template-columns:1fr 1fr;row-gap:24px}.at-steps>div:nth-child(3){padding-left:0;border-left:0}.at-gal{grid-template-columns:1fr 1fr;grid-auto-rows:200px}.at-gal figure.big{grid-column:span 2;grid-row:auto}.at-gal figure.wide{grid-column:span 2}}\n@media (max-width:560px){.at-seg{display:grid;grid-template-columns:1fr 1fr;border-radius:16px;width:100%}.at-steps{grid-template-columns:1fr}.at-steps>div+div{padding-left:0;border-left:0}.at-from b{font-size:44px}.at-search{min-width:0;width:100%}}";
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
    whiteSpace: "nowrap",
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
    whiteSpace: "nowrap",
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
const FAQ = [["How much does an ad truck cost per day?", "Standard ad truck rates start from $1,600 a day on 30+ day runs in markets like Atlanta, Dallas, Miami, Los Angeles and New York, and from $2,325 a day on 2 to 6 day runs. Rates vary by market, dates and run length, are not final until quoted, and do not include the Ignite agency fee."], ["Do the ad truck days have to be consecutive?", "Yes. Days must run consecutively to qualify for a tier rate. A 10-day run booked as two separate 5-day runs is priced at the 2 to 6 day rate."], ["Can you run ad trucks outside the listed markets?", "Yes. We run mobile billboard trucks anywhere in the country, starting from $2,325 a day for 2 to 6 days, plus travel to the market."], ["Is the ad truck price all-in?", "No. The rates shown are starting-from daily truck rates and do not include the Ignite agency fee, creative production, permits or travel outside listed markets. Your quote breaks each line out."], ["Can you run multiple trucks or a multi-city route?", "Yes. Multi-market and multi-truck routes are quoted as one program, with one route plan, one schedule and one report."], ["Do you provide GPS tracking and reporting for ad trucks?", "Yes. Routes are logged in Spark with GPS, timestamps and photos, so you can see where the truck was and when, alongside any street team or sampling running with it."], ["Can you pair an ad truck with brand ambassadors?", "Yes. Most programs pair the truck with a street team, sampling crew or store event. The truck draws attention and the ambassadors close it with a conversation, a sample or a signup."]];
const RATES = window.IG_AD_TRUCK_RATES,
  ELSE = window.IG_AD_TRUCK_ELSEWHERE;
const TIERS = ["2 to 6 days", "7 to 14 days", "15 to 29 days", "30+ days"];
const $f = n => "$" + n.toLocaleString("en-US");
const IMG = n => window.__resources && window.__resources["r_assets_" + n.replace(/[^a-z0-9]/gi, "_")] || "https://kyle915.github.io/ignite-webflow-assets/assets/" + n;
const HERO_SLIDES = [["ad-truck-total-wireless-port-charlotte.jpg", "Total Wireless digital ad truck parked outside a Total Wireless store in Port Charlotte, Florida", "PORT CHARLOTTE, FL"], ["ad-truck-total-wireless-sunny-isles-iphone.jpg", "Brand ambassador beside a Total Wireless ad truck with Spanish iPhone creative in Sunny Isles Beach", "SUNNY ISLES BEACH, FL"], ["ad-truck-total-wireless-publix-spanish.jpg", "Total Wireless digital ad truck with Spanish 5G creative outside a Publix", "PUBLIX LOT // SPANISH CREATIVE"], ["ad-truck-total-wireless-orlando-spanish.jpg", "Total Wireless digital ad truck showing Spanish-language iPhone creative outside an Orlando store", "ORLANDO, FL"], ["ad-truck-total-wireless-ulta-plaza.jpg", "Total Wireless iPhone ad truck parked in a shopping plaza in front of an Ulta Beauty store", "SUNNY ISLES BEACH, FL // PLAZA"], ["ad-truck-total-wireless-pembroke-pines.jpg", "Total Wireless ad truck parked at a grocery store entrance in Pembroke Pines", "PEMBROKE PINES, FL"], ["ad-truck-total-wireless-lehigh-acres.jpg", "Total Wireless ad truck with a $25 unlimited 5G offer in front of a Lehigh Acres store", "LEHIGH ACRES, FL"]];
const HeroCarousel = () => {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI(v => (v + 1) % HERO_SLIDES.length), 4200);
    return () => clearInterval(id);
  }, [paused]);
  const go = d => setI(v => (v + d + HERO_SLIDES.length) % HERO_SLIDES.length);
  return /*#__PURE__*/React.createElement("figure", {
    className: "at-photo at-car",
    style: {
      margin: 0,
      animation: "ep-rise .8s .15s both"
    },
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    "aria-roledescription": "carousel",
    "aria-label": "Total Wireless ad truck photos"
  }, HERO_SLIDES.map(([src, alt], k) => /*#__PURE__*/React.createElement("img", {
    key: src,
    src: IMG(src),
    alt: alt,
    className: k === i ? "on" : "",
    "aria-hidden": k !== i,
    loading: k === 0 ? "eager" : "lazy"
  })), /*#__PURE__*/React.createElement("figcaption", null, "TOTAL WIRELESS // ", HERO_SLIDES[i][2]), /*#__PURE__*/React.createElement("div", {
    className: "at-car-ctl"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous photo",
    onClick: () => go(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    className: "dots"
  }, HERO_SLIDES.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    "aria-label": "Show photo " + (k + 1),
    "aria-current": k === i,
    className: k === i ? "on" : "",
    onClick: () => setI(k)
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next photo",
    onClick: () => go(1)
  }, "\u2192")));
};
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Hero",
  style: {
    background: "#0A0B0D",
    color: "#fff",
    padding: "64px 0 96px",
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
  className: "at-hero"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    animation: "ep-rise .8s both"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, "* AD TRUCKS // MOBILE BILLBOARDS // ALL 50 STATES"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: .95,
    fontSize: "clamp(40px,5.2vw,84px)"
  }
}, "Ad truck advertising that drives ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "foot traffic.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.78)",
    maxWidth: 600
  }
}, "Digital and static mobile billboard trucks that park outside the store, circle the convention center and follow the crowd. Pair the truck with a street team or a store event, and every route is GPS-tracked in Spark."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 30,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Btn, null, "Book a route \u2192"), /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "#rates"
}, "See rates by market")), /*#__PURE__*/React.createElement("div", {
  className: "at-from"
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  }
}, "STARTING FROM"), /*#__PURE__*/React.createElement("b", null, "$1,600"), /*#__PURE__*/React.createElement("span", {
  style: {
    flexBasis: "100%",
    fontSize: 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "rgba(255,255,255,.7)"
  }
}, "per truck/day on 30+ day runs. Excl. agency fee. Not final until quoted."))), /*#__PURE__*/React.createElement(HeroCarousel, null))));
const Rates = () => {
  const [t, setT] = React.useState(0);
  const [q, setQ] = React.useState("");
  const ql = q.trim().toLowerCase();
  return /*#__PURE__*/React.createElement(Sec, {
    id: "rates",
    bg: "#0C0E13",
    label: "02 Rates"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    c: LIME
  }, ">> 2026 AD TRUCK RATE CARD"), /*#__PURE__*/React.createElement(H2, null, "Mobile billboard rates by market."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 17,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.72)"
    }
  }, "Published daily rates per truck for 41 markets, starting from. The longer the run, the lower the daily rate. Pick a run length to highlight your column, or search for a city.")), /*#__PURE__*/React.createElement("div", {
    className: "at-tools",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "at-seg",
    role: "group",
    "aria-label": "Run length"
  }, TIERS.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: x,
    type: "button",
    "aria-pressed": t === i,
    onClick: () => setT(i)
  }, x.toUpperCase()))), /*#__PURE__*/React.createElement("input", {
    className: "at-search",
    type: "search",
    placeholder: "Search a market",
    "aria-label": "Search a market",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "at-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "at-tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "MARKET"), TIERS.map((x, i) => /*#__PURE__*/React.createElement("th", {
    key: x,
    className: t === i ? "on" : ""
  }, x.toUpperCase())))), /*#__PURE__*/React.createElement("tbody", null, RATES.map(([m, s, ...v]) => /*#__PURE__*/React.createElement("tr", {
    key: m,
    hidden: !!ql && !(m + " " + s).toLowerCase().includes(ql)
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, m, ", ", s), v.map((n, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    className: t === i ? "on" : ""
  }, $f(n))))), /*#__PURE__*/React.createElement("tr", {
    className: "else"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, "Anywhere else in the U.S."), ELSE.map((n, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    className: t === i ? "on" : ""
  }, $f(n), " + travel")))))), /*#__PURE__*/React.createElement("p", {
    role: "note",
    style: {
      marginTop: 14,
      padding: "14px 18px",
      borderRadius: 10,
      border: "1px solid rgba(214,243,95,.3)",
      background: "rgba(214,243,95,.06)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,.82)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: LIME,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".16em",
      marginRight: 10
    }
  }, "* PLEASE NOTE"), "All rates shown are starting-from rates. Rates may vary by date, route and truck availability, and are not final until quoted. Agency fee not included."), /*#__PURE__*/React.createElement("div", {
    className: "ep-grid3",
    style: {
      marginTop: 18
    }
  }, [["STARTING FROM", "Every rate is a floor", "Daily rate per truck. Final pricing depends on dates, route and truck availability at booking."], ["AGENCY FEE", "Not included", "Rates do not include the Ignite agency fee, creative production or permits. Your quote shows each line."], ["CONSECUTIVE DAYS", "Tiers need a straight run", "Days must run back to back to qualify for a tier. Multi-truck and multi-market routes are quoted as one program."]].map(([k, h, d]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    k: k,
    t: h,
    d: d
  }))));
};
const Proof = () => /*#__PURE__*/React.createElement(Sec, {
  label: "03 Total Wireless"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-grid2",
  style: {
    alignItems: "end",
    gap: 40
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, null, ">> RECEIPTS // TOTAL WIRELESS"), /*#__PURE__*/React.createElement(H2, null, "Trucks parked where the sale happens.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)"
  }
}, "For Total Wireless store events across Florida, from Sunny Isles Beach and Pembroke Pines to Orlando and Port Charlotte, Ignite routed digital ad trucks to the storefront. Each truck ran store-specific creative with the address on the panel, in English and Spanish, while our ambassadors worked the event outside the door. The truck pulled people off the road, and the crew closed them in the store.")), /*#__PURE__*/React.createElement("div", {
  className: "at-gal",
  style: {
    marginTop: 36
  }
}, /*#__PURE__*/React.createElement("figure", {
  className: "big ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-sunny-isles-iphone.jpg"),
  alt: "Brand ambassador posing beside a Total Wireless ad truck with Spanish iPhone 16e creative outside a Sunny Isles Beach store"
}), /*#__PURE__*/React.createElement("figcaption", null, "SUNNY ISLES BEACH, FL // STORE EVENT")), /*#__PURE__*/React.createElement("figure", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-orlando-spanish.jpg"),
  alt: "Total Wireless digital ad truck showing Spanish-language iPhone creative outside an Orlando store"
}), /*#__PURE__*/React.createElement("figcaption", null, "ORLANDO, FL")), /*#__PURE__*/React.createElement("figure", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-ulta-plaza.jpg"),
  alt: "Total Wireless iPhone 16e ad truck parked in a shopping plaza in front of an Ulta Beauty store"
}), /*#__PURE__*/React.createElement("figcaption", null, "SUNNY ISLES BEACH, FL // PLAZA")), /*#__PURE__*/React.createElement("figure", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-lehigh-acres.jpg"),
  alt: "Total Wireless ad truck with a $25 unlimited 5G offer parked in front of a Lehigh Acres store"
}), /*#__PURE__*/React.createElement("figcaption", null, "LEHIGH ACRES, FL")), /*#__PURE__*/React.createElement("figure", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-orlando-storefront.jpg"),
  alt: "Total Wireless ad truck parked beside the store entrance during an Orlando store event"
}), /*#__PURE__*/React.createElement("figcaption", null, "ORLANDO, FL // STORE EVENT")), /*#__PURE__*/React.createElement("figure", {
  className: "wide ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-publix-spanish.jpg"),
  alt: "Total Wireless digital ad truck with Spanish 5G ilimitado creative parked outside a Publix as shoppers walk past"
}), /*#__PURE__*/React.createElement("figcaption", null, "PUBLIX LOT // SPANISH CREATIVE")), /*#__PURE__*/React.createElement("figure", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-pembroke-pines.jpg"),
  alt: "Total Wireless free 5G phones ad truck parked at a grocery store entrance in Pembroke Pines as shoppers cross"
}), /*#__PURE__*/React.createElement("figcaption", null, "PEMBROKE PINES, FL")), /*#__PURE__*/React.createElement("figure", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  loading: "lazy",
  src: IMG("ad-truck-total-wireless-port-charlotte.jpg"),
  alt: "Rear and side panels of a Total Wireless ad truck promoting a free Samsung phone in Port Charlotte"
}), /*#__PURE__*/React.createElement("figcaption", null, "PORT CHARLOTTE, FL"))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/portfolio/total-wireless",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: ".18em",
    color: LIME,
    textDecoration: "none"
  }
}, "READ THE TOTAL WIRELESS CASE STUDY \u2192")));
const Uses = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "04 Use cases"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> WHERE AD TRUCKS WORK"), /*#__PURE__*/React.createElement(H2, null, "Four routes we run most.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid2",
  style: {
    marginTop: 36
  }
}, [["01 // STORE EVENTS", "Grand openings and retail events", "Park the truck at the storefront with the address and the offer on the panel. It pulls people off the road and into the door."], ["02 // TRADE SHOWS", "Convention center and hotel loops", "Circle the convention center, the hotels and the shuttle stops during show week, and point people to your booth number."], ["03 // FESTIVALS + SPORTS", "Crowd moments", "Hold at the entrance gates, the rideshare zone and the main streets before and after the event, then hand off to a sampling crew."], ["04 // LAUNCHES", "Multi-city routes", "Run one creative across several markets on a planned route, with GPS-tracked reporting for every city."]].map(([k, t, d]) => /*#__PURE__*/React.createElement(Card, {
  key: k,
  k: k,
  t: t,
  d: d
}))));
const How = () => /*#__PURE__*/React.createElement(Sec, {
  label: "05 How it works"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> HOW A ROUTE WORKS"), /*#__PURE__*/React.createElement(H2, null, "From brief to GPS-tracked route.")), /*#__PURE__*/React.createElement("div", {
  className: "at-steps",
  style: {
    marginTop: 44
  }
}, [["01 // BRIEF", "Markets and dates", "Send the markets, dates and goal. We check truck availability and send a route plan with the daily rate."], ["02 // CREATIVE", "Panels that read at 30 mph", "Digital loops or static wraps, built to the truck spec. Short copy, a big offer, and the address or booth number."], ["03 // ROUTE", "Plan the drive and the holds", "Drive loops, hold points and timing set to the traffic and the event schedule. Ambassadors added where they help."], ["04 // REPORT", "Proof in Spark", "GPS trail, timestamps and photos for every day, rolled into one recap with any street team or sampling."]].map(([k, t, d]) => /*#__PURE__*/React.createElement("div", {
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
const Ticker = () => {
  const items = [...RATES.map(r => [r[0], r[5]]), ["Anywhere else", ELSE[3]]];
  const row = items.map(([m, n], i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m.toUpperCase(), /*#__PURE__*/React.createElement("b", null, "FROM ", $f(n), "/DAY")));
  return /*#__PURE__*/React.createElement("div", {
    className: "at-tick",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "at-tick-in"
  }, row, row));
};
const Stats = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "Stats",
  style: {
    background: "#0A0B0D",
    color: "#fff",
    padding: "0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "at-stats"
}, [["41", "published markets", "", ""], ["50", "states covered", "", ""], ["$1,600", "starting from, per truck per day", "", ""], ["100%", "of routes GPS-tracked in Spark", "", ""]].map(([b, s]) => /*#__PURE__*/React.createElement("div", {
  key: s,
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("b", {
  style: {
    whiteSpace: "nowrap"
  }
}, b), /*#__PURE__*/React.createElement("span", null, s))))));
const Formats = () => /*#__PURE__*/React.createElement(Sec, {
  label: "Formats"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, ">> PICK YOUR TRUCK"), /*#__PURE__*/React.createElement(H2, null, "Three ways to put your brand on the road.")), /*#__PURE__*/React.createElement("div", {
  className: "at-fmt2",
  style: {
    marginTop: 44
  }
}, [["01", "DIGITAL LED", "Digital ad trucks", "LED panels that loop video or rotate creative by location and time of day. Change the offer between neighborhoods, or switch to Spanish for the next stop.", ["Video + rotating creative", "Day-part and geo swaps", "Night visibility"]], ["02", "STATIC WRAP", "Static billboard trucks", "Printed panels on three sides of the box. The lowest daily rate for longer runs where one message does the job, week after week.", ["3-sided printed panels", "Best value on 30+ day runs", "One creative, full coverage"]], ["03", "TRUCK + CREW", "Truck plus street team", "A dedicated truck paired with Ignite brand ambassadors. The truck draws the crowd, and the crew samples, scans and signs people up on the spot.", ["Sampling or signups at every hold", "Store events + launches", "One recap for both"]]].map(([n, k, t, d, li]) => /*#__PURE__*/React.createElement("div", {
  key: n,
  className: "row ep-rv"
}, /*#__PURE__*/React.createElement("div", {
  className: "n"
}, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  },
  c: LIME
}, k), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)), /*#__PURE__*/React.createElement("ul", null, li.map(x => /*#__PURE__*/React.createElement("li", {
  key: x
}, x)))))));
const Route = () => {
  const LOG = [["09:02", "Truck checked in // GPS", "START"], ["09:18", "Loop 1 // Convention Center", "DRIVE"], ["10:05", "Hold // Hotel row entrance", "HOLD"], ["11:30", "Loop 2 // Stadium district", "DRIVE"], ["12:40", "Hold // Storefront event", "HOLD"], ["13:15", "Street team hand-off // 212 samples", "CREW"], ["15:50", "Photo set uploaded // 18 photos", "PROOF"], ["17:00", "Day recap sent", "RECAP"]];
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setK(LOG.length - 1);
      return;
    }
    const id = setInterval(() => setK(v => (v + 1) % LOG.length), 1400);
    return () => clearInterval(id);
  }, []);
  const P = "M60,330 L60,210 L210,210 L210,90 L420,90 L420,250 L560,250 L560,140 L680,140";
  return /*#__PURE__*/React.createElement(Sec, {
    label: "Route tracking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ep-grid2",
    style: {
      alignItems: "end",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
    c: LIME
  }, ">> TRACKED IN SPARK"), /*#__PURE__*/React.createElement(H2, null, "Know exactly where your truck was.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.72)"
    }
  }, "Every truck day is logged in Spark: the GPS trail, every hold point, timestamped photos and any street team hand-offs, all in one recap you can share with a link.")), /*#__PURE__*/React.createElement("div", {
    className: "at-route ep-rv",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "map"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 740 400",
    preserveAspectRatio: "xMidYMid slice",
    role: "img",
    "aria-label": "Sample GPS route trail for one ad truck day"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "atg",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40 0H0V40",
    fill: "none",
    stroke: "rgba(255,255,255,.05)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "740",
    height: "400",
    fill: "url(#atg)"
  }), [90, 210, 250, 330].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "740",
    y1: y,
    y2: y,
    stroke: "rgba(255,255,255,.07)",
    strokeWidth: "10"
  })), [60, 210, 420, 560, 680].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    y1: "0",
    y2: "400",
    x1: x,
    x2: x,
    stroke: "rgba(255,255,255,.07)",
    strokeWidth: "10"
  })), /*#__PURE__*/React.createElement("path", {
    d: P,
    fill: "none",
    stroke: "rgba(214,243,95,.25)",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: P,
    fill: "none",
    stroke: "#D6F35F",
    strokeWidth: "4",
    strokeDasharray: "10 10"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-dashoffset",
    from: "200",
    to: "0",
    dur: "3s",
    repeatCount: "indefinite"
  })), [[210, 90, "HOTEL ROW", 0], [420, 250, "STOREFRONT", 0], [680, 140, "STADIUM", 1]].map(([x, y, l, e]) => /*#__PURE__*/React.createElement("g", {
    key: l
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "9",
    fill: "#0A0B0D",
    stroke: "#D6F35F",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: e ? x - 16 : x + 16,
    y: y - 12,
    textAnchor: e ? "end" : "start",
    fill: "rgba(255,255,255,.8)",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "12",
    letterSpacing: "2"
  }, l))), /*#__PURE__*/React.createElement("circle", {
    r: "8",
    fill: "#D6F35F"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "9s",
    repeatCount: "indefinite",
    path: P
  })))), /*#__PURE__*/React.createElement("div", {
    className: "log"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live"
  }), "SPARK // ROUTE LOG", /*#__PURE__*/React.createElement("span", {
    className: "sd"
  }, "SAMPLE DATA")), LOG.map(([t, l, s], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "ln" + (i <= k ? " on" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, t), /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    className: "s"
  }, s))))));
};
const App = () => {
  useRv();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Formats, null), /*#__PURE__*/React.createElement(Rates, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Route, null), /*#__PURE__*/React.createElement(Uses, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Faq, {
    h: "Ad trucks, answered."
  }), /*#__PURE__*/React.createElement(Rel, {
    items: [["Trade show staffing + ad trucks", "/trade-show-staffing/ad-trucks"], ["Mobile tours", "/services/mobile-tours"], ["Street teams", "/services/street-teams"]]
  }), /*#__PURE__*/React.createElement(CTA, {
    pull: "every route GPS-tracked",
    h: "Pick the market. We'll plan the route.",
    b: "Book a route"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesAdTrucks: App
});
})();
