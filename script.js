/* Aedifico Web Studio — interactions
   Plain JS, no dependencies. Everything degrades gracefully. */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- sticky nav ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('stuck', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      burger.focus();
    }
  });

  // A resize past the breakpoint should not leave the panel stuck open.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1060) setMenu(false);
  });

  /* ---------- hero entrance ----------
     The hero must not wait on the scroll observer: an above-the-fold element that
     starts at opacity 0 shows a blank screen until the callback fires. Stage it in
     immediately instead, and let the observer handle everything below the fold. */
  document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
    el.style.transitionDelay = i * 110 + 'ms';
    el.classList.add('in');
  });

  /* ---------- scroll reveal ---------- */
  var items = document.querySelectorAll('.reveal:not(.in)');

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Stagger siblings so grids cascade instead of snapping in together.
        var sibs = Array.prototype.slice.call(el.parentNode.children).filter(function (n) {
          return n.classList.contains('reveal');
        });
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 90 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- hero glow follows the pointer ---------- */
  var glow = document.getElementById('glow');
  if (glow && !reduced && window.matchMedia('(pointer: fine)').matches) {
    var hero = document.querySelector('.hero');
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      glow.style.setProperty('--gx', ((e.clientX - r.left) / r.width) * 100 + '%');
      glow.style.setProperty('--gy', ((e.clientY - r.top) / r.height) * 100 + '%');
    });
  }

  /* ---------- footer year ---------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
