import { StartupAnalysis } from "@/types/analysis";

export function generateMockAnalysis(idea: string): StartupAnalysis {
  // This is a mock - in production, this would call an AI API
  return {
    ideaSummary: {
      title: "Idea Summary",
      emoji: "🧠",
      content: [
        `A platform that ${idea.toLowerCase().includes("app") ? "provides" : "offers"} ${idea.slice(0, 100)}...`,
        "Targets professionals looking to streamline their workflow and increase productivity.",
      ],
    },
    targetCustomer: {
      title: "Target Customer",
      emoji: "🎯",
      content: [
        "Primary: Small business owners and freelancers (1-10 employees)",
        "Secondary: Marketing teams at mid-size companies",
        "Behavior: Already using 3+ productivity tools, frustrated with fragmentation",
      ],
    },
    problemValidation: {
      title: "Problem Validation",
      emoji: "😖",
      content: [
        "Pain level: 6/10 - Noticeable friction but not hair-on-fire urgent",
        "Current solutions exist but are clunky or expensive",
        "This is closer to 'nice-to-have' than 'must-have' for most users",
      ],
    },
    solutionEvaluation: {
      title: "Solution Evaluation",
      emoji: "💡",
      content: [
        "The approach addresses the core problem reasonably well",
        "Differentiation is moderate - relies on execution quality",
        "Key assumption: Users will switch from existing tools (needs validation)",
      ],
    },
    marketOpportunity: {
      title: "Market Opportunity",
      emoji: "🏆",
      content: [
        "Market size: Medium ($1B-$10B TAM)",
        "Growing market with 15-20% YoY growth",
        "Timing is favorable - remote work trends support this",
      ],
    },
    competitiveLandscape: {
      title: "Competitive Landscape",
      emoji: "🧩",
      content: [
        "Direct competitors: 3-5 well-funded startups in this space",
        "Indirect: Established players like Notion, Slack could add this",
        "Barrier to entry: Low technical moat, competition on UX/marketing",
      ],
    },
    uniqueAdvantage: {
      title: "Unique Advantage",
      emoji: "🚀",
      content: [
        "No strong moat identified yet",
        "Potential moat: Network effects if collaboration features succeed",
        "Speed to market could be an advantage if executed quickly",
      ],
    },
    risksRedFlags: {
      title: "Risks & Red Flags",
      emoji: "⚠️",
      content: [
        "Adoption risk: Convincing users to switch from established tools",
        "Market risk: Large players could easily copy the feature",
        "Business model risk: Willingness to pay needs validation",
      ],
    },
    monetizationPotential: {
      title: "Monetization Potential",
      emoji: "💰",
      content: [
        "SaaS subscription model ($10-50/user/month)",
        "Freemium could drive adoption but conversion rates uncertain",
        "Pricing power: Low-Medium (competitive pressure)",
      ],
    },
    mvpRecommendation: {
      title: "MVP Recommendation",
      emoji: "📈",
      content: [
        "Build: Core workflow automation with 1-2 integrations max",
        "Skip: Mobile app, advanced analytics, team features",
        "Fastest validation: Landing page + waitlist + 10 customer interviews",
      ],
    },
    validationExperiments: {
      title: "Validation Experiments",
      emoji: "🧪",
      content: [
        "1. Create landing page, run $200 ad spend, measure signup rate (>5% is good)",
        "2. Cold outreach to 50 target users, offer manual service first",
        "3. Post in relevant communities, gauge organic interest and feedback",
      ],
    },
    finalVerdict: {
      type: "risky",
      emoji: "⚠️",
      label: "Interesting but Risky",
      explanation:
        "This idea addresses a real problem with a reasonable solution, but faces significant competition and lacks a clear moat. Success will depend heavily on execution, speed to market, and finding a unique angle that differentiates from existing solutions. Recommend validating demand with a quick MVP before investing significant resources.",
    },
  };
}
