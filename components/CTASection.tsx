import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const CTASection: React.FC = () => {
  return (
    <section id="about" className="bg-white w-full px-8 py-16 md:px-[120px] md:py-24">
      {/* Inner container set to w-full to fill the parent's content box (minus padding) */}
      <RevealOnScroll>
        <div className="relative w-full h-[400px] md:h-[800px] overflow-hidden group bg-gray-900">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.imgur.com/Xt2TNum.png" 
              alt="Stronger steps ahead background" 
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-0">
            <RevealOnScroll delay={200}>
              <h2 className="text-2xl md:text-5xl lg:text-[56px] xl:text-[64px] font-sans font-normal text-white mb-8 md:mb-12 tracking-tight leading-tight drop-shadow-lg whitespace-normal md:whitespace-nowrap w-full">
                Stronger steps ahead. Give it all.
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <button className="bg-brand-orange text-white px-8 py-4 flex items-center gap-3 hover:bg-orange-600 transition-colors duration-300 group/btn shadow-lg">
                <span className="text-base md:text-lg font-medium uppercase tracking-wide">Explore Now</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};