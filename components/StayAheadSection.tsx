import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const STORIES = [
  {
    id: 1,
    hashtag: '#GiveItAll',
    title: 'BUKAN SEKADAR KEMENANGAN, TAPI PERJALANAN',
    image: 'https://i.imgur.com/GnOuNwi.png', // Jumping/Action
  },
  {
    id: 2,
    hashtag: '#Produk "Lunar"',
    title: "GRAVITY? WE DON'T KNOW HER.",
    image: 'https://i.imgur.com/SYFNLj0.png', // Gym/Training
  },
  {
    id: 3,
    hashtag: '#Katalog Summer 2025',
    title: 'THE FUTURE IS NOW: SUMMER 2025 PREVIEW',
    image: 'https://i.imgur.com/zdZclkr.png', // Lifestyle/Shoes
  }
];

export const StayAheadSection: React.FC = () => {
  return (
    <section id="news" className="bg-[#111111] text-white w-full px-6 py-20 md:px-[80px] md:py-[140px] border-t border-gray-900">
      
      {/* Header */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-gray-800 pb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-normal mb-3 tracking-normal">STAY AHEAD</h2>
            <p className="text-gray-400 text-base font-light tracking-wide">News, innovations, and stories from the field.</p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 border border-white/20 text-white font-light text-sm hover:bg-white hover:text-black transition-all duration-300">
            Read Story
          </button>
        </div>
      </RevealOnScroll>

      {/* Grid Stories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {STORIES.map((story, index) => (
          <RevealOnScroll key={story.id} delay={index * 150} className="h-full">
            <div className="group relative aspect-[4/5] overflow-hidden bg-gray-900 cursor-pointer h-full">
              {/* Image */}
              <img 
                src={story.image} 
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay - darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Top Hashtag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-gray-200 text-sm font-light tracking-wider opacity-90">{story.hashtag}</span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-8 left-6 right-6 z-10 flex flex-col items-start">
                {/* Orange Arrow Box */}
                <div className="bg-brand-orange w-10 h-10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-sans font-normal uppercase leading-relaxed tracking-wide text-white">
                  {story.title}
                </h3>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Footer / Pagination Controls - Boxed Layout */}
      <RevealOnScroll delay={300}>
        <div className="flex items-center justify-between border border-white/20 py-4 px-6 mt-10 w-full">
          <button className="text-white hover:text-brand-orange transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Dots */}
          <div className="flex gap-4">
            {/* 3 Active Orange Dots */}
            <button className="w-3.5 h-3.5 rounded-full bg-brand-orange hover:bg-orange-600 transition-colors"></button>
            <button className="w-3.5 h-3.5 rounded-full bg-brand-orange hover:bg-orange-600 transition-colors"></button>
            <button className="w-3.5 h-3.5 rounded-full bg-brand-orange hover:bg-orange-600 transition-colors"></button>
            
            {/* 3 Inactive Grey Dots */}
            <button className="w-3.5 h-3.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"></button>
            <button className="w-3.5 h-3.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"></button>
            <button className="w-3.5 h-3.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"></button>
          </div>

          <button className="text-white hover:text-brand-orange transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </RevealOnScroll>

    </section>
  );
};