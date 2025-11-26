'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import 'react-medium-image-zoom/dist/styles.css';
import ProteinArrayApp from '@/components/ProteinArrayApp';

export default function TechnologyPage() {
  const { t } = useTranslation();
  const [isChemistryOpen, setIsChemistryOpen] = useState(false);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Section 1: Hero & Concept */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t('technology.hero.title')}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('technology.hero.subtitle')}
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
          <Zoom>
            <img
              src="/why_use_microarray.png"
              alt="Microarray Schematic showing antibody detection"
              className="w-full h-auto object-contain"
            />
          </Zoom>
        </div>
      </section>

      {/* Section 2: Surface Chemistry (Accordion) */}
      <section className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-md shadow-xl overflow-hidden">
        <button
          onClick={() => setIsChemistryOpen(!isChemistryOpen)}
          className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-white/80"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('technology.surfaceChemistry.title')}
            </h2>
            <p className="mt-2 text-gray-700 max-w-3xl">
              {t('technology.surfaceChemistry.description')}
            </p>
          </div>
          {isChemistryOpen ? (
            <ChevronUp className="h-6 w-6 text-gray-500 flex-shrink-0 ml-4" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0 ml-4" />
          )}
        </button>

        {isChemistryOpen && (
          <div className="p-6 md:p-8 border-t border-gray-200/50 bg-white/40">
            <div className="max-w-4xl mx-auto">
              <Zoom>
                <img
                  src="/APTES.png"
                  alt="APTES-GA Surface Chemistry Reaction"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </Zoom>
            </div>
          </div>
        )}
      </section>

      {/* Original Content starts here */}
        <header className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-900">{t('technology.title')}</h2>
          <p className="text-gray-700 max-w-2xl">
            {t('technology.description')}
          </p>
        </header>

      {/* Section 1: Proteome Chip Platforms */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">{t('technology.platforms.title')}</h2>
          <p className="text-gray-700 max-w-3xl">
            {t('technology.platforms.description')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{t('technology.platforms.human.title')}</h3>
            <p className="text-sm text-gray-700">
              {t('technology.platforms.human.description')}
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{t('technology.platforms.focused.title')}</h3>
            <p className="text-sm text-gray-700">
              {t('technology.platforms.focused.description')}
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{t('technology.platforms.custom.title')}</h3>
            <p className="text-sm text-gray-700">
              {t('technology.platforms.custom.description')}
            </p>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{t('technology.platforms.analysis.title')}</h3>
            <p className="text-sm text-gray-700">
              {t('technology.platforms.analysis.description')}
            </p>
          </article>
        </div>

        <div className="rounded-lg border border-indigo-100 bg-indigo-50/60 p-4 text-sm text-indigo-900">
          <p className="font-medium">
            {t('technology.platforms.visualNote')}
          </p>
        </div>
      </section>

      {/* Section 2: Publications & Case Studies */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">{t('technology.publications.title')}</h2>
          <p className="text-gray-700 max-w-3xl">
            {t('technology.publications.description')}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {t('technology.publications.peerReviewed')}
            </h3>
            <ul className="mt-2 space-y-3 text-sm text-gray-800">
              <li>
                <span className="font-medium">Doe J. et al.</span> Proteome-wide profiling of
                autoantibody signatures in early-stage disease. <span className="italic">Journal
                of Translational Immunology</span>, 2024.
              </li>
              <li>
                <span className="font-medium">Chen L. et al.</span> High-throughput protein
                microarrays for rapid off-target assessment of therapeutic antibodies. <span className="italic">Biotechnology Advances</span>, 2023.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {t('technology.publications.conference')}
            </h3>
            <ul className="mt-2 space-y-3 text-sm text-gray-800">
              <li>
                <span className="font-medium">High-throughput Protein Microarray Technology and
                Biomedical Industry Service Alliance Workshop</span>, MOPM Taiwan Taipei 2025.
              </li>
              <li>
                <span className="font-medium">Antibody Therapeutic &amp; Frontiers in Biomedical
                Sciences</span> &mdash; applications of proteome-wide arrays in therapeutic
                discovery.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {t('technology.publications.caseStudies')}</h3>
            <ul className="mt-2 space-y-3 text-sm text-gray-800">
              <li>
                Early detection: identifying subtle autoantibody shifts months before clinical
                diagnosis in a longitudinal cohort.
              </li>
              <li>
                Off-target mapping: rapidly scanning candidate antibodies against thousands of
                proteins to de-risk cross-reactivity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t('applications.title')}</h2>
        <ProteinArrayApp />
      </section>
    </main>
  );
}
