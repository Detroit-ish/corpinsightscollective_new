'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Zap, Box } from 'lucide-react';
import { PainPointCardProps } from './types';
import { cn } from '@/lib/utils/cn';

export const PainPointCard = ({
  data,
  isActive,
  onSwipeLeft,
  onSwipeRight,
  className
}: PainPointCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleDragStart = (_: any, info: any) => {
    setDragStart({ x: info.point.x, y: info.point.y });
  };

  const handleDragEnd = (_: any, info: any) => {
    const dragX = info.point.x - dragStart.x;
    const dragY = info.point.y - dragStart.y;
    const SWIPE_THRESHOLD = 30;

    // Only handle swipes on mobile
    if (window.innerWidth < 1024) {
      if (Math.abs(dragX) > Math.abs(dragY)) {
        if (Math.abs(dragX) > SWIPE_THRESHOLD) {
          if (dragX > 0) {
            onSwipeRight();
          } else {
            onSwipeLeft();
          }
        }
      } else {
        if (Math.abs(dragY) > SWIPE_THRESHOLD) {
          setIsExpanded(dragY < 0);
        }
      }
    }
  };

  // Main card view with stats
  const MainView = () => (
    <div className="h-full flex flex-col justify-between lg:justify-start lg:space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-playfair font-bold text-[#2B3A42]">
          {data.title}
        </h3>
        <p className="text-lg font-opensans text-[#2B3A42]/80">
          {data.description}
        </p>
        
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-[#FF6F4F] flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{data.stats.value}</span>
          </div>
          <p className="flex-1 text-[#2B3A42]/80 font-opensans">
            {data.stats.context}
          </p>
        </div>
      </div>

      <div className="text-center space-y-2 lg:hidden">
        <ChevronUp className="mx-auto text-[#FF6F4F] animate-bounce" />
        <p className="text-sm text-[#2B3A42]/60 font-opensans">
          Swipe up for solutions
        </p>
      </div>
    </div>
  );

  // Solutions view
  const SolutionsView = () => (
    <div className="h-full flex flex-col space-y-6">
      {/* Quick Win */}
      <div className="flex-1 bg-[#007373]/5 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-[#007373]" />
          <h4 className="font-playfair font-bold text-[#007373]">
            {data.solutions.quickWin.title}
          </h4>
        </div>
        <p className="text-[#2B3A42]/80 font-opensans mb-4">
          {data.solutions.quickWin.description}
        </p>
        <p className="text-sm text-[#007373] font-opensans">
          ⏱️ {data.solutions.quickWin.timeEstimate}
        </p>
      </div>

      {/* Systemic Fix */}
      <div className="flex-1 bg-[#FF6F4F]/5 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Box className="text-[#FF6F4F]" />
          <h4 className="font-playfair font-bold text-[#FF6F4F]">
            {data.solutions.systemicFix.title}
          </h4>
        </div>
        <p className="text-[#2B3A42]/80 font-opensans mb-4">
          {data.solutions.systemicFix.description}
        </p>
        <p className="text-sm text-[#FF6F4F] font-opensans">
          🚀 {data.solutions.systemicFix.timeframe}
        </p>
      </div>

      <div className="text-center mt-6 lg:hidden">
        <ChevronDown className="mx-auto text-[#2B3A42]/40" />
        <p className="text-sm text-[#2B3A42]/60 font-opensans">
          Swipe down to return
        </p>
      </div>
    </div>
  );

  return (
    <div className={cn(
      "w-full",
      // Mobile: Vertical stack with swipe
      "block lg:hidden",
      className
    )}>
      <motion.div
        className="relative w-full aspect-[3/4] touch-none"
        drag
        dragDirectionLock
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.9}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        initial={false}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? 'solution' : 'main'}
            initial={{ y: isExpanded ? 100 : -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: isExpanded ? -100 : 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6"
          >
            {isExpanded ? <SolutionsView /> : <MainView />}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <MainView />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <SolutionsView />
        </div>
      </div>
    </div>
  );
};