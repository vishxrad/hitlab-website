'use client';
import { useTranslation, Trans } from 'react-i18next';
import { MicroarrayChip } from '@/components/MicroarrayChip';
import ProteinArrayApp from '@/components/ProteinArrayApp';
import { 
  CheckCircle2, 
  Activity, 
  Bug, 
  Microscope, 
  Fingerprint, 
  Layers 
} from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="space-y-8">
              <h1
                className={`font-bold tracking-tight text-gray-900 leading-tight ${
                  i18n.language === 'zh-TW'
                    ? 'text-5xl md:text-7xl'
                    : 'text-4xl md:text-6xl'
                }`}
              >
                <Trans
                  t={t}
                  i18nKey="hero.title"
                  components={{
                    highlight: <span className="text-blue-600 font-extrabold" />,
                  }}
                />
              </h1>
              
              <p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Right Column: The Visual */}
            <div className="relative">
              {/* Contextual UI Elements around the chip */}
              <div className="absolute -right-12 top-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl"></div>
              <div className="absolute -left-12 bottom-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl"></div>
              
              {/* The Main Chip Component */}
              <div className="relative z-10 mt-2 transform hover:scale-[1.02] transition-transform duration-500">
                <MicroarrayChip />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Join Us / CTA Section */}
        <div className="mt-8 mb-16 relative overflow-hidden rounded-3xl bg-blue-900 px-6 py-12 shadow-2xl sm:px-16 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#3556e9ff" />
              </radialGradient>
            </defs>
          </svg>
          <div className="relative z-10 mx-auto max-w-7xl lg:mx-0 lg:flex lg:w-full lg:items-center lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('cta.title')}
                <br />
                {t('cta.subtitle')}
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                {t('cta.description')}
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 lg:mt-0 lg:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                {t('cta.getInTouch')}
              </Link>
              <Link href="/about" className="text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors">
                {t('cta.learnMore')} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mt-24 mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t('applications.title')}</h2>
          <ProteinArrayApp />
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
