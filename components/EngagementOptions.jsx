/* global React */
/* ============================================================
   ENGAGEMENT SPECTRUM, Option 1, bolder rev.
   Full-bleed dark, dramatic stencil numerals, big type,
   color-flooded active tier. Matrix kept for reference.
   ============================================================ */

const SPECTRUM_TIERS = [
  {
    num: "01",
    tag: "CALL US IN",
    accent: "#FFB627",
    accentBg: "#FFB627",
    accentInk: "#1a1100",
    title: "Project.",
    depth: "SHALLOW · TACTICAL",
    sub: "One-off campaigns, staffing, single activations.",
    body: "Drop us into a specific moment, a festival weekend, a campus tour, a trade show booth, a sampling sprint. We handle the brief, scale to the footprint, and break it back down.",
    best: "FOR · single activations · trade shows · seasonal pushes",
    includes: ["Brand ambassadors", "Mobile tours", "Trade show staff", "Sampling programs"],
    cta: "Explore services",
    href: "pages/services.html",
  },
  {
    num: "02",
    tag: "PLUG US IN",
    accent: "var(--purple-500)",
    accentBg: "var(--purple-500)",
    accentInk: "#0b0905",
    prism: true,
    title: "Embedded.",
    depth: "MEDIUM · FUNCTIONAL",
    sub: "A discipline-as-a-service, sponsorships, sales, marketing, OR key accounts.",
    body: "Pick a function. We run it like in-house. Sponsorship ops without hiring a sponsorship team. Field sales without a sales VP. Brand marketing without the agency overhead. One discipline, fully managed.",
    best: "FOR · brands scaling one channel · post-Series-A teams · pre-IPO ops",
    includes: ["Sponsorship management", "Field sales programs", "Brand & marketing ops", "Retail strategy"],
    cta: "Explore fractional",
    href: "pages/fractional.html",
  },
  {
    num: "03",
    tag: "BUILD WITH US",
    accent: "#D6F35F",
    accentBg: "#D6F35F",
    accentInk: "#0a0a0a",
    title: "Leadership.",
    depth: "DEEP · FULL-STACK",
    sub: "Full retail engine. Sponsorships + sales + marketing + key accounts, run end-to-end.",
    body: "We become the team. Fractional leadership across every consumer-facing function, sponsorships, sales, marketing, activations. Strategy, execution, measurement. Reports into your CEO.",
    best: "FOR · emerging CPG · launching a line · DTC going retail",
    includes: ["Full fractional team", "Senior leadership", "Cross-functional ops", "Quarterly roadmaps"],
    cta: "Explore leadership",
    href: "pages/fractional.html",
  },
];

const EngagementSpectrum = () => {
  const [active, setActive] = React.useState(1);
  const t = SPECTRUM_TIERS[active];

  return (
    <section style={{
      background: "var(--ink-000)", color: "#fff",
      padding: "96px 0", position: "relative", overflow: "hidden",
    }}>
      {/* Background grid */}
      {/* Accent glow that follows active tier */}
      <div style={{
        position: "absolute", left: `${15 + active * 30}%`, top: "30%",
        width: 600, height: 600, borderRadius: 999,
        background: "transparent",
        filter: "blur(60px)", transition: "left 600ms var(--ease-out)", pointerEvents: "none",
      }}/>

      <Container>
        <div style={{ position: "relative" }}>
          <OpsLine glow>{">> "}HOW YOU ENGAGE WITH IGNITE · 3 DEPTHS · ANY DISCIPLINE</OpsLine>
          <h2 style={{
            marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(56px, 8.5vw, 144px)", letterSpacing: "-0.045em", lineHeight: 0.88,
            color: "#fff", maxWidth: 1400,
          }}>
            Plug us in <span style={{ fontStyle: "italic", color: "var(--purple-500)" }}>deep</span>.<br/>
            Or call us in <span style={{ fontStyle: "italic", color: "#FFB627" }}>clutch</span>.
          </h2>
          <p style={{
            marginTop: 28, fontSize: 20, lineHeight: 1.5, color: "var(--fg-2)",
            maxWidth: 760, fontWeight: 400,
          }}>
            Sponsorships, sales, marketing, key accounts, activations, at any
            depth, in any combination. Same operators. Same Spark dashboard. Different scope.
          </p>

          {/* Discipline strip — bolder */}
          <div style={{
            marginTop: 48, padding: "24px 32px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.24em",
              textTransform: "uppercase", color: "var(--ignite-500)",
            }}>◉ DISCIPLINES COVERED</span>
            {["Sponsorships", "Sales", "Marketing", "Key Accounts / Retail", "Activations & Staffing"].map(d => (
              <span key={d} style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
                letterSpacing: "-0.015em", color: "#fff",
              }}>{d}</span>
            ))}
          </div>
        </div>

        {/* Active tier detail — selector + detail, all in one band */}
        <div style={{
          marginTop: 48, padding: "36px 40px", borderRadius: 24,
          background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          border: `2px solid ${t.accent === "var(--purple-500)" ? "rgba(77,67,187,0.4)" : t.accent === "#FFB627" ? "rgba(255,182,39,0.3)" : "rgba(214,243,95,0.3)"}`,
          display: "flex", flexDirection: "column", gap: 36,
          position: "relative", overflow: "hidden",
        }}>
          {/* Tier num watermark */}
          <div style={{
            position: "absolute", right: -40, bottom: -100,
            fontFamily: "var(--font-stencil)", fontSize: 480, lineHeight: 0.8,
            letterSpacing: "-0.04em",
            color: t.accent, opacity: 0.05,
            pointerEvents: "none",
          }}>{t.num}</div>

          {/* Tier selector */}
          <div style={{
            position: "relative",
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6,
          }}>
            {SPECTRUM_TIERS.map((tier, i) => {
              const isActive = active === i;
              const stars = "★".repeat(i + 1);
              return (
                <button key={tier.num} onClick={() => setActive(i)} style={{
                  padding: "18px 22px", textAlign: "left", cursor: "pointer",
                  background: isActive ? tier.accentBg : "rgba(255,255,255,0.04)",
                  border: isActive ? `2px solid ${tier.accentBg}` : "2px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  color: isActive ? tier.accentInk : "var(--fg-2)",
                  transition: "all 320ms var(--ease-out)",
                  position: "relative",
                  display: "flex", flexDirection: "column", gap: 14,
                  fontFamily: "inherit",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      fontSize: 22, letterSpacing: "0.12em",
                      color: isActive ? tier.accentInk : tier.accent,
                      opacity: isActive ? 1 : 0.75,
                      transition: "all 320ms",
                    }}>{stars}</span>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isActive ? "rgba(0,0,0,0.6)" : "var(--fg-3)",
                    }}>{tier.depth}</span>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-stencil)", fontSize: 13, letterSpacing: "0.08em",
                      color: isActive ? "rgba(0,0,0,0.55)" : tier.accent,
                      marginBottom: 6,
                    }}>{tier.tag}</div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.03em",
                      lineHeight: 0.95, fontStyle: "italic",
                    }}>{tier.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Two-column detail */}
          <div style={{
            position: "relative",
            display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 72,
          }}>
          <div style={{ position: "relative" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.24em",
              textTransform: "uppercase", color: t.accent, marginBottom: 24,
            }}>{">>"} TIER {t.num} · NOW VIEWING</div>
            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em",
              color: "#fff", margin: 0, textWrap: "balance",
            }}>{t.sub}</p>
            <p style={{
              marginTop: 32, fontSize: 18, lineHeight: 1.6, color: "var(--fg-2)",
              maxWidth: 580,
            }}>{t.body}</p>
            <div style={{
              marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.08)",
              fontFamily: "var(--font-mono)", fontSize: 12,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-3)",
            }}>{t.best}</div>
            <a href={t.href} style={{
              marginTop: 32, display: "inline-flex", alignItems: "center", gap: 14,
              padding: "18px 28px", borderRadius: 999,
              background: t.href.includes("fractional") ? "var(--fractional-prism)" : t.accentBg,
              color: t.href.includes("fractional") ? "#0b0905" : t.accentInk,
              fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.22em",
              textTransform: "uppercase", textDecoration: "none", fontWeight: 700,
            }}>{t.cta} <span style={{ fontSize: 16 }}>→</span></a>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.24em",
              textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 24,
            }}>* WHAT'S INCLUDED</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {t.includes.map(inc => (
                <div key={inc} style={{
                  padding: "20px 24px", background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12,
                  fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600,
                  letterSpacing: "-0.01em", color: "#fff",
                  display: "flex", alignItems: "center", gap: 16,
                }}>
                  <span style={{ color: t.accent, fontSize: 20 }}>▸</span> {inc}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

Object.assign(window, { EngagementSpectrum });
