'use client';

import React from 'react';

// Import local components
import Hero from '@/components/features/hero/Hero';
import Button from '@/components/ui/Button';
import type { ButtonProps } from '@/components/ui/Button';
import { PainPoints } from '@/components/features/pain-points';

// Generic error handling utility
const logError = (error: Error, info: string | undefined) => {
  console.error('Component Error:', {
    message: error.message,
    stack: error.stack,
    info: info || 'No additional info'
  });
};

// Error boundary for component failures
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static displayName = 'ErrorBoundary';

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logError(error, errorInfo.componentStack || 'No stack trace available');
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Button component props
type StartButtonProps = Omit<ButtonProps, 'children'>;

const StartButton: React.FC<StartButtonProps> = (props) => (
  <Button 
    variant="primary" 
    showArrow={true}
    {...props}
  >
    Get Started
  </Button>
);
StartButton.displayName = 'StartButton';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Pain Points Section */}
      <PainPoints />

      {/* Case Studies Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* New case studies implementation will go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <StartButton className="mt-8" />
        </div>
      </section>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;