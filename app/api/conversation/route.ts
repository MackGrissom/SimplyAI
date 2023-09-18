import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Function to count tokens in a string
function countTokens(text: string): number {
  // Split the text into words and count the number of words
  const words = text.split(/\s+/);
  return words.length;
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro to continue using Unify.", { status: 403 });
    }

    // Calculate the total token count of the messages
    let totalTokens = 0;
    const truncatedMessages = [];

    for (const message of messages) {
      const messageTokens = countTokens(message.role + ": " + message.content);
      totalTokens += messageTokens;

      // Check if adding the message exceeds the token limit
      if (totalTokens <= 4096) { // Token limit for gpt-3.5-turbo
        truncatedMessages.push(message);
      } else {
        break; // Stop adding messages if we exceed the token limit
      }
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: truncatedMessages,
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
