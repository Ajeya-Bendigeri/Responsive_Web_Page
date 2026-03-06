'use strict';

(function () {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  const items = faqList.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const btn = item.querySelector('.faq-question');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();


(function () {
  const btn   = document.getElementById('catalogueBtn');
  const input = document.querySelector('.catalogue-input');
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const email = input.value.trim();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      input.style.borderColor = '#ef4444';
      input.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.15)';
      input.focus();

      setTimeout(() => {
        input.style.borderColor = '';
        input.style.boxShadow   = '';
      }, 1800);
      return;
    }

    btn.textContent = '✓ Sent!';
    btn.classList.add('success');
    btn.disabled = true;
    input.value  = '';
    input.style.borderColor = '#16a34a';
    input.style.boxShadow   = '0 0 0 3px rgba(22,163,74,0.12)';

    setTimeout(() => {
      btn.textContent = 'Request Catalogue';
      btn.classList.remove('success');
      btn.disabled = false;
      input.style.borderColor = '';
      input.style.boxShadow   = '';
    }, 3000);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btn.click();
  });
})();