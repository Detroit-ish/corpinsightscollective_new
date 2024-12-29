'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useSectionProgress } from '@/hooks/useSectionProgress';

interface HeaderProps {
  currentSection?: string;
}

const Header: React.FC<HeaderProps> = ({ currentSection = 'hero' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const { completedSections, currentProgress } = useSectionProgress();

  // Dynamic taglines with AI-powered context awareness
  const sectionTaglines = {
    hero: 'From Dial-up to Digital Evolution',
    market: 'Market Analysis & Growth Strategy',
    journey: 'Your Digital Transformation Journey',
    tools: 'Strategic Tools & Insights',
    success: 'Success Stories & Case Studies'
  };

  // Parallax and motion effects
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -20], { clamp: true });
  const blurStrength = useTransform(scrollYProgress, [0, 0.1], [0, 6]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.8]);

  // Mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll handling with performance optimization
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setScrolled(entry.intersectionRatio < 0.9);
          }
        });
      },
      { threshold: [0.9] }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
      style={{ transform: `translateY(${headerY}px)` }}
    >
      {/* Glassmorphic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${blurStrength}px)`,
          backgroundColor: `rgba(0, 115, 115, ${backgroundOpacity})`
        }}
      >
        {/* Interactive gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: `radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255,255,255,0.1) 0%,
              transparent 50%
            )`
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        />
      </motion.div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Dynamic Tagline */}
          <motion.div 
            className="flex flex-col pr-8 lg:pr-16"
            initial={false}
            animate={{ 
              y: scrolled ? 0 : 10,
              scale: scrolled ? 0.95 : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h1 className="text-[32px] md:text-[40px] font-playfair font-bold text-white leading-tight">
              CorpInsights
            </h1>
            <motion.p 
              key={currentSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-[14px] md:text-[16px] font-montserrat tracking-wide text-white/90 leading-normal mt-1"
            >
              {sectionTaglines[currentSection as keyof typeof sectionTaglines]}
            </motion.p>
          </motion.div>

          {/* Navigation with Progress Indicators */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Enhanced NavLinks with progress indicators */}
            