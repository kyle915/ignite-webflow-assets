/* Marquee of REAL brand logos — pulled from the live site */
const IG_ASSET = (n) => (window.__resources && window.__resources["r_assets_"+n.replace(/[^a-z0-9]/gi,"_")]) || ((location.pathname.includes("/pages/") ? "../assets/" : "assets/") + n);
const CLIENT_LOGOS = [
  { name: "OpenAI",         url: IG_ASSET("logo-openai-mark.png"), ink: true, maxH: 26, maxW: 120 },
  { name: "Claude",         url: IG_ASSET("logo-claude.png"), ink: true, maxH: 24, maxW: 120 },
  { name: "Liquid Death",   url: (window.__resources?.r_6882f25fd226513954e724e2_liquid_death_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp") },
  { name: "White Claw",     url: (window.__resources?.r_688c1b129ea08467c1137c5d_white_claw_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp") },
  { name: "Mas+ Messi",     url: (window.__resources?.r_688c1c02300cc1480ff080dc_mas_messi_logo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1c02300cc1480ff080dc_mas-messi-logo.webp") },
  { name: "Luckin Coffee", url: IG_ASSET("logo-luckin-coffee.png"), ink: true, maxH: 48, maxW: 80 },
  { name: "Grubhub",        url: IG_ASSET("logo-grubhub.png"), ink: true, maxH: 24, maxW: 130 },
  { name: "Torch THC Beverages", url: IG_ASSET("logo-torch-thc.png"), ink: true, maxH: 34, maxW: 110 },
  { name: "Brew Dr. Kombucha", url: IG_ASSET("logo-brew-dr.png"), ink: true, maxH: 32, maxW: 110 },
  { name: "Total Wireless", url: (window.__resources?.r_688c1bb2f2c798b4cb850d2e_total_wireless_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp") },
  { name: "Dude Wipes",     url: (window.__resources?.r_688c3839708ed185c2de5ba9_dude_wipes || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp") },
  { name: "Krispy Krunchy", url: (window.__resources?.r_688c1b20a33960875f5d7bc0_krispy_krunchy_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b20a33960875f5d7bc0_krispy-krunchy-logo.webp") },
  { name: "Marc Anthony",   url: (window.__resources?.r_688c378239e6dc2ebedde728_marc_anthony_lo || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp") },
  { name: "Breakaway",      url: IG_ASSET("logo-breakaway.png"), ink: true, maxH: 30, maxW: 110 },
  { name: "BeGoat",         url: IG_ASSET("logo-begoat.png"), ink: true, maxH: 34, maxW: 110 },
  { name: "Drekker Brewing Co.", url: IG_ASSET("logo-drekker.png"), ink: true, maxH: 52, maxW: 70 },
  { name: "PressReader", url: IG_ASSET("logo-pressreader.png"), ink: true, maxH: 28, maxW: 130 },
  { name: "Feel Free",      url: IG_ASSET("logo-feel-free.png"), ink: true, maxH: 34, maxW: 130 },
  { name: "PIVOT Performance Energy", url: IG_ASSET("logo-pivot.png"), ink: true, maxH: 30, maxW: 120 },
  { name: "Smalls Sliders", url: (window.__resources?.r_688c377975c7a23684962d73_smalls_sliders || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c377975c7a23684962d73_smalls-sliders.webp") },
  { name: "Glendonough",    url: (window.__resources?.r_688c3841bacf82489917b2b9_glendonough_dis || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3841bacf82489917b2b9_glendonough-distillery.webp") },
  { name: "Stone House Bread", url: IG_ASSET("logo-stone-house-bread.png"), ink: true, maxH: 52, maxW: 52 },
  { name: "Circle House Coffee", url: IG_ASSET("logo-circle-house-coffee.png"), ink: true, maxH: 40, maxW: 110 },
  { name: "Free Rein Coffee", url: IG_ASSET("logo-free-rein.png"), ink: true, maxH: 36, maxW: 120 },
];

const ClientMarquee = () => (
  <section className="paper" style={{ padding: "56px 0", borderTop: "1px solid var(--paper-200)", borderBottom: "1px solid var(--paper-200)", overflow: "hidden", position: "relative" }}>
    <Container>
      <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 32 }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--fg-2-inv)",
        }}>★ TRUSTED BY</span>
        <div style={{ flex: 1, height: 1, background: "var(--paper-200)" }}/>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--fg-3-inv)",
        }}>+ 200 BRANDS SINCE 2018</span>
      </div>
    </Container>
    <div style={{ display: "flex", width: "max-content", animation: "marquee 50s linear infinite", alignItems: "center" }}>
      {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
        <div key={i} style={{
          padding: "0 56px", display: "inline-flex", alignItems: "center",
          height: 88,
        }}>
          <img src={c.url} alt={c.name} style={{
            maxHeight: c.maxH || 64, maxWidth: c.maxW || 200, width: "auto", objectFit: "contain",
            filter: c.ink ? "grayscale(1)" : "grayscale(1) brightness(0.25) contrast(1.2)",
            opacity: c.ink ? 0.62 : 0.85,
          }} loading="lazy" decoding="async"/>
        </div>
      ))}
    </div>
  </section>
);

/* Two engines — Fractional + BA Staffing / Experiential */
const TwoEngines = () => (
  <section className="paper" style={{ padding: "120px 0", position: "relative" }}>
    <Container>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, marginBottom: 60, flexWrap: "wrap" }}>
        <div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--ignite-500)",
          }}>{">>"} TWO WAYS TO WORK WITH IGNITE</span>
          <h2 style={{
            marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(44px, 6vw, 88px)", letterSpacing: "-0.03em", lineHeight: 0.98,
            color: "var(--fg-1-inv)", maxWidth: 900,
          }}>
            Always-on team or <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>big moment?</span>
          </h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-2-inv)", maxWidth: 380 }}>
          Most clients use both, a fractional team running strategy, plus project-based staffing when a national activation hits. Either way, Spark is included at no additional cost.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Fractional */}
        <a href="pages/fractional.html" style={{
          display: "block", padding: 40, borderRadius: 24,
          background: "var(--ink-000)", color: "var(--fg-1)", position: "relative", overflow: "hidden",
          minHeight: 520, transition: "transform 240ms var(--ease-out)",
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "var(--font-stencil)", fontSize: 18, letterSpacing: "0.04em",
                  color: "var(--ignite-500)", padding: "6px 12px",
                  border: "1.5px solid var(--ignite-500)", borderRadius: 6,
                }}>01 · FRACTIONAL</span>
                <OpsLine>* ONGOING · STRATEGIC · EMBEDDED</OpsLine>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1, color: "var(--fg-1)",
              }}>
                Your embedded sales<br/>+ marketing engine.
              </h3>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 440 }}>
                Dedicated fractional team plugs into your brand to run retail strategy, field execution, and activations, without the full-time overhead.
              </p>
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 8 }}>
                {["Advisory, strategic counsel", "Embedded, fractional VP", "Leadership, turnkey engagement"].map(t => (
                  <div key={t} style={{ display: "flex", gap: 10, alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.02em", color: "var(--fg-2)" }}>
                    <span style={{ color: "var(--ignite-500)" }}>→</span> {t}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)" }}>
                BEST FOR · brands scaling into retail, launching a new line, or post-Series A
              </div>
            </div>
            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" }}>
              EXPLORE FRACTIONAL →
            </div>
          </div>
        </a>

        {/* Staffing & Experiential */}
        <a href="pages/services.html" style={{
          display: "block", padding: 40, borderRadius: 24,
          background: "var(--ink-000)", color: "var(--fg-1)", position: "relative", overflow: "hidden",
          minHeight: 520, transition: "transform 240ms var(--ease-out)",
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "var(--font-stencil)", fontSize: 18, letterSpacing: "0.04em",
                  color: "#FFB627", padding: "6px 12px",
                  border: "1.5px solid #FFB627", borderRadius: 6,
                }}>02 · ACTIVATION + STAFFING</span>
                <OpsLine>* PROJECT · NATIONWIDE · ON-DEMAND</OpsLine>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1, color: "var(--fg-1)",
              }}>
                Boots on the ground.<br/>Anywhere. On demand.
              </h3>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 440 }}>
                257,000+ vetted brand ambassadors in all 50 states. Full experiential production, sampling, mobile tours, ad trucks, fabricated builds, festival activations, scaled to any footprint.
              </p>
              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                {[["257K+", "ambassadors"], ["50", "states"], ["48hr", "turnaround"]].map(([a, b]) => (
                  <div key={a} style={{ padding: "10px 12px", background: "var(--ink-200)", borderRadius: 8, border: "1px solid var(--ink-400)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "#FFB627", letterSpacing: "-0.02em" }}>{a}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)" }}>{b}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)" }}>
                BEST FOR · national sampling tours, trade shows, festival activations, retail sell-in
              </div>
            </div>
            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFB627" }}>
              EXPLORE SERVICES →
            </div>
          </div>
        </a>
      </div>

      {/* Spark strip */}
      <a href="pages/spark.html" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap",
        marginTop: 20, padding: "22px 28px", borderRadius: 16,
        background: "var(--ink-100)", color: "var(--fg-1)",
        border: "1px solid var(--ink-400)",
        transition: "transform 200ms var(--ease-out)",
      }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 36, height: 36, borderRadius: 8,
            background: "rgba(214,243,95,0.15)", color: "var(--spark-500)",
            fontFamily: "var(--font-stencil)", fontSize: 16, letterSpacing: "0.04em",
            border: "1px solid rgba(214,243,95,0.35)",
          }}>✦</span>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--spark-500)" }}>
              ◉ INCLUDED WITH BOTH
            </div>
            <div style={{ marginTop: 4, fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--fg-1)" }}>
              Every engagement runs on <span style={{ fontStyle: "italic", color: "var(--spark-500)" }}>Spark</span>, live dashboards, GPS-verified check-ins, instant recaps. Zero extra cost.
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--spark-500)" }}>
          SEE THE PLATFORM →
        </div>
      </a>
    </Container>
  </section>
);

Object.assign(window, { ClientMarquee, TwoEngines });
