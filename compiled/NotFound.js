/* 404 / not-found page — branded, with one cool animation matching ThankYou. */
const {
  useState: useNfState,
  useEffect: useNfEffect
} = React;
const NotFound = () => {
  const [mounted, setMounted] = useNfState(false);
  useNfEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
  const popular = [{
    label: "Services",
    href: "/ignite-services"
  }, {
    label: "Work",
    href: "/work"
  }, {
    label: "Spark Platform",
    href: "/spark"
  }, {
    label: "About",
    href: "/about"
  }, {
    label: "Contact",
    href: "/contact"
  }];
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
      animation: "nf-grid-drift 24s linear infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 760,
      height: 760,
      borderRadius: "50%",
      background: "radial-gradient(circle at 30% 40%, rgba(255,90,31,0.22), transparent 55%)",
      filter: "blur(40px)",
      animation: "nf-blob-a 14s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 760,
      height: 760,
      borderRadius: "50%",
      background: "radial-gradient(circle at 70% 60%, rgba(214,243,95,0.14), transparent 55%)",
      filter: "blur(40px)",
      animation: "nf-blob-b 18s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 78% 22%, rgba(255,255,255,0.4), transparent), radial-gradient(1.5px 1.5px at 33% 78%, rgba(214,243,95,0.5), transparent), radial-gradient(1px 1px at 88% 84%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 56% 12%, rgba(255,90,31,0.6), transparent), radial-gradient(1.5px 1.5px at 22% 52%, rgba(255,255,255,0.35), transparent), radial-gradient(1px 1px at 92% 48%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 8% 88%, rgba(255,255,255,0.4), transparent), radial-gradient(2px 2px at 64% 64%, rgba(214,243,95,0.3), transparent)",
      animation: "nf-twinkle 6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
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
        @keyframes nf-grid-drift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(56px, 56px); }
        }
        @keyframes nf-blob-a {
          0%, 100% { transform: translate(-55%, -45%) scale(1); }
          50%      { transform: translate(-45%, -55%) scale(1.15); }
        }
        @keyframes nf-blob-b {
          0%, 100% { transform: translate(-45%, -55%) scale(1.1); }
          50%      { transform: translate(-55%, -45%) scale(0.95); }
        }
        @keyframes nf-twinkle {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
        @keyframes nf-glitch {
          0%, 92%, 100% { transform: translate(0,0); filter: none; }
          93%           { transform: translate(-2px, 1px); filter: hue-rotate(8deg); }
          95%           { transform: translate(2px, -1px); filter: hue-rotate(-8deg); }
          97%           { transform: translate(-1px, 0); filter: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      maxWidth: 720,
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.28em",
      color: "var(--ignite-500)",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, ">> SIGNAL LOST \xB7 ERROR 404"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "clamp(120px, 22vw, 280px)",
      lineHeight: 0.9,
      letterSpacing: "-0.05em",
      background: "linear-gradient(180deg, #FFB627 0%, var(--ignite-500) 60%, rgba(255,90,31,0.4) 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 60px rgba(255,90,31,0.3)",
      animation: "nf-glitch 7s steps(1, end) infinite",
      margin: 0
    }
  }, "404"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(32px, 4.6vw, 56px)",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      margin: "8px 0 0"
    }
  }, "This page took a ", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "different shift.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 17,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      maxWidth: 520,
      margin: "18px auto 0"
    }
  }, "The link is broken, the page was renamed, or it never made it to the floor. Let's get you back to something useful."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      justifyContent: "center",
      gap: 14,
      flexWrap: "wrap"
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
      transition: "transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out)",
      textDecoration: "none"
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
  })), "Back to homepage"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 28px",
      borderRadius: 999,
      background: "transparent",
      color: "var(--fg-1)",
      border: "1px solid rgba(255,255,255,0.18)",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      transition: "transform 160ms var(--ease-out), border-color 160ms var(--ease-out)",
      textDecoration: "none"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
    }
  }, "Talk to us")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.28em",
      color: "var(--fg-3, rgba(255,255,255,0.5))",
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, "Try one of these instead"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 10
    }
  }, popular.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.href,
    href: p.href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "9px 16px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "var(--fg-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      textDecoration: "none",
      transition: "background 160ms var(--ease-out), border-color 160ms var(--ease-out), transform 160ms var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "rgba(255,90,31,0.12)";
      e.currentTarget.style.borderColor = "rgba(255,90,31,0.4)";
      e.currentTarget.style.transform = "translateY(-1px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, p.label))))));
};
const NotFoundPage = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "404 Not Found"
}, /*#__PURE__*/React.createElement(SiteNav, {
  active: ""
}), /*#__PURE__*/React.createElement(NotFound, null), /*#__PURE__*/React.createElement(SiteFooter, null));
Object.assign(window, {
  NotFound,
  NotFoundPage
});