'use client';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-100 text-gray-800 py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* HQ Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">{t('footer.hq')}</h3>
            <address className="not-italic text-sm space-y-2">
              <p>{t('footer.address.name')}</p>
              <p>{t('footer.address.department')}</p>
              <p>{t('footer.address.university')}</p>
              <p>{t('footer.address.street')}</p>
              <p>{t('footer.address.city')}</p>
              <p>{t('footer.address.country')}</p>
              <p>
                <a href={`tel:${t('footer.address.phone').replace(/\s/g, '')}`} className="hover:underline">
                  {t('footer.address.phone')}
                </a>
              </p>
            </address>
            <p className="mt-4 text-xs text-gray-500">
              {t('footer.disclaimer')}
            </p>
          </div>

          {/* Helpful Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">{t('footer.helpfulLinks')}</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline hover:text-blue-600">{t('footer.links.home')}</a></li>
              <li><a href="/about" className="hover:underline hover:text-blue-600">{t('footer.links.about')}</a></li>
              <li><a href="/technology" className="hover:underline hover:text-blue-600">{t('footer.links.technology')}</a></li>
              <li><a href="/publications" className="hover:underline hover:text-blue-600">{t('footer.links.publications')}</a></li>
              <li><a href="/blog" className="hover:underline hover:text-blue-600">{t('footer.links.blog')}</a></li>
              <li><a href="/contact" className="hover:underline hover:text-blue-600">{t('footer.links.contact')}</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">{t('footer.followUs')}</h3>
            <ul className="text-sm space-y-2">
              {/* <li><a href="#" className="hover:underline hover:text-blue-600">{t('footer.social.guidelines')}</a></li> */}
              <li><a href="#" className="hover:underline hover:text-blue-600">{t('footer.social.linkedin')}</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-600">{t('footer.social.youtube')}</a></li>
              <li><a href="https://www.facebook.com/nckuhitlab/" className="hover:underline hover:text-blue-600">{t('footer.social.facebook')}</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-600">{t('footer.social.twitter')}</a></li>
              <li><a href="https://www.instagram.com/nckuhitlab/" className="hover:underline hover:text-blue-600">{t('footer.social.instagram')}</a></li>
              {/* <li><a href="#" className="hover:underline hover:text-blue-600">{t('footer.social.tiktok')}</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
             <a href="/contact" className="hover:underline flex items-center gap-2">
                <span>{t('footer.findOffice')}</span>
             </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <span>{t('footer.copyright')}</span>
            <a href="#" className="hover:underline hover:text-blue-600">{t('footer.dataPrivacy')}</a>
            <a href="#" className="hover:underline hover:text-blue-600">{t('footer.cookiePolicy')}</a>
            <a href="#" className="hover:underline hover:text-blue-600">{t('footer.cookieSettings')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
