/* Spark 2.0 — page sections */
const {LIME,RED,BG,CARD,CARD2,FG,FG2,MUT,LINE,MONO,SANS,PAPER,INK,INK2}=V2;

const V2Sec=({children,id,bg=BG,pad="clamp(64px,7.5vw,104px) 0",label,style,className})=>(
  <section id={id} data-screen-label={label} className={className} style={{position:"relative",overflow:"hidden",background:bg,padding:pad,borderTop:`1px solid ${LINE}`,...style}}>{children}</section>
);
const V2Head=({eyebrow,children,sub,width=760,align="center",dark,mono})=>(
  <div className="v2-rv v2-head" style={{maxWidth:width,margin:align==="center"?"0 auto":0,textAlign:align}}>
    {eyebrow&&<V2Eyebrow color={dark?INK2:LIME}>{eyebrow}</V2Eyebrow>}
    <h2 className={"v2-h2"+(mono?" v2-h2-mono":"")} style={dark?{color:INK}:undefined}>{children}</h2>
    {sub&&<p className="v2-sub" style={{margin:align==="center"?"18px auto 0":"18px 0 0",color:dark?INK2:FG2}}>{sub}</p>}
  </div>
);

/* ---------------- MODE STRIP ---------------- */
const V2_MODES=[{k:"included",label:"With Ignite",title:"Run it with Ignite"},{k:"license",label:"License the software",title:"License the software"}];
const V2ModeStrip=({active:initial="included"})=>{
  const [active,setActive]=React.useState(initial);
  return (
  <div className="v2-modestrip">
    <V2W><div style={{display:"flex",alignItems:"center",gap:14,minHeight:46}}>
      <span className="v2-modemark" style={{fontFamily:MONO,fontSize:10,letterSpacing:".2em",color:MUT,textTransform:"uppercase"}}>You're viewing</span>
      <span style={{fontFamily:SANS,fontWeight:700,fontSize:14,color:FG,whiteSpace:"nowrap"}}>{V2_MODES.find(m=>m.k===active).title}</span>
      <span style={{display:"flex",alignItems:"baseline",gap:9,marginLeft:"auto",whiteSpace:"nowrap"}}>
        {active==="included"&&<span style={{fontFamily:MONO,fontSize:11,letterSpacing:".14em",textTransform:"uppercase",color:LIME,fontWeight:700}}>Included in programs*</span>}
        <span style={{fontFamily:MONO,fontSize:12,letterSpacing:".02em",color:FG,textDecorationLine:active==="included"?"line-through":"none",textDecorationColor:"#FFB627",textDecorationThickness:"2px"}}>{active==="included"?"$20,000/yr":"Coming soon"}</span>
      </span>
      <nav aria-label="Spark purchase mode" style={{display:"flex",gap:3,padding:3,background:"rgba(250,250,247,0.05)",border:`1px solid ${LINE}`,borderRadius:999}}>
        {V2_MODES.map(m=>{const cur=m.k===active;return <button key={m.k} type="button" onClick={()=>setActive(m.k)} aria-pressed={cur} className={"v2-modeopt"+(cur&&m.k==="included"?" v2-modeopt-ig":"")} style={{border:0,cursor:"pointer",background:cur?(m.k==="included"?"linear-gradient(115deg,#D7453E 0%,#4D43BB 46%,#2E55CA 88%)":LIME):"transparent",color:cur?(m.k==="included"?"#FAFAF7":BG):MUT,fontWeight:cur?700:500}}>{m.k==="license"?"Software only":m.label}</button>;})}
      </nav>
    </div></V2W>
  </div>
  );
};

/* ---------------- HERO ---------------- */
const V2_LINES=[["Every activation,","verified."],["Every market,","fully live."],["Every recap,","written."]];
const V2Hero=({onOpen})=>{
  const [s,setS]=React.useState(0),[out,setOut]=React.useState(false),[typed,setTyped]=React.useState("");
  React.useEffect(()=>{const id=setInterval(()=>{setOut(true);setTimeout(()=>{setS(v=>(v+1)%V2_LINES.length);setTyped("");setOut(false);},320);},5400);return()=>clearInterval(id);},[]);
  React.useEffect(()=>{if(out)return;const w=V2_LINES[s][1];let i=0;const id=setInterval(()=>{i++;setTyped(w.slice(0,i));if(i>=w.length)clearInterval(id);},42);return()=>clearInterval(id);},[s,out]);
  React.useEffect(()=>{let tries=0,t;const go=()=>{const u=window.UnicornStudio;if(u&&typeof u.init==="function"){try{u.init();}catch(e){}return;}if(++tries<70)t=setTimeout(go,150);};go();return()=>t&&clearTimeout(t);},[]);
  const word=V2_LINES[s][1],done=!out&&typed.length>=word.length;
  const body=typed.replace(/\.$/,""),dot=typed.endsWith(".")?".":"";
  return (
    <section data-screen-label="01 Hero" className="v2-hero">
      <div className="v2-usbg" aria-hidden="true" style={{opacity:.76}}><div data-us-project="WqBfeY5fd2RuEYg2FcEW"></div></div>
      <div className="v2-usveil" aria-hidden="true"/>
      <V2W style={{position:"relative",zIndex:2}}>
        <div className="v2-herogrid">
          <div className="v2-rv v2-herocopy">
            <h1 className="v2-eyebrow" style={{margin:"0 0 18px",color:LIME,fontSize:12.5}}>Spark: real-time field marketing reporting.</h1>
            <div className={"v2-h1"+(out?" v2-out":"")} aria-hidden="true">
              <span className="v2-h1a">{V2_LINES[s][0]}</span>
              <span className="v2-h1b">{body}<span style={{position:"relative"}}>{dot}{done&&<span aria-hidden className="v2-caret"/>}</span></span>
            </div>
            <p className="v2-herosub">One screen. Every program you're running.</p>
            <p className="v2-herop">Spark is the field marketing data platform behind Ignite's national programs. GPS-verified check-ins, timestamped photos, and structured reports flow into one live dashboard, and the recap writes itself at clock-out.</p>
            <div className="v2-herocta">
              <button type="button" className="v2-btn" onClick={onOpen}>Explore the live dashboard <span aria-hidden>↗</span></button>
              <a className="v2-link" href="https://www.igniteproductions.co/contact">See Spark on a live program →</a>
            </div>
            <div className="v2-heroproof"><span><V2Dot/> 20 markets live right now</span><span style={{color:MUT}}>·</span><span>No implementation phase</span><span style={{color:MUT}}>·</span><span>Unlimited ambassador seats</span></div>
          </div>
          <div className="v2-rv v2-stage" role="button" tabIndex={0} aria-label="Open the live Spark dashboard preview" onClick={onOpen} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();onOpen();}}}>
            <V2Laptop><V2AppFrame view="dashboard" label="Spark dashboard, program overview"/></V2Laptop>
            <div className="v2-stage-phone" aria-hidden="true"><V2Phone><V2ShiftScreen c={V2_SHIFTS[3]}/></V2Phone></div>
            <span className="v2-explore"><V2Dot c={LIME}/> Click to explore</span>
          </div>
        </div>
      </V2W>
      <V2W style={{position:"relative",zIndex:2}}>
        <div className="v2-rv v2-intel">
          <p className="v2-intel-h">Field marketing finally gets the <span className="v2-intel-em">intelligence it deserves.</span></p>
          <p className="v2-intel-p">Spark is Ignite's real-time field marketing platform, designed to give clients instant visibility into every demo, event, tour, sample, and activation we run. It replaces inconsistent recaps, spreadsheet chaos, and vendor fragmentation with one centralized, agency-run system.</p>
        </div>
      </V2W>
    </section>
  );
};

/* ---------------- LIGHTBOX ---------------- */
const V2Lightbox=({onClose})=>{
  React.useEffect(()=>{const k=e=>{if(e.key==="Escape")onClose();};const prev=document.body.style.overflow;document.body.style.overflow="hidden";window.addEventListener("keydown",k);return()=>{window.removeEventListener("keydown",k);document.body.style.overflow=prev;};},[]);
  return (
    <div className="v2-lb" role="dialog" aria-modal="true" aria-label="Spark command center preview" onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div className="v2-lb-inner">
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12,flexWrap:"wrap"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:9,fontFamily:MONO,fontSize:10.5,letterSpacing:".18em",textTransform:"uppercase",color:LIME}}><V2Dot/> Live preview · command center</span>
          <span style={{fontFamily:MONO,fontSize:10,color:MUT,letterSpacing:".1em"}}>CLICK THE SIDEBAR · THIS IS THE REAL APP</span>
          <button onClick={onClose} className="v2-close" aria-label="Close preview">Close ✕</button>
        </div>
        <div className="v2-card" style={{overflow:"hidden"}}><V2Chrome path="dashboard"/><div style={{position:"relative",height:"min(66vh,660px)"}}><V2AppFrame view="dashboard" interactive label="Spark dashboard, interactive preview"/></div></div>
        <div style={{marginTop:16,display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
          <a className="v2-btn" href="https://www.igniteproductions.co/contact">See Spark on a live program →</a>
          <a className="v2-ghost" href="spark-demo.html">Request full sandbox access</a>
        </div>
      </div>
    </div>
  );
};

/* ---------------- PROOF STRIP ---------------- */
const V2Proof=()=>{
  const [ref,inv]=useV2InView(.4);const amb=useV2Count(257,inv);
  const R=window.__resources||{};
  const logos=[["Liquid Death",R.r_6882f25fd226513954e724e2_liquid_death_lo||"https://cdn.prod.website-files.com/688129f3841088c282c32750/6882f25fd226513954e724e2_liquid-death-logo-transparent.webp"],["White Claw",R.r_688c1b129ea08467c1137c5d_white_claw_logo||"https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1b129ea08467c1137c5d_white-claw-logo.webp"],["Total Wireless",R.r_688c1bb2f2c798b4cb850d2e_total_wireless_||"https://cdn.prod.website-files.com/688129f3841088c282c32750/688c1bb2f2c798b4cb850d2e_total-wireless-logo.webp"],["Dude Wipes",R.r_688c3839708ed185c2de5ba9_dude_wipes||"https://cdn.prod.website-files.com/688129f3841088c282c32750/688c3839708ed185c2de5ba9_dude-wipes.webp"],["Marc Anthony",R.r_688c378239e6dc2ebedde728_marc_anthony_lo||"https://cdn.prod.website-files.com/688129f3841088c282c32750/688c378239e6dc2ebedde728_marc-anthony-logo.webp"]];
  return (
    <section ref={ref} data-screen-label="02 Proof" className="v2-proof">
      <V2W><div className="v2-proofrow v2-rv">
        <div className="v2-logos">
          <span className="v2-eyebrow" style={{color:MUT}}>Running live on Spark</span>
          <div className="v2-logomarq"><div className="v2-logotrack">{[...logos,...logos,...logos].map(([n,u],i)=><img key={n+i} src={u} alt={i<logos.length?n+" logo":""} aria-hidden={i>=logos.length||undefined} loading="lazy" decoding="async"/>)}</div></div>
        </div>
        <div className="v2-proofstats">
          <div><span className="v2-bignum">257,000+</span><span className="v2-foot">vetted brand ambassadors</span></div>
          <div><span className="v2-bignum">50</span><span className="v2-foot">states, 200+ metros</span></div>
          <div><span className="v2-bignum">3,000+</span><span className="v2-foot">events executed</span></div>
          <div><span className="v2-bignum">48hr</span><span className="v2-foot">rush turnaround</span></div>
        </div>
      </div></V2W>
    </section>
  );
};

/* ---------------- PROBLEM + BEFORE / AFTER ---------------- */
const V2_ARTIFACTS=[
  {src:"VENDOR RECAP · EMAIL",g:"✉",logo:"../assets/logos/gmail.png",c:"#D7453E",sub:"RE: RE: FW: Q2 tour numbers?",meta:"14 emails · 3 conflicting totals",pos:{top:"-6%",left:"-2%"},rot:-4},
  {src:"AGENCY TRACKER",g:"▤",logo:"../assets/logos/excel.webp",c:"#1D6F42",sub:"Q2_TOUR_FINAL_v3.xlsx",meta:"1,204 samples · estimated",pos:{top:"46%",left:"-6%"},rot:2.5},
  {src:"GROUP TEXT",g:"▣",logo:"../assets/logos/slack.webp",c:"#36C5F0",sub:"“did the 6pm shift ever show?”",meta:"14 no-shows unaccounted for",pos:{top:"-10%",right:"-1%"},rot:3},
  {src:"SHARED DRIVE",g:"▨",logo:"../assets/logos/gdrive.png",c:"#1FA463",sub:"IMG_4412.jpg",meta:"no GPS · no timestamp · which store?",pos:{top:"44%",right:"-5%"},rot:-2.5},
];
const V2_JUNK=[["RE: RE: FW: Q2 tour numbers?","vendor-recaps@gmail.com · 6 days ago"],["Q2_TOUR_FINAL_v3.xlsx","shared drive · 1,204 samples (est.)"],["IMG_4412.jpg","no GPS · no timestamp · which store?"],["“did the 6pm shift ever show?”","group text · 14 unaccounted"],["Austin_Recap_v2_USE_THIS.pptx","assembled at midnight by someone who wasn't there"]];
const V2BeforeAfter=()=>{
  const [p,setP]=React.useState(52);const wrap=React.useRef(null);const drag=React.useRef(false);
  const at=cx=>{const r=wrap.current.getBoundingClientRect();setP(Math.max(6,Math.min(94,((cx-r.left)/r.width)*100)));};
  React.useEffect(()=>{const mv=e=>{if(!drag.current)return;if(e.touches){at(e.touches[0].clientX);e.preventDefault();}else at(e.clientX);};const up=()=>{drag.current=false;};window.addEventListener("mousemove",mv);window.addEventListener("mouseup",up);window.addEventListener("touchmove",mv,{passive:false});window.addEventListener("touchend",up);return()=>{window.removeEventListener("mousemove",mv);window.removeEventListener("mouseup",up);window.removeEventListener("touchmove",mv);window.removeEventListener("touchend",up);};},[]);
  const nudge=e=>{if(e.key==="ArrowLeft"){e.preventDefault();setP(v=>Math.max(6,v-4));}if(e.key==="ArrowRight"){e.preventDefault();setP(v=>Math.min(94,v+4));}};
  return (
    <div className="v2-baw v2-rv" ref={wrap} onMouseDown={e=>{drag.current=true;at(e.clientX);}}>
      <div className="v2-ba-panel" style={{background:"#131315",filter:"saturate(.5)"}}>
        <div className="v2-ba-inner">
          <div className="v2-ba-cell">
            <div className="v2-foot" style={{color:RED,marginBottom:14}}>✕ BEFORE · 9 DAYS AFTER THE EVENT</div>
            <div style={{fontFamily:MONO,fontSize:10.5,lineHeight:1.8,color:MUT,borderBottom:`1px solid ${LINE}`,paddingBottom:12}}><div>FROM: vendor-recaps@gmail.com</div><div style={{color:FG2}}>SUBJ: RE: Re: Q2 Tour Austin Recap (FINAL_v3_USE_THIS)</div></div>
            <p style={{margin:"14px 0 0",fontSize:13.5,lineHeight:1.58,color:FG2,fontStyle:"italic"}}>"Attached is the recap deck for Austin. Some photos got lost, BA didn't submit her count sheet so I estimated ~250? Manager said it went great. Full numbers next week."</p>
            <ul style={{listStyle:"none",padding:0,margin:"16px 0 0",display:"flex",flexDirection:"column",gap:7}}>{["Sample count: unknown",'Attendance: "felt good"',"Photos: 4 of 60 sent","Spend per sample: ???"].map(t=><li key={t} style={{display:"flex",gap:9,fontSize:12.5,color:MUT}}><span style={{color:RED,fontFamily:MONO}}>✕</span>{t}</li>)}</ul>
          </div>
          <div className="v2-ba-cell" style={{borderLeft:`1px solid ${LINE}`}}>
            <div className="v2-foot" style={{color:RED}}>// AND THE REST OF IT</div>
            <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:8}}>{V2_JUNK.map(([t,m])=><div key={t} style={{display:"flex",gap:10,padding:"9px 11px",background:"#17171A",border:`1px solid ${LINE}`,borderRadius:7}}><span style={{color:RED,fontFamily:MONO,fontSize:11}}>✕</span><span style={{minWidth:0}}><span style={{display:"block",fontSize:12.5,fontWeight:600,color:FG2,lineHeight:1.3}}>{t}</span><span style={{display:"block",marginTop:3,fontFamily:MONO,fontSize:9.5,color:MUT}}>{m}</span></span></div>)}</div>
          </div>
        </div>
      </div>
      <div className="v2-ba-panel v2-ba-after" style={{background:BG,clipPath:`inset(0 0 0 ${p}%)`}}>
        <div className="v2-ba-inner">
          <div className="v2-ba-cell">
            <div className="v2-foot" style={{color:LIME}}>// THE REST OF THE DASHBOARD</div>
            <div style={{marginTop:16}}><div className="v2-foot">SAMPLES / HOUR · PEAK 6PM · 84</div><div style={{marginTop:9,display:"flex",gap:3,alignItems:"flex-end",height:56}}>{[26,34,41,52,48,61,74,84,70,55,38,29].map((h,i)=><div key={i} style={{flex:1,height:h+"%",background:h>=80?LIME:"rgba(214,243,95,0.35)",borderRadius:"2px 2px 0 0"}}/>)}</div></div>
            <div style={{marginTop:18}}><div className="v2-foot">PER-SKU · 5 VARIANTS</div><div style={{marginTop:10,display:"flex",flexDirection:"column",gap:7}}>{[["Black Cherry",96],["Mango",78],["Lime",67],["Watermelon",52],["Natural Lime",34]].map(([n,v])=><div key={n} style={{display:"flex",alignItems:"center",gap:9}}><span style={{flex:"0 0 86px",fontSize:11.5,color:FG2}}>{n}</span><span style={{flex:1,height:5,borderRadius:99,background:"rgba(250,250,247,.07)",overflow:"hidden"}}><span style={{display:"block",height:"100%",width:v+"%",background:LIME,opacity:.82}}/></span><span style={{flex:"0 0 26px",textAlign:"right",fontFamily:MONO,fontSize:10,color:LIME}}>{v}</span></div>)}</div></div>
            <ul style={{listStyle:"none",padding:0,margin:"16px 0 0",display:"flex",flexDirection:"column",gap:7}}>{["62 GPS-verified photos attached","+18% samples vs Brooklyn","Shared with 8 stakeholders"].map(t=><li key={t} style={{display:"flex",gap:9,fontSize:12.5,color:FG2}}><span style={{color:LIME,fontFamily:MONO}}>✓</span>{t}</li>)}</ul>
          </div>
          <div className="v2-ba-cell" style={{borderLeft:"1px solid rgba(214,243,95,0.22)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><span className="v2-foot" style={{color:LIME}}>◉ WITH SPARK · 24H AFTER THE EVENT</span><span style={{display:"inline-flex",alignItems:"center",gap:6,padding:"3px 9px",borderRadius:999,border:"1px solid rgba(214,243,95,0.3)"}}><V2Dot s={5}/><span style={{fontFamily:MONO,fontSize:8.5,letterSpacing:".14em",color:LIME}}>LIVE</span></span></div>
            <div style={{fontFamily:SANS,fontWeight:700,fontSize:19,color:FG,letterSpacing:"-.02em"}}>Recap · Austin, TX</div><div className="v2-foot" style={{marginTop:3}}>Q2 TOUR · WHITE CLAW</div>
            <div style={{marginTop:16,display:"grid",gridTemplateColumns:"1fr 1fr",gap:1,background:LINE,border:`1px solid ${LINE}`}}>{[["327","SAMPLES"],["68","LEADS"],["1,240","ATTENDEES"],["$2.18","$/SAMPLE"]].map(([v,l])=><div key={l} style={{background:CARD,padding:"12px 11px"}}><div style={{fontFamily:MONO,fontWeight:700,fontSize:20,color:LIME,letterSpacing:"-.02em"}}>{v}</div><div className="v2-foot" style={{marginTop:2}}>{l}</div></div>)}</div>
            <p style={{margin:"14px 0 0",fontSize:13,lineHeight:1.55,color:FG2}}>Every number traces back to a GPS-verified check-in and a timestamped photo. Nobody estimated anything.</p>
          </div>
        </div>
      </div>
      <button type="button" className="v2-ba-handle" style={{left:p+"%"}} role="slider" aria-label="Drag to compare before and after" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p)} onKeyDown={nudge} onMouseDown={e=>{e.stopPropagation();drag.current=true;}} onTouchStart={()=>{drag.current=true;}}><span className="v2-ba-knob" aria-hidden="true">⟷</span></button>
    </div>
  );
};
const V2Problem=()=>(
  <V2Sec label="03 Problem">
    <V2W>
      <div className="v2-chaos">
        <div className="v2-floats" aria-hidden="true">{V2_ARTIFACTS.map((a,i)=><div key={a.sub} className="v2-artifact" style={{...a.pos,"--rot":a.rot+"deg",animationDelay:(i*.9)+"s"}}><div className="v2-art-src"><span style={{background:a.c+"1F",border:`1px solid ${a.c}44`,color:a.c}}>{a.logo?<img src={a.logo} alt="" style={{width:12,height:12,objectFit:"contain",display:"block"}}/>:a.g}</span>{a.src}</div><div className="v2-art-sub">{a.sub}</div><div className="v2-art-meta">{a.meta}</div></div>)}</div>
        <V2Head mono eyebrow="The honest version" width={1000} sub="Field marketing is the only budget line where the spend is precise and the proof is a vibe. Spark answers “did it happen, and did it work?” in real time, with receipts."><span style={{whiteSpace:"nowrap",fontSize:"clamp(19px,2.15vw,32px)"}}>Your field program is running right now. <span className="v2-em">Do you know how?</span></span></V2Head>
      </div>
      <div className="v2-body"><V2BeforeAfter/></div>
      <p className="v2-rv v2-foot" style={{marginTop:14,textAlign:"center"}}>DRAG THE HANDLE · BEFORE ↔ WITH SPARK</p>
    </V2W>
  </V2Sec>
);

/* ---------------- HOW IT WORKS · scroll-pinned ---------------- */
const V2_STEPS=[
  ["Request","Programs go in, not emails.","Build a program once: accounts, activation types, brand standards, and what a complete report must include. Clone it across markets and quarters. Your team, distributor, or client submits straight into it."],
  ["Staff","Fill the schedule from wherever you fill it.","Assign in-house, push to agency partners, or post to an open board. Fill rate is live by market, and a hole gets flagged before the shift, not after. Can't cover it? One button pulls from Ignite's bench of 257K+ vetted ambassadors."],
  ["Brief","Everyone shows up knowing the job.","Venue, window, SKUs, goal, brand standards, and photo requirements land on the ambassador's phone before they leave the house. No PDF attachments. No “did you see the email.”"],
  ["Verify","Right person, right place, right time.","GPS check-in confirms attendance. Timestamped photos confirm setup. Structured reports capture counts, per-SKU breakdowns, and account conditions. Incomplete doesn't count as complete."],
  ["Report","The recap writes itself while the event is still running.","Live dashboards across every program, market, and partner. Check-ins and photos land in the feed as they happen. Share a link with eight stakeholders instead of emailing a 40MB deck to four."],
  ["Prove","Cost per sample. Lift per door. Answers, not adjectives.","Event-level cost, per-sample economics, market comparisons, and per-SKU performance, connected to depletions and sell-through. Export to PDF or slides when someone upstairs wants a deck."],
];
const V2_REQ_PINS=[
  {x:"31%",y:"33%",k:"Structured intake",c:"#D6F35F",t:"Placeholder: every field on the request is required before it can be submitted, so nothing gets routed half-baked."},
  {x:"78%",y:"58%",k:"Live status",c:"#5ED4A8",t:"Placeholder: the status chip updates itself as staffing, briefing, and verification complete.",flip:true},
  {x:"57%",y:"81%",k:"Clone a program",c:"#5AB8FF",t:"Placeholder: reuse last quarter's program in a click, accounts, standards, and report spec come with it."},
];
const V2StepScreen=({i,compact,active})=>{
  const v=V2_STEP_SCREENS[i];
  const inner=v?<V2AppFrame view={v[0]} top={v[1]} label={"Spark dashboard, "+V2_STEPS[i][0]}/>:null;
  if(i===2)return <V2BriefPair compact={compact}/>;
  const laptop=<V2Laptop className="v2-steplaptop">{inner}</V2Laptop>;
  /* PARKED: handwritten DesMontilles callouts + laptop hover hotspots are not
     rendered until that content is built. Restore by flipping this to false. */
  const PARK_ANNOTATIONS=true;
  if(i!==0||compact||PARK_ANNOTATIONS)return laptop;
  return (
    <div className="v2-annot">
      {laptop}
      <div className="v2-note v2-note-a">real time request queue
        <svg className="v2-noteline" viewBox="0 0 120 80" width="120" height="80" aria-hidden="true"><polyline points="2,4 62,54 118,54"/></svg>
      </div>
      <div className="v2-note v2-note-b">status updates<br/>without the chase
        <svg className="v2-noteline" viewBox="0 0 120 80" width="120" height="80" aria-hidden="true"><polyline points="118,4 58,48 2,48"/></svg>
      </div>
      {V2_REQ_PINS.map(p=>(
        <button key={p.t} type="button" tabIndex={active?0:-1} className={"v2-hot"+(p.flip?" v2-hot-l":"")} style={{left:p.x,top:p.y}} aria-label={p.t}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor"/></svg>
          <span className="v2-hotcard"><span className="v2-hotlabel" style={{color:p.c}}>{p.k}</span>{p.t}</span>
        </button>
      ))}
    </div>
  );
};
const V2HowItWorks=()=>{
  const wide=useV2Media("(min-width: 981px)");
  const [a,setA]=React.useState(0);const refs=React.useRef([]);const stick=React.useRef(null);const sec=React.useRef(null);const head=React.useRef(null);
  React.useEffect(()=>{
    const el=head.current,s=sec.current;if(!el||!s)return;
    const read=()=>s.style.setProperty("--v2-hh",el.offsetHeight+"px");
    read();
    if(typeof ResizeObserver==="function"){const ro=new ResizeObserver(read);ro.observe(el);return()=>ro.disconnect();}
    window.addEventListener("resize",read);return()=>window.removeEventListener("resize",read);
  },[wide]);
  React.useEffect(()=>{if(!wide)return;let raf;const on=()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=null;const sr=stick.current&&stick.current.getBoundingClientRect();const fr=stick.current&&stick.current.querySelector(".v2-pinframe");const fh=fr?fr.getBoundingClientRect().height:0;const mid=sr?sr.top+(fh||window.innerHeight*.5)/2:window.innerHeight*.5;let best=0,bd=1e9;refs.current.forEach((el,i)=>{if(!el)return;const r=el.getBoundingClientRect();const d=Math.abs(r.top+r.height/2-mid);if(d<bd){bd=d;best=i;}});setA(best);});};on();window.addEventListener("scroll",on,{passive:true});window.addEventListener("resize",on);return()=>{window.removeEventListener("scroll",on);window.removeEventListener("resize",on);};},[wide]);
  return (
    <V2Sec id="how" label="04 How It Works" bg={BG} className="v2-howsec" style={{overflow:"visible",borderTop:"0"}} pad="clamp(40px,5vh,64px) 0 clamp(24px,4vw,48px)">
      {!wide&&(<div className="v2-howhead" ref={head}>
        <V2W>
          <V2Head mono eyebrow="Six steps, one record, zero handoffs.">One system from request <span className="v2-em">to proof.</span></V2Head>
        </V2W>
      </div>)}
      <V2W>
        <div className="v2-pin" ref={sec}>
          {wide?(
            <div className="v2-pintext">
              <div className="v2-pinstick" ref={stick}>
                <div className="v2-pinpanel">
                  <div className="v2-howhead" ref={head}>
                    <V2Head mono eyebrow="Six steps, one record, zero handoffs.">One system from request <span className="v2-em">to proof.</span></V2Head>
                  </div>
                  <div className="v2-framezone">
                    {V2_STEPS.map((s,i)=><div key={s[0]} className={"v2-pinframe"+(a===i?" v2-pinframe-on":"")} aria-hidden={a!==i}><V2StepScreen i={i} active={a===i}/></div>)}
                  </div>
                  <div className="v2-rail" role="tablist" aria-label="The six steps">
                    {V2_STEPS.map(([k],i)=>(
                      <button key={k} role="tab" aria-selected={a===i} className={"v2-railbtn"+(a===i?" on":"")} onClick={()=>{const el=refs.current[i];if(el)window.scrollTo({top:window.scrollY+el.getBoundingClientRect().top-(window.innerHeight/2-el.offsetHeight/2),behavior:"smooth"});}}>
                        <span className="v2-railnum">{String(i+1).padStart(2,"0")}</span><span>{k}</span>
                      </button>
                    ))}
                  </div>
                  <div className="v2-copyzone">
                    {V2_STEPS.map(([k,h,p],i)=>(
                      <div key={k} className={"v2-copy"+(a===i?" v2-copy-on":"")} aria-hidden={a!==i}>
                        <div className="v2-copyhd"><span className="v2-copynum">{String(i+1).padStart(2,"0")}</span><V2Eyebrow>{k}</V2Eyebrow></div>
                        <h3>{h}</h3>
                        <p>{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {V2_STEPS.map((s,i)=><div key={s[0]} className="v2-spacer" ref={el=>refs.current[i]=el} aria-hidden="true"/>)}
              <div className="v2-pintail" aria-hidden="true"/>
            </div>
          ):(
            <div className="v2-pincopy">
              {V2_STEPS.map(([k,h,p],i)=>(
                <div key={k} className="v2-step v2-step-on">
                  <div className="v2-stepnum"><span>{String(i+1).padStart(2,"0")}</span><span className="v2-stepline"/></div>
                  <div className="v2-stepbody">
                    <V2Eyebrow>{k}</V2Eyebrow>
                    <h3>{h}</h3>
                    <p>{p}</p>
                    <div className="v2-stepinline"><V2StepScreen i={i} compact/></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </V2W>
    </V2Sec>
  );
};

/* ---------------- EVERYTHING INCLUDED ---------------- */
const V2Included=()=>(
  <V2Sec id="included" label="06 What's Included" bg={BG}>
    <V2W>
      <V2Head mono eyebrow="Everything included" width={900} sub="Every Spark account gets all six modules. There is no premium tier for proof, no per-seat charge for your bench, and no module sold separately."><span style={{whiteSpace:"nowrap",fontSize:"clamp(20px,2.4vw,34px)"}}>No “upgrade to see your data” <span style={{color:LIME}}>tier.</span></span></V2Head>
      <div className="v2-inclgrid v2-body">
        {window.SPARK_PRODUCTS.map(p=>(
          <div key={p.slug} className="v2-rv v2-inclcol">
            <div className="v2-inclhead"><span>{p.idx}</span><b>{p.name}</b></div>
            <ul>{p.caps.map(c=><li key={c}>{c}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="v2-rv v2-inclcov">
        {[[window.SPARK_STATS.states,"STATES COVERED"],["200+","METROS"],[window.SPARK_STATS.bench,"VETTED AMBASSADORS"],["48h","RUSH STAFFING"],["$0","PER-SEAT FEES"]].map(([v,l])=>(
          <div key={l}><b>{v}</b><span>{l}</span></div>
        ))}
      </div>
      <style>{`
        .v2-inclgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--sp-line);border:1px solid var(--sp-line);border-radius:14px;overflow:hidden;margin-top:36px}
        .v2-inclcol{background:var(--sp-bg);padding:24px 22px 26px}
        .v2-inclhead{display:flex;align-items:baseline;gap:10px;padding-bottom:14px;border-bottom:1px solid var(--sp-line)}
        .v2-inclhead span{font-family:var(--sp-mono);font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--sp-lime)}
        .v2-inclhead b{font-family:var(--sp-sans);font-size:18px;letter-spacing:-.02em;color:var(--sp-fg)}
        .v2-inclcol ul{margin:16px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px}
        .v2-inclcol li{position:relative;padding-left:18px;font-size:13.5px;line-height:1.5;color:var(--sp-fg2)}
        .v2-inclcol li::before{content:"✓";position:absolute;left:0;top:0;font-family:var(--sp-mono);font-size:11px;color:var(--sp-lime)}
        .v2-inclcov{margin-top:20px;display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--sp-line);border:1px solid var(--sp-line);border-radius:14px;overflow:hidden}
        .v2-inclcov div{background:var(--sp-card);padding:22px 18px}
        .v2-inclcov b{display:block;font-family:var(--sp-mono);font-size:26px;font-weight:700;letter-spacing:-.02em;color:var(--sp-lime)}
        .v2-inclcov span{display:block;margin-top:6px;font-family:var(--sp-mono);font-size:9px;letter-spacing:.16em;color:var(--sp-mut)}
        @media (max-width:1024px){.v2-inclgrid{grid-template-columns:repeat(2,minmax(0,1fr))}.v2-inclcov{grid-template-columns:repeat(3,1fr)}}
        @media (max-width:640px){.v2-inclgrid,.v2-inclcov{grid-template-columns:1fr}}
      `}</style>
    </V2W>
  </V2Sec>
);

/* ---------------- WHO + COVERAGE · paper ---------------- */
const V2_WHO=[["Brands with in-house field teams","One place the program lives, and a number you can defend to your CFO."],["Agencies and staffing vendors","A live client dashboard with your logo on it. Win the next RFP on reporting alone."],["Distributors, brokers, national accounts","Route-based check-ins and per-brand reporting from one book of business."],["Retail, venue, and QSR groups","Verify the reset, the display, the price, and the look, with photos, not phone calls."],["Field marketing and activation teams","Demos, sampling, street teams, festivals, and tours in one loop your crews will use."],["Multi-brand, multi-agency enterprises","One report standard across every brand, agency, and region, with SSO and audit logs."]];
const V2_COVERS=["Sampling & tastings","Retail demos","Display builds & merchandising","Shelf resets & audits","Route-based account visits","Festivals & mobile tours","Pop-ups & branded retail","Surveys, pricing audits, mystery shops"];
const V2Who=()=>(
  <V2Sec id="who" label="05 Who It's For" bg={PAPER} className="v2-paper">
    <V2W>
      <V2Head mono dark eyebrow="Who runs on Spark" width={720}>Six kinds of teams. <span style={{color:INK2}}>Same problem.</span></V2Head>
      <div className="v2-whogrid v2-body">
        {V2_WHO.map(([t,d],i)=><div key={t} className="v2-rv v2-whorow"><span className="v2-whonum">{String(i+1).padStart(2,"0")}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
      </div>
      <div className="v2-rv v2-covers">
        <span className="v2-eyebrow" style={{color:INK2}}>Every kind of field work</span>
        <div className="v2-chips">{V2_COVERS.map(c=><span key={c} className="v2-chip">{c}</span>)}</div>
      </div>
    </V2W>
  </V2Sec>
);

/* ---------------- FAQ + CLOSING ---------------- */
const V2_FAQ_GROUPS=[
  ["What Spark is",[
    ["What is Spark by Ignite?","Spark is the GPS-verified field reporting platform behind every Ignite program. Brand ambassadors check in from their phone, capture photos and counts on site, and every submission carries GPS coordinates and a timestamp. You get one live dashboard showing what happened, where, and when, instead of a recap deck three weeks after you could have fixed anything. Ignite built Spark to run its own national programs across all 50 states."],
    ["Can we get Spark without an Ignite program?","No. Spark is included with every Ignite program. It's how we prove every shift happened: GPS check-ins, geotagged photos and a recap within hours, run by the same team that staffs the shift."],
    ["How much does Spark cost?","Spark is included in Ignite's agency fee on managed programs, with unlimited ambassador seats. There is no separate software license, no per-user pricing, and no line item that grows every time you add people to a market. Spark is not offered on one-off activations. The platform is built around programs Ignite manages end to end, which is what keeps the reporting standard consistent across every market."]]],
  ["In the field + reporting",[
    ["What does GPS-verified field reporting actually mean?","Every check-in, photo, and form submission is stamped with the device's GPS coordinates and the time it was captured. Photos are shot inside the app, not uploaded from a camera roll, so a photo taken at the store is distinguishable from a photo taken anywhere else. When someone asks whether the display went up at Store 4471 on the 14th, the answer is a coordinate and a timestamp instead of a promise."],
    ["Does Spark work without cell signal?","Spark captures offline. Ambassadors can check in, shoot photos, and complete forms in a basement stockroom or a rural store with no bars, and it all syncs with the original GPS coordinates and timestamps once the phone reconnects. The timestamp reflects when the work happened, not when the phone found signal."],
    ["Can our clients and stakeholders see the reports?","Yes. You can give brand contacts, retail partners, or internal stakeholders their own view so they watch photos and results land in near real time instead of waiting on a Friday recap. You control what each viewer sees, so one stakeholder can see their program without seeing other markets, other brands, or your costs."]]]
];
const V2_FAQ=V2_FAQ_GROUPS.flatMap(g=>g[1]);
/* FAQPage JSON-LD — injected once so rich results / AI Overviews can read the Q&A */
(()=>{if(typeof document==="undefined"||document.getElementById("ld-spark-faq"))return;const s=document.createElement("script");s.type="application/ld+json";s.id="ld-spark-faq";s.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":V2_FAQ.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))});document.head.appendChild(s);})();
const V2Closing=({onOpen})=>{
  const [open,setOpen]=React.useState(0);
  React.useEffect(()=>{let tries=0,t;const go=()=>{const u=window.UnicornStudio;if(u&&typeof u.init==="function"){try{u.init();}catch(e){}return;}if(++tries<70)t=setTimeout(go,150);};go();return()=>t&&clearTimeout(t);},[]);
  return (
    <V2Sec id="faq" label="06 FAQ + CTA" pad="clamp(64px,7.5vw,104px) 0 clamp(72px,8vw,112px)">
      <div className="v2-usbg v2-closebg" aria-hidden="true"><div data-us-project="WqBfeY5fd2RuEYg2FcEW"></div></div>
      <div className="v2-usveil" aria-hidden="true"/>
      <V2W style={{position:"relative",zIndex:1}}>
        <div className="v2-closegrid">
          <div className="v2-rv">
            <V2Eyebrow>FAQ</V2Eyebrow>
            <h2 className="v2-h2 v2-h2-mono" style={{textAlign:"left"}}>The ones you're <span className="v2-em">actually asking.</span></h2>
            <div className="v2-faq" aria-label="Spark FAQ">
              {(()=>{let i=-1;return V2_FAQ_GROUPS.map(([g,items])=>(
                <div key={g} className="v2-faqgroup">
                  <div className="v2-foot v2-faqgrp" style={{color:LIME,margin:"26px 0 6px"}}>// {g.toUpperCase()}</div>
                  {items.map(([q,ans])=>{i++;const idx=i;return (
                    <div key={q} className="v2-faqitem">
                      <h3 style={{margin:0,font:"inherit"}}><button onClick={()=>setOpen(open===idx?-1:idx)} aria-expanded={open===idx}><span>{q}</span><span className="v2-plus" style={{transform:open===idx?"rotate(45deg)":"none"}}>+</span></button></h3>
                      <div className="v2-faqbody" style={{gridTemplateRows:open===idx?"1fr":"0fr"}}><div><p>{ans}</p></div></div>
                    </div>
                  );})}
                </div>
              ));})()}
            </div>
          </div>
          <div className="v2-rv v2-ctacard">
            <V2Eyebrow color={BG}>Ready when you are</V2Eyebrow>
            <h2>See your own program on it.</h2>
            <p>Bring a real program, not a hypothetical. We'll put your markets and accounts on the map and show you what the next activation looks like in Spark.</p>
            <div className="v2-ctabtns">
              <button type="button" className="v2-btn v2-btn-ink" onClick={onOpen}>Explore the live dashboard ↗</button>
              <a className="v2-ghost v2-ghost-ink" href="https://www.igniteproductions.co/contact">See Spark on a live program</a>
            </div>
            <div className="v2-foot" style={{color:INK2,marginTop:26}}>A REAL HUMAN REPLIES WITHIN 24 HOURS // VETERAN-OWNED SINCE 2018</div>
          </div>
        </div>
      </V2W>
    </V2Sec>
  );
};

/* ---------------- APP ---------------- */
const V2App=()=>{
  useV2Reveal();
  const [lb,setLb]=React.useState(false);
  const open=()=>setLb(true);
  return (
    <div data-screen-label="Spark Platform 2.0" className="v2-shellpad">
      <div className="v2-shell">
        <SparkNav active="overview"/>
        <V2ModeStrip active="included"/>
        <V2Hero onOpen={open}/>
        <V2Proof/>
        <V2Problem/>
        <V2HowItWorks/>
        <V2Who/>
        <V2Included/>
        {window.RelatedCases ? React.createElement(window.RelatedCases,{ctx:"spark",slug:"platform",heading:"Programs reporting on Spark."}) : null}
        <section data-screen-label="Related" className="v2-sec" style={{padding:"64px 0",borderTop:"1px solid "+LINE}}>
          <V2W>
            <div className="v2-eyebrow" style={{color:MUT,marginBottom:18}}>&gt;&gt; Related</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
              {[["SPARK // RETAIL","Spark Retail execution","spark-retail.html"],["SERVICE","Event recap + reporting","services-event-reporting-recaps.html"],["ALL WORK","Field marketing case studies","work.html"]].map(([t,l,h])=>(
                <a key={h} href={h} className="v2-card" style={{display:"flex",flexDirection:"column",gap:8,padding:"22px 22px 20px",color:FG,textDecoration:"none"}}>
                  <span className="v2-foot" style={{color:LIME}}>{t}</span>
                  <span style={{fontFamily:SANS,fontWeight:700,fontSize:19,letterSpacing:"-.01em"}}>{l} <span style={{color:LIME}}>→</span></span>
                </a>))}
            </div>
          </V2W>
        </section>
        <V2Closing onOpen={open}/>
        <SiteFooter rel="../"/>
      </div>
      {lb&&<V2Lightbox onClose={()=>setLb(false)}/>}
    </div>
  );
};
Object.assign(window,{V2App});
