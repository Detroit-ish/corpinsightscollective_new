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
        'brand-primary': {
          50: 'var(--brand-primary-50)',
          100: 'var(--brand-primary-100)',
          200: 'var(--brand-primary-200)',
          300: 'var(--brand-primary-300)',
          400: 'var(--brand-primary-400)',
          500: 'var(--brand-primary-500)',
          600: 'var(--brand-primary-600)',
          700: 'var(--brand-primary-700)',
          800: 'var(--brand-primary-800)',
          900: 'var(--brand-primary-900)',
        },
        'brand-secondary': {
          50: 'var(--brand-secondary-50)',
          100: 'var(--brand-secondary-100)',
          200: 'var(--brand-secondary-200)',
          300: 'var(--brand-secondary-300)',
          400: 'var(--brand-secondary-400)',
          500: 'var(--brand-secondary-500)',
          600: 'var(--brand-secondary-600)',
          700: 'var(--brand-secondary-700)',
          800: 'var(--brand-secondary-800)',
          900: 'var(--brand-secondary-900)',
        },
        'brand-accent1': {
          50: 'var(--brand-accent1-50)',
          100: 'var(--brand-accent1-100)',
          200: 'var(--brand-accent1-200)',
          300: 'var(--brand-accent1-300)',
          400: 'var(--brand-accent1-400)',
          500: 'var(--brand-accent1-500)',
          600: 'var(--brand-accent1-600)',
          700: 'var(--brand-accent1-700)',
          800: 'var(--brand-accent1-800)',
          900: 'var(--brand-accent1-900)',
        },
        'brand-accent2': 'var(--brand-accent2)',
        'brand-accent3': 'var(--brand-accent3)',
        'brand-neutral': {
          white: 'var(--brand-neutral-white)',
          black: 'var(--brand-neutral-black)',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        opensans: ['var(--font-opensans)'],
        montserrat: ['var(--font-montserrat)'],
      },
      fontSize: {
        'body': ['var(--font-size-body)', { lineHeight: 'var(--line-height-normal)' }],
        'body-lg': ['var(--font-size-body-desktop)', { lineHeight: 'var(--line-height-normal)' }],
        'h1': ['var(--font-size-h1)', { lineHeight: 'var(--line-height-tight)' }],
        'h1-lg': ['var(--font-size-h1-desktop)', { lineHeight: 'var(--line-height-tight)' }],
        'h1-hero': ['var(--font-size-h1-hero)', { lineHeight: 'var(--line-height-tight)' }],
        'h2': ['var(--font-size-h2)', { lineHeight: 'var(--line-height-tight)' }],
        'h2-lg': ['var(--font-size-h2-desktop)', { lineHeight: 'var(--line-height-tight)' }],
        'h3': ['var(--font-size-h3)', { lineHeight: 'var(--line-height-snug)' }],
        'h3-lg': ['var(--font-size-h3-desktop)', { lineHeight: 'var(--line-height-snug)' }],
        'h4': ['var(--font-size-h4)', { lineHeight: 'var(--line-height-normal)' }],
        'h4-lg': ['var(--font-size-h4-desktop)', { lineHeight: 'var(--line-height-normal)' }],
        'metric': ['var(--font-size-metric)', { lineHeight: '1' }],
        'metric-lg': ['var(--font-size-metric-desktop)', { lineHeight: '1' }],
        'technical': ['var(--font-size-technical)', { lineHeight: 'var(--line-height-normal)' }],
      },
      backgroundImage: {
        'gradient-professional': 'var(--gradient-professional)',
        'gradient-growth': 'var(--gradient-growth)',
        'gradient-action': 'var(--gradient-action)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-tech': 'var(--gradient-tech)',
      },
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
    },
  },
  plugins: [],
};

export default config;