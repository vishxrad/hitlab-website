import React, { useState, useEffect, useMemo } from 'react';
import { Activity, Cpu, Zap, Search, Database, BarChart3, Dna, Microscope } from 'lucide-react';

// --- Components ---

const ProteinSpot = ({ id, initialType }) => {
  // initialType: 'red' (high binding) or 'green' (low binding)
  // We simulate organic variation by choosing random intensities within the color range
  
  const [isHovered, setIsHovered] = useState(false);

  // Determine base styles based on type
  const getBaseColor = () => initialType === 'red' ? 'bg-rose-500' : 'bg-emerald-500';
  const getHoverColor = () => initialType === 'red' ? 'bg-emerald-400' : 'bg-rose-400';
  
  const getGlow = (color) => {
    if (color.includes('rose')) return 'shadow-[0_0_8px_2px_rgba(244,63,94,0.6)]';
    return 'shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]';
  };

  const baseColorClass = getBaseColor();
  const hoverColorClass = getHoverColor();
  
  const currentClass = isHovered ? hoverColorClass : baseColorClass;
  const glowClass = isHovered ? getGlow(currentClass) : '';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        w-2 h-2 md:w-3 md:h-3 rounded-full 
        transition-all duration-300 ease-in-out
        cursor-crosshair
        ${currentClass}
        ${glowClass}
        hover:scale-150 hover:z-10
      `}
      title={`Protein ID: ${id} | Expression: ${isHovered ? 'INVERTED' : initialType.toUpperCase()}`}
    />
  );
};

const MicroarrayChip = () => {
  // Memoize the grid generation so it doesn't re-render unnecessarily
  const gridData = useMemo(() => {
    const spots = [];
    const rows = 16; 
    const cols = 32; 
    
    for (let i = 0; i < rows * cols; i++) {
      // Randomly assign roughly 30% as 'red' (active), rest green
      const type = Math.random() > 0.7 ? 'red' : 'green';
      spots.push({ id: `P-${1000 + i}`, type });
    }
    return spots;
  }, []);

  return (
    <div className="relative group perspective-1000">
      {/* The Glass Slide Container */}
      <div className="
        relative
        bg-slate-900/80 backdrop-blur-md
        border border-slate-600/50
        rounded-lg shadow-2xl
        p-4 md:p-6
        transform transition-transform duration-700
        group-hover:rotate-x-2 group-hover:scale-[1.02]
        overflow-hidden
      ">
        {/* Scientific Labeling on the Slide */}
        <div className="absolute top-2 left-4 text-[10px] font-mono text-slate-400 flex items-center gap-2">
          <Dna size={12} />
          <span>ARRAY-V4.2 // HUMAN-IGG</span>
        </div>
        <div className="absolute bottom-2 right-4 text-[10px] font-mono text-slate-500">
          BATCH: 884-XJ
        </div>

        {/* The Scanner Bar Animation */}
        <div className="
          absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.8)]
          animate-scan pointer-events-none z-20 opacity-50
        "></div>

        {/* The Grid */}
        <div className="grid grid-cols-[repeat(32,minmax(0,1fr))] gap-1 md:gap-1.5 mt-4">
          {gridData.map((spot) => (
            <ProteinSpot key={spot.id} id={spot.id} initialType={spot.type} />
          ))}
        </div>
        
        {/* Reflections/Gloss */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Decorative shadow underneath */}
      <div className="absolute -bottom-10 left-10 right-10 h-20 bg-blue-500/10 blur-3xl -z-10"></div>
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon, trend }) => (
  <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center gap-4 backdrop-blur-sm">
    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
      <Icon size={24} />
    </div>
    <div>
      <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{label}</div>
      <div className="text-white text-xl font-bold flex items-baseline gap-2">
        {value}
        {trend && <span className="text-emerald-400 text-xs font-normal">{trend}</span>}
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xl tracking-tight">
            <Microscope size={24} />
            <span>BioArray<span className="text-white">Tech</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Applications</a>
            <a href="#" className="hover:text-white transition-colors">Data Analysis</a>
            <a href="#" className="hover:text-white transition-colors">Research</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20">
            Request Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              <Activity size={14} />
              <span>Next-Gen Screening Live</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Decode the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Proteome
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              High-throughput protein microarray technology delivering 
              multiplexed biomarker discovery at unprecedented speed. 
              Visualize interaction networks in real-time.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                Start Analysis <Search size={18} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-slate-700 hover:border-slate-500 hover:bg-slate-900 transition-all">
                View Documentation <Database size={18} />
              </button>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard icon={Cpu} label="Throughput" value="12k Spots" trend="+24%" />
              <StatCard icon={Zap} label="Sensitivity" value="0.5 pg/mL" trend="Ultra-Low" />
            </div>
          </div>

          {/* Right Column: The Visual */}
          <div className="relative">
            {/* Contextual UI Elements around the chip */}
            <div className="absolute -right-12 top-10 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-12 bottom-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            
            {/* The Main Chip Component */}
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-4 px-2">
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span>
                    High Affinity
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    Low Affinity
                  </div>
                </div>
                <div className="text-xs font-mono text-blue-400 animate-pulse">
                  SCANNING...
                </div>
              </div>
              
              <MicroarrayChip />
              
              <div className="mt-6 flex items-center justify-between p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-slate-500" size={20} />
                  <div>
                    <div className="text-xs text-slate-500 font-mono">DATA INTEGRITY</div>
                    <div className="text-sm text-white font-semibold">99.98% Verified</div>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-slate-800"></div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-mono">ARRAY ID</div>
                  <div className="text-sm text-white font-mono">#882-192-AB</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* CSS Animation Definitions */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;