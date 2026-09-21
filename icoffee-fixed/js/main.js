(() => {
  document.querySelectorAll('.newsletter').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const button = form.querySelector('button');
    const original = button?.textContent || '→';
    if (button) button.textContent = '✓';
    setTimeout(() => { if (button) button.textContent = original; }, 1800);
  }));

  document.querySelectorAll('.search-form').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const q = form.querySelector('input')?.value.trim();
    if (q) window.location.href = `pages/benefits.html?q=${encodeURIComponent(q)}`;
  }));

  document.querySelectorAll('.account-panel form').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    if (btn) btn.textContent = 'SIGNED IN ✓';
  }));

  const year = document.querySelector('.footer-bottom');
  if (year) year.innerHTML = year.innerHTML.replace('© 2026', `© ${new Date().getFullYear()}`);
})();
/* =========================================================
   iCOFFEE INGREDIENTS — FORMULA MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const openButton = document.getElementById("icoffeeFormulaOpen");
    const closeButton = document.getElementById("icoffeeFormulaClose");
    const modal = document.getElementById("icoffeeFormulaModal");
    const overlay = document.getElementById("icoffeeFormulaOverlay");

    // Make sure the Ingredients section exists
    if (!openButton || !closeButton || !modal) {
        return;
    }

    function openFormulaModal() {

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }

    function closeFormulaModal() {

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }

    openButton.addEventListener("click", openFormulaModal);

    closeButton.addEventListener("click", closeFormulaModal);

    if (overlay) {
        overlay.addEventListener("click", closeFormulaModal);
    }

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeFormulaModal();
        }

    });

});