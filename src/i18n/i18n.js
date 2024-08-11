import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './en.json';
import hin from './hin.json';
import fr from './fr.json';

// Initialize i18next
i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      hin: {
        translation: hin
      },
      fr: {
        translation: fr
      }
    },
    fallbackLng: 'en', // Default language if the user's language is not available
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
