(function(){if (typeof window !== "undefined" && window.OpsLine) return;
/*
 * Shared UI kit components — Ignite / Spark
 * Requires React 18, Babel. Exposes components on window.
 */

const {
  useState,
  useEffect,
  useRef
} = React;

/* ------------ primitives ------------ */
const Eyebrow = ({
  children,
  color = "var(--spark-500)",
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color,
    ...style
  }
}, children);
const Bracket = ({
  children,
  color = "var(--spark-500)"
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
  style: {
    color,
    fontFamily: "var(--font-mono)",
    marginRight: 10
  }
}, "<"), children, /*#__PURE__*/React.createElement("span", {
  style: {
    color,
    fontFamily: "var(--font-mono)",
    marginLeft: 10
  }
}, ">"));
const LivePill = ({
  label = "LIVE"
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: 999,
    background: "rgba(255,77,77,0.14)",
    color: "#FF6969",
    border: "1px solid rgba(255,77,77,0.35)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "#FF4D4D",
    boxShadow: "0 0 8px #FF4D4D",
    animation: "livepulse 1.2s infinite"
  }
}), label);
const Btn = ({
  kind = "primary",
  children,
  size = "md",
  icon,
  onClick,
  style = {}
}) => {
  const sizes = {
    sm: "8px 12px",
    md: "12px 18px",
    lg: "16px 24px"
  };
  const kinds = {
    primary: {
      background: "var(--spark-500)",
      color: "#0A0B0D",
      boxShadow: "0 0 0 1px rgba(214,243,95,0.3), 0 8px 32px rgba(214,243,95,0.22)"
    },
    ignite: {
      background: "var(--ignite-500)",
      color: "#fff"
    },
    secondary: {
      background: "var(--ink-300)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)"
    },
    ghost: {
      background: "transparent",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size === "lg" ? 16 : 14,
      padding: sizes[size],
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      letterSpacing: "-0.01em",
      ...kinds[kind],
      ...style
    }
  }, children, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500
    }
  }, "\u2192"));
};
const Chip = ({
  children,
  tone = "neutral"
}) => {
  const tones = {
    neutral: {
      bg: "var(--ink-300)",
      fg: "var(--fg-2)",
      br: "var(--ink-400)"
    },
    spark: {
      bg: "rgba(214,243,95,0.14)",
      fg: "var(--spark-500)",
      br: "rgba(214,243,95,0.35)"
    },
    ignite: {
      bg: "rgba(255,90,31,0.14)",
      fg: "#FF8A5A",
      br: "rgba(255,90,31,0.35)"
    },
    success: {
      bg: "rgba(107,228,134,0.14)",
      fg: "#9BF0B0",
      br: "rgba(107,228,134,0.35)"
    },
    warn: {
      bg: "rgba(255,182,39,0.14)",
      fg: "#FFD37A",
      br: "rgba(255,182,39,0.35)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: 999,
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.br}`,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, children);
};

/* Resolve asset paths relative to project root from any page depth.
   window.__assetsBase can be set per-page to override; otherwise we walk up
   until we hit a folder that contains /assets/. */
const __sparkAssetBase = (() => {
  if (typeof window !== "undefined" && window.__assetsBase) return window.__assetsBase;
  // document.baseURI is the absolute URL of the HTML page.
  const url = new URL(document.baseURI);
  const parts = url.pathname.split("/").filter(Boolean);
  parts.pop(); // drop filename
  // climb until we find a parent that contains /assets — cheap heuristic
  // for any depth. Resolves to <origin>/.../<projectRoot>/assets/
  // This site layout: root index.html + pages/*.html. Assets at /assets/.
  let prefix = "./";
  if (parts.includes("pages")) prefix = "../";
  return prefix + "https://kyle915.github.io/ignite-webflow-assets/assets/";
})();
const assetUrl = name => __sparkAssetBase + name;
const SparkLogomark = ({
  size = 28
}) => /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_spark_logomark_pixel_png || "https://kyle915.github.io/ignite-webflow-assets/assets/spark-logomark-pixel.png",
  width: size,
  height: size,
  style: {
    imageRendering: "pixelated",
    display: "block"
  },
  alt: ""
});

/* Spark-by-Ignite wordmark lockup */
const SparkLockup = ({
  size = 20,
  rel = ""
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement(SparkLogomark, {
  size: size + 8
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: size,
    letterSpacing: "-0.02em",
    display: "inline-flex",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--spark-500)"
  }
}, "Spark"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: size * 0.55,
    fontWeight: 400,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    margin: "0 7px"
  }
}, "by"), /*#__PURE__*/React.createElement(IgniteWordmark, {
  size: size * 0.95,
  variant: "white",
  rel: rel
})));

/* Ignite wordmark, standalone — uses the official typemark image */
const IgniteWordmark = ({
  size = 20,
  variant = "white",
  rel = ""
}) => {
  const src = variant === "black" ? window.__resources?.r_assets_ignite_typemark_black_png || "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-black.png" : window.__resources?.r_assets_ignite_typemark_white_png || "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png";
  return /*#__PURE__*/React.createElement("img", {
    src: rel + src,
    alt: "Ignite",
    style: {
      height: size,
      width: "auto",
      display: "inline-block",
      verticalAlign: "middle"
    }
  });
};

/* Grid overlay — subtle ops texture */
const GridOverlay = ({
  size = 32,
  opacity = 0.03,
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
    ...style
  }
});

/* Monospace uptime line — e.g. ">> AUSTIN // LIVE // 14 ON-SITE" */
const OpsLine = ({
  children,
  glow = false
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: glow ? "var(--spark-500)" : "var(--fg-3)"
  }
}, children);
Object.assign(window, {
  Eyebrow,
  Bracket,
  LivePill,
  Btn,
  Chip,
  SparkLogomark,
  SparkLockup,
  IgniteWordmark,
  GridOverlay,
  OpsLine
});
})();
