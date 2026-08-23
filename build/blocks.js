const { site } = require('./site.js');
const { esc } = require('./layout.js');
const { projects } = require('./data.js');

/* Section eyebrow: mono label, hairline, mono label. */
const ruleLabel = (left, right) =>
  `<p class="rule-label"><span class="mono">${esc(left)}</span><span class="rule"></span><span class="mono">${esc(right)}</span></p>`;

/* Page header used by every inner page. */
const pageHead = ({ eyebrow, kicker, h1, lede }) => `
<section class="section page-head">
  <div class="shell">
    ${ruleLabel(eyebrow, kicker)}
    <h1 class="h1">${h1}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
  </div>
</section>`;

const cta = ({ title, body, button = 'Get a free visibility audit', href = '/contact/' }) => `
<section class="section cta-band">
  <div class="shell cta-in">
    <div>
      <h2 class="h2">${title}</h2>
      ${body ? `<p class="sec-sub">${body}</p>` : ''}
    </div>
    <a class="btn btn-gold btn-lg" href="${href}">${esc(button)} <span aria-hidden="true">&rarr;</span></a>
  </div>
</section>`;

const projectCard = (p, { wide = false } = {}) => {
  const host = p.live.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const h = p.tall ? '900" height="2125' : '900" height="625';
  return `
      <article class="card${wide ? ' card--wide' : ''}${p.tall ? '' : ' card--short'}">
        <a class="frame" href="/work/${p.slug}/" tabindex="-1" aria-hidden="true">
          <div class="chrome"><i></i><i></i><i></i><span class="url mono">${esc(host)}</span></div>
          <div class="shot"><img src="${p.image}" alt="${esc(p.imageAlt)}" width="${h}" loading="lazy" decoding="async"></div>
        </a>
        <div class="card-body">
          <div class="card-top">
            <h3><a href="/work/${p.slug}/">${esc(p.name)}</a></h3>
            <span class="chip mono">${p.city ? esc(p.city + ', ' + p.region) : esc(p.trade)}</span>
          </div>
          <p>${esc(p.summary)}</p>
          <ul class="tags mono">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          <a class="card-link" href="/work/${p.slug}/">Read the case study <span aria-hidden="true">&rarr;</span></a>
        </div>
      </article>`;
};

const projectGrid = (slugs) => {
  const list = slugs.map((s) => projects.find((p) => p.slug === s));
  return `<div class="work">${list.map((p) => projectCard(p, { wide: p.featured })).join('')}</div>`;
};

const faqBlock = (faqs, heading = 'Common questions') => `
<section class="section">
  <div class="shell">
    ${ruleLabel('FAQ', heading)}
    <h2 class="h2">${esc(heading)}</h2>
    <div class="faq">
      ${faqs.map((f) => `
      <details class="faq-item">
        <summary><span>${esc(f.q)}</span></summary>
        <div class="faq-a"><p>${esc(f.a)}</p></div>
      </details>`).join('')}
    </div>
  </div>
</section>`;

/* Cross-links matter more than any single page. Every inner page ends with these. */
const relatedLinks = (links, heading = 'Keep reading') => `
<section class="section related">
  <div class="shell">
    ${ruleLabel('Next', heading)}
    <ul class="rel-grid">
      ${links.map((l) => `
      <li><a href="${l.href}">
        <span class="rel-kind mono">${esc(l.kind)}</span>
        <b>${esc(l.title)}</b>
        <span class="rel-desc">${esc(l.desc)}</span>
      </a></li>`).join('')}
    </ul>
  </div>
</section>`;

const contactForm = () => `
      <form class="form" action="${site.formAction}" method="POST">
        <div class="field">
          <label for="f-name">Your name</label>
          <input id="f-name" name="name" type="text" required autocomplete="name">
        </div>
        <div class="field">
          <label for="f-biz">Business name</label>
          <input id="f-biz" name="business" type="text" required autocomplete="organization">
        </div>
        <div class="field">
          <label for="f-city">City</label>
          <input id="f-city" name="city" type="text" required placeholder="e.g. Kyle, TX">
        </div>
        <div class="field">
          <label for="f-email">Email</label>
          <input id="f-email" name="email" type="email" required autocomplete="email">
        </div>
        <div class="field">
          <label for="f-msg">Anything you already know is broken <em>(optional)</em></label>
          <textarea id="f-msg" name="message" rows="3"></textarea>
        </div>
        <button class="btn btn-gold btn-lg btn-full" type="submit">Send it <span aria-hidden="true">&rarr;</span></button>
        <p class="form-alt">Rather just email? <a href="mailto:${site.email}">${site.email}</a></p>
      </form>`;

const prose = (html) => `<section class="section"><div class="shell"><div class="prose">${html}</div></div></section>`;

module.exports = { ruleLabel, pageHead, cta, projectCard, projectGrid, faqBlock, relatedLinks, contactForm, prose };
