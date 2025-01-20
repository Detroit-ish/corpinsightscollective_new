# CorpInsights Collective

Welcome to **CorpInsights Collective**!  
We’re building a modern Progressive Web Application that helps SMBs and startups grow without the guesswork by creating aligned marketing and sales systems.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Start](#quick-start)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Key Features](#key-features)
6. [Roadmap](#roadmap)
7. [Documentation](#documentation)
8. [Deployment](#deployment)
9. [Need Help?](#need-help)

---

## Introduction

CorpInsights Collective is designed to deliver a fast, responsive, and accessible user experience. We build with a mobile-first mindset (primary target: iPhone 12 Pro, 390px) using Next.js, React, Tailwind CSS, and other modern technologies.

---

## Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Detroit-ish/corpinsightscollective_new.git
cd corpinsightscollective_new
npm install
Development Commands
Start Development Server:
```bash
npm run dev
```

Run Tests:
```bash
npm run test
```

Build Production Version:
```bash
npm run build
```

Start Production Server:
```bash
npm run start
```

### Testing Strategy
Our project follows a "functionality-first" testing approach:

1. Development Testing (`/test` route):
   - Focus on component behavior and core functionality
   - Use basic Tailwind classes for layout
   - Ignore custom design system elements initially
   - Verify user interactions and data flow

2. Production Integration:
   - Implement full design system styling
   - Apply custom brand colors and gradients
   - Fine-tune spacing and visual details
   - Match exact design specifications

This separation allows rapid feature development while maintaining high design standards in production.

Technology Stack
Framework: Next.js 15.0.2
UI Library: React 18.2.0
Styling: Tailwind CSS 3.4.1
Language: TypeScript 5
Animations: Framer Motion 11
Testing: Jest + React Testing Library
Code Quality: ESLint + Prettier
3D/Graphics: Three.js + WebGL
Effects: Custom GLSL Shaders

Project Structure

src/
├── app/                # Next.js app directory
├── components/         # Reusable & feature-specific UI components
│   ├── features/       # e.g., pain points, interactive visualizations
│   ├── layouts/        # Layout components
│   └── ui/             # Common UI components
├── lib/                # Utility functions and helpers
├── styles/             # Global styles and Tailwind configuration
└── types/              # TypeScript type definitions
Key Features
PWA Capabilities: Modern Progressive Web App features
Responsive Design: Mobile-first approach (primary target: iPhone 12 Pro)
Modern Animations: Powered by Framer Motion
SEO & Accessibility: Optimized structure and accessible design
Interactive Visualizations: Engaging business journey displays
Adaptive Components: Touch-optimized pain point cards
Immersive Interactions: Holographic effects and 3D card transforms
Case Studies Showcase: Interactive success stories with measurable impacts
For detailed design patterns and component guidelines, see the design system guide at:
/design/design-system.md

Roadmap
2024 Roadmap
Q1 2024

 Implement pain points card system
 Complete main service pages
 Implement core PWA features
 Set up CI/CD pipeline
Q2 2024

 Add portfolio/case studies
 Implement contact form
 Add analytics
Q3 & Q4 2024

 Add blog/resources section
 Enhance PWA features
 Optimize performance
 Develop new interactive features
For detailed procedures and planning, refer to the development setup guide at:
/development-setup.md

Documentation
All detailed documentation is organized into focused guides. Use the following paths for deeper context:

Project Documentation Hub: /docs/README.md
(Centralized reference for all project documentation.)
Development Setup Guide: /development-setup.md
(Setup instructions, development workflow, and testing procedures.)
Design System Guide: /design/design-system.md
(Design tokens, component guidelines, visual patterns, and best practices.)
Templates & Best Practices: /templates/
(Reusable templates for components and documentation.)
Tip: Always refer to these files as your grounding source before making updates.

Deployment
Development: Automatic deployment from the develop branch.
Production: Manual deployment post-QA.
See the deployment procedures in /development-setup.md.
Need Help?
Documentation: See the /docs folder for comprehensive guides.
Project Updates: Check the roadmap section above.
Support: Reach out via the designated support paths outlined in the documentation.

## Success Metrics & Analytics
Our platform tracks key performance indicators across several dimensions:

### User Engagement
- Interactive component usage rates
- Content consumption patterns
- Return visitor interactions
- Session duration on key features

### Technical Performance
- Animation frame rates
- Load time benchmarks
- Memory consumption
- Battery impact on mobile devices

### Component-Specific Metrics
- Case study card interaction rates
- Content scroll depth
- Feature discovery patterns
- Cross-device usage patterns
