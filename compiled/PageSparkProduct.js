(function(){if (typeof window !== "undefined" && window.PageSparkProduct) return;
/* Auto-extracted from the design project's pages/spark-product.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const {
  LIME,
  RED,
  BG,
  CARD,
  FG,
  FG2,
  MUT,
  LINE,
  MONO,
  SANS
} = SPK;
const slug = new URLSearchParams(location.search).get("p") || "request";
const P = sparkProduct(slug) || SPARK_PRODUCTS[0];
const pi = SPARK_PRODUCTS.indexOf(P);
const prev = SPARK_PRODUCTS[(pi + SPARK_PRODUCTS.length - 1) % SPARK_PRODUCTS.length],
  next = SPARK_PRODUCTS[(pi + 1) % SPARK_PRODUCTS.length];
sparkSetMeta({
  title: `Spark ${P.name} — ${P.tag.charAt(0) + P.tag.slice(1).toLowerCase()} for Field Marketing`.slice(0, 60),
  desc: `${P.h1} ${P.sub}`.slice(0, 155),
  canonical: `https://sparkbyignite.igniteproductions.co/product/${P.slug}`,
  ld: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `Spark ${P.name}`,
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": P.tag,
    "operatingSystem": "Web, iOS, Android",
    "description": P.sub,
    "featureList": P.caps,
    "isPartOf": {
      "@type": "SoftwareApplication",
      "name": "Spark by Ignite"
    },
    "provider": {
      "@type": "Organization",
      "name": "Ignite Productions LLC",
      "url": "https://igniteproductions.co"
    }
  },
  faq: P.faq
});
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Product Hero — " + P.name,
  style: {
    position: "relative",
    background: BG,
    padding: "clamp(64px,8vw,104px) 0 clamp(64px,8vw,104px)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(250,250,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(250,250,247,0.04) 1px,transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: -200,
    right: -160,
    width: 680,
    height: 680,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(214,243,95,0.16), transparent 60%)",
    pointerEvents: "none",
    animation: "sp-glow 6s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement(SparkW, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("nav", {
  "aria-label": "Breadcrumb",
  style: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/",
  className: "sp-foot",
  style: {
    textDecoration: "none",
    color: MUT
  }
}, "SPARK"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot"
}, "/"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot"
}, "PRODUCT"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot"
}, "/"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, P.idx, " ", P.name.toUpperCase())), /*#__PURE__*/React.createElement("div", {
  className: "sp-2col",
  style: {
    marginTop: 36,
    gap: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    fontSize: 44,
    fontWeight: 700,
    color: LIME,
    lineHeight: 1
  }
}, P.idx), /*#__PURE__*/React.createElement("span", {
  className: "sp-pill sp-pill-lime"
}, P.tag)), /*#__PURE__*/React.createElement("h1", {
  className: "sp-h1"
}, P.h1), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 24
  }
}, P.sub), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 34,
    display: "flex",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "sp-btn",
  href: "https://www.igniteproductions.co/contact"
}, "See Spark on a live program ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
  className: "sp-ghost",
  href: "https://sparkbyignite.igniteproductions.co/#how"
}, "See the full loop"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkMock, {
  mock: P.mock
})))));
const Caps = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Capabilities",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> WHAT'S IN ", P.name.toUpperCase()), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Built from what actually ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "breaks."))), /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "0 40px"
  }
}, P.caps.map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: c,
  style: {
    display: "grid",
    gridTemplateColumns: "32px 1fr",
    gap: 12,
    padding: "16px 0",
    borderTop: `1px solid ${LINE}`,
    fontSize: 15.5,
    lineHeight: 1.5,
    color: FG2
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    color: LIME,
    fontSize: 12,
    paddingTop: 3
  }
}, "0", i + 1), c)))));
const USE_IMGS = {
  request: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-mojo-tent-storefront.jpg",
  staff: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-claude-registration-crew.webp",
  verify: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-liquid-death-walmart.jpg",
  recap: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-liquid-death-festival-two-women.jpg",
  insights: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-fuel-stadium-tailgate.jpg",
  network: "https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg"
};
const Uses = () => {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % P.uses.length), 4200);
    return () => clearInterval(id);
  }, []);
  const img = USE_IMGS[P.slug] || USE_IMGS.verify;
  return /*#__PURE__*/React.createElement(SparkSec, {
    label: "03 Use cases"
  }, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> WHO USES IT"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "Three ways teams ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "lean on it."))), /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      paddingBottom: 8
    }
  }, "// ", P.idx, " \xB7 ", P.name.toUpperCase(), " \xB7 ", P.uses.length, " SCENARIOS")), /*#__PURE__*/React.createElement("div", {
    className: "sp-2col sp-rv",
    style: {
      marginTop: 44,
      gap: 0,
      alignItems: "stretch",
      border: `1px solid ${LINE}`,
      borderRadius: 18,
      overflow: "hidden",
      background: CARD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, P.uses.map(([t, d], i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onMouseEnter: () => setActive(i),
      onFocus: () => setActive(i),
      onClick: () => setActive(i),
      "aria-pressed": on,
      style: {
        all: "unset",
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "56px 1fr",
        gap: 18,
        padding: "26px 28px",
        borderBottom: i < P.uses.length - 1 ? `1px solid ${LINE}` : "none",
        borderLeft: `3px solid ${on ? LIME : "transparent"}`,
        background: on ? "rgba(214,243,95,.05)" : "transparent",
        transition: "background .35s, border-color .35s",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: MONO,
        fontSize: 26,
        fontWeight: 700,
        color: on ? LIME : MUT,
        lineHeight: 1,
        transition: "color .35s"
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: "-.02em",
        color: on ? FG : FG2,
        transition: "color .35s"
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: 8,
        fontSize: 15,
        lineHeight: 1.55,
        color: FG2,
        maxHeight: on ? 120 : 0,
        opacity: on ? 1 : 0,
        overflow: "hidden",
        transition: "max-height .45s, opacity .35s"
      }
    }, d)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 420,
      overflow: "hidden",
      borderLeft: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: `${P.name} module in the field`,
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "saturate(.85)",
      transform: `scale(${1.02 + active * 0.02})`,
      transition: "transform 4.2s linear"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,11,13,.1) 0%, rgba(10,11,13,.85) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 20,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 12px",
      borderRadius: 999,
      background: "rgba(10,11,13,.8)",
      border: "1px solid rgba(214,243,95,.3)"
    }
  }, /*#__PURE__*/React.createElement(SparkDot, {
    c: LIME,
    s: 6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MONO,
      fontSize: 10,
      letterSpacing: ".16em",
      color: LIME
    }
  }, P.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14
    }
  }, P.uses.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 3,
      flex: i === active ? 3 : 1,
      borderRadius: 999,
      background: i === active ? LIME : "rgba(250,250,247,.25)",
      transition: "flex .4s, background .4s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: SANS,
      fontWeight: 700,
      fontSize: 20,
      color: FG,
      letterSpacing: "-.02em"
    }
  }, P.uses[active][0]), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      marginTop: 6
    }
  }, "// SAME LOOP \xB7 SAME PROOF \xB7 DIFFERENT SEAT AT THE TABLE"))))));
};
const Loop = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "04 In the loop",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: 20,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> WHERE IT SITS"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "One module of ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "six."))), /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/#how",
  style: {
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: LIME,
    textDecoration: "none"
  }
}, "How the loop works \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40
  }
}, /*#__PURE__*/React.createElement(SparkLoop, {
  title: false,
  highlight: next.slug
})), /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    marginTop: 28,
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/product/" + prev.slug,
  className: "sp-ghost",
  style: {
    padding: "12px 18px",
    fontSize: 13
  }
}, "\u2190 ", prev.idx, " ", prev.name), /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/product/" + next.slug,
  className: "sp-ghost",
  style: {
    padding: "12px 18px",
    fontSize: 13
  }
}, next.idx, " ", next.name, " \u2192"))));
const App = () => {
  useSparkReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Product — " + P.name
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "product"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(SparkTicker, null), /*#__PURE__*/React.createElement(Caps, null), /*#__PURE__*/React.createElement(Uses, null), /*#__PURE__*/React.createElement(Loop, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: P.faq,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "About ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, P.name, "."))
  }), /*#__PURE__*/React.createElement(SparkCta, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkProduct: App
});
})();
