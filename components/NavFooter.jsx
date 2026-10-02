/* Top nav + footer — used on every page. SERVICES exposes a hover mega-menu. */
const { useState: useNavState, useEffect: useNavEffect, useRef: useNavRef } = React;

/* Services taxonomy — grouped for nav mega menu + footer. 21 service pages across 7 groups. */
const SITE_SERVICE_GROUPS = [
  {
    name: "Staffing & Talent",
    accent: "ignite",
    services: [
      { slug: "brand-ambassador-agency",         label: "Brand Ambassador Agency",       sub: "257K+ vetted ambassadors, all 50 states", href: "pages/brand-ambassador-agency.html" },
      { slug: "event-staffing",                  label: "Event Staffing",                sub: "257K+ ambassadors, 50 states, 48hr rush" },
      { slug: "bilingual-brand-ambassadors",     label: "Bilingual Brand Ambassadors",   sub: "Spanish-language + multicultural BAs" },
      { slug: "brand-ambassador-management",     label: "BA Management",                 sub: "Managed bench, not a marketplace" },
    ]
  },
  {
    name: "Sampling",
    accent: "spark",
    services: [
      { slug: "product-sampling",                label: "Product Sampling",              sub: "GPS-verified counts, retail + event + street" },
      { slug: "on-premise-sampling",             label: "On-Premise Sampling",           sub: "TIPS-certified pours, bars, restaurants" },
      { slug: "street-teams",                    label: "Street Teams",                  sub: "Cans in hands, festival corridors, guerrilla" },
    ]
  },
  {
    name: "Retail Programs",
    accent: "ignite",
    services: [
      { slug: "retail-demo-programs",            label: "Retail Demo Programs",          sub: "In-store demos at Whole Foods, Costco, Target" },
      { slug: "retail-merchandising",            label: "Retail Merchandising",          sub: "Per-store audits, OOS recovery, planogram" },
      { slug: "shopper-marketing",               label: "Shopper Marketing",             sub: "End-cap, POS, in-aisle, scan-back" },
      { slug: "qsr-restaurant-activations",      label: "QSR / Restaurant",              sub: "Brand activations inside QSR + casual dining" },
    ]
  },
  {
    name: "Trade & Distributor",
    accent: "amber",
    services: [
      { slug: "trade-shows",                     label: "Trade Show Support",            sub: "Booth staffing, lead capture, demos" },
      { slug: "distributor-demo-programs",       label: "Distributor Demo Programs",     sub: "GSM, ride-along, 3-tier coordination" },
      { slug: "sports-marketing-activations",    label: "Sports Marketing",              sub: "Stadium, match-day, league activation" },
      { slug: "collegiate-marketing",            label: "Collegiate Marketing",          sub: "200+ campuses · move-in / game-day / Greek / finals" },
      { slug: "festival-brand-activations",      label: "Festival Brand Activations",    sub: "ACL, Coachella, Lolla, Bonnaroo, EDC" },
    ]
  },
  {
    name: "Experiential",
    accent: "ignite",
    services: [
      { slug: "experiential-marketing",          label: "Experiential Marketing",        sub: "Pop-ups, immersive installations, brand worlds" },
      { slug: "event-production",                label: "Event Production",              sub: "Brief to strike: show flow, vendors, AV, crew" },
      { slug: "mobile-tours",                    label: "Mobile Marketing Tours",        sub: "Ad trucks, branded bikes, sprinter vans" },
      { slug: "fabrication-builds",              label: "Fabrication & Builds",          sub: "Custom builds, scenic fab, photo ops" },
      { slug: "field-marketing",                 label: "Field Marketing",               sub: "Always-on field force, route + cadence" },
      { slug: "sponsorship-partnerships",        label: "Sponsorship & Partnerships",    sub: "Source, negotiate, activate, measure" },
    ]
  },
  {
    name: "Hospitality & Events",
    accent: "ignite",
    services: [
      { slug: "event-production",                label: "Event Production",              sub: "Brief to strike: show flow, vendors, AV, crew" },
      { slug: "weddings",                        label: "Weddings & Private Events",     sub: "White-glove staffing, VIP + hospitality teams", href: "pages/weddings.html" },
      { slug: "travel",                          label: "Group & Event Travel",          sub: "In-house group travel, room blocks, on-site ops", href: "pages/travel.html" },
      { slug: "pop-up-retail",                   label: "Pop-Up & Branded Retail",       sub: "Temporary storefronts, residencies, takeovers" },
    ]
  },
  {
    name: "Creative & Content",
    accent: "ignite",
    services: [
      { slug: "content-capture",                 label: "Content & Capture Crews",       sub: "Photo, video, UGC — launch-ready, same week" },
      { slug: "creative-design-studio",          label: "Creative & Design Studio",      sub: "Campaign creative, key art, POS, packaging" },
      { slug: "influencer-creator",              label: "Influencer & Creator Marketing",sub: "Seeding, creator events, paid creator programs" },
    ]
  },
  {
    name: "Sales & Distribution",
    accent: "ignite",
    services: [
      { slug: "fractional-sales-team",           label: "Fractional Sales Team",         sub: "A senior, embedded CPG sales team — scaled monthly", href: "pages/services-fractional-sales-team.html" },
      { slug: "retail-sales-broker-management",   label: "Broker & Retail Sales Mgmt",    sub: "Selection, scorecards, QBRs, accountability", href: "pages/services-retail-sales-broker-management.html" },
      { slug: "buyer-pitch-line-reviews",         label: "Buyer Pitch & Line Reviews",    sub: "Category story, deck, and rehearsal that wins the slot", href: "pages/services-buyer-pitch-line-reviews.html" },
      { slug: "trade-marketing-management",       label: "Trade Marketing",               sub: "Co-op, MDF, scan-back — a calendar tied to your P&L", href: "pages/services-trade-marketing-management.html" },
      { slug: "distribution-expansion",           label: "Distribution Expansion",        sub: "Right-door targeting + demos that protect velocity", href: "pages/services-distribution-expansion.html" },
      { slug: "retail-readiness",                 label: "Retail Readiness & Margin",     sub: "Pricing, margin, and packaging fixed before you pitch", href: "pages/services-retail-readiness.html" },
    ]
  },
  {
    name: "Strategy & Growth",
    accent: "amber",
    services: [
      { slug: "brand-strategy",                  label: "Brand & Activation Strategy",   sub: "Positioning, channel + market planning, calendars" },
      { slug: "agency-of-record", href: "pages/agency-of-record.html", label: "Agency of Record",       sub: "One team for field + experiential, all year" },
      { slug: "sweepstakes-activations",         label: "Sweepstakes & Contests",        sub: "Bonded, compliant, CRM-synced" },
      { slug: "crm-lifecycle",                   label: "CRM & Lifecycle",               sub: "Email + SMS journeys from field-captured leads" },
      { slug: "promotional-products",            label: "Promotional Products",          sub: "Branded merch, swag kits, fulfillment" },
      { slug: "logistics-kitting",               label: "Logistics & Kitting",           sub: "Kit assembly, warehousing, market-by-market shipping" },
    ]
  },
  {
    name: "Reporting",
    accent: "spark",
    services: [
      { slug: "event-reporting-recaps",          label: "Event Recap & Reporting",       sub: "Powered by Spark — recaps in hours, not weeks" },
      { slug: "spark",                           label: "Spark Platform",                sub: "The field-marketing dashboard — GPS, photos, samples, auto recaps", href: "pages/spark.html" },
      { slug: "spark-retail",                    label: "Spark Retail Execution",        sub: "Crowdsourced in-store audits, OOS + price checks — vetted field force", href: "pages/spark-retail.html" },
      { slug: "ai-management",                   label: "AI Management",                 sub: "We run the AI layer — recaps, forecasting, creative, audience scoring", href: "pages/services-ai-management.html" },
    ]
  },
];

/* Flat list (derived) — used wherever a flat iteration is needed. */
const SITE_SERVICES = SITE_SERVICE_GROUPS.flatMap(g => g.services);

/* Category color tokens, one per lane, in the fixed SITE_SERVICE_GROUPS order.
   Each parent (and its children) inherit their hint color from here. */
const CAT_VARS = [
  "--cat-staffing", "--cat-sampling", "--cat-retail-programs", "--cat-trade-distributor",
  "--cat-experiential", "--cat-hospitality-events", "--cat-creative-content",
  "--cat-sales-distribution", "--cat-strategy-growth", "--cat-reporting",
];
const svcHref = (rel, s) => s.href ? rel + s.href : rel + "pages/services-" + s.slug + ".html";

const NAV_ITEMS = [
  { label: "SPARK",       href: "pages/spark-platform-v2.html", spark: true },
  { label: "FRACTIONAL",  href: "pages/fractional.html" },
  { sep: true },
  { label: "SERVICES",    href: "pages/services.html", mega: "services" },
  { label: "INDUSTRIES",  href: "pages/industries.html" },
  { label: "MARKETS",     href: "pages/markets.html" },
  { label: "OUR WORK",    href: "pages/work.html" },
  { label: "ABOUT US",    children: [["About Ignite", "pages/about.html"], ["Blog", "pages/blog.html"], ["Contact", "https://www.igniteproductions.co/contact"]] },
];

/* ============================================================
   BRAND BAR — parent switcher above every site header.
   Two brands under one house: Ignite (services) / Spark (software).
   rel: "" on root, "../" inside /pages/. brand: "ignite" | "spark".
   ============================================================ */
const BRAND_BAR_CSS = `
.bb-bar{background:#000;border-bottom:1px solid rgba(255,255,255,0.16);position:relative;z-index:90}
.bb-in{max-width:1480px;margin:0 auto;padding:0 32px;height:46px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.bb-tabs{display:flex;align-items:stretch;height:46px;gap:40px}
.bb-tab{display:inline-flex;align-items:center;padding:0;position:relative;text-decoration:none;opacity:.4;transition:opacity 180ms var(--ease-out)}
.bb-tab:hover,.bb-tab:focus-visible{opacity:.85}
.bb-tab[aria-current="page"]{opacity:1}
.bb-tab[aria-current="page"]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--bb-accent)}
.bb-ig{height:15px;width:auto;display:block}
.bb-sp{height:18px;width:auto;display:block}
.bb-cross{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-mono);font-size:9.5px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:rgba(250,250,247,0.5);text-decoration:none;white-space:nowrap;transition:color 160ms var(--ease-out)}
.bb-cross:hover{color:#FAFAF7;animation-play-state:paused}
.bb-bar[data-brand="ignite"] .bb-cross,.bb-bar[data-brand="spark"] .bb-cross{color:#D6F35F;animation:bb-pulse 2.2s ease-in-out infinite}
@keyframes bb-pulse{0%,100%{color:rgba(214,243,95,.55);text-shadow:0 0 0 rgba(214,243,95,0)}50%{color:#D6F35F;text-shadow:0 0 12px rgba(214,243,95,.7)}}
@media (prefers-reduced-motion:reduce){.bb-cross{animation:none!important;color:#D6F35F}}
@keyframes nav-spark-dot{0%,100%{opacity:1}50%{opacity:.3}}
.bb-cross .bb-arr{transition:transform 160ms var(--ease-out)}
.bb-cross:hover .bb-arr{transform:translateX(3px)}
@media (max-width:760px){.bb-in{padding:0 18px;height:42px}.bb-tabs{height:42px;gap:28px}.bb-cross{display:none}}
`;
const BrandBar = ({ rel = "", brand = "ignite" }) => {
  const igniteHref = rel + "index.html";
  const sparkHref = rel + "pages/spark-platform.html";
  const onSpark = brand === "spark";
  return (
    <div className="bb-bar" data-brand={brand}>
      <style>{BRAND_BAR_CSS}</style>
      <div className="bb-in">
        <nav className="bb-tabs" aria-label="Ignite brands">
          <a className="bb-tab" href={igniteHref} aria-current={onSpark ? undefined : "page"} style={{ "--bb-accent": "var(--ignite-500)" }}>
            <img className="bb-ig" src={window.__resources?.r_assets_ignite_typemark_white_png || (rel + "assets/ignite-typemark-white.png")} alt="Ignite Productions" loading="lazy" decoding="async"/>
          </a>
          <a className="bb-tab" href={sparkHref} aria-current={onSpark ? "page" : undefined} style={{ "--bb-accent": "var(--spark-500)" }}>
            <img className="bb-sp" src={window.__resources?.r_assets_spark_logo_full_white_webp || (rel + "assets/spark-logo-full-white.webp")} alt="Spark by Ignite" loading="lazy" decoding="async"/>
          </a>
        </nav>
        <a className="bb-cross" href={onSpark ? igniteHref : sparkHref}>
          {onSpark ? "Spark is by Ignite. See the full agency" : "See the software behind every program"}
          <span className="bb-arr" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

/* rel: "" when on root, "../" when on a page inside /pages/ */
const SiteNav = ({ rel = "", active = "", activeService = "", brand = "ignite" }) => {
  const [scrolled, setScrolled] = useNavState(false);
  const [megaOpen, setMegaOpen] = useNavState(null);
  const [activeCat, setActiveCat] = useNavState(0);      // desktop master–detail
  const [openParent, setOpenParent] = useNavState(0);    // mobile accordion
  const [isTouch, setIsTouch] = useNavState(false);
  const [mobileOpen, setMobileOpen] = useNavState(false);
  const [drawerSvc, setDrawerSvc] = useNavState(false);
  const [drawerAbout, setDrawerAbout] = useNavState(false);
  const closeTimer = useNavRef(null);
  const railRefs = useNavRef([]);

  useNavEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true }); h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Wheel-lerp smooth scroll now lives in styles/smooth-scroll.js, loaded by
     every page so pages without this nav get it too. */

  useNavEffect(() => {
    const mq = window.matchMedia("(max-width: 1080px)");
    const on = () => setIsTouch(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => { mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on); };
  }, []);

  useNavEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useNavEffect(() => {
    if (!megaOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMegaOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  const openMega = (key) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setMegaOpen(key);
  };
  const closeMegaSoon = () => {
    if (isTouch) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(null), 160);
  };

  // Arrow-key navigation for the desktop left rail
  const onRailKey = (e, i) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const n = SITE_SERVICE_GROUPS.length;
      const next = e.key === "ArrowDown" ? (i + 1) % n : (i - 1 + n) % n;
      setActiveCat(next);
      const el = railRefs.current[next];
      if (el) el.focus();
    }
  };

  return (
    <>
    <BrandBar rel={rel} brand={brand}/>
    <header style={{
      position: "sticky", top: 0, zIndex: 80,
      background: scrolled ? "rgba(10,11,13,0.92)" : "rgba(10,11,13,0.55)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      transition: "background 200ms var(--ease-out), border-color 200ms var(--ease-out)",
    }}>
      <div style={{
        maxWidth: 1480, margin: "0 auto", padding: "0 32px", height: 98,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        <a href={rel + "index.html"} aria-label="Ignite Productions — home" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <img
            src={window.__resources?.r_assets_ignite_typemark_white_png || (rel + "assets/ignite-typemark-white.png")}
            alt="Ignite"
            height="41"
            style={{ height: 41, width: "auto", display: "block" }} loading="lazy" decoding="async"
          />
        </a>
        <nav style={{ display: "flex", gap: 28 }}>
          {NAV_ITEMS.map(it => {
            if (it.sep) return (
              <span key="sep" aria-hidden="true" style={{
                alignSelf: "center", color: "var(--fg-3)", fontSize: 14, lineHeight: 1,
                margin: "0 2px", userSelect: "none",
              }}>·</span>
            );
            const isActive = active === it.label;
            const hasMega = !!it.mega;
            const isSpark = it.label === "SPARK";
            const isFractional = it.label === "FRACTIONAL";
            const activeInk = isSpark ? "var(--spark-500)" : "var(--ignite-500)";
            const gradientActive = isActive && isFractional;
            const hasChildren = !!it.children;
            const dropKey = hasChildren ? "drop:" + it.label : null;
            if (hasChildren) {
              const dropOpen = megaOpen === dropKey;
              return (
                <div key={it.label}
                  onMouseEnter={() => openMega(dropKey)}
                  onMouseLeave={() => closeMegaSoon()}
                  style={{ position: "relative" }}
                >
                  <span
                    role="button" tabIndex={0}
                    aria-haspopup="true" aria-expanded={dropOpen}
                    onClick={() => setMegaOpen(dropOpen ? null : dropKey)}
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: dropOpen ? "var(--fg-1)" : "var(--fg-2)", cursor: "default",
                      padding: "8px 0", display: "inline-flex", alignItems: "center", gap: 6,
                      transition: "color 160ms var(--ease-out)", userSelect: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg-1)")}
                    onMouseLeave={(e) => !dropOpen && (e.currentTarget.style.color = "var(--fg-2)")}
                  >
                    {it.label}
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"
                      style={{ opacity: 0.6, display: "inline-block", marginTop: 1, transform: dropOpen ? "rotate(180deg)" : "none", transition: "transform 160ms var(--ease-out)" }}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {dropOpen && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 10px)", left: 0, minWidth: 190,
                      background: "rgba(10,11,13,0.97)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(255,255,255,0.10)", borderRadius: 12, padding: 8,
                      display: "flex", flexDirection: "column", gap: 2,
                      boxShadow: "0 20px 44px rgba(0,0,0,0.5)", zIndex: 90,
                    }}>
                      {it.children.map(([clabel, chref]) => (
                        <a key={clabel} href={rel + chref}
                          style={{
                            fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 500,
                            letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-2)",
                            padding: "11px 14px", borderRadius: 8, whiteSpace: "nowrap",
                            transition: "color 140ms var(--ease-out), background 140ms var(--ease-out)",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-1)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-2)"; e.currentTarget.style.background = "transparent"; }}
                        >{clabel}</a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div key={it.label}
                onMouseEnter={() => hasMega && openMega(it.mega)}
                onMouseLeave={() => hasMega && closeMegaSoon()}
                style={{ position: "relative" }}
              >
                <a href={rel + it.href}
                  aria-haspopup={hasMega ? "true" : undefined}
                  aria-expanded={hasMega ? (megaOpen === it.mega) : undefined}
                  onClick={(e) => {
                    if (hasMega && isTouch) {
                      e.preventDefault();
                      setMegaOpen(megaOpen === it.mega ? null : it.mega);
                    }
                  }}
                  style={{
                  fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: isActive ? activeInk : (isSpark ? "var(--spark-500)" : "var(--fg-2)"),
                  ...(gradientActive ? { background: "var(--fractional-prism)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" } : {}),
                  position: "relative", padding: "8px 0",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  transition: "color 160ms var(--ease-out)",
                }}
                onMouseEnter={(e) => !isActive && (e.currentTarget.style.color = "var(--fg-1)")}
                onMouseLeave={(e) => !isActive && (e.currentTarget.style.color = isSpark ? "var(--spark-500)" : "var(--fg-2)")}
                >
                  {isSpark && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: 999, background: "var(--spark-500)", boxShadow: "0 0 8px var(--spark-500)", animation: "nav-spark-dot 1.6s ease-in-out infinite" }}/>}
                  {it.label}
                  {hasMega && (
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"
                      style={{ opacity: 0.6, display: "inline-block", marginTop: 1 }}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              </div>
            );
          })}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span className="nav-cta-desktop">
            <AccentBtn size="sm" accent="spark" onClick={() => location.href = "https://www.igniteproductions.co/contact"}>
              GET IN TOUCH
            </AccentBtn>
          </span>
          <button className="nav-burger" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            style={{ display: "none", width: 44, height: 44, alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 10, cursor: "pointer", color: "#fff", flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen
                ? <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                : <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* SERVICES mega-menu — desktop master–detail / mobile accordion */}
      <style>{`
        .nav-burger { display: none; }
        @media (max-width: 1080px) {
          .nav-burger { display: inline-flex !important; }
          .nav-cta-desktop { display: none !important; }
        }
        @media (min-width: 1081px) { .nav-drawer { display: none !important; } }
        .nav-drawer-link { display: flex; align-items: center; min-height: 54px; font-family: var(--font-mono); font-size: 14px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .nav-drawer-row { width: 100%; display: flex; align-items: center; justify-content: space-between; min-height: 54px; font-family: var(--font-mono); font-size: 14px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.08); cursor: pointer; text-align: left; }
        .svc-child { transition: background 130ms var(--ease-out); }
        .svc-child:hover, .svc-child:focus-visible { background: rgba(255,255,255,0.05); outline: none; }
        .svc-child:hover .svc-tick, .svc-child:focus-visible .svc-tick { transform: translateY(-50%) scaleY(1) !important; }
        .svc-child:focus-visible { box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18); border-radius: 6px; }
      `}</style>
      <div
        role="menu"
        aria-label="Services"
        onMouseEnter={() => !isTouch && openMega("services")}
        onMouseLeave={closeMegaSoon}
        style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(10,11,13,0.98)", backdropFilter: "blur(18px)",
          borderBottom: megaOpen === "services" ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          opacity: megaOpen === "services" ? 1 : 0,
          pointerEvents: megaOpen === "services" ? "auto" : "none",
          transform: megaOpen === "services" ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
          overflow: "hidden",
        }}
      >
        {isTouch ? (
          /* ---------- Mobile / tablet: accordion ---------- */
          <div style={{ maxHeight: "calc(100vh - 98px)", overflowY: "auto", padding: "8px 20px 20px" }}>
            {SITE_SERVICE_GROUPS.map((g, gi) => {
              const cat = `var(${CAT_VARS[gi]})`;
              const isOpen = openParent === gi;
              return (
                <div key={g.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <button
                    onClick={() => setOpenParent(isOpen ? null : gi)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%", minHeight: 52, display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 12, padding: "0 4px",
                      background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                    }}>
                      <span style={{ color: cat }}>{String(gi+1).padStart(2,"0")}</span>
                      <span style={{ color: "#fff" }}>{" · "}</span>
                      <span style={{ color: "#fff", borderBottom: `2px solid ${isOpen ? cat : "transparent"}`, paddingBottom: 2, transition: "border-color 130ms var(--ease-out)" }}>{g.name}</span>
                    </span>
                    <span style={{ color: "var(--fg-3)", fontSize: 12, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 150ms var(--ease-out)" }}>▾</span>
                  </button>
                  <div style={{ overflow: "hidden", maxHeight: isOpen ? 1200 : 0, transition: "max-height 200ms var(--ease-out)" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: 8 }}>
                      {g.services.map((s) => {
                        const isCur = activeService && activeService === s.slug;
                        return (
                          <a key={s.slug} href={svcHref(rel, s)} role="menuitem"
                            aria-current={isCur ? "page" : undefined}
                            style={{
                              display: "block", minHeight: 48, padding: "9px 4px 9px 14px",
                              borderLeft: `2px solid ${isCur ? cat : "transparent"}`,
                              textDecoration: "none",
                            }}>
                            <span style={{
                              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "-0.015em", color: "#fff",
                              borderBottom: isCur ? `2px solid ${cat}` : "none", paddingBottom: isCur ? 1 : 0,
                            }}>{s.label}</span>
                            <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.35, color: "var(--fg-3)", marginTop: 2 }}>{s.sub}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            <a href={rel + "pages/services.html"} style={{
              display: "inline-block", marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.22em", color: "var(--fg-2)", textTransform: "uppercase",
            }}>ALL CAPABILITIES →</a>
          </div>
        ) : (
          /* ---------- Desktop: master–detail ---------- */
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "28px 32px 32px", display: "grid", gridTemplateColumns: "minmax(240px, 1fr) 3fr", gap: 40, maxHeight: "calc(100vh - 98px)", overflowY: "auto" }}>
            {/* Left rail — parent categories */}
            <div role="menu" aria-orientation="vertical" style={{ display: "flex", flexDirection: "column", gap: 2, borderRight: "1px solid rgba(255,255,255,0.08)", paddingRight: 24 }}>
              {SITE_SERVICE_GROUPS.map((g, gi) => {
                const cat = `var(${CAT_VARS[gi]})`;
                const isActive = activeCat === gi;
                return (
                  <button key={g.name}
                    ref={(el) => railRefs.current[gi] = el}
                    role="menuitem"
                    tabIndex={megaOpen === "services" ? 0 : -1}
                    onMouseEnter={() => setActiveCat(gi)}
                    onFocus={() => setActiveCat(gi)}
                    onKeyDown={(e) => onRailKey(e, gi)}
                    style={{
                      display: "flex", alignItems: "center", gap: 10, minHeight: 40,
                      padding: "8px 12px", borderRadius: 6, cursor: "pointer", textAlign: "left",
                      background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                      border: "none", borderLeft: `2px solid ${isActive ? cat : "transparent"}`,
                      transition: "background 130ms var(--ease-out)",
                      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "#fff", opacity: isActive ? 1 : 0.62,
                    }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      <span style={{ color: cat }}>{String(gi+1).padStart(2,"0")}</span>
                      <span style={{ color: "#fff" }}>{" · "}</span>
                      <span style={{ color: "#fff", borderBottom: `2px solid ${isActive ? cat : "transparent"}`, paddingBottom: 2, transition: "border-color 130ms var(--ease-out)" }}>{g.name}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right panel — children of the active parent */}
            <div>
              {(() => {
                const g = SITE_SERVICE_GROUPS[activeCat];
                const cat = `var(${CAT_VARS[activeCat]})`;
                return (
                  <>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "#fff", display: "inline-block", borderBottom: `3px solid ${cat}`, paddingBottom: 5 }}>{g.name}</div>
                      <a href={rel + "pages/services.html"} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.22em", color: "var(--fg-2)", textTransform: "uppercase", whiteSpace: "nowrap", textDecoration: "underline", textDecorationColor: cat, textUnderlineOffset: "4px", textDecorationThickness: "1.5px" }}>ALL CAPABILITIES →</a>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px 24px" }}>
                      {g.services.map((s) => {
                        const isCur = activeService && activeService === s.slug;
                        return (
                          <a key={s.slug} href={svcHref(rel, s)} role="menuitem"
                            aria-current={isCur ? "page" : undefined}
                            className="svc-child"
                            style={{
                              position: "relative", display: "block", padding: "10px 12px 10px 16px",
                              borderRadius: 6, textDecoration: "none", "--cat": cat,
                            }}>
                            {/* hover tick (left edge) */}
                            <span aria-hidden="true" className="svc-tick" style={{
                              position: "absolute", left: 4, top: "50%", transform: "translateY(-50%) scaleY(0)",
                              width: 3, height: 22, borderRadius: 2, background: cat,
                              transition: "transform 120ms var(--ease-out)", transformOrigin: "center",
                            }}/>
                            <span style={{
                              display: "inline", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
                              letterSpacing: "-0.015em", color: "#fff",
                              borderBottom: isCur ? `2px solid ${cat}` : "none", paddingBottom: isCur ? 1 : 0,
                            }}>{s.label}</span>
                            <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 11.5, lineHeight: 1.35, color: "var(--fg-3)", marginTop: 2 }}>{s.sub}</span>
                          </a>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </header>

      {/* ---------- Mobile drawer (rendered outside the backdrop-filtered header so
          position:fixed anchors to the viewport, not the header) ---------- */}
      {mobileOpen && (
        <div className="nav-drawer" style={{ position: "fixed", inset: 0, height: "100vh", zIndex: 95, background: "rgba(10,11,13,0.99)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
          {/* Drawer top bar — mirrors the site header so the logo + close stay pinned */}
          <div style={{ position: "sticky", top: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, padding: "0 18px", background: "rgba(10,11,13,0.99)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <a href={rel + "index.html"} aria-label="Ignite Productions — home" onClick={() => setMobileOpen(false)} style={{ display: "inline-flex", alignItems: "center" }}>
              <img src={window.__resources?.r_assets_ignite_typemark_white_png || (rel + "assets/ignite-typemark-white.png")} alt="Ignite" height="20" style={{ height: 20, width: "auto", display: "block" }} loading="lazy" decoding="async"/>
            </a>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, border: "1px solid rgba(255,255,255,0.16)", borderRadius: 8, background: "transparent", color: "#fff", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>×</button>
          </div>
          <div style={{ padding: "8px 20px 44px" }}>
          <a className="nav-drawer-link" href={rel + "pages/fractional.html"} onClick={() => setMobileOpen(false)}>FRACTIONAL</a>
          <button className="nav-drawer-row" aria-expanded={drawerSvc} onClick={() => setDrawerSvc(o => !o)}>
            SERVICES
            <span style={{ color: "var(--fg-3)", fontSize: 12, transform: drawerSvc ? "rotate(180deg)" : "none", transition: "transform 150ms var(--ease-out)" }}>▾</span>
          </button>
          {drawerSvc && (
            <div style={{ padding: "10px 0 14px" }}>
              {SITE_SERVICE_GROUPS.map((g, gi) => {
                const cat = `var(${CAT_VARS[gi]})`;
                return (
                  <div key={g.name} style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>
                      <span style={{ color: cat }}>{String(gi+1).padStart(2,"0")}</span><span style={{ color: "var(--fg-3)" }}>{" · "}</span><span style={{ color: "#fff" }}>{g.name}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {g.services.map(s => (
                        <a key={s.slug} href={svcHref(rel, s)} onClick={() => setMobileOpen(false)}
                          style={{ display: "flex", alignItems: "center", minHeight: 44, paddingLeft: 14, borderLeft: `2px solid ${cat}`, marginBottom: 2, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "-0.015em", color: "rgba(255,255,255,0.86)", textDecoration: "none" }}>{s.label}</a>
                      ))}
                    </div>
                  </div>
                );
              })}
              <a href={rel + "pages/services.html"} onClick={() => setMobileOpen(false)} style={{ display: "inline-block", marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--fg-2)", textTransform: "uppercase", textDecoration: "none" }}>ALL CAPABILITIES →</a>
            </div>
          )}
          <a className="nav-drawer-link" href={rel + "pages/industries.html"} onClick={() => setMobileOpen(false)}>INDUSTRIES</a>
          <a className="nav-drawer-link" href={rel + "pages/markets.html"} onClick={() => setMobileOpen(false)}>MARKETS</a>
          <a className="nav-drawer-link" href={rel + "pages/work.html"} onClick={() => setMobileOpen(false)}>OUR WORK</a>
          <button className="nav-drawer-row" aria-expanded={drawerAbout} onClick={() => setDrawerAbout(o => !o)}>
            ABOUT US
            <span style={{ color: "var(--fg-3)", fontSize: 12, transform: drawerAbout ? "rotate(180deg)" : "none", transition: "transform 150ms var(--ease-out)" }}>▾</span>
          </button>
          {drawerAbout && (
            <div style={{ display: "flex", flexDirection: "column", padding: "6px 0 10px" }}>
              {[["About Ignite", "pages/about.html"], ["Blog", "pages/blog.html"], ["Contact", "https://www.igniteproductions.co/contact"]].map(([l, h]) => (
                <a key={l} href={rel + h} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", minHeight: 46, paddingLeft: 14, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "rgba(255,255,255,0.86)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          )}
          <a href={"https://www.igniteproductions.co/contact"} onClick={() => setMobileOpen(false)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 24, minHeight: 54, borderRadius: 999, background: "var(--spark-500)", color: "#0A0B0D", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>GET IN TOUCH <span style={{ fontFamily: "var(--font-mono)" }}>→</span></a>
          </div>
        </div>
      )}
    </>
  );
};

const SiteFooter = ({ rel = "" }) => (
  <>
    <StickyQuoteCta rel={rel}/>
    <footer style={{
    background: "var(--ink-000)", color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)", padding: "80px 32px 32px", position: "relative", overflow: "hidden",
  }}>
    <Container style={{ position: "relative" }}>
      {/* Giant wordmark — official typemark, outline treatment */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 60 }}>
        <img
          src={window.__resources?.r_assets_ignite_typemark_outline_webp || (rel + "assets/ignite-typemark-outline.webp")}
          alt="IGNITE"
          style={{ width: "100%", maxWidth: 1480, height: "auto", display: "block", opacity: 0.85 }} loading="lazy" decoding="async"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: 56, marginBottom: 72 }}>
        {/* Left — company tree: HQ + Agency + Talent combined */}
        <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
          <div>
            <OpsLine>{">> "}HEADQUARTERS</OpsLine>
            <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.55, color: "var(--fg-2)", maxWidth: 300 }}>
              Veteran-owned field marketing agency. Nationwide coverage, boutique service. Founded 2018.
            </p>
            <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 10px", borderRadius: 6,
                background: "rgba(93, 190, 90,0.12)", color: "#5DBE5A",
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", border: "1px solid rgba(93, 190, 90,0.3)",
              }}>● Online Now</span>
            </div>
          </div>
          {[
            ["AGENCY", [["Our Work", "pages/work.html"], ["About", "pages/about.html"], ["Request a Quote", "https://www.igniteproductions.co/contact"], ["Agency of Record", "pages/agency-of-record.html"], ["Markets", "pages/markets.html"], ["Industries", "pages/industries.html"], ["Weddings", "pages/weddings.html"], ["Group Travel", "pages/travel.html"], ["Compare", "pages/compare.html"], ["Blog", "pages/blog.html"], ["Glossary", "pages/glossary.html"], ["Spark Platform", "pages/spark.html"], ["Fractional", "pages/fractional.html"]]],
            ["TALENT", [["Apply", "https://www.igniteproductions.co/contact"], ["LinkedIn", "https://www.linkedin.com/company/ignite-productionsllc"], ["Press", "#"]]],
          ].map(([h, items]) => (
            <div key={h}>
              <OpsLine>{">> " + h}</OpsLine>
              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gridTemplateColumns: h === "AGENCY" ? "1fr 1fr" : "1fr", gap: "8px 20px" }}>
                {items.map(([l, href]) => (
                  <li key={l}>
                    <a href={/^https?:/.test(href) ? href : rel + href} style={{ fontSize: 14, color: "var(--fg-2)" }}
                       onMouseEnter={(e) => e.currentTarget.style.color = "var(--ignite-500)"}
                       onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-2)"}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right — services across three columns */}
        <div>
          <OpsLine>{">> "}SERVICES // 21 PAGES</OpsLine>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "22px 28px", alignItems: "start" }}>
            {[[0, 3, 6, 9], [1, 4, 7], [2, 5, 8]].map((colIdxs, ci) => (
              <div key={ci} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {colIdxs.map(gi => {
                  const g = SITE_SERVICE_GROUPS[gi];
                  if (!g) return null;
                  const cat = `var(${CAT_VARS[gi]})`;
                  return (
                    <div key={g.name}>
                      <div style={{
                        fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                        letterSpacing: "0.22em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 8,
                      }}>{g.name}</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {g.services.map(s => (
                          <li key={s.slug}>
                            <a href={s.href ? rel + s.href : rel + "pages/services-" + s.slug + ".html"} style={{ fontSize: 13, color: "var(--fg-2)" }}
                               onMouseEnter={(e) => e.currentTarget.style.color = cat}
                               onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-2)"}>
                              {s.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        paddingTop: 24, borderTop: "1px solid var(--ink-400)",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap",
      }}>
        <OpsLine>© 2026 IGNITE PRODUCTIONS LLC · SINCE 2018</OpsLine>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <a href={rel + "pages/privacy.html"} style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-3)",
            transition: "color 160ms var(--ease-out)",
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--spark-500)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-3)"}
          >PRIVACY</a>
          <a href={rel + "pages/terms.html"} style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-3)",
            transition: "color 160ms var(--ease-out)",
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--spark-500)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-3)"}
          >TERMS</a>
          <a href={rel + "pages/accessibility.html"} style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fg-3)",
            transition: "color 160ms var(--ease-out)",
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--spark-500)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-3)"}
          >ACCESSIBILITY</a>
          <OpsLine glow>★ IGNITEPRODUCTIONS.CO</OpsLine>
        </div>
      </div>
    </Container>
  </footer>
  </>
);

/* ---------- Sticky bottom-right CTA ----------
   Renders only after the user scrolls past the hero, hides on mobile,
   dismissible with localStorage memory. */
const StickyQuoteCta = ({ rel = "" }) => {
  const [shown, setShown] = useNavState(false);
  const [dismissed, setDismissed] = useNavState(false);

  useNavEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem("ig_quote_dismissed") === "1") {
        setDismissed(true);
        return;
      }
    } catch (e) {}
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !shown) return null;
  // Hide on small screens via CSS media query (also kept out for narrow widths)
  return (
    <>
      <style>{`
        @keyframes igq-rise { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes igq-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.7); } }
        .igq-cta { animation: igq-rise 400ms cubic-bezier(0.2,0.7,0.2,1) both; }
        .igq-dot { animation: igq-pulse 1.8s ease-in-out infinite; }
        @media (max-width: 720px) { .igq-cta { display: none !important; } }
        @media (prefers-reduced-motion: reduce) { .igq-cta { animation: none; } .igq-dot { animation: none; } }
      `}</style>
      <div className="igq-cta" style={{
        position: "fixed", right: 22, bottom: 22, zIndex: 90,
        display: "flex", alignItems: "stretch",
        background: "var(--ink-000)",
        border: "1px solid rgba(214,243,95,0.45)",
        borderRadius: 999,
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(214, 243, 95, 0.075), 0 0 48px rgba(214, 243, 95, 0.09)",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
      }}>
        <a href={"https://www.igniteproductions.co/contact"} style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: "14px 22px 14px 20px",
          background: "linear-gradient(90deg, var(--spark-500) 0%, #E2F785 100%)",
          color: "#0A0B0D",
          fontWeight: 600, fontSize: 14.5, letterSpacing: "-0.005em",
          textDecoration: "none",
        }}>
          <span className="igq-dot" style={{
            width: 8, height: 8, borderRadius: 999, background: "#0A0B0D",
            boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)", flexShrink: 0,
          }}/>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
          }}>48-HR QUOTE</span>
          <span style={{ width: 1, height: 18, background: "rgba(0,0,0,0.25)" }}/>
          <span style={{ fontWeight: 700 }}>Brief us</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 16, marginLeft: 2 }}>→</span>
        </a>
        <button
          onClick={() => {
            try { localStorage.setItem("ig_quote_dismissed", "1"); } catch (e) {}
            setDismissed(true);
          }}
          aria-label="Dismiss"
          style={{
            border: "none", borderLeft: "1px solid rgba(214,243,95,0.3)",
            background: "transparent", color: "var(--fg-3)",
            padding: "0 16px", cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 600,
            transition: "color 160ms, background 160ms",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--fg-1)"; e.currentTarget.style.background = "rgba(214,243,95,0.08)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-3)"; e.currentTarget.style.background = "transparent"; }}
        >×</button>
      </div>
    </>
  );
};

/* Shared page breadcrumb — transparent over hero at rest, catches below nav
   and flips to the parent-category color on scroll. Used on bespoke service pages. */
const StickyBreadcrumb = ({ accent, label, rel = "", restOnLight = false, parentLabel = "SERVICES", parentHref = "services.html" }) => {
  const [stuck, setStuck] = useNavState(false);
  useNavEffect(() => {
    const h = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true }); h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  const ink = "#0A0B0D";
  const restLink = restOnLight ? "rgba(10,11,13,0.6)" : "rgba(255,255,255,0.6)";
  const restSlash = restOnLight ? "rgba(10,11,13,0.3)" : "rgba(255,255,255,0.3)";
  const link = stuck ? "rgba(10,11,13,0.72)" : restLink;
  const slash = stuck ? "rgba(10,11,13,0.35)" : restSlash;
  const cur = stuck ? ink : accent;
  return (
    <div className="sticky-breadcrumb" style={{
      position: "sticky", top: 128, zIndex: 70, marginBottom: 0,
      background: stuck ? accent : "transparent",
      borderBottom: stuck ? "1px solid rgba(10,11,13,0.14)" : "1px solid transparent",
      boxShadow: stuck ? "0 8px 24px rgba(0,0,0,0.18)" : "none",
      transition: "background 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out)",
    }}>
      <div style={{
        maxWidth: 1480, margin: "0 auto", padding: "0 32px", height: 64,
        display: "flex", alignItems: "center", gap: 14,
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
      }}>
        <a href={rel + "index.html"} style={{ color: link, transition: "color 200ms" }}>HOME</a>
        <span style={{ color: slash }}>/</span>
        <a href={parentHref} style={{ color: link, transition: "color 200ms" }}>{parentLabel}</a>
        <span style={{ color: slash }}>/</span>
        <span style={{ color: cur, fontWeight: 600, transition: "color 200ms" }}>{(label || "").toUpperCase()}</span>
      </div>
    </div>
  );
};

Object.assign(window, { BrandBar, SiteNav, SiteFooter, SITE_SERVICES, SITE_SERVICE_GROUPS, StickyQuoteCta, StickyBreadcrumb });
