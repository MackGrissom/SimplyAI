'use client'

import React, { useState } from "react";
import axios from "axios";

const TranslatePage = () => {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState("Spanish");
    const [translation, setTranslation] = useState("");

    const languages = ["Spanish", "French", "German", "Italian", "Portuguese"];

    const translateText = async () => {
        try {
            const response = await axios.post(
                "/api/translator/route.ts", // Assuming the route is "api/translate"
                {
                    text,
                    targetLanguage: language,
                }
            );

            const translatedText = response.data.translation;
            setTranslation(translatedText);
        } catch (error) {
            console.error(error);
            alert("Error occurred during translation");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        translateText();
    };

    return (
        <div className="App">
            <h1 className="text-3xl font-bold mb-6">GPT-4 Translation</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text" className="block font-semibold mb-1">
                    Text to translate:
                </label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                ></textarea>
                <label htmlFor="language" className="block font-semibold mt-4 mb-1">
                    Target language:
                </label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                >
                    {languages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-700"
                >
                    Translate
                </button>
            </form>
            {translation && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-2">Translation</h2>
                    <p className="text-lg text-justify">{translation}</p>
                </div>
            )}
        </div>
    );
};

export default TranslatePage;
