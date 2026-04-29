/* =============================================
   Other VC — Scroll & UI Animations
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. Assign varied animation classes
  ------------------------------------------ */
  const fadeUpEls = document.querySelectorAll(
    '.intro-grid, .hero-content, .cta-section, .contact-email-section, ' +
    '.news-carousel-wrap, .hp-news-section, .contact-reasons-grid, ' +
    '.vision-why, .team-single-wrap'
  );
  fadeUpEls.forEach(el => el.classList.add('anim-fade-up'));

  const fadeLeftEls = document.querySelectorAll(
    '.home-block-normal .home-block-text, .vision-split-text, ' +
    '.vision-pillar:first-child, .contact-direct-copy'
  );
  fadeLeftEls.forEach(el => el.classList.add('anim-fade-left'));

  const fadeRightEls = document.querySelectorAll(
    '.home-block-reversed .home-block-text, .home-block-normal .home-block-visual, ' +
    '.vision-split-visual, .contact-direct-visual'
  );
  fadeRightEls.forEach(el => el.classList.add('anim-fade-right'));

  const scaleEls = document.querySelectorAll(
    '.panel-card, .longform-card, .news-card, .news-article-row, ' +
    '.contact-reason-card, .team-person-card, .project-logo-wrap'
  );
  scaleEls.forEach(el => el.classList.add('anim-scale'));

  const fadeDownEls = document.querySelectorAll('.hero-kicker, .vision-label');
  fadeDownEls.forEach(el => el.classList.add('anim-fade-down'));

  /* ------------------------------------------
     2. IntersectionObserver — trigger all anim-* classes
  ------------------------------------------ */
  const allAnimEls = document.querySelectorAll(
    '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale, .anim-fade-down'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  allAnimEls.forEach(el => observer.observe(el));

  /* ------------------------------------------
     3. Staggered children (grids)
  ------------------------------------------ */
  const staggerParents = document.querySelectorAll(
    '.two-panel-grid, .longform-grid, .contact-reasons-grid, ' +
    '.news-grid, .vision-pillars'
  );

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.13}s`;
          child.classList.add('anim-scale');
          setTimeout(() => child.classList.add('in-view'), 20);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  staggerParents.forEach(el => staggerObserver.observe(el));

  /* ------------------------------------------
     4. Burger menu (overlay appended to body)
  ------------------------------------------ */
  const burger   = document.getElementById('nav-burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';
    navLinks.querySelectorAll('a').forEach(a => {
      const clone = a.cloneNode(true);
      overlay.appendChild(clone);
    });
    document.body.appendChild(overlay);

    const toggle = (open) => {
      overlay.classList.toggle('open', open);
      burger.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggle(!overlay.classList.contains('open')));
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => toggle(false));
    });
  }

  /* ------------------------------------------
     5. Active nav link
  ------------------------------------------ */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('nav-active');
  });

  /* ------------------------------------------
     6. Header shadow on scroll
  ------------------------------------------ */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ------------------------------------------
     7. Subtle parallax on hero
  ------------------------------------------ */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    }, { passive: true });
  }

});
