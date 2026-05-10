function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Additional shared primitives for the full marketing site */
const {
  useState: useState2,
  useEffect: useEffect2,
  useRef: useRef2
} = React;

/* Container */
const Container = ({
  children,
  style = {},
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: className,
  style: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 32px",
    ...style
  }
}, children);

/* useInView — flips .in class when element scrolls into view */
const useInView = (opts = {
  threshold: 0.15
}) => {
  const ref = useRef2(null);
  const [inView, setInView] = useState2(false);
  useEffect2(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, opts);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};
const Rise = ({
  children,
  delay = 0,
  as: Tag = "div",
  style = {},
  ...rest
}) => {
  const [ref, inView] = useInView();
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: "rise-on-view " + (inView ? "in" : ""),
    style: {
      transitionDelay: delay + "ms",
      ...style
    }
  }, rest), children);
};

/* Animated counter */
const CountUp = ({
  to,
  suffix = "",
  duration = 1500,
  prefix = ""
}) => {
  const [ref, inView] = useInView();
  const [v, setV] = useState2(0);
  useEffect2(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = t => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, v.toLocaleString(), suffix);
};

/* Accent-aware primary button (honors tweak state) */
const AccentBtn = ({
  children,
  size = "md",
  style = {},
  onClick,
  icon
}) => {
  const accent = window.__TWEAKS && window.__TWEAKS.accent || "ignite";
  const bg = accent === "spark" ? "var(--spark-500)" : accent === "ember" ? "#FFB627" : "var(--ignite-500)";
  const fg = accent === "ignite" ? "#fff" : "#0A0B0D";
  const glow = accent === "spark" ? "0 0 0 1px rgba(214,243,95,0.3), 0 8px 32px rgba(214,243,95,0.22)" : accent === "ember" ? "0 0 0 1px rgba(255,182,39,0.35), 0 8px 32px rgba(255,182,39,0.28)" : "0 0 0 1px rgba(255,90,31,0.3), 0 8px 32px rgba(255,90,31,0.25)";
  const sizes = {
    sm: "8px 12px",
    md: "12px 18px",
    lg: "16px 26px"
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size === "lg" ? 16 : size === "sm" ? 13 : 14,
      padding: sizes[size],
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      letterSpacing: "-0.01em",
      background: bg,
      color: fg,
      boxShadow: glow,
      transition: "transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out)",
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.98)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, children, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500
    }
  }, "\u2192"));
};
const GhostBtn = ({
  children,
  size = "md",
  onClick,
  icon,
  style = {}
}) => {
  const sizes = {
    sm: "8px 12px",
    md: "12px 18px",
    lg: "16px 26px"
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size === "lg" ? 16 : size === "sm" ? 13 : 14,
      padding: sizes[size],
      borderRadius: 10,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      letterSpacing: "-0.01em",
      background: "transparent",
      color: "inherit",
      border: "1px solid currentColor",
      opacity: 0.88,
      transition: "opacity 160ms var(--ease-out), background 160ms var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.88;
      e.currentTarget.style.background = "transparent";
    }
  }, children, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500
    }
  }, "\u2192"));
};
Object.assign(window, {
  Container,
  useInView,
  Rise,
  CountUp,
  AccentBtn,
  GhostBtn
});