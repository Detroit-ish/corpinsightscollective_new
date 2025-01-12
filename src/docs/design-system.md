# CorpInsights Design System Guide 2025

[Previous content remains the same...]

## VII. Development Workflow

### Mobile-First Development
All development follows a strict mobile-first approach:

1. Primary Development Device
   - iPhone 12 (375px width)
   - Use Chrome DevTools with iPhone 12 preset
   - Lock viewport to mobile during initial development

2. Development Order
   - Complete mobile design (375px)
   - Test on other mobile sizes (320px-428px)
   - Scale up to tablet (768px)
   - Finally, adapt for desktop (1024px+)

3. Component Documentation
   Each component should include:
   ```typescript
   /**
    * ComponentName
    * 
    * @device Developed initially for iPhone 12 (375px)
    * @viewport Default mobile viewport
    * @breakpoints
    * - Base: iPhone 12 (375px)
    * - Tablet: >= 768px
    * - Desktop: >= 1024px
    */
   ```

4. Testing Requirements
   - Initial development: Test only on iPhone 12 preset
   - Before PR: Test across all breakpoints
   - Production: Full responsive testing

[Rest of document remains the same...]