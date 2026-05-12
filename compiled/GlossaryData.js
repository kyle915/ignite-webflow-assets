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
  }
};
const GLOSSARY_LIST = Object.values(GLOSSARY_TERMS);
Object.assign(window, {
  GLOSSARY_TERMS,
  GLOSSARY_LIST
});
})();
