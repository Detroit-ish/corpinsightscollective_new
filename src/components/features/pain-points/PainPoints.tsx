'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PainPointCard } from './PainPointCard';  // Import the PainPointCard component
import { painPoints } from './content';
import type { PainPointsProps } from './types';
import { cn } from '@/lib/utils/cn';

const SWIPE_THRESHOLD = 50;
const ANIMATION_DISTANCE = 300;

export default function PainPoints({ className }: PainPointsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < painPoints.length) {
      setPage([newIndex, newDirection]);
    }
  };

  const handleSwipeLeft = () => {
    if (currentIndex < painPoints.length - 1) {
      paginate(1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      paginate(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        paginate(-1);
        break;
      case 'ArrowRight':
        paginate(1);
        break;
    }
  };

  return (
    <section 
      ref={containerRef}
      className={cn('relative py-24 bg-[#2B3A42]/5 overflow-hidden', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2B3A42]">
            Common Challenges
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#2B3A42]/80 max-w-2xl mx-auto font-opensans">
            Swipe or use arrows to explore challenges
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? ANIMATION_DISTANCE : -ANIMATION_DISTANCE }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ 
                opacity: 0, 
                x: direction < 0 ? ANIMATION_DISTANCE : -ANIMATION_DISTANCE
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
                opacity: { duration: 0.15 }
              }}
              className="w-full"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              <PainPointCard
                data={painPoints[currentIndex]}
                isActive={true}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
                className="w-full"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors",
              currentIndex === 0 && "opacity-50 cursor-not-allowed"
            )}
            disabled={currentIndex === 0}
            aria-label="Previous challenge"
          >
            <ChevronLeft className="w-6 h-6 text-[#007373]" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors",
              currentIndex === painPoints.length - 1 && "opacity-50 cursor-not-allowed"
            )}
            disabled={currentIndex === painPoints.length - 1}
            aria-label="Next challenge"
          >
            <ChevronRight className="w-6 h-6 text-[#007373]" />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {painPoints.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "w-8 bg-[#007373]" : "bg-[#007373]/20"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}