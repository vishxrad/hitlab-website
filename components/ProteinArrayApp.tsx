'use client';
import React, { useState, useEffect } from 'react';
import { Target, Search, Activity, Shield, Dna, Zap, ChevronRight, Share2, Grid3x3 } from 'lucide-react';

const ProteinArrayApp = () => {
  const [activeId, setActiveId] = useState<string>('diagnostics');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const applications = [
    {
      id: 'diagnostics',
      title: 'Clinical Diagnostics',
      icon: <Activity className="w-6 h-6" />,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
      border: 'border-emerald-200',
      description: 'Detecting specific biomarkers in patient blood samples to identify diseases like cancer or autoimmune disorders at an early stage.',
      stats: ['High Sensitivity', 'Multiplex Detection', 'Low Sample Volume'],
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' // Top Center
    },
    {
      id: 'drug-discovery',
      title: 'Drug Discovery',
      icon: <Search className="w-6 h-6" />,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      border: 'border-blue-200',
      description: 'Screening thousands of compounds simultaneously to see how they interact with specific proteins, accelerating the identification of lead drug candidates.',
      stats: ['Target Identification', 'Off-Target Screening', 'Binding Kinetics'],
      position: 'top-[30%] right-0 translate-x-1/2' // Top Right
    },
    {
      id: 'functional',
      title: 'Functional Analysis',
      icon: <Dna className="w-6 h-6" />,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      border: 'border-purple-200',
      description: 'Understanding protein-protein, protein-DNA, and protein-lipid interactions to decode complex biological pathways and cellular functions.',
      stats: ['Pathway Mapping', 'Enzyme Activity', 'Substrate ID'],
      position: 'bottom-[30%] right-0 translate-x-1/2' // Bottom Right
    },
    {
      id: 'antibody',
      title: 'Antibody Profiling',
      icon: <Shield className="w-6 h-6" />,
      color: 'text-rose-600',
      bg: 'bg-rose-100',
      border: 'border-rose-200',
      description: 'Mapping the immune response by identifying which antibodies are present in a serum, crucial for vaccine development and allergy testing.',
      stats: ['Immune Monitoring', 'Vaccine Efficacy', 'Allergy Profiling'],
      position: 'bottom-[30%] left-0 -translate-x-1/2' // Bottom Left
    },
    {
      id: 'personalized',
      title: 'Personalized Medicine',
      icon: <Target className="w-6 h-6" />,
      color: 'text-amber-600',
      bg: 'bg-amber-100',
      border: 'border-amber-200',
      description: 'Tailoring treatments to individual protein profiles, ensuring patients receive the therapy most likely to work for their specific biological makeup.',
      stats: ['Tailored Therapy', 'Biomarker Stratification', 'Precision Care'],
      position: 'top-[30%] left-0 -translate-x-1/2' // Top Left
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
    <div className="w-full bg-white text-slate-900 font-sans overflow-hidden flex flex-col lg:flex-row rounded-3xl border border-slate-200 shadow-xl my-12 relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      {/* LEFT SIDE: The Network Visualization */}
      <div className="w-full lg:w-1/2 h-[500px] relative flex items-center justify-center p-8 lg:p-12 bg-slate-50/50">
        
        {/* Central Hub */}
        <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center border-4 border-slate-100 animate-pulse-slow">
          <Grid3x3 className="w-10 h-10 text-slate-700 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Protein</span>
          <span className="text-xs font-bold text-slate-800">Array</span>
          
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-slate-200 scale-150 opacity-50" />
          <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 scale-[2.5] opacity-30 animate-[spin_60s_linear_infinite]" />
        </div>

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {applications.map((app, index) => {
            // Calculate positions based on a circle
            const angle = (index * (360 / applications.length) - 90) * (Math.PI / 180);
            const radius = 160; // Distance from center
            const x = 50 + (Math.cos(angle) * 35); // % coordinates roughly
            const y = 50 + (Math.sin(angle) * 35);
            
            const isActive = activeId === app.id;

            return (
              <g key={app.id}>
                <line 
                  x1="50%" y1="50%" x2={`${x}%`} y2={`${y}%`} 
                  stroke={isActive ? "currentColor" : "#e2e8f0"}
                  strokeWidth={isActive ? "2" : "1"}
                  className={`transition-all duration-500 ${isActive ? app.color : 'text-slate-200'}`}
                />
                {isActive && (
                  <circle cx={`${x}%`} cy={`${y}%`} r="4" className={`${app.color} fill-current animate-ping opacity-20`} />
                )}
              </g>
            );
          })}
        </svg>

        {/* Satellite Nodes */}
        <div className="absolute inset-0 w-full h-full">
          {applications.map((app, index) => {
            const angle = (index * (360 / applications.length) - 90) * (Math.PI / 180);
            const radius = 160; // px
            // We use inline styles for precise circular positioning
            const style = {
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              transform: 'translate(-50%, -50%)'
            };

            const isActive = activeId === app.id;

            return (
              <button
                key={app.id}
                onClick={() => { setActiveId(app.id); setIsAutoPlaying(false); }}
                onMouseEnter={() => { setActiveId(app.id); setIsAutoPlaying(false); }}
                style={style}
                className={`
                  absolute z-20 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                  border-2 shadow-lg group
                  ${isActive 
                    ? `${app.bg} ${app.border} scale-110 shadow-xl` 
                    : 'bg-white border-slate-100 hover:scale-105 hover:border-slate-300'
                  }
                `}
              >
                <div className={`transition-colors duration-300 ${isActive ? app.color : 'text-slate-400 group-hover:text-slate-600'}`}>
                  {app.icon}
                </div>
                
                {/* Label for non-active items (optional, maybe too cluttered) */}
                {!isActive && (
                  <div className="absolute top-full mt-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {app.title}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE: Content Panel */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white relative z-10">
        <div className="transition-all duration-500 ease-in-out" key={activeApp.id}>
          
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${activeApp.bg} ${activeApp.color}`}>
              Application 0{applications.findIndex(a => a.id === activeApp.id) + 1}
            </span>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          <h2 className={`text-3xl lg:text-4xl font-bold text-slate-900 mb-4`}>
            {activeApp.title}
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {activeApp.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {activeApp.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Zap className={`w-4 h-4 mb-2 ${activeApp.color}`} />
                <span className="text-xs font-medium text-slate-500 uppercase">Feature</span>
                <span className="text-sm font-semibold text-slate-800">{stat}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProteinArrayApp;
