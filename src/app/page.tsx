'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Shield, Users } from "lucide-react";
import Link from 'next/link';
import { stages } from '@/components/features/journey/circle/stages';
import JourneyCircle from '@/components/features/journey/circle/JourneyCircle';
import BusinessJourneyContainer from '@/components/features/journey/business/BusinessJourney';

export default function Home() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-accent2 to-brand-accent3 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            {/* Hero Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-brand-secondary">
                  Transform Your B2B Growth with
                  <span className="text-brand-primary block mt-2">
                    Ethical Tech Solutions
                  </span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-brand-secondary/80 font-opensans">
                  Blending old-school business wisdom with cutting-edge technology to drive authentic B2B growth in the digital age.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/start"
                    className="px-8 py-4 bg-brand-primary text-white rounded-lg font-montserrat
                             flex items-center justify-center gap-2 group
                             hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/learn-more"
                    className="px-8 py-4 bg-white/80 text-brand-secondary rounded-lg 
                             font-montserrat flex items-center justify-center
                             hover:bg-white transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Journey Visualization Container */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="flex justify-center">
                <JourneyCircle 
                  stages={stages}
                  activeStage={activeStage}
                  onStageClick={setActiveStage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey Section */}
      <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-accent2/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-secondary">
                Your Business Journey Starts Here
              </h2>
              <p className="mt-4 text-lg text-brand-secondary/80 max-w-2xl mx-auto font-opensans">
                Navigate through our interactive growth pathway designed to help you achieve measurable business success.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <BusinessJourneyContainer />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-accent2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-secondary">
              Why Choose CorpInsights Collective?
            </h2>
            <p className="mt-4 text-lg text-brand-secondary/80 max-w-2xl mx-auto">
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
                className="relative p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="p-2 inline-block bg-brand-accent3 rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-playfair font-semibold text-brand-secondary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-brand-secondary/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Let&apos;s explore how we can help you achieve sustainable growth with ethical tech solutions.
          </p>
          <div className="mt-8">
            <Link 
              href="/consultation"
              className="px-8 py-4 bg-white text-brand-primary rounded-lg font-montserrat
                       inline-flex items-center justify-center gap-2 group
                       hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}