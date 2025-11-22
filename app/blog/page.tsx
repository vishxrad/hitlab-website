'use client';
import { useTranslation } from 'react-i18next';

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('blog.title')}</h1>
        <p className="text-gray-700 max-w-2xl">
          {t('blog.description')}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            {t('blog.post1.title')}
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            {t('blog.post1.description')}
          </p>
          <p className="mt-3 text-xs text-gray-500">{t('blog.post1.meta')}</p>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            {t('blog.post2.title')}
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            {t('blog.post2.description')}
          </p>
          <p className="mt-3 text-xs text-gray-500">{t('blog.post2.meta')}</p>
        </article>
      </section>
    </main>
  );
}
