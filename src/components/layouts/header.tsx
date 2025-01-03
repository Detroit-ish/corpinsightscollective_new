'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lightbulb } from 'lucide-react';
import Button from '@/components/ui/Button';

interface HeaderProps {
  currentSection?: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ currentSection = 'hero' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

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
        ${scrolled 
          ? 'bg-brand-primary-900/80 backdrop-blur-md shadow-lg' 
          : 'gradient-professional'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex flex-col space-y-1">
            <Link href="/" className="flex items-center">
              <h1 className="text-h2 text-white font-playfair">
                CorpInsights
              </h1>
            </Link>
            <motion.p 
              key={currentSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden md:block text-white/80 font-montserrat text-sm tracking-wide"
            >
              {sectionTaglines[currentSection as keyof typeof sectionTaglines]}
            </motion.p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              href="/growth-lab" 
              icon={
                <motion.div
                  animate={{ 
                    color: isLightOn ? 'var(--brand-accent1-500)' : '#fff',
                  }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setIsLightOn(true)}
                  onHoverEnd={() => setIsLightOn(false)}
                >
                  <Lightbulb size={20} className="mr-2" />
                </motion.div>
              }
            >
              Growth Lab
            </NavLink>
            <NavLink href="/success-stories">Success Stories</NavLink>
            <NavLink href="/tools-insights">Tools & Insights</NavLink>
            <Button variant="secondary" size="lg" showArrow>
              Start Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-white hover:bg-white/10 rounded-lg
                       transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="md:hidden mt-6 pt-6 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <motion.div
                    animate={{ 
                      color: isLightOn ? 'var(--brand-accent1-500)' : '#fff',
                    }}
                    className="mr-2"
                  >
                    <Lightbulb size={20} />
                  </motion.div>
                  <MobileNavLink href="/growth-lab">Growth Lab</MobileNavLink>
                </div>
                <MobileNavLink href="/success-stories">Success Stories</MobileNavLink>
                <MobileNavLink href="/tools-insights">Tools & Insights</MobileNavLink>
                <Button variant="secondary" size="lg" showArrow fullWidth>
                  Start Your Journey
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const NavLink = ({ href, children, icon }: NavLinkProps) => (
  <Link 
    href={href} 
    className="group flex items-center text-white/90 hover:text-white
               font-montserrat text-[18px] font-medium tracking-wide
               transition-all duration-300"
  >
    {icon}
    <span className="relative after:absolute after:bottom-[-2px] after:left-0 
                     after:h-[2px] after:w-0 after:bg-white
                     after:transition-all after:duration-300 
                     group-hover:after:w-full">
      {children}
    </span>
  </Link>
);

const MobileNavLink = ({ href, children }: NavLinkProps) => (
  <Link 
    href={href} 
    className="block py-3 px-4 rounded-lg
               text-white/90 hover:text-white hover:bg-white/10
               font-montserrat text-[18px] font-medium tracking-wide
               transition-all duration-300"
  >
    {children}
  </Link>
);

export default Header;