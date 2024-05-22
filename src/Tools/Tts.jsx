import React, { useState } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";

const Speech = () => {
    const [value, setValue] = useState("");
    const [selectedSpeaker, setSelectedSpeaker] = useState("Joanna");
    const { speak, voices } = useSpeechSynthesis();

    const handleSpeakerChange = (event) => {
        setSelectedSpeaker(event.target.value);
    };

    const findVoiceByName = (name) => {
        return voices.find(voice => voice.name === name);
    };

    const handleSpeak = () => {
        const selectedVoice = findVoiceByName(selectedSpeaker);
        speak({ text: value, voice: selectedVoice });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-3xl font-bold text-center">Text To Speech Converter</h2>
                <textarea
                    className="w-full h-64 p-4 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter text..."
                ></textarea>
                <div className="mb-4 text-center">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Select Speaker:</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedSpeaker}
                        onChange={handleSpeakerChange}
                    >
                        {voices.map((voice) => (
                            <option key={voice.name} value={voice.name}>{voice.name}</option>
                        ))}
                    </select>
                </div>
                <div className="text-center">
                    <button
                        className="px-6 py-3 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={handleSpeak}
                    >
                        Speak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Speech;
