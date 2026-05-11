/* Thank-you / confirmation page — simple, focused, one cool animation. */
const {
  useState: useTyState,
  useEffect: useTyEffect
} = React;
const ThankYou = ({
  rel = "../"
}) => {
  const [mounted, setMounted] = useTyState(false);
  useTyEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "calc(100vh - 68px)",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-10%",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
      backgroundSize: "56px 56px",
      maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
      animation: "ty-grid-drift 24s linear infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 700,
      height: 700,
      borderRadius: "50%",
      background: "radial-gradient(circle at 30% 40%, rgba(255,90,31,0.22), transparent 55%)",
      filter: "blur(40px)",
      animation: "ty-blob-a 14s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 700,
      height: 700,
      borderRadius: "50%",
      background: "radial-gradient(circle at 70% 60%, rgba(214,243,95,0.16), transparent 55%)",
      filter: "blur(40px)",
      animation: "ty-blob-b 18s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 78% 22%, rgba(255,255,255,0.4), transparent), radial-gradient(1.5px 1.5px at 33% 78%, rgba(214,243,95,0.5), transparent), radial-gradient(1px 1px at 88% 84%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 56% 12%, rgba(255,90,31,0.6), transparent), radial-gradient(1.5px 1.5px at 22% 52%, rgba(255,255,255,0.35), transparent), radial-gradient(1px 1px at 92% 48%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 8% 88%, rgba(255,255,255,0.4), transparent), radial-gradient(2px 2px at 64% 64%, rgba(214,243,95,0.3), transparent)",
      animation: "ty-twinkle 6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 0,
      height: 0,
      pointerEvents: "none"
    }
  }, [0, 0.9, 1.8].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
      width: 200,
      height: 200,
      borderRadius: "50%",
      border: "1px solid rgba(255,90,31,0.4)",
      animation: `radar 3.2s ease-out ${d}s infinite`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "10%",
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.3), transparent)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "10%",
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(214,243,95,0.25), transparent)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("style", null, `
        @keyframes ty-grid-drift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(56px, 56px); }
        }
        @keyframes ty-blob-a {
          0%, 100% { transform: translate(-55%, -45%) scale(1); }
          50%      { transform: translate(-45%, -55%) scale(1.15); }
        }
        @keyframes ty-blob-b {
          0%, 100% { transform: translate(-45%, -55%) scale(1.1); }
          50%      { transform: translate(-55%, -45%) scale(0.95); }
        }
        @keyframes ty-twinkle {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      maxWidth: 640,
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: "50%",
      margin: "0 auto 28px",
      background: "linear-gradient(145deg, rgba(255,90,31,0.18), rgba(255,90,31,0.05))",
      border: "1px solid rgba(255,90,31,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 0 1px rgba(255,90,31,0.2), 0 8px 32px rgba(255,90,31,0.25)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "38",
    height: "38",
    viewBox: "0 0 38 38"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 19 L17 26 L29 12",
    fill: "none",
    stroke: "var(--ignite-500)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "40",
    strokeDashoffset: mounted ? "0" : "40",
    style: {
      transition: "stroke-dashoffset 700ms 200ms var(--ease-out)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.28em",
      color: "var(--ignite-500)",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, ">> MESSAGE RECEIVED"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 6vw, 72px)",
      lineHeight: 1.02,
      letterSpacing: "-0.035em",
      margin: 0
    }
  }, "Thanks \u2014 we'll be", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "in touch soon.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 17,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      maxWidth: 480,
      margin: "22px auto 0"
    }
  }, "A real human strategist will reach out within one business day. Keep an eye on your inbox."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 28px",
      borderRadius: 999,
      background: "var(--ignite-500)",
      color: "#0A0B0D",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      boxShadow: "0 8px 32px rgba(255,90,31,0.35), 0 0 0 1px rgba(255,90,31,0.4)",
      transition: "transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,90,31,0.5), 0 0 0 1px rgba(255,90,31,0.5)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,90,31,0.35), 0 0 0 1px rgba(255,90,31,0.4)";
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2L3 7L8 12M3 7H13",
    stroke: "currentColor",
    strokeWidth: "1.8",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back to homepage"))));
};
Object.assign(window, {
  ThankYou
});