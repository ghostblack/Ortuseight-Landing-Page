import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-0">
      {/* Main Footer Content */}
      <div className="px-6 md:px-[80px] pb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Brand & Tagline */}
          <div className="lg:w-1/3">
            <RevealOnScroll>
              {/* Logo Placeholder - as requested */}
              <img 
                src="https://i.imgur.com/4jhYMd0.png" 
                alt="Ortuseight Logo" 
                className="h-14 md:h-16 w-auto mb-8 object-contain"
              />
              <p className="text-gray-500 text-lg leading-relaxed max-w-md font-sans">
                Sejatinya kita Sebagai manusia wajib memberikan yg terbaik di hidup kita dalam hal apa pun.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
            
            {/* Column 1: Ortus Product */}
            <RevealOnScroll delay={100} className="h-full">
              <div>
                <h3 className="font-bold text-black uppercase tracking-wide mb-6 text-lg">Contact Us</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Football</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Futsal</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Running</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Lifestyle</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">New Arrival</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">SALE</a></li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Column 2: Where to Buy */}
            <RevealOnScroll delay={200} className="h-full">
              <div>
                <h3 className="font-bold text-black uppercase tracking-wide mb-6 text-lg">WHERE TO BUY</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Store Location</a></li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Column 3: Ortus Team */}
            <RevealOnScroll delay={300} className="h-full">
              <div>
                <h3 className="font-bold text-black uppercase tracking-wide mb-6 text-lg">ORTUS TEAM</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Athletes</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Team</a></li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Column 4: About Us */}
            <RevealOnScroll delay={400} className="h-full">
              <div>
                <h3 className="font-bold text-black uppercase tracking-wide mb-6 text-lg">ABOUT US</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">About Us</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Our Team</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">F.A.Q</a></li>
                  <li><a href="#" className="text-black font-light hover:text-brand-orange transition-colors">Tracking Order</a></li>
                </ul>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="w-full bg-[#1a1a1a] py-6 px-6 md:px-[80px]">
        <div className="flex flex-col md:flex-row justify-center items-center text-center text-white/90 font-light text-sm tracking-wide gap-2">
          <span>Privacy Policy</span>
          <span className="hidden md:inline mx-2">Terms and Conditions</span>
          <span>&copy; 2025 Ortuseight. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};