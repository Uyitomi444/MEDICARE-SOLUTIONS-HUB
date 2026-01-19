
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("API_KEY for Gemini is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "" });

export const generateHealthArticle = async (topic: string): Promise<string> => {
    if (!API_KEY) {
        return Promise.reject("API key is not configured. Cannot contact AI service.");
    }
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a comprehensive and engaging health-tech blog article about "${topic}".`,
            config: {
                systemInstruction: "You are a savvy health-tech writer for a cutting-edge digital health platform. The tone should be modern, intelligent, and empowering. Avoid clinical jargon. Structure the article with a powerful intro, well-defined sections, and actionable takeaways. Do not include any disclaimers like 'I am not a medical professional'. The content should be presented as an authoritative blog post. Use markdown for formatting: # for the main title, ## for subtitles, * for list items, and ** for bold text.",
            },
        });
        
        return result.text;
    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        throw new Error("Failed to generate health article. The AI service may be temporarily unavailable.");
    }
};