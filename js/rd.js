'use strict';

(function () {
  const rows = document.querySelectorAll('.download-row');

  rows.forEach((row) => {
    const link = row.querySelector('.download-link');
    if (!link) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();

      const original = link.innerHTML;
      link.style.opacity = '0.6';
      link.style.pointerEvents = 'none';

      setTimeout(() => {
        link.style.opacity = '';
        link.style.pointerEvents = '';
      }, 1200);

      rows.forEach((r) => r.classList.remove('active'));
      row.classList.add('active');
    });
  });
})();


(function () {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  const fullName    = document.getElementById('fullName');
  const companyName = document.getElementById('companyName');
  const emailAddr   = document.getElementById('emailAddr');
  const phone       = document.getElementById('phone');

  function isEmpty(v) { return !v || !v.trim(); }
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }
  function isPhone(v) { return /^[0-9\s\-+()]{7,15}$/.test(v.trim()); }

  function setError(el, show) {
    el.classList.toggle('error', show);
  }

  function clearError(el) {
    el.addEventListener('input', () => el.classList.remove('error'), { once: true });
  }

  function validate() {
    let valid = true;

    if (isEmpty(fullName.value))    { setError(fullName, true);    clearError(fullName);    valid = false; }
    if (isEmpty(companyName.value)) { setError(companyName, true); clearError(companyName); valid = false; }
    if (!isEmail(emailAddr.value))  { setError(emailAddr, true);   clearError(emailAddr);   valid = false; }
    if (!isPhone(phone.value))      { setError(phone, true);       clearError(phone);       valid = false; }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) return;

    submitBtn.textContent = '✓ Request Sent!';
    submitBtn.classList.add('success');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Request Custom Quote';
      submitBtn.classList.remove('success');
      submitBtn.disabled = false;
      form.reset();
    }, 3000);
  });
})();


document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".footer-column a");

    links.forEach(link=>{
        link.addEventListener("mouseenter",()=>{
            link.style.transform="translateX(3px)";
        });

        link.addEventListener("mouseleave",()=>{
            link.style.transform="translateX(0px)";
        });
    });

});

'use strict';

(function () {

    //  1. TAB SWITCHING
    //  Clicking a tab reveals its matching panel, hides all others
  var tabs   = document.querySelectorAll('.tab[data-tab]');
  var panels = document.querySelectorAll('.panel[data-panel]');

  if (!tabs.length || !panels.length) return;

  function activateTab(idx) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === String(idx);
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });

    panels.forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-panel') === String(idx));
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activateTab(Number(tab.getAttribute('data-tab')));
    });
  });


    //  2. PER-PANEL IMAGE SLIDER
    //  Each panel manages its own independent current-slide index.
    //  Prev / Next buttons only affect THAT panel's slides.
  panels.forEach(function (panel) {
    var slides  = panel.querySelectorAll('.slide');
    var prevBtn = panel.querySelector('.slider-prev');
    var nextBtn = panel.querySelector('.slider-next');

    if (!slides.length) return;

    var current = 0;

    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === 0);
    });

    function goTo(newIdx) {
      slides[current].classList.remove('active');
      current = (newIdx + slides.length) % slides.length;
      slides[current].classList.add('active');
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
  });

})();