import { useCallback, useRef, useState } from 'react';
import { INTERACTION_SPECS } from '../constants';

interface TouchState {
  startX: number;
  startY: number;
  startTime: number;
}

interface UseCardInteractionProps {
  onTap?: () => void;
  onDoubleTap?: () => void;
  onHold?: () => void;
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
}

export const useCardInteraction = ({
  onTap,
  onDoubleTap,
  onHold,
  onSwipe
}: UseCardInteractionProps = {}) => {
  const [isHolding, setIsHolding] = useState(false);
  const touchRef = useRef<TouchState | null>(null);
  const lastTapRef = useRef<number>(0);
  const holdTimerRef = useRef<NodeJS.Timeout>();

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      startTime: Date.now()
    };

    // Setup hold timer
    holdTimerRef.current = setTimeout(() => {
      setIsHolding(true);
      onHold?.();
    }, INTERACTION_SPECS.holdThreshold);
  }, [onHold]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return;

    // Clear hold timer
    clearTimeout(holdTimerRef.current);
    setIsHolding(false);

    const touchDuration = Date.now() - touchRef.current.startTime;
    
    // Handle tap
    if (touchDuration < INTERACTION_SPECS.tapThreshold) {
      const now = Date.now();
      const timeSinceLastTap = now - lastTapRef.current;
      
      if (timeSinceLastTap < INTERACTION_SPECS.doubleTapThreshold) {
        onDoubleTap?.();
        lastTapRef.current = 0; // Reset last tap
      } else {
        onTap?.();
        lastTapRef.current = now;
      }
    }

    // Handle swipe
    if (onSwipe && touchRef.current) {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchRef.current.startX;
      const deltaY = touch.clientY - touchRef.current.startY;
      
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
      const minSwipeDistance = 50; // Minimum distance for swipe

      if (isHorizontalSwipe && Math.abs(deltaX) > minSwipeDistance) {
        onSwipe(deltaX > 0 ? 'right' : 'left');
      } else if (!isHorizontalSwipe && Math.abs(deltaY) > minSwipeDistance) {
        onSwipe(deltaY > 0 ? 'down' : 'up');
      }
    }

    touchRef.current = null;
  }, [onTap, onDoubleTap, onSwipe]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    // Clear hold timer if movement detected
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      setIsHolding(false);
    }
  }, []);

  return {
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove
    },
    isHolding
  };
};