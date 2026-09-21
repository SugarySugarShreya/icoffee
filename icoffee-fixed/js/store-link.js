/* =========================================================
   STORE LINK — SINGLE SOURCE OF TRUTH
   Every element with [data-store-link] across the entire site
   gets its href updated automatically from this one place.
   To change the store URL, edit ICOFFEE_STORE_URL below only.
========================================================= */
var ICOFFEE_STORE_URL = "https://store.indusviva.com/?id=1136006&token=MTEzNjAwNi8xNzExMDM0Nzg=";

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('[data-store-link]');
    links.forEach(function (el) {
        el.setAttribute('href', ICOFFEE_STORE_URL);
    });
});
