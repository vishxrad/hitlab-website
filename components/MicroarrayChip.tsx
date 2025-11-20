
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Activity, Cpu, Zap, Search, Database, BarChart3, Dna, Microscope } from 'lucide-react';

const ProteinSpot = ({ id, initialType }: { id: string, initialType: 'red' | 'green' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // More realistic, less vibrant colors
  const getBaseColor = () => {
    const intensity = Math.random();
    if (initialType === 'red') {
      if (intensity > 0.7) return 'bg-red-700';
      if (intensity > 0.4) return 'bg-red-500';
      return 'bg-red-400';
    } else {
      if (intensity > 0.7) return 'bg-green-700';
      if (intensity > 0.4) return 'bg-green-500';
      return 'bg-green-400';
    }
  };

  const baseColorClass = useMemo(getBaseColor, [initialType]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        w-3 h-3 rounded-full 
        transition-all duration-200 ease-in-out
        cursor-pointer
        ${baseColorClass}
        ${isHovered ? 'scale-150 ring-2 ring-offset-2 ring-offset-gray-100 ring-blue-500 z-10' : ''}
      `}
      title={`Protein ID: ${id}`}
    />
  );
};

const MicroarrayChip = () => {
  const gridData = useMemo(() => {
    const spots: { id: string; type: 'red' | 'green' }[] = [];
    const rows = 12; 
    const cols = 24; 
    
    for (let i = 0; i < rows * cols; i++) {
      const type = Math.random() > 0.5 ? 'red' : 'green';
      spots.push({ id: `P-${1000 + i}`, type });
    }
    return spots;
  }, []);

  return (
    <div className="relative group">
      <div className="
        relative
        bg-gray-100
        border border-gray-300
        rounded-md shadow-md
        p-4
        overflow-hidden
      ">
        <div className="absolute top-2 left-3 text-[10px] font-mono text-gray-500">
          <span>ARRAY-V4.2 // HUMAN-IGG</span>
        </div>
        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-gray-400">
          BATCH: 884-XJ
        </div>

        <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-2 mt-6">
          {gridData.map((spot) => (
            <ProteinSpot key={spot.id} id={spot.id} initialType={spot.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon, trend }: { label: string, value: string, icon: React.ElementType, trend: string }) => (
  <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-4">
    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
      <Icon size={24} />
    </div>
    <div>
      <div className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{label}</div>
      <div className="text-gray-900 text-xl font-bold flex items-baseline gap-2">
        {value}
        {trend && <span className="text-emerald-600 text-xs font-normal">{trend}</span>}
      </div>
    </div>
  </div>
);

export { ProteinSpot, MicroarrayChip, StatCard };
