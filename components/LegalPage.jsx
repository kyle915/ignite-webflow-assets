/* Legal page (Privacy Policy / Terms of Service) — shared renderer.
   Data lives in window.LEGAL_DOCS keyed by "privacy" | "terms".
   ------------------------------------------------------------------ */

const { useState: useLegalState, useEffect: useLegalEffect, useRef: useLegalRef, useMemo: useLegalMemo } = React;

/* ---------------- inline rich-text renderer ---------------- */
/* tokens: **bold**  and  ALL_CAPS chunks get monospace treatment automatically */
const LegalInline = ({ text }) => {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return <strong key={i} style={{ color: "var(--fg-1)", fontWeight: 600 }}>{p.slice(2, -2)}</strong>;
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
};

/* ---------------- block renderer ---------------- */
const LegalBlock = ({ b }) => {
  if (b.type === "p") {
    return (
      <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--fg-2)", margin: "0 0 18px" }}>
        <LegalInline text={b.text}/>
      </p>
    );
  }
  if (b.type === "h3") {
    return (
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: 18, letterSpacing: "-0.005em", color: "var(--fg-1)",
        margin: "28px 0 12px",
      }}>{b.text}</h3>
    );
  }
  if (b.type === "ul") {
    return (
      <ul style={{ margin: "0 0 20px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {b.items.map((it, i) => (
          <li key={i} style={{
            fontSize: 15, lineHeight: 1.65, color: "var(--fg-2)",
            paddingLeft: 24, position: "relative",
          }}>
            <span style={{
              position: "absolute", left: 0, top: 0,
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--spark-500)",
              letterSpacing: "0.08em",
            }}>{String(i + 1).padStart(2, "0")}</span>
            <LegalInline text={it}/>
          </li>
        ))}
      </ul>
    );
  }
  if (b.type === "callout") {
    return (
      <div style={{
        background: "var(--ink-100)", border: "1px solid var(--ink-400)",
        borderLeft: "3px solid var(--ignite-500)",
        padding: "20px 24px", margin: "20px 0 28px", borderRadius: 4,
      }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
          color: "var(--ignite-500)", textTransform: "uppercase", marginBottom: 10,
        }}>{">> "}{b.label || "IMPORTANT"}</div>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--fg-1)", margin: 0 }}>
          <LegalInline text={b.text}/>
        </p>
      </div>
    );
  }
  if (b.type === "kv") {
    return (
      <div style={{
        marginTop: 20, border: "1px solid var(--ink-400)", borderRadius: 4,
        overflow: "hidden", background: "var(--ink-100)",
      }}>
        {b.rows.map(([k, v], i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "180px 1fr", gap: 24,
            padding: "14px 20px",
            borderTop: i ? "1px solid var(--ink-400)" : "none",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em",
              color: "var(--fg-3)", textTransform: "uppercase",
            }}>{k}</div>
            <div style={{ fontSize: 14.5, color: "var(--fg-1)" }}><LegalInline text={v}/></div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

/* ---------------- TOC + main ---------------- */
const LegalSection = ({ s, idx }) => (
  <section id={s.id} style={{
    scrollMarginTop: 100,
    padding: "56px 0 8px",
    borderTop: idx === 0 ? "none" : "1px solid var(--ink-400)",
  }}>
    <div style={{
      fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em",
      color: "var(--spark-500)", textTransform: "uppercase", marginBottom: 12,
    }}>
      {">> "}§{String(idx + 1).padStart(2, "0")}
    </div>
    <h2 style={{
      fontFamily: "var(--font-display)", fontWeight: 700,
      fontSize: "clamp(28px, 3vw, 36px)", letterSpacing: "-0.02em",
      color: "var(--fg-1)", marginBottom: 28, lineHeight: 1.1,
    }}>{s.title}</h2>
    {s.blocks.map((b, i) => <LegalBlock key={i} b={b}/>)}
  </section>
);

const LegalTOC = ({ sections, activeId }) => (
  <nav aria-label="Document sections" style={{
    position: "sticky", top: 100,
    border: "1px solid var(--ink-400)", borderRadius: 4,
    background: "var(--ink-100)", padding: "20px 18px",
    maxHeight: "calc(100vh - 140px)", overflowY: "auto",
  }}>
    <div style={{
      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
      color: "var(--ignite-500)", textTransform: "uppercase", marginBottom: 14,
    }}>{">> "}CONTENTS</div>
    <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
      {sections.map((s, i) => {
        const isActive = activeId === s.id;
        return (
          <li key={s.id}>
            <a href={"#" + s.id} style={{
              display: "grid", gridTemplateColumns: "28px 1fr", gap: 8,
              padding: "7px 8px",
              fontSize: 12.5, lineHeight: 1.35,
              color: isActive ? "var(--fg-1)" : "var(--fg-3)",
              background: isActive ? "rgba(214,243,95,0.08)" : "transparent",
              borderLeft: isActive ? "2px solid var(--spark-500)" : "2px solid transparent",
              transition: "all 160ms var(--ease-out)",
              borderRadius: 2,
            }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "var(--fg-1)"; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--fg-3)"; }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: isActive ? "var(--spark-500)" : "var(--fg-4)" }}>
                §{String(i + 1).padStart(2, "0")}
              </span>
              <span>{s.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);

const LegalHero = ({ doc, sister }) => (
  <section style={{
    padding: "var(--hero-pad-compact) 0", position: "relative", overflow: "hidden",
    background: "var(--ink-000)", borderBottom: "1px solid var(--ink-400)",
  }}>
    <Container style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "end" }}>
        <div style={{ maxWidth: 920 }}>
          <OpsLine glow>{">> "}LEGAL · {doc.kind.toUpperCase()} · v{doc.version}</OpsLine>
          <h1 style={{
            marginTop: 20, fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(56px, 8vw, 112px)", letterSpacing: "-0.035em", lineHeight: 0.92,
          }}>
            {doc.titleA}<br/>
            <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>{doc.titleB}</span>
          </h1>
          <p style={{
            marginTop: 24, fontSize: 17, lineHeight: 1.6,
            color: "var(--fg-2)", maxWidth: 720,
          }}>{doc.lede}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 220 }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
            color: "var(--fg-3)", textTransform: "uppercase",
          }}>EFFECTIVE</div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20,
            color: "var(--fg-1)", letterSpacing: "-0.01em",
          }}>{doc.effective}</div>
          <div style={{ height: 12 }}/>
          <a href={sister.href} style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--spark-500)",
            borderTop: "1px solid var(--ink-400)", paddingTop: 14,
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--spark-400)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--spark-500)"}
          >→ READ {sister.label}</a>
        </div>
      </div>
    </Container>
  </section>
);

const LegalContactCTA = ({ doc }) => (
  <section style={{
    padding: "80px 0 120px", background: "var(--ink-000)",
    borderTop: "1px solid var(--ink-400)",
  }}>
    <Container>
      <div style={{
        border: "1px solid var(--ink-400)", borderRadius: 8,
        padding: "40px 44px", background: "var(--ink-100)",
        display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "center",
      }}>
        <div>
          <OpsLine glow>{">> "}QUESTIONS ABOUT THIS DOCUMENT</OpsLine>
          <h2 style={{
            marginTop: 12, fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.025em",
            lineHeight: 1.05, color: "var(--fg-1)",
          }}>
            Talk to a human at <span style={{ fontStyle: "italic", color: "var(--ignite-500)" }}>Ignite</span>.
          </h2>
          <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: "var(--fg-2)", maxWidth: 520 }}>
            For data requests, contract questions, or compliance inquiries, reach the team directly. We respond within applicable timeframes.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {doc.contact.map(([k, v]) => (
            <div key={k} style={{
              display: "grid", gridTemplateColumns: "100px 1fr", gap: 16,
              paddingBottom: 12, borderBottom: "1px solid var(--ink-400)",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em",
                color: "var(--fg-3)", textTransform: "uppercase",
              }}>{k}</div>
              <div style={{ fontSize: 14, color: "var(--fg-1)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

/* ---------------- main page ---------------- */
const LegalPage = ({ kind }) => {
  const doc = window.LEGAL_DOCS[kind];
  const SISTERS = {
    privacy: { href: "terms.html", label: "TERMS OF SERVICE" },
    terms: { href: "privacy.html", label: "PRIVACY POLICY" },
    accessibility: { href: "privacy.html", label: "PRIVACY POLICY" },
  };
  const sister = SISTERS[kind] || SISTERS.privacy;

  const [activeId, setActiveId] = useLegalState(doc.sections[0]?.id);

  useLegalEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    doc.sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <SiteNav rel="../"/>
      <LegalHero doc={doc} sister={sister}/>
      <section style={{ padding: "0 0 80px", background: "var(--ink-000)" }}>
        <Container>
          <div style={{
            display: "grid", gridTemplateColumns: "260px 1fr",
            gap: 72, alignItems: "start", paddingTop: 24,
          }}>
            <LegalTOC sections={doc.sections} activeId={activeId}/>
            <article style={{ maxWidth: 780 }}>
              {doc.sections.map((s, i) => <LegalSection key={s.id} s={s} idx={i}/>)}

              <div style={{
                marginTop: 56, paddingTop: 24,
                borderTop: "1px solid var(--ink-400)",
                display: "flex", justifyContent: "space-between",
                alignItems: "center", gap: 24, flexWrap: "wrap",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
                  color: "var(--fg-3)", textTransform: "uppercase",
                }}>LAST UPDATED · {doc.effective}</div>
                <a href={"#top"} style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
                  color: "var(--spark-500)", textTransform: "uppercase",
                }}
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >↑ BACK TO TOP</a>
              </div>
            </article>
          </div>
        </Container>
      </section>
      <LegalContactCTA doc={doc}/>
      <SiteFooter rel="../"/>
    </>
  );
};

Object.assign(window, { LegalPage });
