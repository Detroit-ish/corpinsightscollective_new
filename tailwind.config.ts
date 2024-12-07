import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
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
        
        'brand-accent2': 'var(--brand-accent2)',
        'brand-accent3': 'var(--brand-accent3)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        opensans: ['var(--font-opensans)'],
        montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 111, 79, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 111, 79, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 111, 79, 0)' }
        }
      },
      animation: {
        pulse: 'pulse 2s infinite'
      }
    }
  },
  plugins: [],
};

export default config;