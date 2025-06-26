import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoBox = ({ type = 'info', title, icon, children }) => {
  const getTypeClasses = () => {
    switch (type) {
      case 'success':
        return 'bg-success-accent bg-opacity-10 border-l-4 border-success-accent text-success-accent';
      case 'warning':
        return 'bg-warning-accent bg-opacity-10 border-l-4 border-warning-accent text-warning-accent';
      case 'danger':
        return 'bg-danger-accent bg-opacity-10 border-l-4 border-danger-accent text-danger-accent';
      default:
        return 'bg-primary-accent bg-opacity-10 border-l-4 border-primary-accent text-primary-accent';
    }
  };
  
  return (
    <div className={`p-4 rounded-lg ${getTypeClasses()} mb-4`}>
      <div className="text-base font-semibold mb-2 flex items-center gap-2">
        {icon && <FontAwesomeIcon icon={icon} />}
        {title}
      </div>
      <div className="text-sm text-text-light">
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
