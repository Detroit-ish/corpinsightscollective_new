# Case Studies Interactive Cards

Showcase our biggest "quick wins" using interactive 3D cards that combine engaging visuals with detailed content. Built for SMBs and startups who want to see real results without the fluff—no guesswork, no sleazy tactics.

## Core Concept
Each case study is presented as an interactive card that:
- Shows key metrics and impact on the front (+40% leads in 2 weeks)
- Flips 180° to reveal detailed content (smooth as our sales pitch)
- Provides scrollable content area on back (because sometimes we have way more to say)
- Features subtle holographic effects (techy, not tacky)
- Maintains perfect readability in all states (no fine print here)

## Key Technical Decisions

### Mobile-First Constants
```typescript
const DEVICE_SPECS = {
  defaultWidth: '390px',    // iPhone 12 Pro
  maxCardHeight: '80vh',    // Responsive but contained
  perspective: '1000px',    // Consistent 3D depth
  breakpoints: {
    sm: '390px',
    md: '768px',
    lg: '1024px'
  }
};

const INTERACTION_LIMITS = {
  maxVisibleCards: 3,       // Performance optimized
  scrollThrottle: 50,       // ms between scroll events
  flipCooldown: 500,        // ms between flip attempts
  singleCardOpen: true      // Only one card flipped at a time
};
```

### Scroll Behavior
- Lock main scroll during flip animation
- Enable smooth back-face scroll after flip
- Touch-action handling for iOS
- Throttled scroll events for performance

### Card States
- Front: Static, holographic edge
- Flipping: Animated, transition effects
- Back: Scrollable, minimal effects for readability
- Cooldown: Prevent rapid flips

## Implementation Plan

### Phase 1: Foundation
Goal: Setup base card component with proper structure and mobile layout

1. TypeScript Setup
   - ~~Define CaseStudy interface~~
   - ~~Define card props and event types~~
   - ~~Setup any utility types we need~~

2. Component Structure
   - ~~Create base Card component~~
   - ~~Define front face layout~~
   - ~~Setup container dimensions (390px base)~~
   - ~~Add basic interaction props~~

3. Content Structure
   - ~~Implement metric display layout~~
   - ~~Setup typography (from design system)~~
   - ~~Setup responsive scaling~~
   - ~~Test content overflow~~

4. Mobile Foundation
   - ~~Verify iPhone 12 Pro layout~~
   - ~~Setup touch targets~~
   - ~~Handle safe areas~~
   - ~~Test viewport behavior~~

5. Testing Points
   - ~~Content rendering~~
   - ~~Mobile layout~~
   - Design system integration
   - ~~Type safety~~

### Phase 2: Core Interaction
- ~~Framer Motion integration~~
- ~~Flip state management~~
- Performance boundaries
- ~~Touch/click handlers~~
- ~~Animation timings~~

### Phase 3: Content & Scroll
- Back face scroll implementation
- Content height management
- Touch event handling
- Scroll performance
- Edge case handling

### Phase 4: Visual Enhancement
- WebGL setup and integration
- Shader implementation
- State sync between React/WebGL
- Performance optimization
- Fallback handling

### Phase 5: Integration & Polish
- Error boundaries
- Analytics hooks
- Accessibility implementation
- Performance monitoring
- Documentation updates

## Implementation

### Directory Structure
```
case-studies/
├── CaseStudies.tsx        # Main wrapper component
├── types.ts               # Type definitions
├── mockData.ts            # Case study data
├── index.ts              # Public exports
└── components/
    └── HoloCards/        # Card system
        ├── Canvas.tsx    # WebGL enhancement layer
        ├── Card.tsx      # Core card component
        ├── Content.tsx   # Scrollable content
        ├── hooks/        # Custom hooks
        │   ├── useWebGL.ts
        │   └── useFlip.ts
        └── shaders/      # WebGL effects
            ├── vertex.glsl
            └── fragment.glsl
```

### Data Structure
```typescript
interface CaseStudy {
  id: string;
  faces: CaseStudyFace[];
  category: string;
  clientName: string;
  featured?: boolean;
}

interface CaseStudyFace {
  id: string;
  title: string;
  content: string;
  metrics?: Metric[];
}

interface Metric {
  value: string;
  label: string;
}

// Example Front Face Content
const frontFace = {
  title: "42% More Conversions—No Shady Tactics",
  metrics: [
    { value: "42%", label: "Conversion Increase" },
    { value: "2wks", label: "Implementation Time" }
  ]
};

// Example Back Face Content
const backFace = {
  title: "Here's How We Did It",
  content: `We tweaked the sales funnel, wrote witty follow-up emails, 
  and used automation in Lemlist to keep leads from slipping through 
  the cracks. Zero pushy scripts.`
};
```

### Usage Example

```tsx
import { CaseStudies } from '@/components/features/case-studies';

export default function Page() {
  return (
    <main>
      <CaseStudies 
        className="py-12"
        enableHolographic={true}
        onFlip={(study, isFlipped) => {
          console.log(`${study.id} is now ${isFlipped ? 'showing details' : 'showing front'}`);
        }}
      />
    </main>
  );
}
```

## Testing Approach

### Component Testing Strategy
When testing components, we follow a "functionality-first" approach:

1. Phase 1: Core Functionality
   - Focus on component behavior and interactions
   - Use basic Tailwind classes for layout structure
   - Ignore custom styling, gradients, and precise spacing
   - Verify data flow and user interactions work correctly

2. Phase 2: Design System Integration
   - Integrate custom brand colors and gradients
   - Apply exact spacing and padding
   - Implement precise visual styling
   - Match production design specifications

Note: The test environment (`/test` route) intentionally uses basic Tailwind classes
instead of our custom design system. This separation allows faster development and
testing of core functionality without waiting for design system integration.

### Testing Guidelines
- Core layout classes (grid, flex) should be included in tests
- Basic spacing for usability is acceptable
- Custom brand colors and gradients should be added after core functionality works
- Use simple Tailwind alternatives for custom classes in tests:
  ```typescript
  // In tests:
  'bg-blue-500'    // Instead of 'bg-gradient-professional'
  'text-gray-800'  // Instead of 'text-brand-secondary-500'
  ```

This approach ensures we can rapidly iterate on functionality while maintaining a clear path to production-ready styling.

## Development Status

### Current Focus
- Phase 1 Implementation
- Base component structure
- TypeScript setup
- Mobile layout foundation
- Content structure

### Success Metrics
1. Engagement:
   - Time spent reading content
   - Flip interaction rate
   - Scroll depth on back face
   - Return visitor engagement

2. Performance:
   - Animation smoothness
   - Load time impact
   - Memory usage
   - Battery efficiency

3. Accessibility:
   - Keyboard navigation
   - Screen reader testing
   - Motion preference handling
   - High contrast verification

This implementation balances engaging visuals with actual usefulness—just like our approach to marketing and sales. Have fun flipping through our success stories!