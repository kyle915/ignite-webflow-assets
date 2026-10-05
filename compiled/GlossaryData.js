(function(){if (typeof window !== "undefined" && window.GLOSSARY_TERMS) return;
/* global React */
/* ============================================================
   GLOSSARY DATA — short, definition-first entries for SEO.
   Each entry feeds /glossary/<slug>.
   ============================================================ */

const GLOSSARY_TERMS = {
  "tabc-certification": {
    slug: "tabc-certification",
    term: "TABC Certification",
    short: "Texas alcohol training",
    definition: "TABC certification is a Texas Alcoholic Beverage Commission-approved training credential that authorizes a server, seller, or sampling ambassador to serve, sample, or distribute alcoholic beverages in Texas. Required for most on-premise pour roles and many off-premise alcohol sampling programs.",
    bullets: ["Mandatory for sampling and pouring alcohol in Texas in most jurisdictions.", "Issued by TABC-approved training providers; valid for two years.", "Includes ID verification protocols, intoxication signs, and refusal-of-service procedures.", "Provider cards are checked by venue management, often photographed before shift."],
    relatedIndustries: ["alcohol-spirits", "cpg-beverage"],
    relatedServices: ["event-staffing", "product-sampling"],
    relatedMarkets: ["austin", "dallas", "houston", "san-antonio"],
    faqs: [{
      q: "Do my brand ambassadors need TABC certification?",
      a: "If they're sampling, pouring, or selling any alcoholic beverage anywhere in Texas — yes, in nearly all cases. Some venue-controlled programs may not require it, but the safest default is to require it."
    }, {
      q: "How long does TABC certification last?",
      a: "Two years from the date of issue. We track expiry per ambassador in Spark and pre-flag re-certs before deployment."
    }]
  },
  "tips-certification": {
    slug: "tips-certification",
    term: "TIPS Certification",
    short: "Alcohol server training",
    definition: "TIPS (Training for Intervention ProcedureS) is a nationally-recognized alcohol server certification covering ID verification, intoxication assessment, and refusal-of-service protocols. Required by many states, venues, distributors, and brand programs for sampling alcohol.",
    bullets: ["Accepted in most U.S. states for alcohol service and sampling.", "Three-year validity; cards re-issued after re-training.", "Covers responsible-service techniques, age verification, and conflict resolution.", "Often required by liquor liability carriers as a coverage condition."],
    relatedIndustries: ["alcohol-spirits", "cpg-beverage"],
    relatedServices: ["event-staffing", "product-sampling"],
    relatedMarkets: ["new-york", "los-angeles", "chicago", "atlanta"],
    faqs: [{
      q: "Is TIPS the same as TABC?",
      a: "No. TIPS is a private, nationally-recognized certification. TABC is the Texas state regulator's specific certification. Most Texas programs require TABC; non-Texas programs often accept TIPS."
    }]
  },
  "rbs-certification": {
    slug: "rbs-certification",
    term: "RBS Certification",
    short: "California alcohol server training",
    definition: "RBS (Responsible Beverage Service) certification is California's state-mandated alcohol server training, required for any on-premise alcohol server in licensed venues. Issued by California ABC-approved training providers and tracked via the state's online portal.",
    bullets: ["Mandatory for all on-premise alcohol servers in California venues since July 2022.", "Issued by California ABC and tracked in the state's server database.", "Three-year validity; ABC re-checks roster periodically.", "Required for many off-premise alcohol sampling programs at California retail."],
    relatedIndustries: ["alcohol-spirits"],
    relatedServices: ["event-staffing", "product-sampling"],
    relatedMarkets: ["los-angeles", "san-francisco", "san-diego", "san-jose"],
    faqs: [{
      q: "Are TIPS or TABC cards accepted in California?",
      a: "Not for on-premise California venues — RBS is the state's required cert. Off-premise sampling rules vary by jurisdiction; we'll confirm before deployment."
    }]
  },
  "coi-event": {
    slug: "coi-event",
    term: "COI (Certificate of Insurance)",
    short: "Insurance verification document",
    definition: "A Certificate of Insurance (COI) is a document issued by an insurance carrier confirming an agency or vendor carries active general liability, liquor liability, vehicle, or other coverage required by a venue, distributor, or client. Standard prerequisite for any event activation.",
    bullets: ["Names the venue, brand, or distributor as an Additional Insured for the program window.", "Most venues require $1M general liability minimum; some require $2M aggregate.", "Liquor liability is a separate rider on alcohol programs (typically $1M).", "Vehicle coverage required for mobile tours, ad trucks, and dealer events."],
    relatedIndustries: ["alcohol-spirits", "automotive", "sports-entertainment"],
    relatedServices: ["event-staffing", "experiential-marketing", "mobile-tours"],
    relatedMarkets: [],
    faqs: [{
      q: "How fast can you issue a COI?",
      a: "Standard turnaround is 24–48 hours. For rush programs, our carrier can issue COIs in 2–4 hours for an existing program structure."
    }, {
      q: "Can our venue be added as an Additional Insured?",
      a: "Yes. We add named Additional Insureds per venue, distributor, and brand on request, at no extra cost."
    }]
  },
  "experiential-marketing": {
    slug: "experiential-marketing",
    term: "Experiential Marketing",
    short: "In-person brand activation",
    definition: "Experiential marketing is the discipline of building face-to-face, real-world brand experiences for consumers — pop-ups, festival activations, sampling, mobile tours, and event programs. The goal is to drive trial, memory, and word-of-mouth at human scale, not just impressions.",
    bullets: ["Includes sampling, trial, demos, pop-ups, festival activations, and mobile tours.", "Measured by trial counts, conversion rate, dwell time, content capture, and earned media.", "Typically blends owned activations (brand house, booth) with rented placement (festival, sports).", "Often pairs with social/UGC strategy — the in-person moment is the content engine."],
    relatedIndustries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits", "lifestyle-beauty"],
    relatedServices: ["experiential-marketing", "product-sampling", "event-staffing"],
    relatedMarkets: ["new-york", "los-angeles", "austin", "miami", "chicago"],
    faqs: [{
      q: "What's the difference between experiential and event marketing?",
      a: "Event marketing focuses on the event itself (logistics, attendance, programming). Experiential is broader and includes any direct brand-to-consumer in-person moment — sampling, retail demos, mobile tours, festival pop-ups."
    }]
  },
  "brand-ambassador": {
    slug: "brand-ambassador",
    term: "Brand Ambassador",
    short: "Trained on-the-ground brand rep",
    definition: "A brand ambassador is a vetted, trained, badged consumer-facing representative who executes activation programs in-market on behalf of a brand. Differs from a generic event staffer in that an ambassador is briefed on the product, the message, the SKU, and the conversion play.",
    bullets: ["Background-checked, age-appropriate for the category (21+ for alcohol/cannabis).", "Briefed on the product, target consumer, and conversion ask before deployment.", "Carries category-required certifications (TIPS, TABC, RBS, ServSafe, food handler).", "Captured on Spark for performance — counts, photos, ambassador notes per shift."],
    relatedIndustries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits", "tech-saas"],
    relatedServices: ["event-staffing", "product-sampling", "experiential-marketing"],
    relatedMarkets: [],
    faqs: [{
      q: "How are brand ambassadors different from event staff?",
      a: "Ambassadors are trained on your brand specifically and own the conversion conversation. Generic event staff are deployed for headcount and venue support — they're not briefed on your product or trial play."
    }]
  },
  "field-marketing": {
    slug: "field-marketing",
    term: "Field Marketing",
    short: "In-market brand execution",
    definition: "Field marketing is the function (and discipline) responsible for executing brand programs in physical markets — sampling, retail demos, sponsorship activation, mobile tours, distributor education. It's the discipline that lives between brand strategy and consumer hands.",
    bullets: ["Owns market-by-market execution of brand programs.", "Coordinates with distributor partners, retail accounts, and venue operators.", "Measured on trial volume, conversion lift, retailer scan data, and distributor coverage.", "Often partners with experiential agencies for surge capacity and multi-market scale."],
    relatedIndustries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits"],
    relatedServices: ["event-staffing", "product-sampling", "experiential-marketing", "mobile-tours"],
    relatedMarkets: [],
    faqs: []
  },
  "co-op-program": {
    slug: "co-op-program",
    term: "Retail Co-Op Program",
    short: "Retailer-funded brand activation",
    definition: "A retail co-op program is a partnership where a brand and a retailer share the cost of an in-store activation — typically demos, sampling, or end-cap displays. Co-op dollars are negotiated quarterly or annually as part of the trade marketing budget.",
    bullets: ["Funded jointly by the brand and the retailer (typically 50/50 or vendor-funded).", "Common at grocery, mass, c-store, and specialty retail (Whole Foods, Target, Costco, GNC).", "Often paired with MDF (Market Development Funds) or scan-back arrangements.", "Measured by lift in scan data, basket size, and incremental velocity post-program."],
    relatedIndustries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits"],
    relatedServices: ["product-sampling", "event-staffing"],
    relatedMarkets: [],
    faqs: [{
      q: "Do you handle the retailer paperwork?",
      a: "Yes. We file the chain-specific demo permits, COIs, and co-op program documentation on your behalf and the retailer's."
    }]
  },
  "gps-verified-sampling": {
    slug: "gps-verified-sampling",
    term: "GPS-Verified Sampling",
    short: "Location-stamped trial counts",
    definition: "GPS-verified sampling is the practice of stamping each sample count and ambassador check-in with location data, so brand and finance teams can confirm activations happened where and when the program was scoped. Standard in modern field-marketing reporting.",
    bullets: ["Each shift's check-in is geo-tagged via mobile app (e.g., Spark).", "Sample counts are logged in real time, tied to the geo-pin.", "Eliminates 'felt good' recap reporting — every number has a location.", "Becomes audit-ready evidence for distributor and finance review."],
    relatedIndustries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits"],
    relatedServices: ["product-sampling", "event-staffing"],
    relatedMarkets: [],
    faqs: [{
      q: "Is GPS-verified sampling standard?",
      a: "It's becoming standard at agencies running through proprietary platforms. It's not yet standard across the industry — many vendors still report off paper sign-ins or estimates."
    }]
  },
  "trade-show-staffing": {
    slug: "trade-show-staffing",
    term: "Trade Show Staffing",
    short: "Booth crew + lead capture",
    definition: "Trade show staffing is the practice of deploying booth attendants, lead-capture specialists, demo leads, and hospitality staff for B2B trade shows and conferences. The crew's job is to qualify, capture, and hand off leads to sales without dropping context.",
    bullets: ["Includes booth attendants, demo specialists, captains, and hospitality leads.", "Often paired with badge-scan technology and qualifying-question scripts.", "Lead quality scrubbed end-of-day before CRM sync.", "Bilingual staff common for international shows (CES, MWC, Money 20/20)."],
    relatedIndustries: ["tech-saas", "automotive", "hospitality-travel", "health-wellness"],
    relatedServices: ["trade-shows", "event-staffing"],
    relatedMarkets: ["las-vegas", "new-york", "orlando", "chicago"],
    faqs: [{
      q: "How fast is the lead-handoff turnaround?",
      a: "End-of-day quality scrub by the captain; CRM sync (Salesforce, HubSpot, Outreach) the next morning. Not three weeks after the show like some agencies."
    }]
  },
  "product-sampling": {
    "slug": "product-sampling",
    "term": "Product Sampling",
    "short": "Trial in hand",
    "definition": "Product sampling is a marketing tactic where trained staff hand out free samples of a product so people can try it before they buy. It runs in stores, at events, on the street and at trade shows, and works best when every sample is counted and tied to a purchase or signup.",
    "bullets": ["Common formats: in-store demos, event sampling, street sampling and trade show sampling.", "Food and drink sampling often needs food-handler certified staff.", "Alcohol sampling needs state-certified staff, such as TIPS or TABC.", "The best programs track samples, conversions and cost per sample."],
    "relatedIndustries": ["alcohol-spirits", "cpg-beverage"],
    "relatedServices": ["product-sampling", "street-teams"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "What is the difference between sampling and a demo?",
      "a": "A demo usually means an in-store event with a product specialist explaining the product, while sampling can happen anywhere, including the street and events. Many retail programs combine both."
    }, {
      "q": "How do you measure product sampling?",
      "a": "Count samples, conversions and signups during the shift, then compare cost per sample and sales lift by store or market. Ignite logs every count in Spark."
    }]
  },
  "in-store-demo": {
    "slug": "in-store-demo",
    "term": "In-Store Demo",
    "short": "Retail demo",
    "definition": "An in-store demo is a scheduled event inside a retail store where a brand ambassador samples or demonstrates a product next to the shelf. The goal is to turn a passing shopper into a buyer, and to give the store and brand a measurable lift in sales.",
    "bullets": ["Scheduled with the retailer, and often with the distributor.", "Runs next to the product on shelf or on an endcap.", "Usually 3 to 6 hours, timed to peak store traffic.", "Reported with samples, sales and photos per store."],
    "relatedIndustries": ["cpg-beverage", "cpg-food-snack"],
    "relatedServices": ["product-sampling", "retail-demo-programs"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "How long is a typical in-store demo?",
      "a": "Most run 3 to 6 hours during the store's busiest window, often Friday through Sunday."
    }, {
      "q": "Who schedules in-store demos?",
      "a": "The agency schedules with the store and often the distributor. Ignite handles scheduling, staffing and the recap."
    }]
  },
  "street-team": {
    "slug": "street-team",
    "term": "Street Team",
    "short": "Guerrilla sampling",
    "definition": "A street team is a crew of brand ambassadors who promote a product in public spaces, such as busy sidewalks, outside venues or around events, by handing out samples, flyers or offers and starting conversations. Street teams are fast, mobile and built for high foot-traffic moments.",
    "bullets": ["Works busy corridors at peak hours.", "Can sample, hand out offers or capture signups.", "Some cities and venues require permits.", "Best results come from route planning and live hand-off counts."],
    "relatedIndustries": ["cpg-beverage"],
    "relatedServices": ["street-teams"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "Do street teams need permits?",
      "a": "Sometimes. Rules vary by city, neighborhood and public space, so routes should be planned around local permit rules."
    }, {
      "q": "How do you track a street team?",
      "a": "Ignite logs every hand-off with a timestamp and location in Spark, so you can see where samples landed by block."
    }]
  },
  "mobile-billboard": {
    "slug": "mobile-billboard",
    "term": "Mobile Billboard",
    "short": "Ad truck",
    "definition": "A mobile billboard is an advertising truck with large digital or printed panels that drives a planned route or parks in high-visibility spots, such as outside stores, venues or convention centers. Mobile billboards bring out-of-home advertising to the exact places your audience is.",
    "bullets": ["Digital LED trucks can rotate creative by location or time.", "Static trucks carry printed panels on three sides.", "Routes are planned with loops and hold points.", "Often paired with street teams or store events."],
    "relatedIndustries": ["cpg-beverage"],
    "relatedServices": ["ad-trucks"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "How much does a mobile billboard cost?",
      "a": "Ignite publishes starting-from daily truck rates by market. Rates vary by run length and dates, exclude the agency fee and are not final until quoted."
    }, {
      "q": "Can a mobile billboard park outside a venue?",
      "a": "Often, within local parking and route rules. Hold points are planned before the run."
    }]
  },
  "booth-staff": {
    "slug": "booth-staff",
    "term": "Booth Staff",
    "short": "Trade show booth staff",
    "definition": "Booth staff are the people who work a company's trade show booth: greeting visitors, qualifying them, running demos and capturing leads. Good booth staff are trained on the product before the show and led by a team lead on site.",
    "bullets": ["Roles include hosts, product specialists, demo leads and lead capture.", "Training before the show is what separates good crews.", "A team lead covers breaks, rotations and handoffs.", "Leads should be captured digitally and exported nightly."],
    "relatedIndustries": ["tech-saas"],
    "relatedServices": ["trade-shows"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "How many booth staff do I need?",
      "a": "It depends on booth size, demo stations and lead goals. A 10x10 usually needs two people per shift, and a 20x20 four to six at peak."
    }, {
      "q": "Should booth staff know the product?",
      "a": "Yes. Ignite trains crews hands-on before the show, and quotes training as its own line."
    }]
  },
  "lead-capture": {
    "slug": "lead-capture",
    "term": "Lead Capture",
    "short": "Event lead capture",
    "definition": "Lead capture is the process of collecting contact details and qualifying information from people a brand meets at an event or trade show, usually by scanning badges or filling in a digital form, and sending those leads to the sales team.",
    "bullets": ["Badge scanning, QR codes and digital forms are the main methods.", "Qualifying questions turn a scan into a sales lead.", "Leads should reach the CRM within 24 hours.", "Consent matters, especially at security and privacy events."],
    "relatedIndustries": ["tech-saas"],
    "relatedServices": ["trade-shows", "event-staffing"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "What is the best way to capture leads at a trade show?",
      "a": "Digital capture with two or three qualifying questions, exported to your CRM every night."
    }, {
      "q": "How fast should trade show leads be followed up?",
      "a": "Within 24 to 48 hours, while the conversation is still fresh."
    }]
  },
  "activation-recap": {
    "slug": "activation-recap",
    "term": "Activation Recap",
    "short": "Event recap report",
    "definition": "An activation recap is the report a field marketing agency delivers after an event or program, showing what happened: who worked, when, what was handed out or sold, photos, consumer feedback and results. The best recaps arrive within hours, not weeks.",
    "bullets": ["Includes check-in records, counts, photos and notes.", "Good recaps compare results across markets and shifts.", "Spark builds recaps automatically from shift data.", "Fast recaps let brands adjust a program mid-flight."],
    "relatedIndustries": ["cpg-beverage"],
    "relatedServices": ["event-reporting-recaps"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "How fast should an event recap arrive?",
      "a": "Within hours of the last shift. Ignite's Spark recaps are ready the same day."
    }, {
      "q": "What should an event recap include?",
      "a": "GPS check-ins, sample or sales counts, photos, consumer feedback and cost metrics like cost per sample."
    }]
  },
  "cost-per-sample": {
    "slug": "cost-per-sample",
    "term": "Cost Per Sample",
    "short": "Sampling efficiency metric",
    "definition": "Cost per sample is the total cost of a sampling program divided by the number of samples handed out. It is the simplest way to compare sampling programs across markets, venues and agencies.",
    "bullets": ["Include staffing, product, kits and travel in the total cost.", "Only count verified samples, not estimates.", "Compare cost per sample alongside conversion rate.", "Spark calculates cost per sample from live counts."],
    "relatedIndustries": ["cpg-beverage", "cpg-food-snack"],
    "relatedServices": ["product-sampling"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "How do you calculate cost per sample?",
      "a": "Divide the total program cost by the number of verified samples handed out."
    }, {
      "q": "Is a lower cost per sample always better?",
      "a": "Not always. A slightly higher cost per sample with better conversion can be the stronger program."
    }]
  },
  "field-marketing-agency": {
    "slug": "field-marketing-agency",
    "term": "Field Marketing Agency",
    "short": "Experiential execution partner",
    "definition": "A field marketing agency plans, staffs and runs in-person marketing programs for brands, such as sampling, retail demos, street teams, events and trade shows, and reports on the results. Some agencies only supply staff, while full-service agencies also handle strategy, logistics and reporting.",
    "bullets": ["Services usually include staffing, sampling, demos and events.", "Full-service agencies add logistics, fabrication and reporting.", "Look for proof of work, such as GPS-verified shifts.", "Local casting in your markets keeps travel costs down."],
    "relatedIndustries": ["cpg-beverage"],
    "relatedServices": ["field-marketing", "event-staffing"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "What does a field marketing agency do?",
      "a": "It plans, staffs and runs in-person programs like sampling, demos, street teams and events, then reports on results."
    }, {
      "q": "How is a field marketing agency different from a staffing agency?",
      "a": "A staffing agency supplies people. A field marketing agency also plans the program, trains the crew, runs it on site and reports results."
    }]
  },
  "bilingual-brand-ambassador": {
    "slug": "bilingual-brand-ambassador",
    "term": "Bilingual Brand Ambassador",
    "short": "Multilingual event staff",
    "definition": "A bilingual brand ambassador is a promotional staff member who can represent a brand fluently in two languages, most often English and Spanish in the U.S. Bilingual ambassadors are standard in markets like Miami, Los Angeles, Houston and San Antonio.",
    "bullets": ["Most common pairing in the U.S. is Spanish and English.", "Key for multicultural and Hispanic marketing programs.", "Creative and talking points should be adapted, not just translated.", "Ignite casts bilingual crews in every major market."],
    "relatedIndustries": ["cpg-beverage"],
    "relatedServices": ["bilingual-brand-ambassadors"],
    "relatedMarkets": ["las-vegas", "austin", "miami", "new-york"],
    "faqs": [{
      "q": "Where do brands need bilingual brand ambassadors most?",
      "a": "Markets like Miami, Los Angeles, Houston, San Antonio, Orlando and New York, and any program targeting Spanish-speaking shoppers."
    }, {
      "q": "Can you staff languages other than Spanish?",
      "a": "Yes, on request, depending on the market."
    }]
  }
};
const GLOSSARY_LIST = Object.values(GLOSSARY_TERMS);
Object.assign(window, {
  GLOSSARY_TERMS,
  GLOSSARY_LIST
});
})();
