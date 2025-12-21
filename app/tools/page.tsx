'use client';
import { useTranslation } from 'react-i18next';
import { BarChart, Activity } from 'lucide-react';

export default function Tools() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('tools.title')}</h1>
        </div>

        {/* SAM Analysis Section */}
        <section className="py-8 border-t border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <BarChart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('tools.sam.title')}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* What is it? */}
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.sam.whatIsIt.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('tools.sam.whatIsIt.content')}</p>
              </div>

              {/* When is it used? */}
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.sam.whenIsItUsed.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('tools.sam.whenIsItUsed.content')}</p>
              </div>

              {/* Data Look Like */}
              <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.sam.dataLookLike.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('tools.sam.dataLookLike.content')}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('tools.sam.howDoesItWork.title')}</h3>
              
              <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">{t('tools.sam.howDoesItWork.example.title')}</h4>
                <p className="text-sm text-blue-800">{t('tools.sam.howDoesItWork.example.description')}</p>
              </div>

              <ol className="space-y-6 relative border-l-2 border-blue-200 ml-3">
                {(t('tools.sam.howDoesItWork.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} className="ml-6 relative">
                    <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-white">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* BAPCP & PCP Analysis Section */}
        <section className="py-8 border-t border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
              <Activity className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('tools.bapcp.title')}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* What is it? */}
              <div className="prose prose-indigo max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.bapcp.whatIsIt.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('tools.bapcp.whatIsIt.content')}</p>
              </div>

              {/* When is it used? */}
              <div className="prose prose-indigo max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.bapcp.whenIsItUsed.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('tools.bapcp.whenIsItUsed.content')}</p>
              </div>

              {/* Data Look Like */}
              <div className="prose prose-indigo max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.bapcp.dataLookLike.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('tools.bapcp.dataLookLike.content')}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('tools.bapcp.howDoesItWork.title')}</h3>
              
              <div className="mb-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-900 mb-2">{t('tools.bapcp.howDoesItWork.example.title')}</h4>
                <p className="text-sm text-indigo-800">{t('tools.bapcp.howDoesItWork.example.description')}</p>
              </div>

              <ol className="space-y-6 relative border-l-2 border-indigo-200 ml-3">
                {(t('tools.bapcp.howDoesItWork.steps', { returnObjects: true }) as string[]).map((step, index) => (
                  <li key={index} className="ml-6 relative">
                    <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white ring-4 ring-white">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
