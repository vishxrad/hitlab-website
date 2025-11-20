'use client';

import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh-TW' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        {i18n.language === 'en' ? '繁體中文' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
