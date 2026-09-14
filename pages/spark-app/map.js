/* Vector US map for the dashboard demo — same visual language as the marketing-page map
   (d3 + us-atlas state outlines, lime-tinted live states, glowing market pins). */
const SA_MAP_W = 1000, SA_MAP_H = 560;
const saX = lng => (lng + 125) / 59 * SA_MAP_W;
const saY = lat => (49.5 - lat) / 25.5 * SA_MAP_H;
let SA_TOPO = null, SA_PATHS = null, SA_LOADING = null;

function saLoadPaths() {
  if (SA_PATHS) return Promise.resolve(SA_PATHS);
  if (SA_LOADING) return SA_LOADING;
  SA_LOADING = (async () => {
    if (!window.d3 || !window.topojson) return null;
    try {
      if (!SA_TOPO) SA_TOPO = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json').then(r => r.json());
      const fc = window.topojson.feature(SA_TOPO, SA_TOPO.objects.states);
      const proj = window.d3.geoTransform({ point(x, y) { this.stream.point(saX(x), saY(y)); } });
      const gp = window.d3.geoPath(proj);
      SA_PATHS = fc.features.map(f => ({ d: gp(f), id: String(f.id).padStart(2, '0') })).filter(p => p.d && p.id !== '02' && p.id !== '15' && +p.id < 60);
      return SA_PATHS;
    } catch (e) { return null; }
  })();
  return SA_LOADING;
}

const SA_PINCOL = { live: 'var(--lime)', sched: 'var(--blue)', needs: 'var(--orange)', visited: 'var(--lime)', scheduled: 'var(--blue)' };

function saMapSvg(pins, paths, liveStates) {
  const states = paths ? paths.map(p => {
    const on = liveStates.includes(p.id);
    return `<path d="${p.d}" fill="${on ? 'rgba(201,242,78,.16)' : 'rgba(250,250,247,.045)'}" stroke="rgba(250,250,247,.2)" stroke-width=".8" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path>`;
  }).join('') : '';
  const placed = [];
  const labelY = (x, y, up) => {
    let ly = y - up;
    while (placed.some(q => Math.abs(q.x - x) < 92 && Math.abs(q.y - ly) < 15)) ly -= 16;
    placed.push({ x, y: ly });
    return ly.toFixed(1);
  };
  return `<svg viewBox="0 0 ${SA_MAP_W} ${SA_MAP_H}" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;width:100%;height:100%">
  <g>${states}</g>
  <g>${pins.slice().sort((a, b) => saY(a[2]) - saY(b[2])).map(p => {
    const x = +saX(p[1]).toFixed(1), y = +saY(p[2]).toFixed(1), c = SA_PINCOL[p[3]] || 'var(--lime)';
    const n = p[5] > 1 ? p[5] : 0;
    return `<g><circle cx="${x}" cy="${y}" r="16" fill="${c}" opacity=".14"><animate attributeName="r" values="10;22;10" dur="2.6s" repeatCount="indefinite"/><animate attributeName="opacity" values=".22;0;.22" dur="2.6s" repeatCount="indefinite"/></circle><circle cx="${x}" cy="${y}" r="${n ? 11 : 5.5}" fill="${c}" stroke="#0A0B0D" stroke-width="2"></circle>${n ? `<text x="${x}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-family="var(--mono)" font-size="12" font-weight="700" fill="#0A0B0D">${n}</text>` : ''}<text x="${x}" y="${labelY(x, y, n ? 19 : 13)}" text-anchor="middle" font-family="var(--mono)" font-size="12" letter-spacing="1" fill="#FAFAF7">${p[0]}</text></g>`;
  }).join('')}</g>
</svg>`;
}

/* one pin per metro — keeps labels from stacking */
function saCluster(pins) {
  const by = new Map();
  pins.forEach(p => {
    const k = p[0];
    const e = by.get(k);
    if (e) { e[5]++; if (p[3] === 'needs') e[3] = 'needs'; }
    else by.set(k, [p[0], p[1], p[2], p[3], p[4], 1]);
  });
  return [...by.values()];
}

async function saRenderMaps() {
  const hosts = [...document.querySelectorAll('[data-samap]')];
  if (!hosts.length) return;
  const paint = paths => hosts.forEach(h => {
    if (!h.isConnected) return;
    const pins = saCluster(h.dataset.samap === 'accounts' ? window.__saAccountPins || [] : TODAY_PINS);
    const live = [...new Set(pins.map(p => SA_FIPS[p[4]]).filter(Boolean))];
    h.innerHTML = saMapSvg(pins, paths, live);
  });
  paint(SA_PATHS);
  const paths = await saLoadPaths();
  if (paths) paint(paths);
}

const SA_FIPS = { AL: '01', AZ: '04', AR: '05', CA: '06', CO: '08', CT: '09', DE: '10', DC: '11', FL: '12', GA: '13', ID: '16', IL: '17', IN: '18', IA: '19', KS: '20', KY: '21', LA: '22', ME: '23', MD: '24', MA: '25', MI: '26', MN: '27', MS: '28', MO: '29', MT: '30', NE: '31', NV: '32', NH: '33', NJ: '34', NM: '35', NY: '36', NC: '37', ND: '38', OH: '39', OK: '40', OR: '41', PA: '42', RI: '44', SC: '45', SD: '46', TN: '47', TX: '48', UT: '49', VT: '50', VA: '51', WA: '53', WV: '54', WI: '55', WY: '56' };
