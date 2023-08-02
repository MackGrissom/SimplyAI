import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { text, targetLanguage } = req.body;

    if (!configuration.apiKey) {
      return res.status(500).json({ error: "OpenAI API Key not configured." });
    }

    if (!text || !targetLanguage) {
      return res.status(400).json({ error: "Text and targetLanguage are required" });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return res.status(403).json({ error: "Free trial has expired. Please upgrade to pro." });
    }

    const translationPrompt = `Translate the following text to ${targetLanguage}: "${text}"`;
    const response = await openai.createCompletion({
      engine: "text-davinci-003", // You might need to choose a relevant engine
      prompt: translationPrompt,
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return res.status(200).json({ translation: response.data.choices[0].text });
  } catch (error) {
    console.log('[TRANSLATION_ERROR]', error);
    return res.status(500).json({ error: "Internal Error" });
  }
}
