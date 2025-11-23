'use client';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  link: string;
}

export default function BlogPage() {
  const { t } = useTranslation();
  const articles = t('blog.articles', { returnObjects: true }) as Article[];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('blog.title')}</h1>
        <p className="text-gray-700 max-w-2xl">
          {t('blog.description')}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {Array.isArray(articles) && articles.map((article) => (
          <a 
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
          >
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                {t('blog.readMore')} <span aria-hidden="true" className="ml-1">&rarr;</span>
              </span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
