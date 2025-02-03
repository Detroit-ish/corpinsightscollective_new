import { Card } from './Card';
import { motion } from 'framer-motion';

interface StackedCardsProps {
  studies: any[];
  className?: string;
}

export const StackedCards = ({ studies, className = '' }: StackedCardsProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      {studies.map((study, index) => (
        <motion.div
          key={study.id}
          className="absolute top-0 w-full"
          style={{
            zIndex: studies.length - index,
            transform: `translateY(${index * 20}px) scale(${1 - index * 0.05})`,
            opacity: 1 - index * 0.2
          }}
        >
          <Card study={study} />
        </motion.div>
      ))}
    </div>
  );
};