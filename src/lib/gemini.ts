import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Initialize the Gemini API using the environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

// Check if API key is available
if (!API_KEY) {
  console.warn("Warning: Gemini API key is not set. Please add your API key in the .env file.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

interface GenerateQuestionsOptions {
  topic: string;
  numberOfQuestions: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  quizId: string;
}

export const generateQuestions = async ({ 
  topic, 
  numberOfQuestions = 5,
  difficulty = 'medium',
  quizId
}: GenerateQuestionsOptions) => {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    // Craft a detailed prompt that will generate questions in the correct format
    const prompt = `Generate ${numberOfQuestions} ${difficulty} difficulty multiple-choice questions about ${topic}. 
    
    Format each question as a valid JSON object with the following structure:
    {
      "id": "${quizId}-q[number]",
      "question": "[question text]",
      "options": [
        { "id": "${quizId}-q[number]-a", "text": "[option A text]" },
        { "id": "${quizId}-q[number]-b", "text": "[option B text]" },
        { "id": "${quizId}-q[number]-c", "text": "[option C text]" },
        { "id": "${quizId}-q[number]-d", "text": "[option D text]" }
      ],
      "correctOptionId": "${quizId}-q[number]-[a/b/c/d]",
      "explanation": "[detailed explanation of why the answer is correct]"
    }
    
    Return your response as a JSON array containing all questions. Ensure all JSON is valid and properly formatted.`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract and parse the JSON response
    // First, let's try to extract JSON between possible markdown code blocks
    let jsonText = text;
    const jsonMatch = text.match(/```(?:json)?\s*(\[\s*\{.*?\}\s*\])\s*```/s);
    
    if (jsonMatch && jsonMatch[1]) {
      jsonText = jsonMatch[1];
    }
    
    // Parse the JSON
    try {
      const questions = JSON.parse(jsonText);
      return questions;
    } catch (e) {
      console.error("Failed to parse Gemini response as JSON:", e);
      throw new Error("Failed to parse AI response");
    }
  } catch (error) {
    console.error("Error generating questions:", error);
    throw error;
  }
};