/**
 * Button Component - Core UI Element
 */

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps {
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
  const baseStyles = "btn";
  
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    cta: "bg-gradient-action text-brand-neutral-white hover:opacity-90 focus:ring-brand-accent1-500"
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

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;