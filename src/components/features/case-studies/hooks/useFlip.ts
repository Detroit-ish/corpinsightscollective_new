"use client";

import { useState, useCallback, useRef } from 'react';
import { INTERACTION_LIMITS } from '../constants';

interface UseFlipOptions {
  onFlip?: (isFlipped: boolean) => void;
  cooldown?: number;
}

export const useFlip = ({
  onFlip,
  cooldown = INTERACTION_LIMITS.flipCooldown
}: UseFlipOptions = {}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const lastFlipTime = useRef<number>(0);

  const canFlip = useCallback(() => {
    const now = Date.now();
    return now - lastFlipTime.current >= cooldown;
  }, [cooldown]);

  const handleFlip = useCallback(() => {
    if (!canFlip()) return;

    setIsFlipping(true);
    lastFlipTime.current = Date.now();

    setIsFlipped(prev => {
      const newState = !prev;
      onFlip?.(newState);
      return newState;
    });

    setTimeout(() => {
      setIsFlipping(false);
    }, 300); // Match this with Framer Motion duration
  }, [canFlip, onFlip]);

  const resetFlip = useCallback(() => {
    setIsFlipped(false);
    setIsFlipping(false);
    lastFlipTime.current = 0;
  }, []);

  return {
    isFlipped,
    isFlipping,
    canFlip: canFlip(),
    handleFlip,
    resetFlip
  };
};