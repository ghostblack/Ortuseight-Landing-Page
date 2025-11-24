import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize the API client. 
// Note: In a real deployment, ensure process.env.API_KEY is set in Netlify environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm ready to help you run faster!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the locker room (server). Please try again later.";
  }
};