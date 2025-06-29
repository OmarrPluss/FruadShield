import { Shield, Moon, Sun } from 'lucide-react'

const Header = ({ isDark, toggleTheme }) => {
  return (
    <header className="py-5 flex justify-between items-center">
      <a 
        href="#" 
        className="flex items-center gap-2.5 font-bold text-2xl text-indigo-600 dark:text-indigo-400 no-underline transition-colors duration-300"
      >
        <Shield className="text-3xl" />
        <span>FraudShield</span>
      </a>
      
      <button
        onClick={toggleTheme}
        className="bg-transparent border-none text-gray-800 dark:text-gray-100 text-xl cursor-pointer p-2 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  )
}

export default Header

