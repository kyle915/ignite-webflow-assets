/* Tweaks panel + main App for the homepage */
const {
  useState: taState,
  useEffect: taEffect
} = React;
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "ignite",
  "heroHeadline": "We turn sparks into superfans.",
  "density": "comfy",
  "liveFeedSpeed": 1800,
  "showCoverageMap": true
} /*EDITMODE-END*/;

/* Install global tweak state */
window.__TWEAKS = Object.assign({}, DEFAULTS, window.__TWEAKS || {});
const TweaksPanel = () => {
  const [open, setOpen] = taState(false);
  const [on, setOn] = taState(false);
  const [t, setT] = taState(window.__TWEAKS);
  taEffect(() => {
    const onMsg = e => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setOn(true);
      if (e.data.type === "__deactivate_edit_mode") setOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({
      type: "__edit_mode_available"
    }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const update = patch => {
    const next = {
      ...t,
      ...patch
    };
    setT(next);
    window.__TWEAKS = next;
    window.parent.postMessage({
      type: "__edit_mode_set_keys",
      edits: patch
    }, "*");
    // trigger re-render
    window.dispatchEvent(new Event("tweaks-changed"));
  };
  if (!on) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 200,
      fontFamily: "var(--font-body)"
    }
  }, !open ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    style: {
      padding: "12px 16px",
      borderRadius: 999,
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u25C9"), " Tweaks") : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      background: "var(--ink-100)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      borderRadius: 14,
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: "1px solid var(--ink-400)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> TWEAKS"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      background: "transparent",
      border: "none",
      color: "var(--fg-3)",
      cursor: "pointer",
      fontSize: 18
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 8
    }
  }, "Accent color"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, [{
    k: "ignite",
    bg: "var(--ignite-500)",
    fg: "#fff",
    label: "Ignite"
  }, {
    k: "ember",
    bg: "#FFB627",
    fg: "#0A0B0D",
    label: "Ember"
  }, {
    k: "spark",
    bg: "var(--spark-500)",
    fg: "#0A0B0D",
    label: "Spark"
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.k,
    onClick: () => update({
      accent: o.k
    }),
    style: {
      flex: 1,
      padding: "10px 12px",
      background: t.accent === o.k ? o.bg : "var(--ink-200)",
      color: t.accent === o.k ? o.fg : "var(--fg-2)",
      border: "1px solid " + (t.accent === o.k ? o.bg : "var(--ink-400)"),
      borderRadius: 8,
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.15em",
      textTransform: "uppercase"
    }
  }, o.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 8
    }
  }, "Hero headline"), /*#__PURE__*/React.createElement("select", {
    value: t.heroHeadline,
    onChange: e => update({
      heroHeadline: e.target.value
    }),
    style: {
      width: "100%",
      padding: "10px 12px",
      background: "var(--ink-200)",
      color: "var(--fg-1)",
      border: "1px solid var(--ink-400)",
      borderRadius: 8,
      fontFamily: "var(--font-body)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "We turn sparks into superfans."
  }, "We turn sparks into superfans."), /*#__PURE__*/React.createElement("option", {
    value: "Field marketing, done right."
  }, "Field marketing, done right."), /*#__PURE__*/React.createElement("option", {
    value: "The agency that moves product."
  }, "The agency that moves product."), /*#__PURE__*/React.createElement("option", {
    value: "Activations that convert."
  }, "Activations that convert."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 8
    }
  }, "Live feed speed \xB7 ", (t.liveFeedSpeed / 1000).toFixed(1), "s"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "800",
    max: "3500",
    step: "100",
    value: t.liveFeedSpeed,
    onChange: e => update({
      liveFeedSpeed: +e.target.value
    }),
    style: {
      width: "100%",
      accentColor: "var(--ignite-500)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: t.showCoverageMap,
    onChange: e => update({
      showCoverageMap: e.target.checked
    }),
    style: {
      accentColor: "var(--ignite-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-2)"
    }
  }, "Show coverage map"))))));
};
Object.assign(window, {
  TweaksPanel
});