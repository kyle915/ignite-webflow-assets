/* Proof band: OpenAI Dev Day + Claude Code workshop tour. Used on event staffing + trade show service pages. */
const AI_PROOF = [
  { slug:"openai-devday", brand:"OpenAI", logo:"../assets/logo-openai-mark.png", img:"../assets/openai-devday-keynote.jpg", alt:"Attendees seated for the OpenAI Dev Day 2026 keynote, with Ignite ushers on the floor", eyebrow:"DEV DAY 2026 // EVENT EXECUTION", big:"87", unit:"brand ambassadors on site", line:"Experiential product areas, keynote ushers, wayfinding, traffic management and F&B support, with lead and supervisor ambassadors across the venue." },
  { slug:"claude-code-workshops", brand:"Claude", logo:"../assets/logo-claude.png", img:"../assets/claude-workshops-atlanta-team.png", alt:"Ignite brand ambassadors at the registration desk for Claude Workshops in Atlanta", eyebrow:"CLAUDE CODE WORKSHOP TOUR // 12 CITIES", big:"12", unit:"city workshop tour", line:"Brand ambassador staffing and on-site execution at every stop, so presenters and developers can focus on the workshop." },
];
const AI_STRIP = [
  ["../assets/openai-devday-exterior.jpg","OpenAI Dev Day 2026 entrance with oversized branded installation","OPENAI // DEV DAY ENTRANCE"],
  ["../assets/openai-devday-hall.jpg","Open experiential hall at OpenAI Dev Day with lounge and product areas","OPENAI // EXPERIENTIAL HALL"],
  ["../assets/openai-devday-keynote.jpg","Keynote audience at OpenAI Dev Day 2026","OPENAI // KEYNOTE USHERS"],
  ["../assets/claude-workshops-registration.png","Ignite ambassadors at the Claude registration desk with branded caps","CLAUDE // REGISTRATION"],
  ["../assets/claude-workshops-atlanta-team.png","Ignite crew at Claude Workshops Atlanta registration","CLAUDE // ATLANTA STOP"],
];
const AiProof = ({ accent = "#D6F35F", strip = false }) => (
  <section data-screen-label="AI Proof" style={{ background:"#0A0B0D", color:"#fff", padding:"110px 0", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
    <Container>
      <div style={{ maxWidth:820, marginBottom:44 }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:accent }}>{">>"} RECEIPTS FROM THE AI FLOOR</span>
        <h2 style={{ marginTop:16, fontFamily:"var(--font-display)", fontWeight:800, fontSize:"clamp(32px,4.4vw,60px)", letterSpacing:"-0.035em", lineHeight:0.98 }}>The AI labs <span style={{ fontStyle:"italic", color:accent }}>staff with us.</span></h2>
        <p style={{ marginTop:16, fontSize:17, lineHeight:1.6, color:"rgba(255,255,255,0.72)", maxWidth:640 }}>Developer conferences and workshop tours move fast and run on detail. Here's what we put on the floor for OpenAI and Claude.</p>
      </div>
      <div className="ai-proof-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:16 }}>
        {AI_PROOF.map(p => (
          <a key={p.slug} href={"case-study.html?slug=" + p.slug} style={{ display:"flex", flexDirection:"column", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:16, overflow:"hidden", color:"#fff", textDecoration:"none" }}>
            <div style={{ position:"relative", aspectRatio:"16/10", overflow:"hidden", background:"#111" }}>
              <img src={p.img} alt={p.alt} loading="lazy" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
              <div style={{ position:"absolute", left:16, top:16, padding:"10px 14px", borderRadius:10, background:"rgba(255,255,255,0.94)" }}>
                <img src={p.logo} alt={p.brand} style={{ height:22, width:"auto", display:"block" }}/>
              </div>
            </div>
            <div style={{ padding:"26px 26px 24px", display:"flex", flexDirection:"column", gap:10, flex:1 }}>
              <span style={{ fontFamily:"var(--font-mono)", fontSize:10.5, letterSpacing:"0.2em", color:"rgba(255,255,255,0.5)" }}>{p.eyebrow}</span>
              <div style={{ display:"flex", alignItems:"baseline", gap:12 }}>
                <span style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:64, lineHeight:0.9, letterSpacing:"-0.04em", color:accent }}>{p.big}</span>
                <span style={{ fontSize:16, color:"rgba(255,255,255,0.8)" }}>{p.unit}</span>
              </div>
              <p style={{ margin:0, fontSize:15.5, lineHeight:1.55, color:"rgba(255,255,255,0.7)" }}>{p.line}</p>
              <span style={{ marginTop:"auto", paddingTop:10, fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.18em", color:accent }}>READ THE CASE STUDY →</span>
            </div>
          </a>
        ))}
      </div>
      {strip && (
        <div className="ai-strip" style={{ marginTop:16, display:"grid", gridTemplateColumns:"repeat(5,minmax(0,1fr))", gap:10 }}>
          {AI_STRIP.map(([src,alt,cap]) => (
            <figure key={src} style={{ margin:0, position:"relative", aspectRatio:"3/4", borderRadius:12, overflow:"hidden", background:"#111", border:"1px solid rgba(255,255,255,0.1)" }}>
              <img src={src} alt={alt} loading="lazy" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
              <figcaption style={{ position:"absolute", left:8, right:8, bottom:8, padding:"5px 8px", borderRadius:6, background:"rgba(10,11,13,0.78)", fontFamily:"var(--font-mono)", fontSize:9.5, letterSpacing:"0.14em", color:"rgba(255,255,255,0.8)" }}>{cap}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <style>{"@media (max-width:820px){.ai-proof-grid{grid-template-columns:1fr!important}.ai-strip{grid-template-columns:repeat(2,minmax(0,1fr))!important}}"}</style>
    </Container>
  </section>
);
Object.assign(window, { AiProof, AI_PROOF });
