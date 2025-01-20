/**
 * Test cases for case study cards with varying content lengths and styles
 */

export const TEST_CASES = [
  // Case 1: Minimal Content
  {
    id: 'minimal-case',
    category: 'Quick Win',
    clientName: 'StartupQuick',
    featured: false,
    faces: [
      {
        id: 'front',
        title: 'Email Open Rates Doubled',
        content: '',
        metrics: [
          { value: '2x', label: 'Open Rate', emphasis: true }
        ] as const
      },
      {
        id: 'back',
        title: 'The Simple Fix',
        content: `
We adjusted email send times based on user activity patterns. That's it. Sometimes the simplest solutions have the biggest impact.

### Results
- Open rates went from 18% to 36%
- Click rates improved by 45%
- Implementation took 2 days
        `.trim()
      }
    ]
  },

  // Case 2: Medium Content with Lists
  {
    id: 'medium-case',
    category: 'Marketing Automation',
    clientName: 'TechFlow Solutions',
    featured: true,
    faces: [
      {
        id: 'front',
        title: 'Lead Quality Up, Costs Down',
        content: '',
        metrics: [
          { value: '64%', label: 'Better Leads', emphasis: true },
          { value: '-32%', label: 'Lower Cost' },
          { value: '90d', label: 'Timeline' }
        ] as const
      },
      {
        id: 'back',
        title: 'Smart Automation Wins',
        content: `
### The Problem
Marketing spent big on leads that sales couldn't close. Classic disconnect.

### What We Did
1. **Analyzed Current Flow**
   - Mapped entire customer journey
   - Identified 3 major drop-off points
   - Found patterns in successful deals

2. **Fixed the Funnel**
   - Implemented lead scoring
   - Created targeted content paths
   - Built sales-marketing feedback loop

3. **Automated Smartly**
   - Set up behavior-based routing
   - Created dynamic email sequences
   - Added intent monitoring

### Key Metrics
- Lead quality score up 64%
- Cost per qualified lead down 32%
- Sales team productivity up 28%
- Close rate improved 3x

### Tech Stack Used
- HubSpot for automation
- Clearbit for enrichment
- Custom scoring model
- Slack for notifications

### Long-term Impact
The system keeps improving with more data. Six months later, we're seeing even better results.
        `.trim()
      }
    ]
  },

  // Case 3: Maximum Content Length Test
  {
    id: 'max-length-case',
    category: 'Full Revenue System',
    clientName: 'Enterprise Corp',
    featured: true,
    faces: [
      {
        id: 'front',
        title: 'Complete Revenue Transformation',
        content: '',
        metrics: [
          { value: '212%', label: 'Revenue Up', emphasis: true },
          { value: '6mo', label: 'Timeline' },
          { value: '-40%', label: 'CAC Down' },
          { value: '3.2x', label: 'LTV Growth' }
        ] as const
      },
      {
        id: 'back',
        title: 'The Full Story',
        content: `
### Initial Situation
Enterprise Corp had all the pieces but nothing worked together. Marketing generated leads, but sales couldn't track them. Data existed everywhere but meant nothing. Sound familiar?

### Challenge Points
1. **Disconnected Systems**
   - 6 different tools not talking to each other
   - Manual data entry eating up time
   - No clear view of the customer journey

2. **Process Gaps**
   - Leads falling through cracks
   - Inconsistent follow-up
   - No standardized qualification

3. **Resource Waste**
   - High ad spend, low returns
   - Sales team chasing bad leads
   - Content created but never used

### Our Approach
We didn't just fix problems—we built a complete revenue engine.

#### Phase 1: Foundation
- Audited all existing systems
- Mapped ideal customer journey
- Created data framework
- Set up proper tracking

#### Phase 2: Integration
- Connected all key systems
- Automated data flow
- Built custom dashboards
- Implemented scoring model

#### Phase 3: Optimization
- A/B tested every touchpoint
- Refined targeting models
- Improved conversion paths
- Enhanced reporting

### The Results

#### Immediate Wins (90 Days)
- Lead quality up 86%
- Response time down 82%
- Conversion rate up 43%

#### Six Month Markers
- Revenue grew 212%
- CAC decreased 40%
- LTV increased 320%
- ROI hit 412%

### Key Insights

1. **System Integration Matters**
   - Unified data means better decisions
   - Automation saves countless hours
   - Real-time insights drive growth

2. **Process Over Patches**
   - Fixed root causes, not symptoms
   - Built scalable solutions
   - Created clear playbooks

3. **Measured Everything**
   - Set clear KPIs
   - Tracked all changes
   - Adapted based on data

### Tools We Used
- Salesforce (CRM)
- Marketo (Marketing)
- Segment (Data)
- Custom Analytics
- Slack (Comms)

### Want These Results?
Let's talk about building your revenue engine. No fluff, just practical steps to get you there.

### Maintenance Notes
- System runs largely automated
- Monthly optimization meetings
- Quarterly strategy reviews
- Ongoing staff training

### Future Roadmap
- AI implementation planned
- Advanced analytics coming
- Global expansion ready
        `.trim()
      }
    ]
  }
];