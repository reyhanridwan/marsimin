/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  heightClass?: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  heightClass = 'aspect-[16/10]',
  title
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col w-full">
      {title && (
        <span className="text-xs font-mono font-medium tracking-widest text-[#EA580C] uppercase mb-2 block">
          {title}
        </span>
      )}
      <div
        ref={containerRef}
        className={`relative w-full ${heightClass} bg-zinc-800 rounded-xl overflow-hidden select-none cursor-ew-resize border border-zinc-800 shadow-xl group`}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background) */}
        <div className="absolute inset-0 w-full h-full bg-zinc-900">
          <img
            src={afterImage}
            alt="Setelah Konstruksi"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <span className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white font-mono text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-md tracking-wider uppercase border border-white/10 z-10 shadow-lg">
            SESUDAH
          </span>
        </div>

        {/* BEFORE IMAGE (Layered clip width) */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-transparent"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full min-w-full">
            <img
              src={beforeImage}
              alt="Sebelum Konstruksi"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                width: containerRef.current?.getBoundingClientRect().width || '100vw',
                maxWidth: 'none'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Label SEBELUM */}
            <span className="absolute bottom-4 left-4 bg-[#EA580C] text-white font-mono text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-md tracking-wider uppercase z-10 shadow-lg">
              SEBELUM
            </span>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#EA580C] cursor-ew-resize z-25 group-hover:w-1 transition-all duration-150"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular widget handle button */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-zinc-950 border-2 border-[#EA580C] rounded-full flex items-center justify-center shadow-2xl z-26 text-[#EA580C] cursor-ew-resize group-hover:scale-110 active:scale-95 transition-transform duration-250">
            <span className="flex items-center gap-0.5 text-xs text-white">
              <ChevronLeft size={14} className="text-[#EA580C]" />
              <ChevronRight size={14} className="text-[#EA580C]" />
            </span>
          </div>
        </div>

        {/* Interactive hint overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center gap-1.5 border border-white/5 shadow">
          <Eye size={12} className="text-[#EA580C] animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-200 tracking-wider">GESER UNTUK MELIHAT PERUBAHAN</span>
        </div>
      </div>
    </div>
  );
}
