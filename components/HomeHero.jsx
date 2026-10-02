/* Homepage hero — full-bleed video, big typographic spine */
const { useState: hsState, useEffect: hsEffect, useRef: hsRef } = React;

const HERO_VIDEO_URL = (window.__resources?.r_68910151313e90f6c97448a5_Untitled_20desi || "https://cdn.prod.website-files.com/688129f3841088c282c326c4/68910151313e90f6c97448a5_Untitled%20design-transcode.mp4");

const MOMENTS = [
  ["AUSTIN, TX",   "WHITE CLAW",     "SXSW TAKEOVER",       "03:14 PM CT"],
  ["BROOKLYN, NY", "LIQUID DEATH",   "WARPED TOUR",         "06:48 PM ET"],
  ["LOS ANGELES",  "DUDE WIPES",     "SUMMER POP-UP",       "12:02 PM PT"],
  ["MIAMI, FL",    "MAS+",           "MESSI ACTIVATION",    "07:11 PM ET"],
  ["CHICAGO, IL",  "TOTAL WIRELESS", "LOLLAPALOOZA",        "05:33 PM CT"],
  ["NASHVILLE, TN","SMALLS SLIDERS", "DOWNTOWN SAMPLING",   "01:22 PM CT"],
];

/* Word rotators that sit under "We turn" */
/* Edgy rotators — who & what we convert. */
const WORDS = ["consumers", "strangers", "skeptics", "streets", "stadiums", "shoppers", "crowds", "side-eyes"];

/* ---------- Hero ticker: count-up stats + client logos, service row underneath ---------- */
const HX_STATS = [
  { n: 257000, suffix: "+", label: "BRAND AMBASSADORS", href: "pages/services-event-staffing.html" },
  { n: 5000,   suffix: "+", label: "EVENTS EXECUTED",   href: "pages/work.html" },
  { n: 50,     suffix: "",  label: "STATES COVERED",    href: "pages/markets.html" },
  { n: 48,     suffix: "hr",label: "RUSH STAFFING",     href: "https://www.igniteproductions.co/contact" },
  { t: "SINCE 2018", label: "VETERAN-OWNED",            href: "pages/about.html" },
  { t: "GPS",        label: "VERIFIED SHIFTS",          href: "pages/spark-platform-v2.html" },
  { t: "TIPS + RBS", label: "CERTIFIED STAFF",          href: "pages/services-event-staffing.html" },
];
const HX_LOGO_PICK = ["OpenAI", "Claude", "Liquid Death", "White Claw", "Breakaway", "Total Wireless", "Luckin Coffee"];
const HX_SERVICES = [
  ["Event staffing", "pages/services-event-staffing.html"], ["Product sampling", "pages/services-product-sampling.html"], ["Trade show staffing", "pages/services-trade-shows.html"],
  ["Experiential marketing", "pages/services-experiential-marketing.html"], ["Street teams", "pages/services-street-teams.html"], ["Mobile tours", "pages/services-mobile-tours.html"],
  ["Event production", "pages/services-event-production.html"], ["Sponsorships", "pages/services-sponsorship-partnerships.html"], ["Spark reporting", "pages/spark-platform-v2.html"],
];
const hxFmt = (v) => v.toLocaleString("en-US");
const HeroTicker = () => {
  const ref = hsRef(null);
  const [p, setP] = hsState(0);
  hsEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setP(1); return; }
    let raf, t0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const step = (t) => { if (!t0) t0 = t; const k = Math.min(1, (t - t0) / 1600); setP(1 - Math.pow(1 - k, 3)); if (k < 1) raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  const logos = (window.CLIENT_LOGOS || []).filter(l => HX_LOGO_PICK.includes(l.name));
  const seq = [];
  HX_STATS.forEach((s, i) => { seq.push({ k: "s" + i, s }); if (logos[i % (logos.length || 1)]) seq.push({ k: "l" + i, l: logos[i % logos.length] }); });
  const row = (r) => seq.map(({ k, s, l }) => s ? (
    <a key={r + k} className="hx-item" href={s.href} aria-hidden={r ? "true" : undefined} tabIndex={r ? -1 : undefined}>
      <span className="hx-n">{s.t || (hxFmt(Math.round(s.n * p)) + s.suffix)}</span>
      <span className="hx-l">{s.label}</span>
    </a>
  ) : (
    <span key={r + k} className="hx-logo" aria-hidden={r ? "true" : undefined}>
      <img src={l.url} alt={r ? "" : l.name} loading="lazy" decoding="async" style={{ maxHeight: Math.min(l.maxH || 30, 28), maxWidth: Math.min(l.maxW || 120, 110) }}/>
    </span>
  ));
  const svc = (r) => HX_SERVICES.map(([n, f]) => (
    <a key={r + f} className="hx-svc" href={f} aria-hidden={r ? "true" : undefined} tabIndex={r ? -1 : undefined}>{n}</a>
  ));
  return (
    <div ref={ref} className="hx-wrap" aria-label="Ignite by the numbers">
      <style>{`
        .hx-wrap{position:relative;z-index:3;border-top:1px solid rgba(214,243,95,.22);background:linear-gradient(180deg,rgba(10,11,13,.82),rgba(10,11,13,.96));backdrop-filter:blur(20px);overflow:hidden}
        .hx-wrap::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(90deg,rgba(214,243,95,.035) 0 1px,transparent 1px 64px)}
        .hx-vp{position:relative;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
        .hx-track{display:flex;align-items:center;width:max-content;padding:16px 0;animation:marquee 64s linear infinite}
        .hx-track.rev{padding:9px 0;animation:hxRev 52s linear infinite}
        .hx-vp:hover .hx-track{animation-play-state:paused}
        .hx-sub{border-top:1px solid rgba(255,255,255,.06);background:rgba(214,243,95,.025)}
        .hx-item{display:inline-flex;align-items:center;gap:14px;padding:0 30px;white-space:nowrap;text-decoration:none;border-radius:8px;transition:background .2s}
        .hx-item:hover{background:rgba(214,243,95,.06)}
        .hx-item:focus-visible{outline:2px solid #D6F35F;outline-offset:-2px}
        .hx-n{font-family:var(--font-display);font-weight:700;font-size:32px;line-height:1;letter-spacing:-.025em;font-variant-numeric:tabular-nums;background:linear-gradient(100deg,#D6F35F 0%,#D6F35F 40%,#F6FFD0 50%,#D6F35F 60%,#D6F35F 100%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:hxSheen 6s ease-in-out infinite}
        .hx-l{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.24em;color:rgba(255,255,255,.62);line-height:1}
        .hx-item:hover .hx-l{color:#fff}
        .hx-logo{display:inline-flex;align-items:center;padding:0 30px;position:relative}
        .hx-logo::before,.hx-logo::after{content:"//";position:absolute;top:50%;transform:translateY(-50%);font-family:var(--font-mono);font-size:12px;color:rgba(214,243,95,.35)}
        .hx-logo::before{left:0}.hx-logo::after{right:0}
        .hx-logo img{display:block;width:auto;margin:0 22px;filter:brightness(0) invert(1);opacity:.55}
        .hx-svc{display:inline-flex;align-items:center;gap:12px;padding:0 22px;white-space:nowrap;text-decoration:none;font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.5);transition:color .2s}
        .hx-svc::before{content:"*";color:#D6F35F;font-size:13px}
        .hx-svc:hover{color:#D6F35F}
        @keyframes hxSheen{0%,100%{background-position:100% 0}50%{background-position:0 0}}
        @keyframes hxRev{from{transform:translateX(-50%)}to{transform:translateX(0)}}
        @media (max-width:720px){.hx-n{font-size:24px}.hx-item{padding:0 20px}.hx-logo{padding:0 22px}.hx-logo img{margin:0 16px}.hx-track.rev{padding:7px 0}}
        @media (prefers-reduced-motion:reduce){.hx-track,.hx-n{animation:none}}
      `}</style>
      <div className="hx-vp"><div className="hx-track">{row(0)}{row(1)}</div></div>
      <div className="hx-vp hx-sub"><div className="hx-track rev">{svc(0)}{svc(1)}</div></div>
    </div>
  );
};

const HomeHero = () => {
  const [idx, setIdx]         = hsState(0);
  const [wordIdx, setWordIdx] = hsState(0);
  const videoRef = hsRef(null);

  hsEffect(() => {
    const a = setInterval(() => setIdx(i => (i + 1) % MOMENTS.length), 3600);
    const b = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2400);
    return () => { clearInterval(a); clearInterval(b); };
  }, []);

  // Best-effort autoplay (some browsers gate it until interaction)
  hsEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section data-screen-label="Home Hero" style={{
      position: "relative", background: "#0A0A0A", color: "#fff",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>
      {/* Full-bleed looping hero video */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          autoPlay muted loop playsInline preload="auto"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            filter: "brightness(0.55) saturate(1.1) contrast(1.06)",
          }}
        />
        {/* Dark + ember glow overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            linear-gradient(180deg, rgba(10,10,10,0.20) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.96) 100%)
          `,
        }}/>
        {/* Faint scanline texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 3px)",
        }}/>
      </div>

      {/* Top meta bar */}
      <div className="hero-meta" style={{ position: "relative", zIndex: 3 }}>
        <div className="hero-meta-inner" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.12)", gap: 16, flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{
              padding: "5px 10px", background: "transparent", color: "var(--fg)", border: "1px solid var(--fg)",
              fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", borderRadius: 999,
            }}>★ VETERAN-OWNED</span>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600,
              letterSpacing: "-0.005em", color: "#fff", textTransform: "none",
            }}>
              Event Marketing <span style={{ color: "rgba(255,255,255,0.4)" }}>+</span> Brand Ambassador Agency
            </span>
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
            <span style={{ color: "rgba(255,255,255,0.5)" }}><span style={{ position: "relative", display: "inline-block" }}>Don't show up<span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "52%", height: 2, borderRadius: 2, transform: "translateY(-50%)", background: "linear-gradient(90deg, #4F86C6, #D7453E)" }}/></span> set it off</span>
          </div>
        </div>
      </div>

      {/* Main headline zone */}
      <div className="hero-main" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 20 }}>
        <h1 style={{ margin: "0 0 18px", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--spark-500)" }}>Experiential marketing and event staffing agency</h1>
        <div className="hero-headline" aria-hidden="true" style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(40px, 8vw, 118px)", lineHeight: 0.9,
          letterSpacing: "-0.05em", margin: 0,
        }}>
          <span style={{ display: "block", color: "rgba(255,255,255,0.94)" }}>We turn</span>
          <span style={{
            display: "block", position: "relative", height: "1em", overflow: "hidden",
          }}>
            {WORDS.map((w, i) => (
              <span key={w} style={{
                position: "absolute", inset: 0,
                fontStyle: "italic", fontWeight: 700,
                background: "linear-gradient(135deg, #D7453E 0%, #FFB627 45%, #FF8A3D 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                transform: i === wordIdx ? "translateY(0)" : (i === (wordIdx - 1 + WORDS.length) % WORDS.length ? "translateY(-110%)" : "translateY(110%)"),
                transition: "transform 600ms cubic-bezier(0.7, 0, 0.25, 1)",
              }}>{w}</span>
            ))}
          </span>
          <span style={{ display: "block", color: "#fff" }}>
            into <span style={{ fontWeight: 700 }}>superfans.</span>
          </span>
        </div>

        <div className="hero-grid" style={{
          marginTop: 16, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 28,
          alignItems: "end",
        }}>
          <p className="hero-lede" style={{ fontSize: 17, lineHeight: 1.45, color: "rgba(255,255,255,0.92)", maxWidth: 600, fontWeight: 400, margin: 0, textWrap: "pretty" }}>
            Veteran-owned. Operator-built. Running <span style={{ color: "#FFB627", fontWeight: 600, whiteSpace: "nowrap" }}>5,000+ events executed</span> for the brands picking fights with their category, <span style={{ color: "rgba(255,255,255,0.78)" }}>beverage, alcohol, CPG, telecom, QSR, lifestyle, and whoever's next.</span>
          </p>

          {/* Live moment card */}
          <div style={{
            padding: "13px 16px", borderRadius: 12,
            background: "rgba(10,10,10,0.55)", backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.14)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, transparent, #D7453E, transparent)",
              animation: "sweep 3s linear infinite",
            }}/>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "#D7453E" }}>
                ● LIVE RIGHT NOW
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)" }}>
                {MOMENTS[idx][3]}
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4 }}>
              {MOMENTS[idx][1]}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
              {MOMENTS[idx][0]} · {MOMENTS[idx][2]}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-ctas" style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <a href="https://www.igniteproductions.co/contact" style={{
            padding: "16px 24px", borderRadius: 999,
            background: "var(--spark-500)", color: "#0A0B0D",
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, letterSpacing: "-0.01em",
            display: "inline-flex", alignItems: "center", gap: 10,
            transition: "transform 200ms, box-shadow 200ms",
            boxShadow: "0 12px 32px rgba(214,243,95,0.32)",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(214,243,95,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(214,243,95,0.32)"; }}
          >
            Request a quote <span>→</span>
          </a>
          <a href="pages/work.html" style={{
            padding: "16px 24px", borderRadius: 999,
            background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.28)",
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, letterSpacing: "-0.01em",
            display: "inline-flex", alignItems: "center", gap: 10,
            transition: "border-color 200ms, background 200ms",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"; e.currentTarget.style.background = "transparent"; }}
          >
            See the work <span>→</span>
          </a>
        </div>
      </div>

      <HeroTicker/>
    </section>
  );
};

Object.assign(window, { HomeHero });
