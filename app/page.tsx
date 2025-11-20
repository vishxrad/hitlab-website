'use client';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://placehold.co/1600x800/2d3748/ffffff')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {t('pioneeringTheFuture')}
            <strong className="mt-2 block font-extrabold text-blue-400">
              {t('biotechnology')}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            {t('teamOfScientists')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/technology"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              {t('ourTechnology')}
            </a>

            <a
              href="/about"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              {t('learnMore')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
