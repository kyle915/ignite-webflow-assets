(function(){if (typeof window !== "undefined" && window.PageServicesCostcoRoadshows) return;
/* Auto-extracted from the design project's pages/services-costco-roadshows.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-services-costco-roadshows")) return;
  var s = document.createElement("style");
  s.id = "pagecss-services-costco-roadshows";
  s.textContent = "body{background:#0A0B0D}\n@keyframes ep-rise{0%{opacity:0;transform:translateY(24px)}100%{opacity:1;transform:none}}\n@keyframes at-drive{0%{transform:translateX(-4%)}50%{transform:translateX(4%)}100%{transform:translateX(-4%)}}\n.ep-rv{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,.84,.3,1),transform .7s cubic-bezier(.16,.84,.3,1)}.ep-rv.in{opacity:1;transform:none}\n.ep-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.ep-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n.at-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:48px;align-items:center}\n.at-photo{position:relative;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.12);aspect-ratio:16/10;background:#12141A}\n.at-photo img{width:100%;height:100%;object-fit:cover;display:block;animation:at-drive 18s ease-in-out infinite;transform-origin:center}\n.at-photo figcaption{position:absolute;left:12px;bottom:12px;padding:6px 10px;border-radius:6px;background:rgba(10,11,13,.82);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:rgba(255,255,255,.8)}\n.at-from{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12)}\n.at-from b{font-family:var(--font-display);font-weight:800;font-size:56px;letter-spacing:-.04em;line-height:1;color:#D6F35F}\n.at-tools{display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:16px}\n.at-seg{display:inline-flex;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:4px;gap:4px;flex-wrap:wrap}\n.at-seg button{white-space:nowrap;height:38px;padding:0 16px;border-radius:999px;border:0;background:none;color:rgba(255,255,255,.7);font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;cursor:pointer}\n.at-seg button[aria-pressed=true]{background:#D6F35F;color:#0A0B0D;font-weight:700}\n.at-search{height:44px;min-width:240px;padding:0 16px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:#12141A;color:#fff;font-size:15px}\n.at-wrap{border:1px solid rgba(255,255,255,.1);border-radius:14px;overflow:auto;max-height:640px;background:#101217}\n.at-tbl{width:100%;border-collapse:collapse;min-width:640px}\n.at-tbl th,.at-tbl td{text-align:left;padding:13px 18px;border-bottom:1px solid rgba(255,255,255,.06);font-size:15px}\n.at-tbl thead th{position:sticky;top:0;background:#16181F;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.18em;color:rgba(255,255,255,.55);font-weight:500;z-index:1}\n.at-tbl tbody th{font-family:var(--font-display);font-weight:600}\n.at-tbl td{font-family:var(--font-mono);color:rgba(255,255,255,.72);font-variant-numeric:tabular-nums}\n.at-tbl td.on,.at-tbl thead th.on{color:#D6F35F}\n.at-tbl td.on{font-weight:700;background:rgba(214,243,95,.05)}\n.at-tbl tr.else th{color:#D6F35F}\n.at-tbl tr[hidden]{display:none}\n.at-gal{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:220px;gap:10px}\n.at-gal figure{margin:0;border-radius:12px;overflow:hidden;position:relative;background:#12141A}\n.at-gal figure.big{grid-column:span 2;grid-row:span 2}\n.at-gal figure.wide{grid-column:span 2}\n.at-gal img{width:100%;height:100%;object-fit:cover;transition:transform .6s}\n.at-gal figure:hover img{transform:scale(1.04)}\n.at-gal figcaption{position:absolute;left:10px;bottom:10px;padding:5px 9px;border-radius:6px;background:rgba(10,11,13,.8);font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.8)}\n.at-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(255,255,255,.12)}\n.at-steps>div{padding:24px 20px 0 0}.at-steps>div+div{padding-left:20px;border-left:1px solid rgba(255,255,255,.08)}\n.at-tick{border-bottom:1px solid rgba(255,255,255,.08);background:#0C0E13;overflow:hidden;padding:16px 0}\n.at-tick-in{display:flex;gap:44px;width:max-content;animation:at-scroll 60s linear infinite}\n.at-tick span{font-family:var(--font-mono);font-size:12px;letter-spacing:.2em;color:rgba(255,255,255,.55);white-space:nowrap}\n.at-tick span b{color:#D6F35F;font-weight:700;margin-left:10px}\n@keyframes at-scroll{to{transform:translateX(-50%)}}\n.at-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12)}\n.at-stats>div{padding:28px 24px}.at-stats>div+div{border-left:1px solid rgba(255,255,255,.08)}\n.at-stats b{display:block;font-family:var(--font-display);font-weight:900;font-size:clamp(36px,4vw,56px);letter-spacing:-.04em;line-height:1;color:#fff}\n.at-stats b i{display:inline!important;font-style:normal;color:#D6F35F}\n.at-stats span{display:block;margin-top:10px;font-size:14.5px;color:rgba(255,255,255,.62)}\n.at-car img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.06);transition:opacity .9s ease,transform 5s ease;animation:none}\n.at-car img.on{opacity:1;transform:scale(1)}\n.at-car figcaption{z-index:2}\n.at-car-ctl{position:absolute;right:12px;bottom:12px;z-index:2;display:flex;align-items:center;gap:8px;padding:6px;border-radius:999px;background:rgba(10,11,13,.78)}\n.at-car-ctl>button{width:30px;height:30px;border-radius:30px;border:1px solid rgba(255,255,255,.2);background:none;color:#fff;cursor:pointer;font-size:14px}\n.at-car-ctl>button:hover{border-color:#D6F35F;color:#D6F35F}\n.at-car-ctl .dots{display:flex;gap:6px;padding:0 4px}\n.at-car-ctl .dots button{width:7px;height:7px;padding:0;border-radius:7px;border:0;background:rgba(255,255,255,.35);cursor:pointer;transition:width .3s,background .3s}\n.at-car-ctl .dots button.on{width:20px;background:#D6F35F}\n@media (max-width:560px){.at-car-ctl .dots{display:none}}\n.at-fmt2{border-top:1px solid rgba(255,255,255,.12)}\n.at-fmt2 .row{display:grid;grid-template-columns:140px minmax(0,1.3fr) minmax(0,.9fr);gap:40px;align-items:center;padding:34px 0;border-bottom:1px solid rgba(255,255,255,.12);transition:background .25s,padding .25s}\n.at-fmt2 .row:hover{background:linear-gradient(90deg,rgba(214,243,95,.07),transparent 70%);padding-left:18px}\n.at-fmt2 .n{font-family:var(--font-display);font-weight:900;font-size:96px;line-height:.85;letter-spacing:-.05em;color:transparent;-webkit-text-stroke:1.5px rgba(214,243,95,.55);transition:color .25s}\n.at-fmt2 .row:hover .n{color:#D6F35F;-webkit-text-stroke-color:#D6F35F}\n.at-fmt2 h3{margin-top:10px;font-family:var(--font-display);font-weight:800;font-size:clamp(24px,2.4vw,32px);letter-spacing:-.025em}\n.at-fmt2 p{margin-top:10px;font-size:16px;line-height:1.55;color:rgba(255,255,255,.68);max-width:560px}\n.at-fmt2 ul{margin:0;padding:0;list-style:none;display:grid;gap:10px}\n.at-fmt2 li{padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.12);font-size:14px;color:rgba(255,255,255,.82)}\n.at-fmt2 li::before{content:\"✓  \";color:#D6F35F;font-weight:700}\n@media (max-width:980px){.at-fmt2 .row{grid-template-columns:1fr;gap:16px}.at-fmt2 .n{font-size:64px}}\n.at-fmt{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.at-fmt>div{position:relative;padding:30px 28px 28px;border-radius:16px;background:#12141A;border:1px solid rgba(255,255,255,.08);overflow:hidden;transition:border-color .25s,transform .25s}\n.at-fmt>div:hover{border-color:rgba(214,243,95,.45);transform:translateY(-3px)}\n.at-fmt .pnl{height:120px;border-radius:10px;margin-bottom:22px;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.1)}\n.at-fmt .pnl.dig{background:#000}\n.at-fmt .pnl.dig::before{content:\"\";position:absolute;inset:0;background-image:radial-gradient(rgba(214,243,95,.9) 1px,transparent 1.6px);background-size:7px 7px;opacity:.16}\n.at-fmt .pnl.dig em{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--font-display);font-weight:900;font-style:normal;font-size:30px;letter-spacing:-.03em;color:#D6F35F;text-shadow:0 0 18px rgba(214,243,95,.6);animation:at-flip 6s steps(1) infinite}\n@keyframes at-flip{0%{content:\"\"}}\n.at-fmt .pnl.stat{background:repeating-linear-gradient(135deg,#1C1F27 0 14px,#16181F 14px 28px)}\n.at-fmt .pnl.stat em{position:absolute;left:16px;bottom:14px;font-family:var(--font-display);font-weight:900;font-style:normal;font-size:24px;color:#fff;letter-spacing:-.02em}\n.at-fmt .pnl.ded{background:#0E1015}\n.at-fmt .pnl.ded i{position:absolute;bottom:20px;width:9px;height:9px;border-radius:9px;background:#D6F35F;box-shadow:0 0 12px #D6F35F}\n.at-fmt h3{font-family:var(--font-display);font-weight:700;font-size:22px}\n.at-fmt p{margin-top:10px;font-size:15px;line-height:1.55;color:rgba(255,255,255,.66)}\n.at-fmt ul{margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px}\n.at-fmt li{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;color:rgba(255,255,255,.7)}\n.at-fmt li::before{content:\"✓ \";color:#D6F35F}\n.at-est{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:stretch}\n.at-est .in,.at-est .out{padding:30px;border-radius:16px;border:1px solid rgba(255,255,255,.1);background:#12141A}\n.at-est .out{border-color:rgba(214,243,95,.4);background:linear-gradient(160deg,rgba(214,243,95,.1),rgba(214,243,95,.02) 60%)}\n.at-est label{display:block;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.18em;color:rgba(255,255,255,.55);margin-bottom:10px}\n.at-est select{width:100%;height:52px;padding:0 16px;border-radius:12px;border:1px solid rgba(255,255,255,.16);background:#0A0B0D;color:#fff;font-size:16px}\n.at-est input[type=range]{width:100%;accent-color:#D6F35F}\n.at-est .dv{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}\n.at-est .dv b{font-family:var(--font-display);font-weight:800;font-size:30px;color:#fff}\n.at-est .tierpill{display:inline-flex;margin-top:16px;padding:6px 12px;border-radius:999px;border:1px solid rgba(214,243,95,.4);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:#D6F35F}\n.at-est .big{font-family:var(--font-display);font-weight:900;font-size:clamp(46px,5vw,72px);letter-spacing:-.045em;line-height:.95;color:#D6F35F;margin-top:12px;font-variant-numeric:tabular-nums}\n.at-est .row{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:15px}\n.at-est .row span:last-child{font-family:var(--font-mono);color:#fff}\n.at-route{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:0;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#0E1015}\n.at-route .map{position:relative;min-height:420px;background:#0C0E12}\n.at-route .map svg{position:absolute;inset:0;width:100%;height:100%}\n.at-route .log{border-left:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column}\n.at-route .bar{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:rgba(255,255,255,.55)}\n.at-route .bar .live{width:8px;height:8px;border-radius:8px;background:#D6F35F;box-shadow:0 0 10px #D6F35F;animation:at-blink 1.6s infinite}\n.at-route .bar .sd{margin-left:auto;padding:2px 8px;border-radius:999px;border:1px solid rgba(255,182,39,.5);color:#FFB627}\n@keyframes at-blink{50%{opacity:.3}}\n.at-route .ln{display:grid;grid-template-columns:52px 1fr auto;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);font-size:13.5px;align-items:baseline;opacity:.35;transition:opacity .4s}\n.at-route .ln.on{opacity:1}\n.at-route .ln .t{font-family:var(--font-mono);font-size:11px;color:rgba(255,255,255,.5)}\n.at-route .ln .s{font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;color:#D6F35F}\n@media (prefers-reduced-motion:reduce){.at-tick-in{animation:none}.at-route .bar .live{animation:none}}\n@media (max-width:980px){.at-stats{grid-template-columns:1fr 1fr}.at-stats>div:nth-child(3){border-left:0}.at-stats>div:nth-child(n+3){border-top:1px solid rgba(255,255,255,.08)}.at-fmt,.at-est,.at-route{grid-template-columns:1fr}.at-route .log{border-left:0;border-top:1px solid rgba(255,255,255,.08)}.at-route .map{min-height:300px}}\n@media (prefers-reduced-motion:reduce){.ep-rv{opacity:1;transform:none;transition:none}.at-photo img{animation:none}}\n@media (max-width:980px){.ep-grid3,.ep-grid2,.at-hero{grid-template-columns:1fr}.at-steps{grid-template-columns:1fr 1fr;row-gap:24px}.at-steps>div:nth-child(3){padding-left:0;border-left:0}.at-gal{grid-template-columns:1fr 1fr;grid-auto-rows:200px}.at-gal figure.big{grid-column:span 2;grid-row:auto}.at-gal figure.wide{grid-column:span 2}}\n@media (max-width:560px){.at-seg{display:grid;grid-template-columns:1fr 1fr;border-radius:16px;width:100%}.at-steps{grid-template-columns:1fr}.at-steps>div+div{padding-left:0;border-left:0}.at-from b{font-size:44px}.at-search{min-width:0;width:100%}}\n.rs-vs{display:grid;grid-template-columns:1fr 1fr;gap:14px}\n.rs-vs>div{padding:30px;border-radius:16px;border:1px solid rgba(255,255,255,.1);background:#12141A}\n.rs-vs>div.us{border-color:rgba(214,243,95,.45);background:linear-gradient(160deg,rgba(214,243,95,.09),rgba(214,243,95,.02) 60%)}\n.rs-vs ul{list-style:none;margin:16px 0 0;padding:0;display:grid;gap:10px}\n.rs-vs li{font-size:15.5px;line-height:1.5;color:rgba(255,255,255,.75);padding-left:26px;position:relative}\n.rs-vs li::before{position:absolute;left:0;font-family:var(--font-mono);font-weight:700}\n.rs-vs .them li::before{content:\"✕\";color:#D7453E}.rs-vs .us li::before{content:\"✓\";color:#D6F35F}\n.rs-inc{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}\n.rs-inc>div{padding:22px;border-radius:14px;background:#12141A;border:1px solid rgba(255,255,255,.08)}\n.rs-inc b{display:block;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.2em;color:#D6F35F}\n.rs-inc p{margin-top:10px;font-size:15px;line-height:1.5;color:rgba(255,255,255,.82)}\n@media (max-width:980px){[data-screen-label=\"Gallery\"] .at-gal{grid-template-columns:1fr!important;grid-auto-rows:380px!important}.rs-vs{grid-template-columns:1fr}.rs-inc{grid-template-columns:1fr 1fr}}@media (max-width:560px){.rs-inc{grid-template-columns:1fr}}";
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
const FAQ = [["What is a Costco roadshow?", "A Costco roadshow is a multi-day, in-warehouse event where a brand sells its product directly to members from a dedicated table or display, usually for 10 to 14 days in a single warehouse. Unlike a standard demo, the goal is to sell product on the spot, so the staff have to educate and close, not just hand out samples."], ["How is a Costco roadshow different from a Costco demo?", "A demo is a short sampling shift, often run by the club's own demo vendor. A roadshow is a longer selling event run by the brand, with its own display, signage and product, where members buy at the table. Roadshows need sales-forward staff, inventory control and Costco vendor compliance."], ["Do you handle Costco roadshow compliance and vendor requirements?", "Yes. Ignite handles roadshow compliance and Costco vendor requirements, including staff credentials, setup standards and the paperwork the warehouse needs before the first day."], ["What does Ignite include in a roadshow program?", "Trained, brand-right product specialists, kitted demo setups with signage, displays and uniforms, buyback management and product logistics, roadshow compliance, and real-time reporting through Spark by Ignite."], ["Can you run roadshows at Sam's Club and BJ's too?", "Yes. We staff warehouse club roadshows and in-club events beyond Costco, with the same trained crews, setup standards and Spark reporting."], ["How do we see what's selling during a roadshow?", "Spark logs every shift with GPS check-ins, units sold, engagement and photos, so you can track velocity by warehouse and by day, and compare markets across a national rollout."]];
const IMG = n => window.__resources && window.__resources["r_assets_" + n.replace(/[^a-z0-9]/gi, "_")] || "https://kyle915.github.io/ignite-webflow-assets/assets/" + n;
const SLIDES = [["costco-roadshow-neutonic-ambassador.jpg", "Ignite brand ambassador at a Neutonic roadshow table inside Costco, in front of pallets of product", "NEUTONIC // COSTCO ROADSHOW"], ["costco-roadshow-neutonic-table.jpg", "Neutonic roadshow table with sample cups, product display and a pull-up banner inside a Costco warehouse", "NEUTONIC // IN-WAREHOUSE TABLE"], ["costco-roadshow-demo-table.jpg", "Roadshow demo table inside a Costco warehouse with almond oil samples, branded signage and a pallet display", "ALMOND OIL // ROADSHOW DEMO"]];
const HeroCarousel = () => {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI(v => (v + 1) % SLIDES.length), 4200);
    return () => clearInterval(id);
  }, [paused]);
  const go = d => setI(v => (v + d + SLIDES.length) % SLIDES.length);
  return /*#__PURE__*/React.createElement("figure", {
    className: "at-photo at-car",
    style: {
      margin: 0,
      aspectRatio: "4/5",
      animation: "ep-rise .8s .15s both"
    },
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    "aria-roledescription": "carousel",
    "aria-label": "Costco roadshow photos"
  }, SLIDES.map(([src, alt], k) => /*#__PURE__*/React.createElement("img", {
    key: src,
    src: IMG(src),
    alt: alt,
    className: k === i ? "on" : "",
    "aria-hidden": k !== i,
    loading: k === 0 ? "eager" : "lazy"
  })), /*#__PURE__*/React.createElement("figcaption", null, SLIDES[i][2]), /*#__PURE__*/React.createElement("div", {
    className: "at-car-ctl"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous photo",
    onClick: () => go(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    className: "dots"
  }, SLIDES.map((_, k) => /*#__PURE__*/React.createElement("button", {
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
const Gallery = () => /*#__PURE__*/React.createElement(Sec, {
  label: "Gallery"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, ">> FROM THE WAREHOUSE FLOOR"), /*#__PURE__*/React.createElement(H2, null, "Clean tables. Stocked pallets. Staff who sell.")), /*#__PURE__*/React.createElement("div", {
  className: "at-gal",
  style: {
    marginTop: 36,
    gridTemplateColumns: "repeat(3,minmax(0,1fr))",
    gridAutoRows: "420px"
  }
}, SLIDES.map(([src, alt, cap]) => /*#__PURE__*/React.createElement("figure", {
  key: src,
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("img", {
  src: IMG(src),
  alt: alt,
  loading: "lazy"
}), /*#__PURE__*/React.createElement("figcaption", null, cap)))));
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
}, "* COSTCO + WAREHOUSE CLUB ROADSHOWS"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: .95,
    fontSize: "clamp(40px,5.2vw,84px)"
  }
}, "Costco roadshow staffing that ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "sells.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.78)",
    maxWidth: 600
  }
}, "Your product deserves more than a folding table and a hairnet. Ignite brings high-energy, brand-trained product specialists to Costco and warehouse club roadshows who actually sell, not just sample."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 30,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Btn, null, "Plan my roadshow \u2192"), /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "#included"
}, "See what's included")), /*#__PURE__*/React.createElement("div", {
  className: "at-from"
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  }
}, "IGNITE BY THE NUMBERS"), /*#__PURE__*/React.createElement("b", null, "5,000+"), /*#__PURE__*/React.createElement("span", {
  style: {
    flexBasis: "100%",
    fontSize: 14,
    color: "rgba(255,255,255,.7)"
  }
}, "events executed, from one warehouse to a national rollout."))), /*#__PURE__*/React.createElement(HeroCarousel, null))));
const Stats = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "Stats",
  style: {
    background: "#0A0B0D",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  className: "at-stats"
}, [["5,000+", "events executed"], ["257,000+", "vetted brand ambassadors"], ["50", "states covered"], ["48hr", "rush staffing"]].map(([b, s]) => /*#__PURE__*/React.createElement("div", {
  key: s,
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("b", {
  style: {
    whiteSpace: "nowrap"
  }
}, b), /*#__PURE__*/React.createElement("span", null, s))))));
const Problem = () => /*#__PURE__*/React.createElement(Sec, {
  label: "02 The problem"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 860
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> MAKE SAD SAMPLING A THING OF THE PAST"), /*#__PURE__*/React.createElement(H2, null, "Costco traffic is massive. Your sales should be too."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)"
  }
}, "Traditional roadshows rely on passive sampling: low energy, minimal education and missed conversions. Ignite turns a roadshow into a high-performance sales environment.")), /*#__PURE__*/React.createElement("div", {
  className: "rs-vs",
  style: {
    marginTop: 40
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "them ep-rv"
}, /*#__PURE__*/React.createElement(Mono, {
  c: "rgba(255,255,255,.5)"
}, "TYPICAL ROADSHOW"), /*#__PURE__*/React.createElement("ul", null, ["Passive sampling from behind the table", "Staff who hand out cups, not reasons to buy", "Messy tables and loose signage", "Little education on why the product is worth it", "No real read on what sold, where or when"].map(x => /*#__PURE__*/React.createElement("li", {
  key: x
}, x)))), /*#__PURE__*/React.createElement("div", {
  className: "us ep-rv"
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, "THE IGNITE ROADSHOW"), /*#__PURE__*/React.createElement("ul", null, ["Sales-forward specialists who start conversations", "Staff trained to drive multi-unit purchases", "Clean tables, tight signage, on-brand presence", "Members leave knowing why to buy, and buying", "Velocity, engagement and lift tracked in Spark"].map(x => /*#__PURE__*/React.createElement("li", {
  key: x
}, x))))));
const Model = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "03 Model"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, ">> THE IGNITE ROADSHOW MODEL"), /*#__PURE__*/React.createElement(H2, null, "Four things that move cases.")), /*#__PURE__*/React.createElement("div", {
  className: "at-fmt2",
  style: {
    marginTop: 44
  }
}, [["01", "SPECIALISTS", "Sales-forward product specialists", "Confident educators trained on your product and on the close, so a taste turns into a multi-unit purchase.", ["Brand-trained before day one", "Coached on the multi-unit ask", "Same crew across the run"]], ["02", "DISPLAY", "Inventory and display discipline", "Clean tables, tight signage and a stocked display all day, because a sloppy table loses members before the pitch.", ["Kitted setups + uniforms", "Restock and facing all day", "On-brand at every warehouse"]], ["03", "WAREHOUSE", "Warehouse-aware execution", "Built around club rules: roadshow compliance, vendor requirements, buyback and product logistics handled for you.", ["Roadshow compliance", "Costco vendor requirements", "Buyback + logistics"]], ["04", "DATA", "Data-backed performance", "Track velocity, engagement and lift across warehouses and markets in Spark, while the roadshow is still running.", ["Units + engagement by day", "Compare warehouses", "Recap within hours"]]].map(([n, k, t, d, li]) => /*#__PURE__*/React.createElement("div", {
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
const Included = () => /*#__PURE__*/React.createElement(Sec, {
  id: "included",
  label: "04 Included"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> WHAT'S INCLUDED"), /*#__PURE__*/React.createElement(H2, null, "Everything a roadshow needs, run by one team.")), /*#__PURE__*/React.createElement("div", {
  className: "rs-inc",
  style: {
    marginTop: 36
  }
}, [["STAFF", "Trained, brand-right demo specialists"], ["COMPLIANCE", "Full roadshow compliance and Costco vendor requirements handled"], ["SETUP", "Kitted demo setups: signage, displays and uniforms"], ["REPORTING", "Real-time reporting through Spark by Ignite"], ["LOGISTICS", "Buyback management and product logistics"], ["CONVERSION", "Staff who convert, not just hand out cups"], ["CONSISTENCY", "The same brand experience at every warehouse"], ["SCALE", "From a single warehouse to a national rollout"]].map(([k, t]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  className: "ep-rv"
}, /*#__PURE__*/React.createElement("b", null, k), /*#__PURE__*/React.createElement("p", null, t)))));
const How = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "05 How it works"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> HOW A ROADSHOW RUNS"), /*#__PURE__*/React.createElement(H2, null, "From warehouse approval to case count.")), /*#__PURE__*/React.createElement("div", {
  className: "at-steps",
  style: {
    marginTop: 44
  }
}, [["01 // PLAN", "Warehouses and dates", "Send the item, the warehouses and the run dates. We plan staffing, kits and logistics for each location."], ["02 // PREP", "Compliance and kits", "Vendor requirements, credentials, signage, displays and uniforms ready before the first day."], ["03 // SELL", "On the floor", "Trained specialists open every day, keep the display tight and drive multi-unit purchases."], ["04 // REPORT", "Velocity in Spark", "Units, engagement and photos logged daily, with buyback and a full recap at the end of the run."]].map(([k, t, d]) => /*#__PURE__*/React.createElement("div", {
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
const App = () => {
  useRv();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(Model, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Included, null), /*#__PURE__*/React.createElement(How, null), /*#__PURE__*/React.createElement(Faq, {
    h: "Costco roadshows, answered."
  }), /*#__PURE__*/React.createElement(Rel, {
    items: [["Retail demo programs", "/services/retail-demo-programs"], ["Product sampling", "/services/product-sampling"], ["Spark reporting", "https://sparkbyignite.igniteproductions.co/"]]
  }), /*#__PURE__*/React.createElement(CTA, {
    pull: "costco deserves better. so does your brand",
    h: "Plan a roadshow that moves cases.",
    b: "Plan my roadshow"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesCostcoRoadshows: App
});
})();
