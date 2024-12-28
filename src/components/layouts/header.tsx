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
    <header className="bg-gradient-to-r from-[#007373] via-[#006666] to-[#2B3A42]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo & Tagline with increased spacing */}
          <div className="flex flex-col pr-8 lg:pr-16">
  <h1 className="text-[32px] md:text-[40px] font-playfair font-bold text-white leading-tight">
    CorpInsights
  </h1>
  <p className="text-[14px] md:text-[16px] font-montserrat tracking-wide text-white/90 leading-normal mt-1">
    From Dial-up to Digital Evolution
  </p>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12"> {/* Increased from space-x-10 */}
            {/* Growth Lab with color pulse */}
            <NavLink 
              href="/growth-lab" 
              icon={
                <motion.div
                  animate={{ 
                    color: isLightOn ? 'var(--brand-accent1-500)' : '#fff',
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: isLightOn ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                  onHoverStart={() => setIsLightOn(true)}
                  onHoverEnd={() => setIsLightOn(false)}
                >
                  <Lightbulb 
                    size={20} 
                    className="mr-2"
                  />
                </motion.div>
              }
            >
              Growth Lab
            </NavLink>
            
            <NavLink href="/success-stories">Success Stories</NavLink>
            <NavLink href="/tools-insights">Tools & Insights</NavLink>
            
            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-brand-accent1-500 to-brand-accent1-600
                        rounded-lg text-white font-montserrat text-[18px] font-semibold
                        hover:from-brand-accent1-600 hover:to-brand-accent1-700
                        transition-all duration-300 shadow-lg shadow-brand-accent1-500/20"
            >
              Start Your Journey
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-white hover:bg-white/10 rounded-lg
                       transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="md:hidden mt-6 pt-6 border-t border-white/10"
            >
              <div className="space-y-3">
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
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-brand-accent1-500 to-brand-accent1-600
                            rounded-lg text-white font-montserrat text-[18px] font-semibold
                            hover:from-brand-accent1-600 hover:to-brand-accent1-700
                            transition-all duration-300 shadow-lg shadow-brand-accent1-500/20"
                >
                  Start Your Journey
                </motion.button>
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
    className="group flex items-center text-white/90 hover:text-white
               font-montserrat text-[18px] md:text-[20px] font-medium tracking-wide
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
    className="group text-white/90 hover:text-white
               font-montserrat text-[18px] font-medium tracking-wide
               block py-3 px-4 rounded-lg hover:bg-white/10
               transition-all duration-300"
  >
    {children}
  </Link>
);

export default Header;