import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

export const SUPPORTED_LANGUAGES = [
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
];

const STORAGE_KEY = 'image-slider-language';
const DEFAULT_LANGUAGE = 'pt';

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.some(({ code }) => code === saved)) return saved;
  } catch {
    // localStorage pode estar indisponível (ex.: modo privado)
  }
  const browserLanguage = (navigator.language || DEFAULT_LANGUAGE).slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.some(({ code }) => code === browserLanguage)
    ? browserLanguage
    : DEFAULT_LANGUAGE;
}

function applyDocumentLanguage(lng) {
  document.documentElement.lang = lng;
}

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    es: { translation: es },
    en: { translation: en },
  },
  lng: detectLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

applyDocumentLanguage(i18n.resolvedLanguage || DEFAULT_LANGUAGE);
i18n.on('languageChanged', applyDocumentLanguage);

export async function changeLanguage(lng) {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // Se não for possível persistir, o idioma continua válido só nesta sessão
  }
  await i18n.changeLanguage(lng);
}

export default i18n;
