export function LoadingState() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 text-muted-foreground">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-lg">Analyzing your startup idea...</span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="section-card h-32 relative overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-muted/50 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
