// // gemini.js

// // 1. अपनी API Key को इस तरह पास करें
// const apiKey = "AIzaSyCSEL6ktP3SHuDa9pzpAbHWX014ThEn1Zs"; // इसे गोपनीय रखें!

// import { GoogleGenAI } from "@google/genai";


// const ai = new GoogleGenAI({ apiKey: apiKey }); 

// async function getGeminiResponse(promptText) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash", 
//       contents: promptText,
//     });
    
//     return response.text;
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return "क्षमा करें, API से जवाब नहीं मिल पाया।";
//   }

// }

// // उदाहरण के लिए फ़ंक्शन को चलाएँ
// // (async () => {
// //     const userPrompt = "what is javascript";
// //     console.log(`सवाल: ${userPrompt}`);
// //     const result = await getGeminiResponse(userPrompt);
// //     console.log("जवाब:");
// //     console.log(result);
// // })();

// // (async ()=>{
// // const userPrompt = "what is c++";
// // const result = await getGeminiResponse(userPrompt);
// // console.log(result);
// // })();
// export default getGeminiResponse;

//----------------------------------------
// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from '@google/generative-ai'
// // import { GoogleAIFileManager } from '@google/generative-ai/server';

// const MODEL_NAME='gemini-2.5-flash';
// // const MODEL_NAME='gemini-2.5-flash';
// const API_KEY="AAIzaSyDUZkEaLh9xyyAkoCRts5ugFNDUxEdeJrM";

// async function runchat(prompt) {
//   const genAI=new GoogleGenerativeAI(API_KEY)
//   const model=genAI.getGenerativeModel({MODEL_NAME});

//   const generationConfig={
//     temperature:0.9,
//     topK:1,
//     topP:1,
//     maxOutputTokens:2048,
//   };
  // const safetySettings=[
  //   {
  //     category:HarmCategory.HARM_CATEGORY_HARASSMENT,
  //     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },

  //    {
  //     category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  //     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },

  //    {
  //     category:HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  //     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },

  //    {
  //     category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  //     threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //   },
  // ]
  
//   const chat = model.startchat({
//     generationConfig,
//     safetySettings,
//     history:[

//     ],
// });
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai'
// import { GoogleAIFileManager } from '@google/generative-ai/server';

const modelname ='gemini-2.5-flash';
// const MODEL_NAME='gemini-2.5-flash';
const API_KEY="AIzaSyBtpmXc-v3xpj6_QDDiM61pAXjxhjxrM14";

// const API_KEY="AAIzaSyDUZkEaLh9xyyAkoCRtsSugFNDUXEdeJRM";


async function runchat(prompt) {
  const genAI=new GoogleGenerativeAI(API_KEY)
  const model=genAI.getGenerativeModel({model :modelname});

  const generationConfig={
    temperature:0.9,
    // topK:1,
    topP:1,
    maxOutputTokens:2048,
  };
// const chat=genAI.getGenerativeModel({mode:"gemini-2.5-flash"}).startChat({
//    generationConfig,
//     safetySettings,
//     history:[

//     ],
// });
  const chat = model.startChat({
    generationConfig,
    safetySettings:[],
    history:[],
});
const result = await chat.sendMessage(prompt);
const response=result.response;
console.log(response.text());
return response.text();
}
export default runchat;