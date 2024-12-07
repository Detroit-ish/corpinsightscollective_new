// src/components/businessJourneySim/TechBusinessIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import TechBusinessSvg from './TechBusinessSvg';
import type { TechBusinessIconProps } from '../types';

const TechBusinessIcon = React.forwardRef<HTMLButtonElement, TechBusinessIconProps>(
  ({ onClick, className, isActive = false, variant = 'default' }, ref) => {
    const content = {
      default: {
        title: 'Tech-Focused Business',
        subtitle: 'Start your journey'
      },
      growth: {
        title: 'Growth Strategy',
        subtitle: 'Explore opportunities'
      },
      strategy: {
        title: 'Market Strategy',
        subtitle: 'Define your path'
      }
    }[variant];

    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        className={cn(
          'group relative flex items-center gap-3 rounded-lg bg-white p-4',
          'shadow-lg transition-all hover:shadow-xl border-2',
          isActive ? 'border-brand-accent1' : 'border-transparent',
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative h-12 w-12">
          <TechBusinessSvg />
        </div>

        <div className="flex-1 text-left">
          <h3 className="text-lg font-semibold font-montserrat text-brand-secondary">
            {content.title}
          </h3>
          <p className="text-sm text-brand-secondary/70">
            {content.subtitle}
          </p>
        </div>

        <motion.div
          className="text-brand-primary"
          animate={isActive ? { x: [0, 5, 0] } : undefined}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      </motion.button>
    );
  }
);

TechBusinessIcon.displayName = 'TechBusinessIcon';

export default TechBusinessIcon;