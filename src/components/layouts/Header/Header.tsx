import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Button from '@/components/ui/button';

interface HeaderProps {
  currentSection?: string;
}

const Header: React.FC<HeaderProps> = ({ currentSection = 'hero' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic tagline based on section
  const sectionTaglines = {
    hero: 'From Dial-up to Digital Evolution',
    market: 'Market Analysis & Growth Strategy',
    journey: 'Your Digital Transformation Journey',
    tools: 'Strategic Tools & Insights',
    success: 'Success Stories & Case Studies'
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'py-2' : 'py-4'}
        ${scrolled ? 'bg-brand-primary-900/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-white">
                CorpInsights
              </h1>
            </Link>
            <motion.p 
              key={currentSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden md:block text-sm text-white/80 font-opensans"
            >
              {sectionTaglines[currentSection as keyof typeof sectionTaglines]}
            </motion.p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/growth-lab" className="text-white/90 hover:text-white">
              Growth Lab
            </Link>
            <Link href="/success-stories" className="text-white/90 hover:text-white">
              Success Stories
            </Link>
            <Link href="/tools-insights" className="text-white/90 hover:text-white">
              Tools & Insights
            </Link>
            <Button variant="primary" showArrow>
              Start Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/growth-lab" className="text-white/90 hover:text-white">
                Growth Lab
              </Link>
              <Link href="/success-stories" className="text-white/90 hover:text-white">
                Success Stories
              </Link>
              <Link href="/tools-insights" className="text-white/90 hover:text-white">
                Tools & Insights
              </Link>
              <Button variant="primary" showArrow fullWidth>
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;