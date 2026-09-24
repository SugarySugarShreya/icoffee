/* Rotates the pack shots in the "Ready to begin?" section every 2 seconds.
   Images that fail to load are dropped from the rotation, so a missing file never shows a broken icon. */
(function () {
  document.querySelectorAll('.shop-rotator').forEach(function (box) {
    var interval = parseInt(box.getAttribute('data-rotate-interval'), 10) || 2000;
    var timer = null, idx = 0;
    function imgs() { return Array.prototype.slice.call(box.querySelectorAll('img')); }
    function show(i) {
      var list = imgs();
      if (!list.length) return;
      idx = i % list.length;
      list.forEach(function (im, k) { im.classList.toggle('is-active', k === idx); });
    }
    function start() {
      if (timer) clearInterval(timer);
      if (imgs().length < 2) { box.classList.remove('is-live'); return; }
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      box.classList.add('is-live'); show(idx);
      timer = setInterval(function () { show(idx + 1); }, interval);
    }
    imgs().forEach(function (im) {
      im.addEventListener('error', function () { im.remove(); start(); });
      im.loading = 'eager'; /* hidden lazy images would never load */
      if (im.complete && im.naturalWidth === 0 && im.getAttribute('src')) { im.remove(); }
    });
    start();
  });
})();
