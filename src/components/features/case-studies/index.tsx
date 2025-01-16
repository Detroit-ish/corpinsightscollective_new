import { Card } from './components/HoloCards';
import { VISUAL_SPECS } from './constants';
import { cn } from '@/lib/utils/cn';

interface CaseStudiesProps {
  className?: string;
}

// Test data - will be replaced with real data later
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
    }
  ]
};

export const CaseStudies = ({
  className
}: CaseStudiesProps) => {
  return (
    <section 
      className={cn(
        'relative w-full bg-brand-accent2 py-12',
        className
      )}
    >
      {/* Test Environment Indicator */}
      <div className="absolute top-0 left-0 right-0 bg-brand-accent1-500 text-white text-center py-1 text-sm">
        Test Environment - Phase 1 Implementation
      </div>

      <div className="container mx-auto px-4">
        {/* Test Controls */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-brand-secondary-500 mb-2">
            Test Information
          </h2>
          <ul className="text-sm text-brand-secondary-400 space-y-1">
            <li>• Phase 1: Basic Card Implementation</li>
            <li>• Mobile First (390px - iPhone 12 Pro)</li>
            <li>• Using Design System Tokens</li>
            <li>• Test Data Only</li>
          </ul>
        </div>

        {/* Card Test Display */}
        <div className="max-w-[390px] mx-auto">
          <Card 
            study={TEST_DATA}
            className={cn(
              VISUAL_SPECS.surface.card,
              'test-case-study-card' // For test identification
            )}
          />
        </div>
      </div>
    </section>
  );
};