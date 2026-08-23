const { esc, title, desc, faqSchema } = require('../layout.js');
const B = require('../blocks.js');
const { site } = require('../site.js');

const HOME = { href: '/', label: 'Home' };

/* ---------------- Visibility audit (the lead magnet) ---------------- */
const auditFaqs = [
  { q: 'Is the visibility audit really free?', a: 'Yes. You get the report whether or not you hire me, and there is no call you have to sit through to receive it. It takes me a couple of hours and it is the most honest sales pitch I know how to make.' },
  { q: 'What do you need from me?', a: 'Your business name and the city you operate in. That is enough to find your Google Business Profile, your competitors, and your search demand. If you already know something is broken, tell me and I will look at that too.' },
  { q: 'How long does it take?', a: 'Two to three days. Every figure gets pulled fresh and dated, because a ranking screenshot from last month is not evidence of anything.' },
  { q: 'What if the audit says I am doing fine?', a: 'Then it says that, and you have saved yourself money. It has happened. A business already ranking first for its main terms does not need me to rebuild its site.' },
];

const audit = {
  path: '/visibility-audit/',
  title: title('Free Local Visibility Audit'),
  description: desc('A free, sourced report on where your business ranks in local search, who outranks you, and what closing that gap could be worth.'),
  crumbs: [HOME, { href: '/visibility-audit/', label: 'Visibility Audit' }],
  schema: [
    {
      '@type': 'Service',
      name: 'Local Visibility Snapshot',
      description: 'A free, sourced local search audit for small businesses.',
      provider: { '@id': 'https://aedifico.studio/#business' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    faqSchema(auditFaqs),
  ],
  body: `
${B.pageHead({
    eyebrow: 'Free', kicker: 'Local Visibility Snapshot',
    h1: 'Before I pitch you,<br>I do the <em>homework</em>.',
    lede: 'Most web people open with a price. I open with a short, sourced report on where your business ranks, who outranks you, what your town types into Google, and what closing that gap could be worth. Each figure carries a citation and a date.',
  })}

<section class="section">
  <div class="shell">
    <div class="doc">
      <div class="doc-head">
        <span class="mono">Local Visibility Snapshot &middot; real sample, business anonymized</span>
        <span class="mono doc-date">San Marcos, TX &middot; Aug 2026</span>
      </div>

      <div class="doc-lead">
        <h2 class="doc-h">She rates as well as San Marcos's busiest spas.<br>Her listing shows a fraction of the reviews.</h2>
        <div class="doc-stats">
          <div><b>4.9<span>&#9733;</span></b><small class="mono">Google rating</small></div>
          <div><b>46</b><small class="mono">Google reviews</small></div>
          <div><b>7<span>th</span></b><small class="mono">of 7 by review count</small></div>
          <div><b>9<span>th</span></b><small class="mono">in live search results</small></div>
        </div>
      </div>

      <div class="doc-cols">
        <div class="doc-block">
          <h3 class="mono">Who shows up first</h3>
          <table class="tbl">
            <thead><tr><th>Business</th><th>Rating</th><th>Reviews</th></tr></thead>
            <tbody>
              <tr><td>Blooming Day Spa</td><td>5.0</td><td>336</td></tr>
              <tr><td>Serene Serenity Massage Spa</td><td>4.8</td><td>117</td></tr>
              <tr><td>Simply Kneaded Massage</td><td>4.9</td><td>110</td></tr>
              <tr><td>Grounded Tree Massage Therapy</td><td>5.0</td><td>104</td></tr>
              <tr><td>Mindful Hands Massage</td><td>5.0</td><td>71</td></tr>
              <tr><td>AC8 Massage Spa</td><td>3.6</td><td>64</td></tr>
              <tr class="me"><td>This studio</td><td>4.9</td><td>46</td></tr>
            </tbody>
          </table>
          <p class="src mono">Source: Google Business Profiles, pulled Aug 22 2026.</p>
        </div>
        <div class="doc-block">
          <h3 class="mono">What the town is searching</h3>
          <table class="tbl">
            <thead><tr><th>Term</th><th>Monthly</th><th>Comp.</th></tr></thead>
            <tbody>
              <tr><td>therapeutic massage</td><td>10&ndash;100</td><td><span class="lvl low">Low</span></td></tr>
              <tr><td>massage therapist</td><td>10&ndash;100</td><td><span class="lvl low">Low</span></td></tr>
              <tr><td>massage therapy near me</td><td>10&ndash;100</td><td><span class="lvl low">Low</span></td></tr>
              <tr><td>mobile massage near me</td><td>10&ndash;100</td><td><span class="lvl low">Low</span></td></tr>
              <tr><td>deep tissue massage</td><td>10&ndash;100</td><td><span class="lvl mid">Medium</span></td></tr>
              <tr><td>massage places near me</td><td>10&ndash;100</td><td><span class="lvl high">High</span></td></tr>
              <tr><td>best massage places near me</td><td>10&ndash;100</td><td><span class="lvl new">Trending</span></td></tr>
            </tbody>
          </table>
          <p class="src mono">Source: Google Ads Keyword Planner, geo San Marcos TX, Aug 2025&ndash;Jul 2026.</p>
        </div>
      </div>

      <div class="doc-math">
        <h3 class="mono">A loose, honest estimate, shown step by step</h3>
        <div class="math-row"><span>Combined monthly searches, 8 terms</span><b>80&ndash;800</b><small class="mono">Keyword Planner</small></div>
        <div class="math-row"><span>Share clicking a local map-pack result</span><b>~42%</b><small class="mono">Published local-pack CTR data</small></div>
        <div class="math-row"><span>Share of those going to a top-3 spot</span><b>~48%</b><small class="mono">Published ranking-position data</small></div>
        <div class="math-row total"><span>Monthly clicks to a top-3 listing</span><b>15&ndash;160</b><small class="mono">Calculated from the rows above</small></div>
        <p class="disclaimer">
          Clicks turn into bookings at a rate nobody can promise you. Some visitors compare
          prices and leave, and some never call. At $90&ndash;$150 a session, a handful of
          conversions still covers the work several times over. The assumptions above sit
          on the table so you can argue with them.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('What you get', 'Four parts')}
    <div class="detail-grid">
      <article class="detail"><h2>Where you actually rank</h2><p>Your position in live search results for the terms that matter, read on the day of the audit and screenshotted. Rankings shift by device and location, and the report says so.</p></article>
      <article class="detail"><h2>Who is beating you</h2><p>The businesses above you, with their ratings and review counts next to yours. This is usually the slide that lands, because the gap is rarely about quality.</p></article>
      <article class="detail"><h2>What your town types</h2><p>Real search volumes and competition levels for your service in your city, pulled from the Keyword Planner with the geography set to your market.</p></article>
      <article class="detail"><h2>What the gap is worth</h2><p>Published click-through rates applied to your search volume, shown step by step so you can check the arithmetic or throw it out.</p></article>
    </div>
  </div>
</section>

${B.faqBlock(auditFaqs, 'About the audit')}

<section class="section contact-sec" id="request">
  <div class="shell">
    ${B.ruleLabel('Start here', 'Two to three days')}
    <div class="contact-wrap">
      <div class="contact-copy">
        <h2 class="h2">Request your <em>snapshot</em>.</h2>
        <p class="sec-sub">Send your business name and city. That is all I need to find your profile, your competitors, and your search demand.</p>
        <ul class="contact-list mono">
          <li><span>Turnaround</span><b>2&ndash;3 days</b></li>
          <li><span>Cost</span><b>Free</b></li>
          <li><span>Serving</span><b>Central TX &amp; the Fox Valley</b></li>
        </ul>
      </div>
      ${B.contactForm()}
    </div>
  </div>
</section>
`,
};

/* ---------------- About ---------------- */
const about = {
  path: '/about/',
  title: title('About Esteban Montiel'),
  description: desc('Who builds these sites, why every engagement starts with a free audit, and what I will tell you plainly before you spend anything.'),
  crumbs: [HOME, { href: '/about/', label: 'About' }],
  schema: [{
    '@type': 'AboutPage',
    mainEntity: { '@type': 'Person', name: site.founder, jobTitle: 'Web designer and local SEO consultant', email: site.email },
  }],
  body: `
${B.pageHead({
    eyebrow: 'About', kicker: 'Who you are hiring',
    h1: 'One person, doing<br>the whole job.',
    lede: 'I am Esteban Montiel. I design and hand-code websites for local businesses, and I fix the local-search problems that keep good shops off the first page.',
  })}

${B.prose(`
<p>Most of the businesses I work with have the same shape. They are good at the thing they do, they have real customers who like them, and they are losing work to a competitor who is worse but easier to find. That gap is not a mystery. It is a set of specific, fixable problems, and I can usually name them within an afternoon of research.</p>

<h2>Why I start with a free audit</h2>
<p>Because the alternative is asking you to trust a stranger about something you cannot verify. A <a href="/visibility-audit/">Local Visibility Snapshot</a> puts the actual numbers in front of you: where you rank, who is above you, what your town searches for. If those numbers say you do not need me, the report says that too. You keep it either way.</p>

<h2>What I will tell you plainly</h2>
<p>I will not promise a first-place ranking, because nobody can. I will not sell you a monthly retainer that produces a dashboard instead of a result. And if the honest answer is that your Google Business Profile needs a month of attention before a new website is worth building, I will say so, even though the profile work is the cheaper job.</p>

<h2>How I build</h2>
<p>By hand, in HTML and CSS. No WordPress, no page builder, no theme licence, no platform fee that holds your site hostage. The files are yours, they load fast on a phone, and every project ships with a README written in plain English naming each place a price or phone number lives. <a href="/services/website-design/">More on how the builds work.</a></p>

<h2>Where I work</h2>
<p>Central Texas, mostly: <a href="/areas/kyle-tx/">Kyle</a>, <a href="/areas/buda-tx/">Buda</a>, and <a href="/areas/san-marcos-tx/">San Marcos</a>. Also <a href="/areas/appleton-wi/">Appleton and Kimberly, Wisconsin</a>, in the Fox Valley. The work happens remotely either way, but knowing a market matters when the whole job is ranking inside it.</p>

<h2>The other half of what I do</h2>
<p>I also run <a href="https://aedifico.io/" target="_blank" rel="noopener">Aedifico Consulting</a>, which builds post-sales operating systems for deep tech and robotics companies. Different buyer, same instinct: find the specific broken thing, name it, fix it.</p>
`)}

${B.cta({ title: 'See where you stand.', body: 'Free, sourced, and yours whether or not you hire me.', button: 'Get the free audit', href: '/visibility-audit/' })}
`,
};

/* ---------------- Contact ---------------- */
const contact = {
  path: '/contact/',
  title: title('Contact'),
  description: desc('Send your business name and city for a free Local Visibility Snapshot, or email directly. Serving Central Texas and the Fox Valley.'),
  crumbs: [HOME, { href: '/contact/', label: 'Contact' }],
  schema: [{ '@type': 'ContactPage', name: 'Contact Aedifico Web Studio' }],
  body: `
${B.pageHead({
    eyebrow: 'Contact', kicker: 'Start here',
    h1: 'Find out where<br>you <em>rank</em> today.',
    lede: 'Send your business name and city. You get a Local Visibility Snapshot back: your rating and review count set against the businesses beating you, the terms your town searches, and a plain-English read on the gap. It costs nothing.',
  })}

<section class="section contact-sec">
  <div class="shell">
    <div class="contact-wrap">
      <div class="contact-copy">
        <h2 class="h3">What happens next</h2>
        <ol class="numbered">
          <li>You send your business name and city.</li>
          <li>I pull your profile, your competitors, and your search demand, and date every figure.</li>
          <li>You get the report in two to three days, with no call you have to sit through first.</li>
        </ol>
        <ul class="contact-list mono">
          <li><span>Email</span><b><a href="mailto:${site.email}">${site.email}</a></b></li>
          <li><span>Turnaround</span><b>2&ndash;3 days</b></li>
          <li><span>Cost</span><b>Free</b></li>
          <li><span>Serving</span><b>Central TX &amp; the Fox Valley</b></li>
        </ul>
      </div>
      ${B.contactForm()}
    </div>
  </div>
</section>
`,
};

/* ---------------- 404 ---------------- */
const notFound = {
  path: '/404.html',
  title: title('Page not found'),
  description: 'That page does not exist.',
  noindex: true,
  crumbs: [],
  body: `
${B.pageHead({
    eyebrow: 'Error 404', kicker: 'Page not found',
    h1: 'That page<br>isn\'t here.',
    lede: 'The link is wrong or the page moved. Here is everything that does exist.',
  })}
<section class="section">
  <div class="shell">
    <ul class="area-grid">
      <li><a href="/"><b>Home</b><span>What I do and who for.</span></a></li>
      <li><a href="/services/"><b>Services</b><span>Website design, local SEO, Google Business Profile.</span></a></li>
      <li><a href="/work/"><b>Work</b><span>Five case studies you can open and inspect.</span></a></li>
      <li><a href="/visibility-audit/"><b>Free visibility audit</b><span>Where you rank and who is beating you.</span></a></li>
      <li><a href="/guides/"><b>Guides</b><span>Plain answers to the questions I get weekly.</span></a></li>
      <li><a href="/contact/"><b>Contact</b><span>Send a business name and a city.</span></a></li>
    </ul>
  </div>
</section>
`,
};

module.exports = [audit, about, contact, notFound];
