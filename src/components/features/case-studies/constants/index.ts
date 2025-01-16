/**
 * Mobile-First Constants
 * Based on iPhone 12 Pro as default device
 */
export const DEVICE_SPECS = {
  // Base dimensions
  defaultWidth: 390, // iPhone 12 Pro width
  defaultHeight: 844, // iPhone 12 Pro height
  
  // Safe areas
  safeAreaTop: 47,    // iPhone 12 Pro notch
  safeAreaBottom: 34, // iPhone 12 Pro home indicator
  safeAreaSides: 0,
  
  // Card dimensions
  cardAspectRatio: 3/4,
  maxCardHeight: '80vh',
  
  // Breakpoints (matching design system)
  breakpoints: {
    sm: 390,   // iPhone 12 Pro
    md: 768,   // Tablet
    lg: 1024,  // Desktop
    xl: 1280   // Large desktop
  }
} as const;

/**
 * Visual Constants
 * Following design system specification
 */
export const VISUAL_SPECS = {
  // Surface treatments
  surface: {
    card: 'bg-brand-neutral-white shadow-sm hover:shadow-md transition-shadow duration-200',
    metric: 'bg-brand-accent2',
    tag: 'bg-brand-primary-50/80'
  },

  // Typography treatments
  text: {
    title: 'font-playfair text-h3 text-brand-secondary-500',
    metric: {
      value: 'font-montserrat text-2xl font-bold text-brand-accent1-500',
      label: 'font-montserrat text-sm font-medium text-brand-secondary-400'
    },
    tag: 'font-montserrat text-sm font-medium text-brand-primary-600',
    attribution: 'font-montserrat text-sm text-brand-secondary-400'
  },

  // Layout & Spacing
  layout: {
    card: 'p-6 flex flex-col',
    metrics: 'grid grid-cols-2 gap-4',
    metricItem: 'flex flex-col items-center justify-center p-4 rounded-lg'
  }
} as const;