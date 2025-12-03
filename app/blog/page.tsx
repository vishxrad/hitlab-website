'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Folder, ArrowRight, Tag } from 'lucide-react';
import ArticleModal, { Article } from '@/components/ArticleModal';

export default function BlogPage() {
  const { t } = useTranslation();
  const articles = t('blog.articles', { returnObjects: true }) as Article[];
  
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          {t('blog.title')}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('blog.description')}
        </p>
      </header>

      <div className="grid gap-8">
        {Array.isArray(articles) && articles.map((article) => (
          <article 
            key={article.id}
            onClick={() => handleReadMore(article)}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col md:flex-row h-full md:h-64 cursor-pointer"
          >
            {/* Image Section - Left (or Top on mobile) */}
            <div className="w-full md:w-2/5 lg:w-1/3 relative overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold shadow-sm">
                  <Folder className="w-3 h-3" />
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <div className="flex gap-2">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600">
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="text-xs text-gray-400">+{article.tags.length - 2}</span>
                    )}
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 line-clamp-2 text-sm md:text-base leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                <button 
                  onClick={() => handleReadMore(article)}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all group-hover:text-blue-700"
                >
                  {t('blog.readMore') || 'Read Article'} 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ArticleModal 
        article={selectedArticle} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
