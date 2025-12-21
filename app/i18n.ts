
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English resources
import enGlobal from './locales/en/global.json';
import enHome from './locales/en/home.json';
import enTechnology from './locales/en/technology.json';
import enAbout from './locales/en/about.json';
import enPublications from './locales/en/publications.json';
import enBlog from './locales/en/blog.json';
import enContact from './locales/en/contact.json';
import enTools from './locales/en/tools.json';

// Traditional Chinese resources
import zhTWGlobal from './locales/zh-TW/global.json';
import zhTWHome from './locales/zh-TW/home.json';
import zhTWTechnology from './locales/zh-TW/technology.json';
import zhTWAbout from './locales/zh-TW/about.json';
import zhTWPublications from './locales/zh-TW/publications.json';
import zhTWBlog from './locales/zh-TW/blog.json';
import zhTWContact from './locales/zh-TW/contact.json';
import zhTWTools from './locales/zh-TW/tools.json';

const en = {
  ...enHome,
  ...enGlobal,
  technology: enTechnology,
  about: enAbout,
  publications: enPublications,
  blog: enBlog,
  contact: enContact,
  tools: enTools,
};

const zhTW = {
  ...zhTWHome,
  ...zhTWGlobal,
  technology: zhTWTechnology,
  about: zhTWAbout,
  publications: zhTWPublications,
  blog: zhTWBlog,
  contact: zhTWContact,
  tools: zhTWTools,
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
