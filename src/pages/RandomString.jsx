import React, { useState, useCallback } from "react";

const RandomString = ({ darkMode }) => {
  const [randomText, setRandomText] = useState("");
  const [length, setLength] = useState("");

  const generateString = useCallback(() => {
    const len = parseInt(length);

    if (!len || len <= 0) {
      setRandomText("❌ Enter a valid positive number!");
      return;
    }

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]<>?/|~";
    let result = "";
    for (let i = 0; i < len; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }

    setRandomText(result);
  }, [length]);

  return (
    <div className="min-h-screen flex flex-col items-center pt-14 px-4 transition-all">
      <h1 className="text-4xl font-bold mb-16 text-blue-400">
        Random String Generator
      </h1>

      {/* Length Input */}
      <div className="relative w-full max-w-xs mb-20">
        <input
          type="number"
          className={`w-full rounded-2xl p-5 text-lg shadow-[0_0_20px_4px_rgba(0,102,255,0.3)] transition-all
${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
          placeholder="Enter length (1-100)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label
          className={`absolute left-4 -top-3 px-2 text-sm transition-all
${darkMode ? "bg-black text-blue-300" : "bg-white text-blue-600"}`}
        >
          Length
        </label>
      </div>

      {/* Result Box */}
      <div className="relative w-full max-w-xl mb-16">
        <textarea
          readOnly
          className={`w-full rounded-2xl p-5 text-lg shadow-[0_0_20px_4px_rgba(0,255,150,0.4)] transition-all
${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
          value={randomText}
        />
        <label
          className={`absolute left-5 -top-3 px-2 text-sm
${darkMode ? "bg-black text-green-300" : "bg-white text-green-600"}`}
        >
          Output
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateString}
        className="relative px-14 py-4 font-semibold rounded-lg border-2 border-blue-400 overflow-hidden group"
      >
        <span className="relative z-10">Generate</span>
        <span className="absolute inset-0 border-2 border-blue-400 rounded-lg group-active:animate-border"></span>
      </button>
    </div>
  );
};

export default RandomString;
