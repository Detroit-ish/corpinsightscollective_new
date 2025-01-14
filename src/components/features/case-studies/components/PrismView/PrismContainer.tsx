import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../../types';

interface PrismContainerProps {
  cases: CaseStudy[];
  className?: string;
}

const PrismContainer: React.FC<PrismContainerProps> = ({ cases, className }) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        relative w-full max-w-lg mx-auto
        aspect-[4/5] 
        bg-brand-neutral-white
        rounded-2xl 
        shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)]
        ${className}
      `}
    >
      {/* Content container */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        {/* Upper content */}
        <div className="space-y-6">
          {/* Metric and timeline */}
          <div className="flex items-baseline gap-3">
            <span className="font-playfair text-[72px] leading-none font-light text-brand-accent1-500">
              {cases[0]?.impact.metric}
            </span>
            <span className="text-xl text-brand-secondary-400">
              {cases[0]?.impact.timeline}
            </span>
          </div>
          
          {/* Context */}
          <div className="text-2xl text-brand-secondary-500">
            {cases[0]?.impact.context}
          </div>
          
          {/* ROI/Result */}
          <div className="text-xl text-brand-accent1-500">
            {cases[0]?.impact.roi}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex justify-between items-center">
          {/* Progress indicators */}
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <div 
                key={index}
                className={`
                  w-2 h-2 rounded-full transition-all
                  ${index === 0 ? 
                    'bg-brand-accent1-500' : 
                    'bg-brand-secondary-200'
                  }
                `}
              />
            ))}
          </div>

          {/* Navigation button */}
          <button
            className="
              w-12 h-12 rounded-full 
              bg-brand-secondary-900
              text-brand-neutral-white 
              flex items-center justify-center
              transition-transform duration-300
              hover:transform hover:translate-x-0.5
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
  );
};

export default PrismContainer;