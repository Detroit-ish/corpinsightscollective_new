export const DEVICE_SPECS = {
  defaultWidth: '390px',    // iPhone 12 Pro
  maxCardHeight: '80vh',    // Responsive but contained
  perspective: '1000px',    // Consistent 3D depth
  breakpoints: {
    sm: '390px',
    md: '768px',
    lg: '1024px'
  }
} as const;

export const INTERACTION_LIMITS = {
  maxVisibleCards: 3,       // Performance optimized
  scrollThrottle: 50,       // ms between scroll events
  flipCooldown: 500,        // ms between flip attempts
  singleCardOpen: true      // Only one card flipped at a time
} as const;