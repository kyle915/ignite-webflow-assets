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
    hero: window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg",
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
    hero: window.__resources?.r_68962c56b0fda1a0e539fd60_WHITECLAW0B928F || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c56b0fda1a0e539fd60_WHITECLAW0B928F87_42CD_4C86_B4C3_E4F26F5A0393_6419694d-a383-4f11-88ed-9353557c7f12.jpg",
    sub: [{
      t: "In-Store Sampling",
      d: "Demo programs in grocery, mass, c-store, and natural channels."
    }, {
      t: "Retail Demo Programs",
      d: "Multi-week, multi-store demo rollouts with weekly velocity reporting."
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
    hero: window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png",
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