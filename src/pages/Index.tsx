import { useState } from "react";
import { IdeaForm } from "@/components/IdeaForm";
import { AnalysisDisplay } from "@/components/AnalysisDisplay";
import { LoadingState } from "@/components/LoadingState";
import { analyzeIdea } from "@/services/analysisApi";
import { Zap } from "lucide-react";
import { toast } from "sonner";

type AppState = "idle" | "loading" | "results";

const Index = () => {
  const [state, setState] = useState<AppState>("idle");
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleAnalyze = async (idea: string) => {
    setState("loading");
    
    try {
      const result = await analyzeIdea(idea);
      setAnalysis(result.analysis);
      setState("results");
    } catch (error) {
      console.error("Analysis failed:", error);
      toast.error("Failed to analyze idea. Please try again.");
      setState("idle");
    }
  };

  const handleReset = () => {
    setState("idle");
    setAnalysis(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50">
          <div className="container py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">IdeaLab</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">How it works</a>
              <a href="#" className="hover:text-foreground transition-colors">Examples</a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="container py-16 md:py-24">
          {state === "idle" && (
            <div className="space-y-12 animate-fade-in">
              {/* Hero */}
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-3 h-3" />
                  YC-Level Analysis in Seconds
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Validate Your Startup Idea{" "}
                  <span className="text-gradient">Before You Build</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get brutally honest, investor-grade feedback on your startup idea. 
                  No fluff. No hype. Just actionable insights.
                </p>
              </div>

              {/* Form */}
              <IdeaForm onSubmit={handleAnalyze} isLoading={false} />

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground pt-8">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  12-point analysis
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Investor perspective
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Actionable next steps
                </div>
              </div>
            </div>
          )}

          {state === "loading" && <LoadingState />}

          {state === "results" && analysis && (
            <AnalysisDisplay analysis={analysis} onReset={handleReset} />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8">
          <div className="container text-center text-sm text-muted-foreground">
            Built for founders who want the truth, not validation.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
