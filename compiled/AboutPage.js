/* About Ignite — restructured: small core team, national-scale network */

const {
  useState: abState,
  useEffect: abEffect,
  useRef: abRef
} = React;
if (typeof document !== "undefined" && !document.getElementById("about-kf")) {
  const _kf = document.createElement("style");
  _kf.id = "about-kf";
  _kf.textContent = `
    @keyframes abPulse { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:1;transform:scale(1.06)} }
    @keyframes abTextPulse { 0%,100%{text-shadow:0 0 18px rgba(255,90,31,.30)} 50%{text-shadow:0 0 38px rgba(255,90,31,.65)} }
    @keyframes abBloom1 { 0%,100%{opacity:.55;transform:translate(-6%,6%) scale(1)} 50%{opacity:.9;transform:translate(-2%,2%) scale(1.1)} }
    @keyframes abBloom2 { 0%,100%{opacity:.35;transform:translate(6%,10%) scale(1)} 50%{opacity:.7;transform:translate(2%,4%) scale(1.15)} }
    @keyframes abScan { 0%{transform:translateY(-20%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(120vh);opacity:0} }
    @keyframes abCount { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes abCaret { 0%,49%{opacity:1} 50%,100%{opacity:0} }
    @keyframes abSweepIn {
      0%   { opacity:0; transform:translateX(60%); filter:blur(8px); }
      60%  { opacity:1; filter:blur(0); }
      100% { opacity:1; transform:translateX(0);   filter:blur(0); }
    }
    @keyframes abGlowTrail {
      0%   { opacity:0; transform:translateX(80%) scaleX(0.4); }
      40%  { opacity:0.95; }
      100% { opacity:0; transform:translateX(-20%) scaleX(1.2); }
    }
    @keyframes abLineFadeUp {
      from { opacity:0; transform:translateY(14px); }
      to   { opacity:1; transform:translateY(0); }
    }
  `;
  document.head.appendChild(_kf);
}

/* ---------- DATA ---------- */
const ABOUT_VALUES = [{
  n: "01",
  t: "Show up ready",
  d: "We prep, brief, and rehearse. Our ambassadors are trained on your brand — not reading a script off their phone."
}, {
  n: "02",
  t: "Prove it. Don't pitch it.",
  d: "Every program is measured. Spark shows you what happened in real time. No post-event PDFs."
}, {
  n: "03",
  t: "Move the product",
  d: "Awareness is a side effect. The goal is trial, conversion, and repeat purchase. We optimize for that."
}, {
  n: "04",
  t: "Excellence over apology",
  d: "Good isn't enough. We deliver at a level that makes brands proud and consumers loyal."
}];
const ABOUT_LEADERS = [{
  name: "Kyle Christiansen",
  role: "Founder · Senior Director",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-kyle.webp",
  resKey: "r_assets_team_kyle_webp",
  bio: "20+ years CPG marketing. Red Bull, 160over90, Amazon. Veteran. Built Ignite to do experiential the way operators actually want it run."
}, {
  name: "Baesha",
  role: "Director, Experiential Sales",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-baesha.png",
  resKey: "r_assets_team_baesha_png",
  bio: "Runs the experiential pipeline end-to-end — from scoping the brief to deploying the team in market."
}, {
  name: "Junior",
  role: "Director of Sales",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-junior.png",
  resKey: "r_assets_team_junior_png",
  bio: "Owns CPG and retail accounts. The one your brand manager will know on a first-name basis."
}, {
  name: "Sara",
  role: "Account Director",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-sara.webp",
  resKey: "r_assets_team_sara_webp",
  bio: "Senior account oversight. Keeps the brief, the budget, and the brand all pointing the same direction."
}, {
  name: "Taylor",
  role: "Creative Director",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-taylor.jpg",
  resKey: "r_assets_team_taylor_jpg",
  bio: "Owns the look and feel of every activation — from booth concept to ambassador wardrobe to recap design."
}, {
  name: "Keis",
  role: "Project Coordinator",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-keis.png",
  resKey: "r_assets_team_keis_png",
  bio: "The operational backbone. Schedules, staffing, logistics — the work that makes the work happen."
}, {
  name: "Nena",
  role: "Data Analyst",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-nena.webp",
  resKey: "r_assets_team_nena_webp",
  bio: "Turns raw activation data into the recap that wins next year's program. Lives in Spark."
}, {
  name: "Brad",
  role: "Account Manager",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-brad.png",
  resKey: "r_assets_team_brad_png",
  bio: "Day-to-day account lead. Keeps activations on schedule, on budget, and on-brief from kickoff to recap."
}, {
  name: "Myriant",
  role: "Sr. Account Coordinator",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-myriant.webp",
  resKey: "r_assets_team_myriant_webp",
  bio: "Coordinates the moving pieces — staffing, assets, vendors — so the field team can focus on the consumer."
}, {
  name: "Madi",
  role: "Account & Activation Manager",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/team-madi.png",
  resKey: "r_assets_team_madi_png",
  bio: "Runs accounts and activations end to end — from kickoff brief through live execution on the ground."
}];
const ABOUT_TIMELINE = [{
  y: "2018",
  t: "Founded",
  d: "Kyle launches Ignite Productions — CPG-focused, veteran-operated."
}, {
  y: "2020",
  t: "VOSB Certified",
  d: "Officially recognized as a Veteran-Owned Small Business."
}, {
  y: "2021",
  t: "Liquid Death",
  d: "First multi-market national tour. 47 markets, 3,000+ events."
}, {
  y: "2023",
  t: "Build shop online",
  d: "In-house fabrication. Custom booths, mobile units, retail displays."
}, {
  y: "2024",
  t: "Spark launches",
  d: "Real-time field marketing platform. Replaces post-event PDFs forever."
}, {
  y: "2026",
  t: "Today",
  d: "42,000+ ambassadors. 50 states. 200+ brands activated. Still veteran-owned."
}];

/* Real client logos — same source as the homepage marquee */
const ABOUT_CLIENT_LOGOS = [{
  name: "Liquid Death",
  url: window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"
}, {
  name: "White Claw",
  url: window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"
}, {
  name: "Mas+ Messi",
  url: window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp"
}, {
  name: "Krispy Krunchy",
  url: window.__resources?.r_688c1b20a33960875f5d7bc0_krispy_krunchy_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp"
}, {
  name: "Total Wireless",
  url: window.__resources?.r_688c1bb2f2c798b4cb850d2e_total_wireless_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp"
}, {
  name: "Dude Wipes",
  url: window.__resources?.r_688c3839708ed185c2de5ba9_dude_wipes || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp"
}, {
  name: "Glendonough",
  url: window.__resources?.r_688c3841bacf82489917b2b9_glendonough_dis || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp"
}, {
  name: "Smalls Sliders",
  url: window.__resources?.r_688c377975c7a23684962d73_smalls_sliders || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp"
}, {
  name: "Marc Anthony",
  url: window.__resources?.r_688c378239e6dc2ebedde728_marc_anthony_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"
}];
const ABOUT_KEY_MARKETS = ["Los Angeles", "New York", "Chicago", "Dallas", "Houston", "Miami", "Atlanta", "Phoenix", "Denver", "Seattle", "Boston", "San Francisco", "Austin", "Nashville", "Philadelphia", "Las Vegas", "Charlotte", "Minneapolis", "Portland", "San Diego"];

/* Hero typewriter — types the first line, then triggers the sweep-in for the rest */
const useTypewriter = (text, speed = 55, startDelay = 250) => {
  const [out, setOut] = abState("");
  const [done, setDone] = abState(false);
  abEffect(() => {
    let i = 0;
    let cancelled = false;
    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i++;
        setOut(text.slice(0, i));
        if (i < text.length) setTimeout(tick, speed);else setDone(true);
      };
      tick();
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);
  return [out, done];
};

/* Hero proof card — count-up tile (or text tile when `text` is supplied) */
const HeroProofCard = ({
  target,
  suffix = "",
  label,
  delay = 0,
  text = null
}) => {
  const [v, setV] = abState(0);
  const [shown, setShown] = abState(false);
  abEffect(() => {
    const showT = setTimeout(() => setShown(true), delay + 200);
    if (text != null) return () => clearTimeout(showT);
    const start = performance.now() + delay + 250;
    let raf;
    const tick = now => {
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (now - start) / 1600);
      const eased = 1 - Math.pow(1 - t, 3);
      setV(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      clearTimeout(showT);
      cancelAnimationFrame(raf);
    };
  }, [target, delay, text]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "22px 24px",
      borderRadius: 14,
      background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
      border: "1px solid rgba(255,255,255,0.10)",
      overflow: "hidden",
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(8px)",
      transition: "opacity 600ms ease, transform 600ms cubic-bezier(.2,.7,.2,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: "linear-gradient(180deg, var(--ignite-500), rgba(255,90,31,0))",
      boxShadow: "0 0 14px rgba(255,90,31,0.55)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: -2,
      background: "radial-gradient(circle at 12% 0%, rgba(255,90,31,0.10), transparent 55%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: text ? "clamp(28px, 3.2vw, 44px)" : "clamp(40px, 4.4vw, 64px)",
      lineHeight: 0.95,
      letterSpacing: "-0.03em",
      color: "var(--fg-1)"
    }
  }, text != null ? text : /*#__PURE__*/React.createElement(React.Fragment, null, v.toLocaleString(), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, suffix))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      textAlign: "right",
      maxWidth: 160,
      lineHeight: 1.4
    }
  }, label)));
};

/* ============================================================ HERO */
const AboutHero = () => {
  const [typed, typedDone] = useTypewriter("A tight core team.", 55, 250);
  const [showRest, setShowRest] = abState(false);
  abEffect(() => {
    if (!typedDone) return;
    const t = setTimeout(() => setShowRest(true), 550); // hold a beat
    return () => clearTimeout(t);
  }, [typedDone]);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 About Hero",
    style: {
      position: "relative",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      overflow: "hidden",
      padding: "140px 0 90px"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-10%",
      bottom: "-30%",
      width: 760,
      height: 760,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,90,31,0.32) 0%, rgba(255,90,31,0.10) 35%, transparent 65%)",
      filter: "blur(40px)",
      animation: "abBloom1 9s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-8%",
      top: "10%",
      width: 360,
      height: 360,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,182,39,0.18) 0%, transparent 60%)",
      filter: "blur(35px)",
      animation: "abBloom2 11s ease-in-out infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.6) 50%, transparent)",
      boxShadow: "0 0 18px rgba(255,90,31,0.4)",
      animation: "abScan 16s linear infinite",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 36,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--ignite-500)"
    }
  }), ">> ABOUT IGNITE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.2em",
      color: "var(--fg-3)"
    }
  }, "VETERAN-OWNED \xB7 FOUNDED 2018 \xB7 ALL 50 STATES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(44px, 5.6vw, 92px)",
      lineHeight: 0.94,
      letterSpacing: "-0.04em",
      margin: 0,
      textWrap: "balance"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, typed, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: "0.06em",
      height: "0.85em",
      marginLeft: "0.06em",
      verticalAlign: "-0.08em",
      background: "var(--ignite-500)",
      animation: "abCaret 0.85s steps(1) infinite",
      opacity: typedDone ? 0 : 1,
      transition: typedDone ? "opacity 220ms ease 350ms" : "none"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      position: "relative",
      overflow: "hidden"
    }
  }, showRest && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "15%",
      bottom: "15%",
      background: "linear-gradient(90deg, transparent 0%, rgba(255,90,31,0.55) 45%, rgba(255,182,39,0.85) 55%, transparent 100%)",
      filter: "blur(22px)",
      transformOrigin: "right center",
      animation: "abGlowTrail 900ms cubic-bezier(.2,.7,.2,1) forwards",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "inline-block",
      opacity: showRest ? 1 : 0,
      animation: showRest ? "abSweepIn 800ms cubic-bezier(.2,.7,.2,1) forwards" : "none"
    }
  }, "A ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "national-scale"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-14% -8%",
      background: "radial-gradient(ellipse at center, rgba(255,90,31,0.40), transparent 65%)",
      filter: "blur(18px)",
      zIndex: 0,
      pointerEvents: "none",
      animation: "abPulse 2.6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      color: "var(--ignite-500)",
      animation: "abTextPulse 2.6s ease-in-out infinite"
    }
  }, "network."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 18,
      lineHeight: 1.55,
      color: "rgba(245,242,236,0.85)",
      margin: "28px 0 0",
      maxWidth: 580
    }
  }, "Ignite is a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-1)"
    }
  }, "veteran-owned brand activation agency"), " built on a different model: a senior, hands-on core team running a 42,000-person ambassador network \u2014 with the tech to prove every single activation worked."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "15px 22px",
      borderRadius: 999,
      background: "var(--ignite-500)",
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-0.01em",
      textDecoration: "none",
      boxShadow: "0 8px 28px rgba(255,90,31,0.32)"
    }
  }, "Start a project ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#leaders",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 20px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.18)",
      color: "var(--fg-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Meet the team ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, "\u2193")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [{
    text: "One unified team",
    label: "Senior on every brief"
  }, {
    n: 50,
    suffix: "",
    label: "States active"
  }, {
    n: 42000,
    suffix: "+",
    label: "Ambassador network"
  }].map((s, i) => /*#__PURE__*/React.createElement(HeroProofCard, {
    key: s.label,
    text: s.text,
    target: s.n,
    suffix: s.suffix,
    label: s.label,
    delay: i * 140
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, "// updated weekly")))));
};

/* ============================================================ COUNTER CAMEOS */
const useCountUp = (target, duration = 1800) => {
  const [val, setVal] = abState(0);
  const ref = abRef(null);
  const started = abRef(false);
  abEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = now => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.4
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return [val, ref];
};
const CounterTile = ({
  target,
  suffix = "",
  label
}) => {
  const [v, ref] = useCountUp(target);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      padding: "40px 28px",
      background: "var(--ink-000)",
      borderRadius: 18,
      border: "1px solid var(--ink-400)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: -2,
      background: "radial-gradient(circle at 30% 0%, rgba(255,90,31,0.10), transparent 60%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(56px, 7vw, 96px)",
      lineHeight: 0.9,
      letterSpacing: "-0.04em",
      color: "var(--fg-1)"
    }
  }, v.toLocaleString(), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ignite-500)"
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, label));
};
const AboutCounters = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 36
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// the math"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18
  }
}, /*#__PURE__*/React.createElement(CounterTile, {
  target: 1,
  label: "Team. Same faces, brief to debrief."
}), /*#__PURE__*/React.createElement(CounterTile, {
  target: 50,
  label: "States. National coverage from one ops layer."
}), /*#__PURE__*/React.createElement(CounterTile, {
  target: 42000,
  suffix: "+",
  label: "Ambassadors. Vetted, trained, deployable."
}))));

/* ============================================================ THE MODEL */
const MODEL_LAYERS = [{
  idx: "L1",
  label: "CORE TEAM",
  v: "10",
  tag: "senior · same faces, brief to debrief",
  d: "Directors, producers, creatives. The names on your kickoff are the names on your debrief."
}, {
  idx: "L2",
  label: "BUILD SHOP",
  v: "IN-HOUSE",
  tag: "fab · booths, mobile, retail",
  d: "Booths, mobile units, retail displays — fabricated by people we know, not a vendor we found."
}, {
  idx: "L3",
  label: "SPARK PLATFORM",
  v: "LIVE",
  tag: "tech · photos, geo, KPIs",
  d: "Real-time activation tracking. The recap exists before the event is over."
}, {
  idx: "L4",
  label: "AMBASSADORS",
  v: "42,000+",
  tag: "network · 50 states, vetted",
  d: "Background-checked, trained, deployable. Cast by market — never by lottery."
}];
const AboutModel = () => {
  const [active, setActive] = abState(0);
  const [shown, setShown] = abState(false);
  const wrapRef = abRef(null);
  abEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setShown(true);
    }), {
      threshold: 0.18
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: wrapRef,
    style: {
      background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      padding: "120px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 56,
    opacity: 0.05
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-12%",
      top: "5%",
      width: 520,
      height: 520,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,90,31,0.22) 0%, transparent 60%)",
      filter: "blur(50px)",
      animation: "abBloom2 12s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--ignite-500)",
      textTransform: "uppercase"
    }
  }, "// our model"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: "var(--ignite-500)",
      opacity: 0.3,
      maxWidth: 120
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.24em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, "FOUR LAYERS \xB7 ONE STACK")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 64,
      alignItems: "start",
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 80px)",
      letterSpacing: "-0.035em",
      lineHeight: 0.96,
      margin: 0,
      textWrap: "balance"
    }
  }, "Built like a ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "stack,"), " not a building."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      margin: 0,
      maxWidth: 540
    }
  }, "Agencies usually outsource one of these four things. We don't. Senior strategy, in-house fabrication, real-time tech, and a vetted national network \u2014 ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--fg-1)",
      fontStyle: "normal",
      fontWeight: 600
    }
  }, "owned end to end, so the brief and the debrief are run by the same people."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "calc(56px + 16px)",
      top: 24,
      bottom: 24,
      width: 2,
      background: "linear-gradient(180deg, rgba(255,90,31,0.0), rgba(255,90,31,0.65) 12%, rgba(255,90,31,0.65) 88%, rgba(255,90,31,0))",
      boxShadow: "0 0 14px rgba(255,90,31,0.45)",
      zIndex: 0
    }
  }), MODEL_LAYERS.map((row, i) => {
    const isActive = active === i;
    return /*#__PURE__*/React.createElement("div", {
      key: row.idx,
      onMouseEnter: () => setActive(i),
      style: {
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        alignItems: "center",
        gap: 32,
        padding: "28px 28px 28px 28px",
        background: isActive ? "linear-gradient(90deg, rgba(255,90,31,0.10), rgba(255,90,31,0.02) 60%, transparent)" : "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
        border: "1px solid " + (isActive ? "rgba(255,90,31,0.45)" : "rgba(255,255,255,0.08)"),
        borderRadius: 18,
        transition: "all 300ms cubic-bezier(.2,.7,.2,1)",
        transform: shown ? "translateX(0)" : "translateX(-24px)",
        opacity: shown ? 1 : 0,
        transitionDelay: i * 110 + "ms",
        cursor: "pointer",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: 999,
        background: isActive ? "var(--ignite-500)" : "rgba(255,255,255,0.06)",
        boxShadow: isActive ? "0 0 24px rgba(255,90,31,0.6)" : "none",
        transition: "all 300ms ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.16em",
        color: isActive ? "#0A0B0D" : "var(--fg-3)",
        fontWeight: 700
      }
    }, row.idx)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.22em",
        color: isActive ? "var(--ignite-500)" : "var(--fg-3)",
        textTransform: "uppercase"
      }
    }, row.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.2em",
        color: "var(--fg-3)",
        textTransform: "uppercase",
        opacity: 0.7
      }
    }, "// ", row.tag)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontSize: 15.5,
        lineHeight: 1.5,
        color: "var(--fg-2)",
        maxWidth: 680
      }
    }, row.d)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        textAlign: "right"
      }
    }, isActive && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: "-30% -10%",
        background: "radial-gradient(ellipse at center, rgba(255,90,31,0.35), transparent 65%)",
        filter: "blur(18px)",
        zIndex: 0,
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: row.v.length > 4 ? "clamp(28px, 3.4vw, 48px)" : "clamp(40px, 5vw, 76px)",
        lineHeight: 0.95,
        letterSpacing: "-0.04em",
        color: isActive ? "var(--ignite-500)" : "var(--fg-1)",
        transition: "color 300ms ease"
      }
    }, row.v)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--ignite-500)",
      boxShadow: "0 0 10px rgba(255,90,31,0.7)",
      animation: "abTextPulse 2.4s ease-in-out infinite"
    }
  }), "ALL FOUR LAYERS, IN-HOUSE \u2014 NO SUBCONTRACTED PROMISE-KEEPING"))));
};

/* ============================================================ FOUNDER */
const AboutFounder = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// the founder"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 64,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: "4 / 5",
    borderRadius: 20,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#0b0c0e",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_team_kyle_webp || "https://kyle915.github.io/ignite-webflow-assets/assets/team-kyle.webp",
  alt: "Kyle Christiansen, founder of Ignite Productions",
  loading: "lazy",
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, transparent 55%, rgba(10,11,13,0.85) 100%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 22
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 26,
    color: "var(--fg-1)",
    letterSpacing: "-0.01em"
  }
}, "Kyle Christiansen"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "FOUNDER \xB7 SENIOR DIRECTOR")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(36px, 4.4vw, 60px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.02,
    margin: 0,
    textWrap: "balance"
  }
}, "Built by an ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "operator,"), " not an account manager."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontSize: 17,
    lineHeight: 1.65,
    color: "var(--fg-2)"
  }
}, /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)"
  }
}, "Kyle Christiansen"), " spent 20+ years in CPG marketing \u2014 leadership stints at ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)"
  }
}, "Red Bull"), ", ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)"
  }
}, "160over90"), ", and ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)"
  }
}, "Amazon"), ", agency-side and client-side. He's been the one writing the brief, hiring the agency, watching activations go sideways, and rebuilding them better."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 1.65,
    color: "var(--fg-2)"
  }
}, "He founded Ignite in 2018 to do experiential the way operators actually want it run: senior people on every program, real proof of execution, and an answer to \"what happened?\" before the post-event PDF would've even been due."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 1.65,
    color: "var(--fg-2)"
  }
}, "We hire for ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)"
  }
}, "taste, hustle, and a sense of humor."), " Field marketing is hard; pretending it isn't is worse."), /*#__PURE__*/React.createElement("blockquote", {
  style: {
    marginTop: 36,
    paddingLeft: 24,
    borderLeft: "3px solid var(--ignite-500)",
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 1.4,
    color: "var(--fg-1)",
    letterSpacing: "-0.015em"
  }
}, "\"I built Ignite to be the agency I always wished I could hire.\"")))));

/* ============================================================ LEADERS (5) */
const AboutLeaders = () => /*#__PURE__*/React.createElement("section", {
  id: "leaders",
  style: {
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    isolation: "isolate"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage: "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)",
    WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: "-15%",
    left: "55%",
    width: "50%",
    height: "60%",
    background: "radial-gradient(closest-side, rgba(255,90,31,0.22), transparent 70%)",
    filter: "blur(50px)",
    animation: "abLdOrbA 16s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: "30%",
    left: "-10%",
    width: "45%",
    height: "55%",
    background: "radial-gradient(closest-side, rgba(255,140,80,0.16), transparent 70%)",
    filter: "blur(50px)",
    animation: "abLdOrbB 20s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "40%",
    background: "linear-gradient(90deg, transparent 0%, rgba(255,90,31,0.06) 45%, rgba(255,90,31,0.12) 50%, rgba(255,90,31,0.06) 55%, transparent 100%)",
    animation: "abLdScan 9s linear infinite",
    mixBlendMode: "screen"
  }
}), Array.from({
  length: 14
}).map((_, i) => {
  const left = i * 73 % 100;
  const top = i * 53 % 100;
  const delay = i * 0.5 % 6;
  const labels = ["//", "++", "↗", "●", "◆", "▲"];
  return /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: `${left}%`,
      top: `${top}%`,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.2em",
      color: "rgba(255,90,31,0.35)",
      animation: `abLdBlink 4s ease-in-out ${delay}s infinite`
    }
  }, labels[i % labels.length]);
})), /*#__PURE__*/React.createElement("style", null, `
      @keyframes abLdOrbA { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,40px) scale(1.08)} }
      @keyframes abLdOrbB { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.1)} }
      @keyframes abLdScan { 0%{transform:translateX(-30%)} 100%{transform:translateX(280%)} }
      @keyframes abLdBlink { 0%,100%{opacity:0.15} 50%{opacity:0.55} }
    `), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// senior team"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 48,
    alignItems: "end",
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 76px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: 0,
    textWrap: "balance"
  }
}, "The people who'll ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "actually be on your program.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 520
  }
}, "No bait-and-switch. The people pitching you are the people running your program.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 18,
    justifyContent: "center"
  }
}, ABOUT_LEADERS.map((m, i) => {
  const accent = i === 0 ? "var(--ignite-500)" : i % 3 === 1 ? "#FFB627" : i % 3 === 2 ? "#D6F35F" : "var(--ignite-500)";
  const resolved = window.__resources && window.__resources[m.resKey] || m.img;
  return /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      flex: "0 0 calc((100% - 54px) / 4)",
      minWidth: 220,
      background: "var(--ink-000)",
      borderRadius: 16,
      border: "1px solid var(--ink-400)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 5",
      background: "linear-gradient(180deg, #16181c 0%, #0b0c0e 100%)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolved,
    alt: `${m.name} — ${m.role}`,
    loading: "lazy",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.22em",
      color: accent,
      textTransform: "uppercase",
      padding: "4px 8px",
      borderRadius: 999,
      background: "rgba(10,11,13,0.7)",
      border: `1px solid ${accent}`
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--fg-1)",
      letterSpacing: "-0.01em"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.18em",
      color: accent,
      textTransform: "uppercase"
    }
  }, m.role), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 13,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: "6px 0 0"
    }
  }, m.bio)));
})), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 36,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    textAlign: "center"
  }
}, "+ a tight production, ops, and analytics bench")));

/* ============================================================ VALUES */
const AboutValuesGrid = () => /*#__PURE__*/React.createElement("section", {
  id: "values",
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// how we operate"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 76px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: "0 0 64px",
    maxWidth: 1000,
    textWrap: "balance"
  }
}, "Four rules. ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "No exceptions.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 18
  }
}, ABOUT_VALUES.map(v => /*#__PURE__*/React.createElement("div", {
  key: v.n,
  style: {
    padding: "32px 28px",
    background: "var(--ink-100)",
    borderRadius: 18,
    border: "1px solid var(--ink-400)",
    position: "relative",
    overflow: "hidden",
    minHeight: 260,
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: -14,
    bottom: -32,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 180,
    lineHeight: 0.85,
    letterSpacing: "-0.06em",
    color: "transparent",
    WebkitTextStroke: "1px rgba(255,90,31,0.18)",
    pointerEvents: "none",
    userSelect: "none"
  }
}, v.n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, v.n), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 12,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: "-0.015em",
    color: "var(--fg-1)"
  }
}, v.t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 12,
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: "12px 0 0",
    position: "relative"
  }
}, v.d))))));

/* ============================================================ TIMELINE */
const AboutTimeline = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// trajectory"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 76px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: "0 0 56px",
    maxWidth: 1100,
    textWrap: "balance"
  }
}, "Eight years. ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "One trajectory.")), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 64,
    height: 1,
    background: "linear-gradient(90deg, var(--ignite-500), rgba(255,90,31,0.1))"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 14
  }
}, ABOUT_TIMELINE.map((m, i) => /*#__PURE__*/React.createElement("div", {
  key: m.y,
  style: {
    position: "relative",
    paddingTop: 78
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 58,
    left: 0,
    width: 12,
    height: 12,
    borderRadius: 999,
    background: i === ABOUT_TIMELINE.length - 1 ? "var(--ignite-500)" : "#1a1c20",
    border: `2px solid var(--ignite-500)`,
    boxShadow: i === ABOUT_TIMELINE.length - 1 ? "0 0 18px rgba(255,90,31,0.6)" : "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 32,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)"
  }
}, m.y), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, m.t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: "10px 0 0"
  }
}, m.d)))))));

/* ============================================================ CLIENT LOGOS (real, from home) */
const AboutClients = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: 16,
    marginBottom: 36,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "\u2605 TRUSTED BY"), /*#__PURE__*/React.createElement("span", {
  style: {
    flex: 1,
    height: 1,
    background: "rgba(255,255,255,0.12)",
    minWidth: 80
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "+ 200 BRANDS SINCE 2018")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    border: "1px solid var(--ink-400)",
    borderRadius: 14,
    overflow: "hidden"
  }
}, ABOUT_CLIENT_LOGOS.map((c, i) => {
  const col = i % 3,
    row = Math.floor(i / 3),
    total = ABOUT_CLIENT_LOGOS.length;
  const isLastRow = row === Math.floor((total - 1) / 3);
  return /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      padding: "40px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 128,
      background: "var(--ink-100)",
      borderRight: col < 2 ? "1px solid var(--ink-400)" : "none",
      borderBottom: !isLastRow ? "1px solid var(--ink-400)" : "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.url,
    alt: c.name,
    loading: "lazy",
    style: {
      maxHeight: 96,
      maxWidth: 240,
      width: "auto",
      objectFit: "contain",
      filter: "grayscale(1) brightness(2.2) contrast(1.05)",
      opacity: 0.85
    }
  }));
}))));

/* ============================================================ CASE STUDY SPOTLIGHT */
const AboutCaseSpotlight = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// case spotlight"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 64,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "2021 \u2014 PRESENT \xB7 NATIONAL TOUR"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 76px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: 0,
    textWrap: "balance"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-1)"
  }
}, "3,000+ events."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--fg-1)"
  }
}, "47 markets."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "Millions sampled.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    fontSize: 17,
    lineHeight: 1.65,
    color: "var(--fg-2)",
    maxWidth: 560
  }
}, "Multi-year national field marketing program for Liquid Death \u2014 sampling, retail demos, festivals, and tour activations across 47 U.S. markets. Every can tracked. Every sample geo-stamped. Every recap delivered before the next event began."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12
  }
}, [["850+", "Events"], ["47", "Markets"], ["3.4M", "Samples served"], ["38%", "Avg trial→repeat"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    padding: "18px 14px",
    background: "var(--ink-000)",
    border: "1px solid var(--ink-400)",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)"
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, l)))), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    marginTop: 36,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "15px 22px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.18)",
    color: "var(--fg-1)",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    textDecoration: "none"
  }
}, "See the work ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "\u2192"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: "4 / 5",
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid var(--ink-400)",
    position: "relative",
    background: "#0b0c0e"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_sampling_liquiddeath_petsmart_jpg || "https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquiddeath-petsmart.jpg",
  alt: "Liquid Death sampling activation at PetSmart",
  loading: "lazy",
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, transparent 55%, rgba(10,11,13,0.85) 100%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 22,
    right: 22,
    bottom: 22
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "\u2605 LIQUID DEATH"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    color: "var(--fg-1)",
    letterSpacing: "-0.01em"
  }
}, "Multi-year sampling, retail, and tour")))))));

/* ============================================================ WHERE WE WORK */
const AboutCoverage = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// where we work"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 64,
    alignItems: "end",
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 76px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: 0,
    textWrap: "balance"
  }
}, "All 50 states. ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "One brief.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 480
  }
}, "National coverage with local-market knowledge. Our ambassador network is deep in every major DMA \u2014 and on call in the secondary ones, too.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 10
  }
}, ABOUT_KEY_MARKETS.map((m, i) => /*#__PURE__*/React.createElement("div", {
  key: m,
  style: {
    padding: "16px 14px",
    border: "1px solid var(--ink-400)",
    borderRadius: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.18em",
    color: "var(--fg-2)",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: i < 6 ? "var(--ignite-500)" : "rgba(255,90,31,0.4)"
  }
}), m))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "+ 200 secondary markets \xB7 ambassadors deployed within 48hrs")));

/* ============================================================ VOSB */
const AboutVOSB = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    borderBottom: "1px solid var(--ink-400)",
    padding: "140px 0",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.05
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 1400,
    height: 1400,
    marginLeft: -700,
    marginTop: -700,
    borderRadius: "50%",
    background: "conic-gradient(from 0deg, rgba(255,90,31,0) 0deg, rgba(255,90,31,0) 320deg, rgba(255,90,31,0.18) 355deg, rgba(255,90,31,0.32) 360deg)",
    filter: "blur(1px)",
    animation: "abVosbSweep 7s linear infinite",
    pointerEvents: "none",
    opacity: 0.45,
    maskImage: "radial-gradient(circle, black 0%, black 45%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(circle, black 0%, black 45%, transparent 70%)"
  }
}), /*#__PURE__*/React.createElement("svg", {
  "aria-hidden": "true",
  viewBox: "0 0 1000 1000",
  preserveAspectRatio: "xMidYMid slice",
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    opacity: 0.18
  }
}, /*#__PURE__*/React.createElement("g", {
  fill: "none",
  stroke: "rgba(255,90,31,0.6)",
  strokeWidth: "0.6"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "500",
  cy: "500",
  r: "120"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "500",
  cy: "500",
  r: "220"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "500",
  cy: "500",
  r: "340"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "500",
  cy: "500",
  r: "460"
}), /*#__PURE__*/React.createElement("line", {
  x1: "500",
  y1: "20",
  x2: "500",
  y2: "980",
  strokeDasharray: "2 6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "500",
  x2: "980",
  y2: "500",
  strokeDasharray: "2 6"
}))), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.55), transparent)",
    boxShadow: "0 0 14px rgba(255,90,31,0.45)",
    animation: "abVosbScan 6s ease-in-out infinite",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: "-10%",
    top: "-10%",
    width: 560,
    height: 560,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(255,90,31,0.22) 0%, transparent 60%)",
    filter: "blur(60px)",
    animation: "abBloom1 12s ease-in-out infinite",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    right: "-8%",
    bottom: "-10%",
    width: 520,
    height: 520,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(255,182,39,0.18) 0%, transparent 60%)",
    filter: "blur(60px)",
    animation: "abBloom2 14s ease-in-out infinite",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1,
    background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.7) 50%, transparent)",
    boxShadow: "0 0 16px rgba(255,90,31,0.5)"
  }
}), /*#__PURE__*/React.createElement("style", null, `
      @keyframes abVosbSweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes abVosbScan { 0% { top: 10%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 90%; opacity: 0; } }
    `), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 36,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.24em",
    color: "var(--ignite-500)",
    textTransform: "uppercase",
    position: "relative",
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 7,
    height: 7,
    borderRadius: 999,
    background: "var(--ignite-500)",
    boxShadow: "0 0 10px rgba(255,90,31,0.7)",
    animation: "abTextPulse 2.4s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("span", null, "// supplier diversity \xB7 veteran-owned"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    maxWidth: 120,
    background: "var(--ignite-500)",
    opacity: 0.3
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: 64,
    alignItems: "center",
    padding: "48px 56px",
    borderRadius: 24,
    background: "linear-gradient(180deg, rgba(20,21,24,0.94) 0%, rgba(13,14,16,0.94) 100%)",
    border: "1px solid rgba(255,90,31,0.32)",
    boxShadow: "0 0 60px rgba(255,90,31,0.18), inset 0 1px 0 rgba(255,255,255,0.04)"
  }
}, [{
  t: 14,
  l: 14,
  b: "auto",
  r: "auto"
}, {
  t: 14,
  r: 14,
  b: "auto",
  l: "auto"
}, {
  b: 14,
  l: 14,
  t: "auto",
  r: "auto"
}, {
  b: 14,
  r: 14,
  t: "auto",
  l: "auto"
}].map((p, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  "aria-hidden": "true",
  style: {
    position: "absolute",
    top: p.t,
    left: p.l,
    right: p.r,
    bottom: p.b,
    width: 18,
    height: 18,
    borderTop: p.t !== "auto" ? "1.5px solid var(--ignite-500)" : "none",
    borderBottom: p.b !== "auto" ? "1.5px solid var(--ignite-500)" : "none",
    borderLeft: p.l !== "auto" ? "1.5px solid var(--ignite-500)" : "none",
    borderRight: p.r !== "auto" ? "1.5px solid var(--ignite-500)" : "none",
    opacity: 0.7
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: -20,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(255,90,31,0.28) 0%, transparent 65%)",
    filter: "blur(24px)",
    animation: "abTextPulse 3.2s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_vosb_logo_png || "https://kyle915.github.io/ignite-webflow-assets/assets/vosb-logo.png",
  alt: "VOSB \u2014 Certified Veteran-Owned Small Business",
  width: "260",
  height: "260",
  style: {
    position: "relative",
    zIndex: 1,
    width: 260,
    height: "auto",
    display: "block",
    filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.4))"
  }
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14
  }
}, /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    display: "inline-flex",
    flexDirection: "column",
    gap: 3,
    color: "var(--ignite-500)",
    marginTop: 10,
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    width: 14,
    height: 2,
    background: "currentColor"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    width: 14,
    height: 2,
    background: "currentColor"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    width: 14,
    height: 2,
    background: "currentColor"
  }
})), /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: 0,
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: "clamp(20px, 2.2vw, 30px)",
    letterSpacing: "0.04em",
    lineHeight: 1.1,
    color: "var(--fg-1)",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block"
  }
}, "Certified veteran-owned."), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    color: "var(--ignite-500)",
    textShadow: "0 0 18px rgba(255,90,31,0.45)",
    fontSize: "1.15em",
    letterSpacing: "0.06em",
    marginTop: 6
  }
}, "Operated like it."))), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    marginTop: 16,
    height: 3,
    width: 140,
    background: "linear-gradient(90deg, var(--ignite-500), rgba(255,90,31,0))",
    boxShadow: "0 0 12px rgba(255,90,31,0.55)"
  }
}), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    maxWidth: 680
  }
}, "Licensed, insured, and run with veteran discipline. Eligible for ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: "var(--fg-1)",
    fontWeight: 700
  }
}, "VOSB set-aside spend"), " at brands and agencies that prioritize supplier diversity."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14
  }
}, [{
  l: "COVERAGE",
  v: "All 50 states"
}].map((p, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: "14px 16px",
    borderRadius: 10,
    background: "rgba(255,90,31,0.06)",
    border: "1px solid rgba(255,90,31,0.22)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 9.5,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, p.l), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15,
    color: "var(--fg-1)",
    letterSpacing: "-0.005em"
  }
}, p.v))))))));

/* ============================================================ CAREERS */
const AboutCareers = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// careers"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 64,
    alignItems: "end",
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 76px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: 0,
    textWrap: "balance"
  }
}, "Join the ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)"
  }
}, "network.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 480
  }
}, "42,000 ambassadors and counting. Energetic, professional, ready to represent the brands you love. Fill in your info and we'll be in touch.")), /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/careers/brand-ambassador",
  style: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto auto",
    gap: 32,
    alignItems: "center",
    padding: "28px 32px",
    borderRadius: 18,
    background: "var(--ink-100)",
    border: "1px solid var(--ink-400)",
    textDecoration: "none",
    transition: "all 200ms"
  },
  onMouseEnter: e => {
    e.currentTarget.style.borderColor = "var(--ignite-500)";
    e.currentTarget.style.transform = "translateY(-2px)";
  },
  onMouseLeave: e => {
    e.currentTarget.style.borderColor = "var(--ink-400)";
    e.currentTarget.style.transform = "translateY(0)";
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-stencil)",
    fontSize: 20,
    color: "var(--ignite-500)",
    letterSpacing: "0.04em"
  }
}, "01"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    color: "var(--fg-1)",
    letterSpacing: "-0.01em"
  }
}, "Brand Ambassador"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 720
  }
}, "Represent leading brands at live events, retail activations, and community engagements across the U.S.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    textAlign: "right",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", null, "United States"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)"
  }
}, "Part time")), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--ignite-500)",
    fontFamily: "var(--font-mono)",
    fontSize: 18
  }
}, "\u2192"))));

/* ============================================================ FINAL CTA */
const AboutFinalCTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    padding: "160px 0",
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(GridOverlay, {
  size: 48,
  opacity: 0.05
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 50% 60%, rgba(255,90,31,0.18), transparent 60%)",
    pointerEvents: "none"
  }
}), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, ">> READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(56px, 8vw, 140px)",
    letterSpacing: "-0.045em",
    lineHeight: 0.9,
    margin: "18px auto 0",
    maxWidth: 1200,
    textWrap: "balance"
  }
}, "Let's turn sparks into ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)",
    whiteSpace: "nowrap"
  }
}, "superfans.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32,
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    maxWidth: 720,
    margin: "32px auto 0"
  }
}, "Tell us the brief \u2014 we'll bring the team, the tech, and the receipts."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 44,
    display: "inline-flex",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "/contact",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    background: "var(--ignite-500)",
    color: "#0A0B0D",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    boxShadow: "0 12px 40px rgba(255,90,31,0.35)"
  }
}, "Request a quote \u2192"), /*#__PURE__*/React.createElement("a", {
  href: "/work",
  style: {
    padding: "18px 26px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.2)",
    color: "var(--fg-1)",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    textDecoration: "none"
  }
}, "See the work \u2192"))));

/* helper for new sections — maps an asset path to a bundled resource if present */
const resolveAsset = p => {
  const k = "r_" + p.replace(/^\.\.\//, "").replace(/[\/.\-]/g, "_");
  return typeof window !== "undefined" && window.__resources && window.__resources[k] || p;
};

/* ============================================================ FOUNDER QUOTE — big pull-quote moment */
const AboutFounderQuote = () => {
  const [shown, setShown] = abState(false);
  const wrapRef = abRef(null);
  abEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setShown(true);
    }), {
      threshold: 0.25
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: wrapRef,
    style: {
      background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      padding: "160px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 56,
    opacity: 0.05
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-8%",
      top: "10%",
      width: 540,
      height: 540,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,90,31,0.30) 0%, transparent 60%)",
      filter: "blur(50px)",
      animation: "abBloom1 11s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-10%",
      bottom: "-10%",
      width: 620,
      height: 620,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,182,39,0.16) 0%, transparent 60%)",
      filter: "blur(60px)",
      animation: "abBloom2 14s ease-in-out infinite",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(255,90,31,0.7) 50%, transparent)",
      boxShadow: "0 0 18px rgba(255,90,31,0.55)"
    }
  }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 32,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      color: "var(--ignite-500)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--ignite-500)",
      boxShadow: "0 0 10px rgba(255,90,31,0.7)",
      animation: "abTextPulse 2.4s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", null, "// from the founder"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      maxWidth: 120,
      background: "var(--ignite-500)",
      opacity: 0.3
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      marginBottom: -44,
      marginLeft: -12,
      userSelect: "none",
      lineHeight: 0.55,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(180px, 22vw, 320px)",
      color: "var(--ignite-500)",
      opacity: 0.22,
      textShadow: "0 0 60px rgba(255,90,31,0.45)"
    }
  }, "\""), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5.6vw, 84px)",
      lineHeight: 1.04,
      letterSpacing: "-0.035em",
      color: "var(--fg-1)",
      textWrap: "balance",
      maxWidth: 1180,
      position: "relative",
      zIndex: 1
    }
  }, "Strategy lives in", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      color: "var(--fg-3)"
    }
  }, "slides", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: -4,
      right: -4,
      top: "56%",
      height: 4,
      borderRadius: 2,
      background: "linear-gradient(90deg, rgba(255,90,31,0.95), rgba(255,182,39,0.85))",
      boxShadow: "0 0 14px rgba(255,90,31,0.7)",
      transformOrigin: "left center",
      transform: shown ? "scaleX(1)" : "scaleX(0)",
      transition: "transform 700ms cubic-bezier(.2,.7,.2,1) 400ms"
    }
  })), " ", "until somebody puts the product in a stranger's hand. We're the", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-18% -10%",
      background: "radial-gradient(ellipse at center, rgba(255,90,31,0.45), transparent 65%)",
      filter: "blur(18px)",
      zIndex: 0,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      fontStyle: "italic",
      color: "var(--ignite-500)",
      animation: "abTextPulse 2.6s ease-in-out infinite"
    }
  }, "somebody."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "flex",
      alignItems: "center",
      gap: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: 64,
      height: 2,
      background: "linear-gradient(90deg, var(--ignite-500), transparent)",
      boxShadow: "0 0 10px rgba(255,90,31,0.6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 76,
      height: 76,
      borderRadius: "50%",
      overflow: "hidden",
      background: "var(--ink-300)",
      border: "2px solid rgba(255,90,31,0.45)",
      flexShrink: 0,
      boxShadow: "0 0 24px rgba(255,90,31,0.35)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolveAsset("https://kyle915.github.io/ignite-webflow-assets/assets/team-kyle.webp"),
    alt: "Kyle Christiansen",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "-0.01em",
      color: "var(--fg-1)"
    }
  }, "Kyle Christiansen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginTop: 6
    }
  }, "Founder & CEO \xB7 20+ yrs CPG \xB7 Red Bull \xB7 160over90 \xB7 Amazon"))))));
};

/* ============================================================ SPARK — proprietary tech / SEO */
const AboutSpark = () => {
  const proof = [{
    l: "BUILT IN-HOUSE",
    v: "By our engineering team",
    d: "Not licensed. Not white-labeled. Ours."
  }, {
    l: "REAL-TIME DATA",
    v: "GPS · photos · counts",
    d: "Field activity lands in the dashboard while the event is still live."
  }, {
    l: "OWNED IP",
    v: "Proprietary platform",
    d: "We control the roadmap. Brand-specific features ship in days, not quarters."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "spark",
    style: {
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      padding: "140px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 56,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-10%",
      top: "-12%",
      width: 560,
      height: 560,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(214,243,95,0.16) 0%, transparent 60%)",
      filter: "blur(70px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-8%",
      bottom: "-12%",
      width: 480,
      height: 480,
      borderRadius: 999,
      background: "radial-gradient(circle, rgba(255,90,31,0.18) 0%, transparent 60%)",
      filter: "blur(70px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 32,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      color: "var(--ignite-500)",
      textTransform: "uppercase",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "#D6F35F",
      boxShadow: "0 0 10px rgba(214,243,95,0.7)",
      animation: "abTextPulse 2.4s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", null, "// proprietary tech \xB7 in-house engineering"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      maxWidth: 120,
      background: "var(--ignite-500)",
      opacity: 0.3
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: 72,
      alignItems: "start",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(44px, 5.4vw, 80px)",
      letterSpacing: "-0.032em",
      lineHeight: 0.98,
      color: "var(--fg-1)",
      textWrap: "balance"
    }
  }, "We built our own tech. Most agencies ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#D6F35F"
    }
  }, "rent theirs.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      maxWidth: 620
    }
  }, "Ignite is one of the few ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-1)",
      fontWeight: 700
    }
  }, "veteran-owned experiential marketing agencies"), " with a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-1)",
      fontWeight: 700
    }
  }, "proprietary, in-house field marketing platform"), ". We call it ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#D6F35F",
      fontWeight: 700
    }
  }, "Spark"), " \u2014 and our engineering team designs, ships, and runs every line of it."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--fg-3)",
      maxWidth: 620
    }
  }, "Most experiential agencies stitch together licensed CRMs, generic reporting tools, and post-event PDFs. We replaced all of it with one platform purpose-built for CPG activations, mobile tours, product sampling, and brand ambassador programs \u2014 with ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-2)",
      fontWeight: 600
    }
  }, "GPS-verified check-ins, live photo capture, sample counts, lead capture, and real-time dashboards"), " you can watch while your activation is still in market."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/spark",
    style: {
      padding: "15px 24px",
      borderRadius: 999,
      background: "#D6F35F",
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "-0.005em",
      textDecoration: "none",
      boxShadow: "0 0 24px rgba(214,243,95,0.4)"
    }
  }, "See Spark in action \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      padding: "15px 24px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.18)",
      color: "var(--fg-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Request a demo \u2192")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      maxWidth: 520
    }
  }, "Field marketing software \xB7 activation reporting platform \xB7 real-time experiential data \xB7 CPG sampling analytics")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "40px 36px 36px",
      borderRadius: 20,
      background: "linear-gradient(180deg, rgba(20,21,24,0.96) 0%, rgba(13,14,16,0.96) 100%)",
      border: "1px solid rgba(214,243,95,0.28)",
      boxShadow: "0 0 40px rgba(214,243,95,0.12), inset 0 1px 0 rgba(255,255,255,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.r_assets_spark_logo_full_png || "https://kyle915.github.io/ignite-webflow-assets/assets/spark-logo-full.png",
    alt: "Spark by Ignite \u2014 proprietary field marketing platform",
    style: {
      height: 42,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "4px 10px",
      borderRadius: 999,
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.2em",
      color: "#D6F35F",
      textTransform: "uppercase",
      border: "1px solid rgba(214,243,95,0.4)",
      background: "rgba(214,243,95,0.06)"
    }
  }, "v3.2 \xB7 live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, proof.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "16px 18px",
      borderRadius: 12,
      background: "rgba(214,243,95,0.04)",
      border: "1px solid rgba(214,243,95,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.22em",
      color: "#D6F35F",
      textTransform: "uppercase"
    }
  }, p.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, p.v)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--fg-2)"
    }
  }, p.d))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      textAlign: "center"
    }
  }, "// few agencies own their stack. we do.")))));
};

/* ============================================================ PHOTO STRIP — on-the-ground proof */
const AboutPhotos = () => {
  const photos = [{
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg",
    label: "Liquid Death · NASCAR activation"
  }, {
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquiddeath-petsmart.jpg",
    label: "Liquid Death · Target retail sampling"
  }, {
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/pressreader-tradeshow.webp",
    label: "PressReader · trade show floor"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> ON THE GROUND"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(40px, 5vw, 72px)",
      letterSpacing: "-0.03em",
      lineHeight: 0.98,
      color: "var(--fg-1)"
    }
  }, "This is what", /*#__PURE__*/React.createElement("br", null), "the ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ignite-500)"
    }
  }, "work"), " looks like.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      aspectRatio: "4/5",
      borderRadius: 14,
      overflow: "hidden",
      background: "var(--ink-300)",
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolveAsset(p.src),
    alt: p.label,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(10,11,13,0.85) 0%, rgba(10,11,13,0) 45%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      right: 18,
      bottom: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--fg-1)"
    }
  }, p.label))))));
};

/* ============================================================ ENGAGEMENT MODEL — how to hire us */
const ABOUT_ENGAGEMENT = [{
  tag: "01 · PROJECT",
  title: "One activation, end-to-end.",
  body: "A launch, a tour leg, a stadium takeover. We scope, build, staff, run, and measure a single campaign — then hand you the recap.",
  best: "Best for: a defined moment with a clear date.",
  cta: "Request a quote",
  href: "/contact"
}, {
  tag: "02 · RETAINER",
  title: "Always-on field execution.",
  body: "We become your field marketing arm. Recurring sampling, demo cycles, regional tours, ambassador programs — measured continuously through Spark.",
  best: "Best for: programs running 6+ months.",
  cta: "Talk through scope",
  href: "/contact"
}, {
  tag: "03 · FRACTIONAL",
  title: "Embedded leadership.",
  body: "Senior CPG marketing leadership inside your team without the FTE cost. Retail strategy, sponsorship management, GTM planning — by the quarter.",
  best: "Best for: brands $5M–$100M without a VP yet.",
  cta: "See Fractional →",
  href: "/fractional"
}];
const AboutEngagement = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-100)",
    borderTop: "1px solid var(--ink-400)",
    padding: "140px 0"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 900,
    marginBottom: 56
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> HOW TO PARTNER"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    letterSpacing: "-0.03em",
    lineHeight: 0.98,
    color: "var(--fg-1)"
  }
}, "Three ways to ", /*#__PURE__*/React.createElement("span", {
  style: {
    fontStyle: "italic",
    color: "var(--ignite-500)",
    whiteSpace: "nowrap",
    animation: "abTextPulse 2.6s ease-in-out infinite",
    display: "inline-block"
  }
}, "work with us.")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 680
  }
}, "Whether you've got a single launch or you need a permanent field marketing arm, there's a way in that fits.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  }
}, ABOUT_ENGAGEMENT.map(e => /*#__PURE__*/React.createElement("div", {
  key: e.tag,
  style: {
    padding: 36,
    background: "var(--ink-000)",
    border: "1px solid var(--ink-400)",
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    gap: 18,
    minHeight: 480
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, e.tag), /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 28,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    color: "var(--fg-1)"
  }
}, e.title), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.6,
    color: "var(--fg-2)"
  }
}, e.body), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "14px 16px",
    background: "rgba(255,90,31,0.06)",
    border: "1px solid rgba(255,90,31,0.18)",
    borderRadius: 10,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--ignite-500)"
  }
}, e.best), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: "auto",
    paddingTop: 8
  }
}, /*#__PURE__*/React.createElement("a", {
  href: e.href,
  style: {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: 999,
    background: "var(--ignite-500)",
    color: "#0A0B0D",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "-0.01em",
    textDecoration: "none"
  }
}, e.cta, " \u2192")))))));

/* ============================================================ OFFSITE PHOTO — candid team moment */
const AboutOffsite = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
    isolation: "isolate"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: "-20%",
    left: "-10%",
    width: "55%",
    height: "70%",
    background: "radial-gradient(closest-side, rgba(255,90,31,0.18), transparent 70%)",
    filter: "blur(40px)",
    animation: "abOrbA 14s ease-in-out infinite"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    bottom: "-20%",
    right: "-15%",
    width: "60%",
    height: "75%",
    background: "radial-gradient(closest-side, rgba(255,140,80,0.14), transparent 70%)",
    filter: "blur(40px)",
    animation: "abOrbB 18s ease-in-out infinite"
  }
}), Array.from({
  length: 28
}).map((_, i) => {
  const colors = ["#FF5A1F", "#FFB680", "#F6F2EA", "#FF5A1F", "#7CB7FF"];
  const c = colors[i % colors.length];
  const left = i * 37 % 100;
  const size = 4 + i % 4 * 3;
  const delay = i * 0.7 % 14;
  const dur = 12 + i % 6 * 2;
  const rot = i * 23 % 360;
  const shape = i % 3; // 0 dot, 1 square, 2 streamer
  return /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: `${left}%`,
      bottom: "-40px",
      width: shape === 2 ? 2 : size,
      height: shape === 2 ? size * 4 : size,
      background: c,
      borderRadius: shape === 0 ? "50%" : shape === 1 ? 2 : 1,
      opacity: 0.55,
      transform: `rotate(${rot}deg)`,
      animation: `abConfetti ${dur}s linear ${delay}s infinite`,
      boxShadow: c === "#FF5A1F" ? "0 0 6px rgba(255,90,31,0.45)" : "none"
    }
  });
})), /*#__PURE__*/React.createElement("style", null, `
      @keyframes abOrbA { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,30px) scale(1.1)} }
      @keyframes abOrbB { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-50px,-20px) scale(1.08)} }
      @keyframes abConfetti {
        0%{transform:translateY(0) rotate(0deg);opacity:0}
        10%{opacity:0.6}
        90%{opacity:0.6}
        100%{transform:translateY(-110vh) rotate(540deg);opacity:0}
      }
      @keyframes abMarquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      @keyframes abHeadlinePop { 0%,100%{transform:rotate(-2deg) scale(1)} 50%{transform:rotate(-2deg) scale(1.04)} }
    `), /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative",
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 36
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    color: "var(--ignite-500)",
    textTransform: "uppercase"
  }
}, "// the whole crew"), /*#__PURE__*/React.createElement("span", {
  style: {
    height: 1,
    flex: 1,
    background: "var(--ignite-500)",
    opacity: 0.3,
    maxWidth: 120
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, "est. 2008 \xB7 17 years of offsites")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gap: 48,
    alignItems: "end"
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(36px, 4.4vw, 64px)",
    letterSpacing: "-0.03em",
    lineHeight: 1,
    margin: 0,
    textWrap: "balance"
  }
}, "We throw events for a living.", " ", /*#__PURE__*/React.createElement("span", {
  style: {
    position: "relative",
    display: "inline-block",
    color: "var(--fg-3)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "relative",
    zIndex: 1
  }
}, "Obviously"), /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    position: "absolute",
    left: "-4%",
    right: "-4%",
    top: "50%",
    height: "6px",
    background: "var(--ignite-500)",
    borderRadius: 3,
    transform: "translateY(-50%) rotate(-2deg)",
    boxShadow: "0 0 12px rgba(255,90,31,0.6)",
    zIndex: 2
  }
})), " ", /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    fontStyle: "italic",
    color: "var(--ignite-500)",
    transform: "rotate(-2deg)",
    transformOrigin: "left bottom",
    textShadow: "0 0 24px rgba(255,90,31,0.35)",
    animation: "abHeadlinePop 3.2s ease-in-out infinite"
  }
}, "Naturally"), " ", "we throw a good one for ourselves."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    maxWidth: 460
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0
  }
}, "Offsites, kickoffs, late-night load-ins, build days. The faces above are the faces on your program."))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: "48px 0 0",
    display: "grid",
    gridTemplateColumns: "1.55fr 1fr",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    position: "relative",
    borderRadius: 22,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0b0c0e",
    minHeight: 520
  }
}, /*#__PURE__*/React.createElement("img", {
  src: resolveAsset("https://kyle915.github.io/ignite-webflow-assets/assets/team-group-newyear.jpg"),
  alt: "The Ignite team and families ringing in 2026 in Bali",
  loading: "lazy",
  style: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 24,
    bottom: 20,
    padding: "10px 14px",
    borderRadius: 999,
    background: "rgba(10,11,13,0.7)",
    backdropFilter: "blur(8px)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-1)",
    textTransform: "uppercase"
  }
}, "Bali \xB7 NYE 2026 \xB7 the whole crew")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    position: "relative",
    borderRadius: 22,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0b0c0e",
    minHeight: 250
  }
}, /*#__PURE__*/React.createElement("img", {
  src: resolveAsset("https://kyle915.github.io/ignite-webflow-assets/assets/team-group-sunrise.jpg"),
  alt: "Ignite team at sunrise on Mt. Batur, Bali",
  loading: "lazy",
  style: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 18,
    bottom: 16,
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(10,11,13,0.7)",
    backdropFilter: "blur(8px)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-1)",
    textTransform: "uppercase"
  }
}, "Mt. Batur \xB7 4am summit")), /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    position: "relative",
    borderRadius: 22,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "#0b0c0e",
    minHeight: 250
  }
}, /*#__PURE__*/React.createElement("img", {
  src: resolveAsset("https://kyle915.github.io/ignite-webflow-assets/assets/team-group-tropical.jpg"),
  alt: "Ignite leadership at an evening event",
  loading: "lazy",
  style: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 18,
    bottom: 16,
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(10,11,13,0.7)",
    backdropFilter: "blur(8px)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "var(--fg-1)",
    textTransform: "uppercase"
  }
}, "Leadership \xB7 night out"))))));

/* ============================================================ ROOT */
const AboutPage = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "01 About"
}, /*#__PURE__*/React.createElement(SiteNav, {
  active: "ABOUT"
}), /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(AboutModel, null), /*#__PURE__*/React.createElement(AboutFounder, null), /*#__PURE__*/React.createElement(AboutFounderQuote, null), /*#__PURE__*/React.createElement(AboutLeaders, null), /*#__PURE__*/React.createElement(AboutOffsite, null), /*#__PURE__*/React.createElement(AboutValuesGrid, null), /*#__PURE__*/React.createElement(AboutCaseSpotlight, null), /*#__PURE__*/React.createElement(AboutSpark, null), /*#__PURE__*/React.createElement(AboutPhotos, null), /*#__PURE__*/React.createElement(AboutClients, null), /*#__PURE__*/React.createElement(AboutCoverage, null), /*#__PURE__*/React.createElement(AboutEngagement, null), /*#__PURE__*/React.createElement(AboutVOSB, null), /*#__PURE__*/React.createElement(AboutFinalCTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
Object.assign(window, {
  AboutPage,
  ABOUT_VALUES,
  ABOUT_LEADERS,
  ABOUT_TIMELINE,
  ABOUT_CLIENT_LOGOS,
  ABOUT_KEY_MARKETS
});