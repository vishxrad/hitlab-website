
"use client";
import React, { useState, useMemo } from "react";
import { Activity, Cpu, Zap, Search, Database, BarChart3, Dna, Microscope } from "lucide-react";
import proteins from "../public/human-proteins.json";

type Protein = {
  gene: string;
  uniprot: string | null;
  entrez: string | null;
};

type SpotStatus = "strong" | "moderate" | "weak" | "failed";

type SpotWithMetadata = {
  protein: Protein | null;
  type: "red" | "green";
  status: SpotStatus;
  bindingPercent: number; // 0-100
};

const ProteinHoverCard = ({
  protein,
  status,
  bindingPercent,
}: {
  protein: Protein;
  status: SpotStatus;
  bindingPercent: number;
}) => {
  const isFailure = status === "failed";
  return (
    <div className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-lg ring-1 ring-slate-700/80">
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] ${
            isFailure ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.9)]" : "bg-emerald-400"
          }`}
        />
        <span className="font-semibold tracking-wide">
          {protein.gene}
        </span>
      </div>
      <div className="mt-0.5 flex flex-col gap-0.5 text-[10px] text-slate-300/90">
        <div className="flex gap-3">
          <span>UniProt: {protein.uniprot ?? "N/A"}</span>
          <span>Entrez: {protein.entrez ?? "N/A"}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
              isFailure
                ? "bg-red-500/20 text-red-300 ring-1 ring-red-500/40"
                : "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40"
            }`}
          >
            {isFailure ? "Low binding" : "Strong binding"}
          </span>
          <span className="text-slate-300/80">
            Signal: {bindingPercent}%
          </span>
        </div>
      </div>
    </div>
  );
};

const ProteinSpot = ({
  protein,
  status,
  bindingPercent,
}: {
  protein: Protein | null;
  status: SpotStatus;
  bindingPercent: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );

  // More realistic, less vibrant colors linked to status
  const getBaseColor = () => {
    const intensity = Math.random();
    if (status === "failed") {
      // Visually highlight failed spots as red regardless of channel
      if (intensity > 0.7) return "bg-red-700";
      if (intensity > 0.4) return "bg-red-500";
      return "bg-red-400";
    }
    if (status === "strong" || status === "moderate") {
      // Good binding: blue channel
      if (intensity > 0.7) return "bg-blue-700";
      if (intensity > 0.4) return "bg-blue-500";
      return "bg-blue-400";
    }
    // weak but not completely failed: dimmer blue
    if (intensity > 0.7) return "bg-blue-500";
    if (intensity > 0.4) return "bg-blue-400";
    return "bg-blue-300";
  };

  const baseColorClass = useMemo(getBaseColor, [status]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePos({ x: rect.left + rect.width / 2, y: rect.top });
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos(null);
      }}
      onMouseMove={handleMouseMove}
    >
      {protein && isHovered && mousePos && (
        <div
          style={{ left: mousePos.x, top: mousePos.y }}
        >
            <ProteinHoverCard
              protein={protein}
              status={status}
              bindingPercent={bindingPercent}
            />
        </div>
      )}
      <div
        className={`
          w-3 h-3 rounded-full
          transition-transform transition-shadow duration-200 ease-out
          ${
            isHovered
              ? "cursor-crosshair scale-150 shadow-[0_0_8px_rgba(56,189,248,0.8)] ring-2 ring-offset-2 ring-offset-gray-100 ring-blue-500 z-10"
              : "cursor-pointer"
          }
          ${baseColorClass}
        `}
      />
    </div>
  );
};

const MicroarrayChip = () => {
  const gridData = useMemo<SpotWithMetadata[]>(() => {
    const rows = 12;
    const cols = 24;
    const totalSpots = rows * cols;

    const proteinList = (proteins as Protein[]).filter((p) => !!p.gene);

    const spots: SpotWithMetadata[] = [];

    for (let i = 0; i < totalSpots; i++) {
      const type = Math.random() > 0.5 ? "red" : "green";
      const protein = proteinList.length
        ? proteinList[i % proteinList.length]
        : null;
      const bindingPercent = Math.round(Math.random() * 100);
      // Roughly 15% of spots are "failed" / low binding
      const status: SpotStatus = bindingPercent < 25 ? "failed" : bindingPercent < 50 ? "weak" : bindingPercent < 80 ? "moderate" : "strong";

      spots.push({ protein, type, status, bindingPercent });
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
        <div className="absolute bottom-0 right-3 text-[10px] font-mono text-gray-400">
          BATCH: 884-XJ
        </div>

        {/* The Scanner Bar Animation */}
        <div className="
          absolute top-0 left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)]
          animate-scan pointer-events-none z-20
        "></div>

        <div className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-2 mt-6">
          {gridData.map((spot, index) => (
            <ProteinSpot
              key={index}
              protein={spot.protein}
              status={spot.status}
              bindingPercent={spot.bindingPercent}
            />
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
        {trend && <span className="text-blue-600 text-xs font-normal">{trend}</span>}
      </div>
    </div>
  </div>
);


export { ProteinSpot, MicroarrayChip, StatCard };
