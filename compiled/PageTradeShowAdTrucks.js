(function(){if (typeof window !== "undefined" && window.PageTradeShowAdTrucks) return;
/* Auto-extracted from the design project's pages/trade-show-ad-trucks.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

(function () {
  if (typeof document === "undefined" || document.getElementById("pagecss-trade-show-ad-trucks")) return;
  var s = document.createElement("style");
  s.id = "pagecss-trade-show-ad-trucks";
  s.textContent = "body{background:#0A0B0D}\n@keyframes ep-rise{0%{opacity:0;transform:translateY(24px)}100%{opacity:1;transform:none}}\n@keyframes at-drive{0%{transform:translateX(-4%)}50%{transform:translateX(4%)}100%{transform:translateX(-4%)}}\n.ep-rv{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,.84,.3,1),transform .7s cubic-bezier(.16,.84,.3,1)}.ep-rv.in{opacity:1;transform:none}\n.ep-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}\n.ep-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n.at-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:48px;align-items:center}\n.at-photo{position:relative;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.12);aspect-ratio:16/10;background:#12141A}\n.at-photo img{width:100%;height:100%;object-fit:cover;display:block;animation:at-drive 18s ease-in-out infinite;transform-origin:center}\n.at-photo figcaption{position:absolute;left:12px;bottom:12px;padding:6px 10px;border-radius:6px;background:rgba(10,11,13,.82);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.16em;color:rgba(255,255,255,.8)}\n.at-from{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12)}\n.at-from b{font-family:var(--font-display);font-weight:800;font-size:56px;letter-spacing:-.04em;line-height:1;color:#D6F35F}\n.at-tools{display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:16px}\n.at-seg{display:inline-flex;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:4px;gap:4px;flex-wrap:wrap}\n.at-seg button{white-space:nowrap;height:38px;padding:0 16px;border-radius:999px;border:0;background:none;color:rgba(255,255,255,.7);font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;cursor:pointer}\n.at-seg button[aria-pressed=true]{background:#D6F35F;color:#0A0B0D;font-weight:700}\n.at-search{height:44px;min-width:240px;padding:0 16px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:#12141A;color:#fff;font-size:15px}\n.at-wrap{border:1px solid rgba(255,255,255,.1);border-radius:14px;overflow:auto;max-height:640px;background:#101217}\n.at-tbl{width:100%;border-collapse:collapse;min-width:640px}\n.at-tbl th,.at-tbl td{text-align:left;padding:13px 18px;border-bottom:1px solid rgba(255,255,255,.06);font-size:15px}\n.at-tbl thead th{position:sticky;top:0;background:#16181F;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.18em;color:rgba(255,255,255,.55);font-weight:500;z-index:1}\n.at-tbl tbody th{font-family:var(--font-display);font-weight:600}\n.at-tbl td{font-family:var(--font-mono);color:rgba(255,255,255,.72);font-variant-numeric:tabular-nums}\n.at-tbl td.on,.at-tbl thead th.on{color:#D6F35F}\n.at-tbl td.on{font-weight:700;background:rgba(214,243,95,.05)}\n.at-tbl tr.else th{color:#D6F35F}\n.at-tbl tr[hidden]{display:none}\n.at-gal{display:grid;grid-template-columns:1.3fr 1fr 1fr;grid-auto-rows:240px;gap:10px}\n.at-gal figure{margin:0;border-radius:12px;overflow:hidden;position:relative;background:#12141A}\n.at-gal figure.big{grid-row:span 2}\n.at-gal img{width:100%;height:100%;object-fit:cover;transition:transform .6s}\n.at-gal figure:hover img{transform:scale(1.04)}\n.at-gal figcaption{position:absolute;left:10px;bottom:10px;padding:5px 9px;border-radius:6px;background:rgba(10,11,13,.8);font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.8)}\n.at-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid rgba(255,255,255,.12)}\n.at-steps>div{padding:24px 20px 0 0}.at-steps>div+div{padding-left:20px;border-left:1px solid rgba(255,255,255,.08)}\n@media (prefers-reduced-motion:reduce){.ep-rv{opacity:1;transform:none;transition:none}.at-photo img{animation:none}}\n@media (max-width:980px){.ep-grid3,.ep-grid2,.at-hero{grid-template-columns:1fr}.at-steps{grid-template-columns:1fr 1fr;row-gap:24px}.at-steps>div:nth-child(3){padding-left:0;border-left:0}.at-gal{grid-template-columns:1fr 1fr;grid-auto-rows:200px}.at-gal figure.big{grid-column:span 2;grid-row:auto}}\n@media (max-width:560px){.at-seg{display:grid;grid-template-columns:1fr 1fr;border-radius:16px;width:100%}.at-steps{grid-template-columns:1fr}.at-steps>div+div{padding-left:0;border-left:0}.at-from b{font-size:44px}.at-search{min-width:0;width:100%}}\n.tz-play{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;border:1px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden}\n.tz-play>div{padding:30px;position:relative;background:#12141A}.tz-play>div+div{border-left:1px solid rgba(255,255,255,.08)}\n.tz-play .n{font-family:var(--font-display);font-weight:900;font-size:64px;line-height:.9;color:rgba(214,243,95,.18)}\n.tz-play h3{margin-top:12px;font-family:var(--font-display);font-weight:700;font-size:22px}\n.tz-play p{margin-top:8px;font-size:15px;line-height:1.55;color:rgba(255,255,255,.66)}\n.tz-play>div:not(:last-child)::after{content:\"→\";position:absolute;right:-12px;top:44px;width:24px;height:24px;border-radius:24px;background:#D6F35F;color:#0A0B0D;font-weight:700;display:grid;place-items:center;font-size:13px;z-index:2}\n.tz-shows{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}\n.tz-shows a{padding:22px;border-radius:14px;background:#12141A;border:1px solid rgba(255,255,255,.08);color:#fff;text-decoration:none;display:flex;flex-direction:column;gap:8px;transition:border-color .2s,transform .2s}\n.tz-shows a:hover{border-color:rgba(214,243,95,.5);transform:translateY(-2px)}\n.tz-shows b{font-family:var(--font-display);font-size:20px}.tz-shows p{font-size:14px;line-height:1.5;color:rgba(255,255,255,.62)}\n@media (max-width:980px){.tz-play{grid-template-columns:1fr}.tz-play>div+div{border-left:0;border-top:1px solid rgba(255,255,255,.08)}.tz-play>div:not(:last-child)::after{right:auto;left:30px;top:auto;bottom:-12px;transform:rotate(90deg)}.tz-shows{grid-template-columns:1fr 1fr}}\n@media (max-width:560px){.tz-shows{grid-template-columns:1fr}}";
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
const FAQ = [["Can you run an ad truck around a convention center during a trade show?", "Yes. We route mobile billboard trucks on loops past the convention center, the official hotels and the shuttle and rideshare zones, timed to doors opening, keynote breaks and the evening hotel rush. Venue and city rules decide where a truck can hold, and we plan the route around them."], ["How much does a trade show ad truck cost?", "Most show runs are 2 to 6 days, and truck rates for that length start from $2,325 a day in listed markets like Orlando, New York, Dallas and Los Angeles. Las Vegas and other unlisted markets start from the same $2,325 a day, plus travel. They do not include the Ignite agency fee or booth staffing. See the full rate card on the Ad Trucks page."], ["Why pair an ad truck with booth staff?", "The truck gets your booth number in front of attendees outside the hall, where other exhibitors can't reach them. Street teams at the doors hand out passes or offers that drive people to the booth, and the booth crew is briefed to expect them."], ["Which trade shows do you run ad trucks for?", "Any show where attendees move between hotels and a convention center: CES, AWS re:Invent, SEMA, NAB and Black Hat in Las Vegas, plus Dreamforce, NRF, Expo West and shows in Orlando and Chicago."], ["How do we measure a trade show ad truck?", "Spark logs the GPS route and photos for every truck day. Pair the truck with a booth-specific offer or QR code, and track booth visits and scans that come from it in the same recap."]];
const SHOWS = [["ces", "CES", "JANUARY // LAS VEGAS", "LVCC loops between North, Central, South and West halls, plus the Venetian shuttle line."], ["reinvent", "AWS re:Invent", "DECEMBER // LAS VEGAS", "Strip loop between the Venetian, Caesars Forum, MGM Grand and Mandalay Bay."], ["sema", "SEMA Show", "NOVEMBER // LAS VEGAS", "LVCC West Hall and outdoor display zones, plus the Strip hotel corridor."], ["nab", "NAB Show", "APRIL // LAS VEGAS", "LVCC halls and the Westgate and Renaissance hotel corridor."], ["black-hat", "Black Hat USA", "AUGUST // LAS VEGAS", "Mandalay Bay, Luxor and the south Strip rideshare zones."], ["dreamforce", "Dreamforce", "SEPTEMBER // SAN FRANCISCO", "Moscone North, South and West and the SoMa hotel blocks."], ["nrf", "NRF Big Show", "JANUARY // NEW YORK", "Javits Center, Hudson Yards and the Midtown West hotel corridor."], ["expo-west", "Expo West", "MARCH // ANAHEIM", "Anaheim Convention Center and the Disneyland Resort hotel loop."]];
const IMG = n => window.__resources && window.__resources["r_assets_" + n.replace(/[^a-z0-9]/gi, "_")] || "https://kyle915.github.io/ignite-webflow-assets/assets/" + n;
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
}, "* TRADE SHOW STAFFING + AD TRUCKS"), /*#__PURE__*/React.createElement("h1", {
  style: {
    marginTop: 22,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    letterSpacing: "-0.045em",
    lineHeight: .95,
    fontSize: "clamp(40px,5vw,80px)"
  }
}, "Win the show ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "before"), " they reach the hall."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.78)",
    maxWidth: 600
  }
}, "Every exhibitor fights for the same aisle. We start the conversation outside it: an ad truck looping the convention center and the hotels with your booth number, a street team at the doors, and a trained crew in the booth ready for the people the truck sent."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 30,
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(Btn, null, "Plan my show \u2192"), /*#__PURE__*/React.createElement(Btn, {
  ghost: true,
  href: "/services/ad-trucks#rates"
}, "See ad truck rates"))), /*#__PURE__*/React.createElement("figure", {
  className: "at-photo",
  style: {
    margin: 0,
    animation: "ep-rise .8s .15s both"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: IMG("ad-truck-total-wireless-lehigh-acres.jpg"),
  alt: "Digital ad truck run by Ignite parked outside a retail location with a bold offer on the panel"
}), /*#__PURE__*/React.createElement("figcaption", null, "IGNITE AD TRUCK // TOTAL WIRELESS")))));
const Play = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "02 The play"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, ">> THE PLAY"), /*#__PURE__*/React.createElement(H2, null, "Truck outside. Crew at the door. Team in the booth."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)"
  }
}, "One plan, one team lead, one recap. Each layer hands the attendee to the next.")), /*#__PURE__*/React.createElement("div", {
  className: "tz-play ep-rv",
  style: {
    marginTop: 40
  }
}, [["01", "The truck", "Loops the convention center, official hotels and shuttle stops with your booth number and one line of offer, timed to doors, keynote breaks and the evening hotel rush."], ["02", "The street team", "Works the entrances and rideshare zones with passes, QR codes or a booth-only offer, so the truck's message turns into a reason to walk over."], ["03", "The booth crew", "Booth hosts, product specialists and demo leads briefed on the offer, ready to qualify the attendees the truck and street team sent, with every lead logged in Spark."]].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
  key: n
}, /*#__PURE__*/React.createElement("div", {
  className: "n"
}, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))));
const Shows = () => /*#__PURE__*/React.createElement(Sec, {
  label: "03 Shows"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> SHOW-BY-SHOW ROUTES"), /*#__PURE__*/React.createElement(H2, null, "Where the truck runs at each show.")), /*#__PURE__*/React.createElement("div", {
  className: "tz-shows",
  style: {
    marginTop: 36
  }
}, SHOWS.map(([k, n, m, r]) => /*#__PURE__*/React.createElement("a", {
  key: k,
  className: "ep-rv",
  href: "/trade-show-staffing/" + k
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  },
  c: LIME
}, m), /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("p", null, r), /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10,
    marginTop: "auto"
  }
}, "BOOTH + TRUCK PLAN \u2192")))));
const Why = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "04 Why"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-grid2",
  style: {
    alignItems: "start",
    gap: 40
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, null, ">> WHY IT WORKS"), /*#__PURE__*/React.createElement(H2, null, "The aisle is crowded. The street isn't.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: 12
  }
}, [["Reach before the badge scan", "Attendees decide which booths to visit on the walk in. The truck gets your name into that decision."], ["A reason to walk over", "A booth-only offer on the truck and in the street team's hands gives people a specific reason to find you."], ["One recap for all three", "GPS truck routes, street team hand-offs and booth leads land in the same Spark recap, so you can see what drove traffic."], ["Cheaper than a bigger booth", "A truck run costs a fraction of moving up a booth size, and it reaches people who never walk your aisle."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
  key: t,
  t: t,
  d: d
})))));
const App = () => {
  useRv();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Play, null), /*#__PURE__*/React.createElement(Shows, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(Faq, {
    h: "Trade show ad trucks, answered."
  }), /*#__PURE__*/React.createElement(Rel, {
    items: [["Ad truck rates by market", "/services/ad-trucks"], ["Trade show staffing", "/services/trade-shows"], ["What trade show staffing costs", "/trade-show-staffing/cost"]]
  }), /*#__PURE__*/React.createElement(CTA, {
    pull: "outside the hall, then inside the booth",
    h: "Send the show. We'll plan the truck and the crew.",
    b: "Plan my show"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageTradeShowAdTrucks: App
});
})();
