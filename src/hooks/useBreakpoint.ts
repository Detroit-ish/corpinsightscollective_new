import { useState, useEffect } from 'react';

// Breakpoint values matching Tailwind's default breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    function checkBreakpoint() {
      setIsAboveBreakpoint(window.innerWidth >= breakpoints[breakpoint]);
    }

    // Initial check
    checkBreakpoint();

    // Add event listener
    window.addEventListener('resize', checkBreakpoint);

    // Cleanup
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, [breakpoint]);

  return isAboveBreakpoint;
}

// Example usage:
// const isMobile = !useBreakpoint('md');
// const isDesktop = useBreakpoint('lg');