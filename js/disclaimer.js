/* =========================================================
   MEDICAL DISCLAIMER GATE
   Shows once per browser session. The visitor must tick the
   confirmation checkbox before "I Accept & Continue" unlocks.
   Accepting stores a sessionStorage flag so the gate will not
   reappear while browsing between pages in the same visit.
========================================================= */
(function () {
    var STORAGE_KEY = 'icoffeeMedicalDisclaimerAccepted';

    document.addEventListener('DOMContentLoaded', function () {
        var gate = document.getElementById('disclaimerGate');
        if (!gate) return;

        var alreadyAccepted = false;
        try {
            alreadyAccepted = sessionStorage.getItem(STORAGE_KEY) === 'true';
        } catch (e) {
            alreadyAccepted = false;
        }

        if (alreadyAccepted) {
            gate.parentNode && gate.parentNode.removeChild(gate);
            return;
        }

        document.body.classList.add('disclaimer-lock');

        var checkbox = document.getElementById('disclaimerCheckbox');
        var acceptBtn = document.getElementById('disclaimerAccept');

        if (checkbox && acceptBtn) {
            checkbox.addEventListener('change', function () {
                acceptBtn.disabled = !checkbox.checked;
            });

            acceptBtn.addEventListener('click', function () {
                if (acceptBtn.disabled) return;

                try {
                    sessionStorage.setItem(STORAGE_KEY, 'true');
                } catch (e) { /* ignore storage errors */ }

                gate.classList.add('disclaimer-gate--closing');
                document.body.classList.remove('disclaimer-lock');

                setTimeout(function () {
                    gate.parentNode && gate.parentNode.removeChild(gate);
                }, 450);
            });
        }
    });
})();
