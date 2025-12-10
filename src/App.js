import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Translator from "./pages/Translator";
import RandomString from "./pages/RandomString";

function App() {
  const [darkMode, setDarkMode] = useState(true); 

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen transition-all"
          : "bg-[#e0e0e0] text-black min-h-screen transition-all"
      }
    >
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
       <Routes>
  <Route path="/" element={<Navigate to="/translator" />} />
  <Route path="/translator" element={<Translator darkMode={darkMode} />} />
  <Route path="/random" element={<RandomString darkMode={darkMode} />} />
</Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
