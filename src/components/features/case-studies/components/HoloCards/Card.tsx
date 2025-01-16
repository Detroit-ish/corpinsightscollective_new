'use client';

import { useState } from 'react';
import { HoloCardProps } from '../../types';
import { VISUAL_SPECS } from '../../constants';
import { Content } from './Content';
import { cn } from '@/lib/utils/cn';

export const Card = ({
  study,
  className,
  onFlip,
  children
}: HoloCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article 
      className={cn(
        // Base card structure
        'w-full max-w-[390px] relative',
        'aspect-[3/4] overflow-hidden',
        // Design system surface with proper shadows
        'bg-brand-neutral-white rounded-lg',
        'shadow-sm hover:shadow-md',
        'transition-all duration-200',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onFlip?.(true)}
    >
      <div className="h-full flex flex-col p-8">
        {/* Category Tag */}
        <div className={cn(
          'inline-block self-start',
          'px-4 py-1.5 rounded-full',
          'bg-brand-primary-50/80',
          'font-montserrat text-sm font-medium',
          'text-brand-primary-600'
        )}>
          {study.category}
        </div>

        {/* Title */}
        <h3 className={cn(
          'mt-6',
          'font-playfair text-[28px] leading-tight',
          'text-brand-secondary-500'
        )}>
          {study.faces[0].title}
        </h3>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Metrics Grid */}
        {study.faces[0].metrics && (
          <div className="grid grid-cols-2 gap-6 mb-8">
            {study.faces[0].metrics.map((metric) => (
              <div 
                key={metric.label}
                className={cn(
                  'flex flex-col items-center justify-center p-4',
                  'rounded-lg bg-brand-accent2'
                )}
              >
                <span className={cn(
                  'font-montserrat text-[32px] font-bold leading-none',
                  'text-brand-accent1-500'
                )}>
                  {metric.value}
                </span>
                <span className={cn(
                  'mt-2 text-sm text-center',
                  'text-brand-secondary-400'
                )}>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Client Attribution */}
        <p className={cn(
          'font-montserrat text-sm',
          'text-brand-secondary-400'
        )}>
          {study.clientName}
        </p>
      </div>

      {children}
    </article>
  );
};