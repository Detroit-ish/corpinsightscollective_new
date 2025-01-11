import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { InfoCardContent } from '@/components/features/hero/types';

interface InfoCardProps {
  content: InfoCardContent;
  isVisible: boolean;
  onClose: () => void;
  isMobile?: boolean;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  content,
  isVisible,
  onClose,
  isMobile = false,
  className
}) => {
  if (!isVisible) return null;

  const mobileCard = (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Card */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-x-0 bottom-0 mx-4 mb-4 bg-white rounded-xl shadow-xl z-50 
                   max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-brand-secondary/60 hover:text-brand-secondary
                     transition-colors"
            aria-label="Close info card"
          >
            <X size={20} />
          </button>

          {/* Title */}
          <h2 className="text-xl font-playfair font-bold text-brand-secondary mb-4">
            {content.title}
          </h2>
          
          {/* Description */}
          <p className="text-brand-secondary/80 mb-6">
            {content.description}
          </p>

          {/* Tools Section */}
          {content.tools && content.tools.length > 0 && (
            <div className="mt-6">
              <h3 className="font-montserrat font-semibold text-sm text-brand-secondary mb-3">
                Tools & Resources
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-accent2 rounded-full text-sm text-brand-secondary/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Points Section */}
          {content.keyPoints && content.keyPoints.length > 0 && (
            <div className="mt-6">
              <h3 className="font-montserrat font-semibold text-sm text-brand-secondary mb-3">
                Key Points
              </h3>
              <ul className="space-y-2">
                {content.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-brand-secondary/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );

  const desktopCard = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
  
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.3,
            ease: 'easeOut'
          }
        }}
        exit={{ 
          opacity: 0, 
          y: 20, 
          scale: 0.95,
          transition: {
            duration: 0.2
          }
        }}
        className={cn(
          'relative w-full max-w-md mx-auto bg-white rounded-lg shadow-xl p-6',
          'transform -translate-y-4',
          className
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-brand-secondary/60 hover:text-brand-secondary
                   transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-playfair font-bold text-brand-secondary">
            {content.title}
          </h3>

          <p className="text-brand-secondary/80">
            {content.description}
          </p>

          {/* Tools Section */}
          {content.tools && content.tools.length > 0 && (
            <div>
              <h4 className="font-montserrat font-medium text-sm text-brand-secondary mb-2">
                Tools & Resources
              </h4>
              <div className="flex flex-wrap gap-2">
                {content.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-accent2 rounded-full text-sm text-brand-secondary/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Points */}
          {content.keyPoints && content.keyPoints.length > 0 && (
            <div>
              <h4 className="font-montserrat font-medium text-sm text-brand-secondary mb-2">
                Key Points
              </h4>
              <ul className="space-y-2">
                {content.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-brand-secondary/80"
                  >
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent1 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  return isMobile ? mobileCard : desktopCard;
};

export default InfoCard;