/* Homepage — Markets + Industries teaser. Surfaces the 120 city pages and
   13 industry pages that previously had zero path from the homepage.
   Pure internal-linking authority + buyer-journey entry points. */

const HOME_MARKET_CHIPS = [
  ["New York", "new-york"], ["Los Angeles", "los-angeles"], ["Chicago", "chicago"],
  ["Dallas", "dallas"], ["Miami", "miami"], ["Atlanta", "atlanta"], ["Austin", "austin"],
  ["Las Vegas", "las-vegas"], ["Phoenix", "phoenix"], ["Denver", "denver"],
  ["Nashville", "nashville"], ["Seattle", "seattle"],
];

const HOME_INDUSTRY_CHIPS = [
  ["CPG Beverage", "cpg-beverage"], ["Food & Snack", "cpg-food-snack"], ["Alcohol & Spirits", "alcohol-spirits"],
  ["Tech & SaaS", "tech-saas"], ["Sports & Entertainment", "sports-entertainment"],
  ["Health & Wellness", "health-wellness"], ["Cannabis", "cannabis"], ["QSR & Restaurant", "qsr-restaurant"],
];

const TeaserCol = ({ accent, eyebrow, title, italic, body, chips, chipBase, hubLabel, hubHref, foot }) => (
  <div style={{
    position: "relative", padding: 40, borderRadius: 18, overflow: "hidden",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012))",
    border: "1px solid var(--ink-400)",
  }}>
    <div aria-hidden="true" style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 3,
      background: `linear-gradient(90deg, ${accent}, transparent 78%)`,
    }}/>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: accent }}>
      {eyebrow}
    </span>
    <h3 style={{
      marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
      fontSize: "clamp(30px, 3.2vw, 46px)", letterSpacing: "-0.03em", lineHeight: 0.98, color: "var(--fg-1)",
    }}>
      {title} <span style={{ fontStyle: "italic", color: accent }}>{italic}</span>
    </h3>
    <p style={{ marginTop: 16, fontSize: 15.5, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 460 }}>{body}</p>
    <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
      {chips.map(([label, slug]) => (
        <a key={slug} href={chipBase + slug} style={{
          padding: "7px 13px", borderRadius: 999, textDecoration: "none",
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "rgba(255,255,255,0.85)",
          transition: "background 160ms, border-color 160ms",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = accent + "1c"; e.currentTarget.style.borderColor = accent + "88"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
        >{label}</a>
      ))}
    </div>
    <a href={hubHref} style={{
      marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8,
      fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
      color: accent, textDecoration: "none",
    }}>{hubLabel} <span>→</span></a>
    <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-3)" }}>{foot}</div>
  </div>
);

const HomeReach = () => (
  <section style={{
    padding: "120px 0", background: "var(--ink-000)", color: "var(--fg-1)",
    position: "relative", overflow: "hidden", borderTop: "1px solid var(--ink-400)",
  }}>
    <Container style={{ position: "relative" }}>
      <div style={{ maxWidth: 820, marginBottom: 56 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" }}>
          {">>"} REACH // WHERE + WHO
        </span>
        <h2 style={{
          marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(40px, 5.4vw, 80px)", letterSpacing: "-0.035em", lineHeight: 0.95,
        }}>
          Any market.<br/><span style={{ fontStyle: "italic", color: "#FFB627" }}>Your category.</span>
        </h2>
        <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.5, color: "var(--fg-2)", maxWidth: 640 }}>
          200+ named metros and a category playbook for every vertical we run. Find your city or your industry, the team and the SOPs are already there.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="home-reach-grid">
        <TeaserCol
          accent="var(--ignite-500)"
          eyebrow={">> MARKETS // 50 STATES"}
          title="Boots in" italic="200+ metros."
          body="From New York to Las Vegas, a vetted local crew and the SOPs to run your activation are already on the ground. Browse by market."
          chips={HOME_MARKET_CHIPS}
          chipBase="pages/city.html?c="
          hubLabel="All markets"
          hubHref="pages/markets.html"
          foot="120+ city pages · 50 states + DC"
        />
        <TeaserCol
          accent="#FFB627"
          eyebrow={">> INDUSTRIES // 13 VERTICALS"}
          title="A playbook for" italic="your category."
          body="Beverage, spirits, tech, sports, cannabis, QSR and more, each with category-specific compliance, staffing, and proof. Browse by vertical."
          chips={HOME_INDUSTRY_CHIPS}
          chipBase="pages/industry.html?i="
          hubLabel="All industries"
          hubHref="pages/industries.html"
          foot="13 industry pages · CPG-built"
        />
      </div>
    </Container>
    <style>{`@media (max-width: 820px){ .home-reach-grid{ grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

Object.assign(window, { HomeReach });
