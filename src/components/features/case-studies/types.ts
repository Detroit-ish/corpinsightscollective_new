export interface CaseStudy {
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

export type FaceType = 'impact' | 'stats' | 'process';

export interface GestureConfig {
  swipeThreshold: number;      // Minimum swipe distance
  directionThreshold: number;  // Max angle deviation
  velocityThreshold: number;  // Quick swipe threshold
  edgeResistance: number;     // Edge bounce coefficient
}