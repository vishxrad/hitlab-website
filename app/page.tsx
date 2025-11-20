'use client';
import { useTranslation } from 'react-i18next';
import { MicroarrayChip, StatCard } from '@/components/MicroarrayChip';
import { Activity, Cpu, Zap, Search, Database, BarChart3, Dna } from 'lucide-react';


export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium border border-emerald-200">
              <Activity size={14} />
              <span>{t('nextGenScreening')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {t('decodeThe')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-600">
                {t('proteome')}
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              {t('highThroughputDescription')}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t('startAnalysis')} <Search size={18} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:border-gray-400 hover:bg-gray-100 transition-all">
                {t('viewDocumentation')} <Database size={18} />
              </button>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard icon={Cpu} label={t('throughput')} value="12k Spots" trend="+24%" />
              <StatCard icon={Zap} label={t('sensitivity')} value="0.5 pg/mL" trend={t('ultraLow')} />
            </div>
          </div>

          {/* Right Column: The Visual */}
          <div className="relative">
            {/* Contextual UI Elements around the chip */}
            <div className="absolute -right-12 top-10 w-24 h-24 bg-blue-100 rounded-full blur-3xl"></div>
            <div className="absolute -left-12 bottom-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl"></div>
            
            {/* The Main Chip Component */}
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-4 px-2">
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span>
                    {t('highAffinity')}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    {t('lowAffinity')}
                  </div>
                </div>
                <div className="text-xs font-mono text-blue-600 animate-pulse">
                  {t('scanning')}
                </div>
              </div>
              
              <MicroarrayChip />
              
              <div className="mt-6 flex items-center justify-between p-4 rounded-lg bg-white/50 border border-gray-200 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-gray-500" size={20} />
                  <div>
                    <div className="text-xs text-gray-500 font-mono">{t('dataIntegrity')}</div>
                    <div className="text-sm text-gray-900 font-semibold">{t('verifiedData')}</div>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-gray-200"></div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 font-mono">{t('arrayId')}</div>
                  <div className="text-sm text-gray-900 font-mono">#882-192-AB</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
