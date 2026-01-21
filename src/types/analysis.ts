export type VerdictType = 'strong' | 'risky' | 'weak';

export interface AnalysisSection {
  title: string;
  emoji: string;
  content: string[];
}

export interface StartupAnalysis {
  ideaSummary: AnalysisSection;
  targetCustomer: AnalysisSection;
  problemValidation: AnalysisSection;
  solutionEvaluation: AnalysisSection;
  marketOpportunity: AnalysisSection;
  competitiveLandscape: AnalysisSection;
  uniqueAdvantage: AnalysisSection;
  risksRedFlags: AnalysisSection;
  monetizationPotential: AnalysisSection;
  mvpRecommendation: AnalysisSection;
  validationExperiments: AnalysisSection;
  finalVerdict: {
    type: VerdictType;
    emoji: string;
    label: string;
    explanation: string;
  };
}
