import React from 'react';
import { caseStudies } from './mockData';
import { PrismContainer } from './components/PrismView';

interface CaseStudiesProps {
  className?: string;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ className }) => {
  return (
    <section 
      className={`
        w-full
        bg-gradient-to-b from-brand-secondary-50 to-brand-secondary-50/50
        ${className}
      `}
    >
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-h2 md:text-h2-lg text-brand-secondary-500 text-center mb-6">
            Real Results, Real Growth
          </h2>
          <p className="font-roboto text-body md:text-body-lg text-brand-secondary-400 text-center mb-12">
            From startups to established businesses, we build systems that deliver measurable growth. Here's how we've helped others succeed.
          </p>
        </div>
        
        {/* PrismContainer showing case studies */}
        <div className="max-w-2xl mx-auto">
          <PrismContainer cases={caseStudies} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;