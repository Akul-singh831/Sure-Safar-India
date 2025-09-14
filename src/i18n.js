import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import pa from './locales/pa/translation.json';
import te from './locales/te/translation.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  pa: {
    translation: pa,
  },
  te: {
    translation: te,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;