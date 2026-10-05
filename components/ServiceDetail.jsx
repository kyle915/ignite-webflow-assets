/* Lowercase a service name for inline copy but keep acronyms (BA, BAs, QSR, AI, CPG, CRM) intact */
const svcLower=(t)=>String(t||"").split(" ").map(w=>/^[A-Z0-9+&]{2,}s?$/.test(w)?w:w.toLowerCase()).join(" ");
const svcArticle=(t)=>/^[aeiou]/i.test(svcLower(t))?"an":"a";
/* Shared renderer for an individual service detail page.
   Each /pages/services-{slug}.html sets window.__SERVICE_SLUG before mounting. */

const ServiceHero = ({ s }) => (
  <section className="sd-hero-sec" data-screen-label={s.label + " Hero"} style={{
    position: "relative", background: "#0A0A0A", color: "#fff",
    minHeight: 420, display: "flex", flexDirection: "column", overflow: "hidden",
  }}>
    <style>{`
      @media (max-width: 720px) {
        .sd-hero-sec { min-height: 0 !important; }
        .sd-hero-sec > .sd-hero-body { justify-content: flex-start !important; padding-top: 24px !important; padding-bottom: 44px !important; }
      }
      @keyframes sd-hero-rise { 0% { opacity: 0; transform: translateY(26px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes sd-hero-blob-a { 0%,100% { transform: translate(-4%,-3%) scale(1); } 50% { transform: translate(7%,4%) scale(1.18); } }
      @keyframes sd-hero-blob-b { 0%,100% { transform: translate(5%,4%) scale(1.05); } 50% { transform: translate(-5%,-5%) scale(0.92); } }
      @keyframes sd-hero-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(700%); } }
      @keyframes sd-hero-kenburns { 0% { transform: scale(1.04); } 100% { transform: scale(1.12); } }
      .sd-hero-rise { animation: sd-hero-rise 900ms cubic-bezier(0.16,0.84,0.3,1) both; }
      .sd-hero-img { animation: sd-hero-kenburns 18s ease-out forwards alternate; }
      @media (prefers-reduced-motion: reduce) {
        .sd-hero-rise, .sd-hero-img, .sd-hero-blob, .sd-hero-scan { animation: none !important; }
      }
    `}</style>
    {s.heroFit === "contain" && (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${s.hero})`,
        backgroundSize: "cover",
        backgroundPosition: s.heroPos || "center 35%",
        filter: "blur(28px) brightness(0.35) saturate(1.2)",
        transform: "scale(1.15)",
      }}/>
    )}
    <img className={s.heroFit === "contain" ? "" : "sd-hero-img"} src={s.hero} alt={s.label} style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      objectFit: s.heroFit || "cover",
      objectPosition: s.heroPos || "center 35%",
      filter: s.heroFilter || "brightness(0.55) saturate(1.05) contrast(1.05)",
    }} loading="lazy" decoding="async"/>
    {/* Drifting ambient accent blobs */}
    <div className="sd-hero-blob" aria-hidden="true" style={{
      position: "absolute", right: "-12%", top: "-18%", width: "55%", height: "75%",
      background: "transparent",
      filter: "blur(50px)", animation: "sd-hero-blob-a 20s ease-in-out infinite", pointerEvents: "none",
    }}/>
    <div className="sd-hero-blob" aria-hidden="true" style={{
      position: "absolute", left: "-14%", bottom: "-22%", width: "50%", height: "60%",
      background: "transparent",
      filter: "blur(60px)", animation: "sd-hero-blob-b 26s ease-in-out infinite", pointerEvents: "none",
    }}/>
    {/* Scan line */}
    <div className="sd-hero-scan" aria-hidden="true" style={{
      position: "absolute", left: 0, right: 0, top: 0, height: "12%",
      background: `linear-gradient(180deg, transparent, ${s.accent}10, transparent)`,
      animation: "sd-hero-scan 9s linear infinite", pointerEvents: "none", opacity: 0.7,
    }}/>
    <div style={{
      position: "absolute", inset: 0,
      background: `linear-gradient(180deg, rgba(10,10,10,0.30) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.96) 100%)`,
    }}/>
    <div className="sd-hero-body" style={{ position: "relative", zIndex: 2, maxWidth: 1480, width: "100%", margin: "0 auto", padding: "67px 32px 67px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div className="sd-hero-rise" style={{ display: s.flag ? "flex" : "none", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap", animationDelay: "120ms" }}>
        {s.flag && (
          <span style={{
            padding: "6px 12px", borderRadius: 6, background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#fff",
          }}>★ FLAGSHIP CAPABILITY</span>
        )}
      </div>

      <h1 className="sd-hero-rise" style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: s.heroSplit ? "clamp(56px, 7.6vw, 124px)" : "clamp(64px, 9vw, 144px)",
        lineHeight: 0.92,
        letterSpacing: "-0.045em", margin: 0, maxWidth: 1300, textWrap: "balance",
        animationDelay: "240ms",
      }}>
        <style>{`
          @keyframes ig-blink-caret { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
          .ig-spark-caret::after { content: "▍"; color: ${s.accent}; margin-left: 4px; animation: ig-blink-caret 1s infinite; }
        `}</style>
        {s.heroSplit ? (
          <>
            {s.heroBrackets && <span style={{ color: s.accent, fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.5em", verticalAlign: "0.28em", marginRight: 14 }}>&lt;</span>}
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{s.heroSplit[0]}</span>
            <br/>
            <span className={s.heroBrackets ? "ig-spark-caret" : ""} style={{
              display: "inline-block", whiteSpace: "nowrap",
              fontStyle: "italic", color: s.accent,
              
            }}>{s.heroSplit[1]}</span>
            {s.heroBrackets && <span style={{ color: s.accent, fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.5em", verticalAlign: "0.28em", marginLeft: 14 }}>&gt;</span>}
          </>
        ) : s.label}
      </h1>

      <div className="sd-hero-rise" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end", marginTop: 40, animationDelay: "380ms" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.18, letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.92)", margin: 0, maxWidth: 720, textWrap: "pretty",
        }}>{s.tagline}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {s.stats.map(([n, l]) => (
            <div key={l} style={{
              padding: "14px 14px", background: "rgba(10,10,10,0.55)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.14)", borderRadius: 10,
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em", color: s.accent, lineHeight: 1 }}>{n}</div>
              <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
        <a href="https://www.igniteproductions.co/contact" style={{
          padding: "16px 24px", borderRadius: 999,
          background: s.accent, color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff",
          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, letterSpacing: "-0.01em",
          display: "inline-flex", alignItems: "center", gap: 10,
        }}>Brief us on {svcArticle(s.short)} {svcLower(s.short)} project <span>→</span></a>
        <a href="https://www.igniteproductions.co/contact" style={{
          padding: "16px 24px", borderRadius: 999,
          background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.28)",
          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, letterSpacing: "-0.01em",
          display: "inline-flex", alignItems: "center", gap: 10,
        }}><span style={{ color: "#FF6969" }}>●</span> Need it fast? Rush queue</a>
      </div>
    </div>
  </section>
);

/* ---------- POV — edgy single-statement belief with marquee + glitch ---------- */
const ServicePOV = ({ s }) => {
  if (!s.pov) return null;
  const SQ = "\u25A0";
  const customWords = s.pov && s.pov.marquee;
  const marqueeWords = customWords && customWords.length
    ? customWords.flatMap((w, i) => i === customWords.length - 1 ? [w, SQ] : [w, SQ])
    : ["OUR TAKE", SQ, "UNPOPULAR OPINION", SQ, "WE'LL SAY IT", SQ, "FIELD-TESTED", SQ];
  return (
    <section style={{ background: "#0A0A0A", color: "#fff", padding: "0 0 120px", borderTop: `2px solid ${s.accent}`, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes ig-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ig-glitch-shift { 0%,90%,100% { transform: translate(0,0); } 92% { transform: translate(-2px,1px); } 94% { transform: translate(2px,-1px); } 96% { transform: translate(-1px,2px); } 98% { transform: translate(1px,-1px); } }
        @keyframes ig-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0.15; } }
        .ig-pov-marquee { display: flex; gap: 36px; white-space: nowrap; animation: ig-marquee 36s linear infinite; }
        .ig-pov-marquee--rev { animation-direction: reverse; animation-duration: 48s; }
        .ig-pov-lead { position: relative; display: inline-block; animation: ig-glitch-shift 6s steps(1,end) infinite; }
        .ig-pov-lead::before, .ig-pov-lead::after { content: attr(data-text); position: absolute; inset: 0; pointer-events: none; mix-blend-mode: screen; }
        .ig-pov-lead::before { color: #00E5FF; transform: translate(-3px, 0); clip-path: polygon(0 0,100% 0,100% 33%,0 33%); opacity: 0.55; }
        .ig-pov-lead::after { color: var(--accent-color, #D7453E); transform: translate(3px, 0); clip-path: polygon(0 66%,100% 66%,100% 100%,0 100%); opacity: 0.65; }
      `}</style>

      {/* big angular accent shape */}
      <div aria-hidden style={{ position: "absolute", right: -120, top: 80, width: 460, height: 460, background: s.accent, clipPath: "polygon(0 0, 100% 0, 100% 100%)", opacity: 0.18 }}/>
      <div aria-hidden style={{ position: "absolute", left: -80, bottom: -40, width: 340, height: 340, border: `2px solid ${s.accent}`, opacity: 0.15, transform: "rotate(8deg)" }}/>

      <Container style={{ position: "relative", paddingTop: 110, paddingBottom: 40, "--accent-color": s.accent }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "6px 14px", background: s.accent, color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff", marginBottom: 36, transform: "skew(-12deg)" }}>
          <span style={{ transform: "skew(12deg)", display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-stencil)", fontSize: 16, letterSpacing: "0.08em" }}>
            <span style={{ animation: "ig-blink 1.2s infinite" }}>●</span> THE TAKE
          </span>
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(40px, 5.4vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.96,
          margin: 0, maxWidth: 1300, textWrap: "balance", display: "block",
        }}>{s.pov.lead}</h2>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "40px 1fr", gap: 24, alignItems: "start", maxWidth: 1100 }}>
          <div aria-hidden style={{ height: "100%", minHeight: 80, width: 4, background: s.accent }}/>
          <p style={{
            fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: "clamp(22px, 2.4vw, 34px)", lineHeight: 1.3, letterSpacing: "-0.015em",
            color: "rgba(255,255,255,0.92)", textWrap: "pretty", margin: 0,
          }}>{s.pov.body}</p>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Pain Banner — "if you're on this page, you're probably…" ---------- */
const ServicePainBanner = ({ s }) => {
  if (!s.pains || !s.pains.items || !s.pains.items.length) return null;
  const items = s.pains.items;
  const accent = s.accent || "var(--ignite-500)";
  const mid = Math.ceil(items.length / 2);
  const rows = [
    [items.slice(0, mid), 55, accent],
    [items.slice(mid),    70, "#FFB627"],
  ];
  return (
    <section style={{
      background: "var(--ink-100)", color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      padding: "56px 0", position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes spnMarq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* opener */}
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.24em",
            textTransform: "uppercase", color: accent, fontWeight: 700,
          }}>// FOUND-YOU MOMENT</span>
          <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${accent}66, transparent)` }}/>
        </div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(28px, 3.6vw, 56px)", letterSpacing: "-0.03em",
          lineHeight: 1, textWrap: "balance", maxWidth: 1100, margin: 0,
        }}>
          {s.pains.opener}
        </h3>
      </Container>

      {/* scrolling rows */}
      <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map(([list, speed, color], ri) => (
          <div key={ri} style={{
            overflow: "hidden",
            maskImage: "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
          }}>
            <div style={{
              display: "flex", gap: 14, width: "max-content",
              animation: `spnMarq ${speed}s linear infinite`,
              animationDirection: ri % 2 ? "reverse" : "normal",
            }}>
              {[...list, ...list].map((line, i) => (
                <div key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "11px 18px", borderRadius: 999,
                  border: "1px solid var(--ink-400)",
                  background: "var(--ink-000)",
                  fontFamily: "var(--font-display)", fontWeight: 500,
                  fontSize: 16, letterSpacing: "-0.005em",
                  color: "var(--fg-1)", whiteSpace: "nowrap",
                  flex: "0 0 auto",
                }}>
                  <span style={{ color, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em" }}>✕</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* sinker */}
      <Container style={{ marginTop: 30 }}>
        <div style={{ display: "flex", alignItems: "stretch", gap: 16 }}>
          <span style={{ width: 4, alignSelf: "stretch", background: accent, borderRadius: 2, flexShrink: 0 }}/>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: "clamp(20px, 2.1vw, 28px)", color: "var(--fg-2)",
            lineHeight: 1.35, textWrap: "balance", maxWidth: 920, display: "block",
          }}>
            {s.pains.sinker.split("—")[0]}
            <span style={{ color: accent, fontStyle: "italic", fontFamily: "Georgia, serif", fontWeight: 400 }}>
              {s.pains.sinker.includes("—") ? " — " + s.pains.sinker.split("—")[1] : ""}
            </span>
          </span>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Comparison — most agencies vs Ignite ---------- */
const ServiceComparison = ({ s }) => {
  if (!s.comparison || !s.comparison.length) return null;
  const accent = s.paperAccent || accent;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}DIFFERENCE ENGINE</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.98,
          color: "var(--fg-1)", maxWidth: 1100, textWrap: "balance",
        }}>
          Most agencies. <span style={{ fontStyle: "italic", color: s.accent }}>Then us.</span>
        </h2>
        <div style={{
          marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 1, background: "rgba(255,255,255,0.08)",
          border: `1px solid ${s.accent}33`, borderRadius: 16, overflow: "hidden",
          
        }}>
          <div style={{
            padding: "20px 28px", background: "var(--ink-100)",
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--fg-3)", fontWeight: 600,
          }}>// MOST AGENCIES</div>
          <div style={{
            padding: "20px 28px",
            background: `linear-gradient(90deg, ${s.accent}22, ${s.accent}08)`,
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: s.accent, fontWeight: 700,
            borderLeft: `2px solid ${s.accent}`,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: 999, background: s.accent,
              
              animation: "ig-blink 2.4s ease-out infinite",
            }}/>
            // IGNITE
          </div>
          {s.comparison.map(([a, b], i) => (
            <React.Fragment key={i}>
              <div style={{
                padding: "26px 28px", background: "var(--ink-100)",
                fontFamily: "var(--font-display)", fontSize: 17, lineHeight: 1.45,
                color: "rgba(245,242,236,0.5)",
                textDecoration: "line-through", textDecorationColor: "rgba(245,242,236,0.3)",
              }}>{a}</div>
              <div style={{
                padding: "26px 28px",
                background: `linear-gradient(90deg, ${s.accent}10, transparent 70%)`,
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17,
                lineHeight: 1.45, letterSpacing: "-0.005em", color: "var(--fg-1)",
                borderLeft: `2px solid ${s.accent}`,
                display: "flex", alignItems: "baseline", gap: 12,
              }}>
                <span style={{
                  color: s.accent, fontWeight: 800, fontSize: 17, flexShrink: 0,
                  
                }}>✓</span>
                <span>{b}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- ProofBar — real client logo wall (same source as homepage marquee) ---------- */
const BRAND_LOGOS = {
  "LIQUID DEATH":   (window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"),
  "WHITE CLAW":     (window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"),
  "MAS+":           (window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp"),
  "KRISPY KRUNCHY": (window.__resources?.r_688c1b20a33960875f5d7bc0_krispy_krunchy_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp"),
  "TOTAL WIRELESS": (window.__resources?.r_688c1bb2f2c798b4cb850d2e_total_wireless_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp"),
  "DUDE WIPES":     (window.__resources?.r_688c3839708ed185c2de5ba9_dude_wipes || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp"),
  "GLENDALOUGH":    (window.__resources?.r_688c3841bacf82489917b2b9_glendonough_dis || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp"),
  "SMALLS SLIDERS": (window.__resources?.r_688c377975c7a23684962d73_smalls_sliders || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp"),
  "MARC ANTHONY":   (window.__resources?.r_688c378239e6dc2ebedde728_marc_anthony_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"),
};
const BrandMark = ({ name }) => {
  const url = BRAND_LOGOS[name];
  if (!url) return <span style={{ fontFamily: "var(--font-stencil)", fontSize: 16, letterSpacing: "0.06em", color: "rgba(255,255,255,0.6)" }}>{name}</span>;
  return <img src={url} alt={name} style={{ maxHeight: 56, maxWidth: "80%", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.88 }} loading="lazy" decoding="async"/>;
};
const ServiceProofBar = ({ s }) => {
  if (!s.proof) return null;
  return (
    <section style={{ background: "#0A0A0A", color: "#fff", padding: "100px 0", borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 18, marginBottom: 44 }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: s.accent }}>// trusted by</span>
            <h3 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.025em", lineHeight: 1 }}>
              Brands running {svcLower(s.short)} on us.
            </h3>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", maxWidth: 320, textAlign: "right" }}>{s.proof.note}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${s.proof.logos.length}, 1fr)`, gap: 1, background: "rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
          {s.proof.logos.map((b, i) => (
            <div key={i} style={{
              background: "#0A0A0A", padding: "40px 16px", display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 120, transition: "background 240ms, color 240ms",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#141414"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#0A0A0A"; }}
            ><BrandMark name={b}/></div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Industries Served — edgy stencil chip wall ---------- */
const ServiceIndustries = ({ s }) => {
  if (!s.industries || !s.industries.length) return null;
  return (
    <section style={{ background: "#0A0A0A", color: "#fff", padding: "120px 0", borderTop: `2px dashed ${s.accent}`, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes ig-ind-flicker { 0%,98%,100% { opacity: 1; } 99% { opacity: 0.35; } }
        .ig-ind-chip { transition: transform 220ms, background 220ms, color 220ms, border-color 220ms; }
        .ig-ind-chip:hover { transform: translate(-3px,-3px) rotate(-1deg); }
      `}</style>
      {/* background text overlay removed */}
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", animation: "ig-ind-flicker 4s infinite" }}>// who runs this // {String(s.industries.length).padStart(2,"0")} verticals</span>
          <span style={{ height: 1, width: 100, background: s.accent, opacity: 0.4 }}/>
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(48px, 6.5vw, 108px)", letterSpacing: "-0.035em", lineHeight: 0.92,
          margin: 0, maxWidth: 1300,
        }}>
          Categories we know <span style={{ fontStyle: "italic", color: s.accent }}>cold.</span>
        </h2>
        <div style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 14 }}>
          {s.industries.map((ind, i) => {
            const VERT_PALETTE = ["#D7453E","#E68A4C","#E8C24A","#9FC24E","#4FB58A","#3FAEA8","#4F7DA6","#4664C4","#8A5CD1","#C85B9E"];
            const col = VERT_PALETTE[i % VERT_PALETTE.length];
            const styles = {
              padding: "14px 22px",
              fontFamily: "var(--font-stencil)",
              fontSize: "clamp(16px, 1.4vw, 22px)",
              letterSpacing: "0.06em", textTransform: "uppercase",
              display: "inline-flex", alignItems: "center", gap: 10, lineHeight: 1,
              transform: `rotate(${(i % 2 ? -0.6 : 0.6)}deg)`,
              background: "transparent", color: col, border: `1.5px solid ${col}`,
            };
            return (
              <span key={i} className="ig-ind-chip" style={styles}>
                <span style={{ opacity: 0.55, fontSize: "0.7em" }}>{String(i+1).padStart(2,"0")}</span>
                {ind}
              </span>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* ---------- National Reach — hero stat + dot-map + market list for SEO ---------- */
const ServiceMarkets = ({ s }) => {
  const markets = window.SERVICE_MARKETS || [];
  if (!markets.length) return null;
  // 28 plotted US-shape dots (approximate continental layout) + the city names below provide SEO long-tail
  const dots = [
    [12,42],[16,38],[18,55],[20,48],[22,62],[24,40],[26,52],[28,46],[30,58],[32,42],
    [34,50],[36,38],[38,56],[40,46],[42,52],[44,40],[46,60],[48,48],[50,42],[52,54],
    [54,46],[56,38],[58,52],[60,44],[62,58],[64,48],[66,40],[68,54],[70,46],[72,38],
    [74,50],[76,42],[78,56],[80,48],[82,40],[84,52],[86,44],[88,38],[15,30],[25,32],
    [38,28],[50,30],[62,30],[74,32],[18,68],[30,72],[45,70],[58,68],[70,72],[80,66],
  ];
  return (
    <section style={{ background: "#0A0A0A", color: "#fff", padding: "140px 0", borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes ig-dot-pulse { 0%,100% { opacity: 0.85; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.85); } }
      `}</style>
      <Container style={{ position: "relative" }}>
        {/* edgy headline block — no map */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.24em", color: s.accent, textTransform: "uppercase" }}>// coverage / 50.states / {markets.length}+.markets</span>
          <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(215, 69, 62,0.5), rgba(255,255,255,0.08))" }}/>
        </div>

        <div style={{ position: "relative" }}>
          {/* ghosted stencil backdrop */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-stencil)", fontSize: "clamp(140px, 22vw, 360px)", lineHeight: 0.85,
            color: "rgba(255,255,255,0.025)", letterSpacing: "0.02em", whiteSpace: "nowrap",
            pointerEvents: "none", userSelect: "none", overflow: "hidden",
          }}>50&nbsp;STATES</div>

          <h2 style={{
            position: "relative",
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(72px, 13vw, 220px)", letterSpacing: "-0.05em", lineHeight: 0.82,
            margin: 0, color: "#fff",
          }}>
            Brooklyn<span style={{ color: "rgba(255,255,255,0.35)" }}> to </span><br/>
            <span style={{ color: s.accent, fontStyle: "italic" }}>Burbank.</span>
            <span style={{
              display: "inline-block", marginLeft: 20, verticalAlign: "middle",
              fontFamily: "var(--font-stencil)", fontSize: "clamp(28px, 3vw, 56px)",
              letterSpacing: "0.04em", color: "rgba(255,255,255,0.85)",
              padding: "8px 18px", border: `2px solid ${s.accent}`, borderRadius: 4,
              transform: "rotate(-2deg)", background: "rgba(215, 69, 62,0.08)",
            }}>+ EVERY ZIP&nbsp;IN&nbsp;BETWEEN</span>
          </h2>
        </div>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "end" }}>
          <p style={{
            margin: 0, fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.3, letterSpacing: "-0.015em",
            color: "rgba(255,255,255,0.9)",
          }}>
            We don't just say <span style={{ color: s.accent, fontWeight: 700 }}>national</span> — we <span style={{ borderBottom: `2px solid ${s.accent}` }}>show up</span> in every DMA. One roster. One platform. One PO. Detroit on Tuesday, Tampa on Wednesday, doesn't matter.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: `2px solid ${s.accent}`, borderRadius: 8, overflow: "hidden" }}>
            {[["50","STATES"],[markets.length+"+","MARKETS"],["48HR","RUSH"]].map(([n,l], i) => (
              <div key={l} style={{
                background: i === 1 ? s.accent : "#0A0A0A", padding: "26px 18px",
                borderRight: i < 2 ? `2px solid ${s.accent}` : "none",
                position: "relative",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px, 4vw, 56px)", color: i === 1 ? "#0A0A0A" : s.accent, letterSpacing: "-0.03em", lineHeight: 0.9 }}>{n}</div>
                <div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: i === 1 ? "rgba(10,10,10,0.7)" : "rgba(255,255,255,0.55)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO market list — dense, readable */}
        <div style={{ marginTop: 88 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>// just a few of the major markets we run</span>
            <span style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }}/>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {markets.map((m, i) => (
              <span key={i} style={{
                padding: "7px 12px", borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)",
                fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.7)", display: "inline-flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ color: s.accent, fontSize: 8 }}>●</span>{m}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ServiceIntro = ({ s }) => {
  const accent = s.paperAccent || accent;
  return (
  <section className="paper" style={{ padding: "120px 0", borderBottom: "1px solid var(--paper-200)" }}>
    <Container>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.3, letterSpacing: "-0.015em",
          color: "var(--fg-1-inv)", margin: 0, textWrap: "pretty",
        }}>{s.intro}</p>
      </div>
    </Container>
  </section>
);
};

const SubServicesGrid = ({ s }) => {
  const cols = s.sub.length >= 8 ? 4 : (s.sub.length >= 6 ? 3 : 3);
  return (
    <section style={{ padding: "120px 0", background: "var(--ink-000)", color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div>
            <OpsLine glow>{">> "}{s.short.toUpperCase()} // {String(s.sub.length).padStart(2, "0")} CAPABILITIES</OpsLine>
            <h2 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(32px, 3.8vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1, maxWidth: 1100,
            }}>
              What we run inside <span style={{ fontStyle: "italic", color: s.accent }}>{svcLower(s.short)}</span>.
            </h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 1, background: "var(--ink-400)", border: "1px solid var(--ink-400)", borderRadius: 14, overflow: "hidden" }}>
          {s.sub.map((it, i) => (
            <div key={it.t} style={{
              background: "var(--ink-100)", padding: 28, minHeight: 220,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              transition: "background 200ms",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-200)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink-100)"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: s.accent }}>
                  * {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: s.accent, fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.015em", marginBottom: 10, lineHeight: 1.15 }}>
                  {it.t}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-2)", margin: 0 }}>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ServiceProcess = ({ s }) => {
  const accent = s.paperAccent || accent;
  const defaultSteps = [
    ["BRIEF",      "Quick 30-min call. We scope, ballpark, and align on the goal."],
    ["DESIGN",     "Concept, footprint, route, or kit — engineered for the goal, not for the deck."],
    ["BUILD/STAFF","In-house fabrication, vetted ambassadors, full kit and logistics."],
    ["EXECUTE",    "Spark live-tracks every shift, every check-in, every count, every mile."],
    ["RECAP",      "Same-week recap with photos, metrics, and what we'd change next round."],
  ];
  const steps = (s.process && s.process.length) ? s.process : defaultSteps;
  return (
    <section className="paper" style={{ padding: "120px 0", borderTop: "1px solid var(--paper-200)" }}>
      <Container>
        <OpsLine>{">> "}HOW THIS RUNS</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 0.98,
          color: "var(--fg-1-inv)", maxWidth: 900,
        }}>
          From brief to <span style={{ fontStyle: "italic", color: accent }}>recap.</span>
        </h2>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 1, background: "var(--paper-200)", border: "1px solid var(--paper-200)", borderRadius: 14, overflow: "hidden" }}>
          {steps.map(([t, d], i) => (
            <div key={t} style={{ background: "var(--paper-000)", padding: 24, minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-stencil)", fontSize: 22, color: accent }}>0{i + 1}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3-inv)" }}>{i + 1}/{steps.length}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.015em", color: "var(--fg-1-inv)", marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-2-inv)", margin: 0 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const FeaturedCase = ({ s }) => {
  if (!s.featured) return null;
  return (
  <section style={{ padding: "120px 0", background: "var(--ink-000)", color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
    <Container>
      <OpsLine glow>{">> "}IN THE FIELD</OpsLine>
      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, borderRadius: 20, overflow: "hidden", border: "1px solid var(--ink-400)" }}>
        <div style={{
          minHeight: 460, position: "relative", overflow: "hidden",
          background: `url(${s.featured.img}) center/cover`,
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7))" }}/>
          <div style={{ position: "absolute", top: 28, left: 28 }}>
            <span style={{
              padding: "6px 12px", borderRadius: 6, background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)", fontFamily: "var(--font-stencil)", fontSize: 16,
              letterSpacing: "0.04em", color: "#FFB627", border: "1px solid rgba(255,255,255,0.2)",
            }}>★ {s.featured.brand}</span>
          </div>
        </div>
        <div style={{ background: "var(--ink-100)", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <OpsLine>* CASE STUDY</OpsLine>
          <p style={{
            marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.025em",
          }}>{s.featured.line}</p>
          <a href="work.html" style={{
            marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase", color: s.accent,
          }}>SEE THE FULL CASE STUDY →</a>
        </div>
      </div>
    </Container>
  </section>
  );
};
const ServiceMarketsBlock = ({ s }) => {
  const TOP = (window.TOP_MARKETS || []).map(slug => (window.MARKETS_BY_SLUG || {})[slug]).filter(Boolean);
  const rel = "../"; // service pages live in /pages
  return (
    <section style={{
      padding: "80px 0", background: "#0A0A0A", color: "#fff",
      borderTop: "1px solid var(--ink-400)", position: "relative",
    }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "center" }} className="svc-markets-grid">
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>
              // available in major markets
            </span>
            <h3 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(26px, 2.8vw, 38px)", letterSpacing: "-0.02em", lineHeight: 1.1,
              maxWidth: 520,
            }}>
              Ignite supports {svcLower(s.label)} in major markets nationwide.
            </h3>
            <p style={{ marginTop: 16, fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", maxWidth: 520 }}>
              Including New York, Los Angeles, Chicago, Dallas-Fort Worth, Atlanta,
              Miami, Las Vegas, Phoenix, Denver, and Seattle — plus 190+ surge metros.
            </p>
            <a href={rel + "pages/markets.html"} style={{
              marginTop: 22, display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: s.accent, textDecoration: "none",
            }}>
              See all markets <span>↗</span>
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {TOP.map(c => {
              const href = c.available ? (rel + "pages/city.html?c=" + c.slug) : (rel + "pages/markets.html");
              return (
                <a key={c.slug} href={href} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "9px 13px", borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.03)",
                  fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.85)", textDecoration: "none",
                  transition: "background 160ms, border-color 160ms, color 160ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = s.accent; e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.color = "#0A0A0A"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                >
                  {c.name}
                  <span style={{ opacity: 0.55, fontSize: 10 }}>/ {c.state}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

const AdjacentServices = ({ s }) => {
  const accent = s.paperAccent || accent;
  return (
  <section className="paper" style={{ padding: "120px 0", borderTop: "1px solid var(--paper-200)" }}>
    <Container>
      <OpsLine>{">> "}OFTEN PAIRED WITH</OpsLine>
      <h2 style={{
        marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1,
        color: "var(--fg-1-inv)", maxWidth: 900,
      }}>
        These run great together.
      </h2>
      <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {s.adjacent.map(slug => {
          const o = SERVICES_DATA[slug];
          if (!o) return null;
          return (
            <a key={slug} href={"services-" + slug + ".html"} style={{
              display: "block", borderRadius: 16, overflow: "hidden", position: "relative",
              minHeight: 280, background: "#111", transition: "transform 240ms",
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <img src={o.hero} alt={o.label} style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", filter: "brightness(0.5)",
              }} loading="lazy" decoding="async"/>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85))" }}/>
              <div style={{ position: "relative", padding: 24, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#fff" }}>
                <div style={{ fontFamily: "var(--font-stencil)", fontSize: 14, color: "#fff", letterSpacing: "0.04em", marginBottom: 10 }}>{o.n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em", marginBottom: 8 }}>{o.label}</h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: o.accent }}>EXPLORE →</div>
              </div>
            </a>
          );
        })}
      </div>
    </Container>
  </section>
);
};

/* ---------- Spark — service-specific callout (renders if s.sparkAngle) ---------- */
const ServiceSparkSection = ({ s }) => {
  const sp = s.sparkAngle;
  if (!sp) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes svc-spark-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.7); } }
        @keyframes svc-spark-scan { 0% { transform: translateY(-100%); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes svc-spark-glow { 0%,100% { box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(214, 243, 95, 0.05); } 50% { box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(214, 243, 95, 0.15), 0 0 60px rgba(214, 243, 95, 0.09); } }
        @keyframes svc-spark-bar-rise { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .svc-spark-anim .svc-spark-bar { transform-origin: bottom; animation: svc-spark-bar-rise 800ms cubic-bezier(0.2,0.7,0.2,1) both; }
        @media (prefers-reduced-motion: reduce) { .svc-spark-anim, .svc-spark-anim * { animation: none !important; } }
      `}</style>
      <div aria-hidden="true" className="svc-spark-anim" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <div aria-hidden="true" className="svc-spark-anim" style={{
        position: "absolute", left: 0, right: 0, top: 0, height: 2,
        background: "linear-gradient(90deg, transparent, rgba(214,243,95,0.6), transparent)",
        animation: "svc-spark-scan 8s linear infinite",
      }}/>

      <Container style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, flexWrap: "wrap" }}>
              <img
                src={(typeof window !== "undefined" && window.__resources?.r_assets_spark_logo_full_png) || "../assets/spark-logo-full.png"}
                alt="Spark by Ignite"
                style={{ height: 34, width: "auto" }}
                loading="lazy" decoding="async"
              />
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 12px", borderRadius: 999,
                background: "rgba(214,243,95,0.1)", border: "1px solid rgba(214,243,95,0.3)",
              }}>
                <span className="svc-spark-anim" style={{
                  width: 8, height: 8, borderRadius: 999, background: "#D6F35F",
                   animation: "svc-spark-pulse 1.6s infinite",
                }}/>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                  color: "#D6F35F", textTransform: "uppercase", fontWeight: 700,
                }}>● LIVE · {s.short.toUpperCase()}</span>
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.94,
              maxWidth: 720, textWrap: "balance",
            }}>
              <span style={{ color: "#D6F35F", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.5em", verticalAlign: "0.28em", marginRight: 12 }}>&lt;</span>
              {sp.headline}<span style={{ color: "#D6F35F" }}>.</span>
              <span style={{ color: "#D6F35F", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.5em", verticalAlign: "0.28em", marginLeft: 12 }}>&gt;</span>
            </h2>
            <p style={{ marginTop: 22, fontSize: 19, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 600 }}>{sp.lede}</p>
            <ul style={{ marginTop: 26, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {(sp.points || []).map((pt, i) => (
                <li key={i} style={{ display: "flex", alignItems: "baseline", gap: 14, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--fg-1)" }}>
                  <span style={{ color: "#D6F35F", flexShrink: 0, fontSize: 14 }}>{">>"}</span>
                  <span style={{ lineHeight: 1.55, letterSpacing: "0.02em" }}>{pt}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="spark.html" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16,
                padding: "16px 26px", borderRadius: 999,
                background: "#D6F35F", color: "#0A0B0D",
                boxShadow: "0 0 0 1px rgba(214, 243, 95, 0.2), 0 8px 32px rgba(214,243,95,0.28)",
                textDecoration: "none",
              }}>Tour Spark <span>→</span></a>
              <a href="https://www.igniteproductions.co/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16,
                padding: "16px 24px", borderRadius: 999,
                background: "transparent", color: "var(--fg-1)",
                border: "1px solid var(--ink-400)", textDecoration: "none",
              }}>Get a staffing quote</a>
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="svc-spark-anim" style={{
            background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
            border: "1px solid var(--ink-400)", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
            
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 18px", borderBottom: "1px solid var(--ink-400)",
              background: "rgba(255,255,255,0.02)",
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57", "#FFBD2E", "#28C840"].map(c => (
                  <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }}/>
                ))}
              </div>
              <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>
                spark.ignite / {s.short.toLowerCase().replace(/\s+/g, "-")}
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                color: "#D6F35F", textTransform: "uppercase",
              }}>
                <span className="svc-spark-anim" style={{
                  width: 7, height: 7, borderRadius: 999, background: "#D6F35F",
                   animation: "svc-spark-pulse 1.6s infinite",
                }}/>
                LIVE
              </span>
            </div>
            <div style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: "#D6F35F", textTransform: "uppercase" }}>{">> "}{s.short.toUpperCase()} · LIVE OPS</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>LAST 30 MIN</span>
              </div>
              {(sp.points || []).slice(0, 4).map((pt, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center",
                  padding: "12px 14px",
                  background: i === 0 ? "rgba(214,243,95,0.08)" : "transparent",
                  border: "1px solid " + (i === 0 ? "rgba(214,243,95,0.25)" : "transparent"),
                  borderRadius: 8, marginBottom: 4,
                }}>
                  <span className="svc-spark-anim" style={{
                    width: 7, height: 7, borderRadius: 999,
                    background: i === 0 ? "#D6F35F" : "var(--fg-3)",
                    
                    animation: i === 0 ? "svc-spark-pulse 1.6s infinite" : "none",
                  }}/>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
                    color: "var(--fg-1)", letterSpacing: "-0.005em", lineHeight: 1.4,
                  }}>{pt}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                    color: i === 0 ? "#D6F35F" : "var(--fg-3)", textTransform: "uppercase",
                  }}>{i === 0 ? "tracking" : "ready"}</span>
                </div>
              ))}
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--ink-400)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{">> "}TODAY · BY HOUR</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "#D6F35F", textTransform: "uppercase" }}>↑ +14%</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 56 }}>
                  {[38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100].map((h, i) => (
                    <div key={i} className="svc-spark-bar" style={{
                      flex: 1, height: h + "%",
                      background: "linear-gradient(to top, #B8D343, #D6F35F)",
                      borderRadius: "3px 3px 0 0",
                      animationDelay: (i * 40) + "ms",
                    }}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ServiceCTA = ({ s }) => (
  <section style={{
    padding: "140px 0 160px", background: "var(--ink-000)", color: "var(--fg-1)",
    position: "relative", overflow: "hidden", borderTop: "1px solid var(--ink-400)",
  }}>
    {/* Drifting accent halo */}
    <div aria-hidden="true" style={{
      position: "absolute", right: "-10%", top: "-10%", width: "60%", height: "70%",
      background: "transparent",
      filter: "blur(20px)", pointerEvents: "none",
    }}/>
    {/* Stencil ghost removed */}

    <Container style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <OpsLine glow>{">> "}READY WHEN YOU ARE</OpsLine>
          <h2 style={{
            marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(48px, 6.4vw, 104px)",
            letterSpacing: "-0.04em", lineHeight: 0.94, maxWidth: 1100, textWrap: "balance",
          }}>
            Brief us on a <span style={{
              fontStyle: "italic", color: s.accent,
              
            }}>{svcLower(s.short)}</span> program.
          </h2>
          <p style={{
            marginTop: 22, fontSize: 18, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 620,
          }}>
            Send the brief. We'll come back with crew, compliance, and a line-item quote inside 48 hours.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <a href="https://www.igniteproductions.co/contact" style={{
              padding: "18px 28px", borderRadius: 999,
              background: s.accent, color: s.accent === "#D6F35F" ? "#0A0B0D" : "#fff",
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em",
              display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none",
              boxShadow: `0 0 0 1px ${s.accent}66, 0 8px 32px ${s.accent}3a`,
            }}>Request a quote <span style={{ fontFamily: "var(--font-mono)" }}>→</span></a>
            <a href="https://www.igniteproductions.co/contact" style={{
              padding: "18px 24px", borderRadius: 999, background: "transparent",
              color: "#fff", border: "1.5px solid rgba(255,255,255,0.28)",
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em",
              display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none",
            }}><span style={{ color: "var(--spark-500)" }}>●</span> Request a quote</a>
          </div>
          <div style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--ink-400)", display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[
              ["48HR", "rush turnaround"],
              ["50", "states staffed"],
              ["257K+", "ambassador bench"],
              ["VETERAN", "owned"],
            ].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: s.accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{v}</div>
                <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: brief card mock */}
        <div style={{
          position: "relative",
          padding: 32,
          background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
          border: "1px solid var(--ink-400)",
          borderRadius: 18, overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${s.accent}, ${s.accent}88 50%, transparent 100%)`,
          }}/>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", fontWeight: 700 }}>// QUICK BRIEF</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>WHAT WE NEED</span>
          </div>
          {[
            ["01", "Goal of the program"],
            ["02", "Markets in scope"],
            ["03", "Window + lead time"],
            ["04", "Budget range"],
            ["05", "Distributor / retailer notes (if any)"],
          ].map(([n, t]) => (
            <div key={n} style={{
              display: "grid", gridTemplateColumns: "32px 1fr",
              gap: 14, padding: "12px 0",
              borderTop: n === "01" ? "none" : "1px solid rgba(255,255,255,0.06)",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: s.accent }}>{n}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 500, color: "var(--fg-1)", lineHeight: 1.4, letterSpacing: "-0.005em" }}>{t}</span>
            </div>
          ))}
          <div style={{
            marginTop: 18, padding: "14px 16px", borderRadius: 10,
            background: `${s.accent}1a`, border: `1px solid ${s.accent}55`,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>QUOTE BACK IN</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: s.accent, letterSpacing: "-0.02em" }}>48 HOURS</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
);


/* ---------- SEO Block (long-form keyword-rich section for SEO) ---------- */
const ServiceSEOBlock = ({ s }) => {
  if (!s.seoBlock) return null;
  const { eyebrow, head, paras, chips } = s.seoBlock;
  return (
    <section style={{ background: "var(--ink-100)", padding: "100px 0", borderTop: "1px solid var(--ink-400)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: 60, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>// {eyebrow || "deep dive"}</span>
              <span style={{ height: 1, flex: 1, background: s.accent, opacity: 0.3, maxWidth: 80 }}/>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(36px, 4.4vw, 64px)", letterSpacing: "-0.025em", lineHeight: 0.98,
              color: "var(--fg-1)",
            }}>{head}</h2>
            {chips && chips.length > 0 && (
              <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {chips.map((c, i) => (
                  <span key={i} style={{
                    fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.16em",
                    textTransform: "uppercase", color: "var(--fg-2)",
                    padding: "8px 12px", border: "1px solid var(--ink-400)", borderRadius: 999,
                    background: "var(--ink-000)",
                  }}>{c}</span>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: "grid", gap: 18 }}>
            {paras.map((p, i) => (
              <p key={i} style={{
                fontSize: 17, lineHeight: 1.65, color: "var(--fg-2)",
                fontFamily: "var(--font-body)",
              }} dangerouslySetInnerHTML={{ __html: p }}/>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- FAQ ---------- */
const ServiceFAQ = ({ s }) => {
  if (!s.faqs || !s.faqs.length) return null;
  return (
    <section style={{ background: "var(--ink-000)", padding: "100px 0", borderTop: "1px solid var(--ink-400)" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>// faq</span>
          <span style={{ height: 1, flex: 1, background: s.accent, opacity: 0.3, maxWidth: 120 }}/>
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1, margin: "0 0 56px",
          maxWidth: 900, textWrap: "balance",
        }}>Frequently asked.</h2>
        <div style={{ display: "grid", gap: 16, maxWidth: 1000 }}>
          {s.faqs.map(([q, a], i) => (
            <details key={i} style={{
              padding: "22px 26px", borderRadius: 14, background: "var(--ink-100)",
              border: "1px solid var(--ink-400)",
            }}>
              <summary style={{
                cursor: "pointer", listStyle: "none",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18,
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--fg-1)",
                letterSpacing: "-0.01em",
              }}>
                <span>{q}</span>
                <span style={{ color: s.accent, fontFamily: "var(--font-mono)", fontSize: 14 }}>+</span>
              </summary>
              <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.65, color: "var(--fg-2)" }}>{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- ComplianceBelt — small visual strip of certs / paperwork ---------- */
const ServiceComplianceBelt = ({ s }) => {
  if (!s.compliance || !s.compliance.length) return null;
  return (
    <section style={{
      padding: "70px 0 80px", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <Container>
        <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 28, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
          }}>{">> "}COMPLIANCE · CERTIFICATIONS · SOPS</span>
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }}/>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
            color: "var(--fg-3)", textTransform: "uppercase",
          }}>✓ {s.compliance.length}-POINT STANDARD</span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${s.compliance.length > 4 ? 220 : 240}px, 1fr))`,
          gap: 14,
        }}>
          {s.compliance.map((c, i) => (
            <div key={(c.lab || "") + "-" + i} style={{
              padding: "20px 22px",
              background: "var(--ink-000)",
              border: "1px solid var(--ink-400)",
              borderRadius: 12,
              position: "relative", overflow: "hidden",
              transition: "border-color 200ms, transform 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--ink-400)"; e.currentTarget.style.transform = "none"; }}
            >
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent} 0%, transparent 60%)`,
              }}/>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 6,
                  background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: s.accent, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700,
                }}>✓</div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase",
                }}>{c.lab}</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-2)", margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Receipts — anchor card linking to /work ---------- */
const ServiceReceipts = ({ s }) => {
  const accent = s.paperAccent || accent;
  return (
    <section className="paper" style={{ padding: "100px 0", borderTop: "1px solid var(--paper-200)" }}>
      <Container>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "center",
          padding: 36, background: "var(--paper-000)",
          border: "1px solid var(--paper-200)", borderRadius: 18,
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, left: 0, width: 64, height: 3,
            background: accent, borderRadius: "0 0 4px 4px",
          }}/>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.22em", color: accent, textTransform: "uppercase",
            }}>{">> "}RECEIPTS</span>
            <h3 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em", lineHeight: 0.96,
              color: "var(--fg-1-inv)", textWrap: "balance",
            }}>
              See the work behind <span style={{ fontStyle: "italic", color: accent }}>the brief.</span>
            </h3>
            <p style={{
              marginTop: 16, fontSize: 16, lineHeight: 1.55, color: "var(--fg-2-inv)",
              maxWidth: 440,
            }}>
              We show the work. Photos, numbers, GPS data, recaps. Real client programs across beverage, spirits, sports, telco, CPG, and retail.
            </p>
            <div style={{ marginTop: 26, display: "flex", justifyContent: "flex-start", gap: 12, flexWrap: "wrap" }}>
              <a href="work.html" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 22px", borderRadius: 999,
                background: accent, color: accent === "#D6F35F" ? "#0A0B0D" : "#fff",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
                letterSpacing: "-0.005em", textDecoration: "none",
                boxShadow: `0 0 0 1px ${accent}66, 0 6px 24px ${accent}3a`,
              }}>See our work <span style={{ fontFamily: "var(--font-mono)" }}>→</span></a>
              <a href="https://www.igniteproductions.co/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 20px", borderRadius: 999,
                background: "transparent", color: "var(--fg-1-inv)",
                border: "1px solid var(--paper-200)",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
                letterSpacing: "-0.005em", textDecoration: "none",
              }}>Start a brief</a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { v: "5K+", l: "ACTIVATIONS / YR" },
              { v: "257K+", l: "AMBASSADOR BENCH" },
              { v: "50", l: "STATES" },
              { v: "9", l: "FEATURED CASES" },
            ].map((stat) => (
              <div key={stat.l} style={{
                padding: "20px 22px", background: "#0A0A0A", color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
                position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden="true" style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${accent} 0%, transparent 70%)`,
                }}/>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, color: accent, letterSpacing: "-0.025em", lineHeight: 1 }}>{stat.v}</div>
                <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.55)" }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Paired chips — SEO chip strip at the very bottom ---------- */
const ServicePairedChips = ({ s }) => {
  if (!s.pairedChips || !s.pairedChips.length) return null;
  return (
    <section style={{
      padding: "40px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
    }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
            color: "var(--fg-3)", textTransform: "uppercase", fontWeight: 600,
          }}>// FREQUENTLY PAIRED WITH</span>
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }}/>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {s.pairedChips.map((c) => (
            <a key={c.label} href={c.href} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "9px 14px", borderRadius: 999,
              background: "var(--ink-200)", border: "1px solid var(--ink-400)",
              color: "var(--fg-1)", textDecoration: "none",
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em",
              transition: "border-color 160ms, background 160ms, color 160ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.background = s.accent; e.currentTarget.style.color = s.accent === "#D6F35F" ? "#0A0B0D" : "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--ink-400)"; e.currentTarget.style.background = "var(--ink-200)"; e.currentTarget.style.color = "var(--fg-1)"; }}
            >{c.label} <span style={{ fontSize: 10, opacity: 0.7 }}>↗</span></a>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- "What it replaces" kill list — slashes through old methods ---------- */
const ServiceKillList = ({ s }) => {
  if (!s.killList || !s.killList.length) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: s.accent }}>{">> "}WHAT SPARK REPLACES</span>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>
          Field marketing without Spark is <span style={{ fontStyle: "italic", color: s.accent }}>five different tools</span> pretending to be one workflow.
        </h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 720 }}>
          Every Ignite program ships with Spark. Here's what your team can stop building, stop chasing, and stop reconciling.
        </p>
        <div style={{
          marginTop: 44, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14,
        }}>
          {s.killList.map((item, i) => (
            <div key={i} style={{
              padding: "22px 26px", background: "var(--ink-000)",
              border: "1px solid var(--ink-400)", borderRadius: 12,
              position: "relative", overflow: "hidden",
            }}>
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${s.accent} 0%, transparent 70%)`,
              }}/>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 12,
              }}>// REPLACES {String(i+1).padStart(2,"0")}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18,
                letterSpacing: "-0.015em", lineHeight: 1.25, color: "var(--fg-2)",
                textDecoration: "line-through", textDecorationColor: s.accent,
                textDecorationThickness: 2, textUnderlineOffset: 4,
              }}>{item}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Before/After recap comparison ---------- */
const ServiceBeforeAfter = ({ s }) => {
  if (!s.beforeAfter) return null;
  const { before, after } = s.beforeAfter;
  return (
    <section style={{
      padding: "140px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <Container style={{ position: "relative" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: s.accent }}>{">> "}OLD WAY VS SPARK</span>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(32px, 4.4vw, 64px)", letterSpacing: "-0.035em", lineHeight: 0.98,
          textWrap: "balance", maxWidth: 1400, whiteSpace: "nowrap",
        }}>
          From 9-day deck to <span style={{ fontStyle: "italic", color: s.accent }}>3-hour dashboard.</span>
        </h2>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{
            padding: 32, background: "linear-gradient(180deg, rgba(216,118,84,0.08), rgba(10,11,13,0.85))",
            border: "1px solid rgba(216,118,84,0.4)", borderRadius: 16,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{
                width: 22, height: 22, borderRadius: 999,
                background: "rgba(216,118,84,0.2)", border: "1px solid rgba(216,118,84,0.5)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "#D87654", fontSize: 13, fontWeight: 700,
              }}>✕</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", color: "#D87654", textTransform: "uppercase" }}>THE OLD WAY</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.025em", color: "var(--fg-1)", lineHeight: 1.1, marginBottom: 24 }}>{before.headline}</h3>
            <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {before.items.map((item, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "baseline", gap: 12,
                  fontSize: 14.5, color: "rgba(245,242,236,0.65)",
                  textDecoration: "line-through", textDecorationColor: "rgba(216,118,84,0.5)",
                }}>
                  <span style={{ color: "#D87654", flexShrink: 0, fontSize: 11 }}>—</span>
                  <span style={{ lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{
              marginTop: 24, padding: "12px 14px",
              background: "rgba(216,118,84,0.08)",
              border: "1px solid rgba(216,118,84,0.3)", borderRadius: 8,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "#D87654", textTransform: "uppercase" }}>SHIPS</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "#D87654", letterSpacing: "-0.02em" }}>{before.stat}</span>
            </div>
          </div>

          <div style={{
            padding: 32, background: `linear-gradient(180deg, ${s.accent}14, rgba(10,11,13,0.85))`,
            border: `1px solid ${s.accent}66`, borderRadius: 16,
            position: "relative", overflow: "hidden",
            
          }}>
            <div aria-hidden style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${s.accent}, ${s.accent}88 50%, transparent 100%)`,
            }}/>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{
                width: 22, height: 22, borderRadius: 999,
                background: `${s.accent}1c`, border: `1px solid ${s.accent}66`,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: s.accent, fontSize: 13, fontWeight: 700,
              }}>✓</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>WITH SPARK</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.025em", color: "var(--fg-1)", lineHeight: 1.1, marginBottom: 24 }}>{after.headline}</h3>
            <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {after.items.map((item, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "baseline", gap: 12,
                  fontSize: 14.5, color: "var(--fg-1)", fontWeight: 500,
                }}>
                  <span style={{ color: s.accent, flexShrink: 0, fontSize: 11 }}>→</span>
                  <span style={{ lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{
              marginTop: 24, padding: "12px 14px",
              background: `${s.accent}14`,
              border: `1px solid ${s.accent}55`, borderRadius: 8,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase" }}>SHIPS</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: s.accent, letterSpacing: "-0.02em" }}>{after.stat}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- State Compliance Band — visual US-map of regulated sweepstakes states ---------- */
const ServiceComplianceMap = ({ s }) => {
  if (!s.complianceMap) return null;
  const { title, sub, requiredStates, restrictedStates, note } = s.complianceMap;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}STATE-BY-STATE COMPLIANCE</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{title.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20,
        }}>
          <div style={{
            padding: "26px 24px",
            background: "var(--ink-100)", border: `1px solid ${s.accent}55`,
            borderRadius: 14, position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
            }}/>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 14,
            }}>// REGISTRATION + BONDING</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 56,
              color: s.accent, letterSpacing: "-0.035em", lineHeight: 1,
              
            }}>{requiredStates.length}</div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>STATES REQUIRE BONDING</div>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {requiredStates.map((st) => (
                <span key={st} style={{
                  padding: "5px 10px", borderRadius: 4,
                  background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.14em", color: s.accent,
                }}>{st}</span>
              ))}
            </div>
          </div>

          <div style={{
            padding: "26px 24px",
            background: "var(--ink-100)", border: "1px solid var(--ink-400)",
            borderRadius: 14, position: "relative",
          }}>
            <div aria-hidden style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "linear-gradient(90deg, var(--fg-2), transparent 70%)",
            }}/>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", color: "var(--fg-2)", textTransform: "uppercase", marginBottom: 14,
            }}>// RESTRICTED / EXCLUDED</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 56,
              color: "var(--fg-1)", letterSpacing: "-0.035em", lineHeight: 1,
            }}>{restrictedStates.length}</div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>HAVE EXTRA RESTRICTIONS</div>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {restrictedStates.map((st) => (
                <span key={st} style={{
                  padding: "5px 10px", borderRadius: 4,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)",
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.14em", color: "var(--fg-2)",
                }}>{st}</span>
              ))}
            </div>
          </div>

          <div style={{
            padding: "26px 24px",
            background: `linear-gradient(180deg, ${s.accent}18, var(--ink-100))`,
            border: `1px solid ${s.accent}66`,
            borderRadius: 14, position: "relative", overflow: "hidden",
            
          }}>
            <div aria-hidden style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: s.accent,
            }}/>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 14,
            }}>// IGNITE HANDLES</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 56,
              color: s.accent, letterSpacing: "-0.035em", lineHeight: 1,
              
            }}>ALL OF IT</div>
            <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>FILED BEFORE LAUNCH</div>
            <div style={{ marginTop: 16, fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)" }}>
              Bonding filed. Rules drafted. State portals registered. Restricted jurisdictions flagged at brief, not after.
            </div>
          </div>
        </div>

        {note && (
          <p style={{
            marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12,
            letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase",
          }}>※ {note}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Lead Capture Flow Diagram ---------- */
const ServiceLeadFlow = ({ s }) => {
  if (!s.leadFlow) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <Container>
        <OpsLine>{">> "}HOW ENTRIES FLOW</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>
          Entry to <span style={{ fontStyle: "italic", color: s.accent }}>your CRM.</span> In 24 hours.
        </h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>
          No paper sign-in sheets, no hand-transcription, no two-week wait for the list.
        </p>

        <div style={{
          marginTop: 56, position: "relative",
        }}>
          {/* Dotted spine connector */}
          <div aria-hidden style={{
            position: "absolute", left: `${100/(s.leadFlow.length*2)}%`, right: `${100/(s.leadFlow.length*2)}%`,
            top: 40, height: 2, zIndex: 0,
            backgroundImage: `linear-gradient(90deg, ${s.accent}88 0%, ${s.accent}88 50%, transparent 50%, transparent 100%)`,
            backgroundSize: "14px 2px",
          }}/>
          <div style={{
            display: "grid", gridTemplateColumns: `repeat(${s.leadFlow.length}, 1fr)`,
            gap: 16, position: "relative",
          }}>
            {s.leadFlow.map((step, i) => (
              <div key={step.label} style={{ position: "relative" }}>
                {/* Number badge */}
                <div style={{
                  position: "relative", zIndex: 2,
                  width: 80, height: 80, borderRadius: 999,
                  background: `linear-gradient(180deg, ${s.accent}, ${s.accent}cc)`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 18px", color: "#0A0B0D",
                  boxShadow: `0 0 0 6px var(--ink-100), 0 0 0 7px ${s.accent}55`,
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.16em" }}>STEP</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1 }}>{String(i+1).padStart(2, "0")}</div>
                </div>

                <div style={{
                  padding: "24px 22px",
                  background: "var(--ink-000)",
                  border: "1px solid var(--ink-400)",
                  borderRadius: 14, position: "relative", overflow: "hidden",
                  minHeight: 200,
                }}>
                  <div aria-hidden style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
                  }}/>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                    color: s.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 10,
                  }}>{step.label}</div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19,
                    letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--fg-1)", marginBottom: 8,
                  }}>{step.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--fg-2)", margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CRM destinations */}
        <div style={{
          marginTop: 56, padding: "28px 32px",
          background: "var(--ink-000)", border: `1px solid ${s.accent}33`, borderRadius: 14,
          display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "center",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>// FLOWS INTO</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, letterSpacing: "-0.025em", color: "var(--fg-1)", lineHeight: 1 }}>Your CRM</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Salesforce", "HubSpot", "Klaviyo", "Mailchimp", "Outreach", "Custom DW"].map(crm => (
              <span key={crm} style={{
                padding: "10px 16px", borderRadius: 999,
                background: "var(--ink-100)", border: "1px solid var(--ink-400)",
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
                color: "var(--fg-1)", letterSpacing: "-0.005em",
              }}>{crm}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Prize Category Showcase ---------- */
const ServicePrizeShowcase = ({ s }) => {
  if (!s.prizeCategories) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}PRIZE PLAYBOOK</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>
          The prizes we<br/>
          <span style={{ fontStyle: "italic", color: s.accent }}>source, ship, and audit.</span>
        </h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>
          End-to-end fulfillment: sourcing, packaging, winner verification, tracking, refusal-to-claim protocol. You write the brief; we handle the logistics.
        </p>
        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14,
        }}>
          {s.prizeCategories.map((p, i) => (
            <div key={p.label} style={{
              padding: "26px 24px",
              background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              position: "relative", overflow: "hidden",
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 60%)`,
              }}/>
              <div style={{
                fontSize: 32, marginBottom: 14, opacity: 0.9,
              }}>{p.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
                letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--fg-1)", marginBottom: 8,
              }}>{p.label}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--fg-2)", margin: 0 }}>{p.desc}</p>
              <div style={{
                marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 10,
                letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase",
              }}>{p.example}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Use Case Cards ---------- */
const ServiceUseCases = ({ s }) => {
  if (!s.useCases) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}USE CASES</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1200,
        }}>
          Where these <span style={{ fontStyle: "italic", color: s.accent }}>actually live</span>.
        </h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>
          Common contexts buyers map to their next quarter's plan.
        </p>
        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16,
        }}>
          {s.useCases.map((u, i) => (
            <div key={u.title} style={{
              padding: "32px 28px 28px",
              background: "var(--ink-000)",
              border: "1px solid var(--ink-400)", borderRadius: 16,
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", gap: 14, minHeight: 280,
              transition: "transform 200ms, border-color 200ms, box-shadow 200ms",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = s.accent;
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "var(--ink-400)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                background: `linear-gradient(90deg, ${s.accent}, ${s.accent}88 50%, transparent 100%)`,
              }}/>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                }}>{u.context}</span>
                <span style={{
                  padding: "4px 10px", borderRadius: 999,
                  background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                  color: s.accent, textTransform: "uppercase",
                }}>{u.tag}</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24,
                letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--fg-1)",
              }}>{u.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--fg-2)", margin: 0, flex: 1 }}>{u.desc}</p>
              <div style={{
                marginTop: "auto", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                  color: "var(--fg-3)", textTransform: "uppercase",
                }}>EXPECTED LIFT</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18,
                  color: s.accent, letterSpacing: "-0.015em",
                }}>{u.lift}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Live Entry Capture Mock ---------- */
const ServiceLiveCapture = ({ s }) => {
  if (!s.liveCapture) return null;
  const lc = s.liveCapture;
  const headline = lc.headline;
  const lede = lc.lede;
  const entries = lc.entries || [];
  const counterLabel = lc.counterLabel || "ENTRIES TODAY";
  const counterStart = lc.counterStart || 2847;
  const rowsLabel = lc.rowsLabel || "LAST 4 ENTRIES";
  const kpiRow = lc.kpiRow || [["94%","Clean"],["4%","Dupes"],["2%","Invalid"]];
  const bullets = lc.bullets || [
    "Every entry consent-recorded with timestamp",
    "Duplicates flagged + scrubbed end-of-day",
    "Source-tag + UTM preserved per entry",
    "GPS-time-stamped if captured in person",
  ];
  const rowStatuses = lc.rowStatuses || { ok: "✓ CLEAN", bad: "✕ DUPE" };
  const [count, setCount] = React.useState(counterStart);
  React.useEffect(() => {
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 4) + 1), 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes svc-live-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.85); } }
        @keyframes svc-live-row { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
        .svc-live-row { animation: svc-live-row 600ms cubic-bezier(0.2,0.7,0.2,1) both; }
        @media (prefers-reduced-motion: reduce) { .svc-live-row, .svc-live-anim { animation: none !important; } }
      `}</style>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div>
            <OpsLine glow>{">> "}LIVE ENTRY CAPTURE</OpsLine>
            <h2 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
              textWrap: "balance",
            }}>{String(headline).split("|").map((line, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 && arr.length > 1 ? (
                  <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
                ) : line}
                {i < arr.length - 1 && <br/>}
              </React.Fragment>
            ))}</h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 540 }}>{lede}</p>
            <ul style={{ marginTop: 26, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {bullets.map((pt, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "baseline", gap: 12,
                  fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--fg-1)",
                }}>
                  <span style={{ color: s.accent, flexShrink: 0 }}>→</span>
                  <span style={{ lineHeight: 1.55 }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock dashboard */}
          <div style={{
            background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
            border: "1px solid var(--ink-400)", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 18px", borderBottom: "1px solid var(--ink-400)",
              background: "rgba(255,255,255,0.02)",
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57", "#FFBD2E", "#28C840"].map(c => (
                  <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }}/>
                ))}
              </div>
              <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>
                spark.ignite / sweepstakes-live
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                color: s.accent, textTransform: "uppercase",
              }}>
                <span className="svc-live-anim" style={{
                  width: 7, height: 7, borderRadius: 999, background: s.accent,
                   animation: "svc-live-pulse 1.6s infinite",
                }}/>
                LIVE
              </span>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 22 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>{">> "}{counterLabel}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>+18% VS YESTERDAY</span>
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 64,
                color: s.accent, letterSpacing: "-0.035em", lineHeight: 1,
                 marginBottom: 24,
              }}>{count.toLocaleString()}</div>

              <div style={{ display: "grid", gridTemplateColumns: `repeat(${kpiRow.length}, 1fr)`, gap: 10, marginBottom: 20 }}>
                {kpiRow.map(([v, l]) => (
                  <div key={l} style={{
                    padding: "12px 14px", background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--ink-400)", borderRadius: 8,
                  }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--fg-1)", letterSpacing: "-0.02em", lineHeight: 1 }}>{v}</div>
                    <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Rolling activity */}
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--ink-400)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 10 }}>{">> "}{rowsLabel}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {entries.map((e, i) => (
                    <div key={i} className="svc-live-row" style={{
                      display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, alignItems: "center",
                      padding: "9px 12px", borderRadius: 8,
                      background: i === 0 ? `${s.accent}10` : "transparent",
                      border: i === 0 ? `1px solid ${s.accent}33` : "1px solid transparent",
                      animationDelay: (i * 100) + "ms",
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: i === 0 ? s.accent : "var(--fg-3)", letterSpacing: "0.12em" }}>{e.time}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-1)" }}>{e.email}</span>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em",
                        color: e.status === "clean" ? s.accent : "var(--fg-3)", textTransform: "uppercase",
                      }}>{e.status === "clean" ? rowStatuses.ok : rowStatuses.bad}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Channel Breakdown — per-channel demo specs ---------- */
const ServiceChannelBreakdown = ({ s }) => {
  if (!s.channels) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <Container>
        <OpsLine>{">> "}CHANNEL BREAKDOWN</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>
          One playbook.<br/>
          <span style={{ fontStyle: "italic", color: s.accent }}>Different rules per channel.</span>
        </h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>
          What a demo looks like changes with the channel. We handle the per-channel paperwork, format, and conversion KPI.
        </p>
        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: `repeat(${s.channels.length}, 1fr)`,
          gap: 14,
        }}>
          {s.channels.map((c, i) => (
            <div key={c.name} style={{
              padding: "28px 24px",
              background: "linear-gradient(180deg, var(--ink-000), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              position: "relative", overflow: "hidden",
              minHeight: 380, display: "flex", flexDirection: "column",
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                marginBottom: 10,
              }}>{String(i + 1).padStart(2, "0")} · CHANNEL</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26,
                letterSpacing: "-0.025em", lineHeight: 1.1, color: "var(--fg-1)", marginBottom: 6,
              }}>{c.name}</h3>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 18 }}>{c.banners}</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {[
                  ["PERMITS", c.permits],
                  ["FORMAT", c.format],
                  ["KPI", c.kpi],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-1)" }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Scan-back ROI Flow ---------- */
const ServiceScanBackROI = ({ s }) => {
  if (!s.scanBackROI) return null;
  const sb = s.scanBackROI;
  const steps = sb.steps || [];
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}DEMOS → VELOCITY → REORDERS</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>
          The scan-back<br/>
          <span style={{ fontStyle: "italic", color: s.accent }}>ROI loop.</span>
        </h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>
          {sb.intro}
        </p>

        <div style={{
          marginTop: 56, display: "grid",
          gridTemplateColumns: steps.map(() => "1fr").join(" auto "),
          gap: 0, alignItems: "stretch",
        }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div style={{
                padding: "28px 24px",
                background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
                border: "1px solid var(--ink-400)", borderRadius: 14,
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", gap: 12, minHeight: 220,
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${s.accent}, transparent 60%)`,
                }}/>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                }}>{String(i + 1).padStart(2, "0")} · {step.label}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
                  letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--fg-1)",
                }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)", margin: 0 }}>{step.desc}</p>
                {step.metric && (
                  <div style={{
                    marginTop: "auto", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                    color: s.accent, letterSpacing: "-0.02em",
                  }}>{step.metric}</div>
                )}
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontSize: 28, color: s.accent, opacity: 0.7,
                  padding: "0 8px",
                }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {sb.note && (
          <p style={{
            marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12,
            letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase",
          }}>※ {sb.note}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Ambassador Profile Cards — what a managed-bench ambassador looks like ---------- */
const ServiceAmbassadorProfiles = ({ s }) => {
  if (!s.ambassadorProfiles) return null;
  const { headline, sub, profiles } = s.ambassadorProfiles;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}MEET THE BENCH</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>
        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16,
        }}>
          {profiles.map((p, i) => (
            <div key={p.name + i} style={{
              padding: "28px 24px 24px",
              background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", gap: 14,
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              {/* Header row */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 999,
                  background: `linear-gradient(135deg, ${s.accent}, ${s.accent}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                  color: "#0A0B0D", letterSpacing: "-0.02em",
                  boxShadow: `0 0 0 4px var(--ink-100)`,
                  flexShrink: 0,
                }}>{p.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                    letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.1,
                  }}>{p.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase", marginTop: 4 }}>{p.role}</div>
                </div>
              </div>

              {/* Market + tenure */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
                padding: "12px 14px", background: "rgba(255,255,255,0.03)",
                borderRadius: 8, border: "1px solid var(--ink-400)",
              }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>MARKET</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--fg-1)", marginTop: 2 }}>{p.market}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>WITH IGNITE</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--fg-1)", marginTop: 2 }}>{p.tenure}</div>
                </div>
              </div>

              {/* Cert badges */}
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 8 }}>CERTIFICATIONS</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.certs.map((c) => (
                    <span key={c} style={{
                      padding: "4px 9px", borderRadius: 4,
                      background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                      fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.12em", color: s.accent,
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Programs + scores */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {[
                  ["PROGRAMS", p.programs],
                  ["RATING", p.rating],
                  ["RETENTION", p.retention],
                ].map(([label, val]) => (
                  <div key={label} style={{
                    padding: "10px 10px", background: "rgba(255,255,255,0.02)",
                    borderRadius: 6, textAlign: "center",
                    border: "1px solid var(--ink-400)",
                  }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: s.accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{val}</div>
                    <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Bench Depth Map — per-market ambassador depth ---------- */
const ServiceBenchDepth = ({ s }) => {
  if (!s.benchDepth) return null;
  const { headline, sub, markets, note } = s.benchDepth;
  const max = Math.max(...markets.map(m => m.count));
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}BENCH DEPTH</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1200,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>
        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12,
        }}>
          {markets.map((m, i) => {
            const pct = Math.max(20, Math.round((m.count / max) * 100));
            return (
              <div key={m.name} style={{
                padding: "20px 22px",
                background: "var(--ink-000)",
                border: "1px solid var(--ink-400)", borderRadius: 12,
                position: "relative", overflow: "hidden",
              }}>
                {/* Bar fill */}
                <div aria-hidden style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: pct + "%",
                  background: `linear-gradient(90deg, ${s.accent}1c, ${s.accent}05 80%, transparent)`,
                }}/>
                <div style={{ position: "relative" }}>
                  <div style={{
                    display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
                      letterSpacing: "-0.015em", color: "var(--fg-1)",
                    }}>{m.name}</span>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em",
                      color: "var(--fg-3)", textTransform: "uppercase",
                    }}>{m.state}</span>
                  </div>
                  <div style={{
                    marginTop: 8, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28,
                    color: s.accent, letterSpacing: "-0.025em", lineHeight: 1,
                  }}>{m.count.toLocaleString()}{m.suffix || "+"}</div>
                  <div style={{
                    marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                    color: "var(--fg-3)", textTransform: "uppercase",
                  }}>{m.label || "ACTIVE AMBASSADORS"}</div>
                </div>
              </div>
            );
          })}
        </div>
        {note && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {note}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Tier Ladder — Captain / Specialist / Ambassador / New Hire ---------- */
const ServiceTierLadder = ({ s }) => {
  if (!s.tierLadder) return null;
  const { headline, sub, tiers } = s.tierLadder;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}STAFFING TIERS</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>
        <div style={{
          marginTop: 48, display: "flex", flexDirection: "column", gap: 12,
        }}>
          {tiers.map((t, i) => {
            const isTop = i === 0;
            return (
              <div key={t.name} style={{
                padding: "26px 28px",
                background: isTop
                  ? `linear-gradient(90deg, ${s.accent}18, rgba(10,11,13,0.85))`
                  : "linear-gradient(90deg, var(--ink-100), rgba(10,11,13,0.92))",
                border: `1px solid ${isTop ? s.accent + "55" : "var(--ink-400)"}`,
                borderLeft: `4px solid ${s.accent}${isTop ? "" : Math.max(60 - i*15, 25).toString(16).padStart(2,"0")}`,
                borderRadius: 12,
                display: "grid", gridTemplateColumns: "auto 1fr 1fr 1fr", gap: 24, alignItems: "center",
                transition: "transform 200ms",
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
              >
                {/* Tier badge */}
                <div style={{
                  width: 72, height: 72, borderRadius: 12,
                  background: isTop ? s.accent : `${s.accent}1c`,
                  border: `1.5px solid ${s.accent}${isTop ? "" : "55"}`,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  color: isTop ? "#0A0B0D" : s.accent,
                  flexShrink: 0,
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>TIER</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em", lineHeight: 1 }}>0{i + 1}</div>
                </div>

                {/* Name + description */}
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                    letterSpacing: "-0.02em", color: "var(--fg-1)", lineHeight: 1.1,
                  }}>{t.name}</div>
                  <div style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5, color: "var(--fg-2)" }}>{t.desc}</div>
                </div>

                {/* Requirements */}
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 6 }}>REQUIREMENTS</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-2)" }}>{t.requirements}</div>
                </div>

                {/* Role */}
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 6 }}>ROLE</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-2)" }}>{t.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Recruiting Funnel Viz ---------- */
const ServiceRecruitingFunnel = ({ s }) => {
  if (!s.recruitingFunnel) return null;
  const { headline, sub, stages, note } = s.recruitingFunnel;
  const max = stages[0].count;
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setInView(true); });
    }, { threshold: 0.25 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes svc-funnel-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes svc-funnel-num { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .svc-funnel-bar, .svc-funnel-num { animation: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
      <Container>
        <OpsLine>{">> "}RECRUITING FUNNEL</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div ref={ref} style={{
          marginTop: 64, display: "flex", flexDirection: "column",
          gap: 14, maxWidth: 1100, margin: "64px auto 0",
          alignItems: "flex-start",
        }}>
          {stages.map((stage, i) => {
            const pct = Math.max(28, Math.round((stage.count / max) * 100));
            const isLast = i === stages.length - 1;
            const passRate = i === 0 ? null : Math.round((stage.count / stages[0].count) * 100);
            return (
              <div key={stage.label} style={{
                width: pct + "%", minWidth: 320, position: "relative",
                display: "grid", gridTemplateColumns: "1fr", gap: 6,
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  padding: "0 4px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                  }}>{String(i + 1).padStart(2, "0")} · {stage.label}</span>
                  {passRate !== null && (
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                      color: "var(--fg-3)", textTransform: "uppercase",
                    }}>{passRate}% PASS</span>
                  )}
                </div>
                <div style={{
                  position: "relative", height: 84,
                  background: "var(--ink-000)", border: `1px solid ${s.accent}33`,
                  borderRadius: 12, overflow: "hidden",
                  
                }}>
                  <div className="svc-funnel-bar" aria-hidden style={{
                    position: "absolute", inset: 0, transformOrigin: "left center",
                    background: isLast
                      ? `linear-gradient(90deg, ${s.accent}, ${s.accent}cc 60%, ${s.accent}88 100%)`
                      : `linear-gradient(90deg, ${s.accent}cc, ${s.accent}55 70%, ${s.accent}22 100%)`,
                    animation: inView ? `svc-funnel-grow 900ms cubic-bezier(0.2,0.8,0.2,1) ${i * 180}ms both` : "none",
                    transform: "scaleX(0)",
                  }}/>
                  <div className="svc-funnel-num" style={{
                    position: "relative", height: "100%", display: "flex",
                    alignItems: "center", padding: "0 24px", gap: 18,
                    animation: inView ? `svc-funnel-num 600ms cubic-bezier(0.2,0.8,0.2,1) ${i * 180 + 500}ms both` : "none",
                    opacity: 0,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 38,
                      color: isLast ? "#0A0B0D" : "var(--fg-1)", letterSpacing: "-0.03em", lineHeight: 1,
                      
                    }}>{stage.count.toLocaleString()}</div>
                    <div style={{
                      fontSize: 14, color: isLast ? "rgba(10,11,13,0.85)" : "var(--fg-2)",
                      lineHeight: 1.4, fontWeight: isLast ? 600 : 400,
                    }}>{stage.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {note && (
          <p style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase", textAlign: "center" }}>※ {note}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- GSM Event Playbook — day-of timeline ---------- */
const ServiceGSMPlaybook = ({ s }) => {
  if (!s.gsmPlaybook) return null;
  const { headline, sub, schedule, note } = s.gsmPlaybook;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}GSM EVENT PLAYBOOK</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 56, position: "relative",
          paddingLeft: 60,
        }}>
          {/* Spine */}
          <div aria-hidden style={{
            position: "absolute", left: 20, top: 8, bottom: 8, width: 2,
            background: `linear-gradient(180deg, ${s.accent}, ${s.accent}33 90%, transparent)`,
          }}/>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {schedule.map((item, i) => (
              <div key={i} style={{ position: "relative" }}>
                {/* Dot on spine */}
                <div aria-hidden style={{
                  position: "absolute", left: -52, top: 22,
                  width: 16, height: 16, borderRadius: 999,
                  background: s.accent,
                  boxShadow: `0 0 0 4px var(--ink-000), 0 0 0 5px ${s.accent}55`,
                }}/>
                <div style={{
                  padding: "20px 24px",
                  background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
                  border: "1px solid var(--ink-400)", borderRadius: 12,
                  display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div aria-hidden style={{
                    position: "absolute", top: 0, left: 0, bottom: 0, width: 3,
                    background: s.accent,
                  }}/>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700,
                    letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase",
                    minWidth: 90,
                  }}>{item.time}</div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                      letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.25,
                    }}>{item.title}</div>
                    <div style={{ marginTop: 4, fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-2)" }}>{item.desc}</div>
                  </div>
                  {item.owner && (
                    <span style={{
                      padding: "5px 10px", borderRadius: 999,
                      background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                      fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase",
                    }}>{item.owner}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {note && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {note}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Sales Rep Ride-Along — week of multi-city stops ---------- */
const ServiceRideAlong = ({ s }) => {
  if (!s.rideAlong) return null;
  const { headline, sub, week, totals } = s.rideAlong;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}REP RIDE-ALONG WEEK</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: `repeat(${week.length}, 1fr)`, gap: 12,
        }}>
          {week.map((d, i) => (
            <div key={d.day} style={{
              padding: "22px 18px",
              background: "var(--ink-000)",
              border: "1px solid var(--ink-400)", borderRadius: 12,
              position: "relative", overflow: "hidden",
              minHeight: 220, display: "flex", flexDirection: "column", gap: 10,
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
              }}>{d.day}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                letterSpacing: "-0.025em", color: "var(--fg-1)", lineHeight: 1.1,
              }}>{d.city}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>{d.distributor}</div>
              <div style={{
                marginTop: "auto", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
              }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: s.accent, letterSpacing: "-0.025em", lineHeight: 1 }}>{d.stops}</div>
                  <div style={{ marginTop: 2, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>STOPS</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--fg-1)", letterSpacing: "-0.025em", lineHeight: 1 }}>{d.reps}</div>
                  <div style={{ marginTop: 2, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>REPS</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totals && (
          <div style={{
            marginTop: 32, padding: "24px 28px",
            background: `linear-gradient(90deg, ${s.accent}14, rgba(10,11,13,0.7))`,
            border: `1px solid ${s.accent}55`, borderRadius: 14,
            display: "grid", gridTemplateColumns: `repeat(${totals.length}, 1fr)`, gap: 24,
          }}>
            {totals.map(([v, l], i) => (
              <div key={l} style={{ position: "relative" }}>
                {i > 0 && <div aria-hidden style={{ position: "absolute", left: -12, top: "10%", bottom: "10%", width: 1, background: "rgba(255,255,255,0.1)" }}/>}
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: s.accent, letterSpacing: "-0.03em", lineHeight: 1 }}>{v}</div>
                <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

/* ---------- Rep Enablement Kit Visual — what we leave with reps ---------- */
const ServiceEnablementKit = ({ s }) => {
  if (!s.enablementKit) return null;
  const { headline, sub, items, footnote } = s.enablementKit;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}REP ENABLEMENT KIT</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48,
          padding: "32px 32px 28px",
          background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
          border: `1px solid ${s.accent}55`, borderRadius: 18,
          position: "relative", overflow: "hidden",
          
        }}>
          <div aria-hidden style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${s.accent}, ${s.accent}88 60%, transparent)`,
          }}/>
          {/* Kit chrome — like a folio */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingBottom: 18, borderBottom: "1px solid var(--ink-400)", marginBottom: 22,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{
                width: 12, height: 12, borderRadius: 999, background: s.accent,
                
                animation: "ig-blink 2.4s ease-out infinite",
              }}/>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
              }}>IGNITE / REP PACKET v3.2</span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>SHIPS PER EVENT</span>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}>
            {items.map((it, i) => (
              <div key={it.label} style={{
                padding: "18px 18px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--ink-400)", borderRadius: 10,
                display: "flex", flexDirection: "column", gap: 6,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                    letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                  }}>ITEM {String(i+1).padStart(2,"0")}</span>
                  <span style={{
                    width: 18, height: 18, borderRadius: 4,
                    background: `${s.accent}22`, border: `1px solid ${s.accent}66`,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: s.accent,
                  }}>✓</span>
                </div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                  letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2,
                }}>{it.label}</div>
                <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--fg-2)" }}>{it.desc}</div>
              </div>
            ))}
          </div>

          {footnote && (
            <div style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid var(--ink-400)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</div>
          )}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Demo-to-PO Callout — big-stat conversion claim ---------- */
const ServiceDemoToPO = ({ s }) => {
  if (!s.demoToPO) return null;
  const { eyebrow, title, lede, stats, foot } = s.demoToPO;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center",
        }}>
          <div>
            <OpsLine glow>{">> "}{eyebrow || "DEMO → REP ORDER → DISTRIBUTOR PO"}</OpsLine>
            <h2 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(40px, 5.5vw, 84px)", letterSpacing: "-0.04em", lineHeight: 0.96,
              textWrap: "balance",
            }}>{title.split("|").map((line, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 && arr.length > 1 ? (
                  <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
                ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
                  <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
                ) : seg)}
                {i < arr.length - 1 && <br/>}
              </React.Fragment>
            ))}</h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 540 }}>{lede}</p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
          }}>
            {stats.map(([v, l, sub], i) => (
              <div key={l} style={{
                padding: "28px 26px",
                background: i === 0
                  ? `linear-gradient(180deg, ${s.accent}22, rgba(10,11,13,0.85))`
                  : "linear-gradient(180deg, var(--ink-000), rgba(10,11,13,0.92))",
                border: i === 0 ? `1px solid ${s.accent}66` : "1px solid var(--ink-400)",
                borderRadius: 14, position: "relative", overflow: "hidden",
                minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between",
                
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
                }}/>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: s.accent, letterSpacing: "-0.035em", lineHeight: 1,
                }}>{v}</div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 6,
                  }}>{l}</div>
                  {sub && (
                    <div style={{ fontSize: 13.5, lineHeight: 1.45, color: "var(--fg-2)" }}>{sub}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {foot && (
          <p style={{ marginTop: 36, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {foot}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Sample Recap Preview — visual mock of a Spark recap deck ---------- */
const ServiceRecapPreview = ({ s }) => {
  if (!s.recapPreview) return null;
  const { headline, sub, brand, eventName, kpis, tiles, exports } = s.recapPreview;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}WHAT YOUR RECAP LOOKS LIKE</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        {/* Deck mock */}
        <div style={{
          marginTop: 48,
          background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
          border: "1px solid var(--ink-400)", borderRadius: 18, overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
        }}>
          {/* Window chrome */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 18px", borderBottom: "1px solid var(--ink-400)",
            background: "rgba(255,255,255,0.02)",
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57","#FFBD2E","#28C840"].map(c => (
                <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }}/>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>
              spark.ignite / recap / {eventName.toLowerCase().replace(/\s+/g,"-")}
            </div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
              color: s.accent, textTransform: "uppercase",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: 999, background: s.accent,
                 animation: "ig-blink 2.4s ease-out infinite",
              }}/>
              DELIVERED · DAY 1
            </span>
          </div>

          {/* Cover */}
          <div style={{ padding: "36px 36px 28px", borderBottom: "1px solid var(--ink-400)", position: "relative", overflow: "hidden" }}>
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(135deg, ${s.accent}14 0%, transparent 60%)`,
            }}/>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 8 }}>RECAP · {brand}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", color: "var(--fg-1)", lineHeight: 1.05, margin: 0 }}>{eventName}</h3>
                <div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>EVENT DAY · STRIKE + 4HR · SPARK AUTO-GENERATED</div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["BRAND PM", "TRADE TEAM", "DISTRIBUTOR AM", "BROKER"].map(role => (
                  <span key={role} style={{
                    padding: "5px 10px", borderRadius: 4,
                    background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                    fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                    letterSpacing: "0.14em", color: s.accent, textTransform: "uppercase",
                  }}>{role}</span>
                ))}
              </div>
            </div>
          </div>

          {/* KPI grid */}
          <div style={{ padding: "28px 36px", borderBottom: "1px solid var(--ink-400)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 14 }}>{">> "}AT-A-GLANCE</div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${kpis.length}, 1fr)`, gap: 10 }}>
              {kpis.map(([v, l]) => (
                <div key={l} style={{
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--ink-400)", borderRadius: 10,
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: s.accent, letterSpacing: "-0.025em", lineHeight: 1 }}>{v}</div>
                  <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Component tiles */}
          <div style={{ padding: "28px 36px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 14 }}>{">> "}WHAT'S IN THE DECK</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
              {tiles.map((t, i) => (
                <div key={t.title} style={{
                  padding: "16px 16px",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.2))",
                  border: "1px solid var(--ink-400)", borderRadius: 10,
                  display: "flex", flexDirection: "column", gap: 8, minHeight: 130,
                  position: "relative", overflow: "hidden",
                }}>
                  <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.accent}, transparent 70%)` }}/>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>PG {String(i+2).padStart(2,"0")}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2 }}>{t.title}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.45, color: "var(--fg-2)" }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Export options strip */}
          {exports && (
            <div style={{ padding: "20px 36px", borderTop: "1px solid var(--ink-400)", background: "rgba(255,255,255,0.015)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase" }}>{">> "}EXPORT AS</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {exports.map(e => (
                    <span key={e} style={{
                      padding: "7px 13px", borderRadius: 6,
                      background: `${s.accent}10`, border: `1px solid ${s.accent}55`,
                      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.16em", color: s.accent, textTransform: "uppercase",
                    }}>{e}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Recap Timeline Race — old vs Spark, day by day ---------- */
const ServiceRecapTimeline = ({ s }) => {
  if (!s.recapTimeline) return null;
  const { headline, sub, days } = s.recapTimeline;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}DAY-BY-DAY RECAP RACE</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{ marginTop: 48 }}>
          {/* Lane labels */}
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", marginBottom: 14 }}>
            <div/>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${days.length}, 1fr)`, gap: 6 }}>
              {days.map((d) => (
                <div key={d.day} style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase",
                  textAlign: "center",
                }}>{d.day}</div>
              ))}
            </div>
          </div>

          {/* Spark lane */}
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 14, marginBottom: 8, alignItems: "center" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
              textAlign: "right",
            }}>WITH SPARK</div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${days.length}, 1fr)`, gap: 6, position: "relative" }}>
              <div aria-hidden style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 2, background: `${s.accent}33`, transform: "translateY(-50%)" }}/>
              {days.map((d, i) => (
                <div key={d.day} style={{
                  padding: "16px 12px",
                  background: d.spark
                    ? `linear-gradient(180deg, ${s.accent}22, var(--ink-000))`
                    : "rgba(255,255,255,0.03)",
                  border: d.spark ? `1px solid ${s.accent}88` : "1px solid var(--ink-400)",
                  borderRadius: 10, position: "relative", zIndex: 1,
                  minHeight: 90, display: "flex", flexDirection: "column", justifyContent: "center",
                  
                }}>
                  {d.spark ? (
                    <>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: s.accent, letterSpacing: "-0.015em", lineHeight: 1.1, marginBottom: 4 }}>{d.sparkTitle || "Delivered"}</div>
                      <div style={{ fontSize: 11, color: "var(--fg-2)", lineHeight: 1.4 }}>{d.spark}</div>
                    </>
                  ) : (
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", textAlign: "center" }}>—</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vendor lane */}
          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 14, alignItems: "center" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.22em", color: "rgba(216,118,84,0.85)", textTransform: "uppercase",
              textAlign: "right",
            }}>OLD WAY</div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${days.length}, 1fr)`, gap: 6, position: "relative" }}>
              <div aria-hidden style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 2, background: "rgba(216,118,84,0.25)", transform: "translateY(-50%)" }}/>
              {days.map((d, i) => (
                <div key={d.day} style={{
                  padding: "16px 12px",
                  background: d.vendor
                    ? "linear-gradient(180deg, rgba(216,118,84,0.18), rgba(0,0,0,0.2))"
                    : "rgba(255,255,255,0.03)",
                  border: d.vendor ? "1px solid rgba(216,118,84,0.55)" : "1px solid var(--ink-400)",
                  borderRadius: 10, position: "relative", zIndex: 1,
                  minHeight: 90, display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  {d.vendor ? (
                    <>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "#D87654", letterSpacing: "-0.015em", lineHeight: 1.1, marginBottom: 4 }}>{d.vendorTitle || "Still drafting"}</div>
                      <div style={{ fontSize: 11, color: "rgba(245,242,236,0.6)", lineHeight: 1.4 }}>{d.vendor}</div>
                    </>
                  ) : (
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", textAlign: "center" }}>—</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Recap Distribution Map — one recap, multiple stakeholders ---------- */
const ServiceRecapDistribution = ({ s }) => {
  if (!s.recapDistribution) return null;
  const { headline, sub, stakeholders } = s.recapDistribution;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}ONE RECAP. SIX STAKEHOLDERS.</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "center",
        }}>
          {/* Central hub */}
          <div style={{
            padding: "48px 36px",
            background: `linear-gradient(135deg, ${s.accent}22, rgba(10,11,13,0.85))`,
            border: `2px solid ${s.accent}`, borderRadius: 18,
            position: "relative", overflow: "hidden",
            
            textAlign: "center",
          }}>
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              background: "transparent",
              pointerEvents: "none",
            }}/>
            <div style={{ position: "relative" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 999,
                background: "rgba(0,0,0,0.4)", border: `1px solid ${s.accent}`,
                fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                marginBottom: 18,
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: 999, background: s.accent,
                   animation: "ig-blink 2s ease-out infinite",
                }}/>
                LIVE
              </span>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36,
                color: "var(--fg-1)", letterSpacing: "-0.03em", lineHeight: 1.05,
                marginBottom: 10,
              }}>The Spark<br/>Recap</div>
              <div style={{ fontSize: 13.5, color: "var(--fg-2)", lineHeight: 1.55 }}>One canonical dashboard. Everyone sees the same data, same time.</div>
            </div>
          </div>

          {/* Stakeholder grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {stakeholders.map((sh, i) => (
              <div key={sh.role} style={{
                padding: "20px 22px",
                background: "var(--ink-100)",
                border: "1px solid var(--ink-400)", borderRadius: 12,
                position: "relative", overflow: "hidden",
                transition: "transform 200ms, border-color 200ms",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.borderColor = s.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
              >
                <div aria-hidden style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                  background: s.accent, opacity: 0.7,
                }}/>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 8 }}>↳ DELIVERED TO</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.015em", color: "var(--fg-1)", marginBottom: 6, lineHeight: 1.2 }}>{sh.role}</div>
                <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--fg-2)" }}>{sh.uses}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Multi-Event Aggregation View — quarterly rollup ---------- */
const ServiceMultiEventRollup = ({ s }) => {
  if (!s.multiEventRollup) return null;
  const { headline, sub, totals, eventList, period } = s.multiEventRollup;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}MULTI-EVENT ROLL-UP</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        {/* Rollup card */}
        <div style={{
          marginTop: 48,
          background: "linear-gradient(180deg, var(--ink-000), rgba(10,11,13,0.92))",
          border: `1px solid ${s.accent}55`, borderRadius: 16, overflow: "hidden",
          
        }}>
          <div style={{
            padding: "20px 24px",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid var(--ink-400)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{
                width: 9, height: 9, borderRadius: 999, background: s.accent,
                 animation: "ig-blink 2s ease-out infinite",
              }}/>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", fontWeight: 700 }}>QUARTERLY ROLL-UP · {period}</span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>SPARK AUTO-AGGREGATED</span>
          </div>

          {/* KPI strip */}
          <div style={{ padding: "28px 24px", borderBottom: "1px solid var(--ink-400)" }}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${totals.length}, 1fr)`, gap: 18 }}>
              {totals.map(([v, l], i) => (
                <div key={l} style={{ position: "relative", paddingLeft: i > 0 ? 18 : 0 }}>
                  {i > 0 && <div aria-hidden style={{ position: "absolute", left: 0, top: "10%", bottom: "10%", width: 1, background: "rgba(255,255,255,0.1)" }}/>}
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", color: s.accent, letterSpacing: "-0.03em", lineHeight: 1 }}>{v}</div>
                  <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Event list */}
          <div style={{ padding: "20px 0" }}>
            <div style={{ padding: "0 24px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 14 }}>{">> "}EVENTS IN PERIOD</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {eventList.map((e, i) => (
                <div key={e.name + i} style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1.2fr 1fr 0.8fr 0.8fr",
                  gap: 18, padding: "12px 24px", alignItems: "center",
                  borderBottom: i < eventList.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  transition: "background 150ms",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${s.accent}08`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", width: 38, textAlign: "right" }}>{String(i+1).padStart(2,"0")}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--fg-1)", letterSpacing: "-0.005em" }}>{e.name}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>{e.market}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: s.accent, textAlign: "right", letterSpacing: "-0.01em" }}>{e.samples} samples</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.18em",
                    color: s.accent, textTransform: "uppercase", textAlign: "right",
                  }}>✓ RECAP</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Already Delivered Counter — pulsing live stat tile ---------- */
const ServiceAlreadyDelivered = ({ s }) => {
  if (!s.alreadyDelivered) return null;
  const { eyebrow, title, lede, stats } = s.alreadyDelivered;
  const [count, setCount] = React.useState((stats && stats[0] && parseInt(String(stats[0][0]).replace(/[^\d]/g, "")) || 247));
  React.useEffect(() => {
    const id = setInterval(() => setCount(c => c + (Math.random() > 0.7 ? 1 : 0)), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <OpsLine glow>{">> "}{eyebrow}</OpsLine>
            <h2 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(40px, 5.5vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.92,
              textWrap: "balance",
            }}>{title.split("|").map((line, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 && arr.length > 1 ? (
                  <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
                ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
                  <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
                ) : seg)}
                {i < arr.length - 1 && <br/>}
              </React.Fragment>
            ))}</h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 540 }}>{lede}</p>
          </div>
          <div style={{
            padding: "48px 36px",
            background: `linear-gradient(180deg, ${s.accent}1c, rgba(10,11,13,0.85))`,
            border: `1.5px solid ${s.accent}`, borderRadius: 20,
            position: "relative", overflow: "hidden",
            
          }}>
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              background: "transparent",
              pointerEvents: "none",
            }}/>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{
                  width: 10, height: 10, borderRadius: 999, background: s.accent,
                   animation: "ig-blink 1.6s ease-out infinite",
                }}/>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>{stats[0][1]}</span>
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(56px, 7vw, 120px)",
                color: s.accent, letterSpacing: "-0.045em", lineHeight: 0.92,
                overflowWrap: "anywhere",
              }}>{count.toLocaleString()}</div>
              {stats.slice(1).length > 0 && (
                <div style={{
                  marginTop: 24, paddingTop: 20, borderTop: `1px solid ${s.accent}44`,
                  display: "grid", gridTemplateColumns: `repeat(${Math.min(stats.length - 1, 3)}, 1fr)`, gap: 14,
                }}>
                  {stats.slice(1).map(([v, l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--fg-1)", letterSpacing: "-0.025em", lineHeight: 1 }}>{v}</div>
                      <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Liability / Insurance Band — coverage visual for on-premise ---------- */
const ServiceLiabilityBand = ({ s }) => {
  if (!s.liabilityBand) return null;
  const { headline, sub, coverage, footnote } = s.liabilityBand;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}INSURANCE + LIABILITY</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14,
        }}>
          {coverage.map((c, i) => (
            <div key={c.policy} style={{
              padding: "24px 24px",
              background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
              border: `1px solid ${s.accent}33`, borderRadius: 12,
              position: "relative", overflow: "hidden",
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = `${s.accent}33`; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              <div style={{
                display: "flex", alignItems: "center", gap: 8, marginBottom: 12,
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 4,
                  background: `${s.accent}1c`, border: `1px solid ${s.accent}66`,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: s.accent, fontSize: 13, fontWeight: 800,
                }}>✓</span>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                }}>POLICY {String(i+1).padStart(2,"0")}</span>
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2, marginBottom: 6,
              }}>{c.policy}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26,
                color: s.accent, letterSpacing: "-0.025em", lineHeight: 1,
                marginBottom: 8,
              }}>{c.limit}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-2)" }}>{c.desc}</div>
            </div>
          ))}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Refusal-to-Serve SOP — decision tree ---------- */
const ServiceRefusalSOP = ({ s }) => {
  if (!s.refusalSOP) return null;
  const { headline, sub, branches, footnote } = s.refusalSOP;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}REFUSAL SOP</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: `repeat(${branches.length}, 1fr)`, gap: 14,
        }}>
          {branches.map((b, i) => (
            <div key={b.trigger} style={{
              padding: "28px 24px 24px",
              background: "linear-gradient(180deg, var(--ink-000), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              {/* Trigger */}
              <div style={{
                padding: "10px 14px", borderRadius: 8,
                background: `${s.accent}14`, border: `1px solid ${s.accent}55`,
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>IF</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--fg-1)", lineHeight: 1.25, letterSpacing: "-0.01em" }}>{b.trigger}</div>
              </div>
              {/* Arrow */}
              <div style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 18, color: s.accent }}>↓</div>
              {/* Action */}
              <div style={{
                padding: "12px 14px", borderRadius: 8,
                background: "rgba(255,255,255,0.03)", border: "1px solid var(--ink-400)",
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>THEN</div>
                <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {b.steps.map((step, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "baseline", gap: 8, fontSize: 13, color: "var(--fg-1)", lineHeight: 1.45 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: s.accent, fontWeight: 700, letterSpacing: "0.18em" }}>{String(idx+1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Log */}
              {b.log && (
                <div style={{
                  marginTop: "auto",
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                  color: s.accent, textTransform: "uppercase", paddingTop: 8,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}>※ LOGGED: {b.log}</div>
              )}
            </div>
          ))}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Pre-Event Setup Checklist — what we do before doors open ---------- */
const ServicePreEventChecklist = ({ s }) => {
  if (!s.preEventChecklist) return null;
  const { headline, sub, items, doorsAt } = s.preEventChecklist;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}T-MINUS · BEFORE DOORS</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48,
          background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
          border: `1px solid ${s.accent}33`, borderRadius: 16, overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
            padding: "18px 24px", borderBottom: "1px solid var(--ink-400)",
            background: "rgba(255,255,255,0.02)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{
                width: 9, height: 9, borderRadius: 999, background: s.accent,
                 animation: "ig-blink 2s ease-out infinite",
              }}/>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase" }}>PRE-DOORS CHECKLIST</span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>DOORS OPEN · {doorsAt}</span>
          </div>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, i) => (
              <div key={item.task} style={{
                display: "grid", gridTemplateColumns: "120px auto 1fr auto", gap: 18,
                padding: "16px 24px", alignItems: "center",
                borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "background 150ms",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = `${s.accent}06`; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.18em", color: s.accent, textTransform: "uppercase",
                }}>{item.time}</span>
                <span style={{
                  width: 22, height: 22, borderRadius: 4,
                  background: `${s.accent}1c`, border: `1px solid ${s.accent}66`,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: s.accent, fontSize: 13, fontWeight: 800,
                }}>✓</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, color: "var(--fg-1)", letterSpacing: "-0.005em", lineHeight: 1.4 }}>{item.task}</span>
                {item.owner && (
                  <span style={{
                    padding: "4px 10px", borderRadius: 999,
                    background: "rgba(255,255,255,0.04)", border: "1px solid var(--ink-400)",
                    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.16em", color: "var(--fg-2)", textTransform: "uppercase",
                  }}>{item.owner}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Bar-back Program Roster — who shows up for a brand house weekend ---------- */
const ServiceBarbackRoster = ({ s }) => {
  if (!s.barbackRoster) return null;
  const { headline, sub, roles, footnote } = s.barbackRoster;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <Container>
        <OpsLine>{">> "}WEEKEND ROSTER</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: `repeat(${roles.length}, 1fr)`, gap: 14,
        }}>
          {roles.map((r, i) => (
            <div key={r.role} style={{
              padding: "26px 22px",
              background: "linear-gradient(180deg, var(--ink-000), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              position: "relative", overflow: "hidden",
              minHeight: 280, display: "flex", flexDirection: "column", gap: 10,
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              {/* Count badge */}
              <div style={{
                display: "inline-flex", alignSelf: "flex-start",
                padding: "5px 12px", borderRadius: 999,
                background: `${s.accent}1c`, border: `1px solid ${s.accent}55`,
                fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
              }}>×{r.count}</div>
              {/* Role */}
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                letterSpacing: "-0.025em", color: "var(--fg-1)", lineHeight: 1.1, marginTop: 4,
              }}>{r.role}</div>
              {/* Description */}
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-2)" }}>{r.desc}</div>
              {/* Cert badges */}
              {r.certs && r.certs.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 6 }}>
                  {r.certs.map((c) => (
                    <span key={c} style={{
                      padding: "3px 8px", borderRadius: 3,
                      background: "rgba(255,255,255,0.04)", border: "1px solid var(--ink-400)",
                      fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                      letterSpacing: "0.12em", color: "var(--fg-2)",
                    }}>{c}</span>
                  ))}
                </div>
              )}
              {/* Hours */}
              {r.hours && (
                <div style={{
                  marginTop: "auto", paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>SHIFT</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: s.accent, letterSpacing: "-0.01em" }}>{r.hours}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Pour Counter → Conversion Tracker — pour-bar live metrics ---------- */
const ServicePourCounter = ({ s }) => {
  if (!s.pourCounter) return null;
  const { headline, sub, hours, kpis, refusalCount, conversionRate } = s.pourCounter;
  const [pour, setPour] = React.useState(842);
  React.useEffect(() => {
    const id = setInterval(() => setPour(p => p + Math.floor(Math.random() * 3) + 1), 1200);
    return () => clearInterval(id);
  }, []);
  const maxHourly = Math.max(...hours.map(h => h.count));
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}POURS · CONVERSIONS · REFUSALS</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48,
          background: "linear-gradient(180deg, #14161B 0%, #0F1115 100%)",
          border: "1px solid var(--ink-400)", borderRadius: 20, overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
        }}>
          {/* Chrome */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 18px", borderBottom: "1px solid var(--ink-400)",
            background: "rgba(255,255,255,0.02)",
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#FF5F57","#FFBD2E","#28C840"].map(c => (
                <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }}/>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>
              spark.ignite / pour-bar / live
            </div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
              color: s.accent, textTransform: "uppercase",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: 999, background: s.accent,
                 animation: "ig-blink 1.6s ease-out infinite",
              }}/>
              LIVE
            </span>
          </div>

          <div style={{ padding: 28, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28, alignItems: "stretch" }}>
            {/* Big pour counter */}
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", marginBottom: 14 }}>{">> "}POURS TONIGHT</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 96,
                color: s.accent, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 24,
              }}>{pour.toLocaleString()}</div>

              {/* Hour bar chart */}
              <div style={{ marginTop: 14 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 12 }}>{">> "}POURS PER HOUR</div>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${hours.length}, 1fr)`, gap: 6, alignItems: "end", height: 120 }}>
                  {hours.map((h, i) => {
                    const pct = Math.max(8, (h.count / maxHourly) * 100);
                    return (
                      <div key={h.hour} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 6, height: "100%" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "end" }}>
                          <div style={{
                            width: "100%", height: pct + "%",
                            background: `linear-gradient(180deg, ${s.accent}, ${s.accent}66)`,
                            borderRadius: "4px 4px 0 0",
                            
                          }}/>
                        </div>
                        <div style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>{h.hour}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* KPI stack */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {kpis.map(([v, l, sub]) => (
                <div key={l} style={{
                  padding: "16px 18px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--ink-400)", borderRadius: 10,
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: s.accent, letterSpacing: "-0.025em", lineHeight: 1 }}>{v}</div>
                  <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{l}</div>
                  {sub && <div style={{ marginTop: 6, fontSize: 12, color: "var(--fg-2)", lineHeight: 1.4 }}>{sub}</div>}
                </div>
              ))}
              {/* Refusal counter */}
              <div style={{
                padding: "14px 18px",
                background: "rgba(216,118,84,0.08)",
                border: "1px solid rgba(216,118,84,0.4)", borderRadius: 10,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "#D87654", textTransform: "uppercase", fontWeight: 700 }}>REFUSALS LOGGED</div>
                  <div style={{ marginTop: 2, fontSize: 11, color: "rgba(245,242,236,0.55)" }}>SOP triggered + reported</div>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: "#D87654", letterSpacing: "-0.025em", lineHeight: 1 }}>{refusalCount}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Photo Evidence Carousel — before/after / audit moments ---------- */
const ServicePhotoEvidence = ({ s }) => {
  if (!s.photoEvidence) return null;
  const { headline, sub, items, footnote } = s.photoEvidence;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}PHOTO EVIDENCE</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14,
        }}>
          {items.map((item, i) => (
            <figure key={item.caption + i} style={{
              margin: 0,
              background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              overflow: "hidden", position: "relative",
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                <img src={item.photo} alt={item.caption} style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  filter: "brightness(0.85) saturate(1.05)",
                }} loading="lazy" decoding="async"/>
                {/* Status pill */}
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 10px", borderRadius: 999,
                  background: "rgba(10,11,13,0.85)",
                  border: `1px solid ${item.statusColor || s.accent}`,
                  fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.18em", color: item.statusColor || s.accent,
                  textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: 999, background: item.statusColor || s.accent,
                    
                  }}/>
                  {item.status}
                </div>
                {/* GPS / timestamp watermark */}
                <div style={{
                  position: "absolute", bottom: 12, right: 12,
                  padding: "4px 9px", borderRadius: 4,
                  background: "rgba(10,11,13,0.85)",
                  fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.85)", textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                }}>{item.stamp}</div>
              </div>
              <figcaption style={{
                padding: "18px 20px",
                borderTop: "1px solid var(--ink-400)",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                  color: s.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 6,
                }}>{item.retailer}</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                  letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.3, marginBottom: 4,
                }}>{item.caption}</div>
                <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--fg-2)" }}>{item.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- POS Material Library — catalog of in-store materials we produce + install ---------- */
const ServicePOSLibrary = ({ s }) => {
  if (!s.posLibrary) return null;
  const { headline, sub, materials, footnote } = s.posLibrary;
  /* SVG mark per material type */
  const marks = {
    "end-cap": (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="6" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="10" width="16" height="6" fill="currentColor" opacity="0.4"/>
        <rect x="10" y="20" width="8" height="6" fill="currentColor" opacity="0.25"/>
        <rect x="22" y="20" width="8" height="6" fill="currentColor" opacity="0.25"/>
        <rect x="34" y="20" width="6" height="6" fill="currentColor" opacity="0.25"/>
      </svg>
    ),
    "shelf-talker": (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M6 16 L42 16 L42 30 L26 30 L24 36 L22 30 L6 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="10" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    "blade-sign": (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="12" y="6" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="14" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
        <rect x="16" y="18" width="16" height="14" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    "dump-bin": (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M10 16 L38 16 L36 40 L12 40 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="6" y="12" width="36" height="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="26" r="3" fill="currentColor" opacity="0.4"/>
        <circle cx="26" cy="30" r="3" fill="currentColor" opacity="0.4"/>
        <circle cx="32" cy="24" r="3" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    "cooler-cling": (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="10" y="6" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="10" y1="14" x2="38" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="18" width="20" height="18" fill="currentColor" opacity="0.3"/>
        <circle cx="24" cy="10" r="1.5" fill="currentColor"/>
      </svg>
    ),
    "dancer": (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6 L24 28 M18 14 Q24 10 30 14 M16 22 Q24 30 32 22 M20 28 L18 42 M28 28 L30 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "lift-card": (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="14" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="14" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="14" y1="30" x2="22" y2="30" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    "wobbler": (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8 L24 22" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
        <circle cx="24" cy="30" r="10" stroke="currentColor" strokeWidth="2"/>
        <text x="24" y="34" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">SAVE</text>
      </svg>
    ),
    "default": (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="10" y="10" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  };
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}POS MATERIAL LIBRARY</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14,
        }}>
          {materials.map((m, i) => (
            <div key={m.name} style={{
              padding: "26px 22px",
              background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 14,
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", gap: 12, minHeight: 240,
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = s.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${s.accent}, transparent 70%)`,
              }}/>
              {/* SVG mark */}
              <div style={{
                width: 56, height: 56, color: s.accent,
                background: `${s.accent}10`, borderRadius: 10,
                border: `1px solid ${s.accent}33`,
                padding: 8,
              }}>
                {marks[m.icon] || marks.default}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", fontWeight: 700, marginTop: 4 }}>SKU · {String(i+1).padStart(3, "0")}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
                letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2,
              }}>{m.name}</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--fg-2)" }}>{m.desc}</div>
              {m.spec && (
                <div style={{
                  marginTop: "auto", paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em",
                  color: "var(--fg-3)", textTransform: "uppercase",
                }}>{m.spec}</div>
              )}
            </div>
          ))}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Corridor Density Map — high-density street corridors with velocity estimates ---------- */
const ServiceCorridorMap = ({ s }) => {
  if (!s.corridorMap) return null;
  const { headline, sub, corridors, footnote } = s.corridorMap;
  /* Density visual: render dots based on density level (1-3) */
  const densityDots = (level, col) => Array.from({ length: 3 }, (_, i) => (
    <span key={i} style={{
      width: 6, height: 6, borderRadius: 999,
      background: i < level ? col : "rgba(255,255,255,0.15)",
      
    }}/>
  ));
  const HOLIDAY_PALETTE = ["#D7453E","#E8C24A","#4FB58A","#4664C4","#C85B9E","#E68A4C","#8A5CD1","#3FAEA8","#9FC24E","#5AB8FF"];
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}CORRIDOR DENSITY MAP</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12,
        }}>
          {corridors.map((c, i) => {
            const col = HOLIDAY_PALETTE[i % HOLIDAY_PALETTE.length];
            return (
            <div key={c.name} style={{
              padding: "22px 22px",
              background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
              border: "1px solid var(--ink-400)", borderRadius: 12,
              position: "relative", overflow: "hidden",
              transition: "transform 200ms, border-color 200ms",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = col; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}
            >
              {/* Density bar at top */}
              <div aria-hidden style={{
                position: "absolute", top: 0, left: 0, height: 2,
                width: `${(c.density / 3) * 100}%`,
                background: `linear-gradient(90deg, ${col}, ${col}88)`,
                
              }}/>
              {/* Header: name + city + density dots */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.22em", color: col, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>{c.city}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2 }}>{c.name}</div>
                </div>
                <div style={{ display: "flex", gap: 4, alignItems: "center", marginTop: 6 }}>
                  {densityDots(c.density, col)}
                </div>
              </div>
              {/* Sample velocity — stacked: label above value on its own full line */}
              <div style={{
                padding: "10px 12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--ink-400)", borderRadius: 8,
                display: "flex", flexDirection: "column", gap: 4,
                marginBottom: 8,
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>VELOCITY</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: col, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{c.velocity}</span>
              </div>
              {/* Best window */}
              {c.window && (
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", marginTop: 4 }}>※ BEST WINDOW: {c.window}</div>
              )}
            </div>
            );
          })}
          ))}
        </div>
        {footnote && (
          <p style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* ---------- Fulfillment Flow — prize sourcing → ship → confirm pipeline ---------- */
const ServiceFulfillmentFlow = ({ s }) => {
  if (!s.fulfillmentFlow) return null;
  const { headline, sub, steps, partners, footnote } = s.fulfillmentFlow;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <Container style={{ position: "relative" }}>
        <OpsLine glow>{">> "}PRIZE FULFILLMENT</OpsLine>
        <h2 style={{
          marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.96,
          textWrap: "balance", maxWidth: 1100,
        }}>{headline.split("|").map((line, i, arr) => (
          <React.Fragment key={i}>
            {i === arr.length - 1 && arr.length > 1 ? (
              <span style={{ fontStyle: "italic", color: s.accent }}>{line.replace(/\*/g, "")}</span>
            ) : line.split(/\*([^*]+)\*/g).map((seg, j) => j % 2 === 1 ? (
              <span key={j} style={{ fontStyle: "italic", color: s.accent }}>{seg}</span>
            ) : seg)}
            {i < arr.length - 1 && <br/>}
          </React.Fragment>
        ))}</h2>
        <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 760 }}>{sub}</p>

        <div style={{
          marginTop: 56, display: "grid", gridTemplateColumns: steps.map(() => "1fr").join(" auto "),
          gap: 0, alignItems: "stretch",
        }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div style={{
                padding: "26px 22px",
                background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
                border: "1px solid var(--ink-400)", borderRadius: 14,
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", gap: 10, minHeight: 200,
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${s.accent}, transparent 60%)`,
                }}/>
                <div style={{
                  display: "inline-flex", alignSelf: "flex-start",
                  width: 40, height: 40, borderRadius: 10,
                  background: `${s.accent}1c`, border: `1px solid ${s.accent}66`,
                  alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16,
                  color: s.accent, letterSpacing: "-0.01em",
                }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase",
                }}>{step.label}</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19,
                  letterSpacing: "-0.015em", color: "var(--fg-1)", lineHeight: 1.2,
                }}>{step.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg-2)", margin: 0 }}>{step.desc}</div>
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  alignSelf: "center", padding: "0 6px",
                  fontFamily: "var(--font-mono)", fontSize: 22, color: s.accent, opacity: 0.7,
                }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {partners && (
          <div style={{
            marginTop: 32, padding: "20px 28px",
            background: "var(--ink-100)", border: `1px solid ${s.accent}33`, borderRadius: 12,
            display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "center",
          }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: s.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>// FULFILLMENT PARTNERS</div>
              <div style={{ fontSize: 13, color: "var(--fg-2)" }}>Carrier + travel + experience networks</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {partners.map(p => (
                <span key={p} style={{
                  padding: "8px 14px", borderRadius: 999,
                  background: "var(--ink-000)", border: "1px solid var(--ink-400)",
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 500,
                  color: "var(--fg-1)", letterSpacing: "-0.005em",
                }}>{p}</span>
              ))}
            </div>
          </div>
        )}
        {footnote && (
          <p style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>※ {footnote}</p>
        )}
      </Container>
    </section>
  );
};

/* Per-page primary color: each service page inherits its category's color.
   Order matches SITE_SERVICE_GROUPS; maps to the --cat-* / spectrum hexes. */
const CAT_PAGE_HEX = ["#D7453E", "#E68A4C", "#E8C24A", "#9FC24E", "#4FB58A", "#3FAEA8", "#4F7DA6", "#4664C4", "#8A5CD1", "#D6F35F"];
const SLUG_CAT_HEX = (() => {
  const m = {};
  (window.SITE_SERVICE_GROUPS || []).forEach((g, gi) => (g.services || []).forEach(sv => { m[sv.slug] = CAT_PAGE_HEX[gi]; }));
  return m;
})();

const ServiceBreadcrumb = ({ s }) => {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const h = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true }); h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  const ink = "#0A0B0D";
  const link = stuck ? "rgba(10,11,13,0.72)" : "rgba(255,255,255,0.6)";
  const slash = stuck ? "rgba(10,11,13,0.35)" : "rgba(255,255,255,0.3)";
  const cur = stuck ? ink : s.accent;
  return (
    <div className="sticky-breadcrumb" style={{
      position: "sticky", top: 128, zIndex: 70, marginBottom: -64,
      background: stuck ? s.accent : "transparent",
      borderBottom: stuck ? "1px solid rgba(10,11,13,0.14)" : "1px solid transparent",
      boxShadow: stuck ? "0 8px 24px rgba(0,0,0,0.18)" : "none",
      transition: "background 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out)",
    }}>
      <div style={{
        maxWidth: 1480, margin: "0 auto", padding: "0 32px", height: 64,
        display: "flex", alignItems: "center", gap: 14,
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
      }}>
        <a href="../index.html" style={{ color: link, transition: "color 200ms" }}>HOME</a>
        <span style={{ color: slash }}>/</span>
        <a href="services.html" style={{ color: link, transition: "color 200ms" }}>SERVICES</a>
        <span style={{ color: slash }}>/</span>
        <span style={{ color: cur, fontWeight: 600, transition: "color 200ms" }}>{(s.label || s.short).toUpperCase()}</span>
      </div>
    </div>
  );
};

const ServiceDetailPage = ({ slug }) => {
  const s = SERVICES_DATA[slug];
  if (!s) return <div style={{ padding: 80, color: "#fff" }}>Service not found: {slug}</div>;
  if (SLUG_CAT_HEX[slug]) s.accent = SLUG_CAT_HEX[slug];  // category color = page primary
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const secs = Array.from(root.children).filter(el => el.tagName === "SECTION").slice(1); // skip hero
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { secs.forEach(el => el.classList.add("sd-in")); return; }
    secs.forEach(el => el.classList.add("sd-reveal"));
    // Reveal anything already in or above the viewport immediately (no flash, no dependence on observer firing).
    const revealInView = () => secs.forEach(el => {
      if (el.classList.contains("sd-in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) el.classList.add("sd-in");
    });
    revealInView();
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("sd-in"); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    secs.forEach(el => { if (!el.classList.contains("sd-in")) obs.observe(el); });
    // Safety net: if the observer never fires (sandboxed iframes, etc.), never leave content hidden.
    const onScroll = () => revealInView();
    window.addEventListener("scroll", onScroll, { passive: true });
    const failsafe = setTimeout(() => secs.forEach(el => el.classList.add("sd-in")), 2600);
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); clearTimeout(failsafe); };
  }, [slug]);
  return (
    <div ref={rootRef} data-screen-label={"01 " + s.label}>
      <style>{`
        .sd-reveal { opacity: 0; transform: translateY(34px); transition: opacity 760ms cubic-bezier(0.16,0.84,0.3,1), transform 760ms cubic-bezier(0.16,0.84,0.3,1); will-change: opacity, transform; }
        .sd-reveal.sd-in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { .sd-reveal { opacity: 1 !important; transform: none !important; transition: none !important; } }
      `}</style>
      <SiteNav rel="../" active="SERVICES"/>
      <ServiceBreadcrumb s={s}/>
      <ServiceHero s={s}/>
      <ServicePOV s={s}/>
      <ServicePainBanner s={s}/>
      <ServiceIntro s={s}/>
      <ServiceComparison s={s}/>
      <ServiceKillList s={s}/>
      <ServiceBeforeAfter s={s}/>
      <ServiceRecapTimeline s={s}/>
      <ServiceAlreadyDelivered s={s}/>
      <ServiceRecapPreview s={s}/>
      <ServiceRecapDistribution s={s}/>
      <ServiceMultiEventRollup s={s}/>
      <ServiceComplianceMap s={s}/>
      <ServiceLiabilityBand s={s}/>
      <ServiceRefusalSOP s={s}/>
      <ServicePreEventChecklist s={s}/>
      <ServiceBarbackRoster s={s}/>
      <ServicePourCounter s={s}/>
      <ServiceChannelBreakdown s={s}/>
      <ServiceGSMPlaybook s={s}/>
      <ServiceRideAlong s={s}/>
      <ServiceDemoToPO s={s}/>
      <ServiceScanBackROI s={s}/>
      <ServiceLeadFlow s={s}/>
      <ServiceFulfillmentFlow s={s}/>
      <ServiceLiveCapture s={s}/>
      <ServiceEnablementKit s={s}/>
      <ServicePrizeShowcase s={s}/>
      <ServiceUseCases s={s}/>
      <ServiceAmbassadorProfiles s={s}/>
      <ServiceBenchDepth s={s}/>
      <ServiceTierLadder s={s}/>
      <ServiceRecruitingFunnel s={s}/>
      <ServicePOSLibrary s={s}/>
      <ServiceCorridorMap s={s}/>
      <ServicePhotoEvidence s={s}/>
      <ServiceProofBar s={s}/>
      <SubServicesGrid s={s}/>
      <ServiceComplianceBelt s={s}/>
      <ServiceIndustries s={s}/>
      <ServiceProcess s={s}/>
      <FeaturedCase s={s}/>
      <ServiceReceipts s={s}/>
      <ServiceSEOBlock s={s}/>
      <ServiceMarkets s={s}/>
      <ServiceMarketsBlock s={s}/>
      <ServiceSparkSection s={s}/>
      <ServiceFAQ s={s}/>
      <AdjacentServices s={s}/>
      {window.RelatedCases ? React.createElement(window.RelatedCases,{ctx:"service",slug:slug}) : null}
      <ServiceCTA s={s}/>
      <ServicePairedChips s={s}/>
      <SiteFooter rel="../"/>
    </div>
  );
};

Object.assign(window, { ServiceDetailPage });
