import type { Stage } from '../features/journey/types';

export const stages: Stage[] = [
  {
    id: 1,
    title: "Market Analysis",
    icon: "📊",
    description: "Understand your market position and identify opportunities for growth",
    tools: ["Market Research Tools", "Competitor Analysis Framework", "SWOT Analysis Template"],
    keyPoints: [
      "Market size and potential",
      "Competitor landscape",
      "Growth opportunities",
      "Industry trends"
    ]
  },
  {
    id: 2,
    title: "Target Audience",
    icon: "🎯",
    description: "Define and understand your ideal customer segments",
    tools: ["Persona Builder", "Journey Mapping Tool", "Customer Survey Kit"],
    keyPoints: [
      "Customer segmentation",
      "Pain points analysis",
      "Buying behavior",
      "Decision factors"
    ]
  },
  {
    id: 3,
    title: "Value Proposition",
    icon: "💡",
    description: "Craft a compelling value proposition that resonates with your audience",
    tools: ["Value Canvas", "Messaging Framework", "USP Builder"],
    keyPoints: [
      "Unique benefits",
      "Competitive advantage",
      "Message clarity",
      "Customer value"
    ]
  },
  {
    id: 4,
    title: "Channel Strategy",
    icon: "🌐",
    description: "Select and optimize your marketing and sales channels",
    tools: ["Channel Planner", "ROI Calculator", "Traffic Analyzer"],
    keyPoints: [
      "Channel selection",
      "Resource allocation",
      "Performance metrics",
      "Optimization strategy"
    ]
  },
  {
    id: 5,
    title: "Growth Plan",
    icon: "📈",
    description: "Develop a comprehensive plan for sustainable growth",
    tools: ["Growth Modeler", "Resource Planner", "KPI Dashboard"],
    keyPoints: [
      "Growth targets",
      "Resource needs",
      "Timeline planning",
      "Success metrics"
    ]
  }
];