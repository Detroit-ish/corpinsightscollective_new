'use client';

import React from 'react';
import Header from './header';
import useCurrentSection from '@/hooks/useCurrentSection';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentSection = useCurrentSection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-900 to-brand-secondary-900">
      <Header currentSection={currentSection} />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;