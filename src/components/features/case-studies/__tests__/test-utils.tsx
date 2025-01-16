import { CaseStudy } from '../types';
import { DEVICE_SPECS, VISUAL_SPECS } from '../constants';

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
    }
  ]
};

// Mobile viewport setup (iPhone 12 Pro)
export const mobileViewport = {
  width: DEVICE_SPECS.defaultWidth,
  height: DEVICE_SPECS.defaultHeight
};

// Helper to verify design system classes
export const hasDesignSystemClass = (element: HTMLElement, classSet: string) => {
  const classes = classSet.split(' ');
  return classes.every(className => element.classList.contains(className));
};