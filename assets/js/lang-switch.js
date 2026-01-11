document.addEventListener('DOMContentLoaded', () => {

  const btnRu = document.getElementById('btn-ru');
  const btnEn = document.getElementById('btn-en');
  const btnLv = document.getElementById('btn-lv');

  function setButtons(active) {
    [btnRu, btnEn, btnLv].forEach(b => b.classList.remove('active'));
    if (active === 'ru') btnRu.classList.add('active');
    if (active === 'en') btnEn.classList.add('active');
    if (active === 'lv') btnLv.classList.add('active');
  }

  function showLang(lang) {
    // все языковые блоки скрыть
    ['ru','en','lv'].forEach(l => {
      document.getElementById('content-' + l).classList.remove('active');
      document.getElementById('prod-name-' + l).classList.remove('active');
      document.getElementById('rec-' + l).classList.remove('active');
      const f1 = document.getElementById('footer-line1-' + l);
      const f2 = document.getElementById('footer-line2-' + l);
      if (f1) f1.classList.remove('active');
      if (f2) f2.classList.remove('active');
    });

    // показать выбранный язык
    document.getElementById('content-' + lang).classList.add('active');
    document.getElementById('prod-name-' + lang).classList.add('active');
    document.getElementById('rec-' + lang).classList.add('active');
    const f1 = document.getElementById('footer-line1-' + lang);
    const f2 = document.getElementById('footer-line2-' + lang);
    if (f1) f1.classList.add('active');
    if (f2) f2.classList.add('active');

    // обновить кнопку CTA
    const btn = document.getElementById('buy-btn');
    if (lang === 'ru') btn.textContent = 'Узнать стоимость';
    if (lang === 'en') btn.textContent = 'Check price';
    if (lang === 'lv') btn.textContent = 'Uzzināt cenu';
  }

  function activateLang(lang) {
    setButtons(lang);
    showLang(lang);
  }

  btnRu.addEventListener('click', () => activateLang('ru'));
  btnEn.addEventListener('click', () => activateLang('en'));
  btnLv.addEventListener('click', () => activateLang('lv'));

  // Изначальное состояние
  activateLang('ru');

});
