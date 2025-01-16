import { ReactNode } from 'react';

/**
 * Core case study data structure
 */
export interface CaseStudy {
  readonly id: string;
  readonly faces: ReadonlyArray<CaseStudyFace>;
  readonly category: string;
  readonly clientName: string;
  readonly featured?: boolean;
}

/**
 * Individual face content for a case study card
 */
export interface CaseStudyFace {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly metrics?: ReadonlyArray<Metric>;
}

/**
 * Metric data structure for displaying achievements
 */
export interface Metric {
  readonly value: string;
  readonly label: string;
  readonly emphasis?: boolean;
}

/**
 * Base props for the HoloCard component
 */
export interface HoloCardProps {
  readonly study: CaseStudy;
  readonly className?: string;
  readonly onFlip?: (isFlipped: boolean) => void;
  readonly children?: ReactNode;
}