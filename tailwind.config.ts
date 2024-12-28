import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Color System - Strategic Business Elements
      colors: {
        // Primary Teal Scale - Core Business & Trust
        'brand-primary-50': 'var(--brand-primary-50)',
        'brand-primary-100': 'var(--brand-primary-100)',
        'brand-primary-200': 'var(--brand-primary-200)',
        'brand-primary-300': 'var(--brand-primary-300)',
        'brand-primary-400': 'var(--brand-primary-400)',
        'brand-primary-500': 'var(--brand-primary-500)',
        'brand-primary-600': 'var(--brand-primary-600)',
        'brand-primary-700': 'var(--brand-primary-700)',
        'brand-primary-800': 'var(--brand-primary-800)',
        'brand-primary-900': 'var(--brand-primary-900)',
        
        // Secondary Dark Blue-Grey - Professional Structure
        'brand-secondary-50': 'var(--brand-secondary-50)',
        'brand-secondary-100': 'var(--brand-secondary-100)',
        'brand-secondary-200': 'var(--brand-secondary-200)',
        'brand-secondary-300': 'var(--brand-secondary-300)',
        'brand-secondary-400': 'var(--brand-secondary-400)',
        'brand-secondary-500': 'var(--brand-secondary-500)',
        'brand-secondary-600': 'var(--brand-secondary-600)',
        'brand-secondary-700': 'var(--brand-secondary-700)',
        'brand-secondary-800': 'var(--brand-secondary-800)',
        'brand-secondary-900': 'var(--brand-secondary-900)',

        // Accent Coral - Growth & Achievement
        'brand-accent1-50': 'var(--brand-accent1-50)',
        'brand-accent1-100': 'var(--brand-accent1-100)',
        'brand-accent1-200': 'var(--brand-accent1-200)',
        'brand-accent1-300': 'var(--brand-accent1-300)',
        'brand-accent1-400': 'var(--brand-accent1-400)',
        'brand-accent1-500': 'var(--brand-accent1-500)',
        'brand-accent1-600': 'var(--brand-accent1-600)',
        'brand-accent1-700': 'var(--brand-accent1-700)',
        'brand-accent1-800': 'var(--brand-accent1-800)',
        'brand-accent1-900': 'var(--brand-accent1-900)',
        
        // Surface Colors - Layout & Structure
        'brand-accent2': 'var(--brand-accent2)',
        'brand-accent3': 'var(--brand-accent3)',

        // Semantic Colors - System Feedback
        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'error': 'var(--color-error)',
        'info': 'var(--color-info)',
      },

      // Typography System - Professional Hierarchy
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        opensans: ['var(--font-opensans)'],
        montserrat: ['var(--font-montserrat)'],
      },

      // Font Sizes - Responsive Text Scale
      fontSize: {
        'body': ['var(--font-size-body)', { lineHeight: 'var(--line-height-normal)' }],
        'body-desktop': ['var(--font-size-body-desktop)', { lineHeight: 'var(--line-height-normal)' }],
        
        'h1': ['var(--font-size-h1)', { lineHeight: 'var(--line-height-tight)' }],
        'h1-desktop': ['var(--font-size-h1-desktop)', { lineHeight: 'var(--line-height-tight)' }],
        'h1-hero': ['var(--font-size-h1-hero)', { lineHeight: 'var(--line-height-tight)' }],
        
        'h2': ['var(--font-size-h2)', { lineHeight: 'var(--line-height-tight)' }],
        'h2-desktop': ['var(--font-size-h2-desktop)', { lineHeight: 'var(--line-height-tight)' }],
        
        'h3': ['var(--font-size-h3)', { lineHeight: 'var(--line-height-snug)' }],
        'h3-desktop': ['var(--font-size-h3-desktop)', { lineHeight: 'var(--line-height-snug)' }],
        
        'h4': ['var(--font-size-h4)', { lineHeight: 'var(--line-height-normal)' }],
        'h4-desktop': ['var(--font-size-h4-desktop)', { lineHeight: 'var(--line-height-normal)' }],
        
        'metric': ['var(--font-size-metric)', { lineHeight: '1' }],
        'metric-desktop': ['var(--font-size-metric-desktop)', { lineHeight: '1' }],
        
        'technical': ['var(--font-size-technical)', { lineHeight: 'var(--line-height-normal)' }],
      },

      // Background Gradients - Strategic Visual Elements
      backgroundImage: {
        'gradient-professional': 'var(--gradient-professional)',
        'gradient-growth': 'var(--gradient-growth)',
        'gradient-action': 'var(--gradient-action)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-tech': 'var(--gradient-tech)',
      },

      // Animation System - Interactive Elements
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 111, 79, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 111, 79, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 111, 79, 0)' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        pulse: 'pulse 2s infinite',
        'fade-up': 'fade-up 0.5s ease-out',
        'scale-in': 'scale-in 0.2s ease-out'
      },

      // Spacing System - Consistent Rhythm
      spacing: {
        'px': 'var(--spacing-px)',
        0: 'var(--spacing-0)',
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        6: 'var(--spacing-6)',
        8: 'var(--spacing-8)',
        12: 'var(--spacing-12)',
        16: 'var(--spacing-16)',
      },

      // Line Heights - Typography Refinement
      lineHeight: {
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
      },
    },
  },
  plugins: [],
};

export default config;