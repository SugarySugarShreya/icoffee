document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".footer-contact").forEach(el=>{
    if(el.dataset.contactReady) return;
    el.dataset.contactReady="true";
    el.setAttribute("aria-label","Suvia Health contact information");
  });
});
