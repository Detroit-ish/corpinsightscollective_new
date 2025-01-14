import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../../types';

interface PrismContainerProps {
  cases: CaseStudy[];
  className?: string;
}

const PrismContainer: React.FC<PrismContainerProps> = ({ cases, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Navigation handlers
  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % cases.length);
  }, [cases.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + cases.length) % cases.length);
  }, [cases.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  // Get current case study
  const currentCase = cases[activeIndex];

  return (
    <div 
      className={`
        relative w-full max-w-lg mx-auto
        aspect-[4/5] 
        ${className}
      `}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div 
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="
            absolute w-full h-full
            bg-brand-neutral-white
            rounded-2xl 
            shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)]
          "
        >
          {/* Content container */}
          <div className="relative h-full p-8 flex flex-col justify-between">
            {/* Upper content */}
            <div className="space-y-6">
              {/* Metric and timeline */}
              <div className="flex items-baseline gap-3">
                <span className="font-playfair text-[72px] leading-none font-light text-brand-accent1-500">
                  {currentCase?.impact.metric}
                </span>
                <span className="text-xl text-brand-secondary-400">
                  {currentCase?.impact.timeline}
                </span>
              </div>
              
              {/* Context */}
              <div className="text-2xl text-brand-secondary-500">
                {currentCase?.impact.context}
              </div>
              
              {/* ROI/Result */}
              <div className="text-xl text-brand-accent1-500">
                {currentCase?.impact.roi}
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="flex justify-between items-center">
              {/* Progress indicators */}
              <div className="flex gap-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`
                      w-2 h-2 rounded-full transition-all
                      ${index === activeIndex ? 
                        'bg-brand-accent1-500' : 
                        'bg-brand-secondary-200'
                      }
                      hover:bg-brand-accent1-400
                      focus:outline-none focus:ring-2 focus:ring-brand-accent1-500 focus:ring-offset-2
                    `}
                    aria-label={`Go to case study ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : 'false'}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="
                    w-12 h-12 rounded-full 
                    bg-brand-secondary-900
                    text-brand-neutral-white 
                    flex items-center justify-center
                    transition-transform duration-300
                    hover:transform hover:-translate-x-0.5
                    focus:outline-none focus:ring-2 focus:ring-brand-secondary-900 focus:ring-offset-2
                  "
                  aria-label="Previous case study"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transform rotate-180"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="
                    w-12 h-12 rounded-full 
                    bg-brand-secondary-900
                    text-brand-neutral-white 
                    flex items-center justify-center
                    transition-transform duration-300
                    hover:transform hover:translate-x-0.5
                    focus:outline-none focus:ring-2 focus:ring-brand-secondary-900 focus:ring-offset-2
                  "
                  aria-label="Next case study"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PrismContainer;