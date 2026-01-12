import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    // 1. Get the message from the frontend
    const body = await req.json();
    const { message } = body;

    // 2. Initialize Gemini with your specific Key name "API"
    // based on your Vercel screenshot
    const apiKey = process.env.API; 

    if (!apiKey) {
      return NextResponse.json({ reply: "Error: API Key is missing in Vercel settings." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 3. Define Graciella's Persona
    const prompt = `
      You are Graciella Mhervie Jimenez's AI assistant. 
      Tone: Friendly, professional, and enthusiastic.
      
      Context about Graciella:
      - She is a Computer Science student at Holy Angel University.
      - She is a Notion Campus Leader and Events Director for CSIA.
      - She loves UI/UX, Web Development (Next.js, React), and Python.
      - She lives in Pampanga, Philippines.
      
      User's message: ${message}
      
      Reply as Graciella's assistant (keep it under 3 sentences):
    `;

    // 4. Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: "I'm having trouble connecting to Google right now. Please try again later!" }, { status: 500 });
  }
}