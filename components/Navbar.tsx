'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/image.png" alt="HitLab Logo" className="h-12 w-auto" />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/technology" className="text-gray-600 hover:text-blue-600">
            {t('header.technology')}
          </Link>
          <Link href="/tools" className="text-gray-600 hover:text-blue-600">
            {t('header.dataAnalysisTools')}
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            {t('header.aboutUs')}
          </Link>
          <Link href="/publications" className="text-gray-600 hover:text-blue-600">
            {t('header.publications')}
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600">
            {t('header.blog')}
          </Link>
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition"
          >
            {t('header.contactUs')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
