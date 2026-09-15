(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  // Automatically enhance major visual blocks without changing their content.
  const selectors = [
    '.section-heading','.ingredients-heading','.immersive-copy','.statement-inner',
    '.shop-copy','.shop-products','.testimonial-section>div','.icoffee-smarter-section',
    '.hub-section','.aeo-answer-section','.page-hero','.trust-strip'
  ];
  selectors.forEach(selector => document.querySelectorAll(selector).forEach(el => el.classList.add('motion-reveal')));

  document.querySelectorAll('.iv-product-grid,.ingredient-grid,.hub-grid,.hub-stat-grid,.shop-products').forEach(grid => grid.classList.add('motion-stagger'));
  document.querySelectorAll('.motion-stagger').forEach(grid => [...grid.children].forEach((child,i) => child.style.setProperty('--delay', `${Math.min(i,7)*70}ms`)));

  if (reduce) {
    document.querySelectorAll('.motion-reveal,.motion-stagger').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealItems = document.querySelectorAll('.reveal,.motion-reveal,.motion-stagger');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible','is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.1, rootMargin:'0px 0px -50px 0px'});
  revealItems.forEach(item => observer.observe(item));

  // Subtle header elevation after scrolling.
  const header = document.querySelector('.header-stack');
  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    const bar = document.querySelector('.motion-progress');
    if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Lightweight scroll progress indicator.
  const bar = document.createElement('div');
  bar.className = 'motion-progress';
  document.body.appendChild(bar);

  // Existing parallax support, kept intentionally restrained.
  const parallax = document.querySelector('[data-parallax]');
  if (parallax) {
    window.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY * 0.06, 36);
      parallax.style.transform = `scale(1.05) translate3d(0, ${y}px, 0)`;
    }, {passive:true});
  }

  const bannerImg = document.querySelector('.banner-parallax');
  if (bannerImg) {
    const updateBannerParallax = () => {
      const rect = bannerImg.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      const y = (progress - 0.5) * 40;
      bannerImg.style.transform = `scale(1.06) translate3d(0, ${y}px, 0)`;
    };
    window.addEventListener('scroll', updateBannerParallax, {passive:true});
    window.addEventListener('resize', updateBannerParallax, {passive:true});
    updateBannerParallax();
  }
})();
