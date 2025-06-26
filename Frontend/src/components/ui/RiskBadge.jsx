import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RiskBadge = ({ level, text, active = false, onClick }) => {
  const getLevelClasses = () => {
    switch (level) {
      case 'critical':
        return 'bg-danger-accent bg-opacity-20 text-danger-accent';
      case 'high':
        return 'bg-[#E74C3C] bg-opacity-20 text-[#E74C3C]';
      case 'medium':
        return 'bg-warning-accent bg-opacity-20 text-warning-accent';
      case 'low':
        return 'bg-success-accent bg-opacity-20 text-success-accent';
      default:
        return 'bg-primary-accent bg-opacity-20 text-primary-accent';
    }
  };
  
  return (
    <span 
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mr-1.5 cursor-pointer transition-all duration-300 hover:scale-105 ${getLevelClasses()} ${active ? 'shadow-[0_0_0_2px] shadow-current' : ''}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default RiskBadge;
