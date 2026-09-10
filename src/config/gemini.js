import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const modelname = "gemini-2.5-flash";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: modelname });

async function runchat(prompt) {
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const chat = model.startChat({
    generationConfig,
    safetySettings: [],
    history: [],
  });

  const result = await chat.sendMessage(prompt);
  return result.response.text();
}

export default runchat;
