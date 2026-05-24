/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface ProjectCarouselProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    // Clear any existing timer first
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    // Set up a new interval of 3000ms
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const resetTimer = () => {
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, images.length]); // Re-bind on index change to reset timer to 0 immediately

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetTimer();
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col w-full bg-zinc-950 border border-zinc-900 rounded-xl p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <Camera size={16} className="text-[#EA580C]" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
          Galeri Detil Konstruksi ({currentIndex + 1} / {images.length})
        </span>
      </div>

      {/* Main image stage with definite aspect-ratio container and pre-loader color */}
      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-zinc-800 border border-zinc-850">
        <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-mono text-sm uppercase select-none">
          Memuat Gambar...
        </div>
        <img
          src={images[currentIndex]}
          alt={`${projectTitle} - Detail ${currentIndex + 1}`}
          loading="lazy"
          decoding="async"
          className="relative z-10 w-full h-full object-cover transition-all duration-500 ease-in-out"
          referrerPolicy="no-referrer"
        />
        {/* Ambient indicator */}
        <div className="absolute top-2 right-2 z-20 bg-black/75 backdrop-blur-sm px-2 py-1 text-[10px] text-zinc-300 font-mono rounded border border-white/5">
          {currentIndex + 1} OF {images.length}
        </div>
      </div>

      {/* Permanently visible Navigation Panel below the image container */}
      <div className="flex items-center justify-between mt-4">
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#EA580C] active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#EA580C] active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Bullet Indicators */}
        <div className="flex gap-1.5 items-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'bg-[#EA580C] w-6'
                  : 'bg-zinc-800 hover:bg-zinc-700 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
