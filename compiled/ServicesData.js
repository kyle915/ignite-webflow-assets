/* ============================================================
   IGNITE — Services data
   Drives /pages/services.html (index) + /pages/services-{slug}.html (details).
   Edit copy here and every page picks it up.
   ============================================================ */

const SERVICES_DATA = {
  "experiential-marketing": {
    n: "01",
    flag: true,
    accent: "#FF5A1F",
    label: "Experiential Marketing",
    short: "Experiential",
    eyebrow: "FLAGSHIP // EXPERIENTIAL",
    tagline: "Brands you can taste, touch, and remember.",
    intro: "Festival footprints, immersive installations, pop-ups that line up around the block. We design and operate brand experiences consumers can't scroll past — because they're standing inside them.",
    hero: window.__resources?.r_689e7c62f3ce40d27280ac7b_LDEATH45_03_16_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/689e7c62f3ce40d27280ac7b_LDEATH45_03_16_2025_Liz_Garcia_7a5a0bc9-d310-1454-54ca-639c88942ce3_2.jpg",
    sub: [{
      t: "Festival Activations",
      d: "On-site at SXSW, Lollapalooza, Coachella, EDC, Warped — branded footprints with talent and tech."
    }, {
      t: "Brand Activations",
      d: "Standalone activations engineered around a single moment, drop, or launch beat."
    }, {
      t: "Pop-Ups",
      d: "Days-to-weeks retail-style takeovers in markets that matter."
    }, {
      t: "Immersive Installations",
      d: "Walk-through scenes, rooms, and sets that turn into UGC before they end."
    }, {
      t: "Interactive Experiences",
      d: "Hands-on demos, gamified moments, AR/QR overlays, and earned-data capture."
    }, {
      t: "Retail Activations",
      d: "In-store events that turn aisle traffic into purchase intent."
    }, {
      t: "Campus Tours",
      d: "Universities, fraternities, sororities — multi-school multi-week rollouts."
    }, {
      t: "Consumer Engagement",
      d: "Trial, recall, and word-of-mouth design baked into every footprint."
    }],
    stats: [["1.2M+", "consumers reached / yr"], ["320+", "festivals & tours"], ["28%", "trial → purchase lift"]],
    featured: {
      brand: "LIQUID DEATH",
      line: "850+ events. 47 markets. Zero water bottles.",
      img: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp"
    },
    adjacent: ["fabrication-builds", "event-staffing", "mobile-tours"]
  },
  "mobile-tours": {
    n: "02",
    flag: true,
    accent: "#FFB627",
    label: "Mobile Marketing Tours",
    short: "Mobile Tours",
    eyebrow: "FLAGSHIP // MOBILE MEDIA",
    tagline: "If it has wheels, we put your brand on it.",
    intro: "From ad trucks to branded bikes to full sprinter-van sampling tours, mobile is how you put a brand inside the day-to-day rhythm of a city. National routing, GPS-tracked impressions, on-the-ground sampling teams — all under one roof.",
    hero: window.__resources?.r_68962c63c89c6cf0f46a6b66_SMALLS93_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg",
    sub: [{
      t: "Ad Trucks",
      d: "LED, vinyl, and 3D-wrap truck-side billboards routed against your media plan."
    }, {
      t: "Mobile Billboards",
      d: "Static and digital mobile billboards across DMA-targeted day-parts."
    }, {
      t: "Branded Bikes",
      d: "Pedicabs, e-bikes, and food-cart bikes for high-foot-traffic urban runs."
    }, {
      t: "Sprinter Van Activations",
      d: "Wrapped sprinters fitted as mobile sampling rigs, lounges, or photo studios."
    }, {
      t: "Sampling Tours",
      d: "Multi-market, multi-week sampling rollouts with in-cab and on-foot teams."
    }, {
      t: "Roadshows",
      d: "B2B and trade roadshows — same brand experience, every stop, every market."
    }, {
      t: "Transit Takeovers",
      d: "Bus wraps, station dominations, rideshare wraps, gas-pump activations."
    }, {
      t: "Helium Balloons & Inflatables",
      d: "Outdoor inflatables and helium displays for stadium-scale visibility."
    }],
    stats: [["50", "states routed"], ["18M+", "mobile impressions / yr"], ["6", "vehicle types in fleet"]],
    featured: {
      brand: "MAS+",
      line: "Stadium-level reach via 6 metros, 320 stops, 180K samples handed out.",
      img: window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png"
    },
    adjacent: ["product-sampling", "experiential-marketing", "event-staffing"]
  },
  "fabrication-builds": {
    n: "03",
    flag: true,
    accent: "#FF5A1F",
    label: "Fabrication & Builds",
    short: "Fabrication",
    eyebrow: "FLAGSHIP // BUILD SHOP",
    tagline: "We build the stage your brand performs on.",
    intro: "Custom scenic fabrication, modular activations, touring builds, and POS displays — designed in-house, fabricated in our shop, deployed by our crew. From a single photo-op wall to a full festival village, we handle CAD-to-load-out.",
    hero: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp",
    sub: [{
      t: "Custom Builds",
      d: "One-off footprints engineered around a brand idea, not a stock kit."
    }, {
      t: "Scenic Fabrication",
      d: "Soft and hard scenery — from 8' photo-ops to 40' immersive sets."
    }, {
      t: "Pop-Up Construction",
      d: "Storefronts, kiosks, and retail-pop builds with full FF&E install."
    }, {
      t: "Modular Activations",
      d: "Reconfigurable footprints engineered to ship, set, and strike fast."
    }, {
      t: "Touring Builds",
      d: "Roadcase-ready, road-tested builds engineered for 30+ stop tours."
    }, {
      t: "Interactive Displays",
      d: "Touchscreen, sensor, and hardware-driven moments fabricated in-house."
    }, {
      t: "Fabricated Photo Ops",
      d: "Engineered for content — sized, lit, and angled for vertical capture."
    }, {
      t: "Branded POS Displays",
      d: "Endcaps, FSDUs, counter units — fabricated, kitted, and shipped to retail."
    }],
    stats: [["12K sq ft", "In-house build shop"], ["48", "production days/yr"], ["40+", "touring builds in market"]],
    featured: {
      brand: "LIQUID DEATH",
      line: "Modular festival stage — strikes in 90 min, ships in 2 cases, scales from 10x10 to 40x60.",
      img: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp"
    },
    adjacent: ["experiential-marketing", "trade-shows", "mobile-tours"]
  },
  "event-staffing": {
    n: "04",
    accent: "#FFB627",
    label: "Event Staffing",
    short: "Staffing",
    eyebrow: "STAFFING // 42K+ ROSTER",
    tagline: "42,000 ambassadors. 50 states. 48 hours.",
    intro: "Brand ambassadors, street teams, tour managers, and bilingual specialists — vetted, trained on your brand, dispatched anywhere in the country. Spark gives you live check-ins, GPS-verified attendance, and recap-ready reporting on every shift.",
    hero: "https://kyle915.github.io/ignite-webflow-assets/assets/staffing-liquid-death-acl.jpg",
    sub: [{
      t: "Brand Ambassadors",
      d: "On-brand talent trained on script, product, and brand voice for every shift."
    }, {
      t: "Street Teams",
      d: "Foot-on-pavement teams for sampling, leaflet, and high-density urban activations."
    }, {
      t: "Product Specialists",
      d: "Demo-trained staff for technical product, alcohol, and regulated categories."
    }, {
      t: "Promo Models",
      d: "Editorial-trained talent for press events, photo capture, and high-visibility shifts."
    }, {
      t: "Registration Staff",
      d: "Check-in, badge, and lead-capture specialists for events and trade shows."
    }, {
      t: "Tour Managers",
      d: "Senior leads who own a multi-market tour from logistics to recap."
    }, {
      t: "Team Leads",
      d: "On-site captains who manage 4-40 ambassadors per market."
    }, {
      t: "Bilingual Staffing",
      d: "Spanish, Mandarin, French and more — vetted at hire, requestable per shift."
    }, {
      t: "Hospitality Staff",
      d: "Hosts, bartenders, mixologists for VIP, on-premise, and after-party programming."
    }],
    stats: [["42,000+", "vetted ambassadors"], ["50", "states covered"], ["48hr", "rush turnaround"]],
    featured: {
      brand: "WHITE CLAW",
      line: "500+ in-store demos. 12 markets in 90 days. 20% conversion rate.",
      img: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg"
    },
    adjacent: ["product-sampling", "experiential-marketing", "trade-shows"]
  },
  "product-sampling": {
    n: "05",
    accent: "#D6F35F",
    label: "Product Sampling",
    short: "Sampling",
    eyebrow: "SAMPLING // GPS-VERIFIED",
    tagline: "Trial is a science. We run the lab.",
    intro: "Structured sampling programs with GPS-verified distribution counts, per-market velocity tracking, and post-trial conversion measurement. In-store, on-premise, retail demo, street, campus, event — every channel a CPG buyer expects.",
    hero: "https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquid-death-petsmart.jpg",
    sub: [{
      t: "In-Store Sampling",
      d: "Demo programs in grocery, mass, c-store, and natural channels."
    }, {
      t: "Retail Demo Programs",
      d: "Multi-week, multi-store demo rollouts with weekly velocity reporting."
    }, {
      t: "Retail Co-Op Programs",
      d: "We're a preferred partner for national co-op activations — see the Total Wireless program (300+ retail locations, 9 Texas markets). Co-op-funded demos, store launches, and regional events with claim-ready reporting."
    }, {
      t: "Food & Beverage Sampling",
      d: "Hot, cold, frozen — full kit, transport, and food-handler-certified staff."
    }, {
      t: "Alcohol Sampling",
      d: "TIPS-certified staff, state-by-state compliance, on/off-premise channels."
    }, {
      t: "Campus Sampling",
      d: "University tabling, dorm drops, sorority/fraternity programs."
    }, {
      t: "Street Sampling",
      d: "High-foot-traffic corridors, transit stations, lunch-rush executions."
    }, {
      t: "Event Sampling",
      d: "Festivals, races, expos — high-volume sampling with secure inventory chain."
    }],
    stats: [["2.4M+", "samples / yr"], ["20%+", "demo conversion"], ["100%", "GPS-verified counts"]],
    seoBlock: {
      eyebrow: "co-op & MDF programs",
      head: "Co-op-compliant retail activations. Claim-ready reporting.",
      paras: ["Ignite is a preferred event marketing agency for national <strong>retail co-op programs</strong> and <strong>MDF (Market Development Fund)</strong> activations — including <strong>Total Wireless</strong>, where we activate 300+ retail locations across 9 Texas markets through their co-op program.", "Most CPG brands leave <strong>co-op marketing dollars</strong> on the table because their agency can't produce <strong>claim-ready reporting</strong>. We run co-op activations end-to-end: pre-program approval packets, GPS-verified event windows, geotagged photo capture, signed staff timesheets, and post-program claim packets formatted for retail co-op portals.", "Programs we run on <strong>retailer-funded budgets</strong>: in-store sampling and demo programs (scan-back funded), regional events tied to store launches, retailer-specific community sponsorships, mobile tours in cooperative ZIP codes, and end-cap or shipper-tied activations. Every program documented to support <strong>MDF reimbursement</strong> and <strong>scan-back claims</strong>.", "Whether your co-op program is a flat-rate MDF allocation, an accrual-based pool, scan-back funding, or slotting-credit conversion — we build the activation, run it in market, and produce the documentation your retail partner's compliance team will actually approve. <a href='/blog-post?slug=retail-co-op-mdf-programs-guide' style='color:var(--fg-1);text-decoration:underline;font-weight:600'>Read our full co-op & MDF field guide →</a>"],
      chips: ["Retail co-op programs", "MDF activations", "Scan-back programs", "Co-op claim reporting", "Retailer-funded marketing", "JBP support", "Walmart co-op", "Target MDF", "Costco roadshows", "Total Wireless co-op"]
    },
    featured: {
      brand: "WHITE CLAW",
      line: "12 markets, 500+ in-store demos, 20% conversion at the shelf.",
      img: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg"
    },
    adjacent: ["event-staffing", "mobile-tours", "experiential-marketing"]
  },
  "trade-shows": {
    n: "06",
    accent: "#FFB627",
    label: "Trade Show Support",
    short: "Trade Shows",
    eyebrow: "B2B // SHOW FLOOR",
    tagline: "Booths that book meetings.",
    intro: "Booth staffing, lead-capture teams, demo specialists, and end-to-end show management. We partner with your team or fully run your floor — from pre-show training through post-show CRM hand-off.",
    hero: "https://kyle915.github.io/ignite-webflow-assets/assets/trade-show-pressreader-booth.webp",
    sub: [{
      t: "Booth Staffing",
      d: "On-brand reps trained on product, script, and qualifying questions."
    }, {
      t: "Lead Capture Teams",
      d: "Badge-scan, qualifying-conversation, and CRM-ready lead workflows."
    }, {
      t: "Trade Show Management",
      d: "Full show ownership — logistics, I&D, staffing, and recap."
    }, {
      t: "Booth Engagement",
      d: "Demo loops, swag programs, and gamified moments to draw foot traffic."
    }, {
      t: "Product Demonstrations",
      d: "Specialty demo staff for technical, food, beverage, and hardware product."
    }, {
      t: "Convention Brand Experiences",
      d: "Hospitality suites, side events, and after-party programming around the show."
    }],
    stats: [["180+", "shows / yr"], ["3.4x", "avg lead-volume lift"], ["12", "industry verticals"]],
    featured: {
      brand: "TOTAL WIRELESS",
      line: "Show-floor takeover. 600+ qualified leads in 3 days.",
      img: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg"
    },
    adjacent: ["fabrication-builds", "event-staffing", "promotional-products"]
  },
  "promotional-products": {
    n: "07",
    accent: "#FF5A1F",
    label: "Promotional Products & Premiums",
    short: "Premiums",
    eyebrow: "MERCH // FULFILLMENT",
    tagline: "Swag worth keeping.",
    intro: "Branded merch, premium kits, custom apparel, and event giveaways — sourced, decorated, kitted, and fulfilled. We design what consumers actually take home, then we ship it.",
    hero: window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg",
    sub: [{
      t: "Branded Merchandise",
      d: "Apparel, drinkware, accessories — sourced, sampled, decorated to spec."
    }, {
      t: "Giveaway Items",
      d: "On-budget, on-brand event giveaways at any scale."
    }, {
      t: "Premium Fulfillment",
      d: "VIP kits, influencer mailers, employee onboarding boxes — kitted and shipped."
    }, {
      t: "Swag Kits",
      d: "Curated multi-piece kits, kitted in our warehouse, drop-shipped to recipients."
    }, {
      t: "Event Giveaways",
      d: "Mass-distribution event premiums, regulatory-compliant for any category."
    }, {
      t: "Custom Apparel",
      d: "Cut-and-sew, all-over-print, embroidery, screenprint — domestic and overseas."
    }],
    stats: [["350K+", "units shipped / yr"], ["1,200+", "SKUs sourced"], ["72hr", "rush kitting"]],
    featured: {
      brand: "DUDE WIPES",
      line: "VIP kits drop-shipped to 800 retail buyers in 10 days.",
      img: window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg"
    },
    adjacent: ["trade-shows", "experiential-marketing", "event-staffing"]
  }
};
Object.assign(window, {
  SERVICES_DATA
});

/* ============================================================
   EXTRAS: pov / comparison / industries / proof / seoBlock
   Merged into SERVICES_DATA below.
   ============================================================ */
const SERVICE_EXTRAS = {
  "experiential-marketing": {
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["Festival is in 6 weeks and you don't have a footprint locked", "Your last \u201Cactivation\u201D was a tent with a logo and a Bluetooth speaker", "The recap deck from the last tour still hasn't landed", "Paying four different vendors to run one moment", "Brand team's asking what trial conversion was — you don't have it", "Permits, build, staff, recap — somehow all on you", "The talent buyer wants firm staffing numbers by Friday", "Your CMO just asked for a 12-city plan by Monday"]
    },
    pov: {
      lead: "Festivals don't sell brands.",
      body: "People do — when the brand stops feeling like marketing. Our job is to design the moment, then disappear inside it.",
      marquee: ["IF YOU'RE READING THIS", "YOU'VE GOT A FESTIVAL IN 6 WEEKS", "AND NO ACTIVATION PLAN", "YES — WE CAN HELP", "PERMITS · BUILD · STAFF · RECAP", "ONE PO"]
    },
    comparison: [["Rent a footprint. Hand out swag. Post a recap deck.", "Engineer the moment so attendees pull out their phone — unprompted."], ["Sub the build. Sub the staff. Sub the recap. Three vendors, one bill.", "12K sq ft build shop. 42K ambassadors. One platform. One PO."], ["Trust the venue's attendance estimate.", "Spark-tracked dwell, samples, leads, and trial→purchase — same day."], ["Recap deck lands six weeks after the event.", "Live dashboard from hour one. Final recap inside ten days."]],
    industries: ["CPG", "Beverage", "Alcohol & Spirits", "Beauty", "Pet", "Frozen", "Supplements", "Snacks", "Tech & DTC", "Hospitality", "Cannabis", "Automotive"],
    proof: {
      logos: ["LIQUID DEATH", "WHITE CLAW", "MARC ANTHONY", "MAS+", "GLENDALOUGH", "SMALLS SLIDERS"],
      note: "Brands we've put in front of consumers in person."
    },
    seoBlock: {
      eyebrow: "experiential marketing — the deep dive",
      head: "Built for brands who know an impression isn't the same as a memory.",
      paras: ["Ignite is a national <strong>experiential marketing agency</strong> built for CPG and consumer brands that need trial, recall, and word-of-mouth at the same time. <strong>Festival activations</strong>, <strong>brand activations</strong>, <strong>pop-up retail</strong>, <strong>immersive installations</strong>, <strong>campus tours</strong> — designed in-house, built in our 12,000 sq ft shop, staffed by our 42,000-person ambassador roster, measured by Spark.", "Most <strong>experiential agencies</strong> stop at the deck. We start where they finish: routing, permitting, fabrication, staffing, on-site management, GPS-verified dwell, real-time photo capture, and same-day recap. One PO, one platform, every market. That's why brands like Liquid Death, White Claw, and Marc Anthony run national experiential programs with us instead of three different vendors.", "If you're scoping a <strong>festival sponsorship activation</strong>, a <strong>consumer pop-up</strong>, a <strong>brand experience tour</strong>, or a <strong>retail launch event</strong> — we've run it, in every major US market, in every category from frozen food to fine spirits. Brief us once and we'll quote the whole thing."],
      chips: ["Experiential marketing agency", "Festival activations", "Pop-up activations", "Brand activations", "Immersive installations", "CPG experiential", "Festival sponsorship", "Consumer activation", "Brand experience tour", "Retail launch event"]
    }
  },
  "mobile-tours": {
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["You wrapped a truck and don't know where to send it", "30 cities in 60 days and the route is still a Google Sheet", "The driver from last tour is ghosting your DMs", "You can't tell investors how many samples shipped on Tuesday", "DOT compliance is a phrase you've started Googling at 11pm", "Permits in 12 markets and you've pulled zero of them", "The recap is \u201Cwe drove a lot of miles\u201D — that's not measurable", "Vehicle showed up to the activation late. Again."]
    },
    pov: {
      lead: "Mobile is media — not a vehicle.",
      body: "A wrapped truck without a route and a sampling plan is just a parking-lot photo. We route it like a media buy and measure it like one.",
      marquee: ["IF YOU'RE READING THIS", "YOU'VE GOT A TRUCK IDEA", "AND A 30-CITY DEADLINE", "YES — WE CAN HELP", "BUILD · DRIVE · STAFF · RECAP", "DOT-COMPLIANT"]
    },
    comparison: [["Wrap a vehicle. Drive it around. Post a few photos.", "Route it like a media plan — GPS, day-parts, DMAs, sample counts."], ["Hire a driver who isn't trained on the brand.", "Tour managers and ambassadors trained on script, product, and recap."], ["Recap = 'we drove X miles.'", "Recap = impressions, dwell, samples, leads, and trial conversion by stop."], ["Sub the vehicle from a fleet you've never seen.", "Six in-house vehicle classes. Wrapped, fitted, and dispatched by our team."]],
    industries: ["CPG", "Beverage", "Alcohol", "Beauty", "Pet", "Frozen", "QSR", "Telecom", "Tech & DTC", "Hospitality", "Auto", "Healthcare"],
    proof: {
      logos: ["MAS+", "WHITE CLAW", "DUDE WIPES", "TOTAL WIRELESS", "PRESSREADER", "KRISPY KRUNCHY"],
      note: "National mobile tours we've routed, staffed, and recapped."
    },
    seoBlock: {
      eyebrow: "mobile marketing tours — the deep dive",
      head: "Routed like a media buy. Measured like one too.",
      paras: ["Ignite operates national <strong>mobile marketing tours</strong> for CPG and consumer brands across all 50 states. <strong>Ad trucks</strong>, <strong>mobile billboards</strong>, <strong>sprinter van activations</strong>, <strong>branded bikes</strong>, <strong>sampling tours</strong>, <strong>roadshows</strong>, and <strong>transit takeovers</strong> — six in-house vehicle classes, routed against your media plan, measured against your KPIs.", "A wrapped vehicle isn't a campaign. Every Ignite mobile tour is built around the same three layers: a GPS-tracked route engineered against DMA and day-part data, on-the-ground sampling or experiential execution at every stop, and Spark dashboards that give you impressions, dwell, sample counts, leads, and trial-to-purchase data by market — same day.", "Multi-market sampling tours, retail co-op routes, festival circuit support, college campus tours, B2B trade-show roadshows — we handle DOT compliance, permitting, driver staffing, hotel and per-diem logistics, and city-by-city routing in-house. National coverage, one PO."],
      chips: ["Mobile marketing tour", "Ad truck advertising", "Mobile billboards", "Sprinter van activations", "Sampling tour", "Roadshow agency", "Transit takeover", "Branded bike fleet", "National tour management", "CPG mobile tour"]
    }
  },
  "fabrication-builds": {
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["Your last fab vendor ghosted between approval and load-in", "The render looked great. Reality didn't.", "Booth ships in 9 days and the crate hasn't left", "You need it to set in 90 minutes — they quoted 6 hours", "\u201CModular\u201D turned out to mean \u201Cwe build a new one each time\u201D", "One-off build for a 40-stop tour. You see the problem.", "Custom quote came back at 3× last year", "Strike crew didn't show. Venue is already invoicing overtime."]
    },
    pov: {
      lead: "Renderings don't load in.",
      body: "Most agencies design and sub the build. We design it knowing exactly how it'll set in 90 minutes — because we'll be the ones setting it.",
      marquee: ["IF YOU'RE READING THIS", "YOUR LAST FAB VENDOR GHOSTED", "OR LOAD-IN WAS A DISASTER", "YES — WE CAN HELP", "DESIGN · WELD · INSTALL · STRIKE", "12,000 SQ FT IN-HOUSE"]
    },
    comparison: [["Design it. Sub the fab. Pray it ships.", "Designed and welded in the same building. CAD-to-load-out, one team."], ["Stock kit reskinned for every client.", "One-off footprints engineered around the brand idea."], ["Single-use builds that hit a landfill after one event.", "Modular, road-tested builds engineered for 30+ stop tours."], ["Install crew you've never met.", "Our crew built it. Our crew installs it. Same hands."]],
    industries: ["CPG", "Beverage", "Alcohol", "Tech", "Hospitality", "Festivals", "B2B Trade Shows", "Retail Pop-Up", "Beauty", "Automotive"],
    proof: {
      logos: ["LIQUID DEATH", "WHITE CLAW", "DUDE WIPES", "MAS+", "SMALLS SLIDERS", "GLENDALOUGH"],
      note: "Builds shipped, set, and struck on our crew."
    },
    seoBlock: {
      eyebrow: "fabrication & builds — the deep dive",
      head: "12,000 sq ft of welders, painters, carpenters, and vinyl.",
      paras: ["Ignite is a full-service <strong>event fabrication shop</strong> and <strong>custom build studio</strong> for experiential, retail, and trade show programs. In-house <strong>carpentry, metalwork, paint, vinyl wrap, and electrical</strong> — 12,000 square feet of production space, no sub-shops, no surprises.", "We design and fabricate <strong>custom event booths</strong>, <strong>scenic fabrication</strong>, <strong>pop-up retail builds</strong>, <strong>modular activations</strong>, <strong>touring builds</strong>, <strong>interactive displays</strong>, <strong>fabricated photo ops</strong>, and <strong>branded POS displays</strong>. From an 8-foot photo wall to a 40-foot immersive set, from a one-off store opening to a 40+ stop national tour.", "Modular and tour-ready by default. Builds engineered to ship in standard road cases, set in under 90 minutes, scale from 10×10 to 40×60, and survive 30+ load-ins. Strike fast, refurb on return, hit the next market clean."],
      chips: ["Event fabrication shop", "Custom event booth", "Scenic fabrication", "Pop-up retail build", "Modular trade show booth", "Touring build", "Fabricated photo op", "Branded POS display", "Interactive display", "Custom build agency"]
    }
  },
  "event-staffing": {
    heroPos: "center 55%",
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["200 ambassadors. 12 markets. Next Tuesday.", "The roster you used last year keeps no-call no-showing", "\u201CTIPS-certified\u201D turned out to mean \u201Cwe'll check\u201D", "Three staffing vendors. Three invoice formats.", "Same-day backfill is a phrase, not a service, at your current vendor", "The paper sign-in sheet that never makes it back", "Brand training was \u201Cread this PDF on the way\u201D", "Photo verification is just a group text on someone's phone"]
    },
    pov: {
      lead: "42,000 ambassadors. 50 states.",
      body: "Most staffing agencies have a database. We have a roster — vetted, trained, brand-paired, and live-managed by the platform you'll log into every shift.",
      marquee: ["IF YOU'RE READING THIS", "YOU NEED 200 PEOPLE NEXT WEEK", "IN 12 MARKETS", "YES — WE CAN HELP", "42K ROSTER · 50 STATES", "48HR RUSH"]
    },
    comparison: [["Pull names from a job board.", "42K vetted roster, brand-paired, pre-trained, rated on every shift."], ["Paper sign-in sheets.", "GPS check-in/out, photo verification, live shift dashboard via Spark."], ["Hope they show up.", "Same-day backfill from local depth in every major and secondary market."], ["Generic talking points.", "Pre-shift brand training pushed to every ambassador's phone."]],
    industries: ["CPG", "Beverage", "Alcohol & Spirits", "Beauty", "Pet", "Frozen", "QSR", "Telecom", "Tech", "Hospitality", "Auto", "B2B"],
    proof: {
      logos: ["WHITE CLAW", "LIQUID DEATH", "MAS+", "TOTAL WIRELESS", "MARC ANTHONY", "DUDE WIPES"],
      note: "Brands run on our staff every week."
    },
    seoBlock: {
      eyebrow: "event staffing — the deep dive",
      head: "A brand ambassador agency that operates like a platform.",
      paras: ["Ignite is a national <strong>event staffing agency</strong> and <strong>brand ambassador agency</strong> with 42,000+ vetted ambassadors across all 50 states. <strong>Brand ambassadors</strong>, <strong>street teams</strong>, <strong>product specialists</strong>, <strong>promo models</strong>, <strong>registration staff</strong>, <strong>tour managers</strong>, <strong>team leads</strong>, <strong>bilingual staffing</strong>, and <strong>hospitality staff</strong> — every category, every market, one platform.", "Speed is the difference. Standard staffing turns in 7-10 days; rush turns in 48 hours. We've filled 200+ shifts across 12 markets in under 24 hours when a brand needed to react. Same-day backfill on any no-show, because the depth is real in every market — not just New York and LA.", "Compliance is built in. TIPS-certified for alcohol, food handler certified for F&B, state-by-state alcohol regulatory coverage, OSHA-trained for industrial. Every shift logged, photo-verified, time-stamped, and recap-ready inside Spark."],
      chips: ["Event staffing agency", "Brand ambassador agency", "Promotional staffing", "Street team hire", "TIPS-certified bartenders", "Bilingual brand ambassadors", "Trade show staffing", "Retail demo staffing", "Tour manager hire", "National staffing roster"]
    }
  },
  "product-sampling": {
    heroPos: "center 22%",
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["Velocity is flat at the stores that actually matter", "Last sampling recap was a photo collage on Dropbox", "Your MDF claim got rejected — again", "Demo staff who couldn't pronounce the product", "400 samples handed out, zero trial data", "Co-op program approved and already behind on activation", "Buyer's asking for proof of activation by close of week", "Your scan-back report is due and the photos never came in"]
    },
    pov: {
      lead: "Sampling isn't a foot-traffic exercise.",
      body: "It's a measurement game. Sample counts that don't tie to trial, conversion, and same-store velocity are theater. We run the lab.",
      marquee: ["IF YOU'RE READING THIS", "YOUR VELOCITY IS FLAT", "AT THE STORES THAT MATTER", "YES — WE CAN HELP", "IN-STORE · ON-PREMISE · RETAIL DEMO", "MDF & CO-OP CLAIM-READY"]
    },
    comparison: [["Hand out samples. Count empty boxes.", "GPS-verified counts. Per-SKU velocity. Trial→purchase conversion."], ["Recap deck = a photo collage.", "Per-market dashboards delivered same day inside Spark."], ["Demo staff who read off a card.", "Brand-trained specialists with food handler, TIPS, and category certs."], ["Co-op claims that bounce.", "Claim-ready reporting formatted for retailer MDF and scan-back portals."]],
    industries: ["CPG", "Beverage", "Alcohol", "Beauty", "Pet", "Frozen", "Supplements", "Snacks", "Frozen Foods", "Better-For-You", "Functional Beverage", "Adult Products"],
    proof: {
      logos: ["WHITE CLAW", "PETSMART", "TOTAL WIRELESS", "MAS+", "KRISPY KRUNCHY", "MARC ANTHONY"],
      note: "Sampling programs run in-store, on-premise, retail demo, street, campus, event."
    }
  },
  "trade-shows": {
    heroPos: "center 32%",
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["Booth goes up in 11 days and no one's booked meetings", "Your reps learned the demo on the plane", "Stack of business cards from last show is still on your desk", "\u201CWe got leads\u201D — how many? Which tier? Crickets.", "The booth is fine. The crew running it isn't.", "Same show, third year, no compounding lift", "Lead list won't be in your CRM until next month", "VP wants to know the dollar pipeline by Sunday"]
    },
    pov: {
      lead: "Booths don't book meetings.",
      body: "People do. The booth is just the table. We staff it with people who can qualify, demo, and hand a clean lead to your AE before the badge even gets scanned twice.",
      marquee: ["IF YOU'RE READING THIS", "YOUR BOOTH GOES UP IN 11 DAYS", "AND NO ONE'S BOOKED MEETINGS", "YES — WE CAN HELP", "BOOTH · STAFF · LEAD CAP · RECAP", "LEADS IN CRM SAME-DAY"]
    },
    comparison: [["Reps who learn the product on day one.", "Pre-show training, qualifying questions, role-played on Google Meet."], ["Stack of business cards.", "Badge scan → live CRM. Lead in your AE's inbox before close of day."], ["Hope reps show up presentable.", "Day-of brand check-in. Wardrobe spec. Same crew every day of the show."], ["Recap = 'we got X leads.'", "Recap = leads, qualifying tier, demo loops run, dwell, and dollar pipeline."]],
    industries: ["Tech / SaaS", "CPG", "Beauty", "Automotive", "Hospitality", "Healthcare", "B2B / Industrial", "Telecom", "Fintech", "Travel"],
    proof: {
      logos: ["PRESSREADER", "TOTAL WIRELESS", "WHITE CLAW", "MAS+", "DUDE WIPES", "GLENDALOUGH"],
      note: "Booths we've staffed, fabricated, or fully owned."
    },
    seoBlock: {
      eyebrow: "trade show support — the deep dive",
      head: "A trade show staffing agency that ships leads to your CRM same day.",
      paras: ["Ignite is a national <strong>trade show staffing agency</strong> running <strong>booth staffing</strong>, <strong>lead capture teams</strong>, <strong>trade show management</strong>, <strong>product demonstrations</strong>, and full <strong>convention brand experiences</strong> for B2B, CPG, tech, and hospitality brands. We staff individual shows or own multi-show annual programs end-to-end.", "Lead capture is the work. Badge scan, qualifying conversation, custom CRM workflows, live Spark dashboards — leads land in your AE's inbox same day with qualifying tier, demo loops run, and dwell data. No more paper, no more 'follow up later.'", "Same crew, every show. Brands run year-long programs with us specifically because consistent talent learns the product, the audience, and the story — and that's why the lead volume compounds 3.4× by show three."],
      chips: ["Trade show staffing agency", "Booth staffing", "Trade show management", "Lead capture team", "B2B activation agency", "Convention staffing", "Product demonstration staff", "CES booth staffing", "NRF booth staffing", "Trade show recap"]
    }
  },
  "promotional-products": {
    pains: {
      opener: "If any of this sounds familiar…",
      sinker: "Yes — we can help with that.",
      items: ["The keynote is in 3 weeks and the swag isn't ordered", "VIP drop date moved up and your warehouse hates you", "Last batch felt cheap and the team noticed", "Influencer seed list ballooned to 400 — you have 80 units", "Apparel sample rounds are running 6 weeks long", "The \u2018final\u2019 artwork is already wrong", "You've collected six different vendor quotes for one kit", "Your last drop went to a UPS Store, not a real warehouse"]
    },
    pov: {
      lead: "Swag worth keeping.",
      body: "Most premiums end up in a drawer or a landfill. We design merch consumers actually wear, drink from, and post — then we kit it and ship it.",
      marquee: ["IF YOU'RE READING THIS", "YOU'VE GOT A KEYNOTE IN 3 WEEKS", "AND THE SWAG ISN'T ORDERED", "YES — WE CAN HELP", "DESIGN · SOURCE · KIT · SHIP", "72HR RUSH KITTING"]
    },
    comparison: [["Catalog SKUs slapped with a logo.", "Original design. Sample rounds. Brand-aligned construction."], ["Pallet shows up at a warehouse you don't own.", "Kitted in our warehouse. Drop-shipped to recipients or events."], ["MOQ panic for niche programs.", "Aggregate across programs to hit price breaks on low-volume needs."], ["6-week lead time minimum.", "Rush 7-10 days on most apparel and drinkware. 72-hour kitting."]],
    industries: ["CPG", "Beverage", "Alcohol", "Beauty", "Pet", "Tech & DTC", "Hospitality", "Influencer Seeding", "B2B Gifting", "Festivals"],
    proof: {
      logos: ["DUDE WIPES", "WHITE CLAW", "GLENDALOUGH", "MARC ANTHONY", "SMALLS SLIDERS", "LIQUID DEATH"],
      note: "Premium kits, swag drops, custom apparel, influencer seeds."
    },
    seoBlock: {
      eyebrow: "promotional products — the deep dive",
      head: "Custom merch and premium kitting under one roof.",
      paras: ["Ignite is a <strong>promotional products agency</strong> running <strong>branded merchandise</strong>, <strong>custom apparel</strong>, <strong>premium gifting</strong>, <strong>swag kits</strong>, <strong>event giveaways</strong>, and <strong>premium fulfillment</strong> for CPG, beverage, and consumer brands. In-house design, sourcing, decoration, kitting, and drop-ship fulfillment — one supplier, one PO.", "<strong>Custom apparel</strong> across cut-and-sew, all-over-print, embroidery, and screenprint — domestic and overseas sourcing depending on lead time and MOQ. Custom drinkware, accessories, hard goods, and on-trend lifestyle items sampled before commit.", "<strong>VIP kits</strong>, <strong>influencer mailers</strong>, <strong>employee onboarding boxes</strong>, <strong>retail buyer drops</strong>, <strong>event ambassador kits</strong> — kitted in our warehouse, drop-shipped to recipients with branded inserts. 350,000+ units a year, 72-hour rush kitting available."],
      chips: ["Promotional products agency", "Branded merchandise", "Custom apparel", "Swag kits", "VIP gifting", "Influencer mailer", "Premium fulfillment", "Custom drinkware", "Trade show giveaways", "Drop-ship kitting"]
    }
  }
};
for (const k of Object.keys(SERVICE_EXTRAS)) {
  if (SERVICES_DATA[k]) Object.assign(SERVICES_DATA[k], SERVICE_EXTRAS[k]);
}

/* ============================================================
   MARKETS — every US market we run in.
   ============================================================ */
const SERVICE_MARKETS = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Dallas–Fort Worth, TX", "Austin, TX", "San Antonio, TX", "Phoenix, AZ", "Philadelphia, PA", "Boston, MA", "Washington, DC", "Atlanta, GA", "Miami, FL", "Orlando, FL", "Tampa, FL", "Jacksonville, FL", "Charlotte, NC", "Raleigh–Durham, NC", "Nashville, TN", "Memphis, TN", "New Orleans, LA", "Birmingham, AL", "Louisville, KY", "Indianapolis, IN", "Columbus, OH", "Cleveland, OH", "Cincinnati, OH", "Detroit, MI", "Pittsburgh, PA", "Buffalo, NY", "Minneapolis–St. Paul, MN", "Milwaukee, WI", "Madison, WI", "St. Louis, MO", "Kansas City, MO", "Omaha, NE", "Des Moines, IA", "Oklahoma City, OK", "Tulsa, OK", "Little Rock, AR", "Denver, CO", "Colorado Springs, CO", "Salt Lake City, UT", "Boise, ID", "Albuquerque, NM", "Las Vegas, NV", "Reno, NV", "Tucson, AZ", "San Diego, CA", "Orange County, CA", "Riverside–San Bernardino, CA", "Sacramento, CA", "San Francisco, CA", "San Jose, CA", "Fresno, CA", "Portland, OR", "Seattle, WA", "Spokane, WA", "Anchorage, AK", "Honolulu, HI", "Hartford, CT", "Providence, RI", "Burlington, VT", "Portland, ME", "Manchester, NH", "Albany, NY", "Rochester, NY", "Syracuse, NY", "Richmond, VA", "Norfolk–Virginia Beach, VA", "Greensboro, NC", "Greenville, SC", "Columbia, SC", "Charleston, SC", "Savannah, GA", "Jackson, MS", "Baton Rouge, LA", "El Paso, TX", "McAllen, TX", "Corpus Christi, TX"];
window.SERVICE_MARKETS = SERVICE_MARKETS;

/* __FAQS_INJECTED__ */
const SERVICE_FAQS = {
  "experiential-marketing": [["What is experiential marketing?", "Experiential marketing creates in-person, immersive brand experiences — festivals, pop-ups, installations, sampling, demos — that put consumers physically inside the brand. It drives trial, recall, and word-of-mouth at a level digital can't match."], ["How much does an experiential campaign cost?", "Programs range from $25K single-market pop-ups to $5M+ multi-market festival tours. Most CPG experiential programs run $75K–$750K depending on footprint, market count, fabrication, and staffing duration."], ["What's handled in-house?", "Strategy, creative, fabrication (12K sq ft build shop), staffing (42K+ ambassadors), logistics, on-site management, measurement, and recap. One roster, one platform, every market."], ["How fast can you launch?", "We've stood up market-ready activations in 14 days. Standard lead time is 6–10 weeks; rush staffing turns in 48 hours."], ["Do you operate in all 50 states?", "Yes. National coverage with a 42,000-person ambassador roster and 50-state production capability."]],
  "mobile-tours": [["What is a mobile marketing tour?", "A multi-market activation using branded vehicles — ad trucks, sprinter vans, bikes, food carts — to deliver brand experiences and sampling across cities on a routed schedule. Compresses national reach into a few weeks of high-density execution."], ["How are mobile tours tracked?", "GPS-verified routing, day-parted impression counts, and Spark dashboard reporting on stops, samples, leads captured, and dwell time. You see numbers the same day."], ["What vehicle types do you operate?", "Six classes: LED ad trucks, vinyl-wrap trucks, 3D-wrap trucks, sprinter vans, pedicab/e-bike fleets, food-cart bikes. Custom builds available."], ["How long does a tour run?", "From 2-week single-market activations to 12-month national rollouts. Most CPG tours run 4–12 weeks across 6–20 markets."], ["Do you handle permits and routing?", "Yes — permitting, DOT compliance, driver staffing, hotel/per-diem logistics, and city-by-city routing all in-house."]],
  "fabrication-builds": [["Do you fabricate in-house?", "Yes — 12,000 sq ft build shop, in-house carpentry, metalwork, paint, vinyl, and electrical. Design, fabricate, ship, install, strike — one team."], ["What scales of build do you do?", "From 8-foot photo-ops to 40-foot immersive sets. Single-event one-offs through 40+ touring builds simultaneously in-market."], ["Can you build modular/touring activations?", "Yes. Reconfigurable footprints engineered to ship in standard cases, set in under 90 minutes, scale from 10×10 to 40×60."], ["Do you handle install and strike?", "Full-service — fabrication, transport, install crew, on-site supervision, strike, and return-to-shop refurb."], ["What categories do you build for?", "CPG (Liquid Death, White Claw), tech, hospitality, retail pop-ups, festival sponsors, and B2B trade show booths."]],
  "event-staffing": [["How large is your ambassador roster?", "42,000+ vetted brand ambassadors across all 50 states, with depth in every major and secondary market."], ["How fast is rush staffing?", "48-hour turnaround. We've filled 200+ shifts across 12 markets in under 24 hours."], ["Are ambassadors brand-trained?", "Yes — pre-shift brand training, talking points, product handling, compliance certs (TIPS for alcohol, food handler). Spark delivers training to every ambassador's phone."], ["How are shifts verified?", "GPS check-in/check-out, photo verification, time-stamped sample counts, and live shift dashboard."], ["Do you have bilingual staff?", "Yes — Spanish, Mandarin, French, Korean, and more. Vetted at hire, requestable per shift."]],
  "product-sampling": [["How do you measure sampling ROI?", "GPS-verified counts, per-SKU velocity, trial-to-purchase conversion, and post-sampling intercept research. Spark delivers per-market data same-day."], ["What channels do you sample in?", "Grocery, mass, c-store, natural, on-premise, college campus, street, festivals, sporting events, and B2B trade shows."], ["Do you sample alcohol and regulated categories?", "Yes. TIPS-certified staff, state-by-state alcohol compliance, on/off-premise channels. Food handler certs for all F&B."], ["Do you run retail co-op / MDF-funded programs?", "Yes — we're a preferred event marketing partner for national co-op programs (Total Wireless: 300+ retail locations across 9 Texas markets). We handle creative, staffing, logistics, and claim-ready reporting your retail partner can submit against MDF or scan-back budgets."], ["What's typical conversion?", "20%+ trial-to-purchase across our CPG sampling programs. Top-quartile programs hit 28–34% on category-fit demos."], ["How fast is data turnaround?", "Same-day via Spark. Sample counts, photos, lead capture, dashboards within hours of shift completion."]],
  "trade-shows": [["Do you staff individual shows or full programs?", "Both. Single-show booth staffing through full multi-show annual programs with consistent talent."], ["How are leads captured?", "Badge-scan, lead-capture apps, custom CRM integrations, live Spark dashboards. Leads land in your CRM same-day."], ["Do you handle international shows?", "US and Canada full-coverage. International by partner network."], ["Can you fully run our floor?", "Yes — pre-show creative, booth design/fab, staffing, lead capture, demo execution, and post-show recap + CRM handoff."], ["What categories do you cover?", "CPG, tech, automotive, hospitality, healthcare, beauty, and B2B/industrial."]],
  "promotional-products": [["What do you source?", "Custom apparel (tees, hats, hoodies), drinkware, totes, stickers, koozies, custom POS, premium gifting, on-trend lifestyle items."], ["Do you kit and fulfill?", "Yes — full kitting bench, warehousing, ship-to-event logistics, ambassador kit packs, and influencer seeding."], ["What are minimum quantities?", "Most items run 100-piece minimums. We aggregate across programs to hit price breaks on lower-volume needs."], ["Can you design the merch?", "Yes — in-house design team with apparel, packaging, and POS specialists."], ["How long is turnaround?", "Standard 3–4 weeks from approval. Rush 7–10 days available on most apparel and drinkware."]]
};
if (typeof SERVICES_DATA === "object") {
  for (const k of Object.keys(SERVICE_FAQS)) {
    if (SERVICES_DATA[k]) SERVICES_DATA[k].faqs = SERVICE_FAQS[k];
  }
}