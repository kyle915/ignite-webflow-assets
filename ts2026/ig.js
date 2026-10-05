/* Ignite rebuild 2026: global components. Light-DOM custom elements so all text stays in the page DOM. */
(function(){
const REPLY = "24 hours";
const PHONE = "775.406.0435", EMAIL = "staffing@igniteproductions.co";
const HUBS = [
  {n:"Event Staffing",h:"event-staffing.html",d:"257,000+ vetted ambassadors, 50 states"},
  {n:"Retail + Sampling",h:"retail-sampling.html",d:"In-store demos, sampling, merchandising"},
  {n:"Experiential + Street Teams",h:"experiential-street-teams.html",d:"Festivals, pop-ups, tours, campus"},
  {n:"Sports + Sponsorships",h:"sports-sponsorships.html",d:"Game day, sponsorship activation"},
  {n:"CPG Growth (Fractional)",h:"cpg-growth.html",d:"Fractional sales, brokers, distribution"},
  {n:"Production + Content",h:"production-content.html",d:"Builds, kitting, capture, recaps"}
];
window.IG = {REPLY, PHONE, EMAIL, HUBS};

/* Quote card = the same inquiry block used on /contact. The live /contact form is a Webflow form component:
   in Webflow, drop that same form symbol into [data-ig-contact-form] so every page submits to one form. */
class IgQuote extends HTMLElement{connectedCallback(){if(this.querySelector("[data-ig-contact-form]"))return;
  const t=this.getAttribute("heading")||"Get a staffing quote";
  const ctx=this.getAttribute("where")||"";
  this.innerHTML=`<div class="card qform qc">
   <div class="qc-top"><span class="qc-k">PROJECT INQUIRY</span><span class="qc-live"><i></i>LIVE · AVG REPLY 4H</span></div>
   <h2>${t}</h2>
   <p class="sub">Just the basics: what you're launching, where and roughly when. No long forms. No qualification gauntlet.</p>
   <div data-ig-contact-form><close-form id="form_032kcCZoXHWiAFKDVaZV1z"></close-form></div>
   <dl class="qc-rows"><div><dt>Response</dt><dd>&lt; 24 hours</dd></div><div><dt>Coverage</dt><dd>All 50 states</dd></div><div><dt>Owned</dt><dd>Veteran-owned · VOSB</dd></div></dl>
   <div class="qc-alt"><a href="mailto:staffing@igniteproductions.co">staffing@igniteproductions.co ↗</a><a href="tel:+17754060435">775.406.0435 ↗</a></div>
  </div>`;
}}
/* The quote card embeds the same Close form as /contact (form_032kcCZoXHWiAFKDVaZV1z), so every page submits to one form. */
function loadCloseForms(){if(document.querySelector('script[src*="webforms.closeiocdn.com"]'))return;const sc=document.createElement("script");sc.type="module";sc.crossOrigin="anonymous";sc.src="https://webforms.closeiocdn.com/webforms.js";document.head.appendChild(sc);}
customElements.define("ig-quote",IgQuote);
loadCloseForms();

const css=document.createElement("style");css.textContent=`
.qc .qc-top{display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;margin-bottom:18px;border-bottom:1px solid var(--line)}
.qc .qc-k{font-family:var(--f-mono);font-size:10.5px;letter-spacing:.18em;color:var(--fg-2)}
.qc .qc-live{display:inline-flex;align-items:center;gap:7px;font-family:var(--f-mono);font-size:10px;letter-spacing:.14em;color:var(--spark)}
.qc .qc-live i{width:7px;height:7px;border-radius:7px;background:var(--spark);box-shadow:0 0 8px var(--spark)}
.qc .qc-go{width:100%;justify-content:center;margin-top:18px}
.qc .qc-rows{margin:20px 0 0;padding:0}.qc .qc-rows div{display:flex;justify-content:space-between;align-items:baseline;padding:13px 0;border-top:1px solid var(--line)}
.qc .qc-rows dt{font-family:var(--f-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--fg-3)}.qc .qc-rows dd{margin:0;font-family:var(--f-head);font-weight:600;font-size:16px;color:var(--fg-1)}
.qc .qc-alt{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:16px;padding-top:14px;border-top:1px solid var(--line)}.qc .qc-alt a{font-family:var(--f-mono);font-size:11px;letter-spacing:.06em;color:var(--fg-2)}.qc .qc-alt a:hover{color:var(--spark)}

ig-header{display:block;position:sticky;top:0;z-index:50}
.ig-hd{background:rgba(10,11,13,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.ig-hd-in{max-width:var(--wrap);margin:0 auto;padding:0 32px;height:72px;display:flex;align-items:center;gap:28px}
.ig-logo img{height:26px;width:auto}
.ig-nav{display:flex;gap:4px;margin-left:12px}
.ig-nl{display:inline-flex;align-items:center;height:38px;padding:0 12px;border-radius:8px;background:none;border:0;cursor:pointer;font:500 15px var(--f-body);color:var(--fg-2)}
.ig-nl:hover,.ig-nl.on{color:var(--fg-1)}.ig-nl.on{box-shadow:inset 0 -2px 0 var(--spark);border-radius:0}
.ig-mm{position:relative}.ig-mm>button::after{content:"";width:6px;height:6px;margin-left:8px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg) translateY(-2px)}
.ig-mm-panel{position:absolute;top:100%;left:-12px;padding-top:12px;display:none;grid-template-columns:1fr 1fr;gap:6px;width:620px}
.ig-mm-panel::before{content:"";position:absolute;inset:12px 0 0;background:var(--ink-100);border:1px solid var(--line-2);border-radius:14px;box-shadow:0 30px 60px rgba(0,0,0,.5)}
.ig-mm.open .ig-mm-panel{display:grid;padding:18px 12px 12px}
.ig-mm-panel a{position:relative;display:grid;grid-template-columns:28px 1fr;column-gap:10px;padding:12px 14px;border-radius:10px;color:var(--fg-1)}
.ig-mm-panel a:hover{background:var(--ink-200)}
.ig-mm-panel .n{grid-row:span 2;font:500 11px var(--f-mono);color:var(--orange);padding-top:3px}
.ig-mm-panel b{font:600 15px var(--f-head)}.ig-mm-panel a span:last-child{font-size:13px;color:var(--fg-3)}
.ig-hd-r{margin-left:auto;display:flex;align-items:center;gap:18px}
.ig-ph{font:500 13px var(--f-mono);letter-spacing:.06em;color:var(--fg-2)}.ig-ph:hover{color:var(--fg-1)}
.ig-hd-cta{height:42px;padding:0 18px;font-size:14.5px}
.ig-burger{display:none;width:42px;height:42px;border:1px solid var(--line-2);border-radius:10px;background:none;cursor:pointer;flex-direction:column;justify-content:center;gap:6px;padding:0 11px}
.ig-burger span{height:1.5px;background:var(--fg-1);transition:transform .2s}
.ig-burger.x span:first-child{transform:translateY(3.75px) rotate(45deg)}.ig-burger.x span:last-child{transform:translateY(-3.75px) rotate(-45deg)}
.ig-mob{padding:18px 20px 26px;border-top:1px solid var(--line);background:var(--ink-000);display:flex;flex-direction:column}
.ig-mob a:not(.btn){padding:10px 0;color:var(--fg-1);font:600 18px var(--f-head);border-bottom:1px solid var(--line)}
.ig-mob .eyebrow{margin-bottom:6px}
.ig-mob[hidden]{display:none}
@media (min-width:1081px){.ig-mob{display:none!important}}
@media (max-width:1080px){.ig-nav,.ig-ph{display:none}.ig-burger{display:flex}}
@media (max-width:560px){.ig-hd-cta{display:none}.ig-hd-in{padding:0 20px}}
.ig-ft{border-top:1px solid var(--line);background:var(--ink-000)}
.ig-ft-grid{display:grid;grid-template-columns:1.5fr repeat(4,1fr);gap:40px;padding-top:64px;padding-bottom:48px}
.ig-ft-brand img{height:28px;width:auto}.ig-ft-brand p{margin-top:16px;font-size:14px;color:var(--fg-2);max-width:300px}
.ig-ft-c{font:500 13px var(--f-mono);letter-spacing:.04em}.ig-ft-c a{color:var(--fg-1)}
.ig-ft ul{list-style:none;margin:14px 0 0;padding:0;display:grid;gap:9px}.ig-ft ul a{color:var(--fg-2);font-size:14.5px}.ig-ft ul a:hover{color:var(--fg-1)}
.ig-ft-paper{background:var(--paper);color:var(--paper-ink)}.ig-ft-paper .wrap{display:flex;align-items:center;gap:20px;padding-top:20px;padding-bottom:20px}.ig-ft-paper img{width:56px;height:56px}.ig-ft-paper p{font-size:14px;color:#3A3D44}
.ig-ft-bot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-top:22px;padding-bottom:26px;font:500 11px var(--f-mono);letter-spacing:.16em;color:var(--fg-3)}.ig-ft-bot a{color:var(--fg-3)}.ig-ft-bot a:hover{color:var(--fg-1)}
@media (max-width:900px){.ig-ft-grid{grid-template-columns:1fr 1fr}.ig-ft-brand{grid-column:1/-1}}
.qform-ok{display:none;padding-top:18px}.qform.sent form{display:none}.qform.sent .qform-ok{display:block}.qform-ok p{margin-top:12px;color:var(--fg-2)}
`;document.head.appendChild(css);

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
const scan=()=>document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el));
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",scan):scan();

/* /trade-show-staffing/chicago RELATED "CITY · Chicago event staffing" card:
   Webflow HTML still points at noindexed /cities/chicago. Repoint to the money page. */
function retargetChicagoRelated(){
  var p=(location.pathname||"").replace(/\/+$/,"")||"/";
  if(p!=="/trade-show-staffing/chicago") return;
  document.querySelectorAll(".related a.card.rel[href*='/cities/chicago']").forEach(function(a){
    a.setAttribute("href","/services/event-staffing");
  });
}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",retargetChicagoRelated):retargetChicagoRelated();
})();
