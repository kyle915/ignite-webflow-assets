/* Spark dashboard demo — state, routing, interaction */
const state = {
  view: 'dashboard', dashTab: 'Overview', range: '30d', mapMode: 'Map',
  upFilter: 'All',
  recapType: 'View all', recapView: 'Cards', recapRange: '30D', recapState: 'All states', recapSort: 'Newest first', recapQ: '',
  trkStatus: 'All', trkMarket: 'All markets', trkSort: 'Date · newest', trkGroup: 'Flat', trkQ: '',
  subFilter: 'All', colsOpen: false, calView: 'Week', acctFilter: 'all', apprTab: 'Requests', handled: [], fieldWin: 'This week'
};

function sidebar() {
  return `<div class="sa-brand"><img src="../assets/spark-logo-full-white.webp" alt="Spark by Ignite"></div>
<div class="sa-tenantwrap">
  <div class="sa-lbl">Tenant</div>
  <button class="sa-tenant" data-act="toast" data-v="Tenant switcher — you have access to 1 brand"><span class="sa-tmark">YB</span>YourBrand${ICONS.chev}</button>
</div>
<nav class="sa-nav">${NAV.map(g => `<div class="sa-group"><span class="sa-lbl">${g.g}</span><span style="color:var(--dim)">${ICONS.chev}</span></div>
${g.items.map(([id, label, ico, badge]) => `<button class="sa-item ${state.view === id ? 'on' : ''}" data-act="nav" data-v="${id}">${ICONS[ico]}<span>${label}</span>${badge ? `<span class="sa-badge">${badge}</span>` : ''}</button>`).join('')}`).join('')}</nav>`;
}

function topbar() {
  return `<button class="sa-sideburger" data-act="side">${ICONS.burger}</button>
<div class="sa-crumb">spark.app&nbsp; /&nbsp; <b>${(CRUMB[state.view] || '').toUpperCase()}</b></div>
<div class="sa-reqlink">External request link <code>botx-yourbrand-2026</code>
  <button class="sa-icobtn" data-act="toast" data-v="Request link copied">${ICONS.copy}</button>
  <button class="sa-icobtn" data-act="toast" data-v="Opening the public request form">${ICONS.ext}</button>
</div>`;
}

function render(keepFocus) {
  document.getElementById('side').innerHTML = sidebar();
  document.getElementById('top').innerHTML = topbar();
  document.getElementById('page').innerHTML = (VIEWS[state.view] || VIEWS.dashboard)(state);
  if (typeof saRenderMaps === 'function') saRenderMaps();
  if (keepFocus) {
    const el = document.querySelector(`[data-act="${keepFocus}"]`);
    if (el) { el.focus(); const v = el.value; el.value = ''; el.value = v; }
  }
}

let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('on'), 2200);
}

const SEG_KEYS = { range: v => state.range = v.toLowerCase(), dashTab: v => state.dashTab = v, upFilter: v => state.upFilter = v, recapType: v => state.recapType = v, recapView: v => state.recapView = v, recapRange: v => state.recapRange = v, trkStatus: v => state.trkStatus = v, trkGroup: v => state.trkGroup = v, subFilter: v => state.subFilter = v, calView: v => state.calView = v, acctFilter: v => state.acctFilter = v, apprTab: v => state.apprTab = v, fieldWin: v => state.fieldWin = v, mapMode: v => state.mapMode = v };

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-act]');
  if (!btn || btn.tagName === 'INPUT' || btn.tagName === 'SELECT') return;
  const act = btn.dataset.act, v = btn.dataset.v;
  if (act === 'nav') {
    state.view = v; state.dashTab = 'Overview';
    document.getElementById('side').classList.remove('open');
    window.scrollTo(0, 0);
    const mainEl = document.querySelector('.sa-main'); if (mainEl) mainEl.scrollTop = 0;
    render();
    if (!FRAMED) { try { localStorage.setItem('sparkAppDemoView', v); } catch (err) {} }
    return;
  }
  if (act === 'side') { document.getElementById('side').classList.toggle('open'); return; }
  if (act === 'toast') { toast(v); return; }
  if (act === 'toggleCols') { state.colsOpen = !state.colsOpen; render(); return; }
  if (act === 'clearRecaps') { Object.assign(state, { recapType: 'View all', recapState: 'All states', recapSort: 'Newest first', recapQ: '' }); render(); return; }
  if (act === 'approve' || act === 'decline') {
    state.handled.push(v);
    toast(act === 'approve' ? `${v} approved — moved into scheduling` : `${v} declined — note sent to the RMM`);
    render(); return;
  }
  if (SEG_KEYS[act]) { SEG_KEYS[act](v); render(); }
});

document.addEventListener('input', e => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  if (act === 'recapQ') { state.recapQ = el.value; render('recapQ'); }
  else if (act === 'trkQ') { state.trkQ = el.value; render('trkQ'); }
});

document.addEventListener('change', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.tagName !== 'SELECT') return;
  const act = el.dataset.act;
  if (act === 'recapState') { state.recapState = el.value; render(); }
  else if (act === 'recapSort') { state.recapSort = el.value; render(); }
  else if (act === 'trkMarket') { state.trkMarket = el.value; render(); }
  else if (act === 'trkSort') { state.trkSort = el.value; render(); }
});

const P = new URLSearchParams(location.search);
const FRAMED = P.has('frame');
if (FRAMED) {
  document.documentElement.classList.add('sa-framed');
  if (P.has('scroll')) document.documentElement.classList.add('sa-scrollframe');
  const v = P.get('view'); if (v && VIEWS[v]) state.view = v;
  const t = P.get('tab'); if (t) state.dashTab = t;
} else {
  try {
    const saved = localStorage.getItem('sparkAppDemoView');
    if (saved && VIEWS[saved]) state.view = saved;
  } catch (err) {}
}
render();
