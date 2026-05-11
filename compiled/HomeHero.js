/* Homepage hero — full-bleed video, big typographic spine */
const {
  useState: hsState,
  useEffect: hsEffect,
  useRef: hsRef
} = React;
const HERO_VIDEO_URL = window.__resources?.r_68910151313e90f6c97448a5_Untitled_20desi || "https://cdn.prod.website-files.com/688129f3841088c282c326c4/68910151313e90f6c97448a5_Untitled%20design-transcode.mp4";
const MOMENTS = [["AUSTIN, TX", "WHITE CLAW", "SXSW TAKEOVER", "03:14 PM CT"], ["BROOKLYN, NY", "LIQUID DEATH", "WARPED TOUR", "06:48 PM ET"], ["LOS ANGELES", "DUDE WIPES", "SUMMER POP-UP", "12:02 PM PT"], ["MIAMI, FL", "MAS+", "MESSI ACTIVATION", "07:11 PM ET"], ["CHICAGO, IL", "TOTAL WIRELESS", "LOLLAPALOOZA", "05:33 PM CT"], ["NASHVILLE, TN", "SMALLS SLIDERS", "DOWNTOWN SAMPLING", "01:22 PM CT"]];

/* Word rotators that sit under "We turn" */
/* Edgy rotators — who & what we convert. */
const WORDS = ["consumers", "strangers", "skeptics", "streets", "stadiums", "shoppers", "crowds", "side-eyes"];
const HomeHero = () => {
  const [idx, setIdx] = hsState(0);
  const [wordIdx, setWordIdx] = hsState(0);
  const videoRef = hsRef(null);
  hsEffect(() => {
    const a = setInterval(() => setIdx(i => (i + 1) % MOMENTS.length), 3600);
    const b = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2400);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  // Best-effort autoplay (some browsers gate it until interaction)
  hsEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Home Hero",
    style: {
      position: "relative",
      background: "#0A0A0A",
      color: "#fff",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: HERO_VIDEO_URL,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.55) saturate(1.1) contrast(1.06)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `
            radial-gradient(ellipse at 82% 18%, rgba(255,90,31,0.32), transparent 45%),
            radial-gradient(ellipse at 12% 85%, rgba(255,182,39,0.16), transparent 40%),
            linear-gradient(180deg, rgba(10,10,10,0.20) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.96) 100%)
          `
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.07,
      pointerEvents: "none",
      backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 3px)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta",
    style: {
      position: "relative",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-inner",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 14,
      borderBottom: "1px solid rgba(255,255,255,0.12)",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "5px 10px",
      background: "#FF5A1F",
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      borderRadius: 3
    }
  }, "\u2605 VETERAN-OWNED"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "-0.005em",
      color: "#fff",
      textTransform: "none"
    }
  }, "Event Marketing ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.4)"
    }
  }, "+"), " Brand Ambassador Agency")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.5)"
    }
  }, "EST. 2018 \xB7 ALL 50 STATES")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-main",
    style: {
      position: "relative",
      zIndex: 3,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(56px, 11vw, 188px)",
      lineHeight: 0.86,
      letterSpacing: "-0.05em",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "rgba(255,255,255,0.94)"
    }
  }, "We turn"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      position: "relative",
      height: "1em",
      overflow: "hidden"
    }
  }, WORDS.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      position: "absolute",
      inset: 0,
      fontStyle: "italic",
      fontWeight: 700,
      background: "linear-gradient(135deg, #FF5A1F 0%, #FFB627 45%, #FF8A3D 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transform: i === wordIdx ? "translateY(0)" : i === (wordIdx - 1 + WORDS.length) % WORDS.length ? "translateY(-110%)" : "translateY(110%)",
      transition: "transform 600ms cubic-bezier(0.7, 0, 0.25, 1)"
    }
  }, w))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "#fff"
    }
  }, "into ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "superfans."))), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      marginTop: 48,
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-lede",
    style: {
      fontSize: 19,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.92)",
      maxWidth: 600,
      fontWeight: 400,
      margin: 0,
      textWrap: "pretty"
    }
  }, "Veteran-owned. Operator-built. Running ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FFB627",
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, "5,000+ activations a year"), " for the brands picking fights with their category \u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.78)"
    }
  }, "beverage, alcohol, CPG, telecom, QSR, lifestyle, and whoever's next.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px",
      borderRadius: 14,
      background: "rgba(10,10,10,0.55)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.14)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: "linear-gradient(90deg, transparent, #FF5A1F, transparent)",
      animation: "sweep 3s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "#FF5A1F"
    }
  }, "\u25CF LIVE RIGHT NOW"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: "rgba(255,255,255,0.5)"
    }
  }, MOMENTS[idx][3])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      marginBottom: 4
    }
  }, MOMENTS[idx][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, MOMENTS[idx][0], " \xB7 ", MOMENTS[idx][2]))), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginTop: 40,
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://igniteproductions.co/contact?urgent=1",
    style: {
      padding: "16px 24px",
      borderRadius: 999,
      background: "#FF5A1F",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15.5,
      letterSpacing: "-0.01em",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      transition: "transform 200ms, box-shadow 200ms",
      boxShadow: "0 12px 32px rgba(255,90,31,0.35)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 20px 48px rgba(255,90,31,0.5)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,90,31,0.35)";
    }
  }, "Request a quote ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "https://igniteproductions.co/contact?urgent=1",
    style: {
      padding: "16px 24px",
      borderRadius: 999,
      background: "transparent",
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,0.28)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15.5,
      letterSpacing: "-0.01em",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      transition: "border-color 200ms, background 200ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "#fff";
      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
      e.currentTarget.style.background = "transparent";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FF6969"
    }
  }, "\u25CF"), " Request staff now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3,
      borderTop: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(10,10,10,0.7)",
      backdropFilter: "blur(20px)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 0",
      display: "flex",
      gap: 48,
      whiteSpace: "nowrap",
      animation: "marquee 48s linear infinite",
      width: "max-content"
    }
  }, [...Array(2)].flatMap((_, r) => [["42,000+", "BRAND AMBASSADORS"], ["5,000+", "ACTIVATIONS / YEAR"], ["50", "STATES COVERED"], ["200+", "BRANDS ACTIVATED"], ["25M+", "CONSUMERS REACHED"], ["87%", "CLIENT RETENTION"], ["20%+", "DEMO CONVERSION"], ["48hr", "RUSH STAFFING"]].map(([n, l], i) => /*#__PURE__*/React.createElement("span", {
    key: r + "-" + i,
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 14,
      paddingRight: 48,
      borderRight: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: "-0.02em",
      color: "#FFB627"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.65)"
    }
  }, l)))))));
};
Object.assign(window, {
  HomeHero
});