/* global React */
/* ============================================================
   INDUSTRY SECTION — reusable renderer for /industries/<slug>.
   Mirrors CitySEOSection architecture; degrades when fields
   are missing.
   ============================================================ */

const IND_KEYFRAMES = `
@keyframes ind-rise { 0% { opacity: 0; transform: translateY(14px); } 100% { opacity: 1; transform: translateY(0); } }
@keyframes ind-blink { 0%, 60%, 100% { opacity: 1; } 70%, 80% { opacity: 0.2; } }
@keyframes ind-glow { 0%,100% { opacity: 1; } }
@keyframes ind-grid-drift { 0% { background-position: 0 0, 0 0; } 100% { background-position: 48px 48px, 48px 48px; } }
@keyframes ind-glow-a { 0%,100% { transform: translate3d(-8%, -4%, 0) scale(1); opacity: .55; } 50% { transform: translate3d(6%, 4%, 0) scale(1.12); opacity: .85; } }
@keyframes ind-glow-b { 0%,100% { transform: translate3d(4%, 6%, 0) scale(1.05); opacity: .35; } 50% { transform: translate3d(-6%, -4%, 0) scale(0.95); opacity: .6; } }
@keyframes ind-scan { 0% { transform: translateY(-100%); opacity: 0; } 8% { opacity: .55; } 92% { opacity: .55; } 100% { transform: translateY(110vh); opacity: 0; } }
@keyframes ind-stencil-pan { 0% { transform: translateX(0); } 100% { transform: translateX(-3%); } }
@keyframes ind-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes ind-line { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
.ind-cell { opacity: 0; animation: ind-rise 700ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards; }
.ind-rise { opacity: 0; transform: translateY(20px); transition: opacity 700ms cubic-bezier(0.2,0.7,0.2,1), transform 700ms cubic-bezier(0.2,0.7,0.2,1); }
.ind-rise.in { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) { .ind-cell, .ind-rise { animation: none; opacity: 1; transform: none; } [data-ind-anim] { animation: none !important; } }
`;

const IndGridBg = ({ animated = true, accent = "#D7453E" }) => (
  <>
    {animated && (
      <>
        <div aria-hidden="true" style={{
          position: "absolute", left: 0, right: 0, top: 0, height: 2,
          background: `linear-gradient(to bottom, transparent 0%, ${accent}80 50%, transparent 100%)`,
          pointerEvents: "none",
          animation: "ind-scan 14s linear infinite",
          animationDelay: "3s",
        }}/>
      </>
    )}
  </>
);

/* ---------- HERO ---------- */
const IndustryHero = ({ ind }) => (
  <section style={{
    position: "relative", padding: "var(--hero-pad-compact) 0",
    background: "var(--ink-000)", color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    overflow: "hidden",
  }}>
    <style>{IND_KEYFRAMES}</style>
    <IndGridBg accent={ind.accent}/>
    {/* Stencil ghost — drifts */}
    <div aria-hidden="true" data-ind-anim style={{
      position: "absolute", right: "-3%", top: "-2%",
      fontFamily: "var(--font-stencil)",
      fontSize: "clamp(180px, 26vw, 380px)",
      lineHeight: 0.85, letterSpacing: "-0.04em",
      color: "rgba(255,255,255,0.025)",
      whiteSpace: "nowrap", textTransform: "uppercase",
      pointerEvents: "none", userSelect: "none",
      animation: "ind-stencil-pan 30s ease-in-out infinite alternate",
    }}>{ind.short || ind.name}</div>

    <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative" }}>
      <div className="ind-cell" style={{ animationDelay: "60ms" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 16px", borderRadius: 999,
          background: `${ind.accent}1c`, border: `1px solid ${ind.accent}66`,
          fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: ind.accent,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: 999, background: ind.accent,
            
            animation: "ind-blink 2.4s ease-out infinite",
          }}/>
          {">> "}{ind.hero.eyebrow}
        </span>
      </div>

      <h1 className="ind-cell" style={{
        marginTop: 22,
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(56px, 7.6vw, 132px)",
        letterSpacing: "-0.04em", lineHeight: 0.92,
        maxWidth: 1300, textWrap: "balance",
        animationDelay: "180ms",
      }}>
        {ind.hero.title.split(ind.hero.acc).map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span style={{
                fontStyle: "italic", color: ind.accent,
                animation: "ind-glow 1600ms cubic-bezier(0.2,0.7,0.2,1) 600ms both",
                display: "inline-block",
              }}>{ind.hero.acc}</span>
            )}
          </React.Fragment>
        ))}
      </h1>

      <p className="ind-cell" style={{
        marginTop: 36,
        fontFamily: "var(--font-display)", fontWeight: 500,
        fontSize: "clamp(20px, 2.1vw, 28px)",
        lineHeight: 1.4, letterSpacing: "-0.015em",
        color: "rgba(255,255,255,0.92)",
        maxWidth: 980, textWrap: "pretty",
        animationDelay: "340ms",
      }}>{ind.hero.lede}</p>

      {/* Stat strip */}
      {ind.hero.stats && ind.hero.stats.length > 0 && (
        <div style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: `repeat(${ind.hero.stats.length}, 1fr)`,
          gap: 0,
          border: "1px solid var(--ink-400)",
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(17,19,23,0.85)",
        }}>
          {ind.hero.stats.map((s, i, arr) => (
            <div key={i} style={{
              padding: "22px 24px",
              borderRight: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
              position: "relative",
            }}>
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${ind.accent}, transparent)`,
                opacity: 0.5,
              }}/>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 28, letterSpacing: "-0.02em", color: "var(--fg-1)",
                lineHeight: 1,
              }}>{s.v}</div>
              <div style={{
                marginTop: 8,
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--fg-3)",
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

/* ---------- INTRO + ACTIVATIONS ---------- */
const IndustryActivations = ({ ind }) => (
  <section style={{ padding: "100px 0", background: "var(--ink-100)", borderTop: "1px solid var(--ink-400)" }}>
    <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
        <div className="ind-rise">
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: ind.accent,
          }}>{">> "}WHAT WE RUN</span>
          <h2 style={{
            marginTop: 14,
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(34px, 4.4vw, 56px)",
            letterSpacing: "-0.035em", lineHeight: 0.96,
          }}>
            Programs we<br/>
            <span style={{ fontStyle: "italic", color: ind.accent }}>book most often.</span>
          </h2>
          <p style={{ marginTop: 22, fontSize: 16.5, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 400 }}>
            {ind.intro}
          </p>
        </div>
        <div className="ind-rise" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 10,
          transitionDelay: "120ms",
        }}>
          {(ind.activations || []).map((a, i) => (
            <div key={a + i} style={{
              padding: "18px 20px",
              background: "var(--ink-200)",
              border: "1px solid var(--ink-400)",
              borderRadius: 10,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: ind.accent, letterSpacing: "0.1em",
              }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 500,
                fontSize: 15, letterSpacing: "-0.005em", color: "var(--fg-1)",
              }}>{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- COMPLIANCE / CERTIFICATIONS ---------- */
const IndustryCompliance = ({ ind }) => {
  if (!ind.compliance || ind.compliance.length === 0) return null;
  return (
    <section style={{
      padding: "110px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      {/* Stencil ghost */}
      <div aria-hidden="true" style={{
        position: "absolute", left: -40, top: -60,
        fontFamily: "var(--font-stencil)",
        fontSize: "clamp(180px, 26vw, 320px)",
        lineHeight: 0.85, letterSpacing: "-0.04em",
        color: `${ind.accent}0a`,
        textTransform: "uppercase", pointerEvents: "none", userSelect: "none",
      }}>RULES</div>

      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div className="ind-rise" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "end", marginBottom: 48 }}>
          <div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "8px 14px", borderRadius: 999,
              background: `${ind.accent}1c`, border: `1px solid ${ind.accent}55`,
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.22em", color: ind.accent, textTransform: "uppercase",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: 999, background: ind.accent,
                
                animation: "ind-blink 2.4s ease-out infinite",
              }}/>
              COMPLIANCE · CERTIFICATIONS · PAPERWORK
            </span>
            <h2 style={{
              marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(40px, 5.2vw, 76px)",
              letterSpacing: "-0.04em", lineHeight: 0.94, maxWidth: 980,
            }}>
              We don't fake the<br/>
              <span style={{
                fontStyle: "italic", color: ind.accent,
                
              }}>boring parts.</span>
            </h2>
            <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 680 }}>
              Every program we run carries the certifications, COIs, and SOPs that {ind.short.toLowerCase()} activation actually requires.
            </p>
          </div>
          {/* Stat callout */}
          <div style={{
            padding: "20px 24px",
            background: "var(--ink-000)",
            border: `1px solid ${ind.accent}44`,
            borderRadius: 14,
            position: "relative",
            display: "flex", flexDirection: "column", gap: 8,
            
          }}>
            <div aria-hidden="true" style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${ind.accent} 0%, transparent 60%)`,
            }}/>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
              color: "var(--fg-3)", textTransform: "uppercase",
            }}>✓ {ind.compliance.length}-POINT CHECKLIST</span>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34,
              color: ind.accent, letterSpacing: "-0.025em", lineHeight: 1,
              
            }}>Audit-ready</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-2)", letterSpacing: "0.06em" }}>
              Cards on file. COIs current. SOPs documented.
            </span>
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {ind.compliance.map((c, i) => (
            <div key={c.lab + i} className="ind-rise" style={{
              padding: "28px 26px 24px",
              background: "linear-gradient(180deg, var(--ink-000), rgba(10,11,13,0.85))",
              border: "1px solid var(--ink-400)",
              borderRadius: 14,
              position: "relative", overflow: "hidden",
              transitionDelay: (i * 60) + "ms",
              transition: "transform 200ms, border-color 200ms, box-shadow 200ms",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = ind.accent;
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "var(--ink-400)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${ind.accent} 0%, ${ind.accent}88 40%, transparent 100%)`,
              }}/>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: `${ind.accent}1c`, border: `1px solid ${ind.accent}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: ind.accent, fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700,
                }}>✓</div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: ind.accent,
                }}>{c.lab}</span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)", margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- PROOF POINTS / BRANDS ---------- */
const IndustryProof = ({ ind }) => {
  if (!ind.proofPoints || ind.proofPoints.length === 0) return null;
  const logos = window.BRAND_LOGOS || {};
  /* Normalize: strings → {line}, objects pass through */
  const items = ind.proofPoints.map((p) => {
    if (typeof p === "string") return { line: p };
    return p;
  });
  return (
    <section style={{ padding: "100px 0", background: "var(--ink-100)", borderTop: "1px solid var(--ink-400)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: ind.accent,
        }}>{">> "}PROGRAMS WE'VE RUN</span>
        <h2 style={{
          marginTop: 14,
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(32px, 4vw, 48px)",
          letterSpacing: "-0.03em", lineHeight: 1,
        }}>
          Brands in <span style={{ fontStyle: "italic", color: ind.accent }}>{ind.short.toLowerCase()}</span> we've staffed.
        </h2>
        <div style={{
          marginTop: 36,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14,
        }}>
          {items.map((p, i) => {
            const logo = p.logo && logos[p.logo];
            const brandName = logo?.name || p.brand || "Client";
            return (
              <div key={i} style={{
                padding: "28px 26px 24px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: `1px solid ${ind.accent}33`,
                borderRadius: 12,
                display: "flex", flexDirection: "column", gap: 18,
                minHeight: 200,
                position: "relative", overflow: "hidden",
                transition: "border-color 200ms, transform 200ms",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ind.accent + "99";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ind.accent + "33";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div aria-hidden="true" style={{
                  position: "absolute", top: 0, left: 0, width: 32, height: 3,
                  background: ind.accent, borderRadius: "0 0 4px 4px",
                }}/>
                <div style={{
                  height: 116,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "8px 0",
                }}>
                  {logo ? (
                    <img
                      src={logo.url}
                      alt={logo.name}
                      style={{
                        maxHeight: 96, maxWidth: "100%", width: "auto",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1) opacity(0.92)",
                      }} loading="lazy" decoding="async"
                    />
                  ) : (
                    <span style={{
                      fontFamily: "var(--font-stencil)", fontSize: 22,
                      letterSpacing: "0.04em", textTransform: "uppercase",
                      color: ind.accent, opacity: 0.85, textAlign: "center",
                    }}>{brandName}</span>
                  )}
                </div>
                <div style={{
                  paddingTop: 14, borderTop: "1px solid var(--ink-400)",
                  display: "flex", flexDirection: "column", gap: 6,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                    letterSpacing: "0.22em", textTransform: "uppercase", color: ind.accent,
                  }}>{brandName}</span>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500,
                    letterSpacing: "-0.005em", color: "var(--fg-1)", lineHeight: 1.35,
                  }}>{p.line}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- FAQ ---------- */
const IndustryFaqs = ({ ind }) => {
  const faqs = (ind.faqs || []).filter(f => f && f.q && f.a);
  const [open, setOpen] = React.useState(0);
  if (faqs.length === 0) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--paper-000)", color: "var(--fg-1-inv)",
      borderTop: "1px solid var(--paper-200)",
    }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
              textTransform: "uppercase", color: ind.accent,
            }}>{">> "}{ind.short.toUpperCase()} · FAQ</span>
            <h2 style={{
              marginTop: 14,
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(38px, 4.6vw, 64px)",
              letterSpacing: "-0.03em", lineHeight: 0.96,
            }}>
              The questions<br/>
              <span style={{ fontStyle: "italic", color: ind.accent }}>buyers ask first.</span>
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q + i} style={{
                  borderTop: i === 0 ? "1px solid var(--paper-200)" : "none",
                  borderBottom: "1px solid var(--paper-200)",
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: "100%", padding: "24px 0", background: "none", border: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer", textAlign: "left", color: "inherit",
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19,
                    letterSpacing: "-0.015em", gap: 24,
                  }}>
                    <span style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.14em",
                        color: ind.accent,
                      }}>{String(i + 1).padStart(2, "0")}</span>
                      {f.q}
                    </span>
                    <span style={{
                      color: ind.accent, fontSize: 22, flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 200ms",
                    }}>+</span>
                  </button>
                  {isOpen && (
                    <p style={{
                      paddingBottom: 24, paddingLeft: 36,
                      fontSize: 15.5, lineHeight: 1.65,
                      color: "var(--fg-2-inv)", margin: 0, maxWidth: 720,
                    }}>{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- CTA ---------- */
const IndustryCta = ({ ind }) => {
  const cta = ind.cta || {};
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "120px 0", background: "var(--ink-000)",
      color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "transparent",
        pointerEvents: "none",
      }}/>
      <div style={{
        maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative",
        display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "center",
      }}>
        <div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: ind.accent,
          }}>{">> "}READY WHEN YOU ARE</span>
          <h2 style={{
            marginTop: 18,
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(40px, 5.5vw, 80px)",
            letterSpacing: "-0.04em", lineHeight: 0.95,
            textWrap: "balance",
          }}>
            {cta.heading || `Brief us on a ${ind.short.toLowerCase()} program.`}
          </h2>
          <p style={{
            marginTop: 22, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)",
            maxWidth: 580,
          }}>{cta.body || "We'll come back with crew, compliance, and a quote inside 48 hours."}</p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={cta.primaryHref || "https://www.igniteproductions.co/contact"} style={{
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
              padding: "16px 24px", borderRadius: 10,
              background: ind.accent, color: "#0A0B0D",
              boxShadow: `0 0 0 1px ${ind.accent}66, 0 8px 32px ${ind.accent}3a`,
              display: "inline-flex", alignItems: "center", gap: 10,
              textDecoration: "none",
            }}>
              {cta.primaryLabel || "Start a brief"}
              <span style={{ fontFamily: "var(--font-mono)" }}>→</span>
            </a>
            <a href="industries.html" style={{
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
              padding: "16px 22px", borderRadius: 10,
              background: "transparent", color: "var(--fg-1)",
              border: "1px solid var(--ink-400)",
              display: "inline-flex", alignItems: "center", gap: 10,
              textDecoration: "none",
            }}>
              All industries
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--fg-3)" }}>→</span>
            </a>
          </div>
        </div>
        <div data-ind-anim style={{
          textAlign: "right",
          fontFamily: "var(--font-stencil)",
          color: "var(--ink-300)",
          fontSize: "clamp(72px, 11vw, 180px)",
          lineHeight: 0.85, letterSpacing: "-0.02em",
          textTransform: "uppercase",
          
          opacity: 0.9, userSelect: "none",
        }}>
          {(ind.short || ind.name).toUpperCase().split(" ").join("\u00A0")}.
        </div>
      </div>
    </section>
  );
};

/* ---------- PLAYBOOK ---------- */
const IndustryPlaybook = ({ ind }) => {
  const steps = ind.playbook || [];
  if (steps.length === 0) return null;
  return (
    <section style={{
      padding: "110px 0 100px", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)", position: "relative", overflow: "hidden",
    }}>
      {/* Ambient accent glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      {/* Stencil ghost word */}
      <div aria-hidden="true" style={{
        position: "absolute", right: -40, bottom: -80,
        fontFamily: "var(--font-stencil)",
        fontSize: "clamp(180px, 26vw, 360px)",
        lineHeight: 0.85, letterSpacing: "-0.04em",
        color: `${ind.accent}0a`,
        textTransform: "uppercase", pointerEvents: "none", userSelect: "none",
      }}>PLAYBOOK</div>

      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div className="ind-rise" style={{ marginBottom: 48 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 14px", borderRadius: 999,
            background: `${ind.accent}1c`, border: `1px solid ${ind.accent}55`,
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.22em", color: ind.accent, textTransform: "uppercase",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: 999, background: ind.accent,
              
              animation: "ind-blink 2.4s ease-out infinite",
            }}/>
            HOW THE {ind.short.toUpperCase()} PLAYBOOK RUNS
          </span>
          <h2 style={{
            marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(32px, 4.2vw, 62px)",
            letterSpacing: "-0.035em", lineHeight: 0.94,
            whiteSpace: "nowrap",
          }}>
            From brief to <span style={{
              fontStyle: "italic", color: ind.accent,
              
            }}>boots on the ground.</span>
          </h2>
        </div>

        {/* Connecting dotted spine */}
        <div style={{ position: "relative" }}>
          <div aria-hidden="true" style={{
            position: "absolute", left: "calc(100%/8)", right: "calc(100%/8)", top: 56,
            height: 2,
            backgroundImage: `linear-gradient(90deg, ${ind.accent}88 0%, ${ind.accent}88 50%, transparent 50%, transparent 100%)`,
            backgroundSize: "14px 2px",
            zIndex: 0,
          }}/>
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: 18,
            position: "relative",
          }}>
            {steps.map((s, i) => (
              <div key={s.stage + i} className="ind-rise" style={{
                position: "relative",
                transitionDelay: (i * 90) + "ms",
              }}>
                {/* Number badge — bridges the spine */}
                <div style={{
                  position: "relative", zIndex: 2,
                  width: 64, height: 64, borderRadius: 999,
                  background: `linear-gradient(180deg, ${ind.accent}, ${ind.accent}cc)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 18px",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28,
                  color: "#0A0B0D", letterSpacing: "-0.02em",
                  boxShadow: `0 0 0 6px var(--ink-000), 0 0 0 7px ${ind.accent}55`,
                }}>{String(i + 1).padStart(2, "0")}</div>

                <div style={{
                  padding: "30px 24px 26px",
                  background: "linear-gradient(180deg, var(--ink-100), rgba(10,11,13,0.92))",
                  border: "1px solid var(--ink-400)",
                  borderRadius: 14,
                  position: "relative",
                  display: "flex", flexDirection: "column", gap: 12,
                  minHeight: 240, overflow: "hidden",
                  transition: "transform 200ms, border-color 200ms, box-shadow 200ms",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = ind.accent;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "var(--ink-400)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Gradient ribbon top */}
                  <div aria-hidden="true" style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${ind.accent} 0%, ${ind.accent}88 50%, transparent 100%)`,
                  }}/>
                  {/* Ghost step number */}
                  <div aria-hidden="true" style={{
                    position: "absolute", right: -10, bottom: -30,
                    fontFamily: "var(--font-stencil)",
                    fontSize: 120, lineHeight: 0.85, letterSpacing: "-0.04em",
                    color: `${ind.accent}10`, textTransform: "uppercase",
                    pointerEvents: "none", userSelect: "none",
                  }}>{String(i + 1).padStart(2, "0")}</div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.22em", color: ind.accent, textTransform: "uppercase",
                    }}>{s.stage}</span>
                    {s.time && (
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em",
                        textTransform: "uppercase", color: "var(--fg-3)",
                        padding: "4px 8px", borderRadius: 4,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--ink-400)",
                      }}>{s.time}</span>
                    )}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21,
                    letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--fg-1)",
                    position: "relative", zIndex: 1,
                  }}>{s.title}</h3>
                  <p style={{
                    fontSize: 14.5, lineHeight: 1.55, color: "var(--fg-2)", margin: 0,
                    position: "relative", zIndex: 1,
                  }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- SPARK CALLOUT — uses real Spark page branding ---------- */
const IndustrySparkCallout = ({ ind }) => {
  const s = ind.sparkAngle;
  if (!s) return null;
  return (
    <section style={{
      padding: "120px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
      position: "relative", overflow: "hidden",
    }}>
      <style>{`
        @keyframes spk-pulse-dot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }
        @keyframes spk-glow { 0%,100% { box-shadow: 0 0 0 0 rgba(214,243,95,0.0); } 50% { box-shadow: 0 0 40px 8px rgba(214,243,95,0.22); } }
        @keyframes spk-scan { 0% { transform: translateY(-100%); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes spk-bar-rise { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .spk-bar { transform-origin: bottom; animation: spk-bar-rise 700ms cubic-bezier(0.2,0.7,0.2,1) both; }
        @media (prefers-reduced-motion: reduce) { .spk-anim, .spk-anim * { animation: none !important; } }
      `}</style>
      {/* Spark ambient halo */}
      <div aria-hidden="true" className="spk-anim" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "transparent",
      }}/>
      <div aria-hidden="true" className="spk-anim" style={{
        position: "absolute", left: 0, right: 0, top: 0, height: 2,
        background: "linear-gradient(90deg, transparent, rgba(214,243,95,0.6), transparent)",
        animation: "spk-scan 6s linear infinite",
      }}/>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 80, alignItems: "center" }}>
          <div>
            {/* Spark lockup — real wordmark from spark page */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, flexWrap: "wrap" }}>
              <img
                src={(window.__resources?.r_assets_spark_logo_full_png) || "../assets/spark-logo-full.png"}
                alt="Spark by Ignite"
                style={{ height: 36, width: "auto", display: "inline-block", verticalAlign: "middle" }} loading="lazy" decoding="async"
              />
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 12px", borderRadius: 999,
                background: "rgba(214,243,95,0.1)", border: "1px solid rgba(214,243,95,0.3)",
              }}>
                <span className="spk-anim" style={{
                  width: 8, height: 8, borderRadius: 999, background: "var(--spark-500)",
                  
                  animation: "spk-pulse-dot 1.6s infinite",
                }}/>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                  color: "var(--spark-500)", textTransform: "uppercase", fontWeight: 600,
                }}>● LIVE · {ind.short.toUpperCase()}</span>
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.94,
              maxWidth: 720, textWrap: "balance",
            }}>
              <span style={{ color: "var(--spark-500)", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.5em", verticalAlign: "0.28em", marginRight: 12 }}>&lt;</span>
              {s.headline}<span style={{ color: "var(--spark-500)" }}>.</span>
              <span style={{ color: "var(--spark-500)", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.5em", verticalAlign: "0.28em", marginLeft: 12 }}>&gt;</span>
            </h2>
            <p style={{
              marginTop: 22, fontSize: 19, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 600,
            }}>{s.lede}</p>
            <ul style={{
              marginTop: 26, padding: 0, listStyle: "none",
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              {(s.points || []).map((pt, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "baseline", gap: 14,
                  fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--fg-1)",
                  paddingLeft: 0,
                }}>
                  <span style={{ color: "var(--spark-500)", flexShrink: 0, fontSize: 14 }}>{">>"}</span>
                  <span style={{ lineHeight: 1.55, letterSpacing: "0.02em" }}>{pt}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="spark.html" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16,
                padding: "16px 26px", borderRadius: 999,
                background: "var(--spark-500)", color: "#0A0B0D",
                boxShadow: "0 0 0 1px rgba(214, 243, 95, 0.2), 0 8px 32px rgba(214,243,95,0.28)",
                textDecoration: "none",
              }}>
                Tour Spark <span>→</span>
              </a>
              <a href="https://www.igniteproductions.co/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16,
                padding: "16px 24px", borderRadius: 999,
                background: "transparent", color: "var(--fg-1)",
                border: "1px solid var(--ink-400)", textDecoration: "none",
              }}>Get a staffing quote</a>
            </div>
          </div>

          {/* Spark dashboard mock — matches spark page chrome */}
          <div className="spk-anim" style={{
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
                spark.ignite / {ind.slug}
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                color: "var(--spark-500)", textTransform: "uppercase",
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: 999, background: "var(--spark-500)",
                  
                  animation: "spk-pulse-dot 1.6s infinite",
                }}/>
                LIVE
              </span>
            </div>
            <div style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--spark-500)", textTransform: "uppercase" }}>{">> "}{ind.short.toUpperCase()} · LIVE OPS</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>LAST 30 MIN</span>
              </div>
              {(s.points || []).slice(0, 4).map((pt, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center",
                  padding: "12px 14px",
                  background: i === 0 ? "rgba(214,243,95,0.08)" : "transparent",
                  border: "1px solid " + (i === 0 ? "rgba(214,243,95,0.25)" : "transparent"),
                  borderRadius: 8,
                  marginBottom: 4,
                }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: 999,
                    background: i === 0 ? "var(--spark-500)" : "var(--fg-3)",
                    
                    animation: i === 0 ? "spk-pulse-dot 1.6s infinite" : "none",
                  }}/>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
                    color: "var(--fg-1)", letterSpacing: "-0.005em", lineHeight: 1.4,
                  }}>{pt}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                    color: i === 0 ? "var(--spark-500)" : "var(--fg-3)", textTransform: "uppercase",
                  }}>{i === 0 ? "tracking" : "ready"}</span>
                </div>
              ))}
              {/* Mini bar chart — same vocab as spark page */}
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--ink-400)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase" }}>{">> "}TODAY · BY HOUR</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--spark-500)", textTransform: "uppercase" }}>↑ +14%</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 56 }}>
                  {[38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100].map((h, i) => (
                    <div key={i} className="spk-bar" style={{
                      flex: 1, height: h + "%",
                      background: "linear-gradient(to top, var(--spark-600), var(--spark-500))",
                      borderRadius: "3px 3px 0 0",
                      animationDelay: (i * 40) + "ms",
                    }}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- RELATED MARKETS + SERVICES ---------- */
const IndustryRelated = ({ ind }) => {
  const markets = (ind.relatedMarkets || []).map(slug => (window.MARKETS_BY_SLUG || {})[slug]).filter(Boolean);
  const services = ind.relatedServices || [];
  if (markets.length === 0 && services.length === 0) return null;
  return (
    <section style={{ padding: "100px 0", background: "var(--ink-000)", borderTop: "1px solid var(--ink-400)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: markets.length && services.length ? "1fr 1fr" : "1fr",
          gap: 48,
        }}>
          {services.length > 0 && (
            <div>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                textTransform: "uppercase", color: ind.accent,
              }}>{">> "}MOST-BOOKED SERVICES FOR {ind.short.toUpperCase()}</span>
              <h3 style={{
                marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.025em", lineHeight: 1,
              }}>
                The lanes <span style={{ fontStyle: "italic", color: ind.accent }}>buyers</span> book here.
              </h3>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {services.map(s => (
                  <a key={s.slug} href={"services-" + s.slug + ".html"} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "12px 16px",
                    background: "var(--ink-100)",
                    border: "1px solid var(--ink-400)",
                    borderRadius: 999,
                    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500,
                    color: "var(--fg-1)", textDecoration: "none",
                    letterSpacing: "-0.005em",
                    transition: "border-color 160ms, background 160ms, color 160ms",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = ind.accent; e.currentTarget.style.background = ind.accent + "1c"; e.currentTarget.style.color = ind.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--ink-400)"; e.currentTarget.style.background = "var(--ink-100)"; e.currentTarget.style.color = "var(--fg-1)"; }}
                  >
                    {s.label}
                    <span style={{ fontSize: 11, opacity: 0.7 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {markets.length > 0 && (
            <div>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                textTransform: "uppercase", color: ind.accent,
              }}>{">> "}{ind.short.toUpperCase()} MARKETS WE RUN MOST</span>
              <h3 style={{
                marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.025em", lineHeight: 1,
              }}>
                Where the <span style={{ fontStyle: "italic", color: ind.accent }}>{ind.short.toLowerCase()}</span> programs happen.
              </h3>
              <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {markets.map(m => {
                  const href = (window.CITY_URL ? window.CITY_URL(m.slug) : "/cities/" + m.slug);
                  return (
                    <a key={m.slug} href={href} style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "10px 14px",
                      background: "var(--ink-200)",
                      border: "1px solid var(--ink-400)",
                      borderRadius: 999,
                      fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em",
                      color: "var(--fg-1)", textDecoration: "none",
                      transition: "border-color 160ms, background 160ms, color 160ms",
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = ind.accent; e.currentTarget.style.background = ind.accent; e.currentTarget.style.color = "#0A0B0D"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--ink-400)"; e.currentTarget.style.background = "var(--ink-200)"; e.currentTarget.style.color = "var(--fg-1)"; }}
                    >
                      {m.name}
                      <span style={{ fontSize: 10, opacity: 0.65 }}>/ {m.state}</span>
                      <span style={{ fontSize: 10, color: ind.accent }}>↗</span>
                    </a>
                  );
                })}
              </div>
              <a href="markets.html" style={{
                marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                textTransform: "uppercase", color: ind.accent, textDecoration: "none",
              }}>See all markets <span>↗</span></a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ---------- LOGO STRIP — full home page client logos ---------- */
const IndustryLogoStrip = ({ ind }) => {
  const logos = window.BRAND_LOGOS || {};
  // Show ALL client logos, not just industry-matched (matches home page treatment)
  const all = Object.values(logos);
  if (all.length === 0) return null;
  // Duplicate for seamless marquee
  const row = [...all, ...all];
  return (
    <section style={{
      padding: "60px 0 70px",
      background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)",
      borderBottom: "1px solid var(--ink-400)",
      overflow: "hidden", position: "relative",
    }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px 28px" }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: ind.accent,
        }}>{">> "}BRANDS WE'VE STAFFED</span>
      </div>
      <style>{`
        .ind-logo-row { display: flex; gap: 88px; align-items: center; animation: ind-marquee 42s linear infinite; width: max-content; padding: 0 32px; }
        .ind-logo-row:hover { animation-play-state: paused; }
        .ind-logo-row img { max-height: 52px; max-width: 180px; width: auto; object-fit: contain; filter: brightness(0) invert(1) opacity(0.55); transition: filter 200ms, opacity 200ms, transform 200ms; flex-shrink: 0; }
        .ind-logo-row img:hover { filter: brightness(0) invert(1) opacity(1); transform: scale(1.08); }
      `}</style>
      <div style={{
        maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}>
        <div className="ind-logo-row">
          {row.map((b, i) => (
            <img key={i} src={b.url} alt={b.name} loading="lazy" decoding="async"/>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Scroll-triggered reveal — observes .ind-rise elements ---------- */
const useIndScrollReveal = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".ind-rise").forEach(el => el.classList.add("in"));
      return;
    }
    const els = document.querySelectorAll(".ind-rise");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/* ---------- COMPOSED ---------- */
const IndustrySection = ({ ind }) => {
  useIndScrollReveal();
  if (!ind || !ind.name) return null;
  return (
    <>
      <IndustryHero ind={ind}/>
      <IndustryLogoStrip ind={ind}/>
      <IndustryActivations ind={ind}/>
      <IndustryPlaybook ind={ind}/>
      <IndustryCompliance ind={ind}/>
      <IndustryProof ind={ind}/>
      <IndustrySparkCallout ind={ind}/>
      <IndustryRelated ind={ind}/>
      {window.RelatedCases ? React.createElement(window.RelatedCases,{ctx:"industry",slug:ind.slug}) : null}
      <IndustryFaqs ind={ind}/>
      <IndustryCta ind={ind}/>
    </>
  );
};

Object.assign(window, {
  IndustrySection,
  IndustryHero, IndustryLogoStrip, IndustryActivations, IndustryPlaybook, IndustryCompliance,
  IndustryProof, IndustrySparkCallout, IndustryRelated, IndustryFaqs, IndustryCta,
});
