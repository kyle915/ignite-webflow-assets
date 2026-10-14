const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const ROOT=path.join(__dirname,'..');
function env(before=false) {
  const css=[];
  const c={React,Date,Math,URL,URLSearchParams,console,setTimeout,clearTimeout,setInterval,clearInterval,
    location:new URL('https://www.igniteproductions.co/services/festival-brand-activations'),navigator:{},
    document:{baseURI:'https://www.igniteproductions.co/services/festival-brand-activations',getElementById(){return null;},createElement(){return {};},head:{appendChild(el){css.push(el.textContent);}}}};
  c.window=c;c.matchMedia=()=>({matches:true});c.__resources={};
  c.SiteNav=()=>React.createElement('nav',{'data-ssr-stub':'navigation'});
  c.SiteFooter=()=>React.createElement('footer',{'data-ssr-stub':'footer'});
  c.StickyBreadcrumb=({label})=>React.createElement('div',null,label);
  vm.createContext(c);
  function read(name){return before?cp.execFileSync('git',['show','HEAD:compiled/'+name+'.js'],{cwd:ROOT,encoding:'utf8'}):fs.readFileSync(path.join(ROOT,'compiled/'+name+'.js'),'utf8');}
  for(const name of ['Shared','Primitives','ServicesData','ServicesDataExtra','RelatedCases','ServiceDetail','PageServicesMobileTours','PageServicesProductSampling']) {
    let source=read(name);
    if(name==='PageServicesProductSampling') source=source.replace(/Object\.assign\(window,\s*\{\s*PageServicesProductSampling:/,'window.__samplingFAQ=FAQS; Object.assign(window, { PageServicesProductSampling:');
    if(name==='PageServicesMobileTours') source=source.replace(/Object\.assign\(window,\s*\{\s*PageServicesMobileTours:/,'window.__mobileFAQ=FAQS; Object.assign(window, { PageServicesMobileTours:');
    vm.runInContext(source,c,{filename:name+'.js'});
  }
  return {c,css,read,render:(name,props)=>renderToStaticMarkup(React.createElement(c[name],props))};
}
function text(s){return s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();}
const old=env(true),now=env();
const mobile=now.render('PageServicesMobileTours'),sampling=now.render('PageServicesProductSampling'),festival=now.render('ServiceDetailPage',{slug:'festival-brand-activations'});

test('Mobile exact approved headline and opening; quote, fleet, route and relevant adjacent case survive',()=>{
 const h1=text(mobile.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]);assert.equal(h1,'Mobile tour production. One team at every stop.');
 assert.ok(text(mobile).includes('Take your brand from city to city with a mobile marketing tour built around your audience, markets, and goals. Ignite handles vehicle sourcing and builds, routing, permits, drivers, brand ambassadors, and reporting, so one team is accountable at every stop.'));
 const hero=mobile.split('</section>')[0];assert.match(hero,/href="https:\/\/www.igniteproductions.co\/contact"/);assert.match(hero,/href="\/portfolio\/krispy-krunchy-chicken"/);assert.match(hero,/href="#fleet"/);
 assert.ok(hero.indexOf('Plan a tour')<hero.indexOf('See the Krispy Krunchy Chicken tour'));assert.match(mobile,/Real routes/);assert.match(hero,/data-ig-google-choice=/);
});
test('Festival proof appears once immediately after hero and reports only verified case roles',()=>{
 const heading='12 festivals. Two sponsor brands.';assert.equal(text(festival).split(heading).length-1,1);
 assert.match(festival,/<h2[^>]*>12 festivals\. Two sponsor brands\.<\/h2>/);
 const proof=now.c.SERVICES_DATA['festival-brand-activations'].featured;
 assert.equal(proof.placement,'after-hero');assert.equal(proof.href,'/portfolio/breakaway');assert.match(proof.description,/Jimmy John's/);assert.match(proof.description,/Club Sandwich silent disco/);assert.match(proof.description,/hiyo/);assert.match(proof.description,/exit sampling/);
 assert.doesNotMatch(proof.description,/\b(?:design|build|ROI|conversion|fabricat)/i);
 assert.ok(text(festival).indexOf(heading)<text(festival).indexOf("Festivals don't sell brands"));
});
test('Festival buyer answers replace same-weekend claim without invented timeline',()=>{
 const faqs=now.c.SERVICES_DATA['festival-brand-activations'].faqs;
 for(const topic of ['festival organizer','start planning','quote a festival','multi-festival circuits'])assert.ok(faqs.some(q=>q[0].includes(topic)),topic);
 const series=faqs.find(q=>q[0].includes('multi-festival circuits'))[1];assert.match(series,/separate weekends/);assert.doesNotMatch(series,/same weekend/);
 assert.ok(faqs.find(q=>q[0].includes('start planning'))[1].includes('depends on organizer approvals'));
});
test('Sampling elevates Brew Dr. scope proof and retains its real image/link without undated metrics',()=>{
 const plain=text(sampling);assert.ok(plain.indexOf('From retail coordination to the recap.')<plain.indexOf('What is a product sampling agency?'));
 for(const phrase of ['retailer and distributor coordination','demo scheduling','ambassador staffing','in-store execution and reporting'])assert.ok(plain.includes(phrase),phrase);
 assert.match(sampling,/href="\/portfolio\/brew-dr"/);assert.match(sampling,/assets\/brewdr-king-soopers-demo.jpg/);
 assert.doesNotMatch(plain,/\b150\b|2\.4M|2,418,640|20%\+|28\s*(?:to|-|–)\s*34|samples\s*\/\s*year/i);
 assert.ok(plain.includes('ILLUSTRATIVE SPARK DEMO'));assert.ok(plain.includes('Example samples logged'));assert.ok(plain.includes('734'));assert.match(sampling.split('</section>')[0],/data-ig-google-choice=/);
});
test('Sampling FAQs distinguish retail scheduling, rollout, chilled handling and purchase evidence',()=>{
 const faqs=now.c.__samplingFAQ;
 for(const topic of ['retailer scheduling','region by region','chilled product','samples from purchases'])assert.ok(faqs.some(q=>q[0].includes(topic)),topic);
 const measurement=faqs.find(q=>q[0].includes('samples from purchases'))[1];assert.match(measurement,/separate evidence/);assert.match(measurement,/agreed period/);assert.match(measurement,/do not infer purchases from sample counts alone/);
 const plain=text(sampling);assert.ok(plain.includes('Measurement stages, not conversion results.'));assert.doesNotMatch(plain,/\b(?:58|39|21)%/);
});
test('Only the selected sampling Brew Dr. metric is suppressed; shared case cards keep their default output',()=>{
 for(const [ctx,map] of Object.entries(now.c.RC_MAP))for(const slug of Object.keys(map)){
  assert.equal(now.render('RelatedCases',{ctx,slug}),old.render('RelatedCases',{ctx,slug}),ctx+'/'+slug);
 }
 const a=now.render('RelatedCases',{ctx:'service',slug:'product-sampling',omitMetricsFor:['brew-dr']});assert.doesNotMatch(text(a),/150/);assert.match(a,/\/portfolio\/brew-dr/);assert.ok(text(a).includes('32'));assert.ok(text(a).includes('PNW'));
});
test('All unrelated service data and complete shared-renderer outputs are unchanged',()=>{
 for(const slug of Object.keys(old.c.SERVICES_DATA)) {
  if(slug==='festival-brand-activations')continue;
  assert.equal(JSON.stringify(now.c.SERVICES_DATA[slug]),JSON.stringify(old.c.SERVICES_DATA[slug]),slug+' data');
  assert.equal(now.render('ServiceDetailPage',{slug}),old.render('ServiceDetailPage',{slug}),slug+' render');
 }
});
test('New references use real existing assets and real portfolio routes, without .html runtime links',()=>{
 for(const file of ['brewdr-king-soopers-demo.jpg','breakaway-jimmy-johns-silent-disco.jpg'])assert.ok(fs.existsSync(path.join(ROOT,'assets',file)),file);
 for(const html of [mobile,sampling,festival]){
  const hrefs=[...html.matchAll(/href="([^"]*)"/g)].map(m=>m[1]);assert.ok(hrefs.length);assert.ok(hrefs.every(h=>!h.includes('.html')),hrefs.filter(h=>h.includes('.html')).join(', '));
  assert.ok(hrefs.some(h=>h==='https://www.igniteproductions.co/contact'));
 }
});
test('Measurement/privacy, routing, prior staffing and Close fixes remain byte-identical to HEAD',()=>{
 for(const file of ['components/ig-google-measurement.js','components/ig-routes.js','components/LegalData.jsx','compiled/LegalData.js','compiled/PageServicesEventStaffing.js','compiled/HomeBottom.js','industriesRunner.js','pagesRunner.js','seoHead.js','seoEnhance.js']){
  assert.equal(fs.readFileSync(path.join(ROOT,file),'utf8'),cp.execFileSync('git',['show','HEAD:'+file],{cwd:ROOT,encoding:'utf8'}),file);
 }
});

if(process.env.BUYER_PAGE_EVIDENCE_DIR){
 const out=path.resolve(process.env.BUYER_PAGE_EVIDENCE_DIR);fs.mkdirSync(out,{recursive:true});
 for(const [name,html] of Object.entries({'mobile-tours':mobile,'product-sampling':sampling,'festival-brand-activations':festival})){
  const links=['tokens.css','global.css','responsive.css'].map(f=>'<link rel="stylesheet" href="https://kyle915.github.io/ignite-webflow-assets/styles/'+f+'">').join('');
  fs.writeFileSync(path.join(out,name+'-ssr.html'),'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+links+'<style>'+now.css.join('\n')+'\n.mt-reveal,.ps-reveal,.sd-reveal{opacity:1!important;transform:none!important}</style></head><body>'+html+'</body></html>');
 }
 fs.writeFileSync(path.join(out,'sampling-faqs.json'),JSON.stringify(now.c.__samplingFAQ,null,2));
 fs.writeFileSync(path.join(out,'festival-faqs.json'),JSON.stringify(now.c.SERVICES_DATA['festival-brand-activations'].faqs,null,2));
 fs.writeFileSync(path.join(out,'service-slugs.json'),JSON.stringify(Object.keys(now.c.SERVICES_DATA),null,2));
}
