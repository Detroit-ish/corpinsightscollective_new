// src/components/businessJourneySim/icons/TechBusinessSvg.tsx
import { FC } from 'react';

interface TechBusinessSvgProps {
  className?: string;
}

// Using default export instead of named export
const TechBusinessSvg: FC<TechBusinessSvgProps> = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className={className}
  >
    <circle cx={24} cy={24} r={24} className="fill-brand-primary"/>
    <path 
      d="M14 32h20v2a2 2 0 01-2 2H16a2 2 0 01-2-2v-2z" 
      className="fill-white"
    />
    <rect 
      x={10} 
      y={12} 
      width={28} 
      height={20} 
      rx={2} 
      className="fill-white"
    />
    <path 
      d="M18 24l4-4 4 4 6-6" 
      className="stroke-brand-primary" 
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />
    <circle cx={18} cy={24} r={1.5} className="fill-brand-primary"/>
    <circle cx={22} cy={20} r={1.5} className="fill-brand-primary"/>
    <circle cx={26} cy={24} r={1.5} className="fill-brand-primary"/>
    <circle cx={32} cy={18} r={1.5} className="fill-brand-primary"/>
  </svg>
);

// Use default export
export default TechBusinessSvg;