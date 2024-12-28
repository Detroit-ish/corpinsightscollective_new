// src/components/ui/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
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
  const baseStyles = "px-6 py-3 rounded-lg font-montserrat text-[18px] font-medium inline-flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-accent1-500 to-brand-accent1-600 text-white hover:from-brand-accent1-600 hover:to-brand-accent1-700",
    secondary: "bg-white/90 text-brand-secondary hover:bg-white",
    white: "bg-white text-brand-primary hover:bg-opacity-95"
  };

  const buttonContent = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
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