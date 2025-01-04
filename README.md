# CorpInsights Website

## Project Overview
A modern Progressive Web Application built with Next.js 15, showcasing business and technology solutions. Our platform delivers a seamless, responsive experience for sharing professional services and insights.

## Key Features
- 📱 Progressive Web App (PWA) capabilities
- 🎨 Responsive design with Tailwind CSS
- 🚀 Modern animations powered by Framer Motion
- 🔍 SEO-optimized structure
- ♿ Accessibility-first approach
- 📊 Interactive business journey visualization
- 🎯 Adaptive pain point cards with mobile-first design

## Tech Stack
- **Framework**: Next.js 15.0.2
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5
- **Animations**: Framer Motion 11
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/Detroit-ish/corpinsightscollective_new.git
cd corpinsightscollective_new
npm install
```

### Development
```bash
npm run dev     # Start development server
npm run test    # Run tests
npm run build   # Create production build
npm run start   # Start production server
```

## Project Structure
```
src/
├── app/                # Next.js app directory
├── components/         # Reusable UI components
│   ├── features/      # Feature-specific components
│   │   └── pain-points/ # Pain point cards and related components
│   ├── layouts/       # Layout components
│   └── ui/           # Common UI components
├── lib/               # Utility functions and helpers
├── styles/           # Global styles and Tailwind config
└── types/            # TypeScript type definitions
```

## Component Guidelines

### Pain Points Component
The pain points feature implements a responsive card system:

#### Mobile View
- Vertical card layout
- Swipe up/down for solutions
- Swipe left/right for navigation
- Touch-optimized interactions

#### Desktop View (>= 1024px)
- Side-by-side layout
- Left panel: Pain point information
- Right panel: Solutions (Quick Win & Systemic Fix)
- Enhanced animations and hover states

### Breakpoints
Current breakpoint system:
- sm: 640px (Larger phones)
- md: 768px (Tablets)
- lg: 1024px (Desktop)
- xl: 1280px (Large desktop)
- 2xl: 1536px (Extra large screens)

## Development Guidelines
- Follow TypeScript best practices
- Write tests for new components
- Maintain accessibility standards
- Keep components modular and reusable
- Use Tailwind for styling
- Document new features

## 2024 Roadmap
### Q1 2024
- [x] Implement pain points card system
- [ ] Complete main service pages
- [ ] Implement core PWA features
- [ ] Set up CI/CD pipeline

### Q2 2024
- [ ] Add portfolio/case studies
- [ ] Implement contact form
- [ ] Add analytics

### Q3 2024
- [ ] Add blog/resources section
- [ ] Implement user authentication
- [ ] Add interactive features

### Q4 2024
- [ ] Performance optimization
- [ ] Enhanced PWA features
- [ ] Content management system

## Contributing
1. Create a feature branch from develop
2. Implement changes
3. Add tests
4. Submit pull request to develop

## Deployment
- Development: Automatic deployment from develop branch
- Production: Manual deployment after QA