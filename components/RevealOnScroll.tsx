import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number; // Delay in ms
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay if requested
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};