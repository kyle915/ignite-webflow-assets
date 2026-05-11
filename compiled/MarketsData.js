/* global React */
/* ============================================================
   MARKETS DATA — one source of truth for city/market routing.
   ------------------------------------------------------------
   - REGIONS: ordered list of regions, each with cities.
   - Every city has: slug, name, state (2-letter), tier.
   - `available: true` cities link to the dynamic city template
     pages/city.html?c=<slug>. The rest fall back to the hub.
   - To go live with a new city: drop a CMS entry keyed by slug
     in CITY_PRESETS (see pages/city.html) and flip `available`.
   ============================================================ */

const MARKETS_REGIONS = [{
  id: "northeast",
  label: "Northeast",
  note: "NYC metro · I-95 corridor",
  cities: [{
    slug: "new-york",
    name: "New York",
    state: "NY",
    tier: 1,
    available: true
  }, {
    slug: "brooklyn",
    name: "Brooklyn",
    state: "NY",
    tier: 1,
    available: false
  }, {
    slug: "boston",
    name: "Boston",
    state: "MA",
    tier: 1,
    available: false
  }, {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "PA",
    tier: 1,
    available: false
  }, {
    slug: "washington-dc",
    name: "Washington DC",
    state: "DC",
    tier: 1,
    available: false
  }, {
    slug: "pittsburgh",
    name: "Pittsburgh",
    state: "PA",
    tier: 2,
    available: false
  }, {
    slug: "newark",
    name: "Newark",
    state: "NJ",
    tier: 2,
    available: false
  }, {
    slug: "jersey-city",
    name: "Jersey City",
    state: "NJ",
    tier: 2,
    available: false
  }, {
    slug: "hartford",
    name: "Hartford",
    state: "CT",
    tier: 2,
    available: false
  }, {
    slug: "providence",
    name: "Providence",
    state: "RI",
    tier: 2,
    available: false
  }, {
    slug: "buffalo",
    name: "Buffalo",
    state: "NY",
    tier: 2,
    available: false
  }, {
    slug: "rochester",
    name: "Rochester",
    state: "NY",
    tier: 2,
    available: false
  }, {
    slug: "albany",
    name: "Albany",
    state: "NY",
    tier: 2,
    available: false
  }, {
    slug: "baltimore",
    name: "Baltimore",
    state: "MD",
    tier: 1,
    available: false
  }, {
    slug: "portland-me",
    name: "Portland",
    state: "ME",
    tier: 2,
    available: false
  }, {
    slug: "long-island",
    name: "Long Island",
    state: "NY",
    tier: 2,
    available: false
  }, {
    slug: "stamford",
    name: "Stamford",
    state: "CT",
    tier: 2,
    available: false
  }, {
    slug: "wilmington-de",
    name: "Wilmington",
    state: "DE",
    tier: 2,
    available: false
  }, {
    slug: "newport-ri",
    name: "Newport",
    state: "RI",
    tier: 2,
    available: false
  }, {
    slug: "saratoga-springs",
    name: "Saratoga Springs",
    state: "NY",
    tier: 2,
    available: false
  }]
}, {
  id: "southeast",
  label: "Southeast",
  note: "Atlanta hub · Florida sweep",
  cities: [{
    slug: "miami",
    name: "Miami",
    state: "FL",
    tier: 1,
    available: true
  }, {
    slug: "atlanta",
    name: "Atlanta",
    state: "GA",
    tier: 1,
    available: true
  }, {
    slug: "charlotte",
    name: "Charlotte",
    state: "NC",
    tier: 1,
    available: false
  }, {
    slug: "orlando",
    name: "Orlando",
    state: "FL",
    tier: 1,
    available: false
  }, {
    slug: "tampa",
    name: "Tampa",
    state: "FL",
    tier: 2,
    available: false
  }, {
    slug: "nashville",
    name: "Nashville",
    state: "TN",
    tier: 1,
    available: false
  }, {
    slug: "jacksonville",
    name: "Jacksonville",
    state: "FL",
    tier: 2,
    available: false
  }, {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    state: "FL",
    tier: 2,
    available: false
  }, {
    slug: "raleigh",
    name: "Raleigh-Durham",
    state: "NC",
    tier: 2,
    available: false
  }, {
    slug: "greensboro",
    name: "Greensboro",
    state: "NC",
    tier: 2,
    available: false
  }, {
    slug: "richmond",
    name: "Richmond",
    state: "VA",
    tier: 2,
    available: false
  }, {
    slug: "virginia-beach",
    name: "Virginia Beach",
    state: "VA",
    tier: 2,
    available: false
  }, {
    slug: "birmingham",
    name: "Birmingham",
    state: "AL",
    tier: 2,
    available: false
  }, {
    slug: "new-orleans",
    name: "New Orleans",
    state: "LA",
    tier: 1,
    available: false
  }, {
    slug: "memphis",
    name: "Memphis",
    state: "TN",
    tier: 2,
    available: false
  }, {
    slug: "knoxville",
    name: "Knoxville",
    state: "TN",
    tier: 2,
    available: false
  }, {
    slug: "louisville",
    name: "Louisville",
    state: "KY",
    tier: 2,
    available: false
  }, {
    slug: "charleston",
    name: "Charleston",
    state: "SC",
    tier: 2,
    available: false
  }, {
    slug: "savannah",
    name: "Savannah",
    state: "GA",
    tier: 2,
    available: false
  }, {
    slug: "greenville-sc",
    name: "Greenville",
    state: "SC",
    tier: 2,
    available: false
  }, {
    slug: "columbia-sc",
    name: "Columbia",
    state: "SC",
    tier: 2,
    available: false
  }, {
    slug: "asheville",
    name: "Asheville",
    state: "NC",
    tier: 2,
    available: false
  }, {
    slug: "chattanooga",
    name: "Chattanooga",
    state: "TN",
    tier: 2,
    available: false
  }, {
    slug: "lexington",
    name: "Lexington",
    state: "KY",
    tier: 2,
    available: false
  }, {
    slug: "huntsville",
    name: "Huntsville",
    state: "AL",
    tier: 2,
    available: false
  }, {
    slug: "sarasota",
    name: "Sarasota",
    state: "FL",
    tier: 2,
    available: false
  }, {
    slug: "daytona-beach",
    name: "Daytona Beach",
    state: "FL",
    tier: 2,
    available: false
  }, {
    slug: "hollywood-fl",
    name: "Hollywood",
    state: "FL",
    tier: 2,
    available: false
  }, {
    slug: "augusta",
    name: "Augusta",
    state: "GA",
    tier: 2,
    available: false
  }, {
    slug: "athens-ga",
    name: "Athens",
    state: "GA",
    tier: 2,
    available: false
  }]
}, {
  id: "midwest",
  label: "Midwest",
  note: "Chicago hub · Great Lakes",
  cities: [{
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    tier: 1,
    available: true
  }, {
    slug: "detroit",
    name: "Detroit",
    state: "MI",
    tier: 1,
    available: false
  }, {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "MN",
    tier: 1,
    available: false
  }, {
    slug: "indianapolis",
    name: "Indianapolis",
    state: "IN",
    tier: 2,
    available: false
  }, {
    slug: "columbus",
    name: "Columbus",
    state: "OH",
    tier: 2,
    available: false
  }, {
    slug: "kansas-city",
    name: "Kansas City",
    state: "MO",
    tier: 2,
    available: false
  }, {
    slug: "cleveland",
    name: "Cleveland",
    state: "OH",
    tier: 2,
    available: true
  }, {
    slug: "cincinnati",
    name: "Cincinnati",
    state: "OH",
    tier: 2,
    available: false
  }, {
    slug: "milwaukee",
    name: "Milwaukee",
    state: "WI",
    tier: 2,
    available: false
  }, {
    slug: "madison",
    name: "Madison",
    state: "WI",
    tier: 2,
    available: false
  }, {
    slug: "st-louis",
    name: "St. Louis",
    state: "MO",
    tier: 2,
    available: false
  }, {
    slug: "omaha",
    name: "Omaha",
    state: "NE",
    tier: 2,
    available: false
  }, {
    slug: "des-moines",
    name: "Des Moines",
    state: "IA",
    tier: 2,
    available: false
  }, {
    slug: "grand-rapids",
    name: "Grand Rapids",
    state: "MI",
    tier: 2,
    available: false
  }, {
    slug: "akron",
    name: "Akron",
    state: "OH",
    tier: 2,
    available: false
  }, {
    slug: "dayton",
    name: "Dayton",
    state: "OH",
    tier: 2,
    available: false
  }, {
    slug: "ann-arbor",
    name: "Ann Arbor",
    state: "MI",
    tier: 2,
    available: false
  }, {
    slug: "fort-wayne",
    name: "Fort Wayne",
    state: "IN",
    tier: 2,
    available: false
  }, {
    slug: "wichita",
    name: "Wichita",
    state: "KS",
    tier: 2,
    available: false
  }]
}, {
  id: "southwest",
  label: "Southwest",
  note: "Texas triangle · AZ desert",
  cities: [{
    slug: "dallas",
    name: "Dallas-Fort Worth",
    state: "TX",
    tier: 1,
    available: true
  }, {
    slug: "houston",
    name: "Houston",
    state: "TX",
    tier: 1,
    available: true
  }, {
    slug: "austin",
    name: "Austin",
    state: "TX",
    tier: 1,
    available: true
  }, {
    slug: "phoenix",
    name: "Phoenix",
    state: "AZ",
    tier: 1,
    available: false
  }, {
    slug: "tucson",
    name: "Tucson",
    state: "AZ",
    tier: 2,
    available: false
  }, {
    slug: "san-antonio",
    name: "San Antonio",
    state: "TX",
    tier: 1,
    available: false
  }, {
    slug: "el-paso",
    name: "El Paso",
    state: "TX",
    tier: 2,
    available: false
  }, {
    slug: "oklahoma-city",
    name: "Oklahoma City",
    state: "OK",
    tier: 2,
    available: false
  }, {
    slug: "tulsa",
    name: "Tulsa",
    state: "OK",
    tier: 2,
    available: false
  }, {
    slug: "albuquerque",
    name: "Albuquerque",
    state: "NM",
    tier: 2,
    available: false
  }, {
    slug: "plano",
    name: "Plano",
    state: "TX",
    tier: 2,
    available: false
  }, {
    slug: "lubbock",
    name: "Lubbock",
    state: "TX",
    tier: 2,
    available: false
  }, {
    slug: "mcallen",
    name: "McAllen",
    state: "TX",
    tier: 2,
    available: false
  }, {
    slug: "frisco",
    name: "Frisco",
    state: "TX",
    tier: 2,
    available: false
  }, {
    slug: "arlington-tx",
    name: "Arlington",
    state: "TX",
    tier: 2,
    available: false
  }, {
    slug: "scottsdale",
    name: "Scottsdale",
    state: "AZ",
    tier: 2,
    available: false
  }]
}, {
  id: "west",
  label: "West",
  note: "LA/SF bookends · NV corridor",
  cities: [{
    slug: "los-angeles",
    name: "Los Angeles",
    state: "CA",
    tier: 1,
    available: true
  }, {
    slug: "san-francisco",
    name: "San Francisco",
    state: "CA",
    tier: 1,
    available: false
  }, {
    slug: "san-diego",
    name: "San Diego",
    state: "CA",
    tier: 1,
    available: false
  }, {
    slug: "sacramento",
    name: "Sacramento",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "las-vegas",
    name: "Las Vegas",
    state: "NV",
    tier: 1,
    available: false
  }, {
    slug: "oakland",
    name: "Oakland",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "san-jose",
    name: "San Jose",
    state: "CA",
    tier: 1,
    available: false
  }, {
    slug: "fresno",
    name: "Fresno",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "riverside",
    name: "Riverside",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "long-beach",
    name: "Long Beach",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "anaheim",
    name: "Anaheim",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "honolulu",
    name: "Honolulu",
    state: "HI",
    tier: 2,
    available: false
  }, {
    slug: "santa-barbara",
    name: "Santa Barbara",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "palm-springs",
    name: "Palm Springs",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "indio",
    name: "Indio",
    state: "CA",
    tier: 2,
    available: false
  }, {
    slug: "inglewood",
    name: "Inglewood",
    state: "CA",
    tier: 2,
    available: false
  }]
}, {
  id: "pacific-northwest",
  label: "Pacific Northwest",
  note: "Cascade corridor",
  cities: [{
    slug: "seattle",
    name: "Seattle",
    state: "WA",
    tier: 1,
    available: true
  }, {
    slug: "portland",
    name: "Portland",
    state: "OR",
    tier: 1,
    available: false
  }, {
    slug: "tacoma",
    name: "Tacoma",
    state: "WA",
    tier: 2,
    available: false
  }, {
    slug: "spokane",
    name: "Spokane",
    state: "WA",
    tier: 2,
    available: false
  }, {
    slug: "eugene",
    name: "Eugene",
    state: "OR",
    tier: 2,
    available: false
  }, {
    slug: "boise",
    name: "Boise",
    state: "ID",
    tier: 2,
    available: false
  }, {
    slug: "anchorage",
    name: "Anchorage",
    state: "AK",
    tier: 2,
    available: false
  }, {
    slug: "bellevue",
    name: "Bellevue",
    state: "WA",
    tier: 2,
    available: false
  }]
}, {
  id: "mountain",
  label: "Mountain",
  note: "Front Range · Sierra Nevada",
  cities: [{
    slug: "denver",
    name: "Denver",
    state: "CO",
    tier: 1,
    available: false
  }, {
    slug: "reno",
    name: "Reno",
    state: "NV",
    tier: 2,
    available: true
  }, {
    slug: "colorado-springs",
    name: "Colorado Springs",
    state: "CO",
    tier: 2,
    available: false
  }, {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    state: "UT",
    tier: 1,
    available: false
  }, {
    slug: "boulder",
    name: "Boulder",
    state: "CO",
    tier: 2,
    available: false
  }, {
    slug: "bozeman",
    name: "Bozeman",
    state: "MT",
    tier: 2,
    available: false
  }, {
    slug: "park-city",
    name: "Park City",
    state: "UT",
    tier: 2,
    available: false
  }, {
    slug: "jackson-hole",
    name: "Jackson Hole",
    state: "WY",
    tier: 2,
    available: false
  }, {
    slug: "billings",
    name: "Billings",
    state: "MT",
    tier: 2,
    available: false
  }, {
    slug: "aspen",
    name: "Aspen",
    state: "CO",
    tier: 2,
    available: false
  }, {
    slug: "lake-tahoe",
    name: "Lake Tahoe",
    state: "NV",
    tier: 2,
    available: false
  }]
}];

/* "Top markets" — the 10 we cite in service-page nationwide blurbs. */
const TOP_MARKETS = ["new-york", "los-angeles", "chicago", "dallas", "atlanta", "miami", "las-vegas", "phoenix", "denver", "seattle"];

/* Venue / anchor lookups — named venues we work at, per city.
   Used in CitySEOSection. Empty/missing slug → band hides. */
const CITY_VENUES = {
  "new-york": ["Javits Center", "Madison Square Garden", "Barclays Center", "Brooklyn Navy Yard", "Pier 17", "Hudson Yards", "Bryant Park", "Times Square"],
  "los-angeles": ["LA Convention Center", "SoFi Stadium", "The Forum", "Crypto.com Arena", "Hollywood Palladium", "Rose Bowl", "Santa Monica Pier", "Grand Park"],
  "chicago": ["McCormick Place", "United Center", "Soldier Field", "Navy Pier", "Wrigley Field", "Lincoln Park", "Grant Park", "Lollapalooza Grounds"],
  "las-vegas": ["Las Vegas Convention Center", "Allegiant Stadium", "Sphere", "Mandalay Bay", "T-Mobile Arena", "Resorts World", "Wynn", "Caesars Forum"],
  "miami": ["Miami Beach Convention Center", "Wynwood Walls", "Kaseya Center", "Hard Rock Stadium", "Bayfront Park", "Loanmart", "Brickell", "South Beach"],
  "atlanta": ["Georgia World Congress Center", "Mercedes-Benz Stadium", "State Farm Arena", "Centennial Olympic Park", "Piedmont Park", "Atlantic Station", "Ponce City Market"],
  "dallas": ["Kay Bailey Hutchison Convention Center", "AT&T Stadium", "American Airlines Center", "Toyota Stadium", "Globe Life Field", "Deep Ellum", "Klyde Warren Park"],
  "houston": ["George R. Brown Convention Center", "NRG Stadium", "Toyota Center", "Minute Maid Park", "Discovery Green", "Buffalo Bayou", "The Galleria"],
  "austin": ["Austin Convention Center", "COTA", "Moody Center", "ACL Live", "Zilker Park", "Q2 Stadium", "Auditorium Shores", "Fair Market"],
  "orlando": ["Orange County Convention Center", "Kia Center", "Camping World Stadium", "Inter&Co Stadium", "Lake Eola", "Disney Springs", "Universal CityWalk"],
  "san-francisco": ["Moscone Center", "Chase Center", "Oracle Park", "Pier 39", "Civic Center", "SoMa", "Fort Mason", "Crissy Field"],
  "san-diego": ["San Diego Convention Center", "Petco Park", "Snapdragon Stadium", "Pechanga Arena", "Balboa Park", "Gaslamp Quarter", "Embarcadero"],
  "phoenix": ["Phoenix Convention Center", "State Farm Stadium", "Footprint Center", "Chase Field", "Westgate", "Talking Stick Resort Arena"],
  "seattle": ["Seattle Convention Center", "Climate Pledge Arena", "Lumen Field", "T-Mobile Park", "Seattle Center", "Capitol Hill", "Pike Place"],
  "denver": ["Colorado Convention Center", "Empower Field at Mile High", "Ball Arena", "Coors Field", "Red Rocks", "RiNo", "Civic Center Park"],
  "boston": ["Boston Convention & Exhibition Center", "TD Garden", "Fenway Park", "Gillette Stadium", "Hynes Convention Center", "Seaport", "Faneuil Hall"],
  "philadelphia": ["Pennsylvania Convention Center", "Wells Fargo Center", "Lincoln Financial Field", "Citizens Bank Park", "Spruce Street Harbor", "Penn's Landing"],
  "washington-dc": ["Walter E. Washington Convention Center", "Capital One Arena", "Audi Field", "Nationals Park", "The Wharf", "National Mall", "Union Market"],
  "nashville": ["Music City Center", "Bridgestone Arena", "Nissan Stadium", "Geodis Park", "Ascend Amphitheater", "Lower Broadway", "Ryman Auditorium"],
  "new-orleans": ["Ernest N. Morial Convention Center", "Caesars Superdome", "Smoothie King Center", "French Quarter", "Frenchmen Street", "Champions Square"],
  "detroit": ["Huntington Place", "Little Caesars Arena", "Ford Field", "Comerica Park", "Detroit Riverfront", "Eastern Market", "Campus Martius"],
  "minneapolis": ["Minneapolis Convention Center", "U.S. Bank Stadium", "Target Center", "Target Field", "Mall of America", "Stone Arch", "Nicollet Mall"],
  "indio": ["Empire Polo Club", "Indio Open Air", "Coachella Grounds", "Stagecoach Grounds"],
  "reno": ["Reno-Sparks Convention Center", "Grand Sierra Resort", "Atlantis", "Peppermill", "Eldorado", "Riverwalk", "Greater Nevada Field"],
  "indianapolis": ["Indiana Convention Center", "Lucas Oil Stadium", "Gainbridge Fieldhouse", "Indianapolis Motor Speedway", "Victory Field", "Monument Circle"],
  "kansas-city": ["KC Convention Center", "Arrowhead Stadium", "T-Mobile Center", "Kauffman Stadium", "Power & Light District", "Crown Center"],
  "tampa": ["Tampa Convention Center", "Raymond James Stadium", "Amalie Arena", "Tropicana Field", "Channelside", "Ybor City", "Curtis Hixon Park"],
  "park-city": ["Park City Mountain", "Deer Valley", "Main Street", "Eccles Center", "Canyons Village"],
  "aspen": ["Buttermilk Mountain", "Snowmass Base Village", "Aspen Mountain", "Wagner Park", "Belly Up Aspen"],
  "scottsdale": ["WestWorld of Scottsdale", "Scottsdale Stadium", "TPC Scottsdale", "Talking Stick", "Old Town Scottsdale"],
  "arlington-tx": ["AT&T Stadium", "Globe Life Field", "Choctaw Stadium", "Esports Stadium Arlington", "Texas Live!"],
  "frisco": ["The Star", "Toyota Stadium", "Comerica Center", "Riders Field", "Frisco Convention Center"],
  "augusta": ["Augusta National", "James Brown Arena", "Augusta Convention Center", "Riverwalk Augusta"],
  "daytona-beach": ["Daytona International Speedway", "Ocean Center", "Bandshell", "Daytona Beach Boardwalk"],
  "san-jose": ["McEnery Convention Center", "SAP Center", "Levi's Stadium", "PayPal Park", "Avaya Stadium", "San Pedro Square"],
  "saratoga-springs": ["Saratoga Race Course", "SPAC", "Saratoga City Center", "Caroline Street"],
  "newport-ri": ["Newport Folk Festival Grounds (Fort Adams)", "Newport Jazz Grounds", "Newport Casino", "Newport Mansions"],
  "honolulu": ["Hawaii Convention Center", "Aloha Stadium", "Waikiki Shell", "Bishop Square", "Ala Moana"],
  "anaheim": ["Anaheim Convention Center", "Honda Center", "Angel Stadium", "Disneyland Resort", "ARTIC"],
  "lake-tahoe": ["Harveys Outdoor Arena", "Heavenly Village", "Tahoe Blue Event Center", "Edgewood Tahoe"]
};
const venuesFor = slug => CITY_VENUES[slug] || [];

/* Flat lookup. */
const MARKETS_BY_SLUG = (() => {
  const out = {};
  MARKETS_REGIONS.forEach(r => r.cities.forEach(c => {
    out[c.slug] = {
      ...c,
      regionId: r.id,
      regionLabel: r.label
    };
  }));
  return out;
})();

/* Helper: name → slug (for chip rows like SEO_MARKETS that don't carry slugs). */
const NAME_TO_SLUG = (() => {
  const out = {};
  Object.values(MARKETS_BY_SLUG).forEach(c => {
    out[c.name.toLowerCase()] = c.slug;
    // also stash short names that homepage chips use ("Dallas" not "Dallas-Fort Worth")
  });
  // hand-tuned aliases for the homepage chip strip
  Object.assign(out, {
    "dallas": "dallas",
    "washington dc": "washington-dc",
    "fort worth": "dallas",
    "dallas-fort worth": "dallas",
    "ny": "new-york",
    "la": "los-angeles"
  });
  return out;
})();

/* Production clean-URL pattern: /cities/<slug>
   In preview/dev (file:// or non-production hosts) we rewrite to the
   query-string template URL on click so the prototype actually navigates. */
const CITY_URL = slug => "/cities/" + slug;

/* Resolve a chip label to a clean city URL. */
const marketHrefFor = (name /*, rel */) => {
  if (!name) return null;
  const slug = NAME_TO_SLUG[String(name).toLowerCase().trim()];
  if (!slug) return null;
  return CITY_URL(slug);
};

/* Click shim — only active outside the production host.
   Intercepts <a href="/cities/<slug>"> and routes to the template file
   so /cities/* links work in local preview without host rewrites. */
(() => {
  if (typeof window === "undefined" || window.__cityClickShimInstalled) return;
  const isProd = /(^|\.)igniteproductions\.co$/i.test(location.hostname);
  if (isProd) return;
  window.__cityClickShimInstalled = true;
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest('a[href^="/cities/"]');
    if (!a) return;
    const href = a.getAttribute("href");
    const m = href && href.match(/^\/cities\/([^/?#]+)/);
    if (!m) return;
    e.preventDefault();
    /* Walk up to find /pages/city.html relative to this page. */
    const path = location.pathname;
    const inPages = /\/pages\//.test(path);
    const rel = inPages ? "city.html" : "pages/city.html";
    location.href = rel + "?c=" + encodeURIComponent(m[1]);
  }, true);
})();

/* All city slugs (for the dynamic template + sitemap). */
const AVAILABLE_CITY_SLUGS = Object.values(MARKETS_BY_SLUG).map(c => c.slug);
Object.assign(window, {
  MARKETS_REGIONS,
  MARKETS_BY_SLUG,
  NAME_TO_SLUG,
  TOP_MARKETS,
  AVAILABLE_CITY_SLUGS,
  marketHrefFor,
  CITY_URL,
  CITY_VENUES,
  venuesFor
});