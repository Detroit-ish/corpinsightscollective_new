"use client";

import { Card } from './components/HoloCards';
import { cn } from '@/lib/utils/cn';

interface CaseStudiesProps {
  className?: string;
}

const TEST_DATA = {
  id: 'test-case-1',
  category: 'Sales Automation',
  clientName: 'TechStart Solutions',
  featured: true,
  faces: [
    {
      id: 'front',
      title: '42% More Conversions—No Shady Tactics (Test)',
      content: '',
      metrics: [
        { value: '42%', label: 'Conversion Increase' },
        { value: '2wks', label: 'Implementation Time' }
      ]
    },
    {
      id: 'back',
      title: 'How We Did It (Test)',
      content: 'TEST BACK FACE',      
    }
  ]
};

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
            study={TEST_DATA}
            className="test-case-study-card"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;