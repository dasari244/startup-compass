import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
  isLoading: boolean;
}

export function IdeaForm({ onSubmit, isLoading }: IdeaFormProps) {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea.trim());
    }
  };

  const placeholderText = `Example: "A mobile app that uses AI to help freelancers automatically generate and send personalized cold emails to potential clients based on their portfolio and the client's recent activity on LinkedIn."`;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="section-card">
        <label htmlFor="idea" className="block text-sm font-medium text-muted-foreground mb-3">
          Describe your startup idea
        </label>
        <Textarea
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder={placeholderText}
          className="min-h-[160px] text-foreground"
          disabled={isLoading}
        />
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-muted-foreground">
            Be specific about what you're building and for whom
          </span>
          <Button 
            type="submit" 
            variant="hero" 
            size="lg"
            disabled={!idea.trim() || isLoading}
          >
            <Sparkles className="w-4 h-4" />
            Analyze Idea
          </Button>
        </div>
      </div>
    </form>
  );
}
