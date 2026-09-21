(() => {
  if (window.matchMedia('(pointer:coarse)').matches) return;
  document.documentElement.classList.add('fine-pointer');
  document.querySelectorAll('.btn,.product-card,.nav-links a').forEach(el => {
    el.addEventListener('mouseenter', () => el.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => el.classList.remove('cursor-hover'));
  });
})();
