/**
 * Button Component - Core UI Element
 * 
 * Design System Implementation Notes:
 * 1. Colors: Uses design system color tokens via predefined classes
 *    - Primary: Professional gradient
 *    - Secondary: Surface color with secondary text
 *    - CTA: Action gradient
 * 
 * 2. Typography: 
 *    - Font: Montserrat (via font-montserrat class)
 *    - Size: Following design system mobile/desktop scale
 * 
 * 3. Interactions:
 *    - Hover: Opacity change (defined in design system)
 *    - Animation: System-standard durations
 *    - Scale: Matches design system hover state spec
 * 
 * 4. Accessibility:
 *    - ARIA roles for link buttons
 *    - Proper contrast ratios maintained through tokens
 *    - Focus states handled by btn class
 */

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cta';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
  onClick,
}) => {
  // Using design system btn class as base
  const baseStyles = "btn";
  
  // Variant styles from design system
  const variants = {
    primary: "btn-primary", // Uses predefined gradient and states
    secondary: "btn-secondary", // Uses predefined surface colors
    cta: "bg-gradient-action text-brand-neutral-white hover:opacity-90 focus:ring-brand-accent1-500" // Uses system gradient
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
          aria-hidden="true"
        />
      )}
    </>
  );

  // Link variant
  if (href) {
    return (
      <Link 
        href={href}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
        role="button"
      >
        {buttonContent}
      </Link>
    );
  }

  // Button variant with motion
  return (
    <motion.button
      whileHover={{ scale: 1.02 }} // Matches design system scale factor
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;

/**
 * Change Log - Design System Updates
 * 
 * 1. Replaced direct hex values with design system classes:
 *    - Removed: bg-[#007373], bg-[#2B3A42], bg-[#FF6F4F]
 *    - Added: btn-primary, btn-secondary, bg-gradient-action
 * 
 * 2. Implemented system-defined classes:
 *    - Added base btn class for consistent styling
 *    - Using predefined focus states
 * 
 * 3. Standardized animations:
 *    - Updated transition durations to match system (200ms)
 *    - Maintained motion scale values for consistency
 * 
 * 4. Added comprehensive documentation:
 *    - Component purpose
 *    - Design system integration points
 *    - Usage guidelines
 * 
 * Future Considerations:
 * - Consider adding size variants (sm, lg)
 * - Evaluate need for additional gradient variants
 * - Monitor usage patterns for potential new variants
 */