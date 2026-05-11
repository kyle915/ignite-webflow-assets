// BlogIndex — editorial magazine-style index for the Ignite blog
// Dark ground · ignite-orange accents · Space Grotesk display · JetBrains mono labels

const fmtDate = iso => {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase();
};
function BlogIndex() {
  const [filter, setFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const inputRef = React.useRef(null);
  const filtered = React.useMemo(() => {
    let posts = BLOG_POSTS;
    if (filter !== 'all') posts = posts.filter(p => p.category === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.dek.toLowerCase().includes(q) || (p.tags || []).some(t => t.toLowerCase().includes(q)));
    }
    return posts;
  }, [filter, search]);
  const featured = BLOG_POSTS[0]; // most recent
  const rest = filtered.filter(p => filter !== 'all' || search.trim() || p.slug !== featured.slug);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-000)',
      color: 'var(--fg-1)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes blogRise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes cardDrift0 { 0%,100% { transform:rotate(-6deg) translateY(0); } 50% { transform:rotate(-6.8deg) translateY(-6px); } }
        @keyframes cardDrift1 { 0%,100% { transform:rotate(3deg)  translateY(0); } 50% { transform:rotate(3.6deg)  translateY(-4px); } }
        @keyframes cardDrift2 { 0%,100% { transform:rotate(5deg)  translateY(0); } 50% { transform:rotate(5.7deg)  translateY(-5px); } }
        @keyframes cardDrift3 { 0%,100% { transform:rotate(-4deg) translateY(0); } 50% { transform:rotate(-4.7deg) translateY(-7px); } }
        @keyframes underlineGrow { from { transform:scaleX(0); } to { transform:scaleX(1); } }
        .blog-rise { opacity:0; animation: blogRise 700ms var(--ease-out) forwards; }
        .blog-card { animation-duration: 6s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
        .blog-card:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .blog-rise, .blog-card { animation: none !important; opacity:1 !important; }
        }
      `), /*#__PURE__*/React.createElement(SiteNav, {
    active: "BLOG"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0 80px',
      borderBottom: '1px solid var(--ink-400)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18,
      pointerEvents: 'none',
      backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
      backgroundSize: '48px 48px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '-8%',
      top: '-20%',
      pointerEvents: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'min(720px, 60vw)',
      lineHeight: 0.85,
      color: 'transparent',
      WebkitTextStroke: '1px rgba(255,90,31,0.08)',
      letterSpacing: '-0.06em',
      userSelect: 'none'
    }
  }, "FN"), [{
    t: 24,
    l: 24
  }, {
    t: 24,
    r: 24
  }, {
    b: 24,
    l: 24
  }, {
    b: 24,
    r: 24
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: 24,
      height: 24,
      ...p,
      borderTop: p.t !== undefined ? '1px solid var(--ignite-500)' : 'none',
      borderBottom: p.b !== undefined ? '1px solid var(--ignite-500)' : 'none',
      borderLeft: p.l !== undefined ? '1px solid var(--ignite-500)' : 'none',
      borderRight: p.r !== undefined ? '1px solid var(--ignite-500)' : 'none',
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: '0 var(--grid-gutter)',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-rise",
    style: {
      animationDelay: '60ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      marginBottom: 32,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ignite-500)'
    }
  }, "// FIELD NOTES"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "VOL. 01"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "ISSUE \u2116", String(BLOG_POSTS.length).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      color: 'var(--ignite-500)',
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--ignite-500)',
      animation: 'livepulse 1.6s var(--ease-out) infinite'
    }
  }), " LIVE")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(64px, 8.5vw, 132px)',
      lineHeight: 0.92,
      letterSpacing: '-0.045em',
      fontWeight: 700,
      margin: '0 0 36px'
    }
  }, "Field", /*#__PURE__*/React.createElement("br", null), "notes from", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
      color: 'var(--ignite-500)'
    }
  }, "the frontlines"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      bottom: -2,
      left: 0,
      right: 0,
      height: 6,
      background: 'var(--ignite-500)',
      opacity: 0.18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      maxWidth: 520,
      marginBottom: 40,
      borderLeft: '2px solid var(--ignite-500)',
      paddingLeft: 20
    }
  }, "Hard-won lessons on staffing, sampling, sponsorship, and the unsexy logistics that decide whether your activation actually moves the brand.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, " Written by the people who run the campaigns.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginBottom: 40,
      border: '1px solid var(--ink-400)',
      fontFamily: 'var(--font-mono)'
    }
  }, [{
    n: BLOG_POSTS.length,
    l: 'DISPATCHES'
  }, {
    n: BLOG_CATEGORIES.length - 1,
    l: 'CATEGORIES'
  }, {
    n: '7K+',
    l: 'AMBASSADORS'
  }, {
    n: '50',
    l: 'STATES'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      padding: '14px 18px',
      borderLeft: i ? '1px solid var(--ink-400)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--fg-1)',
      letterSpacing: '-0.02em'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.18em',
      color: 'var(--fg-3)',
      marginTop: 2
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: '1px solid var(--ink-400)',
      background: 'var(--ink-100)',
      padding: '14px 20px',
      maxWidth: 560,
      borderRadius: 0
    },
    onMouseDown: () => inputRef.current?.focus()
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search field notes\u2026",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--fg-1)',
      fontSize: 16,
      fontFamily: 'var(--font-body)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--fg-3)'
    }
  }, filtered.length, " POSTS"))), /*#__PURE__*/React.createElement("div", {
    className: "blog-rise",
    style: {
      position: 'relative',
      height: 520,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animationDelay: '220ms'
    }
  }, BLOG_POSTS.slice(0, 4).map((p, i) => {
    const offsets = [{
      top: 0,
      left: '10%',
      rot: -6,
      z: 1
    }, {
      top: 40,
      left: '42%',
      rot: 3,
      z: 2
    }, {
      top: 160,
      left: '8%',
      rot: 5,
      z: 3
    }, {
      top: 200,
      left: '46%',
      rot: -4,
      z: 4
    }][i];
    return /*#__PURE__*/React.createElement("a", {
      key: p.slug,
      href: `/blog-post?slug=${p.slug}`,
      className: "blog-card",
      style: {
        position: 'absolute',
        top: offsets.top,
        left: offsets.left,
        width: 220,
        aspectRatio: '4/5',
        transform: `rotate(${offsets.rot}deg)`,
        animationName: `cardDrift${i}`,
        animationDelay: `${i * 0.4}s`,
        zIndex: offsets.z,
        textDecoration: 'none',
        color: '#fff',
        transition: 'transform 280ms var(--ease-spring), box-shadow 280ms',
        boxShadow: '0 20px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08) inset',
        backgroundImage: `linear-gradient(135deg, ${p.accent}cc 0%, ${p.accent}99 50%, #000000ee 100%)${p.heroImage ? `, url(${p.heroImage})` : ''}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      onMouseEnter: e => {
        e.currentTarget.style.animation = 'none';
        e.currentTarget.style.transform = `rotate(${offsets.rot}deg) translateY(-8px) scale(1.04)`;
        e.currentTarget.style.zIndex = 10;
      },
      onMouseLeave: e => {
        e.currentTarget.style.animation = '';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.zIndex = offsets.z;
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        opacity: 0.75
      }
    }, "\u2116", String(BLOG_POSTS.indexOf(p) + 1).padStart(2, '0'), " / ", p.category.toUpperCase()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        lineHeight: 0.95,
        fontWeight: 700,
        letterSpacing: '-0.025em',
        fontFamily: 'var(--font-display)'
      }
    }, p.title.split(' ').slice(0, 5).join(' '), p.title.split(' ').length > 5 ? '…' : ''), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        letterSpacing: '0.18em',
        opacity: 0.6,
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", null, p.readTime, " MIN"), /*#__PURE__*/React.createElement("span", null, "READ \u2192")));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -8,
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.22em',
      color: 'var(--fg-3)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, "// LATEST \xB7 TAP TO READ")))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--ink-400)',
      background: 'var(--ink-100)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: '16px var(--grid-gutter)',
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginRight: 8
    }
  }, "FILTER:"), BLOG_CATEGORIES.map(c => {
    const active = filter === c.id;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setFilter(c.id),
      style: {
        padding: '8px 16px',
        border: `1px solid ${active ? 'var(--ignite-500)' : 'var(--ink-400)'}`,
        background: active ? 'var(--ignite-500)' : 'transparent',
        color: active ? '#000' : 'var(--fg-1)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 160ms var(--ease-out)',
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, c.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "\xB7 ", c.count));
  }))), filter === 'all' && !search.trim() && /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 40px',
      borderBottom: '1px solid var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: '0 var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--ignite",
    style: {
      marginBottom: 24
    }
  }, ">> LATEST DISPATCH"), /*#__PURE__*/React.createElement("a", {
    href: `/blog-post?slug=${featured.slug}`,
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 64,
      alignItems: 'center',
      padding: '48px 0',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.querySelector('.feat-arrow').style.transform = 'translateX(8px)',
    onMouseLeave: e => e.currentTarget.querySelector('.feat-arrow').style.transform = 'translateX(0)'
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      background: featured.accent,
      color: featured.accent === '#1A1A1A' ? '#fff' : '#000'
    }
  }, featured.category), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, fmtDate(featured.date)), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\xB7 ", featured.readTime, " MIN READ")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(40px, 5vw, 64px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      fontWeight: 600,
      marginBottom: 24
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      marginBottom: 32,
      maxWidth: 560
    }
  }, featured.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ignite-500)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "READ THE FULL DISPATCH"), /*#__PURE__*/React.createElement("span", {
    className: "feat-arrow",
    style: {
      transition: 'transform 240ms var(--ease-spring)',
      color: 'var(--ignite-500)',
      fontSize: 20
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      backgroundImage: `linear-gradient(135deg, ${featured.accent}cc 0%, ${featured.accent}99 50%, #000000dd 100%)${featured.heroImage ? `, url(${featured.heroImage})` : ''}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 40,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "IGNITE / FIELD NOTES / \u2116", String(BLOG_POSTS.indexOf(featured) + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(48px, 6vw, 88px)',
      lineHeight: 0.9,
      fontWeight: 700,
      letterSpacing: '-0.04em',
      fontFamily: 'var(--font-display)'
    }
  }, featured.title.split(' ').slice(0, 3).join(' ')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", null, featured.category.toUpperCase()), /*#__PURE__*/React.createElement("span", null, featured.readTime, " MIN"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: '0 var(--grid-gutter)'
    }
  }, (filter !== 'all' || search.trim()) && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--ignite",
    style: {
      marginBottom: 32
    }
  }, ">> ", filtered.length, " POSTS ", search.trim() && `MATCHING "${search.toUpperCase()}"`), filter === 'all' && !search.trim() && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--ignite",
    style: {
      marginBottom: 32
    }
  }, ">> ARCHIVE"), rest.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 0',
      textAlign: 'center',
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      marginBottom: 8
    }
  }, "No posts match that search."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSearch('');
      setFilter('all');
    },
    style: {
      marginTop: 16,
      padding: '12px 24px',
      border: '1px solid var(--ignite-500)',
      background: 'transparent',
      color: 'var(--ignite-500)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Clear filters")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '48px 32px'
    }
  }, rest.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: `/blog-post?slug=${p.slug}`,
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      cursor: 'pointer',
      transition: 'transform 240ms var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('.post-card-poster').style.transform = 'translateY(-4px)';
      e.currentTarget.querySelector('.post-card-arrow').style.transform = 'translateX(6px)';
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('.post-card-poster').style.transform = 'translateY(0)';
      e.currentTarget.querySelector('.post-card-arrow').style.transform = 'translateX(0)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-card-poster",
    style: {
      aspectRatio: '4/3',
      backgroundImage: `linear-gradient(135deg, ${p.accent}cc 0%, ${p.accent}99 50%, #000000dd 100%)${p.heroImage ? `, url(${p.heroImage})` : ''}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      padding: 24,
      marginBottom: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#fff',
      transition: 'transform 240ms var(--ease-out)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "\u2116", String(BLOG_POSTS.indexOf(p) + 1).padStart(2, '0'), " / ", p.category.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      lineHeight: 0.95,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontFamily: 'var(--font-display)'
    }
  }, p.title.split(' ').slice(0, 4).join(' '), p.title.split(' ').length > 4 ? '…' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, fmtDate(p.date)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'var(--fg-3)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, p.readTime, " MIN")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      lineHeight: 1.15,
      marginBottom: 12,
      letterSpacing: '-0.01em',
      fontWeight: 600
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      marginBottom: 16,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, p.dek), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ignite-500)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "READ ", /*#__PURE__*/React.createElement("span", {
    className: "post-card-arrow",
    style: {
      transition: 'transform 200ms var(--ease-spring)'
    }
  }, "\u2192")))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ignite-500)',
      color: '#000',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, [{
    t: 24,
    l: 24
  }, {
    t: 24,
    r: 24
  }, {
    b: 24,
    l: 24
  }, {
    b: 24,
    r: 24
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: 24,
      height: 24,
      ...p,
      borderTop: p.t !== undefined ? '1px solid #000' : 'none',
      borderBottom: p.b !== undefined ? '1px solid #000' : 'none',
      borderLeft: p.l !== undefined ? '1px solid #000' : 'none',
      borderRight: p.r !== undefined ? '1px solid #000' : 'none',
      opacity: 0.5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: '0 var(--grid-gutter)',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 64,
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, "// GOT AN ACTIVATION COMING UP?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 0.98,
      letterSpacing: '-0.025em',
      fontWeight: 700,
      marginBottom: 24
    }
  }, "Let's run the math", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontFamily: 'Georgia, serif',
      fontWeight: 400
    }
  }, "on your brief.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.5,
      maxWidth: 520,
      opacity: 0.85
    }
  }, "Send us the deck. We'll come back with a real budget structure, a staffing plan, and a measurement framework \u2014 usually within 48 hours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 28px',
      background: '#000',
      color: 'var(--ignite-500)',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontWeight: 700,
      border: '1px solid #000',
      textDecoration: 'none',
      transition: 'transform 200ms var(--ease-spring)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateX(8px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateX(0)'
  }, /*#__PURE__*/React.createElement("span", null, "Request a quote"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      opacity: 0.7,
      marginTop: 8
    }
  }, "// 48-HOUR RESPONSE \xB7 ALL 50 STATES \xB7 NO RFP THEATER")))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.BlogIndex = BlogIndex;