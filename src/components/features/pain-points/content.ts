import { PainPoint } from './types';

export const painPoints: PainPoint[] = [
  {
    id: 'leads',
    title: 'Manual Lead Sorting Hell?',
    description: 'Still playing eeny, meeny, miny, moe with your leads? There\'s a better way to prioritize who needs attention now.',
    stats: {
      value: '60%',
      context: 'of SMBs lose deals to disorganized follow-ups'
    },
    solutions: {
      quickWin: {
        title: 'Quick Scoring Template',
        description: 'Get our 5-minute lead scoring template and stop guessing who\'s hot and who\'s not',
        timeEstimate: '5 minutes to implement'
      },
      systemicFix: {
        title: 'Full Automation',
        description: 'Full lead automation system that scores, segments, and schedules your follow-ups',
        timeframe: '2-4 weeks to full implementation'
      }
    }
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack Chaos?',
    description: 'Got more apps than your phone can handle? When your "productivity" tools start causing more headaches than solutions.',
    stats: {
      value: '73%',
      context: 'of startups waste budget on overlapping tools'
    },
    solutions: {
      quickWin: {
        title: 'Tech Audit',
        description: 'Our 15-minute tech audit template reveals redundant tools and hidden costs',
        timeEstimate: '15 minutes to complete'
      },
      systemicFix: {
        title: 'Stack Optimization',
        description: 'Streamlined tech ecosystem that connects your essential tools into one workflow',
        timeframe: '1-2 months to optimize'
      }
    }
  },
  {
    id: 'marketing',
    title: 'Marketing ROI Mystery?',
    description: 'Throwing content at the wall to see what sticks? Time to turn that marketing guesswork into actual results.',
    stats: {
      value: '82%',
      context: 'of SMBs struggle to measure marketing ROI'
    },
    solutions: {
      quickWin: {
        title: 'ROI Tracker',
        description: 'Simple ROI tracking template that shows which efforts actually make money',
        timeEstimate: '10 minutes to setup'
      },
      systemicFix: {
        title: 'Full Analytics',
        description: 'Complete analytics system showing exactly how leads become customers',
        timeframe: '3-4 weeks to implement'
      }
    }
  }
];