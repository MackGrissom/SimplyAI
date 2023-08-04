'use client'
import React, { useState } from "react";
import axios from "axios";

const TextToSpeech: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const handleGenerateSpeech = async () => {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/speeches",
                {
                    engine: "davinci",
                    prompt: inputText,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                    },
                }
            );

            const { audio } = response.data;
            setAudioUrl(audio);
        } catch (error) {
            console.error(error);
            alert("Error occurred while generating speech");
        }
    };

    return (
        <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h1 className="text-2xl mb-4">Text-to-Speech</h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={5}
                className="w-full border rounded-md p-2 text-base mb-4"
                placeholder="Enter text to generate speech"
            ></textarea>
            <button
                onClick={handleGenerateSpeech}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
                Generate Speech
            </button>
            {audioUrl && (
                <audio controls className="mt-4">
                    <source src={audioUrl} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default TextToSpeech;
