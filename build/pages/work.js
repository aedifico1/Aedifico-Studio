const { esc, title, desc } = require('../layout.js');
const B = require('../blocks.js');
const { projects } = require('../data.js');

const HOME = { href: '/', label: 'Home' };
const HUB = { href: '/work/', label: 'Work' };

const hub = {
  path: '/work/',
  title: title('Local Business Web Design Portfolio'),
  description: desc('Five concept builds for real local businesses in Kyle, Buda, and Lewisville, Texas. Each is a working site you can open and inspect.'),
  crumbs: [HOME, HUB],
  schema: [{
    '@type': 'CollectionPage',
    name: 'Work',
    hasPart: projects.map((p) => ({
      '@type': 'CreativeWork', name: p.name,
      url: `https://aedifico.studio/work/${p.slug}/`,
    })),
  }],
  body: `
${B.pageHead({
    eyebrow: 'Work', kicker: 'Concept builds',
    h1: 'Businesses that were<br>hard to find.',
    lede: 'Four concept builds for real local businesses, plus my own consulting brand. I did the research, wrote the copy, and coded every page. <b>None of the four local builds is that business’s live website today.</b> Each is a working site you can open and read the source of.',
  })}

<section class="section">
  <div class="shell">
    ${B.projectGrid(projects.map((p) => p.slug))}
  </div>
</section>

${B.cta({ title: 'Want yours in here?', body: 'Start with a free visibility audit and find out whether the work is worth doing at all.', button: 'Request your snapshot' })}
`,
};

const detail = (p) => {
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3)
    .map((x) => ({ kind: x.city ? `${x.city}, ${x.region}` : 'Brand', href: `/work/${x.slug}/`, title: x.name, desc: x.trade }));

  const areaLink = p.city === 'Kyle' ? '/areas/kyle-tx/' : p.city === 'Buda' ? '/areas/buda-tx/' : null;

  return {
    path: `/work/${p.slug}/`,
    title: title(p.city ? `${p.name}: ${p.trade} Website in ${p.city} ${p.region}` : `${p.name}: Brand & Art Direction`),
    description: desc(p.summary),
    crumbs: [HOME, HUB, { href: `/work/${p.slug}/`, label: p.name }],
    ogImage: p.image,
    schema: [{
      '@type': 'CreativeWork',
      name: p.name,
      about: p.trade,
      creator: { '@id': 'https://aedifico.studio/#business' },
      url: `https://aedifico.studio/work/${p.slug}/`,
    }],
    body: `
${B.pageHead({
      eyebrow: p.city ? `${p.city}, ${p.region}` : 'Own brand',
      kicker: p.trade,
      h1: esc(p.name),
      lede: esc(p.summary),
    })}

<section class="section section--tight">
  <div class="shell">
    <div class="case-shot">
      <div class="chrome"><i></i><i></i><i></i><span class="url mono">${esc(p.live.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</span></div>
      <img src="${p.image}" alt="${esc(p.imageAlt)}" width="900" height="${p.tall ? 2125 : 625}" loading="lazy" decoding="async">
    </div>
    <p class="shot-cap mono">Captured from the live build. <a href="${p.live}" target="_blank" rel="noopener">Open the whole page &nearr;</a></p>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="case-grid">
      <div class="case-main">
        <h2 class="h3">The problem</h2>
        <p>${esc(p.problem)}</p>

        <h2 class="h3">What I did</h2>
        <ul class="ticks">${p.approach.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>

        <h2 class="h3">Where it landed</h2>
        <p>${esc(p.result)}</p>
        ${p.note ? `<p class="callout"><b>Worth saying plainly:</b> ${esc(p.note)}</p>` : ''}
        ${p.disclosure ? `<p class="callout"><b>Disclosure:</b> ${esc(p.disclosure)}</p>` : ''}
      </div>
      <aside class="case-side">
        <dl>
          <dt class="mono">Business</dt><dd>${esc(p.name)}</dd>
          ${p.city ? `<dt class="mono">Location</dt><dd>${esc(p.city)}, ${esc(p.region)}</dd>` : ''}
          <dt class="mono">Trade</dt><dd>${esc(p.trade)}</dd>
          <dt class="mono">Scope</dt><dd>${p.tags.map(esc).join(', ')}</dd>
        </dl>
        <a class="btn btn-ghost" href="${p.live}" target="_blank" rel="noopener">Open the live build <span aria-hidden="true">&nearr;</span></a>
        ${areaLink ? `<a class="card-link" href="${areaLink}">Web design in ${esc(p.city)} <span aria-hidden="true">&rarr;</span></a>` : ''}
      </aside>
    </div>
  </div>
</section>

${B.relatedLinks(others, 'More work')}

${B.cta({ title: 'Curious where you rank?', body: 'The audit is free, sourced, and yours to keep.', button: 'Get the free audit' })}
`,
  };
};

module.exports = [hub, ...projects.map(detail)];
