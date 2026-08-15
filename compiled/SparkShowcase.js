(function(){if (typeof window !== "undefined" && window.CoverageMap) return;
/* Live Spark dashboard — clickable marketing demo */
const {
  useState: shState,
  useEffect: shEffect,
  useRef: shRef
} = React;
const GH = "https://kyle915.github.io/ignite-webflow-assets/assets/";
const WF = "https://cdn.prod.website-files.com/688129f3841088c282c32750/";
const IMG = {
  ldNascar: GH + "experiential-liquiddeath-nascar.jpg",
  ldPet: GH + "sampling-liquid-death-petsmart.jpg",
  ldAcl: GH + "staffing-liquid-death-acl.jpg",
  ldMiami: GH + "street-team-liquid-death-miami.jpg",
  ldDorm: GH + "collegiate-5-liquid-death-dorm.jpg",
  wcBar: GH + "on-premise-white-claw-bar.jpg",
  wcAustin: WF + "68962cc2d0a6bcf7ced84e53_WHITECLAW96_05_27_2025_Adia_Oshikoya_84db346d-29fd-6179-d310-6927f656bdca_0.jpg",
  smalls: WF + "68962c63c89c6cf0f46a6b66_SMALLS93_11_15_2024_Eva_Rowin_06080ec4-0c97-5fdb-74ec-ed3d6cd749a5_0.jpg",
  ldWeb: WF + "6882bb7581d3d94867693919_liquid-death.webp",
  mas: WF + "688ce54c92fd540e9bdf283a_3.png",
  dude: GH + "staffing-unfck-your-feet-team.jpg"
};
const MAP_W = 1000,
  MAP_H = 560;
const projX = lng => (lng + 125) / 59 * MAP_W;
const projY = lat => (49.5 - lat) / 25.5 * MAP_H;
const US_BORDER = [[-124.6, 48.4], [-123.0, 49.0], [-104.0, 49.0], [-95.2, 49.0], [-95.0, 49.4], [-94.6, 48.5], [-89.5, 48.0], [-88.0, 46.8], [-84.9, 46.5], [-83.4, 45.9], [-82.5, 44.0], [-82.9, 42.3], [-80.5, 42.3], [-79.0, 43.3], [-76.5, 43.6], [-74.9, 45.0], [-71.5, 45.0], [-69.2, 47.4], [-67.0, 44.8], [-70.2, 43.6], [-70.9, 42.3], [-71.9, 41.3], [-73.0, 40.9], [-74.0, 40.5], [-74.4, 39.4], [-75.5, 38.4], [-76.0, 37.0], [-75.6, 35.2], [-78.5, 33.9], [-80.9, 32.0], [-81.4, 30.7], [-80.1, 26.8], [-80.4, 25.2], [-81.8, 24.6], [-82.7, 27.8], [-83.7, 29.9], [-84.4, 30.0], [-88.0, 30.3], [-89.5, 29.1], [-91.5, 29.5], [-93.8, 29.7], [-97.0, 27.8], [-97.2, 26.0], [-99.2, 26.4], [-101.4, 29.8], [-102.6, 29.8], [-103.0, 29.0], [-104.9, 30.6], [-106.5, 31.8], [-108.2, 31.3], [-111.1, 31.3], [-114.8, 32.5], [-117.1, 32.5], [-118.4, 34.0], [-120.6, 34.5], [-121.9, 36.6], [-122.5, 37.8], [-124.0, 40.4], [-124.2, 43.3], [-124.1, 46.3]];
const US_PATH = US_BORDER.map((p, i) => (i ? "L" : "M") + projX(p[0]).toFixed(1) + "," + projY(p[1]).toFixed(1)).join(" ") + " Z";
const VIEWS = [{
  id: "map",
  label: "Map"
}, {
  id: "activity",
  label: "Activity"
}, {
  id: "recaps",
  label: "Recaps"
}, {
  id: "ambassadors",
  label: "Ambassadors"
}, {
  id: "requests",
  label: "Requests"
}];
const PROGRAMS = [{
  id: "ld",
  name: "Northline / Q2 Tour",
  short: "Northline",
  kpis: {
    samples: 1842,
    onsite: 38,
    events: 9,
    ontime: 94,
    delta: "+18%"
  },
  bars: [42, 58, 51, 66, 74, 61, 88, 79, 93, 71, 84, 97, 90, 76, 94, 100, 86, 91],
  broadcast: {
    src: IMG.ldNascar,
    label: "NORTHLINE · LOS ANGELES"
  },
  cities: [{
    name: "SAN FRANCISCO",
    lat: 37.77,
    lng: -122.42,
    samples: 522,
    leads: 96,
    status: "LIVE",
    venue: "Mission Dolores Park"
  }, {
    name: "DENVER",
    lat: 39.74,
    lng: -104.99,
    samples: 346,
    leads: 71,
    status: "LIVE",
    venue: "RiNo Beer Garden"
  }, {
    name: "DETROIT",
    lat: 42.33,
    lng: -83.05,
    samples: 244,
    leads: 42,
    status: "ACTIVE",
    venue: "Eastern Market"
  }, {
    name: "BROOKLYN",
    lat: 40.65,
    lng: -73.95,
    samples: 586,
    leads: 124,
    status: "LIVE",
    venue: "Domino Park"
  }],
  activity: [{
    t: "09:14",
    place: "BROOKLYN, NY",
    status: "checked-in",
    fg: "var(--spark-500)",
    who: "Marisol Vega",
    detail: "GPS lock · Domino Park south lawn"
  }, {
    t: "09:12",
    place: "SAN FRANCISCO, CA",
    status: "on-site",
    fg: "var(--spark-500)",
    who: "Keon Bridges",
    detail: "Setup complete · 4-person crew"
  }, {
    t: "09:08",
    place: "DENVER, CO",
    status: "setup",
    fg: "var(--ember-500)",
    who: "Riley Voss",
    detail: "Coolers staged, waiting on ice"
  }, {
    t: "08:56",
    place: "DETROIT, MI",
    status: "dispatched",
    fg: "var(--fg-2)",
    who: "Deshawn Cole",
    detail: "En route · 14 min out"
  }, {
    t: "08:44",
    place: "BROOKLYN, NY",
    status: "photo upload",
    fg: "var(--info)",
    who: "Marisol Vega",
    detail: "12 photos · core tallboy"
  }, {
    t: "08:21",
    place: "SAN FRANCISCO, CA",
    status: "recap sent",
    fg: "var(--success)",
    who: "Keon Bridges",
    detail: "Yesterday's Mission recap shipped"
  }],
  recaps: [{
    id: "ld-1",
    market: "Brooklyn, NY",
    venue: "Domino Park",
    date: "Aug 13",
    samples: 586,
    leads: 124,
    status: "Ready",
    photos: [IMG.ldMiami, IMG.ldNascar, IMG.ldWeb],
    note: "Line held past 6pm. Core tallboy moved fastest. Two store managers asked for a restock window."
  }, {
    id: "ld-2",
    market: "San Francisco, CA",
    venue: "Mission Dolores Park",
    date: "Aug 12",
    samples: 522,
    leads: 96,
    status: "Ready",
    photos: [IMG.ldPet, IMG.ldDorm],
    note: "College crowd, high dwell. Unflavored still outpaced flavored SKUs 3:2."
  }, {
    id: "ld-3",
    market: "Denver, CO",
    venue: "RiNo Beer Garden",
    date: "Aug 11",
    samples: 346,
    leads: 71,
    status: "Draft",
    photos: [IMG.ldAcl],
    note: "Weather delay 40 minutes. Still beat goal once the sun came back."
  }],
  ambassadors: [{
    id: "a1",
    name: "Marisol Vega",
    market: "Brooklyn",
    rating: 4.9,
    shifts: 27,
    status: "On site",
    certs: ["TIPS", "Food handler"]
  }, {
    id: "a2",
    name: "Keon Bridges",
    market: "San Francisco",
    rating: 4.8,
    shifts: 19,
    status: "On site",
    certs: ["TIPS"]
  }, {
    id: "a3",
    name: "Riley Voss",
    market: "Denver",
    rating: 4.7,
    shifts: 14,
    status: "Setup",
    certs: ["TIPS", "Forklift"]
  }, {
    id: "a4",
    name: "Deshawn Cole",
    market: "Detroit",
    rating: 4.8,
    shifts: 22,
    status: "En route",
    certs: ["TIPS"]
  }],
  requests: [{
    id: "r1",
    title: "Domino Park Saturday takeover",
    market: "Brooklyn",
    when: "Aug 16 · 12–8",
    status: "Staffed",
    type: "Street sampling"
  }, {
    id: "r2",
    title: "Pet retailer aisle demo",
    market: "San Francisco",
    when: "Aug 18 · 10–4",
    status: "Needs 1 BA",
    type: "Retail demo"
  }, {
    id: "r3",
    title: "RiNo after-dark popup",
    market: "Denver",
    when: "Aug 22 · 4–10",
    status: "New",
    type: "Experiential"
  }]
}, {
  id: "wc",
  name: "Tidewater / Retail Demos",
  short: "Tidewater",
  kpis: {
    samples: 1264,
    onsite: 31,
    events: 7,
    ontime: 91,
    delta: "+11%"
  },
  bars: [36, 44, 48, 55, 62, 58, 70, 66, 78, 74, 81, 76, 88, 82, 90, 86, 93, 89],
  broadcast: {
    src: IMG.wcAustin,
    label: "TIDEWATER · AUSTIN"
  },
  cities: [{
    name: "SEATTLE",
    lat: 47.61,
    lng: -122.33,
    samples: 412,
    leads: 78,
    status: "ACTIVE",
    venue: "Ballard Farmers"
  }, {
    name: "AUSTIN",
    lat: 30.27,
    lng: -97.74,
    samples: 327,
    leads: 68,
    status: "LIVE",
    venue: "The Mohawk Patio"
  }, {
    name: "NASHVILLE",
    lat: 36.16,
    lng: -86.78,
    samples: 218,
    leads: 36,
    status: "ACTIVE",
    venue: "12 South Kroger"
  }, {
    name: "BOSTON",
    lat: 42.36,
    lng: -71.06,
    samples: 358,
    leads: 72,
    status: "ACTIVE",
    venue: "Seaport Total Wine"
  }],
  activity: [{
    t: "09:18",
    place: "AUSTIN, TX",
    status: "checked-in",
    fg: "var(--spark-500)",
    who: "Adia Oshikoya",
    detail: "GPS lock · The Mohawk Patio"
  }, {
    t: "09:06",
    place: "BOSTON, MA",
    status: "on-site",
    fg: "var(--spark-500)",
    who: "Theo Markham",
    detail: "ID checks running, 2 pourers"
  }, {
    t: "08:59",
    place: "SEATTLE, WA",
    status: "setup",
    fg: "var(--ember-500)",
    who: "Camila Ortiz",
    detail: "Table set, waiting on ice delivery"
  }, {
    t: "08:41",
    place: "NASHVILLE, TN",
    status: "photo upload",
    fg: "var(--info)",
    who: "Natalia Cruz",
    detail: "Endcap before/after"
  }, {
    t: "08:22",
    place: "AUSTIN, TX",
    status: "recap sent",
    fg: "var(--success)",
    who: "Adia Oshikoya",
    detail: "SXSW Saturday recap in inbox"
  }],
  recaps: [{
    id: "wc-1",
    market: "Austin, TX",
    venue: "The Mohawk Patio",
    date: "Aug 13",
    samples: 327,
    leads: 68,
    status: "Ready",
    photos: [IMG.wcAustin, IMG.wcBar],
    note: "Surge after 3pm. Watermelon and Black Cherry emptied first. Zero ID incidents."
  }, {
    id: "wc-2",
    market: "Boston, MA",
    venue: "Seaport Total Wine",
    date: "Aug 12",
    samples: 358,
    leads: 72,
    status: "Ready",
    photos: [IMG.wcBar],
    note: "Retail conversion 22%. Manager asked to extend the weekend set."
  }, {
    id: "wc-3",
    market: "Seattle, WA",
    venue: "Ballard Farmers",
    date: "Aug 10",
    samples: 412,
    leads: 78,
    status: "Ready",
    photos: [IMG.wcAustin],
    note: "Outdoor, cool weather. Still beat the sample plan by 40 units."
  }],
  ambassadors: [{
    id: "a5",
    name: "Adia Oshikoya",
    market: "Austin",
    rating: 5.0,
    shifts: 34,
    status: "On site",
    certs: ["TABC", "TIPS"]
  }, {
    id: "a6",
    name: "Theo Markham",
    market: "Boston",
    rating: 4.8,
    shifts: 16,
    status: "On site",
    certs: ["TIPS"]
  }, {
    id: "a7",
    name: "Camila Ortiz",
    market: "Seattle",
    rating: 4.7,
    shifts: 21,
    status: "Setup",
    certs: ["MAST"]
  }, {
    id: "a8",
    name: "Natalia Cruz",
    market: "Nashville",
    rating: 4.9,
    shifts: 18,
    status: "Photo",
    certs: ["TIPS"]
  }],
  requests: [{
    id: "r4",
    title: "Kroger 12 South weekend",
    market: "Nashville",
    when: "Aug 16–17",
    status: "Staffed",
    type: "Retail demo"
  }, {
    id: "r5",
    title: "Total Wine Seaport",
    market: "Boston",
    when: "Aug 20 · 1–7",
    status: "Approved",
    type: "On-premise"
  }, {
    id: "r6",
    title: "Mohawk Thursday encore",
    market: "Austin",
    when: "Aug 21 · 4–10",
    status: "New",
    type: "Street sampling"
  }]
}, {
  id: "ma",
  name: "Harbor & Co / Sampling",
  short: "Harbor & Co",
  kpis: {
    samples: 968,
    onsite: 24,
    events: 5,
    ontime: 89,
    delta: "+7%"
  },
  bars: [28, 34, 40, 38, 46, 52, 49, 58, 61, 55, 64, 70, 68, 74, 72, 78, 76, 82],
  broadcast: {
    src: IMG.mas,
    label: "HARBOR & CO · MIAMI"
  },
  cities: [{
    name: "MIAMI",
    lat: 25.76,
    lng: -80.19,
    samples: 504,
    leads: 102,
    status: "LIVE",
    venue: "Wynwood Walls"
  }, {
    name: "PHOENIX",
    lat: 33.45,
    lng: -112.07,
    samples: 184,
    leads: 38,
    status: "ACTIVE",
    venue: "Scottsdale Quarter"
  }, {
    name: "DALLAS",
    lat: 32.78,
    lng: -96.80,
    samples: 280,
    leads: 51,
    status: "ACTIVE",
    venue: "Klyde Warren Park"
  }],
  activity: [{
    t: "09:11",
    place: "MIAMI, FL",
    status: "checked-in",
    fg: "var(--spark-500)",
    who: "Priya Nandakumar",
    detail: "Bilingual crew · Wynwood"
  }, {
    t: "08:54",
    place: "DALLAS, TX",
    status: "on-site",
    fg: "var(--spark-500)",
    who: "Eva Rowin",
    detail: "First pour logged"
  }, {
    t: "08:33",
    place: "PHOENIX, AZ",
    status: "dispatched",
    fg: "var(--fg-2)",
    who: "Jonah Pell",
    detail: "Heat delay, new start 10:30"
  }],
  recaps: [{
    id: "ma-1",
    market: "Miami, FL",
    venue: "Wynwood Walls",
    date: "Aug 13",
    samples: 504,
    leads: 102,
    status: "Ready",
    photos: [IMG.mas],
    note: "Spanish-first script converted. 41% of opt-ins came from the bilingual lane."
  }, {
    id: "ma-2",
    market: "Dallas, TX",
    venue: "Klyde Warren Park",
    date: "Aug 11",
    samples: 280,
    leads: 51,
    status: "Ready",
    photos: [IMG.smalls],
    note: "Lunch rush carried the day. Asked for a Friday repeat."
  }],
  ambassadors: [{
    id: "a9",
    name: "Priya Nandakumar",
    market: "Miami",
    rating: 4.9,
    shifts: 25,
    status: "On site",
    certs: ["TIPS", "Bilingual"]
  }, {
    id: "a10",
    name: "Eva Rowin",
    market: "Dallas",
    rating: 4.8,
    shifts: 12,
    status: "On site",
    certs: ["TABC"]
  }, {
    id: "a11",
    name: "Jonah Pell",
    market: "Phoenix",
    rating: 4.6,
    shifts: 9,
    status: "En route",
    certs: ["TIPS"]
  }],
  requests: [{
    id: "r7",
    title: "Wynwood weekend pair",
    market: "Miami",
    when: "Aug 16–17",
    status: "Staffed",
    type: "Street sampling"
  }, {
    id: "r8",
    title: "Scottsdale Quarter",
    market: "Phoenix",
    when: "Aug 23 · 11–5",
    status: "Needs 2 BAs",
    type: "Retail demo"
  }]
}, {
  id: "dw",
  name: "Ridge Supply / Festivals",
  short: "Ridge Supply",
  kpis: {
    samples: 2106,
    onsite: 49,
    events: 4,
    ontime: 96,
    delta: "+22%"
  },
  bars: [50, 62, 58, 70, 77, 81, 74, 88, 92, 85, 94, 90, 97, 93, 100, 96, 98, 95],
  broadcast: {
    src: IMG.dude,
    label: "RIDGE SUPPLY · LOS ANGELES"
  },
  cities: [{
    name: "LOS ANGELES",
    lat: 34.05,
    lng: -118.24,
    samples: 638,
    leads: 112,
    status: "LIVE",
    venue: "The Grove lawn"
  }, {
    name: "DC",
    lat: 38.90,
    lng: -77.04,
    samples: 312,
    leads: 64,
    status: "ACTIVE",
    venue: "Navy Yard"
  }, {
    name: "CHICAGO",
    lat: 41.88,
    lng: -87.63,
    samples: 432,
    leads: 88,
    status: "LIVE",
    venue: "Grant Park"
  }, {
    name: "ATLANTA",
    lat: 33.75,
    lng: -84.39,
    samples: 296,
    leads: 49,
    status: "ACTIVE",
    venue: "Piedmont Park"
  }],
  activity: [{
    t: "09:16",
    place: "LOS ANGELES, CA",
    status: "checked-in",
    fg: "var(--spark-500)",
    who: "Harris Lang",
    detail: "Festival gate open, 8 on the pad"
  }, {
    t: "09:02",
    place: "CHICAGO, IL",
    status: "on-site",
    fg: "var(--spark-500)",
    who: "Madi Cole",
    detail: "Photo op live"
  }, {
    t: "08:47",
    place: "DC",
    status: "setup",
    fg: "var(--ember-500)",
    who: "Baesha Quinn",
    detail: "Tent up, waiting on freight"
  }, {
    t: "08:19",
    place: "ATLANTA, GA",
    status: "recap sent",
    fg: "var(--success)",
    who: "Junior Hale",
    detail: "Piedmont Saturday recap"
  }],
  recaps: [{
    id: "dw-1",
    market: "Los Angeles, CA",
    venue: "The Grove lawn",
    date: "Aug 13",
    samples: 638,
    leads: 112,
    status: "Ready",
    photos: [IMG.dude],
    note: "Highest sample hour of the tour (214 between 2–3pm). Kit restocked twice."
  }, {
    id: "dw-2",
    market: "Chicago, IL",
    venue: "Grant Park",
    date: "Aug 12",
    samples: 432,
    leads: 88,
    status: "Ready",
    photos: [IMG.dude, IMG.ldAcl],
    note: "Humidity didn't kill dwell. QR scan-to-coupon hit 19%."
  }],
  ambassadors: [{
    id: "a12",
    name: "Harris Lang",
    market: "Los Angeles",
    rating: 4.9,
    shifts: 31,
    status: "On site",
    certs: ["Festival", "Captain"]
  }, {
    id: "a13",
    name: "Madi Cole",
    market: "Chicago",
    rating: 4.8,
    shifts: 17,
    status: "On site",
    certs: ["Festival"]
  }, {
    id: "a14",
    name: "Baesha Quinn",
    market: "DC",
    rating: 4.7,
    shifts: 11,
    status: "Setup",
    certs: ["Festival"]
  }, {
    id: "a15",
    name: "Junior Hale",
    market: "Atlanta",
    rating: 4.8,
    shifts: 20,
    status: "Off",
    certs: ["Festival", "Captain"]
  }],
  requests: [{
    id: "r9",
    title: "Lollapalooza pad B",
    market: "Chicago",
    when: "Aug 17–18",
    status: "Staffed",
    type: "Festival"
  }, {
    id: "r10",
    title: "Grove Sunday encore",
    market: "Los Angeles",
    when: "Aug 17 · 11–7",
    status: "Approved",
    type: "Experiential"
  }]
}];
const STATUS_TONE = {
  Ready: {
    fg: "var(--success)",
    bg: "rgba(107,228,134,0.12)",
    br: "rgba(107,228,134,0.3)"
  },
  Draft: {
    fg: "var(--ember-500)",
    bg: "rgba(255,182,39,0.12)",
    br: "rgba(255,182,39,0.3)"
  },
  Staffed: {
    fg: "var(--spark-500)",
    bg: "rgba(214,243,95,0.12)",
    br: "rgba(214,243,95,0.3)"
  },
  Approved: {
    fg: "var(--info)",
    bg: "rgba(90,184,255,0.12)",
    br: "rgba(90,184,255,0.3)"
  },
  New: {
    fg: "var(--fg-2)",
    bg: "var(--ink-300)",
    br: "var(--ink-400)"
  },
  "Needs 1 BA": {
    fg: "var(--ember-500)",
    bg: "rgba(255,182,39,0.12)",
    br: "rgba(255,182,39,0.3)"
  },
  "Needs 2 BAs": {
    fg: "var(--ember-500)",
    bg: "rgba(255,182,39,0.12)",
    br: "rgba(255,182,39,0.3)"
  }
};
const SparkDemoStyles = () => /*#__PURE__*/React.createElement("style", null, `
    @keyframes radar {
      0% { transform: translate(-50%,-50%) scale(1); opacity: 0.9; }
      100% { transform: translate(-50%,-50%) scale(4.4); opacity: 0; }
    }
    @keyframes sp-pop {
      0% { opacity: 0; transform: translateX(-50%) translateY(6px); }
      100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes sp-pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.8); }
    }
    @keyframes spk-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .spk-shell {
      background: linear-gradient(180deg, #14161B 0%, #0F1115 100%);
      border: 1px solid var(--ink-400);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 40px 120px rgba(0,0,0,0.6);
      position: relative;
    }
    .spk-shell.is-full {
      position: fixed; inset: 16px; z-index: 80;
      border-radius: 16px;
      display: flex; flex-direction: column;
    }
    .spk-shell.is-full .spk-body { flex: 1; min-height: 0; }
    .spk-shell.is-standalone {
      height: 100%;
      display: flex; flex-direction: column;
    }
    .spk-shell.is-standalone .spk-body { flex: 1; min-height: 0; }
    .spk-side-block {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .spk-chrome {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 20px; border-bottom: 1px solid var(--ink-400);
      background: rgba(255,255,255,0.02);
    }
    .spk-body {
      display: grid;
      grid-template-columns: 240px minmax(0, 1fr);
      min-height: 560px;
    }
    .spk-side {
      border-right: 1px solid var(--ink-400);
      padding: 20px;
      display: flex; flex-direction: column; gap: 4px;
      background: rgba(0,0,0,0.15);
    }
    .spk-nav {
      display: block; width: 100%; text-align: left;
      padding: 10px 12px; border-radius: 8px;
      background: transparent; border: 1px solid transparent;
      color: var(--fg-2); font-size: 13px; font-weight: 400;
      font-family: inherit; cursor: pointer;
      display: flex; align-items: center; gap: 8px;
      transition: background 160ms var(--ease-out), border-color 160ms var(--ease-out), color 160ms var(--ease-out), transform 120ms var(--ease-out);
    }
    .spk-nav:hover { background: rgba(255,255,255,0.04); color: var(--fg-1); }
    .spk-nav:focus-visible { outline: 2px solid var(--spark-500); outline-offset: 2px; }
    .spk-nav.is-on {
      background: rgba(214,243,95,0.1);
      border-color: rgba(214,243,95,0.3);
      color: var(--spark-500); font-weight: 600;
    }
    .spk-nav:active { transform: scale(0.98); }
    .spk-nav.compact { padding: 8px 12px; }
    .spk-main { padding: 24px; min-width: 0; position: relative; }
    .spk-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
    .spk-split { display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; }
    .spk-card {
      background: var(--ink-100);
      border: 1px solid var(--ink-400);
      border-radius: 12px;
      padding: 16px;
    }
    .spk-row {
      display: grid; align-items: center; gap: 16px;
      width: 100%; text-align: left;
      padding: 10px 12px; border-radius: 8px;
      background: transparent; border: 1px solid transparent;
      color: inherit; font-family: inherit; cursor: pointer;
      transition: background 160ms, border-color 160ms;
    }
    .spk-row:hover, .spk-row.is-on {
      background: rgba(214,243,95,0.08);
      border-color: rgba(214,243,95,0.25);
    }
    .spk-row:focus-visible { outline: 2px solid var(--spark-500); outline-offset: 2px; }
    .spk-chip {
      display: inline-flex; align-items: center;
      padding: 3px 8px; border-radius: 999px;
      font-family: var(--font-mono); font-size: 9px;
      letter-spacing: 0.14em; text-transform: uppercase;
    }
    .spk-iconbtn {
      background: transparent; border: 1px solid var(--ink-400);
      color: var(--fg-2); border-radius: 8px;
      padding: 6px 10px; cursor: pointer;
      font-family: var(--font-mono); font-size: 10px;
      letter-spacing: 0.14em; text-transform: uppercase;
      transition: border-color 160ms, color 160ms, transform 120ms;
    }
    .spk-iconbtn:hover { border-color: var(--spark-500); color: var(--spark-500); }
    .spk-iconbtn:active { transform: scale(0.98); }
    .spk-iconbtn:focus-visible { outline: 2px solid var(--spark-500); outline-offset: 2px; }
    .spk-drawer {
      position: absolute; top: 0; right: 0; bottom: 0;
      width: min(420px, 92%);
      background: #12141A;
      border-left: 1px solid var(--ink-400);
      box-shadow: -24px 0 60px rgba(0,0,0,0.45);
      padding: 22px;
      overflow: auto;
      animation: spk-in 220ms var(--ease-out);
      z-index: 4;
    }
    .spk-hint {
      font-family: var(--font-mono); font-size: 10px;
      letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--fg-3);
    }
    .spk-photo {
      width: 100%; aspect-ratio: 16 / 10; object-fit: cover;
      border-radius: 8px; border: 1px solid var(--ink-400);
    }
    .spk-view { animation: spk-in 240ms var(--ease-out); }
    @media (max-width: 900px) {
      .spk-body { grid-template-columns: 1fr; min-height: 0; }
      .spk-side {
        border-right: none; border-bottom: 1px solid var(--ink-400);
        padding: 14px 16px;
      }
      .spk-side-block { flex-direction: row; gap: 6px; overflow-x: auto; }
      .spk-nav { width: auto; white-space: nowrap; flex: 0 0 auto; }
      .spk-kpis { grid-template-columns: 1fr 1fr; }
      .spk-split { grid-template-columns: 1fr; }
      .spk-main { padding: 16px; }
      .spk-shell.is-full { inset: 0; border-radius: 0; }
    }
  `);
const statusChip = label => {
  const t = STATUS_TONE[label] || STATUS_TONE.New;
  return /*#__PURE__*/React.createElement("span", {
    className: "spk-chip",
    style: {
      color: t.fg,
      background: t.bg,
      border: "1px solid " + t.br
    }
  }, label);
};
const CoverageMap = ({
  cities,
  onSelect,
  selected
}) => {
  const [focus, setFocus] = shState(null);
  const [pulseIdx, setPulseIdx] = shState(0);
  const list = cities || [];
  shEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !list.length) return;
    const id = setInterval(() => setPulseIdx(i => (i + 1) % list.length), 900);
    return () => clearInterval(id);
  }, [list.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: MAP_W + " / " + MAP_H,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 24,
    opacity: 0.06
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + MAP_W + " " + MAP_H,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: US_PATH,
    fill: "rgba(214,243,95,0.05)",
    stroke: "rgba(214,243,95,0.30)",
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  })), list.map((c, i) => {
    const isPulse = i === pulseIdx;
    const isFocus = focus === i || selected && selected.name === c.name;
    return /*#__PURE__*/React.createElement("button", {
      key: c.name,
      type: "button",
      onMouseEnter: () => setFocus(i),
      onMouseLeave: () => setFocus(null),
      onFocus: () => setFocus(i),
      onBlur: () => setFocus(null),
      onClick: () => onSelect && onSelect(c),
      "aria-label": c.name + " · " + c.samples + " samples",
      style: {
        position: "absolute",
        left: projX(c.lng) / MAP_W * 100 + "%",
        top: projY(c.lat) / MAP_H * 100 + "%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: isFocus ? 10 : 1,
        background: "transparent",
        border: 0,
        padding: 10
      }
    }, isPulse && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 8,
        height: 8,
        borderRadius: 999,
        border: "1.5px solid var(--spark-500)",
        animation: "radar 1.5s var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: isFocus ? 12 : 8,
        height: isFocus ? 12 : 8,
        borderRadius: 999,
        background: "var(--spark-500)",
        transition: "width 160ms, height 160ms"
      }
    }), isFocus ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "calc(100% + 10px)",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        padding: "12px 14px",
        minWidth: 200,
        background: "rgba(10,11,13,0.96)",
        border: "1px solid rgba(214,243,95,0.4)",
        borderRadius: 8,
        pointerEvents: "none",
        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        animation: "sp-pop 240ms cubic-bezier(0.2,0.9,0.3,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.2em",
        color: "var(--fg-3)",
        textTransform: "uppercase"
      }
    }, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: c.status === "LIVE" ? "var(--spark-500)" : "var(--fg-3)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: "currentColor",
        animation: c.status === "LIVE" ? "sp-pulse-dot 1.6s infinite" : "none"
      }
    }), c.status)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--fg-1)",
        letterSpacing: "-0.01em",
        marginBottom: 10
      }
    }, c.venue || ""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        borderTop: "1px solid var(--ink-400)",
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--spark-500)",
        lineHeight: 1
      }
    }, c.samples), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.18em",
        color: "var(--fg-3)",
        textTransform: "uppercase",
        marginTop: 3
      }
    }, "samples")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--fg-1)",
        lineHeight: 1
      }
    }, c.leads), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 9,
        letterSpacing: "0.18em",
        color: "var(--fg-3)",
        textTransform: "uppercase",
        marginTop: 3
      }
    }, "leads")))) : i === pulseIdx && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "calc(100% + 6px)",
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
        padding: "4px 8px",
        background: "rgba(10,11,13,0.95)",
        border: "1px solid var(--ink-400)",
        borderRadius: 6,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--spark-500)",
        pointerEvents: "none"
      }
    }, c.name));
  }));
};
const BarChart = ({
  animate,
  bars
}) => {
  const data = bars || [38, 52, 44, 68, 72, 60, 84, 78, 90, 70, 82, 96, 88, 74, 92, 100, 84, 92];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 120
    },
    "aria-hidden": "true"
  }, data.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: animate ? h + "%" : "0%",
      background: "linear-gradient(to top, var(--spark-600), var(--spark-500))",
      borderRadius: "3px 3px 0 0",
      transition: "height 700ms cubic-bezier(0.2,0.7,0.2,1) " + i * 40 + "ms"
    }
  })));
};
const ActivityRows = ({
  rows,
  onSelect
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 2
  }
}, (rows || []).map((r, i) => /*#__PURE__*/React.createElement("button", {
  key: r.t + r.place + i,
  type: "button",
  className: "spk-row" + (i === 0 ? " is-on" : ""),
  style: {
    gridTemplateColumns: "64px 1fr auto"
  },
  onClick: () => onSelect && onSelect(r)
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--fg-3)"
  }
}, r.t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, r.place), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: 13.5,
    marginTop: 2
  }
}, r.who || r.brand)), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: r.fg
  }
}, r.status))));
const BroadcastTile = ({
  photo,
  onOpen
}) => {
  const p = photo || {
    src: IMG.wcAustin,
    label: "TIDEWATER · AUSTIN"
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpen && onOpen(p),
    style: {
      marginTop: 10,
      borderRadius: 10,
      overflow: "hidden",
      position: "relative",
      border: "1px solid var(--ink-400)",
      aspectRatio: "16 / 10",
      background: "#000",
      width: "100%",
      padding: 0,
      cursor: "pointer"
    },
    "aria-label": "Open live broadcast · " + p.label
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.78))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      left: 8,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 7px",
      borderRadius: 5,
      background: "rgba(0,0,0,0.55)",
      border: "1px solid rgba(214,243,95,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "var(--spark-500)",
      animation: "sp-pulse-dot 1.6s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: "0.2em",
      color: "var(--spark-500)"
    }
  }, "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 7,
      left: 9,
      right: 9,
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.14em",
      color: "rgba(255,255,255,0.92)",
      textTransform: "uppercase",
      textAlign: "left"
    }
  }, p.label));
};
const KpiStrip = ({
  program,
  count
}) => {
  const items = [{
    n: count.toLocaleString(),
    l: "Samples today",
    d: program.kpis.delta,
    color: "var(--spark-500)"
  }, {
    n: String(program.kpis.onsite),
    l: "On-site now",
    d: "live",
    color: "var(--fg-1)"
  }, {
    n: String(program.kpis.events),
    l: "Events today",
    d: program.cities.length + " markets",
    color: "var(--fg-1)"
  }, {
    n: program.kpis.ontime + "%",
    l: "On-time rate",
    d: "7d avg",
    color: "var(--success)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "spk-kpis"
  }, items.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: "14px 16px",
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: s.color
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, s.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.12em",
      color: "var(--fg-3)",
      textTransform: "uppercase"
    }
  }, s.d)))));
};
const MapView = ({
  program,
  animate,
  onCity,
  onActivity,
  selectedCity
}) => /*#__PURE__*/React.createElement("div", {
  className: "spk-view"
}, /*#__PURE__*/React.createElement("div", {
  className: "spk-split"
}, /*#__PURE__*/React.createElement("div", {
  className: "spk-card"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> COVERAGE // LIVE"), /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, program.cities.length, " MARKETS ACTIVE")), /*#__PURE__*/React.createElement(CoverageMap, {
  cities: program.cities,
  onSelect: onCity,
  selected: selectedCity
})), /*#__PURE__*/React.createElement("div", {
  className: "spk-card"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> ACTIVITY FEED"), /*#__PURE__*/React.createElement(OpsLine, null, "LAST 30 MIN")), /*#__PURE__*/React.createElement(ActivityRows, {
  rows: program.activity,
  onSelect: onActivity
}), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> SAMPLES / HOUR"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10
  }
}, /*#__PURE__*/React.createElement(BarChart, {
  animate: animate,
  bars: program.bars
}))))));
const ActivityView = ({
  program,
  onSelect
}) => /*#__PURE__*/React.createElement("div", {
  className: "spk-view spk-card"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> LIVE FEED // ", program.short), /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, program.activity.length, " EVENTS")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, program.activity.map((r, i) => /*#__PURE__*/React.createElement("button", {
  key: r.t + i,
  type: "button",
  className: "spk-row" + (i === 0 ? " is-on" : ""),
  style: {
    gridTemplateColumns: "64px 1fr auto",
    padding: "14px 14px"
  },
  onClick: () => onSelect(r)
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--fg-3)"
  }
}, r.t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    color: "var(--fg-3)",
    textTransform: "uppercase"
  }
}, r.place), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    fontSize: 15,
    marginTop: 3
  }
}, r.who), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: "var(--fg-2)",
    marginTop: 4
  }
}, r.detail)), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: r.fg
  }
}, r.status)))));
const RecapsView = ({
  program,
  onSelect
}) => /*#__PURE__*/React.createElement("div", {
  className: "spk-view spk-card"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> RECAPS"), /*#__PURE__*/React.createElement(OpsLine, null, program.recaps.length, " THIS WEEK")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, program.recaps.map(rec => /*#__PURE__*/React.createElement("button", {
  key: rec.id,
  type: "button",
  className: "spk-row",
  style: {
    gridTemplateColumns: "88px 1fr auto",
    padding: 0,
    overflow: "hidden"
  },
  onClick: () => onSelect(rec)
}, /*#__PURE__*/React.createElement("img", {
  src: rec.photos[0],
  alt: "",
  style: {
    width: 88,
    height: 72,
    objectFit: "cover",
    display: "block"
  },
  loading: "lazy"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "10px 12px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    fontSize: 14
  }
}, rec.venue), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    marginTop: 4
  }
}, rec.market, " \xB7 ", rec.date)), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingRight: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 6
  }
}, statusChip(rec.status), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--spark-500)"
  }
}, rec.samples, " samples"))))));
const AmbassadorsView = ({
  program,
  onSelect
}) => /*#__PURE__*/React.createElement("div", {
  className: "spk-view spk-card"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> AMBASSADORS"), /*#__PURE__*/React.createElement(OpsLine, null, program.ambassadors.length, " ON THIS PROGRAM")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
}, program.ambassadors.map(ba => /*#__PURE__*/React.createElement("button", {
  key: ba.id,
  type: "button",
  className: "spk-row",
  style: {
    gridTemplateColumns: "1fr auto auto",
    padding: "14px 12px"
  },
  onClick: () => onSelect(ba)
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    fontSize: 14
  }
}, ba.name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    marginTop: 3
  }
}, ba.market, " \xB7 ", ba.certs.join(" · "))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--fg-2)"
  }
}, ba.shifts, " shifts \xB7 ", ba.rating), statusChip(ba.status === "On site" ? "Staffed" : ba.status === "Setup" ? "Draft" : "New")))));
const RequestsView = ({
  program,
  onSelect
}) => /*#__PURE__*/React.createElement("div", {
  className: "spk-view spk-card"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> REQUESTS"), /*#__PURE__*/React.createElement(OpsLine, null, "SELF-SERVE")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  }
}, program.requests.map(req => /*#__PURE__*/React.createElement("button", {
  key: req.id,
  type: "button",
  className: "spk-row",
  style: {
    gridTemplateColumns: "1fr auto",
    padding: "14px 12px"
  },
  onClick: () => onSelect(req)
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    fontSize: 14
  }
}, req.title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    color: "var(--fg-3)",
    textTransform: "uppercase",
    marginTop: 4
  }
}, req.market, " \xB7 ", req.when, " \xB7 ", req.type)), statusChip(req.status)))));
const Drawer = ({
  item,
  onClose
}) => {
  if (!item) return null;
  return /*#__PURE__*/React.createElement("aside", {
    className: "spk-drawer",
    role: "dialog",
    "aria-label": "Detail"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, ">> ", item.kind), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "spk-iconbtn",
    onClick: onClose
  }, "Close")), item.kind === "Market" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      margin: "0 0 6px",
      letterSpacing: "-0.02em"
    }
  }, item.data.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.16em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, item.data.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--spark-500)"
    }
  }, item.data.samples), /*#__PURE__*/React.createElement("div", {
    className: "spk-hint",
    style: {
      marginTop: 4
    }
  }, "Samples")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      fontWeight: 700
    }
  }, item.data.leads), /*#__PURE__*/React.createElement("div", {
    className: "spk-hint",
    style: {
      marginTop: 4
    }
  }, "Leads"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, "Crew is ", item.data.status === "LIVE" ? "live on the ground" : "active in market", ". Counts update as ambassadors log samples from the venue.")), item.kind === "Recap" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      margin: "0 0 6px",
      letterSpacing: "-0.02em"
    }
  }, item.data.venue), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, statusChip(item.data.status), /*#__PURE__*/React.createElement("span", {
    className: "spk-hint"
  }, item.data.market, " \xB7 ", item.data.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + Math.min(item.data.photos.length, 3) + ", 1fr)",
      gap: 8,
      marginBottom: 14
    }
  }, item.data.photos.map(src => /*#__PURE__*/React.createElement("img", {
    key: src,
    className: "spk-photo",
    src: src,
    alt: "",
    loading: "lazy"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginBottom: 14,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--spark-500)",
      fontWeight: 700
    }
  }, item.data.samples), " ", /*#__PURE__*/React.createElement("span", {
    className: "spk-hint"
  }, "samples")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, item.data.leads), " ", /*#__PURE__*/React.createElement("span", {
    className: "spk-hint"
  }, "leads"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--fg-2)",
      margin: 0
    }
  }, item.data.note)), item.kind === "Ambassador" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      margin: "0 0 6px"
    }
  }, item.data.name), /*#__PURE__*/React.createElement("div", {
    className: "spk-hint",
    style: {
      marginBottom: 16
    }
  }, item.data.market, " \xB7 ", item.data.status), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      fontWeight: 700
    }
  }, item.data.rating), /*#__PURE__*/React.createElement("div", {
    className: "spk-hint",
    style: {
      marginTop: 4
    }
  }, "Rating")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "var(--ink-200)",
      borderRadius: 10,
      border: "1px solid var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      fontWeight: 700
    }
  }, item.data.shifts), /*#__PURE__*/React.createElement("div", {
    className: "spk-hint",
    style: {
      marginTop: 4
    }
  }, "Shifts"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, item.data.certs.map(c => statusChip(c === "Captain" || c === "Bilingual" ? "Staffed" : "Approved"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: "16px 0 0"
    }
  }, item.data.certs.join(", "), " certified. Assigned to this program and clocking in through Spark from the venue.")), item.kind === "Request" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      margin: "0 0 8px"
    }
  }, item.data.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, statusChip(item.data.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.12em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      lineHeight: 1.8
    }
  }, "Market \xB7 ", item.data.market, /*#__PURE__*/React.createElement("br", null), "Window \xB7 ", item.data.when, /*#__PURE__*/React.createElement("br", null), "Type \xB7 ", item.data.type), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: "16px 0 0"
    }
  }, "Submitted through Spark. Staffing, permits, and the brief live on this request so the brand team can see status without a status email.")), item.kind === "Activity" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      margin: "0 0 6px"
    }
  }, item.data.who), /*#__PURE__*/React.createElement("div", {
    className: "spk-hint",
    style: {
      marginBottom: 12
    }
  }, item.data.place, " \xB7 ", item.data.t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, statusChip(item.data.status === "checked-in" || item.data.status === "on-site" ? "Staffed" : item.data.status === "setup" ? "Draft" : "Ready")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, item.data.detail)), item.kind === "Broadcast" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "spk-photo",
    src: item.data.src,
    alt: "",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      margin: 0
    }
  }, item.data.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: "12px 0 0"
    }
  }, "Field photo from this hour. Ambassadors upload from the venue; the brand sees it here without waiting on a recap deck.")));
};
const SparkInteractiveDash = ({
  animate = true,
  standalone = false
}) => {
  const [programId, setProgramId] = shState("ld");
  const [view, setView] = shState("map");
  const [full, setFull] = shState(false);
  const [drawer, setDrawer] = shState(null);
  const [countBump, setCountBump] = shState(0);
  const program = PROGRAMS.find(p => p.id === programId) || PROGRAMS[0];
  const count = program.kpis.samples + countBump;
  shEffect(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !animate) return;
    const id = setInterval(() => setCountBump(n => n + Math.floor(Math.random() * 4 + 1)), 1400);
    return () => clearInterval(id);
  }, [animate, programId]);
  shEffect(() => {
    if (!full || standalone) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = e => {
      if (e.key === "Escape") {
        setFull(false);
        setDrawer(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [full, standalone]);
  const switchProgram = id => {
    setProgramId(id);
    setCountBump(0);
    setDrawer(null);
  };
  const switchView = id => {
    setView(id);
    setDrawer(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "spk-shell" + (full && !standalone ? " is-full" : "") + (standalone ? " is-standalone" : "")
  }, /*#__PURE__*/React.createElement(SparkDemoStyles, null), /*#__PURE__*/React.createElement("div", {
    className: "spk-chrome"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    },
    "aria-hidden": "true"
  }, ["#FF5F57", "#FFBD2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-3)"
    }
  }, "spark.igniteproductions.co / dashboard")), /*#__PURE__*/React.createElement("span", {
    className: "spk-hint",
    style: {
      marginRight: 8
    }
  }, "Sandbox \xB7 click around"), /*#__PURE__*/React.createElement(OpsLine, {
    glow: true
  }, "\u25CF LIVE"), !standalone && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "spk-iconbtn",
    onClick: () => setFull(v => !v),
    "aria-pressed": full
  }, full ? "Exit" : "Expand")), /*#__PURE__*/React.createElement("div", {
    className: "spk-body"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "spk-side"
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> PROGRAMS"), /*#__PURE__*/React.createElement("div", {
    className: "spk-side-block"
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    type: "button",
    className: "spk-nav" + (p.id === programId ? " is-on" : ""),
    "aria-pressed": p.id === programId,
    onClick: () => switchProgram(p.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, p.id === programId ? "◉" : "○"), " ", p.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> VIEWS")), /*#__PURE__*/React.createElement("div", {
    className: "spk-side-block"
  }, VIEWS.map(v => /*#__PURE__*/React.createElement("button", {
    key: v.id,
    type: "button",
    className: "spk-nav compact" + (view === v.id ? " is-on" : ""),
    "aria-pressed": view === v.id,
    onClick: () => switchView(v.id)
  }, v.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(OpsLine, null, ">> BROADCAST")), /*#__PURE__*/React.createElement(BroadcastTile, {
    photo: program.broadcast,
    onOpen: p => setDrawer({
      kind: "Broadcast",
      data: p
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "spk-main"
  }, /*#__PURE__*/React.createElement(KpiStrip, {
    program: program,
    count: count
  }), view === "map" && /*#__PURE__*/React.createElement(MapView, {
    program: program,
    animate: animate,
    selectedCity: drawer && drawer.kind === "Market" ? drawer.data : null,
    onCity: c => setDrawer({
      kind: "Market",
      data: c
    }),
    onActivity: r => setDrawer({
      kind: "Activity",
      data: r
    })
  }), view === "activity" && /*#__PURE__*/React.createElement(ActivityView, {
    program: program,
    onSelect: r => setDrawer({
      kind: "Activity",
      data: r
    })
  }), view === "recaps" && /*#__PURE__*/React.createElement(RecapsView, {
    program: program,
    onSelect: r => setDrawer({
      kind: "Recap",
      data: r
    })
  }), view === "ambassadors" && /*#__PURE__*/React.createElement(AmbassadorsView, {
    program: program,
    onSelect: b => setDrawer({
      kind: "Ambassador",
      data: b
    })
  }), view === "requests" && /*#__PURE__*/React.createElement(RequestsView, {
    program: program,
    onSelect: r => setDrawer({
      kind: "Request",
      data: r
    })
  }), /*#__PURE__*/React.createElement(Drawer, {
    item: drawer,
    onClose: () => setDrawer(null)
  }))));
};
const SparkShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.2
  });
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Spark Showcase",
    style: {
      position: "relative",
      background: "var(--ink-000)",
      color: "var(--fg-1)",
      padding: "120px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 48,
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: window.__resources?.r_assets_chrome_blob_medium_png || "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-blob-medium.png",
    style: {
      position: "absolute",
      left: "-10%",
      top: "20%",
      width: "38%",
      opacity: 0.32,
      mixBlendMode: "screen",
      pointerEvents: "none"
    },
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SparkLockup, {
    size: 104
  }), /*#__PURE__*/React.createElement(LivePill, null)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: "var(--spark-500)",
      fontSize: "clamp(28px, 3.6vw, 56px)",
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(Bracket, null, "Field marketing finally gets the intelligence it deserves.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, "Click a program or view. This is the live product, sandboxed.")), /*#__PURE__*/React.createElement(AccentBtn, {
    size: "lg",
    accent: "spark",
    onClick: () => {
      location.href = "/spark";
    }
  }, "Tour the platform")), /*#__PURE__*/React.createElement(SparkInteractiveDash, {
    animate: inView
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, [["GPS-verified check-ins", "Every ambassador clocks in from the actual venue. No paper sign-in sheets, no fudged timesheets."], ["Auto-generated recaps", "Event summaries write themselves — photos, notes, counts, attendance — sent to your inbox within hours."], ["Real-time dashboards", "Watch 17 markets at once. Leadership shouldn't have to ask 'what did we get?' — they should already see it."], ["Self-service requests", "Your team submits activation requests through Spark. Staffing, permits, briefs — all tracked."]].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--spark-500)",
      fontFamily: "var(--font-mono)",
      marginBottom: 10
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: 17,
      marginBottom: 8
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg-2)",
      margin: 0
    }
  }, d))))));
};
const SparkDemoApp = () => /*#__PURE__*/React.createElement("div", {
  style: {
    minHeight: "100dvh",
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    padding: "20px 20px 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1480,
    margin: "0 auto 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement(SparkLockup, {
  size: 72
}), /*#__PURE__*/React.createElement(LivePill, {
  label: "DEMO"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 10,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "spk-hint"
}, "Sandbox data \xB7 not a live client login"), /*#__PURE__*/React.createElement("a", {
  href: "https://www.igniteproductions.co/contact?intent=spark-demo",
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 14,
    padding: "10px 16px",
    borderRadius: 10,
    background: "var(--spark-500)",
    color: "#0A0B0D",
    textDecoration: "none"
  }
}, "Book a real walkthrough"))), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1480,
    margin: "0 auto",
    height: "calc(100dvh - 110px)"
  }
}, /*#__PURE__*/React.createElement(SparkInteractiveDash, {
  standalone: true,
  animate: true
})));
Object.assign(window, {
  CoverageMap,
  SparkShowcase,
  SparkInteractiveDash,
  SparkDemoApp,
  BarChart,
  ActivityRows,
  BroadcastTile
});
})();
