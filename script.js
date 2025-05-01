
function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}
