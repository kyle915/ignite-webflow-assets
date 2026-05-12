(function(){if (typeof window !== "undefined" && window.INDUSTRIES_DATA) return;
/* global React */
/* ============================================================
   INDUSTRIES DATA — one source of truth for industry verticals.
   ------------------------------------------------------------
   - Each entry feeds /industries/<slug> via pages/industry.html
   - Anchor accent + supporting copy per vertical
   - Keep claims accurate; no fabricated metrics or clients
   ============================================================ */

/* ------------------------------------------------------------
   BRAND LOGOS — central lookup. Real client logos pulled from
   the Webflow CDN (same source as home + work pages).
   ------------------------------------------------------------ */
const BRAND_LOGOS = {
  "liquid-death": {
    name: "Liquid Death",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"
  },
  "white-claw": {
    name: "White Claw",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"
  },
  "mas-messi": {
    name: "Mas+ Messi",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp"
  },
  "krispy-krunchy": {
    name: "Krispy Krunchy",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp"
  },
  "total-wireless": {
    name: "Total Wireless",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp"
  },
  "dude-wipes": {
    name: "Dude Wipes",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp"
  },
  "smalls-sliders": {
    name: "Smalls Sliders",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp"
  },
  "marc-anthony": {
    name: "Marc Anthony",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"
  },
  "glendalough": {
    name: "Glendalough",
    url: "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp"
  },
  "pressreader": {
    name: "PressReader",
    url: "https://kyle915.github.io/ignite-webflow-https://kyle915.github.io/ignite-webflow-assets/assets/assets/pressreader-logo.png"
  }
};
const INDUSTRIES_DATA = {
  /* ============= CPG BEVERAGE ============= */
  "cpg-beverage": {
    slug: "cpg-beverage",
    name: "CPG Beverage",
    short: "Beverage",
    accent: "#FF5A1F",
    hero: {
      eyebrow: "INDUSTRY · BEVERAGE",
      title: "Beverage activation, sampling, and retail support.",
      acc: "sampling",
      lede: "Sparkling water, energy, juice, RTD coffee, kombucha, hydration, functional. We run trial-driving activations in the channels that move beverage volume — retail, festival, sports, and convenience.",
      stats: [{
        v: "Same-day",
        l: "sample counts"
      }, {
        v: "TIPS/TABC",
        l: "where required"
      }, {
        v: "50 states",
        l: "in-market crew"
      }]
    },
    intro: "Beverage brands live and die on trial. We've staffed sampling programs across grocery, c-store, mass, and natural channels — plus festival and event-side trial moments where category buyers actually live. Crews are trained on your product, your message, and your conversion play.",
    activations: ["In-store sampling (grocery, mass, c-store, natural)", "Festival & event sampling footprints", "Mobile beverage tours & branded vehicles", "Retail demo programs with conversion tracking", "Bar & nightlife activation", "Sports & lifestyle sponsorship support", "Beverage trade-show staffing", "Convenience store ride-alongs"],
    compliance: [{
      lab: "TIPS / TABC / RBS",
      desc: "Certified pourers in every alcohol-adjacent program"
    }, {
      lab: "Age-gating",
      desc: "ID-check protocols for energy, kombucha, and adult RTDs"
    }, {
      lab: "COI & permits",
      desc: "Carrier coordination and venue paperwork managed in-house"
    }, {
      lab: "Cold-chain logistics",
      desc: "Iced product transport, drink-temperature compliance"
    }],
    proofPoints: [{
      logo: "liquid-death",
      line: "National retail, festival, NASCAR sponsorship"
    }, {
      logo: "white-claw",
      line: "TABC-certified summer programs"
    }, {
      logo: "glendalough",
      line: "Bar-side trial in target markets"
    }, {
      logo: "marc-anthony",
      line: "Distributor-led demos"
    }],
    faqs: [{
      q: "Can you staff a beverage program in every state we sell in?",
      a: "Yes. We staff in all 50 states with in-market crew. For alcohol-adjacent or alcohol categories, we deploy TIPS / TABC / RBS-certified ambassadors where state law requires."
    }, {
      q: "How do you track samples and conversions?",
      a: "Every shift logs sample counts and (where retail permits) trial-to-purchase data through Spark, our in-house platform. You get same-day numbers, not week-old guesses."
    }, {
      q: "Do you handle cold-chain logistics?",
      a: "Yes. For chilled product programs we coordinate iced transport, on-site coolers, and pour-temp protocols so the sample tastes like the SKU."
    }, {
      q: "What's the lead time for a national beverage sampling program?",
      a: "Single market: 5–10 business days standard, 48 hours rush. Multi-market (10+ cities): 2–4 weeks for full briefing and crew readiness."
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Goals, channels, SKUs",
      desc: "Map trial targets to retail + event channels that move beverage volume.",
      time: "Day 0–1"
    }, {
      stage: "PERMIT",
      title: "Chain + venue sign-off",
      desc: "Demo permits with grocery / mass / c-store partners. Cold-chain logistics confirmed.",
      time: "Day 2–7"
    }, {
      stage: "STAFF",
      title: "Trained on the SKU",
      desc: "Crew briefed on flavor profile, pour temp, conversion play, and brand voice.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Sample, count, report",
      desc: "Live counts + photos through Spark. Same-day numbers, not week-old guesses.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "chicago", "miami", "atlanta", "austin"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Product Sampling"
    }, {
      slug: "experiential-marketing",
      label: "Festival Activations"
    }, {
      slug: "mobile-tours",
      label: "Mobile Tours"
    }, {
      slug: "event-staffing",
      label: "Event Staffing"
    }],
    sparkAngle: {
      headline: "Spark for beverage",
      lede: "Every can sampled is logged. Every conversion is tagged. Every market is comparable.",
      points: ["Per-store, per-event sample counts in real time", "Trial-to-purchase tracking where retail data permits", "Cold-chain temp logging on regulated SKUs"]
    },
    cta: {
      heading: "Brief us on a beverage program.",
      body: "Single-market sampling through national rollouts. We'll come back with crew, compliance, and a quote inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= CPG FOOD & SNACK ============= */
  "cpg-food-snack": {
    slug: "cpg-food-snack",
    name: "CPG Food & Snack",
    short: "Food & Snack",
    accent: "#FFB627",
    hero: {
      eyebrow: "INDUSTRY · FOOD & SNACK",
      title: "Food sampling, retail demos, and trial-driving programs.",
      acc: "trial-driving",
      lede: "Better-for-you, frozen, snack, candy, jerky, condiments, protein. We turn passive grocery shoppers into trial users — at the shelf, in the aisle, at the festival, and on the campus.",
      stats: [{
        v: "Grocery + mass",
        l: "channel experience"
      }, {
        v: "Allergen-safe",
        l: "handling protocols"
      }, {
        v: "Same-day",
        l: "sample counts"
      }]
    },
    intro: "Food activation is precision work. We staff the retailer's footprint, follow the planogram, respect the demo permit window, and handle allergens by the book. Programs scale from a single Whole Foods event to a 300-store sampling rollout.",
    activations: ["Grocery in-store demos (Whole Foods, Sprouts, Wegmans, Publix)", "Mass & club store sampling (Target, Walmart, Costco)", "Natural channel activation", "Convenience & gas station ride-alongs", "Campus & university sampling", "Sports & festival food sampling", "Fitness studio & wellness pop-ups", "Trade-show booth support (Expo West, Fancy Food)"],
    compliance: [{
      lab: "Food handler certs",
      desc: "ServSafe / state cards in every market we sample"
    }, {
      lab: "Allergen protocol",
      desc: "Cross-contact prevention, ingredient cards, gluten-free SOPs"
    }, {
      lab: "Retail demo permits",
      desc: "Filed with the store, the chain, and the health department"
    }, {
      lab: "Sample yield reporting",
      desc: "Per-store unit counts back to your trade desk same-day"
    }],
    proofPoints: [{
      logo: "krispy-krunchy",
      line: "C-store demo programs"
    }, {
      logo: "smalls-sliders",
      line: "Slider sampling at QSR-adjacent events"
    }, {
      logo: "dude-wipes",
      line: "Health & wellness retail trial"
    }],
    faqs: [{
      q: "Can you sample inside major grocery chains?",
      a: "Yes — we staff inside Whole Foods, Sprouts, Wegmans, Target, Costco, Publix, Kroger, and most regional banners. We handle the demo permit, COI, and chain-specific paperwork."
    }, {
      q: "Do your ambassadors have food handler certifications?",
      a: "Every ambassador staffed to a food sampling program holds the certification their state requires (ServSafe, state food handler card, or equivalent). For allergen-sensitive SKUs we add extra protocol training."
    }, {
      q: "How do you report on a multi-store rollout?",
      a: "Through Spark. You get per-store unit counts, photos, ambassador notes, and (where the retailer allows) UPC-level scan data — same-day, every day of the program."
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Goals, channels, allergens",
      desc: "Map sampling targets across grocery, mass, c-store. Flag allergens early.",
      time: "Day 0–1"
    }, {
      stage: "PAPERWORK",
      title: "Demo permits + COI",
      desc: "Filed with the store, the chain, and the local health department.",
      time: "Day 2–10"
    }, {
      stage: "CERTIFY",
      title: "Food handler verification",
      desc: "ServSafe / state cards verified. Allergen SOPs briefed per SKU.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Sample, scan, report",
      desc: "Per-store unit counts in Spark. UPC scan data where the retailer allows.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "chicago", "dallas", "atlanta", "seattle"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Product Sampling"
    }, {
      slug: "experiential-marketing",
      label: "Brand Activation"
    }, {
      slug: "event-staffing",
      label: "Event Staffing"
    }, {
      slug: "trade-shows",
      label: "Trade Show Support"
    }],
    sparkAngle: {
      headline: "Spark for food & snack",
      lede: "Per-store unit counts, allergen-flagged sampling, and (where retailers allow) UPC-level scan integration.",
      points: ["Real-time unit counts per store, per event", "Allergen flag visible to the captain and the brand", "Photo recap with shelf condition + planogram check"]
    },
    cta: {
      heading: "Brief us on a food sampling program.",
      body: "Single-store launch through 300-store national rollouts. We'll quote crew, compliance, and chain coordination inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= ALCOHOL & SPIRITS ============= */
  "alcohol-spirits": {
    slug: "alcohol-spirits",
    name: "Alcohol & Spirits",
    short: "Alcohol",
    accent: "#D6F35F",
    hero: {
      eyebrow: "INDUSTRY · ALCOHOL · SPIRITS · BEER · RTD",
      title: "Alcohol activation, sampling, and on/off-premise programs.",
      acc: "compliant",
      lede: "Spirits, beer, wine, RTDs, hard seltzer, hard tea. We run TIPS / TABC / RBS-certified programs in all 50 states with the compliance footprint to match. On-premise, off-premise, festival, and brand-house.",
      stats: [{
        v: "100%",
        l: "TIPS / TABC / RBS certified"
      }, {
        v: "3-tier",
        l: "distributor-friendly"
      }, {
        v: "All 50",
        l: "states & ABC jurisdictions"
      }]
    },
    intro: "Alcohol activation has rules. We know them — by state, by jurisdiction, by retailer, by venue. Every ambassador we staff to a regulated program holds the certification the law requires. Every pour is documented. Every COI is on file. Distributors love working with us because nothing comes back to bite them.",
    activations: ["On-premise pouring & bar takeovers", "Off-premise retail sampling (grocery, liquor, c-store)", "Distributor-led demo programs", "Festival & sports activations", "Brand house & tasting room operations", "Nightlife & lounge programs", "Trade-show booth support (RNDC, BevCon, Tales of the Cocktail)", "Holiday & seasonal pulse activations"],
    compliance: [{
      lab: "TIPS / TABC / RBS",
      desc: "Every alcohol ambassador certified by state requirement"
    }, {
      lab: "ABC permits",
      desc: "Filed by jurisdiction; we route around dry counties"
    }, {
      lab: "3-tier compliance",
      desc: "Distributor coordination — RNDC, Southern Glazer's, Breakthru"
    }, {
      lab: "COI carriers",
      desc: "Liquor liability included, additional insureds on request"
    }, {
      lab: "Age verification",
      desc: "ID-check SOPs, refusal protocols, incident logging"
    }, {
      lab: "Pour controls",
      desc: "Documented sample sizes per state law"
    }],
    proofPoints: [{
      logo: "liquid-death",
      line: "National activation (regulated for alcohol-adjacent events)"
    }, {
      logo: "white-claw",
      line: "TABC-certified summer programs"
    }, {
      logo: "glendalough",
      line: "Irish whiskey bar-side trial"
    }, {
      logo: "marc-anthony",
      line: "Distributor demos with full TIPS coverage"
    }],
    faqs: [{
      q: "Are all your alcohol ambassadors TIPS / TABC / RBS certified?",
      a: "Yes. We don't staff a regulated pour with anyone who isn't currently certified. Cards on file, refreshed before expiry, available for distributor audit."
    }, {
      q: "Can you coordinate with our distributor for an in-store demo?",
      a: "Yes. We've run programs through RNDC, Southern Glazer's, Breakthru, and most regional houses. We file the paperwork on your behalf and the distributor's."
    }, {
      q: "Do you handle COIs and liquor liability?",
      a: "Yes. We carry general liability and liquor liability across every program. Additional insureds are added per venue, distributor, and brand requirement."
    }, {
      q: "Can you sample in dry counties or restricted jurisdictions?",
      a: "Where state and county law permits, yes. Where it doesn't, we'll tell you up front — we don't take chances with regulated programs."
    }, {
      q: "What's your refusal-to-serve protocol?",
      a: "Every regulated shift has a documented refusal-to-serve SOP and incident log. We brief the captain before deployment and review post-event if anything's flagged."
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Goals + jurisdictions",
      desc: "Map activation to ABC rules state-by-state. Flag dry counties early.",
      time: "Day 0–2"
    }, {
      stage: "DISTRIBUTOR",
      title: "3-tier sign-off",
      desc: "Coordinate with RNDC / Southern Glazer's / Breakthru on permits and pour rules.",
      time: "Day 3–10"
    }, {
      stage: "VERIFY",
      title: "TIPS / TABC / RBS check",
      desc: "Every regulated ambassador certified, cards on file, refresher run for the program.",
      time: "Pre-event"
    }, {
      stage: "POUR",
      title: "Sample, ID-check, log",
      desc: "Documented pour sizes, ID protocols, refusal incidents — all logged in Spark.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "austin", "las-vegas", "miami", "chicago", "nashville"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Sampling Programs"
    }, {
      slug: "event-staffing",
      label: "TIPS/TABC Staffing"
    }, {
      slug: "experiential-marketing",
      label: "Brand Houses"
    }, {
      slug: "trade-shows",
      label: "Trade Show Support"
    }],
    sparkAngle: {
      headline: "Spark for alcohol",
      lede: "Pour counts, ID-check logs, refusal incidents, and distributor-ready recaps — all timestamped and audit-ready.",
      points: ["Documented pour sizes per state law", "ID-check completion rate per shift", "Refusal-to-serve incident log", "Distributor + brand share-ready recap"]
    },
    cta: {
      heading: "Brief us on a regulated activation.",
      body: "From a single tasting to a national distributor rollout — we handle the compliance, the crew, and the cardboard cutouts.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= TECH & SAAS ============= */
  "tech-saas": {
    slug: "tech-saas",
    name: "Tech & SaaS",
    short: "Tech",
    accent: "#5AB8FF",
    hero: {
      eyebrow: "INDUSTRY · TECH · SAAS · ENTERPRISE",
      title: "Conference activation, trade-show staffing, and lead capture.",
      acc: "captured",
      lede: "B2B SaaS, enterprise software, dev tools, AI, security, hardware. Booth staffing that hits qualified-lead targets — plus brand houses, customer dinners, and hospitality programs around the conferences your sales team works.",
      stats: [{
        v: "Lead capture",
        l: "with QA + scrubbing"
      }, {
        v: "Bilingual",
        l: "where useful"
      }, {
        v: "Same-day",
        l: "lead handoff to SDRs"
      }]
    },
    intro: "Tech activation is a sales problem, not a brand problem. We staff your booth with people who can qualify a buyer, hand off to your AE without dropping context, and keep the lead list scrubbed so it doesn't blow up your CRM. Built around the conferences your team already works — Money 20/20, AWS re:Invent, Dreamforce, KubeCon, SaaStr, Web Summit, plus regional shows.",
    activations: ["Trade-show booth staffing & lead capture", "Conference activation (Money 20/20, re:Invent, Dreamforce, KubeCon)", "Brand houses & off-site hospitality", "Customer & prospect dinners", "Demo specialist staffing", "Bilingual staff (Spanish, Mandarin, Portuguese)", "Field marketing tour support", "Roadshow & city-tour programs"],
    compliance: [{
      lab: "Lead quality SLA",
      desc: "Captain reviews every captured lead before sync"
    }, {
      lab: "GDPR / CCPA aware",
      desc: "Consent capture flows reviewed by your legal team"
    }, {
      lab: "NDAs in scope",
      desc: "Per-event, per-ambassador NDAs where you need them"
    }, {
      lab: "CRM-ready handoff",
      desc: "Salesforce, HubSpot, Outreach formats day-of"
    }],
    proofPoints: [{
      logo: "pressreader",
      line: "Multi-year trade show staffing"
    }, {
      brand: "SaaS booths (NDA)",
      line: "Money 20/20, Dreamforce, AWS re:Invent"
    }],
    faqs: [{
      q: "Can your booth staff actually demo our product?",
      a: "Yes — for a brief. We staff demo specialists when the product needs it, brief them on your messaging and demo flow before the event, and pair them with technical leads from your team for the deep questions."
    }, {
      q: "How do you handle lead capture and CRM handoff?",
      a: "Badge scan + qualifying questions captured on-device, scrubbed by the captain end-of-day, delivered to your Salesforce / HubSpot / Outreach in your preferred format the next morning — not three weeks after."
    }, {
      q: "Do you have bilingual staff for international shows?",
      a: "Yes. Spanish, Mandarin, Portuguese, French, and German are the most-requested. Other languages on request — we'll confirm availability in the market."
    }, {
      q: "Can you run an off-site brand house alongside the booth?",
      a: "Yes. We've staffed and produced executive dinners, hospitality suites, partner mixers, and full off-conference brand houses — managed independently from the booth team."
    }],
    playbook: [{
      stage: "BRIEF",
      title: "ICP + qualifying logic",
      desc: "Map your buyer profile and qualifying questions to badge-scan flow.",
      time: "Day 0–2"
    }, {
      stage: "CRM",
      title: "Salesforce / HubSpot map",
      desc: "Field mapping, lead-quality SLA, and consent-capture flow signed off by your legal.",
      time: "Day 3–7"
    }, {
      stage: "TRAIN",
      title: "Demo + messaging",
      desc: "Specialists briefed on your product, your demo flow, and your competitors.",
      time: "Pre-show"
    }, {
      stage: "BOOTH",
      title: "Capture + handoff",
      desc: "Quality-scrubbed leads in your CRM the next morning. Not three weeks later.",
      time: "Show + day 1 post"
    }],
    relatedMarkets: ["san-francisco", "austin", "new-york", "las-vegas", "chicago", "boston"],
    relatedServices: [{
      slug: "trade-shows",
      label: "Trade Show Staffing"
    }, {
      slug: "event-staffing",
      label: "Bilingual Staff"
    }, {
      slug: "experiential-marketing",
      label: "Brand Houses"
    }, {
      slug: "promotional-products",
      label: "Conference Swag"
    }],
    sparkAngle: {
      headline: "Spark for tech & SaaS",
      lede: "Booth dwell time, qualifying-question coverage, and lead-quality scoring — piped to Salesforce / HubSpot / Outreach end-of-day.",
      points: ["Lead-quality scoring per ambassador", "Qualifying-question coverage per booth visitor", "Direct CRM handoff with consent captured", "Booth dwell + traffic heatmap"]
    },
    cta: {
      heading: "Brief us on a tech activation.",
      body: "Booth staffing, brand house, customer dinner, or full conference takeover. We'll scope and quote inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= AUTOMOTIVE ============= */
  "automotive": {
    slug: "automotive",
    name: "Automotive",
    short: "Auto",
    accent: "#FF5A1F",
    hero: {
      eyebrow: "INDUSTRY · OEM · TIER 1 · DEALER",
      title: "Auto-show staffing, ride-and-drive programs, and dealer activation.",
      acc: "specialists",
      lede: "OEM, EV, motorcycle, aftermarket, tier-1 suppliers, dealer groups. We staff the auto show booth, run the ride-and-drive, manage the dealer-event circuit, and handle the logistics that come with anything bolted to a vehicle.",
      stats: [{
        v: "Product specialists",
        l: "auto-trained crew"
      }, {
        v: "Dealer-friendly",
        l: "OEM brand-standard"
      }, {
        v: "Heavy logistics",
        l: "vehicle staging in scope"
      }]
    },
    intro: "Automotive activation is half product, half logistics. We staff specialists who can talk torque, range, and trim, but we also run the parking layout, the keyholder rotation, the test-drive consent forms, and the vehicle staging for a 14-show season. From auto shows (NYIAS, LA, CES, Detroit) to ride-and-drives to dealer events.",
    activations: ["Auto show booth staffing & product specialists", "Ride-and-drive programs", "EV charging activation", "Dealer events & grand openings", "Motorsports & racing weekends", "Tier-1 supplier booth support", "Aftermarket & enthusiast event activation", "OEM brand experience tours"],
    compliance: [{
      lab: "Driving consent",
      desc: "Test-drive waivers, ID verification, captured per state"
    }, {
      lab: "Insurance coordination",
      desc: "Vehicle, public-liability, and waiver carriers in scope"
    }, {
      lab: "OEM brand standards",
      desc: "Crew briefed on your guidelines before deployment"
    }, {
      lab: "Vehicle staging logistics",
      desc: "Trucking, washing, charging, key control coordinated"
    }],
    proofPoints: [{
      brand: "Tier-1 supplier (NDA)",
      line: "Multi-year auto-show staffing"
    }, {
      brand: "OEM dealer circuit (NDA)",
      line: "Multi-stop dealer event tour"
    }],
    faqs: [{
      q: "Can your team actually answer technical product questions?",
      a: "We staff a mix: product specialists trained on your model lineup before deployment, plus floor team for traffic and lead capture. For deep technical Q&A we pair with your OEM rep or a brand-certified specialist."
    }, {
      q: "Do you handle ride-and-drive operations?",
      a: "Yes. End-to-end — registration, waivers, ID checks, keyholder rotation, route management, vehicle wash-and-reset between drives, and lead capture for follow-up."
    }, {
      q: "Can you staff a multi-stop national auto tour?",
      a: "Yes. We've staffed and routed tours across 10+ market circuits — vehicle transport, staffing rotations, venue coordination, and city-by-city compliance."
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Lineup + tour map",
      desc: "Confirm models, trims, ride-and-drive routes, and dealer schedule.",
      time: "Day 0–3"
    }, {
      stage: "LOGISTICS",
      title: "Vehicle staging",
      desc: "Trucking, washing, charging, key control, waiver paperwork prepped.",
      time: "Day 4–14"
    }, {
      stage: "TRAIN",
      title: "Product specialists",
      desc: "Crew briefed on torque, range, trim differences, OEM brand standards.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Drive, capture, follow up",
      desc: "Waivers captured, leads scored, follow-up routed to your dealer network.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "detroit", "chicago", "las-vegas", "miami"],
    relatedServices: [{
      slug: "experiential-marketing",
      label: "Brand Experience Tours"
    }, {
      slug: "event-staffing",
      label: "Product Specialists"
    }, {
      slug: "trade-shows",
      label: "Auto-Show Staffing"
    }, {
      slug: "fabrication-builds",
      label: "Display Fabrication"
    }],
    sparkAngle: {
      headline: "Spark for automotive",
      lede: "Test-drive consent, waiver capture, lead scoring, and dealer-network handoff — logged per VIN, per state.",
      points: ["Per-vehicle keyholder rotation log", "Test-drive waiver capture by state", "Lead scoring routed to nearest dealer", "Brand-standard compliance tracking"]
    },
    cta: {
      heading: "Brief us on an auto program.",
      body: "Single show, full season, or ride-and-drive tour. We'll scope crew, logistics, and vehicle handling inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= LIFESTYLE & BEAUTY ============= */
  "lifestyle-beauty": {
    slug: "lifestyle-beauty",
    name: "Lifestyle & Beauty",
    short: "Beauty",
    accent: "#FF8FB1",
    hero: {
      eyebrow: "INDUSTRY · BEAUTY · FASHION · WELLNESS · LUXURY",
      title: "Beauty pop-ups, retail trial, and influencer-adjacent activation.",
      acc: "trial",
      lede: "Skincare, color, haircare, fragrance, fashion, jewelry, wellness, supplements. We run retail trial, pop-up stores, brand houses, and the kind of activation where the product needs to be touched, smelled, applied, and photographed — well.",
      stats: [{
        v: "Application-trained",
        l: "crew where needed"
      }, {
        v: "Sephora · Ulta",
        l: "retail experience"
      }, {
        v: "Photo-ready",
        l: "for socials + earned"
      }]
    },
    intro: "Beauty and lifestyle activation has a different physics: the product is intimate, the application matters, and the consumer is photographing it. We staff with crew who know how to demo a serum, suggest a shade, run a fragrance ladder, and look right doing it — without scripting the conversation into a robot pitch.",
    activations: ["Beauty retail trial (Sephora, Ulta, Bluemercury, Macy's)", "Pop-up stores & limited-time activations", "Fragrance ladders & scent trial bars", "Color & application demos", "Hair & nail trial programs", "Fashion week & runway activation", "Wellness & supplement sampling", "Influencer-adjacent retail tie-ins"],
    compliance: [{
      lab: "Hygiene & sanitation",
      desc: "Per-applicator SOPs, FDA-aligned cosmetic protocols"
    }, {
      lab: "Retailer brand standards",
      desc: "Sephora, Ulta, Macy's compliance briefed pre-event"
    }, {
      lab: "Sample yield reporting",
      desc: "Per-store unit counts and conversion same-day"
    }, {
      lab: "Photo & content rights",
      desc: "Releases captured for social content from event"
    }],
    proofPoints: [],
    faqs: [{
      q: "Do your ambassadors know how to actually demo a beauty product?",
      a: "For application-heavy categories (color, fragrance, skincare) we staff crew with relevant retail or cosmetology backgrounds and run product-specific training before deployment."
    }, {
      q: "Can you activate inside Sephora or Ulta?",
      a: "Yes — we've staffed both. We handle the chain's brand-standard paperwork, scheduling, and conduct expectations before crew lands in-store."
    }, {
      q: "What's your hygiene SOP for sampling?",
      a: "Single-use applicators, hand sanitation between consumers, allergen call-outs, and a written cosmetic-safety SOP per program. Adjusts to FDA / state guidance."
    }, {
      q: "Can you tie in influencer or content capture at the event?",
      a: "Yes. We've run programs alongside paid creators and earned-media activations — coordinating shoot windows, talent green rooms, and content capture so the program has a second life on socials."
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Goals + retailer rules",
      desc: "Map trial targets to Sephora / Ulta / Macy's brand standards.",
      time: "Day 0–2"
    }, {
      stage: "PERMIT",
      title: "Chain + hygiene SOP",
      desc: "Per-retailer paperwork, single-use applicator plan, allergen call-outs.",
      time: "Day 3–10"
    }, {
      stage: "TRAIN",
      title: "Application + shade",
      desc: "Crew with cosmetology or retail background, briefed on product science.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Demo, capture, post",
      desc: "Sample yield, content capture, social tie-in for a second life on feed.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "miami", "chicago", "dallas", "atlanta"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Retail Sampling"
    }, {
      slug: "experiential-marketing",
      label: "Pop-up Activation"
    }, {
      slug: "event-staffing",
      label: "Application Specialists"
    }, {
      slug: "promotional-products",
      label: "GWP & Premiums"
    }],
    sparkAngle: {
      headline: "Spark for beauty",
      lede: "Per-shade sample counts, application-time tracking, and photo-ready content capture — packaged for retail buyers and earned media.",
      points: ["Per-shade / per-SKU sample log", "Content release capture for earned media", "Conversion-to-purchase where retailer permits", "Hygiene SOP completion per shift"]
    },
    cta: {
      heading: "Brief us on a beauty activation.",
      body: "Pop-up, retail trial, or multi-market launch — we'll scope crew, retailer compliance, and content strategy inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= CANNABIS & CBD ============= */
  "cannabis": {
    slug: "cannabis",
    name: "Cannabis & CBD",
    short: "Cannabis",
    accent: "#7CD96A",
    hero: {
      eyebrow: "INDUSTRY · CANNABIS · CBD · HEMP",
      title: "Dispensary activation, budtender education, and compliant sampling.",
      acc: "compliant",
      lede: "Flower, vape, edibles, beverages, CBD, hemp-derived THC. We run dispensary activation, budtender education programs, and category-appropriate sampling in every state where it's legal — and we know exactly where it isn't.",
      stats: [{
        v: "MED & REC",
        l: "state by state"
      }, {
        v: "21+ ID",
        l: "verification SOPs"
      }, {
        v: "Compliance-first",
        l: "no shortcuts"
      }]
    },
    intro: "Cannabis activation is the most regulated work in field marketing. We run programs across legal-rec, medical, and CBD/hemp markets — with strict 21+ ID protocols, age-gated sampling, and state-by-state ABC/cannabis-board paperwork. We won't sample in jurisdictions where it isn't legal, and we'll tell you which ones those are up front.",
    activations: ["Dispensary in-store activation", "Budtender education programs", "Hemp-derived beverage sampling (legal markets)", "Cannabis trade-show staffing (MJBizCon, Hall of Flowers)", "Industry event activation", "Pop-up cannabis-friendly venue programs", "CBD/wellness retail sampling", "Compliance-first product education"],
    compliance: [{
      lab: "21+ age gating",
      desc: "ID verification per state law, refusal SOPs documented"
    }, {
      lab: "State by state",
      desc: "We know where we can and can't operate — and tell you up front"
    }, {
      lab: "Cannabis board permits",
      desc: "Where required, filed before deployment"
    }, {
      lab: "No on-site consumption",
      desc: "Unless venue and state law explicitly permit"
    }, {
      lab: "Budtender training",
      desc: "Live + recorded modules tracked through Spark"
    }],
    proofPoints: [{
      brand: "Cannabis brand (NDA)",
      line: "Multi-state dispensary activation"
    }, {
      brand: "Hemp beverage (NDA)",
      line: "Trial program in legal markets"
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Legal markets only",
      desc: "Confirm which states / jurisdictions permit your program. Flag exclusions early.",
      time: "Day 0–3"
    }, {
      stage: "PERMIT",
      title: "Cannabis-board paperwork",
      desc: "File state cannabis-board paperwork, age-gating SOPs, dispensary partner letters.",
      time: "Day 4–14"
    }, {
      stage: "TRAIN",
      title: "Compliance brief",
      desc: "Crew briefed on 21+ ID, refusal protocols, no-consumption rules, brand voice.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Activate, verify, log",
      desc: "Per-shift age-check logs, refusal incidents, sampling counts in Spark.",
      time: "Activation day"
    }],
    relatedMarkets: ["los-angeles", "denver", "las-vegas", "san-francisco", "chicago", "boston"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Compliant Sampling"
    }, {
      slug: "event-staffing",
      label: "Brand Ambassadors"
    }, {
      slug: "trade-shows",
      label: "MJBizCon Staffing"
    }, {
      slug: "experiential-marketing",
      label: "Dispensary Activation"
    }],
    sparkAngle: {
      headline: "Spark for cannabis",
      lede: "Per-shift ID-check completion, age-verification logs, refusal incidents, and dispensary-partner-ready recaps. Audit-ready by default.",
      points: ["21+ ID-check completion rate per shift", "Refusal-to-serve incident log", "State / jurisdiction compliance flag per program", "Dispensary partner-ready recap exports"]
    },
    faqs: [{
      q: "Where can you legally run cannabis sampling?",
      a: "Where state and local law explicitly permit it. We won't fudge it — if your target market doesn't allow sampling, we'll propose a budtender-education or hemp-derived alternative."
    }, {
      q: "Are your ambassadors trained on cannabis compliance?",
      a: "Yes. Every ambassador on a cannabis program is briefed on 21+ ID protocols, refusal SOPs, no-on-site-consumption rules, and brand-specific compliance. Refresher per program."
    }, {
      q: "Do you have COIs for cannabis activation?",
      a: "Yes — including cannabis-specific liability where carriers offer it. Additional insureds added per dispensary, brand, and venue."
    }],
    cta: {
      heading: "Brief us on a cannabis program.",
      body: "Dispensary activation, budtender education, or compliant sampling in legal markets. We'll scope and quote inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= SPORTS & ENTERTAINMENT ============= */
  "sports-entertainment": {
    slug: "sports-entertainment",
    name: "Sports & Entertainment",
    short: "Sports",
    accent: "#FF5A1F",
    hero: {
      eyebrow: "INDUSTRY · SPORTS · ENTERTAINMENT · LIVE EVENTS",
      title: "Stadium activation, fan zones, and concourse staffing.",
      acc: "concourse",
      lede: "Stadium and arena activation, fan zones, concourse staffing, halftime activations, jersey-back sponsorships, and entertainment-property programs. We work inside the venues that matter — NFL, NBA, MLB, NHL, MLS, NCAA, NASCAR, festivals, and global tours.",
      stats: [{
        v: "Venue-cleared",
        l: "with team + property"
      }, {
        v: "Game-day ready",
        l: "weather-tested"
      }, {
        v: "All major leagues",
        l: "national footprint"
      }]
    },
    intro: "Stadium and venue work is its own discipline. We coordinate with team marketing, property operations, concourse vendors, and broadcast partners. Game-day staffing happens at scale, in weather, with traffic, and with the fan experience as the through-line.",
    activations: ["Stadium concourse sampling & activation", "Fan zone & tailgate programs", "Halftime / pre-game on-field activations", "Jersey-back & in-arena signage tie-ins", "Premium suite hospitality staffing", "Festival & multi-day concert tours", "Motorsports activation (NASCAR, F1, IndyCar)", "NCAA / collegiate game-day programs"],
    compliance: [{
      lab: "Venue clearances",
      desc: "Filed with the team, the venue ops, and (where needed) the league"
    }, {
      lab: "Game-day SOPs",
      desc: "Crew briefed on bag policy, broadcast windows, security flow"
    }, {
      lab: "Alcohol where applicable",
      desc: "TIPS / TABC / RBS certified for concourse pouring"
    }, {
      lab: "Weather contingencies",
      desc: "Cold-weather, rain, and heat protocols built into every plan"
    }],
    proofPoints: [{
      logo: "liquid-death",
      line: "NASCAR sponsorship activation"
    }, {
      logo: "mas-messi",
      line: "Stadium activation with Messi"
    }, {
      logo: "white-claw",
      line: "Sports/festival concourse"
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Goals + property type",
      desc: "Stadium, arena, festival, motorsport — confirm venue access path.",
      time: "Day 0–3"
    }, {
      stage: "CLEAR",
      title: "Team + property sign-off",
      desc: "Coordinate with team marketing, ops, and (where needed) league office.",
      time: "Day 4–21"
    }, {
      stage: "BRIEF CREW",
      title: "Game-day SOPs",
      desc: "Bag policy, broadcast windows, security flow, weather contingency.",
      time: "Pre-event"
    }, {
      stage: "GAME DAY",
      title: "Activate, capture, recap",
      desc: "Concourse staffing, fan zone, on-field — recap in Spark same-day.",
      time: "Event day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "miami", "chicago", "dallas", "atlanta", "las-vegas"],
    relatedServices: [{
      slug: "experiential-marketing",
      label: "Stadium Activation"
    }, {
      slug: "event-staffing",
      label: "Concourse Staffing"
    }, {
      slug: "fabrication-builds",
      label: "Fan Zone Builds"
    }, {
      slug: "product-sampling",
      label: "Game-Day Sampling"
    }],
    sparkAngle: {
      headline: "Spark for sports",
      lede: "Per-section concourse traffic, fan-zone dwell time, sampling counts by gate, and broadcast-window activation timing — captured live during the game.",
      points: ["Per-section / per-gate sampling counts", "Fan-zone dwell + engagement time", "Broadcast-window activation windows logged", "Game-day weather impact tagged to KPIs"]
    },
    faqs: [{
      q: "Can you activate inside major stadiums?",
      a: "Yes. We've staffed concourse, fan zone, and on-field programs across NFL, MLB, NBA, NHL, MLS, and motorsports venues. We coordinate with the team, the venue, and (where needed) the league office."
    }, {
      q: "How early do we need to plan a game-day program?",
      a: "2–8 weeks for full team and venue sign-off, depending on the property. Major-league venues require longer; college and minor-league venues can move faster."
    }, {
      q: "Can you handle weather contingencies?",
      a: "Yes. Every outdoor program ships with cold-weather, rain, and heat SOPs. Crew is briefed pre-event, and we'll re-staff or replan if conditions force it."
    }],
    cta: {
      heading: "Brief us on a stadium program.",
      body: "Single game, multi-game tour, fan zone, or full season-long property activation. We'll scope crew, venue clearance, and game-day logistics inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= PET & ANIMAL ============= */
  "pet": {
    slug: "pet",
    name: "Pet & Animal",
    short: "Pet",
    accent: "#FFB627",
    hero: {
      eyebrow: "INDUSTRY · PET · ANIMAL · WELLNESS",
      title: "Pet retail sampling, store-in-store activation, and pet parent trial.",
      acc: "trial",
      lede: "Dog and cat food, treats, wellness, gear, accessories, and adjacent CPG. We run trial programs inside the channels pet parents actually shop — PetSmart, Petco, regional banners, and the lifestyle events where the dogs come too.",
      stats: [{
        v: "PetSmart",
        l: "national experience"
      }, {
        v: "Pet-safe",
        l: "sampling SOPs"
      }, {
        v: "Lifestyle",
        l: "event activation"
      }]
    },
    intro: "Pet activation is part CPG sampling, part lifestyle marketing. We run inside the major chains, plus event programs where the audience walks the floor with a dog. Crew is briefed on pet-safety, allergens, and the realities of sampling product around live animals.",
    activations: ["PetSmart / Petco in-store sampling", "Specialty pet retailer activation", "Dog park & pet-friendly venue pop-ups", "Pet trade-show staffing (Global Pet Expo, SuperZoo)", "Pet adoption event partnerships", "Lifestyle event activation (where pets are welcome)", "Treat & supplement trial", "Toy & accessory demo"],
    compliance: [{
      lab: "Retailer paperwork",
      desc: "PetSmart, Petco, Pet Supplies Plus brand-standard compliance"
    }, {
      lab: "Pet-safety SOPs",
      desc: "Allergen flags, breed considerations, age-appropriate sampling"
    }, {
      lab: "Adoption partner clearance",
      desc: "Where rescue partnerships are part of the program"
    }],
    proofPoints: [],
    playbook: [{
      stage: "BRIEF",
      title: "Channel + audience",
      desc: "Confirm retail partners, lifestyle events, target pet-parent profile.",
      time: "Day 0–2"
    }, {
      stage: "PERMIT",
      title: "Chain + venue paperwork",
      desc: "PetSmart / Petco demo permits, COIs, allergen disclosures.",
      time: "Day 3–10"
    }, {
      stage: "TRAIN",
      title: "Pet-safety briefing",
      desc: "Crew briefed on sampling around pets, breed considerations, refusal protocols.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Sample, capture, recap",
      desc: "Per-store counts, content capture for pet-parent socials, recap in Spark.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "chicago", "dallas", "atlanta", "miami", "denver"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Retail Sampling"
    }, {
      slug: "event-staffing",
      label: "Pet-Trained Staff"
    }, {
      slug: "experiential-marketing",
      label: "Lifestyle Activation"
    }, {
      slug: "trade-shows",
      label: "Pet Trade Show Support"
    }],
    sparkAngle: {
      headline: "Spark for pet",
      lede: "Per-store sample counts, pet-parent engagement capture, and content-ready photo galleries for socials.",
      points: ["Per-store unit counts at retail", "Pet-parent demographic capture", "Content release rights captured for socials"]
    },
    faqs: [{
      q: "Can you activate inside PetSmart and Petco?",
      a: "Yes. We've run programs inside PetSmart at national scale, and we handle the chain-specific paperwork, demo permits, and store-level coordination."
    }, {
      q: "How do you handle sampling around live pets?",
      a: "Every shift is briefed on allergen flags, breed-specific considerations, refusal protocols, and pet-safety SOPs. Crew is trained not to sample-and-walk; they're trained to interact with the pet parent and confirm consent first."
    }],
    cta: {
      heading: "Brief us on a pet program.",
      body: "Single chain rollout, lifestyle event, or multi-market trial. We'll scope crew, chain compliance, and adoption partnerships inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= HEALTH & WELLNESS ============= */
  "health-wellness": {
    slug: "health-wellness",
    name: "Health & Wellness",
    short: "Wellness",
    accent: "#5ED4A8",
    hero: {
      eyebrow: "INDUSTRY · SUPPLEMENTS · FUNCTIONAL · WELLNESS",
      title: "Supplement sampling, functional product trial, and clinical-channel activation.",
      acc: "functional",
      lede: "Vitamins, protein, electrolytes, nootropic, functional beverage, wellness, supplements, OTC, and adjacent personal-care. We run trial programs through GNC, Vitamin Shoppe, Whole Foods, gyms, and the wellness events where buyers congregate.",
      stats: [{
        v: "FDA-aware",
        l: "claims-compliant"
      }, {
        v: "Allergen-SOPs",
        l: "per ingredient deck"
      }, {
        v: "Gym + retail",
        l: "channel mix"
      }]
    },
    intro: "Health and wellness activation has guardrails — what you can claim, who you can claim it to, and how the sample needs to be handled. We brief crew on FDA-compliant language, allergen call-outs, and ingredient-deck disclosure. Programs run inside specialty retail, gyms, festivals, and clinical-adjacent venues.",
    activations: ["GNC / Vitamin Shoppe / specialty retail demo", "Whole Foods & natural channel sampling", "Gym & fitness studio trial", "Wellness event sampling (Wanderlust, Lululemon stores)", "Functional beverage trial", "Sports nutrition activation", "Doctor / clinical-channel education programs", "Trade-show staffing (Expo West, SupplySide)"],
    compliance: [{
      lab: "FDA-compliant claims",
      desc: "Crew briefed on what can and can't be stated about your product"
    }, {
      lab: "Ingredient disclosure",
      desc: "Allergens, restricted ingredients, label-accurate scripting"
    }, {
      lab: "Channel-specific SOPs",
      desc: "GNC vs Whole Foods vs gym — each has different rules"
    }],
    proofPoints: [{
      logo: "dude-wipes",
      line: "Health & wellness retail trial"
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Claims + channel mix",
      desc: "Confirm what you can claim by channel; flag FDA-sensitive ingredients early.",
      time: "Day 0–3"
    }, {
      stage: "COMPLIANCE",
      title: "Claims script + legal",
      desc: "Talking points reviewed against label; restricted-claim list set.",
      time: "Day 4–10"
    }, {
      stage: "TRAIN",
      title: "Ingredient + claim",
      desc: "Crew briefed on ingredient deck, what to say, what to never say.",
      time: "Pre-event"
    }, {
      stage: "DEPLOY",
      title: "Sample, capture, recap",
      desc: "Per-store / per-gym sample counts, conversion intent, recap in Spark.",
      time: "Activation day"
    }],
    relatedMarkets: ["los-angeles", "new-york", "miami", "austin", "denver", "san-francisco"],
    relatedServices: [{
      slug: "product-sampling",
      label: "Functional Sampling"
    }, {
      slug: "experiential-marketing",
      label: "Wellness Pop-ups"
    }, {
      slug: "event-staffing",
      label: "Bilingual Staff"
    }, {
      slug: "trade-shows",
      label: "Expo West Staffing"
    }],
    sparkAngle: {
      headline: "Spark for wellness",
      lede: "Per-shift claims-compliance check, ingredient-disclosure logging, and channel-by-channel sampling yield.",
      points: ["Claims-compliance check per ambassador", "Per-ingredient disclosure log", "Channel-by-channel conversion intent"]
    },
    faqs: [{
      q: "Are your ambassadors briefed on FDA compliance?",
      a: "Yes. For any supplement, functional, or claims-sensitive program, crew gets a written briefing on what they can and can't say — reviewed against your label and legal team before deployment."
    }, {
      q: "Can you sample inside gyms and fitness studios?",
      a: "Yes. We've run programs at Equinox, Lululemon studios, F45, Barry's, CrossFit boxes, and yoga studios — each has different brand-partner rules; we manage the coordination."
    }],
    cta: {
      heading: "Brief us on a wellness program.",
      body: "Single-channel trial through multi-market national rollouts. We'll scope crew, compliance, and channel mix inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= QSR & RESTAURANT ============= */
  "qsr-restaurant": {
    slug: "qsr-restaurant",
    name: "QSR & Restaurant",
    short: "QSR",
    accent: "#FFB627",
    hero: {
      eyebrow: "INDUSTRY · QSR · FAST CASUAL · RESTAURANT",
      title: "Grand openings, LTO launches, and franchise activation.",
      acc: "LTO",
      lede: "Burger, chicken, pizza, taco, BBQ, dessert, coffee, fast-casual, ghost kitchen. We run grand openings, LTO trial, mascot tours, and multi-unit franchise activation — from a single market test through national chain rollouts.",
      stats: [{
        v: "Grand openings",
        l: "ribbon to capacity"
      }, {
        v: "LTO trial",
        l: "limited-time launches"
      }, {
        v: "Franchise-friendly",
        l: "multi-unit playbooks"
      }]
    },
    intro: "QSR activation is high-volume, high-tempo, and the metric is usually 'how fast can we get them in the door.' We've run grand openings that paced 400+ first-day customers, LTO trial programs that moved units inside 24 hours, and franchise activation circuits across multi-unit operators.",
    activations: ["Grand opening activation & line management", "LTO (limited-time offer) sampling & trial", "Mascot tours & costumed talent", "Franchise multi-unit launch support", "Food truck & mobile QSR partnerships", "Drive-thru promo activation", "Loyalty-program enrollment drives", "Trade-show booth staffing (NRA Show, IFA)"],
    compliance: [{
      lab: "Food handler certs",
      desc: "ServSafe / state cards in every market we sample"
    }, {
      lab: "Allergen protocol",
      desc: "Cross-contact prevention, allergen call-outs by SKU"
    }, {
      lab: "Franchise brand standards",
      desc: "Crew briefed on franchise-specific compliance pre-event"
    }],
    proofPoints: [{
      logo: "krispy-krunchy",
      line: "C-store demo + launch programs"
    }, {
      logo: "smalls-sliders",
      line: "Slider sampling + grand opening support"
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Open date + units",
      desc: "Confirm grand opening date, unit count, target first-day capacity.",
      time: "Day 0–7"
    }, {
      stage: "PERMIT",
      title: "Local + food handler",
      desc: "City permits, food handler certs, sampling COIs, parking coordination.",
      time: "Day 8–21"
    }, {
      stage: "TRAIN",
      title: "Brand voice + LTO",
      desc: "Crew briefed on the LTO, the menu, the promo flow, allergen call-outs.",
      time: "Pre-event"
    }, {
      stage: "OPEN",
      title: "Line, capture, recap",
      desc: "Line management, customer capture, photo for socials, recap in Spark.",
      time: "Open day"
    }],
    relatedMarkets: ["new-york", "los-angeles", "chicago", "dallas", "houston", "atlanta", "miami"],
    relatedServices: [{
      slug: "experiential-marketing",
      label: "Grand Opening Activation"
    }, {
      slug: "event-staffing",
      label: "Line + Capture Staffing"
    }, {
      slug: "product-sampling",
      label: "LTO Sampling"
    }, {
      slug: "promotional-products",
      label: "Loyalty Premiums"
    }],
    sparkAngle: {
      headline: "Spark for QSR",
      lede: "First-day line length, capture rate, sample-to-purchase conversion, and franchise-by-franchise rollout pacing — live during the open.",
      points: ["Line length + capture rate per unit", "Sample-to-purchase conversion", "Loyalty enrollment captured per shift", "Multi-unit rollout pacing"]
    },
    faqs: [{
      q: "Can you support a multi-unit franchise launch?",
      a: "Yes. We've run sequenced multi-unit grand openings — staffing rotations, vehicle staging, supply chain on swag and signage, plus a single PM coordinating across all units."
    }, {
      q: "How much lead time for a grand opening?",
      a: "Single market: 2–3 weeks ideal. Multi-unit national launch: 4–8 weeks. Faster turns are possible but rates carry rush premiums."
    }],
    cta: {
      heading: "Brief us on a QSR launch.",
      body: "Single-unit grand opening, LTO trial, or multi-unit franchise rollout. We'll scope crew, permits, and capture inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= GAMING & ESPORTS ============= */
  "gaming-esports": {
    slug: "gaming-esports",
    name: "Gaming & Esports",
    short: "Gaming",
    accent: "#5AB8FF",
    hero: {
      eyebrow: "INDUSTRY · GAMING · ESPORTS · STREAMING",
      title: "Console launches, esports activation, and creator-event staffing.",
      acc: "creator-led",
      lede: "Console, PC, mobile, accessories, esports orgs, streaming platforms, and adjacent CPG. We activate at DreamHack, TwitchCon, PAX, gamescom, plus pop-up product drops, creator collabs, and university esports programs.",
      stats: [{
        v: "Console launches",
        l: "to creator drops"
      }, {
        v: "Bilingual",
        l: "where useful"
      }, {
        v: "Demo-ready",
        l: "controller-tested crew"
      }]
    },
    intro: "Gaming activation is fast, loud, and audience-sensitive. We staff demo specialists who can actually play the game, fan-zone leads who understand the IP, and the kind of operations crew that runs through 6,000 demo sessions in a weekend without losing track of the hardware.",
    activations: ["Console & accessory launch programs", "Esports tournament activation (DreamHack, ESL)", "TwitchCon / PAX booth staffing", "University esports program support", "Creator + streamer collab activations", "Game demo & playtest staffing", "Pop-up product drops", "Brand house at gaming conventions"],
    compliance: [{
      lab: "Hardware tracking",
      desc: "Per-station controller / console / cable inventory"
    }, {
      lab: "Age-appropriate content",
      desc: "ESRB / PEGI rating awareness, parental-permission SOPs"
    }, {
      lab: "IP / NDA briefing",
      desc: "Crew NDAs for unreleased game content where relevant"
    }],
    proofPoints: [{
      brand: "Gaming brand (NDA)",
      line: "Console launch + creator collab"
    }, {
      brand: "Esports org (NDA)",
      line: "Multi-stop tournament activation"
    }],
    playbook: [{
      stage: "BRIEF",
      title: "Title + audience tier",
      desc: "Confirm game/title, audience tier (esports, casual, family), event circuit.",
      time: "Day 0–5"
    }, {
      stage: "HARDWARE",
      title: "Console + station prep",
      desc: "Per-station hardware tracking, network / latency QA, controller inventory.",
      time: "Day 6–14"
    }, {
      stage: "TRAIN",
      title: "Game-savvy crew",
      desc: "Crew that can actually play the game, briefed on IP, creator partners, NDAs.",
      time: "Pre-event"
    }, {
      stage: "DEMO",
      title: "Run, capture, share",
      desc: "Demo sessions, capture rates, social content release for the community.",
      time: "Event day"
    }],
    relatedMarkets: ["los-angeles", "seattle", "austin", "san-francisco", "new-york", "las-vegas"],
    relatedServices: [{
      slug: "trade-shows",
      label: "TwitchCon / PAX Staffing"
    }, {
      slug: "experiential-marketing",
      label: "Brand Houses + Drops"
    }, {
      slug: "event-staffing",
      label: "Demo Specialists"
    }, {
      slug: "fabrication-builds",
      label: "Booth + Stage Builds"
    }],
    sparkAngle: {
      headline: "Spark for gaming",
      lede: "Per-station demo sessions, controller uptime, creator-collab attendance, and social capture for community amplification.",
      points: ["Per-station demo session count", "Hardware uptime + controller cycles", "Creator-collab attendance + content rights", "Booth dwell + community capture"]
    },
    faqs: [{
      q: "Can your crew actually play the game?",
      a: "For demo-heavy programs, yes. We staff demo specialists from the gaming community — Twitch streamers, esports vets, console+PC players — and run pre-event training on your specific title."
    }, {
      q: "Do you handle NDAs for unreleased content?",
      a: "Yes. Per-event, per-ambassador NDAs for any pre-release content. Hardware seal-of-secrecy SOPs where the platform-holder requires it."
    }],
    cta: {
      heading: "Brief us on a gaming program.",
      body: "Console launch, esports tournament, creator collab, or convention booth. We'll scope crew, hardware, and compliance inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  },
  /* ============= HOSPITALITY & TRAVEL ============= */
  "hospitality-travel": {
    slug: "hospitality-travel",
    name: "Hospitality & Travel",
    short: "Hospitality",
    accent: "#FFB627",
    hero: {
      eyebrow: "INDUSTRY · HOTELS · AIRLINES · DESTINATIONS",
      title: "Hotel openings, destination marketing, and lounge activation.",
      acc: "destination",
      lede: "Hotels, airlines, cruise lines, destinations, OTAs, luxury hospitality, vacation rental, and adjacent travel-tech. We run property openings, destination marketing tours, lounge activation, and travel-trade conference programs.",
      stats: [{
        v: "Luxury-trained",
        l: "service-standard crew"
      }, {
        v: "Airport-cleared",
        l: "TSA + property"
      }, {
        v: "Multi-property",
        l: "rollout playbooks"
      }]
    },
    intro: "Hospitality activation is a service business. The crew has to look right, sound right, and treat every interaction like brand equity. We staff luxury-trained ambassadors who understand the hospitality service standard — and the operations crew that handles airport security, hotel union, and destination-marketing-partner paperwork.",
    activations: ["Hotel grand opening activation", "Airline lounge programs", "Airport activation & TSA-cleared deployment", "Cruise terminal & onboard activation", "Destination marketing tours (DMO partnerships)", "Travel-trade conference staffing (Skift, WTM)", "Luxury brand-house & VIP hospitality", "Cultural + culinary tourism programs"],
    compliance: [{
      lab: "Property brand standards",
      desc: "Briefed on Marriott / Hilton / Hyatt / Four Seasons service standards"
    }, {
      lab: "TSA + airport",
      desc: "Airport ID badging where airside access is required"
    }, {
      lab: "Union venues",
      desc: "We respect union jurisdictions and coordinate as required"
    }, {
      lab: "Multi-language",
      desc: "Bilingual / multilingual staff for destination-marketing programs"
    }],
    proofPoints: [],
    playbook: [{
      stage: "BRIEF",
      title: "Property + service tier",
      desc: "Confirm property, service-standard tier, audience profile.",
      time: "Day 0–5"
    }, {
      stage: "CLEAR",
      title: "Property + airport paperwork",
      desc: "Brand-standard briefing, TSA badging if airside, union coordination.",
      time: "Day 6–21"
    }, {
      stage: "TRAIN",
      title: "Luxury service standard",
      desc: "Crew briefed on tone, dress, language, and the service moment.",
      time: "Pre-event"
    }, {
      stage: "ACTIVATE",
      title: "Serve, capture, recap",
      desc: "Service-first interactions, capture rate, recap in Spark.",
      time: "Activation day"
    }],
    relatedMarkets: ["new-york", "miami", "los-angeles", "las-vegas", "honolulu", "san-francisco", "orlando"],
    relatedServices: [{
      slug: "experiential-marketing",
      label: "Hotel & Property Openings"
    }, {
      slug: "event-staffing",
      label: "Luxury-Trained Crew"
    }, {
      slug: "trade-shows",
      label: "Travel-Trade Staffing"
    }, {
      slug: "promotional-products",
      label: "VIP Hospitality Gifting"
    }],
    sparkAngle: {
      headline: "Spark for hospitality",
      lede: "Per-property interaction count, service-standard compliance, multi-language capture, and luxury-brand-ready recaps.",
      points: ["Per-property interaction count", "Service-standard compliance per shift", "Multi-language interactions captured", "Luxury-brand-ready recap exports"]
    },
    faqs: [{
      q: "Can you run a property opening across multiple hotels in one chain?",
      a: "Yes. We've sequenced multi-property opening tours — staffing rotations, brand-standard briefings per property, plus a single PM coordinating across the chain."
    }, {
      q: "Do you have airport-cleared crew?",
      a: "Yes. For airside or TSA-restricted activation, we deploy ambassadors with airport-issued badges, briefed on TSA protocols and property-specific rules."
    }, {
      q: "Can your crew operate in multiple languages?",
      a: "Yes. Spanish, French, Mandarin, Japanese, and Portuguese are most-requested for travel programs. Others on confirmation by market."
    }],
    cta: {
      heading: "Brief us on a hospitality program.",
      body: "Property opening, airline lounge, destination tour, or travel-trade conference. We'll scope crew, property clearances, and language coverage inside 48 hours.",
      primaryLabel: "Start a brief",
      primaryHref: "contact.html"
    }
  }
};
const INDUSTRY_BY_SLUG = INDUSTRIES_DATA;
const INDUSTRY_LIST = Object.values(INDUSTRIES_DATA);
Object.assign(window, {
  INDUSTRIES_DATA,
  INDUSTRY_BY_SLUG,
  INDUSTRY_LIST,
  BRAND_LOGOS
});
})();
