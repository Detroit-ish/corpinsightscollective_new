# CorpInsights Collective

Welcome to CorpInsights Collective! We're building a modern Progressive Web Application that helps SMBs and startups grow without the guesswork by creating aligned marketing and sales systems.

## Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/Detroit-ish/corpinsightscollective_new.git
cd corpinsightscollective_new
npm install
```

### Development Commands
```bash
npm run dev     # Start development server
npm run test    # Run tests
npm run build   # Create production build
npm run start   # Start production server
```

## Technology Stack

### Core Technologies
- **Framework**: Next.js 15.0.2
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5
- **Animations**: Framer Motion 11
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

### Key Features
- 📱 Progressive Web App (PWA) capabilities
- 🎨 Responsive design with Tailwind CSS
- 🚀 Modern animations powered by Framer Motion
- 🔍 SEO-optimized structure
- ♿ Accessibility-first approach
- 📊 Interactive business journey visualization
- 🎯 Adaptive pain point cards with mobile-first design

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

## Technical Specifications

### Breakpoints
Mobile-First Development:
- Base: iPhone 12 Pro (390px)
- Small: iPhone SE (375px)
- Large: iPhone 14 Pro Max (428px)
- Tablet: >= 768px
- Desktop: >= 1024px

Note: All development follows a strict mobile-first approach, starting with the iPhone 12 Pro (390px) as the primary development target.

### Key Components

#### Pain Points Component
Mobile View:
- Vertical card layout
- Swipe up/down for solutions
- Swipe left/right for navigation
- Touch-optimized interactions

Desktop View (>= 1024px):
- Side-by-side layout
- Left panel: Pain point information
- Right panel: Solutions (Quick Win & Systemic Fix)
- Enhanced animations and hover states

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

### Q3 & Q4 2024
- [ ] Add blog/resources section
- [ ] Enhanced PWA features
- [ ] Performance optimization
- [ ] Interactive features

## Documentation

For detailed documentation, please visit:
- [Development Guide](docs/development/setup.md) - Development setup and implementation guide
- [Design System](docs/design/design-system.md) - Design system documentation and patterns
- [Project Overview](docs/README.md) - Project documentation hub

## Deployment

- Development: Automatic deployment from develop branch
- Production: Manual deployment after QA

See [Development Guide](docs/development/setup.md) for detailed procedures.

## Need Help?

- **Documentation:** See `/docs` folder for comprehensive guides
- **Project Updates:** Check the roadmap above