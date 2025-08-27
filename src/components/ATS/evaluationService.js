// This service handles the communication with the Groq API

// API key should be stored in an environment variable
// In a real production app, this should be done server-side to protect your API key
const API_KEY = "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";
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const evaluateResume = async (resumeText, targetRole) => {
  try {
    const systemPrompt = `You are an expert resume evaluator and career advisor with deep knowledge of ATS 
    (Applicant Tracking Systems), recruitment best practices, and industry-specific hiring trends. 
    Your task is to analyze a candidate's resume against a specific job role and provide a structured 
    assessment, feedback, and actionable improvement suggestions.`;

    const userPrompt = `Analyze the following resume data and generate a structured evaluation for the ${targetRole} role specifically.
Provide an ATS score breakdown across different categories, followed by improvement suggestions.
Keep the breakdown short and structured.
> Do not provide explanations within the score breakdown.
> Ensure the final recommendations are concise but detailed, using examples where applicable.
> The response must strictly be in JSON format, containing all the below information.

### ATS Score Breakdown
[Only provide the scores, no explanations.]

  **Role Match**: [Score out of 100] \n
  **Experience & Achievements**: [Score out of 100] \n
  **Skills Match**: [Score out of 100] \n
  **Education Fit**: [Score out of 100] \n
  **Readability & Grammar**: [Score out of 100] \n
  **Formatting & ATS Compliance**: [Score out of 100] \n
  **Keyword Density & Buzzword Balance**: [Score out of 100] \n
  **Action Verbs & Impactful Language**: [Score out of 100] \n

### Final Recommendations
[Summarize key improvement areas with direct examples and specific action points. The points are to be 5 in total, they can be on any of the following factors]

> Major improvement area: [Brief explanation with appropriate and useful examples]\n
> Another key issue: [How to fix it]\n
> Additional concise tips (if applicable)

### Final ATS Score:
[Only show the calculated score, not the formula.]
> Score: [Calculated value]
[Formula: total_score = (
    (role_match * 25 / 100) +
    (experience * 20 / 100) +
    (skills * 15 / 100) +
    (education * 10 / 100) +
    (grammar * 10 / 100) +
    (formatting * 7 / 100) +
    (keyword_density * 5 / 100) +
    (action_verbs * 5 / 100)
)]

Resume Data:
''' ${resumeText} '''`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.5,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error("Invalid response from evaluation API");
    }

    // Extract the JSON from the response
    // This uses a regex to find a JSON object in the response
    const jsonMatch = content.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      throw new Error("Could not parse evaluation results");
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error("Error in evaluation service:", error);
    throw new Error(`Failed to evaluate resume: ${error.message}`);
  }
};
