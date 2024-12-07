'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lightbulb } from 'lucide-react';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <header className="bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 text-white">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Tagline */}
          <div className="flex flex-col text-white">
            <h1 className="text-2xl font-bold">CorpInsights</h1>
            <p className="text-sm text-white/80">From Dial-up to Digital</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Growth Lab with Lightbulb */}
            <NavLink 
              href="/growth-lab" 
              icon={
                <motion.div
                  animate={{ color: isLightOn ? '#FF6F4F' : '#fff' }}
                  onHoverStart={() => setIsLightOn(true)}
                  onHoverEnd={() => setIsLightOn(false)}
                >
                  <Lightbulb 
                    size={18} 
                    className={`inline-block mr-1 transition-transform ${isLightOn ? 'scale-110' : 'scale-100'}`}
                  />
                </motion.div>
              }
            >
              Growth Lab
            </NavLink>
            
            <NavLink href="/success-stories">Success Stories</NavLink>
            <NavLink href="/tools-insights">Tools & Insights</NavLink>
            
            <button className="px-6 py-2.5 bg-brand-accent1 text-white rounded-md hover:bg-opacity-90 transition-all 
                             transform hover:scale-105 hover:shadow-lg hover:shadow-brand-accent1/20">
              Start Your Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-3 space-y-3">
                <MobileNavLink href="/growth-lab">
                  <Lightbulb size={18} className="inline-block mr-2" />
                  Growth Lab
                </MobileNavLink>
                <MobileNavLink href="/success-stories">Success Stories</MobileNavLink>
                <MobileNavLink href="/tools-insights">Tools & Insights</MobileNavLink>
                <button className="w-full px-4 py-3 bg-brand-accent1 text-white rounded-md 
                                 hover:bg-opacity-90 transition-colors mt-4">
                  Start Your Journey
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children, icon }: NavLinkProps) => (
  <Link 
    href={href} 
    className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide 
               flex items-center group"
  >
    {icon}
    <span className="group-hover:translate-x-0.5 transition-transform">
      {children}
    </span>
  </Link>
);

const MobileNavLink = ({ href, children }: NavLinkProps) => (
  <Link 
    href={href} 
    className="block text-white/80 hover:text-white transition-colors text-sm font-medium 
               tracking-wide py-2 px-2 rounded-lg hover:bg-white/5"
  >
    {children}
  </Link>
);

export default Header;