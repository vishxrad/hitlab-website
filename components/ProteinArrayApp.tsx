'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Activity, Search, Dna, Shield, Target } from 'lucide-react';

const ProteinArrayApp = () => {
  const [activeId, setActiveId] = useState<string>('diagnostics');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const applications = [
    {
      id: 'diagnostics',
      title: 'Clinical Diagnostics',
      icon: <Activity className="w-6 h-6" />,
      description: 'Detecting specific biomarkers in patient blood samples to identify diseases like cancer or autoimmune disorders at an early stage.',
      stats: ['High Sensitivity', 'Multiplex Detection', 'Low Sample Volume'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'drug-discovery',
      title: 'Drug Discovery',
      icon: <Search className="w-6 h-6" />,
      description: 'Screening thousands of compounds simultaneously to see how they interact with specific proteins, accelerating the identification of lead drug candidates.',
      stats: ['Target Identification', 'Off-Target Screening', 'Binding Kinetics'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'functional',
      title: 'Functional Analysis',
      icon: <Dna className="w-6 h-6" />,
      description: 'Understanding protein-protein, protein-DNA, and protein-lipid interactions to decode complex biological pathways and cellular functions.',
      stats: ['Pathway Mapping', 'Enzyme Activity', 'Substrate ID'],
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'antibody',
      title: 'Antibody Profiling',
      icon: <Shield className="w-6 h-6" />,
      description: 'Mapping the immune response by identifying which antibodies are present in a serum, crucial for vaccine development and allergy testing.',
      stats: ['Immune Monitoring', 'Vaccine Efficacy', 'Allergy Profiling'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'personalized',
      title: 'Personalized Medicine',
      icon: <Target className="w-6 h-6" />,
      description: 'Tailoring treatments to individual protein profiles, ensuring patients receive the therapy most likely to work for their specific biological makeup.',
      stats: ['Tailored Therapy', 'Biomarker Stratification', 'Precision Care'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  // Auto-rotate through applications if user hasn't interacted recently
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveId(current => {
        const idx = applications.findIndex(app => app.id === current);
        const nextIdx = (idx + 1) % applications.length;
        return applications[nextIdx].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeApp = applications.find(app => app.id === activeId) || applications[0];



  return (
    <div className="w-full font-sans my-12">
      
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-8 mb-12 border-b border-slate-200 pb-1">
        {applications.map((app) => (
          <button
            key={app.id}
            onClick={() => { setActiveId(app.id); setIsAutoPlaying(false); }}
            className={`
              pb-4 text-sm font-medium transition-all duration-300 relative
              ${activeId === app.id ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}
            `}
          >
            {app.title}
            {activeId === app.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500" key={`${activeApp.id}-text`}>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {activeApp.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {activeApp.description}
            </p>
          </div>

          <ul className="space-y-4">
            {activeApp.stats.map((stat, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <span className="text-slate-700 font-medium">{stat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image Visualization */}
        <div className="relative flex items-center justify-center h-[400px] w-full bg-blue-50 rounded-2xl border border-blue-100 overflow-hidden animate-in fade-in zoom-in-95 duration-500" key={`${activeApp.id}-visual`}>
           <img 
             src={activeApp.image} 
             alt={activeApp.title}
             className="w-full h-full object-cover"
           />
           {/* Subtle Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        </div>

      </div>
    </div>
  );
};

export default ProteinArrayApp;