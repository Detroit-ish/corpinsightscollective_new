import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JourneyCircle from './JourneyCircle/index';
import { stages } from './stages';
import Button from '@/components/ui/button';

export default function Hero() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500 via-brand-secondary-500 to-brand-primary-700">
        <div className="absolute inset-0 opacity-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white">
                Your Business Journey
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-accent1 to-brand-accent2">
                  Starts Here
                </span>
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-white/90 font-opensans">
                Navigate through our interactive growth pathway designed to transform your B2B success with ethical tech solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="primary"
                  className="bg-white text-brand-primary-500 hover:bg-brand-accent1 hover:text-white"
                  showArrow
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="secondary"
                  className="border-2 border-white/20 text-white hover:bg-white/10"
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