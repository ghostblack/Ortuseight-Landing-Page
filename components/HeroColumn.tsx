import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroSectionData } from '../types';

interface HeroColumnProps {
  data: HeroSectionData;
  index: number;
}

export const HeroColumn: React.FC<HeroColumnProps> = ({ data, index }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Stagger the animation slightly based on column index
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100 + (index * 200)); 
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative flex-1 h-screen group overflow-hidden border-r border-white/10 last:border-r-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black z-0">
        <img 
          src={data.imageUrl} 
          alt={data.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none"></div>
      </div>

      {/* Content at Bottom */}
      <div 
        className={`absolute bottom-16 left-8 md:left-10 z-20 transition-all duration-1000 ease-out ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <a href={data.link} className="block group/link">
          <div className="flex flex-col items-start gap-3">
            <ArrowRight className="w-6 h-6 text-white group-hover/link:text-brand-orange group-hover/link:translate-x-2 transition-all duration-300" />
            <h2 className="text-2xl md:text-3xl font-display font-normal text-white tracking-wide uppercase">
              {data.title}
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
};