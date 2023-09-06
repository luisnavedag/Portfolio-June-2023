import i18next from './i18next';

// Función para cambiar el idioma
function changeLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.log('No se pudo cambiar el idioma', err);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      element.textContent = t(key);
    });
  });
}

// Agrega un event listener al botón "language-toggle" para cambiar el idioma a inglés
document.getElementById('language-toggle').addEventListener('click', () => {
  const currentLang = i18next.language;
  if (currentLang === 'es') {
    changeLanguage('en'); // Cambia a inglés
  } else {
    changeLanguage('es'); // Cambia a español
  }
});