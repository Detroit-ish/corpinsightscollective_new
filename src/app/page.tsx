'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Shield, Users } from "lucide-react";
import { stages } from '@/components/features/hero/stages';
import JourneyCircle from '@/components/features/journey/circle/JourneyCircle';
import BusinessJourneyContainer from '@/components/features/journey/business/BusinessJourney';
import Button from '@/components/ui/button';

export default function Home() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Unified with Header */}
      <section className="relative bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500">
        <div className="absolute inset-0 bg-gradient-tech mix-blend-overlay opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-[48px] md:text-[64px] font-playfair font-bold text-white leading-tight">
                  Transform Your B2B Growth with
                  <span className="block mt-2">
                    Ethical Tech Solutions
                  </span>
                </h1>
                <p className="mt-6 text-[18px] md:text-[20px] text-white/90 font-opensans max-w-xl">
                  Blending old-school business wisdom with cutting-edge technology to drive authentic B2B growth in the digital age.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="/start" variant="primary" showArrow>
                    Get Started
                  </Button>
                  <Button href="/learn-more" variant="secondary">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Journey Visualization Container */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
              <JourneyCircle 
                stages={stages}
                activeStage={activeStage}
                onStageClick={setActiveStage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey Section */}
      <section className="relative bg-gradient-surface py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[36px] md:text-[48px] font-playfair font-bold text-brand-secondary">
                Your Business Journey Starts Here
              </h2>
              <p className="mt-6 text-[18px] md:text-[20px] text-brand-secondary/80 max-w-2xl mx-auto font-opensans">
                Navigate through our interactive growth pathway designed to help you achieve measurable business success.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <BusinessJourneyContainer />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-accent2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-[36px] md:text-[48px] font-playfair font-bold text-brand-secondary">
              Why Choose CorpInsights Collective?
            </h2>
            <p className="mt-6 text-[18px] md:text-[20px] text-brand-secondary/80 max-w-2xl mx-auto font-opensans">
              We deliver scalable, human-centric solutions that drive genuine growth while maintaining ethical considerations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <BarChart2 className="w-8 h-8 text-brand-primary" />,
                title: "Data-Driven Growth",
                description: "Transform complex data into actionable insights that drive business growth."
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-primary" />,
                title: "Ethical Integration",
                description: "Implement technology solutions with a strong focus on ethics and security."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-primary" />,
                title: "Human-Centric",
                description: "Keep the human element at the forefront of technological advancement."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card group"
              >
                <div className="p-2 inline-block bg-brand-accent3 rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-[24px] font-playfair font-semibold text-brand-secondary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[16px] text-brand-secondary/80 font-opensans">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[36px] md:text-[48px] font-playfair font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-[18px] md:text-[20px] text-white/90 max-w-2xl mx-auto font-opensans">
            Let&apos;s explore how we can help you achieve sustainable growth with ethical tech solutions.
          </p>
          <div className="mt-10">
            <Button href="/consultation" variant="white" showArrow>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}