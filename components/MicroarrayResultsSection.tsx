"use client";

import { useState, useRef, MouseEvent } from "react";
import { useTranslation } from "react-i18next";

const MicroarrayResultsSection = () => {
  const { t } = useTranslation();
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMagnifierPosition({ x, y });
    setContainerSize({ width, height });
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl group">
      {/* Background Image Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
      >
        {/* The "Green Chip" Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: "url('/green_chip.png')" }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
            {t("technology.results.title")}
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl px-4 drop-shadow-md">
            {t("technology.results.description")}
          </p>
        </div>

        {/* Magnifying Glass Effect */}
        {showMagnifier && (
          <div
            className="absolute w-64 h-64 border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] pointer-events-none z-20 overflow-hidden bg-black"
            style={{
              left: `${magnifierPosition.x - 128}px`,
              top: `${magnifierPosition.y - 128}px`,
            }}
          >
            {/* Zoomed Image */}
            <div
              className="absolute max-w-none"
              style={{
                width: `${containerSize.width * 4}px`,
                height: `${containerSize.height * 4}px`,
                backgroundImage: "url('/green_chip.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                left: `${-magnifierPosition.x * 4 + 128}px`,
                top: `${-magnifierPosition.y * 4 + 128}px`,
              }}
            />
            {/* Scanlines/Grid Effect Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')] opacity-20" />
          </div>
        )}
      </div>
    </section>
  );
};

export default MicroarrayResultsSection;
