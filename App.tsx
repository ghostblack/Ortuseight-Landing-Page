
import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroColumn } from './components/HeroColumn';
import { ChatAssistant } from './components/ChatAssistant';
import { TypingTitle } from './components/TypingTitle';
import { ContentSection } from './components/ContentSection';
import { StayAheadSection } from './components/StayAheadSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { HERO_SECTIONS } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-white overflow-hidden relative font-sans">
      <Navbar />

      {/* Main Hero Container */}
      <main id="welcome" className="relative flex flex-col md:flex-row h-screen w-full">
        {/* Render Columns */}
        {HERO_SECTIONS.map((section, index) => (
          <HeroColumn key={section.id} data={section} index={index} />
        ))}

        {/* Floating Centered Text Overlay */}
        {/* This sits absolutely on top of the flex container to mimic the design where text spans across images or sits in the middle */}
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center mix-blend-normal">
          <div className="relative transform translate-y-[-5%]">
            <TypingTitle text="#TeamOrtuseight" />
            {/* Optional subtitle if needed for balance */}
          </div>
        </div>

        {/* Optional: Subtle Vignette for the whole screen */}
        <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-black/40 z-10"></div>
      </main>

      {/* New Content Section (White Background) */}
      <ContentSection />

      {/* Stay Ahead Section (Dark Background) */}
      <StayAheadSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <Footer />

      <ChatAssistant />
    </div>
  );
}

export default App;