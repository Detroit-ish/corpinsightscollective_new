// src/components/businessJourneySim/BusinessJourney.tsx
import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import TechBusinessIcon from './StageIcon';
import type { JourneyStage } from '../../hero/types';

const initialStage: JourneyStage = {
  id: 'start',
  title: 'Getting Started',
  description: 'Begin your growth journey',
  variant: 'default',
  isCompleted: false
};

interface BusinessJourneyContainerProps {
  className?: string;
}

const BusinessJourneyContainer: FC<BusinessJourneyContainerProps> = ({
  className
}) => {
  const [currentStage, setCurrentStage] = useState<JourneyStage>(initialStage);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStageClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStage(prev => ({
      ...prev,
      isCompleted: true
    }));
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className={cn('w-full max-w-2xl mx-auto p-4', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TechBusinessIcon
          variant={currentStage.variant}
          isActive={!currentStage.isCompleted}
          onClick={handleStageClick}
        />
      </motion.div>
    </div>
  );
};

export default BusinessJourneyContainer;