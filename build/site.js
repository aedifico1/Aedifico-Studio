// Global site configuration. Everything that appears on more than one page lives here.

const ORIGIN = 'https://aedifico.studio';

const site = {
  origin: ORIGIN,
  brand: 'Aedifico Web Studio',
  wordmark: { text: 'aedifico', accent: '.studio' },
  tagline: 'Web design & local SEO',
  email: 'admin@aedifico.io',
  founder: 'Esteban Montiel',
  consultingSite: 'https://aedifico.io/',
  githubUser: 'aedifico1',

  // No street address and no phone are published, so neither is claimed in schema.
  // See README: a Google Business Profile is required before map-pack ranking is possible.
  areaServed: [
    { name: 'Kyle', region: 'TX' },
    { name: 'Buda', region: 'TX' },
    { name: 'San Marcos', region: 'TX' },
    { name: 'Appleton', region: 'WI' },
    { name: 'Kimberly', region: 'WI' },
  ],

  nav: [
    { href: '/services/', label: 'Services' },
    { href: '/work/', label: 'Work' },
    { href: '/visibility-audit/', label: 'Free Audit' },
    { href: '/guides/', label: 'Guides' },
    { href: '/about/', label: 'About' },
  ],

  footerNav: [
    { href: '/services/', label: 'Services' },
    { href: '/work/', label: 'Work' },
    { href: '/visibility-audit/', label: 'Visibility Audit' },
    { href: '/guides/', label: 'Guides' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ],

  // Replace with a real Formspree/Netlify endpoint before launch. See README.
  formAction: 'https://formspree.io/f/YOUR_FORM_ID',
};

module.exports = { site, ORIGIN };
