(function(){if (typeof window !== "undefined" && window.SiteNav) return;
/* Top nav + footer — used on every page. SERVICES exposes a hover mega-menu. */
const {
  useState: useNavState,
  useEffect: useNavEffect,
  useRef: useNavRef
} = React;

/* Services taxonomy — grouped for nav mega menu + footer. 21 service pages across 7 groups. */
const SITE_SERVICE_GROUPS = [{
  name: "Staffing & Talent",
  accent: "ignite",
  services: [{
    slug: "brand-ambassador-agency",
    label: "Brand Ambassador Agency",
    sub: "257K+ vetted ambassadors, all 50 states",
    href: "/brand-ambassador-agency"
  }, {
    slug: "event-staffing",
    label: "Event Staffing",
    sub: "257K+ ambassadors, 50 states, 48hr rush"
  }, {
    slug: "bilingual-brand-ambassadors",
    label: "Bilingual Brand Ambassadors",
    sub: "Spanish-language + multicultural BAs"
  }, {
    slug: "brand-ambassador-management",
    label: "BA Management",
    sub: "Managed bench, not a marketplace"
  }, {
    slug: "best-experiential-marketing-agencies",
    label: "Best Agencies (2026 Guide)",
    sub: "How to choose an experiential agency",
    href: "/best-experiential-marketing-agencies"
  }]
}, {
  name: "Sampling",
  accent: "spark",
  services: [{
    slug: "product-sampling",
    label: "Product Sampling",
    sub: "GPS-verified counts, retail + event + street"
  }, {
    slug: "on-premise-sampling",
    label: "On-Premise Sampling",
    sub: "TIPS-certified pours, bars, restaurants"
  }, {
    slug: "street-teams",
    label: "Street Teams",
    sub: "Cans in hands, festival corridors, guerilla"
  }]
}, {
  name: "Retail Programs",
  accent: "ignite",
  services: [{
    slug: "retail-demo-programs",
    label: "Retail Demo Programs",
    sub: "In-store demos at Whole Foods, Costco, Target"
  }, {
    slug: "retail-merchandising",
    label: "Retail Merchandising",
    sub: "Per-store audits, OOS recovery, planogram"
  }, {
    slug: "shopper-marketing",
    label: "Shopper Marketing",
    sub: "End-cap, POS, in-aisle, scan-back"
  }, {
    slug: "qsr-restaurant-activations",
    label: "QSR / Restaurant",
    sub: "Brand activations inside QSR + casual dining"
  }]
}, {
  name: "Trade & Distributor",
  accent: "amber",
  services: [{
    slug: "trade-shows",
    label: "Trade Show Support",
    sub: "Booth staffing, lead capture, demos"
  }, {
    slug: "distributor-demo-programs",
    label: "Distributor Demo Programs",
    sub: "GSM, ride-along, 3-tier coordination"
  }, {
    slug: "sports-marketing-activations",
    label: "Sports Marketing",
    sub: "Stadium, match-day, league activation"
  }, {
    slug: "collegiate-marketing",
    label: "Collegiate Marketing",
    sub: "200+ campuses · move-in / game-day / Greek / finals"
  }, {
    slug: "festival-brand-activations",
    label: "Festival Brand Activations",
    sub: "ACL, Coachella, Lolla, Bonnaroo, EDC"
  }]
}, {
  name: "Experiential",
  accent: "ignite",
  services: [{
    slug: "experiential-marketing",
    label: "Experiential Marketing",
    sub: "Pop-ups, immersive installations, brand worlds"
  }, {
    slug: "mobile-tours",
    label: "Mobile Marketing Tours",
    sub: "Ad trucks, branded bikes, sprinter vans"
  }, {
    slug: "fabrication-builds",
    label: "Fabrication & Builds",
    sub: "Custom builds, scenic fab, photo ops"
  }]
}, {
  name: "Hospitality & Events",
  accent: "ignite",
  services: [{
    slug: "weddings",
    label: "Weddings & Private Events",
    sub: "White-glove staffing, VIP + hospitality teams",
    href: "/weddings"
  }, {
    slug: "travel",
    label: "Group & Event Travel",
    sub: "In-house group travel, room blocks, on-site ops",
    href: "/travel"
  }, {
    slug: "pop-up-retail",
    label: "Pop-Up & Branded Retail",
    sub: "Temporary storefronts, residencies, takeovers"
  }]
}, {
  name: "Creative & Content",
  accent: "ignite",
  services: [{
    slug: "content-capture",
    label: "Content & Capture Crews",
    sub: "Photo, video, UGC — launch-ready, same week"
  }, {
    slug: "creative-design-studio",
    label: "Creative & Design Studio",
    sub: "Campaign creative, key art, POS, packaging"
  }, {
    slug: "influencer-creator",
    label: "Influencer & Creator Marketing",
    sub: "Seeding, creator events, paid creator programs"
  }]
}, {
  name: "Sales & Distribution",
  accent: "ignite",
  services: [{
    slug: "fractional-sales-team",
    label: "Fractional Sales Team",
    sub: "A senior, embedded CPG sales team — scaled monthly",
    href: "/services/fractional-sales-team"
  }, {
    slug: "retail-sales-broker-management",
    label: "Broker & Retail Sales Mgmt",
    sub: "Selection, scorecards, QBRs, accountability",
    href: "/services/retail-sales-broker-management"
  }, {
    slug: "buyer-pitch-line-reviews",
    label: "Buyer Pitch & Line Reviews",
    sub: "Category story, deck, and rehearsal that wins the slot",
    href: "/services/buyer-pitch-line-reviews"
  }, {
    slug: "trade-marketing-management",
    label: "Trade Marketing",
    sub: "Co-op, MDF, scan-back — a calendar tied to your P&L",
    href: "/services/trade-marketing-management"
  }, {
    slug: "distribution-expansion",
    label: "Distribution Expansion",
    sub: "Right-door targeting + demos that protect velocity",
    href: "/services/distribution-expansion"
  }, {
    slug: "retail-readiness",
    label: "Retail Readiness & Margin",
    sub: "Pricing, margin, and packaging fixed before you pitch",
    href: "/services/retail-readiness"
  }]
}, {
  name: "Strategy & Growth",
  accent: "amber",
  services: [{
    slug: "brand-strategy",
    label: "Brand & Activation Strategy",
    sub: "Positioning, channel + market planning, calendars"
  }, {
    slug: "field-marketing",
    label: "Field Marketing",
    sub: "Always-on field force, route + cadence"
  }, {
    slug: "sponsorship-partnerships",
    label: "Sponsorship & Partnerships",
    sub: "Source, negotiate, activate, measure"
  }, {
    slug: "sweepstakes-activations",
    label: "Sweepstakes & Contests",
    sub: "Bonded, compliant, CRM-synced"
  }, {
    slug: "crm-lifecycle",
    label: "CRM & Lifecycle",
    sub: "Email + SMS journeys from field-captured leads"
  }, {
    slug: "promotional-products",
    label: "Promotional Products",
    sub: "Branded merch, swag kits, fulfillment"
  }, {
    slug: "logistics-kitting",
    label: "Logistics & Kitting",
    sub: "Kit assembly, warehousing, market-by-market shipping"
  }]
}, {
  name: "Reporting",
  accent: "spark",
  services: [{
    slug: "event-reporting-recaps",
    label: "Event Recap & Reporting",
    sub: "Powered by Spark — recaps in hours, not weeks"
  }, {
    slug: "spark",
    label: "Spark Platform",
    sub: "The field-marketing dashboard — GPS, photos, samples, auto recaps",
    href: "/spark"
  }, {
    slug: "spark-retail",
    label: "Spark Retail Execution",
    sub: "Crowdsourced in-store audits, OOS + price checks — vetted field force",
    href: "/spark-retail"
  }, {
    slug: "ai-management",
    label: "AI Management",
    sub: "We run the AI layer — recaps, forecasting, creative, audience scoring",
    href: "/services/ai-management"
  }]
}];

/* Flat list (derived) — used wherever a flat iteration is needed. */
const SITE_SERVICES = SITE_SERVICE_GROUPS.flatMap(g => g.services);

/* Category color tokens, one per lane, in the fixed SITE_SERVICE_GROUPS order.
   Each parent (and its children) inherit their hint color from here. */
const CAT_VARS = ["--cat-staffing", "--cat-sampling", "--cat-retail-programs", "--cat-trade-distributor", "--cat-experiential", "--cat-hospitality-events", "--cat-creative-content", "--cat-sales-distribution", "--cat-strategy-growth", "--cat-reporting"];
const svcHref = (rel, s) => s.href ? rel + s.href : "/services/" + s.slug;
const NAV_ITEMS = [{
  label: "SPARK",
  href: "/spark"
}, {
  label: "FRACTIONAL",
  href: "/fractional"
}, {
  sep: true
}, {
  label: "SERVICES",
  href: "/ignite-services",
  mega: "services"
}, {
  label: "INDUSTRIES",
  href: "/industries"
}, {
  label: "MARKETS",
  href: "/markets"
}, {
  label: "OUR WORK",
  href: "/work"
}, {
  label: "ABOUT US",
  children: [["About Ignite", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]]
}];

/* rel: "" when on root, "../" when on a page inside /pages/ */
const SiteNav = ({
  rel = "",
  active = "",
  activeService = ""
}) => {
  const [scrolled, setScrolled] = useNavState(false);
  const [megaOpen, setMegaOpen] = useNavState(null);
  const [activeCat, setActiveCat] = useNavState(0); // desktop master–detail
  const [openParent, setOpenParent] = useNavState(0); // mobile accordion
  const [isTouch, setIsTouch] = useNavState(false);
  const [mobileOpen, setMobileOpen] = useNavState(false);
  const [drawerSvc, setDrawerSvc] = useNavState(false);
  const [drawerAbout, setDrawerAbout] = useNavState(false);
  const closeTimer = useNavRef(null);
  const railRefs = useNavRef([]);
  useNavEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, {
      passive: true
    });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Subtle wheel-lerp smooth scroll. Animates window scroll only (no transform
     wrapper / overlay), so sticky/fixed layout and all pointer interactions stay
     intact. Disabled on touch + reduced-motion; passes through inner scrollers. */
  useNavEffect(() => {
    if (window.__igniteSmoothScroll) return; // install once per page
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;
    window.__igniteSmoothScroll = true;
    let target = window.scrollY,
      current = window.scrollY,
      raf = null,
      running = false;
    const ease = 0.112;
    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const canNativeScroll = node => {
      for (let el = node; el && el !== document.body && el.nodeType === 1; el = el.parentElement) {
        const s = getComputedStyle(el);
        if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 2) return true;
      }
      return false;
    };
    const tick = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        running = false;
      }
      window.scrollTo({
        top: current,
        behavior: "instant"
      });
      if (running) raf = requestAnimationFrame(tick);else raf = null;
    };
    const onWheel = e => {
      if (e.ctrlKey || e.deltaMode !== 0) return; // pinch-zoom / line mode → native
      if (canNativeScroll(e.target)) return; // let inner scrollers scroll
      e.preventDefault();
      if (!running) {
        current = window.scrollY;
        target = window.scrollY;
      } // resync if user native-scrolled
      target = Math.min(Math.max(0, target + e.deltaY * 1.2), maxScroll());
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const onKeyOrTouch = () => {
      target = window.scrollY;
      current = window.scrollY;
    };
    window.addEventListener("wheel", onWheel, {
      passive: false
    });
    window.addEventListener("touchstart", onKeyOrTouch, {
      passive: true
    });
    window.addEventListener("keydown", onKeyOrTouch);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onKeyOrTouch);
      window.removeEventListener("keydown", onKeyOrTouch);
      if (raf) cancelAnimationFrame(raf);
      window.__igniteSmoothScroll = false;
    };
  }, []);
  useNavEffect(() => {
    const mq = window.matchMedia("(max-width: 991px)");
    const on = () => setIsTouch(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on);
    };
  }, []);
  useNavEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  useNavEffect(() => {
    if (!megaOpen) return;
    const onKey = e => {
      if (e.key === "Escape") setMegaOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);
  const openMega = key => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 80,
      background: scrolled ? "rgba(10,11,13,0.92)" : "rgba(10,11,13,0.55)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      transition: "background 200ms var(--ease-out), border-color 200ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1480,
      margin: "0 auto",
      padding: "0 32px",
      height: 128,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rel + "/",
    "aria-label": "Ignite Productions \u2014 home",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.r_assets_ignite_typemark_white_png || rel + "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
    alt: "Ignite",
    height: "22",
    style: {
      height: 22,
      width: "auto",
      display: "block"
    },
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, NAV_ITEMS.map(it => {
    if (it.sep) return /*#__PURE__*/React.createElement("span", {
      key: "sep",
      "aria-hidden": "true",
      style: {
        alignSelf: "center",
        color: "var(--fg-3)",
        fontSize: 14,
        lineHeight: 1,
        margin: "0 2px",
        userSelect: "none"
      }
    }, "\xB7");
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
      return /*#__PURE__*/React.createElement("div", {
        key: it.label,
        onMouseEnter: () => openMega(dropKey),
        onMouseLeave: () => closeMegaSoon(),
        style: {
          position: "relative"
        }
      }, /*#__PURE__*/React.createElement("span", {
        role: "button",
        tabIndex: 0,
        "aria-haspopup": "true",
        "aria-expanded": dropOpen,
        onClick: () => setMegaOpen(dropOpen ? null : dropKey),
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: dropOpen ? "var(--fg-1)" : "var(--fg-2)",
          cursor: "default",
          padding: "8px 0",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "color 160ms var(--ease-out)",
          userSelect: "none"
        },
        onMouseEnter: e => e.currentTarget.style.color = "var(--fg-1)",
        onMouseLeave: e => !dropOpen && (e.currentTarget.style.color = "var(--fg-2)")
      }, it.label, /*#__PURE__*/React.createElement("svg", {
        width: "9",
        height: "9",
        viewBox: "0 0 10 10",
        fill: "none",
        "aria-hidden": "true",
        style: {
          opacity: 0.6,
          display: "inline-block",
          marginTop: 1,
          transform: dropOpen ? "rotate(180deg)" : "none",
          transition: "transform 160ms var(--ease-out)"
        }
      }, /*#__PURE__*/React.createElement("path", {
        d: "M2 3.5L5 6.5L8 3.5",
        stroke: "currentColor",
        strokeWidth: "1.4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), dropOpen && /*#__PURE__*/React.createElement("div", {
        style: {
          position: "absolute",
          top: "calc(100% + 10px)",
          left: 0,
          minWidth: 190,
          background: "rgba(10,11,13,0.97)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 12,
          padding: 8,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxShadow: "0 20px 44px rgba(0,0,0,0.5)",
          zIndex: 90
        }
      }, it.children.map(([clabel, chref]) => /*#__PURE__*/React.createElement("a", {
        key: clabel,
        href: rel + chref,
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 11.5,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--fg-2)",
          padding: "11px 14px",
          borderRadius: 8,
          whiteSpace: "nowrap",
          transition: "color 140ms var(--ease-out), background 140ms var(--ease-out)"
        },
        onMouseEnter: e => {
          e.currentTarget.style.color = "var(--fg-1)";
          e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        },
        onMouseLeave: e => {
          e.currentTarget.style.color = "var(--fg-2)";
          e.currentTarget.style.background = "transparent";
        }
      }, clabel))));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      onMouseEnter: () => hasMega && openMega(it.mega),
      onMouseLeave: () => hasMega && closeMegaSoon(),
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: rel + it.href,
      "aria-haspopup": hasMega ? "true" : undefined,
      "aria-expanded": hasMega ? megaOpen === it.mega : undefined,
      onClick: e => {
        if (hasMega && isTouch) {
          e.preventDefault();
          setMegaOpen(megaOpen === it.mega ? null : it.mega);
        }
      },
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: isActive ? activeInk : "var(--fg-2)",
        ...(gradientActive ? {
          background: "var(--fractional-prism)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent"
        } : {}),
        position: "relative",
        padding: "8px 0",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        transition: "color 160ms var(--ease-out)"
      },
      onMouseEnter: e => !isActive && (e.currentTarget.style.color = "var(--fg-1)"),
      onMouseLeave: e => !isActive && (e.currentTarget.style.color = "var(--fg-2)")
    }, it.label, hasMega && /*#__PURE__*/React.createElement("svg", {
      width: "9",
      height: "9",
      viewBox: "0 0 10 10",
      fill: "none",
      "aria-hidden": "true",
      style: {
        opacity: 0.6,
        display: "inline-block",
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3.5L5 6.5L8 3.5",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-cta-desktop"
  }, /*#__PURE__*/React.createElement(AccentBtn, {
    size: "sm",
    accent: "spark",
    onClick: () => location.href = rel + "/contact?urgent=1"
  }, "Request staff now")), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": mobileOpen ? "Close menu" : "Open menu",
    "aria-expanded": mobileOpen,
    onClick: () => setMobileOpen(o => !o),
    style: {
      display: "none",
      width: 44,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: 10,
      cursor: "pointer",
      color: "#fff",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, mobileOpen ? /*#__PURE__*/React.createElement("path", {
    d: "M5 5L19 19M19 5L5 19",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M3 6H21M3 12H21M3 18H21",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))))), /*#__PURE__*/React.createElement("style", null, `
        .nav-burger { display: none; }
        @media (max-width: 991px) {
          .nav-burger { display: inline-flex !important; }
          .nav-cta-desktop { display: none !important; }
          header nav { display: none !important; }
        }
        @media (min-width: 992px) { .nav-drawer { display: none !important; } }
        .nav-drawer-link { display: flex; align-items: center; min-height: 54px; font-family: var(--font-mono); font-size: 14px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .nav-drawer-row { width: 100%; display: flex; align-items: center; justify-content: space-between; min-height: 54px; font-family: var(--font-mono); font-size: 14px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.08); cursor: pointer; text-align: left; }
        .svc-child { transition: background 130ms var(--ease-out); }
        .svc-child:hover, .svc-child:focus-visible { background: rgba(255,255,255,0.05); outline: none; }
        .svc-child:hover .svc-tick, .svc-child:focus-visible .svc-tick { transform: translateY(-50%) scaleY(1) !important; }
        .svc-child:focus-visible { box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18); border-radius: 6px; }
      `), /*#__PURE__*/React.createElement("div", {
    role: "menu",
    "aria-label": "Services",
    onMouseEnter: () => !isTouch && openMega("services"),
    onMouseLeave: closeMegaSoon,
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: "rgba(10,11,13,0.98)",
      backdropFilter: "blur(18px)",
      borderBottom: megaOpen === "services" ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      opacity: megaOpen === "services" ? 1 : 0,
      pointerEvents: megaOpen === "services" ? "auto" : "none",
      transform: megaOpen === "services" ? "translateY(0)" : "translateY(-8px)",
      transition: "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
      overflow: "hidden"
    }
  }, isTouch ?
  /*#__PURE__*/
  /* ---------- Mobile / tablet: accordion ---------- */
  React.createElement("div", {
    style: {
      maxHeight: "calc(100vh - 128px)",
      overflowY: "auto",
      padding: "8px 20px 20px"
    }
  }, SITE_SERVICE_GROUPS.map((g, gi) => {
    const cat = `var(${CAT_VARS[gi]})`;
    const isOpen = openParent === gi;
    return /*#__PURE__*/React.createElement("div", {
      key: g.name,
      style: {
        borderBottom: "1px solid rgba(255,255,255,0.07)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenParent(isOpen ? null : gi),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        minHeight: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "0 4px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: cat
      }
    }, String(gi + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, " · "), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff",
        borderBottom: `2px solid ${isOpen ? cat : "transparent"}`,
        paddingBottom: 2,
        transition: "border-color 130ms var(--ease-out)"
      }
    }, g.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-3)",
        fontSize: 12,
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform 150ms var(--ease-out)"
      }
    }, "\u25BE")), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? 1200 : 0,
        transition: "max-height 200ms var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 8
      }
    }, g.services.map(s => {
      const isCur = activeService && activeService === s.slug;
      return /*#__PURE__*/React.createElement("a", {
        key: s.slug,
        href: svcHref(rel, s),
        role: "menuitem",
        "aria-current": isCur ? "page" : undefined,
        style: {
          display: "block",
          minHeight: 48,
          padding: "9px 4px 9px 14px",
          borderLeft: `2px solid ${isCur ? cat : "transparent"}`,
          textDecoration: "none"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: "-0.015em",
          color: "#fff",
          borderBottom: isCur ? `2px solid ${cat}` : "none",
          paddingBottom: isCur ? 1 : 0
        }
      }, s.label), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          lineHeight: 1.35,
          color: "var(--fg-3)",
          marginTop: 2
        }
      }, s.sub));
    }))));
  }), /*#__PURE__*/React.createElement("a", {
    href: rel + "/ignite-services",
    style: {
      display: "inline-block",
      marginTop: 16,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--fg-2)",
      textTransform: "uppercase"
    }
  }, "ALL CAPABILITIES \u2192")) :
  /*#__PURE__*/
  /* ---------- Desktop: master–detail ---------- */
  React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      padding: "28px 32px 32px",
      display: "grid",
      gridTemplateColumns: "minmax(240px, 1fr) 3fr",
      gap: 40,
      maxHeight: "calc(100vh - 128px)",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "menu",
    "aria-orientation": "vertical",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderRight: "1px solid rgba(255,255,255,0.08)",
      paddingRight: 24
    }
  }, SITE_SERVICE_GROUPS.map((g, gi) => {
    const cat = `var(${CAT_VARS[gi]})`;
    const isActive = activeCat === gi;
    return /*#__PURE__*/React.createElement("button", {
      key: g.name,
      ref: el => railRefs.current[gi] = el,
      role: "menuitem",
      tabIndex: megaOpen === "services" ? 0 : -1,
      onMouseEnter: () => setActiveCat(gi),
      onFocus: () => setActiveCat(gi),
      onKeyDown: e => onRailKey(e, gi),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        minHeight: 40,
        padding: "8px 12px",
        borderRadius: 6,
        cursor: "pointer",
        textAlign: "left",
        background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
        border: "none",
        borderLeft: `2px solid ${isActive ? cat : "transparent"}`,
        transition: "background 130ms var(--ease-out)",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#fff",
        opacity: isActive ? 1 : 0.62
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: cat
      }
    }, String(gi + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, " · "), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff",
        borderBottom: `2px solid ${isActive ? cat : "transparent"}`,
        paddingBottom: 2,
        transition: "border-color 130ms var(--ease-out)"
      }
    }, g.name)));
  })), /*#__PURE__*/React.createElement("div", null, (() => {
    const g = SITE_SERVICE_GROUPS[activeCat];
    const cat = `var(${CAT_VARS[activeCat]})`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 16,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: "-0.02em",
        color: "#fff",
        display: "inline-block",
        borderBottom: `3px solid ${cat}`,
        paddingBottom: 5
      }
    }, g.name), /*#__PURE__*/React.createElement("a", {
      href: rel + "/ignite-services",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        letterSpacing: "0.22em",
        color: "var(--fg-2)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        textDecoration: "underline",
        textDecorationColor: cat,
        textUnderlineOffset: "4px",
        textDecorationThickness: "1.5px"
      }
    }, "ALL CAPABILITIES \u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2px 24px"
      }
    }, g.services.map(s => {
      const isCur = activeService && activeService === s.slug;
      return /*#__PURE__*/React.createElement("a", {
        key: s.slug,
        href: svcHref(rel, s),
        role: "menuitem",
        "aria-current": isCur ? "page" : undefined,
        className: "svc-child",
        style: {
          position: "relative",
          display: "block",
          padding: "10px 12px 10px 16px",
          borderRadius: 6,
          textDecoration: "none",
          "--cat": cat
        }
      }, /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        className: "svc-tick",
        style: {
          position: "absolute",
          left: 4,
          top: "50%",
          transform: "translateY(-50%) scaleY(0)",
          width: 3,
          height: 22,
          borderRadius: 2,
          background: cat,
          transition: "transform 120ms var(--ease-out)",
          transformOrigin: "center"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 14.5,
          letterSpacing: "-0.015em",
          color: "#fff",
          borderBottom: isCur ? `2px solid ${cat}` : "none",
          paddingBottom: isCur ? 1 : 0
        }
      }, s.label), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          fontFamily: "var(--font-body)",
          fontSize: 11.5,
          lineHeight: 1.35,
          color: "var(--fg-3)",
          marginTop: 2
        }
      }, s.sub));
    })));
  })())))), mobileOpen && /*#__PURE__*/React.createElement("div", {
    className: "nav-drawer",
    style: {
      position: "fixed",
      inset: 0,
      height: "100vh",
      zIndex: 95,
      background: "rgba(10,11,13,0.99)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      overflowY: "auto",
      WebkitOverflowScrolling: "touch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
      padding: "0 18px",
      background: "rgba(10,11,13,0.99)",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rel + "/",
    "aria-label": "Ignite Productions \u2014 home",
    onClick: () => setMobileOpen(false),
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.r_assets_ignite_typemark_white_png || rel + "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-white.png",
    alt: "Ignite",
    height: "20",
    style: {
      height: 20,
      width: "auto",
      display: "block"
    },
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close menu",
    onClick: () => setMobileOpen(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: 8,
      background: "transparent",
      color: "#fff",
      cursor: "pointer",
      fontSize: 20,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 44px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-drawer-link",
    href: rel + "/spark",
    onClick: () => setMobileOpen(false)
  }, "SPARK"), /*#__PURE__*/React.createElement("a", {
    className: "nav-drawer-link",
    href: rel + "/fractional",
    onClick: () => setMobileOpen(false)
  }, "FRACTIONAL"), /*#__PURE__*/React.createElement("button", {
    className: "nav-drawer-row",
    "aria-expanded": drawerSvc,
    onClick: () => setDrawerSvc(o => !o)
  }, "SERVICES", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)",
      fontSize: 12,
      transform: drawerSvc ? "rotate(180deg)" : "none",
      transition: "transform 150ms var(--ease-out)"
    }
  }, "\u25BE")), drawerSvc && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 0 14px"
    }
  }, SITE_SERVICE_GROUPS.map((g, gi) => {
    const cat = `var(${CAT_VARS[gi]})`;
    return /*#__PURE__*/React.createElement("div", {
      key: g.name,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: cat
      }
    }, String(gi + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-3)"
      }
    }, " · "), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, g.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, g.services.map(s => /*#__PURE__*/React.createElement("a", {
      key: s.slug,
      href: svcHref(rel, s),
      onClick: () => setMobileOpen(false),
      style: {
        display: "flex",
        alignItems: "center",
        minHeight: 44,
        paddingLeft: 14,
        borderLeft: `2px solid ${cat}`,
        marginBottom: 2,
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: "-0.015em",
        color: "rgba(255,255,255,0.86)",
        textDecoration: "none"
      }
    }, s.label))));
  }), /*#__PURE__*/React.createElement("a", {
    href: rel + "/ignite-services",
    onClick: () => setMobileOpen(false),
    style: {
      display: "inline-block",
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--fg-2)",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "ALL CAPABILITIES \u2192")), /*#__PURE__*/React.createElement("a", {
    className: "nav-drawer-link",
    href: rel + "/industries",
    onClick: () => setMobileOpen(false)
  }, "INDUSTRIES"), /*#__PURE__*/React.createElement("a", {
    className: "nav-drawer-link",
    href: rel + "/markets",
    onClick: () => setMobileOpen(false)
  }, "MARKETS"), /*#__PURE__*/React.createElement("a", {
    className: "nav-drawer-link",
    href: rel + "/work",
    onClick: () => setMobileOpen(false)
  }, "OUR WORK"), /*#__PURE__*/React.createElement("button", {
    className: "nav-drawer-row",
    "aria-expanded": drawerAbout,
    onClick: () => setDrawerAbout(o => !o)
  }, "ABOUT US", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)",
      fontSize: 12,
      transform: drawerAbout ? "rotate(180deg)" : "none",
      transition: "transform 150ms var(--ease-out)"
    }
  }, "\u25BE")), drawerAbout && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "6px 0 10px"
    }
  }, [["About Ignite", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: rel + h,
    onClick: () => setMobileOpen(false),
    style: {
      display: "flex",
      alignItems: "center",
      minHeight: 46,
      paddingLeft: 14,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 15,
      color: "rgba(255,255,255,0.86)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    href: rel + "/contact?urgent=1",
    onClick: () => setMobileOpen(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      marginTop: 24,
      minHeight: 54,
      borderRadius: 999,
      background: "var(--spark-500)",
      color: "#0A0B0D",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      textDecoration: "none"
    }
  }, "Request staff now ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "\u2192")))));
};
const SiteFooter = ({
  rel = ""
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StickyQuoteCta, {
  rel: rel
}), /*#__PURE__*/React.createElement("footer", {
  style: {
    background: "var(--ink-000)",
    color: "var(--fg-1)",
    borderTop: "1px solid var(--ink-400)",
    padding: "80px 32px 32px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    gap: 12,
    marginBottom: 60
  }
}, /*#__PURE__*/React.createElement("img", {
  src: window.__resources?.r_assets_ignite_typemark_outline_webp || rel + "https://kyle915.github.io/ignite-webflow-assets/assets/ignite-typemark-outline.webp",
  alt: "IGNITE",
  style: {
    width: "100%",
    maxWidth: 1480,
    height: "auto",
    display: "block",
    opacity: 0.85
  },
  loading: "lazy",
  decoding: "async"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 2.4fr",
    gap: 56,
    marginBottom: 72
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 34
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "HEADQUARTERS"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    maxWidth: 300
  }
}, "Veteran-owned field marketing agency. Nationwide coverage, boutique service. Founded 2018."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 18,
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    borderRadius: 6,
    background: "rgba(93, 190, 90,0.12)",
    color: "#5DBE5A",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    border: "1px solid rgba(93, 190, 90,0.3)"
  }
}, "\u25CF Online Now"))), [["AGENCY", [["Our Work", "/work"], ["About", "/about"], ["Request a Quote", "/contact"], ["Markets", "/markets"], ["Industries", "/industries"], ["Weddings", "/weddings"], ["Group Travel", "/travel"], ["Compare", "/compare"], ["Blog", "/blog"], ["Glossary", "/glossary"], ["Spark Platform", "/spark"], ["Fractional", "/fractional"]]], ["TALENT", [["Apply", "/contact?role=ambassador"], ["LinkedIn", "#"], ["Press", "#"]]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
  key: h
}, /*#__PURE__*/React.createElement(OpsLine, null, ">> " + h), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "12px 0 0",
    display: "grid",
    gridTemplateColumns: h === "AGENCY" ? "1fr 1fr" : "1fr",
    gap: "8px 20px"
  }
}, items.map(([l, href]) => /*#__PURE__*/React.createElement("li", {
  key: l
}, /*#__PURE__*/React.createElement("a", {
  href: rel + href,
  style: {
    fontSize: 14,
    color: "var(--fg-2)"
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--ignite-500)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--fg-2)"
}, l))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OpsLine, null, ">> ", "SERVICES // 21 PAGES"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "22px 28px",
    alignItems: "start"
  }
}, [[0, 3, 6, 9], [1, 4, 7], [2, 5, 8]].map((colIdxs, ci) => /*#__PURE__*/React.createElement("div", {
  key: ci,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 22
  }
}, colIdxs.map(gi => {
  const g = SITE_SERVICE_GROUPS[gi];
  if (!g) return null;
  const cat = `var(${CAT_VARS[gi]})`;
  return /*#__PURE__*/React.createElement("div", {
    key: g.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: "var(--fg-3)",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, g.name), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, g.services.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.slug
  }, /*#__PURE__*/React.createElement("a", {
    href: s.href ? rel + s.href : "/services/" + s.slug,
    style: {
      fontSize: 13,
      color: "var(--fg-2)"
    },
    onMouseEnter: e => e.currentTarget.style.color = cat,
    onMouseLeave: e => e.currentTarget.style.color = "var(--fg-2)"
  }, s.label)))));
})))))), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 24,
    borderTop: "1px solid var(--ink-400)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement(OpsLine, null, "\xA9 2026 IGNITE PRODUCTIONS LLC \xB7 SINCE 2018"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: rel + "/privacy",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    transition: "color 160ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--spark-500)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--fg-3)"
}, "PRIVACY"), /*#__PURE__*/React.createElement("a", {
  href: rel + "/terms",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    transition: "color 160ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--spark-500)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--fg-3)"
}, "TERMS"), /*#__PURE__*/React.createElement("a", {
  href: rel + "/accessibility",
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    transition: "color 160ms var(--ease-out)"
  },
  onMouseEnter: e => e.currentTarget.style.color = "var(--spark-500)",
  onMouseLeave: e => e.currentTarget.style.color = "var(--fg-3)"
}, "ACCESSIBILITY"), /*#__PURE__*/React.createElement(OpsLine, {
  glow: true
}, "\u2605 IGNITEPRODUCTIONS.CO"))))));

/* ---------- Sticky bottom-right CTA ----------
   Renders only after the user scrolls past the hero, hides on mobile,
   dismissible with localStorage memory. */
const StickyQuoteCta = ({
  rel = ""
}) => {
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
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (dismissed || !shown) return null;
  // Hide on small screens via CSS media query (also kept out for narrow widths)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        @keyframes igq-rise { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes igq-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.7); } }
        .igq-cta { animation: igq-rise 400ms cubic-bezier(0.2,0.7,0.2,1) both; }
        .igq-dot { animation: igq-pulse 1.8s ease-in-out infinite; }
        @media (max-width: 720px) { .igq-cta { display: none !important; } }
        @media (prefers-reduced-motion: reduce) { .igq-cta { animation: none; } .igq-dot { animation: none; } }
      `), /*#__PURE__*/React.createElement("div", {
    className: "igq-cta",
    style: {
      position: "fixed",
      right: 22,
      bottom: 22,
      zIndex: 90,
      display: "flex",
      alignItems: "stretch",
      background: "var(--ink-000)",
      border: "1px solid rgba(214,243,95,0.45)",
      borderRadius: 999,
      boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(214, 243, 95, 0.075), 0 0 48px rgba(214, 243, 95, 0.09)",
      backdropFilter: "blur(10px)",
      overflow: "hidden",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rel + "/contact",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 22px 14px 20px",
      background: "linear-gradient(90deg, var(--spark-500) 0%, #E2F785 100%)",
      color: "#0A0B0D",
      fontWeight: 600,
      fontSize: 14.5,
      letterSpacing: "-0.005em",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "igq-dot",
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "#0A0B0D",
      boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, "48-HR QUOTE"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "rgba(0,0,0,0.25)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Brief us"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      marginLeft: 2
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      try {
        localStorage.setItem("ig_quote_dismissed", "1");
      } catch (e) {}
      setDismissed(true);
    },
    "aria-label": "Dismiss",
    style: {
      border: "none",
      borderLeft: "1px solid rgba(214,243,95,0.3)",
      background: "transparent",
      color: "var(--fg-3)",
      padding: "0 16px",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 16,
      fontWeight: 600,
      transition: "color 160ms, background 160ms"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--fg-1)";
      e.currentTarget.style.background = "rgba(214,243,95,0.08)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "var(--fg-3)";
      e.currentTarget.style.background = "transparent";
    }
  }, "\xD7")));
};

/* Shared page breadcrumb — transparent over hero at rest, catches below nav
   and flips to the parent-category color on scroll. Used on bespoke service pages. */
const StickyBreadcrumb = ({
  accent,
  label,
  rel = "",
  restOnLight = false,
  parentLabel = "SERVICES",
  parentHref = "/ignite-services"
}) => {
  const [stuck, setStuck] = useNavState(false);
  useNavEffect(() => {
    const h = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", h, {
      passive: true
    });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  const ink = "#0A0B0D";
  const restLink = restOnLight ? "rgba(10,11,13,0.6)" : "rgba(255,255,255,0.6)";
  const restSlash = restOnLight ? "rgba(10,11,13,0.3)" : "rgba(255,255,255,0.3)";
  const link = stuck ? "rgba(10,11,13,0.72)" : restLink;
  const slash = stuck ? "rgba(10,11,13,0.35)" : restSlash;
  const cur = stuck ? ink : accent;
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky-breadcrumb",
    style: {
      position: "sticky",
      top: 128,
      zIndex: 70,
      marginBottom: 0,
      background: stuck ? accent : "transparent",
      borderBottom: stuck ? "1px solid rgba(10,11,13,0.14)" : "1px solid transparent",
      boxShadow: stuck ? "0 8px 24px rgba(0,0,0,0.18)" : "none",
      transition: "background 240ms var(--ease-out), border-color 240ms var(--ease-out), box-shadow 240ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1480,
      margin: "0 auto",
      padding: "0 32px",
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rel + "/",
    style: {
      color: link,
      transition: "color 200ms"
    }
  }, "HOME"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: slash
    }
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: parentHref,
    style: {
      color: link,
      transition: "color 200ms"
    }
  }, parentLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      color: slash
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: cur,
      fontWeight: 600,
      transition: "color 200ms"
    }
  }, (label || "").toUpperCase())));
};
Object.assign(window, {
  SiteNav,
  SiteFooter,
  SITE_SERVICES,
  SITE_SERVICE_GROUPS,
  StickyQuoteCta,
  StickyBreadcrumb
});
})();
