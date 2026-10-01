(function(){if (typeof window !== "undefined" && window.PageServicesEventProduction) return;
/* Auto-extracted from the design project's pages/services-event-production.html.
 * Page-specific inline JSX; mount call replaced by a window export so the
 * page runner can render it on the matching Webflow route.
 * Regenerate with extract-pages.js — do not hand-edit. */

const OR = "#D7453E",
  LIME = "#D6F35F";
const QUOTE = "https://www.igniteproductions.co/contact";
const useRv = () => React.useEffect(() => {
  const els = [...document.querySelectorAll(".ep-rv")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  }), {
    threshold: .1
  });
  els.forEach(e => io.observe(e));
  const t = setTimeout(() => els.forEach(e => e.classList.add("in")), 2400);
  return () => {
    io.disconnect();
    clearTimeout(t);
  };
}, []);
const Mono = ({
  c,
  children,
  s
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: c || OR,
    ...s
  }
}, children);
const Sec = ({
  children,
  bg,
  label,
  id
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  "data-screen-label": label,
  style: {
    background: bg || "#0A0B0D",
    color: "#fff",
    padding: "110px 0",
    borderBottom: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement(Container, null, children));
const H2 = ({
  children
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14,
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(32px,4vw,60px)",
    letterSpacing: "-0.035em",
    lineHeight: 1
  }
}, children);
const CUES = [["T-12 WK", "Brief + budget", "Goals, guest count, venue shortlist and a line-item budget."], ["T-8 WK", "Venue + permits", "Venue locked, permits, insurance and site plan filed."], ["T-6 WK", "Vendors + build", "AV, staging, rentals, fabrication and catering booked."], ["T-3 WK", "Run-of-show", "Minute-by-minute show flow, crew call sheet and training."], ["SHOW DAY", "Load-in to strike", "Producer calls the show, crew GPS-checked in, issues fixed on the spot."], ["T+4 HR", "Recap", "Headcount, photos and outcomes in Spark within hours."]];
const Hero = () => {
  const [on, setOn] = React.useState(4);
  React.useEffect(() => {
    const id = setInterval(() => setOn(i => (i + 1) % CUES.length), 1800);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Hero",
    style: {
      background: "#0A0B0D",
      color: "#fff",
      padding: "72px 0 96px",
      borderBottom: "1px solid rgba(255,255,255,.08)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
      backgroundSize: "56px 56px"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "ep-rise .8s both"
    }
  }, /*#__PURE__*/React.createElement(Mono, null, "* EVENT PRODUCTION // BRIEF TO STRIKE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 22,
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      letterSpacing: "-0.045em",
      lineHeight: .95
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "clamp(44px,5.4vw,86px)"
    }
  }, "Event production."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap",
      marginTop: 14,
      fontSize: "clamp(22px,2.3vw,34px)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
      color: "rgba(255,255,255,.88)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: "1.5em",
      padding: "0 .55em",
      borderRadius: 999,
      background: "rgba(215,69,62,.14)",
      border: "1px solid rgba(215,69,62,.45)",
      color: OR,
      fontStyle: "italic"
    }
  }, "One producer"), /*#__PURE__*/React.createElement("span", null, "from brief ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: OR
    }
  }, "\u2192"), " strike."))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 18,
      lineHeight: 1.55,
      color: "rgba(255,255,255,.78)",
      maxWidth: 560
    }
  }, "Launches, pop-ups, festival footprints, developer events and sponsor activations. We run the show flow, vendors, AV, permits, staffing and on-site show calling, then send the recap within hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: QUOTE,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      height: 52,
      padding: "0 26px",
      borderRadius: 999,
      background: LIME,
      color: "#0A0B0D",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Get a production quote \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#ros",
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 52,
      padding: "0 24px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.25)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 600
    }
  }, "See the run-of-show"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#101217",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: 16,
      overflow: "hidden",
      animation: "ep-rise .8s .15s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 16px",
      borderBottom: "1px solid rgba(255,255,255,.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 7,
      background: OR,
      animation: "ep-pulse 1.4s infinite"
    }
  }), /*#__PURE__*/React.createElement(Mono, {
    s: {
      fontSize: 9
    }
  }, "LIVE CUE SHEET")), /*#__PURE__*/React.createElement(Mono, {
    c: "rgba(255,255,255,.45)",
    s: {
      fontSize: 9
    }
  }, "PRODUCER: ON COMMS")), CUES.map(([t, h], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "92px 1fr auto",
      gap: 14,
      alignItems: "center",
      padding: "13px 18px",
      background: i === on ? "rgba(215,69,62,.1)" : "transparent",
      borderTop: i ? "1px solid rgba(255,255,255,.05)" : "none",
      transition: "background .3s"
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    c: i === on ? OR : "rgba(255,255,255,.45)",
    s: {
      fontSize: 10
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: i <= on ? "#fff" : "rgba(255,255,255,.5)"
    }
  }, h), /*#__PURE__*/React.createElement(Mono, {
    c: i < on ? LIME : i === on ? OR : "rgba(255,255,255,.3)",
    s: {
      fontSize: 9
    }
  }, i < on ? "✓ DONE" : i === on ? "● LIVE" : "QUEUED")))))));
};
const Proof = () => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#0E1015",
    borderBottom: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement(Container, {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px 40px",
    alignItems: "center",
    padding: "22px 32px"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  c: "rgba(255,255,255,.5)"
}, ">> PRODUCED + STAFFED"), ["OpenAI Dev Day // 87 crew", "Claude Code tour // 12 cities", "Breakaway // 12 festivals", "Liquid Death // 2018 to now"].map(x => /*#__PURE__*/React.createElement("span", {
  key: x,
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 16
  }
}, x))));
const ROS = () => /*#__PURE__*/React.createElement(Sec, {
  id: "ros",
  label: "02 Run of show"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> HOW A PRODUCTION RUNS"), /*#__PURE__*/React.createElement(H2, null, "The run-of-show, twelve weeks out to four hours after.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-ros ep-rv",
  style: {
    marginTop: 56
  }
}, CUES.map(([t, h, p], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: i === 4 ? "on" : ""
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10.5
  }
}, t), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20
  }
}, h), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.65)"
  }
}, p)))));
const SCOPE = [["Production management", "One producer owns budget, timeline, vendors and the client line."], ["Run-of-show + show calling", "Minute-by-minute flow, cue sheets and a producer on comms all day."], ["Venue, permits + insurance", "Site plans, city permits, COIs and venue rules handled before load-in."], ["AV, staging + lighting", "Sound, screens, stages and lighting through vetted vendor partners."], ["Builds + fabrication", "Custom footprints, photo moments and branded environments.", "fabrication"], ["Staffing + crew", "Brand ambassadors, hosts, registration and team leads from a 257K+ bench."], ["Load-in + strike", "Freight, setup, teardown and venue walk-out on schedule."], ["Hospitality + F&B", "Catering coordination, bars, VIP and green rooms."], ["Recap + reporting", "GPS-verified shifts, photos and outcomes in Spark within hours."]];
const Scope = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "03 Scope"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> WHAT WE PRODUCE"), /*#__PURE__*/React.createElement(H2, null, "Everything between the idea and the last truck leaving.")), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid3",
  style: {
    marginTop: 48
  }
}, SCOPE.map(([t, d, l], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  className: "ep-rv",
  style: {
    padding: 26,
    borderRadius: 14,
    background: "#12141A",
    border: "1px solid rgba(255,255,255,.08)"
  }
}, /*#__PURE__*/React.createElement(Mono, {
  s: {
    fontSize: 10
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
  style: {
    marginTop: 10,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.65)"
  }
}, d, l && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("a", {
  href: "/services/fabrication-builds",
  style: {
    color: OR
  }
}, "See fabrication \u2192")))))));
const TYPES = [["Brand launches", "Product reveals, press nights and launch parties."], ["Pop-ups + branded retail", "Short-run storefronts and sampling lounges."], ["Festival footprints", "Sponsor builds, silent discos and exit sampling."], ["Developer + corporate events", "Keynotes, workshops, registration and wayfinding."], ["Sponsor + sports activations", "Fan zones, tailgates and stadium moments."], ["Multi-city tours", "One show, rebuilt in every market.", "tours"]];
const Types = () => /*#__PURE__*/React.createElement(Sec, {
  label: "04 Event types"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
    gap: 56
  },
  className: "ep-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> EVENTS WE PRODUCE"), /*#__PURE__*/React.createElement(H2, null, "Built for brand moments, not ballroom galas."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.7)"
  }
}, "Ignite produces the events where a brand meets people face to face, and staffs them with crews trained on that brand.")), /*#__PURE__*/React.createElement("ul", {
  className: "ep-rv",
  style: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    borderTop: "1px solid rgba(255,255,255,.12)"
  }
}, TYPES.map(([t, d, l]) => /*#__PURE__*/React.createElement("li", {
  key: t,
  style: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 18,
    padding: "18px 0",
    borderBottom: "1px solid rgba(255,255,255,.1)"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: 19
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 4,
    fontSize: 14.5,
    color: "rgba(255,255,255,.65)"
  }
}, d)), l && /*#__PURE__*/React.createElement("a", {
  href: "/services/mobile-tours",
  style: {
    alignSelf: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: ".16em",
    color: OR
  }
}, "TOURS \u2192"))))));
const Photos = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "05 Photos"
}, /*#__PURE__*/React.createElement("div", {
  className: "ep-rv"
}, /*#__PURE__*/React.createElement(Mono, null, ">> FROM THE FLOOR"), /*#__PURE__*/React.createElement(H2, null, "Shows we've run.")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gridAutoRows: 260,
    gap: 10
  },
  className: "ep-rv"
}, [["https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg", "Attendees seated for the OpenAI Dev Day keynote, ushered by Ignite crew", "OPENAI DEV DAY"], ["https://kyle915.github.io/ignite-webflow-assets/assets/breakaway-jimmy-johns-silent-disco.jpg", "Jimmy John's Club Sandwich silent disco at Breakaway Music Festival", "BREAKAWAY"], ["https://kyle915.github.io/ignite-webflow-assets/assets/claude-workshops-atlanta-team.png", "Ignite crew at registration for the Claude Code workshop tour", "CLAUDE TOUR"]].map(([s, a, c], i) => /*#__PURE__*/React.createElement("figure", {
  key: s,
  style: {
    margin: 0,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    gridRow: i === 0 ? "span 2" : "auto",
    gridColumn: i === 0 ? "auto" : "auto"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: s,
  alt: a,
  loading: "lazy",
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 10,
    bottom: 10,
    padding: "5px 9px",
    borderRadius: 6,
    background: "rgba(10,11,13,.8)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: ".14em",
    color: "rgba(255,255,255,.75)"
  }
}, c))), /*#__PURE__*/React.createElement("figure", {
  style: {
    margin: 0,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    gridColumn: "span 2"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "https://kyle915.github.io/ignite-webflow-assets/assets/experiential-liquiddeath-nascar.jpg",
  alt: "Liquid Death branded activation footprint at a NASCAR event, produced and staffed by Ignite",
  loading: "lazy",
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 45%"
  }
}), /*#__PURE__*/React.createElement("figcaption", {
  style: {
    position: "absolute",
    left: 10,
    bottom: 10,
    padding: "5px 9px",
    borderRadius: 6,
    background: "rgba(10,11,13,.8)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: ".14em",
    color: "rgba(255,255,255,.75)"
  }
}, "LIQUID DEATH // NASCAR ACTIVATION"))));
const FAQ = [["What does an event production company do?", "It owns the event from brief to strike: the run-of-show, vendor and AV coordination, permits and insurance, staging, load-in, on-site show calling, staffing and the post-event recap. Ignite runs all of it through one producer and one team."], ["Do you produce events in-house or through vendors?", "[CONFIRM] Ignite manages production, staffing and on-site execution in-house and coordinates specialist vendors for AV, staging and rentals under one producer, so you get one point of contact and one invoice."], ["What kinds of events do you produce?", "Brand launches, pop-ups, festival footprints, developer and corporate events, sponsor activations, hospitality suites and multi-city tours."], ["How far ahead should we book event production?", "Eight to twelve weeks gives room for permits, vendors and custom builds. Smaller activations can move in two to four weeks, and staffing can be added in 48 hours."], ["How do we see what happened at the event?", "Every shift is GPS-checked in through Spark, with photos and counts logged live. A recap with headcount, photos and outcomes lands within hours of strike."]];
const Faq = () => /*#__PURE__*/React.createElement(Sec, {
  label: "06 FAQ"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 900
  }
}, /*#__PURE__*/React.createElement(Mono, null, ">> QUESTIONS"), /*#__PURE__*/React.createElement(H2, null, "Event production, answered."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement("details", {
  key: q,
  open: i === 0,
  style: {
    borderTop: "1px solid rgba(255,255,255,.1)",
    padding: "18px 0"
  }
}, /*#__PURE__*/React.createElement("summary", {
  style: {
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 19
  }
}, q), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 10,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: "rgba(255,255,255,.7)"
  }
}, a))))));
const Rel = () => /*#__PURE__*/React.createElement(Sec, {
  bg: "#0C0E13",
  label: "07 Related"
}, /*#__PURE__*/React.createElement(Mono, null, ">> RELATED"), /*#__PURE__*/React.createElement("div", {
  className: "ep-grid3",
  style: {
    marginTop: 18
  }
}, [["Experiential marketing + activations", "/services/experiential-marketing"], ["Mobile marketing tours", "/services/mobile-tours"], ["Spark: live run-of-show + recaps", "https://sparkbyignite.igniteproductions.co/"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
  key: h,
  href: h,
  style: {
    padding: 24,
    borderRadius: 14,
    background: "#12141A",
    border: "1px solid rgba(255,255,255,.08)",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19
  }
}, l, " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: OR
  }
}, "\u2192")))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  "data-screen-label": "08 CTA",
  style: {
    background: "#0A0B0D",
    color: "#fff",
    padding: "120px 0",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Mono, {
  c: LIME
}, "< one producer. one invoice. one recap >"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 18,
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: "clamp(36px,5vw,76px)",
    letterSpacing: "-0.045em",
    lineHeight: .95
  }
}, "Send the date. We'll send the show plan."), /*#__PURE__*/React.createElement("a", {
  href: QUOTE,
  style: {
    marginTop: 32,
    display: "inline-flex",
    alignItems: "center",
    height: 56,
    padding: "0 30px",
    borderRadius: 999,
    background: LIME,
    color: "#0A0B0D",
    fontWeight: 700,
    textDecoration: "none"
  }
}, "Get a production quote \u2192"), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 16,
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: ".16em",
    color: "rgba(255,255,255,.5)"
  }
}, "A REAL HUMAN REPLIES WITHIN 24 HOURS")));
const Page = () => {
  useRv();
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Event Production"
  }, /*#__PURE__*/React.createElement(SiteNav, {
    active: "SERVICES"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(ROS, null), /*#__PURE__*/React.createElement(Scope, null), /*#__PURE__*/React.createElement(Types, null), /*#__PURE__*/React.createElement(Photos, null), window.RelatedCases ? React.createElement(window.RelatedCases, {
    ctx: "service",
    slug: "event-production",
    heading: "Productions we've run."
  }) : null, /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Rel, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(SiteFooter, null));
};
Object.assign(window, {
  PageServicesEventProduction: Page
});
})();
