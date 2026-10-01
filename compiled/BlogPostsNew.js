(function(){if (typeof window !== "undefined" && window.BLOG_POSTS) return;
// New SEO posts (Sept 2026). No pricing on purpose: every cost post explains drivers, not rates.
// Each post carries `links` (internal service / case / city pages) and `faq` (rendered + FAQPage schema).
const A_KYLE = {
  author: "Kyle Christiansen",
  role: "Founder, Ignite Productions"
};
const NEW_POSTS = [{
  slug: "event-production-cost-breakdown",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  title: "How Much Does Event Production Cost? A Line-Item Breakdown",
  dek: "Every event production quote is built from the same eight lines. Here's what each one covers and what makes it move, so you can read a quote instead of guessing at one.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-30",
  readTime: 8,
  accent: "#D7453E",
  tags: ["event production", "event budget", "brand events"],
  keywords: "event production cost, how much does event production cost, event production budget, brand event cost breakdown, event production company",
  body: ["Ask five event production companies what an event costs and you'll get five answers that start with \"it depends.\" It does depend, but on a short, predictable list. Once you know the lines, you can compare quotes on the same terms and spot where a budget is padded or thin.", "Line one is production management. This is the producer who owns the timeline, the vendors, the budget and the client line. On a small activation it might be part of one person's week. On a multi-day developer conference it's a full team for months. Ask every agency who your producer is and how many other shows they're carrying that week.", "Line two is venue and site. Rental, power, security, cleaning, load-in windows and whatever the venue requires you to buy from its in-house vendors. Venue rules move this line more than the venue itself, so ask for the exclusive vendor list before you sign.", "Line three is permits and insurance. City permits for outdoor events, fire marshal sign-off for builds, and certificates of insurance naming the venue and the brand. This line is small on paper and huge when it's missed, because a missing permit stops the show.", "Line four is AV, staging and lighting. Sound, screens, stages, lighting and the technicians who run them. Line five is builds and fabrication: custom footprints, photo moments and branded environments. Both scale with ambition, and both have real lead times, so the later you book, the more you pay in rush fees.", "Line six is staffing and crew. Brand ambassadors, hosts, registration, ushers, wayfinding and team leads. At OpenAI Dev Day we ran 87 brand ambassadors across product areas, keynote ushering, wayfinding, traffic and food and beverage support. Crew count is driven by doors, zones and hours, not by headcount alone.", "Line seven is hospitality and food and beverage, and line eight is reporting. A good production quote includes a recap: verified shifts, photos and outcomes. If a quote doesn't name how you'll find out what happened, the recap is either missing or an extra charge later.", "The fastest way to get a real number is to send three things: the date and city, the guest count, and what you want people to do. With that, a producer can build every line above. That's how we quote at Ignite, and a real person replies within 24 hours."],
  links: [["Event production services", "/services/event-production"], ["OpenAI Dev Day case study", "/portfolio/openai-devday"], ["Fabrication and builds", "/services/fabrication-builds"]],
  faq: [["What are the biggest costs in event production?", "Usually staffing and crew, AV and staging, and venue fees. Builds and fabrication become the biggest line when the event has a custom footprint."], ["How far ahead should I book event production?", "Eight to twelve weeks gives room for permits, vendors and custom builds. Smaller activations can move in two to four weeks."], ["What should an event production quote include?", "Production management, venue and site, permits and insurance, AV and staging, builds, staffing, hospitality and a post-event recap."]]
}, {
  slug: "mobile-tour-cost-2026",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/claude-workshops-atlanta-team.png",
  title: "What Drives the Cost of a 10-City Mobile Tour in 2026",
  dek: "Mobile tour quotes look wildly different because the drivers are different. Here are the six that decide your number, and how to plan a route that spends money on stops, not on miles.",
  category: "Logistics",
  ...A_KYLE,
  date: "2026-09-29",
  readTime: 7,
  accent: "#4FB58A",
  tags: ["mobile tours", "roadshow", "tour planning"],
  keywords: "mobile tour cost, mobile marketing tour cost, roadshow budget, 10 city tour, mobile tour agency, sampling tour cost",
  body: ["A 10-city mobile tour can be a sprinter van with two ambassadors or a custom-built trailer with a full crew. The price gap between those is obvious. What's less obvious is that two tours with the same vehicle can still land far apart, because of how the route and the stops are planned.", "Driver one is the vehicle. Rented and wrapped, owned and branded, or custom built. A custom build carries design and fabrication time up front, and it has to survive ten markets of loading, weather and road wear.", "Driver two is the route. Route density is the single biggest lever most brands ignore. Ten cities in one region means short drives, fewer hotel nights and more selling days. Ten cities scattered across the country means drive days you pay for and can't activate on.", "Driver three is crew per stop. Traveling crew gives you consistency. Local crew at each stop cuts travel and hotel costs and brings market knowledge. On the 12-city Claude Code workshop tour, Ignite staffed each stop with local teams, which kept the experience consistent without flying a crew across the country.", "Driver four is compliance: licensed drivers, DOT rules for commercial vehicles, and insurance. Driver five is permits and stop agreements, because every city and every property has its own rules for parking a branded vehicle and handing out product.", "Driver six is weather and buffer days. Outdoor tours need them. A plan that pretends every day will be sunny ends up with surprise invoices or canceled stops.", "The way to keep a tour efficient is to measure each stop. We report cost per stop and results after every stop in Spark, so you can move budget toward the markets that are working while the tour is still running, not after it ends.", "If you send the markets, the dates and the goal for each stop, we'll come back with a full route plan and quote within 24 hours."],
  links: [["Mobile marketing tours", "/services/mobile-tours"], ["Claude Code workshop tour case study", "/portfolio/claude-code-workshops"], ["Event production", "/services/event-production"]],
  faq: [["How long does a mobile marketing tour usually run?", "Most run four to twelve weeks across six to twenty markets, though a single-market activation can run two weeks."], ["Is it cheaper to use local crew on a tour?", "Often, yes. Local crews at each stop cut travel and hotel costs and bring local knowledge, while a traveling lead keeps the experience consistent."], ["How do you measure a mobile tour?", "Track results per stop: visitors, samples, leads and cost per stop, reported after each stop so budget can shift during the tour."]]
}, {
  slug: "in-store-demo-cost-per-hour",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/brewdr-king-soopers-demo.jpg",
  title: "In-Store Demo Cost: What Actually Drives the Hourly Number",
  dek: "Two demo agencies can quote the same store on the same Saturday and land far apart. Here's what's inside an in-store demo rate, and the questions that tell you if you're buying a demo or a body.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-28",
  readTime: 6,
  accent: "#00A3AD",
  tags: ["in-store demos", "retail sampling", "CPG"],
  keywords: "in-store demo cost, product demo cost per hour, retail sampling cost, demo agency rates, CPG demo program",
  body: ["An in-store demo rate is never just the ambassador's wage. It's the person, plus everything that has to happen so that person shows up at the right store, at the right time, trained on your product, with the right supplies, and reports what happened.", "The first driver is scheduling. Demos have to be booked with each store, often through the retailer's own demo vendor rules or a distributor. Programs that run at volume, like Brew Dr.'s roughly 150 in-store demos a month, depend on a team that does nothing but coordinate dates with stores and keep the calendar full.", "The second driver is training. A demo where the ambassador can explain what makes the product different converts better than one where they hand out cups. When we ran Stone House Bread's Kroger program, ambassadors were trained on the bread's heritage, ingredients and fermentation story before their first shift.", "The third driver is supplies and prep. Food demos need prep equipment, food handler certification and food safety rules. Beverage demos need cups, ice and sometimes alcohol service rules. Supplies are either built into the rate or billed separately, so ask which.", "The fourth driver is the market. Big metro shifts cost more than small market shifts, and short shifts often carry minimums.", "The fifth driver is reporting. A recap with photos, counts and shopper feedback costs something to produce, and it's the only way to know if the demo worked. A cheap demo with no recap is the most expensive kind, because you can't tell if it did anything.", "When you compare quotes, ask: who schedules with the store, how are ambassadors trained, are supplies included, and what does the recap include? The answers explain the gap between rates better than the rates themselves."],
  links: [["Retail demo programs", "/services/retail-demo-programs"], ["Brew Dr. Kombucha case study", "/portfolio/brew-dr"], ["The cost of a brand ambassador per hour", "/post/brand-ambassador-hourly-rate"]],
  faq: [["What's included in an in-store demo rate?", "Usually the ambassador's time, scheduling with the store, training and a recap. Supplies, food prep equipment and product are sometimes billed separately."], ["How many demos does a retail sampling program run?", "It varies by brand and stage. Ignite runs about 150 in-store demos a month for Brew Dr. Kombucha."], ["How do I know if a demo worked?", "Look for a recap with photos, sample counts, shopper feedback and purchases logged during the shift."]]
}, {
  slug: "trade-show-booth-staff-by-city",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  title: "Trade Show Booth Staff by City: Las Vegas, Orlando and Chicago",
  dek: "The three biggest convention cities in the U.S. each staff differently. Venue rules, labor rules and show calendars change what you need and when to book.",
  category: "Logistics",
  ...A_KYLE,
  date: "2026-09-27",
  readTime: 7,
  accent: "#9FC24E",
  tags: ["trade shows", "booth staff", "Las Vegas", "Orlando", "Chicago"],
  keywords: "trade show booth staff Las Vegas, booth staffing Orlando, trade show staffing Chicago, convention staffing, booth hosts",
  body: ["Las Vegas, Orlando and Chicago host more trade show floor space than anywhere else in the country. Booth staff in each city do the same job, greeting, qualifying and scanning leads, but the conditions around them are very different.", "Las Vegas runs the busiest tech calendar in the world: CES, NAB, Black Hat, SEMA and AWS re:Invent among them. The Las Vegas Convention Center and the Strip venues are huge, so walking time between halls eats into shift plans. During the biggest shows the best specialists are booked weeks out, so lock your crew early.", "Orlando's Orange County Convention Center is spread across connected buildings, so hall assignments and travel time between concourses matter. Orlando also mixes trade shows with resort events, where vendor credentials are often required ahead of time.", "Chicago's McCormick Place has strict union rules over freight, rigging and some booth work. Brand staff can host and demo, but setup and some technical tasks are handled by venue labor. Plan roles carefully and book load-in around winter weather if the show is between December and March.", "In every city, the fastest way to waste booth money is untrained staff. Hosts need a 30-second pitch and a qualifying question built with your sales team. Technical demo leads need hands-on time with the product before the show, not a sell sheet at 7am.", "Ignite staffs booths in all three cities with local crews, which keeps hotels and flights off the quote. For OpenAI Dev Day we put 87 brand ambassadors on site across product areas, ushering and wayfinding, which is the same skill set a large tech booth needs."],
  links: [["Trade show staffing", "/services/trade-shows"], ["OpenAI Dev Day case study", "/portfolio/openai-devday"], ["Las Vegas event staffing", "/cities/las-vegas"]],
  faq: [["How early should I book trade show booth staff?", "About ten weeks for most shows, and twelve weeks for the biggest Las Vegas tech shows."], ["Do union rules affect booth staff at McCormick Place?", "Yes. Some freight, rigging and booth work is handled by venue labor, so brand staff roles are scoped to hosting, demos and lead capture."], ["Do you use local staff at trade shows?", "Yes. Local crews in Las Vegas, Orlando and Chicago avoid hotel and travel costs during peak show weeks."]]
}, {
  slug: "staffing-a-developer-conference",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  title: "How to Staff a Developer Conference: Lessons from 87 Crew at OpenAI Dev Day",
  dek: "Developer events need staff who can keep up with the audience. Here's how we planned and ran 87 brand ambassadors across OpenAI Dev Day 2026.",
  category: "Staffing",
  ...A_KYLE,
  date: "2026-09-26",
  readTime: 7,
  accent: "#10A37F",
  tags: ["developer conference", "event staffing", "OpenAI", "tech events"],
  keywords: "developer conference staffing, tech event staffing, conference brand ambassadors, keynote ushers, event wayfinding staff, OpenAI Dev Day",
  body: ["OpenAI Dev Day 2026 needed a large on-site team supporting both the attendee experience and event operations. Ignite staffed 87 brand ambassadors across nearly every part of the event.", "The first lesson is to staff by zone, not by headcount. We split the team into experiential product areas, keynote ushering, wayfinding and signage, traffic management, and food and beverage support. Each zone had its own brief and its own lead, so nobody was guessing where they belonged.", "The second lesson is that leads matter more at scale. Lead and supervisor brand ambassadors gave on-site oversight across the venue. When a zone got busy, the lead moved people, not the event producer.", "The third lesson is that keynotes are their own operation. Ushering a keynote means moving a large audience in and out of a room on a schedule, keeping aisles clear and answering the same questions a hundred times without losing patience. That's a trained role, not a filler shift.", "The fourth lesson is wayfinding. Developer events often spread across multiple rooms and floors. Staff at decision points, with signage and a clear answer, keep sessions starting on time.", "The fifth lesson is product areas need people who are comfortable with the product. Attendees want to try things and ask real questions. Staff should know enough to engage and when to hand off to the client's own team.", "If you're planning a developer conference, start with the zones, then the leads, then the headcount. That order gives you a team that runs the event instead of standing in it."],
  links: [["OpenAI Dev Day case study", "/portfolio/openai-devday"], ["Event staffing", "/services/event-staffing"], ["Event production", "/services/event-production"]],
  faq: [["How many staff does a developer conference need?", "It depends on zones, doors and hours. OpenAI Dev Day 2026 used 87 brand ambassadors across product areas, ushering, wayfinding, traffic and food and beverage support."], ["What roles do conference brand ambassadors fill?", "Product area hosts, keynote ushers, wayfinding and signage, traffic management, registration and hospitality, with leads and supervisors overseeing each zone."], ["Do conference staff need product training?", "For product areas, yes. Staff should know enough to engage attendees and when to hand off to the client's team."]]
}, {
  slug: "running-a-12-city-workshop-tour",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/claude-workshops-atlanta-team.png",
  title: "Running a 12-City Workshop Tour with Local Teams",
  dek: "What we learned supporting the 12-city Claude Code workshop tour: how to keep every stop consistent while staffing each city locally.",
  category: "Logistics",
  ...A_KYLE,
  date: "2026-09-25",
  readTime: 6,
  accent: "#D97757",
  tags: ["workshop tour", "developer events", "Claude", "event tour"],
  keywords: "workshop tour staffing, multi-city event tour, developer workshop event, roadshow staffing, Claude Code workshop",
  body: ["The Claude Code workshop tour brings developer events to 12 cities. Ignite supports it with event execution and brand ambassador staffing at each stop.", "The core decision on any multi-city tour is traveling crew or local crew. For a workshop series, local teams win. They know the venue area, they don't need hotels, and they can be briefed the same way every time.", "Consistency comes from the brief, not the people. Every stop gets the same run-of-show, the same registration flow, the same answers to common questions. When the brief is right, a team in Atlanta and a team in another city deliver the same experience.", "The ambassador's job at a workshop is to keep operations moving so presenters and attendees can focus. That means registration, seating, wayfinding, timing and handling the small problems before the presenter notices them.", "Each stop should produce the same recap, so the event team can compare cities and fix what didn't work before the next stop instead of after the tour.", "If you're planning a workshop or roadshow series, build the stop template first, then staff it locally. That's what keeps city twelve as good as city one."],
  links: [["Claude Code workshop tour case study", "/portfolio/claude-code-workshops"], ["Mobile marketing tours", "/services/mobile-tours"], ["Atlanta event staffing", "/cities/atlanta"]],
  faq: [["Should a multi-city tour use local or traveling staff?", "For repeatable formats like workshops, local teams are usually better: no hotels, local knowledge, and a consistent brief keeps every stop the same."], ["What do brand ambassadors do at a workshop?", "Registration, seating, wayfinding, timing and on-site problem solving so presenters and attendees can focus on the content."], ["How do you keep every tour stop consistent?", "A single stop template: the same run-of-show, registration flow, answers and recap format in every city."]]
}, {
  slug: "festival-silent-disco-exit-sampling",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/breakaway-jimmy-johns-silent-disco.jpg",
  title: "Silent Discos and Exit Sampling: Sponsor Activations That Work at Festivals",
  dek: "Two very different festival activations, one festival series. What we learned staffing Jimmy John's silent disco and hiyo exit sampling across 12 Breakaway festivals.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-24",
  readTime: 6,
  accent: "#E8102E",
  tags: ["festival activations", "sponsorship", "sampling", "Breakaway"],
  keywords: "festival activation ideas, silent disco activation, exit sampling festival, festival sponsorship activation, music festival brand activation",
  body: ["Festival sponsors fight for attention in a crowd that came for the music. Across 12 Breakaway Music Festival events, Ignite staffed two activations that worked for opposite reasons.", "The Jimmy John's Club Sandwich silent disco gives people something to do. A branded experience inside the festival becomes a destination, and the brand is the host instead of an interruption. Our team staffed and helped run on-site operations and kept festivalgoers engaged.", "hiyo's exit sampling works because of timing. As people leave the festival, they're tired, thirsty and walking past you in a steady line. Our ambassadors handed out product and introduced attendees to the brand right at that moment.", "Experience activations need flow management. Lines, capacity and hand-offs of equipment like headphones have to run smoothly or the experience falls apart.", "Exit sampling needs speed and volume. Product has to be cold, staff have to be fast and the location has to be on the main exit path, agreed with the festival in advance.", "Running both across a festival series means the same standard at every event. That's what turns a sponsorship into a program instead of a one-off."],
  links: [["Breakaway case study", "/portfolio/breakaway"], ["Festival brand activations", "/services/festival-brand-activations"], ["Product sampling", "/services/product-sampling"]],
  faq: [["What festival activations work best for sponsors?", "Ones that give people something to do, like a silent disco, or that meet them at a high-need moment, like exit sampling as they leave."], ["What is exit sampling at a festival?", "Handing out product to attendees as they leave, when they're thirsty and moving past in a steady line."], ["How many festivals did Ignite staff for Breakaway?", "Twelve festivals, supporting Jimmy John's and hiyo activations."]]
}, {
  slug: "running-150-retail-demos-a-month",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/brewdr-kroger-demo-table.jpg",
  title: "What 150 Retail Demos a Month Looks Like Operationally",
  dek: "A demo program at volume is a scheduling business first. Here's how Ignite runs about 150 in-store demos a month for Brew Dr. Kombucha.",
  category: "Logistics",
  ...A_KYLE,
  date: "2026-09-23",
  readTime: 6,
  accent: "#00A3AD",
  tags: ["retail demos", "sampling program", "Brew Dr.", "distributor support"],
  keywords: "retail demo program, in-store sampling program management, demo scheduling, distributor demo support, kombucha sampling",
  body: ["Brew Dr. needed a retail sampling partner that could support its distributors and retail accounts while growing with the brand. Ignite owns and manages the program end to end, averaging about 150 in-store demos a month.", "At this volume, the program lives or dies on scheduling. Every demo has to be agreed with a store, often with input from a distributor. That takes a dedicated coordinator keeping the calendar full and handling reschedules before they turn into gaps.", "Staffing is next. Each market needs a bench of ambassadors who know the product, so a sick call doesn't mean a canceled demo.", "Then the shift itself: a branded sampling station, product introductions and real conversations with shoppers, positioned so trial connects to the shelf.", "Reporting closes the loop. Every demo produces a recap, so distributors and the brand can see what's happening across accounts without asking.", "The program started in the Pacific Northwest and is expanding into new markets. The playbook is the same in each one: schedule, staff, execute, report, through one partner accountable for all of it."],
  links: [["Brew Dr. Kombucha case study", "/portfolio/brew-dr"], ["Retail demo programs", "/services/retail-demo-programs"], ["Seattle event staffing", "/cities/seattle"]],
  faq: [["How many retail demos does Ignite run for Brew Dr.?", "About 150 in-store demos a month, starting in the Pacific Northwest and expanding into new markets."], ["What's the hardest part of a high-volume demo program?", "Scheduling. Every demo has to be agreed with a store, and reschedules have to be handled before they become gaps."], ["Who manages the demo program end to end?", "Ignite coordinates retail partners, schedules demos, staffs ambassadors, executes in store and reports on every demo."]]
}, {
  slug: "sampling-bread-at-kroger",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/stonehouse-kroger-sampling.png",
  title: "Sampling Bread at Kroger: What 32 Events Taught Us",
  dek: "Stone House Bread brought its sourdough story to Michigan Kroger shoppers. Here's what worked across 32 sampling events in 19 stores.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-22",
  readTime: 5,
  accent: "#D7282F",
  tags: ["in-store sampling", "Kroger", "food sampling", "Stone House Bread"],
  keywords: "bread sampling in store, Kroger sampling program, food demo ideas, grocery sampling, Michigan retail sampling",
  body: ["Stone House Bread wanted to bring its long-fermented sourdough to Kroger shoppers across Michigan. The mid-campaign report covered 32 sampling events across 19 Kroger stores in 16 Michigan cities.", "Preparation made the difference. Ambassadors served freshly toasted sourdough with a Michigan olive oil drizzle. Warm bread is a better sample than a cold cube, and it gives the shopper a reason to stop.", "Story made it stick. Ambassadors were trained on the brand's heritage, ingredients and fermentation story, so each tasting connected to why the bread is different, and to the fact that it's made in Traverse City.", "Consistency mattered across stores. Branded sampling stations gave the program the same look in every location.", "Feedback was the payoff. Field recaps captured shopper reactions, photos and performance, including shoppers who chose Stone House Bread over their usual brand after trying it.", "For food brands, the lesson is simple: prepare the product the way it tastes best, train staff on the story, and capture what shoppers say."],
  links: [["Stone House Bread case study", "/portfolio/stone-house-bread"], ["Product sampling", "/services/product-sampling"], ["Detroit event staffing", "/cities/detroit"]],
  faq: [["How many sampling events did Stone House Bread run at Kroger?", "The mid-campaign report documented 32 sampling events across 19 Kroger stores in 16 Michigan cities."], ["What makes a food sample convert?", "Preparing it the way it tastes best, like warm toasted bread, and training staff on what makes the product different."], ["What should a food sampling recap include?", "Shopper feedback, photos, counts and any purchases or brand switches observed during the shift."]]
}, {
  slug: "thc-beverage-retail-marketing",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/torch-thc-kings-liquor-activation.png",
  title: "THC Beverage Retail Marketing: Running In-Store Activations That Stay Compliant",
  dek: "THC beverages are one of the fastest-moving categories in retail, and one of the most regulated. Here's how to run in-store activations without guessing at the rules.",
  category: "Industry",
  ...A_KYLE,
  date: "2026-09-21",
  readTime: 7,
  accent: "#F04E23",
  tags: ["THC beverages", "cannabis marketing", "retail activation", "compliance"],
  keywords: "THC beverage marketing, hemp beverage retail marketing, THC drink sampling rules, cannabis beverage activation, THC seltzer marketing",
  body: ["THC beverages are moving into liquor stores, convenience stores and specialty retail across the country. That growth comes with rules that change by state, by retailer and sometimes by city. Anyone running activations in this category has to treat compliance as part of the program, not an afterthought.", "Start with the state. Whether a THC beverage can be sold, sampled or only displayed depends on state law, and it changes. Confirm the current rules for every state in the program with the brand's legal team before anything is scheduled.", "Then the retailer. Many stores have their own policies on sampling, age checks and what can be on a table. Get those in writing when you schedule.", "Age verification is non-negotiable. Staff check ID before any engagement, and the process should be consistent at every store.", "Lean on what's always allowed. Branded displays, point-of-sale materials, premiums and conversation about the product work in places where sampling doesn't.", "At scale this becomes operations. Ignite runs Torch's national retail program, more than 2,500 retail activations a year, with POS and premium creation, kitting, scheduling with retail partners and trained brand ambassadors, all through one team.", "This post is general guidance, not legal advice. The rules for THC beverages change often, so build a legal check into every new market."],
  links: [["Torch THC case study", "/portfolio/torch-thc"], ["Cannabis industry marketing", "/industries/cannabis"], ["Retail merchandising", "/services/retail-merchandising"]],
  faq: [["Can you sample THC beverages in stores?", "It depends on state law and the retailer's policy. Confirm both with legal counsel before scheduling any sampling."], ["What THC beverage marketing works when sampling isn't allowed?", "Branded displays, point-of-sale materials, premiums and trained staff talking with shoppers."], ["How many retail activations does Ignite run for Torch?", "More than 2,500 retail activations a year across the U.S."]]
}, {
  slug: "craft-beer-tastings-total-wine",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/drekker-total-wine-tasting.jpg",
  title: "Craft Beer Tastings at Total Wine: Scheduling, Rules and What Converts",
  dek: "Drekker Brewing's rollout runs through Total Wine & More tasting counters. Here's how scheduled in-store tastings work for a craft brand.",
  category: "Industry",
  ...A_KYLE,
  date: "2026-09-20",
  readTime: 5,
  accent: "#E8742C",
  tags: ["craft beer", "Total Wine", "in-store tastings", "Drekker"],
  keywords: "craft beer tasting Total Wine, in-store beer tasting, Total Wine sampling, craft brewery retail marketing, beer demo",
  body: ["Drekker Brewing's retail rollout needed shoppers at Total Wine & More to discover and taste its beers. Ignite supports it with demo scheduling and in-store tastings at participating locations.", "Scheduling comes first. Tastings are coordinated with each store, which has its own calendar and tasting hours. Keeping a steady presence across stores takes someone managing those dates as the rollout grows.", "Alcohol service rules come next. Tastings follow state and local rules on pour sizes, age checks and who can serve, so staff need the right certifications and the brand needs to confirm the rules in each state.", "A craft brand sells on its personality. Drekker's packaging and story are distinctive, and the tasting counter is where shoppers get to ask questions and try the lineup before buying.", "Placement near the product helps. A tasting that ends with the shopper standing next to the shelf is easier to turn into a sale.", "For craft brands, the formula is consistent scheduling, compliant pours, and staff who can tell the brand's story at the counter."],
  links: [["Drekker Brewing case study", "/portfolio/drekker"], ["On-premise sampling", "/services/on-premise-sampling"], ["Alcohol and spirits marketing", "/industries/alcohol-spirits"]],
  faq: [["How do in-store beer tastings work at Total Wine?", "Tastings are scheduled with each participating store and run at its tasting counter, following state and local alcohol service rules."], ["Do beer tasting staff need certification?", "Usually, yes. Requirements vary by state, so confirm the rules in each market."], ["What makes a craft beer tasting convert?", "Staff who can tell the brand's story, a chance to try the lineup, and a tasting located close to the product on the shelf."]]
}, {
  slug: "new-store-opening-marketing-app-signups",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/luckin-nyc-store-opening-table.jpg",
  title: "New Store Opening Marketing: Turning Foot Traffic into App Signups",
  dek: "Luckin Coffee's New York openings pair in-person activations with app signup. Here's the playbook for opening events that build a customer list, not just a crowd.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-19",
  readTime: 6,
  accent: "#3D52D5",
  tags: ["store opening", "app signups", "QSR", "Luckin Coffee"],
  keywords: "new store opening marketing, grand opening ideas, app download promotion, store launch activation, coffee shop opening marketing",
  body: ["Luckin Coffee's new store openings in New York City needed local engagement that introduced people to the brand and connected them with its app. Ignite supports the openings with brand ambassadors and on-site promotional activations.", "The goal of an opening isn't just a line on day one. It's a list of customers who come back. That means the activation has to move people from the sidewalk to the app.", "A branded promotional station near the door gives people a reason to stop. An app offer gives them a reason to sign up. Ambassadors who walk them through signup on the spot close the gap.", "Branded giveaways tied to new app users make the offer concrete. People sign up when there's something in their hand.", "Campus promotions extend the reach. Students near new stores are a natural audience, and campus activations meet them where they are.", "The playbook is physical experience in, digital customer out. Measure signups, not just foot traffic."],
  links: [["Luckin Coffee case study", "/portfolio/luckin"], ["Collegiate marketing", "/services/collegiate-marketing"], ["New York event staffing", "/cities/new-york"]],
  faq: [["How do you drive app signups at a store opening?", "Pair a branded station with an app offer and ambassadors who help people sign up on the spot, often with a giveaway for new users."], ["Should store openings include campus activations?", "If there are campuses nearby, yes. Students are a natural early audience for new stores."], ["What should you measure at a store opening?", "App signups and repeat visits, not just foot traffic on opening day."]]
}, {
  slug: "event-production-vs-event-staffing",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/breakaway-hiyo-exit-sampling.jpg",
  title: "Event Production Company vs. Event Staffing Agency: Which Do You Need?",
  dek: "One builds the event. One staffs it. Many brands need both, but buying the wrong one first costs time and money. Here's how to tell.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-18",
  readTime: 5,
  accent: "#D7453E",
  tags: ["event production", "event staffing", "agency selection"],
  keywords: "event production company vs event staffing agency, event production or staffing, hire event staff, event production agency",
  body: ["An event production company owns the event from brief to strike: the run-of-show, vendors, AV, permits, builds and on-site show calling. An event staffing agency provides the people: brand ambassadors, hosts, registration and team leads.", "You need production when the event doesn't exist yet. If you have a date, a goal and no plan, a producer turns that into a venue, a schedule, a vendor list and a budget.", "You need staffing when the event is already planned. If an agency or internal team is producing the event and you need trained people on the floor, a staffing partner fills those roles.", "Many brands need both, and splitting them creates hand-offs. The producer briefs the staffing agency, the staffing agency briefs the crew, and details get lost in between.", "That's why Ignite does both. We produced and staffed OpenAI Dev Day with 87 brand ambassadors, and we support the 12-city Claude Code workshop tour with execution and local teams.", "Ask any partner which part they actually own, and who's accountable on site when something goes wrong."],
  links: [["Event production", "/services/event-production"], ["Event staffing", "/services/event-staffing"], ["OpenAI Dev Day case study", "/portfolio/openai-devday"]],
  faq: [["What's the difference between event production and event staffing?", "Production owns the whole event: plan, vendors, AV, permits and show calling. Staffing provides the people who work it."], ["Do I need both an event producer and a staffing agency?", "Often, yes. Using one partner for both removes hand-offs between teams."], ["Does Ignite do event production and staffing?", "Yes. Ignite produces events and staffs them from a bench of 257,000+ vetted brand ambassadors."]]
}, {
  slug: "mobile-tour-vs-pop-up-vs-street-team",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/street-team-liquid-death-miami.jpg",
  title: "Mobile Tour vs. Pop-Up vs. Street Team: Picking the Right Format",
  dek: "Three field formats, three different jobs. Here's how to pick the one that fits your goal, your markets and your timeline.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-17",
  readTime: 5,
  accent: "#D7453E",
  tags: ["mobile tours", "pop-ups", "street teams", "field marketing"],
  keywords: "mobile tour vs pop up, street team vs pop up, field marketing formats, guerrilla sampling, brand activation formats",
  body: ["Mobile tours, pop-ups and street teams all put a brand in front of people. They do it in different ways, and picking the wrong one is the most common reason an activation underperforms.", "A mobile tour covers ground. It's the right choice when you need many markets in a few weeks and want a branded vehicle that people stop for. It costs more per stop than a street team but delivers a bigger moment.", "A pop-up builds a destination. It's the right choice when you want people to spend time with the brand in one place, try the product properly, or buy on the spot.", "A street team goes to the people. It's the right choice for volume sampling in dense areas, around events or at high-traffic moments, with crews that move to where the crowd is. Liquid Death street teams in Miami are a good example.", "Many programs combine them. A tour can carry a pop-up footprint at each stop, with a street team working the blocks around it.", "Start with the goal: reach across markets, depth in one place, or volume on the street. The format follows."],
  links: [["Mobile marketing tours", "/services/mobile-tours"], ["Pop-up retail", "/services/pop-up-retail"], ["Street teams", "/services/street-teams"]],
  faq: [["When should I choose a mobile tour?", "When you need to reach many markets in a short time with a branded moment people stop for."], ["When is a street team better than a pop-up?", "When the goal is volume sampling in dense areas or around events, with crews that move to the crowd."], ["Can you combine a tour, pop-up and street team?", "Yes. Many programs use a tour with a pop-up footprint at each stop and a street team around it."]]
}, {
  slug: "ces-booth-staffing-checklist",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  title: "CES Booth Staffing Checklist",
  dek: "CES is the loudest four days in tech. Here's the checklist we use to staff a CES booth so every conversation counts.",
  category: "Logistics",
  ...A_KYLE,
  date: "2026-09-16",
  readTime: 6,
  accent: "#9FC24E",
  tags: ["CES", "trade show", "booth staffing", "Las Vegas"],
  keywords: "CES booth staffing, CES booth staff checklist, CES trade show staff, Las Vegas booth hosts, CES demo staff",
  body: ["CES spreads across the Las Vegas Convention Center and the Venetian Expo, and it draws buyers, press, investors and retailers into the same aisles. Booth staff have to read a badge in a glance and switch between a short pitch and a long technical demo.", "Ten weeks out: confirm booth size and open sides, set a lead goal and define a qualified lead, and book your crew. Technical demo leads are the first roles to go.", "Eight weeks out: submit staff names for exhibitor badges so no one is stuck at pickup on opening morning, and plan coverage by hall.", "Four weeks out: send product training materials, write the 30-second pitch and the qualifying questions with your sales team, and schedule hands-on demo time.", "Show week: GPS check-in each morning, a team lead walking the booth every hour, extra hosts at opening and keynote breaks, and leads logged live, not on paper.", "After the show: export leads to your CRM within 24 hours and send the first follow-up within 48. Most of the value of a trade show is lost in slow follow-up."],
  links: [["Trade show staffing", "/services/trade-shows"], ["Las Vegas event staffing", "/cities/las-vegas"], ["Event staffing", "/services/event-staffing"]],
  faq: [["How early should I book CES booth staff?", "At least ten weeks out. Technical demo leads are booked first because the same people work every major Las Vegas tech show."], ["What roles does a CES booth need?", "Booth hosts, product specialists, technical demo leads, lead capture and a team lead on site."], ["How fast should I follow up on CES leads?", "Export leads within 24 hours and send the first follow-up within 48 hours."]]
}, {
  slug: "sponsorship-portfolio-review",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/breakaway-jimmy-johns-silent-disco.jpg",
  title: "How to Evaluate Your Sponsorship Portfolio Before Renewal",
  dek: "Most sponsorships renew on habit. Here's a five-question review that tells you which properties to keep, renegotiate or cut.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-30",
  readTime: 6,
  accent: "#D7453E",
  tags: ["sponsorship", "sponsorship activation", "renewals"],
  keywords: "sponsorship portfolio management, evaluate sponsorships, sponsorship renewal, sponsorship activation agency, sports sponsorship ROI",
  body: ["Brands sign sponsorships with big plans and renew them with a shrug. The fee shows up in the budget every year, but the proof of what it delivered rarely does. A short review before renewal changes that.", "Question one: which rights did we actually use? Contracts list signage, hospitality, sampling rights, digital assets and on-site space. Many brands use half of them. Unused rights are either a negotiation point or wasted money.", "Question two: what did each activation deliver? Attendance, samples handed out, leads captured and content created, logged per event, not estimated at the end of the season.", "Question three: does the audience match the brand? A property can be popular and still be the wrong crowd. Look at who showed up at your activations, not just the property's total attendance.", "Question four: what did it cost per result? Divide the fee plus activation spend by what the property delivered. Comparing properties on the same measure is where portfolio decisions get easy.", "Question five: what would we change? Keep, renegotiate for different rights, or cut and move the money somewhere it works harder.", "This review only works if the data exists. That's why every activation Ignite runs is logged in Spark, so the renewal conversation starts with a season of records instead of a pile of photos."],
  links: [["Sponsorship management", "/services/sponsorship-partnerships"], ["Breakaway case study", "/portfolio/breakaway"], ["Sports marketing activations", "/services/sports-marketing-activations"]],
  faq: [["How do you evaluate a sponsorship?", "Check which rights were used, what each activation delivered, whether the audience matched the brand, the cost per result, and what you'd change."], ["What is a sponsorship management agency?", "An agency that tracks, activates and measures the sponsorships a brand has already signed, and builds the case for renewal."], ["Why do sponsorships go unused?", "Brands often lack the team to activate every right in the contract, so signage runs but sampling, hospitality and on-site space go unused."]]
}, {
  slug: "aor-vs-project-agency",
  heroImage: "https://kyle915.github.io/ignite-webflow-assets/assets/openai-devday-keynote.jpg",
  title: "Agency of Record vs. Project Agency: Which Model Fits Your Brand?",
  dek: "Hiring one agency per brief feels flexible. Past a certain point it costs more than it saves. Here's how to tell when an agency of record makes sense.",
  category: "Strategy",
  ...A_KYLE,
  date: "2026-09-30",
  readTime: 5,
  accent: "#D6F35F",
  tags: ["agency of record", "AOR", "experiential agency"],
  keywords: "experiential agency of record, field marketing AOR, AOR vs project agency, event marketing agency of record, choose an experiential agency",
  body: ["Brands buy field and experiential marketing in two ways. A project agency is hired one brief at a time. An agency of record owns the whole calendar for the year.", "Project agencies fit when the work is occasional: one launch, one festival, one trade show. You get flexibility and you pay for it with onboarding time on every brief.", "An AOR fits once field marketing runs all year across retail, events and tours. The same team carries what it learned from one program into the next, and the reporting stays in one standard.", "The hidden cost of the project model is rework. Every new vendor needs the brand briefing, the product training and the reporting format explained again, and the results can't be compared because every vendor reports differently.", "The risk of the AOR model is complacency. That's why a good AOR runs quarterly business reviews: what ran, what it delivered, and what changes next quarter.", "If you're running more than a handful of programs a year, start with an audit of what you run today and who runs it. The answer usually makes the choice obvious."],
  links: [["Agency of record", "/agency-of-record"], ["Event production", "/services/event-production"], ["Our work", "/work"]],
  faq: [["What is an experiential agency of record?", "One partner trusted with a brand's field and experiential marketing all year, under one contract and one team."], ["When should a brand choose an AOR over project agencies?", "Once field marketing runs all year across retail, events and tours, and rework between vendors starts costing more than flexibility saves."], ["How do you keep an AOR accountable?", "Quarterly business reviews covering what ran, what it delivered and what changes next."]]
}];
BLOG_POSTS.unshift(...NEW_POSTS);
/* Fixes to existing posts: dated titles + cross-links between overlapping cost posts */
BLOG_POSTS.forEach(p => {
  if (p.slug === "guerrilla-marketing-2025") {
    p.title = "Guerrilla Marketing in 2026: What Still Works";
    p.keywords = (p.keywords || "").replace(/2025/g, "2026");
  }
  if (p.slug === "brand-ambassador-hourly-rate" && !p.links) p.links = [["In-store demo cost: what drives the hourly number", "/post/in-store-demo-cost-per-hour"], ["Event staffing", "/services/event-staffing"], ["Retail demo programs", "/services/retail-demo-programs"]];
});
const BLOG_AUTHORS = {
  "Kyle Christiansen": {
    bio: "Founder of Ignite Productions. Kyle spent 20+ years in field marketing at Red Bull, 160over90 and Amazon before building Ignite, a veteran-owned agency that has executed 5,000+ events across all 50 states.",
    url: "/about"
  },
  "Caley Vickerman": {
    bio: "Leadership at Ignite Productions, focused on staffing, operations and the field teams behind every program.",
    url: "/about"
  },
  "Ignite Team": {
    bio: "The Ignite Productions operations team: producers, staffing leads and field managers running programs in all 50 states.",
    url: "/about"
  }
};
/* HELD 2026-10-01: the older BlogData posts are not in the Webflow CMS yet
   (they quote rates/budgets and need owner sign-off), so they 404. Only list
   posts that are published, so no card links to a missing page. Delete this
   block once the held posts are published. */
(function () {
  const LIVE = new Set(NEW_POSTS.map(p => p.slug));
  for (let i = BLOG_POSTS.length - 1; i >= 0; i--) if (!LIVE.has(BLOG_POSTS[i].slug)) BLOG_POSTS.splice(i, 1);
})();
Object.assign(window, {
  BLOG_POSTS,
  BLOG_AUTHORS
});
})();
