import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../../types';

interface PrismContainerProps {
  cases: CaseStudy[];
  className?: string;
}

const PrismContainer: React.FC<PrismContainerProps> = ({ cases, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Navigation handlers
  const goToNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % cases.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + cases.length) % cases.length);
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  const currentCase = cases[activeIndex];

  return (
    <div className={`relative w-full max-w-lg mx-auto aspect-[4/5] ${className}`}>
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
            p-8
            flex flex-col justify-between
          "
        >
          {/* Content Area */}
          <div className="space-y-6">
            {/* Impact Metric and Timeline */}
            <div className="flex items-baseline gap-3">
              <span className="font-playfair text-[72px] leading-none text-brand-accent1-500">
                {currentCase?.impact.metric}
              </span>
              <span className="text-xl text-brand-secondary-400">
                {currentCase?.impact.timeline}
              </span>
            </div>
            
            {/* Context */}
            <h3 className="text-2xl text-brand-secondary-500">
              {currentCase?.impact.context}
            </h3>
            
            {/* Result */}
            <p className="text-xl text-brand-accent1-500">
              {currentCase?.impact.roi}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            {/* Progress Indicators */}
            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`
                    w-2 h-2 rounded-full transition-colors
                    ${index === activeIndex ? 
                      'bg-brand-accent1-500' : 
                      'bg-brand-secondary-200'
                    }
                  `}
                  aria-label={`Go to case study ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="
                  w-12 h-12 rounded-full 
                  bg-brand-neutral-black
                  text-brand-neutral-white 
                  flex items-center justify-center
                  transition-transform
                  hover:-translate-x-0.5
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
                  bg-brand-neutral-black
                  text-brand-neutral-white 
                  flex items-center justify-center
                  transition-transform
                  hover:translate-x-0.5
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PrismContainer;