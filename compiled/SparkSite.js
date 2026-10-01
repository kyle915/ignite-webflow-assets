(function(){if (typeof window !== "undefined" && window.SPK) return;
/* Spark mini-site — shared shell, primitives, and content model.
   Mirrors a Product / Solutions / Pricing IA. Loaded after Shared/Primitives/NavFooter. */
const SPK = {
  LIME: "#D6F35F",
  RED: "#D7453E",
  BG: "#0A0B0D",
  CARD: "#111317",
  FG: "#FAFAF7",
  FG2: "#B8BCC5",
  MUT: "#7A7F8B",
  LINE: "rgba(250,250,247,0.08)",
  MONO: "var(--sp-mono)",
  SANS: "var(--sp-sans)"
};
const SparkW = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1480,
    margin: "0 auto",
    padding: "0 clamp(20px,4vw,32px)",
    ...style
  }
}, children);
const SparkEyebrow = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("span", {
  className: "sp-eyebrow",
  style: color ? {
    color
  } : undefined
}, children);
const SparkSec = ({
  children,
  id,
  bg = SPK.BG,
  pad = "clamp(88px,10vw,140px) 0",
  label,
  style
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  "data-screen-label": label,
  style: {
    position: "relative",
    overflow: "hidden",
    background: bg,
    padding: pad,
    borderTop: `1px solid ${SPK.LINE}`,
    ...style
  }
}, children);
const SparkDot = ({
  c = SPK.RED,
  s = 7
}) => /*#__PURE__*/React.createElement("span", {
  className: "sp-dot",
  style: {
    width: s,
    height: s,
    borderRadius: 999,
    background: c,
    boxShadow: `0 0 8px ${c}`,
    animation: "sp-blink 1.4s infinite",
    flexShrink: 0,
    display: "inline-block"
  }
});
const sparkLogo = () => window.__resources && window.__resources.r_assets_spark_logo_full_png || "https://kyle915.github.io/ignite-webflow-assets/assets/spark-logo-full.png";
const useSparkReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".sp-rv");
    const showAll = () => els.forEach(el => {
      el.classList.remove("sp-armed");
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    let io;
    try {
      io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("sp-in");
          io.unobserve(e.target);
        }
      }), {
        threshold: 0.1
      });
      const vh = window.innerHeight || 800;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top > vh * 0.9) {
          el.classList.add("sp-armed");
          el.style.transitionDelay = i % 4 * 70 + "ms";
          io.observe(el);
        }
      });
    } catch (e) {
      showAll();
    }
    const t = setTimeout(showAll, 1600);
    return () => {
      io && io.disconnect();
      clearTimeout(t);
    };
  }, []);
};
const useSparkCount = (target, run, dur = 1300) => {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    let raf, t0;
    const s = t => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / dur, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(s);
    };
    raf = requestAnimationFrame(s);
    return () => cancelAnimationFrame(raf);
  }, [run, target, dur]);
  return v;
};
const useSparkInView = (th = 0.3) => {
  const ref = React.useRef();
  const [inv, setInv] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInv(true);
        io.disconnect();
      }
    }, {
      threshold: th
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [th]);
  return [ref, inv];
};

/* ============================ CONTENT MODEL ============================ */
const SPARK_PRODUCTS = [{
  slug: "request",
  idx: "01",
  name: "Request",
  tag: "INTAKE",
  short: "Programs go in, not emails.",
  h1: "Program intake without the inbox.",
  sub: "Public request forms, per-client catalogs, and a routed queue. Anyone on your team, your client's team, or your distributor can submit an activation without a login.",
  caps: ["Public request forms, one per client workspace, no login required", "Drag-and-drop form builder with brand-standard fields", "Managed catalogs for request types, event types, and product types", "Full request queue with routing, owners, and status tracking", "Clone a program across markets, brands, and quarters", "Approval steps for budget holders before a shift is booked"],
  mock: {
    url: "spark.ignite / requests",
    title: "REQUEST QUEUE",
    rows: [["09:41", "White Claw · Austin tasting · 3 BAs", "ROUTED"], ["09:36", "Liquid Death · Denver display build", "APPROVED"], ["09:20", "Feel Free · Miami street team · 6 BAs", "NEW"], ["08:58", "Subaru · Portland ride & drive", "STAFFING"], ["08:44", "Total Wireless · 12-store demo weekend", "APPROVED"]]
  },
  uses: [["Brand teams", "Stop rebuilding the same brief in email every quarter. Build it once, reuse it forever."], ["Agencies", "Give every client their own branded intake form. Requests land tagged and routed to the right PM."], ["Distributors", "Sales reps request demos for their accounts from their phone. No portal login, no spreadsheet."]],
  faq: [["How do clients submit field marketing activation requests in Spark?", "Through a public request form, one per client workspace, with no login required. Submissions land in your request queue tagged to that client, routed by activation type, and tracked to completion."], ["Can we add approval workflows to demo and sampling requests?", "Yes. Add an approval step so a brand manager or account lead signs off before a request is scheduled and staffed."], ["Can Spark request forms be customized per client or program?", "Yes. A drag-and-drop form builder lets you set the fields, activation types, product catalogs, and brand standards each workspace collects."]],
  related: [["https://sparkbyignite.igniteproductions.co/product/staff", "Staff"], ["https://sparkbyignite.igniteproductions.co/solutions/agencies", "For Agencies"], ["https://sparkbyignite.igniteproductions.co/solutions/distributors", "For Distributors"]]
}, {
  slug: "staff",
  idx: "02",
  name: "Staff",
  tag: "SCHEDULING",
  short: "Fill the schedule, from wherever you fill it.",
  h1: "Staffing that flags the hole before the shift starts.",
  sub: "Ignite fills every shift from a 257K+ vetted bench and tracks fill rate live by market. Your in-house reps or agency partners can sit on the same board, so you always see who is covering what.",
  caps: ["Week-view staffing board with unstaffed-shift counts", "Assign in-house, push to agency partners, or post to an open board", "Bulk assignment across a market in one pass", "Certification gating, TIPS, RBS, food handler, before a shift can be claimed", "Live fill-rate by market with at-risk flags before the shift starts", "One-button bench pull from Ignite's network in 48 hours"],
  mock: {
    url: "spark.ignite / staffing / week-34",
    title: "UNSTAFFED SHIFTS",
    rows: [["SAT", "Brooklyn · Whole Foods · 2 of 3 filled", "1 OPEN"], ["SAT", "Chicago · Mariano's · 4 of 4", "FILLED"], ["SUN", "Denver · Sprouts · 0 of 2", "2 OPEN"], ["SUN", "Austin · H-E-B · 3 of 3", "FILLED"], ["MON", "Miami · Publix · 1 of 2", "AT RISK"]]
  },
  uses: [["In-house teams", "See exactly which markets are short this weekend while there's still time to fix it."], ["Agencies", "Manage your crews and your subcontractors on one board. Compare partner fill rates side by side."], ["Uncovered markets", "A drop on Thursday for a Saturday shift. One button pulls a certified ambassador from the bench."]],
  faq: [["Who staffs the shifts on a Spark program?", "Ignite does. Every Spark program is staffed from our 257K+ vetted, certified ambassador network across all 50 states, with unlimited ambassador seats. If you have in-house brand reps or agency partners you want on the board too, they run in the same system."], ["Can brand ambassadors pick up open shifts themselves?", "Yes. Post shifts to an open board and qualified, certified ambassadors claim them. You approve, or set auto-approve rules by market."], ["How does Spark handle brand ambassador no-shows?", "Spark flags unstaffed and at-risk shifts before they start, so you can backfill from your bench, your agency, or Ignite's network instead of finding out after the event."]],
  related: [["https://sparkbyignite.igniteproductions.co/product/network", "Network"], ["https://sparkbyignite.igniteproductions.co/product/verify", "Verify"], ["/services/event-staffing", "Event Staffing"]]
}, {
  slug: "verify",
  idx: "03",
  name: "Verify",
  tag: "PROOF",
  short: "The right person, at the right place, at the right time.",
  h1: "GPS-verified. Not self-reported.",
  sub: "Check-in is location-stamped at the venue. Photos are geotagged. Hours are clocked, not estimated. Incomplete reports don't count as complete, that's the whole point.",
  caps: ["GPS-verified check-in and check-out at the venue radius", "Geotagged, timestamped photo capture with per-brand shot requirements", "Structured field reports: counts, per-SKU breakdowns, consumer feedback, competitive notes", "Offline capture with automatic sync when signal returns", "Incomplete reports flagged, not filed", "No-show and off-site flags for review"],
  mock: {
    url: "spark.ignite / verify / brooklyn",
    title: "SHIFT VERIFICATION",
    rows: [["09:14", "GPS match · 40.678, -73.944 · Whole Foods", "VERIFIED"], ["09:15", "Check-in photo · geo-stamped", "VERIFIED"], ["11:40", "Setup photos · 4 of 4 required", "VERIFIED"], ["14:02", "Sample count · 186 · per-SKU", "LOGGED"], ["17:58", "Check-out · 8.7 hrs clocked", "VERIFIED"]]
  },
  uses: [["Brand teams", "Answer 'did the demo actually run?' by opening the map, not by asking the vendor."], ["Retail programs", "Verify the reset happened, the display went up, and the promo is priced right, with photos."], ["Agencies", "Hand clients proof instead of promises. Every shift has a GPS trail and a photo record."]],
  faq: [["Does the Spark brand ambassador app work offline?", "Yes. GPS check-in, photos, sample counts, and notes are captured offline and sync automatically when signal returns. It was built for grocery back rooms and festival grounds."], ["Can brand ambassadors fake a GPS check-in?", "Check-ins are location-stamped at the venue and photos are geotagged with timestamps. Check-ins outside the venue radius are flagged for review rather than counted as complete."], ["What does GPS-verified field marketing actually prove?", "That the right ambassador was at the right venue for the scheduled window, with photo evidence of setup. When a brand asks whether the demo ran, you open the map."]],
  related: [["https://sparkbyignite.igniteproductions.co/product/recap", "Recap"], ["https://sparkbyignite.igniteproductions.co/use-cases/in-store-demos", "In-Store Demos"], ["https://sparkbyignite.igniteproductions.co/trust", "Trust & Data"]]
}, {
  slug: "recap",
  idx: "04",
  name: "Recap",
  tag: "REPORTING",
  short: "The recap writes itself while the event is still happening.",
  h1: "Recaps in hours. Not nine days.",
  sub: "The ambassador answers the questions during the shift. Spark assembles the recap at clock-out, photos attached, metrics calculated, cost per sample computed. Review, approve, share a link.",
  caps: ["Auto-generated recaps at clock-out", "Custom recap templates per client or program", "Per-SKU sample counts, leads, attendance, and cost per sample", "Missing-recap tracker with overdue aging and one-tap nudge", "Review, approve, and share via link, no login for stakeholders", "Export to PDF or slides when someone upstairs wants a deck"],
  mock: {
    url: "spark.ignite / recaps / austin",
    title: "RECAP · AUSTIN, TX · READY 24H AFTER EVENT",
    rows: [["327", "Samples · per-SKU breakdown, 5 variants", "LIVE"], ["68", "Leads captured · synced to CRM", "LIVE"], ["1,240", "Attendees · gate count", "LIVE"], ["$2.18", "Cost per sample", "LIVE"], ["62", "GPS-verified photos", "LIVE"]]
  },
  uses: [["Brand teams", "Stop assembling decks at midnight. Share a link with eight stakeholders instead of a 40MB attachment to four."], ["Agencies", "Win the next RFP on reporting alone. Every client sees a live recap library with your logo on it."], ["Finance", "Cost per sample and lift per door, calculated from verified data, ready the same day."]],
  faq: [["How fast are event recaps generated in Spark?", "Recaps assemble at clock-out and are delivered within 24 hours of the event ending, not nine days later. Sample counts, geotagged photos, ambassador notes, and cost per sample are included automatically."], ["Can we customize event recap templates by client or program?", "Yes. Recap templates are set per client workspace or program, so a retail demo recap and a festival recap capture different fields."], ["How does Spark handle missing or late recaps?", "A missing-recap tracker shows every shift that wrapped without a recap, how overdue it is, and who owes it. Nudge the ambassador with one tap or file it on their behalf."]],
  related: [["https://sparkbyignite.igniteproductions.co/product/insights", "Insights"], ["/services/event-reporting-recaps", "Event Recap & Reporting"], ["https://sparkbyignite.igniteproductions.co/solutions/agencies", "For Agencies"]]
}, {
  slug: "insights",
  idx: "05",
  name: "Insights",
  tag: "ANALYTICS",
  short: "Cost per sample. Lift per door. Answers, not adjectives.",
  h1: "Every program on one screen.",
  sub: "Live coverage map, program status by market, partner performance, and a recap library you can actually search. Connect activation data to depletions and see whether the doors you activated actually moved.",
  caps: ["Live coverage map, every activation in the country as a pin", "Program status by market with ahead / on-plan / behind flags", "Partner performance: completion, on-time, photo compliance, report quality", "Searchable recap library across every event, market, and quarter", "Ask AI in plain language; CSV export, one row per event and ambassador", "API and data feed into your warehouse or BI stack"],
  mock: {
    url: "spark.ignite / insights / q3",
    title: "MARKET STATUS · Q3 SAMPLING",
    rows: [["DEN", "Denver · +34% velocity vs. baseline", "AHEAD"], ["BKN", "Brooklyn · 91% on-time · 97% photo", "ON PLAN"], ["AUS", "Austin · $2.18 / sample", "ON PLAN"], ["MIA", "Miami · 2 unstaffed this weekend", "BEHIND"], ["CHI", "Chicago · 4 recaps overdue", "BEHIND"]]
  },
  uses: [["CMOs & finance", "Defend the field budget with cost-per-sample and lift-per-door, not anecdotes."], ["Multi-agency brands", "Compare three agencies on one standard. Have the hard conversation with data."], ["Ops leads", "Catch the market that's quietly falling behind while there's still time to fix it."]],
  faq: [["Does Spark sell or aggregate our field marketing data?", "No. Your activation data is yours. Spark does not sell, resell, or aggregate it, and role-based access controls who inside your organization can see it."], ["Can we import historical field marketing data into Spark?", "Yes. Prior program data is loaded during onboarding so your first quarter on Spark has a baseline to compare against."], ["How do we measure field marketing ROI in Spark?", "Cost per sample, lift per door, and market-by-market comparisons are calculated from verified shift data. Connect depletions or sell-through to see whether the doors you activated actually moved product."]],
  related: [["https://sparkbyignite.igniteproductions.co/product/recap", "Recap"], ["https://sparkbyignite.igniteproductions.co/solutions/enterprise", "Enterprise"], ["https://sparkbyignite.igniteproductions.co/trust", "Trust & Data"]]
}, {
  slug: "network",
  idx: "06",
  name: "Network",
  tag: "THE BENCH",
  short: "The platform comes with the field team.",
  h1: "The only field platform with 257K ambassadors behind it.",
  sub: "257K+ vetted brand ambassadors in all 50 states, bilingual crews included, available in as little as 48 hours. Every program on Spark is staffed and executed by Ignite, so a market that falls through on Thursday is covered by Saturday, on the same dashboard.",
  caps: ["257K+ vetted ambassadors across all 50 states", "Certified crews, TIPS, RBS, food handler, bilingual", "48-hour coverage in most major metros", "One-button bench pull from any unstaffed shift", "Same GPS verification, same recap, same dashboard", "Included with every program, no per-seat fees"],
  mock: {
    url: "spark.ignite / network / pull",
    title: "BENCH PULL · DENVER · SAT 12 to 8",
    rows: [["01", "Riley V. · 4.9 · TIPS · 38 shifts", "AVAILABLE"], ["02", "Deshawn C. · 4.8 · bilingual · 51 shifts", "AVAILABLE"], ["03", "Marisol V. · 5.0 · RBS · 74 shifts", "AVAILABLE"], ["04", "Keon B. · 4.7 · food handler · 22 shifts", "AVAILABLE"], ["05", "Priya N. · 4.9 · TIPS · 63 shifts", "REQUESTED"]]
  },
  uses: [["Uncovered markets", "A drop on Thursday for Saturday. One button. Covered."], ["New-market launches", "Enter a market before you've hired there. Use the bench, then bring it in-house when it's proven."], ["Seasonal spikes", "Add fifty ambassadors for a holiday push. Your software bill doesn't move."]],
  faq: [["Is Ignite's brand ambassador network included with Spark?", "Yes. Spark comes with every Ignite program, and the program comes with the field team: 257K+ vetted ambassadors, certified crews, and 48-hour coverage in most major metros."], ["How quickly can Ignite staff an uncovered market?", "In as little as 48 hours in most major metros, faster where we already have crews on the ground. Same dashboard, same GPS verification, same recap."], ["Are Ignite brand ambassadors certified for alcohol sampling?", "Yes. TIPS, RBS, and state-specific certifications are attached to ambassador profiles and required for bev-alc shifts, so compliance is verified before assignment."]],
  related: [["https://sparkbyignite.igniteproductions.co/product/staff", "Staff"], ["/brand-ambassador-agency", "Brand Ambassador Agency"], ["https://sparkbyignite.igniteproductions.co/solutions/field-marketing", "Field Marketing"]]
}];
const SPARK_SOLUTIONS = [{
  slug: "brands",
  idx: "01",
  name: "For Brands",
  audience: "CPG & beverage brands with field programs",
  href: "https://sparkbyignite.igniteproductions.co/",
  h1: "Field marketing you can defend to your CFO.",
  sub: "You have the ambassadors. You have the markets. What you don't have is a single place where the program lives, and a number you can defend. Spark gives you both without adding headcount.",
  outcomes: [["24hr", "RECAP TURNAROUND"], ["97%", "PHOTO COMPLIANCE"], ["1", "SOURCE OF TRUTH"], ["$0", "PER-SEAT FEES"]],
  modules: ["request", "staff", "verify", "recap", "insights"],
  flow: [["BRIEF", "Build the program once: SKUs, brand standards, what 'done' looks like."], ["DEPLOY", "Your team, your agencies, or the bench, on one staffing board."], ["VERIFY", "GPS check-in, geotagged photos, structured counts during the shift."], ["PROVE", "Cost per sample and lift per door, live, exportable to slides."]],
  faq: [["We already have a field team. Why do we need field marketing software?", "Because the program currently lives in six places. Spark puts staffing, GPS verification, recaps, and ROI in one record per event, so you can defend the field budget with proof instead of anecdotes."], ["Can a CPG brand use Spark to manage multiple field marketing agencies?", "Yes. Every agency reports into one recap standard, so you can compare partners on completion, on-time rate, photo compliance, and report quality side by side."], ["How long does it take a brand to get live on Spark?", "Days, not quarters. Send your program structure and account list and you'll be watching live check-ins the same week. Ambassadors need no training."]],
  related: [["https://sparkbyignite.igniteproductions.co/solutions/agencies", "For Agencies"], ["https://sparkbyignite.igniteproductions.co/product/insights", "Insights"], ["/services/product-sampling", "Product Sampling"]]
}, {
  slug: "agencies",
  idx: "02",
  name: "For Agencies",
  audience: "Experiential, staffing & activation agencies",
  h1: "Run every client on one OS. Win the next RFP on reporting.",
  sub: "Stop building client decks by hand. Give every client a live dashboard with your logo on it. Manage your own crews and your subcontractors in one system.",
  pains: [["Decks assembled at midnight", "by a coordinator who wasn't at the event."], ["Subcontractors report differently", "Every partner has their own definition of 'sample.'"], ["Per-seat pricing punishes your bench", "A rotating roster of 300 BAs shouldn't cost 300 seats."]],
  outcomes: [["∞", "AMBASSADOR SEATS"], ["10+", "CLIENT WORKSPACES"], ["1", "REPORT STANDARD"], ["0", "DECKS TO BUILD"]],
  modules: ["request", "staff", "verify", "recap", "insights"],
  flow: [["INTAKE", "Every client gets a branded public request form. No login."], ["STAFF", "Your crews and subs on one board. See who's actually executing."], ["EXECUTE", "GPS-verified shifts, enforced photo standards, offline capture."], ["REPORT", "White-label live dashboards. Share a link, not a 40MB deck."]],
  faq: [["Can agency clients see each other's data in Spark?", "Never. Every client is an isolated workspace with its own events, catalogs, recap templates, request form, and permissions."], ["Can experiential agencies white-label Spark for their clients?", "Yes. Agency plans include a white-label client portal, so every client gets a live dashboard with your logo on it."], ["Does Spark help agencies win RFPs?", "Reporting is usually the tiebreaker. Live dashboards, GPS-verified proof, and same-day recaps are a demonstrable advantage over vendors sending decks nine days later."]],
  related: [["https://sparkbyignite.igniteproductions.co/", "For Brands"], ["https://sparkbyignite.igniteproductions.co/product/recap", "Recap"], ["https://sparkbyignite.igniteproductions.co/compare", "Compare"]]
}, {
  slug: "distributors",
  idx: "03",
  name: "For Distributors & Brokers",
  audience: "Distributors, brokers & national accounts",
  h1: "Proof the program ran in their doors.",
  sub: "Hundreds of accounts, dozens of reps, and brand partners who all want proof. Route-based check-ins, structured account intelligence, and per-brand reporting from one book of business.",
  pains: [["Brand partners want receipts", "and the sales team is busy selling."], ["Demo requests live in texts", "Reps ask for demos in a group chat. Half get lost."], ["Account intel dies in the truck", "Competitive observations never make it back to the brand."]],
  outcomes: [["100%", "ROUTE VISIBILITY"], ["0", "LOGINS FOR REPS"], ["PER-BRAND", "REPORTING"], ["SAME-DAY", "DEMO RECAPS"]],
  modules: ["request", "verify", "recap", "insights", "network"],
  flow: [["REQUEST", "Reps request demos for their accounts from the truck. No portal."], ["ROUTE", "Check-ins by account, by route, by rep."], ["CAPTURE", "Shelf conditions, competitive notes, pricing, structured, not scribbled."], ["REPORT", "Each brand partner sees their program. Nothing else."]],
  faq: [["Can each supplier brand see only their own demo data?", "Yes. Role-based access means a supplier sees their SKUs, their demos, and their recaps, and nothing from other brands in your book."], ["Do distributor sales reps need to learn new software to request demos?", "No. Reps submit demo requests through a public form from the truck. No login, no portal, no training."], ["Can distributors track demo-to-PO and account-level results?", "Yes. Every demo is tied to the account, so you can see which doors activated, what they reported, and how the account moved afterward."]],
  related: [["/services/distributor-demo-programs", "Distributor Demo Programs"], ["https://sparkbyignite.igniteproductions.co/product/network", "Network"], ["https://sparkbyignite.igniteproductions.co/", "For Brands"]]
}, {
  slug: "retail",
  idx: "04",
  name: "For Retail & QSR",
  audience: "Retail, venue & QSR groups",
  h1: "Every location, verified. With photos, not phone calls.",
  sub: "Verify the reset happened, the display went up, the promo is priced right, and the location looks the way the brand standard says it should, across every door.",
  pains: [["'It's done' isn't proof", "A text from the store isn't a compliance record."], ["Resets drift by week two", "Nobody catches it until the brand walks the store."], ["Audits are a clipboard", "and the clipboard is in someone's car."]],
  outcomes: [["100%", "PHOTO-VERIFIED"], ["BEFORE/AFTER", "EVERY RESET"], ["STORE-LEVEL", "MAPPING"], ["<24H", "AUDIT TURNAROUND"]],
  modules: ["request", "staff", "verify", "insights"],
  flow: [["SCHEDULE", "Resets, audits, and demos on one calendar per banner."], ["EXECUTE", "GPS check-in at the store. Before/after capture enforced."], ["FLAG", "Wrong setup, wrong price, missing elements, flagged at submission."], ["ROLL UP", "Store-level compliance mapped, exportable to the brand."]],
  faq: [["Does Spark support planogram compliance checks and retail audits?", "Yes. Structured audit forms with before-and-after photo capture verified against spec, flagged when the set is wrong."], ["Can we run mystery shops and pricing audits in Spark?", "Yes. Any structured data collection at scale, with geotagged photos and per-location results rolled up by banner or region."], ["Is Spark a store-associate task management tool?", "No. Spark is for field programs staffed by your merchandisers and ambassadors. For internal associate task lists, tools like Zipline are a better fit."]],
  related: [["/services/retail-merchandising", "Retail Merchandising"], ["https://sparkbyignite.igniteproductions.co/product/verify", "Verify"], ["/services/qsr-restaurant-activations", "QSR Activations"]]
}, {
  slug: "field-marketing",
  idx: "05",
  name: "Field Marketing",
  audience: "Field & experiential marketing teams",
  h1: "Plan. Staff. Execute. Prove.",
  sub: "One loop for demos, sampling, street teams, festivals, and mobile tours. The tooling finally caught up to the complexity of the field.",
  pains: [["Six tools, zero system", "Scheduling here, photos there, counts in FINAL_v3.xlsx."], ["The field team won't use it", "If adoption fails, the data fails."], ["Multi-market programs sprawl", "23 events across 6 states shouldn't need 14 email threads."]],
  outcomes: [["6→1", "TOOLS TO SYSTEM"], ["90s", "BA ONBOARDING"], ["50", "STATES ON ONE MAP"], ["LIVE", "ACTIVITY FEED"]],
  modules: ["request", "staff", "verify", "recap", "insights", "network"],
  flow: [["PLAN", "Program templates with brand standards and report requirements."], ["STAFF", "Fill the board, flag the gaps, pull the bench if needed."], ["EXECUTE", "GPS, photos, counts, captured during the shift, offline-safe."], ["PROVE", "Recaps in hours. Market comparisons. Slide-ready exports."]],
  faq: [["What types of field marketing activations does Spark support?", "In-store demos, retail sampling, on-premise sampling, experiential events, festivals, mobile tours, trade shows, street teams, campus programs, and multi-market programs."], ["Will our brand ambassadors actually use the field app?", "That was the design constraint. GPS check-in, photo upload, and report submission take under two minutes and require no training, which is why the data actually comes in."], ["Does Spark work for a single-market field marketing program?", "Yes. Spark scales down as cleanly as it scales up. An eight-ambassador, one-market program is a completely normal Spark account."]],
  related: [["/services/field-marketing", "Field Marketing Programs"], ["https://sparkbyignite.igniteproductions.co/product/staff", "Staff"], ["https://sparkbyignite.igniteproductions.co/solutions/enterprise", "Enterprise"]]
}, {
  slug: "enterprise",
  idx: "06",
  name: "Enterprise",
  audience: "Multi-brand, multi-agency organizations",
  h1: "Consolidate every agency into one source of truth.",
  sub: "Multiple brands, multiple agencies, multiple regions. Spark puts all of them on the same report standard with SSO, audit logs, and a dedicated CSM who knows your program.",
  pains: [["Fragmented agency reporting", "Five partners, five formats, one very long quarter-end."], ["No cross-brand view", "Each brand runs its own program. Nobody sees the portfolio."], ["Procurement wants controls", "SSO, audit trails, role-based access, not a shared login."]],
  outcomes: [["∞", "WORKSPACES"], ["SSO", "+ AUDIT LOG"], ["API", "+ DATA FEED"], ["1", "DEDICATED CSM"]],
  modules: ["request", "staff", "verify", "recap", "insights", "network"],
  flow: [["STANDARDIZE", "One recap standard across every agency and brand."], ["ISOLATE", "Per-brand, per-agency workspaces with granular permissions."], ["INTEGRATE", "API and data feed into your warehouse or BI stack."], ["GOVERN", "SSO, audit log, and a named CSM. Not a ticket queue."]],
  faq: [["Does Spark support SSO and audit logs for enterprise teams?", "Yes. SSO and a full audit log are included on the Enterprise plan."], ["Can we push Spark field data into our own BI or data warehouse?", "Yes. API access and a data feed push activation-level data into your warehouse or BI stack."], ["What does enterprise implementation look like for field marketing software?", "There is no implementation phase. Program templates, roster upload, and access are set up in the first week, with a named human who knows your program, not a ticket queue."]],
  related: [["https://sparkbyignite.igniteproductions.co/solutions/agencies", "For Agencies"], ["https://sparkbyignite.igniteproductions.co/product/insights", "Insights"], ["https://sparkbyignite.igniteproductions.co/compare", "Compare"]]
}];
/* ---- USE CASES — by activation type. Each maps to real photography + the modules it leans on. ---- */
const SPARK_USECASES = [{
  slug: "in-store-demos",
  idx: "01",
  name: "In-Store Demos & Retail Sampling",
  tag: "RETAIL",
  short: "Door-level execution with per-SKU counts and photo proof.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/sampling-liquid-death-petsmart.jpg",
  alt: "Brand ambassador running a Liquid Death in-store sampling demo at a PetSmart",
  h1: "Retail demos that prove they ran in the door.",
  sub: "Scheduled door-level execution across every banner. GPS check-in at the store, per-SKU sample counts during the shift, shelf and display photos enforced at submission, and a recap the buyer can read before the weekend is over.",
  kpis: [["327", "SAMPLES / SHIFT AVG"], ["5", "SKUS TRACKED PER EVENT"], ["97%", "PHOTO COMPLIANCE"], ["24H", "RECAP TURNAROUND"]],
  captures: ["GPS check-in inside the store geofence", "Per-SKU sample and conversion counts", "Shelf, display, and price-tag photos against spec", "Consumer feedback and objection notes", "Out-of-stock and competitive observations", "Cost per sample computed at clock-out"],
  modules: ["request", "staff", "verify", "recap"],
  scenario: {
    who: "A beverage brand running 300-store demo weekends across four grocery banners.",
    before: "Sample counts arrived 9 days later as an estimate. Half the demo photos lived in a group chat. Nobody could confirm which stores the vendor actually hit.",
    after: "Every store has a GPS-verified check-in, a per-SKU count entered during the shift, and 12+ geotagged photos. The buyer recap is live Monday morning with cost-per-sample by store."
  },
  faq: [["Can Spark track sample counts per SKU during an in-store demo?", "Yes. Sample counts, conversions, and consumer notes are captured per SKU on the ambassador's phone during the shift, not reconstructed afterward."], ["Does the in-store demo app work in stores with no cell signal?", "Yes. Everything is captured offline and syncs when signal returns, which is standard for grocery back rooms and big-box interiors."], ["How do we prove a retail demo actually ran in a specific store?", "GPS check-in at the store, geotagged setup photos, and a timestamped recap. Open the map and the store shows up verified."]],
  related: [["/services/retail-demo-programs", "Retail Demo Programs"], ["https://sparkbyignite.igniteproductions.co/", "For Brands"], ["https://sparkbyignite.igniteproductions.co/use-cases/merchandising", "Display Builds & Merchandising"]]
}, {
  slug: "on-premise-sampling",
  idx: "02",
  name: "On-Premise Sampling",
  tag: "BEV-ALC",
  short: "Pour counts, ID checks, and cert-verified crews in bars and restaurants.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/on-premise-white-claw-bar.jpg",
  alt: "White Claw on-premise sampling at a bar with a brand ambassador pouring for guests",
  h1: "Bar and restaurant sampling with compliance built in.",
  sub: "TIPS / RBS certifications live on the ambassador profile. Pour counts, ID-check confirmations, and account conditions are captured during the shift. Every venue gets a GPS-stamped record your distributor can trust.",
  kpis: [["100%", "CERT-VERIFIED CREWS"], ["POUR", "COUNTS PER VENUE"], ["ID", "CHECK CONFIRMATION"], ["SAME-DAY", "DISTRIBUTOR RECAP"]],
  captures: ["TIPS / RBS / state cert attached to every shift record", "Pour and sample counts by SKU", "ID-check and refusal-to-serve confirmations", "Menu placement, tap handle, and POS photos", "Bartender and manager feedback", "Account-level recap shared to the distributor"],
  modules: ["staff", "verify", "recap", "network"],
  scenario: {
    who: "A spirits brand running 40 on-premise nights a month across three distributor territories.",
    before: "Distributor reps asked 'did the tasting happen?' and got a text. Certifications were a PDF in someone's inbox. Pour counts were a guess.",
    after: "Every venue night shows the certified ambassador, GPS check-in, pour count, ID confirmations, and menu photos. Each distributor sees only their accounts."
  },
  faq: [["Are TIPS and RBS certifications visible for on-premise sampling shifts?", "Yes. TIPS, RBS, and state-specific alcohol service certifications are attached to the ambassador profile and shown on every shift they work."], ["Can distributors request on-premise tastings through Spark?", "Yes. Distributor reps submit tasting requests from a public form, and each distributor sees only their own accounts and results."], ["How does Spark track pour counts and ID checks at bar sampling events?", "Pour counts, ID confirmations, and menu or shelf photos are logged live on the ambassador app and roll into the venue-night recap automatically."]],
  related: [["/services/on-premise-sampling", "On-Premise Sampling"], ["https://sparkbyignite.igniteproductions.co/solutions/distributors", "For Distributors"], ["https://sparkbyignite.igniteproductions.co/product/verify", "Verify"]]
}, {
  slug: "street-teams",
  idx: "03",
  name: "Street Teams & Guerrilla Sampling",
  tag: "HAND-TO-HAND",
  short: "Cans in hands, counted by route, mapped by corridor.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/street-team-liquid-death-miami.jpg",
  alt: "Three Liquid Death street team ambassadors in branded caps sampling cans on a Miami sidewalk",
  h1: "Guerrilla sampling with a GPS trail behind every can.",
  sub: "Route-based check-ins, hand-to-hand counts tallied live, and photos geotagged to the corridor. See sample velocity by block while the team is still on the street.",
  kpis: [["~4208", "SAMPLES TODAY · LIVE"], ["ROUTE", "GPS TRAIL PER TEAM"], ["LIVE", "VELOCITY BY BLOCK"], ["0", "PAPER TALLY SHEETS"]],
  captures: ["Route check-ins with a GPS breadcrumb trail", "Live hand-to-hand counter on the ambassador's phone", "Photos geotagged to the corridor", "Crowd and foot-traffic notes by time block", "Ice, kit, and restock log", "Samples-per-hour by route, live"],
  modules: ["staff", "verify", "recap", "insights"],
  scenario: {
    who: "A water brand running exit sampling at festivals, transit hubs, and downtown corridors in 12 cities.",
    before: "Teams reported 'about 2,000' at the end of the day. Nobody knew which corners moved product and which didn't.",
    after: "Counts tick up live by route. The dashboard shows the 5th-and-Main corner outperforming the transit exit 3:1, so the next day's routing changes."
  },
  faq: [["How do street team ambassadors count samples while moving?", "A one-tap counter on the app. Each hand-off is timestamped and geotagged in batches, so you get sample velocity by block instead of 'about 2,000.'"], ["Can we see street team routes and guerrilla sampling coverage on a map?", "Yes. Each team's GPS trail renders on a corridor map, showing where samples landed and which blocks over- or under-performed."], ["What does a street team sampling recap include?", "Route trail, hand-to-hand counts by time block, geotagged photos, crowd notes, and cost per sample, ready within hours of the route ending."]],
  related: [["/services/street-teams", "Street Teams"], ["https://sparkbyignite.igniteproductions.co/use-cases/festivals", "Festivals & Mobile Tours"], ["https://sparkbyignite.igniteproductions.co/product/insights", "Insights"]]
}, {
  slug: "festivals",
  idx: "04",
  name: "Festivals, Experiential & Mobile Tours",
  tag: "MULTI-DAY",
  short: "Multi-day footprints with attendance, leads, and per-stop economics.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/on-premise-white-claw-patio-cheers.jpg",
  alt: "Two guests toasting White Claw cans on a string-lit patio during an experiential activation",
  h1: "Multi-day activations, one live record per stop.",
  sub: "Attendance, lead capture, sample counts, and photo compliance across every day and every stop on the tour. Compare Austin to Brooklyn without opening two inboxes.",
  kpis: [["23", "EVENTS / 6 STATES"], ["1,240", "ATTENDEES PER STOP AVG"], ["68", "LEADS CAPTURED PER STOP"], ["$2.18", "COST PER SAMPLE"]],
  captures: ["Daily check-in per crew member across multi-day footprints", "Attendance and dwell estimates by time block", "Lead capture synced to your CRM", "Photo compliance against brand shot list", "Per-stop cost, samples, and leads", "Tour-wide rollup with market comparison"],
  modules: ["request", "staff", "verify", "recap", "insights"],
  scenario: {
    who: "A beverage brand on a 23-stop summer festival tour with a rotating crew.",
    before: "Each stop produced a different recap format. The tour rollup took two weeks after the last date.",
    after: "Every stop lands in the same recap template hours after load-out. The tour rollup is live the whole time, leadership watched Denver beat baseline by 34% in week two."
  },
  faq: [["Can Spark manage a rotating crew across a multi-day festival or tour?", "Yes. Assign per day, and each crew member checks in individually. Ambassador seats are unlimited, so a rotating roster costs nothing extra."], ["Does Spark capture leads at festival and experiential activations?", "Yes. Lead forms on the ambassador app sync to your CRM via API or export as CSV, tied to the stop and shift that produced them."], ["How does Spark report on a multi-stop mobile tour?", "Every stop uses the same recap template, so attendance, samples, leads, and per-stop economics roll into one tour dashboard as you go, not two weeks after the last date."]],
  related: [["/services/festival-brand-activations", "Festival Brand Activations"], ["/services/mobile-tours", "Mobile Tours"], ["https://sparkbyignite.igniteproductions.co/solutions/field-marketing", "Field Marketing"]]
}, {
  slug: "merchandising",
  idx: "05",
  name: "Display Builds & Merchandising",
  tag: "RETAIL EXECUTION",
  short: "Endcaps, resets, and audits verified against spec.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-total-wireless-storefront.jpg",
  alt: "Total Wireless branded storefront activation set up at a retail location",
  h1: "Resets and displays, verified before and after.",
  sub: "Planogram checks with before-and-after capture. Wrong setup, wrong price, or missing elements get flagged at submission, not when the brand walks the store two weeks later.",
  kpis: [["BEFORE/AFTER", "EVERY RESET"], ["100%", "PHOTO-VERIFIED"], ["<24H", "AUDIT TURNAROUND"], ["STORE-LEVEL", "COMPLIANCE MAP"]],
  captures: ["GPS check-in at the store", "Before / after photo pairs enforced", "Planogram and facing counts against spec", "Price tag and promo verification", "Out-of-stock flags and reorder notes", "Store-level compliance mapped by banner"],
  modules: ["request", "staff", "verify", "insights"],
  scenario: {
    who: "A snack brand rolling a seasonal endcap into 180 stores across two banners.",
    before: "Merchandisers texted 'done.' The brand found 30 stores still on the old set during a market walk.",
    after: "Every store shows a before/after pair, facing count, and price check. The 11 stores with missing elements were flagged on submission and fixed the same week."
  },
  faq: [["Is Spark a store-associate task management or shelf-recognition tool?", "No. Spark is for field programs staffed by your merchandisers and ambassadors: display builds, resets, and audits verified against spec with photo proof."], ["Can Spark run pricing audits and mystery shops at retail?", "Yes. Structured audit forms capture pricing, placement, and out-of-stocks with geotagged photos, rolled up by store, banner, and region."], ["How do we verify a retail display build was completed to spec?", "Before-and-after photo capture is required at check-out and reviewed against the planogram. Wrong set, missing elements, or wrong price get flagged, not filed."]],
  related: [["/services/retail-merchandising", "Retail Merchandising"], ["https://sparkbyignite.igniteproductions.co/solutions/retail", "For Retail & QSR"], ["https://sparkbyignite.igniteproductions.co/product/verify", "Verify"]]
}, {
  slug: "distributor-demos",
  idx: "06",
  name: "Distributor & Route Demos",
  tag: "ROUTE-BASED",
  short: "Reps request from the truck. Brands get proof by account.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-mojo-tent-storefront.jpg",
  alt: "Branded sampling tent set up outside a retail storefront",
  h1: "Demo programs your distributor reps will actually use.",
  sub: "Reps request demos for their accounts from a public form, no login. Route-based check-ins, structured account intel, and per-brand reporting from one book of business.",
  kpis: [["0", "LOGINS FOR REPS"], ["100%", "ROUTE VISIBILITY"], ["PER-BRAND", "REPORTING"], ["SAME-DAY", "DEMO RECAPS"]],
  captures: ["Demo requests by account, routed to the right PM", "Check-ins by account, by route, by rep", "Shelf conditions and competitive pricing", "Buyer and manager feedback per account", "Per-supplier recap with only their SKUs", "Demo-to-reorder tracking"],
  modules: ["request", "verify", "recap", "insights", "network"],
  scenario: {
    who: "A regional distributor running demos for 14 supplier brands across 600 accounts.",
    before: "Demo requests came in over text. Supplier partners wanted receipts; the sales team was busy selling.",
    after: "Reps submit demos from a public form in 40 seconds. Each supplier sees a live recap of their demos only. Account intel finally makes it back to the brand."
  },
  faq: [["Can each supplier brand see only their own distributor demo results?", "Yes. Role-based access means a supplier sees their SKUs, their demos, and their recaps across your accounts, and nothing else."], ["Do distributor reps need training to request demos in Spark?", "No. Reps use a public request form from the truck. A demo request takes under a minute and lands routed and tagged to the account."], ["How does Spark connect route demos to account performance?", "Every demo is tied to the account and route, so brand partners see verified check-ins, shelf conditions, and recaps by door and can compare to depletions."]],
  related: [["/services/distributor-demo-programs", "Distributor Demo Programs"], ["https://sparkbyignite.igniteproductions.co/solutions/distributors", "For Distributors & Brokers"], ["https://sparkbyignite.igniteproductions.co/product/request", "Request"]]
}, {
  slug: "trade-shows",
  idx: "07",
  name: "Trade Shows & Sports Activations",
  tag: "VENUE",
  short: "Booth staffing, lead capture, and game-day sampling with proof.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-claude-registration-crew-2.webp",
  alt: "Ignite brand ambassador crew in black Claude tees behind a branded registration counter stacked with event caps",
  h1: "Booths and stadiums, staffed and proven.",
  sub: "Multi-shift venue programs where the crew rotates and the leads matter. Shift-level check-ins, badge scans or lead forms synced to CRM, and a per-day recap the sales team gets before the show closes.",
  kpis: [["PER-SHIFT", "CHECK-INS"], ["CRM", "LEAD SYNC"], ["PER-DAY", "RECAPS"], ["FAN", "ENGAGEMENT COUNTS"]],
  captures: ["Shift check-in at the booth or gate", "Lead capture with CRM sync", "Fan and attendee engagement counts", "Booth condition and brand-standard photos", "Sample and giveaway inventory log", "Per-day recap shared to sales before close"],
  modules: ["staff", "verify", "recap", "insights"],
  scenario: {
    who: "A tech brand staffing a 3-day trade show booth with 12 rotating ambassadors.",
    before: "Leads were in three notebooks. Nobody knew which shift produced the demos that converted.",
    after: "Every shift has a check-in, its own lead count, and photos. Sales gets a per-day recap and follows up with the hot leads before the show even ends."
  },
  faq: [["Does Spark trade show lead capture integrate with our CRM?", "Yes. Lead capture syncs via API or exports as CSV to your CRM, tagged to the booth shift and ambassador that captured it."], ["Can we track giveaways and booth inventory in Spark?", "Yes. Inventory log fields on the shift report track giveaways, samples, and collateral by shift and day."], ["How does Spark handle game-day and stadium sampling verification?", "GPS check-in at the venue, geotagged photos, and live counts by gate or section, so sponsors get proof by game rather than an end-of-season estimate."]],
  related: [["/services/trade-shows", "Trade Show Support"], ["/services/sports-marketing-activations", "Sports Marketing Activations"], ["https://sparkbyignite.igniteproductions.co/product/staff", "Staff"]]
}, {
  slug: "campus",
  idx: "08",
  name: "Campus & Student Programs",
  tag: "COLLEGIATE",
  short: "See which ambassadors are on campus right now.",
  img: "https://kyle915.github.io/ignite-webflow-assets/assets/activation-fuel-campus-tent.png",
  alt: "Branded sampling tent on a college campus quad",
  h1: "Student brand manager programs with a live campus map.",
  sub: "A gamified ambassador experience for students, a live map for the brand. Dorm drops, quad activations, and Greek gifting, all GPS-verified and counted. More than 40% of our bench is currently in college.",
  kpis: [["40%+", "OF BENCH IN COLLEGE"], ["LIVE", "ON-CAMPUS MAP"], ["EARN", "TO WIN LEADERBOARD"], ["DORM", "DROPS COUNTED"]],
  captures: ["Campus check-in with a live 'who's on campus' view", "Dorm and door-drop counts by building", "Quad and tailgate activation photos", "Greek life gifting log by chapter", "Leaderboard and earn-to-win points per ambassador", "Semester rollup by campus"],
  modules: ["staff", "verify", "recap", "insights", "network"],
  scenario: {
    who: "An energy brand running student brand managers on 30 campuses for a back-to-school push.",
    before: "Student ambassadors posted to Instagram and sent a spreadsheet at semester end. Nobody knew who actually showed up.",
    after: "Brand sees every campus live. Students compete on an earn-to-win leaderboard. Dorm drops are counted by building and the semester rollup is ready before finals."
  },
  faq: [["Is the Spark ambassador app gamified for student brand managers?", "Yes. Points, leaderboards, and earn-to-win rewards are built into the ambassador experience, which is why student programs actually report."], ["Can brands see which student ambassadors are on campus right now?", "Yes. Live GPS status shows which ambassadors are checked in on which campus, with photos and counts as they land."], ["How does Spark support back-to-school and campus sampling programs?", "Campus-level staffing boards, route or event check-ins, per-campus recaps, and a rollup across every school, with Ignite's bench (40%+ currently in college) available to fill gaps."]],
  related: [["/services/collegiate-marketing", "Collegiate Marketing"], ["https://sparkbyignite.igniteproductions.co/product/network", "Network"], ["https://sparkbyignite.igniteproductions.co/use-cases/street-teams", "Street Teams"]]
}];
const sparkUseCase = slug => SPARK_USECASES.find(u => u.slug === slug);
const sparkProduct = slug => SPARK_PRODUCTS.find(p => p.slug === slug);
const sparkSolution = slug => SPARK_SOLUTIONS.find(s => s.slug === slug);
const SPARK_STATS_SEED = 4210;

/* ============================ SUB-NAV ============================ */
/* maps a page's `active` value onto the nav group that should read as current */
const NAV_ACTIVE_GROUP = {
  product: "product",
  products: "product",
  solutions: "solutions",
  solution: "solutions",
  usecases: "usecases",
  usecase: "usecases",
  compare: "resources",
  trust: "resources",
  demo: "resources"
};
const SparkNav = ({
  active = ""
}) => {
  const [samples, setSamples] = React.useState(SPARK_STATS_SEED);
  const [open, setOpen] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const id = setInterval(() => setSamples(v => v + Math.floor(Math.random() * 4) + 1), 1800);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    const f = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("click", f);
    const k = e => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", k);
    return () => {
      document.removeEventListener("click", f);
      document.removeEventListener("keydown", k);
    };
  }, []);
  const {
    LIME,
    BG,
    MUT,
    FG,
    LINE,
    MONO
  } = SPK;
  const closeT = React.useRef(null);
  const hold = k => {
    if (closeT.current) {
      clearTimeout(closeT.current);
      closeT.current = null;
    }
    setOpen(k);
  };
  const release = k => {
    if (closeT.current) clearTimeout(closeT.current);
    closeT.current = setTimeout(() => setOpen(o => o === k ? null : o), 160);
  };
  const isTouch = typeof window !== "undefined" && !!(window.matchMedia && window.matchMedia("(hover: none)").matches);
  const Drop = ({
    k,
    label,
    href,
    children,
    foot
  }) => /*#__PURE__*/React.createElement("div", {
    className: "sp-navitem",
    onMouseEnter: () => hold(k),
    onMouseLeave: () => release(k)
  }, /*#__PURE__*/React.createElement("a", {
    className: "sp-navlink",
    href: href,
    "aria-expanded": open === k,
    "aria-haspopup": "true",
    "aria-current": NAV_ACTIVE_GROUP[active] === k ? "page" : undefined,
    onClick: e => {
      if (isTouch && open !== k) {
        e.preventDefault();
        setOpen(k);
      }
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "sp-chev"
  }, "\u25BC")), open === k && /*#__PURE__*/React.createElement("div", {
    className: "sp-mega",
    role: "menu"
  }, children, foot));
  return /*#__PURE__*/React.createElement(React.Fragment, null, window.BrandBar ? /*#__PURE__*/React.createElement(BrandBar, {
    rel: "../",
    brand: "spark"
  }) : null, /*#__PURE__*/React.createElement("header", {
    className: "sp-nav",
    ref: ref
  }, /*#__PURE__*/React.createElement(SparkW, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: 62
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/",
    style: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: sparkLogo(),
    alt: "Spark by Ignite",
    style: {
      height: 44,
      width: 106,
      filter: "drop-shadow(0 0 14px rgba(214,243,95,0.35))"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "sp-navlinks",
    "aria-label": "Spark"
  }, /*#__PURE__*/React.createElement(Drop, {
    k: "product",
    label: "Product",
    href: "https://sparkbyignite.igniteproductions.co/explore#modules",
    foot: /*#__PURE__*/React.createElement("div", {
      className: "sp-mega-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sp-foot"
    }, "ONE PLATFORM \xB7 SIX MODULES INCLUDED"), /*#__PURE__*/React.createElement("a", {
      href: "https://sparkbyignite.igniteproductions.co/explore#modules",
      style: {
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: ".12em",
        color: LIME,
        padding: 0
      }
    }, "EXPLORE MODULES \u2192"))
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "01"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Platform overview"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "What Spark is, who runs on it, and what it proves."))), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/#how",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "02"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "How it works"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Request to recap in six steps, one record per activation."))), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/#included",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "03"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Everything included"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Every module, unlimited ambassador seats, no proof tier."))), /*#__PURE__*/React.createElement("a", {
    href: "/spark-retail",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "04"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Spark Retail"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Crowdsourced in-store audits, OOS and price checks.")))), /*#__PURE__*/React.createElement(Drop, {
    k: "solutions",
    label: "Solutions",
    href: "https://sparkbyignite.igniteproductions.co/explore#solutions",
    foot: /*#__PURE__*/React.createElement("div", {
      className: "sp-mega-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sp-foot"
    }, "BY WHO RUNS THE FIELD"), /*#__PURE__*/React.createElement("a", {
      href: "https://sparkbyignite.igniteproductions.co/explore#solutions",
      style: {
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: ".12em",
        color: LIME,
        padding: 0
      }
    }, "COMPARE PATHS \u2192"))
  }, SPARK_SOLUTIONS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.slug,
    href: s.href || "https://sparkbyignite.igniteproductions.co/solutions/" + s.slug,
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, s.idx), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, s.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, s.audience))))), /*#__PURE__*/React.createElement(Drop, {
    k: "usecases",
    label: "Use cases",
    href: "https://sparkbyignite.igniteproductions.co/explore#use-cases",
    foot: /*#__PURE__*/React.createElement("div", {
      className: "sp-mega-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sp-foot"
    }, "BY ACTIVATION TYPE"), /*#__PURE__*/React.createElement("a", {
      href: "https://sparkbyignite.igniteproductions.co/explore#use-cases",
      style: {
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: ".12em",
        color: LIME,
        padding: 0
      }
    }, "ALL USE CASES \u2192"))
  }, SPARK_USECASES.map(u => /*#__PURE__*/React.createElement("a", {
    key: u.slug,
    href: "https://sparkbyignite.igniteproductions.co/use-cases/" + u.slug,
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, u.idx), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, u.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, u.short))))), /*#__PURE__*/React.createElement(Drop, {
    k: "resources",
    label: "Resources",
    href: "https://sparkbyignite.igniteproductions.co/compare",
    foot: /*#__PURE__*/React.createElement("div", {
      className: "sp-mega-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sp-foot"
    }, "PREFER WE RUN IT?"), /*#__PURE__*/React.createElement("a", {
      href: "https://sparkbyignite.igniteproductions.co/",
      style: {
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: ".12em",
        color: LIME,
        padding: 0
      }
    }, "SPARK WITH IGNITE \u2192"))
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/compare",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "01"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Compare"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Spark vs. Repsly, ISDemos, Promomash, spreadsheets."))), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/trust",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "02"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Trust & Data"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Exports, access control, API, and who owns the data."))), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/trust#onboard",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "03"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Onboarding"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Live in week one. No implementation phase."))), /*#__PURE__*/React.createElement("a", {
    href: "/spark-demo",
    role: "menuitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-mi"
  }, "04"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-mt"
  }, "Demo sandbox"), /*#__PURE__*/React.createElement("span", {
    className: "sp-md",
    style: {
      display: "block"
    }
  }, "Gated live demo environment for prospects."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "sp-navlink sp-navprice",
    href: "https://sparkbyignite.igniteproductions.co/",
    "aria-current": active === "pricing" ? "page" : undefined
  }, "Pricing"), /*#__PURE__*/React.createElement("span", {
    className: "sp-navlive",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: MONO,
      fontSize: 10.5,
      letterSpacing: ".14em",
      color: MUT,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(SparkDot, {
    c: LIME,
    s: 6
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: LIME,
      fontWeight: 700
    }
  }, samples.toLocaleString()), " SAMPLES TODAY"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.igniteproductions.co/contact",
    style: {
      padding: "10px 18px",
      borderRadius: 999,
      background: LIME,
      color: BG,
      fontFamily: SPK.SANS,
      fontWeight: 700,
      fontSize: 13,
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, "See Spark on a live program"), /*#__PURE__*/React.createElement("button", {
    className: "sp-mobbtn",
    onClick: () => setMenu(m => !m),
    "aria-expanded": menu,
    "aria-label": menu ? "Close menu" : "Open menu"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MONO,
      fontSize: 15,
      lineHeight: 1
    }
  }, menu ? "×" : "≡")))), menu && /*#__PURE__*/React.createElement("div", {
    className: "sp-mobmenu",
    style: {
      borderTop: `1px solid ${LINE}`,
      background: SPK.CARD,
      maxHeight: "80vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement(SparkW, {
    style: {
      padding: "6px clamp(20px,4vw,48px) 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-mobgrp"
  }, "PRODUCT"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/"
  }, "Platform overview"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/#included"
  }, "Everything included"), /*#__PURE__*/React.createElement("a", {
    href: "/spark-retail"
  }, "Spark Retail"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/explore#modules"
  }, "Explore modules \u2192"), /*#__PURE__*/React.createElement("div", {
    className: "sp-mobgrp"
  }, "SOLUTIONS"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/explore#solutions"
  }, "All solutions \u2192"), SPARK_SOLUTIONS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.slug,
    href: s.href || "https://sparkbyignite.igniteproductions.co/solutions/" + s.slug
  }, s.name)), /*#__PURE__*/React.createElement("div", {
    className: "sp-mobgrp"
  }, "USE CASES"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/explore#use-cases"
  }, "All use cases \u2192"), SPARK_USECASES.map(u => /*#__PURE__*/React.createElement("a", {
    key: u.slug,
    href: "https://sparkbyignite.igniteproductions.co/use-cases/" + u.slug
  }, u.name)), /*#__PURE__*/React.createElement("div", {
    className: "sp-mobgrp"
  }, "MORE"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/compare"
  }, "Compare"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/trust"
  }, "Trust & Data"), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/"
  }, "Spark with Ignite"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1180px){.sp-navlive{display:none !important}}@media (max-width:980px){.sp-navprice{display:none !important}}`)));
};

/* ============================ SHARED BLOCKS ============================ */
/* One source of truth for the numbers that appear in more than one place. */
const SPARK_STATS = {
  bench: "257K+",
  benchLong: "257,000",
  states: "50",
  since: "2018",
  samplesSeed: 4210,
  onTime: "91%",
  photo: "97%",
  recapHours: "24h"
};

/* THE LOOP — one interactive stepper, reused wherever the request→recap story is
   told (platform, module pages, solutions, use cases). `highlight` opens on a
   module; `only` narrows the steps to a subset. */
const SparkLoop = ({
  highlight,
  only,
  title = true,
  eyebrow = "&gt;&gt; THE WORKFLOW"
}) => {
  const {
    LIME,
    FG,
    FG2,
    MUT,
    MONO
  } = SPK;
  const steps = only ? SPARK_PRODUCTS.filter(p => only.includes(p.slug)) : SPARK_PRODUCTS;
  const start = Math.max(0, steps.findIndex(p => p.slug === highlight));
  const [i, setI] = React.useState(start);
  React.useEffect(() => {
    setI(Math.max(0, steps.findIndex(p => p.slug === highlight)));
  }, [highlight]);
  const p = steps[Math.min(i, steps.length - 1)] || steps[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> THE WORKFLOW"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "One record per activation, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "start to proof.")), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 18
    }
  }, "Click any step to see what the platform is doing at that point in the program.")), /*#__PURE__*/React.createElement("div", {
    className: "sp-loopsteps sp-rv",
    role: "tablist",
    "aria-label": "The Spark loop",
    style: {
      marginTop: title ? 36 : 0
    }
  }, steps.map((s, n) => /*#__PURE__*/React.createElement("button", {
    key: s.slug,
    role: "tab",
    "aria-selected": n === i,
    className: "sp-loopstep" + (n === i ? " is-on" : ""),
    onClick: () => setI(n)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-loopnum"
  }, s.idx), /*#__PURE__*/React.createElement("span", {
    className: "sp-loopname"
  }, s.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-loopfoot"
  }, s.tag)))), /*#__PURE__*/React.createElement("div", {
    className: "sp-2col sp-rv",
    style: {
      marginTop: 28,
      gap: 44,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME
    }
  }, "STEP ", p.idx, " \xB7 ", p.tag), /*#__PURE__*/React.createElement("h3", {
    className: "sp-h3",
    style: {
      margin: "12px 0 0",
      fontSize: 30,
      color: FG
    }
  }, p.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: 15.5,
      lineHeight: 1.62,
      color: FG2,
      maxWidth: 58 + "ch"
    }
  }, p.sub), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "22px 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, p.caps.slice(0, 4).map(c => /*#__PURE__*/React.createElement("li", {
    key: c,
    style: {
      display: "flex",
      gap: 10,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: FG2
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: LIME,
      fontFamily: MONO,
      fontSize: 12,
      paddingTop: 2
    }
  }, "\u25B8"), c))), /*#__PURE__*/React.createElement("a", {
    href: "https://sparkbyignite.igniteproductions.co/product/" + p.slug,
    style: {
      display: "inline-flex",
      gap: 8,
      marginTop: 24,
      fontFamily: MONO,
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: LIME,
      textDecoration: "none"
    }
  }, "Explore ", p.name, " ", /*#__PURE__*/React.createElement("span", null, "\u2192"))), /*#__PURE__*/React.createElement(SparkMock, {
    mock: p.mock
  })));
};
const SparkTicker = ({
  items
}) => {
  const list = items || [["●", "LIVE"], ["4,228", "SAMPLES TODAY"], ["142", "ON-SITE NOW"], ["17", "MARKETS ACTIVE"], ["↑ 91%", "ON-TIME RATE"], ["23", "EVENTS / 6 STATES"], ["", "GPS-VERIFIED CHECK-INS"], ["", "AUTO-GENERATED RECAPS"], ["↑ +14%", "WOW"]];
  const row = list.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, it[0] && /*#__PURE__*/React.createElement("b", null, it[0], " "), it[1], /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      marginLeft: 44,
      color: "rgba(250,250,247,.2)"
    }
  }, "\xB7")));
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-ticker",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-marchrow"
  }, row, row));
};
const SparkMock = ({
  mock
}) => {
  const {
    LIME,
    MUT,
    LINE,
    MONO
  } = SPK;
  const [n, setN] = React.useState(1);
  React.useEffect(() => {
    const id = setInterval(() => setN(v => v >= mock.rows.length ? 1 : v + 1), 900);
    return () => clearInterval(id);
  }, [mock.rows.length]);
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-mockbar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#FFBD2E"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sp-url"
  }, mock.url)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot"
  }, mock.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SparkDot, {
    c: LIME,
    s: 6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MONO,
      fontSize: 9,
      color: LIME
    }
  }, "LIVE"))), mock.rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sp-row",
    style: {
      opacity: i < n ? 1 : .18,
      transition: "opacity .4s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-t"
  }, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]), /*#__PURE__*/React.createElement("span", {
    className: "sp-s",
    style: {
      color: /BEHIND|OPEN|REVIEW|NEW/.test(r[2]) ? "#FFB627" : LIME
    }
  }, r[2]))), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot",
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: `1px solid ${LINE}`,
      color: MUT
    }
  }, "// ", mock.rows.length, " RECORDS \xB7 GPS-STAMPED \xB7 EXPORTABLE")));
};
const SparkProductGrid = ({
  title = true,
  only
}) => {
  const {
    LIME,
    MUT,
    FG,
    FG2
  } = SPK;
  const list = only ? SPARK_PRODUCTS.filter(p => only.includes(p.slug)) : SPARK_PRODUCTS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> THE PLATFORM"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "Six modules. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "One loop."))), /*#__PURE__*/React.createElement("div", {
    className: "sp-rv " + (list.length > 4 ? "sp-3col" : "sp-2x2"),
    style: {
      marginTop: title ? 44 : 0
    }
  }, list.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: "https://sparkbyignite.igniteproductions.co/product/" + p.slug,
    className: "sp-tile"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SPK.MONO,
      fontSize: 22,
      fontWeight: 700,
      color: LIME
    }
  }, p.idx), /*#__PURE__*/React.createElement("span", {
    className: "sp-pill"
  }, p.tag)), /*#__PURE__*/React.createElement("h3", {
    className: "sp-h3",
    style: {
      margin: 0,
      fontSize: 24,
      color: FG
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: FG2,
      flex: 1
    }
  }, p.short), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SPK.MONO,
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: LIME
    }
  }, "Explore ", /*#__PURE__*/React.createElement("span", {
    className: "sp-arrow"
  }, "\u2192"))))));
};
const SparkSolutionGrid = ({
  title = true
}) => {
  const {
    LIME,
    FG,
    FG2,
    MUT
  } = SPK;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> SOLUTIONS"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "Built for whoever ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "runs the field."))), /*#__PURE__*/React.createElement("div", {
    className: "sp-3col sp-rv",
    style: {
      marginTop: title ? 44 : 0
    }
  }, SPARK_SOLUTIONS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.slug,
    href: s.href || "https://sparkbyignite.igniteproductions.co/solutions/" + s.slug,
    className: "sp-tile"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-foot",
    style: {
      color: LIME
    }
  }, "* ", s.idx), /*#__PURE__*/React.createElement("h3", {
    className: "sp-h3",
    style: {
      margin: 0,
      fontSize: 24,
      color: FG
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: MUT
    }
  }, s.audience), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: FG2,
      flex: 1
    }
  }, s.h1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SPK.MONO,
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: LIME
    }
  }, "See solution ", /*#__PURE__*/React.createElement("span", {
    className: "sp-arrow"
  }, "\u2192"))))));
};
const SparkUseCaseGrid = ({
  title = true,
  only,
  cols = "sp-4col"
}) => {
  const {
    LIME,
    FG,
    FG2,
    MUT,
    LINE
  } = SPK;
  const list = only ? SPARK_USECASES.filter(u => only.includes(u.slug)) : SPARK_USECASES;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> USE CASES"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, "Every kind of field work, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: LIME,
      fontStyle: "italic"
    }
  }, "one system."))), /*#__PURE__*/React.createElement("div", {
    className: cols + " sp-rv",
    style: {
      marginTop: title ? 44 : 0
    }
  }, list.map(u => /*#__PURE__*/React.createElement("a", {
    key: u.slug,
    href: "https://sparkbyignite.igniteproductions.co/use-cases/" + u.slug,
    className: "sp-tile sp-uc",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      overflow: "hidden",
      borderBottom: `1px solid ${LINE}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: u.img,
    alt: u.alt,
    loading: "lazy",
    decoding: "async",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "saturate(.85)",
      transition: "transform .5s"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sp-pill sp-pill-lime",
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      background: "rgba(10,11,13,.75)"
    }
  }, u.idx, " \xB7 ", u.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sp-h3",
    style: {
      margin: 0,
      fontSize: 19,
      color: FG
    }
  }, u.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: FG2,
      flex: 1
    }
  }, u.short), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: SPK.MONO,
      fontSize: 10.5,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: LIME
    }
  }, "See use case ", /*#__PURE__*/React.createElement("span", {
    className: "sp-arrow"
  }, "\u2192")))))), /*#__PURE__*/React.createElement("style", null, `a.sp-uc:hover img{transform:scale(1.04)}`));
};
const SparkCta = ({
  h = "See your own program on it.",
  sub = "Bring a real program to the demo, not a hypothetical. We'll show you your next activation in Spark, with your markets and your accounts on the map."
}) => {
  const {
    LIME,
    FG2,
    MUT
  } = SPK;
  return /*#__PURE__*/React.createElement(SparkSec, {
    label: "Closing CTA",
    bg: SPK.CARD
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: "https://kyle915.github.io/ignite-webflow-assets/assets/chrome-bg-dark-1200.png",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .45,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(SparkW, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-rv",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SparkEyebrow, {
    color: LIME
  }, ">> READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
    className: "sp-h2"
  }, h), /*#__PURE__*/React.createElement("p", {
    className: "sp-lede",
    style: {
      marginTop: 22
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "sp-btn",
    href: "https://www.igniteproductions.co/contact"
  }, "See Spark on a live program ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "sp-ghost",
    href: "https://www.igniteproductions.co/contact"
  }, "Talk to a human")), /*#__PURE__*/React.createElement("p", {
    className: "sp-foot",
    style: {
      marginTop: 36
    }
  }, "VETERAN-OWNED \xB7 NATIONWIDE \xB7 SINCE 2018"))));
};
const SparkFaq = ({
  items,
  h = "Questions"
}) => /*#__PURE__*/React.createElement(SparkSec, {
  label: "FAQ"
}, /*#__PURE__*/React.createElement(SparkW, null, /*#__PURE__*/React.createElement("div", {
  className: "sp-2col sp-rv",
  style: {
    alignItems: "start",
    gap: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SparkEyebrow, null, ">> QUESTIONS"), /*#__PURE__*/React.createElement("h2", {
  className: "sp-h2"
}, h)), /*#__PURE__*/React.createElement("div", {
  className: "sp-faq",
  style: {
    borderBottom: `1px solid ${SPK.LINE}`
  }
}, items.map(([q, a], i) => /*#__PURE__*/React.createElement("details", {
  key: q,
  open: i === 0
}, /*#__PURE__*/React.createElement("summary", null, q), /*#__PURE__*/React.createElement("p", null, a)))))));
const sparkSetMeta = ({
  title,
  desc,
  canonical,
  ld,
  faq
}) => {
  document.title = title;
  const set = (sel, attr, val) => {
    let m = document.querySelector(sel);
    if (!m) {
      m = document.createElement("meta");
      const [k, v] = sel.replace(/^meta\[|\]$/g, "").split("=");
      m.setAttribute(k, v.replace(/"/g, ""));
      document.head.appendChild(m);
    }
    m.setAttribute(attr, val);
  };
  set('meta[name="description"]', "content", desc);
  set('meta[property="og:title"]', "content", title);
  set('meta[property="og:description"]', "content", desc);
  let c = document.querySelector('link[rel="canonical"]');
  if (!c) {
    c = document.createElement("link");
    c.rel = "canonical";
    document.head.appendChild(c);
  }
  c.href = canonical;
  if (ld) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }
  if (faq && faq.length) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      }))
    });
    document.head.appendChild(s);
  }
};
Object.assign(window, {
  SPK,
  SparkW,
  SparkEyebrow,
  SparkSec,
  SparkDot,
  sparkLogo,
  SPARK_STATS,
  SparkLoop,
  useSparkReveal,
  useSparkCount,
  useSparkInView,
  SPARK_PRODUCTS,
  SPARK_SOLUTIONS,
  SPARK_USECASES,
  sparkProduct,
  sparkSolution,
  sparkUseCase,
  SparkNav,
  SparkTicker,
  SparkMock,
  SparkProductGrid,
  SparkSolutionGrid,
  SparkUseCaseGrid,
  SparkCta,
  SparkFaq,
  sparkSetMeta
});
})();
