/* Spark client dashboard demo — fake data for a hypothetical tenant, "YourBrand". */
const I = (p, w) => `<svg width="${w || 18}" height="${w || 18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICONS = {
  grid: I('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
  live: I('<circle cx="12" cy="12" r="2.2"/><path d="M7.8 7.8a6 6 0 000 8.4M16.2 16.2a6 6 0 000-8.4M4.9 4.9a10 10 0 000 14.2M19.1 19.1a10 10 0 000-14.2"/>'),
  cal: I('<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  doc: I('<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
  check2: I('<path d="M3 6l2.5 2.5L10 4M3 17l2.5 2.5L10 15M13 6h8M13 18h8"/>'),
  inbox: I('<path d="M3 12l2.5-6.5A2 2 0 017.4 4h9.2a2 2 0 011.9 1.5L21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M3 12h5l1.5 2.5h5L16 12h5"/>'),
  upload: I('<path d="M12 15V4M8 8l4-4 4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>'),
  pin: I('<path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  circlecheck: I('<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>'),
  chart: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  route: I('<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a3.5 3.5 0 010 7h-4a3.5 3.5 0 000 7h5.5"/>'),
  mega: I('<path d="M3 11v3a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z"/><path d="M14 8.5a5 5 0 010 7M17 6a8.5 8.5 0 010 12"/>'),
  mail: I('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>'),
  bell: I('<path d="M18 9a6 6 0 10-12 0c0 6-2 7-2 7h16s-2-1-2-7"/><path d="M10.5 20a2 2 0 003 0"/>'),
  chev: I('<path d="M6 9l6 6 6-6"/>', 14),
  chevR: I('<path d="M9 6l6 6-6 6"/>', 14),
  chevL: I('<path d="M15 6l-6 6 6 6"/>', 14),
  copy: I('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1"/>', 15),
  ext: I('<path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>', 15),
  burger: I('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  spark: I('<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/>', 15),
  dl: I('<path d="M12 4v11M8 11l4 4 4-4M5 20h14"/>', 15),
  expand: I('<path d="M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5"/>', 15),
  print: I('<path d="M6 9V3h12v6M6 18H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-1M6 14h12v7H6z"/>', 15)
};

const NAV = [
  { g: 'Today', items: [['dashboard', 'Dashboard', 'grid'], ['today', 'Today', 'live'], ['upcoming', 'Upcoming', 'cal']] },
  { g: 'Recaps', items: [['recaps', 'My Recaps', 'doc'], ['tracker', 'Master Tracker', 'check2', '34']] },
  { g: 'Workspace', items: [['recent', 'Recent Submissions', 'inbox'], ['bulk', 'Bulk Upload', 'upload'], ['calendar', 'Calendar', 'cal'], ['accountmap', 'Account Map', 'pin'], ['approvals', 'Approvals', 'circlecheck', '5']] },
  { g: 'Outputs', items: [['reports', 'Reports', 'chart'], ['field', 'Field Sampling Report', 'route']] },
  { g: 'Communication', items: [['announcements', 'Announcements', 'mega'], ['inbox', 'Inbox', 'mail'], ['alerts', 'Alerts', 'bell', '3']] }
];

const CRUMB = { dashboard: 'Dashboard', today: 'Today', upcoming: 'Upcoming', recaps: 'List', tracker: 'List', recent: 'Recent', bulk: 'Bulk Upload', calendar: 'Connect Calendar', accountmap: 'Account Map', approvals: 'My Approvals', reports: 'Reports', field: 'Field Sampling Report', announcements: 'Announcements', inbox: 'Inbox', alerts: 'Alerts' };

const SKUS = ['Citrus Rush', 'Black Cherry', 'Peach Fizz', 'Blood Orange', 'Wild Lime', 'Mango Surge'];
const RETAILERS = ['H-E-B', 'Kroger', 'Total Wine', 'Publix', 'Whole Foods', 'Costco', 'Meijer', 'Safeway'];
const BAS = ['Joann Fowler', 'Sylvia Gonzalez', 'Thomas Lekas', 'Deanna Mitchell', 'Aya Omar', 'Bryanna White', 'Rita Martinez', 'Jeidy Hernandez', 'Marcus Tran', 'Priya Raman'];

/* range-scoped program numbers */
const RANGES = {
  '7d': { label: 'Showing 7d', from: '2026-09-03', to: '2026-09-09', demos: 31, onprem: 11, events: 6, conv: '19.8%', trial: '64%', samples: 1120, structured: 1044, top: 312, sched: 31, appr: 24 },
  '30d': { label: 'Showing 30d', from: '2026-08-10', to: '2026-09-09', demos: 128, onprem: 46, events: 22, conv: '18.4%', trial: '62%', samples: 4318, structured: 4102, top: 1144, sched: 31, appr: 24 },
  '90d': { label: 'Showing 90d', from: '2026-06-11', to: '2026-09-09', demos: 372, onprem: 131, events: 61, conv: '17.1%', trial: '59%', samples: 12864, structured: 12210, top: 3402, sched: 31, appr: 24 },
  ytd: { label: 'Showing YTD', from: '2026-01-01', to: '2026-09-09', demos: 811, onprem: 288, events: 142, conv: '16.6%', trial: '58%', samples: 22486, structured: 21340, top: 6842, sched: 31, appr: 24 }
};
const SKU_MIX = { '7d': [312, 268, 214, 158, 106, 62], '30d': [1144, 1002, 846, 611, 402, 288], '90d': [3402, 2988, 2401, 1806, 1284, 902], ytd: [6842, 5120, 3988, 2254, 1902, 1284] };

const FORWARD = [
  { d: 'Wed, Sep 9', n: 3, today: true }, { d: 'Thu, Sep 10', n: 5 }, { d: 'Fri, Sep 11', n: 4 },
  { d: 'Sat, Sep 12', n: 7 }, { d: 'Sun, Sep 13', n: 6 }, { d: 'Mon, Sep 14', n: 2 }, { d: 'Tue, Sep 15', n: 4 }
];
const TOP_RETAILERS_7D = [['H-E-B', 9], ['Kroger', 7], ['Total Wine & More', 5], ['Publix', 4], ['Whole Foods', 3], ['Costco', 3]];

const TODAY_EVENTS = [
  { t: '10:00a', n: 'H-E-B Mueller · 1801 E 51st St, Austin, TX', m: 'Retail Sampling · Joann Fowler', s: 'Live', k: 'lime', v: '84', l: 'Consumers' },
  { t: '11:00a', n: 'Kroger Signature · 1600 Bardin Rd, Arlington, TX', m: 'Retail Demo · Marcus Tran', s: 'Live', k: 'lime', v: '61', l: 'Consumers' },
  { t: '12:00p', n: 'Total Wine · 4715 S Lamar Blvd, Austin, TX', m: 'On-Premise · Aya Omar', s: 'Live', k: 'purple', v: '47', l: 'Consumers' },
  { t: '1:00p', n: 'Publix Midtown · 595 Piedmont Ave NE, Atlanta, GA', m: 'Retail Sampling · Rita Martinez', s: 'Clocked in', k: 'lime', v: '38', l: 'Consumers' },
  { t: '4:00p', n: 'Riverwalk Fall Market · 849 E Commerce St, San Antonio, TX', m: 'Event Activation · Bryanna White', s: 'Setup', k: 'blue', v: '—', l: 'Pending' },
  { t: '6:00p', n: 'Whole Foods Lincoln Park · 1550 N Kingsbury St, Chicago, IL', m: 'Retail Demo · Priya Raman', s: 'Scheduled', k: 'blue', v: '—', l: 'Pending' }
];
const TODAY_PINS = [
  ['Austin', -97.74, 30.27, 'live', 'TX'], ['San Antonio', -98.49, 29.42, 'live', 'TX'], ['Arlington', -97.11, 32.74, 'live', 'TX'],
  ['Houston', -95.37, 29.76, 'sched', 'TX'], ['Atlanta', -84.39, 33.75, 'live', 'GA'], ['Chicago', -87.63, 41.88, 'sched', 'IL'],
  ['Grand Rapids', -85.67, 42.96, 'sched', 'MI'], ['San Francisco', -122.42, 37.77, 'sched', 'CA']
];

const UPCOMING = [
  { day: 'Thursday, Sep 10', rows: [
    { t: '9/10/2026 · H-E-B Woodlawn Lake, San Antonio, TX · Retail Sampling', m: '10a–2p · Joann Fowler · REQ-8FK2', s: 'Scheduled', k: 'lime' },
    { t: '9/10/2026 · Kroger Signature, Arlington, TX · Retail Demo', m: '11a–3p · Marcus Tran · REQ-8FK4', s: 'Scheduled', k: 'lime' },
    { t: '9/10/2026 · Total Wine River Oaks, Houston, TX · On-Premise Sampling', m: '4p–8p · Aya Omar · REQ-8FL1', s: 'Pending approval', k: 'purple' },
    { t: '9/10/2026 · Publix Midtown, Atlanta, GA · Retail Sampling', m: '12p–4p · Rita Martinez · REQ-8FL5', s: 'Scheduled', k: 'lime' },
    { t: '9/10/2026 · Whole Foods Domain, Austin, TX · Retail Demo', m: '2p–6p · Priya Raman · REQ-8FM0', s: 'Scheduled', k: 'lime' }
  ] },
  { day: 'Friday, Sep 11', rows: [
    { t: '9/11/2026 · Meijer Grand Rapids, MI · Retail Sampling', m: '11a–3p · Deanna Mitchell · REQ-8FM6', s: 'Scheduled', k: 'lime' },
    { t: '9/11/2026 · Costco Cedar Park, TX · Roadshow Demo', m: '10a–5p · Thomas Lekas · REQ-8FN2', s: 'Scheduled', k: 'lime' },
    { t: '9/11/2026 · Safeway Lakeview, Chicago, IL · Retail Demo', m: '12p–4p · Sylvia Gonzalez · REQ-8FN7', s: 'Pending approval', k: 'purple' },
    { t: '9/11/2026 · The Rustic, Dallas, TX · On-Premise Sampling', m: '6p–10p · Bryanna White · REQ-8FP3', s: 'Scheduled', k: 'lime' }
  ] },
  { day: 'Saturday, Sep 12', rows: [
    { t: '9/12/2026 · Pearl Farmers Market, San Antonio, TX · Event Activation', m: '9a–1p · Jeidy Hernandez · REQ-8FP9', s: 'Scheduled', k: 'blue' },
    { t: '9/12/2026 · H-E-B Mueller, Austin, TX · Retail Sampling', m: '11a–3p · Joann Fowler · REQ-8FQ1', s: 'Scheduled', k: 'lime' },
    { t: '9/12/2026 · Kroger Bardin, Arlington, TX · Retail Demo', m: '11a–3p · Marcus Tran · REQ-8FQ4', s: 'Scheduled', k: 'lime' },
    { t: '9/12/2026 · Atlanta Beltline Pop-Up, Atlanta, GA · Event Activation', m: '12p–6p · Rita Martinez · REQ-8FQ8', s: 'Scheduled', k: 'blue' },
    { t: '9/12/2026 · Total Wine Sugar Land, TX · On-Premise Sampling', m: '3p–7p · Aya Omar · REQ-8FR2', s: 'Pending approval', k: 'purple' },
    { t: '9/12/2026 · Whole Foods Lincoln Park, Chicago, IL · Retail Demo', m: '1p–5p · Priya Raman · REQ-8FR6', s: 'Scheduled', k: 'lime' },
    { t: '9/12/2026 · Publix Buckhead, Atlanta, GA · Retail Sampling', m: '10a–2p · Deanna Mitchell · REQ-8FR9', s: 'Scheduled', k: 'lime' }
  ] },
  { day: 'Sunday, Sep 13', rows: [
    { t: '9/13/2026 · 1010 West University Ave, Georgetown, TX (H-E-B) · Retail Sampling', m: '12p–4p · Thomas Lekas · REQ-8FS3', s: 'Scheduled', k: 'lime' },
    { t: '9/13/2026 · Costco Round Rock, TX · Roadshow Demo', m: '10a–5p · Sylvia Gonzalez · REQ-8FS7', s: 'Scheduled', k: 'lime' },
    { t: '9/13/2026 · Domain Sunday Social, Austin, TX · Event Activation', m: '2p–8p · Bryanna White · REQ-8FT0', s: 'Scheduled', k: 'blue' },
    { t: '9/13/2026 · Kroger Katy, Houston, TX · Retail Demo', m: '11a–3p · Jeidy Hernandez · REQ-8FT4', s: 'Scheduled', k: 'lime' },
    { t: '9/13/2026 · Meijer Ann Arbor, MI · Retail Sampling', m: '12p–4p · Marcus Tran · REQ-8FT8', s: 'Pending approval', k: 'purple' },
    { t: '9/13/2026 · Safeway Wicker Park, Chicago, IL · Retail Demo', m: '1p–5p · Priya Raman · REQ-8FU1', s: 'Scheduled', k: 'lime' }
  ] }
];

/* archive activation photography used as recap-photo placeholders */
const PHOTOS = ['../assets/activation-white-claw-tent-3.jpg', '../assets/activation-liquid-death-street-two-hosts.jpg', '../assets/activation-feel-free-festival-cart.jpg', '../assets/activation-white-claw-tent-9.jpg', '../assets/activation-liquid-death-street-cooler.jpg', '../assets/activation-feel-free-miami-couple.jpg', '../assets/activation-white-claw-tent-5.jpg', '../assets/activation-liquid-death-festival-tent-crowd.jpg', '../assets/activation-getlyt-table.jpg', '../assets/activation-white-claw-tent-11.jpg', '../assets/activation-feel-free-street-team-two.jpg', '../assets/activation-liquid-death-street-crowd.jpg', '../assets/activation-mojo-tent-storefront.jpg', '../assets/activation-white-claw-tent-setup.jpg', '../assets/activation-feel-free-cooler-ice.jpg', '../assets/activation-liquid-death-street-ice-refill.jpg', '../assets/activation-lyt-park-table-woman.jpg', '../assets/activation-white-claw-tent-14.jpg', '../assets/activation-feel-free-festival-women.jpg', '../assets/activation-liquid-death-beach-tent.jpg'];

const RECAPS = [
  { id: 'R-9BA6', d: '9/6/2026', v: '10718 Potranco Road, San Antonio, TX 78251 (H-E-B)', ba: 'Joann Fowler', st: 'TX', ph: 8, eng: 122, sold: 41, conv: '33.6%', ap: 'Nena · 9/7/2026 04:54 AM', type: 'Retail' },
  { id: 'R-0410', d: '9/6/2026', v: '3111 Woodridge Dr, Houston, TX (H-E-B) · Retail Sampling', ba: 'Sylvia Gonzalez', st: 'TX', ph: 27, eng: 380, sold: 96, conv: '25.3%', ap: 'Nena · 9/8/2026 07:51 AM', type: 'Retail' },
  { id: 'R-4433', d: '9/6/2026', v: '8011 I-35 Frontage Rd, Austin, TX · Retail Sampling', ba: 'Thomas Lekas', st: 'TX', ph: 15, eng: 210, sold: 58, conv: '27.6%', ap: 'Nena · 9/7/2026 10:08 PM', type: 'Retail' },
  { id: 'R-8B18', d: '9/6/2026', v: 'Harry Wurzbach Road, San Antonio, TX 78209 (H-E-B)', ba: 'Joann Fowler', st: 'TX', ph: 7, eng: 136, sold: 34, conv: '25.0%', ap: 'Nena · 9/7/2026 04:52 AM', type: 'Retail' },
  { id: 'R-4049', d: '9/6/2026', v: '613 S Expressway 83, Harlingen, TX 78550 (Kroger)', ba: 'Aya Omar', st: 'TX', ph: 11, eng: 145, sold: 39, conv: '26.9%', ap: 'Nena · 9/7/2026 04:43 AM', type: 'Retail' },
  { id: 'R-8A32', d: '9/6/2026', v: '12680 West Lake Houston Parkway, Houston, TX', ba: 'Deanna Mitchell', st: 'TX', ph: 14, eng: 245, sold: 71, conv: '29.0%', ap: 'Nena · 9/7/2026 04:25 AM', type: 'Event' },
  { id: 'R-B216', d: '9/5/2026', v: '1000 East 41st Street, Austin, TX 78751 (H-E-B)', ba: 'Jeidy Hernandez', st: 'TX', ph: 4, eng: 98, sold: 22, conv: '22.4%', ap: 'Nena · 9/6/2026 10:50 AM', type: 'Retail' },
  { id: 'R-CD10', d: '9/5/2026', v: '11700 East US Highway 80, Forney, TX 75126 (Kroger)', ba: 'Bryanna White', st: 'TX', ph: 12, eng: 305, sold: 88, conv: '28.9%', ap: 'Nena · 9/6/2026 05:05 AM', type: 'Retail' },
  { id: 'R-CAF2', d: '9/5/2026', v: '6106 North Navarro Street, Victoria, TX 77904', ba: 'Rita Martinez', st: 'TX', ph: 7, eng: 112, sold: 29, conv: '25.9%', ap: 'Nena · 9/6/2026 01:08 AM', type: 'Product Seeding' },
  { id: 'R-11C4', d: '9/4/2026', v: 'Total Wine River Oaks, Houston, TX · On-Premise', ba: 'Aya Omar', st: 'TX', ph: 19, eng: 268, sold: 74, conv: '27.6%', ap: 'Nena · 9/5/2026 08:31 AM', type: 'Event' },
  { id: 'R-77D9', d: '9/4/2026', v: 'Publix Midtown, 595 Piedmont Ave NE, Atlanta, GA', ba: 'Rita Martinez', st: 'GA', ph: 9, eng: 176, sold: 52, conv: '29.5%', ap: 'Nena · 9/5/2026 06:12 AM', type: 'Retail' },
  { id: 'R-31E8', d: '9/4/2026', v: 'Whole Foods Lincoln Park, Chicago, IL · Retail Demo', ba: 'Priya Raman', st: 'IL', ph: 16, eng: 204, sold: 63, conv: '30.9%', ap: 'Nena · 9/5/2026 05:44 AM', type: 'Retail' },
  { id: 'R-6F02', d: '9/3/2026', v: 'Pearl Farmers Market, San Antonio, TX · Event Activation', ba: 'Jeidy Hernandez', st: 'TX', ph: 22, eng: 412, sold: 118, conv: '28.6%', ap: 'Nena · 9/4/2026 09:02 AM', type: 'Event' },
  { id: 'R-A5B7', d: '9/3/2026', v: 'Meijer Grand Rapids, MI · Retail Sampling', ba: 'Deanna Mitchell', st: 'MI', ph: 10, eng: 158, sold: 44, conv: '27.8%', ap: 'Nena · 9/4/2026 07:20 AM', type: 'Retail' },
  { id: 'R-D3C9', d: '9/3/2026', v: 'Safeway Lakeview, Chicago, IL · Retail Demo', ba: 'Sylvia Gonzalez', st: 'IL', ph: 13, eng: 187, sold: 51, conv: '27.3%', ap: 'Nena · 9/4/2026 06:58 AM', type: 'Retail' },
  { id: 'R-2E44', d: '9/2/2026', v: 'Costco Cedar Park, TX · Roadshow Demo', ba: 'Thomas Lekas', st: 'TX', ph: 18, eng: 336, sold: 104, conv: '31.0%', ap: 'Nena · 9/3/2026 08:14 AM', type: 'Retail' },
  { id: 'R-9C71', d: '9/2/2026', v: 'The Rustic, Dallas, TX · On-Premise Sampling', ba: 'Bryanna White', st: 'TX', ph: 15, eng: 221, sold: 68, conv: '30.8%', ap: 'Nena · 9/3/2026 07:41 AM', type: 'Event' },
  { id: 'R-58AE', d: '9/2/2026', v: 'Kroger Katy, Houston, TX · Retail Demo', ba: 'Marcus Tran', st: 'TX', ph: 6, eng: 142, sold: 37, conv: '26.1%', ap: 'Nena · 9/3/2026 05:19 AM', type: 'Retail' },
  { id: 'R-0D6B', d: '9/1/2026', v: 'Atlanta Beltline Pop-Up, Atlanta, GA · Event Activation', ba: 'Rita Martinez', st: 'GA', ph: 25, eng: 468, sold: 132, conv: '28.2%', ap: 'Nena · 9/2/2026 09:36 AM', type: 'Event' },
  { id: 'R-7A15', d: '9/1/2026', v: 'Seeding drop · 24 accounts, Austin metro', ba: 'Priya Raman', st: 'TX', ph: 5, eng: 62, sold: 18, conv: '29.0%', ap: 'Nena · 9/2/2026 06:03 AM', type: 'Product Seeding' }
];

const TRACKER = [
  { d: 'Sep 12, 2026', h: '11a–3p', s: 'Scheduled', mk: 'TX', v: 'H-E-B Mueller', rq: 'REQ-8FQ1', a: '1801 E 51st St, Austin, TX 78723', t: 'Retail Sampling', c: '—', f: '—', r: 0 },
  { d: 'Sep 12, 2026', h: '9a–1p', s: 'Scheduled', mk: 'TX', v: 'Pearl Farmers Market', rq: 'REQ-8FP9', a: '303 Pearl Pkwy, San Antonio, TX', t: 'Event Activation', c: '—', f: '—', r: 0 },
  { d: 'Sep 10, 2026', h: '4p–8p', s: 'Pending', mk: 'TX', v: 'Total Wine River Oaks', rq: 'REQ-8FL1', a: '2055 Westheimer Rd, Houston, TX', t: 'On-Premise Sampling', c: '—', f: '—', r: 0 },
  { d: 'Sep 6, 2026', h: '11a–3p', s: 'Done', mk: 'TX', v: 'H-E-B Potranco', rq: 'REQ-8DK7', a: '10718 Potranco Rd, San Antonio, TX', t: 'Retail Sampling', c: '122', f: '38', r: 1 },
  { d: 'Sep 6, 2026', h: '10a–2p', s: 'Done', mk: 'TX', v: 'H-E-B Woodridge', rq: 'REQ-8DK4', a: '3111 Woodridge Dr, Houston, TX', t: 'Retail Sampling', c: '380', f: '96', r: 1 },
  { d: 'Sep 5, 2026', h: '12p–4p', s: 'Done', mk: 'TX', v: 'Kroger Forney', rq: 'REQ-8DJ1', a: '11700 E US Highway 80, Forney, TX', t: 'Retail Demo', c: '305', f: '71', r: 1 },
  { d: 'Sep 4, 2026', h: '5p–9p', s: 'Done', mk: 'GA', v: 'Publix Midtown', rq: 'REQ-8DH8', a: '595 Piedmont Ave NE, Atlanta, GA', t: 'Retail Sampling', c: '176', f: '44', r: 1 },
  { d: 'Sep 3, 2026', h: '11a–5p', s: 'Done', mk: 'IL', v: 'Whole Foods Lincoln Park', rq: 'REQ-8DG2', a: '1550 N Kingsbury St, Chicago, IL', t: 'Retail Demo', c: '204', f: '58', r: 1 },
  { d: 'Sep 2, 2026', h: '10a–5p', s: 'Done', mk: 'TX', v: 'Costco Cedar Park', rq: 'REQ-8DF6', a: '201 Denali Pass, Cedar Park, TX', t: 'Roadshow Demo', c: '336', f: '88', r: 1 },
  { d: 'Sep 1, 2026', h: '12p–6p', s: 'Done', mk: 'GA', v: 'Atlanta Beltline Pop-Up', rq: 'REQ-8DE0', a: '112 Krog St NE, Atlanta, GA', t: 'Event Activation', c: '468', f: '141', r: 1 },
  { d: 'Aug 29, 2026', h: '11a–3p', s: 'Done', mk: 'MI', v: 'Meijer Grand Rapids', rq: 'REQ-8CX4', a: '3434 28th St SE, Grand Rapids, MI', t: 'Retail Sampling', c: '158', f: '40', r: 1 },
  { d: 'Aug 29, 2026', h: '6p–10p', s: 'Approved', mk: 'TX', v: 'The Rustic', rq: 'REQ-8CX9', a: '3656 Howell St, Dallas, TX', t: 'On-Premise Sampling', c: '221', f: '65', r: 1 },
  { d: 'Aug 22, 2026', h: '1p–5p', s: 'Done', mk: 'CA', v: 'Safeway Marina', rq: 'REQ-8CM2', a: '15 Marina Blvd, San Francisco, CA', t: 'Retail Demo', c: '192', f: '51', r: 1 },
  { d: 'Aug 15, 2026', h: '11a–2p', s: 'Approved', mk: 'TX', v: 'H-E-B Lake Houston', rq: 'REQ-8BG5', a: '12680 W Lake Houston Pkwy, Houston, TX', t: 'Event Activation', c: '245', f: '74', r: 1 }
];

const SUBMISSIONS = [
  { s: 'Sep 9, 2026 08:14 AM', id: 'REQ-8FV2', st: 'Pending', v: 'H-E-B Bee Cave', mk: 'TX', d: 'Sep 19, 2026', r: 'Dana Whitfield' },
  { s: 'Sep 9, 2026 07:02 AM', id: 'REQ-8FV0', st: 'Pending', v: 'Kroger Plano', mk: 'TX', d: 'Sep 20, 2026', r: 'Dana Whitfield' },
  { s: 'Sep 8, 2026 04:41 PM', id: 'REQ-8FU7', st: 'Approved', v: 'Total Wine Sugar Land', mk: 'TX', d: 'Sep 18, 2026', r: 'Owen Marsh' },
  { s: 'Sep 8, 2026 11:20 AM', id: 'REQ-8FU3', st: 'Scheduled', v: 'Publix Buckhead', mk: 'GA', d: 'Sep 17, 2026', r: 'Owen Marsh' },
  { s: 'Sep 7, 2026 03:58 PM', id: 'REQ-8FT9', st: 'Pending', v: 'Whole Foods Domain', mk: 'TX', d: 'Sep 21, 2026', r: 'Dana Whitfield' },
  { s: 'Sep 7, 2026 09:11 AM', id: 'REQ-8FT5', st: 'Approved', v: 'Meijer Ann Arbor', mk: 'MI', d: 'Sep 19, 2026', r: 'Lena Ortiz' },
  { s: 'Sep 5, 2026 02:34 PM', id: 'REQ-8FS8', st: 'Approved', v: 'Safeway Wicker Park', mk: 'IL', d: 'Sep 16, 2026', r: 'Lena Ortiz' },
  { s: 'Sep 4, 2026 10:05 AM', id: 'REQ-8FS1', st: 'Pending', v: 'Costco Round Rock', mk: 'TX', d: 'Sep 22, 2026', r: 'Dana Whitfield' },
  { s: 'Sep 3, 2026 05:47 PM', id: 'REQ-8FR7', st: 'Approved', v: 'H-E-B Georgetown', mk: 'TX', d: 'Sep 13, 2026', r: 'Owen Marsh' },
  { s: 'Sep 3, 2026 08:29 AM', id: 'REQ-8FR3', st: 'Pending', v: 'Kroger Katy', mk: 'TX', d: 'Sep 23, 2026', r: 'Lena Ortiz' }
];

const CAL_EVENTS = [
  { day: 1, start: 11, dur: 4, t: 'H-E-B Mueller · Retail Sampling', k: '' },
  { day: 1, start: 18, dur: 4, t: 'The Rustic · On-Premise', k: 'p' },
  { day: 2, start: 12, dur: 1, t: '9/8 · 1010 West University Ave', k: '' },
  { day: 3, start: 10, dur: 4, t: 'Kroger Bardin · Retail Demo', k: '' },
  { day: 3, start: 16, dur: 4, t: 'Riverwalk Fall Market', k: 'b' },
  { day: 4, start: 10, dur: 4, t: 'H-E-B Woodlawn Lake · Sampling', k: '' },
  { day: 4, start: 12, dur: 4, t: 'Publix Midtown · Sampling', k: '' },
  { day: 4, start: 16, dur: 4, t: 'Total Wine River Oaks', k: 'p' },
  { day: 5, start: 10, dur: 5, t: 'Costco Cedar Park · Roadshow', k: '' },
  { day: 5, start: 11, dur: 4, t: 'Meijer Grand Rapids · Sampling', k: '' },
  { day: 6, start: 9, dur: 4, t: 'Pearl Farmers Market', k: 'b' },
  { day: 6, start: 12, dur: 6, t: 'Atlanta Beltline Pop-Up', k: 'b' },
  { day: 7, start: 12, dur: 1, t: '9/13 · 1010 West University Ave', k: '' },
  { day: 7, start: 14, dur: 6, t: 'Domain Sunday Social', k: 'b' }
];

const ACCOUNTS = [
  { n: 'H-E-B Mueller', c: 'Austin, TX', s: 'visited', g: [-97.71, 30.30], st: 'TX', ch: 'H-E-B' },
  { n: 'H-E-B Woodlawn Lake', c: 'San Antonio, TX', s: 'scheduled', g: [-98.54, 29.46], st: 'TX', ch: 'H-E-B' },
  { n: 'Pearl Farmers Market', c: 'San Antonio, TX', s: 'scheduled', g: [-98.48, 29.44], st: 'TX', ch: 'Independent' },
  { n: 'Mays Family YMCA @ Potranco', c: 'San Antonio, TX', s: 'needs', g: [-98.71, 29.42], st: 'TX', ch: 'Independent' },
  { n: 'Kroger Bardin', c: 'Arlington, TX', s: 'visited', g: [-97.11, 32.66], st: 'TX', ch: 'Kroger' },
  { n: 'Total Wine River Oaks', c: 'Houston, TX', s: 'scheduled', g: [-95.42, 29.74], st: 'TX', ch: 'Total Wine' },
  { n: 'Publix Midtown', c: 'Atlanta, GA', s: 'visited', g: [-84.38, 33.78], st: 'GA', ch: 'Publix' },
  { n: 'Whole Foods Lincoln Park', c: 'Chicago, IL', s: 'needs', g: [-87.65, 41.91], st: 'IL', ch: 'Whole Foods' },
  { n: 'Costco Cedar Park', c: 'Cedar Park, TX', s: 'visited', g: [-97.82, 30.51], st: 'TX', ch: 'Costco' },
  { n: 'Meijer Grand Rapids', c: 'Grand Rapids, MI', s: 'scheduled', g: [-85.60, 42.91], st: 'MI', ch: 'Meijer' },
  { n: 'Safeway Lakeview', c: 'Chicago, IL', s: 'needs', g: [-87.64, 41.94], st: 'IL', ch: 'Safeway' },
  { n: 'The Rustic', c: 'Dallas, TX', s: 'scheduled', g: [-96.80, 32.80], st: 'TX', ch: 'Independent' }
];

const PENDING_REQS = [
  { id: 'REQ-8FV2', v: 'H-E-B Bee Cave · 12611 Shops Pkwy, Bee Cave, TX', d: 'Fri, Sep 19 · 11a–3p', t: 'Retail Sampling', r: 'Dana Whitfield · RMM Austin', sk: 'Citrus Rush, Black Cherry', n: 'Store manager asked for a second table near the endcap.' },
  { id: 'REQ-8FV0', v: 'Kroger Plano · 3305 Dallas Pkwy, Plano, TX', d: 'Sat, Sep 20 · 12p–4p', t: 'Retail Demo', r: 'Dana Whitfield · RMM Austin', sk: 'Peach Fizz, Wild Lime', n: 'Paired with a $2-off shelf coupon running that week.' },
  { id: 'REQ-8FT9', v: 'Whole Foods Domain · 11920 Domain Blvd, Austin, TX', d: 'Sun, Sep 21 · 1p–5p', t: 'Retail Demo', r: 'Dana Whitfield · RMM Austin', sk: 'Blood Orange', n: 'New distribution — first demo since the reset.' },
  { id: 'REQ-8FS1', v: 'Costco Round Rock · 2801 N I-35, Round Rock, TX', d: 'Mon, Sep 22 · 10a–5p', t: 'Roadshow Demo', r: 'Lena Ortiz · RMM South', sk: 'Full line', n: 'Seven-hour roadshow; needs two BAs and a cooler.' },
  { id: 'REQ-8FR3', v: 'Kroger Katy · 1712 Mason Rd, Katy, TX', d: 'Wed, Sep 23 · 11a–3p', t: 'Retail Demo', r: 'Lena Ortiz · RMM South', sk: 'Citrus Rush, Mango Surge', n: 'Requested the same BA as the August demo.' }
];
const PENDING_RECAPS = [
  { id: 'R-F19C', v: 'Kroger Bardin · Arlington, TX', ba: 'Marcus Tran', d: 'Sep 8, 2026', ph: 12, eng: 168, sold: 47 },
  { id: 'R-E220', v: 'H-E-B Georgetown · Georgetown, TX', ba: 'Thomas Lekas', d: 'Sep 8, 2026', ph: 9, eng: 131, sold: 33 },
  { id: 'R-D884', v: 'Publix Buckhead · Atlanta, GA', ba: 'Rita Martinez', d: 'Sep 7, 2026', ph: 16, eng: 204, sold: 62 }
];

const REPORTS = {
  weeks: ['Jun 15', 'Jun 22', 'Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Aug 3', 'Aug 10', 'Aug 17', 'Aug 24', 'Aug 31'],
  requests: [12, 15, 9, 18, 22, 17, 25, 19, 28, 24, 31, 26],
  consumers: [1320, 1580, 1140, 1890, 2240, 1760, 2510, 1980, 2860, 2410, 3120, 2640],
  mix: [['Retail Demo', 58, 'var(--lime)'], ['On-Premise Sampling', 22, 'var(--purple)'], ['Event Activation', 14, 'var(--blue)'], ['Product Seeding', 6, 'var(--orange)']],
  topRetailers: [['H-E-B', 6420], ['Kroger', 4180], ['Total Wine', 3240], ['Publix', 2710], ['Whole Foods', 2180], ['Costco', 1840], ['Meijer', 1120], ['Safeway', 796]],
  exports: [
    ['Brand performance', 'Monthly brand recap', 'PDF · Email', 'Daily', 'lime'],
    ['Market & RMM', '$/Sample by market', 'CSV · Sheets', 'Weekly', 'blue'],
    ['Brand performance', 'Per-SKU performance', 'CSV', 'Weekly', 'blue'],
    ['Financial', 'Payroll summary', 'CSV', 'Weekly', 'blue'],
    ['Operations', 'Activation pipeline', 'PDF', 'Daily', 'lime'],
    ['Market & RMM', 'RMM scorecard', 'PDF · Slack', 'Weekly', 'blue']
  ]
};

const FIELD = {
  windows: { 'This week': { sph: '41.6', win: 1872, hrs: '45.3', ytd: 18204, sku: [612, 498, 402, 360], label: 'Sep 3 – Sep 9' }, 'Last 4 weeks': { sph: '38.9', win: 7104, hrs: '182.6', ytd: 18204, sku: [2340, 1908, 1596, 1260], label: 'Aug 13 – Sep 9' }, 'Last 8 weeks': { sph: '36.2', win: 13480, hrs: '372.4', ytd: 18204, sku: [4410, 3620, 3040, 2410], label: 'Jul 16 – Sep 9' } },
  ytdSku: [6842, 5120, 3988, 2254],
  skuNames: ['Citrus Rush', 'Black Cherry', 'Peach Fizz', 'Blood Orange'],
  stops: [
    ['Austin, TX', 'H-E-B Mueller · Sep 8', 214, '4.0 hrs'],
    ['Austin, TX', 'Whole Foods Domain · Sep 7', 168, '4.0 hrs'],
    ['San Antonio, TX', 'Pearl Farmers Market · Sep 6', 402, '6.0 hrs'],
    ['San Antonio, TX', 'H-E-B Potranco · Sep 6', 122, '4.0 hrs'],
    ['Houston, TX', 'H-E-B Woodridge · Sep 6', 380, '5.5 hrs'],
    ['Dallas, TX', 'The Rustic · Sep 5', 221, '4.0 hrs'],
    ['Atlanta, GA', 'Publix Midtown · Sep 4', 176, '4.0 hrs'],
    ['Chicago, IL', 'Whole Foods Lincoln Park · Sep 3', 189, '5.5 hrs']
  ],
  coming: [
    ['Thu, Sep 10', 'H-E-B Woodlawn Lake · San Antonio, TX', '10a–2p', 'Joann Fowler'],
    ['Fri, Sep 11', 'Costco Cedar Park · Cedar Park, TX', '10a–5p', 'Thomas Lekas'],
    ['Sat, Sep 12', 'Pearl Farmers Market · San Antonio, TX', '9a–1p', 'Jeidy Hernandez'],
    ['Sat, Sep 12', 'Atlanta Beltline Pop-Up · Atlanta, GA', '12p–6p', 'Rita Martinez'],
    ['Sun, Sep 13', 'Domain Sunday Social · Austin, TX', '2p–8p', 'Bryanna White']
  ],
  notes: [
    ['H-E-B Mueller · Austin, TX', 'Sep 8', 'Citrus Rush moved fastest — we ran out of the 12oz cups by 1pm. Shoppers kept asking whether it was sweetened; the "no added sugar" callout on the tent card did most of the selling for me.'],
    ['Whole Foods Domain · Austin, TX', 'Sep 7', 'Endcap was reset two aisles over from where the planogram says. Took photos. Still hit 168 samples with the cooler by the entrance.'],
    ['Pearl Farmers Market · San Antonio, TX', 'Sep 6', 'Heaviest traffic of the month. Blood Orange was the crowd favorite, Peach Fizz second. Several people asked where to buy — pointed them to the H-E-B two blocks over.'],
    ['H-E-B Potranco · San Antonio, TX', 'Sep 6', 'Slow first hour, picked up after 12. Two shoppers mentioned they saw the brand at the Beltline pop-up in Atlanta while traveling.'],
    ['The Rustic · Dallas, TX', 'Sep 5', 'Bar staff pushed the Wild Lime as a mixer all night. Manager wants a second night next month and asked about branded coasters.'],
    ['Publix Midtown · Atlanta, GA', 'Sep 4', 'Cranberry-style tartness came up a lot — a few people found Blood Orange too tart, most liked it. Coupons went fast.'],
    ['Whole Foods Lincoln Park · Chicago, IL', 'Sep 3', 'Shelf was down to two facings of Citrus Rush when I arrived; flagged to the grocery lead. Out-of-stock cost us maybe 40 samples.'],
    ['Kroger Forney · Forney, TX', 'Sep 2', 'Great location right past produce. Family traffic all afternoon; kids liked Peach Fizz, parents bought Citrus Rush.']
  ]
};

const ANNOUNCEMENTS = [
  ['Program', 'Sep 8, 2026', 'Fall reset kits are shipping', 'New tent cards, tablecloths, and the updated "no added sugar" callout ship to all 14 markets this week. Kits arrive before the Sep 19 wave — confirm receipt in the app so we can chase anything lost in transit.'],
  ['Reporting', 'Sep 3, 2026', 'Per-SKU performance export is live', 'You can now schedule a weekly CSV that breaks samples, sales, and conversion out by SKU and market. Find it under Reports → Scheduled exports.'],
  ['Field', 'Aug 27, 2026', 'Photo minimum is now 6 per recap', 'Six photos minimum, at least one wide shot of the table and one of the shelf. Recaps below the minimum get bounced back to the BA automatically.']
];
const INBOX = [
  ['Dana Whitfield · RMM Austin', 'Sep 9, 2026 08:22 AM', 'Re: Bee Cave request', 'Store wants us on the endcap instead of the front lobby. Approving as-is unless you object by Thursday.', 1],
  ['Owen Marsh · RMM Southeast', 'Sep 8, 2026 04:50 PM', 'Publix Buckhead recap', 'Uploaded — 16 photos, 204 engagements. Coupons ran out an hour early, might want to double the drop next time.', 1],
  ['Lena Ortiz · RMM South', 'Sep 7, 2026 11:04 AM', 'Costco roadshow staffing', 'Need a second BA for the Sep 22 roadshow. I have Thomas confirmed, looking for one more in Round Rock.', 0],
  ['Spark Support', 'Sep 5, 2026 09:15 AM', 'Your bulk upload processed', '38 of 38 rows written, no validation errors. Nice file.', 0]
];
const ALERTS = [
  ['orange', 'Sep 9, 2026', 'Out-of-stock flagged', 'Whole Foods Lincoln Park reported two facings of Citrus Rush at arrival. Third OOS flag at this account in 30 days.'],
  ['lime', 'Sep 9, 2026', '5 requests awaiting your approval', 'Oldest is 2 days old (REQ-8FS1, Costco Round Rock). Approvals older than 4 days auto-escalate to your RMM.'],
  ['blue', 'Sep 8, 2026', 'Clock-in missing', 'Sep 8 shift at 1010 West University Ave has no clock-out pair — scheduled duration was used for hours in the Field Sampling Report.']
];
