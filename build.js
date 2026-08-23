#!/usr/bin/env node
/* Static site generator. Run: node build.js
   Writes HTML to the repo root so GitHub Pages serves it from main. */

const fs = require('fs');
const path = require('path');
const { render } = require('./build/layout.js');
const { ORIGIN } = require('./build/site.js');

const pages = [
  require('./build/pages/home.js'),
  ...require('./build/pages/services.js'),
  ...require('./build/pages/work.js'),
  ...require('./build/pages/areas.js'),
  ...require('./build/pages/guides.js'),
  ...require('./build/pages/core.js'),
];

const ROOT = __dirname;

/* /services/local-seo/ -> services/local-seo/index.html ; /404.html stays a file */
const outFile = (p) => {
  if (p === '/') return 'index.html';
  if (p.endsWith('.html')) return p.replace(/^\//, '');
  return path.join(p.replace(/^\/|\/$/g, ''), 'index.html');
};

let written = 0;
const seen = new Set();

for (const page of pages) {
  if (seen.has(page.path)) throw new Error('Duplicate page path: ' + page.path);
  seen.add(page.path);

  const rel = outFile(page.path);
  const abs = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, render(page));
  written++;
}

/* ---- sitemap.xml (indexable pages only) ---- */
const today = new Date().toISOString().slice(0, 10);
const priority = (p) =>
  p === '/' ? '1.0'
    : /^\/(services|work|visibility-audit)\/$/.test(p) ? '0.9'
      : p.split('/').filter(Boolean).length > 1 ? '0.7' : '0.8';

const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url>
    <loc>${ORIGIN}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(p.path)}</priority>
  </url>`).join('\n');

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);

/* ---- robots.txt ---- */
fs.writeFileSync(path.join(ROOT, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`);

console.log(`Built ${written} pages`);
console.log(`sitemap.xml: ${pages.filter((p) => !p.noindex).length} URLs`);
console.log(`robots.txt written`);
