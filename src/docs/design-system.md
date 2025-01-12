# CorpInsights Design System Guide 2025

> **IMPORTANT**: This document serves as the single source of truth for our design system. The Tailwind configuration and CSS variables should always match this specification. When making updates, ensure all three locations (this doc, tailwind.config.ts, and globals.css) are synchronized.

Our design system embodies the bridge between traditional business wisdom and modern technological innovation. It's crafted to communicate professionalism, growth, and technical capability while maintaining exceptional usability for our B2B audience.

## I. Color Architecture

Our color system is strategically designed to guide users through their journey while maintaining visual hierarchy and meaning throughout the interface.

### Primary Color: Teal (#007373)
This color represents trust, stability, and technological capability. It serves as our core brand identifier and is used for:
- Primary navigation elements and core interactions
- Key metrics and data visualization
- Progress indicators and success states
- Important links and interactive elements
- System status indicators
- Primary buttons and calls-to-action

### Secondary Color: Dark Blue-Grey (#2B3A42)
This sophisticated neutral anchors our visual hierarchy and provides structure. It's applied to:
- Main typography elements
- Secondary navigation components
- Content organization
- Interface frameworks
- Footer elements
- Secondary interactive states

### Accent Color: Coral (#FF6F4F)
This energetic accent color highlights growth, achievement, and important actions:
- Growth metrics and positive indicators
- High-priority calls-to-action
- Important highlights and emphasis
- Achievement markers
- Key conversion points
- Progress completion states

### Surface Colors
We employ two strategic background colors to create depth and hierarchy:

1. Light Grey (#F8F8F8)
   - Page backgrounds
   - Card containers
   - Form fields
   - Secondary buttons
   - Neutral spaces

2. Light Cyan (#E0FFFF)
   - Active states
   - Tool backgrounds
   - Success messages
   - Selected items
   - System feedback

### Strategic Gradient System

Our gradient system adds sophistication and visual interest while maintaining professionalism:

1. Professional Gradient
   ```css
   background: linear-gradient(to right, #007373, #2B3A42);
   ```
   Used for headers, key sections, and professional containers.

2. Growth Gradient
   ```css
   background: linear-gradient(to right, #007373, #FF6F4F);
   ```
   Applied to revenue sections, success metrics, and achievement displays.

3. Action Gradient
   ```css
   background: linear-gradient(135deg, #FF6F4F, rgba(255, 111, 79, 0.8));
   ```
   Reserved for primary CTAs and critical conversion points.

## II. Typography System

Our typography system creates clear hierarchy while maintaining readability across all devices.

### Strategic Font Pairing

1. Playfair Display
   - Purpose: Commanding headlines and key metrics
   - Usage: Page titles, hero text, important numbers
   - Properties: Bold weight, tight tracking

2. Roboto
   - Purpose: Body text and general content
   - Usage: Paragraphs, lists, form labels, headers (h2-h4)
   - Properties: Regular weight, comfortable line height
   - Note: Primary sans-serif font for all content

3. Montserrat
   - Purpose: Interactive elements and accents
   - Usage: Buttons, navigation, feature highlights
   - Properties: Medium weight, slightly increased letter-spacing

### Responsive Scale

We implement a sophisticated mobile-first type scale:

1. Page Titles (H1)
   - Mobile: 48px
   - Desktop: 64px
   - Hero Special Case: 72px
   - Properties: Playfair Display, Bold, 1.1 line height

2. Section Headers (H2)
   - Mobile: 36px
   - Desktop: 48px
   - Properties: Roboto, Semibold, 1.2 line height

3. Subsection Headers (H3)
   - Mobile: 24px
   - Desktop: 32px
   - Properties: Roboto, Semibold, 1.3 line height

4. Body Text
   - Mobile: 16px
   - Desktop: 18px
   - Properties: Roboto, Regular, 1.6 line height

## III. Component System

Our components are designed for consistency, usability, and scalability.

### Button System

1. Primary Button
   ```css
   font-family: Montserrat;
   font-weight: 600;
   background: var(--gradient-action);
   padding: 12px 24px;
   border-radius: 8px;
   transition: all 0.2s ease;
   ```

2. Secondary Button
   ```css
   font-family: Montserrat;
   font-weight: 600;
   color: var(--brand-primary-500);
   border: 2px solid currentColor;
   padding: 12px 24px;
   border-radius: 8px;
   ```

### Card System

1. Feature Card
   ```css
   background: white;
   border-radius: 12px;
   padding: 24px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
   transition: transform 0.2s ease;
   ```

2. Metric Card
   ```css
   background: var(--gradient-professional);
   border-radius: 12px;
   padding: 20px;
   color: white;
   ```

## IV. Layout & Spacing

We maintain a consistent rhythm throughout the interface:

### Vertical Spacing
- Section Margins: 64px (mobile) / 96px (desktop)
- Component Spacing: 32px (mobile) / 48px (desktop)
- Element Spacing: 16px (mobile) / 24px (desktop)

### Horizontal Spacing
- Container Max-Width: 1280px
- Container Padding: 20px (mobile) / 40px (desktop)
- Grid Gaps: 20px (mobile) / 32px (desktop)

## V. Interaction & Animation

Our interactions enhance usability while maintaining professionalism:

### Hover States
- Buttons scale to 1.02
- Cards lift 2px
- Links show underlines
- Color transitions over 0.2s
- Gradient shifts for enhanced feedback

### Loading States
- Subtle pulse animations for loading
- Progress indicators use brand colors
- Skeleton screens for content loading
- Smooth fade-in transitions

## VI. Accessibility Guidelines

We maintain WCAG 2.1 AA standards throughout:

- Color contrast ratios meet or exceed 4.5:1
- Interactive elements have visible focus states
- All interactions are keyboard-accessible
- Semantic HTML maintains clear structure
- Font sizes remain legible at all breakpoints

## VII. Development Workflow

### Mobile-First Development
All development follows a strict mobile-first approach:

1. Primary Development Device
   - iPhone 12 Pro (390px width)
   - Use Chrome DevTools with iPhone 12 Pro preset
   - Lock viewport to mobile during initial development

2. Development Order
   - Complete mobile design (390px)
   - Test on smaller devices (iPhone SE - 375px)
   - Test on larger phones (iPhone 14 Pro Max - 428px)
   - Scale up to tablet (768px)
   - Finally, adapt for desktop (1024px+)

3. Component Documentation
   Each component should include:
   ```typescript
   /**
    * ComponentName
    * 
    * @device Developed initially for iPhone 12 Pro (390px)
    * @viewport Default mobile viewport
    * @breakpoints
    * - Base: iPhone 12 Pro (390px)
    * - Small: iPhone SE (375px)
    * - Large: iPhone 14 Pro Max (428px)
    * - Tablet: >= 768px
    * - Desktop: >= 1024px
    */
   ```

4. Testing Requirements
   - Initial development: Test only on iPhone 12 Pro preset
   - Before PR: Test across all breakpoints
   - Production: Full responsive testing

## Implementation Notes

When implementing this system:
1. Always use semantic HTML elements
2. Maintain responsive behavior across all breakpoints
3. Test interactions across different input methods
4. Verify color contrast meets accessibility standards
5. Ensure consistent spacing using the defined scale
6. Reference this document when making changes to tailwind.config.ts or globals.css
7. Keep typography, colors, and spacing synchronized across all implementation files