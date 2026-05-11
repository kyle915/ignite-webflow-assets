// BlogPost — long-form article view, editorial typography

const fmtDate2 = iso => {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};
function BlogPost() {
  const slug = new URLSearchParams(window.location.search).get('slug');
  /* If someone lands on /blog-post without a slug, render the BlogIndex
     (the article listing) inline instead of showing the not-found state. */
  if (!slug && typeof window !== "undefined" && typeof window.BlogIndex === "function") {
    return React.createElement(window.BlogIndex);
  }
  const post = BLOG_POSTS.find(p => p.slug === slug);
  React.useEffect(() => {
    if (post) document.title = `${post.title} | Ignite Productions`;
  }, [post]);
  if (!post) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-000)',
        color: 'var(--fg-1)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement(SiteNav, {
      active: "BLOG"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600,
        margin: '200px auto',
        padding: '0 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow eyebrow--ignite",
      style: {
        marginBottom: 24
      }
    }, "// 404 / DISPATCH NOT FOUND"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 48,
        marginBottom: 24
      }
    }, "This post doesn't exist."), /*#__PURE__*/React.createElement("a", {
      href: "/blog",
      style: {
        color: 'var(--ignite-500)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontSize: 14
      }
    }, "\u2190 Back to all field notes")), /*#__PURE__*/React.createElement(SiteFooter, null));
  }

  // Related: same category, excluding current. Fall back to most recent others.
  const related = [...BLOG_POSTS.filter(p => p.category === post.category && p.slug !== post.slug), ...BLOG_POSTS.filter(p => p.category !== post.category && p.slug !== post.slug)].slice(0, 3);

  // Index in archive (for prev/next)
  const idx = BLOG_POSTS.indexOf(post);
  const prev = idx > 0 ? BLOG_POSTS[idx - 1] : null;
  const next = idx < BLOG_POSTS.length - 1 ? BLOG_POSTS[idx + 1] : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-000)',
      color: 'var(--fg-1)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "BLOG"
  }), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '120px 0 60px',
      borderBottom: '1px solid var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 840,
      margin: '0 auto',
      padding: '0 var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/blog",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--fg-3)',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 40,
      transition: 'color 160ms'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--ignite-500)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--fg-3)'
  }, "\u2190 All field notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 32,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      background: post.accent,
      color: post.accent === '#1A1A1A' ? '#fff' : '#000'
    }
  }, post.category), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, fmtDate2(post.date).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\xB7 ", post.readTime, " MIN READ")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 5.5vw, 72px)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      fontWeight: 600,
      marginBottom: 32
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      lineHeight: 1.4,
      color: 'var(--fg-2)',
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontStyle: 'italic',
      marginBottom: 48
    }
  }, post.dek))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px var(--grid-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '21/9',
      backgroundImage: `linear-gradient(135deg, ${post.accent}cc 0%, ${post.accent}99 50%, #000000dd 100%)${post.heroImage ? `, url(${post.heroImage})` : ''}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      color: '#fff',
      padding: '48px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, "IGNITE / FIELD NOTES / \u2116", String(idx + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(56px, 8vw, 128px)',
      lineHeight: 0.88,
      fontWeight: 700,
      letterSpacing: '-0.04em',
      fontFamily: 'var(--font-display)',
      maxWidth: '80%'
    }
  }, post.title.split(' ').slice(0, 5).join(' ')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", null, post.category), /*#__PURE__*/React.createElement("span", null, fmtDate2(post.date)), /*#__PURE__*/React.createElement("span", null, post.readTime, " MIN")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '80px var(--grid-gutter) 80px'
    }
  }, post.body.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 20,
      lineHeight: 1.65,
      color: 'var(--fg-1)',
      marginBottom: 32,
      ...(i === 0 ? {
        fontSize: 22,
        textWrap: 'pretty'
      } : {})
    }
  }, i === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'left',
      fontSize: 80,
      lineHeight: 0.85,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--ignite-500)',
      marginRight: 12,
      marginTop: 6,
      letterSpacing: '-0.04em'
    }
  }, para[0]), para.slice(1)) : para)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 48,
      marginTop: 48,
      borderTop: '1px solid var(--ink-400)',
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginRight: 8
    }
  }, "FILED UNDER:"), (post.tags || []).map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: `/blog`,
    style: {
      padding: '5px 10px',
      border: '1px solid var(--ink-400)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      transition: 'all 160ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--ignite-500)';
      e.currentTarget.style.color = 'var(--ignite-500)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--ink-400)';
      e.currentTarget.style.color = 'var(--fg-2)';
    }
  }, t)))), /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: '1px solid var(--ink-400)',
      borderBottom: '1px solid var(--ink-400)',
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderLeft: '1px solid var(--ink-400)'
    }
  }, prev ? /*#__PURE__*/React.createElement("a", {
    href: `/blog-post?slug=${prev.slug}`,
    style: {
      padding: '40px var(--grid-gutter)',
      borderRight: '1px solid var(--ink-400)',
      display: 'block',
      transition: 'background 160ms',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ink-200)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--ignite",
    style: {
      marginBottom: 12
    }
  }, "\u2190 NEWER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, prev.title)) : /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--ink-400)'
    }
  }), next ? /*#__PURE__*/React.createElement("a", {
    href: `/blog-post?slug=${next.slug}`,
    style: {
      padding: '40px var(--grid-gutter)',
      borderRight: '1px solid var(--ink-400)',
      display: 'block',
      textAlign: 'right',
      transition: 'background 160ms',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ink-200)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow--ignite",
    style: {
      marginBottom: 12
    }
  }, "OLDER \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, next.title)) : /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--ink-400)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0',
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
      marginBottom: 32
    }
  }, ">> RELATED DISPATCHES"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }
  }, related.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.slug,
    href: `/blog-post?slug=${r.slug}`,
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      marginBottom: 16,
      backgroundImage: `linear-gradient(135deg, ${r.accent}cc 0%, ${r.accent}99 50%, #000000dd 100%)${r.heroImage ? `, url(${r.heroImage})` : ''}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
      padding: 20,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 240ms'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.2em',
      opacity: 0.6
    }
  }, "\u2116", String(BLOG_POSTS.indexOf(r) + 1).padStart(2, '0'), " / ", r.category.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      lineHeight: 0.95,
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontFamily: 'var(--font-display)'
    }
  }, r.title.split(' ').slice(0, 4).join(' '), r.title.split(' ').length > 4 ? '…' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, fmtDate2(r.date).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\xB7 ", r.readTime, "M")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      lineHeight: 1.2,
      marginBottom: 0
    }
  }, r.title)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ignite-500)',
      color: '#000',
      padding: '80px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto',
      padding: '0 var(--grid-gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, "// GOT AN ACTIVATION COMING UP?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(36px, 4vw, 56px)',
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      fontWeight: 600,
      marginBottom: 24
    }
  }, "Let's run the math on it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      marginBottom: 32,
      opacity: 0.85
    }
  }, "Send us the brief. We'll come back with a real budget structure, a staffing plan, and a measurement framework \u2014 usually within 48 hours."), /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      padding: '18px 32px',
      background: '#000',
      color: 'var(--ignite-500)',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, "Start a brief \u2192")))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.BlogPost = BlogPost;