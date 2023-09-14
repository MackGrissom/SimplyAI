import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { resolutionOptions } from "@/app/(dashboard)/(routes)/image/constants";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    // Destructure the body with default values
    const { prompt, amount = 1, resolution = '512x512', selectedPromptIndex } = body;

    // Check for userId and API key
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    // Validate prompt, amount, and resolution
    if (!prompt || !amount || !resolution) {
      return new NextResponse("Prompt, amount, and resolution are required", { status: 400 });
    }

    // Check subscription and API limits
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const selectedPrompt = enhancedPrompts[selectedPromptIndex];
    const updatedPrompt = `${selectedPrompt}\n\n${prompt}`;

    // Create image using OpenAI API
    const response = await openai.createImage({
      prompt: updatedPrompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    // Increment API limit for non-pro users
    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
