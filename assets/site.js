(function () {
  'use strict';

  // Scroll animation. If AOS failed to load (offline, blocked CDN), reveal everything
  // rather than leaving the page blank. Same guard for reduced-motion users.
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.AOS && !reduced) {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 90, disable: 'phone' });
  } else {
    document.documentElement.classList.add('no-aos');
  }

  // Header condenses once you leave the hero
  var head = document.getElementById('head');
  if (head) {
    var onScroll = function () {
      if (window.scrollY > 40) head.classList.add('stuck');
      else head.classList.remove('stuck');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
