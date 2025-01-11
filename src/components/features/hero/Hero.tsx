import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JourneyCircle from './JourneyCircle';
import { stages } from './stages';
import Button from '@/components/ui/Button';

/**
 * Hero Component - Main landing section
 * 
 * Design System Implementation:
 * - Typography uses text-h1/body classes for consistent scaling
 * - Uses professional gradient for background
 * - Implements system-defined opacity values
 * - Maintains responsive text sizing via design tokens
 */
export default function Hero() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background using design system gradient */}
      <div className="absolute inset-0 bg-gradient-professional">
        <div className="absolute inset-0 bg-brand-secondary-500/10" />
      </div>

      {/* Main Content Container */}
      <div className="container-base">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Journey Circle - Main focal point */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square">
                <JourneyCircle 
                  stages={stages}
                  activeStage={activeStage}
                  onStageClick={setActiveStage}
                />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-h1 md:text-h1-lg lg:text-h1-hero font-playfair font-bold text-brand-neutral-white">
                Your Business Journey
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-growth">
                  Starts Here
                </span>
              </h1>
              
              <p className="mt-6 text-body md:text-body-lg text-brand-neutral-white/90 font-roboto">
                Navigate through our interactive growth pathway designed to transform your B2B success with ethical tech solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="primary"
                  className="bg-brand-neutral-white text-brand-primary-500 hover:bg-brand-accent1-500 hover:text-brand-neutral-white"
                  showArrow
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="secondary"
                  className="border-2 border-brand-neutral-white/20 text-brand-neutral-white hover:bg-brand-neutral-white/10"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}