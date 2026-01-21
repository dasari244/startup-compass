import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

interface AnalysisDisplayProps {
  analysis: string;
  onReset: () => void;
}

export function AnalysisDisplay({ analysis, onReset }: AnalysisDisplayProps) {
  // Parse the analysis into sections
  const sections = parseAnalysisSections(analysis);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Analysis Results</h2>
        <Button variant="muted" onClick={onReset}>
          <RotateCcw className="w-4 h-4" />
          Analyze Another
        </Button>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="section-card animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg font-semibold text-primary mb-3">
              {section.title}
            </h3>
            <div className="text-muted-foreground space-y-2 leading-relaxed">
              {section.content.split('\n').map((paragraph, pIndex) => (
                paragraph.trim() && (
                  <p key={pIndex} className="text-sm">
                    {formatText(paragraph)}
                  </p>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Section {
  title: string;
  content: string;
}

function parseAnalysisSections(analysis: string): Section[] {
  // Split by numbered sections (e.g., "1.", "2.", etc.)
  const sectionRegex = /(\d+\.\s*[^:]+:)/g;
  const parts = analysis.split(sectionRegex).filter(Boolean);
  
  const sections: Section[] = [];
  
  for (let i = 0; i < parts.length; i += 2) {
    const title = parts[i]?.replace(/^\d+\.\s*/, '').replace(/:$/, '').trim();
    const content = parts[i + 1]?.trim() || '';
    
    if (title && content) {
      sections.push({ title, content });
    }
  }
  
  // If parsing failed, return the whole thing as one section
  if (sections.length === 0) {
    return [{ title: "Analysis", content: analysis }];
  }
  
  return sections;
}

function formatText(text: string): React.ReactNode {
  // Handle bold text marked with **
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-foreground font-medium">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Handle italic text marked with _
    if (part.startsWith('_') && part.endsWith('_')) {
      return (
        <em key={index} className="text-foreground/80">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}
