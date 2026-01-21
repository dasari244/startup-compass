import { AnalysisSection } from "@/types/analysis";

interface AnalysisSectionCardProps {
  section: AnalysisSection;
  index: number;
}

export function AnalysisSectionCard({ section, index }: AnalysisSectionCardProps) {
  return (
    <div 
      className="section-card animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-xl">{section.emoji}</span>
        <span>{section.title}</span>
      </h3>
      <ul className="space-y-2">
        {section.content.map((item, i) => (
          <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1.5 text-xs">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
