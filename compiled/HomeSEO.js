/* global React */
/* ============================================================
   HOME SEO BAND — capabilities, industries, markets, FAQ,
   client wall, long-form footer copy. Pure SEO + scannability.
   ============================================================ */

const SEO_CAPS = [{
  n: "01",
  t: "Experiential Marketing",
  d: "Festival activations, pop-ups, immersive installations, campus tours."
}, {
  n: "02",
  t: "Mobile Marketing Tours",
  d: "Ad trucks, branded bikes, sprinter vans, transit takeovers."
}, {
  n: "03",
  t: "Fabrication & Builds",
  d: "Custom builds, scenic fab, branded POS, touring rigs, photo ops."
}, {
  n: "04",
  t: "Event Staffing",
  d: "42K+ vetted brand ambassadors, bilingual, hospitality, tour managers."
}, {
  n: "05",
  t: "Product Sampling",
  d: "In-store, alcohol-certified, campus, street, and event sampling."
}, {
  n: "06",
  t: "Trade Show Support",
  d: "Booth staffing, lead capture, demo specialists, full show management."
}, {
  n: "07",
  t: "Promotional Products",
  d: "Branded merch, swag kits, custom apparel, premium fulfillment."
}, {
  n: "+",
  t: "Creative & Strategy",
  d: "Concepting, naming, art direction — wrapped around every engagement."
}, {
  n: "+",
  t: "Logistics & Production",
  d: "Permits, transport, storage, install/strike — handled end-to-end."
}];
const SEO_INDUSTRIES = ["Beverage & Alcohol", "CPG Food & Snack", "Telecom & Wireless", "Automotive", "Tech & SaaS", "Lifestyle & Fashion", "QSR & Restaurant", "Health & Wellness", "Gaming & Entertainment", "Financial Services", "Cannabis", "Pet & Family"];
const SEO_MARKETS = ["Los Angeles", "New York", "Chicago", "Austin", "Miami", "Phoenix", "Atlanta", "Dallas", "Houston", "Seattle", "Denver", "Boston", "San Francisco", "Portland", "Nashville", "Philadelphia", "Detroit", "Minneapolis", "San Diego", "Tampa", "Las Vegas", "Charlotte", "Orlando", "Brooklyn", "Washington DC", "Indianapolis", "Columbus", "Pittsburgh", "Kansas City", "Sacramento"];
const SEO_CLIENT_LOGOS = [{
  name: "Liquid Death",
  url: window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"
}, {
  name: "White Claw",
  url: window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"
}, {
  name: "Mas+ Messi",
  url: window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp"
}, {
  name: "Krispy Krunchy",
  url: window.__resources?.r_688c1b20a33960875f5d7bc0_krispy_krunchy_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp"
}, {
  name: "Total Wireless",
  url: window.__resources?.r_688c1bb2f2c798b4cb850d2e_total_wireless_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp"
}, {
  name: "Dude Wipes",
  url: window.__resources?.r_688c3839708ed185c2de5ba9_dude_wipes || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp"
}, {
  name: "Smalls Sliders",
  url: window.__resources?.r_688c377975c7a23684962d73_smalls_sliders || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp"
}, {
  name: "Marc Anthony",
  url: window.__resources?.r_688c378239e6dc2ebedde728_marc_anthony_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"
}];
const SEO_CLIENTS = ["LIQUID DEATH", "WHITE CLAW", "TOTAL WIRELESS", "MAS+", "DUDE WIPES", "MARK ANTHONY", "SMALLS SLIDERS", "KRISPY KRUNCHY"];
const SEO_FAQS = [["How fast can you staff an activation?", "Rush queue runs at 48 hours from brief to boots on the ground. Standard staffing books 5–10 business days out. We staff in all 50 states."], ["Do you handle permits, COIs, and on-site logistics?", "Yes. Permits, certificates of insurance, transport, storage, install, and strike are all in scope. We're a turnkey field-to-finish shop."], ["What's the minimum engagement?", "Single-event activations through national multi-market tours. No long-term contract required. We scope to fit your campaign — not the other way around."], ["Can you run alcohol sampling programs?", "Yes. We staff TIPS / TABC / RBS certified ambassadors in every market that requires them, and we manage the compliance paperwork."], ["Which markets do you cover?", "All 50 states and 200+ named metros. The core network runs 30 primary markets daily, with surge capacity in another 170+."], ["What does pricing look like?", "Per-rep, per-shift staffing with a market modifier. Build, fabrication, and tour programs quote against your brief. Volume pricing at 100+ shift-days."], ["Can you produce custom builds and scenic?", "Yes — in-house fab shop and partner network for everything from booth scenic to touring rigs, branded vehicles, and photo-op installations."], ["Do you measure activation performance?", "Yes. Every program ships with real-time reporting via Spark — our in-house dashboard for sampling, engagement, and lead capture metrics."]];

/* ---------- 1. CAPABILITIES MATRIX ---------- */
const SeoCapabilities = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--paper-000)",
    color: "var(--fg-1-inv)",
    padding: "120px 0",
    borderTop: "1px solid var(--paper-200)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "FULL-SERVICE AGENCY \xB7 9 CAPABILITIES"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5.5vw, 76px)",
    letterSpacing: "-0.035em",
    lineHeight: 0.96,
    maxWidth: 1000
  }
}, "One agency.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)",
    whiteSpace: "nowrap"
  }
}, "Every lane"), " of brand activation."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--fg-2-inv)",
    maxWidth: 720
  }
}, "From experiential marketing to event staffing to custom fabrication \u2014 we run the whole field marketing stack under one roof. No agency stack to coordinate. No handoffs to lose."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16
  }
}, SEO_CAPS.map(c => /*#__PURE__*/React.createElement("div", {
  key: c.t,
  style: {
    padding: 24,
    background: "#fff",
    border: "1px solid var(--paper-200)",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 14,
    letterSpacing: "0.08em",
    color: "var(--ignite-500)",
    marginBottom: 14
  }
}, c.n), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    letterSpacing: "-0.015em",
    marginBottom: 8
  }
}, c.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "var(--fg-2-inv)",
    margin: 0
  }
}, c.d))))));

/* ---------- 2. INDUSTRIES ---------- */
const SeoIndustries = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 0",
    background: "var(--ink-000)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    gap: 64,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "INDUSTRIES SERVED"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(36px, 4.5vw, 60px)",
    letterSpacing: "-0.03em",
    lineHeight: 0.98
  }
}, "Twelve verticals.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "#FFB627"
  }
}, "One playbook.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 16,
    lineHeight: 1.6,
    color: "var(--fg-2)"
  }
}, "We've staffed and run activations across every category that touches a consumer. Each vertical gets its own compliance, training, and measurement framework.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 10
  }
}, SEO_INDUSTRIES.map(i => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: "16px 18px",
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    fontSize: 14
  }
}, "\u25C9"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 15,
    letterSpacing: "-0.005em"
  }
}, i)))))));

/* ---------- 3. MARKETS / CITIES ---------- */
const SeoMarkets = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 0",
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "MARKETS \xB7 ALL 50 STATES \xB7 200+ METROS"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(36px, 4.5vw, 60px)",
    letterSpacing: "-0.03em",
    lineHeight: 0.98,
    maxWidth: 900
  }
}, "Wherever your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "consumers are.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    fontSize: 16,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    maxWidth: 720
  }
}, "Boots-on-the-ground ambassador networks in 30 primary metros, surge capacity in 170+ secondary. Single-market activations through national 50-state rollouts."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 8
  }
}, SEO_MARKETS.map(m => /*#__PURE__*/React.createElement("div", {
  key: m,
  style: {
    padding: "12px 14px",
    background: "var(--ink-200)",
    border: "1px solid var(--ink-400)",
    borderRadius: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--fg-2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", null, m), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u25CF")))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  }
}, "+ 170 ADDITIONAL METROS \xB7 ALASKA \xB7 HAWAII \xB7 PUERTO RICO")));

/* ---------- 4. CLIENT WALL ---------- */
const SeoClients = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "80px 0",
    background: "var(--ink-000)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, ">> ", "TRUSTED BY THE BRANDS THAT DEFINE CULTURE"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 0,
    border: "1px solid var(--ink-400)",
    borderRadius: 12,
    overflow: "hidden"
  }
}, SEO_CLIENT_LOGOS.map((c, i, arr) => {
  const cols = 4;
  return /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      padding: "44px 24px",
      textAlign: "center",
      height: 140,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRight: (i + 1) % cols !== 0 ? "1px solid var(--ink-400)" : "none",
      borderBottom: i < arr.length - cols ? "1px solid var(--ink-400)" : "none",
      transition: "background 200ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
      e.currentTarget.querySelector("img").style.filter = "brightness(0) invert(1) opacity(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.querySelector("img").style.filter = "brightness(0) invert(1) opacity(0.55)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.url,
    alt: c.name,
    style: {
      maxHeight: 56,
      maxWidth: 180,
      width: "auto",
      objectFit: "contain",
      filter: "brightness(0) invert(1) opacity(0.55)",
      transition: "filter 200ms"
    }
  }));
}))));

/* ---------- 5. FAQ ---------- */
const SeoFaq = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--paper-000)",
      color: "var(--fg-1-inv)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "FREQUENTLY ASKED"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5.5vw, 76px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.94
    }
  }, "The", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "quick"), /*#__PURE__*/React.createElement("br", null), "answers."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-2-inv)"
    }
  }, "Don't see yours?", " ", /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      color: "var(--ignite-500)",
      textDecoration: "underline"
    }
  }, "Ask us directly \u2192"))), /*#__PURE__*/React.createElement("div", null, SEO_FAQS.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        borderTop: i === 0 ? "1px solid var(--paper-200)" : "none",
        borderBottom: "1px solid var(--paper-200)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        padding: "24px 0",
        background: "none",
        border: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        textAlign: "left",
        color: "inherit",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 19,
        letterSpacing: "-0.015em"
      }
    }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ignite-500)",
        fontSize: 22,
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "transform 200ms"
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        paddingBottom: 24,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--fg-2-inv)",
        margin: 0,
        maxWidth: 680
      }
    }, a));
  })))));
};

/* ---------- 6. LONG-FORM SEO COPY ---------- */
const SeoLongform = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "80px 0",
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "WHAT WE DO \xB7 FULL CAPABILITIES"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    fontSize: 14.5,
    lineHeight: 1.75,
    color: "var(--fg-3)",
    maxWidth: 1100,
    columns: "2",
    columnGap: 48,
    textWrap: "pretty"
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-2)"
  }
}, "Ignite Productions"), " is a veteran-owned, full-service experiential marketing and brand activation agency operating in all 50 states. We specialize in field marketing, event staffing, brand ambassador programs, product sampling, mobile marketing tours, custom fabrication, trade show support, promotional products, and turnkey event production for CPG, beverage, alcohol, telecom, automotive, tech, and lifestyle brands."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginBottom: 16
  }
}, "Our network of ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-2)"
  }
}, "42,000+ vetted brand ambassadors"), " ", "covers 30+ primary metros \u2014 Los Angeles, New York, Chicago, Austin, Miami, Atlanta, Dallas, Houston, Seattle, Denver, Boston, San Francisco, Phoenix, Nashville, Philadelphia, San Diego, Tampa, Las Vegas, Charlotte, Orlando, Brooklyn, Washington DC, Detroit, Minneapolis, Portland, Indianapolis, Columbus, Pittsburgh, Kansas City, and Sacramento \u2014 plus surge capacity in another 170+ secondary markets including Alaska, Hawaii, and Puerto Rico."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginBottom: 16
  }
}, "We run ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-2)"
  }
}, "5,000+ activations a year"), " ", "for the brands that define their categories: Liquid Death, White Claw, Total Wireless, Mas+, Dude Wipes, Mark Anthony, Smalls Sliders, and Krispy Krunchy. Programs include festival activations, college campus tours, in-store demos, alcohol sampling, ad truck tours, branded bike fleets, sprinter van tours, pop-up retail, immersive installations, photo-op builds, transit takeovers, guerilla marketing, street teams, trade show booth staffing, lead capture programs, and full premium fulfillment."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginBottom: 16
  }
}, "Beyond execution, we offer ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-2)"
  }
}, "fractional retail leadership"), " ", "\u2014 advisory, embedded, and full-leadership engagements for emerging CPG and beverage brands that need senior sales and marketing horsepower without the full-time hire. Every program ships with measurement via", " ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-2)"
  }
}, "Spark"), ", our in-house real-time reporting platform for sampling, engagement, and lead capture metrics."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginBottom: 0
  }
}, "As a certified Veteran-Owned Small Business (VOSB), Ignite Productions has been the field marketing partner for emerging and Fortune 500 brands since 2018. Whether you need a single-night activation in Austin, a 50-state tour, a custom-fabricated photo op, or a fractional VP of Sales \u2014 we run the whole stack under one roof."))));
const HomeSEOBand = () => {
  React.useEffect(() => {
    const cleanup = window.injectJsonLd && window.injectJsonLd("home", {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "FAQPage",
        "@id": "https://www.igniteproductions.co/#faq",
        mainEntity: SEO_FAQS.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a }
        }))
      }, {
        "@type": "ItemList",
        "@id": "https://www.igniteproductions.co/#services-offered",
        name: "Ignite Productions — Capabilities",
        itemListElement: SEO_CAPS.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.t,
          description: c.d
        }))
      }]
    });
    return () => cleanup && cleanup();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SeoCapabilities, null), /*#__PURE__*/React.createElement(SeoIndustries, null), /*#__PURE__*/React.createElement(SeoMarkets, null), /*#__PURE__*/React.createElement(SeoFaq, null), /*#__PURE__*/React.createElement(SeoLongform, null));
};
Object.assign(window, {
  HomeSEOBand,
  SeoCapabilities,
  SeoIndustries,
  SeoMarkets,
  SeoClients,
  SeoFaq,
  SeoLongform
});