'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Zap, Box } from 'lucide-react';
import { PainPointCardProps } from './types';
import { cn } from '@/lib/utils/cn';

const SWIPE_THRESHOLD = 50;

export const PainPointCard = ({
  data,
  isActive,
  onSwipeLeft,
  onSwipeRight,
  className
}: PainPointCardProps) => {
  const [cardView, setCardView] = useState<'main' | 'quickWin' | 'systemicFix'>('main');
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleDragStart = (_: any, info: any) => {
    setDragStart({ x: info.point.x, y: info.point.y });
  };

  const handleDragEnd = (_: any, info: any) => {
    const dragX = info.point.x - dragStart.x;
    const dragY = info.point.y - dragStart.y;

    if (Math.abs(dragX) > Math.abs(dragY)) {
      if (Math.abs(dragX) > SWIPE_THRESHOLD) {
        if (dragX > 0) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
      }
    } else if (Math.abs(dragY) > SWIPE_THRESHOLD) {
      if (dragY < 0) { // Swipe up
        if (cardView === 'main') setCardView('quickWin');
        else if (cardView === 'quickWin') setCardView('systemicFix');
      } else { // Swipe down
        if (cardView === 'systemicFix') setCardView('quickWin');
        else if (cardView === 'quickWin') setCardView('main');
      }
    }
  };

  const views = {
    main: (
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-6">
          <h3 className="text-2xl font-playfair font-bold text-brand-secondary">{data.title}</h3>
          <p className="text-lg font-opensans text-brand-secondary/80">{data.description}</p>
          <div className="bg-brand-primary/10 rounded-lg p-4">
            <p className="font-semibold text-brand-primary font-opensans">
              <span className="text-2xl">{data.stats.value}</span>
              <span className="text-base ml-2">{data.stats.context}</span>
            </p>
          </div>
        </div>
        <div className="text-center space-y-2">
          <ChevronUp className="mx-auto text-brand-accent1 animate-bounce" />
          <p className="text-sm text-brand-secondary/60 font-opensans">Swipe up for Quick Win</p>
        </div>
      </div>
    ),
    quickWin: (
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="bg-brand-primary/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-brand-primary" />
              <h4 className="font-playfair font-bold text-brand-primary">{data.solutions.quickWin.title}</h4>
            </div>
            <p className="text-brand-secondary/80 font-opensans mb-2">{data.solutions.quickWin.description}</p>
            <p className="text-sm text-brand-primary font-opensans">⏱️ {data.solutions.quickWin.timeEstimate}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <ChevronDown className="mx-auto text-brand-secondary/40" />
            <p className="text-sm text-brand-secondary/60 font-opensans">Swipe down to return</p>
          </div>
          <div className="text-center space-y-2">
            <ChevronUp className="mx-auto text-brand-accent1 animate-bounce" />
            <p className="text-sm text-brand-secondary/60 font-opensans">Swipe up for Systemic Fix</p>
          </div>
        </div>
      </div>
    ),
    systemicFix: (
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="bg-brand-accent1/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Box className="text-brand-accent1" />
              <h4 className="font-playfair font-bold text-brand-accent1">{data.solutions.systemicFix.title}</h4>
            </div>
            <p className="text-brand-secondary/80 font-opensans mb-2">{data.solutions.systemicFix.description}</p>
            <p className="text-sm text-brand-accent1 font-opensans">🚀 {data.solutions.systemicFix.timeframe}</p>
          </div>
        </div>
        <div className="text-center space-y-2">
          <ChevronDown className="mx-auto text-brand-secondary/40" />
          <p className="text-sm text-brand-secondary/60 font-opensans">Swipe down to return</p>
        </div>
      </div>
    )
  };

  return (
    <motion.div
      className={cn(
        "relative w-full aspect-[3/4] touch-none",
        isActive ? "z-10" : "z-0",
        className
      )}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      initial={false}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={cardView}
          initial={{ y: cardView === 'main' ? 300 : -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: cardView === 'main' ? -300 : 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6"
        >
          {views[cardView]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};