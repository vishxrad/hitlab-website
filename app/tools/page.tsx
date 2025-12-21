'use client';
import { useTranslation } from 'react-i18next';
import { BarChart, Database, Activity, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Tools() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t('tools.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Explore our suite of powerful analysis tools designed for high-throughput protein microarray data.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-24 space-y-24 relative z-10">
        
        {/* BAPCP Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 lg:p-12">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-xl text-green-600">
                  <Database className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{t('tools.bapcp.title')}</h2>
              </div>
              
              <div className="space-y-8 w-full text-left">
                <div className="prose prose-lg prose-green max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.bapcp.whatIsIt.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.bapcp.whatIsIt.content')}</p>
                </div>

                <div className="prose prose-lg prose-green max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.bapcp.capabilities.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.bapcp.capabilities.content')}</p>
                </div>

                <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    {t('tools.bapcp.workflow.title')}
                  </h3>
                  <ol className="space-y-4 relative border-l-2 border-green-200 ml-3">
                    {(t('tools.bapcp.workflow.steps', { returnObjects: true }) as string[]).map((step, index) => (
                      <li key={index} className="ml-6 relative">
                        <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white ring-4 ring-white">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex justify-center pt-6">
                  <a 
                    href="https://cosbi.ee.ncku.edu.tw/bapcp/home/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {t('tools.launchTool')}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PCP Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 lg:p-12">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                  <Activity className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{t('tools.pcp.title')}</h2>
              </div>
              
              <div className="space-y-8 w-full text-left">
                <div className="prose prose-lg prose-purple max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.pcp.whatIsIt.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.pcp.whatIsIt.content')}</p>
                </div>

                <div className="prose prose-lg prose-purple max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.pcp.capabilities.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.pcp.capabilities.content')}</p>
                </div>

                <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    {t('tools.pcp.workflow.title')}
                  </h3>
                  <ol className="space-y-4 relative border-l-2 border-purple-200 ml-3">
                    {(t('tools.pcp.workflow.steps', { returnObjects: true }) as string[]).map((step, index) => (
                      <li key={index} className="ml-6 relative">
                        <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white ring-4 ring-white">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex justify-center pt-6">
                  <a 
                    href="https://cosbi.ee.ncku.edu.tw/PCP/pcp_v2/pcp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {t('tools.launchTool')}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SAM Analysis Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  <BarChart className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{t('tools.sam.title')}</h2>
              </div>
              
              <div className="space-y-8">
                <div className="prose prose-lg prose-blue max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.sam.whatIsIt.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.sam.whatIsIt.content')}</p>
                </div>

                <div className="prose prose-lg prose-blue max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.sam.whenIsItUsed.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.sam.whenIsItUsed.content')}</p>
                </div>

                <div className="prose prose-lg prose-blue max-w-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tools.sam.dataLookLike.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('tools.sam.dataLookLike.content')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 border-l border-gray-200">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('tools.sam.howDoesItWork.title')}</h3>
                
                <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">{t('tools.sam.howDoesItWork.example.title')}</h4>
                  <p className="text-sm text-blue-800">{t('tools.sam.howDoesItWork.example.description')}</p>
                </div>

                <ol className="space-y-8 relative border-l-2 border-blue-200 ml-3">
                  {(t('tools.sam.howDoesItWork.steps', { returnObjects: true }) as string[]).map((step, index) => (
                    <li key={index} className="ml-8 relative">
                      <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white ring-4 ring-white shadow-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
