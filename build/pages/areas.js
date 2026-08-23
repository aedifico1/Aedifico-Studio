const { esc, title, desc, faqSchema } = require('../layout.js');
const B = require('../blocks.js');
const { areas, projects, services } = require('../data.js');

const HOME = { href: '/', label: 'Home' };

/* Area pages earn their place by carrying content that is genuinely different per city:
   real local builds where they exist, and a plain admission where they do not. */
module.exports = areas.map((a) => {
  const proof = a.localProof.map((s) => projects.find((p) => p.slug === s));

  const faqs = [
    {
      q: `Do you work with businesses in ${a.city}?`,
      a: proof.length
        ? `Yes. ${proof.map((p) => p.name).join(' and ')} ${proof.length > 1 ? 'are' : 'is'} on this site, built for ${a.city} ${proof.length > 1 ? 'businesses' : 'business'}. The work happens remotely, which keeps the price sensible, and knowing the market matters more than sharing a zip code.`
        : `Yes, though I have not built for a ${a.city} business yet. The work happens remotely and the research is market-specific, so the process is the same. The free audit is the cheapest way for both of us to find out whether it is worth doing.`,
    },
    {
      q: `How much does a website cost for a ${a.city} business?`,
      a: 'One flat number, quoted in writing before anything starts, based on how many pages you need and how much copy has to be written from scratch. There is no hourly meter and no monthly platform fee.',
    },
    {
      q: `Why is my ${a.city} competitor ranking above me?`,
      a: 'Usually one of three things: their page titles name the service and the city and yours do not, they have more reviews, or their site has a page per service where yours has one buried list. The free audit tells you which of the three it is in your case.',
    },
  ];

  return {
    path: `/areas/${a.slug}/`,
    title: title(`Web Design & SEO in ${a.city}, ${a.region}`),
    description: desc(`${a.blurb} Hand-coded sites and local search work for ${a.city} businesses.`),
    crumbs: [HOME, { href: '/areas/' + a.slug + '/', label: `${a.city}, ${a.region}` }],
    schema: [
      {
        '@type': 'Service',
        name: `Web design and local SEO in ${a.city}, ${a.region}`,
        provider: { '@id': 'https://aedifico.studio/#business' },
        areaServed: {
          '@type': 'City', name: a.city,
          containedInPlace: { '@type': 'State', name: a.regionName },
        },
      },
      faqSchema(faqs),
    ],
    body: `
${B.pageHead({
      eyebrow: `${a.city}, ${a.region}`, kicker: 'Areas served',
      h1: `Web design &amp; local SEO<br>in <em>${esc(a.city)}</em>.`,
      lede: esc(a.intro),
    })}

<section class="section">
  <div class="shell">
    ${B.ruleLabel(proof.length ? 'Local proof' : 'Straight answer', proof.length ? `Built in ${a.city}` : 'No local build yet')}
    <div class="sec-head">
      <h2 class="h2">${proof.length ? `Work already<br>done in ${esc(a.city)}.` : `I have not built<br>here yet.`}</h2>
      <p class="sec-sub">${esc(a.localNote)}</p>
    </div>
    ${proof.length ? B.projectGrid(a.localProof) : ''}
    ${a.auditLink ? `<p class="more-link"><a class="card-link" href="/visibility-audit/">Read the ${esc(a.city)} snapshot in full <span aria-hidden="true">&rarr;</span></a></p>` : ''}
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('What people search', `${a.city} terms`)}
    <div class="sec-head">
      <h2 class="h2">The words that<br>matter here.</h2>
      <p class="sec-sub">Local search is won on phrasing. These are the shapes of query a ${esc(a.city)} customer actually types, and the ones a page has to be built around.</p>
    </div>
    <ul class="term-list mono">${a.terms.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    <p class="src mono">Illustrative phrasing, not volume data. Your audit pulls real numbers for your specific service and market.</p>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('Services', `Available in ${a.city}`)}
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

${B.faqBlock(faqs, `${a.city} questions`)}

${B.cta({
      title: `See where you rank in <em>${esc(a.city)}</em>.`,
      body: 'Send your business name. You get a sourced report on your position, your competitors, and the gap between you.',
      button: 'Get the free audit',
    })}
`,
  };
});
