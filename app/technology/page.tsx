'use client';
import { useTranslation } from 'react-i18next';

export default function TechnologyPage() {
  const { t } = useTranslation();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Page header */}
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('technology.title')}</h1>
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
    </main>
  );
}
