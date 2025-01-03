// src/components/features/hero/types.ts

// Stage Status Types
export type StageStatus = 'completed' | 'active' | 'upcoming';
export type TechBusinessVariant = 'default' | 'growth' | 'strategy';

// Stage Interfaces
export interface Stage {
  id: number;
  title: string;
  icon: string;
  description?: string;
  tools?: string[];
  keyPoints?: string[];
  status?: StageStatus;
}

export interface JourneyStage {
  id: string;
  title: string;
  description: string;
  variant: TechBusinessVariant;
  isCompleted: boolean;
  tools?: string[];
  keyPoints?: string[];
}

// Component Props Interfaces
export interface TechBusinessIconProps {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
  variant?: TechBusinessVariant;
}

export interface InfoCardContent {
  title: string;
  description: string;
  tools?: string[];
  keyPoints?: string[];
}

// Styling Interfaces
export interface StageColors {
  bg: string;
  text: string;
  connection: string;
}

export interface StageColorConfig {
  completed: StageColors;
  active: StageColors;
  upcoming: StageColors;
}

export interface VariantContent {
  title: string;
  subtitle: string;
}