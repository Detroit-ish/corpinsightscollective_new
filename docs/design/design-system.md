# CorpInsights Design System Guide

> **IMPORTANT:** This document is the single source of truth for our design system. When updating, ensure synchronization with:
> - This document
> - `tailwind.config.ts`
> - `globals.css`

---

## Table of Contents

1. [Introduction](#introduction)
2. [Color Architecture](#color-architecture)
3. [Typography System](#typography-system)
4. [Spacing & Layout](#spacing--layout)
5. [Component System](#component-system)
6. [Animation & Interaction](#animation--interaction)
7. [Implementation Guidelines](#implementation-guidelines)
8. [Maintenance & Updates](#maintenance--updates)

---

## 1. Introduction

Our design system represents the blend of traditional business wisdom with modern innovation. It ensures visual consistency, accessibility, and performance while being developer-friendly and responsive by design.

### Core Principles

- **Consistency:** Uniform implementation across components.
- **Accessibility:** Designed with the highest standards.
- **Performance:** Optimized for speed and efficiency.
- **Developer-Friendly:** Clear and maintainable.
- **Responsive:** Mobile-first, starting at iPhone 12 Pro (390px).

---

## 2. Color Architecture

### Primary Brand Teal

**Implementation:**
```css
/* CSS Variable */
var(--brand-primary-500);
/* Tailwind Classes: */
text-brand-primary-500, bg-brand-primary-500, border-brand-primary-500
Scale Usage:

50: Subtle backgrounds, disabled states
100: Hover backgrounds, secondary elements
200: Secondary indicators, progress states
300: Active states, tertiary elements
400: Supporting elements, hover states
500: Primary actions, key metrics
600: Hover states for primary elements
700: Active/pressed states
800: Deep accents, focused states
900: Text on light backgrounds

Common Patterns:


// Primary Button Example
<button className="bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-700">
  Primary Action
</button>
Secondary Dark Blue-Grey
Implementation:


/* CSS Variable */
var(--brand-secondary-500);
/* Tailwind Classes: */
text-brand-secondary-500, bg-brand-secondary-500, border-brand-secondary-500
Scale Usage:

50: Light backgrounds, subtle elements
100: Subtle borders, dividers
200: Disabled text, inactive states
300: Secondary text, supporting content
400: Primary text, body content
500: Headlines, navigation
600: Dense content areas, footers
700: Hover states for secondary elements
800: Active states, deep backgrounds
900: Highest contrast text
Common Patterns:


// Navigation Item Example
<nav className="text-brand-secondary-300 hover:text-brand-secondary-500">
  Navigation Link
</nav>
Accent Coral (Growth & Achievement)
Implementation:


/* CSS Variable */
var(--brand-accent1-500);
/* Tailwind Classes: */
text-brand-accent1-500, bg-brand-accent1-500, border-brand-accent1-500
Scale Usage:
Follows a scale similar to primary colors.

Common Patterns:


// CTA Button Example
<button className="bg-brand-accent1-500 hover:bg-brand-accent1-600 active:bg-brand-accent1-700">
  Call to Action
</button>
Surface & Neutral Colors
Surface Colors:


/* CSS Variables */
var(--brand-accent2);  /* Light Grey Background */
var(--brand-accent3);  /* Light Cyan Active */
Neutral Colors:


/* CSS Variables */
var(--brand-neutral-white), var(--brand-neutral-black)
Usage Example:


// Card Component Example
<div className="bg-brand-neutral-white shadow-sm">
  Card Content
</div>
Strategic Gradient System
Implementation:


/* CSS Variables */
var(--gradient-professional), var(--gradient-growth), var(--gradient-action), var(--gradient-surface), var(--gradient-tech)
Common Patterns:


// Professional Header Example
<header className="bg-gradient-professional text-brand-neutral-white">
  Header Content
</header>
3. Typography System
Font Families
Implementation:


/* CSS Variables */
var(--font-playfair), var(--font-roboto), var(--font-montserrat)

/* Tailwind Classes: */
font-playfair, font-roboto, font-montserrat
Strategic Usage
Playfair: For headlines and key metrics.
Roboto: For body text and paragraphs.
Montserrat: For navigation and interactive elements.
Examples:

<h1 className="font-playfair text-h1 md:text-h1-lg">
  Headline Example
</h1>
<p className="font-roboto text-body md:text-body-lg">
  Body text example.
</p>
<button className="font-montserrat text-nav">
  Button Text
</button>
Type Scale & Line Heights
Define base sizes in CSS (mobile-first) and adjust for desktop:

--font-size-h1: 3rem;           /* Mobile */
--font-size-h1-desktop: 4rem;     /* Desktop */
Use utilities such as leading-tight, leading-normal, and leading-relaxed.

4. Spacing & Layout
Container System
Example:

.container-base {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
Grid & Responsive Patterns
Define grids using Tailwind classes:

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  Grid Items
</div>
5. Component System
Button System
Base Styles Example:

.btn {
  @apply inline-flex items-center justify-center rounded-lg font-montserrat text-[length:var(--font-size-nav)]
         transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2;
}
Variant Example:

<button className="btn-primary">
  Primary Button
</button>
Card, Form, and Interactive Elements
Use predefined classes (e.g., .card, .form-input, .journey-node) with provided usage examples to ensure consistency.

6. Animation & Interaction
Transition System
Example:

.transition-default {
  @apply transition-all duration-200 ease-in-out;
}
Define keyframe animations (such as fade-up) and usage patterns in components.

7. Implementation Guidelines
Outline best practices for component architecture. For example:

/**
 * FeatureCard Component
 *
 * @device: Initially developed for iPhone 12 Pro (390px)
 * @breakpoints: Mobile, Tablet, Desktop
 * @designTokens: Uses brand-primary-500, brand-secondary-400
 */
Use this template for documenting components and ensure the code and documentation remain synchronized.

8. Maintenance & Updates
Design Token Updates
Update CSS variables in globals.css
Verify mappings in tailwind.config.ts
Update this guide as necessary
Audit components for consistency
Component & Documentation Updates
Update component code first, then the corresponding documentation.
Use proper version control practices and note any breaking changes.
