'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          {t('header.brand')}
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            {t('header.home')}
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            {t('header.about')}
          </Link>
          <Link href="/technology" className="text-gray-600 hover:text-blue-600">
            {t('header.technology')}
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">
            {t('header.contact')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
