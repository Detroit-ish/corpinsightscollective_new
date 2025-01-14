# Case Studies Component Documentation

## Overview
Interactive Prism View component showcasing case studies through three rotating faces. Built with a mobile-first approach and progressive enhancement for desktop experiences. Optimized primarily for iPhone 12 Pro (390px) with adaptable desktop views.

## Core Principles
- Progressive disclosure of information
- Natural device-specific interactions
- Role-based content presentation
- Smooth, performant animations
- Accessibility by default
- Progressive enhancement for desktop

## Component Architecture

### Directory Structure
```
case-studies/
├── components/
│   ├── PrismView/              # Main rotating container
│   │   ├── PrismContainer.tsx  # 3D space management
│   │   └── PrismControls.tsx   # Navigation elements
│   ├── faces/
│   │   ├── ImpactFace/        # Quick wins & metrics
│   │   ├── StatsFace/         # Data comparisons
│   │   └── ProcessFace/       # Implementation steps
│   └── shared/
│       ├── FaceContainer.tsx   # Base face wrapper
│       └── Transitions.tsx     # Shared animations
├── hooks/
│   ├── useRotation.ts         # Rotation logic
│   ├── useGestures.ts         # Touch/mouse handling
│   └── usePrismFocus.ts       # Focus management
└── utils/
    ├── animations.ts          # Animation configs
    └── viewport.ts            # Device detection
```

### Component Interface
```typescript
interface CaseStudy {
  id: string;
  impact: {
    metric: string;     
    timeline: string;   
    roi: string;       
    context: string;    
  };
  stats: {
    beforeAfter: Array<{
      label: string;    
      before: number;   
      after: number;    
    }>;
    highlights: string[];
  };
  process: {
    steps: Array<{
      title: string;    
      description: string;
    }>;
    integrations: string[];
  };
}

interface PrismViewProps {
  cases: CaseStudy[];
  initialFace?: 'impact' | 'stats' | 'process';
  onCaseSelect?: (caseId: string) => void;
  gestureConfig?: Partial<GestureConfig>;
  className?: string;
}
```

## Implementation Strategy

### Mobile-First Implementation

#### Primary Device Specifications
- Base Device: iPhone 12 Pro
- Viewport: 390px × 844px
- Device Pixel Ratio: 3
- Safe Area Insets: Considered

#### Interaction System
```typescript
interface GestureConfig {
  swipeThreshold: 50,      // Minimum swipe distance
  directionThreshold: 30,  // Max angle deviation
  velocityThreshold: 0.5,  // Quick swipe threshold
  edgeResistance: 0.2     // Edge bounce coefficient
}
```

### Desktop Enhancement Strategy

#### View Modes

1. Standard Mode (Default)
- Enhanced mobile view with larger prism
- Preview panels for next/previous content
- Desktop-optimized navigation
- Hover states and mouse interactions

2. Expanded Mode (Optional)
- Side-by-side layout with additional context
- Persistent content views
- Enhanced data visualizations
- Detailed information panels

```typescript
interface DesktopEnhancements {
  isDesktop: boolean;
  showPreviews: boolean;
  interactionMode: 'touch' | 'mouse' | 'keyboard';
  layoutMode: 'standard' | 'expanded';
}
```

## Technical Specifications

### Viewport Management
```typescript
const BREAKPOINTS = {
  // Mobile breakpoints
  base: 390,    // iPhone 12 Pro
  small: 375,   // iPhone SE
  large: 428,   // iPhone 14 Pro Max
  
  // Larger screens
  tablet: 768,
  desktop: 1024,
  wide: 1440,
  ultraWide: 1920
};

const CONTAINER_SIZES = {
  prism: {
    standard: {
      width: '480px',
      height: '640px'
    },
    expanded: {
      width: '400px',
      height: '560px'
    }
  },
  preview: {
    width: '240px',
    height: '320px'
  }
};
```

### Animation Configuration
```typescript
const ROTATION_STATES = {
  impact: 0,        // Front face
  stats: -120,      // Left rotation
  process: 120      // Right rotation
};

const SPRING_CONFIG = {
  stiffness: 150,   // Responsiveness
  damping: 25,      // Bounce control
  mass: 1,          // Momentum
  restSpeed: 0.5    // Settling threshold
};

const TRANSITION_TIMING = {
  rotate: 0.5,      // Base rotation
  content: 0.3,     // Content fade
  delay: 0.1        // Stagger
};
```

## Development Guidelines

### Progressive Enhancement Flow
1. Base Mobile Experience
   - Core functionality
   - Touch interactions
   - Essential content

2. Tablet Adaptations (768px+)
   - Larger touch targets
   - Enhanced typography
   - Improved spacing

3. Desktop Enhancements (1024px+)
   - Mouse/keyboard interactions
   - Layout options
   - Additional features

### Performance Optimization
- Hardware acceleration for transforms
- Passive event listeners
- RAF for animation updates
- Content preloading strategy
- Efficient re-render management
- Conditional feature loading
- Asset optimization

### Testing Checklist

#### Mobile Testing
- [ ] Swipe gesture recognition
- [ ] Edge resistance behavior
- [ ] Velocity-based animations
- [ ] Multi-touch handling
- [ ] Safe area compliance
- [ ] Orientation changes
- [ ] Different iPhone models

#### Desktop Testing
- [ ] Mouse interaction accuracy
- [ ] Keyboard navigation
- [ ] Preview functionality
- [ ] Layout transitions
- [ ] Enhanced features
- [ ] Browser compatibility
- [ ] Performance metrics

### Accessibility Requirements
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA labels and roles
- Color contrast compliance
- Motion reduction support
- Touch target sizing

## Usage Example
```tsx
<CaseStudiesSection 
  initialFace="impact"
  cases={[
    {
      impact: {
        metric: "10x",
        timeline: "6 months",
        roi: "3.5x ROI",
        context: "Lead Quality Improvement"
      },
      stats: {
        beforeAfter: [
          {
            label: "Qualified Leads",
            before: 100,
            after: 1000
          }
        ],
        highlights: ["Automated qualification"]
      },
      process: {
        steps: [
          {
            title: "System Audit",
            description: "Complete analysis of existing workflow"
          }
        ]
      }
    }
  ]}
  onCaseSelect={handleCaseSelect}
  gestureConfig={{
    swipeThreshold: 50,
    directionThreshold: 30
  }}
/>
```