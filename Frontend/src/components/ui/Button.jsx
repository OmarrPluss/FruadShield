import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children, variant = 'primary', icon, onClick, className = '' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return `
          relative overflow-hidden
          backdrop-blur-md bg-blue-500/20 border border-blue-400/30
          text-white py-2 px-4 rounded-lg
          transition-all duration-300 ease-in-out
          hover:bg-blue-500/30 hover:border-blue-400/50 hover:shadow-lg
          hover:shadow-blue-500/25 hover:-translate-y-0.5
          active:translate-y-0 active:shadow-md
          before:absolute before:inset-0 before:bg-gradient-to-r 
          before:from-transparent before:via-white/10 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-700
        `;
      case 'outline':
        return `
          relative overflow-hidden
          backdrop-blur-md bg-transparent border border-white/30
          text-white py-2 px-4 rounded-lg
          transition-all duration-300 ease-in-out
          hover:bg-white/10 hover:border-white/50 hover:shadow-lg
          hover:shadow-white/25 hover:-translate-y-0.5
          active:translate-y-0 active:shadow-md
          before:absolute before:inset-0 before:bg-gradient-to-r 
          before:from-transparent before:via-white/5 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-700
        `;
      default:
        return `
          relative overflow-hidden
          backdrop-blur-md bg-blue-500/20 border border-blue-400/30
          text-white py-2 px-4 rounded-lg
          transition-all duration-300 ease-in-out
          hover:bg-blue-500/30 hover:border-blue-400/50 hover:shadow-lg
          hover:shadow-blue-500/25 hover:-translate-y-0.5
          active:translate-y-0 active:shadow-md
          before:absolute before:inset-0 before:bg-gradient-to-r 
          before:from-transparent before:via-white/10 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-700
        `;
    }
  };
  
  return (
    <button 
      className={`${getVariantClasses()} ${className} flex items-center gap-2 font-medium`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="relative z-10" />}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
