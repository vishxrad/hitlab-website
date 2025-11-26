'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Search, Dna, Shield, Target, ArrowUpRight, Atom, Zap, Microscope, FlaskConical, X, FileText, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProteinArrayApp = () => {
  const { t } = useTranslation();
  const [selectedApp, setSelectedApp] = useState<any>(null);

  const getStats = (key: string) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const applications = [
    {
      id: 'interactions',
      title: t('technology.applications.interactions.title'),
      icon: <Atom className="w-6 h-6" />,
      description: t('technology.applications.interactions.description'),
      stats: getStats('technology.applications.interactions.stats'),
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000',
      papers: [
        { title: 'Protein interactome analysis of the two-component system in Escherichia coli', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4914927/' },
        { title: 'Profiling lipid-protein interactions using yeast proteome microarrays', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3494200/' },
        { title: 'Systematic analysis of phosphatidylinositol-5-phosphate binding proteins', link: 'https://pubs.acs.org/doi/10.1021/acs.analchem.0c03463' },
        { title: 'Heterogeneous ribonucleoprotein K (hnRNP K) binds miR-122 to regulate hepatitis C virus', link: 'https://www.sciencedirect.com/science/article/pii/S1535947620325962?via%3Dihub' }
      ]
    },
    {
      id: 'immune',
      title: t('technology.applications.immune.title'),
      icon: <Shield className="w-6 h-6" />,
      description: t('technology.applications.immune.description'),
      stats: getStats('technology.applications.immune.stats'),
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000',
      papers: [
        { title: 'Profiling antibody signature of schizophrenia patients using E. coli proteome microarrays', link: 'https://www.sciencedirect.com/science/article/pii/S0889159122003361?via%3Dihub' },
        { title: 'Antibody Profiling of Kawasaki Disease Patients with E. coli Proteome Microarrays', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5836372/' },
        { title: 'E. coli proteome microarrays identified specific antibodies in autoimmune diseases', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5217777/' },
        { title: 'Autoantibody profiling of monoamine oxidase A knockout mice', link: 'https://www.sciencedirect.com/science/article/pii/S0889159122004068?via%3Dihub' }
      ]
    },
    {
      id: 'small-molecule',
      title: t('technology.applications.smallMolecule.title'),
      icon: <FlaskConical className="w-6 h-6" />,
      description: t('technology.applications.smallMolecule.description'),
      stats: getStats('technology.applications.smallMolecule.stats'),
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000',
      papers: [
        { title: 'Systematical Screening of Intracellular Protein Targets of an Antibiotic', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8431070/' },
        { title: 'Systematic identification of protein targets of small molecules in yeast', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7828587/' },
        { title: 'Systematical Analysis of the Protein Targets of an Antibiotic in Yeast', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6747642/' }
      ]
    },
    {
      id: 'cellular',
      title: t('technology.applications.cellular.title'),
      icon: <Microscope className="w-6 h-6" />,
      description: t('technology.applications.cellular.description'),
      stats: getStats('technology.applications.cellular.stats'),
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000',
      papers: [
        { title: 'High-Throughput Chip Assay for Investigating E. coli Interaction with Human Proteins', link: 'https://pubs.acs.org/doi/10.1021/acs.analchem.8b02513' },
        { title: 'Ectopic ATP synthase stimulates secretion of extracellular vesicles', link: 'https://www.airitilibrary.com/Article/Detail/10284559-200809-47-3-341-342-a' },
        { title: 'Combination of OipA, BabA, and SabA as candidate biomarkers for H. pylori', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5098209/' }
      ]
    },
    {
      id: 'enzymatic',
      title: t('technology.applications.enzymatic.title'),
      icon: <Zap className="w-6 h-6" />,
      description: t('technology.applications.enzymatic.description'),
      stats: getStats('technology.applications.enzymatic.stats'),
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
      papers: [
        { title: 'High-throughput screening of sulfated proteins using E. coli proteome microarrays', link: 'https://pubs.acs.org/doi/10.1021/acs.analchem.6b02853' },
        { title: 'Active-site cysteine 215 sulfonation in yeast protein tyrosine phosphatase', link: 'https://www.sciencedirect.com/science/article/pii/S0891584922010231?via%3Dihub' },
        { title: 'YcgC Represents a New Protein Deacetylase Family in Escherichia coli', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4709262/' }
      ]
    }
  ];

  return (
    <div className="w-full font-sans my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {applications.map((app, index) => (
          <motion.div
            key={app.id}
            onClick={() => setSelectedApp(app)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${
              index === 0 ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20 shadow-inner">
                    {app.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{app.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {app.description}
                </p>

                {/* Stats / Tags */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {app.stats.map((stat, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-white bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Papers Modal */}
      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedApp(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[80vh] flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {selectedApp.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedApp.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('technology.applications.modal.keyPublications')}</h4>
                <div className="space-y-3">
                  {selectedApp.papers.map((paper: any, i: number) => (
                    <a 
                      key={i}
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                    >
                      <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                          {paper.title}
                        </h5>
                        <div className="flex items-center gap-2 mt-2 text-sm text-blue-600 font-medium">
                          {t('technology.applications.modal.readPaper')} <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProteinArrayApp;