/* Tweaks panel + main App for the homepage */
const { useState: taState, useEffect: taEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "ignite",
  "heroHeadline": "We turn sparks into superfans.",
  "density": "comfy",
  "liveFeedSpeed": 1800,
  "showCoverageMap": true
}/*EDITMODE-END*/;

/* Install global tweak state */
window.__TWEAKS = Object.assign({}, DEFAULTS, window.__TWEAKS || {});

const TweaksPanel = () => {
  const [open, setOpen] = taState(false);
  const [on, setOn] = taState(false);
  const [t, setT] = taState(window.__TWEAKS);

  taEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setOn(true);
      if (e.data.type === "__deactivate_edit_mode") setOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (patch) => {
    const next = { ...t, ...patch };
    setT(next);
    window.__TWEAKS = next;
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    // trigger re-render
    window.dispatchEvent(new Event("tweaks-changed"));
  };

  if (!on) return null;

  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, zIndex: 200,
      fontFamily: "var(--font-body)",
    }}>
      {!open ? (
        <button onClick={() => setOpen(true)} style={{
          padding: "12px 16px", borderRadius: 999,
          background: "var(--ink-100)", color: "var(--fg-1)",
          border: "1px solid var(--ink-400)", fontFamily: "var(--font-mono)",
          fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer",
          display: "inline-flex", alignItems: "center", gap: 8,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}>
          <span style={{ color: "var(--ignite-500)" }}>◉</span> Tweaks
        </button>
      ) : (
        <div style={{
          width: 320, background: "var(--ink-100)", color: "var(--fg-1)",
          border: "1px solid var(--ink-400)", borderRadius: 14,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)", overflow: "hidden",
        }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--ink-400)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <OpsLine glow>>> TWEAKS</OpsLine>
            <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", color: "var(--fg-3)", cursor: "pointer", fontSize: 18 }}>×</button>
          </div>
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 8 }}>
                Accent color
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { k: "ignite", bg: "var(--ignite-500)", fg: "#fff", label: "Ignite" },
                  { k: "ember", bg: "#FFB627", fg: "#0A0B0D", label: "Ember" },
                  { k: "spark", bg: "var(--spark-500)", fg: "#0A0B0D", label: "Spark" },
                ].map(o => (
                  <button key={o.k} onClick={() => update({ accent: o.k })} style={{
                    flex: 1, padding: "10px 12px", background: t.accent === o.k ? o.bg : "var(--ink-200)",
                    color: t.accent === o.k ? o.fg : "var(--fg-2)",
                    border: "1px solid " + (t.accent === o.k ? o.bg : "var(--ink-400)"),
                    borderRadius: 8, cursor: "pointer",
                    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                  }}>{o.label}</button>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 8 }}>
                Hero headline
              </div>
              <select value={t.heroHeadline} onChange={(e) => update({ heroHeadline: e.target.value })} style={{
                width: "100%", padding: "10px 12px", background: "var(--ink-200)", color: "var(--fg-1)",
                border: "1px solid var(--ink-400)", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 13,
              }}>
                <option value="We turn sparks into superfans.">We turn sparks into superfans.</option>
                <option value="Field marketing, done right.">Field marketing, done right.</option>
                <option value="The agency that moves product.">The agency that moves product.</option>
                <option value="Activations that convert.">Activations that convert.</option>
              </select>
            </div>

            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 8 }}>
                Live feed speed · {(t.liveFeedSpeed/1000).toFixed(1)}s
              </div>
              <input type="range" min="800" max="3500" step="100" value={t.liveFeedSpeed}
                onChange={(e) => update({ liveFeedSpeed: +e.target.value })}
                style={{ width: "100%", accentColor: "var(--ignite-500)" }}/>
            </div>

            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <input type="checkbox" checked={t.showCoverageMap} onChange={(e) => update({ showCoverageMap: e.target.checked })} style={{ accentColor: "var(--ignite-500)" }}/>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-2)" }}>
                  Show coverage map
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { TweaksPanel });
