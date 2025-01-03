import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import InfoCard from '@/components/ui/InfoCard';
import type { Stage, StageStatus } from '../types';
import { CIRCLE_CONFIG, STAGE_COLORS, MOBILE_CONFIG } from '@/lib/constants/journey';

interface JourneyCircleProps {
  stages: Stage[];
  activeStage: number;
  onStageClick: (stageId: number) => void;
}

const getStageColor = (status: StageStatus) => STAGE_COLORS[status];

const JourneyCircle: React.FC<JourneyCircleProps> = ({
  stages,
  activeStage,
  onStageClick,
}) => {
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [activeLines, setActiveLines] = useState<number[]>([]);
  const isDesktop = useBreakpoint('lg');

  const calculatePosition = (index: number, total: number) => {
    const angleStep = (2 * Math.PI) / total;
    const angle = index * angleStep - Math.PI / 2;
    return {
      x: CIRCLE_CONFIG.RADIUS * Math.cos(angle) + CIRCLE_CONFIG.RADIUS + CIRCLE_CONFIG.NODE_SIZE,
      y: CIRCLE_CONFIG.RADIUS * Math.sin(angle) + CIRCLE_CONFIG.RADIUS + CIRCLE_CONFIG.NODE_SIZE,
    };
  };

  const handleStageComplete = (stageId: number) => {
    // Add to completed stages if not already completed
    if (!completedStages.includes(stageId)) {
      setCompletedStages(prev => [...prev, stageId]);
    }

    // Always activate the line to the next stage when completing current stage
    const currentIndex = stageId - 1;
    if (currentIndex < stages.length - 1) {  // If not the last stage
      setActiveLines(prev => {
        if (!prev.includes(currentIndex)) {
          return [...prev, currentIndex];
        }
        return prev;
      });
    }
    setSelectedStage(null);
  };

  const handleStageClick = (stage: Stage) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSelectedStage(stage);
      
      // Complete the line leading to this stage
      const previousStageIndex = stage.id - 2;
      if (previousStageIndex >= 0) {
        setActiveLines(prev => prev.filter(lineIndex => lineIndex !== previousStageIndex));
      }
      
      onStageClick(stage.id);
      setTimeout(() => setIsAnimating(false), CIRCLE_CONFIG.ANIMATION_DURATION * 1000);
    }
  };

  const getStageStatus = (stageId: number): StageStatus => {
    if (completedStages.includes(stageId)) return 'completed';
    if (stageId === activeStage) return 'active';
    return 'upcoming';
  };

  const getLineStatus = (currentIndex: number): StageStatus => {
    // If the next stage is completed, show completed line
    if (completedStages.includes(currentIndex + 2)) return 'completed';
    // If current stage is completed (and next isn't), show active/animated line
    if (activeLines.includes(currentIndex)) return 'active';
    return 'upcoming';
  };

  const ConnectionLines = () => (
    <svg className="absolute inset-0 w-full h-full">
      {stages.map((_, index) => {
        const start = calculatePosition(index, stages.length);
        const end = calculatePosition((index + 1) % stages.length, stages.length);
        const lineStatus = getLineStatus(index);
        
        // Special handling for the closing line (5 to 1)
        const isClosingLine = index === stages.length - 1;
        const isAllComplete = stages.every(stage => completedStages.includes(stage.id));
        const shouldShowClosingLine = isClosingLine && completedStages.includes(stages.length);

        if (isClosingLine && !shouldShowClosingLine) return null;

        // Use completed color for closing line when all stages are complete
        const colors = getStageColor(
          isClosingLine && isAllComplete ? 'completed' : lineStatus
        );

        return (
          <g key={index}>
            {/* Background line */}
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={STAGE_COLORS.upcoming.connection}
              strokeWidth="2"
              strokeDasharray="6,6"
              opacity={0.2}
            />
            
            {/* Animated/completed line */}
            {(lineStatus !== 'upcoming' || shouldShowClosingLine) && (
              <motion.line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={colors.connection}
                strokeWidth="2"
                strokeDasharray="6,6"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  strokeDashoffset: lineStatus === 'active' ? [0, -20] : 0 
                }}
                transition={{ 
                  duration: CIRCLE_CONFIG.ANIMATION_DURATION,
                  ease: "linear",
                  repeat: lineStatus === 'active' ? Infinity : 0
                }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );

  const MobileView = () => (
    <div className="w-full space-y-6 pb-20">
      {stages.map((stage, index) => {
        const status = getStageStatus(stage.id);
        
        return (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * MOBILE_CONFIG.ANIMATION_DELAY }}
            className="bg-white rounded-lg shadow-sm"
          >
            <button
              onClick={() => handleStageClick(stage)}
              className="w-full p-4 flex items-start gap-4 relative"
            >
              {/* Icon Container */}
              <div 
                className={`relative w-12 h-12 rounded-full flex items-center justify-center 
                           transition-all duration-300 bg-white border-2
                           ${status === 'completed' 
                             ? 'border-brand-primary' 
                             : status === 'active'
                             ? 'border-brand-accent1 animate-pulse'
                             : 'border-brand-accent1/40'}`}
              >
                <span className={`text-2xl ${status === 'completed' ? 'text-brand-primary' : 'text-brand-secondary'}`}>
                  {stage.icon}
                </span>
              </div>
              
              <div className="flex-1 text-left">
                <h3 className="font-playfair font-bold text-lg text-brand-secondary">
                  {stage.title}
                </h3>
                {stage.description && (
                  <p className="text-sm text-brand-secondary/70 mt-1">
                    {stage.description}
                  </p>
                )}
              </div>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
  
  return (
    <div className="w-full max-w-[400px] mx-auto relative">
      <div className="relative aspect-square hidden lg:block">
        <ConnectionLines />
        
        {stages.map((stage, index) => {
          const position = calculatePosition(index, stages.length);
          const status = getStageStatus(stage.id);
          const colors = getStageColor(status);

          return (
            <motion.button
              key={stage.id}
              className={`journey-node ${colors.bg} w-16 h-16 -ml-8 -mt-8`}
              style={{ left: position.x, top: position.y }}
              onClick={() => handleStageClick(stage)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-2xl ${colors.text}`}>{stage.icon}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="block lg:hidden">
        <MobileView />
      </div>

      {selectedStage && (
        <InfoCard
          content={{
            title: selectedStage.title,
            description: selectedStage.description || '',
            tools: selectedStage.tools,
            keyPoints: selectedStage.keyPoints,
          }}
          isVisible={!!selectedStage}
          onClose={() => handleStageComplete(selectedStage.id)}
          isMobile={!isDesktop}
          className="fixed inset-x-0 bottom-0 mx-4 mb-4 z-50"
        />
      )}
    </div>
  );
};

export default JourneyCircle;