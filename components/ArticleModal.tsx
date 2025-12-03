'use client';

import { X, Calendar, Tag, Folder } from 'lucide-react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: string;
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image */}
        <div className="relative h-48 sm:h-64 w-full shrink-0">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-4 sm:left-6 right-4 text-white">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-2 opacity-90">
              <span className="flex items-center gap-1 bg-blue-600/80 px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm">
                <Folder className="w-3 h-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight shadow-black/50 drop-shadow-md">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="mb-4" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 my-4" {...props} />,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Tags Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm hover:bg-gray-200 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
