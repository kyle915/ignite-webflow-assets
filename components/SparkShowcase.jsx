/* Live Spark dashboard moment — dark, the "wow" section */
const { useState: shState, useEffect: shEffect, useRef: shRef } = React;

const US_CITIES = [
  { name: "SEATTLE", lat: 47.61, lng: -122.33, brand: "White Claw", samples: 412, leads: 78, status: "ACTIVE" },
  { name: "PORTLAND", lat: 45.52, lng: -122.68, brand: "Krispy Krunchy", samples: 268, leads: 41, status: "ACTIVE" },
  { name: "SAN FRANCISCO", lat: 37.77, lng: -122.42, brand: "Liquid Death", samples: 522, leads: 96, status: "LIVE" },
  { name: "LOS ANGELES", lat: 34.05, lng: -118.24, brand: "Dude Wipes", samples: 638, leads: 112, status: "LIVE" },
  { name: "PHOENIX", lat: 33.45, lng: -112.07, brand: "Mas+", samples: 184, leads: 38, status: "ACTIVE" },
  { name: "DENVER", lat: 39.74, lng: -104.99, brand: "Liquid Death", samples: 346, leads: 71, status: "LIVE" },
  { name: "DALLAS", lat: 32.78, lng: -96.80, brand: "Smalls Sliders", samples: 412, leads: 58, status: "ACTIVE" },
  { name: "HOUSTON", lat: 29.76, lng: -95.37, brand: "Total Wireless", samples: 388, leads: 84, status: "ACTIVE" },
  { name: "AUSTIN", lat: 30.27, lng: -97.74, brand: "White Claw", samples: 327, leads: 68, status: "LIVE" },
  { name: "MIAMI", lat: 25.76, lng: -80.19, brand: "Mark Anthony", samples: 504, leads: 102, status: "LIVE" },
  { name: "ATLANTA", lat: 33.75, lng: -84.39, brand: "Krispy Krunchy", samples: 296, leads: 49, status: "ACTIVE" },
  { name: "NASHVILLE", lat: 36.16, lng: -86.78, brand: "White Claw", samples: 218, leads: 36, status: "ACTIVE" },
  { name: "CHICAGO", lat: 41.88, lng: -87.63, brand: "Total Wireless", samples: 432, leads: 88, status: "LIVE" },
  { name: "DETROIT", lat: 42.33, lng: -83.05, brand: "Liquid Death", samples: 244, leads: 42, status: "ACTIVE" },
  { name: "BROOKLYN", lat: 40.65, lng: -73.95, brand: "Liquid Death", samples: 586, leads: 124, status: "LIVE" },
  { name: "BOSTON", lat: 42.36, lng: -71.06, brand: "White Claw", samples: 358, leads: 72, status: "ACTIVE" },
  { name: "DC", lat: 38.90, lng: -77.04, brand: "Dude Wipes", samples: 312, leads: 64, status: "ACTIVE" },
];

/* Equirectangular projection tuned to the continental US, into a 1000x560 viewBox. */
const MAP_W = 1000, MAP_H = 560;
const projX = (lng) => (lng + 125) / 59 * MAP_W;
const projY = (lat) => (49.5 - lat) / 25.5 * MAP_H;

/* Continental US border traced as (lng,lat) waypoints, projected at runtime so the
   outline and the pins share one coordinate system (real geography). */
const US_BORDER = [
  [-124.6,48.4],[-123.0,49.0],[-104.0,49.0],[-95.2,49.0],[-95.0,49.4],[-94.6,48.5],
  [-89.5,48.0],[-88.0,46.8],[-84.9,46.5],[-83.4,45.9],[-82.5,44.0],[-82.9,42.3],
  [-80.5,42.3],[-79.0,43.3],[-76.5,43.6],[-74.9,45.0],[-71.5,45.0],[-69.2,47.4],
  [-67.0,44.8],[-70.2,43.6],[-70.9,42.3],[-71.9,41.3],[-73.0,40.9],[-74.0,40.5],
  [-74.4,39.4],[-75.5,38.4],[-76.0,37.0],[-75.6,35.2],[-78.5,33.9],[-80.9,32.0],
  [-81.4,30.7],[-80.1,26.8],[-80.4,25.2],[-81.8,24.6],[-82.7,27.8],[-83.7,29.9],
  [-84.4,30.0],[-88.0,30.3],[-89.5,29.1],[-91.5,29.5],[-93.8,29.7],[-97.0,27.8],
  [-97.2,26.0],[-99.2,26.4],[-101.4,29.8],[-102.6,29.8],[-103.0,29.0],[-104.9,30.6],
  [-106.5,31.8],[-108.2,31.3],[-111.1,31.3],[-114.8,32.5],[-117.1,32.5],[-118.4,34.0],
  [-120.6,34.5],[-121.9,36.6],[-122.5,37.8],[-124.0,40.4],[-124.2,43.3],[-124.1,46.3],
];
const US_PATH = US_BORDER.map((p, i) => (i ? "L" : "M") + projX(p[0]).toFixed(1) + "," + projY(p[1]).toFixed(1)).join(" ") + " Z";

const CoverageMap = () => {
  const [focus, setFocus] = shState(null);
  const [pulseIdx, setPulseIdx] = shState(0);
  shEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setPulseIdx(i => (i + 1) % US_CITIES.length), 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ position: "relative", aspectRatio: MAP_W + " / " + MAP_H, width: "100%" }}>
      <GridOverlay size={24} opacity={0.06}/>
      <svg viewBox={"0 0 " + MAP_W + " " + MAP_H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
        <path d={US_PATH} fill="rgba(214,243,95,0.05)" stroke="rgba(214,243,95,0.30)" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
      {US_CITIES.map((c, i) => {
        const isPulse = i === pulseIdx;
        const isFocus = focus === i;
        return (
          <div key={c.name}
            onMouseEnter={() => setFocus(i)}
            onMouseLeave={() => setFocus(null)}
            style={{
              position: "absolute", left: (projX(c.lng) / MAP_W * 100) + "%", top: (projY(c.lat) / MAP_H * 100) + "%",
              transform: "translate(-50%, -50%)", cursor: "pointer",
              zIndex: isFocus ? 10 : 1,
            }}>
            {isPulse && (
              <span style={{
                position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                width: 8, height: 8, borderRadius: 999,
                border: "1.5px solid var(--spark-500)",
                animation: "radar 1.5s var(--ease-out)",
              }}/>
            )}
            <span style={{
              display: "block", width: isFocus ? 12 : 8, height: isFocus ? 12 : 8, borderRadius: 999,
              background: "var(--spark-500)",
              
              transition: "width 160ms, height 160ms",
            }}/>
            {isFocus ? (
              <div style={{
                position: "absolute", left: "50%", top: "calc(100% + 10px)", transform: "translateX(-50%)",
                whiteSpace: "nowrap", padding: "12px 14px", minWidth: 200,
                background: "rgba(10,11,13,0.96)", border: "1px solid rgba(214,243,95,0.4)",
                borderRadius: 8, pointerEvents: "none",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                animation: "sp-pop 240ms cubic-bezier(0.2,0.9,0.3,1)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--fg-3)", textTransform: "uppercase" }}>{c.name}</div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
                    color: c.status === "LIVE" ? "var(--spark-500)" : "var(--fg-3)",
                    display: "inline-flex", alignItems: "center", gap: 4,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor", animation: c.status === "LIVE" ? "sp-pulse-dot 1.6s infinite" : "none" }}/>
                    {c.status}
                  </span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 15, color: "var(--fg-1)", letterSpacing: "-0.01em", marginBottom: 10 }}>{c.brand}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, borderTop: "1px solid var(--ink-400)", paddingTop: 8 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 18, color: "var(--spark-500)", lineHeight: 1 }}>{c.samples}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", marginTop: 3 }}>samples</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 18, color: "var(--fg-1)", lineHeight: 1 }}>{c.leads}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fg-3)", textTransform: "uppercase", marginTop: 3 }}>leads</div>
                  </div>
                </div>
              </div>
            ) : (i === pulseIdx) && (
              <div style={{
                position: "absolute", left: "50%", top: "calc(100% + 6px)", transform: "translateX(-50%)",
                whiteSpace: "nowrap", padding: "4px 8px",
                background: "rgba(10,11,13,0.95)", border: "1px solid var(--ink-400)",
                borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "var(--spark-500)", pointerEvents: "none",
              }}>
                {c.name} · {c.brand}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const BarChart = ({ animate }) => {
  const bars = [38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100, 84, 92];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 120 }}>
      {bars.map((h, i) => (
        <div key={i} style={{
          flex: 1, height: animate ? `${h}%` : "0%",
          background: `linear-gradient(to top, var(--spark-600), var(--spark-500))`,
          borderRadius: "3px 3px 0 0",
          transition: `height 700ms cubic-bezier(0.2,0.7,0.2,1) ${i * 40}ms`,
        }}/>
      ))}
    </div>
  );
};

const ActivityRows = () => {
  const rows = [
    { t: "09:14", place: "AUSTIN, TX", brand: "White Claw", status: "checked-in", fg: "var(--spark-500)" },
    { t: "09:12", place: "BROOKLYN, NY", brand: "Liquid Death", status: "on-site", fg: "var(--spark-500)" },
    { t: "09:08", place: "DENVER, CO", brand: "Liquid Death", status: "setup", fg: "var(--ember-500)" },
    { t: "08:56", place: "MIAMI, FL", brand: "Mark Anthony", status: "dispatched", fg: "var(--fg-2)" },
    { t: "08:52", place: "CHICAGO, IL", brand: "Total Wireless", status: "photo upload", fg: "var(--info)" },
    { t: "08:44", place: "LA, CA", brand: "Dude Wipes", status: "recap sent", fg: "var(--success)" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 16, alignItems: "center",
          padding: "10px 12px", borderRadius: 8,
          background: i === 0 ? "rgba(214,243,95,0.08)" : "transparent",
          border: "1px solid " + (i === 0 ? "rgba(214,243,95,0.25)" : "transparent"),
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{r.t}</span>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--fg-3)", textTransform: "uppercase" }}>{r.place}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 13.5, marginTop: 2 }}>{r.brand}</div>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: r.fg }}>
            {r.status}
          </span>
        </div>
      ))}
    </div>
  );
};

const BROADCAST_PHOTOS = [
  { src: (window.__resources?.r_68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg"), label: "WHITE CLAW · AUSTIN" },
  { src: (window.__resources?.r_68962c63c89c6cf0f46a6b66_SMALLS93_11_15_ || "https://cdn.prod.website-files.com/688129f3841088c282c32750/68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg"), label: "SMALLS SLIDERS · DALLAS" },
  { src: (window.__resources?.r_6882bb7581d3d94867693919_liquid_death || "https://cdn.prod.website-files.com/688129f3841088c282c32750/6882bb7581d3d94867693919_liquid-death.webp"), label: "LIQUID DEATH · LOS ANGELES" },
  { src: (window.__resources?.r_688ce54c92fd540e9bdf283a_3 || "https://cdn.prod.website-files.com/688129f3841088c282c32750/688ce54c92fd540e9bdf283a_3.png"), label: "MAS+ · MIAMI" },
];

const BroadcastTile = () => {
  const [i, setI] = shState(0);
  shEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setI(x => (x + 1) % BROADCAST_PHOTOS.length), 3800);
    return () => clearInterval(id);
  }, []);
  const p = BROADCAST_PHOTOS[i];
  return (
    <div style={{
      marginTop: 10, borderRadius: 10, overflow: "hidden", position: "relative",
      border: "1px solid var(--ink-400)", aspectRatio: "16 / 10", background: "#000",
    }}>
      {BROADCAST_PHOTOS.map((ph, idx) => (
        <img key={idx} src={ph.src} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          opacity: idx === i ? 1 : 0, transition: "opacity 700ms var(--ease-out)",
        }} loading="lazy" decoding="async"/>
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.78))" }}/>
      <div style={{
        position: "absolute", top: 8, left: 8, display: "inline-flex", alignItems: "center", gap: 6,
        padding: "3px 7px", borderRadius: 5, background: "rgba(0,0,0,0.55)", border: "1px solid rgba(214,243,95,0.4)",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--spark-500)", animation: "sp-pulse-dot 1.6s infinite" }}/>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.2em", color: "var(--spark-500)" }}>LIVE</span>
      </div>
      <div style={{
        position: "absolute", bottom: 7, left: 9, right: 9,
        fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em",
        color: "rgba(255,255,255,0.92)", textTransform: "uppercase",
      }}>{p.label}</div>
    </div>
  );
};

/* ============ LIVE INTERACTIVE DASHBOARD — laptop stage + full-screen preview ============ */
const sparkDemoSrc = (opts) => (/\/pages\//.test(location.pathname) ? "spark-app-demo.html" : "pages/spark-app-demo.html") + "?frame=1&view=dashboard" + (opts || "");
const APP_W = 1120, APP_H = 700;

const STAGE_CSS = `
.spk-stage{position:relative;width:100%;max-width:980px;margin:0 auto;padding-bottom:34px;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent}
.spk-laptop{position:relative;width:100%}
.spk-lid{position:relative;padding:2.4% 2.2% 2.2%;border-radius:2.6% 2.6% .9% .9% / 3.6% 3.6% 1.3% 1.3%;background:linear-gradient(180deg,#2C3038,#191C21);border:1px solid rgba(250,250,247,0.16);box-shadow:0 50px 110px rgba(0,0,0,.7),inset 0 1px 0 rgba(250,250,247,.16);box-sizing:border-box;transition:box-shadow .3s ease}
.spk-stage:hover .spk-lid{box-shadow:0 60px 130px rgba(0,0,0,.75),0 0 0 1px rgba(214,243,95,.25),inset 0 1px 0 rgba(250,250,247,.16)}
.spk-stage:focus-visible .spk-lid{outline:2px solid #D6F35F;outline-offset:6px}
.spk-cam{position:absolute;left:50%;top:1.1%;transform:translateX(-50%);width:5px;height:5px;border-radius:999px;background:#454A55;box-shadow:0 0 0 2px rgba(0,0,0,.4)}
.spk-screen{position:relative;aspect-ratio:16/10;border-radius:6px;overflow:hidden;background:#0A0B0D}
.spk-base{position:relative;height:clamp(9px,1.6vw,15px);margin-inline:-2.8%;border-radius:0 0 14px 14px;background:linear-gradient(180deg,#3D424C,#22252B 45%,#121418);border:1px solid rgba(250,250,247,.2);border-top:0;box-shadow:0 30px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(250,250,247,.22)}
.spk-notch{position:absolute;left:50%;top:0;transform:translateX(-50%);width:13%;height:45%;border-radius:0 0 8px 8px;background:#0C0E11}
.spk-appframe{position:absolute;inset:0;overflow:hidden;background:#07080A}
.spk-appframe iframe{display:block}
.spk-explore{position:absolute;left:50%;bottom:0;transform:translateX(-50%);z-index:6;display:inline-flex;align-items:center;gap:9px;padding:9px 18px;border-radius:999px;background:#0A0B0D;color:#FAFAF7;border:1px solid rgba(214,243,95,.55);font-family:var(--font-mono);font-weight:600;font-size:12.5px;white-space:nowrap;box-shadow:0 0 0 1px rgba(214,243,95,.18),0 0 22px rgba(214,243,95,.42),0 14px 40px rgba(214,243,95,.2);transition:transform .25s cubic-bezier(.2,.7,.2,1),box-shadow .25s}
.spk-stage:hover .spk-explore{transform:translateX(-50%) translateY(-4px);box-shadow:0 0 0 1px rgba(214,243,95,.35),0 0 32px rgba(214,243,95,.58),0 18px 48px rgba(214,243,95,.28)}
.spk-lb{position:fixed;inset:0;z-index:300;background:rgba(6,7,9,.92);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);display:flex;padding:clamp(10px,2vw,28px);overflow:auto}
.spk-lb-inner{width:100%;max-width:1320px;margin:auto}
.spk-lb-bar{display:flex;align-items:center;gap:14px;margin-bottom:12px;flex-wrap:wrap}
.spk-close{margin-left:auto;cursor:pointer;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(250,250,247,.06);border:1px solid rgba(250,250,247,.1);color:#FAFAF7;font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase}
.spk-close:hover{border-color:rgba(214,243,95,.5);color:#D6F35F}
.spk-usbg{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;opacity:.62;filter:saturate(.7);-webkit-mask-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.35) 7%,#000 22%,#000 88%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.35) 7%,#000 22%,#000 88%,transparent 100%)}
.spk-usbg>div{width:100%;height:100%}
.spk-usbg canvas{display:block;width:100% !important;height:100% !important}
.spk-usveil{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(10,11,13,.98) 0%,rgba(10,11,13,.82) 12%,rgba(10,11,13,.78) 45%,rgba(10,11,13,.92) 82%,rgba(10,11,13,.99) 100%)}
.spk-intro{position:relative;background:var(--ink-000);color:var(--fg-1);padding:clamp(72px,8vw,116px) 0 0;overflow:hidden}
.spk-introcard{max-width:900px;margin:0 auto;text-align:center}
.spk-introcard>h2,.spk-introcard>p{margin:0}
.spk-introcard h2{margin:0 auto;max-width:none;width:min(100%,34ch);font-family:var(--font-mono);font-weight:700;color:var(--spark-500);font-size:clamp(26px,3.2vw,48px);letter-spacing:-0.02em;line-height:1.08;text-wrap:balance}
.spk-introcard p{margin:0 auto;max-width:660px;font-family:var(--font-display);font-weight:600;font-size:clamp(17px,1.6vw,22px);line-height:1.45;letter-spacing:-0.015em;color:var(--fg-1);text-wrap:pretty}
.spk-introlink{display:inline-flex;align-items:center;gap:9px;margin-top:26px;font-family:var(--font-mono);font-size:12.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--spark-500);text-decoration:none}
.spk-introlink:hover{color:#e6ff7a}
@media (max-width:640px){.spk-explore{font-size:11px;padding:8px 14px}}
@media (prefers-reduced-motion:reduce){.spk-explore,.spk-lid{transition:none}}
`;
if (typeof document !== "undefined" && !document.getElementById("spk-stage-css")) {
  const st = document.createElement("style"); st.id = "spk-stage-css"; st.textContent = STAGE_CSS; document.head.appendChild(st);
}

/* Scales the real demo app into whatever box it's given */
const SparkAppFrame = ({ interactive = false, fill = false, label }) => {
  const wrap = shRef(null);
  const [s, setS] = shState(0);
  shEffect(() => {
    const el = wrap.current; if (!el) return;
    const read = () => setS(el.clientWidth / APP_W);
    read();
    if (typeof ResizeObserver === "function") { const ro = new ResizeObserver(read); ro.observe(el); return () => ro.disconnect(); }
    window.addEventListener("resize", read); return () => window.removeEventListener("resize", read);
  }, []);
  const h = fill && s ? Math.round((wrap.current ? wrap.current.clientHeight : APP_H * s) / s) : APP_H;
  return (
    <div ref={wrap} className="spk-appframe">
      <iframe src={sparkDemoSrc(interactive ? "&scroll=1" : "")} title={label || "Spark dashboard"} scrolling="no" loading="lazy"
        tabIndex={interactive ? 0 : -1}
        style={{ position: "absolute", left: 0, top: 0, width: APP_W, height: h, border: 0,
          transform: "scale(" + (s || 0.001) + ")", transformOrigin: "top left",
          pointerEvents: interactive ? "auto" : "none", opacity: s ? 1 : 0, transition: "opacity .35s ease" }}/>
    </div>
  );
};

const SparkPreviewLightbox = ({ onClose }) => {
  shEffect(() => {
    const k = e => { if (e.key === "Escape") onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, []);
  return (
    <div className="spk-lb" role="dialog" aria-modal="true" aria-label="Spark dashboard live preview"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="spk-lb-inner">
        <div className="spk-lb-bar">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--spark-500)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--spark-500)", animation: "sp-pulse-dot 1.6s infinite" }}/>
            Live preview · command center
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--fg-3)" }}>CLICK THE SIDEBAR · THIS IS THE REAL APP</span>
          <button onClick={onClose} className="spk-close" aria-label="Close preview">Close ✕</button>
        </div>
        <div style={{ background: "var(--ink-100, #111317)", border: "1px solid var(--ink-400)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", borderBottom: "1px solid var(--ink-400)", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ display: "flex", gap: 5 }}>{["#FF5F57", "#FFBD2E", "#28C840"].map(c => <span key={c} style={{ width: 7, height: 7, borderRadius: 999, background: c }}/>)}</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>spark.igniteproductions.co / dashboard</span>
          </div>
          <div style={{ position: "relative", height: "min(70vh, 720px)" }}>
            <SparkAppFrame interactive fill label="Spark dashboard, interactive preview"/>
          </div>
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <AccentBtn size="lg" accent="spark" onClick={() => location.href = "pages/spark.html"}>Tour the platform</AccentBtn>
        </div>
      </div>
    </div>
  );
};

const LiveDashboard = () => {
  const [open, setOpen] = shState(false);
  return (
    <React.Fragment>
      <div className="spk-stage" role="button" tabIndex={0} aria-label="Open the live Spark dashboard preview"
        onClick={() => setOpen(true)}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}>
        <div className="spk-laptop">
          <div className="spk-lid">
            <span className="spk-cam"/>
            <div className="spk-screen"><SparkAppFrame label="Spark dashboard, program overview"/></div>
          </div>
          <div className="spk-base"><span className="spk-notch"/></div>
        </div>
        <span className="spk-explore">
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--spark-500)", animation: "sp-pulse-dot 1.6s infinite", flex: "0 0 auto" }}/>
          Click to explore the real dashboard
        </span>
      </div>
      {open && <SparkPreviewLightbox onClose={() => setOpen(false)}/>}
    </React.Fragment>
  );
};

const SparkShowcase = () => {
  const [ref] = useInView({ threshold: 0.3 });
  shEffect(() => {
    let tries = 0, t;
    const go = () => {
      const u = window.UnicornStudio;
      if (u && typeof u.init === "function") { try { u.init(); } catch (e) {} return; }
      if (++tries < 70) t = setTimeout(go, 150);
    };
    go();
    return () => t && clearTimeout(t);
  }, []);
  return (
    <section ref={ref} data-screen-label="Spark Showcase" style={{
      position: "relative", background: "var(--ink-000)", color: "var(--fg-1)",
      padding: "120px 0", overflow: "hidden",
    }}>
      <div className="spk-usbg" aria-hidden="true"><div data-us-project="WqBfeY5fd2RuEYg2FcEW"></div></div>
      <div className="spk-usveil" aria-hidden="true"/>
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}><GridOverlay size={48} opacity={0.04}/></div>

      <Container style={{ position: "relative", zIndex: 3 }}>
        <div className="spk-introcard" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 56, gap: 18 }}>
          <LivePill/>
          <img src={(window.__resources?.r_assets_spark_chrome_wordmark_png || "assets/spark-chrome-wordmark.png")}
            alt="Introducing Spark" style={{ display: "block", width: "min(360px, 62vw)", height: "auto" }} loading="lazy" decoding="async"/>
          <h2><Bracket>Field marketing finally gets the intelligence it deserves.</Bracket></h2>
          <p>Every engagement runs on <span style={{ fontStyle: "italic", color: "var(--spark-500)" }}>Spark</span>, live dashboards.<br/>GPS check-ins. Instant recaps.</p>
          <AccentBtn size="lg" accent="spark" onClick={() => location.href = "pages/spark.html"}>
            Tour the platform
          </AccentBtn>
        </div>

        <LiveDashboard/>

        {/* Features strip */}
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            ["GPS-verified check-ins", "Every ambassador clocks in from the actual venue. No paper sign-in sheets, no fudged timesheets."],
            ["Auto-generated recaps", "Event summaries write themselves, photos, notes, counts, attendance, sent to your inbox within hours."],
            ["Real-time dashboards", "Watch 17 markets at once. Leadership shouldn't have to ask 'what did we get?', they should already see it."],
            ["Self-service requests", "Your team submits activation requests through Spark. Staffing, permits, briefs, all tracked."],
          ].map(([h, d]) => (
            <div key={h}>
              <div style={{ color: "var(--spark-500)", fontFamily: "var(--font-mono)", marginBottom: 10 }}>▸</div>
              <h4 style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 17, marginBottom: 8 }}>{h}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

Object.assign(window, { CoverageMap, SparkShowcase, BarChart, ActivityRows, BroadcastTile, LiveDashboard, SparkAppFrame, SparkPreviewLightbox });
