// src/lib/constants/journey.ts
export const CIRCLE_CONFIG = {
  RADIUS: 160,
  NODE_SIZE: 16, 
  ANIMATION_DURATION: 0.8,
  CONNECTION_OPACITY: 0.2
} as const;

export const STAGE_COLORS = {
  completed: {
    bg: 'bg-brand-primary-500',
    text: 'text-white',
    connection: 'rgba(0, 115, 115, 0.8)'
  },
  active: {
    bg: 'bg-brand-accent1-500',
    text: 'text-white',
    connection: 'rgba(255, 111, 79, 1)'
  },
  upcoming: {
    bg: 'bg-brand-primary-200',
    text: 'text-brand-secondary',
    connection: 'rgba(0, 115, 115, 0.2)'
  }
} as const;

export const MOBILE_CONFIG = {
  ANIMATION_DELAY: 0.1,
} as const;