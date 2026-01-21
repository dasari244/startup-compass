import { VerdictType } from "@/types/analysis";
import { cn } from "@/lib/utils";

interface VerdictCardProps {
  type: VerdictType;
  emoji: string;
  label: string;
  explanation: string;
}

export function VerdictCard({ type, emoji, label, explanation }: VerdictCardProps) {
  const verdictStyles = {
    strong: "verdict-strong",
    risky: "verdict-risky", 
    weak: "verdict-weak",
  };

  return (
    <div 
      className={cn(
        "section-card border-2 animate-slide-up",
        verdictStyles[type]
      )}
      style={{ animationDelay: "0.6s" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{emoji}</span>
        <h3 className="text-xl font-bold">{label}</h3>
      </div>
      <p className="text-foreground/80 leading-relaxed">{explanation}</p>
    </div>
  );
}
