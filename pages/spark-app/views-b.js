/* Spark dashboard demo — views: Bulk Upload, Calendar, Account Map, Approvals, Reports, Field Sampling, Comms */
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const hLbl = h => `${h % 12 === 0 ? 12 : h % 12} ${h < 12 ? 'AM' : 'PM'}`;
const tLbl = h => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'a' : 'p'}`;

VIEWS.bulk = s => `
${head('Bulk upload', 'Drop in a spreadsheet.', 'Schedule dozens of activations at once. We validate every row before anything writes — so a typo on row 7 doesn’t break rows 1–6.')}
<div class="sa-btnrow sa-mt"><button class="sa-btn mono" data-act="nav" data-v="tracker">← Back to tracker</button></div>
<div class="sa-step hi">
  <div class="sa-stepnum">1</div>
  <div class="body">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:20px;flex-wrap:wrap">
      <div>${eyebrow('Get the template')}<h3>Download the per-tenant XLSX</h3></div>
      <button class="sa-btn pri" data-act="toast" data-v="yourbrand-activations-template.xlsx downloaded">${ICONS.dl} Download template</button>
    </div>
    <p>Pre-populated columns with dropdowns for activation type and market, locked to the YourBrand tenant. Fill one row per activation, drop the file back here when you’re done.</p>
  </div>
</div>
<div class="sa-acc">
  <button class="sa-acchd" data-act="toggleCols"><span class="sa-eyebrow" style="color:var(--lime)">Column reference</span><h3>What goes in each column</h3><span class="r">${s.colsOpen ? 'Tap to collapse' : 'Tap to expand'}</span></button>
  ${s.colsOpen ? `<div class="sa-accbody"><div class="sa-scroll"><table class="sa-tbl" style="min-width:640px">
  <thead><tr><th>Column</th><th>Required</th><th>Accepts</th><th>Example</th></tr></thead><tbody>
  ${[['Date', 'Yes', 'MM/DD/YYYY', '09/19/2026'], ['Start / End', 'Yes', '24h or 12h clock', '11:00a / 3:00p'], ['Venue', 'Yes', 'Free text', 'H-E-B Bee Cave'], ['Address', 'Yes', 'Full street address', '12611 Shops Pkwy, Bee Cave, TX'], ['Market', 'No', 'State or metro', 'TX'], ['Type', 'Yes', 'Dropdown', 'Retail Sampling'], ['SKUs', 'No', 'Comma-separated', 'Citrus Rush, Black Cherry'], ['Notes', 'No', 'Free text', 'Endcap near produce']].map(r => `<tr><td class="name">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td style="font-family:var(--mono);font-size:12.5px;color:var(--mut)">${r[3]}</td></tr>`).join('')}
  </tbody></table></div></div>` : ''}
</div>
<div class="sa-step">
  <div class="sa-stepnum b">2</div>
  <div class="body">
    ${eyebrow('Upload + validate')}<h3>Drop your filled file</h3>
    <p>We run a dry-run first — no rows are written until you confirm in step 3.</p>
    <button class="sa-drop" style="display:block;width:100%;border-width:1.5px" data-act="toast" data-v="Dry run complete — 38 rows valid, 0 errors">
      <div class="big">Drop XLSX or CSV here</div>
      <div class="small">or click to pick · .xlsx, .xls, .csv</div>
    </button>
  </div>
</div>
<div class="sa-step">
  <div class="sa-stepnum p">3</div>
  <div class="body">
    ${eyebrow('Confirm + write')}<h3>Review the dry run, then commit</h3>
    <p>Last run: <b style="color:var(--fg)">38 rows valid · 0 errors · 2 warnings</b> — two rows landed on the same venue and time, which we’ll schedule as a double-staffed shift unless you split them.</p>
    <div class="sa-btnrow" style="margin-top:18px"><button class="sa-btn pri" data-act="toast" data-v="38 activations written to the tracker">Commit 38 rows</button><button class="sa-btn" data-act="toast" data-v="Dry-run report downloaded">Download dry-run report</button></div>
  </div>
</div>`;

VIEWS.calendar = s => {
  const days = [['Mon', 7], ['Tue', 8], ['Wed', 9, 1], ['Thu', 10], ['Fri', 11], ['Sat', 12], ['Sun', 13]];
  [1, 2, 3, 4, 5, 6, 7].forEach(d => {
    const evs = CAL_EVENTS.filter(e => e.day === d).sort((a, b) => a.start - b.start);
    evs.forEach((e, i) => {
      e._lane = 0;
      for (let j = 0; j < i; j++) { const o = evs[j]; if (o.start < e.start + e.dur && e.start < o.start + o.dur && o._lane === e._lane) e._lane++; }
    });
    const n = Math.max(1, ...evs.map(e => e._lane + 1));
    evs.forEach(e => { e._lanes = n; });
  });
  const evFor = (d, h) => CAL_EVENTS.filter(e => e.day === d && e.start === h);
  let body = '';
  if (s.calView === 'Month') {
    const cells = [];
    for (let i = 0; i < 35; i++) { const dnum = i - 1; cells.push(dnum >= 1 && dnum <= 30 ? dnum : null); }
    const counts = { 7: 2, 8: 2, 9: 3, 10: 5, 11: 4, 12: 7, 13: 6, 14: 2, 15: 4, 16: 3, 17: 3, 18: 4, 19: 6, 20: 5, 21: 3, 22: 4, 26: 5, 27: 6, 1: 3, 2: 4, 3: 4, 4: 2, 5: 6, 6: 5, 23: 2, 24: 3, 25: 4, 28: 3, 29: 2, 30: 4 };
    body = `<div class="sa-calhd">${['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].slice(1).map(d => `<div><div class="dw">${d.toUpperCase()}</div></div>`).join('')}<div><div class="dw">SUN</div></div></div>
    ${[0, 1, 2, 3, 4].map(w => `<div class="sa-calrow" style="grid-template-columns:repeat(7,minmax(0,1fr));min-height:110px">${[0, 1, 2, 3, 4, 5, 6].map(d => { const n = cells[w * 7 + d]; return `<div class="${n === 9 ? 'col-today' : ''}" style="padding:10px">${n ? `<div style="font-family:var(--mono);font-size:13px;color:${n === 9 ? 'var(--lime)' : 'var(--fg2)'}">${n}</div>${counts[n] ? `<div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:4px">${Array.from({ length: counts[n] }).map((_, i) => `<i style="width:7px;height:7px;border-radius:50%;background:${i % 4 === 3 ? 'var(--blue)' : i % 5 === 4 ? 'var(--purple)' : 'var(--lime)'}"></i>`).join('')}</div><div style="margin-top:8px;font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;color:var(--dim)">${counts[n]} SHIFTS</div>` : ''}` : ''}</div>`; }).join('')}</div>`).join('')}`;
  } else {
    const cols = s.calView === 'Day' ? [days[2]] : days;
    body = `<div class="sa-calhd" style="grid-template-columns:74px repeat(${cols.length},minmax(0,1fr))">
    <div></div>${cols.map(d => `<div class="${d[2] ? 'on' : ''}"><div class="dw">${d[0].toUpperCase()}</div><div class="dd">${d[1]}</div>${d[2] ? '<div class="td">TODAY</div>' : ''}</div>`).join('')}</div>
    <div class="sa-calbody">${HOURS.map(h => `<div class="sa-calrow" style="grid-template-columns:74px repeat(${cols.length},minmax(0,1fr))"><div>${hLbl(h)}</div>${cols.map((d, ci) => {
      const di = s.calView === 'Day' ? 3 : ci + 1;
      const evs = evFor(di, h);
      return `<div class="${d[2] ? 'col-today' : ''}" style="${evs.length ? 'overflow:visible;z-index:2' : ''}">${h === 17 && d[2] ? '<div class="sa-nowline" style="top:32px"></div>' : ''}${evs.map(e => `<button class="sa-calev ${e.k}" style="height:calc(${e.dur} * 66px - 8px);z-index:2;left:calc(4px + ${e._lane} * (100% - 8px) / ${e._lanes});width:calc((100% - 8px) / ${e._lanes} - 3px);right:auto" data-act="toast" data-v="Opening shift · ${e.t.replace(/"/g, '')}"><div class="tm">${tLbl(e.start)}–${tLbl(e.start + e.dur)}</div><div class="ti">${e.t}</div></button>`).join('')}</div>`;
    }).join('')}</div>`).join('')}</div>`;
  }
  return `
${head('Shifts board · September 2026', 'Every shift, at a glance.', null, `<div class="sa-btnrow">
  <button class="sa-btn sm" data-act="toast" data-v="Previous week">${ICONS.chevL}</button>
  <button class="sa-btn sm" data-act="toast" data-v="Jumped to today">Today</button>
  <button class="sa-btn sm" data-act="toast" data-v="Next week">${ICONS.chevR}</button>
  ${seg('calView', ['Day', 'Week', 'Month'], s.calView)}
</div>`)}
<div class="sa-cal">${body}</div>
<div class="sa-legend"><span><i style="background:var(--lime)"></i>Retail</span><span><i style="background:var(--purple)"></i>On-premise</span><span><i style="background:var(--blue)"></i>Event</span></div>`;
};

VIEWS.accountmap = (s, embed) => {
  const counts = { all: ACCOUNTS.length, visited: ACCOUNTS.filter(a => a.s === 'visited').length, scheduled: ACCOUNTS.filter(a => a.s === 'scheduled').length, needs: ACCOUNTS.filter(a => a.s === 'needs').length };
  const list = s.acctFilter === 'all' ? ACCOUNTS : ACCOUNTS.filter(a => a.s === s.acctFilter);
  const kind = st => st === 'visited' ? '' : st === 'scheduled' ? 'b' : 'o';
  window.__saAccountPins = list.map(a => [a.c.split(',')[0], a.g[0], a.g[1], a.s === 'needs' ? 'needs' : a.s, a.st]);
  const col = st => st === 'visited' ? 'var(--lime)' : st === 'scheduled' ? 'var(--blue)' : 'var(--orange)';
  return `
${embed ? '' : head('Your accounts · 12 venues', 'Plan from the map.', 'Click any pin to see the account and schedule a demo.')}
<div class="sa-card sa-pad ${embed ? 'sa-mt' : 'sa-mt'}" style="border-color:rgba(201,242,78,.3);border-style:dashed;background:linear-gradient(180deg,rgba(201,242,78,.05),transparent)">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap">
    <div>
      <div class="sa-eyebrow" style="color:var(--lime)">↥ Upload account list</div>
      <p class="sa-sub" style="font-size:14.5px;margin-top:10px">Drag a CSV or XLSX, or click to browse. Columns auto-detected: <code style="font-family:var(--mono);font-size:12.5px;color:var(--lime)">Name · Address · City · State · Zip · Chain</code></p>
    </div>
    <div class="sa-btnrow"><button class="sa-btn" data-act="toast" data-v="accounts-template.csv downloaded">${ICONS.dl} Download template</button><button class="sa-btn pri" data-act="toast" data-v="12 accounts geocoded and mapped">Choose file</button></div>
  </div>
</div>
<div class="sa-grid g4 sa-mt-s">${kpi('Accounts', String(counts.all), 'Geocoded', 'lime')}${kpi('Visited', `<span class="v-lime">${counts.visited}</span>`, 'Recap on file')}${kpi('Scheduled', `<span class="v-blue">${counts.scheduled}</span>`, 'On the books')}${kpi('Needs visit', `<span class="v-orange">${counts.needs}</span>`, 'No activity in 60d')}</div>
<div class="sa-filterbar sa-mt-s">
  <span class="sa-mlbl">Status</span>
  ${[['all', `All · ${counts.all}`, ''], ['visited', `Visited · ${counts.visited}`, ''], ['scheduled', `Scheduled · ${counts.scheduled}`, 'c-blue'], ['needs', `Needs visit · ${counts.needs}`, 'c-orange']].map(([k, l, c]) => `<button class="sa-chip ${c} ${s.acctFilter === k ? 'on' : ''}" data-act="acctFilter" data-v="${k}"><i class="dot"></i>${l}</button>`).join('')}
  <div style="margin-left:auto;display:flex;gap:10px;flex-wrap:wrap">
    <select class="sa-sel" data-act="noop"><option>All states</option><option>TX</option><option>GA</option><option>IL</option><option>MI</option></select>
    <select class="sa-sel" data-act="noop"><option>All retailers</option>${RETAILERS.map(r => `<option>${r}</option>`).join('')}</select>
    <input class="sa-input" placeholder="Search account or address" data-act="noop">
  </div>
</div>
<div class="sa-splitmap">
  <div class="sa-map">
    <div class="sa-mapsurface"></div>
    <div class="sa-mapvec" data-samap="accounts"></div>
    <div class="sa-mapattr">Account map · YourBrand · 12 venues</div>
  </div>
  <div class="sa-card">
    <div class="sa-cardhd"><h3>Accounts</h3><span class="sa-eyebrow">${list.length}</span></div>
    ${list.map(a => `<div class="sa-liverow" style="align-items:center"><span style="width:9px;height:9px;border-radius:50%;background:${col(a.s)};flex:0 0 auto"></span><div style="flex:1 1 auto;min-width:0"><div class="n">${a.n}</div><div class="m">${a.c} · ${a.ch}</div></div><button class="sa-btn sm mono" data-act="toast" data-v="Scheduling a demo at ${a.n.replace(/"/g, '')}" style="border-color:var(--lime);color:var(--lime)">${ICONS.spark} Schedule</button></div>`).join('')}
  </div>
</div>`;
};

VIEWS.approvals = (s, embed) => {
  const reqs = PENDING_REQS.filter(r => !s.handled.includes(r.id));
  const recs = PENDING_RECAPS.filter(r => !s.handled.includes(r.id));
  const items = s.apprTab === 'Recaps' ? recs : reqs;
  const body = items.length === 0
    ? `<div class="sa-card sa-mt"><div class="sa-empty"><h3>You’re all caught up.</h3>No ${s.apprTab === 'Recaps' ? 'recaps' : 'requests'} awaiting your approval.</div></div>`
    : s.apprTab === 'Recaps'
      ? `<div class="sa-grid g2 sa-mt">${recs.map(r => `<div class="sa-card">
        <div class="sa-photo" style="aspect-ratio:16/7"><img src="${PHOTOS[(PENDING_RECAPS.indexOf(r) + 6) % PHOTOS.length]}" alt="" decoding="async"><span class="sa-photoveil"></span><span class="rid">${r.id}</span><span class="ph">${r.ph} photos</span></div>
        <div class="sa-pad">
          <h3 style="font-size:17px;letter-spacing:-.02em">${r.v}</h3>
          <div class="sa-eyebrow" style="margin-top:10px">${r.ba} · ${r.d}</div>
          <div class="sa-grid g3 sa-mt-s">${kpi('Eng', String(r.eng))}${kpi('Sold', String(r.sold))}${kpi('Conv', (r.sold / r.eng * 100).toFixed(1) + '%')}</div>
          <div class="sa-btnrow" style="margin-top:18px"><button class="sa-btn pri" data-act="approve" data-v="${r.id}">Approve recap</button><button class="sa-btn" data-act="decline" data-v="${r.id}">Send back</button></div>
        </div></div>`).join('')}</div>`
      : `<div class="sa-mt">${reqs.map(r => `<div class="sa-card sa-pad" style="margin-bottom:12px">
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start">
          <div style="flex:1 1 380px;min-width:0">
            <div class="sa-eyebrow">${r.id} · ${r.t}</div>
            <h3 style="font-size:19px;letter-spacing:-.025em;margin-top:10px">${r.v}</h3>
            <div class="sa-eyebrow" style="margin-top:12px">${r.d} · ${r.r}</div>
            <p class="sa-sub" style="font-size:14px;margin-top:12px">SKUs: <b style="color:var(--fg)">${r.sk}</b> — ${r.n}</p>
          </div>
          <div class="sa-btnrow" style="flex:0 0 auto"><button class="sa-btn pri" data-act="approve" data-v="${r.id}">Approve</button><button class="sa-btn" data-act="decline" data-v="${r.id}">Decline</button></div>
        </div></div>`).join('')}</div>`;
  return `
${embed ? '' : head('Your approvals', 'Awaiting your approval.', 'New activation requests submitted for your brand. Approve to move one into scheduling, or decline with a note.')}
<div class="sa-btnrow ${embed ? 'sa-mt' : 'sa-mt'}">
  <button class="sa-btn ${s.apprTab === 'Requests' ? 'pri' : ''}" data-act="apprTab" data-v="Requests">Requests${reqs.length ? ` · ${reqs.length}` : ''}</button>
  <button class="sa-btn ${s.apprTab === 'Recaps' ? 'pri' : ''}" data-act="apprTab" data-v="Recaps">Recaps${recs.length ? ` · ${recs.length}` : ''}</button>
</div>
${body}`;
};

VIEWS.reports = s => {
  const maxR = 32, maxC = 3200;
  let acc = 0;
  const stops = REPORTS.mix.map(([n, p, c]) => { const a = acc; acc += p; return `${c} ${a}% ${acc}%`; }).join(',');
  const maxTop = REPORTS.topRetailers[0][1];
  return `
${head('Reports · last 90 days', 'The numbers.', 'Live from the analytics warehouse. Filter by brand, market, activation type, or BA.', `<button class="sa-btn" data-act="toast" data-v="Building your PDF…">${ICONS.print} Export PDF</button>`)}
<div class="sa-grid g4 sa-mt">${kpi('Events · 90d', '214', '+18% vs prior 90d', 'lime')}${kpi('Consumers', '22,486', 'Reached across all types')}${kpi('Brand awareness', '71.4%', 'Aided, post-sample survey')}${kpi('Purchase intent', '38.2%', 'Would buy in next 30 days')}</div>
<div class="sa-grid g2 sa-mt-s">
  <div class="sa-card sa-chart">
    <h3>Requests per week · last 12 weeks</h3><div class="cs">Inbound activation volume.</div>
    <div class="sa-bars"><div class="sa-yaxis">${[32, 24, 16, 8, 0].map(v => `<div>${v}</div>`).join('')}</div>
    <div class="sa-plot"><div class="sa-gridlines">${[0, 1, 2, 3, 4].map(() => '<i></i>').join('')}</div>${REPORTS.requests.map((v, i) => `<div class="sa-bar" style="height:${v / maxR * 100}%"><span>${v} · ${REPORTS.weeks[i]}</span></div>`).join('')}</div></div>
    <div class="sa-xaxis">${REPORTS.weeks.map(w => `<span>${w}</span>`).join('')}</div>
  </div>
  <div class="sa-card sa-chart">
    <h3>Activation mix</h3><div class="cs">90d share by type.</div>
    <div class="sa-donutwrap">
      <div class="sa-donut" style="background:conic-gradient(${stops})"><div class="sa-donutmid"><div class="v">214</div><div class="l">EVENTS</div></div></div>
      <div class="sa-legend2">${REPORTS.mix.map(([n, p, c]) => `<div><i style="background:${c}"></i>${n}<b>${p}%</b></div>`).join('')}</div>
    </div>
  </div>
</div>
<div class="sa-grid g2 sa-mt-s">
  <div class="sa-card sa-chart">
    <h3>Consumers sampled · last 12 weeks</h3><div class="cs">Sum of recap engagements per week.</div>
    <div class="sa-bars"><div class="sa-yaxis">${[3200, 2400, 1600, 800, 0].map(v => `<div>${fmt(v)}</div>`).join('')}</div>
    <div class="sa-plot"><div class="sa-gridlines">${[0, 1, 2, 3, 4].map(() => '<i></i>').join('')}</div>${REPORTS.consumers.map((v, i) => `<div class="sa-bar blue" style="height:${v / maxC * 100}%"><span>${fmt(v)} · ${REPORTS.weeks[i]}</span></div>`).join('')}</div></div>
    <div class="sa-xaxis">${REPORTS.weeks.map(w => `<span>${w}</span>`).join('')}</div>
  </div>
  <div class="sa-card sa-chart">
    <h3>Top retailers · last 90 days</h3><div class="cs">Consumers sampled — top 8 retailers.</div>
    <div class="sa-hbars">${REPORTS.topRetailers.map(([n, v]) => `<div class="sa-hbar"><div class="lb">${n}</div><div class="bt"><i style="width:${v / maxTop * 100}%"></i></div><div class="vv">${fmt(v)}</div></div>`).join('')}</div>
  </div>
</div>
<h2 class="sa-h1 sa-mt-l" style="font-size:26px">Scheduled exports</h2>
<div class="sa-grid g3 sa-mt-s">${REPORTS.exports.map(([cat, name, fmtx, cad, col]) => `<div class="sa-exp">
  <div class="top"><span class="sa-eyebrow">${cat}</span><span class="sa-pill p-${col === 'lime' ? 'lime' : 'blue'}"><i class="dot" style="width:5px;height:5px;border-radius:50%;background:currentColor"></i>${cad}</span></div>
  <h4>${name}</h4><div class="fmt">${fmtx}</div>
  <button class="mg" data-act="toast" data-v="Export settings open in a drawer">Manage →</button>
</div>`).join('')}</div>`;
};

VIEWS.field = s => {
  const w = FIELD.windows[s.fieldWin];
  const ytdTot = FIELD.ytdSku.reduce((a, b) => a + b, 0), winTot = w.sku.reduce((a, b) => a + b, 0);
  return `
${head('Outputs · field sampling', 'Field Sampling Report', 'Samples per hour, YTD and weekly SKU breakdowns, locations hit, what’s coming up next, and field call-outs — grouped by metro market for guerrilla field-sampling programs.')}
<div class="sa-filterbar sa-mt">
  ${Object.keys(FIELD.windows).map(k => `<button class="sa-chip ${s.fieldWin === k ? 'on' : ''}" data-act="fieldWin" data-v="${k}">${k}</button>`).join('')}
  <span class="sa-mlbl">or</span>
  <input class="sa-input" type="date" value="2026-09-03" data-act="noop"><span class="sa-mlbl">–</span><input class="sa-input" type="date" value="2026-09-09" data-act="noop">
  <div style="margin-left:auto;display:flex;gap:10px"><select class="sa-sel" data-act="noop"><option>All markets</option><option>Austin, TX</option><option>San Antonio, TX</option><option>Houston, TX</option><option>Atlanta, GA</option><option>Chicago, IL</option></select><select class="sa-sel" data-act="noop"><option>All event types</option><option>Retail Sampling</option><option>On-Premise</option><option>Event Activation</option></select></div>
</div>
<div class="sa-grid g4 sa-mt-s">${kpi('Samples / hour', w.sph, 'Clocked hours only', 'lime')}${kpi('Samples (window)', fmt(w.win), w.label, 'lime')}${kpi('Hours (window)', w.hrs, 'Clock-in to clock-out', 'lime')}${kpi('Samples YTD', fmt(w.ytd), 'Jan 1 – today', 'lime')}</div>
<div class="sa-warn">⚠ At least one shift in this window has no real clock-in/out pair — scheduled duration was used for hours.</div>
<div class="sa-grid g2 sa-mt-s">
  <div class="sa-card sa-pad">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px"><div><h3 style="font-size:19px;letter-spacing:-.02em">YTD SKU breakdown</h3><div class="sa-eyebrow" style="margin-top:8px">Jan 1 – today</div></div><span class="sa-pill p-lime">Units</span></div>
    <div style="margin-top:18px">${FIELD.skuNames.map((n, i) => `<div class="sa-skurow"><span class="n">YourBrand — ${n}</span><span class="v">${fmt(FIELD.ytdSku[i])}</span></div>`).join('')}
    <div class="sa-skutot"><span>Total</span><span class="v">${fmt(ytdTot)}</span></div></div>
  </div>
  <div class="sa-card sa-pad">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px"><div><h3 style="font-size:19px;letter-spacing:-.02em">This window’s SKU breakdown</h3><div class="sa-eyebrow" style="margin-top:8px">${w.label}</div></div><span class="sa-pill p-lime">Units</span></div>
    <div style="margin-top:18px">${FIELD.skuNames.map((n, i) => `<div class="sa-skurow"><span class="n">YourBrand — ${n}</span><span class="v">${fmt(w.sku[i])}</span></div>`).join('')}
    <div class="sa-skutot"><span>Total</span><span class="v">${fmt(winTot)}</span></div></div>
  </div>
</div>
<div class="sa-card sa-mt-s">
  <div class="sa-cardhd"><div><h3>Locations hit</h3><div class="sa-eyebrow" style="margin-top:8px">${FIELD.stops.length} stops in window</div></div><button class="sa-btn sm mono" data-act="toast" data-v="stops.csv downloaded">Export stops</button></div>
  <div class="sa-scroll"><table class="sa-tbl"><thead><tr><th>Market</th><th>Stop</th><th>Samples</th><th>Hours</th><th>Samples / hr</th></tr></thead>
  <tbody>${FIELD.stops.map(([m, st, sm, hr]) => `<tr><td class="name">${m}</td><td>${st}</td><td style="font-family:var(--mono);color:var(--lime)">${sm}</td><td style="font-family:var(--mono)">${hr}</td><td style="font-family:var(--mono)">${(sm / parseFloat(hr)).toFixed(1)}</td></tr>`).join('')}</tbody></table></div>
</div>
<div class="sa-card sa-mt-s">
  <div class="sa-cardhd"><div><h3>Coming up — next 7 days</h3><div class="sa-eyebrow" style="margin-top:8px">${FIELD.coming.length} shifts scheduled</div></div><button class="sa-btn sm mono" data-act="nav" data-v="calendar">Open calendar</button></div>
  ${FIELD.coming.map(([d, v, t, ba]) => `<div class="sa-liverow"><div class="t" style="flex:0 0 86px">${d}</div><div style="flex:1 1 auto;min-width:0"><div class="n">${v}</div><div class="m">${t} · ${ba}</div></div></div>`).join('')}
</div>
<div class="sa-card sa-pad sa-mt-s">
  <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap">
    <div><h3 style="font-size:19px;letter-spacing:-.02em">Field call-outs</h3><div class="sa-eyebrow" style="margin-top:8px">${FIELD.notes.length} notes in window</div></div>
    <button class="sa-btn pri" data-act="toast" data-v="AI is summarizing 8 field notes…">${ICONS.spark} Summarize with AI</button>
  </div>
  <div style="margin-top:8px">${FIELD.notes.map(([loc, d, txt]) => `<div class="sa-note"><div class="src">${loc} · ${d}</div><p>${txt}</p></div>`).join('')}</div>
</div>`;
};

VIEWS.announcements = () => `
${head('Communication', 'Announcements.', 'Program-wide notes from your Spark team. Newest first.')}
<div class="sa-card sa-mt">${ANNOUNCEMENTS.map(([cat, d, t, b]) => `<div class="sa-anrow"><div class="meta">${cat} · ${d}</div><h3>${t}</h3><p>${b}</p></div>`).join('')}</div>`;

VIEWS.inbox = () => `
${head('Communication', 'Inbox.', 'Threads with your RMMs and the Spark support team.')}
<div class="sa-card sa-mt">${INBOX.map(([who, d, subj, body, un]) => `<div class="sa-anrow"><div class="meta">${un ? '<span class="sa-unread"></span>' : ''}${who} · ${d}</div><h3>${subj}</h3><p>${body}</p><button class="sa-btn sm mono" style="margin-top:14px" data-act="toast" data-v="Reply drafted">Reply</button></div>`).join('')}</div>`;

VIEWS.alerts = () => `
${head('Communication', 'Alerts.', 'Things Spark noticed that need a decision from you.')}
<div class="sa-card sa-mt">${ALERTS.map(([c, d, t, b]) => `<div class="sa-anrow" style="border-left:3px solid var(--${c})"><div class="meta">${d}</div><h3>${t}</h3><p>${b}</p></div>`).join('')}</div>`;
