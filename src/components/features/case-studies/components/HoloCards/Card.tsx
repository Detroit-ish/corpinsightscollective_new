"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useFlip } from '../../hooks/useFlip';
import type { HoloCardProps } from '../../types';
import { DEVICE_SPECS } from '../../constants';

export const Card = ({ study, className = '', onFlip }: HoloCardProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isFlipped, handleFlip } = useFlip({ onFlip });
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render interactive elements after mount
  if (!isMounted) {
    return (
      <div className={`relative w-full max-w-sm h-96 ${className}`}>
        <div className="w-full h-full bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">{study.faces[0].title}</h3>
          {study.faces[0].metrics && (
            <div className="grid grid-cols-2 gap-4">
              {study.faces[0].metrics.map((metric) => (
                <div 
                  key={metric.label}
                  className={`text-center ${metric.emphasis ? 'font-bold' : ''}`}
                >
                  <div className="text-2xl">{metric.value}</div>
                  <div className="text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Card clicked - flipping...');
    handleFlip();
  };

  const variants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.3 }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div 
      className={`relative w-full max-w-sm h-96 ${className}`}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="w-full h-full relative transform-gpu cursor-pointer [transform-style:preserve-3d]"
        animate={isFlipped ? 'back' : 'front'}
        variants={variants}
        onClick={handleClick}
      >
        {/* Front Face */}
        <motion.div 
          className={`absolute w-full h-full [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform] [transform-origin:center_center]
            ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}
            bg-white rounded-lg p-6 shadow-lg`}
        >
          <h3 className="text-xl font-bold mb-4">{study.faces[0].title}</h3>
          {study.faces[0].metrics && (
            <div className="grid grid-cols-2 gap-4">
              {study.faces[0].metrics.map((metric) => (
                <div 
                  key={metric.label}
                  className={`text-center ${metric.emphasis ? 'font-bold' : ''}`}
                >
                  <div className="text-2xl">{metric.value}</div>
                  <div className="text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Back Face */}
        <motion.div 
          className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] [transform-style:preserve-3d] [will-change:transform] [transform-origin:center_center]
            ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}
            bg-white rounded-lg shadow-lg overflow-hidden`}
        >
          {/* Scroll Progress Indicator */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 origin-left z-10"
            style={{ scaleX: scrollProgress }}
          />
          
          {/* Content Container */}
          <div 
            ref={scrollRef}
            className="h-full overflow-y-auto overscroll-contain px-6 py-4"
          >
            <h3 className="text-xl font-bold mb-4">{study.faces[1].title}</h3>
            <div className="text-gray-700 space-y-4 whitespace-pre-wrap">
              {study.faces[1].content}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
        