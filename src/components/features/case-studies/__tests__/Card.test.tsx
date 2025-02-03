import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../components/HoloCards/Card';
import { mockCaseStudy } from './test-utils';

describe('Card Component (Phase 1)', () => {
  // 1. Content Structure Tests
  describe('Content Structure', () => {
    it('renders all required content elements', () => {
      render(<Card study={mockCaseStudy} />);
      
      // Check semantic structure
      const article = screen.getByRole('article');
      expect(article).toBeInTheDocument();
      
      // Check content elements
      expect(screen.getByText(mockCaseStudy.category)).toBeInTheDocument();
      expect(screen.getByText(mockCaseStudy.faces[0].title)).toBeInTheDocument();
      expect(screen.getByText(mockCaseStudy.clientName)).toBeInTheDocument();
    });

    it('renders metrics grid correctly', () => {
      render(<Card study={mockCaseStudy} />);
      
      mockCaseStudy.faces[0].metrics?.forEach(metric => {
        const value = screen.getByText(metric.value);
        const label = screen.getByText(metric.label);
        
        expect(value).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        
        // Verify metric is visible
        expect(value).toBeVisible();
      });
    });
  });

  // 2. Mobile Layout Tests
  describe('Mobile Layout', () => {
    it('follows iPhone 12 Pro base dimensions', () => {
      const { container } = render(<Card study={mockCaseStudy} />);
      const card = container.firstChild as HTMLElement;
      
      expect(card).toHaveClass('max-w-[390px]');
      expect(card).toHaveStyle({ aspectRatio: '0.75' }); // 3:4 ratio
    });

    it('maintains proper spacing scale', () => {
      const { container } = render(<Card study={mockCaseStudy} />);
      const card = container.firstChild as HTMLElement;
      
      // Check base padding
      expect(card).toHaveClass('p-6', 'md:p-8');
    });
  });

  // 3. Visual Rendering Tests
  describe('Visual Rendering', () => {
    it('renders content visibly', () => {
      render(<Card study={mockCaseStudy} />);
      
      // Check title visibility
      const title = screen.getByText(mockCaseStudy.faces[0].title);
      expect(title).toBeVisible();
      
      // Check category visibility
      const category = screen.getByText(mockCaseStudy.category);
      expect(category).toBeVisible();
    });
  });

  // 4. Interaction Tests (Phase 1 Basic)
  describe('Basic Interaction', () => {
    it('calls onFlip when clicked', async () => {
      const onFlip = jest.fn();
      render(<Card study={mockCaseStudy} onFlip={onFlip} />);
      
      const card = screen.getByRole('article');
      await userEvent.click(card);
      
      expect(onFlip).toHaveBeenCalledWith(true);
    });
  });

  // 5. Type Safety Tests
  describe('Type Safety', () => {
    it('handles missing optional props', () => {
      const minimalStudy = {
        id: 'minimal',
        category: 'Test',
        clientName: 'Test Client',
        faces: [{
          id: 'front',
          title: 'Test Title',
          content: ''
        }]
      };
      
      expect(() => render(<Card study={minimalStudy} />)).not.toThrow();
    });
  });

  // 6. Accessibility Tests
  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<Card study={mockCaseStudy} />);
      
      // Check for semantic article
      expect(screen.getByRole('article')).toBeInTheDocument();
      
      // Check for heading
      expect(screen.getByRole('heading')).toHaveTextContent(mockCaseStudy.faces[0].title);
    });

    it('maintains proper color contrast', () => {
      render(<Card study={mockCaseStudy} />);
      
      const title = screen.getByText(mockCaseStudy.faces[0].title);
      expect(title).toHaveClass('text-brand-secondary-500'); // Design system color with proper contrast
    });
  });
});