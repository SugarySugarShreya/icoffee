(() => {
  const addButtons = document.querySelectorAll('[data-add-cart]');
  const count = document.querySelector('.cart-count');
  let total = 0;
  addButtons.forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    total += 1;
    if (count) count.textContent = total;
    btn.textContent = 'ADDED ✓';
  }));
})();
/* =========================================================
   ICOFFEE PRODUCT SHOWCASE REVEAL
========================================================= */

(function () {

    const productCards =
        document.querySelectorAll(".iv-product-card");

    if (!productCards.length) return;


    /* -----------------------------------------------------
       Intersection Observer
    ----------------------------------------------------- */

    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("iv-visible");

                    obs.unobserve(entry.target);

                });

            },
            {
                threshold: 0.18
            }
        );


    productCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 120}ms`;

        observer.observe(card);

    });


    /* -----------------------------------------------------
       Mouse interaction
    ----------------------------------------------------- */

    productCards.forEach((card) => {

        const image =
            card.querySelector(".iv-product-image");

        const glow =
            card.querySelector(".iv-product-glow");

        if (!image) return;


        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 3;

            const rotateX =
                ((y / rect.height) - 0.5) * -3;


            image.style.transform =
                `translateY(0)
                 scale(1.045)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;


            if (glow) {

                glow.style.transform =
                    `translate(
                        ${(x / rect.width - .5) * 20}px,
                        ${(y / rect.height - .5) * 20}px
                    ) scale(1.12)`;

            }

        });


        card.addEventListener("mouseleave", () => {

            image.style.transform =
                "translateY(8px) scale(1) rotateX(0) rotateY(0)";


            if (glow) {

                glow.style.transform =
                    "translate(0,0) scale(1)";

            }

        });

    });

})();


