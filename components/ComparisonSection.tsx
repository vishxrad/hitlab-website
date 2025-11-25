'use client';
import React from 'react';
import { Microscope, Droplet, Zap, Search, Layers } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const ComparisonSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: t('comparison.features.throughput.title'),
      elisa: t('comparison.features.throughput.elisa'),
      elisaDesc: t('comparison.features.throughput.elisaDesc'),
      paa: t('comparison.features.throughput.paa'),
      paaDesc: t('comparison.features.throughput.paaDesc'),
      winner: "right"
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: t('comparison.features.sampleVolume.title'),
      elisa: t('comparison.features.sampleVolume.elisa'),
      elisaDesc: t('comparison.features.sampleVolume.elisaDesc'),
      paa: t('comparison.features.sampleVolume.paa'),
      paaDesc: t('comparison.features.sampleVolume.paaDesc'),
      winner: "right"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t('comparison.features.researchGoal.title'),
      elisa: t('comparison.features.researchGoal.elisa'),
      elisaDesc: t('comparison.features.researchGoal.elisaDesc'),
      paa: t('comparison.features.researchGoal.paa'),
      paaDesc: t('comparison.features.researchGoal.paaDesc'),
      winner: "right"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('comparison.features.efficiency.title'),
      elisa: t('comparison.features.efficiency.elisa'),
      elisaDesc: t('comparison.features.efficiency.elisaDesc'),
      paa: t('comparison.features.efficiency.paa'),
      paaDesc: t('comparison.features.efficiency.paaDesc'),
      winner: "right"
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Header Section */}
            <div className="p-8 md:p-12 text-center border-b border-slate-100 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('comparison.newTitle')}
                </h2>
                <div className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
                <Trans
                    t={t}
                    i18nKey="comparison.newSubtitle"
                    components={{
                    highlight: <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-lg" />,
                    }}
                />
                </div>
            </div>

            {/* Comparison Content */}
            <div className="p-6 md:p-10 bg-slate-50/30">
                {/* Header Row (Hidden on mobile, visible on desktop) */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-6 text-sm font-bold text-slate-400 uppercase tracking-wider px-6">
                    <div className="col-span-4 text-center">{t('comparison.tableHeader.elisa')}</div>
                    <div className="col-span-4 text-center">{t('comparison.tableHeader.comparison')}</div>
                    <div className="col-span-4 text-center text-blue-600">{t('comparison.tableHeader.paa')}</div>
                </div>

                <div className="space-y-4">
                    {features.map((item, index) => (
                        <div 
                        key={index} 
                        className="relative group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                        >
                        
                        {/* Left Side: ELISA (Muted) */}
                        <div className="md:col-span-4 md:text-right flex flex-col md:items-end items-center text-center md:text-right order-2 md:order-1 opacity-60 group-hover:opacity-100 transition-opacity">
                            <h4 className="text-lg font-bold text-gray-700">{item.elisa}</h4>
                            <p className="text-sm text-gray-500 mt-1">{item.elisaDesc}</p>
                        </div>

                        {/* Center: Icon/Feature Label */}
                        <div className="md:col-span-4 flex flex-col items-center justify-center order-1 md:order-2">
                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">{item.title}</span>
                        </div>

                        {/* Right Side: PAA (Highlighted) */}
                        <div className="md:col-span-4 flex flex-col md:items-start items-center text-center md:text-left order-3">
                            <h4 className="text-lg font-bold text-blue-700">{item.paa}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.paaDesc}</p>
                        </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
