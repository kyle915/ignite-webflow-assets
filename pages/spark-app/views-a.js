/* Spark dashboard demo — views: Dashboard, Today, Upcoming, My Recaps, Master Tracker, Recent Submissions */
const fmt = n => typeof n === 'number' ? n.toLocaleString('en-US') : n;
const kpi = (k, v, f, cls) => `<div class="sa-kpi ${cls || ''}"><div class="k">${k}</div><div class="v">${v}</div>${f ? `<div class="f">${f}</div>` : ''}</div>`;
const eyebrow = t => `<div class="sa-eyebrow">${t}</div>`;
const head = (eb, h1, sub, right) => `<div class="sa-head"><div>${eyebrow(eb)}<h1 class="sa-h1">${h1}</h1>${sub ? `<p class="sa-sub">${sub}</p>` : ''}</div>${right || ''}</div>`;
const seg = (act, opts, cur) => `<div class="sa-seg">${opts.map(o => `<button data-act="${act}" data-v="${o}" class="${o === cur ? 'on' : ''}">${o}</button>`).join('')}</div>`;
const MAP_LEGEND_NOTE = `<div class="sa-mapnote">
  <div class="sa-eyebrow" style="color:var(--lime)">On the ground</div>
  <p>4 BAs clocked in across 3 markets. Pings refresh every 90 seconds from the mobile app.</p>
</div>`;

const VIEWS = {};

VIEWS.dashboard = s => {
  const r = RANGES[s.range], mix = SKU_MIX[s.range], maxMix = Math.max(...mix);
  const tabs = ['Overview', 'Approvals', 'Account map'];
  let panel = '';
  if (s.dashTab === 'Approvals') panel = VIEWS.approvals(s, true);
  else if (s.dashTab === 'Account map') panel = VIEWS.accountmap(s, true);
  else {
    const maxDay = Math.max(...FORWARD.map(d => d.n));
    panel = `
<div class="sa-card sa-pad sa-mt">
  <div class="sa-eyebrow">7-day forward · <em>31 events</em></div>
  <div class="sa-strip">${FORWARD.map(d => `<div class="sa-day ${d.today ? 'today' : ''}"><div class="sa-daybar"><i style="width:${Math.round(d.n / maxDay * 100)}%"></i></div><div class="sa-daynum">${d.n}</div><div class="sa-daylbl">${d.d.toUpperCase()}</div></div>`).join('')}</div>
</div>
<div class="sa-grid g2 sa-mt-s">
  <div class="sa-card sa-pad">
    <div class="sa-eyebrow">Top retailers · next 7 days</div>
    <div class="sa-rank">${TOP_RETAILERS_7D.map(([n, v]) => `<div class="sa-rankrow"><div class="n">${n}</div><div class="sa-track"><i style="width:${v / 9 * 100}%"></i></div><div class="val">${v}</div></div>`).join('')}</div>
  </div>
  <div class="sa-card sa-pad">
    <div class="sa-eyebrow">Quick links</div>
    <div class="sa-qlgrid">
      <button class="sa-ql" data-act="nav" data-v="recaps">${ICONS.doc} Recaps</button>
      <button class="sa-ql" data-act="nav" data-v="tracker">${ICONS.check2} Master tracker</button>
      <button class="sa-ql" data-act="nav" data-v="today">${ICONS.live} On the ground</button>
      <button class="sa-ql" data-act="nav" data-v="reports">${ICONS.chart} Reports</button>
    </div>
    <div class="sa-eyebrow" style="margin-top:26px">This week in field</div>
    <div class="sa-grid g2 sa-mt-s">${kpi('Scheduled', '31', 'Next 7 days')}${kpi('Approved recaps', '24', 'Last 7 days', 'lime')}</div>
  </div>
</div>

<div class="sa-head sa-mt-l">
  <div>
    ${eyebrow('Program performance')}
    <p class="sa-sub" style="margin-top:10px">Range scopes timeline, activation, and geo. Program KPIs stay calendar-year.</p>
    <div class="sa-eyebrow" style="margin-top:16px">${r.label} · ${r.from} → ${r.to}</div>
  </div>
  <div class="sa-btnrow">
    ${seg('range', ['7d', '30d', '90d', 'YTD'], s.range === 'ytd' ? 'YTD' : s.range)}
    <button class="sa-btn pri" data-act="toast" data-v="Summarizing your program with AI…">${ICONS.spark} Ask AI</button>
    <button class="sa-btn" data-act="toast" data-v="Summary copied to clipboard">Copy summary</button>
    <button class="sa-btn" data-act="nav" data-v="reports" style="border-color:var(--lime);color:var(--lime)">Open reports</button>
  </div>
</div>

<div class="sa-card sa-pad sa-mt">
  <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:20px;flex-wrap:wrap">
    <div>${eyebrow('Pace to goal · 2026')}<h2 class="sa-h1" style="font-size:30px;margin-top:10px">Consumers reached</h2></div>
    <div class="sa-btnrow"><button class="sa-btn sm mono" data-act="nav" data-v="reports">Reports →</button><button class="sa-btn sm mono" data-act="toast" data-v="Target editor opens in program settings" style="border-color:var(--lime);color:var(--lime)">Edit target</button></div>
  </div>
  <div class="sa-grid g4 sa-mt">
    ${kpi('Current / target', '31,204', 'of 45,000 · 69.3%')}
    ${kpi('Year elapsed', '69%', 'Calendar')}
    ${kpi('Weekly need', '842', 'On pace · 1,120 last week', 'lime')}
    ${kpi('Last 7 days', '1,120', 'Week of Sep 02 – Sep 09, 2026')}
  </div>
  <div class="sa-track" style="height:10px;margin-top:22px"><i style="width:69.3%"></i></div>
</div>

<div class="sa-card sa-pad sa-mt-s">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap">
    <div>
      ${eyebrow(`Executive · ${s.range.toUpperCase()}`)}
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px">
        <h2 class="sa-h1" style="font-size:30px">Program pulse</h2>
        <span class="sa-chip on"><i class="dot"></i>${r.demos} Retail demos</span>
        <span class="sa-chip c-orange on"><i class="dot"></i>${r.onprem} On-prem samplings</span>
        <span class="sa-chip c-blue on"><i class="dot"></i>${r.events} Events</span>
      </div>
    </div>
    <button class="sa-btn" data-act="toast" data-v="Pulse copied to clipboard">Copy pulse</button>
  </div>
  <p class="sa-sub" style="max-width:none">In ${s.range.toUpperCase()}: top SKU <b style="color:var(--fg)">YourBrand — ${SKUS[0]}</b> with ${fmt(r.top)} samples handed out (${fmt(r.samples)} structured total).</p>
  <div class="sa-grid g3 sa-mt">
    ${kpi('Retail + on-prem<br>conversion', r.conv, 'Units sold ÷ sampled in this range')}
    ${kpi('Month<br>trial quality', r.trial, 'First-time triers ÷ consumers reached')}
    ${kpi('This week in field<br>scheduled → approved', `${r.sched} · ${r.appr}`, 'Next 7d scheduled · last 7d approved recaps', 'lime')}
  </div>
  <div class="sa-eyebrow" style="margin-top:34px">Top SKUs sampled · approved · structured</div>
  <div class="sa-rank">${SKUS.map((n, i) => `<div class="sa-rankrow"><div class="n">YourBrand — ${n}</div><div class="sa-track"><i style="width:${Math.round(mix[i] / maxMix * 100)}%"></i></div><div class="val">${fmt(mix[i])}</div></div>`).join('')}</div>
</div>`;
  }
  return `${head('Your program · last 7 days forward', 'Today', 'This week’s schedule and program performance.', `<button class="sa-btn pri" data-act="toast" data-v="Ask AI is drafting your weekly summary…">${ICONS.spark} Ask AI</button>`)}
<div class="sa-tabs">${tabs.map(t => `<button data-act="dashTab" data-v="${t}" class="${t === s.dashTab ? 'on' : ''}">${t}</button>`).join('')}</div>
${panel}`;
};

VIEWS.today = s => `
${head('Live · today', 'Today’s activations.', 'Every event happening right now, plus the assigned BAs and their GPS clock-in/out locations.')}
<div class="sa-grid g3 sa-mt">${kpi('Events', '6', 'Scheduled today', 'lime')}${kpi('Live BAs', '4', 'Clocked in now', 'lime')}${kpi('Mapped', '6', 'GPS pings received', 'lime')}</div>
<div class="sa-splitmap">
  <div class="sa-map">
    <div class="sa-mapsurface"></div>
    <div class="sa-mapvec" data-samap="today"></div>
    ${MAP_LEGEND_NOTE}
    <div class="sa-mapattr">Activation map · YourBrand program</div>
  </div>
  <div class="sa-card">
    <div class="sa-cardhd"><h3>Today</h3><span class="sa-eyebrow">6 events</span></div>
    ${TODAY_EVENTS.map(e => `<div class="sa-liverow"><div class="t">${e.t}</div><div style="flex:1 1 auto;min-width:0"><div class="n">${e.n}</div><div class="m">${e.m} · ${e.s}</div></div><div style="text-align:right;flex:0 0 auto"><div style="font-family:var(--mono);font-size:17px;font-weight:700;color:${e.v === '—' ? 'var(--dim)' : 'var(--lime)'}">${e.v}</div><div class="m" style="margin-top:4px">${e.l}</div></div></div>`).join('')}
  </div>
</div>
<div class="sa-legend"><span><i style="background:var(--lime)"></i>Retail</span><span><i style="background:var(--purple)"></i>On-premise</span><span><i style="background:var(--blue)"></i>Event</span><span><i style="background:var(--orange)"></i>Needs attention</span></div>`;

VIEWS.upcoming = s => {
  const groups = s.upFilter === 'All' ? UPCOMING : UPCOMING.map(g => ({ day: g.day, rows: g.rows.filter(r => s.upFilter === 'Pending' ? r.k === 'purple' : r.k !== 'purple') })).filter(g => g.rows.length);
  return `
${head('Next 7 days · approved + pending', 'Your upcoming activations.', 'Approved events and pending approvals in the next 7 days, grouped by day. Click a row to open the activation detail.', seg('upFilter', ['All', 'Approved', 'Pending'], s.upFilter))}
${groups.map(g => `<div class="sa-daygroup"><div class="sa-daygrouphd"><h3>${g.day}</h3><span class="sa-eyebrow">${g.rows.length} item${g.rows.length > 1 ? 's' : ''}</span></div>
${g.rows.map(r => `<button class="sa-evrow ${r.k}" data-act="toast" data-v="Opening activation detail…"><div class="body"><div class="title">${r.t}</div><div class="meta">${r.m}</div></div><div class="right"><div class="rl" style="color:${r.k === 'purple' ? 'var(--purple)' : r.k === 'blue' ? 'var(--blue)' : 'var(--lime)'}">${r.s}</div></div></button>`).join('')}</div>`).join('')}`;
};

VIEWS.recaps = s => {
  let list = RECAPS.filter(r => s.recapType === 'View all' || r.type === s.recapType);
  if (s.recapState !== 'All states') list = list.filter(r => r.st === s.recapState);
  if (s.recapQ) list = list.filter(r => (r.v + r.ba + r.id).toLowerCase().includes(s.recapQ.toLowerCase()));
  if (s.recapSort === 'Oldest first') list = list.slice().reverse();
  else if (s.recapSort === 'Most engagements') list = list.slice().sort((a, b) => b.eng - a.eng);
  const eng = list.reduce((a, r) => a + r.eng, 0), sold = list.reduce((a, r) => a + r.sold, 0);
  const states = ['All states', ...[...new Set(RECAPS.map(r => r.st))]];
  return `
<div class="sa-filterbar">
  <div style="flex:0 0 auto"><div class="sa-eyebrow">Recaps · approved · 30d</div><div style="font-family:var(--mono);font-size:30px;font-weight:700;color:var(--lime);margin-top:6px">${list.length}</div></div>
  <input class="sa-input" style="flex:1 1 240px" placeholder="Search venue, retailer, R-ID…" value="${s.recapQ}" data-act="recapQ">
  ${seg('recapType', ['View all', 'Retail', 'Event', 'Product Seeding'], s.recapType)}
  <div style="flex:1 1 100%;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
    ${seg('recapView', ['Cards', 'Table'], s.recapView)}
    <button class="sa-btn sm mono" data-act="toast" data-v="Jump-to-recap palette (⌘K)">Jump to a recap ⌘K</button>
    <button class="sa-btn sm mono" data-act="toast" data-v="Selection mode on">Select</button>
    ${seg('recapRange', ['30D', '90D', 'All dates'], s.recapRange)}
    <button class="sa-btn sm mono" data-act="toast" data-v="Showing all published recaps">All published</button>
    <button class="sa-btn sm mono" data-act="toast" data-v="Export started — CSV + photo bundle">Export / Import ▾</button>
  </div>
</div>
<div class="sa-grid g4 sa-mt-s">${kpi('In view', fmt(list.length), `of ${RECAPS.length} approved`)}${kpi('Eng', fmt(eng), 'Consumers engaged', 'lime')}${kpi('Sold', fmt(sold), 'Units purchased')}${kpi('Conv', eng ? (sold / eng * 100).toFixed(1) + '%' : '—', 'Retail + on-prem')}</div>
<div class="sa-filterbar sa-mt-s">
  <select class="sa-sel" data-act="noop"><option>All retailers</option>${RETAILERS.map(r => `<option>${r}</option>`).join('')}</select>
  <select class="sa-sel" data-act="recapState">${states.map(x => `<option ${x === s.recapState ? 'selected' : ''}>${x}</option>`).join('')}</select>
  <select class="sa-sel" data-act="noop"><option>All RMMs</option><option>Dana Whitfield</option><option>Owen Marsh</option><option>Lena Ortiz</option></select>
  <input class="sa-input" placeholder="Search BA name…" data-act="recapQ" value="">
  <input class="sa-input" type="date" value="2026-08-10" data-act="noop">
  <span class="sa-mlbl">→</span>
  <input class="sa-input" type="date" value="2026-09-09" data-act="noop">
  <select class="sa-sel" data-act="recapSort">${['Newest first', 'Oldest first', 'Most engagements'].map(x => `<option ${x === s.recapSort ? 'selected' : ''}>${x}</option>`).join('')}</select>
  <button class="sa-btn sm mono" data-act="clearRecaps">Clear all</button>
</div>
${list.length === 0 ? `<div class="sa-tblwrap"><div class="sa-empty"><h3>No recaps match.</h3>Loosen a filter or clear them all.</div></div>` : s.recapView === 'Table' ? `
<div class="sa-tblwrap"><div class="sa-scroll"><table class="sa-tbl">
<thead><tr><th>R-ID</th><th>Date</th><th>Venue</th><th>BA</th><th>Photos</th><th>Eng</th><th>Sold</th><th>Conv</th><th>Status</th></tr></thead>
<tbody>${list.map(r => `<tr><td style="font-family:var(--mono);color:var(--mut)">${r.id}</td><td>${r.d}</td><td class="name" style="max-width:340px">${r.v}</td><td>${r.ba}</td><td style="font-family:var(--mono)">${r.ph}</td><td style="font-family:var(--mono);color:var(--lime)">${r.eng}</td><td style="font-family:var(--mono)">${r.sold}</td><td style="font-family:var(--mono)">${r.conv}</td><td><span class="sa-pill p-lime"><i class="dot" style="width:5px;height:5px;border-radius:50%;background:currentColor"></i>Approved</span></td></tr>`).join('')}</tbody>
</table></div></div>` : `
<div class="sa-recaps">${list.map((r, i) => `<div class="sa-recap">
  <div class="sa-photo"><img src="${PHOTOS[RECAPS.indexOf(r) % PHOTOS.length]}" alt="" decoding="async"><span class="sa-photoveil"></span><span class="rid">${r.id}</span><span class="st"><span class="sa-pill p-lime"><i class="dot" style="width:5px;height:5px;border-radius:50%;background:currentColor"></i>Approved</span></span><span class="ph">${r.ph} photos</span></div>
  <div class="sa-recapbody">
    <div class="t">${r.d} · ${r.v}</div>
    <div class="m">${r.ba} · ${r.st} · ${r.d}</div>
    <div class="m">${r.ph} photos · metrics in</div>
    <div class="ap">Approved by ${r.ap}</div>
    <button class="sa-btn sm mono" style="margin-top:14px" data-act="toast" data-v="Share link copied — expires in 7 days">↗ Share</button>
  </div>
  <div class="sa-recapstats"><div><div class="v">${r.eng}</div><div class="l">ENG</div></div><div><div class="v">${r.sold}</div><div class="l">SOLD</div></div><div><div class="v">${r.conv}</div><div class="l">CONV</div></div></div>
</div>`).join('')}</div>`}`;
};

VIEWS.tracker = s => {
  const STATES = [['Active', 3, ''], ['Pending', 1, 'c-orange'], ['Queue', 0, 'c-orange'], ['Approved', 3, 'c-purple'], ['Scheduled', 2, 'c-blue'], ['Done', 8, ''], ['All', TRACKER.length, '']];
  let rows = s.trkStatus === 'All' ? TRACKER : TRACKER.filter(r => r.s === s.trkStatus || (s.trkStatus === 'Active' && r.s !== 'Done'));
  if (s.trkMarket !== 'All markets') rows = rows.filter(r => r.mk === s.trkMarket);
  if (s.trkQ) rows = rows.filter(r => (r.v + r.a + r.rq).toLowerCase().includes(s.trkQ.toLowerCase()));
  if (s.trkSort === 'Date · oldest') rows = rows.slice().reverse();
  const pill = st => ({ Scheduled: 'p-blue', Pending: 'p-orange', Approved: 'p-purple', Done: 'p-mut' })[st] || 'p-lime';
  const markets = ['All markets', ...[...new Set(TRACKER.map(r => r.mk))]];
  return `
${head('Your events', 'My requests.', 'Every request you’ve submitted, with live status updates from your RMM.')}
<div class="sa-btnrow sa-mt">
  <button class="sa-btn mono" data-act="toast" data-v="Sheet linked — syncing every 15 minutes">+ Link sheet</button>
  <button class="sa-btn" data-act="nav" data-v="bulk">↥ Bulk upload</button>
  <button class="sa-btn" data-act="toast" data-v="14 rows copied for Sheets">Copy for Sheets (14)</button>
  <button class="sa-btn" data-act="toast" data-v="tracker-export.csv downloaded">↗ Export CSV (14)</button>
  <button class="sa-btn pri" data-act="toast" data-v="Request form opens in a drawer">+ Submit request</button>
</div>
<div class="sa-filterbar sa-mt">
  <span class="sa-mlbl">Status</span>
  ${STATES.map(([n, c, k]) => `<button class="sa-chip ${k} ${s.trkStatus === n ? 'on' : ''}" data-act="trkStatus" data-v="${n}"><i class="dot"></i>${n} · ${c}</button>`).join('')}
  <div style="flex:1 1 100%;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
    <input class="sa-input" style="flex:1 1 220px" placeholder="Search venue, address, market…" value="${s.trkQ}" data-act="trkQ">
    ${seg('trkGroup', ['Flat', 'By date'], s.trkGroup)}
    <button class="sa-btn sm mono" data-act="toast" data-v="Saved views: My markets, Pending only, This month">★ Views</button>
    <select class="sa-sel" data-act="noop"><option>All RMMs</option><option>Dana Whitfield</option><option>Owen Marsh</option><option>Lena Ortiz</option></select>
  </div>
</div>
<div class="sa-filterbar sa-mt-s">
  <span class="sa-mlbl">Refine</span><span class="sa-mlbl">When</span><select class="sa-sel" data-act="noop"><option>All dates</option><option>Next 30 days</option><option>Last 30 days</option></select>
  <span class="sa-mlbl">Market</span><select class="sa-sel" data-act="trkMarket">${markets.map(m => `<option ${m === s.trkMarket ? 'selected' : ''}>${m}</option>`).join('')}</select>
  <span class="sa-mlbl">Scheduling</span><select class="sa-sel" data-act="noop"><option>All scheduling</option><option>Staffed</option><option>Needs BA</option></select>
  <span class="sa-mlbl">Sort</span><select class="sa-sel" data-act="trkSort">${['Date · newest', 'Date · oldest'].map(x => `<option ${x === s.trkSort ? 'selected' : ''}>${x}</option>`).join('')}</select>
</div>
<div class="sa-grid g4 sa-mt-s">${kpi('Scheduled', '34', 'Tracker requests', 'lime')}${kpi('Consumers', '8,221', 'Across done requests')}${kpi('First-time', '2,104', '25.6% of consumers')}${kpi('Products purchased', '1,912', 'Retail + on-prem')}</div>
<div class="sa-tblwrap"><div class="sa-scroll"><table class="sa-tbl">
<thead><tr><th>Date</th><th>Status</th><th>Market</th><th>Venue</th><th>Address</th><th>Type</th><th>Consumers</th><th>1st-time</th><th>Recap</th><th>Notes</th></tr></thead>
<tbody>${rows.length ? rows.map(r => `<tr>
<td style="white-space:nowrap">${r.d}<div class="sub">${r.h}</div></td>
<td><span class="sa-pill ${pill(r.s)}">${r.s}</span></td>
<td>${r.mk}</td>
<td><div class="name">${r.v}</div><div class="sub">${r.rq}</div></td>
<td style="max-width:230px;color:var(--fg2)">${r.a}</td>
<td>${r.t}</td>
<td style="font-family:var(--mono);color:${r.c === '—' ? 'var(--dim)' : 'var(--fg)'}">${r.c}</td>
<td style="font-family:var(--mono);color:${r.f === '—' ? 'var(--dim)' : 'var(--fg)'}">${r.f}</td>
<td>${r.r ? `<button class="sa-pill p-lime" style="background:transparent" data-act="nav" data-v="recaps"><i class="dot" style="width:5px;height:5px;border-radius:50%;background:currentColor"></i>1 recap</button>` : '<span class="sa-dash">—</span>'}</td>
<td><span class="sa-dash">—</span></td></tr>`).join('') : `<tr><td colspan="10"><div class="sa-empty"><h3>Nothing here.</h3>No requests match this filter.</div></td></tr>`}</tbody>
</table></div></div>`;
};

VIEWS.recent = s => {
  const rows = s.subFilter === 'All' ? SUBMISSIONS : SUBMISSIONS.filter(r => r.st === s.subFilter);
  const pill = st => ({ Scheduled: 'p-blue', Pending: 'p-orange', Approved: 'p-purple' })[st] || 'p-lime';
  return `
${head('Last 7 days', 'Recent submissions.', 'Every request that came in this week, sorted by submission time. Approve pending requests inline — no admin access needed.', seg('subFilter', ['All', 'Pending', 'Approved', 'Scheduled'], s.subFilter))}
<div class="sa-grid g4 sa-mt">${kpi('Submitted · 7d', '10', 'Across 3 requestors', 'lime')}${kpi('Awaiting approval', '<span class="v-orange">5</span>', 'Oldest 2 days old')}${kpi('Approved', '<span class="v-purple">4</span>', 'Moved to scheduling')}${kpi('Scheduled', '<span class="v-blue">1</span>', 'BA assigned')}</div>
<div class="sa-tblwrap"><div class="sa-scroll"><table class="sa-tbl">
<thead><tr><th>Submitted</th><th>Req ID</th><th>Status</th><th>Venue</th><th>Market</th><th>Event date</th><th>Requestor</th><th></th></tr></thead>
<tbody>${rows.map(r => `<tr><td style="white-space:nowrap;color:var(--fg2)">${r.s}</td><td style="font-family:var(--mono);color:var(--mut)">${r.id}</td><td><span class="sa-pill ${pill(r.st)}">${r.st}</span></td><td class="name">${r.v}</td><td>${r.mk}</td><td style="white-space:nowrap">${r.d}</td><td>${r.r}</td><td>${r.st === 'Pending' ? `<button class="sa-btn sm mono" data-act="nav" data-v="approvals" style="border-color:var(--lime);color:var(--lime)">Review</button>` : ''}</td></tr>`).join('')}</tbody>
</table></div></div>`;
};
