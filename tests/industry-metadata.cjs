const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../industriesRunner.js'), 'utf8')
  .replace('  function start() {', '  window.applyDetailSeoForTest = applyDetailSeo;\n  function start() {');
let checks = 0;
function run(slug, title, description) {
  const nodes = [];
  function node(tag, attrs = {}) {
    return {tag, ...attrs, getAttribute(k) {return this[k] ?? null;}, setAttribute(k, v) {this[k] = v;}};
  }
  if (description !== undefined) nodes.push(node('meta', {name:'description', content:description}));
  const robots = node('meta', {name:'robots', content:'noindex,follow'}); nodes.push(robots);
  const document = {title, readyState:'loading', addEventListener(){}, head:{appendChild(n){nodes.push(n);}},
    createElement:node, querySelector(selector) {
      if(selector === 'meta[name=description]') return nodes.find(n=>n.name==='description') || null;
      if(selector === 'link[rel=canonical]') return nodes.find(n=>n.rel==='canonical') || null;
      const m = selector.match(/^meta\[property="([^"]+)"\]$/);
      return m ? nodes.find(n=>n.property===m[1]) || null : null;
    }};
  const window = {};
  vm.runInNewContext(source, {document, window});
  const ind = {name:slug === 'tech-saas' ? 'Tech & SaaS' : slug === 'cpg-beverage' ? 'CPG Beverage' : 'Other Industry', hero:{lede:'Existing hero description'}, compliance:true, faqs:[]};
  window.applyDetailSeoForTest(ind, slug);
  assert.equal(robots.content, 'noindex,follow', 'indexability must stay unchanged');checks++;
  assert.equal(nodes.filter(n=>n.name==='description').length, description === undefined && !['tech-saas','cpg-beverage'].includes(slug) ? 0 : 1);checks++;
  assert.equal(nodes.find(n=>n.rel==='canonical').href, 'https://igniteproductions.co/industries/'+slug);checks++;
  assert.equal(nodes.find(n=>n.property==='og:description').content, 'Existing hero description');checks++;
  return {title:document.title,description:nodes.find(n=>n.name==='description')?.content, ind};
}
const native = {
  'tech-saas': ['Tech & SaaS Event Staffing | Ignite Productions', "Conference and trade show staffing for tech and SaaS brands. Explore Ignite's OpenAI Dev Day and Claude Code workshop programs, lead capture and event support."],
  'cpg-beverage': ['Beverage Sampling & Brand Activation | Ignite Productions', 'In-store demos and beverage activations nationwide. Explore Brew Dr. and BE GOAT programs, brand ambassadors, retail coordination and Spark reporting.']
};
for(const [slug, [title, desc]] of Object.entries(native)) {
  const a=run(slug,title,desc); assert.equal(a.title,title); assert.equal(a.description,desc);checks+=2;
  for(const defaultTitle of ['', '   ', 'Ignite Productions', 'Industry', 'Industries | Ignite Productions']) {
    const b=run(slug,defaultTitle,desc);assert.equal(b.title,b.ind.name+' — Activation, Staffing, Sampling | Ignite Productions');assert.equal(b.description,desc);checks+=2;
  }
  for(const defaultDesc of [undefined,'','   ','Ignite Productions','Industry']) {
    const b=run(slug,title,defaultDesc);assert.equal(b.title,title);assert.match(b.description,/^Ignite Productions supports /);checks+=2;
  }
}
for(const slug of ['alcohol-spirits','cpg-food-snack','tech-saas-other']) {
  const a=run(slug,'Custom native title','Custom native description');
  assert.equal(a.title,a.ind.name+' — Activation, Staffing, Sampling | Ignite Productions');
  assert.match(a.description,/^Ignite Productions supports other industry/);checks+=2;
  const b=run(slug,'Ignite Productions',undefined);assert.equal(b.description,undefined);checks++;
}
console.log(`${checks} industry metadata regression checks passed`);
