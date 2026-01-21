import { StartupAnalysis } from "@/types/analysis";
import { AnalysisSectionCard } from "./AnalysisCard";
import { VerdictCard } from "./VerdictCard";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

interface AnalysisResultsProps {
  analysis: StartupAnalysis;
  onReset: () => void;
}

export function AnalysisResults({ analysis, onReset }: AnalysisResultsProps) {
  const sections = [
    analysis.ideaSummary,
    analysis.targetCustomer,
    analysis.problemValidation,
    analysis.solutionEvaluation,
    analysis.marketOpportunity,
    analysis.competitiveLandscape,
    analysis.uniqueAdvantage,
    analysis.risksRedFlags,
    analysis.monetizationPotential,
    analysis.mvpRecommendation,
    analysis.validationExperiments,
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analysis Results</h2>
        <Button variant="muted" onClick={onReset}>
          <RotateCcw className="w-4 h-4" />
          Analyze Another
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section, index) => (
          <AnalysisSectionCard key={section.title} section={section} index={index} />
        ))}
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-bold mb-4 text-center">Final Verdict</h3>
        <VerdictCard
          type={analysis.finalVerdict.type}
          emoji={analysis.finalVerdict.emoji}
          label={analysis.finalVerdict.label}
          explanation={analysis.finalVerdict.explanation}
        />
      </div>
    </div>
  );
}
