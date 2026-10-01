/* global React */
/* ============================================================
   CITY SEO SECTION — reusable Webflow CMS template block.
   ------------------------------------------------------------
   Drop into any city page. Every field is CMS-bindable and the
   section degrades cleanly when fields are empty:
     - intro paragraph optional
     - activations / industries / nearby markets each hide their
       sub-band when the array is empty
     - FAQ band hides when fewer than 1 entry
     - CTA always renders (with safe defaults)

   Props (city):
     name           string  — "Reno"            (required)
     state          string  — "Nevada"          (optional)
     metro          string  — "Reno-Sparks"     (optional, fallbacks to name)
     intro          string  — local paragraph   (optional)
     activations    string[]                    (optional)
     industries     string[]                    (optional)
     nearbyMarkets  Array<string | {name, miles}> (optional)
     faqs           Array<{q,a}>                (optional, max 3 shown)
     cta            { eyebrow, heading, body, primaryLabel, primaryHref,
                      secondaryLabel, secondaryHref }   (optional)
     lastUpdated    string  — "May 2026"        (optional)
   ============================================================ */

const CITY_FALLBACK_CTA = {
  eyebrow: "READY WHEN YOU ARE",
  heading: "Let's run something here.",
  body: "Brief us on the program. Single-night activation through national tour — we'll scope it to fit.",
  primaryLabel: "Start a brief",
  primaryHref: "https://www.igniteproductions.co/contact",
  secondaryLabel: "See the work",
  secondaryHref: "work.html",
};

const US_STATE_ABBR = {
  "Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA",
  "Colorado":"CO","Connecticut":"CT","Delaware":"DE","Florida":"FL","Georgia":"GA",
  "Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS",
  "Kentucky":"KY","Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA",
  "Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT",
  "Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM",
  "New York":"NY","North Carolina":"NC","North Dakota":"ND","Ohio":"OH","Oklahoma":"OK",
  "Oregon":"OR","Pennsylvania":"PA","Rhode Island":"RI","South Carolina":"SC",
  "South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT",
  "Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY",
  "District of Columbia":"DC","Puerto Rico":"PR",
};
const stateAbbr = (s) => {
  if (!s) return "USA";
  const trim = String(s).trim();
  if (trim.length === 2) return trim.toUpperCase();
  return US_STATE_ABBR[trim] || trim.slice(0, 2).toUpperCase();
};

const isNonEmpty = (v) => Array.isArray(v) ? v.length > 0 : (v != null && String(v).trim() !== "");

/* ---------- Tactical grid background (matches Ignite vocab) ---------- */
const CityGridBg = ({ opacity = 0.05, animated = false }) => (
  <>
    {animated && (
      <>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "transparent",
          animation: "city-glow-a 14s ease-in-out infinite",
          mixBlendMode: "screen",
        }}/>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "transparent",
          animation: "city-glow-b 18s ease-in-out infinite",
          mixBlendMode: "screen",
        }}/>
        <div aria-hidden="true" style={{
          position: "absolute", left: 0, right: 0, top: 0, height: 1, pointerEvents: "none",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.5,
          animation: "city-scan 7s linear infinite",
        }}/>
      </>
    )}
  </>
);

/* ---------- INTRO BAND ---------- */
const CITY_INTRO_KEYFRAMES = `
@keyframes city-intro-rise {
  0%   { opacity: 0; transform: translateY(14px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes city-intro-line {
  0%   { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
@keyframes city-intro-blink {
  0%, 60%, 100% { opacity: 1; }
  70%, 80%      { opacity: 0.2; }
}
@keyframes city-intro-glow {
  0%   { text-shadow: 0 0 0 rgba(215, 69, 62,0); }
  60%  { text-shadow: 0 0 28px rgba(215, 69, 62, 0.275); }
  100% { text-shadow: 0 0 12px rgba(215, 69, 62, 0.125); }
}
@keyframes city-grid-drift {
  0%   { background-position: 0 0, 0 0; }
  100% { background-position: 48px 48px, 48px 48px; }
}
@keyframes city-glow-a {
  0%, 100% { transform: translate(0,0); opacity: 0.9; }
  50%      { transform: translate(40px,-20px); opacity: 0.5; }
}
@keyframes city-glow-b {
  0%, 100% { transform: translate(0,0); opacity: 0.7; }
  50%      { transform: translate(-30px,15px); opacity: 1; }
}
@keyframes city-scan {
  0%   { transform: translateY(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
@keyframes city-ghost-pan {
  0%, 100% { transform: translate(0,0); }
  50%      { transform: translate(-30px, 8px); }
}
.city-intro-cell {
  opacity: 0;
  animation: city-intro-rise 700ms var(--ease-out) forwards;
}
@media (prefers-reduced-motion: reduce) {
  .city-intro-cell { animation: none; opacity: 1; }
  [data-city-anim] { animation: none !important; }
}
`;

const CitySeoIntro = ({ city }) => {
  const region = city.state ? `${city.name}, ${city.state}` : city.name;
  return (
    <section style={{
      position: "relative", padding: "140px 0 90px",
      background: "var(--ink-000)", color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
      overflow: "hidden",
    }}>
      <style>{CITY_INTRO_KEYFRAMES}</style>
      <CityGridBg animated/>
      {/* Big stencil ghost of city name behind everything — SVG auto-fits regardless of name length */}
      {(() => {
        const n = (city.name || "").toUpperCase();
        const vbW = Math.max(n.length, 4) * 62;
        return (
          <svg aria-hidden="true" data-city-anim
            viewBox={`0 0 ${vbW} 110`}
            preserveAspectRatio="xMidYMid meet"
            style={{
              position: "absolute", right: 0, top: "-1.5%",
              width: "94vw", height: "auto", maxHeight: "62%",
              pointerEvents: "none", userSelect: "none",
              animation: "city-ghost-pan 22s ease-in-out infinite",
              overflow: "visible",
            }}>
            <text x="50%" y="92" textAnchor="middle"
              fontSize="100"
              fill="rgba(255,255,255,0.035)"
              textLength={vbW - 6}
              lengthAdjust="spacingAndGlyphs"
              style={{ fontFamily: "var(--font-stencil)" }}
            >{n}</text>
          </svg>
        );
      })()}
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div className="city-intro-cell" style={{
          display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
          animationDelay: "60ms",
        }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--accent)",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <span style={{
              display: "inline-block", width: 6, height: 6, borderRadius: 999,
              background: "var(--accent)",
              
              animation: "city-intro-blink 2.4s var(--ease-out) infinite",
            }}/>
            {">> "}LOCAL MARKET · {region.toUpperCase()}
          </span>
        </div>

        {(() => {
          const nameLen = (city.name || "").length;
          const stateLen = city.state ? 5 : 1; // "/ XX." or "."
          const longestLine = Math.max(17, 3 + nameLen + stateLen);
          const fontCap = Math.min(168, Math.floor(168 * 17 / longestLine));
          const vwMax = (9.5 * 17 / longestLine).toFixed(2);
          const baseMin = longestLine > 22 ? 44 : longestLine > 19 ? 52 : 64;
          return (
            <h2 className="city-intro-cell" style={{
              marginTop: 22, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: `clamp(${baseMin}px, ${vwMax}vw, ${fontCap}px)`,
              letterSpacing: "-0.045em", lineHeight: 0.88,
              maxWidth: 1300, textWrap: "balance",
              animationDelay: "180ms",
            }}>
              Brand activations<br/>
              <span style={{ whiteSpace: "nowrap" }}>
                in <span style={{
                  fontStyle: "italic", color: "var(--accent)",
                  animation: "city-intro-glow 1600ms var(--ease-out) 600ms both",
                  display: "inline-block",
                }}>{city.name}</span>
                {city.state && <span style={{ color: "var(--fg-3)", fontWeight: 500, fontStyle: "normal", fontSize: "0.4em", letterSpacing: "-0.01em", verticalAlign: "0.65em", marginLeft: 18 }}>/ {stateAbbr(city.state)}</span>}
                <span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </h2>
          );
        })()}

        {isNonEmpty(city.intro) ? (
          <p className="city-intro-cell" style={{
            marginTop: 36, fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: "clamp(20px, 2.1vw, 28px)", lineHeight: 1.35, letterSpacing: "-0.015em",
            color: "rgba(255,255,255,0.92)",
            maxWidth: 880, textWrap: "pretty",
            animationDelay: "340ms", position: "relative",
          }}>{city.intro}</p>
        ) : (
          <p className="city-intro-cell" style={{
            marginTop: 36, fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: "clamp(20px, 2.1vw, 28px)", lineHeight: 1.35, letterSpacing: "-0.015em",
            color: "rgba(255,255,255,0.92)",
            maxWidth: 880, textWrap: "pretty",
            animationDelay: "340ms", position: "relative",
          }}>
            We staff, build, and run brand activations in {city.metro || city.name} —
            festival pop-ups, retail demos, mobile tours, and trade-show floors.
            Local crew, local permits, national playbook.
          </p>
        )}

        {/* Local-stat strip — always renders; safe defaults */}
        <div style={{
          marginTop: 64, position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 0,
          border: "1px solid var(--ink-400)",
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(17,19,23,0.85)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}>
          {(city.generic ? [
            ["COVERAGE", "Nationwide", "all 50 states"],
            ["RUSH WINDOW", "48 HR", "brief to boots"],
            ["BENCH", "12,000+", "ambassadors active"],
            ["MARKETS", "200+", "named metros"],
          ] : [
            ["AMBASSADORS", city.ambassadors || "1,200+", "in-market"],
            ["RUSH WINDOW", "48 HR", "brief to boots"],
            ["YEARS ACTIVE", city.yearsActive || "Since 2018", "in this metro"],
            ["COVERAGE", city.coverageNote || "Full metro", "+ surrounding"],
          ]).map(([k, v, sub], i, arr) => (
            <div key={k} className="city-intro-cell" style={{
              padding: "22px 24px",
              borderRight: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
              animationDelay: (480 + i * 90) + "ms",
              position: "relative",
            }}>
              {/* hair sweep on top edge */}
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
                transform: "scaleX(0)", transformOrigin: "left",
                animation: `city-intro-line 900ms var(--ease-out) ${600 + i * 90}ms both`,
                opacity: 0.6,
              }}/>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 8,
              }}>{k}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26,
                letterSpacing: "-0.02em", color: "var(--fg-1)",
              }}>{v}</div>
              <div style={{ fontSize: 12.5, color: "var(--fg-3)", marginTop: 4 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- ACTIVATION TYPES ---------- */
const CitySeoActivations = ({ city }) => {
  if (!isNonEmpty(city.activations)) return null;
  return (
    <section style={{
      padding: "100px 0", background: "var(--ink-100)",
      borderTop: "1px solid var(--ink-400)", borderBottom: "1px solid var(--ink-400)",
    }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--accent)",
            }}>{">> "}WHAT WE RUN HERE</span>
            <h3 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.94,
            }}>
              Activation<br/>
              <span style={{ fontStyle: "italic", color: "#FFB627" }}>types.</span>
            </h3>
            <p style={{ marginTop: 22, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 360 }}>
              The lanes we book most often in {city.name}. We run others too —
              brief us if you don't see yours.
            </p>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 10,
          }}>
            {city.activations.map((a, i) => (
              <div key={a + i} style={{
                padding: "18px 20px", background: "var(--ink-200)",
                border: "1px solid var(--ink-400)", borderRadius: 10,
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)",
                  letterSpacing: "0.1em",
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15,
                  letterSpacing: "-0.005em", color: "var(--fg-1)",
                }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- "SERVICES WE RUN IN THIS MARKET" ----------
   Default catalog of the 10 Ignite service lanes. CMS can:
     - omit city.services entirely → render all 10 defaults
     - pass city.services = ["event-staffing","sampling",...] (slug filter)
     - pass city.services = [{slug,title,desc,href}, ...] (full override)
   --------------------------------------------------------------- */
const DEFAULT_SERVICES = [
  { slug: "event-staffing",
    title: "Event Staffing",
    desc: "Vetted field teams for festivals, trade shows, retail programs, nightlife, and private events.",
    href: "../Ignite Services.html#event-staffing" },
  { slug: "brand-ambassadors",
    title: "Brand Ambassadors",
    desc: "Trained ambassadors who represent your brand, capture leads, distribute samples, and drive guest interaction.",
    href: "../Ignite Brand Ambassadors.html" },
  { slug: "product-sampling",
    title: "Product Sampling",
    desc: "Compliant, high-volume sampling teams for CPG, beverage, food, wellness, and lifestyle brands.",
    href: "../Ignite Services.html#product-sampling" },
  { slug: "experiential-marketing",
    title: "Experiential Marketing",
    desc: "Pop-ups, launch events, mobile activations, street teams, and brand experiences built for attention.",
    href: "../Ignite Services.html#experiential-marketing" },
  { slug: "mobile-tours",
    title: "Mobile Tours",
    desc: "Route planning, staffing, logistics, and market support for regional or national mobile campaigns.",
    href: "../Ignite Services.html#mobile-tours" },
  { slug: "trade-shows",
    title: "Trade Shows",
    desc: "Booth staff, lead capture, demo support, hospitality teams, and post-show reporting.",
    href: "../Trade Show Staffing.html" },
  { slug: "custom-fabrication",
    title: "Custom Fabrication",
    desc: "Branded displays, photo moments, sampling carts, event assets, and activation builds.",
    href: "../Ignite Services.html#fabrication-builds" },
  { slug: "promotional-products",
    title: "Promotional Products",
    desc: "Sourcing, kitting, shipping, and on-site distribution for branded merchandise.",
    href: "../Ignite Services.html#promotional-products" },
  { slug: "spark-reporting",
    title: "Spark Reporting",
    desc: "Field recaps, photos, attendance notes, lead capture, and activation reporting.",
    href: "../Ignite Spark.html" },
  { slug: "logistics-permitting",
    title: "Logistics & Permitting",
    desc: "Local planning support for venues, public spaces, routes, permits, and production details.",
    href: "../Ignite Services.html#logistics" },
];

const resolveServices = (input) => {
  if (!Array.isArray(input) || input.length === 0) return DEFAULT_SERVICES;
  const bySlug = Object.fromEntries(DEFAULT_SERVICES.map(s => [s.slug, s]));
  const out = [];
  for (const item of input) {
    if (typeof item === "string") {
      if (bySlug[item]) out.push(bySlug[item]);
    } else if (item && item.slug) {
      out.push({ ...(bySlug[item.slug] || {}), ...item });
    } else if (item && item.title) {
      out.push(item);
    }
  }
  return out.filter(s => isNonEmpty(s?.title));
};

const CitySeoServices = ({ city }) => {
  const services = resolveServices(city.services);
  if (services.length === 0) return null;
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "100px 0", background: "var(--ink-000)",
      borderTop: "1px solid var(--ink-400)",
    }}>
      <CityGridBg opacity={0.04}/>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          gap: 32, flexWrap: "wrap", marginBottom: 40,
        }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--accent)",
            }}>{">> "}SERVICES IN MARKET</span>
            <h3 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.03em", lineHeight: 0.98,
              textWrap: "balance",
            }}>
              What Ignite runs in<br/><span style={{ fontStyle: "italic", color: "var(--accent)" }}>{city.name}</span>.
            </h3>
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: "var(--fg-2)", textWrap: "pretty" }}>
              From one-day street teams to multi-market rollouts, Ignite supports the same core service lanes in {city.name} that we execute nationwide.
            </p>
          </div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--fg-3)",
            padding: "6px 10px", border: "1px solid var(--ink-400)", borderRadius: 4,
            whiteSpace: "nowrap",
          }}>{String(services.length).padStart(2, "0")} LANES</span>
        </div>

        <div className="city-services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}>
          {services.map((s, i) => {
            const Card = s.href ? "a" : "div";
            return (
              <Card
                key={s.slug || s.title}
                href={s.href || undefined}
                style={{
                  display: "block", textDecoration: "none", color: "inherit",
                  position: "relative",
                  padding: "22px 22px 20px",
                  background: "var(--ink-100)",
                  border: "1px solid var(--ink-400)",
                  borderRadius: 12,
                  transition: "border-color 160ms var(--ease-out), background 160ms var(--ease-out), transform 160ms var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  if (!s.href) return;
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "rgba(215, 69, 62,0.04)";
                  const ar = e.currentTarget.querySelector("[data-arrow]");
                  if (ar) { ar.style.color = "var(--accent)"; ar.style.transform = "translateX(4px)"; }
                }}
                onMouseLeave={(e) => {
                  if (!s.href) return;
                  e.currentTarget.style.borderColor = "var(--ink-400)";
                  e.currentTarget.style.background = "var(--ink-100)";
                  const ar = e.currentTarget.querySelector("[data-arrow]");
                  if (ar) { ar.style.color = "var(--fg-3)"; ar.style.transform = "none"; }
                }}
              >
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  marginBottom: 12, gap: 12,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                    color: "var(--accent)",
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  {s.href && (
                    <span data-arrow style={{
                      fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--fg-3)",
                      transition: "transform 160ms var(--ease-out), color 160ms var(--ease-out)",
                    }}>→</span>
                  )}
                </div>
                <h4 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                  letterSpacing: "-0.015em", color: "var(--fg-1)", marginBottom: 8,
                }}>{s.title}</h4>
                <p style={{
                  fontSize: 13.5, lineHeight: 1.55, color: "var(--fg-2)", margin: 0,
                }}>{s.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- INDUSTRIES + NEARBY MARKETS (paired band) ---------- */
const CitySeoIndustriesMarkets = ({ city }) => {
  const hasInd = isNonEmpty(city.industries);
  const hasMkt = isNonEmpty(city.nearbyMarkets);
  if (!hasInd && !hasMkt) return null;

  // Normalize nearby markets to {name, miles?}
  const markets = (city.nearbyMarkets || []).map(m =>
    typeof m === "string" ? { name: m } : m
  );

  return (
    <section style={{ padding: "100px 0", background: "var(--ink-000)" }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: hasInd && hasMkt ? "1fr 1fr" : "1fr",
          gap: 64,
        }}>
          {hasInd && (
            <div>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "var(--accent)",
              }}>{">> "}INDUSTRIES SERVED</span>
              <h3 style={{
                marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-0.025em", lineHeight: 1,
              }}>
                Categories we book in<br/><span style={{ fontStyle: "italic", color: "var(--accent)" }}>{city.name}</span>.
              </h3>
              <div style={{
                marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8,
              }}>
                {city.industries.map((ind, i) => (
                  <span key={ind + i} style={{
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--ink-400)",
                    borderRadius: 999,
                    fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 500,
                    letterSpacing: "-0.005em",
                    color: "var(--fg-1)",
                    display: "inline-flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: 999,
                      background: "var(--accent)",
                    }}/>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasMkt && (
            <div>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#FFB627",
              }}>{">> "}NEARBY MARKETS · SURGE</span>
              <h3 style={{
                marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-0.025em", lineHeight: 1,
              }}>
                Within reach of<br/><span style={{ fontStyle: "italic", color: "#FFB627" }}>{city.name}</span>.
              </h3>
              <div style={{
                marginTop: 28,
                display: "grid",
                gridTemplateColumns: "1fr",
                border: "1px solid var(--ink-400)",
                borderRadius: 10,
                overflow: "hidden",
                background: "var(--ink-100)",
              }}>
                {markets.map((m, i, arr) => {
                  const slug = (window.NAME_TO_SLUG || {})[String(m.name).toLowerCase().trim()];
                  const href = slug ? ((window.CITY_URL && window.CITY_URL(slug)) || "/cities/" + slug) : null;
                  const Tag = href ? "a" : "div";
                  return (
                    <Tag key={m.name + i} href={href || undefined}
                      className={href ? "city-nearby-link" : undefined}
                      style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "14px 18px",
                        borderBottom: i < arr.length - 1 ? "1px solid var(--ink-400)" : "none",
                        fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500,
                        color: "var(--fg-1)", textDecoration: "none",
                        transition: "background 160ms, color 160ms",
                        cursor: href ? "pointer" : "default",
                      }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ color: "#FFB627", fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span>
                        {m.name}
                        {href && <span style={{ color: "#FFB627", fontSize: 10, marginLeft: 4, opacity: 0.75 }}>↗</span>}
                      </span>
                      {m.miles && (
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em",
                          textTransform: "uppercase", color: "var(--fg-3)",
                        }}>{m.miles} MI</span>
                      )}
                    </Tag>
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

/* ---------- FAQ (max 3) ---------- */
const CitySeoFaqs = ({ city }) => {
  const faqs = (city.faqs || []).filter(f => isNonEmpty(f?.q)).slice(0, 3);
  const [open, setOpen] = React.useState(0);
  if (faqs.length === 0) return null;

  return (
    <section style={{
      padding: "120px 0", background: "var(--paper-000)", color: "var(--fg-1-inv)",
      borderTop: "1px solid var(--paper-200)",
    }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: 80, alignItems: "start",
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--accent)",
            }}>{">> "}{city.name.toUpperCase()} · FAQ</span>
            <h3 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(38px, 4.6vw, 64px)", letterSpacing: "-0.03em", lineHeight: 0.96,
            }}>
              Quick<br/>
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>answers</span><br/>
              for {city.name}.
            </h3>
            <p style={{ marginTop: 24, fontSize: 15.5, lineHeight: 1.6, color: "var(--fg-2-inv)" }}>
              The three questions we get most for this market.
            </p>
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
                        color: "var(--accent)",
                      }}>{String(i + 1).padStart(2, "0")}</span>
                      {f.q}
                    </span>
                    <span style={{
                      color: "var(--accent)", fontSize: 22, flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 200ms",
                    }}>+</span>
                  </button>
                  {isOpen && isNonEmpty(f.a) && (
                    <p style={{
                      paddingBottom: 24, paddingLeft: 36,
                      fontSize: 15.5, lineHeight: 1.65,
                      color: "var(--fg-2-inv)", margin: 0, maxWidth: 700,
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
const CitySeoCta = ({ city }) => {
  const cta = { ...CITY_FALLBACK_CTA, ...(city.cta || {}) };
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "120px 0", background: "var(--ink-000)",
      color: "var(--fg-1)", borderTop: "1px solid var(--ink-400)",
    }}>
      <CityGridBg opacity={0.04}/>
      {/* Diagonal orange wash */}
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
            textTransform: "uppercase", color: "var(--accent)",
          }}>{">> "}{cta.eyebrow}</span>
          <h3 style={{
            marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(48px, 6.5vw, 108px)", letterSpacing: "-0.04em", lineHeight: 0.9,
            textWrap: "balance",
          }}>
            {cta.heading.replace(/\{city\}/g, city.name)}
          </h3>
          <p style={{
            marginTop: 22, fontSize: 17, lineHeight: 1.55, color: "var(--fg-2)",
            maxWidth: 540,
          }}>
            {cta.body.replace(/\{city\}/g, city.name)}
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={cta.primaryHref} style={{
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
              padding: "14px 22px", borderRadius: 10, cursor: "pointer",
              background: "var(--accent)", color: "#fff",
              boxShadow: "0 0 0 1px rgba(215, 69, 62, 0.15), 0 8px 32px rgba(215, 69, 62,0.25)",
              display: "inline-flex", alignItems: "center", gap: 10,
              textDecoration: "none",
            }}>
              {cta.primaryLabel}
              <span style={{ fontFamily: "var(--font-mono)" }}>→</span>
            </a>
            {cta.secondaryLabel && (
              <a href={cta.secondaryHref || "#"} style={{
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
                padding: "14px 22px", borderRadius: 10, cursor: "pointer",
                background: "transparent", color: "var(--fg-1)",
                border: "1px solid var(--ink-400)",
                display: "inline-flex", alignItems: "center", gap: 10,
                textDecoration: "none",
              }}>
                {cta.secondaryLabel}
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--fg-3)" }}>→</span>
              </a>
            )}
          </div>
        </div>

        {/* Big stencil mark — local. SVG auto-fits regardless of name length. */}
        {(() => {
          const n = (city.name || "").toUpperCase();
          const sa = stateAbbr(city.state) || "";
          const vbW = Math.max(n.length, 4) * 62;
          return (
            <svg data-city-anim
              viewBox={`0 0 ${vbW} ${sa ? 175 : 110}`}
              preserveAspectRatio="xMaxYMid meet"
              style={{
                display: "block",
                width: "100%", maxWidth: "100%",
                height: "auto",
                opacity: 0.92,
                userSelect: "none",
                animation: "city-ghost-pan 22s ease-in-out infinite",
                
              }}>
              <text x="100%" y="92" textAnchor="end"
                fontSize="100"
                fill="var(--ink-300)"
                textLength={vbW - 6}
                lengthAdjust="spacingAndGlyphs"
                style={{ fontFamily: "var(--font-stencil)" }}
              >{n}</text>
              {sa && (
                <text x="100%" y="168" textAnchor="end"
                  fontSize="62"
                  fill="var(--accent)" fillOpacity="0.65"
                  style={{ fontFamily: "var(--font-stencil)" }}
                >{sa}</text>
              )}
            </svg>
          );
        })()}
      </div>
    </section>
  );
};

/* ---------- VENUES / ANCHORS ---------- */
const CitySeoVenues = ({ city }) => {
  const venues = (city.venues || []).filter(Boolean);
  if (venues.length === 0) return null;
  return (
    <section style={{
      padding: "100px 0", background: "var(--ink-100)", color: "var(--fg-1)",
      borderTop: "1px solid var(--ink-400)",
    }}>
      <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--accent)",
            }}>{">> "}VENUES & ANCHORS</span>
            <h3 style={{
              marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.03em", lineHeight: 0.96,
            }}>
              Where we’ve <span style={{ fontStyle: "italic", color: "var(--accent)" }}>worked</span> in<br/>{city.name}.
            </h3>
          </div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--fg-3)",
          }}>{venues.length} NAMED VENUES</span>
        </div>
        <div style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 0,
          border: "1px solid var(--ink-400)",
          borderRadius: 12,
          overflow: "hidden",
          background: "var(--ink-000)",
        }}>
          {venues.map((v, i) => (
            <div key={v + i} style={{
              padding: "18px 20px",
              borderRight: "1px solid var(--ink-400)",
              borderBottom: "1px solid var(--ink-400)",
              display: "flex", alignItems: "center", gap: 12,
              fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500,
              color: "var(--fg-1)",
            }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)",
                letterSpacing: "0.14em",
              }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ flex: 1 }}>{v}</span>
            </div>
          ))}
        </div>
        <p style={{
          marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--fg-3)",
        }}>+ ROOFTOPS, POP-UP SITES, AND PRIVATE PROPERTIES ON REQUEST</p>
      </div>
    </section>
  );
};

/* ---------- COMPOSED SECTION ---------- */
const CitySEOSection = ({ city }) => {
  if (!city || !isNonEmpty(city.name)) return null;
  const accent = city.hue || (window.hueForSlug ? window.hueForSlug(city.slug || city.name) : "#D7453E");
  return (
    <div style={{ display: "contents", "--accent": accent }}>
      <CitySeoIntro city={city}/>
      <CitySeoActivations city={city}/>
      <CitySeoServices city={city}/>
      <CitySeoVenues city={city}/>
      <CitySeoIndustriesMarkets city={city}/>
      <CitySeoFaqs city={city}/>
      <CitySeoCta city={city}/>
    </div>
  );
};

Object.assign(window, {
  CitySEOSection,
  CitySeoIntro, CitySeoActivations, CitySeoServices,
  CitySeoVenues,
  CitySeoIndustriesMarkets, CitySeoFaqs, CitySeoCta,
  DEFAULT_SERVICES,
});
