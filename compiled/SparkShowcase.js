(function(){if (typeof window !== "undefined" && window.CoverageMap) return;
/* Live Spark dashboard moment — dark, the "wow" section */
const {
  useState: shState,
  useEffect: shEffect,
  useRef: shRef
} = React;
const US_CITIES = [{
  name: "SEATTLE",
  lat: 47.61,
  lng: -122.33,
  brand: "White Claw",
  samples: 412,
  leads: 78,
  status: "ACTIVE"
}, {
  name: "PORTLAND",
  lat: 45.52,
  lng: -122.68,
  brand: "Krispy Krunchy",
  samples: 268,
  leads: 41,
  status: "ACTIVE"
}, {
  name: "SAN FRANCISCO",
  lat: 37.77,
  lng: -122.42,
  brand: "Liquid Death",
  samples: 522,
  leads: 96,
  status: "LIVE"
}, {
  name: "LOS ANGELES",
  lat: 34.05,
  lng: -118.24,
  brand: "Dude Wipes",
  samples: 638,
  leads: 112,
  status: "LIVE"
}, {
  name: "PHOENIX",
  lat: 33.45,
  lng: -112.07,
  brand: "Mas+",
  samples: 184,
  leads: 38,
  status: "ACTIVE"
}, {
  name: "DENVER",
  lat: 39.74,
  lng: -104.99,
  brand: "Liquid Death",
  samples: 346,
  leads: 71,
  status: "LIVE"
}, {
  name: "DALLAS",
  lat: 32.78,
  lng: -96.80,
  brand: "Smalls Sliders",
  samples: 412,
  leads: 58,
  status: "ACTIVE"
}, {
  name: "HOUSTON",
  lat: 29.76,
  lng: -95.37,
  brand: "Total Wireless",
  samples: 388,
  leads: 84,
  status: "ACTIVE"
}, {
  name: "AUSTIN",
  lat: 30.27,
  lng: -97.74,
  brand: "White Claw",
  samples: 327,
  leads: 68,
  status: "LIVE"
}, {
  name: "MIAMI",
  lat: 25.76,
  lng: -80.19,
  brand: "Mark Anthony",
  samples: 504,
  leads: 102,
  status: "LIVE"
}, {
  name: "ATLANTA",
  lat: 33.75,
  lng: -84.39,
  brand: "Krispy Krunchy",
  samples: 296,
  leads: 49,
  status: "ACTIVE"
}, {
  name: "NASHVILLE",
  lat: 36.16,
  lng: -86.78,
  brand: "White Claw",
  samples: 218,
  leads: 36,
  status: "ACTIVE"
}, {
  name: "CHICAGO",
  lat: 41.88,
  lng: -87.63,
  brand: "Total Wireless",
  samples: 432,
  leads: 88,
  status: "LIVE"
}, {
  name: "DETROIT",
  lat: 42.33,
  lng: -83.05,
  brand: "Liquid Death",
  samples: 244,
  leads: 42,
  status: "ACTIVE"
}, {
  name: "BROOKLYN",
  lat: 40.65,
  lng: -73.95,
  brand: "Liquid Death",
  samples: 586,
  leads: 124,
  status: "LIVE"
}, {
  name: "BOSTON",
  lat: 42.36,
  lng: -71.06,
  brand: "White Claw",
  samples: 358,
  leads: 72,
  status: "ACTIVE"
}, {
  name: "DC",
  lat: 38.90,
  lng: -77.04,
  brand: "Dude Wipes",
  samples: 312,
  leads: 64,
  status: "ACTIVE"
}];

/* Equirectangular projection tuned to the continental US, into a 1000x560 viewBox. */
const MAP_W = 1000,
  MAP_H = 560;
const projX = lng => (lng + 125) / 59 * MAP_W;
const projY = lat => (49.5 - lat) / 25.5 * MAP_H;

/* Continental US border traced as (lng,lat) waypoints, projected at runtime so the
   outline and the pins share one coordinate system (real geography). */
const US_BORDER = [[-124.6, 48.4], [-123.0, 49.0], [-104.0, 49.0], [-95.2, 49.0], [-95.0, 49.4], [-94.6, 48.5], [-89.5, 48.0], [-88.0, 46.8], [-84.9, 46.5], [-83.4, 45.9], [-82.5, 44.0], [-82.9, 42.3], [-80.5, 42.3], [-79.0, 43.3], [-76.5, 43.6], [-74.9, 45.0], [-71.5, 45.0], [-69.2, 47.4], [-67.0, 44.8], [-70.2, 43.6], [-70.9, 42.3], [-71.9, 41.3], [-73.0, 40.9], [-74.0, 40.5], [-74.4, 39.4], [-75.5, 38.4], [-76.0, 37.0], [-75.6, 35.2], [-78.5, 33.9], [-80.9, 32.0], [-81.4, 30.7], [-80.1, 26.8], [-80.4, 25.2], [-81.8, 24.6], [-82.7, 27.8], [-83.7, 29.9], [-84.4, 30.0], [-88.0, 30.3], [-89.5, 29.1], [-91.5, 29.5], [-93.8, 29.7], [-97.0, 27.8], [-97.2, 26.0], [-99.2, 26.4], [-101.4, 29.8], [-102.6, 29.8], [-103.0, 29.0], [-104.9, 30.6], [-106.5, 31.8], [-108.2, 31.3], [-111.1, 31.3], [-114.8, 32.5], [-117.1, 32.5], [-118.4, 34.0], [-120.6, 34.5], [-121.9, 36.6], [-122.5, 37.8], [-124.0, 40.4], [-124.2, 43.3], [-124.1, 46.3]];
const US_PATH = US_BORDER.map((p, i) => (i ? "L" : "M") + projX(p[0]).toFixed(1) + "," + projY(p[1]).toFixed(1)).join(" ") + " Z";
const CoverageMap = () => {
  const [focus, setFocus] = shState(null);
  const [pulseIdx, setPulseIdx] = shState(0);
  shEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setPulseIdx(i => (i + 1) % US_CITIES.length), 900);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: MAP_W + " / " + MAP_H,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 24,
    opacity: 0.06
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + MAP_W + " " + MAP_H,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: US_PATH,
    fill: "rgba(214,243,95,0.05)",
    stroke: "rgba(214,243,95,0.30)",
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  })), US_CITIES.map((c, i) => {
    const isPulse = i === pulseIdx;
    const isFocus = focus === i;
    return /*#__PURE__*/React.createElement("div", {
      key: c.name,
      onMouseEnter: () => setFocus(i),
      onMouseLeave: () => setFocus(null),
      style: {
        position: "absolute",
        left: projX(c.lng) / MAP_W * 100 + "%",
        top: projY(c.lat) / MAP_H * 100 + "%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: isFocus ? 10 : 1
      }
    }, isPulse && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 8,
        height: 8,
        borderRadius: 999,
        border: "1.5px solid var(--spark-500)",
        animation: "radar 1.5s var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: isFocus ? 12 : 8,
        height: isFocus ? 12 : 8,
        borderRadius: 999,
        background: "var(--spark-500)",
        transition: "width 160ms, height 160ms"
      }
    }), isFocus ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "calc(100% + 10px)",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        padding: "12px 14px",
        minWidth: 200,
        background: "rgba(10,11,13,0.96)",
        border: "1px solid rgba(214,243,95,0.4)",
        borderRadius: 8,
        pointerEvents: "none",
        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        animation: "sp-pop 240ms cubic-bezier(0.2,0.9,0.3,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.2em",
        color: "var(--fg-3)",
        textTransform: "uppercase"
      }
    }, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: c.status === "LIVE" ? "var(--spark-500)" : "var(--fg-3)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: "currentColor",
        animation: c.status === "LIVE" ? "sp-pulse-dot 1.6s infinite" : "none"
      }
    }), c.status)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--fg-1)",
        letterSpacing: "-0.01em",
        marginBottom: 10
      }
    }, c.brand), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        borderTop: "1px solid var(--ink-400)",
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--spark-500)",
        lineHeight: 1
      }
    }, c.samples), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.18em",
        color: "var(--fg-3)",
        textTransform: "uppercase",
        marginTop: 3
      }
    }, "samples")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--fg-1)",
        lineHeight: 1
      }
    }, c.leads), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.18em",
        color: "var(--fg-3)",
        textTransform: "uppercase",
        marginTop: 3
      }
    }, "leads")))) : i === pulseIdx && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "calc(100% + 6px)",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        padding: "4px 8px",
        background: "rgba(10,11,13,0.95)",
        border: "1px solid var(--ink-400)",
        borderRadius: 6,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--spark-500)",
        pointerEvents: "none"
      }
    }, c.name, " \xB7 ", c.brand));
  }));
};
const BarChart = ({
  animate
}) => {
  const bars = [38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100, 84, 92];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 120
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: animate ? `${h}%` : "0%",
      background: `linear-gradient(to top, var(--spark-600), var(--spark-500))`,
      borderRadius: "3px 3px 0 0",
      transition: `height 700ms cubic-bezier(0.2,0.7,0.2,1) ${i * 40}ms`
    }
  })));
};
const ActivityRows = () => {
  const rows = [{
    t: "09:14",
    place: "AUSTIN, TX",
    brand: "White Claw",
    status: "checked-in",
    fg: "var(--spark-500)"
  }, {
    t: "09:12",
    place: "BROOKLYN, NY",
    brand: "Liquid Death",
    status: "on-site",
    fg: "var(--spark-500)"
  }, {
    t: "09:08",
    place: "DENVER, CO",
    brand: "Liquid Death",
    status: "setup",
    fg: "var(--ember-500)"
  }, {
    t: "08:56",
    place: "MIAMI, FL",
    brand: "Mark Anthony",
    status: "dispatched",
    fg: "var(--fg-2)"
  }, {
    t: "08:52",
    place: "CHICAGO, IL",
    brand: "Total Wireless",
    status: "photo upload",
    fg: "var(--info)"
  }, {
    t: "08:44",
    place: "LA, CA",
    brand: "Dude Wipes",
    status: "recap sent",
    fg: "var(--success)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "64px 1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "10px 12px",
      borderRadius: 8,
      background: i === 0 ? "rgba(214,243,95,0.08)" : "transparent",
      border: "1px solid " + (i === 0 ? "rgba(214,243,95,0.25)" : "transparent")
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)"
    }
  }, r.t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, r.place), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: 13.5,
      marginTop: 2
    }
  }, r.brand)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: r.fg
    }
  }, r.status))));
};
const BROADCAST_PHOTOS = [{
  src: window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg",
  label: "WHITE CLAW · AUSTIN"
}, {
  src: window.__resources?.r_68962c63c89c6cf0f46a6b66_SMALLS93_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg",
  label: "SMALLS SLIDERS · DALLAS"
}, {
  src: window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp",
  label: "LIQUID DEATH · LOS ANGELES"
}, {
  src: window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png",
  label: "MAS+ · MIAMI"
}];
const BroadcastTile = () => {
  const [i, setI] = shState(0);
  shEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setI(x => (x + 1) % BROADCAST_PHOTOS.length), 3800);
    return () => clearInterval(id);
  }, []);
  const p = BROADCAST_PHOTOS[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      borderRadius: 10,
      overflow: "hidden",
      position: "relative",
      border: "1px solid var(--ink-400)",
      aspectRatio: "16 / 10",
      background: "#000"
    }
  }, BROADCAST_PHOTOS.map((ph, idx) => /*#__PURE__*/React.createElement("img", {
    key: idx,
    src: ph.src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: idx === i ? 1 : 0,
      transition: "opacity 700ms var(--ease-out)"
    },
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.78))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      left: 8,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 7px",
      borderRadius: 5,
      background: "rgba(0,0,0,0.55)",
      border: "1px solid rgba(214,243,95,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "var(--spark-500)",
      animation: "sp-pulse-dot 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.2em",
      color: "var(--spark-500)"
    }
  }, "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 7,
      left: 9,
      right: 9,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.14em",
      color: "rgba(255,255,255,0.92)",
      textTransform: "uppercase"
    }
  }, p.label));
};
const SparkShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const onsite = shRef(0); // placeholder
  const [count, setCount] = shState(4208);
  shEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 6 + 2)), 1100);
    return () => clearInterval(id);
  }, [inView]);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Spark Showcase",
    style: {
      position: "relative",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "120px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: window.__resources?.r_assets_chrome_blob_medium_png || "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-blob-medium.png",
    style: {
      position: "absolute",
      left: "-10%",
      top: "20%",
      width: "38%",
      opacity: 0.32,
      mixBlendMode: "screen",
      pointerEvents: "none"
    },
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SparkLockup, {
    size: 104
  }), /*#__PURE__*/React.createElement(LivePill, null)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: "var(--spark-500)",
      fontSize: "clamp(28px, 3.6vw, 56px)",
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(Bracket, null, "Field marketing finally gets the intelligence it deserves."))), /*#__PURE__*/React.createElement(AccentBtn, {
    size: "lg",
    accent: "spark",
    onClick: () => location.href = "/spark"
  }, "Tour the platform")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
      border: "1px solid var(--ink-400)",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 20px",
      borderBottom: "1px solid var(--ink-400)",
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["#FF5F57", "#FFBD2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)"
    }
  }, "spark.igniteproductions.co / dashboard")), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--ink-400)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      background: "rgba(0,0,0,0.15)"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> PROGRAMS"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, [["Liquid Death / Q2 Tour", true], ["White Claw / Retail Demos", false], ["Mark Anthony / Sampling", false], ["Dude Wipes / Festivals", false]].map(([n, a]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "10px 12px",
      borderRadius: 8,
      background: a ? "rgba(214,243,95,0.1)" : "transparent",
      border: "1px solid " + (a ? "rgba(214,243,95,0.3)" : "transparent"),
      color: a ? "var(--spark-500)" : "var(--fg-2)",
      fontSize: 13,
      fontWeight: a ? 600 : 400,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, a ? "◉" : "○"), " ", n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> VIEWS")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, ["Map", "Activity", "Recaps", "Ambassadors", "Requests"].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "8px 12px",
      fontSize: 13,
      color: "var(--fg-2)"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> BROADCAST")), /*#__PURE__*/React.createElement(BroadcastTile, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 24
    }
  }, [{
    n: count.toLocaleString(),
    l: "Samples today",
    d: "+14%",
    color: "var(--spark-500)"
  }, {
    n: "142",
    l: "On-site now",
    d: "live",
    color: "var(--fg-1)"
  }, {
    n: "23",
    l: "Events today",
    d: "6 markets",
    color: "var(--fg-1)"
  }, {
    n: "91%",
    l: "On-time rate",
    d: "7d avg",
    color: "var(--success)"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: "14px 16px",
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: s.color
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, s.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.12em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> COVERAGE // LIVE"), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "17 MARKETS ACTIVE")), /*#__PURE__*/React.createElement(CoverageMap, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-100)",
      border: "1px solid var(--ink-400)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ACTIVITY FEED"), /*#__PURE__*/React.createElement(OpsLine, null, "LAST 30 MIN")), /*#__PURE__*/React.createElement(ActivityRows, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> SAMPLES / HOUR"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    animate: inView
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, [["GPS-verified check-ins", "Every ambassador clocks in from the actual venue. No paper sign-in sheets, no fudged timesheets."], ["Auto-generated recaps", "Event summaries write themselves — photos, notes, counts, attendance — sent to your inbox within hours."], ["Real-time dashboards", "Watch 17 markets at once. Leadership shouldn't have to ask 'what did we get?' — they should already see it."], ["Self-service requests", "Your team submits activation requests through Spark. Staffing, permits, briefs — all tracked."]].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--spark-500)",
      fontFamily: "var(--font-mono)",
      marginBottom: 10
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: 17,
      marginBottom: 8
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, d))))));
};
Object.assign(window, {
  CoverageMap,
  SparkShowcase,
  BarChart,
  ActivityRows,
  BroadcastTile
});
})();
