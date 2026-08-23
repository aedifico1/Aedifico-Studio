const { site, ORIGIN } = require('./site.js');

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const url = (p) => ORIGIN + (p === '/' ? '/' : p);

/* Google truncates titles around 60 characters, so the brand suffix is only
   appended when it fits. The keywords matter more than the branding. */
const BRAND = ' | Aedifico Studio';
const title = (core) => (core.length + BRAND.length <= 60 ? core + BRAND : core);

/* Descriptions get truncated near 160. Trim at a word boundary rather than mid-word. */
const desc = (s) => {
  if (s.length <= 155) return s;
  const cut = s.slice(0, 155);
  return cut.slice(0, cut.lastIndexOf(' ')) + '.';
};

/* ---------- shared schema nodes ---------- */

// No street address or phone is published, so ProfessionalService carries areaServed
// instead of a postal address. Claiming an address that isn't real would be worse
// than having no local rich result. See README.
const organizationSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': ORIGIN + '/#business',
  name: site.brand,
  url: ORIGIN,
  email: site.email,
  description: 'Custom, hand-coded websites and local SEO for small businesses in Central Texas and the Fox Valley.',
  founder: { '@type': 'Person', name: site.founder },
  knowsAbout: ['Local SEO', 'Web design', 'Google Business Profile optimization', 'Structured data'],
  areaServed: site.areaServed.map((a) => ({
    '@type': 'City', name: a.name,
    containedInPlace: { '@type': 'State', name: a.region },
  })),
});

const breadcrumbSchema = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem', position: i + 1, name: c.label,
    item: url(c.href),
  })),
});

const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/* ---------- chrome ---------- */

const navHtml = (current) => site.nav.map((n) => {
  const active = current === n.href || (n.href !== '/' && current.startsWith(n.href));
  return `<a href="${n.href}"${active ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`;
}).join('\n      ');

const breadcrumbHtml = (crumbs) => {
  if (!crumbs || crumbs.length < 2) return '';
  const items = crumbs.map((c, i) => {
    const last = i === crumbs.length - 1;
    return last
      ? `<li aria-current="page">${esc(c.label)}</li>`
      : `<li><a href="${c.href}">${esc(c.label)}</a></li>`;
  }).join('');
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
};

const mark = (size) =>
  `<svg viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true"><path d="M50 20 L76 80 H63.5 L50 47 L36.5 80 H24 Z" fill="currentColor"/></svg>`;

/* ---------- page ---------- */

function render(page) {
  const {
    path, title, description, body,
    crumbs = [], schema = [], ogImage = '/assets/og.jpg',
    ogType = 'website', noindex = false,
  } = page;

  const graph = [organizationSchema(), ...schema];
  if (crumbs.length > 1) graph.push(breadcrumbSchema(crumbs));

  const jsonld = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url(path)}">
${noindex ? '<meta name="robots" content="noindex,follow">' : ''}
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.brand)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url(path)}">
<meta property="og:image" content="${ORIGIN}${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${ORIGIN}${ogImage}">

<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%2308080A'/%3E%3Cpath d='M50 22 L74 78 H62 L50 48 L38 78 H26 Z' fill='%23D8B65C'/%3E%3C/svg%3E">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;1,6..96,400;1,6..96,700&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">

<script type="application/ld+json">
${jsonld}
</script>
</head>
<body>

<div class="grain" aria-hidden="true"></div>
<a class="skip" href="#main">Skip to content</a>

<header class="nav" id="nav">
  <div class="shell nav-in">
    <a class="logo" href="/">
      <span class="logo-mark">${mark(34)}</span>
      <span class="logo-txt">${site.wordmark.text}<em>${site.wordmark.accent}</em>
        <small>${esc(site.tagline)}</small>
      </span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      ${navHtml(path)}
    </nav>
    <a class="btn btn-gold nav-cta" href="/visibility-audit/">Free Visibility Audit <span aria-hidden="true">&rarr;</span></a>
    <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    ${site.nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join('\n    ')}
    <a class="btn btn-gold" href="/visibility-audit/">Free Visibility Audit &rarr;</a>
  </div>
</header>

<main id="main">
${breadcrumbHtml(crumbs)}
${body}
</main>

<footer class="foot">
  <div class="shell foot-in">
    <div class="foot-top">
      <div class="foot-brand">
        <span class="logo-mark">${mark(30)}</span>
        <div>
          <b>${esc(site.brand)}</b>
          <small>${esc(site.tagline)} &middot; Central Texas &amp; the Fox Valley</small>
        </div>
      </div>
      <div class="foot-cols">
        <div>
          <h2 class="mono">Pages</h2>
          <ul>${site.footerNav.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h2 class="mono">Areas served</h2>
          <ul>${require('./data.js').areas.map((a) => `<li><a href="/areas/${a.slug}/">${esc(a.city)}, ${esc(a.region)}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h2 class="mono">Get in touch</h2>
          <ul>
            <li><a href="mailto:${site.email}">${site.email}</a></li>
            <li><a href="/visibility-audit/">Free visibility audit</a></li>
            <li><a href="${site.consultingSite}" target="_blank" rel="noopener">aedifico.io &nearr;</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p class="foot-fine mono">&copy; <span id="yr">2026</span> Aedifico &middot; Built by hand, like everything else here.</p>
  </div>
</footer>

<script src="/script.js"></script>
</body>
</html>
`;
}

module.exports = { render, esc, url, title, desc, faqSchema, organizationSchema };
