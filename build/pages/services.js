const { esc, title, desc, faqSchema } = require('../layout.js');
const B = require('../blocks.js');
const { services, projects } = require('../data.js');

const HOME = { href: '/', label: 'Home' };
const HUB = { href: '/services/', label: 'Services' };

const hub = {
  path: '/services/',
  title: title('Web Design & Local SEO Services'),
  description: desc('Three services: custom hand-coded website design, local SEO, and Google Business Profile work. Flat pricing quoted in writing before work starts.'),
  crumbs: [HOME, HUB],
  schema: [{
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem', position: i + 1, name: s.name,
      url: `https://aedifico.studio/services/${s.slug}/`,
    })),
  }],
  body: `
${B.pageHead({
    eyebrow: 'Services', kicker: 'Three, done deep',
    h1: 'What I actually do<br>for local businesses.',
    lede: 'Not a menu of forty line items. A site that answers the questions customers ask, the search work that gets it found, and the profile that decides whether you appear in the map pack at all.',
  })}

<section class="section">
  <div class="shell">
    <div class="svc">
      ${services.map((s, i) => `
      <article class="svc-item">
        <span class="svc-num mono">0${i + 1}</span>
        <div>
          <h2><a href="/services/${s.slug}/">${esc(s.name)}</a></h2>
          <p>${esc(s.summary)}</p>
          <ul class="tags mono">${s.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          <a class="card-link" href="/services/${s.slug}/">More on ${esc(s.name.toLowerCase())} <span aria-hidden="true">&rarr;</span></a>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="section build-sec">
  <div class="shell">
    ${B.ruleLabel('Standard on every build', 'No upsells')}
    <div class="sec-head">
      <h2 class="h2">The boring parts<br>most sites skip.</h2>
      <p class="sec-sub">Each item ships with the build at no extra cost. Most of the rescue work on an existing site comes down to adding these.</p>
    </div>
    <div class="specs">
      <div class="spec"><b>Structured data</b><p>JSON-LD schema so Google reads your business type, address, hours, and rating as data instead of guessing.</p></div>
      <div class="spec"><b>Mobile viewport</b><p>The one meta tag whose absence makes a site unusable on a phone. Missing more often than you'd believe.</p></div>
      <div class="spec"><b>Sitemap &amp; robots</b><p>I write it, validate it, and submit it to Search Console the day the site goes live.</p></div>
      <div class="spec"><b>Real HTTPS</b><p>A valid certificate. A browser warning costs more visitors than any design choice.</p></div>
      <div class="spec"><b>Semantic HTML</b><p>Proper headings, landmarks, and alt text. Screen readers and crawlers read the same structure.</p></div>
      <div class="spec"><b>Speed by default</b><p>Static files, images sized to fit, and nothing sitting between your customer and the page.</p></div>
      <div class="spec"><b>Link previews</b><p>Open Graph and Twitter cards, so a link texted to a friend shows your brand and a real image.</p></div>
      <div class="spec"><b>Documented handoff</b><p>A README in plain English naming every place a phone number or price lives, so nothing goes stale.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="shell">
    ${B.ruleLabel('Process', 'How it goes')}
    <div class="sec-head"><h2 class="h2">Four steps,<br>start to launch.</h2></div>
    <ol class="steps">
      <li class="step"><span class="step-n mono">Step 01</span><h3>The snapshot</h3><p>I research your listing, your competitors, and your town's search demand, then walk you through what I found. It costs nothing, and you keep the report either way.</p></li>
      <li class="step"><span class="step-n mono">Step 02</span><h3>Scope &amp; a flat price</h3><p>One number, in writing, before anything starts. You see what the price covers and where it stops.</p></li>
      <li class="step"><span class="step-n mono">Step 03</span><h3>Design &amp; build</h3><p>You get a working page early in the process, and we make revisions on that page.</p></li>
      <li class="step"><span class="step-n mono">Step 04</span><h3>Launch &amp; measure</h3><p>I connect Search Console, tune the profile, and record a baseline. From there we watch whether your ranking moves.</p></li>
    </ol>
  </div>
</section>

${B.cta({ title: 'Start with the free audit.', body: 'You find out where you stand before either of us talks about price.', button: 'Request your snapshot' })}
`,
};

const detail = (s, i) => {
  const related = services.filter((x) => x.slug !== s.slug)
    .map((x) => ({ kind: 'Service', href: `/services/${x.slug}/`, title: x.name, desc: x.short }));
  related.push({ kind: 'Free', href: '/visibility-audit/', title: 'The Local Visibility Snapshot', desc: 'A sourced report on where you rank and who is beating you.' });

  return {
    path: `/services/${s.slug}/`,
    title: title(s.seoTitle),
    description: desc(s.summary),
    crumbs: [HOME, HUB, { href: `/services/${s.slug}/`, label: s.name }],
    schema: [
      {
        '@type': 'Service',
        name: s.name,
        serviceType: s.name,
        description: s.summary,
        provider: { '@id': 'https://aedifico.studio/#business' },
        areaServed: require('../site.js').site.areaServed.map((a) => ({ '@type': 'City', name: a.name })),
      },
      faqSchema(s.faqs),
    ],
    body: `
${B.pageHead({
      eyebrow: `Service 0${i + 1}`, kicker: s.short,
      h1: esc(s.name),
      lede: esc(s.intro),
    })}

<section class="section">
  <div class="shell">
    <div class="detail-grid">
      ${s.points.map((p) => `
      <article class="detail">
        <h2>${esc(p.h)}</h2>
        <p>${esc(p.p)}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

${B.faqBlock(s.faqs, `${s.name}: common questions`)}

${B.relatedLinks(related)}

${B.cta({ title: 'See where you stand first.', body: 'The visibility audit is free and yours whether or not you hire me.', button: 'Get the free audit' })}
`,
  };
};

module.exports = [hub, ...services.map(detail)];
