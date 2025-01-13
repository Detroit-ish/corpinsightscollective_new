# CorpInsights Design System Guide 2025

## IMPORTANT NOTICE
This document serves as the single source of truth for our design system. The Tailwind configuration and CSS variables should always match this specification. When making updates, ensure all three locations (this doc, tailwind.config.ts, and globals.css) are synchronized.

## Table of Contents
1. Introduction
2. Design Foundations
   - Color Architecture
   - Typography System
   - Spacing & Layout
   - Animation & Interaction
3. Component System
   - Base Components
   - Composite Components
   - Pattern Library
4. Development Guidelines
   - Mobile-First Approach
   - Implementation Standards
   - Testing Requirements
5. Maintenance & Documentation
   - Update Procedures
   - Documentation Standards
   - Quality Assurance

## 1. Introduction

Our design system embodies the bridge between traditional business wisdom and modern technological innovation. It's crafted to communicate professionalism, growth, and technical capability while maintaining exceptional usability for our B2B audience.

### Core Principles
- Consistency in implementation
- Accessibility by default
- Performance-oriented
- Developer-friendly
- Maintainable structure

## 2. Design Foundations

### Color Architecture

#### Primary Brand Teal
Implementation:
```css
/* CSS Variable */
var(--brand-primary-500)

/* Tailwind Classes */
text-brand-primary-500
bg-brand-primary-500
border-brand-primary-500
```

Scale Usage:
- 50: bg-brand-primary-50 – Subtle backgrounds, disabled states
- 100: bg-brand-primary-100 – Hover backgrounds, secondary elements
- 200: bg-brand-primary-200 – Secondary indicators, progress states
- 300: bg-brand-primary-300 – Active states, tertiary elements
- 400: bg-brand-primary-400 – Supporting elements, hover states
- 500: bg-brand-primary-500 – Primary actions, key metrics, core elements
- 600: bg-brand-primary-600 – Hover states for primary elements
- 700: bg-brand-primary-700 – Active/pressed states
- 800: bg-brand-primary-800 – Deep accents, focused states
- 900: bg-brand-primary-900 – Text on light backgrounds

Common Patterns:
```tsx
// Primary Button
<button className="bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-700">

// Status Indicator
<div className="bg-brand-primary-100 text-brand-primary-900">

// Interactive Link
<a className="text-brand-primary-500 hover:text-brand-primary-600">
```

#### Secondary Dark Blue-Grey
Implementation:
```css
/* CSS Variable */
var(--brand-secondary-500)

/* Tailwind Classes */
text-brand-secondary-500
bg-brand-secondary-500
border-brand-secondary-500
```

Scale Usage:
- 50: bg-brand-secondary-50 – Light mode backgrounds, subtle elements
- 100: bg-brand-secondary-100 – Subtle borders, dividers
- 200: bg-brand-secondary-200 – Disabled text, inactive states
- 300: bg-brand-secondary-300 – Secondary text, supporting content
- 400: bg-brand-secondary-400 – Primary text, body content
- 500: bg-brand-secondary-500 – Headlines, key content, navigation
- 600: bg-brand-secondary-600 – Dense content areas, footer elements
- 700: bg-brand-secondary-700 – Hover states for secondary elements
- 800: bg-brand-secondary-800 – Active states, deep backgrounds
- 900: bg-brand-secondary-900 – Highest contrast text, deep accents

Common Patterns:
```tsx
// Content Section
<section className="bg-brand-secondary-50">
  <h2 className="text-brand-secondary-500">
  <p className="text-brand-secondary-400">
</section>

// Divider
<hr className="border-brand-secondary-100" />

// Navigation Item
<nav className="text-brand-secondary-300 hover:text-brand-secondary-500">
```

#### Accent Coral (Growth & Achievement)
Implementation:
```css
/* CSS Variable */
var(--brand-accent1-500)

/* Tailwind Classes */
text-brand-accent1-500
bg-brand-accent1-500
border-brand-accent1-500
```

Scale Usage:
- 50: bg-brand-accent1-50 – Success backgrounds, subtle indicators
- 100: bg-brand-accent1-100 – Highlight areas, secondary success states
- 200: bg-brand-accent1-200 – Progress indicators, achievement markers
- 300: bg-brand-accent1-300 – Supporting elements, tertiary actions
- 400: bg-brand-accent1-400 – Hover states for accent elements
- 500: bg-brand-accent1-500 – Primary accent, growth metrics, CTAs
- 600: bg-brand-accent1-600 – Hover states for accent actions
- 700: bg-brand-accent1-700 – Active/pressed states for accents
- 800: bg-brand-accent1-800 – Deep accents, focused states
- 900: bg-brand-accent1-900 – High contrast accent text

Common Patterns:
```tsx
// CTA Button
<button className="bg-brand-accent1-500 hover:bg-brand-accent1-600 active:bg-brand-accent1-700">

// Success State
<div className="bg-brand-accent1-50 text-brand-accent1-700">

// Growth Metric
<span className="text-brand-accent1-500 font-bold">
```

#### Surface Colors
Implementation:
```css
/* CSS Variables */
var(--brand-accent2)  /* Light Grey Background */
var(--brand-accent3)  /* Light Cyan Active */

/* Tailwind Classes */
bg-brand-accent2
bg-brand-accent3
```

Usage Patterns:
```tsx
// Page Background
<div className="bg-brand-accent2 min-h-screen">

// Card Component
<div className="bg-brand-neutral-white shadow-sm">

// Active State Container
<div className="bg-brand-accent3 rounded-lg">
```

#### Neutral Colors
Implementation:
```css
/* CSS Variables */
var(--brand-neutral-white)
var(--brand-neutral-black)

/* Tailwind Classes */
text-brand-neutral-white
bg-brand-neutral-white
text-brand-neutral-black
bg-brand-neutral-black
```

Usage Patterns:
```tsx
// Light Text on Dark Background
<div className="bg-brand-secondary-800 text-brand-neutral-white">

// Dark Text on Light Background
<div className="bg-brand-neutral-white text-brand-neutral-black">
```

#### Strategic Gradient System
Implementation:
```css
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
```

Usage Patterns:
```tsx
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
```

### Typography System

### Typography System

#### Font Families
Implementation:
```css
/* CSS Variables */
var(--font-playfair)
var(--font-roboto)
var(--font-montserrat)

/* Tailwind Classes */
font-playfair
font-roboto
font-montserrat
```

#### Strategic Usage

##### Playfair Display (font-playfair)
```tsx
// Headlines and Key Metrics
<h1 className="font-playfair font-bold text-h1 md:text-h1-lg">
<div className="font-playfair text-metric">
```

Primary uses:
- Headlines
- Hero text
- Key metrics
- Brand statements

##### Roboto (font-roboto)
```tsx
// Body Text and General Content
<p className="font-roboto text-body md:text-body-lg">
<div className="font-roboto text-brand-secondary-400">
```

Primary uses:
- Body text
- General content
- Paragraphs
- Lists
- Tables

##### Montserrat (font-montserrat)
```tsx
// Interactive Elements
<button className="font-montserrat text-nav">
<nav className="font-montserrat tracking-wide">
```

Primary uses:
- Navigation
- Buttons
- Interactive elements
- Labels
- Form elements

#### Type Scale
Implementation:
```css
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
```

#### Tailwind Classes
```tsx
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
```

#### Line Heights
Implementation:
```css
/* CSS Variables */
--line-height-tight: 1.25;    /* Headings */
--line-height-normal: 1.5;    /* Body text */
--line-height-relaxed: 1.75;  /* Long-form reading */

/* Tailwind Classes */
leading-tight
leading-normal
leading-relaxed
```

#### Typography Best Practices

##### Heading Hierarchy
- Use appropriate heading levels (h1-h6) for document structure
- Maintain consistent spacing between headings and content
- Apply proper font weights for visual hierarchy

##### Body Text
- Use appropriate line length (65-75 characters per line)
- Maintain consistent paragraph spacing
- Ensure sufficient contrast for readability

##### Responsive Typography
- Test font sizes across all breakpoints
- Ensure readability on mobile devices
- Maintain proper hierarchy at all screen sizes

##### Accessibility Considerations
- Maintain minimum font sizes for readability (14px)
- Use sufficient color contrast (WCAG 2.1 AA standard)
- Ensure proper heading structure for screen readers

#### Implementation Examples

##### Article Layout
```tsx
<article className="space-y-6">
  <h1 className="font-playfair text-h1 md:text-h1-lg text-brand-secondary-900 leading-tight">
    Article Title
  </h1>
  
  <h2 className="font-playfair text-h2 md:text-h2-lg text-brand-secondary-700 leading-tight mt-8">
    Section Heading
  </h2>
  
  <p className="font-roboto text-body md:text-body-lg text-brand-secondary-400 leading-normal">
    Body text content with proper line height and color.
  </p>
</article>
```

##### Interactive Elements
```tsx
<nav className="font-montserrat text-nav tracking-wide">
  <a className="text-brand-secondary-500 hover:text-brand-secondary-700">
    Navigation Item
  </a>
</nav>

<button className="font-montserrat text-nav font-medium">
  Button Text
</button>
```

##### Metrics Display
```tsx
<div className="font-playfair text-metric md:text-metric-lg text-brand-primary-500">
  Key Metric
  <span className="text-h4 text-brand-secondary-400">
    Label
  </span>
</div>
```

### Spacing & Layout

#### Container System
```tsx
/* Base Container */
.container-base {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Section Spacing */
.section-spacing {
  @apply py-12 sm:py-16 lg:py-24;
}
```

#### Grid System
- Flexible grid implementation
- Responsive breakpoints
- Nested grid support

### Component System

#### Button System
Implementation base styles:
```css
/* Base Button Classes */
.btn {
  @apply inline-flex items-center justify-center rounded-lg font-montserrat
         text-[length:var(--font-size-nav)]
         transition-all duration-200 ease-in-out
         focus:outline-none focus:ring-2 focus:ring-offset-2;
}
```

Variants:
```tsx
// Primary Button
<button className="btn-primary">
  {/* Applies:
    bg-gradient-to-r from-brand-accent1-500 to-brand-accent1-600 
    text-brand-neutral-white
    hover:from-brand-accent1-600 hover:to-brand-accent1-700
    active:from-brand-accent1-700 active:to-brand-accent1-800
    focus:ring-brand-accent1-500
  */}
</button>

// Secondary Button
<button className="btn-secondary">
  {/* Applies:
    text-brand-secondary-500
    hover:bg-brand-neutral-white
    focus:ring-brand-secondary-500
    border-2 border-current
  */}
</button>

// With Icon
<button className="btn-primary">
  <span>Button Text</span>
  <IconComponent className="ml-2 w-5 h-5" />
</button>
```

#### Card System
Base Implementation:
```css
/* Base Card */
.card {
  @apply bg-brand-neutral-white rounded-lg shadow-sm transition-all duration-200
         hover:shadow-md hover:translate-y-[-2px];
}
```

Variants:
```tsx
// Feature Card
<div className="feature-card">
  {/* Applies:
    card p-6 bg-gradient-surface
  */}
</div>

// Metric Card
<div className="metric-card">
  {/* Applies:
    card p-6 bg-gradient-professional text-brand-neutral-white
  */}
</div>

// Content Card
<article className="card p-6">
  <h3 className="text-h3 text-brand-secondary-500">
  <p className="text-body text-brand-secondary-400">
</article>
```

#### Form Elements
Implementation:
```css
/* Input Base */
.form-input {
  @apply w-full rounded-lg border-brand-secondary-200 shadow-sm
         focus:border-brand-primary-500 focus:ring-brand-primary-500
         transition-colors duration-200;
}
```

Common Patterns:
```tsx
// Text Input
<div className="space-y-2">
  <label className="text-brand-secondary-500 font-medium">
    Label Text
  </label>
  <input 
    type="text"
    className="form-input"
    placeholder="Enter text..."
  />
  <p className="text-technical text-brand-secondary-400">
    Helper text
  </p>
</div>

// Select Input
<select className="form-input">
  <option>Select option</option>
</select>

// Error State
<input 
  className="form-input border-color-error focus:border-color-error 
             focus:ring-color-error/30"
  aria-invalid="true"
/>
```

#### Interactive Elements
Implementation:
```css
/* Journey Node (Interactive Points) */
.journey-node {
  @apply absolute rounded-full flex items-center justify-center 
         transition-all duration-300 shadow-md hover:shadow-lg
         bg-gradient-to-r from-brand-primary-500 to-brand-accent1-500;
}

/* Link Styles */
.link-primary {
  @apply text-brand-primary-500 hover:text-brand-primary-600
         underline-offset-4 hover:underline;
}
```

Usage:
```tsx
// Interactive Node
<div className="journey-node w-12 h-12">
  <Icon className="w-6 h-6 text-brand-neutral-white" />
</div>

// Text Link
<a href="#" className="link-primary">
  Learn More
</a>

// Navigation Link
<a className="text-brand-secondary-400 hover:text-brand-secondary-600 
              transition-colors duration-200">
  Nav Item
</a>
```

### Layout & Spacing

#### Container System
```css
/* Base Container */
.container-base {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Section Spacing */
.section-spacing {
  @apply py-12 sm:py-16 lg:py-24;
}
```

Usage Patterns:
```tsx
// Page Layout
<main className="min-h-screen bg-brand-accent2">
  <div className="container-base">
    <section className="section-spacing">
      {/* Content */}
    </section>
  </div>
</main>

// Content Section
<section className="container-base py-12 sm:py-16 lg:py-24">
  <div className="space-y-8">
    {/* Stacked content with consistent spacing */}
  </div>
</section>
```

#### Spacing Scale
```css
/* CSS Variables */
--spacing-px: 1px;
--spacing-0: 0;
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
```

Usage Through Tailwind:
```tsx
// Padding
<div className="p-4 sm:p-6 lg:p-8">
<div className="px-4 py-6">
<div className="pt-12 pb-6">

// Margin
<div className="mt-4 mb-8">
<div className="mx-auto">
<div className="-mt-2">

// Gap
<div className="space-y-4">
<div className="gap-x-6">
<div className="gap-4">
```

#### Grid System
```tsx
// Basic Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Complex Grid
<div className="grid lg:grid-cols-12 gap-8">
  <div className="lg:col-span-8">
  <div className="lg:col-span-4">
</div>

// Auto Grid
<div className="grid grid-cols-auto-fit gap-4">
  {/* Items will fit based on min/max content */}
</div>
```

### Animation & Interaction

#### Transition System
```css
/* Default Transition */
.transition-default {
  @apply transition-all duration-200 ease-in-out;
}

/* Animation Keyframes */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Common Patterns:
```tsx
// Hover Effects
<button className="transition-all duration-200 hover:scale-102">

// Page Transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Interactive States
<div className="transform transition-transform hover:-translate-y-1">
```

#### Loading States
```tsx
// Skeleton Loading
<div className="animate-pulse bg-brand-secondary-100 rounded-lg h-32">

// Spinner
<div className="animate-spin text-brand-primary-500">
  <SpinnerIcon className="w-6 h-6" />
</div>

// Progressive Loading
<div className="animate-fade-in">
  {/* Content */}
</div>
```

### Implementation Guidelines

#### Component Architecture
Best Practices:
```tsx
// 1. Clear Component Structure
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className
}) => {
  return (
    <div className={cn(
      "feature-card", // Base styles
      "p-6 space-y-4", // Spacing
      className // Custom styles
    )}>
      {/* Icon Container */}
      <div className="bg-brand-primary-50 p-3 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-brand-primary-500" />
      </div>

      {/* Content */}
      <h3 className="text-h3 text-brand-secondary-500">
        {title}
      </h3>
      <p className="text-body text-brand-secondary-400">
        {description}
      </p>
    </div>
  );
};

// 2. Composable Pattern
const Card = {
  Root: ({ children, className }) => (
    <div className={cn("card", className)}>
      {children}
    </div>
  ),
  Header: ({ children }) => (
    <div className="p-6 border-b border-brand-secondary-100">
      {children}
    </div>
  ),
  Content: ({ children }) => (
    <div className="p-6">
      {children}
    </div>
  )
};
```

#### CSS Organization
```css
/* 1. Layer Structure */
@layer base {
  /* Base HTML elements */
  html, body {
    @apply text-brand-secondary-500 bg-brand-accent2;
  }
}

@layer components {
  /* Reusable component classes */
  .btn { /* ... */ }
  .card { /* ... */ }
}

@layer utilities {
  /* Custom utilities */
  .text-balance { /* ... */ }
}

/* 2. Custom Properties Pattern */
:root {
  /* Use semantic naming */
  --color-text-primary: var(--brand-secondary-500);
  --color-text-secondary: var(--brand-secondary-400);
}
```

### Development Workflow

#### Documentation Standards
Component Documentation Template:
```tsx
/**
 * ComponentName
 *
 * @device Initially developed for iPhone 12 Pro (390px)
 * @viewport Default mobile viewport
 * @breakpoints
 * - Base: iPhone 12 Pro (390px)
 * - Small: iPhone SE (375px)
 * - Large: iPhone 14 Pro Max (428px)
 * - Tablet: >= 768px
 * - Desktop: >= 1024px
 *
 * @implementation
 * <ComponentName
 *   prop1="value"
 *   prop2={value}
 * />
 *
 * @designTokens
 * - Colors: brand-primary-500, brand-secondary-400
 * - Typography: text-h3, text-body
 * - Spacing: space-y-4, p-6
 */
```

#### Testing Requirements
Development Phase:
1. Initial Build
   - Test on iPhone 12 Pro preset
   - Verify core functionality
   - Check design system compliance

2. Pre-PR Review
   - Test all breakpoints
   - Verify responsive behavior
   - Check accessibility standards
   - Validate design tokens usage

3. Production Preparation
   - Full device testing
   - Performance validation
   - Accessibility audit
   - Design system validation

### Maintenance Guidelines

#### Design Token Updates
```tsx
// 1. Update CSS variables in globals.css
// 2. Verify Tailwind config mapping
// 3. Update design system documentation
// 4. Run component audit
```

#### Component Updates
```tsx
// 1. Update component code
// 2. Update documentation
// 3. Verify design system compliance
// 4. Test across breakpoints
```

#### Documentation Updates
```tsx
// 1. Keep implementation examples current
// 2. Update breakpoint information
// 3. Maintain token references
// 4. Document breaking changes
```

## Development Workflow

### Mobile-First Development
Primary Development Target:
- Device: iPhone 12 Pro (390px width)
- Chrome DevTools Preset: iPhone 12 Pro
- Initial Development: Lock viewport to mobile width

Development Order:
1. Complete mobile design (390px)
2. Test smaller screens (iPhone SE – 375px)
3. Test larger phones (iPhone 14 Pro Max – 428px)
4. Add tablet adaptations (768px+)
5. Finalize desktop layouts (1024px+)

[Continues with all workflow, testing, and maintenance sections]

## Quality Assurance Checklist

### Pre-Release Validation
- Design token consistency
- Component behavior across breakpoints
- Accessibility compliance
- Performance metrics
- Documentation accuracy

### Regular Maintenance
- Monthly token audit
- Quarterly component review
- Bi-annual accessibility audit
- Annual documentation refresh

## Version Control

### Change Management
- Major versions: Breaking changes
- Minor versions: New features
- Patch versions: Bug fixes

### Documentation Updates
- Changelog maintenance
- Migration guides
- Breaking change notifications

## Appendix

### Useful Resources
- Tailwind documentation
- Accessibility guidelines
- Performance optimization guides
- Mobile testing tools

### Contact & Support
- Design system team contact
- Issue reporting procedure
- Feature request process