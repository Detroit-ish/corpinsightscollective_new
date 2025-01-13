/**
 * ComponentName
 * 
 * @device Developed initially for iPhone 12 Pro (390px)
 * @viewport Default mobile viewport
 * @breakpoints
 * - Base: iPhone 12 Pro (390px)
 * - Small: iPhone SE (375px)
 * - Large: iPhone 14 Pro Max (428px)
 * - Tablet: >= 768px
 * - Desktop: >= 1024px
 * 
 * @description
 * Brief description of the component's purpose
 * 
 * @designTokens
 * Colors: brand-primary-500, brand-secondary-400
 * Typography: text-h3, text-body
 * Spacing: space-y-4, p-6
 * Gradients: gradient-professional (if used)
 * 
 * @animation
 * - Uses scale-in animation for mount
 * - Transitions: duration-200 for hover/active states
 */

import React from 'react';
import { cn } from './lib/utils';  // Updated import path

interface ComponentProps {
    className?: string;
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    isActive?: boolean;
}

export default function Component({ 
    className,
    children,
    variant = 'primary',
    isActive = false
}: ComponentProps) {
    // Base classes following our design system
    const baseClasses = cn(
        // Layout & Spacing
        "p-4 rounded-lg",
        
        // Typography
        "text-body md:text-body-lg font-roboto",
        
        // Transitions
        "transition-all duration-200",
        
        // Variants
        variant === 'primary' && "bg-brand-primary-500 text-brand-neutral-white",
        variant === 'secondary' && "bg-brand-secondary-50 text-brand-secondary-500",
        
        // States
        isActive && "ring-2 ring-brand-primary-300",
        
        // Custom classes passed in
        className
    );
    
    return (
        <div className={baseClasses}>
            {children}
        </div>
    );
}
