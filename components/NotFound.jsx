/* 404 — cool, on-brand, auto-redirect with countdown */
const { useState: nfUseState, useEffect: nfUseEffect } = React;

const NotFound = () => {
  const [count, setCount] = nfUseState(10);
  const [paused, setPaused] = nfUseState(false);
  const [glitchTxt, setGlitchTxt] = nfUseState("404");

  // countdown → redirect
  nfUseEffect(() => {
    if (paused) return;
    if (count <= 0) {
      window.location.href = "../index.html";
      return;
    }
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, paused]);

  // 404 glitch text shuffle
  nfUseEffect(() => {
    const chars = ["404", "4Ø4", "4O4", "#04", "40█", "404"];
    let i = 0;
    const iv = setInterval(() => {
      i = (i + 1) % chars.length;
      setGlitchTxt(chars[i]);
    }, 180);
    return () => clearInterval(iv);
  }, []);

  return (
    <main style={{
      minHeight: "calc(100vh - 140px)", background: "#0B0B0B", color: "#fff",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "var(--font-display, 'Neue Haas Grotesk Display', system-ui, sans-serif)",
    }}>
      {/* drifting grid */}
      {/* orange orbit blob */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: "transparent",
        filter: "blur(40px)",
        animation: "nf-blob-a 14s ease-in-out infinite",
        pointerEvents: "none",
      }}/>
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "transparent",
        filter: "blur(40px)",
        animation: "nf-blob-b 18s ease-in-out infinite",
        pointerEvents: "none",
      }}/>

      {/* scan line */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, top: 0,
        height: "100%", pointerEvents: "none",
        background: "repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)",
      }}/>

      {/* horizon glows */}
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, top: "12%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(215, 69, 62,0.4), transparent)",
      }}/>
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, bottom: "12%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(214,243,95,0.25), transparent)",
      }}/>

      {/* ============ CONTENT ============ */}
      <div style={{
        position: "relative", zIndex: 2, maxWidth: 1100, width: "100%",
        textAlign: "center",
      }}>
        {/* status strip */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 12,
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)",
          padding: "10px 18px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.03)",
          marginBottom: 40,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#D7453E", boxShadow: "0 0 12px #D7453E",
            animation: "nf-pulse 1.4s ease-in-out infinite",
          }}/>
          SIGNAL LOST · TRANSMISSION INTERRUPTED
        </div>

        {/* glitchy 404 */}
        <div style={{
          fontWeight: 900,
          fontSize: "clamp(140px, 26vw, 360px)",
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          background: "linear-gradient(180deg, #fff 0%, #fff 55%, rgba(255,255,255,0.25) 100%)",
          WebkitBackgroundClip: "text", backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          fontVariantNumeric: "tabular-nums",
          
        }}>
          <span style={{ position: "relative", display: "inline-block" }}>
            {glitchTxt}
            {/* RGB split echoes */}
            <span aria-hidden="true" style={{
              position: "absolute", inset: 0,
              color: "#D7453E", mixBlendMode: "screen",
              WebkitTextFillColor: "#D7453E",
              transform: "translate(4px, 0)", opacity: 0.55,
              animation: "nf-shift-a 2.4s steps(8) infinite",
            }}>{glitchTxt}</span>
            <span aria-hidden="true" style={{
              position: "absolute", inset: 0,
              color: "#D6F35F", mixBlendMode: "screen",
              WebkitTextFillColor: "#D6F35F",
              transform: "translate(-4px, 0)", opacity: 0.45,
              animation: "nf-shift-b 2.8s steps(8) infinite",
            }}>{glitchTxt}</span>
          </span>
        </div>

        {/* headline */}
        <h1 style={{
          margin: "32px auto 0", maxWidth: 820,
          fontWeight: 800, fontSize: "clamp(28px, 4vw, 52px)",
          lineHeight: 1.05, letterSpacing: "-0.02em",
          color: "#fff", textWrap: "balance",
        }}>
          This page is{" "}
          <span style={{
            fontStyle: "italic", color: "#D7453E",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 500,
          }}>off-site.</span>
        </h1>

        <p style={{
          margin: "20px auto 0", maxWidth: 560,
          fontSize: 18, lineHeight: 1.55,
          color: "rgba(255,255,255,0.6)",
        }}>
          Looks like this URL is in the field without us. Let's get you back to base.
        </p>

        {/* CTAs */}
        <div style={{
          marginTop: 44, display: "flex", gap: 12,
          justifyContent: "center", flexWrap: "wrap",
        }}>
          <a href="../index.html" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#D7453E", color: "#000",
            padding: "16px 28px", borderRadius: 999,
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
            fontWeight: 700, textDecoration: "none",
            boxShadow: "0 0 0 0 rgba(215, 69, 62,0.55)",
            animation: "nf-cta-pulse 2.4s ease-in-out infinite",
          }}>
            <span>↩</span> Back to homepage
          </a>
          <a href="https://www.igniteproductions.co/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "transparent", color: "#fff",
            padding: "16px 28px", borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.25)",
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
            fontWeight: 700, textDecoration: "none",
          }}>
            Get in touch
          </a>
        </div>

        {/* countdown */}
        <div style={{
          marginTop: 56,
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
        }}>
          {paused ? (
            <span>
              Auto-redirect paused.{" "}
              <button onClick={() => setPaused(false)} style={{
                background: "none", border: "none", padding: 0,
                color: "#D7453E", cursor: "pointer",
                fontFamily: "inherit", fontSize: "inherit",
                letterSpacing: "inherit", textTransform: "inherit",
                textDecoration: "underline",
              }}>
                Resume
              </button>
            </span>
          ) : (
            <span>
              Returning to base in{" "}
              <span style={{ color: "#fff", fontVariantNumeric: "tabular-nums" }}>
                00:{String(Math.max(0, count)).padStart(2, "0")}
              </span>
              {" · "}
              <button onClick={() => setPaused(true)} style={{
                background: "none", border: "none", padding: 0,
                color: "rgba(255,255,255,0.6)", cursor: "pointer",
                fontFamily: "inherit", fontSize: "inherit",
                letterSpacing: "inherit", textTransform: "inherit",
                textDecoration: "underline",
              }}>
                Hold position
              </button>
            </span>
          )}
        </div>
      </div>

      <style>{`
        @keyframes nf-grid {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(56px, 56px); }
        }
        @keyframes nf-blob-a {
          0%, 100% { transform: translate(-55%, -45%) scale(1); }
          50%      { transform: translate(-45%, -55%) scale(1.15); }
        }
        @keyframes nf-blob-b {
          0%, 100% { transform: translate(-45%, -55%) scale(1.1); }
          50%      { transform: translate(-55%, -45%) scale(0.95); }
        }
        @keyframes nf-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes nf-shift-a {
          0%, 100% { transform: translate(4px, 0); }
          25%      { transform: translate(2px, -1px); }
          50%      { transform: translate(5px, 1px); }
          75%      { transform: translate(3px, 0); }
        }
        @keyframes nf-shift-b {
          0%, 100% { transform: translate(-4px, 0); }
          25%      { transform: translate(-3px, 1px); }
          50%      { transform: translate(-5px, -1px); }
          75%      { transform: translate(-2px, 0); }
        }
        @keyframes nf-cta-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(215, 69, 62,0.55); }
          50%      { box-shadow: 0 0 0 14px rgba(215, 69, 62, 0); }
        }
      `}</style>
    </main>
  );
};

Object.assign(window, { NotFound });
