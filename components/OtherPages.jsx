/* Fractional, Work, About, Contact page components */
const { useState: fpState } = React;

/* ---------- FRACTIONAL ---------- */
const FractionalHero = () => (
  <section style={{ position: "relative", background: "var(--ink-000)", padding: "140px 0 100px", overflow: "hidden" }}>
    <img alt="" src={(window.__resources?.r_assets_chrome_flow_vertical_png || "assets/chrome-flow-vertical.png")} style={{ position: "absolute", right: "-5%", top: "10%", width: 380, opacity: 0.22, mixBlendMode: "screen" }} loading="lazy" decoding="async"/>
    <Container style={{ position: "relative" }}>
      <OpsLine>* CPG SALES + EXPERIENTIAL MARKETING</OpsLine>
      <h1 style={{ marginTop: 20, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(64px, 9vw, 140px)", letterSpacing: "-0.035em", lineHeight: 0.92, maxWidth: 1200 }}>
        Stop being your own<br/><span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>VP of Everything.</span>
      </h1>
      <p style={{ marginTop: 28, fontSize: 20, lineHeight: 1.5, color: "var(--fg-2)", maxWidth: 640 }}>
        Your fractional CPG Sales & Marketing team. Strategy, retail execution, and activations — without the full-time overhead. No more wearing every hat.
      </p>
      <div style={{ marginTop: 40, display: "flex", gap: 14 }}>
        <AccentBtn size="lg" onClick={() => location.href = "https://www.igniteproductions.co/contact"}>Book a strategy call</AccentBtn>
        <GhostBtn size="lg">See how it works</GhostBtn>
      </div>
    </Container>
  </section>
);

const FractionalTiers = () => (
  <section id="tiers" className="paper" style={{ padding: "120px 0", borderTop: "1px solid var(--paper-200)" }}>
    <Container>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" }}>>> THREE TIERS</span>
      <h2 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--fg-1-inv)", maxWidth: 900 }}>
        Pick your level<br/>of <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>embedded.</span>
      </h2>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { t: "ADVISORY", tag: "Strategic counsel", d: "Weekly strategic sessions. Market intelligence. We advise; you execute.", feats: ["Weekly strategy calls", "Retail channel guidance", "Activation playbook", "Month-to-month after 3 mo"] },
          { t: "EMBEDDED", tag: "Fractional VP", d: "Fractional VP of Sales + Marketing. Your org chart has our name on it.", feats: ["Embedded team lead", "Retail + field execution", "Full reporting cadence", "Attends your team meetings"], highlight: true },
          { t: "LEADERSHIP", tag: "Turnkey engagement", d: "We run it. Outsourced sales and marketing leadership with P&L ownership.", feats: ["Full-stack exec team", "Revenue accountability", "Agency + activations bundled", "Quarterly business reviews"] },
        ].map((tier, i) => (
          <div key={tier.t} style={{
            padding: 36, borderRadius: 20, minHeight: 480,
            background: tier.highlight ? "var(--ink-000)" : "var(--paper-000)",
            color: tier.highlight ? "var(--fg-1)" : "var(--fg-1-inv)",
            border: "1px solid " + (tier.highlight ? "var(--ink-400)" : "var(--paper-200)"),
            position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            {tier.highlight && <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 10px", background: "var(--ignite-500)", color: "#fff", borderRadius: 999, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em" }}>MOST POPULAR</div>}
            <div>
              <div style={{ fontFamily: "var(--font-stencil)", fontSize: 16, letterSpacing: "0.08em", color: tier.highlight ? "#FFB627" : "var(--ignite-500)", marginBottom: 24 }}>{"0" + (i+1)} · {tier.t}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 14, textWrap: "balance" }}>{tier.tag}</div>
              <p style={{ marginTop: 4, fontSize: 15, lineHeight: 1.5, color: tier.highlight ? "var(--fg-2)" : "var(--fg-2-inv)" }}>{tier.d}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
                {tier.feats.map(f => <li key={f} style={{ fontSize: 14, display: "flex", gap: 8, color: tier.highlight ? "var(--fg-2)" : "var(--fg-2-inv)" }}><span style={{ color: tier.highlight ? "#FFB627" : "var(--ignite-500)" }}>→</span> {f}</li>)}
              </ul>
            </div>
            <div style={{ marginTop: 32 }}>
              <AccentBtn onClick={() => location.href = "https://www.igniteproductions.co/contact"} style={{ width: "100%", justifyContent: "center" }}>Get started</AccentBtn>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const FractionalProcess = () => (
  <section style={{ padding: "120px 0", background: "var(--ink-000)", color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)" }}>
    <Container>
      <OpsLine>>> HOW IT WORKS</OpsLine>
      <h2 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1 }}>
        From kickoff to<br/>shelves stocked in <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>30 days.</span>
      </h2>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {[
          ["01", "Strategy Call", "We learn your brand, your gaps, and your goals. No pitch deck — just an honest conversation."],
          ["02", "Scope + Retainer", "Custom retainer — Sales, Marketing, or both. Month-to-month after the first 3 months."],
          ["03", "We Execute. You Grow.", "Meetings get booked, shelves get stocked, activations get executed — you get your time back."],
        ].map(([n, t, d]) => (
          <div key={n} style={{ padding: 32, background: "var(--ink-100)", borderRadius: 16, border: "1px solid var(--ink-400)" }}>
            <div style={{ fontFamily: "var(--font-stencil)", fontSize: 48, color: "var(--ignite-500)", lineHeight: 1 }}>{n}</div>
            <h3 style={{ marginTop: 20, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22 }}>{t}</h3>
            <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)" }}>{d}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- WORK ---------- */
const WORK_CASES = [
  { slug: "liquid-death", brand: "LIQUID DEATH", tagline: "Murdering thirst, coast to coast.", category: "Brand Ambassador Program", stats: [["850+","Events"],["47","Markets"],["1.4M","Reached"]], img: (window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp") },
  { slug: "white-claw", brand: "WHITE CLAW", tagline: "Cracking the spirits launch code.", category: "National Sampling Rollout", stats: [], img: (window.__resources?.r_688d8a159dce27cfc5ed905c_1 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688d8a159dce27cfc5ed905c_1.jpg") },
  { slug: "mas", brand: "MAS+", tagline: "Street-level energy. Stadium-level reach.", category: "Street Sampling", stats: [["320","Events"],["180K","Samples"],["6","Stadiums"]], img: (window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png") },
  { slug: "dude-wipes", brand: "DUDE WIPES", tagline: "Everywhere guys hang out.", category: "Experiential Tour", stats: [["120","Events"],["85K","Samples"],["18","Markets"]], img: (window.__resources?.r_68968fb1a0824c0e0bb6223b_SMALLS94_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68968fb1a0824c0e0bb6223b_SMALLS94_11_15_2024_Brandy_Wilson_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_2.jpg") },
  { slug: "total-wireless", brand: "TOTAL WIRELESS", tagline: "Retail activation at scale.", category: "In-Store Demos", stats: [["240","Stores"],["22","Markets"],["15%","Lift"]], img: (window.__resources?.r_68962d00b2b16cc7bb7a21c8_TOTAL53_07_26_2 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962d00b2b16cc7bb7a21c8_TOTAL53_07_26_2025_Deborah_Camp_0feb1a50-ac63-c910-7335-bb5ff6c1b927_8.jpg") },
  { slug: "mark-anthony", brand: "MARK ANTHONY", tagline: "Sampling done with discipline.", category: "National Sampling", stats: [["450+","Events"],["32","Markets"],["210K","Samples"]], img: (window.__resources?.r_68962cb097c7a94d5a0ff101_MAB7_04_18_2025 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cb097c7a94d5a0ff101_MAB7_04_18_2025_Claire_Thornhill_59e801e1-deb8-c738-9d0e-289faaee2d6c_18.jpg") },
];

const WorkHero = () => (
  <section style={{ padding: "140px 0 80px", background: "var(--ink-000)", borderBottom: "1px solid var(--ink-400)" }}>
    <Container>
      <OpsLine>>> OUR WORK</OpsLine>
      <h1 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(64px, 9vw, 140px)", letterSpacing: "-0.035em", lineHeight: 0.92, maxWidth: 1300 }}>
        Brands that<br/><span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>actually moved</span> product.
      </h1>
      <p style={{ marginTop: 32, fontSize: 20, lineHeight: 1.5, color: "var(--fg-2)", maxWidth: 700 }}>
        Every program we run is measured in conversions, samples distributed, and markets activated — not impressions. Here's a selection.
      </p>
    </Container>
  </section>
);

const WorkGrid = () => (
  <section className="paper" style={{ padding: "80px 0 120px" }}>
    <Container>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
        {WORK_CASES.map((c, i) => (
          <a key={c.slug} id={c.slug} href="#" style={{
            position: "relative", display: "block", borderRadius: 20, overflow: "hidden", minHeight: 480, color: "#fff",
            transition: "transform 240ms var(--ease-out)",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = "scale(1)"; }}
          >
            <img src={c.img} alt={c.brand} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 600ms var(--ease-out)", filter: "brightness(0.7) saturate(1.1)" }} loading="lazy" decoding="async"/>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.425))" }}/>
            <div style={{ position: "relative", padding: 36, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", padding: "4px 8px", background: "rgba(255,255,255,0.1)", borderRadius: 4, backdropFilter: "blur(8px)" }}>* 0{i+1}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.8 }}>{c.category}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-stencil)", fontSize: 14, letterSpacing: "0.12em", color: "#FFB627", marginBottom: 14 }}>{c.brand}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 20 }}>{c.tagline}</h3>
                <div style={{ display: "flex", gap: 24 }}>
                  {(c.stats || []).map(([n, l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "#FFB627", letterSpacing: "-0.02em", lineHeight: 1 }}>{n}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.75, marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- ABOUT ---------- */
const AboutHero = () => (
  <section style={{ padding: "140px 0 80px", background: "var(--ink-000)", borderBottom: "1px solid var(--ink-400)" }}>
    <Container>
      <OpsLine>>> ABOUT IGNITE</OpsLine>
      <h1 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(64px, 9vw, 140px)", letterSpacing: "-0.035em", lineHeight: 0.92, maxWidth: 1400 }}>
        Veteran-owned.<br/><span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>CPG-built.</span>
      </h1>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--fg-2)" }}>
          Ignite was founded in 2018 by <b style={{ color: "var(--fg-1)" }}>Kyle Christiansen</b>, a 20+ year CPG marketing veteran with leadership stints at Red Bull and Showtime. The mission: bring the discipline of veteran-owned operations to an industry that desperately needed it.
        </p>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--fg-2)" }}>
          Eight years later, we're a nationwide network of <b style={{ color: "var(--fg-1)" }}>257,000+ brand ambassadors</b> running 5,000+ events executed for the brands that define culture — and the agency-run Spark platform has changed how clients see field marketing forever.
        </p>
      </div>
    </Container>
  </section>
);

const AboutStats = () => (
  <section id="impact" className="paper" style={{ padding: "120px 0" }}>
    <Container>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ignite-500)" }}>>> OUR IMPACT</span>
      <h2 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--fg-1-inv)", maxWidth: 900 }}>
        The numbers, in a word:<br/><span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>big.</span>
      </h2>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {[["257,000+", "Vetted ambassadors"], ["5,000+", "Activations per year"], ["200+", "Brands served"], ["50", "States covered"], ["2018", "Founded"], ["VETERAN", "Owned · VOSB"]].map(([n, l]) => (
          <div key={l} style={{ padding: 24, background: "var(--paper-000)", border: "1px solid var(--paper-200)", borderRadius: 14 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--fg-1-inv)" }}>{n}</div>
            <div style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3-inv)" }}>{l}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const AboutValues = () => (
  <section style={{ padding: "120px 0", background: "var(--ink-000)", color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)" }}>
    <Container>
      <OpsLine>>> WHAT WE STAND FOR</OpsLine>
      <h2 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1, maxWidth: 900 }}>
        Discipline, creativity,<br/><span style={{ fontStyle: "italic", color: "#FFB627" }}>and receipts.</span>
      </h2>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {[
          ["Show up ready", "We prep, brief, and rehearse. Ambassadors are trained on your brand — not reading a script off their phone."],
          ["Prove it, don't pitch it", "Every program is measured. Spark shows you what happened in real time. No post-event PDFs."],
          ["Move the product", "Awareness is a side effect. The goal is trial, conversion, and repeat purchase. We optimize for that."],
        ].map(([t, d]) => (
          <div key={t} style={{ padding: 32, background: "var(--ink-100)", borderRadius: 16, border: "1px solid var(--ink-400)" }}>
            <div style={{ color: "var(--ignite-500)", fontSize: 28, marginBottom: 20 }}>◉</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, marginBottom: 12 }}>{t}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)" }}>{d}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- CONTACT ---------- */
const CONTACT_STEPS = [
  ["01", "You send us the brief.", "2 min", "Just the basics — what you're launching, where, and roughly when. No long forms. No qualification gauntlet."],
  ["02", "We respond within 24 hours.", "Same day on weekdays", "A real human who's read your brief — not a templated \u201Cthanks for reaching out.\u201D If we're not the right fit, we'll tell you and point you somewhere better."],
  ["03", "30-min discovery call.", "No pitch deck", "We dig into goals, timeline, and budget. You leave with a clear sense of fit, scope, and next steps — even if that's \u201Cgo talk to someone else.\u201D"],
];

const CONTACT_DOORS = [
  { dot: "var(--ignite-500)", t: "Brand Ambassador Staffing", lead: "I need bodies on the ground.", d: "Trained ambassadors for samplings, retail, on-premise, festivals, and field marketing. National coverage, fast deploy, full reporting.", tag: "Brand Ambassadors", href: "services-event-staffing.html" },
  { dot: "#FFB627", t: "Fractional Sales & Marketing", lead: "I'm doing too much myself.", d: "Senior CPG operators plug into your team. Sales strategy, retail growth, broker management, marketing leadership — without the full-time hire.", tag: "Fractional Services", href: "fractional.html" },
  { dot: "var(--spark-500)", t: "Spark Platform", lead: "I need to see what's actually happening.", d: "Real-time field marketing intelligence. Live check-ins, sample tracking, conversion data, and post-event recaps — all in one dashboard.", tag: "Spark by Ignite", href: "spark.html" },
];

const ContactForm = () => {
  const urgent = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("urgent");
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "150px 0 90px", background: "var(--ink-000)", color: "var(--fg-1)", position: "relative", overflow: "hidden", borderBottom: "1px solid var(--ink-400)" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: "-10%", top: "-15%", width: "48%", height: "70%", background: "transparent" }}/>
        <Container style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }} className="contact-hero-grid">
            <div>
              <OpsLine>{">> "}{urgent ? "URGENT STAFFING REQUEST" : "GET IN TOUCH"}</OpsLine>
              <h1 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(46px, 6.4vw, 104px)", letterSpacing: "-0.04em", lineHeight: 0.92, textWrap: "balance" }}>
                {urgent ? <>Need staff <span style={{ fontStyle: "italic", color: "#FF6969" }}>now?</span></> : <>Let's build something <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>worth showing up for.</span></>}
              </h1>
              <p style={{ marginTop: 26, fontSize: 19, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 580 }}>
                {urgent
                  ? "We staff short-lead requests in as little as 48 hours across our 50-state network. Email or call — tell us when, where, and how many."
                  : "Tell us about your launch, activation, or staffing need. Whether you're 90 days from a national rollout or trying to figure out next quarter's play — we'll respond within 24 hours and get a real conversation started."}
              </p>
              <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="mailto:staffing@igniteproductions.co" style={{ display: "inline-flex", flexDirection: "column", gap: 4, padding: "16px 24px", borderRadius: 12, background: "var(--ignite-500)", color: "#fff", textDecoration: "none", minWidth: 220 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>Email ↗</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>staffing@igniteproductions.co</span>
                </a>
                <a href="tel:+17754060435" style={{ display: "inline-flex", flexDirection: "column", gap: 4, padding: "16px 24px", borderRadius: 12, background: "transparent", color: "var(--fg-1)", border: "1px solid var(--ink-400)", textDecoration: "none" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-3)" }}>Phone ↗</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>775.406.0435</span>
                </a>
              </div>
            </div>
            {/* status panel */}
            <div style={{ padding: 28, background: "var(--ink-100)", border: "1px solid var(--ink-400)", borderRadius: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid var(--ink-400)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-2)" }}>Project Inquiry</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--spark-500)", boxShadow: "0 0 8px var(--spark-500)" }}/><span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: "var(--spark-500)" }}>LIVE · AVG REPLY 4H</span></span>
              </div>
              {[["Response", "< 24 hours"], ["Coverage", "All 50 states"], ["Active brands", "40+ this quarter"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid var(--ink-400)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)" }}>{k}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--fg-1)" }}>{v}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ignite-500)" }}>★ Veteran-Owned · VOSB</div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ padding: "110px 0", background: "var(--ink-100)", color: "var(--fg-1)", borderBottom: "1px solid var(--ink-400)" }}>
        <Container>
          <OpsLine>{">> "}WHAT HAPPENS NEXT</OpsLine>
          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {CONTACT_STEPS.map(([n, t, when, d]) => (
              <div key={n} style={{ padding: "30px 28px", background: "var(--ink-000)", border: "1px solid var(--ink-400)", borderRadius: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-stencil)", fontSize: 24, color: "var(--ignite-500)" }}>{n}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--spark-500)" }}>{when}</span>
                </div>
                <h3 style={{ marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>{t}</h3>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.55, color: "var(--fg-2)" }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PICK THE DOOR */}
      <section style={{ padding: "110px 0", background: "var(--ink-000)", color: "var(--fg-1)", borderBottom: "1px solid var(--ink-400)" }}>
        <Container>
          <div style={{ maxWidth: 760, marginBottom: 44 }}>
            <OpsLine>{">> "}NOT SURE WHERE TO START?</OpsLine>
            <h2 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(34px, 4.6vw, 64px)", letterSpacing: "-0.035em", lineHeight: 0.98 }}>
              Pick the door that <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>fits.</span>
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)" }}>
              If you already know what you need, jump straight to the relevant team. We'll route your inquiry and skip a step on the call.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 16 }}>
            {CONTACT_DOORS.map(d => (
              <a key={d.t} href={d.href} style={{ display: "flex", flexDirection: "column", padding: 30, background: "var(--ink-100)", border: "1px solid var(--ink-400)", borderRadius: 16, textDecoration: "none", transition: "transform 220ms var(--ease-out), border-color 220ms" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = d.dot; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--ink-400)"; }}>
                <span style={{ width: 9, height: 9, borderRadius: 999, background: d.dot }}/>
                <h3 style={{ marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "var(--fg-1)" }}>{d.t}</h3>
                <div style={{ marginTop: 8, fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: 16, color: d.dot }}>{d.lead}</div>
                <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)", flex: 1 }}>{d.d}</p>
                <span style={{ marginTop: 20, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: d.dot }}>{d.tag} →</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSING */}
      <section style={{ padding: "120px 0", background: "var(--ink-100)", color: "var(--fg-1)", textAlign: "center" }}>
        <Container>
          <OpsLine>{">> "}NO LONG SALES CYCLES. NO MYSTERY PRICING.</OpsLine>
          <h2 style={{ marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 5.4vw, 84px)", letterSpacing: "-0.04em", lineHeight: 0.96, maxWidth: 1000, marginInline: "auto" }}>
            If we're the right fit, we'll be in your inbox <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>tomorrow morning.</span>
          </h2>
          <div style={{ marginTop: 40, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:staffing@igniteproductions.co" style={{ padding: "20px 32px", borderRadius: 999, background: "var(--ignite-500)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textDecoration: "none" }}>Email staffing@igniteproductions.co →</a>
            <a href="tel:+17754060435" style={{ padding: "20px 28px", borderRadius: 999, background: "transparent", color: "var(--fg-1)", border: "1px solid var(--ink-400)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Call 775.406.0435</a>
          </div>
        </Container>
      </section>
      <style>{`@media (max-width: 860px){ .contact-hero-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};

Object.assign(window, { FractionalHero, FractionalTiers, FractionalProcess, WorkHero, WorkGrid, AboutHero, AboutStats, AboutValues, ContactForm });
