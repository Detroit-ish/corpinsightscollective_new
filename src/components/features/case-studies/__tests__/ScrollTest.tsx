"use client";

import { Card } from '../components/HoloCards';
import { TEST_CASES } from './fixtures/test-cases';

export const ScrollTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Test Environment Header */}
      <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 z-50">
        Scroll Behavior Test Environment
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="space-y-8">
          {/* Test Cases Grid */}
          {TEST_CASES.map((testCase, index) => (
            <div key={testCase.id} className="max-w-[390px] mx-auto">
              {/* Test Case Label */}
              <div className="mb-2 text-sm font-medium text-gray-600">
                Test Case {index + 1}: {testCase.category}
              </div>
              
              {/* Card Component */}
              <Card
                study={testCase}
                className="test-case-study-card"
                onFlip={(isFlipped) => 
                  console.log(`Card ${index + 1} flipped:`, isFlipped)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollTest;