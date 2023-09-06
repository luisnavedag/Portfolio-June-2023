import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es', // Idioma predeterminado
    debug: true, // Modo de depuración (puedes desactivarlo en producción)
    interpolation: {
      escapeValue: false, // No escapar HTML
    },
    backend: {
      // Configura la ruta de los archivos de traducción
      loadPath: `/languages/{{lng}}/global.json` ,
    },
  });

export default i18next;