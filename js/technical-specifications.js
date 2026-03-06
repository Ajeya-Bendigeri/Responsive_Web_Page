
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".tech-specs");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";

  observer.observe(section);
});
'use strict';

  //  DOWNLOAD FULL TECHNICAL DATASHEET  →  Generates PDF
  //  Uses browser's built-in print dialog (Save as PDF)
(function () {
  var downloadBtn = document.querySelector('.download-btn');
  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', function (e) {
    e.preventDefault();

    document.body.classList.add('printing');

    window.print();

    setTimeout(function () {
      document.body.classList.remove('printing');
    }, 1000);
  });
})();