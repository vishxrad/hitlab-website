
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English resources
import enGlobal from './locales/en/global.json';
import enHome from './locales/en/home.json';

// Traditional Chinese resources
import zhTWGlobal from './locales/zh-TW/global.json';
import zhTWHome from './locales/zh-TW/home.json';

const en = {
  ...enHome,
  ...enGlobal,
};

const zhTW = {
  ...zhTWHome,
  ...zhTWGlobal,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      'zh-TW': {
        translation: zhTW,
      },
    },
  });

export default i18n;
