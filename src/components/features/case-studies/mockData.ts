import { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'elearning-platform',
    impact: {
      metric: "50+",
      timeline: "3 months",
      roi: "High-quality teachers onboarded",
      context: "USA Market Expansion"
    },
    stats: {
      beforeAfter: [
        {
          label: "Teacher Onboarding",
          before: 0,
          after: 50
        }
      ],
      highlights: [
        "Efficient process tracking and reporting",
        "Creative outreach approach",
        "High-quality talent acquisition"
      ]
    },
    process: {
      steps: [
        {
          title: "Market Analysis",
          description: "Identified key USA market opportunities for hobby learning platform"
        },
        {
          title: "Process Development",
          description: "Created trackable, efficient teacher onboarding system"
        },
        {
          title: "Execution",
          description: "Implemented creative outreach to high-value teachers"
        }
      ],
      integrations: ["CRM", "Tracking Systems", "Reporting Tools"]
    }
  },
  {
    id: 'patient-engagement',
    impact: {
      metric: "New",
      timeline: "6 months",
      roi: "Vertical expansion",
      context: "Healthcare Technology"
    },
    stats: {
      beforeAfter: [
        {
          label: "Market Verticals",
          before: 1,
          after: 3
        }
      ],
      highlights: [
        "Successful vertical expansion",
        "Campaign design and execution",
        "Technology integration"
      ]
    },
    process: {
      steps: [
        {
          title: "Vertical Analysis",
          description: "Identified new healthcare verticals for expansion"
        },
        {
          title: "Campaign Design",
          description: "Created targeted engagement strategies"
        },
        {
          title: "Implementation",
          description: "Executed campaigns with deep tech integration"
        }
      ],
      integrations: ["Patient Engagement Platform", "Lead Generation Tools"]
    }
  }
];