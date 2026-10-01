(function(){if (typeof window !== "undefined" && window.PageSparkSolution) return;
/* Auto-extracted from the design project's pages/spark-solution.html.
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
const slug = new URLSearchParams(location.search).get("s") || "brands";
const S = sparkSolution(slug) || SPARK_SOLUTIONS[0];
if (S.href) {
  location.replace(S.href);
}
sparkSetMeta({
  title: `Spark ${S.name} — Field Marketing Software | Spark by Ignite`.slice(0, 60),
  desc: `${S.h1} Spark field marketing software for ${S.audience.toLowerCase()}: GPS-verified proof, auto recaps, live dashboards.`.slice(0, 155),
  canonical: `https://sparkbyignite.igniteproductions.co/solutions/${S.slug}`,
  ld: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Spark by Ignite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": S.audience
    },
    "description": S.sub,
    "provider": {
      "@type": "Organization",
      "name": "Ignite Productions LLC",
      "url": "https://igniteproductions.co"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier — 5 events per month, unlimited ambassador seats"
    }
  },
  faq: S.faq
});
const SOL_IMGS = {
  brands: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-liquid-death-festival-two-women.jpg",
  agencies: "https://kyle915.github.io/ignite-webflow-assets/assets/on-premise-glendalough-bar-tray.jpg",
  distributors: "https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquid-death-petsmart.jpg",
  retail: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-total-wireless-storefront.jpg",
  "field-marketing": "https://kyle915.github.io/ignite-webflow-assets/assets/street-team-liquid-death-miami.jpg",
  enterprise: "https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg"
};
const SOL_FIT = {
  agencies: "contain",
  distributors: "contain"
}; /* portrait sources that shouldn't be cropped */
const SOL_ALTS = {
  brands: "Two consumers holding Liquid Death cans at a branded festival sampling tent",
  agencies: "Glendalough Distillery brand ambassador serving a tray of sample cocktails at a bar during an on-premise activation",
  distributors: "Liquid Death brand ambassador running an in-store retail demo at PetSmart",
  retail: "Total Wireless branded storefront activation at a retail location",
  "field-marketing": "Liquid Death street team sampling cans on a Miami sidewalk",
  enterprise: "Liquid Death multi-market experiential activation at a NASCAR event"
};
const Hero = () => {
  const [ref, inv] = useSparkInView(.2);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "01 Solution Hero — " + S.name,
    style: {
      position: "relative",
      background: BG,
      padding: "clamp(64px,8vw,104px) 0 0",
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
      top: -220,
      right: -160,
      width: 700,
      height: 700,
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
    className: "sp-foot",
    style: {
      color: MUT
    }
  }, "SOLUTIONS"), /*#__PURE__*/React.createElement("span", {
    className: "sp-foot"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME
    }
  }, S.name.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    className: "sp-2col",
    style: {
      marginTop: 36,
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, {
    color: LIME
  }, "* ", S.idx, " \xB7 ", S.audience.toUpperCase()), /*#__PURE__*/React.createElement("h1", {
    className: "sp-h1"
  }, S.h1), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 24
    }
  }, S.sub), /*#__PURE__*/React.createElement("div", {
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
    href: "https://www.igniteproductions.co/contact"
  }, "Talk to a human"))), /*#__PURE__*/React.createElement("div", {
    className: "sp-solvis",
    style: {
      opacity: inv ? 1 : 0,
      transform: inv ? "none" : "translateY(18px)",
      transition: "opacity .7s ease,transform .7s ease"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      position: "relative",
      margin: 0,
      borderRadius: "14px 14px 0 0",
      overflow: "hidden",
      aspectRatio: "16/10",
      border: `1px solid ${LINE}`,
      borderBottom: 0
    }
  }, SOL_FIT[S.slug] === "contain" && /*#__PURE__*/React.createElement("img", {
    "aria-hidden": true,
    src: SOL_IMGS[S.slug],
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "blur(28px) saturate(1.1) brightness(.55)",
      transform: "scale(1.15)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: SOL_IMGS[S.slug] || SOL_IMGS.brands,
    alt: SOL_ALTS[S.slug] || "",
    loading: "eager",
    decoding: "async",
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: SOL_FIT[S.slug] || "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,11,13,0) 45%, rgba(10,11,13,.85) 100%)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      right: 16,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 11px",
      borderRadius: 999,
      background: "rgba(10,11,13,.7)",
      border: `1px solid rgba(214,243,95,.4)`,
      fontFamily: MONO,
      fontSize: 9.5,
      letterSpacing: ".16em",
      color: LIME
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 8px ${LIME}`,
      animation: "sp-blink 1.6s infinite"
    }
  }), "GPS-VERIFIED \xB7 ON SITE"), /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: "rgba(250,250,247,.7)"
    }
  }, S.name.toUpperCase()))), /*#__PURE__*/React.createElement("div", {
    className: "sp-statrow",
    style: {
      borderRadius: "0 0 14px 14px",
      overflow: "hidden",
      borderTop: 0
    }
  }, S.outcomes.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: "clamp(22px,2.2vw,32px)",
      color: LIME,
      letterSpacing: "-.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      marginTop: 6
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(SparkTicker, null)));
};
const Pains = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "02 Pains",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> THE HONEST VERSION"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "What breaks today.")), /*#__PURE__*/React.createElement("div", {
  className: "sp-3col sp-rv",
  style: {
    marginTop: 44
  }
}, S.pains.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "sp-card",
  style: {
    padding: "26px 24px",
    borderLeft: `3px solid ${RED}`,
    background: BG
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    fontSize: 11,
    color: RED,
    letterSpacing: ".14em"
  }
}, "\u2715 0", i + 1), /*#__PURE__*/React.createElement("h3", {
  className: "sp-h3",
  style: {
    margin: "14px 0 0",
    fontSize: 22,
    color: FG
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "10px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: FG2
  }
}, d))))));
const Flow = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "03 How it runs"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 860
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> HOW IT RUNS"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Request to recap. ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "Proof at every step."))), /*#__PURE__*/React.createElement("div", {
  className: "sp-steps sp-rv",
  style: {
    marginTop: 36
  }
}, S.flow.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: t
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    fontSize: 24,
    fontWeight: 700,
    color: LIME
  }
}, "0", i + 1), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot"
}, t)), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "18px 0 0",
    fontSize: 15,
    lineHeight: 1.55,
    color: FG2
  }
}, d)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44
  }
}, /*#__PURE__*/React.createElement(SparkLoop, {
  title: false,
  only: S.modules,
  highlight: S.modules[0]
}))));
const Modules = () => {
  const first = sparkProduct(S.modules[0]);
  return /*#__PURE__*/React.createElement(SparkSec, {
    label: "04 Modules",
    bg: CARD
  }, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
    className: "sp-2col sp-rv",
    style: {
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> WHAT YOU'LL USE"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "The modules that ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "do the work.")), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 20
    }
  }, "Every Spark account gets the full platform. These are the modules ", S.name.replace("For ", "").toLowerCase(), " teams live in."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      flexDirection: "column",
      gap: 0,
      borderTop: `1px solid ${LINE}`
    }
  }, S.modules.map(m => {
    const p = sparkProduct(m);
    return /*#__PURE__*/React.createElement("a", {
      key: m,
      href: "https://sparkbyignite.igniteproductions.co/product/" + m,
      style: {
        display: "grid",
        gridTemplateColumns: "40px 1fr auto",
        gap: 14,
        alignItems: "center",
        padding: "16px 0",
        borderBottom: `1px solid ${LINE}`,
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: MONO,
        fontSize: 13,
        fontWeight: 700,
        color: LIME
      }
    }, p.idx), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 17,
        color: FG
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 13.5,
        color: MUT,
        marginTop: 2
      }
    }, p.short)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: MONO,
        color: LIME
      }
    }, "\u2192"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sp-rv"
  }, /*#__PURE__*/React.createElement(SparkMock, {
    mock: first.mock
  })))));
};
const Related = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "05 Related",
  pad: "clamp(56px,7vw,90px) 0"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    marginRight: 8
  }
}, "RELATED \u2192"), S.related.map(([h, l]) => /*#__PURE__*/React.createElement("a", {
  key: h,
  href: h,
  className: "sp-pill",
  style: {
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: 11,
    color: FG
  }
}, l)), SPARK_SOLUTIONS.filter(x => x.slug !== S.slug).slice(0, 3).map(x => /*#__PURE__*/React.createElement("a", {
  key: x.slug,
  href: x.href || "https://sparkbyignite.igniteproductions.co/solutions/" + x.slug,
  className: "sp-pill",
  style: {
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: 11
  }
}, x.name)))));
const App = () => {
  useSparkReveal();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Spark Solution — " + S.name
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "solutions"
  }), /*#__PURE__*/React.createElement(Hero, null), S.pains && /*#__PURE__*/React.createElement(Pains, null), /*#__PURE__*/React.createElement(Flow, null), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: S.faq,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Questions from ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, S.name.replace("For ", "").toLowerCase(), " teams."))
  }), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(SparkCta, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkSolution: App
});
})();
