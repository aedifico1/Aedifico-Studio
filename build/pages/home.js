const { esc, title, desc } = require('../layout.js');
const B = require('../blocks.js');
const { services, areas, guides } = require('../data.js');

module.exports = {
  path: '/',
  title: 'Web Design & Local SEO in Kyle, Buda & San Marcos TX',
  description: desc('Custom, hand-coded websites and local SEO for small businesses in Central Texas and the Fox Valley. Starts with a free visibility audit.'),
  crumbs: [],
  schema: [{
    '@type': 'WebSite',
    '@id': 'https://aedifico.studio/#website',
    url: 'https://aedifico.studio/',
    name: 'Aedifico Web Studio',
    publisher: { '@id': 'https://aedifico.studio/#business' },
  }],
  body: `
<section class="hero">
  <div class="hero-glow" id="glow" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="shell">
    ${B.ruleLabel('Aedifico Web Studio', 'Central TX & the Fox Valley')}
    <h1 class="hero-h1">The best shop in town<br>shouldn't be the <em>ninth</em><br>result.</h1>
    <div class="hero-body">
      <p class="lede">
        I build custom, hand-coded websites for salons, groomers, spas, and the trades,
        then fix the local-search problems that keep them off the first page. You own the
        files. Changing a price never requires a subscription.
      </p>
      <div class="hero-ctas">
        <a class="btn btn-gold btn-lg" href="/visibility-audit/">Get a free visibility audit <span aria-hidden="true">&rarr;</span></a>
        <a class="btn btn-ghost btn-lg" href="/work/">See the work</a>
      </div>
    </div>
    <div class="status" role="list">
      <span role="listitem"><i class="dot"></i>Booking: open</span>
      <span role="listitem">Concept builds: <b>5</b></span>
      <span role="listitem">Markets: Kyle &middot; Buda &middot; San Marcos &middot; Appleton</span>
      <span role="listitem">Build: custom, hand-coded</span>
    </div>
  </div>
  <div class="scroll-hint" aria-hidden="true"><span></span></div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    ${Array(2).fill('<span>Hair Salons</span><i>&#10022;</i><span>Nail Studios</span><i>&#10022;</i><span>Dog Grooming</span><i>&#10022;</i><span>Massage &amp; Bodywork</span><i>&#10022;</i><span>Med Spas</span><i>&#10022;</i><span>Barbershops</span><i>&#10022;</i><span>Contractors</span><i>&#10022;</i><span>Local Trades</span><i>&#10022;</i>').join('')}
  </div>
</div>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('Services', 'What I do')}
    <div class="sec-head">
      <h2 class="h2">Three services,<br>and I go deep on each.</h2>
      <p class="sec-sub">A site that answers real questions, the search work that gets it found, and the profile that fills the map pack.</p>
    </div>
    <ul class="svc-cards">
      ${services.map((s, i) => `
      <li class="svc-card">
        <span class="svc-num mono">0${i + 1}</span>
        <h3><a href="/services/${s.slug}/">${esc(s.name)}</a></h3>
        <p>${esc(s.short)}</p>
        <span class="card-link">Read more <span aria-hidden="true">&rarr;</span></span>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('Selected work', 'Concept builds')}
    <div class="sec-head">
      <h2 class="h2">Businesses that<br>were hard to find.</h2>
      <p class="sec-sub">
        Concept builds for real local businesses. I did the research, wrote the copy, and
        coded every page. None of the four local builds is that business's live website today.
      </p>
    </div>
    ${B.projectGrid(['kellys-k9-cuts', 'magnolia-beauty-lounge'])}
    <p class="more-link"><a class="card-link" href="/work/">See all five case studies <span aria-hidden="true">&rarr;</span></a></p>
  </div>
</section>

<section class="section audit-sec">
  <div class="shell">
    ${B.ruleLabel('How I start', 'The differentiator')}
    <div class="sec-head">
      <h2 class="h2">Before I pitch you,<br>I do the <em>homework</em>.</h2>
      <p class="sec-sub">
        Most web people open with a price. I open with a <b>Local Visibility Snapshot</b>:
        a short, sourced report on where your business ranks, who outranks you, what your
        town types into Google, and what closing that gap could be worth. Each figure
        carries a citation and a date. It costs nothing, and you keep it whether or not
        you hire me.
      </p>
    </div>
    <div class="stat-row">
      <div><b>4.9<span>&#9733;</span></b><small class="mono">Her Google rating</small></div>
      <div><b>7<span>th</span></b><small class="mono">Of 7 by review count</small></div>
      <div><b>9<span>th</span></b><small class="mono">In live search results</small></div>
    </div>
    <p class="more-link"><a class="card-link" href="/visibility-audit/">See a real snapshot, start to finish <span aria-hidden="true">&rarr;</span></a></p>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('Areas served', 'Where I work')}
    <div class="sec-head">
      <h2 class="h2">Working in your town.</h2>
      <p class="sec-sub">Local search rewards businesses that answer local questions. Same for the person building the site.</p>
    </div>
    <ul class="area-grid">
      ${areas.map((a) => `
      <li><a href="/areas/${a.slug}/">
        <b>${esc(a.city)}, ${esc(a.region)}</b>
        <span>${esc(a.blurb)}</span>
      </a></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('Guides', 'Plain answers')}
    <div class="sec-head">
      <h2 class="h2">Questions I get<br>every week.</h2>
      <p class="sec-sub">Written out properly, so you can decide whether you need me at all.</p>
    </div>
    <ul class="guide-list">
      ${guides.map((g) => `
      <li><a href="/guides/${g.slug}/">
        <b>${esc(g.title)}</b>
        <span>${esc(g.excerpt)}</span>
        <span class="mono rel-kind">${esc(g.read)} read</span>
      </a></li>`).join('')}
    </ul>
  </div>
</section>

${B.cta({
    title: 'Find out where you <em>rank</em> today.',
    body: 'Send your business name and city. You get a Local Visibility Snapshot back: your rating and review count set against the businesses beating you, the terms your town searches, and a plain-English read on the gap.',
  })}
`,
};
