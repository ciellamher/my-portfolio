import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
  const apiKey = "AIzaSyDPEWV7VWoShn_7HsgScBAGHUwJIOFCfKI"; // Your actual key
  const genAI = new GoogleGenerativeAI(apiKey);

  // We will try these 3 models in order. The first one that works wins.
  const modelsToTry = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-pro"];

  for (const modelName of modelsToTry) {
    try {
      console.log(`Attempting to connect with: ${modelName}...`);
      
      const model = genAI.getGenerativeModel({ model: modelName });
      const systemPrompt = `You are Graciella's assistant. User asks: ${message}`;
      
      const result = await model.generateContent(systemPrompt);
      const response = await result.response;
      const text = response.text();

      console.log(`SUCCESS! Connected using ${modelName}`);
      return NextResponse.json({ reply: text });
      
    } catch (error: any) {
      console.error(`Failed with ${modelName}:`, error.message.split(' ')[0]); // Log just the error code
      // Loop continues to the next model...
    }
  }

  return NextResponse.json({ reply: "Google is still waking up... please wait 2 more minutes and try again!" }, { status: 500 });
}