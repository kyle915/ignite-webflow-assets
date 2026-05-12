(function(){if (typeof window !== "undefined" && window.TOPIC_PILLARS) return;
/* global React */
/* ============================================================
   TOPIC PILLAR DATA — 5 hero topics linking into blog posts,
   services, industries, and markets. SEO topic-cluster anchors.
   ============================================================ */

const TOPIC_PILLARS = {
  "field-marketing": {
    slug: "field-marketing",
    title: "Field Marketing",
    short: "Field Marketing",
    accent: "#FF5A1F",
    eyebrow: "PILLAR · IN-MARKET EXECUTION",
    headline: "The discipline of getting your brand into a stranger's hand.",
    acc: "stranger's hand",
    lede: "Field marketing is the function — and the discipline — that translates brand strategy into in-market execution. Sampling, staffing, sponsorship activation, mobile tours, distributor education, retail demos. Everything that happens after the deck closes.",
    sections: [{
      h: "What 'field marketing' actually means",
      p: "Field marketing is the work that happens in places — not on screens, not in decks. It's the discipline that owns market-by-market activation: trial-driving demos, festival pop-ups, distributor coordination, retailer programs, sponsorship integrations. The success metric is rarely impressions. It's usually trial, conversion, or scan lift."
    }, {
      h: "How it differs from experiential",
      p: "Experiential is one tool inside field marketing. Field marketing also owns retail, distributor coordination, scan-back programs, and the unsexy logistics that make in-store demos actually move units. If experiential is the moment, field marketing is the discipline."
    }, {
      h: "What it looks like in practice",
      p: "A national CPG brand running 1,200 retail demos a quarter across 18 chains. A spirits brand staffing 80 distributor-led tastings a month. A tech company staffing 14 trade shows a year while running 30 city tour stops. Field marketing programs scale from a single market test to a national rollout — all coordinated through one in-house team or via an agency partner."
    }],
    services: ["product-sampling", "event-staffing", "experiential-marketing", "mobile-tours", "trade-shows"],
    industries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits"],
    cities: ["new-york", "los-angeles", "chicago", "dallas", "miami", "atlanta", "austin", "denver"],
    blogTags: ["field marketing", "staffing", "experiential ROI", "operations"]
  },
  "experiential-activation": {
    slug: "experiential-activation",
    title: "Experiential Activation",
    short: "Experiential",
    accent: "#FF5A1F",
    eyebrow: "PILLAR · IN-PERSON BRAND EXPERIENCE",
    headline: "Brand activation that earns the line, the photo, and the next purchase.",
    acc: "the next purchase",
    lede: "Experiential activation is in-person brand work — pop-ups, festival footprints, brand houses, sponsorship integrations, sampling moments. The point isn't to be photographed; the point is to drive trial, memory, and earned media that compound long after strike.",
    sections: [{
      h: "Pop-ups, festivals, sponsorship integrations",
      p: "From single-day pop-ups to multi-day festival activations — Coachella, SXSW, ACL, F1 — to full-season sponsorship integrations. Every activation needs the same three things: a permit and venue clearance pipeline, trained ambassadors, and a measurement plan."
    }, {
      h: "Why production discipline matters",
      p: "An experiential program lives or dies on logistics. The fabrication has to land. The crew has to be in market. The COIs have to be filed. The brand standard has to ship intact. Most agencies pitch the concept; few execute the production."
    }, {
      h: "Earned media is the second life",
      p: "A good activation generates content that runs for months after. Photo capture, creator partnership, social-ready footprint design, content release rights — all of it is set up before, not after, the activation."
    }],
    services: ["experiential-marketing", "event-staffing", "fabrication-builds", "product-sampling"],
    industries: ["cpg-beverage", "alcohol-spirits", "sports-entertainment", "lifestyle-beauty"],
    cities: ["new-york", "los-angeles", "miami", "austin", "las-vegas", "indio"],
    blogTags: ["experiential", "activation", "festival", "brand house"]
  },
  "brand-sampling": {
    slug: "brand-sampling",
    title: "Brand Sampling",
    short: "Sampling",
    accent: "#FF5A1F",
    eyebrow: "PILLAR · TRIAL-DRIVING ACTIVATION",
    headline: "Sampling that moves units, not just hands product to strangers.",
    acc: "moves units",
    lede: "Brand sampling is the most direct trial-driving tactic in field marketing: get the product into the right consumer's hands, in the right channel, with the right scripted conversion ask. When done right, it lifts retail scan data within the program week.",
    sections: [{
      h: "Retail sampling vs street vs event",
      p: "Three different plays, one underlying skill. Retail sampling is partnered with the chain (Whole Foods, Costco, GNC) and pays back in lift on the next scan period. Street sampling is route-based, audience-targeted, and cheaper per touch. Event sampling rides the audience of an adjacent draw (festival, sports, lifestyle event)."
    }, {
      h: "Why per-sample economics matter more than count",
      p: "5,000 samples in the wrong audience is a waste. 500 samples to the right buyer profile drives trial-to-purchase in the same week. The math that matters is conversion-per-sample, not raw count — and that requires GPS-verified data, not estimated count sheets."
    }, {
      h: "Compliance and certifications",
      p: "Different categories have different rules. Alcohol requires TIPS / TABC / RBS, age-gating, and pour limits. Food requires ServSafe and allergen SOPs. Cannabis requires 21+ ID verification and state-by-state legality checks. We don't fake any of them."
    }],
    services: ["product-sampling", "event-staffing", "experiential-marketing"],
    industries: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits", "cannabis", "health-wellness"],
    cities: ["new-york", "los-angeles", "chicago", "dallas", "miami", "atlanta"],
    blogTags: ["sampling", "trial", "retail demos", "CPG"]
  },
  "trade-show-staffing": {
    slug: "trade-show-staffing",
    title: "Trade Show Staffing",
    short: "Trade Shows",
    accent: "#FF5A1F",
    eyebrow: "PILLAR · BOOTH STAFFING + LEAD CAPTURE",
    headline: "Booth crew that closes the gap between badge scan and CRM.",
    acc: "badge scan and CRM",
    lede: "Trade show staffing is its own discipline — different from event staffing or sampling. The crew has to qualify a buyer, capture a lead with the right consent flow, and hand off to your sales org without dropping context.",
    sections: [{
      h: "What good booth staffing actually does",
      p: "Three things: filters traffic by qualification, captures leads with badge scan + scripted questions, and hands off to your SDRs the same day. Anything less is just headcount in a polo shirt."
    }, {
      h: "Lead-quality SLA and CRM handoff",
      p: "End-of-day scrub by the captain (drops the noise), CRM sync to Salesforce / HubSpot / Outreach in your preferred field map the next morning. Not three weeks after the show. Not an Excel attachment."
    }, {
      h: "Brand-house and hospitality programs",
      p: "Conferences increasingly aren't won at the booth — they're won at the off-site brand house, the partner dinner, the hospitality suite. We staff and produce those alongside the booth program with separate crew and a separate logistics track."
    }],
    services: ["trade-shows", "event-staffing", "experiential-marketing", "promotional-products"],
    industries: ["tech-saas", "automotive", "hospitality-travel", "health-wellness"],
    cities: ["las-vegas", "orlando", "chicago", "new-york", "san-francisco"],
    blogTags: ["trade show", "lead capture", "booth", "B2B"]
  },
  "mobile-tours": {
    slug: "mobile-tours",
    title: "Mobile Marketing Tours",
    short: "Mobile Tours",
    accent: "#FF5A1F",
    eyebrow: "PILLAR · MULTI-MARKET BRAND TOURS",
    headline: "A truck, a route, a story — built to move units in 10 markets, not just one.",
    acc: "10 markets",
    lede: "Mobile tours collapse months of single-market programs into a coordinated multi-stop rollout. Branded vehicles, festival-grade footprints, traveling crew. Built for brands that need national footprint without national overhead.",
    sections: [{
      h: "Route design is the strategy",
      p: "A good tour route hits high-density retail trade areas, lines up with seasonal demand windows, and threads through anchor events that subsidize the press. We design routes around your distributor footprint, your retail accounts, and your category's cultural calendar."
    }, {
      h: "Logistics: the unsexy half",
      p: "Truck maintenance, driver hours, permits per city, power and parking, vehicle wraps, generator fuel, cold-chain on consumables. The half no one pitches and everyone underestimates. We line-item it before quote."
    }, {
      h: "Per-stop conversion + tour-wide story",
      p: "Each market gets its own per-stop scoring (samples, leads, content). The tour gets its own narrative — content cuts that compound across stops and become the recap deck for next year's program."
    }],
    services: ["mobile-tours", "experiential-marketing", "fabrication-builds", "event-staffing", "product-sampling"],
    industries: ["cpg-beverage", "qsr-restaurant", "automotive", "cpg-food-snack"],
    cities: ["los-angeles", "austin", "nashville", "atlanta", "denver", "chicago", "new-york"],
    blogTags: ["mobile tour", "route", "national", "multi-market"]
  }
};
const TOPIC_LIST = Object.values(TOPIC_PILLARS);
Object.assign(window, {
  TOPIC_PILLARS,
  TOPIC_LIST
});
})();
