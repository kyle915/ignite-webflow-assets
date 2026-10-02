/* Compiled from design-source/components/spark-v2/V2AppFrame.jsx by compile-v2appframe.js */
(function(){
if (window.V2AppFrame) return;
/* Live Spark dashboard screens, embedded in the marketing page's device frames.
   Renders pages/spark-app-demo.html in an iframe scaled to fill its container,
   so each section shows the real screen its copy is describing. */
const V2_APPW = 1120,
  V2_APPH = 700;
const V2AppFrame = ({
  view = "dashboard",
  tab,
  top = 0,
  interactive = false,
  label
}) => {
  const wrap = React.useRef(null);
  const [s, setS] = React.useState(0);
  React.useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const read = () => setS(el.clientWidth / V2_APPW);
    read();
    if (typeof ResizeObserver === "function") {
      const ro = new ResizeObserver(read);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);
  const src = "https://sparkbyignite.igniteproductions.co/spark-app-demo?frame=1&view=" + view + (tab ? "&tab=" + encodeURIComponent(tab) : "");
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    className: "v2-appframe"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-label": "Sample data",
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 3,
      padding: "3px 8px",
      borderRadius: 999,
      background: "rgba(10,11,13,0.82)",
      border: "1px solid rgba(255,182,39,0.55)",
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: 9,
      letterSpacing: "0.16em",
      color: "#FFB627",
      pointerEvents: "none"
    }
  }, "SAMPLE DATA"), /*#__PURE__*/React.createElement("iframe", {
    src: src,
    title: label || "Spark dashboard, " + view,
    scrolling: "no",
    tabIndex: -1,
    style: {
      position: "absolute",
      left: 0,
      top: -(top * (s || 0)) + "px",
      width: V2_APPW,
      height: V2_APPH + top,
      border: 0,
      transform: "scale(" + (s || 0.001) + ")",
      transformOrigin: "top left",
      pointerEvents: interactive ? "auto" : "none",
      opacity: s ? 1 : 0,
      transition: "opacity .35s ease"
    }
  }));
};

/* which screen belongs to which piece of copy — [view, scroll offset] */
const V2_STEP_SCREENS = [["tracker", 276], ["calendar", 0], null, ["today", 0], ["recaps", 338], ["reports", 209]];
Object.assign(window, {
  V2AppFrame,
  V2_STEP_SCREENS,
  V2_APPW,
  V2_APPH
});
})();
