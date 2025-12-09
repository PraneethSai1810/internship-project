import React, { useState } from "react";

const Translator = ({ darkMode }) => {
  const [language, setLanguage] = useState("hi");
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = async () => {
    const url = `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=en&to=${language}&query=${encodeURIComponent(text)}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "f894e5247cmsheeb6ed5529f0663p169c83jsn622c4ae3ba63",
        "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
      },
      body: '{"translate":"rapidapi"}'
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTranslated(result?.translation || "Translation failed");
      console.log(result);
    } catch (error) {
      console.error(error);
      setTranslated("❌ Error: Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-14 px-4 transition-all">
      <h1 className="text-5xl font-bold -mt-4 mb-16 text-blue-400 tracking-wide">
        Text Translator
      </h1>

      {/* Floating glowing input */}
      <div className="relative w-full max-w-2xl mb-12">
        <textarea
          className={`w-full rounded-2xl p-5 text-lg shadow-[0_0_20px_4px_rgba(0,102,255,0.3)] focus:shadow-[0_0_35px_7px_rgba(0,210,255,0.5)] transition-all
${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label
          className={`absolute left-5 -top-3 px-2 text-sm transition-all
${darkMode ? "bg-black text-blue-300" : "bg-white text-blue-600"}`}
        >
          Enter text in English
        </label>
      </div>

      {/* Language Dropdown */}
      <select
        className={`mt-4 mb-10 border border-blue-400 p-3 rounded-lg w-full max-w-xs transition-all
${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="hi">Hindi</option>
        <option value="te">Telugu</option>
        <option value="ta">Tamil</option>
        <option value="kn">Kannada</option>
        <option value="ml">Malayalam</option>
        <option value="bn">Bengali</option>
        <option value="gu">Gujarati</option>
        <option value="mr">Marathi</option>
      </select>

      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        className="relative px-14 py-4 font-semibold rounded-lg border-2 border-blue-400 overflow-hidden group mt-4"
      >
        <span className="relative z-10">Translate</span>
        <span className="absolute inset-0 border-2 border-blue-400 rounded-lg group-active:animate-border"></span>
      </button>

      {/* Output box */}
      <div className="relative w-full max-w-2xl mt-24">
        <textarea
          className={`w-full rounded-2xl p-5 text-lg shadow-[0_0_20px_4px_rgba(0,255,150,0.4)] transition-all
${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
          rows="3"
          value={translated}
          readOnly
        />
        <label
          className={`absolute left-5 -top-3 px-2 text-sm
${darkMode ? "bg-black text-green-300" : "bg-white text-green-600"}`}
        >
          Output
        </label>
      </div>
    </div>
  );
};

export default Translator;
