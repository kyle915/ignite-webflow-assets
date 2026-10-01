/* Spark 2.0 — tokens, hooks, map, device frames, product mocks */
const V2={LIME:"#D6F35F",RED:"#D7453E",BG:"#0A0B0D",CARD:"#111317",CARD2:"#16191F",FG:"#FAFAF7",FG2:"#B8BCC5",MUT:"#7A7F8B",LINE:"rgba(250,250,247,0.08)",PAPER:"#F3F2EC",INK:"#0A0B0D",INK2:"#4A4E58",BLUE:"#4C86F9",ORANGE:"#F9994E",MONO:"var(--sp-mono)",SANS:"var(--sp-sans)"};
const {LIME,RED,BG,CARD,CARD2,FG,FG2,MUT,LINE,MONO,SANS}=V2;

const V2W=({children,style,className})=><div className={className} style={{maxWidth:1480,margin:"0 auto",padding:"0 clamp(20px,4vw,32px)",...style}}>{children}</div>;
const V2Eyebrow=({children,color=LIME,style})=><span className="v2-eyebrow" style={{color,...style}}>{children}</span>;
const V2Dot=({c=LIME,s=6})=><span style={{width:s,height:s,borderRadius:999,background:c,boxShadow:`0 0 8px ${c}`,animation:"v2-blink 1.4s infinite",flexShrink:0,display:"inline-block"}}/>;

const useV2Reveal=()=>{React.useEffect(()=>{
  const els=[...document.querySelectorAll(".v2-rv")];
  const vh=window.innerHeight||800;
  let io;try{io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("v2-in");io.unobserve(e.target);}}),{threshold:.12});
  els.forEach((el,i)=>{if(el.getBoundingClientRect().top>vh*.92){el.classList.add("v2-armed");el.style.transitionDelay=((i%3)*80)+"ms";io.observe(el);}});}catch(e){}
  const t=setTimeout(()=>els.forEach(el=>el.classList.add("v2-in")),2500);
  return()=>{io&&io.disconnect();clearTimeout(t);};},[]);};
const useV2Count=(target,run,dur=1300)=>{const [v,setV]=React.useState(0);React.useEffect(()=>{if(!run)return;let raf,t0;const s=t=>{if(!t0)t0=t;const p=Math.min((t-t0)/dur,1);setV(Math.floor((1-Math.pow(1-p,3))*target));if(p<1)raf=requestAnimationFrame(s);};raf=requestAnimationFrame(s);return()=>cancelAnimationFrame(raf);},[run,target,dur]);return v;};
const useV2InView=(th=.3)=>{const ref=React.useRef();const [inv,setInv]=React.useState(false);React.useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setInv(true);io.disconnect();}},{threshold:th});if(ref.current)io.observe(ref.current);return()=>io.disconnect();},[th]);return [ref,inv];};
const useV2Media=(q)=>{const [m,setM]=React.useState(()=>window.matchMedia(q).matches);React.useEffect(()=>{const mq=window.matchMedia(q);const h=e=>setM(e.matches);mq.addEventListener("change",h);return()=>mq.removeEventListener("change",h);},[q]);return m;};

/* ---------------- MAP ---------------- */
const MAP_W=1000,MAP_H=560;
const mapX=lng=>(lng+125)/59*MAP_W, mapY=lat=>(49.5-lat)/25.5*MAP_H;
const V2_CITIES=[["New York",-74.0,40.7,"NY"],["Boston",-71.06,42.36,"MA"],["Philadelphia",-75.16,39.95,"PA"],["Miami",-80.19,25.77,"FL"],["Atlanta",-84.39,33.75,"GA"],["Nashville",-86.78,36.16,"TN"],["Chicago",-87.63,41.88,"IL"],["Detroit",-83.05,42.33,"MI"],["Minneapolis",-93.27,44.98,"MN"],["Dallas",-96.80,32.78,"TX"],["Houston",-95.37,29.76,"TX"],["Austin",-97.74,30.27,"TX"],["Denver",-104.99,39.74,"CO"],["Phoenix",-112.07,33.45,"AZ"],["Las Vegas",-115.14,36.17,"NV"],["Los Angeles",-118.24,34.05,"CA"],["San Francisco",-122.42,37.77,"CA"],["Seattle",-122.33,47.61,"WA"],["Portland",-122.68,45.52,"OR"],["Charlotte",-80.84,35.23,"NC"]];
const FIPS_USPS={"01":"AL","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT","10":"DE","11":"DC","12":"FL","13":"GA","16":"ID","17":"IL","18":"IN","19":"IA","20":"KS","21":"KY","22":"LA","23":"ME","24":"MD","25":"MA","26":"MI","27":"MN","28":"MS","29":"MO","30":"MT","31":"NE","32":"NV","33":"NH","34":"NJ","35":"NM","36":"NY","37":"NC","38":"ND","39":"OH","40":"OK","41":"OR","42":"PA","44":"RI","45":"SC","46":"SD","47":"TN","48":"TX","49":"UT","50":"VT","51":"VA","53":"WA","54":"WV","55":"WI","56":"WY"};
const STATE_NAMES={AL:"Alabama",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"Washington DC",FL:"Florida",GA:"Georgia",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};
const stateStats=(usps)=>{let h=0;for(const ch of usps)h=(h*31+ch.charCodeAt(0))%997;const cities=V2_CITIES.filter(c=>c[3]===usps).length;const events=cities?cities*3+(h%5):(h%3);return {events,onsite:events?Math.max(1,Math.round(events*1.8)+(h%4)):0,samples:events*(180+(h%140)),ontime:88+(h%11)};};
let V2_TOPO=null;
const useV2StatePaths=()=>{const [paths,setPaths]=React.useState(null);React.useEffect(()=>{let alive=true;(async()=>{try{if(!window.d3||!window.topojson)return;if(!V2_TOPO)V2_TOPO=await fetch("https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json").then(r=>r.json());if(!alive)return;const fc=window.topojson.feature(V2_TOPO,V2_TOPO.objects.states);const proj=window.d3.geoTransform({point(x,y){this.stream.point(mapX(x),mapY(y));}});const gp=window.d3.geoPath(proj);setPaths(fc.features.map(f=>{const usps=FIPS_USPS[String(f.id).padStart(2,"0")];if(!usps)return null;return {d:gp(f),usps};}).filter(p=>p&&p.d));}catch(e){}})();return()=>{alive=false;};},[]);return paths;};

/* Hover a state → live stats. `quiet` = background thread version (no chips). */
const V2HoverMap=({quiet,compact,pinsOnly})=>{
  const paths=useV2StatePaths();
  const [hov,setHov]=React.useState(null);
  const [pulse,setPulse]=React.useState(0);
  React.useEffect(()=>{const id=setInterval(()=>setPulse(p=>p+1),900);return()=>clearInterval(id);},[]);
  const st=hov?stateStats(hov):null;
  const active=V2_CITIES[pulse%V2_CITIES.length];
  return (
    <div className="v2-map" style={{position:"relative",width:"100%",height:"100%"}}>
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid meet" style={{position:"absolute",inset:0,width:"100%",height:"100%"}} onMouseLeave={()=>setHov(null)}>
        {paths&&!pinsOnly&&<g>{paths.map(p=>{const live=V2_CITIES.some(c=>c[3]===p.usps);const on=hov===p.usps;return <path key={p.usps} d={p.d} onMouseEnter={quiet?undefined:()=>setHov(p.usps)} onClick={quiet?undefined:()=>setHov(v=>v===p.usps?null:p.usps)} fill={on?LIME:live?"rgba(214,243,95,0.16)":"rgba(250,250,247,0.045)"} fillOpacity={on?.28:1} stroke={on?LIME:"rgba(250,250,247,0.22)"} strokeWidth={on?1.4:.8} vectorEffect="non-scaling-stroke" strokeLinejoin="round" style={{transition:"fill .25s,stroke .25s",cursor:quiet?"default":"pointer"}}/>;})}</g>}
        {!paths&&!pinsOnly&&<rect x="0" y="0" width={MAP_W} height={MAP_H} fill="none"/>}
        {V2_CITIES.map((c,k)=>{const x=mapX(c[1]),y=mapY(c[2]);const isA=c===active;const dim=hov&&c[3]!==hov;return (
          <g key={c[0]} style={{opacity:dim?.25:1,transition:"opacity .25s"}} pointerEvents="none">
            {isA&&<circle cx={x} cy={y} r={compact?16:13} fill="none" stroke={LIME} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity=".6"/>}
            <circle cx={x} cy={y} r={isA?(compact?7:5.5):(compact?5:4)} fill={isA?LIME:"rgba(214,243,95,0.72)"} style={{transition:"r .3s"}}/>
          </g>);})}
      </svg>
      {!quiet&&(
        <div className="v2-mapchip" style={{position:"absolute",left:12,top:12,pointerEvents:"none"}}>
          {st?(
            <React.Fragment>
              <div style={{fontFamily:MONO,fontSize:10,letterSpacing:".14em",color:LIME,textTransform:"uppercase"}}>{STATE_NAMES[hov]}</div>
              <div style={{display:"flex",gap:14,marginTop:8}}>
                {[[st.events,"EVENTS"],[st.onsite,"ON-SITE"],[st.samples.toLocaleString(),"SAMPLES"],[st.ontime+"%","ON-TIME"]].map(([v,l])=>(
                  <div key={l}><div style={{fontFamily:MONO,fontWeight:700,fontSize:compact?15:18,color:FG,lineHeight:1}}>{v}</div><div style={{marginTop:4,fontFamily:MONO,fontSize:8,letterSpacing:".14em",color:MUT}}>{l}</div></div>
                ))}
              </div>
            </React.Fragment>
          ):(
            <span style={{display:"inline-flex",alignItems:"center",gap:7,fontFamily:MONO,fontSize:9.5,letterSpacing:".12em",color:FG2}}><V2Dot/> 20 MARKETS LIVE <span style={{color:MUT}}>· HOVER A STATE</span></span>
          )}
        </div>
      )}
    </div>
  );
};

/* ---------------- DEVICE FRAMES ---------------- */
const V2Laptop=({children,className})=>(
  <div className={"v2-laptop "+(className||"")}>
    <div className="v2-laptop-lid"><span className="v2-laptop-cam"/><div className="v2-laptop-screen">{children}</div></div>
    <div className="v2-laptop-base"><span className="v2-laptop-notch"/></div>
  </div>
);
const V2Phone=({children,style})=>(
  <div className="v2-phone" style={style}><span className="v2-phone-pill"/><div className="v2-phone-screen">{children}<span className="v2-phone-home"/></div></div>
);
const V2Chrome=({path,right})=>(
  <div style={{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderBottom:`1px solid ${LINE}`,background:"rgba(255,255,255,0.02)",flexShrink:0}}>
    <div style={{display:"flex",gap:5}}>{["#FF5F57","#FFBD2E","#28C840"].map(c=><span key={c} style={{width:7,height:7,borderRadius:999,background:c}}/>)}</div>
    <span style={{order:9,marginLeft:6,padding:"2px 7px",borderRadius:999,border:"1px solid rgba(255,182,39,.5)",fontFamily:MONO,fontSize:8.5,letterSpacing:".16em",color:"#FFB627",whiteSpace:"nowrap"}}>SAMPLE DATA</span>
    <span style={{flex:1,textAlign:"center",fontFamily:MONO,fontSize:9,color:MUT}}>spark.ignite / {path}</span>
    {right||<span style={{display:"inline-flex",alignItems:"center",gap:6,fontFamily:MONO,fontSize:8.5,color:LIME}}><V2Dot s={5}/> LIVE</span>}
  </div>
);
const V2Stat=({v,l,size=18})=><div><div style={{fontFamily:MONO,fontWeight:700,fontSize:size,color:LIME,lineHeight:1}}>{v}</div><div style={{marginTop:4,fontFamily:MONO,fontSize:8,letterSpacing:".14em",color:MUT}}>{l}</div></div>;

/* ---------------- FIELD APP SCREENS ---------------- */
const V2_SHIFTS=[
  {brand:"Feel Free",accent:"#F9994E",city:"MIAMI, FL · 11:00 to 7:00 PM",venue:"Wynwood Marketplace",goal:"260"},
  {brand:"Subaru",accent:"#4C86F9",city:"DENVER, CO · 10:00 to 6:00 PM",venue:"Cherry Creek Park",goal:"180"},
  {brand:"Liquid Death",accent:"#D7453E",city:"CHICAGO, IL · 1:00 to 9:00 PM",venue:"Wicker Park Fest",goal:"420"},
  {brand:"White Claw",accent:LIME,city:"AUSTIN, TX · 12:00 to 8:00 PM",venue:"The Mohawk Patio",goal:"320"}
];
const V2ShiftScreen=({c})=>(
  <div style={{height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",background:BG,padding:"8px 8px 26px"}}>
    <div style={{display:"flex",justifyContent:"space-between",padding:"8px 10px 14px",fontFamily:MONO,fontSize:9.5,color:FG2}}><span>9:41</span><span style={{display:"inline-flex",gap:3}}>{[1,2,3].map(i=><span key={i} style={{width:4,height:4,borderRadius:999,background:"rgba(250,250,247,.45)"}}/>)}</span></div>
    <div style={{padding:"0 6px",flex:1,display:"flex",flexDirection:"column"}}>
      <div style={{fontFamily:MONO,fontSize:8.5,letterSpacing:".14em",color:MUT}}>TODAY'S SHIFT</div>
      <div style={{marginTop:8,fontFamily:SANS,fontWeight:700,fontSize:20,letterSpacing:"-.02em",color:FG}}>{c.brand}</div>
      <div style={{marginTop:4,fontFamily:MONO,fontSize:9,color:MUT}}>{c.city}</div>
      <div style={{marginTop:12,display:"inline-flex",alignSelf:"flex-start",alignItems:"center",gap:6,padding:"5px 9px",borderRadius:2,background:c.accent+"1A",border:`1px solid ${c.accent}55`}}><span style={{color:c.accent,fontSize:9}}>◉</span><span style={{fontFamily:MONO,fontSize:8.5,letterSpacing:".12em",color:c.accent,whiteSpace:"nowrap"}}>GPS VERIFIED</span></div>
      <p style={{margin:"12px 0 0",fontSize:12.5,lineHeight:1.45,color:FG2}}>You're at {c.venue}</p>
      <div style={{marginTop:14,padding:11,borderRadius:2,background:c.accent,color:BG,textAlign:"center",fontFamily:SANS,fontWeight:700,fontSize:14}}>Clock in</div>
      <div style={{marginTop:"auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[["SAMPLES GOAL",c.goal],["BRIEF","READY"]].map(([l,v])=><div key={l} style={{border:`1px solid ${LINE}`,borderRadius:2,padding:"9px 8px"}}><div style={{fontFamily:MONO,fontSize:7.5,letterSpacing:".14em",color:MUT}}>{l}</div><div style={{marginTop:4,fontFamily:MONO,fontWeight:700,fontSize:14,color:c.accent}}>{v}</div></div>)}
      </div>
    </div>
  </div>
);
/* Swipe / shuffle stack */
const V2PhoneStack=()=>{
  const n=V2_SHIFTS.length;const [o,setO]=React.useState(0);const sx=React.useRef(null);
  const next=()=>setO(v=>v+1);
  return (
    <div className="v2-stack" role="button" tabIndex={0} aria-label="Shuffle field app screens" onMouseEnter={next} onClick={next} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();next();}}} onTouchStart={e=>{sx.current=e.touches[0].clientX;}} onTouchEnd={e=>{if(sx.current!=null&&Math.abs(e.changedTouches[0].clientX-sx.current)>30)next();sx.current=null;}}>
      {V2_SHIFTS.map((c,i)=>{const d=(o+(n-1)-i+n*64)%n;return (
        <div key={c.brand} className="v2-stackitem" style={{zIndex:n-d,transform:`translate(${d*22}px,${d*18}px) scale(${1-d*.045})`,filter:d?`brightness(${1-d*.14})`:"none"}}><V2Phone><V2ShiftScreen c={c}/></V2Phone></div>);})}
      <span className="v2-stackhint">Hover or swipe to shuffle</span>
    </div>
  );
};

/* ---------------- DASHBOARD MOCKS ---------------- */
const V2_FEED=[["09:14","BROOKLYN, NY","Marisol Vega","CHECKED-IN"],["09:12","SAN FRANCISCO, CA","Keon Bridges","ON-SITE"],["09:08","DENVER, CO","Riley Voss","SETUP"],["08:56","DETROIT, MI","Deshawn Cole","DISPATCHED"],["08:51","AUSTIN, TX","Priya Natarajan","PHOTO UPLOAD"],["08:44","MIAMI, FL","Camila Reyes","CHECKED-IN"],["08:39","CHICAGO, IL","Jordan Achebe","ON-SITE"],["08:21","SAN FRANCISCO, CA","Keon Bridges","RECAP SENT"],["08:02","NASHVILLE, TN","Tess Marlow","RECAP SENT"],["07:48","PHOENIX, AZ","Luis Ortega","DISPATCHED"]];
/* Type-to-filter feed */
const V2Feed=({rows=6,compact})=>{
  const [q,setQ]=React.useState("");
  const list=V2_FEED.filter(r=>!q||r.join(" ").toLowerCase().includes(q.toLowerCase())).slice(0,rows);
  return (
    <div style={{display:"flex",flexDirection:"column",minHeight:0}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
        <span style={{fontFamily:MONO,fontSize:9,letterSpacing:".14em",color:MUT}}>ACTIVITY</span>
        <label style={{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,padding:"5px 9px",border:`1px solid ${q?LIME+"88":LINE}`,borderRadius:999,background:"rgba(250,250,247,0.03)",transition:"border-color .2s"}}>
          <span aria-hidden style={{fontFamily:MONO,fontSize:10,color:q?LIME:MUT}}>⌕</span>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Type a city, name, status" aria-label="Filter activity feed" style={{background:"none",border:0,outline:0,color:FG,fontFamily:MONO,fontSize:9.5,width:compact?120:150}}/>
        </label>
      </div>
      <div style={{display:"flex",flexDirection:"column"}}>
        {list.length?list.map((r,k)=>(
          <div key={r.join()} className="v2-feedrow" style={{display:"grid",gridTemplateColumns:"38px 1fr auto",gap:8,alignItems:"center",fontFamily:MONO,fontSize:9.5,padding:"7px 0",borderTop:`1px solid ${LINE}`}}>
            <span style={{color:MUT}}>{r[0]}</span>
            <span style={{minWidth:0}}><span style={{display:"block",color:FG,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r[1]}</span><span style={{display:"block",color:MUT,fontSize:8.5,marginTop:1}}>{r[2]}</span></span>
            <span style={{color:r[3]==="RECAP SENT"?LIME:FG2,whiteSpace:"nowrap"}}>{r[3]}</span>
          </div>
        )):<div style={{padding:"14px 0",fontFamily:MONO,fontSize:9.5,color:MUT,borderTop:`1px solid ${LINE}`}}>No matches for “{q}”</div>}
      </div>
    </div>
  );
};
const V2_PHOTOS=["../assets/activation-white-claw-tent-3.jpg","../assets/activation-liquid-death-street-two-hosts.jpg","../assets/activation-feel-free-festival-cart.jpg","../assets/activation-subaru-booth-conversation.jpg"];
const V2_PHOTO_META=[["BROOKLYN, NY","WHITE CLAW"],["CHICAGO, IL","LIQUID DEATH"],["MIAMI, FL","FEEL FREE"],["DENVER, CO","SUBARU"]];
const V2Gallery=()=>{
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{const id=setInterval(()=>setI(v=>(v+1)%V2_PHOTOS.length),2600);return()=>clearInterval(id);},[]);
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><V2Dot s={5}/><span style={{fontFamily:MONO,fontSize:9,letterSpacing:".14em",color:MUT}}>INCOMING PHOTOS</span><span style={{marginLeft:"auto",fontFamily:MONO,fontSize:8.5,color:MUT}}>{String(i+1).padStart(2,"0")}/{String(V2_PHOTOS.length).padStart(2,"0")}</span></div>
      <div style={{position:"relative",aspectRatio:"4 / 3",borderRadius:4,overflow:"hidden",border:`1px solid ${LINE}`,background:BG}}>
        {V2_PHOTOS.map((s,k)=><img key={s} src={s} alt="Sample geotagged field photo" loading="lazy" decoding="async" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:k===i?1:0,transition:"opacity .7s"}}/>)}
        <div aria-hidden style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(10,11,13,.86), transparent 55%)"}}/>
        <div style={{position:"absolute",left:10,bottom:9,fontFamily:MONO,fontSize:8.5,letterSpacing:".12em",color:FG}}>{V2_PHOTO_META[i][0]} <span style={{color:LIME}}>· {V2_PHOTO_META[i][1]}</span> <span style={{color:MUT}}>· GEO ✓</span></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:5,marginTop:6}}>
        {V2_PHOTOS.map((s,k)=><button key={s} onClick={()=>setI(k)} aria-label={"Photo "+(k+1)} style={{padding:0,border:`1px solid ${k===i?LIME:LINE}`,borderRadius:3,overflow:"hidden",aspectRatio:"1",cursor:"pointer",background:"none",opacity:k===i?1:.5}}><img src={s} alt="Sample geotagged field photo" loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></button>)}
      </div>
    </div>
  );
};

/* ---------------- ACCOUNTS DASHBOARD (hero laptop) ---------------- */
const V2_CLUSTERS=[[-122.33,47.61,3],[-122.42,37.77,24],[-118.24,34.05,56],[-115.14,36.17,9],[-112.07,33.45,2],[-104.99,39.74,9],[-96.80,32.78,68],[-95.37,29.76,27],[-93.27,44.98,3],[-88.10,43.04,36],[-87.63,41.88,14],[-83.05,42.33,3],[-84.51,39.10,2],[-90.20,38.63,2],[-86.78,36.16,5],[-80.84,35.23,2],[-74.00,40.71,109],[-71.06,42.36,54],[-75.16,39.95,3],[-81.40,28.54,25],[-80.19,25.77,2],[-71.10,44.05,2]];
const V2_SOLO=[[-122.70,44.60,"b"],[-105.60,39.90,"b"],[-116.50,32.90,"b"],[-93.20,34.90,"b"],[-86.30,39.90,"b"],[-77.03,38.90,"b"],[-80.60,33.60,"b"],[-98.50,32.20,"r"]];
const V2AccountsMap=()=>{
  const paths=useV2StatePaths();
  const [sat,setSat]=React.useState(false);
  const [hov,setHov]=React.useState(null);
  const land=sat?"rgba(214,243,95,0.13)":"rgba(250,250,247,0.05)";
  return (
    <div style={{position:"relative",width:"100%",height:"100%",borderRadius:6,overflow:"hidden",border:`1px solid ${LINE}`,background:sat?"#0B1418":"#0C0E12"}}>
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid slice" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
        {paths&&<g>{paths.map(p=>{const on=hov===p.usps;return <path key={p.usps} d={p.d} onMouseEnter={()=>setHov(p.usps)} onMouseLeave={()=>setHov(null)} fill={on?"rgba(214,243,95,0.26)":land} stroke={on?LIME:"rgba(250,250,247,0.18)"} strokeWidth={on?1.4:.7} vectorEffect="non-scaling-stroke" strokeLinejoin="round" style={{transition:"fill .2s"}}/>;})}</g>}
        <g pointerEvents="none">
          {V2_SOLO.map(([lng,lat,k],i)=><circle key={i} cx={mapX(lng)} cy={mapY(lat)} r="9" fill={k==="r"?V2.ORANGE:V2.BLUE} stroke="rgba(10,11,13,.65)" strokeWidth="2"/>)}
          {V2_CLUSTERS.map(([lng,lat,n])=>{const r=n>=100?27:n>=10?23:19;return (
            <g key={lng+""+lat}>
              <circle cx={mapX(lng)} cy={mapY(lat)} r={r+7} fill={LIME} opacity=".13"/>
              <circle cx={mapX(lng)} cy={mapY(lat)} r={r} fill={LIME} stroke="rgba(10,11,13,.7)" strokeWidth="2"/>
              <text x={mapX(lng)} y={mapY(lat)} textAnchor="middle" dominantBaseline="central" style={{fontFamily:MONO,fontWeight:700,fontSize:n>=100?19:21,fill:BG}}>{n}</text>
            </g>);})}
        </g>
      </svg>
      <div style={{position:"absolute",left:8,top:8,display:"flex",borderRadius:4,overflow:"hidden",border:`1px solid ${LINE}`,background:"rgba(10,11,13,.78)",backdropFilter:"blur(6px)"}}>
        {[["Map",false],["Satellite",true]].map(([l,v])=><button key={l} type="button" onClick={e=>{e.stopPropagation();setSat(v);}} style={{border:0,cursor:"pointer",padding:"4px 8px",background:sat===v?LIME:"transparent",color:sat===v?BG:FG2,fontFamily:SANS,fontWeight:sat===v?700:500,fontSize:8.5}}>{l}</button>)}
      </div>
      <div style={{position:"absolute",right:8,top:8,width:17,height:17,display:"grid",placeItems:"center",borderRadius:3,border:`1px solid ${LINE}`,background:"rgba(10,11,13,.78)",color:FG2,fontFamily:MONO,fontSize:9}}>⛶</div>
      <div style={{position:"absolute",left:8,bottom:7,display:"inline-flex",alignItems:"center",gap:6,fontFamily:MONO,fontSize:7.5,letterSpacing:".12em",color:FG2,background:"rgba(10,11,13,.7)",padding:"3px 7px",borderRadius:3}}><V2Dot s={4}/>{hov?(STATE_NAMES[hov]||hov).toUpperCase():"473 ACCOUNTS MAPPED"}</div>
    </div>
  );
};
const V2_KPI=[["ACCOUNTS","473",LIME],["VISITED","—",LIME],["SCHEDULED","435",V2.BLUE],["NEEDS VISIT","38",V2.ORANGE]];
const V2_PILLS=[["ALL","473",FG],["VISITED","0",LIME],["SCHEDULED","435",V2.BLUE],["NEEDS VISIT","38",V2.ORANGE]];
const V2_ACCOUNTS=[["Piggly Wiggly #277 · 2026-09-14","b"],["Good to Go #73 · 2026-08-19","b"],["7 Eleven #41794 · 2026-10-02","b"],["Restaurant Association @ McCormick","b"],["893 Metro Market Shorewood","b"],["503 Mariano's Lakeshore East","b"],["502 Mariano's Vernon Hills","b"],["515 Mariano's Ravenswood","b"],["878 Pick 'n Save Holt","b"],["Walmart Supercenter · NH","o"]];
/* Hero laptop screen: accounts command view */
const V2CoverageScreen=({compact})=>{
  const [pill,setPill]=React.useState(0);
  return (
  <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",background:BG}}>
    <V2Chrome path="accounts"/>
    <div style={{flex:1,minHeight:0,display:"flex",flexDirection:"column",gap:6,padding:"7px 8px 8px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6,flexShrink:0}}>
        {V2_KPI.map(([l,v,c])=>(
          <div key={l} style={{background:CARD,border:`1px solid ${LINE}`,borderRadius:6,padding:"6px 8px 7px"}}>
            <div style={{fontFamily:MONO,fontSize:6.5,letterSpacing:".18em",color:MUT}}>{l}</div>
            <div style={{marginTop:2,fontFamily:MONO,fontWeight:700,fontSize:18,lineHeight:1,color:c}}>{v}</div>
          </div>))}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:5,background:CARD,border:`1px solid ${LINE}`,borderRadius:6,padding:"5px 7px",flexShrink:0}}>
        <span style={{fontFamily:MONO,fontSize:6.5,letterSpacing:".18em",color:MUT,flexShrink:0}}>STATUS</span>
        {V2_PILLS.map(([l,n,c],i)=>{const on=i===pill;return (
          <button key={l} type="button" onClick={e=>{e.stopPropagation();setPill(i);}} style={{cursor:"pointer",whiteSpace:"nowrap",display:"inline-flex",alignItems:"center",gap:4,padding:"3px 7px",borderRadius:999,border:`1px solid ${on?c:"transparent"}`,background:on?c+"1F":"rgba(250,250,247,.04)",color:on?c:MUT,fontFamily:MONO,fontSize:7,letterSpacing:".1em"}}>
            {i>0&&<span style={{width:4,height:4,borderRadius:999,background:on?c:MUT}}/>}{l} · {n}
          </button>);})}
        <span style={{marginLeft:"auto",display:"flex",gap:5,minWidth:0}}>
          {["All states","All retailers"].map(l=><span key={l} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"3px 7px",borderRadius:4,border:`1px solid ${LINE}`,fontFamily:SANS,fontSize:8,color:FG2,whiteSpace:"nowrap"}}>{l}<span style={{color:MUT,fontSize:6}}>▾</span></span>)}
          {!compact&&<span style={{padding:"3px 8px",borderRadius:4,border:`1px solid ${LINE}`,fontFamily:SANS,fontSize:8,color:MUT,whiteSpace:"nowrap"}}>Search account or address</span>}
        </span>
      </div>
      <div style={{flex:1,minHeight:0,display:"grid",gridTemplateColumns:"1.62fr .95fr",gap:6}}>
        <V2AccountsMap/>
        <div style={{background:CARD,border:`1px solid ${LINE}`,borderRadius:6,display:"flex",flexDirection:"column",minHeight:0,overflow:"hidden"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:5,padding:"7px 9px 6px",borderBottom:`1px solid ${LINE}`,flexShrink:0}}>
            <span style={{fontFamily:SANS,fontWeight:700,fontSize:11,color:FG}}>Accounts</span>
            <span style={{fontFamily:MONO,fontSize:7.5,color:MUT}}>473</span>
          </div>
          <div style={{flex:1,minHeight:0,overflow:"hidden"}}>
            {V2_ACCOUNTS.map(([n,k])=>(
              <div key={n} style={{display:"grid",gridTemplateColumns:"6px minmax(0,1fr) auto",alignItems:"center",gap:6,padding:"7px 9px",borderBottom:`1px solid ${LINE}`}}>
                <span style={{width:5,height:5,borderRadius:999,background:k==="o"?V2.ORANGE:V2.BLUE}}/>
                <span style={{fontFamily:SANS,fontSize:8.5,color:FG,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{n}</span>
                <span style={{fontFamily:MONO,fontSize:6.5,letterSpacing:".1em",fontWeight:700,color:BG,background:LIME,borderRadius:999,padding:"3px 6px",whiteSpace:"nowrap"}}>✦ SCHEDULE</span>
              </div>))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

/* Full command center (lightbox + report step) */
const V2CommandCenter=({compact})=>(
  <div className="v2-cc" style={{display:"grid",gridTemplateColumns:compact?"1fr":"1.15fr .85fr",gridTemplateRows:compact?"minmax(0,1fr) auto":"1fr",background:LINE,gap:1,height:"100%",minHeight:0}}>
    <div style={{background:CARD,position:"relative",minHeight:compact?120:340}}><div style={{position:"absolute",inset:"12px 16px"}}><V2HoverMap compact={compact}/></div></div>
    <div style={{background:CARD,padding:compact?"12px 16px 14px":"16px 16px 18px",display:"grid",gridTemplateColumns:"1fr",gap:18,alignContent:"start",minHeight:0}}>
      <V2Feed rows={compact?3:7} compact={compact}/>
      {!compact&&<V2Gallery/>}
    </div>
  </div>
);

/* Step mocks */
const V2RequestMock=()=>{
  const rows=[["#1042","Total Wireless · 40-door retail demo","Q3 · 6 markets","ROUTED"],["#1043","White Claw · Austin patio takeover","Jul 12 · 8 BAs","STAFFING"],["#1044","Subaru · Cherry Creek dog days","Jul 14 · 4 BAs","BRIEFED"],["#1045","Liquid Death · Wicker Park Fest","Jul 20 · 12 BAs","NEW"]];
  const [n,setN]=React.useState(1);React.useEffect(()=>{const id=setInterval(()=>setN(v=>v>=rows.length?1:v+1),1100);return()=>clearInterval(id);},[]);
  return (<div className="v2-mock"><V2Chrome path="requests"/><div className="v2-mockbody" style={{padding:16,display:"flex",flexDirection:"column",gap:8}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontFamily:MONO,fontSize:9,letterSpacing:".14em",color:MUT}}>REQUEST QUEUE · 4 OPEN</span><span style={{fontFamily:MONO,fontSize:8.5,padding:"4px 8px",border:`1px solid ${LIME}66`,color:LIME,borderRadius:999}}>+ NEW PROGRAM</span></div>
    {rows.map((r,k)=><div key={r[0]} style={{flex:"1 1 0",minHeight:0,display:"grid",gridTemplateColumns:"44px 1fr auto",gap:10,alignItems:"center",padding:"10px 12px",border:`1px solid ${k<n?"rgba(214,243,95,0.3)":LINE}`,borderRadius:8,background:k<n?"rgba(214,243,95,0.04)":"transparent",opacity:k<n?1:.35,transition:"all .4s"}}><span style={{fontFamily:MONO,fontSize:9,color:MUT}}>{r[0]}</span><span style={{minWidth:0}}><span style={{display:"block",fontSize:12.5,fontWeight:600,color:FG,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r[1]}</span><span style={{display:"block",fontFamily:MONO,fontSize:8.5,color:MUT,marginTop:2}}>{r[2]}</span></span><span style={{fontFamily:MONO,fontSize:8.5,letterSpacing:".1em",color:r[3]==="NEW"?FG2:LIME}}>{r[3]}</span></div>)}
  </div></div>);
};
const V2StaffMock=()=>{
  const mk=[["AUSTIN",100],["DENVER",100],["MIAMI",88],["CHICAGO",75],["PHOENIX",50]];
  return (<div className="v2-mock"><V2Chrome path="staffing"/><div className="v2-mockbody" style={{padding:16,display:"flex",flexDirection:"column"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><span style={{fontFamily:MONO,fontSize:9,letterSpacing:".14em",color:MUT}}>FILL RATE · THIS WEEK</span><span style={{fontFamily:MONO,fontWeight:700,fontSize:16,color:LIME}}>83%</span></div>
    <div style={{flex:"1 1 auto",minHeight:0,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>{mk.map(([m,v])=><div key={m} style={{display:"grid",gridTemplateColumns:"64px 1fr 34px",gap:10,alignItems:"center"}}><span style={{fontFamily:MONO,fontSize:9,letterSpacing:".1em",color:FG2}}>{m}</span><span style={{height:7,borderRadius:99,background:"rgba(250,250,247,.07)",overflow:"hidden"}}><span className="v2-bar" style={{"--w":v+"%",display:"block",height:"100%",background:v<80?RED:LIME,opacity:.9}}/></span><span style={{fontFamily:MONO,fontSize:9.5,color:v<80?RED:LIME,textAlign:"right"}}>{v}%</span></div>)}</div>
    <div style={{marginTop:14,padding:"11px 12px",border:`1px solid ${RED}55`,background:RED+"12",borderRadius:8,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}><span style={{fontFamily:MONO,fontSize:9,color:RED,letterSpacing:".1em"}}>PHOENIX · 2 SHIFTS OPEN · SAT</span><span style={{marginLeft:"auto",fontFamily:MONO,fontSize:8.5,padding:"5px 9px",background:LIME,color:BG,borderRadius:999,fontWeight:700}}>PULL FROM IGNITE BENCH →</span></div>
  </div></div>);
};
const V2VerifyMock=()=>{
  const rows=[["GPS MATCH","40.678, -73.944 · 12m"],["CHECK-IN PHOTO","09:14 · GEO-STAMPED"],["KIT + UNIFORM","BRAND STANDARD OK"],["SHELF SET","12 FACINGS"],["SAMPLES LOGGED","318 POURS"],["OUT-TIME","14:02 · ON SCHEDULE"]];
  const [n,setN]=React.useState(0);React.useEffect(()=>{const id=setInterval(()=>setN(v=>(v+1)%(rows.length+2)),650);return()=>clearInterval(id);},[]);
  return (<div className="v2-mock"><V2Chrome path="verification"/><div className="v2-mockbody" style={{padding:16,display:"flex",flexDirection:"column"}}>
    <div style={{flex:"1 1 auto",minHeight:0,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>{rows.map(([l,v],k)=><div key={l} style={{display:"flex",alignItems:"center",gap:10,opacity:k<n?1:.2,transition:"opacity .35s"}}><span style={{width:17,height:17,flexShrink:0,borderRadius:999,border:`1px solid ${k<n?LIME:LINE}`,display:"grid",placeItems:"center",color:LIME,fontSize:10,fontFamily:MONO,animation:k===n-1?"v2-pop .4s both":"none"}}>{k<n?"✓":""}</span><span style={{fontFamily:MONO,fontSize:10.5,letterSpacing:".1em",color:FG,width:120,flexShrink:0}}>{l}</span><span style={{fontFamily:MONO,fontSize:9.5,color:MUT,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v}</span></div>)}</div>
    <div style={{marginTop:12,paddingTop:12,borderTop:`1px solid ${LINE}`,display:"flex",gap:18}}><V2Stat v="100%" l="GPS VERIFIED" size={15}/><V2Stat v="0" l="UNPROVEN HRS" size={15}/><V2Stat v="318" l="POURS" size={15}/></div>
  </div></div>);
};
const V2RecapMock=()=>{
  const lines=["23 events · 6 states · 4,208 samples","Denver +34% velocity vs. baseline","612 geo-stamped photos · 97% compliant","Next: reorder 2 SKUs, add 3 doors in Austin"];
  const [n,setN]=React.useState(1);React.useEffect(()=>{const id=setInterval(()=>setN(v=>v>=lines.length+1?1:v+1),1000);return()=>clearInterval(id);},[]);
  return (<div className="v2-mock"><V2Chrome path="recap · auto-draft"/><div className="v2-mockbody" style={{padding:"12px 16px",display:"flex",flexDirection:"column"}}>
    <div className="v2-shots">{V2_PHOTOS.map(s=><div key={s} style={{position:"relative",height:54,borderRadius:4,overflow:"hidden",border:`1px solid ${LINE}`}}><img src={s} alt="Sample geotagged field photo" loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/><span style={{position:"absolute",left:4,bottom:3,fontFamily:MONO,fontSize:7,color:LIME,textShadow:"0 1px 3px #000"}}>GEO ✓</span></div>)}</div>
    <div style={{flex:"1 1 auto",minHeight:0,marginTop:12,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>{lines.map((t,k)=><div key={t} style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontFamily:MONO,fontSize:9,color:MUT,width:16}}>{String(k+1).padStart(2,"0")}</span><span style={{flex:1,overflow:"hidden",whiteSpace:"nowrap"}}><span style={{display:"inline-block",fontFamily:MONO,fontSize:11,color:k<n?FG:MUT,opacity:k<n?1:.3,overflow:"hidden",whiteSpace:"nowrap",animation:k===n-1?"v2-type .8s linear both":"none",verticalAlign:"bottom"}}>{t}</span></span>{k===n-1&&<span aria-hidden style={{width:5,height:12,background:LIME,animation:"v2-caret 1.1s step-end infinite"}}/>}</div>)}</div>
    <div style={{paddingTop:12,borderTop:`1px solid ${LINE}`,display:"flex",gap:18}}><V2Stat v="$2.18" l="$ / SAMPLE" size={15}/><V2Stat v="+18%" l="VS BROOKLYN" size={15}/><V2Stat v="24H" l="TO CLIENT-READY" size={15}/></div>
  </div></div>);
};

/* Brief step: BA phone + command phone, looping clock-in handoff */
const V2_VENUES=[
  {venue:"MSG Event",sub:"Madison Square Garden",city:"NEW YORK, NY",window:"6:00 to 11:00 PM",accent:"#4C86F9",goal:"420",ba:"Marisol Vega"},
  {venue:"Coachella",sub:"Empire Polo Club",city:"INDIO, CA",window:"12:00 to 10:00 PM",accent:"#F9994E",goal:"960",ba:"Keon Bridges"},
  {venue:"NCAA Finals",sub:"Lucas Oil Stadium",city:"INDIANAPOLIS, IN",window:"4:00 to 10:00 PM",accent:LIME,goal:"540",ba:"Riley Voss"},
];
const V2BriefScreen=({v,pressed,compact})=>(
  <div style={{height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",background:BG,padding:"8px 8px 24px"}}>
    <div style={{display:"flex",justifyContent:"space-between",padding:"7px 9px 10px",fontFamily:MONO,fontSize:9,color:FG2}}><span>9:41</span><span style={{display:"inline-flex",gap:3}}>{[1,2,3].map(i=><span key={i} style={{width:4,height:4,borderRadius:999,background:"rgba(250,250,247,.45)"}}/>)}</span></div>
    <div style={{padding:"0 5px",flex:1,display:"flex",flexDirection:"column",minHeight:0}}>
      <div style={{fontFamily:MONO,fontSize:8,letterSpacing:".14em",color:MUT}}>TODAY'S BRIEF</div>
      <div style={{marginTop:6,fontFamily:SANS,fontWeight:700,fontSize:compact?15:18,letterSpacing:"-.02em",color:FG,lineHeight:1.1}}>{v.venue}</div>
      <div style={{marginTop:3,fontFamily:MONO,fontSize:8,color:FG2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v.sub}</div>
      <div style={{marginTop:2,fontFamily:MONO,fontSize:7.5,color:MUT,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v.city} · {v.window}</div>
      <div style={{marginTop:10,display:"inline-flex",alignSelf:"flex-start",alignItems:"center",gap:5,padding:"4px 8px",borderRadius:2,background:v.accent+"1A",border:`1px solid ${v.accent}55`}}><span style={{color:v.accent,fontSize:8}}>◉</span><span style={{fontFamily:MONO,fontSize:7.5,letterSpacing:".12em",color:v.accent,whiteSpace:"nowrap"}}>GPS AT VENUE</span></div>
      <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:4}}>{["Brand standards","Photo requirements","SKUs + pricing"].map(t=><div key={t} style={{display:"flex",gap:6,alignItems:"center",fontSize:compact?9.5:10.5,color:FG2}}><span style={{color:LIME,fontFamily:MONO,fontSize:8}}>✓</span>{t}</div>)}</div>
      <div style={{marginTop:12,padding:10,borderRadius:2,background:pressed?LIME:v.accent,color:BG,textAlign:"center",fontFamily:SANS,fontWeight:700,fontSize:compact?12.5:14,transform:pressed?"scale(.96)":"none",transition:"transform .18s var(--v2-ease),background .18s",position:"relative"}}>{pressed?"Clocked in ✓":"Clock in"}{pressed&&<span aria-hidden style={{position:"absolute",inset:-6,border:`1px solid ${LIME}`,borderRadius:6,opacity:.5}}/>}</div>
      <div style={{marginTop:"auto",paddingTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
        {[["SAMPLES GOAL",v.goal],["AMBASSADOR",v.ba.split(" ")[0]]].map(([l,val])=><div key={l} style={{border:`1px solid ${LINE}`,borderRadius:2,padding:"7px 7px"}}><div style={{fontFamily:MONO,fontSize:7,letterSpacing:".14em",color:MUT}}>{l}</div><div style={{marginTop:3,fontFamily:MONO,fontWeight:700,fontSize:12,color:v.accent}}>{val}</div></div>)}
      </div>
    </div>
  </div>
);
const V2CommandPhoneScreen=({done,compact})=>(
  <div style={{height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",background:CARD,padding:"8px 8px 24px"}}>
    <div style={{display:"flex",justifyContent:"space-between",padding:"7px 9px 10px",fontFamily:MONO,fontSize:9,color:FG2}}><span>9:41</span><span style={{display:"inline-flex",alignItems:"center",gap:5,color:LIME}}><V2Dot s={4}/>LIVE</span></div>
    <div style={{padding:"0 5px",flex:1,display:"flex",flexDirection:"column",minHeight:0}}>
      <div style={{fontFamily:MONO,fontSize:8,letterSpacing:".14em",color:MUT}}>SPARK · COMMAND</div>
      <div style={{marginTop:6,fontFamily:SANS,fontWeight:700,fontSize:compact?13:15,letterSpacing:"-.02em",color:FG,lineHeight:1.15}}>Tonight's activations</div>
      <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:6}}>
        {V2_VENUES.map((v,i)=>{const on=done[i];return (
          <div key={v.venue} style={{padding:"8px 9px",borderRadius:6,border:`1px solid ${on?"rgba(214,243,95,.34)":LINE}`,background:on?"rgba(214,243,95,.06)":"transparent",transition:"all .4s var(--v2-ease)"}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:13,height:13,flexShrink:0,borderRadius:999,border:`1px solid ${on?LIME:LINE}`,display:"grid",placeItems:"center",color:LIME,fontFamily:MONO,fontSize:7.5,animation:on?"v2-pop .4s both":"none"}}>{on?"✓":""}</span>
              <span style={{flex:"1 1 auto",minWidth:0,fontSize:compact?10.5:11.5,fontWeight:600,color:on?FG:MUT,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v.venue}</span>
            </div>
            <div style={{marginTop:3,paddingLeft:19,display:"flex",gap:6,alignItems:"baseline"}}>
              <span style={{fontFamily:MONO,fontSize:7,letterSpacing:".1em",color:on?LIME:MUT,whiteSpace:"nowrap"}}>{on?"CLOCKED IN":"PENDING"}</span>
              <span style={{fontFamily:MONO,fontSize:7,color:MUT,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>· {v.city}</span>
            </div>
          </div>);})}
      </div>
      <div style={{marginTop:"auto",paddingTop:10,borderTop:`1px solid ${LINE}`,display:"flex",gap:12}}>
        <V2Stat v={done.filter(Boolean).length+"/3"} l="ON SITE" size={13}/>
        <V2Stat v={done.filter(Boolean).length?"100%":"—"} l="GPS MATCH" size={13}/>
      </div>
    </div>
  </div>
);
const V2BriefPair=({compact})=>{
  const [i,setI]=React.useState(0),[pressed,setPressed]=React.useState(false),[done,setDone]=React.useState([false,false,false]);
  React.useEffect(()=>{
    if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){setDone([true,true,true]);return;}
    let t=[];
    const run=(n)=>{
      const k=n%3;
      setI(k);
      if(k===0)setDone([false,false,false]);
      setPressed(false);
      t.push(setTimeout(()=>setPressed(true),1500));
      t.push(setTimeout(()=>setDone(d=>{const c=[...d];c[k]=true;return c;}),2200));
      t.push(setTimeout(()=>run(n+1),3900));
    };
    run(0);
    return()=>t.forEach(clearTimeout);
  },[]);
  return (
    <div className={"v2-pair"+(compact?" v2-pair-compact":"")}>
      <div className="v2-pairitem">
        <V2Phone><V2BriefScreen v={V2_VENUES[i]} pressed={pressed} compact={compact}/></V2Phone>
        <span className="v2-pairlabel">Ambassador · field app</span>
      </div>
      <span className="v2-pairflow" aria-hidden="true"><span className={pressed?"on":""}/></span>
      <div className="v2-pairitem">
        <V2Phone><V2CommandPhoneScreen done={done} compact={compact}/></V2Phone>
        <span className="v2-pairlabel">You · Spark command</span>
      </div>
    </div>
  );
};

Object.assign(window,{V2,V2W,V2Eyebrow,V2Dot,useV2Reveal,useV2Count,useV2InView,useV2Media,useV2StatePaths,V2HoverMap,V2AccountsMap,V2_CITIES,MAP_W,MAP_H,mapX,mapY,V2Laptop,V2Phone,V2Chrome,V2Stat,V2_SHIFTS,V2ShiftScreen,V2PhoneStack,V2Feed,V2Gallery,V2CoverageScreen,V2CommandCenter,V2BriefPair,V2RequestMock,V2StaffMock,V2VerifyMock,V2RecapMock});
