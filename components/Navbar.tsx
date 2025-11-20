'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          HitLab
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-500">
            About
          </Link>
          <Link href="/technology" className="text-gray-800 hover:text-blue-500">
            Technology
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
