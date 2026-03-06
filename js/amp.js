'use strict';

(function () {
  const tabs   = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = tab.dataset.tab;

      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach((p) => p.classList.remove('active'));
      const target = document.querySelector(`.panel[data-panel="${idx}"]`);
      if (target) target.classList.add('active');
    });
  });
})();


'use strict';

  //  SECTION 1 — TAB SWITCHING
(function () {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const cards   = document.querySelectorAll('.process-card');

  if (!tabBtns.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tab = btn.dataset.tab;

      // Update active tab button
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Show matching card, hide others
      cards.forEach(function (card) {
        card.classList.toggle('active', card.dataset.tab === tab);
      });
    });
  });
})();


  //  SECTION 1 — IMAGE NAV (prev / next arrows per card)
(function () {
  const cardImages = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
    'https://images.unsplash.com/photo-1565008576549-57569a49f3c5?w=400&q=80'
  ];

  document.querySelectorAll('.process-card').forEach(function (card) {
    var imgIdx = 0;
    var img    = card.querySelector('img');

    function switchImage(newIdx) {
      imgIdx = (newIdx + cardImages.length) % cardImages.length;
      img.style.opacity = '0';
      setTimeout(function () {
        img.src           = cardImages[imgIdx];
        img.style.opacity = '1';
      }, 150);
    }

    card.querySelector('.img-nav.prev').addEventListener('click', function () {
      switchImage(imgIdx - 1);
    });

    card.querySelector('.img-nav.next').addEventListener('click', function () {
      switchImage(imgIdx + 1);
    });
  });
})();

(function () {
  document.querySelectorAll('.img-slider').forEach((slider) => {
    const slides  = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    let current = 0;

    function goTo(idx) {
      slides[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
    }

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });
  });
})();


(function () {
  const carousel = document.getElementById('testiCarousel');
  if (!carousel) return;

  let isDown    = false;
  let startX    = 0;
  let scrollLeft = 0;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('grabbing');
    startX     = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => { isDown = false; carousel.classList.remove('grabbing'); });
  carousel.addEventListener('mouseup',    () => { isDown = false; carousel.classList.remove('grabbing'); });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  let touchStartX     = 0;
  let touchScrollLeft = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX     = e.touches[0].pageX;
    touchScrollLeft = carousel.scrollLeft;
  }, { passive: true });

  carousel.addEventListener('touchmove', (e) => {
    const dx = touchStartX - e.touches[0].pageX;
    carousel.scrollLeft = touchScrollLeft + dx;
  }, { passive: true });
})();


(function () {
  const featured = document.querySelector('.product-card--featured');
  if (!featured) return;

  featured.addEventListener('mouseenter', () => {
    featured.style.borderColor = '#f59e0b';
  });

  featured.addEventListener('mouseleave', () => {
    featured.style.borderColor = '#f59e0b';
  });
})();