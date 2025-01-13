CorpInsights Design System Guide 2025

IMPORTANT: This document serves as the single source of truth for our design system. The Tailwind configuration and CSS variables should always match this specification. When making updates, ensure all three locations (this doc, tailwind.config.ts, and globals.css) are synchronized.

Introduction

Our design system embodies the bridge between traditional business wisdom and modern technological innovation. It's crafted to communicate professionalism, growth, and technical capability while maintaining exceptional usability for our B2B audience.

Color Architecture
Primary Brand Teal
Implementation:
/* CSS Variable */
var(--brand-primary-500)

/* Tailwind Classes */
text-brand-primary-500
bg-brand-primary-500
border-brand-primary-500

Scale Usage:
50: bg-brand-primary-50 – Subtle backgrounds, disabled states
100: bg-brand-primary-100 – Hover backgrounds, secondary elements
200: bg-brand-primary-200 – Secondary indicators, progress states
300: bg-brand-primary-300 – Active states, tertiary elements
400: bg-brand-primary-400 – Supporting elements, hover states
500: bg-brand-primary-500 – Primary actions, key metrics, core elements
600: bg-brand-primary-600 – Hover states for primary elements
700: bg-brand-primary-700 – Active/pressed states
800: bg-brand-primary-800 – Deep accents, focused states
900: bg-brand-primary-900 – Text on light backgrounds

Common Patterns:
// Primary Button
<button className="bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-700">

// Status Indicator
<div className="bg-brand-primary-100 text-brand-primary-900">

// Interactive Link
<a className="text-brand-primary-500 hover:text-brand-primary-600">


Secondary Dark Blue-Grey
Implementation:
/* CSS Variable */
var(--brand-secondary-500)

/* Tailwind Classes */
text-brand-secondary-500
bg-brand-secondary-500
border-brand-secondary-500

Scale Usage:
50: bg-brand-secondary-50 – Light mode backgrounds, subtle elements
100: bg-brand-secondary-100 – Subtle borders, dividers
200: bg-brand-secondary-200 – Disabled text, inactive states
300: bg-brand-secondary-300 – Secondary text, supporting content
400: bg-brand-secondary-400 – Primary text, body content
500: bg-brand-secondary-500 – Headlines, key content, navigation
600: bg-brand-secondary-600 – Dense content areas, footer elements
700: bg-brand-secondary-700 – Hover states for secondary elements
800: bg-brand-secondary-800 – Active states, deep backgrounds
900: bg-brand-secondary-900 – Highest contrast text, deep accents

Common Patterns:
// Content Section
<section className="bg-brand-secondary-50">
  <h2 className="text-brand-secondary-500">
  <p className="text-brand-secondary-400">
</section>

// Divider
<hr className="border-brand-secondary-100" />

// Navigation Item
<nav className="text-brand-secondary-300 hover:text-brand-secondary-500">


Accent Coral (Growth & Achievement)
Implementation:
/* CSS Variable */
var(--brand-accent1-500)

/* Tailwind Classes */
text-brand-accent1-500
bg-brand-accent1-500
border-brand-accent1-500

Scale Usage:
50: bg-brand-accent1-50 – Success backgrounds, subtle indicators
100: bg-brand-accent1-100 – Highlight areas, secondary success states
200: bg-brand-accent1-200 – Progress indicators, achievement markers
300: bg-brand-accent1-300 – Supporting elements, tertiary actions
400: bg-brand-accent1-400 – Hover states for accent elements
500: bg-brand-accent1-500 – Primary accent, growth metrics, CTAs
600: bg-brand-accent1-600 – Hover states for accent actions
700: bg-brand-accent1-700 – Active/pressed states for accents
800: bg-brand-accent1-800 – Deep accents, focused states
900: bg-brand-accent1-900 – High contrast accent text

Common Patterns:
// CTA Button
<button className="bg-brand-accent1-500 hover:bg-brand-accent1-600 active:bg-brand-accent1-700">

// Success State
<div className="bg-brand-accent1-50 text-brand-accent1-700">

// Growth Metric
<span className="text-brand-accent1-500 font-bold">


Surface Colors
Implementation:
/* CSS Variables */
var(--brand-accent2)  /* Light Grey Background */
var(--brand-accent3)  /* Light Cyan Active */

/* Tailwind Classes */
bg-brand-accent2
bg-brand-accent3

Usage Patterns:
// Page Background
<div className="bg-brand-accent2 min-h-screen">

// Card Component
<div className="bg-brand-neutral-white shadow-sm">

// Active State Container
<div className="bg-brand-accent3 rounded-lg">


Neutral Colors
Implementation:
/* CSS Variables */
var(--brand-neutral-white)
var(--brand-neutral-black)

/* Tailwind Classes */
text-brand-neutral-white
bg-brand-neutral-white
text-brand-neutral-black
bg-brand-neutral-black

Usage Patterns:
// Light Text on Dark Background
<div className="bg-brand-secondary-800 text-brand-neutral-white">

// Dark Text on Light Background
<div className="bg-brand-neutral-white text-brand-neutral-black">


Strategic Gradient System
Implementation:
/* CSS Variables */
var(--gradient-professional)
var(--gradient-growth)
var(--gradient-action)
var(--gradient-surface)
var(--gradient-tech)

/* Tailwind Classes */
bg-gradient-professional
bg-gradient-growth
bg-gradient-action
bg-gradient-surface
bg-gradient-tech

Usage Patterns:
// Professional Header
<header className="bg-gradient-professional text-brand-neutral-white">

// Growth Section
<section className="bg-gradient-growth">

// Action Button
<button className="bg-gradient-action hover:opacity-90">

// Surface Card
<div className="bg-gradient-surface p-6 rounded-lg">

// Tech Background
<div className="bg-gradient-tech opacity-10">


Typography System
Font Families
Implementation:
/* CSS Variables */
var(--font-playfair)
var(--font-roboto)
var(--font-montserrat)

/* Tailwind Classes */
font-playfair
font-roboto
font-montserrat

Strategic Usage:
Playfair Display (font-playfair)
// Headlines and Key Metrics
<h1 className="font-playfair font-bold text-h1 md:text-h1-lg">
<div className="font-playfair text-metric">


Roboto (font-roboto)
// Body Text and General Content
<p className="font-roboto text-body md:text-body-lg">
<div className="font-roboto text-brand-secondary-400">


Montserrat (font-montserrat)
// Interactive Elements
<button className="font-montserrat text-nav">
<nav className="font-montserrat tracking-wide">


Type Scale
Implementation:
/* Base Sizes - Mobile First */
--font-size-body: 1rem;              /* 16px mobile */
--font-size-body-desktop: 1.125rem;  /* 18px desktop */
--font-size-nav: 1.125rem;           /* 18px consistent */

/* Heading Scale */
--font-size-h1: 3rem;                /* 48px mobile */
--font-size-h1-desktop: 4rem;        /* 64px desktop */
--font-size-h1-hero: 4.5rem;         /* 72px hero */

--font-size-h2: 2.25rem;             /* 36px mobile */
--font-size-h2-desktop: 3rem;        /* 48px desktop */

--font-size-h3: 1.5rem;              /* 24px mobile */
--font-size-h3-desktop: 2rem;        /* 32px desktop */

--font-size-h4: 1.125rem;            /* 18px mobile */
--font-size-h4-desktop: 1.25rem;     /* 20px desktop */

/* Special Purpose */
--font-size-metric: 2rem;            /* 32px mobile */
--font-size-metric-desktop: 3rem;    /* 48px desktop */
--font-size-technical: 0.875rem;     /* 14px consistent */

Tailwind Classes:
// Headlines
<h1 className="text-h1 md:text-h1-lg lg:text-h1-hero">
<h2 className="text-h2 md:text-h2-lg">
<h3 className="text-h3 md:text-h3-lg">
<h4 className="text-h4 md:text-h4-lg">

// Body Text
<p className="text-body md:text-body-lg">

// Technical/Small Text
<span className="text-technical">

// Metrics/Numbers
<div className="text-metric md:text-metric-lg">


Line Heights
Implementation:
/* CSS Variables */
--line-height-tight: 1.25;    /* Headings */
--line-height-normal: 1.5;    /* Body text */
--line-height-relaxed: 1.75;  /* Long-form reading */

/* Tailwind Classes */
leading-tight
leading-normal
leading-relaxed


Component System
Button System
Implementation base styles:
/* Base Button Classes */
.btn {
  @apply inline-flex items-center justify-center rounded-lg font-montserrat
         text-[length:var(--font-size-nav)]
         transition-all duration-200 ease-in-out
         focus:outline-none focus:ring-2 focus:ring-offset-2;
}

[Rest of the content remains the same as per the original guide...]