/* Lazy video: videos stay unloaded (preload="none", poster shown) until they scroll into view.
   Autoplaying videos use data-autoplay instead of the autoplay attribute, so nothing downloads
   until visible, and they pause again when scrolled away to save bandwidth and battery. */
(function () {
  var videos = document.querySelectorAll('video[data-autoplay]');
  if (!videos.length) return;
  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.play().catch(function () {}); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var v = entry.target;
      if (entry.isIntersecting) {
        v.play().catch(function () {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { threshold: 0.25 });
  videos.forEach(function (v) { io.observe(v); });
})();
