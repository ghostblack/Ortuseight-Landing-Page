import React, { useState, useEffect } from 'react';

interface TypingTitleProps {
  text: string;
}

export const TypingTitle: React.FC<TypingTitleProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0); // Used to trigger effect re-runs if needed
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const isFullText = displayedText === text;
      const isEmptyText = displayedText === '';

      // Determine the current text based on whether we are deleting or typing
      const currentTextIndex = isDeleting 
        ? displayedText.length - 1 
        : displayedText.length + 1;
      
      const nextText = text.substring(0, currentTextIndex);

      if (!isDeleting && isFullText) {
        // Finished typing, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Delete faster
        }, 3000); // Wait 3 seconds before deleting
      } else if (isDeleting && isEmptyText) {
        // Finished deleting, pause before typing again
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTypingSpeed(150); // Reset typing speed
          setLoopNum(loopNum + 1);
        }, 500);
      } else {
        // Normal typing or deleting
        const speedVariance = Math.random() * 50; // Add slight randomness for realism
        const currentSpeed = isDeleting ? typingSpeed : typingSpeed + speedVariance;

        timer = setTimeout(() => {
          setDisplayedText(nextText);
        }, currentSpeed);
      }
    };

    handleTyping();

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, loopNum]);

  return (
    <h1 className="text-5xl md:text-7xl lg:text-[110px] font-display font-medium text-brand-orange tracking-tight leading-none text-center opacity-90 drop-shadow-lg min-h-[1.2em]">
      {displayedText}
      <span className="animate-pulse text-white font-light ml-1 md:ml-4 inline-block translate-y-[-2px] md:translate-y-[-8px]">|</span>
    </h1>
  );
};