import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children, variant = 'primary', icon, onClick, className = '' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'outline':
        return 'btn-outline';
      default:
        return 'btn-primary';
    }
  };
  
  return (
    <button 
      className={`btn ${getVariantClasses()} ${className}`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
};

export default Button;
