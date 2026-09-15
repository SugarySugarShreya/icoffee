/* =========================================================
   STORE LINK — SINGLE SOURCE OF TRUTH
   Replace the URL below with the client's real store /
   checkout link once it is provided. Every "SHOP NOW" button
   across the entire site (any element with [data-store-link])
   updates automatically from this one place — no need to
   edit each page by hand.
========================================================= */
var ICOFFEE_STORE_URL = "https://store.indusviva.com/?id=1136006&token=MTEzNjAwNi8xNzExMDM0Nzg="; // TODO: replace with client's official store link

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('[data-store-link]');
    links.forEach(function (el) {
        el.setAttribute('href', ICOFFEE_STORE_URL);
    });
});
