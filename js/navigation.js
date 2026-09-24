(() => {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.nav-links');
  const toggle = document.querySelector('[data-menu-toggle]');
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchPanel = document.querySelector('[data-search-panel]');
  const accountToggle = document.querySelector('[data-account-toggle]');
  const accountPanel = document.querySelector('[data-account-panel]');
  const closePanel = document.querySelector('[data-panel-close]');

  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const setMenuState = (open) => {
    menu?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.textContent = open ? '×' : '☰';
    }
  };

  toggle?.addEventListener('click', () => {
    setMenuState(!menu?.classList.contains('open'));
  });

  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    setMenuState(false);
  }));

  searchToggle?.addEventListener('click', () => {
    searchPanel?.classList.toggle('open');
    const input = searchPanel?.querySelector('input');
    if (searchPanel?.classList.contains('open')) setTimeout(() => input?.focus(), 80);
  });

  accountToggle?.addEventListener('click', () => accountPanel?.classList.add('open'));
  closePanel?.addEventListener('click', () => accountPanel?.classList.remove('open'));
  accountPanel?.addEventListener('click', e => { if (e.target === accountPanel) accountPanel.classList.remove('open'); });
})();
