import { ReactNode } from 'react';

/**
 * Core case study data structure
 */
export interface CaseStudy {
  readonly id: string;
  readonly faces: readonly [FrontFace, BackFace];
  readonly category: string;
  readonly clientName: string;
  readonly featured?: boolean;
}

/**
 * Individual face content for a case study card
 */
/**
 * Front face with enforced limits:
 * - title: max 60 chars
 * - metrics: max 4 items
 */
export interface FrontFace {
  readonly id: 'front';
  readonly title: string;
  readonly content: string;
  readonly metrics: readonly [Metric, ...Metric[]] & { length: 1 | 2 | 3 | 4 };
}

/**
 * Back face with enforced limits:
 * - title: max 40 chars
 * - content: max 2500 chars (~500 words)
 */
export interface BackFace {
  readonly id: 'back';
  readonly title: string;
  readonly content: string;
}

// @deprecated Use FrontFace or BackFace instead
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