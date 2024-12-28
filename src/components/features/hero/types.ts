// Moving from src/components/features/journey/types.ts
export interface Stage {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface JourneyCircleProps {
  stages: Stage[];
  activeStage: number;
  onStageClick: (stageId: number) => void;
}