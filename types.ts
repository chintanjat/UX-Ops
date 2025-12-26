
export type ImpactLevel = 'High' | 'Medium' | 'Low' | 'Unknown';
export type StatusType = 'Done' | 'Not Done' | 'Partial' | 'Unknown';

export interface SubFunction {
  id: string;
  name: string;
  description?: string;
  impact: ImpactLevel;
  status: StatusType;
  currentProcess?: string;
  metric?: string;
  actionItems?: string[];
}

export interface FunctionGroup {
  id: string;
  title: string;
  sno: number;
  northStar: {
    description: string;
    examples?: string[]; // "What top teams do"
  };
  progressUpdate?: string; // "How Have we gotten better on each of those things in the last year"
  champion?: string;       // "Champion for FY26"
  subFunctions: SubFunction[];
}

export interface AuditStats {
  score: number;
  criticalRisks: number;
  optimizationTargets: number;
  totalItems: number;
}
