import React from 'react';
import { caseStudies } from './mockData';
import { CaseStudy } from './types';

interface CaseStudiesProps {
  className?: string;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ className }) => {
  return (
    <section className={`w-full bg-brand-secondary-50 ${className}`}>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <h2 className="font-playfair text-h2 md:text-h2-lg text-brand-secondary-500 text-center mb-8">
          Real Results, Real Growth
        </h2>
        <p className="font-roboto text-body md:text-body-lg text-brand-secondary-400 text-center max-w-2xl mx-auto mb-12">
          From startups to established businesses, we build systems that deliver measurable growth. Here's how we've helped others succeed.
        </p>
        {/* PrismView will go here */}
        <div className="h-96 bg-brand-neutral-white rounded-lg shadow-sm">
          {/* Placeholder for PrismView */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;