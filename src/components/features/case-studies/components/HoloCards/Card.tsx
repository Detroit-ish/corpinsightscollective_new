"use client";

import { MoveVertical } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useFlip } from '../../hooks/useFlip';
import type { HoloCardProps } from '../../types';
import { DEVICE_SPECS } from '../../constants';

import { ChevronRight } from 'lucide-react';
import { PlaceholderImage } from '@/components/ui/placeholder-image';

const CardContent = ({ study, onFlip }: HoloCardProps & { onFlip: () => void }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-gray-50 px-3 py-1.5 rounded-lg">
            <span className="text-base text-gray-600">{study.category}</span>
          </div>
        </div>
        <div className="text-base text-gray-500">Done in 90</div>
      </div>

      {/* Media Spot */}
      <div className="w-full aspect-video mb-6 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
        <PlaceholderImage width={390} height={200} className="w-full h-full" />
      </div>

      {/* Metric Box */}
      <div className="absolute left-1/2 top-[75%] -translate-x-1/2 text-center bg-blue-50 border border-blue-200 rounded-lg py-4 px-8 shadow-md hover:shadow-lg transition-shadow">
        <div className="text-5xl font-bold text-blue-600 mb-1">
          {study.faces[0].metrics?.[0]?.value}
        </div>
        <div className="text-base text-gray-600">
          {study.faces[0].metrics?.[0]?.label}
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-4 right-4 flex gap-1.5 opacity-80">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-500"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const Card = ({ study, className = '', onFlip }: HoloCardProps) => {
  const { isFlipped, isFlipping, handleFlip } = useFlip({ onFlip });
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleFlip();
  };

  const variants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    },
    back: {
      rotateY: -180,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div 
      className={`relative w-full max-w-sm h-96 ${className}`}
      style={{ perspective: DEVICE_SPECS.perspective, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="w-full h-full relative transform-gpu cursor-pointer [transform-style:preserve-3d]"
        animate={isFlipped ? 'back' : 'front'}
        variants={variants}
        onClick={(e) => !isFlipping && handleClick(e)}
      >
        {/* Front Face */}
        <motion.div 
          className={`absolute w-full h-full [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform] [transform-origin:center_center]
            ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}
            bg-white rounded-lg p-6 shadow-lg border border-blue-200 transition-shadow hover:shadow-xl`}
        >
          <CardContent study={study} onFlip={handleClick} />
        </motion.div>

        {/* Back Face */}
        <motion.div 
          className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] [transform-style:preserve-3d] [will-change:transform] [transform-origin:center_center]
            ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}
            bg-white rounded-lg p-6 shadow-lg overflow-hidden`}
        >
          
          {/* Content Container */}
          <div 
            ref={scrollRef}
            className="relative h-full overflow-y-auto overscroll-contain scrollbar-none"
          >
            <h3 className="text-xl font-bold mb-4">{study.faces[1].title}</h3>
            <div className="text-gray-700 space-y-4 whitespace-pre-wrap pb-12">
              {study.faces[1].content}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};