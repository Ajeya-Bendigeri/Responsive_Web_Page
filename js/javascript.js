'use strict';

  //  IMAGE GALLERY
(function () {
  var images = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49f3c5?w=700&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=50"
  ];

  var current = 0;
  var mainImg = document.getElementById("mainImage");
  var thumbs  = document.querySelectorAll(".gallery__thumb");

  if (!mainImg) return;

  function setImage(idx) {
    current = (idx + images.length) % images.length;
    mainImg.style.opacity = "0";
    setTimeout(function () {
      mainImg.src = images[current];
      mainImg.style.opacity = "1";
    }, 180);
    thumbs.forEach(function (t, i) {
      t.classList.toggle("active", i === current);
    });
  }

  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  if (prevBtn) prevBtn.addEventListener("click", function () { setImage(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { setImage(current + 1); });
  thumbs.forEach(function (t, i) {
    t.addEventListener("click", function () { setImage(i); });
  });
})();


  //  DESKTOP PRODUCTS DROPDOWN
  //  Single clean handler — no duplicates
(function () {
  var dropdown = document.getElementById('navDropdown');
  var btn      = document.getElementById('productsDropdownBtn');
  if (!dropdown || !btn) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();


  //  MOBILE HAMBURGER
(function () {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', function () {
    var isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });
})();


  //  MOBILE PRODUCTS SUBMENU
(function () {
  var toggle = document.getElementById('mobileProductsToggle');
  var menu   = document.getElementById('mobileProductsMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    var chevron = toggle.querySelector('.nav__chevron');
    if (chevron) {
      chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  });
})();


  //  VIEW TECHNICAL SPECS BUTTON  →  technical-specifications.html
(function () {
  var specsBtn = document.getElementById('viewSpecsBtn');
  if (!specsBtn) return;

  specsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'technical-specifications.html';
  });
})();