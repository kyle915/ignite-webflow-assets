(function(){if (typeof window !== "undefined" && window.PageSparkUseCase) return;
/* Auto-extracted from the design project's pages/spark-use-case.html.
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
const slug = new URLSearchParams(location.search).get("u") || "in-store-demos";
const U = sparkUseCase(slug) || SPARK_USECASES[0];
sparkSetMeta({
  title: `${U.name} Software | Spark by Ignite`.slice(0, 60),
  desc: `${U.h1} GPS-verified check-ins, live counts, and auto recaps for ${U.name.toLowerCase()}.`.slice(0, 155),
  canonical: `https://sparkbyignite.igniteproductions.co/use-cases/${U.slug}`,
  ld: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Spark by Ignite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": U.sub,
    "featureList": U.captures,
    "provider": {
      "@type": "Organization",
      "name": "Ignite Productions LLC",
      "url": "https://igniteproductions.co"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  },
  faq: U.faq
});

/* Live ticker — a kpi value starting with "~" counts up from 0 to its target, then keeps creeping toward `cap` */
const TickStat = ({
  target,
  cap = 25000
}) => {
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf, iv;
    const run = () => {
      const t0 = performance.now(),
        dur = 2200;
      const step = t => {
        const p = Math.min(1, (t - t0) / dur),
          e = 1 - Math.pow(1 - p, 3);
        setN(Math.round(target * e));
        if (p < 1) raf = requestAnimationFrame(step);else iv = setInterval(() => setN(v => Math.min(cap, v + Math.floor(Math.random() * 6 + 2))), 1200);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) {
        run();
        io.disconnect();
      }
    }, {
      threshold: .4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, [target, cap]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n.toLocaleString());
};
const Hero = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "01 Use Case Hero: " + U.name,
  style: {
    position: "relative",
    background: BG,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0
  }
}, /*#__PURE__*/React.createElement("img", {
  src: U.img,
  alt: "",
  "aria-hidden": true,
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: .22,
    filter: "grayscale(.3) saturate(.8)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(10,11,13,.98) 0%, rgba(10,11,13,.86) 45%, rgba(10,11,13,.35) 100%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, transparent 60%, #0A0B0D 100%)"
  }
})), /*#__PURE__*/React.createElement(SparkW, {
  style: {
    position: "relative",
    padding: "clamp(64px,8vw,104px) clamp(20px,4vw,48px) 0"
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
}, "/"), /*#__PURE__*/React.createElement("a", {
  href: "https://sparkbyignite.igniteproductions.co/explore#use-cases",
  className: "sp-foot",
  style: {
    textDecoration: "none",
    color: MUT
  }
}, "USE CASES"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot"
}, "/"), /*#__PURE__*/React.createElement("span", {
  className: "sp-foot",
  style: {
    color: LIME
  }
}, U.tag)), /*#__PURE__*/React.createElement("div", {
  className: "sp-2col",
  style: {
    marginTop: 36,
    gap: 64,
    alignItems: "end"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, {
  color: LIME
}, "* ", U.idx, " \xB7 ", U.name.toUpperCase()), /*#__PURE__*/React.createElement("h1", {
  className: "sp-h1"
}, U.h1), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 24
  }
}, U.sub), /*#__PURE__*/React.createElement("div", {
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
}, "Talk to a human"))), /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    border: `1px solid ${LINE}`,
    boxShadow: "0 40px 100px rgba(0,0,0,.6)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: U.img,
  alt: U.alt,
  style: {
    display: "block",
    width: "100%",
    aspectRatio: "4/3",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 14,
    bottom: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "7px 12px",
    borderRadius: 999,
    background: "rgba(10,11,13,.8)",
    border: `1px solid rgba(214,243,95,.3)`
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
}, "GPS-VERIFIED \xB7 GEO-STAMPED PHOTO")))), /*#__PURE__*/React.createElement("div", {
  className: "sp-statrow sp-rv",
  style: {
    marginTop: 56,
    borderRadius: 14,
    overflow: "hidden"
  }
}, U.kpis.map(([v, l]) => {
  const tick = typeof v === "string" && v.startsWith("~");
  const target = tick ? parseInt(v.slice(1).replace(/[^0-9]/g, ""), 10) : null;
  return /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: "clamp(22px,2.4vw,34px)",
      color: LIME,
      letterSpacing: "-.02em",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, tick ? /*#__PURE__*/React.createElement(TickStat, {
    target: target
  }) : v, tick && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: LIME,
      boxShadow: `0 0 10px ${LIME}`,
      animation: "sp-blink 1.6s infinite"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      marginTop: 6
    }
  }, l));
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56
  }
}, /*#__PURE__*/React.createElement(SparkTicker, null)));
const Captures = () => {
  const [ref, inv] = useSparkInView(.25);
  return /*#__PURE__*/React.createElement(SparkSec, {
    label: "02 What gets captured",
    bg: CARD
  }, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
    className: "sp-2col",
    style: {
      alignItems: "start",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-rv"
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> WHAT GETS CAPTURED"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "Structured during the shift. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "Not from memory.")), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 20
    }
  }, "Every field on the ambassador's phone maps to a column in your recap. Incomplete reports don't count as complete. That's the whole point.")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "sp-rv sp-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-mockbar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#FFBD2E"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sp-url"
  }, "spark.ignite / report-template / ", U.slug)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot"
  }, "REQUIRED FIELDS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MONO,
      fontSize: 9,
      color: LIME
    }
  }, U.captures.length, " / ", U.captures.length, " ENFORCED")), U.captures.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    className: "sp-row",
    style: {
      gridTemplateColumns: "28px 1fr auto",
      opacity: inv ? 1 : 0,
      transform: inv ? "none" : "translateX(-8px)",
      transition: `all .5s ${i * 90}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SANS,
      fontSize: 14.5,
      color: FG
    }
  }, c), /*#__PURE__*/React.createElement("span", {
    className: "sp-s"
  }, "REQUIRED"))), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: `1px solid ${LINE}`
    }
  }, "// SUBMISSION BLOCKED UNTIL COMPLETE \xB7 GPS + TIMESTAMP AUTO"))))));
};
const Scenario = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "03 Scenario"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 820
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> A TYPICAL PROGRAM"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "Before Spark. ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "With Spark.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, U.scenario.who)), /*#__PURE__*/React.createElement("div", {
  className: "sp-2col sp-rv",
  style: {
    marginTop: 44,
    gap: 20,
    alignItems: "stretch"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "sp-card",
  style: {
    padding: "28px 26px",
    borderLeft: `3px solid ${RED}`,
    background: BG
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: ".16em",
    color: RED
  }
}, "\u2715 BEFORE"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "16px 0 0",
    fontSize: 17,
    lineHeight: 1.6,
    color: FG2
  }
}, U.scenario.before), /*#__PURE__*/React.createElement("div", {
  className: "sp-foot",
  style: {
    marginTop: 22,
    color: RED
  }
}, "// 9 DAYS \xB7 14 EMAILS \xB7 0 CONFIDENCE")), /*#__PURE__*/React.createElement("div", {
  className: "sp-card",
  style: {
    padding: "28px 26px",
    borderLeft: `3px solid ${LIME}`,
    background: "rgba(214,243,95,.04)",
    borderColor: "rgba(214,243,95,.25)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: ".16em",
    color: LIME
  }
}, /*#__PURE__*/React.createElement(SparkDot, {
  c: LIME,
  s: 6
}), "WITH SPARK"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "16px 0 0",
    fontSize: 17,
    lineHeight: 1.6,
    color: FG
  }
}, U.scenario.after), /*#__PURE__*/React.createElement("div", {
  className: "sp-foot",
  style: {
    marginTop: 22,
    color: LIME
  }
}, "// LIVE IN DASHBOARD \xB7 HOURS AFTER EVENT \xB7 0 FOLLOW-UPS")))));
const Modules = () => /*#__PURE__*/React.createElement(SparkSec, {
  label: "04 Modules",
  bg: CARD
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-rv",
  style: {
    maxWidth: 860
  }
}, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> MODULES THIS LEANS ON"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, "The parts of the loop ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: LIME,
    fontStyle: "italic"
  }
}, "doing the work.")), /*#__PURE__*/React.createElement("p", {
  className: "sp-lede",
  style: {
    marginTop: 18
  }
}, "Click a step to see what Spark is doing at that point in a program like this one.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36
  }
}, /*#__PURE__*/React.createElement(SparkLoop, {
  title: false,
  only: U.modules,
  highlight: U.modules[0]
}))));
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
}, "RELATED \u2192"), U.related.map(([h, l]) => /*#__PURE__*/React.createElement("a", {
  key: h,
  href: h,
  className: "sp-pill",
  style: {
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: 11,
    color: FG
  }
}, l)), SPARK_USECASES.filter(x => x.slug !== U.slug).slice(0, 3).map(x => /*#__PURE__*/React.createElement("a", {
  key: x.slug,
  href: "https://sparkbyignite.igniteproductions.co/use-cases/" + x.slug,
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
    "data-screen-label": "Spark Use Case: " + U.name
  }, /*#__PURE__*/React.createElement(SparkNav, {
    active: "usecases"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Captures, null), /*#__PURE__*/React.createElement(Scenario, null), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(SparkFaq, {
    items: U.faq,
    h: /*#__PURE__*/React.createElement(React.Fragment, null, "Questions about ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: LIME,
        fontStyle: "italic"
      }
    }, U.name.toLowerCase(), "."))
  }), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(SparkCta, {
    h: `See your ${U.name.split(" &")[0].toLowerCase()} program on it.`
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageSparkUseCase: App
});
})();
