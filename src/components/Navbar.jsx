import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  return (
    <div
      className={`w-full flex justify-end px-10 py-4 shadow border-b border-gray-600 transition-all ${
        darkMode ? "bg-black text-white" : "bg-[#e0e0e0] text-black"
      }`}
    >
      <div className="flex gap-10 items-center text-lg font-medium">

        <Link
          to="/translator"
          className={`${
            location.pathname === "/translator"
              ? `underline underline-offset-8 ${darkMode ? "decoration-white" : "decoration-black"}`
              : ""
          }`}
        >
          Translator
        </Link>

        <Link
          to="/random"
          className={`${
            location.pathname === "/random"
              ? `underline underline-offset-8 ${darkMode ? "decoration-white" : "decoration-black"}`
              : ""
          }`}
        >
          Random String
        </Link>

        {/* Toggle Switch */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all ${
            darkMode ? "bg-green-400" : "bg-gray-500"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-all ${
              darkMode ? "translate-x-7" : ""
            }`}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
