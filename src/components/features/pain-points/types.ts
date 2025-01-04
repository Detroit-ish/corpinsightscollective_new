export interface PainPoint {
  id: string;
  title: string;
  description: string;
  stats: {
    value: string;
    context: string;
  };
  solutions: {
    quickWin: {
      title: string;
      description: string;
      timeEstimate: string;
    };
    systemicFix: {
      title: string;
      description: string;
      timeframe: string;
    };
  };
}

export interface PainPointsProps {
  className?: string;
}

export interface PainPointCardProps {
  data: PainPoint;
  isActive: boolean;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  className?: string;
}