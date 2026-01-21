export interface AnalysisResponse {
  analysis: string;
}

export async function analyzeIdea(idea: string): Promise<AnalysisResponse> {
  const response = await fetch(
    "https://turpentinic-elle-oathfully.ngrok-free.dev/webhook/27bb0655-52ed-441d-8f37-0b6d7e7a18c8",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ idea }),
    }
  );

  if (!response.ok) {
    throw new Error(`Analysis failed: ${response.statusText}`);
  }

  return response.json();
}
