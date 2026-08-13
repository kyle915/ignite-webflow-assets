(function(){if (typeof window !== "undefined" && window.PILLAR_TOPICS) return;
/* global React */
/* ============================================================
   PILLAR DATA — 5 topic clusters for SEO topic-authority.
   Each pillar links to related services, industries, markets,
   case studies, and blog posts.
   ============================================================ */

const PILLAR_TOPICS = {
  "field-marketing": {
    slug: "field-marketing",
    title: "Field Marketing",
    eyebrow: "TOPIC CLUSTER · FIELD MARKETING",
    hero: "The complete field marketing playbook.",
    accGlow: "playbook",
    lede: "Field marketing is the discipline of executing brand programs in the physical world — sampling, retail demos, sponsorship activation, mobile tours, and distributor education. Everything we run sits inside it.",
    sections: [{
      h: "Services we run",
      kind: "services",
      items: ["experiential-marketing", "event-staffing", "product-sampling", "mobile-tours", "fabrication-builds", "trade-shows", "promotional-products"]
    }, {
      h: "Industries we cover",
      kind: "industries",
      items: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits", "tech-saas", "automotive", "lifestyle-beauty"]
    }, {
      h: "Glossary terms",
      kind: "glossary",
      items: ["field-marketing", "brand-ambassador", "experiential-marketing", "gps-verified-sampling"]
    }, {
      h: "Markets where we run programs",
      kind: "markets-top"
    }],
    relatedBlog: ["sampling-budget-cpg", "field-marketing-roi", "experiential-marketing-trends-2026"]
  },
  "experiential-marketing": {
    slug: "experiential-marketing",
    title: "Experiential Marketing",
    eyebrow: "TOPIC CLUSTER · EXPERIENTIAL",
    hero: "Face-to-face brand activation, end-to-end.",
    accGlow: "Face-to-face",
    lede: "Experiential marketing is the in-person discipline — pop-ups, festivals, sponsorship activations, brand houses, retail trial. The moment the consumer touches the product. Everything we build, staff, and measure here.",
    sections: [{
      h: "Services in this cluster",
      kind: "services",
      items: ["experiential-marketing", "fabrication-builds", "event-staffing", "mobile-tours"]
    }, {
      h: "Industries that activate",
      kind: "industries",
      items: ["cpg-beverage", "alcohol-spirits", "lifestyle-beauty", "sports-entertainment", "gaming-esports"]
    }, {
      h: "Glossary",
      kind: "glossary",
      items: ["experiential-marketing", "brand-ambassador", "co-op-program", "coi-event"]
    }, {
      h: "Top markets",
      kind: "markets-top"
    }],
    relatedBlog: ["experiential-marketing-trends-2026", "festival-activation-checklist"]
  },
  "brand-sampling": {
    slug: "brand-sampling",
    title: "Brand Sampling",
    eyebrow: "TOPIC CLUSTER · SAMPLING",
    hero: "The trial-driving discipline, run with GPS-verified counts.",
    accGlow: "trial-driving",
    lede: "Product sampling — in-store, on-premise, festival, campus. The discipline that turns product trial into purchase. Every can, taste, sample logged in Spark with location, timestamp, and (where retail permits) conversion data.",
    sections: [{
      h: "Sampling services",
      kind: "services",
      items: ["product-sampling", "experiential-marketing", "event-staffing", "mobile-tours"]
    }, {
      h: "Industries we sample for",
      kind: "industries",
      items: ["cpg-beverage", "cpg-food-snack", "alcohol-spirits", "health-wellness", "pet", "cannabis"]
    }, {
      h: "Sampling glossary",
      kind: "glossary",
      items: ["gps-verified-sampling", "co-op-program", "tips-certification", "tabc-certification", "rbs-certification", "coi-event"]
    }, {
      h: "Markets where we sample",
      kind: "markets-top"
    }],
    relatedBlog: ["sampling-budget-cpg", "retail-co-op-mdf-programs-guide", "alcohol-sampling-compliance"]
  },
  "trade-show-staffing": {
    slug: "trade-show-staffing",
    title: "Trade Show Staffing",
    eyebrow: "TOPIC CLUSTER · TRADE SHOWS",
    hero: "Booth crew that hits qualified-lead targets.",
    accGlow: "qualified",
    lede: "Trade show staffing — booth attendants, demo leads, lead capture, hospitality. The discipline that turns three days of conference traffic into a clean CRM list for sales. Bilingual where useful, badge-scan ready, lead-quality scrubbed end of day.",
    sections: [{
      h: "Trade show services",
      kind: "services",
      items: ["trade-shows", "event-staffing", "fabrication-builds", "experiential-marketing"]
    }, {
      h: "Industries that show",
      kind: "industries",
      items: ["tech-saas", "automotive", "hospitality-travel", "health-wellness", "gaming-esports", "cpg-food-snack"]
    }, {
      h: "Glossary",
      kind: "glossary",
      items: ["trade-show-staffing", "brand-ambassador", "coi-event"]
    }, {
      h: "Show-heavy markets",
      kind: "markets-top"
    }],
    relatedBlog: ["trade-show-staffing-guide", "lead-capture-best-practices"]
  },
  "mobile-tours": {
    slug: "mobile-tours",
    title: "Mobile Marketing Tours",
    eyebrow: "TOPIC CLUSTER · MOBILE TOURS",
    hero: "Multi-market activation on wheels.",
    accGlow: "Multi-market",
    lede: "Mobile marketing tours — sprinter vans, ad trucks, branded vehicles, sampling tours. The discipline of taking a brand activation from market to market without losing the experience between cities. We route, staff, fuel, and recap them.",
    sections: [{
      h: "Mobile tour services",
      kind: "services",
      items: ["mobile-tours", "experiential-marketing", "fabrication-builds", "event-staffing"]
    }, {
      h: "Industries on tour",
      kind: "industries",
      items: ["cpg-beverage", "cpg-food-snack", "automotive", "alcohol-spirits", "qsr-restaurant"]
    }, {
      h: "Glossary",
      kind: "glossary",
      items: ["brand-ambassador", "coi-event", "gps-verified-sampling"]
    }, {
      h: "Tour-route markets",
      kind: "markets-top"
    }],
    relatedBlog: ["mobile-tour-routing", "ad-truck-vs-sprinter"]
  }
};
const PILLAR_LIST = Object.values(PILLAR_TOPICS);
Object.assign(window, {
  PILLAR_TOPICS,
  PILLAR_LIST
});
})();
