/* Spark product page — dark-dominant, with motion + pop */
const { useState: spState, useEffect: spEffect, useRef: spRef } = React;

/* ---------- Shared animation styles (injected once) ---------- */
const SparkAnimStyles = () => (
  <style>{`
    @keyframes sp-pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.8); }
    }
    @keyframes sp-marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes sp-bracket-draw {
      0% { opacity: 0; transform: translateX(-12px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes sp-bracket-draw-r {
      0% { opacity: 0; transform: translateX(12px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes sp-grid-scan {
      0% { transform: translateY(-100%); opacity: 0; }
      30% { opacity: 1; }
      100% { transform: translateY(100vh); opacity: 0; }
    }
    @keyframes sp-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(214,243,95,0.0); }
      50% { box-shadow: 0 0 30px 6px rgba(214,243,95,0.25); }
    }
    @keyframes sp-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes sp-radar-big {
      0% { width: 12px; height: 12px; opacity: 1; }
      100% { width: 80px; height: 80px; opacity: 0; }
    }
    @keyframes sp-shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes sp-bar-rise {
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    }
    @keyframes sp-blink-caret {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }

    .sp-hero-scan {
      position: absolute; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(214,243,95,0.6), transparent);
      animation: sp-grid-scan 6s linear infinite;
      pointer-events: none;
    }
    .sp-tick-strip {
      display: flex; gap: 48px;
      animation: sp-marquee 40s linear infinite;
      width: max-content;
    }
    .sp-tick-strip:hover { animation-play-state: paused; }
    .sp-bracket-l { display: inline-block; animation: sp-bracket-draw 800ms cubic-bezier(0.2,0.7,0.2,1) both; }
    .sp-bracket-r { display: inline-block; animation: sp-bracket-draw-r 800ms cubic-bezier(0.2,0.7,0.2,1) both; animation-delay: 200ms; }

    .sp-feat-row { transform: translateY(40px); opacity: 0; transition: transform 700ms cubic-bezier(0.2,0.7,0.2,1), opacity 700ms; }
    .sp-feat-row.in { transform: translateY(0); opacity: 1; }
    .sp-feat-row:hover .sp-feat-num { color: var(--spark-500); transform: translateX(4px); }
    .sp-feat-row:hover .sp-feat-h { color: var(--spark-500); }
    .sp-feat-num, .sp-feat-h { transition: color 200ms, transform 200ms; }

    .sp-stat-card { transition: transform 200ms, border-color 200ms, background 200ms; }
    .sp-stat-card:hover { transform: translateY(-4px); border-color: rgba(214,243,95,0.4); background: var(--ink-300); }

    .sp-dash-frame { transform: scale(0.95) translateY(40px); opacity: 0; transition: all 900ms cubic-bezier(0.2,0.7,0.2,1); }
    .sp-dash-frame.in { transform: scale(1) translateY(0); opacity: 1; animation: sp-glow 4s ease-in-out infinite 1s; }

    .sp-bar { transform-origin: bottom; animation: sp-bar-rise 700ms cubic-bezier(0.2,0.7,0.2,1) both; }

    .sp-phone-wrap { animation: sp-float 6s ease-in-out infinite; }

    .sp-shimmer {
      background: linear-gradient(90deg, transparent, rgba(214,243,95,0.4), transparent);
      background-size: 200% 100%;
      animation: sp-shimmer 2.5s linear infinite;
      -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; color: transparent;
    }

    .sp-step { position: relative; transition: transform 200ms; }
    .sp-step:hover { transform: translateY(-3px); }
    .sp-step .sp-step-h { background: linear-gradient(90deg, var(--spark-500), var(--spark-500) 50%, var(--fg-1) 50%, var(--fg-1)); background-size: 200% 100%; background-position: 100% 0; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; transition: background-position 400ms; }
    .sp-step:hover .sp-step-h { background-position: 0 0; }

    .sp-caret::after {
      content: "▍"; color: var(--spark-500); margin-left: 4px;
      animation: sp-blink-caret 1s infinite;
    }

    .sp-cta-btn { position: relative; overflow: hidden; }
    .sp-cta-btn::before {
      content: ""; position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transform: translateX(-100%);
      transition: transform 600ms;
    }
    .sp-cta-btn:hover::before { transform: translateX(100%); }

    @keyframes sp-pin-pop { 0% { transform: translate(-50%,-50%) scale(0); } 60% { transform: translate(-50%,-50%) scale(1.4); } 100% { transform: translate(-50%,-50%) scale(1); } }
    .sp-pin { animation: sp-pin-pop 500ms cubic-bezier(0.2,0.9,0.2,1) both; }
  `}</style>
);

/* ---------- LIVE STAT TICKER ---------- */
const SparkTicker = () => {
  const items = [
    "● LIVE", "4,228 SAMPLES TODAY", "142 ON-SITE NOW", "17 MARKETS ACTIVE",
    "↑ 91% ON-TIME RATE", "23 EVENTS / 6 STATES", "LIQUID DEATH · Q2 TOUR",
    "WHITE CLAW · RETAIL DEMOS", "MARK ANTHONY · SAMPLING", "DUDE WIPES · FESTIVALS",
    "↑ +14% WoW", "GPS-VERIFIED CHECK-INS", "AUTO-GENERATED RECAPS",
  ];
  const doubled = [...items, ...items];
  return (
    <div style={{
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      background: "var(--ink-100)", overflow: "hidden", padding: "14px 0",
    }}>
      <div className="sp-tick-strip">
        {doubled.map((t, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em",
            color: t.startsWith("●") || t.startsWith("↑") ? "var(--spark-500)" : "var(--fg-2)",
            textTransform: "uppercase", whiteSpace: "nowrap",
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
};

/* ---------- HERO ---------- */
const SparkHero = () => {
  const [count, setCount] = spState(4208);
  spEffect(() => {
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 4 + 1)), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position: "relative", background: "var(--ink-000)", overflow: "hidden", padding: "var(--hero-pad-standard) 0" }}>
      <SparkAnimStyles/>
      <GridOverlay size={48} opacity={0.05}/>
      <div className="sp-hero-scan" style={{ top: 0 }}></div>
      <div style={{
        position: "absolute", top: -200, right: -200, width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(214,243,95,0.18), transparent 60%)",
        pointerEvents: "none", animation: "sp-glow 6s ease-in-out infinite",
      }}/>
      <img alt="" src={(window.__resources?.r_assets_chrome_splash_png || "assets/chrome-splash.png")} style={{
        position: "absolute", right: "-10%", top: "-20%", width: "55%", opacity: 0.32,
        mixBlendMode: "screen", pointerEvents: "none",
      }} loading="lazy" decoding="async"/>
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
          <SparkLockup size={52} rel="../"/>
          <OpsLine glow>* RUN IT WITH IGNITE · SPARK INCLUDED</OpsLine>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 12px", borderRadius: 999,
            background: "rgba(214,243,95,0.1)", border: "1px solid rgba(214,243,95,0.3)",
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: 999, background: "var(--spark-500)",
              boxShadow: "0 0 8px var(--spark-500)",
              animation: "sp-pulse-dot 1.6s infinite",
            }}/>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
              color: "var(--spark-500)", textTransform: "uppercase",
            }}>{count.toLocaleString()} samples today</span>
          </div>
        </div>
        <h1 style={{
          fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--spark-500)",
          fontSize: "clamp(32px, 4.6vw, 74px)", lineHeight: 1.1, letterSpacing: "-0.01em", maxWidth: 1100, margin: 0,
        }}>
          <span className="sp-bracket-l" style={{ color: "var(--spark-500)", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.55em", verticalAlign: "0.22em", marginRight: 12 }}>&lt;</span>
          Field marketing finally gets the intelligence it <span style={{ color: "var(--spark-500)", fontWeight: 700 }}>deserves</span><span className="sp-caret"></span>
          <span className="sp-bracket-r" style={{ color: "var(--spark-500)", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.55em", verticalAlign: "0.22em", marginLeft: 12 }}>&gt;</span>
        </h1>
        <p style={{ marginTop: 32, fontSize: 20, lineHeight: 1.5, color: "var(--fg-2)", maxWidth: 720 }}>
          Spark is Ignite's real-time field marketing platform — designed to give clients instant visibility into every demo, event, tour, sample, and activation we run. It replaces inconsistent recaps, spreadsheet chaos, and vendor fragmentation with one centralized, agency-run system.
        </p>
        <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="https://www.igniteproductions.co/contact" className="sp-cta-btn" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "16px 28px", borderRadius: 999,
            background: "var(--ignite-500)", color: "#fff",
            fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16,
            textDecoration: "none", transition: "transform 160ms, background 160ms",
          }}>See Spark on a live program <span style={{ fontSize: 16 }}>→</span></a>
          <a href="#dashboard" className="sp-cta-btn" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "16px 28px", borderRadius: 999,
            background: "transparent", color: "var(--fg-1)",
            border: "1px solid var(--ink-400)",
            fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16,
            textDecoration: "none",
          }}>See the dashboard</a>
        </div>
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, paddingTop: 32, borderTop: "1px solid var(--ink-400)" }}>
          {[
            ["REQUESTS", "Submit activations from your team"],
            ["STAFFING", "GPS-verified check-ins, real ambassadors"],
            ["EXECUTION", "Live field ops, photo uploads"],
            ["RECAPS", "Auto-generated, in your inbox"],
          ].map(([h, d], i) => (
            <div key={h} className="sp-step">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3)", marginBottom: 8 }}>STEP 0{i+1}</div>
              <div className="sp-step-h" style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>{h}</div>
              <div style={{ marginTop: 8, fontSize: 13.5, color: "var(--fg-2)", lineHeight: 1.5 }}>{d}</div>
              {i < 3 && <div style={{ marginTop: 16, color: "var(--spark-500)", fontFamily: "var(--font-mono)", opacity: 0.6 }}>→</div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- FEATURES ---------- */
const SparkFeatures = () => {
  const rows = [
    { k: "01", t: "One centralized system", d: "All field marketing data in one place. No more chasing recaps from 8 vendors or piecing together CSVs from 3 regions." },
    { k: "02", t: "Faster decisions, live dashboards", d: "Real-time visibility across programs, markets, SKUs. Know what's working in the next market before the current one ends." },
    { k: "03", t: "True ROI visibility", d: "Event-level cost, per-sample economics, market-by-market conversion. The numbers executives actually ask for." },
    { k: "04", t: "Zero client lift", d: "Your team doesn't log into anything unless they want to. We run it; you watch it. Included at no additional cost with every Ignite program." },
  ];
  return (
    <section style={{ padding: "120px 0", background: "var(--ink-100)", borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
      <GridOverlay size={48} opacity={0.03}/>
      <Container style={{ position: "relative" }}>
        <OpsLine>>> WHAT CLIENTS GET</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-mono)", fontWeight: 700,
          fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1, maxWidth: 900,
        }}>
          Stop waiting for<br/><span style={{ fontStyle: "italic", color: "var(--spark-500)" }}>post-event reports.</span>
        </h2>
        <div style={{ marginTop: 64, display: "flex", flexDirection: "column" }}>
          {rows.map((r, i) => <SparkFeatureRow key={r.k} row={r} i={i} last={i === rows.length - 1}/>)}
        </div>
      </Container>
    </section>
  );
};

const SparkFeatureRow = ({ row, i, last }) => {
  const [ref, inView] = useInView({ threshold: 0.25 });
  return (
    <div ref={ref} className={"sp-feat-row " + (inView ? "in" : "")} style={{
      display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 40, alignItems: "center",
      padding: "36px 0", borderTop: "1px solid var(--ink-400)",
      borderBottom: last ? "1px solid var(--ink-400)" : "none",
      transitionDelay: (i * 100) + "ms",
      cursor: "default",
    }}>
      <span className="sp-feat-num" style={{
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
        letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-3)",
        display: "inline-block",
      }}>* {row.k}</span>
      <h3 className="sp-feat-h" style={{
        fontFamily: "var(--font-mono)", fontWeight: 600,
        fontSize: "clamp(24px, 2.5vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.1,
        margin: 0, color: "var(--fg-1)",
      }}>{row.t}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--fg-2)", margin: 0 }}>{row.d}</p>
    </div>
  );
};

/* ---------- DEEP DASHBOARD ---------- */
const SparkDeepDash = () => {
  const [ref, inView] = useInView({ threshold: 0.18 });
  const [count, setCount] = spState(4228);
  spEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 5 + 2)), 1100);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section id="dashboard" style={{ padding: "120px 0", background: "var(--ink-000)", borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
      <Container>
        <div style={{ marginBottom: 48 }}>
          <OpsLine>>> LIVE DASHBOARD</OpsLine>
          <h2 style={{ marginTop: 14, fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1, maxWidth: 900 }}>
            The command center for<br/>every program you run.
          </h2>
        </div>
        <div ref={ref} className={"sp-dash-frame " + (inView ? "in" : "")} style={{
          background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
          border: "1px solid var(--ink-400)", borderRadius: 20, overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: "1px solid var(--ink-400)", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57", "#FFBD2E", "#28C840"].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }}/>)}
            </div>
            <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>
              spark.igniteproductions.co / dashboard
            </div>
            <LivePill/>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: 520 }}>
            <div style={{ borderRight: "1px solid var(--ink-400)", padding: 20, background: "rgba(0,0,0,0.15)" }}>
              <OpsLine>>> PROGRAMS</OpsLine>
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 2 }}>
                {[["Liquid Death / Q2 Tour", true], ["White Claw / Retail", false], ["Mark Anthony / Sampling", false], ["Dude Wipes / Festivals", false]].map(([n, a]) => (
                  <div key={n} style={{
                    padding: "10px 12px", borderRadius: 8,
                    background: a ? "rgba(214,243,95,0.1)" : "transparent",
                    border: "1px solid " + (a ? "rgba(214,243,95,0.3)" : "transparent"),
                    color: a ? "var(--spark-500)" : "var(--fg-2)",
                    fontSize: 13, fontWeight: a ? 600 : 400, display: "flex", alignItems: "center", gap: 8,
                    transition: "all 200ms",
                  }}>
                    <span style={{ fontSize: 9, animation: a ? "sp-pulse-dot 1.6s infinite" : "none" }}>{a ? "◉" : "○"}</span> {n}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
                {[
                  [count.toLocaleString(), "Samples today", "+14%", "var(--spark-500)"],
                  ["142", "On-site now", "live", "var(--fg-1)"],
                  ["23", "Events", "6 markets", "var(--fg-1)"],
                  ["91%", "On-time", "7d avg", "var(--success)"],
                ].map(([n, l, d, color]) => (
                  <div key={l} className="sp-stat-card" style={{ padding: "14px 16px", background: "var(--ink-200)", borderRadius: 10, border: "1px solid var(--ink-400)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 26, color }}>{n}</div>
                    <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{d}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
                <div style={{ background: "var(--ink-100)", border: "1px solid var(--ink-400)", borderRadius: 12, padding: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <OpsLine>>> COVERAGE // LIVE</OpsLine>
                    <OpsLine glow>17 MARKETS</OpsLine>
                  </div>
                  <CoverageMap/>
                </div>
                <div style={{ background: "var(--ink-100)", border: "1px solid var(--ink-400)", borderRadius: 12, padding: 16 }}>
                  <OpsLine>>> ACTIVITY FEED</OpsLine>
                  <div style={{ marginTop: 14 }}><ActivityRows/></div>
                  <div style={{ marginTop: 16 }}>
                    <OpsLine>>> SAMPLES / HOUR</OpsLine>
                    <SparkBars animate={inView}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const SparkBars = ({ animate }) => {
  const bars = [38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100, 84, 92];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 110, marginTop: 10 }}>
      {bars.map((h, i) => (
        <div key={i} className={animate ? "sp-bar" : ""} style={{
          flex: 1, height: h + "%",
          background: "linear-gradient(to top, var(--spark-600), var(--spark-500))",
          borderRadius: "3px 3px 0 0",
          animationDelay: (i * 40) + "ms",
        }}/>
      ))}
    </div>
  );
};

/* ---------- MOBILE / FOR THE FIELD ---------- */
const SparkMobile = () => (
  <section className="paper" style={{ padding: "120px 0", borderTop: "1px solid var(--paper-200)", position: "relative", overflow: "hidden" }}>
    <Container>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" }}>>> FOR THE FIELD</span>
          <h2 style={{
            marginTop: 14, fontFamily: "var(--font-mono)", fontWeight: 700,
            fontSize: "clamp(28px, 2.9vw, 46px)", letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--fg-1-inv)",
          }}>
            Ambassadors clock in from the actual venue.
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: "var(--fg-2-inv)", maxWidth: 480 }}>
            Spark's mobile app is what your brand ambassadors use in the field. GPS-verified check-in. One-tap photo upload. Event reports while the event is still happening. Built for loud venues, bad reception, and fast-moving crews.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "GPS check-in on arrival (no paper sign-ins)",
              "Photo + notes + counts during event",
              "Auto-recap at clock-out",
              "Works offline; syncs when back online",
            ].map((t, i) => <SparkMobileItem key={t} text={t} i={i}/>)}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="sp-phone-wrap" style={{
            width: 320, aspectRatio: "9/19", borderRadius: 40,
            background: "var(--ink-000)", border: "10px solid #1a1a1a",
            boxShadow: "0 40px 80px rgba(0,0,0,0.25)", overflow: "hidden", position: "relative",
          }}>
            <GridOverlay size={24} opacity={0.04}/>
            <div style={{ padding: "20px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-1)" }}>9:14</span>
              <SparkLogomark size={18}/>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-1)" }}>●●●</span>
            </div>
            <div style={{ padding: "12px 16px" }}>
              <OpsLine glow>>> TODAY'S SHIFT</OpsLine>
              <h4 style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, marginTop: 10, color: "var(--fg-1)" }}>White Claw</h4>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginTop: 4 }}>
                AUSTIN, TX · 12:00 – 8:00 PM
              </div>
              <div style={{ marginTop: 20, padding: 16, background: "rgba(214,243,95,0.1)", border: "1px solid rgba(214,243,95,0.3)", borderRadius: 12 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                  <span style={{ color: "var(--spark-500)", animation: "sp-pulse-dot 1.6s infinite" }}>◉</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--spark-500)" }}>GPS VERIFIED</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 15, color: "var(--fg-1)" }}>You're at The Mohawk Patio</div>
                <button style={{
                  marginTop: 16, width: "100%", padding: "14px", borderRadius: 10,
                  background: "var(--spark-500)", color: "#0A0B0D", border: "none",
                  fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em",
                  cursor: "pointer",
                }}>Clock in</button>
              </div>
              <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div style={{ padding: 12, background: "var(--ink-200)", borderRadius: 10, border: "1px solid var(--ink-400)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>SAMPLES GOAL</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 20, color: "var(--fg-1)", marginTop: 4 }}>320</div>
                </div>
                <div style={{ padding: 12, background: "var(--ink-200)", borderRadius: 10, border: "1px solid var(--ink-400)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>BRIEF</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 20, color: "var(--spark-500)", marginTop: 4 }}>READY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const SparkMobileItem = ({ text, i }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div ref={ref} style={{
      display: "flex", gap: 10, alignItems: "center",
      fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-2-inv)",
      opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)",
      transition: "all 500ms cubic-bezier(0.2,0.7,0.2,1)", transitionDelay: (i * 100) + "ms",
    }}>
      <span style={{ color: "var(--ignite-500)" }}>→</span> {text}
    </div>
  );
};

Object.assign(window, { SparkHero, SparkFeatures, SparkDeepDash, SparkMobile, SparkTicker });
