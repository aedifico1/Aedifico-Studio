# Aedifico Web Studio — portfolio site

Portfolio and lead-generation site for the web design / local SEO side business.
Plain HTML, CSS, and JavaScript. No build step, no dependencies, no framework.

## Structure

```
index.html        all markup, one page
styles.css        all styling
script.js         sticky nav, mobile menu, scroll reveal, hero glow, count-up
assets/work/      full-page screenshots of the four live client sites (JPEG)
```

## Running locally

Double-click `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## aedifico.io is on the page, and it is built on Lovable

Section 01 features aedifico.io as a full-width card, credited for positioning, copywriting,
and art direction rather than for the build. That wording is deliberate.

The live site is a Lovable project: the HTML carries `<meta name="twitter:site"
content="@Lovable">`, it serves a hashed Vite bundle, and Lovable renders a floating
"Edit with Lovable" badge to visitors. This page sells custom, hand-coded work and says so
in the hero, the services list, and the specs grid. A prospect who clicks through to a
page-builder site with an edit badge on it can spot the gap.

Two things close it:

- **Rebuild aedifico.io by hand** (the plan). Once it ships as static HTML/CSS, change the
  card's tags from Positioning / Copywriting / Art direction to name the build too.
- **Or remove the badge** at minimum. It is the most visible tell.

The screenshot at `assets/work/aedifico.jpg` is one viewport tall, captured at 1440x1000 so
the site's `100vh` hero renders at its true proportions. The card scrolls it a fixed `-26%`
on hover instead of scrolling to the bottom edge, which keeps the badge out of frame. If you
rebuild the site, re-capture and drop that override in `styles.css`.

## Before this goes live

- [x] **Contact email** — the form's fallback is `admin@aedifico.io`, on the consulting
      domain, which already has working mail. Note that `aedifico.studio` has no MX records
      and no mailbox, so do not put an `@aedifico.studio` address on the page until you set
      one up. Your personal Gmail was deliberately left off.
- [ ] **Form endpoint** — `<form action>` points at `https://formspree.io/f/YOUR_FORM_ID`.
      Create a form at formspree.io (free tier is fine) and paste the real ID, or swap in
      Netlify Forms. Until then the form will not deliver anything.
- [ ] **Canonical + og:url** — both point at
      `https://aedifico1.github.io/aedifico-web-studio/`. Update if you deploy elsewhere.
- [ ] **og:image** — no share image is set yet, so a texted link shows a blank box. Export a
      1200×630 graphic to `assets/og.jpg` and add the `og:image` meta tag.
- [ ] **Phone number** — none is published. Add one to the contact section if you want calls.

## Copy rules this page follows

The prose was written to avoid the usual AI tells, and it is worth keeping that way on edits:

- **No em dashes anywhere**, including alt text and meta tags. Use a colon, a comma, or a
  full stop. `grep -c '—' index.html` should return 0.
- No "not X, it's Y" contrasts, and no three-item negative lists ("no framework, no jQuery,
  no bloat").
- Active voice with a human subject. "I submit the sitemap," not "the sitemap is submitted."
- Cut adverbs.

## What the work section does and does not claim

The four local-business cards are **concept builds**. I researched each business, wrote the
copy, and coded the pages, but none of them is that business's live website. The sub-head
says so in plain words. Do not tighten that line into something that implies these are
adopted client sites, and do not restore the earlier "Every one of these is live" phrasing.

The hero status strip says "Concept builds: 4" for the same reason. Change it to a client
count only when there are real clients to count.

## The audit sample

Section 02 reproduces the real Local Visibility Snapshot built for a San Marcos massage
studio in August 2026. **The business name is deliberately anonymized** ("This studio") —
the page shows her as ranking 7th of 7 on reviews and 9th in live search, which is not
something to publish under a real prospect's name without permission. If she becomes a
client and signs off, swap "This studio" for the business name in `index.html`.

Competitor names, ratings, and review counts are public Google Business Profile data and
are shown as-is, with the pull date.

All figures trace back to `../Awesome Massage by Liz/Awesome-Massage-by-Liz-Pitch.pdf`.
Refresh the numbers and the "Aug 2026" date stamp if you leave this sample up long enough
for it to go stale.

## Screenshots

`assets/work/*.jpg` were captured from the live GitHub Pages sites with headless Chrome at
1440×3400, resampled to 900px wide. They're tall on purpose: the cards scroll the image on
hover to preview the whole page. Re-capture after any client site changes:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --hide-scrollbars --screenshot=out.png --window-size=1440,3400 \
  --virtual-time-budget=12000 "https://aedifico1.github.io/kellys-k9-cuts/"
sips -s format jpeg -s formatOptions 68 --resampleWidth 900 out.png --out k9.jpg
```

## Accessibility & motion

Skip link, visible focus rings, semantic landmarks, and alt text on every screenshot.
`prefers-reduced-motion` disables the grain, marquee, reveals, count-up, and the hover
page-scroll.
