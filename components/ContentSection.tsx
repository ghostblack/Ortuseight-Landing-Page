import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { NEW_ARRIVALS, MOST_POPULAR, SPECIAL_EDITION } from '../constants';
import { ProductCard } from './ProductCard';
import { RevealOnScroll } from './RevealOnScroll';

type TabType = 'new' | 'popular' | 'special';

const BENTO_SLIDES = [
  {
    id: 1,
    title: 'BERLIN',
    image: 'https://i.imgur.com/VOpINC5.png'
  },
  {
    id: 2,
    title: 'Sierra',
    image: 'https://scontent.cdninstagram.com/v/t39.30808-6/470698764_18294204799236296_5155559535824930074_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&ig_cache_key=MzQ2MTk0MTI3OTc5MjQ0MzgzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OC5zZHIuQzMifQ%3D%3D&_nc_ohc=tz6dLIz0udsQ7kNvwG_2DNM&_nc_oc=Adldl5swortvp40KByjEYc7jJevdvg5wgHyfM6Yjx2pyNSanZVjy499FhEBZAtz8KKM&_nc_ad=z-m&_nc_cid=1101&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=OHWYq-Gp7j91XMUgUIeXwA&oh=00_Afjmoq6sUDqqdT447h2EQDriYqXY47fCASP2UCPHPNeD7Q&oe=6929BCD1'
  },
  {
    id: 3,
    title: 'BRISTOL',
    image: 'https://scontent.cdninstagram.com/v/t51.75761-15/463806946_18286064896236296_7461861285717193211_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzQ4MTU0NTUzMjA1MTY1NzgxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=dIx4YBlFFOwQ7kNvwHIKnde&_nc_oc=Adlt6CU1wwejvHcsFPcVMcMQvyGbzY8ZhwD059FfyDvHmeWkYi1i5VaO5wmEw8mSwBw&_nc_ad=z-m&_nc_cid=1101&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=wCv55td1od50kjdjZjb0Qg&oh=00_AfiEXaPrwWpro2W-nmDx0CsVnq-urOAuCcpUNWjzB_EKjw&oe=6929B4C5'
  }
];

export const ContentSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('new');
  
  // Bento Carousel State
  const [bentoIndex, setBentoIndex] = useState(0);

  // Auto-rotate Bento Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setBentoIndex((prev) => (prev + 1) % BENTO_SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Determine which products to show based on active tab
  const displayedProducts = activeTab === 'new' 
    ? NEW_ARRIVALS 
    : activeTab === 'popular' 
      ? MOST_POPULAR 
      : SPECIAL_EDITION;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by the width of one card (307px) + gap (24px) = 331px
      const scrollAmount = 331;
      
      const scrollTo = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const totalScroll = scrollWidth - clientWidth;
      const progress = (scrollLeft / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  // Reset scroll position when tab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setScrollProgress(0);
    }
  }, [activeTab]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Helper to render a tab button
  const renderTab = (id: TabType, label: string) => {
    const isActive = activeTab === id;
    return (
      <div 
        onClick={() => setActiveTab(id)}
        className={`flex items-center gap-2 cursor-pointer group transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
      >
        <span className={`w-4 h-[2px] transition-colors duration-300 ${isActive ? 'bg-brand-orange' : 'bg-transparent group-hover:bg-gray-300'}`}></span>
        <span className={`tracking-wide ${isActive ? 'font-medium' : 'font-normal'}`}>{label}</span>
      </div>
    );
  };

  return (
    <section id="product" className="bg-white w-full px-6 py-20 md:px-[80px] md:py-[140px] relative z-20">
      
      {/* 1. Header Navigation */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 border-b border-gray-100 pb-4">
          <div className="flex gap-8 text-sm md:text-base">
            {renderTab('new', 'New Arrival')}
            {renderTab('popular', 'Most Popular')}
            {renderTab('special', 'Special Edition')}
          </div>
          <a href="#" className="hidden md:block text-xs uppercase underline tracking-widest text-black hover:text-brand-orange transition-colors mt-4 md:mt-0">
            View All
          </a>
        </div>
      </RevealOnScroll>

      {/* 2. Product Slider / Carousel */}
      <RevealOnScroll delay={200}>
        <div className="relative mb-8">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedProducts.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[307px] w-[307px] snap-start flex-shrink-0 h-auto"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Pagination / Controls (Functional) */}
      <RevealOnScroll delay={300}>
        <div className="flex items-center justify-between mb-24 pt-4 border-t border-gray-200">
          <div className="h-1 w-1/3 bg-gray-200 relative rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${Math.max(10, scrollProgress)}%` }} // Minimum 10% width for visibility
            ></div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-black active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </RevealOnScroll>

      {/* 3. Bento Grid / Promotional Layout */}
      <RevealOnScroll delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[905px]">
          
          {/* Cell 1: Rotating Carousel (Left Column, Spans 2 Rows) */}
          <div className="relative h-[500px] md:h-full md:row-span-2 bg-gray-100 group overflow-hidden">
            {/* Slides */}
            {BENTO_SLIDES.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === bentoIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute top-8 left-8 flex gap-3 z-10">
              {BENTO_SLIDES.map((_, index) => (
                <span 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-500 ${index === bentoIndex ? 'bg-brand-orange' : 'bg-white/40'}`}
                ></span>
              ))}
            </div>

            {/* Title */}
            <div className="absolute bottom-8 left-8 z-10 overflow-hidden">
              {BENTO_SLIDES.map((slide, index) => (
                <h3 
                  key={slide.id}
                  className={`text-white text-5xl font-normal tracking-wide uppercase transition-all duration-700 absolute bottom-0 left-0 whitespace-nowrap origin-bottom-left ${index === bentoIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ position: index === bentoIndex ? 'relative' : 'absolute' }}
                >
                  {slide.title}
                </h3>
              ))}
            </div>
          </div>

          {/* Cell 2: Special Edition (Middle Column, Top Row) */}
          <div className="relative h-[400px] md:h-auto bg-white group overflow-hidden border border-gray-200">
            <img 
              src="https://i.imgur.com/GCuIBk8.png" 
              alt="Special Edition"
              className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-8 pb-16 md:p-10 md:pb-20"
            />
            <div className="absolute bottom-6 left-6 md:left-8 z-10">
              <h4 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-gray-500 whitespace-nowrap">
                Special Edition
              </h4>
            </div>
          </div>

          {/* Cell 3: Info Block (Right Column, Top Row) */}
          <div className="relative h-[400px] md:h-auto bg-[#F9F9F9] p-8 md:p-10 flex flex-col justify-between items-start border border-gray-100 min-h-0">
            <div className="mb-4">
              <img 
                src="https://i.imgur.com/XSnGo6q.png" 
                alt="Ortus Logo"
                className="w-[56px] h-auto object-contain"
              />
            </div>
            
            <div className="w-full mt-auto">
              <p className="text-gray-500 mb-2 text-lg font-normal">Check out latest updates!</p>
              <h3 className="text-2xl md:text-[28px] text-black font-semibold leading-tight mb-6">
                Life is a journey, don't walk it alone. Find the perfect partner for your feet.
              </h3>
              
              <button className="w-full bg-brand-orange text-white py-4 px-6 flex items-center justify-between hover:bg-orange-600 transition-colors group/btn shadow-md">
                <span className="text-base font-bold uppercase tracking-wider">Check Now</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Cell 4: Best Quality (Middle Column, Bottom Row) */}
          <div className="relative h-[400px] md:h-auto bg-white group overflow-hidden border border-gray-200">
            <img 
              src="https://i.imgur.com/7wDdvF0.png" 
              alt="Best Quality"
              className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-8 pb-16 md:p-10 md:pb-20"
            />
            <div className="absolute bottom-6 left-6 md:left-8 z-10">
              <h4 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-gray-500 whitespace-nowrap">
                Best Quality
              </h4>
            </div>
          </div>
          
          {/* Cell 5: Running Image (Right Column, Bottom Row) */}
          <div className="relative h-[250px] md:h-auto group overflow-hidden bg-gray-900 min-h-0">
            <img 
              src="https://i.imgur.com/Cp5pGqn.png" 
              alt="Running with us"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 flex items-center gap-3 z-10">
              <h3 className="text-white text-3xl uppercase font-medium tracking-wide">Running With Us</h3>
              <ArrowRight className="text-brand-orange w-8 h-8" />
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};