"use client";

import { Card } from '../components/HoloCards/Card';
import { TEST_CASES } from './fixtures/test-cases';

export default function SingleCardTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="mx-auto max-w-sm">
        <Card 
          study={TEST_CASES[0]} // System Build case
          onFlip={(isFlipped) => console.log('Card flipped:', isFlipped)}
        />
      </div>
    </div>
  );
}