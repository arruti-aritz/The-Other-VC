/* =============================================
   Other VC — Scroll & UI Animations
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. Scroll-reveal via IntersectionObserver
  ------------------------------------------ */
  const revealEls = document.querySelectorAll(
    '.reveal, .section, .portfolio-area, .hero-content, ' +
    '.panel-card, .longform-card, .team-person-card, ' +
    '.contact-page-card, .news-placeholder-card, .intro-grid, ' +
    '.page-block-layout, .home-block-inner, .contact-block, ' +
    '.news-carousel-wrap, .cta-section'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  revealEls.forEach(el => {
    el.classList.add('will-reveal');
    observer.observe(el);
  });

  /* ------------------------------------------
     2. Staggered children reveal
  ------------------------------------------ */
  const staggerParents = document.querySelectorAll(
    '.two-panel-grid, .longform-grid, .contact-reasons-grid, .news-grid'
  );

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.12}s`;
          child.classList.add('will-reveal');
          setTimeout(() => child.classList.add('in-view'), 10);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  staggerParents.forEach(el => staggerObserver.observe(el));

  /* ------------------------------------------
     3. Active nav link highlight
  ------------------------------------------ */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('nav-active');
    }
  });

  /* ------------------------------------------
     4. Parallax-lite on hero
  ------------------------------------------ */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.backgroundPositionY = `${y * 0.35}px`;
    }, { passive: true });
  }

  /* ------------------------------------------
     5. Header shadow on scroll
  ------------------------------------------ */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

});
