import { CaseStudy } from '../types';
import { DEVICE_SPECS } from '../constants';

export const mockCaseStudy: CaseStudy = {
  id: 'test-case-1',
  category: 'Sales Automation',
  clientName: 'TechStart Solutions',
  featured: true,
  faces: [
    {
      id: 'front',
      title: '42% More Conversions—No Shady Tactics',
      content: '',
      metrics: [
        { value: '42%', label: 'Conversion Increase' },
        { value: '2wks', label: 'Implementation Time' }
      ]
    },
    {
      id: 'back',
      title: 'How We Did It',
      content: `Our team worked closely with TechStart Solutions to implement an intelligent lead scoring system that prioritized quality over quantity. By analyzing historical conversion data, we identified key behavioral patterns that indicated high-intent prospects.

Key Implementation Steps:
1. Data Analysis & Pattern Recognition
2. Custom Scoring Algorithm Development
3. A/B Testing Framework Setup
4. Real-time Adjustment System

The new system allowed the sales team to focus their efforts on the most promising leads, resulting in higher conversion rates without aggressive tactics.`
    }
  ]
};

// Mobile viewport setup (iPhone 12 Pro)
export const mobileViewport = {
  width: DEVICE_SPECS.defaultWidth,
  height: DEVICE_SPECS.defaultHeight
};