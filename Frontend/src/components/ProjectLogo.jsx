import { Shield, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

const ProjectLogo = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
  };

  return (
    <div className="absolute top-5 right-5 flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className="bg-transparent border-none text-gray-800 dark:text-gray-100 text-xl cursor-pointer p-2 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      <div className="flex items-center gap-2.5 font-bold text-2xl text-indigo-600 dark:text-indigo-400 no-underline transition-colors duration-300">
        <Shield className="text-3xl" />
        <span>FraudShield</span>
      </div>
    </div>
  )
}

export default ProjectLogo


