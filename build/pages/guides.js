const { esc, title, desc, faqSchema } = require('../layout.js');
const B = require('../blocks.js');
const { guides } = require('../data.js');

const HOME = { href: '/', label: 'Home' };
const HUB = { href: '/guides/', label: 'Guides' };

const bodies = {
'why-am-i-not-showing-up-on-google-maps': `
<p>You searched your own service, you scrolled the map, and your business was not there. Before assuming Google is broken or that you need to buy ads, it helps to know that Google publishes the answer. Three factors decide local ranking: <b>relevance</b>, <b>distance</b>, and <b>prominence</b>.</p>

<h2>Distance is the one you cannot change</h2>
<p>Distance means how far your business sits from the searcher, or from the place they named. Your shop is where it is. If someone searches from the far side of town, a closer competitor has an advantage you cannot argue with. This is why chasing a citywide ranking is usually the wrong goal, and why a business two miles from downtown should not expect to outrank the one on the square.</p>
<p>Everything else is work.</p>

<h2>Relevance is how well you match the words</h2>
<p>Relevance is how closely your profile and your website match what was typed. This is the cheapest thing to fix and the most commonly ignored.</p>
<p>A page titled "Home" tells Google nothing. A page titled "Therapeutic Massage in San Marcos, TX" matches a real query. In an audit I ran on a San Marcos massage studio, her page title was "Home | Awesome Massage by Liz" while a competitor ranking above her used "Therapeutic Massage in San Marcos, TX." That competitor was not better at massage. They were better at saying what they do.</p>
<p>The same applies to structure. One combined pricing table competes for one thing. A page each for deep tissue, prenatal, and myofascial gives Google three things to rank. <a href="/services/local-seo/">This is the core of the local SEO work.</a></p>

<h2>Prominence is how well-known Google thinks you are</h2>
<p>Prominence is reputation, and reviews are the biggest lever you control. Google states it directly: more reviews and positive ratings can improve your local ranking.</p>
<p>But review count alone does not decide the order. In that same San Marcos market, the business in first place had 117 reviews. The business in second had 336, nearly three times as many, and still ranked below it. Something other than review count separated them, and that something was relevance: the first business had built its site around the exact terms people search.</p>

<h2>What to actually do this month</h2>
<ul class="ticks">
<li>Check your primary category on your Google Business Profile. It does more for ranking than any other single field, and most owners set it once and never revisit it.</li>
<li>Rewrite your page titles so each names a service and your city.</li>
<li>Ask every happy customer for a review, at the moment they are happiest, every time. A habit beats a campaign.</li>
<li>Reply to every review, including the bad ones. The reply is for the next person reading.</li>
<li>Make sure your name, address, and phone are identical on Google, Yelp, Facebook, and Apple Maps.</li>
</ul>

<h2>How long it takes</h2>
<p>Relevance fixes get indexed in days to a few weeks. Prominence moves over months, because it depends on real customers leaving real reviews. Anyone who promises you a top-three spot by a fixed date is guessing, and charging you for the guess.</p>
<p>If you want to know which of the three factors is actually holding you back, <a href="/visibility-audit/">the free visibility audit</a> answers exactly that for your business and your town.</p>
`,

'what-should-a-small-business-website-cost': `
<p>The honest answer is that page count is the wrong unit. What drives the price is how much of your business has to be figured out and written from scratch before anyone opens a code editor.</p>

<h2>What you are actually paying for</h2>
<p>A website for a local business is mostly three jobs, and only one of them is code.</p>
<ul class="ticks">
<li><b>Research and writing.</b> Reading your reviews and your competitors' reviews to work out which questions decide a booking, then answering them in your customer's words. This is the part that makes the site work, and the part templates skip entirely.</li>
<li><b>Design.</b> Making a small business look considered rather than cheap, without stock photography doing the lying.</li>
<li><b>The build.</b> Turning that into fast, accessible, structured pages. For a hand-coded static site this is the quickest of the three.</li>
</ul>

<h2>Why the monthly-fee model costs more than it looks</h2>
<p>A builder platform at $25 a month sounds cheaper than a one-time build. Over four years that is $1,200, and at the end of it you own nothing. Stop paying and the site disappears. Want to move it somewhere cheaper and you are rebuilding, because the layout only exists inside their editor.</p>
<p>A hand-coded static site inverts that. You pay once, you own the files, and hosting on a static host runs free. Every project on this site runs on GitHub Pages at no hosting cost. <a href="/services/website-design/">More on how that works.</a></p>

<h2>How to tell a fair quote from a bad one</h2>
<p>Four questions worth asking anyone quoting you:</p>
<ul class="ticks">
<li><b>Do I own the files?</b> If leaving means rebuilding, you are renting, not buying.</li>
<li><b>Is the price fixed and in writing?</b> An hourly meter transfers all the risk of a slow month onto you.</li>
<li><b>Who writes the copy?</b> If the answer is you, the quote is for a shell, and the shell is the easy part.</li>
<li><b>What happens on launch day?</b> A site that ships without a sitemap, structured data, or Search Console connected is a brochure nobody will find.</li>
</ul>

<h2>The cheapest thing you can do first</h2>
<p>Before spending anything on a site, find out whether a site is your actual problem. Plenty of businesses rank poorly because their Google Business Profile has the wrong primary category, which costs nothing to fix. <a href="/visibility-audit/">The free audit</a> tells you which problem you have, and it has talked people out of hiring me.</p>
`,

'do-i-need-a-website-with-a-google-business-profile': `
<p>You can get real customers from a Google Business Profile alone. Plenty of businesses do. The question is what you are leaving on the table, and the answer usually surprises people.</p>

<h2>A profile is rented space</h2>
<p>You do not own your Google Business Profile. Google does. It sets the layout, decides which photos surface, places competitors directly underneath you in the "people also viewed" strip, and changes the rules whenever it wants. A suspension, a bad merge with a duplicate listing, or a category change can cost you your visibility overnight, and your appeal goes into a queue.</p>
<p>Your website is the one place in local search that you control completely.</p>

<h2>It cannot answer the question that decides the booking</h2>
<p>A profile shows hours, a phone number, a rating, and a handful of photos. It does not explain what a full groom costs for a double-coated dog, the difference between balayage and highlights, or whether you take walk-ins on a Saturday.</p>
<p>Those are the questions that decide whether someone calls you or the next listing. Kelly's K-9 Cuts had fifteen years of regulars and 53 reviews with nowhere online to answer any of it. <a href="/work/kellys-k9-cuts/">That was the whole brief for the build.</a></p>

<h2>Google uses your site to rank your profile</h2>
<p>This is the part most owners miss. Relevance, one of the three factors behind local ranking, is judged partly on your website. Google reads your pages to work out what you do and how well you match a search.</p>
<p>No website means Google has less to go on, so it falls back harder on reviews and proximity. A site built around your services gives it something to read, and gives your profile a reason to rank for more than your business name.</p>

<h2>What a site does that a profile cannot</h2>
<ul class="ticks">
<li>Rank for service terms, not just your business name. A profile competes in the map pack; a site competes in the results underneath it, where far more searches land.</li>
<li>Carry structured data that states your hours, address, and rating as machine-readable facts.</li>
<li>Survive a platform decision you had no part in.</li>
<li>Give a customer somewhere to look at your work at eleven at night, which is when people book.</li>
</ul>

<h2>The order I would do it in</h2>
<p>If your profile is a mess, fix the profile first. Categories, services, and photos are free and they move the needle faster than a new site. <a href="/services/google-business-profile/">That work is its own service for exactly this reason.</a></p>
<p>Once the profile is in order, a site is what stops your ranking depending entirely on a platform you do not own. <a href="/visibility-audit/">The free audit</a> tells you which of the two you need first.</p>
`,
};

const relatedFor = (slug) => guides.filter((g) => g.slug !== slug)
  .map((g) => ({ kind: 'Guide', href: `/guides/${g.slug}/`, title: g.title, desc: g.excerpt }));

const hub = {
  path: '/guides/',
  title: title('Local SEO Guides for Small Business'),
  description: desc('Plain answers to what local business owners ask every week about Google Maps ranking, website cost, and whether a site is worth it.'),
  crumbs: [HOME, HUB],
  schema: [{
    '@type': 'Blog',
    name: 'Aedifico Web Studio Guides',
    blogPost: guides.map((g) => ({
      '@type': 'BlogPosting', headline: g.title,
      url: `https://aedifico.studio/guides/${g.slug}/`,
      datePublished: g.date,
    })),
  }],
  body: `
${B.pageHead({
    eyebrow: 'Guides', kicker: 'Plain answers',
    h1: 'Questions I get<br>every week.',
    lede: 'Written out properly, with the real numbers where I have them, so you can decide whether you need me at all.',
  })}
<section class="section">
  <div class="shell">
    <ul class="guide-list guide-list--full">
      ${guides.map((g) => `
      <li><a href="/guides/${g.slug}/">
        <b>${esc(g.title)}</b>
        <span>${esc(g.description)}</span>
        <span class="mono rel-kind">${esc(g.read)} read</span>
      </a></li>`).join('')}
    </ul>
  </div>
</section>
${B.cta({ title: 'Rather skip to your own numbers?', body: 'The visibility audit is free and specific to your business.', button: 'Get the free audit', href: '/visibility-audit/' })}
`,
};

const detail = (g) => ({
  path: `/guides/${g.slug}/`,
  title: title(g.title),
  description: desc(g.description),
  crumbs: [HOME, HUB, { href: `/guides/${g.slug}/`, label: g.title }],
  ogType: 'article',
  schema: [{
    '@type': 'BlogPosting',
    headline: g.title,
    description: g.description,
    datePublished: g.date,
    dateModified: g.date,
    author: { '@type': 'Person', name: require('../site.js').site.founder },
    publisher: { '@id': 'https://aedifico.studio/#business' },
    mainEntityOfPage: `https://aedifico.studio/guides/${g.slug}/`,
  }],
  body: `
${B.pageHead({
    eyebrow: 'Guide', kicker: `${g.read} read`,
    h1: esc(g.title),
    lede: esc(g.excerpt),
  })}
${B.prose(bodies[g.slug])}
${B.relatedLinks(relatedFor(g.slug), 'Other guides')}
${B.cta({ title: 'Want this answered for your business?', body: 'The audit uses your real numbers, not a general example.', button: 'Get the free audit', href: '/visibility-audit/' })}
`,
});

module.exports = [hub, ...guides.map(detail)];
