import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex items-start justify-between bg-gradient-to-b from-black/80 to-transparent">
      {/* Logo */}
      <div className="flex-shrink-0 z-50">
        <Logo />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 lg:space-x-12 mt-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`relative text-xs lg:text-sm uppercase tracking-[0.15em] font-sans font-normal transition-colors duration-300 
              ${item.isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            {item.isActive && (
              <span className="absolute -left-4 top-1/2 w-2 h-[1px] bg-brand-orange transform -translate-y-1/2"></span>
            )}
            {item.label}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="hidden md:flex items-center space-x-6 mt-1">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-b border-gray-600 px-2 py-1 text-xs text-white focus:outline-none focus:border-brand-orange w-40 transition-all duration-300 placeholder-gray-500 font-light tracking-wide"
          />
          <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 group-hover:text-brand-orange transition-colors" />
        </div>
        <button className="text-white hover:text-brand-orange transition-colors">
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white z-50 mt-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-display uppercase tracking-widest text-white hover:text-brand-orange font-light"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};