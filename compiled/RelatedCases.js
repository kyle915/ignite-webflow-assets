(function(){if (typeof window !== "undefined" && window.RelatedCases) return;
/* Related case studies band — shared across service, industry, city and Spark pages.
   Usage: <RelatedCases ctx="service" slug="product-sampling"/>  (returns null when no mapping) */
const RC_CASES = {
  "openai-devday": {
    brand: "OpenAI",
    hero: "openai-devday-keynote.jpg",
    line: "87 brand ambassadors across Dev Day 2026.",
    stat: ["87", "Ambassadors"]
  },
  "claude-code-workshops": {
    brand: "Claude",
    hero: "claude-workshops-atlanta-team.png",
    line: "12-city Claude Code workshop tour, local teams per stop.",
    stat: ["12", "Cities"]
  },
  "breakaway": {
    brand: "Breakaway Music Festival",
    hero: "breakaway-jimmy-johns-silent-disco.jpg",
    line: "Silent disco to exit sampling across 12 festivals.",
    stat: ["12", "Festivals"]
  },
  "torch-thc": {
    brand: "Torch THC",
    hero: "torch-thc-kings-liquor-activation.png",
    line: "National retail program, planning to field execution.",
    stat: ["2,500+", "Activations / yr"]
  },
  "brew-dr": {
    brand: "Brew Dr. Kombucha",
    hero: "brewdr-king-soopers-demo.jpg",
    line: "Retail sampling run end to end for distributors.",
    stat: ["~150", "Demos / month"]
  },
  "stone-house-bread": {
    brand: "Stone House Bread",
    hero: "stonehouse-kroger-sampling.png",
    line: "Toasted sourdough sampling across Michigan Kroger.",
    stat: ["32", "Events, 19 stores"]
  },
  "begoat": {
    brand: "BE GOAT",
    hero: "begoat-fred-meyer-demo-aisle.png",
    line: "Fred Meyer rollout demos across the Pacific Northwest.",
    stat: ["PNW", "Retail rollout"]
  },
  "drekker": {
    brand: "Drekker Brewing",
    hero: "drekker-total-wine-tasting.jpg",
    line: "Total Wine tastings scheduled and run in store.",
    stat: ["Total Wine", "Tastings"]
  },
  "luckin": {
    brand: "Luckin Coffee",
    hero: "luckin-campus-activation-2.jpg",
    line: "NYC store openings, app signups and campus promos.",
    stat: ["NYC", "Store openings"]
  }
};
const RC_MAP = {
  service: {
    "product-sampling": ["brew-dr", "stone-house-bread", "begoat"],
    "retail-demo-programs": ["brew-dr", "drekker", "stone-house-bread"],
    "retail-merchandising": ["torch-thc", "brew-dr", "begoat"],
    "shopper-marketing": ["torch-thc", "stone-house-bread", "begoat"],
    "trade-marketing-management": ["torch-thc", "brew-dr", "drekker"],
    "logistics-kitting": ["torch-thc", "breakaway", "brew-dr"],
    "promotional-products": ["torch-thc", "luckin", "breakaway"],
    "experiential-marketing": ["breakaway", "luckin", "openai-devday"],
    "festival-brand-activations": ["breakaway", "luckin", "torch-thc"],
    "event-staffing": ["openai-devday", "claude-code-workshops", "breakaway"],
    "brand-ambassador-management": ["openai-devday", "brew-dr", "torch-thc"],
    "collegiate-marketing": ["luckin", "breakaway", "claude-code-workshops"],
    "street-teams": ["luckin", "breakaway", "torch-thc"],
    "field-marketing": ["torch-thc", "brew-dr", "luckin"],
    "on-premise-sampling": ["drekker", "torch-thc", "brew-dr"],
    "qsr-restaurant-activations": ["luckin", "brew-dr", "stone-house-bread"],
    "pop-up-retail": ["luckin", "breakaway", "torch-thc"],
    "event-reporting-recaps": ["brew-dr", "stone-house-bread", "torch-thc"],
    "distributor-demo-programs": ["brew-dr", "drekker", "torch-thc"],
    "retail-readiness": ["begoat", "brew-dr", "stone-house-bread"],
    "retail-sales-broker-management": ["brew-dr", "begoat", "drekker"],
    "distribution-expansion": ["brew-dr", "begoat", "torch-thc"],
    "mobile-tours": ["claude-code-workshops", "breakaway", "luckin"],
    "event-production": ["openai-devday", "claude-code-workshops", "breakaway"],
    "sponsorship-partnerships": ["breakaway", "openai-devday", "luckin"],
    "fabrication-builds": ["torch-thc", "breakaway", "luckin"],
    "content-capture": ["breakaway", "openai-devday", "luckin"]
  },
  industry: {
    "cpg-beverage": ["brew-dr", "begoat", "torch-thc"],
    "cpg-food-snack": ["stone-house-bread", "brew-dr", "begoat"],
    "alcohol-spirits": ["drekker", "torch-thc", "breakaway"],
    "cannabis": ["torch-thc", "drekker", "brew-dr"],
    "tech-saas": ["openai-devday", "claude-code-workshops", "luckin"],
    "qsr-restaurant": ["luckin", "stone-house-bread", "brew-dr"],
    "sports-entertainment": ["breakaway", "openai-devday", "luckin"],
    "health-wellness": ["brew-dr", "begoat", "stone-house-bread"]
  },
  city: {
    "new-york": ["luckin", "openai-devday", "torch-thc"],
    "brooklyn": ["luckin", "openai-devday", "torch-thc"],
    "seattle": ["brew-dr", "begoat", "torch-thc"],
    "portland": ["brew-dr", "begoat", "torch-thc"],
    "tacoma": ["brew-dr", "begoat", "torch-thc"],
    "spokane": ["brew-dr", "begoat", "torch-thc"],
    "detroit": ["stone-house-bread", "torch-thc", "brew-dr"],
    "grand-rapids": ["stone-house-bread", "torch-thc", "brew-dr"],
    "atlanta": ["claude-code-workshops", "torch-thc", "breakaway"]
  },
  spark: {
    "platform": ["brew-dr", "stone-house-bread", "torch-thc"]
  }
};
const RelatedCases = ({
  ctx,
  slug,
  rel = "../",
  heading
}) => {
  const list = ((RC_MAP[ctx] || {})[slug] || []).filter(k => RC_CASES[k]);
  if (!list.length) return null;
  const asset = n => window.__resources && window.__resources["r_assets_" + n.replace(/[^a-z0-9]/gi, "_")] || "https://kyle915.github.io/ignite-webflow-assets/assets/" + n;
  const href = k => rel + "/portfolio/" + k;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Related case studies",
    style: {
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "88px 0",
      borderTop: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--ignite-500)"
    }
  }, ">> ", "Receipts"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(30px,3.4vw,48px)",
      letterSpacing: "-0.03em",
      lineHeight: 1
    }
  }, heading || "Programs we run like this.")), /*#__PURE__*/React.createElement("a", {
    href: rel + "/work",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-1)"
    }
  }, "All case studies \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: 16
    }
  }, list.map(k => {
    const c = RC_CASES[k];
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      href: href(k),
      style: {
        display: "flex",
        flexDirection: "column",
        background: "var(--ink-100)",
        border: "1px solid var(--ink-400)",
        borderRadius: 14,
        overflow: "hidden",
        color: "var(--fg-1)",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "16/10",
        overflow: "hidden",
        background: "var(--ink-200)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: asset(c.hero),
      alt: c.brand + " activation run by Ignite Productions",
      loading: "lazy",
      decoding: "async",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 35%",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 22px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--fg-3)"
      }
    }, c.brand), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 19,
        letterSpacing: "-0.01em",
        lineHeight: 1.25
      }
    }, c.line), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 12,
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        borderTop: "1px solid var(--ink-400)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 24,
        color: "var(--ignite-500)"
      }
    }, c.stat[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--fg-2)"
      }
    }, c.stat[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--fg-1)"
      }
    }, "\u2192"))));
  }))));
};
Object.assign(window, {
  RelatedCases,
  RC_CASES,
  RC_MAP
});
})();
