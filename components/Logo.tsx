import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src="https://i.imgur.com/9kxSRH2.png" 
        alt="Ortuseight" 
        className="h-8 md:h-10 w-auto object-contain"
      />
    </div>
  );
};