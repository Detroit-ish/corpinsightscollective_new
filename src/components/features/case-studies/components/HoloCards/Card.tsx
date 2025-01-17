"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useFlip } from '../../hooks/useFlip';
import type { HoloCardProps } from '../../types';
import { DEVICE_SPECS } from '../../constants';

export const Card = ({ study, className = '', onFlip }: HoloCardProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isFlipped, handleFlip } = useFlip({ onFlip });

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

  const handleClick = () => {
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
        className="w-full h-full relative transform-gpu cursor-pointer [transform-style:preserve-3d] [transform-origin:center_center]"
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
            bg-white rounded-lg p-6 shadow-lg overflow-y-auto`}
        >
          <h3 className="text-xl font-bold mb-4">{study.faces[1].title}</h3>
          <div className="prose prose-sm max-w-none whitespace-pre-wrap">
            {study.faces[1].content}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
        