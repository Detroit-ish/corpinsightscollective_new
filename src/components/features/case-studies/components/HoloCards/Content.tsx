import { ReactNode } from 'react';
import { VISUAL_SPECS } from '../../constants';
import { cn } from '@/lib/utils/cn';

interface ContentProps {
  className?: string;
  children: ReactNode;
}

export const Content = ({
  className,
  children
}: ContentProps) => {
  return (
    <div 
      className={cn(
        // Content structure
        'h-full flex flex-col',
        
        // Overflow handling
        'overflow-y-auto overscroll-contain',
        'scrollbar-thin scrollbar-thumb-brand-secondary-200',
        'scrollbar-track-transparent',
        
        // Safe area
        'px-safe-area-x py-safe-area-y',
        
        className
      )}
    >
      {children}
    </div>
  );
};