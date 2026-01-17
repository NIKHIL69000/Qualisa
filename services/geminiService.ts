import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: process.env.API_KEY is handled by the build environment/runtime.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Gemini features will return mock data or fail.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getCareerCoaching = async (
  userMessage: string, 
  history: { role: string; text: string }[]
): Promise<string> => {
  const ai = getClient();
  
  if (!ai) {
    return "API Key missing. Please ensure the environment is configured correctly to use the AI Career Coach.";
  }

  try {
    const model = 'gemini-3-flash-preview'; // Using Flash for quick, conversational responses
    
    // Construct the context based on previous messages
    const systemInstruction = `You are "Qualisa Coach", a friendly, professional AI career mentor on the Qualisa platform. 
    Your goal is to help freelancers and professionals improve their profiles, identify skill gaps, and suggest growth strategies.
    Keep answers concise, encouraging, and actionable.
    `;

    // Convert history to format expected by API if using chat (simplified here for single turn with history context)
    // For this implementation, we will use generateContent with a constructed prompt to keep it stateless/simple for the demo
    // but incorporating the conversation flow.

    const conversationContext = history.map(h => `${h.role === 'user' ? 'User' : 'Coach'}: ${h.text}`).join('\n');
    const fullPrompt = `
      ${conversationContext}
      User: ${userMessage}
      Coach:
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 }, // Optimization for speed
      }
    });

    return response.text || "I couldn't generate a response at this moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the career database right now. Please try again later.";
  }
};

export const generateSmartMatchDescription = async (skills: string[]): Promise<string> => {
    const ai = getClient();
    if (!ai) return "AI-Generated professional summary unavailable.";

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Write a compelling 2-sentence professional summary for a freelancer with these skills: ${skills.join(', ')}. Focus on value and expertise.`,
        });
        return response.text || "";
    } catch (e) {
        return "Experienced professional ready to deliver high-quality results.";
    }
}