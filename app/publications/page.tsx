'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Dna, 
  Microscope, 
  Activity, 
  Cpu, 
  Fingerprint, 
  Layers, 
  ExternalLink, 
  Search, 
  X, 
  ChevronRight, 
  Database,
  FileText,
  Filter,
  Beaker
} from 'lucide-react';

// --- Data Structure ---
const categories = [
  {
    id: 'protein-stats',
    title: 'Protein chip statistical analysis',
    titleZh: '蛋白質晶片統計分析',
    icon: <Activity className="w-5 h-5" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    papers: [
      {
        id: 'ps-1',
        title: 'BAPCP: A comprehensive and user-friendly web tool for analyzing protein chip data',
        authors: 'Yang, T. H., et al.',
        year: '2024',
        link: 'https://www.sciencedirect.com/science/article/pii/S0169260724002554'
      },
      {
        id: 'ps-2',
        title: 'Development of multiple genome-wide proteome microarrays for high-throughput screening',
        authors: 'Yang J.-Y., et al.',
        year: '2024, Dec',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0956566324011175'
      }
    ]
  },
  {
    id: 'ecoli',
    title: 'Escherichia coli proteome microarray chip',
    titleZh: '大腸桿菌蛋白體微陣列晶片',
    icon: <Dna className="w-5 h-5" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    papers: [
      { id: 'ec-1', title: 'Reverse-phase protein microarrays for monitoring antibody dynamics', authors: 'Keskin, B. B., et al.', year: '2024', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11140677/' },
      { id: 'ec-2', title: 'Profiling antibody signature of schizophrenia patients using E. coli proteome microarrays', authors: 'Chen, B.-Y., et al.', year: '2022, Nov', link: 'https://www.sciencedirect.com/science/article/pii/S0889159122003361?via%3Dihub' },
      { id: 'ec-3', title: 'Systematical Screening of Intracellular Protein Targets of an Antibiotic', authors: 'Shah P and Chen C-S*', year: '2021, Aug', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8431070/' },
      { id: 'ec-4', title: 'Identification of MltG as a Prc Protease Substrate in Escherichia coli', authors: 'Hsu P-C, et al.', year: '2020, Aug', link: 'https://doi.org/10.3389/fmicb.2020.02000' },
      { id: 'ec-5', title: 'Protein interactome analysis of the two-component system in Escherichia coli', authors: 'Hsiao FS-H, et al.', year: '2019, Sep', link: 'https://www.sciencedirect.com/science/article/pii/S187439191930257X?via%3Dihub' },
      { id: 'ec-6', title: 'Antigen Analysis of Pre-Eclamptic Plasma Antibodies Utilizing E. coli Proteome Microarray', authors: 'Te-Yao Hsu, et al.', year: '2018, Aug', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6072543/' },
      { id: 'ec-7', title: 'Antibody Profiling of Kawasaki Disease Patients with E. coli Proteome Microarrays', authors: 'Kuo HC, et al.', year: '2018, Mar', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5836372/' },
      { id: 'ec-8', title: 'High-throughput screening of sulfated proteins using E. coli proteome microarrays', authors: 'Huang B-Y, et al.', year: '2017, Mar', link: 'https://pubs.acs.org/doi/10.1021/acs.analchem.6b02853' },
      { id: 'ec-9', title: 'E. coli proteome microarrays identified specific antibodies in autoimmune diseases', authors: 'Tsai C-H, et al.', year: '2016, Nov', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5217777/' },
      { id: 'ec-10', title: 'Identification of 2-oxohistidine interacting proteins using E. coli proteome microarrays', authors: 'Lin J-M, et al.', year: '2016, Sep', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5141273/' },
      { id: 'ec-11', title: 'Systematic analysis of intracellular targeting of antibiotics', authors: 'Ho Y-H, et al.', year: '2016, Jun', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5083092/' },
      { id: 'ec-12', title: 'Systematic protein interactome analysis of the two-component system in E. coli', authors: 'Hsiao F S-H, et al.', year: '2016, Jun', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4914927/' },
      { id: 'ec-13', title: 'YcgC Represents a New Protein Deacetylase Family in Escherichia coli', authors: 'Tu S, et al.', year: '2015, Dec', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4709262/' },
      { id: 'ec-14', title: 'Antibody Profiling of Bipolar Disorder Using Escherichia coli Proteome Microarrays', authors: 'Chen PC, et al.', year: '2015, Mar', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4349973/' },
      { id: 'ec-15', title: 'Identification of bacterial factors associated with antibiotic resistance', authors: 'Chen YW, et al.', year: '2014, Jun', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4047468/' },
      { id: 'ec-16', title: 'Global identification of prokaryotic glycoproteins using a lectin microarray', authors: 'Wang ZX, et al.', year: '2012, Nov', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3492326/#s2' }
    ]
  },
  {
    id: 'yeast',
    title: 'Yeast proteome microarray chip',
    titleZh: '酵母菌蛋白體微陣列晶片',
    icon: <Microscope className="w-5 h-5" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    papers: [
      { id: 'ys-1', title: 'Active-site cysteine 215 sulfonation in yeast protein tyrosine phosphatase', authors: 'Yang, C. Y., et al.', year: '2023, Jan', link: 'https://www.sciencedirect.com/science/article/pii/S0891584922010231?via%3Dihub' },
      { id: 'ys-2', title: 'Systematic Screening of Yeast Proteins for Phosphatidylinositol Interactions', authors: 'Shah, Pramod; Chen, Chien-Sheng', year: '2022, Jan', link: 'https://www.sciencedirect.com/science/article/pii/S0891584922010231?via%3Dihub' },
      { id: 'ys-3', title: 'Systematic analysis of phosphatidylinositol-5-phosphate binding proteins', authors: 'Herianto S, et al.', year: '2021, Jan', link: 'https://pubs.acs.org/doi/10.1021/acs.analchem.0c03463' },
      { id: 'ys-4', title: 'Systematic identification of protein targets of small molecules in yeast', authors: 'Shah P and Chen C-S*', year: '2021, Jan', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7828587/' },
      { id: 'ys-5', title: 'Systematical Analysis of the Protein Targets of an Antibiotic in Yeast', authors: 'Shad P, et al.', year: '2019, Sep', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6747642/' },
      { id: 'ys-6', title: 'Profiling lipid-protein interactions using yeast proteome microarrays', authors: 'Lu KY, et al.', year: '2012, Nov', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3494200/' }
    ]
  },
  {
    id: 'human',
    title: 'Human proteome microarray chip',
    titleZh: '人類蛋白體微陣列晶片',
    icon: <Fingerprint className="w-5 h-5" />,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    papers: [
      { id: 'hm-1', title: 'Autoantibody profiling of monoamine oxidase A knockout mice', authors: 'Syu, G. D., et al.', year: '2023 Jan', link: 'https://www.sciencedirect.com/science/article/pii/S0889159122004068?via%3Dihub' },
      { id: 'hm-2', title: 'Discovery and characterization of cross-reactive intrahepatic antibodies', authors: 'R. N., et al.', year: '2023', link: 'https://www.biorxiv.org/content/10.1101/2023.02.23.529702v1' },
      { id: 'hm-3', title: 'Ectopic ATP synthase stimulates secretion of extracellular vesicles', authors: 'Ahmadi, A. R., et al.', year: '2023 Dec', link: 'https://www.airitilibrary.com/Article/Detail/10284559-200809-47-3-341-342-a' },
      { id: 'hm-4', title: 'High-Throughput Chip Assay for Investigating E. coli Interaction with Human Proteins', authors: 'Feng Y, et al.', year: '2018, Sep', link: 'https://pubs.acs.org/doi/10.1021/acs.analchem.8b02513' },
      { id: 'hm-5', title: 'Heterogeneous ribonucleoprotein K (hnRNP K) binds miR-122 to regulate hepatitis C virus', authors: 'Fan B, et al.', year: '2015', link: 'https://www.sciencedirect.com/science/article/pii/S1535947620325962?via%3Dihub' },
      { id: 'hm-6', title: 'A human proteome microarray identifies hnRNP K as a new target', authors: 'Fan B, et al.', year: '2014', link: 'https://www.sciencedirect.com/science/article/pii/S1535947620342614?via%3Dihub' }
    ]
  },
  {
    id: 'antibody',
    title: 'Antibody microarray chip',
    titleZh: '抗體微陣列晶片',
    icon: <Layers className="w-5 h-5" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    papers: [
      { id: 'ab-1', title: 'Development of a chip-based multiplexed immunoassay for rapid detection', authors: 'Su WH, et al.', year: '2013, Mar', link: 'https://www.sciencedirect.com/science/article/pii/S1028455913000065' },
      { id: 'ab-2', title: 'A fast universal immobilization of immunoglobulin G for antibody microarrays', authors: 'Guo SL, et al.', year: '2012, Dec', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3517563/' },
      { id: 'ab-3', title: 'Optimization of DNA-directed immobilization for high-performance antibody chips', authors: 'Hua WP, et al.', year: '2012, Apr', link: 'https://www.sciencedirect.com/science/article/pii/S0003269712000024' }
    ]
  },
  {
    id: 'others',
    title: 'Others',
    titleZh: '其他',
    icon: <Cpu className="w-5 h-5" />,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    papers: [
      { id: 'ot-1', title: 'Nitride-Based Microarray Biochips for High-Sensitivity Detection', authors: 'Chien F-C, et al.', year: '2018, Oct', link: 'https://pubs.acs.org/doi/10.1021/acsami.8b14962' },
      { id: 'ot-2', title: 'Combination of OipA, BabA, and SabA as candidate biomarkers for H. pylori', authors: 'Su YL, et al.', year: '2016, Nov', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5098209/' }
    ]
  }
];

// --- Components ---

const Sidebar = ({ activeCategory, onSelectCategory }: any) => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-72 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col h-auto lg:h-[calc(100vh-64px)] lg:fixed lg:left-0 lg:top-[64px] z-30 shadow-xl">
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        <div className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {t('publications.researchModules')}
        </div>
        {categories.map((cat) => {
          const isActive = activeCategory.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className={`
                w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-all duration-200 group
                ${isActive 
                  ? 'bg-cyan-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }
              `}
            >
              <div className={`${isActive ? 'text-white' : 'text-slate-400 group-hover:text-cyan-600'}`}>
                {cat.icon}
              </div>
              <div className="flex flex-col items-start text-left">
                <span>{cat.titleZh}</span>
                <span className={`text-[10px] ${isActive ? 'text-cyan-100' : 'text-slate-500 group-hover:text-slate-600'} mt-0.5 truncate max-w-[160px]`}>
                  {cat.title}
                </span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto text-cyan-100" />}
            </button>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="flex items-center gap-2 text-slate-500 text-xs">
           <Database className="w-3 h-3" />
           <span>{t('publications.databaseVersion')}</span>
        </div>
        <div className="text-slate-400 text-[10px] mt-1">
          © 2025 HTPM Research Group
        </div>
      </div>
    </div>
  );
};

const PaperCard = ({ paper, category, onSelect }: any) => {
  return (
    <div 
      onClick={() => onSelect(paper)}
      className="group bg-white rounded-lg border border-slate-200 p-5 hover:shadow-lg hover:border-cyan-300 transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden"
    >
      {/* Top Accent */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.id === 'ecoli' ? 'from-emerald-500 to-emerald-300' : 'from-blue-500 to-cyan-400'} opacity-0 group-hover:opacity-100 transition-opacity`} />

      <div className="flex justify-between items-start mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
          {paper.year}
        </span>
        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 transition-colors" />
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-cyan-700 transition-colors">
        {paper.title}
      </h3>

      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm text-slate-500">
        <Fingerprint className="w-3.5 h-3.5 mr-2" />
        <span className="truncate">{paper.authors}</span>
      </div>
    </div>
  );
};

const DetailModal = ({ paper, onClose, category }: any) => {
  const { t } = useTranslation();
  if (!paper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
           <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
             <FileText className="w-4 h-4" />
             <span>{t('publications.detailView')}</span>
           </div>
           <button 
             onClick={onClose}
             className="p-2 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
        </div>

        {/* Content */}
        <div className="p-8">
           <div className="mb-6">
             <span className={`inline-block px-3 py-1 rounded-md text-sm font-semibold mb-3 ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                {paper.year} {t('publications.published')}
             </span>
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
               {paper.title}
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="col-span-2 space-y-4">
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{t('publications.authors')}</h4>
                    <p className="text-slate-800 font-medium">{paper.authors}</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{t('publications.category')}</h4>
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                       {category.icon}
                       <span>{category.titleZh}</span>
                    </div>
                 </div>
              </div>

              <div className="col-span-1">
                 <a 
                   href={paper.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex flex-col items-center justify-center h-full p-4 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 hover:border-cyan-300 rounded-lg transition-all group text-center"
                 >
                    <ExternalLink className="w-8 h-8 text-cyan-600 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-cyan-900 font-bold">{t('publications.readFullPaper')}</span>
                    <span className="text-xs text-cyan-600 mt-1">{t('publications.opensInNewTab')}</span>
                 </a>
              </div>
           </div>

           <div className="flex justify-end pt-6 border-t border-slate-100">
              <button 
                onClick={onClose}
                className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              >
                {t('publications.close')}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function PublicationsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(categories[1]); 
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = activeCategory.papers.filter((paper: any) => 
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    paper.authors.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col lg:flex-row">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={(cat: any) => {
          setActiveCategory(cat);
          setSearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-72 transition-all duration-300">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
             <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
               {activeCategory.titleZh}
             </h1>
             <p className="text-slate-500 text-sm hidden md:block">
               {activeCategory.title}
             </p>
           </div>

           {/* Search Bar */}
           <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder={t('publications.searchPlaceholder')}
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent sm:text-sm transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
        </header>

        {/* Content Body */}
        <main className="p-6 md:p-8">
           
           {/* Stats / Breadcrumbs */}
           <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="flex items-center gap-1 hover:text-cyan-600 cursor-pointer">
                <Database className="w-3 h-3" /> {t('publications.repository')}
              </span>
              <ChevronRight className="w-3 h-3" />
              <span className="font-medium text-slate-900">
                {activeCategory.titleZh}
              </span>
              <span className="ml-auto bg-slate-200 px-2 py-0.5 rounded-full text-xs font-bold text-slate-700">
                {filteredPapers.length} {t('publications.papers')}
              </span>
           </div>

           {/* Grid */}
           {filteredPapers.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {filteredPapers.map((paper: any) => (
                 <PaperCard 
                   key={paper.id} 
                   paper={paper} 
                   category={activeCategory}
                   onSelect={setSelectedPaper}
                 />
               ))}
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center py-20 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                <Filter className="w-12 h-12 mb-3 text-slate-300" />
                <h3 className="text-lg font-medium text-slate-600">{t('publications.noPapersFound')}</h3>
                <p>{t('publications.adjustSearch')}</p>
             </div>
           )}

        </main>
      </div>

      {/* Detail Modal */}
      <DetailModal 
        paper={selectedPaper} 
        onClose={() => setSelectedPaper(null)} 
        category={activeCategory}
      />

    </div>
  );
}
