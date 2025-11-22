'use client';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('about.title')}</h1>
        <p className="text-gray-700 leading-relaxed">
          {t('about.description1')}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {t('about.description2')}
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Leadership Section with Timeline */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">{t('about.leadership.title')}</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-24">
              <div className="h-32 w-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-400 overflow-hidden mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E03AQHkF4JUFnSw3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516646447791?e=1765411200&v=beta&t=MsLJJLr6diIQA-zMXZrZWx5PV240tmO-pylC2e9yxLc"
                  alt="Dr. Chien-Sheng (Jason) Chen"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">Dr. Chien-Sheng (Jason) Chen</h3>
                <p className="text-sm text-blue-600 font-medium mt-1">{t('about.leadership.role')}</p>
                <p className="text-xs text-gray-500 mt-1">{t('about.leadership.title2')}</p>
              </div>
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p>
                  {t('about.leadership.bio')}
                </p>
                <p className="italic text-xs text-gray-400 border-t pt-3">
                  &quot;{t('about.leadership.quote')}&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Timeline / History Chart */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="relative border-l-2 border-blue-100 ml-3 md:ml-6 space-y-10 pb-4">
              
              {/* Current Roles */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-sm"></div>
                <h4 className="text-lg font-bold text-gray-900">{t('about.timeline.current')}</h4>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                    <span><strong className="font-medium">{t('about.timeline.professor')}</strong>, {t('about.timeline.dept')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                    <span><strong className="font-medium">{t('about.timeline.president')}</strong>, {t('about.timeline.society')}</span>
                  </li>
                </ul>
              </div>

              {/* Awards */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-sm"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">{t('about.timeline.awards')}</span>
                <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.recognition')}</h4>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li><span className="font-medium">2018, 2021, 2022:</span> National Innovation Award, Taiwan</li>
                  <li><span className="font-medium">2013:</span> Academia Sinica Research Award for Junior Research Investigators</li>
                </ul>
              </div>

              {/* NCU Era */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">2008 &ndash; 2017</span>
                <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.ncu')}</h4>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside text-sm">
                  {(t('about.timeline.ncuRoles', { returnObjects: true }) as string[]).map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>

              {/* Postdoc */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">2005 &ndash; 2007</span>
                <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.jhu')}</h4>
                <p className="text-gray-700 mt-1">
                  {t('about.timeline.postdoc')}
                </p>
              </div>

              {/* Education */}
              <div className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t('about.timeline.education')}</span>
                <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.academicBackground')}</h4>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">{t('about.timeline.phd')}</span> (2001&ndash;2005), Food Science and Technology, <span className="font-medium">{t('about.timeline.cornell')}</span>
                  </li>
                  <li>
                    <span className="font-medium">{t('about.timeline.ms')}</span> (1996&ndash;1998), Food Science and Technology, <span className="font-medium">{t('about.timeline.ntu')}</span>
                  </li>
                  <li>
                    <span className="font-medium">{t('about.timeline.bs')}</span> (1992&ndash;1996), Marine Food Science, <span className="font-medium">{t('about.timeline.ntou')}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      <section className="grid gap-12 md:grid-cols-2">
        {/* Bioinformatics Team */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{t('about.bioinformatics.title')}</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.bioinformatics.subtitle')}</h3>
            <p className="text-gray-700 text-sm mb-4">
              {t('about.bioinformatics.description')}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {(t('about.bioinformatics.points', { returnObjects: true }) as string[]).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        {/* Lab Photos - Medium Importance */}
        <h2 className="text-2xl font-bold text-gray-900">{t('about.facilities.title')}</h2>
        <p className="text-gray-700 max-w-3xl">
          {t('about.facilities.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
            {t('about.facilities.printer')}
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
            {t('about.facilities.scanner')}
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-gray-200">
            {t('about.facilities.bench')}
          </div>
        </div>
      </section>
    </main>
  );
}
