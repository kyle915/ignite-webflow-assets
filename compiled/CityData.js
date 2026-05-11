/* ============================================================
   CITY DATA — per-city custom copy for the City SEO Section.
   ------------------------------------------------------------
   Keys are city slugs (lowercase, hyphenated). Cities NOT in
   this map render fully from fallbacks in CitySEOSection.jsx.
   Edit / add cities here, then recompile + push CityData.js.

   Schema per entry (every field optional EXCEPT name):
     slug           string  — "reno" (defaults to slugified name)
     name           string  — "Reno"                     (required)
     state          string  — "Nevada"
     metro          string  — "Reno-Sparks"
     intro          string  — local paragraph
     ambassadors    string  — "1,200+"
     yearsActive    string  — "Since 2018"
     coverageNote   string  — "Reno-Sparks + Tahoe"
     activations    string[]
     industries     string[]
     nearbyMarkets  Array<string | {name, miles}>
     services       string[] (slugs from DEFAULT_SERVICES)
                    or Array<{slug,title,desc,href}>     (full override)
     faqs           Array<{q,a}>                          (max 3 shown)
     cta            { eyebrow, heading, body,
                      primaryLabel, primaryHref,
                      secondaryLabel, secondaryHref }
   ============================================================ */

window.CITY_DATA = {
  reno: {
    slug: "reno",
    name: "Reno",
    state: "Nevada",
    metro: "Reno-Sparks",
    intro: "Ignite Productions runs brand activations across the Reno-Sparks metro — from the Riverwalk and Midtown to the casino corridor and Sparks Marina. Our local crew has staffed Hot August Nights, Burning Man supply chain and staging, Lake Tahoe destination programs, downtown sampling routes, and on-premise launches for CPG, beverage, and lifestyle brands.",
    ambassadors: "1,200+",
    yearsActive: "Since 2018",
    coverageNote: "Reno-Sparks + Tahoe",
    activations: ["Riverwalk + Midtown sampling routes", "Casino corridor on-premise activations", "Hot August Nights field staffing", "Burning Man staging & supply", "Lake Tahoe destination programs", "Sparks Marina event support", "University of Nevada campus activations", "Retail demos (Raley's, WinCo, Save Mart)"],
    industries: ["Beverage (alcohol + non-alc)", "CPG food & snack", "Cannabis-adjacent / wellness", "Outdoor & lifestyle", "Automotive & powersports", "Gaming & entertainment", "Technology"],
    nearbyMarkets: [{
      name: "Sparks",
      miles: 5
    }, {
      name: "Carson City",
      miles: 30
    }, {
      name: "South Lake Tahoe",
      miles: 58
    }, {
      name: "Truckee",
      miles: 32
    }, {
      name: "Fernley",
      miles: 35
    }, {
      name: "Sacramento",
      miles: 130
    }],
    faqs: [{
      q: "Can you staff Burning Man and pre-burn events?",
      a: "Yes. We staff supply chain, staging, transport, and pre-burn programs in the Reno area — vendor support, gear distribution, and brand presence at official partner events. We do not staff inside the playa itself."
    }, {
      q: "Do you cover Lake Tahoe and Truckee?",
      a: "Yes. South Lake Tahoe, North Shore, Incline Village, and Truckee are part of our Reno service area. We've supported destination weekends, festival activations, and on-premise launches across the Tahoe basin."
    }, {
      q: "What's your rush window for Reno bookings?",
      a: "48 hours from brief to boots on the ground for in-market staffing. Hot August Nights, Reno Rodeo, and Burning Man surge weekends require earlier lock-in — brief us 4–6 weeks ahead when possible."
    }],
    cta: {
      eyebrow: "READY WHEN YOU ARE",
      heading: "Run something in {city}.",
      body: "Brief us on the program — single-night Riverwalk activation through multi-week Tahoe coverage. We'll scope it to fit.",
      primaryLabel: "Start a brief",
      primaryHref: "https://igniteproductions.co/contact?urgent=1",
      secondaryLabel: "See the work",
      secondaryHref: "https://igniteproductions.co/work"
    }
  }
};

/* Normalize a slug from any string. */
const slugify = s => String(s || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* Look up city data by slug. Returns:
     - The matching entry (with slug + name backfilled), OR
     - A skeleton { slug, name } if `nameFallback` is supplied (for fallback render), OR
     - undefined if neither.
   `nameFallback` lets the Webflow CMS pass the CMS city name when we have no
   custom entry, so the component still renders with safe defaults. */
const getCityData = (slug, nameFallback, stateFallback) => {
  const key = slugify(slug);
  const map = window.CITY_DATA || {};
  const hit = map[key];
  if (hit) return {
    ...hit,
    slug: hit.slug || key
  };
  if (!isCityName(nameFallback)) return undefined;
  return {
    slug: key || slugify(nameFallback),
    name: String(nameFallback).trim(),
    state: stateFallback ? String(stateFallback).trim() : undefined
  };
};
const isCityName = v => v != null && String(v).trim() !== "";
Object.assign(window, {
  getCityData,
  slugifyCity: slugify
});