"use client";

import { Card } from './components/HoloCards';
import { cn } from '@/lib/utils/cn';
import { TEST_CASES } from './__tests__/fixtures/test-cases';

interface CaseStudiesProps {
  className?: string;
}

// Using our longest test case for scroll testing
const caseStudy = TEST_CASES[2];

export const CaseStudies = ({
  className
}: CaseStudiesProps) => {
  return (
    <section 
      className={cn(
        'relative w-full bg-gray-100 py-12',
        className
      )}
    >
      {/* Test Environment Indicator */}
      <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-1 text-sm">
        Test Environment - Phase 1 Implementation
      </div>

      <div className="container mx-auto px-4">
        {/* Card Test Display */}
        <div className="max-w-[390px] mx-auto">
          <Card 
            study={caseStudy}
            className="test-case-study-card"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;