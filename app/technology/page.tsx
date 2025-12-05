'use client';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import { Dna, Layers, TestTube2, Microscope, CircleDashed, Bug } from 'lucide-react';
import 'react-medium-image-zoom/dist/styles.css';
import ProteinArrayApp from '@/components/ProteinArrayApp';
import MicroarrayResultsSection from '@/components/MicroarrayResultsSection';

export default function TechnologyPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Section: Results (Data Visualization) */}
        <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <MicroarrayResultsSection />
        </div>

        {/* Section 1: Hero & Concept */}
        <section className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Core Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {t('technology.hero.title')}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-blue-200 pl-6">
                {t('technology.hero.subtitle')}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2 transform transition-transform hover:scale-[1.02] duration-500">
              <Zoom>
                <img
                  src="/why_use_microarray.png"
                  alt="Microarray Schematic"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </Zoom>
            </div>
        </section>

        {/* Section 2: Surface Chemistry (Dark Mode Feature) */}
        <section className="w-full py-20 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl relative">
           {/* Background effects */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
           
           <div className="px-8 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left: Image */}
            <div className="relative order-2 lg:order-1">
               <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full opacity-75"></div>
               <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                <Zoom>
                  <img
                    src="/APTES.png"
                    alt="APTES-GA Surface Chemistry Reaction"
                    className="w-full h-auto"
                  />
                </Zoom>
               </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
                {t('technology.surfaceChemistry.title')}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {t('technology.surfaceChemistry.description')}
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800 rounded-lg border-l-4 border-blue-500 shadow-lg">
                  <h4 className="font-bold text-lg text-white">{t('technology.surfaceChemistry.highEfficiency.title')}</h4>
                  <p className="text-sm text-slate-400 mt-1">{t('technology.surfaceChemistry.highEfficiency.description')}</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border-l-4 border-emerald-500 shadow-lg">
                  <h4 className="font-bold text-lg text-white">{t('technology.surfaceChemistry.lowNoise.title')}</h4>
                  <p className="text-sm text-slate-400 mt-1">{t('technology.surfaceChemistry.lowNoise.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Workflow Steps */}
        <section className="rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-b from-blue-50/50 to-transparent p-10 md:p-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('technology.workflow.title')}</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-4 relative">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 -z-10" />

              {/* Step 1 */}
              <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-md">
                <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Dna className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('technology.workflow.steps.immobilization.title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t('technology.workflow.steps.immobilization.description')}</p>
              </div>

              {/* Step 2 */}
              <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-md">
                <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Layers className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('technology.workflow.steps.blocking.title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t('technology.workflow.steps.blocking.description')}</p>
              </div>

              {/* Step 3 */}
              <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-md">
                <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <TestTube2 className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('technology.workflow.steps.incubation.title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t('technology.workflow.steps.incubation.description')}</p>
              </div>

              {/* Step 4 */}
              <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-md">
                <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Microscope className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{t('technology.workflow.steps.analysis.title')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t('technology.workflow.steps.analysis.description')}</p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden border border-gray-200 bg-white p-8 shadow-inner">
              <p className="text-sm font-bold text-gray-400 mb-6 text-center uppercase tracking-widest">
                {t('technology.workflow.diagramLabel')}
              </p>
              <Zoom>
                <img
                  src="/process.png"
                  alt="Full Chip Assay Process"
                  className="w-full h-auto object-contain max-h-[500px] mx-auto hover:opacity-95 transition-opacity"
                />
              </Zoom>
            </div>
          </div>
        </section>



        {/* Section 5: Chip Portfolio */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('technology.portfolio.title')}</h2>
            <p className="text-xl text-gray-600">{t('technology.portfolio.description')}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Human Proteome */}
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <Dna className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{t('technology.portfolio.human.title')}</h3>
                <div className="mb-4 text-3xl font-extrabold text-blue-600 tracking-tight">{t('technology.portfolio.human.count')}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">{t('technology.portfolio.human.description')}</p>
                <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-700/10">
                  {t('technology.portfolio.human.provider')}
                </div>
              </div>
            </div>

            {/* Yeast Proteome */}
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-amber-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-200">
                  <CircleDashed className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{t('technology.portfolio.yeast.title')}</h3>
                <div className="mb-4 text-3xl font-extrabold text-amber-600 tracking-tight">{t('technology.portfolio.yeast.count')}</div>
                <p className="text-gray-600 leading-relaxed">{t('technology.portfolio.yeast.description')}</p>
              </div>
            </div>

            {/* E. coli Proteome */}
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-emerald-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200">
                  <Bug className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{t('technology.portfolio.ecoli.title')}</h3>
                <div className="mb-4 text-3xl font-extrabold text-emerald-600 tracking-tight">{t('technology.portfolio.ecoli.count')}</div>
                <p className="text-gray-600 leading-relaxed">{t('technology.portfolio.ecoli.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="space-y-16 py-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {t('technology.applications.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('technology.applications.description')}
            </p>
          </div>
          <ProteinArrayApp />
        </section>
      </div>
    </main>
  );
}
