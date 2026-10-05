/* Case Study detail template — driven by ?slug= query param */

const { useState: csState, useEffect: csEffect } = React;

/* ------------------------------------------------------------------ KEYFRAMES */
if (typeof document !== "undefined" && !document.getElementById("cs-kf")) {
  const _cs = document.createElement("style"); _cs.id = "cs-kf";
  _cs.textContent = `
    @keyframes csPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }
    @keyframes csFade { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
    .cs-thumb { cursor:zoom-in; transition: transform 500ms cubic-bezier(.2,.7,.2,1), box-shadow 500ms; }
    .cs-thumb:hover { transform: translateY(-3px) scale(1.012); box-shadow: 0 30px 60px rgba(0,0,0,0.45); }
    .cs-lightbox-bg { animation: csFade 200ms ease-out; }
    .cs-arrow:hover { background: var(--ignite-500); color:#fff; }
  `;
  document.head.appendChild(_cs);
}

const CsOpsLine = ({ children, color }) => (
  <span style={{
    fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.24em",
    color: color || "var(--ignite-500)", textTransform:"uppercase",
    display:"inline-flex", alignItems:"center", gap:10,
  }}>
    <span style={{ width:6, height:6, borderRadius:99, background:"currentColor", animation:"csPulse 2.4s ease-in-out infinite" }}/>
    {children}
  </span>
);

/* ------------------------------------------------------------------ MISSING CASE FALLBACK */
const CaseMissing = ({ slug }) => (
  <section style={{ padding:"160px 0", background:"var(--ink-000)", textAlign:"center" }}>
    <div style={{ maxWidth:680, margin:"0 auto", padding:"0 32px" }}>
      <CsOpsLine>{">>"} CASE NOT FOUND</CsOpsLine>
      <h1 style={{
        marginTop:20, fontFamily:"var(--font-display)", fontWeight:700,
        fontSize:"clamp(40px, 6vw, 80px)", letterSpacing:"-0.035em", lineHeight:0.95, color:"var(--fg-1)",
      }}>
        We couldn't find <span style={{ color:"var(--ignite-500)", fontStyle:"italic" }}>{slug || "that case"}</span>.
      </h1>
      <p style={{ marginTop:24, fontSize:18, color:"var(--fg-2)" }}>It may have moved. Head back to Our Work and pick a different one.</p>
      <a href="work.html" style={{
        display:"inline-block", marginTop:36,
        padding:"18px 28px", borderRadius:99, background:"var(--ignite-500)", color:"#fff",
        fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", fontWeight:700,
        textDecoration:"none",
      }}>← Back to Our Work</a>
    </div>
  </section>
);

/* ------------------------------------------------------------------ HERO */
const CaseHero = ({ c }) => (
  <section data-screen-label="01 Case Hero" style={{
    background: c.surface, color: c.ink, position:"relative", overflow:"hidden",
    borderBottom: `1px solid ${c.accent}33`,
  }}>
    {/* Soft accent glow + grid */}
    <div style={{
      position:"absolute", inset:0,
      background:"transparent",
      pointerEvents:"none",
    }}/>
    <div style={{ maxWidth:1320, margin:"0 auto", padding:"36px 32px 32px", position:"relative" }}>
      <a href="work.html" style={{
        display:"inline-flex", alignItems:"center", gap:10,
        fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.22em",
        textTransform:"uppercase", color:"rgba(255,255,255,0.7)",
        textDecoration:"none", padding:"8px 0",
      }}>← Back to Our Work</a>
    </div>

    <div style={{ maxWidth:1320, margin:"0 auto", padding:"40px 32px 100px", position:"relative" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
        {/* Left — copy */}
        <div>
          <CsOpsLine color={c.accent}>{">>"} CASE STUDY · {c.year}</CsOpsLine>

          {c.logo ? (<img
            src={c.logo}
            alt={c.brand}
            style={{ height:64, maxWidth:340, objectFit:"contain", objectPosition:"left", filter:"brightness(0) invert(1)", marginTop:32, marginBottom:32 }} loading="lazy" decoding="async"
          />) : (<span style={{ display:"block", fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(26px,3vw,44px)", letterSpacing:"-0.03em", lineHeight:1, color:"#fff", margin:"12px 0" }}>{c.brand}</span>)}

          <h1 style={{
            fontFamily:"var(--font-display)", fontWeight:700,
            fontSize:"clamp(44px, 6vw, 92px)", letterSpacing:"-0.035em", lineHeight:0.94,
            color:c.ink, margin:0, textWrap:"balance",
          }}>
            {c.headline}
          </h1>

          <div style={{ marginTop:36, display:"flex", flexWrap:"wrap", gap:8 }}>
            {c.tags.map(t => (
              <span key={t} style={{
                fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em",
                textTransform:"uppercase", padding:"8px 14px", borderRadius:99,
                background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.85)",
                border:"1px solid rgba(255,255,255,0.18)",
              }}>{t}</span>
            ))}
          </div>

          {/* Stats */}
          {(c.stats || []).length > 0 && (
          <div style={{
            marginTop:48, display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20,
            borderTop:`1px solid ${c.accent}33`, paddingTop:32,
          }}>
            {c.stats.map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:"clamp(28px, 3vw, 44px)", letterSpacing:"-0.025em", color:c.accent, lineHeight:1 }}>{n}</div>
                <div style={{ marginTop:10, fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", color:"rgba(255,255,255,0.6)", textTransform:"uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
          )}
        </div>

        {/* Right — hero image */}
        <div style={{
          position:"relative", aspectRatio:"4/5", borderRadius:20, overflow:"hidden",
          border:`1px solid ${c.accent}55`, boxShadow:"0 50px 100px rgba(0,0,0,0.5)",
        }}>
          <img src={c.hero} alt={`${c.brand} activation`} style={{ width:"100%", height:"100%", objectFit:"cover" }} loading="lazy" decoding="async"/>
          <div style={{
            position:"absolute", inset:0,
            background:`linear-gradient(180deg, transparent 55%, ${c.surface}cc 100%)`,
            pointerEvents:"none",
          }}/>
          <div style={{
            position:"absolute", left:24, bottom:24, right:24,
            display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:18,
          }}>
            <div>
              <div style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", color:c.accent, textTransform:"uppercase" }}>{c.category}</div>
              <div style={{ marginTop:6, fontFamily:"var(--font-mono)", fontSize:11, color:"rgba(255,255,255,0.75)" }}>{c.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ NARRATIVE */
const CaseNarrative = ({ c }) => (
  <section data-screen-label="02 Narrative" className="paper" style={{ padding:"120px 0", borderBottom:"1px solid var(--paper-200)" }}>
    <div style={{ maxWidth:1320, margin:"0 auto", padding:"0 32px" }}>
      <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:80, alignItems:"start" }}>
        {/* Sidebar */}
        <div style={{ position:"sticky", top:32 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.22em", color:"var(--ignite-500)", textTransform:"uppercase" }}>{">>"} PROJECT DETAILS</span>
          <dl style={{ marginTop:24, fontSize:13, lineHeight:1.5 }}>
            {[
              ["Client", c.brand],
              ["Category", c.category],
              ["Sector", c.sector],
              ["Year", c.year],
              ["Markets", c.location],
            ].map(([k,v]) => (
              <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"14px 0", borderBottom:"1px solid var(--paper-200)", gap:16 }}>
                <dt style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-3-inv)" }}>{k}</dt>
                <dd style={{ margin:0, color:"var(--fg-1-inv)", textAlign:"right", fontWeight:600 }}>{v}</dd>
              </div>
            ))}
          </dl>

          <div style={{ marginTop:28 }}>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", color:"var(--fg-3-inv)", textTransform:"uppercase" }}>Services</span>
            <div style={{ marginTop:12, display:"flex", flexDirection:"column", gap:6 }}>
              {c.services.map(s => (
                <div key={s} style={{ fontSize:13, color:"var(--fg-2-inv)", display:"flex", gap:8 }}>
                  <span style={{ color:"var(--ignite-500)" }}>+</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div>
          <div style={{ marginBottom:64 }}>
            <h2 style={{
              fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.28em",
              color:"var(--ignite-500)", textTransform:"uppercase", margin:0,
            }}>{">>"} BACKGROUND & CHALLENGE</h2>
            <p style={{
              marginTop:20, fontFamily:"var(--font-display)", fontWeight:500,
              fontSize:"clamp(22px, 2vw, 30px)", lineHeight:1.4, color:"var(--fg-1-inv)",
              maxWidth:780, textWrap:"pretty", letterSpacing:"-0.01em",
            }}>
              {c.challenge}
            </p>
          </div>

          <div style={{ marginBottom:64 }}>
            <h2 style={{
              fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.28em",
              color:"var(--ignite-500)", textTransform:"uppercase", margin:0,
            }}>{">>"} SOLUTION & EXECUTION</h2>
            <p style={{
              marginTop:20, fontSize:18, lineHeight:1.65, color:"var(--fg-2-inv)",
              maxWidth:780, textWrap:"pretty",
            }}>
              {c.solution}
            </p>
          </div>

          <div>
            <h2 style={{
              fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.28em",
              color:"var(--ignite-500)", textTransform:"uppercase", margin:0,
            }}>{">>"} POST-CAMPAIGN OUTCOMES</h2>
            <ul style={{ marginTop:24, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:14 }}>
              {c.outcomes.map((o,i) => (
                <li key={i} style={{
                  display:"flex", gap:18, padding:"18px 22px",
                  background:"var(--paper-000)", border:"1px solid var(--paper-200)", borderRadius:12,
                  alignItems:"flex-start",
                }}>
                  <span style={{
                    fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em",
                    color:c.accent, fontWeight:700, paddingTop:3,
                    minWidth:30,
                  }}>{String(i+1).padStart(2,"0")}</span>
                  <span style={{ fontSize:16, lineHeight:1.55, color:"var(--fg-1-inv)" }}>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ GALLERY */
const CaseGallery = ({ c }) => {
  const [open, setOpen] = csState(-1);
  const total = c.gallery.length;
  csEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") setOpen(i => (i + 1) % total);
      if (e.key === "ArrowLeft") setOpen(i => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, total]);

  if (!total) return null;

  /* Editorial layout: alternating sizes for visual rhythm */
  const sizeFor = (i) => {
    const mod = i % 6;
    /* col span, aspect */
    if (mod === 0) return { col:"span 8", aspect:"16/10" };
    if (mod === 1) return { col:"span 4", aspect:"4/5" };
    if (mod === 2) return { col:"span 4", aspect:"4/5" };
    if (mod === 3) return { col:"span 4", aspect:"4/5" };
    if (mod === 4) return { col:"span 4", aspect:"4/5" };
    return { col:"span 12", aspect:"21/9" };
  };

  return (
    <section data-screen-label="03 Gallery" style={{ background:"var(--ink-000)", padding:"100px 0 140px" }}>
      <div style={{ maxWidth:1320, margin:"0 auto", padding:"0 32px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, gap:24, flexWrap:"wrap" }}>
          <div>
            <CsOpsLine color={c.accent}>{">>"} FROM THE FIELD · {total} FRAMES</CsOpsLine>
            <h2 style={{
              marginTop:14, fontFamily:"var(--font-display)", fontWeight:700,
              fontSize:"clamp(36px, 4.4vw, 64px)", letterSpacing:"-0.03em", lineHeight:1,
              color:"var(--fg-1)", margin:"14px 0 0",
            }}>
              Receipts, not renders.
            </h2>
          </div>
          <p style={{ fontSize:14, color:"var(--fg-3)", maxWidth:380, margin:0, lineHeight:1.55, fontFamily:"var(--font-mono)", textTransform:"uppercase", letterSpacing:"0.12em" }}>
            Tap any photo to expand · ← → to navigate
          </p>
        </div>

        <div style={{
          display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:16,
        }}>
          {c.gallery.map((src, i) => {
            const { col, aspect } = sizeFor(i);
            /* Support optional #pos=... hash to override object-position */
            const posMatch = (src || "").match(/#pos=([^&]+)/);
            const objPos = posMatch ? (()=>{ try { return decodeURIComponent(posMatch[1]); } catch (e) { return posMatch[1]; } })() : "center";
            return (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="cs-thumb"
                style={{
                  gridColumn: col, aspectRatio: aspect,
                  border:"1px solid var(--ink-400)", borderRadius:12, overflow:"hidden",
                  background:"var(--ink-100)", padding:0, position:"relative",
                }}
              >
                <img src={src} alt={`${c.brand} field photo ${i+1}`} loading="lazy"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:objPos, display:"block" }}/>
                <div style={{
                  position:"absolute", top:10, left:10,
                  fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.18em",
                  background:"rgba(0,0,0,0.6)", color:"#fff", padding:"4px 8px", borderRadius:99,
                  backdropFilter:"blur(4px)",
                }}>
                  {String(i+1).padStart(2,"0")} / {String(total).padStart(2,"0")}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {open >= 0 && (
        <div
          onClick={() => setOpen(-1)}
          className="cs-lightbox-bg"
          style={{
            position:"fixed", inset:0, background:"rgba(0,0,0,0.94)", zIndex:9999,
            display:"flex", alignItems:"center", justifyContent:"center", padding:40,
          }}
        >
          <button onClick={(e) => { e.stopPropagation(); setOpen(-1); }} style={{
            position:"absolute", top:24, right:24, width:48, height:48, borderRadius:99,
            background:"rgba(255,255,255,0.1)", color:"#fff", border:"1px solid rgba(255,255,255,0.2)",
            fontFamily:"var(--font-mono)", fontSize:14, cursor:"pointer",
          }}>✕</button>
          <button onClick={(e) => { e.stopPropagation(); setOpen(i => (i - 1 + total) % total); }} className="cs-arrow" style={{
            position:"absolute", left:24, top:"50%", transform:"translateY(-50%)",
            width:56, height:56, borderRadius:99, background:"rgba(255,255,255,0.08)",
            color:"#fff", border:"1px solid rgba(255,255,255,0.2)", cursor:"pointer",
            fontFamily:"var(--font-mono)", fontSize:18, transition:"all 160ms ease",
          }}>←</button>
          <button onClick={(e) => { e.stopPropagation(); setOpen(i => (i + 1) % total); }} className="cs-arrow" style={{
            position:"absolute", right:24, top:"50%", transform:"translateY(-50%)",
            width:56, height:56, borderRadius:99, background:"rgba(255,255,255,0.08)",
            color:"#fff", border:"1px solid rgba(255,255,255,0.2)", cursor:"pointer",
            fontFamily:"var(--font-mono)", fontSize:18, transition:"all 160ms ease",
          }}>→</button>
          <img src={c.gallery[open]} alt={`${c.brand} ${open+1}`} onClick={(e)=>e.stopPropagation()}
            style={{ maxWidth:"90vw", maxHeight:"86vh", objectFit:"contain", boxShadow:"0 30px 80px rgba(0,0,0,0.6)" }}/>
          <div style={{
            position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)",
            fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.22em",
            color:"rgba(255,255,255,0.7)",
          }}>{String(open+1).padStart(2,"0")} / {String(total).padStart(2,"0")} · {c.brand}</div>
        </div>
      )}
    </section>
  );
};

/* ------------------------------------------------------------------ MORE WORK */
/* ------------------------------------------------------------------ RELATED LINKS — industry + markets + services for this case */
const CaseRelatedLinks = ({ c }) => {
  /* Sector → industry slug */
  const sectorToIndustry = (sector) => {
    const s = (sector || "").toLowerCase();
    if (s.includes("spirit") || s.includes("alcohol")) return { slug: "alcohol-spirits", label: "Alcohol & Spirits" };
    if (s.includes("beverage")) return { slug: "cpg-beverage", label: "CPG Beverage" };
    if (s.includes("qsr") || s.includes("food")) return { slug: "cpg-food-snack", label: "CPG Food & Snack" };
    if (s.includes("cpg") || s.includes("personal")) return { slug: "cpg-food-snack", label: "CPG Food & Snack" };
    if (s.includes("telco") || s.includes("retail")) return { slug: "qsr-restaurant", label: "QSR & Restaurant" };
    if (s.includes("sport")) return { slug: "sports-entertainment", label: "Sports & Entertainment" };
    return null;
  };
  const industry = sectorToIndustry(c.sector);
  /* Map common case tags to service slugs */
  const tagToService = (t) => {
    const x = (t || "").toLowerCase();
    if (x.includes("sampling")) return { slug: "product-sampling", label: "Product Sampling" };
    if (x.includes("staff") || x.includes("ambassador")) return { slug: "event-staffing", label: "Event Staffing" };
    if (x.includes("mobile") || x.includes("tour") || x.includes("truck")) return { slug: "mobile-tours", label: "Mobile Tours" };
    if (x.includes("trade") || x.includes("show")) return { slug: "trade-shows", label: "Trade Show Support" };
    if (x.includes("experien") || x.includes("activation") || x.includes("event")) return { slug: "experiential-marketing", label: "Experiential Marketing" };
    if (x.includes("promo") || x.includes("co-op")) return { slug: "promotional-products", label: "Promotional Products" };
    if (x.includes("fabri") || x.includes("build")) return { slug: "fabrication-builds", label: "Fabrication & Builds" };
    return null;
  };
  const services = [];
  const seenSvc = new Set();
  (c.tags || []).forEach(t => {
    const s = tagToService(t);
    if (s && !seenSvc.has(s.slug)) { services.push(s); seenSvc.add(s.slug); }
  });
  if (services.length === 0) {
    const cat = tagToService(c.category);
    if (cat) services.push(cat);
  }
  /* Markets — pull mentioned cities from headline / sub / metrics if any */
  const allText = [c.headline, c.subhead || "", ...(c.tags || []), c.category || ""].join(" ").toLowerCase();
  const cityHits = [];
  const seenCity = new Set();
  Object.values(window.MARKETS_BY_SLUG || {}).forEach(m => {
    const lc = m.name.toLowerCase();
    if (allText.includes(lc) && !seenCity.has(m.slug)) { cityHits.push(m); seenCity.add(m.slug); }
  });

  if (!industry && services.length === 0 && cityHits.length === 0) return null;

  return (
    <section className="paper" style={{
      padding: "70px 0",
      borderTop: "1px solid var(--paper-200)",
      borderBottom: "1px solid var(--paper-200)",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 22, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase", color: c.accent || "var(--ignite-500)",
          }}>{">> "}RELATED</span>
          <span style={{ flex: 1, height: 1, background: "var(--paper-200)" }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {industry && (
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3-inv)", textTransform: "uppercase", marginBottom: 10 }}>INDUSTRY</div>
              <a href={"industry.html?i=" + industry.slug} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "12px 18px", borderRadius: 999,
                background: "var(--paper-100)", border: "1px solid var(--paper-200)",
                color: "var(--fg-1-inv)", textDecoration: "none",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
              }}>
                {industry.label}
                <span style={{ fontSize: 12, color: c.accent || "var(--ignite-500)" }}>↗</span>
              </a>
            </div>
          )}
          {services.length > 0 && (
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3-inv)", textTransform: "uppercase", marginBottom: 10 }}>SERVICES</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {services.map(s => (
                  <a key={s.slug} href={"services-" + s.slug + ".html"} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 14px", borderRadius: 999,
                    background: "var(--paper-100)", border: "1px solid var(--paper-200)",
                    color: "var(--fg-1-inv)", textDecoration: "none",
                    fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14,
                  }}>
                    {s.label}
                    <span style={{ fontSize: 11, color: c.accent || "var(--ignite-500)" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          {cityHits.length > 0 && (
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", color: "var(--fg-3-inv)", textTransform: "uppercase", marginBottom: 10 }}>MARKETS</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cityHits.slice(0, 6).map(m => {
                  const href = (window.CITY_URL ? window.CITY_URL(m.slug) : "/cities/" + m.slug);
                  return (
                    <a key={m.slug} href={href} style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "10px 14px", borderRadius: 999,
                      background: "var(--paper-100)", border: "1px solid var(--paper-200)",
                      color: "var(--fg-1-inv)", textDecoration: "none",
                      fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em",
                    }}>
                      {m.name}
                      <span style={{ fontSize: 10, color: "var(--fg-3-inv)" }}>/ {m.state}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const CaseMoreWork = ({ c }) => {
  const list = (window.WORK_CASES || []).filter(x => x.slug !== c.slug).slice(0, 3);
  if (!list.length) return null;
  return (
    <section data-screen-label="04 More Work" className="paper" style={{ padding:"100px 0", borderTop:"1px solid var(--paper-200)" }}>
      <div style={{ maxWidth:1320, margin:"0 auto", padding:"0 32px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:40, gap:24, flexWrap:"wrap" }}>
          <div>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.22em", color:"var(--ignite-500)", textTransform:"uppercase" }}>{">>"} MORE WORK</span>
            <h2 style={{
              marginTop:14, fontFamily:"var(--font-display)", fontWeight:700,
              fontSize:"clamp(32px, 3.6vw, 52px)", letterSpacing:"-0.03em", lineHeight:1, color:"var(--fg-1-inv)",
              margin:"14px 0 0",
            }}>
              Keep reading.
            </h2>
          </div>
          <a href="work.html" style={{
            padding:"14px 22px", borderRadius:99, background:"transparent", color:"var(--fg-1-inv)",
            border:"1px solid var(--paper-300)",
            fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase",
            fontWeight:700, textDecoration:"none",
          }}>See all {(window.WORK_CASES || []).filter(x => window.CASE_STUDIES && window.CASE_STUDIES[x.slug]).length || Object.keys(window.CASE_STUDIES || {}).length} cases →</a>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18 }}>
          {list.map(n0 => { const d = (window.CASE_STUDIES && window.CASE_STUDIES[n0.slug]) || {}; const n = { ...d, ...n0, brand: n0.brand || d.brand, headline: n0.headline || d.headline, category: n0.category || d.category, hero: n0.hero || d.hero }; const heroSrc = (n.hero || "").split("#")[0]; const heroPos = decodeURIComponent(((n.hero || "").split("#pos=")[1]) || "center"); return (
            <a key={n.slug} href={`case-study.html?slug=${n.slug}`} style={{
              position:"relative", display:"block", textDecoration:"none", color:"#fff",
              background: n.surface, borderRadius:16, overflow:"hidden",
              border:"1px solid rgba(255,255,255,0.08)", minHeight:340,
              padding:28,
            }}>
              {heroSrc && <img src={heroSrc} alt="" aria-hidden="true" loading="lazy" decoding="async" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:heroPos, opacity:0.55 }}/>}
              <div style={{
                position:"absolute", inset:0,
                background:"linear-gradient(180deg, rgba(10,11,13,0.35) 0%, rgba(10,11,13,0.55) 45%, rgba(10,11,13,0.92) 100%)",
                pointerEvents:"none",
              }}/>
              <div style={{ position:"relative", display:"flex", flexDirection:"column", height:"100%" }}>
                {(window.WORK_BRAND_LOGOS && window.WORK_BRAND_LOGOS[n.slug]) ? (
                  <img src={window.WORK_BRAND_LOGOS[n.slug]} alt={n.brand}
                    style={{ height:44, maxWidth:200, width:"auto", alignSelf:"flex-start", objectFit:"contain", objectPosition:"left", filter:"brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0,0,0,.5))", marginBottom:18 }} loading="lazy" decoding="async"/>
                ) : (
                  <span style={{ display:"block", fontFamily:"var(--font-display)", fontWeight:800, fontSize:22, letterSpacing:"-0.02em", marginBottom:18 }}>{n.brand}</span>
                )}
                <h3 style={{
                  fontFamily:"var(--font-display)", fontWeight:700, fontSize:24,
                  letterSpacing:"-0.02em", lineHeight:1.1, margin:0,
                }}>
                  {n.headline}
                </h3>
                <div style={{ flex:1 }}/>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:24 }}>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", color:n.accent, textTransform:"uppercase" }}>{n.category}</span>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", color:"rgba(255,255,255,0.55)", textTransform:"uppercase" }}>Read →</span>
                </div>
              </div>
            </a>
          ); })}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ CTA */
const CaseCTA = ({ c }) => (
  <section data-screen-label="05 CTA" style={{
    background: c.surface, color: c.ink, padding:"120px 0", position:"relative", overflow:"hidden",
  }}>
    <div style={{
      position:"absolute", inset:0,
      background:"transparent",
      pointerEvents:"none",
    }}/>
    <div style={{ maxWidth:980, margin:"0 auto", padding:"0 32px", position:"relative", textAlign:"center" }}>
      <CsOpsLine color={c.accent}>{">>"} READY TO IGNITE YOUR NEXT CAMPAIGN?</CsOpsLine>
      <h2 style={{
        marginTop:24, fontFamily:"var(--font-display)", fontWeight:700,
        fontSize:"clamp(40px, 5.4vw, 84px)", letterSpacing:"-0.035em", lineHeight:0.95, color:c.ink,
      }}>
        Let's build your<br/>
        <span style={{ fontStyle:"italic", color:c.accent }}>next case study.</span>
      </h2>
      <div style={{ marginTop:40, display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
        <a href="https://www.igniteproductions.co/contact" style={{
          padding:"20px 30px", borderRadius:99, background:c.accent, color:"#0A0A0A",
          fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase",
          fontWeight:700, textDecoration:"none",
        }}>Contact us →</a>
        <a href="work.html" style={{
          padding:"20px 30px", borderRadius:99, background:"transparent", color:c.ink,
          border:`1px solid ${c.accent}66`,
          fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase",
          fontWeight:700, textDecoration:"none",
        }}>See more work</a>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ ROOT */
const CaseStudyPage = () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "liquid-death";
  const c = (window.CASE_STUDIES || {})[slug];

  return (
    <div data-screen-label={c ? `Case · ${c.brand}` : "Case · 404"}>
      <SiteNav rel="../" active="WORK"/>
      {c ? (
        <>
          <CaseHero c={c}/>
          <CaseNarrative c={c}/>
          <CaseGallery c={c}/>
          <CaseRelatedLinks c={c}/>
          <CaseMoreWork c={c}/>
          <CaseCTA c={c}/>
        </>
      ) : (
        <CaseMissing slug={slug}/>
      )}
      <SiteFooter rel="../"/>
    </div>
  );
};

Object.assign(window, { CaseStudyPage });
