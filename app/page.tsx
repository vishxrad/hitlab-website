'use client';
import { useTranslation } from 'react-i18next';
import { MicroarrayChip } from '@/components/MicroarrayChip';
import { CheckCircle2 } from 'lucide-react';


export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-500/30">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <h1
              className={`font-extrabold tracking-tight text-gray-900 leading-tight ${
                i18n.language === 'zh-TW'
                  ? 'text-5xl md:text-7xl'
                  : 'text-4xl md:text-6xl'
              }`}
            >
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Right Column: The Visual */}
          <div className="relative">
            {/* Contextual UI Elements around the chip */}
            <div className="absolute -right-12 top-10 w-24 h-24 bg-indigo-100 rounded-full blur-3xl"></div>
            <div className="absolute -left-12 bottom-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl"></div>
            
            {/* The Main Chip Component */}
            <div className="relative z-10 mt-2">
              <MicroarrayChip />
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900">{t('comparison.title')}</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Protein Microarray */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{t('comparison.proteinMicroarray.title')}</h3>
              <ul className="mt-4 space-y-3">
                {(t('comparison.proteinMicroarray.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* ELISA */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{t('comparison.elisa.title')}</h3>
              <ul className="mt-4 space-y-3">
                {(t('comparison.elisa.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
