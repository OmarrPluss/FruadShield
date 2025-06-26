import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContentBox = ({ variant = 'default', title, icon, borderPosition = 'left', padding = 'medium', children }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'highlight':
        return 'bg-primary-accent bg-opacity-10 border-primary-accent';
      case 'success':
        return 'bg-success-accent bg-opacity-10 border-success-accent';
      case 'warning':
        return 'bg-warning-accent bg-opacity-10 border-warning-accent';
      case 'danger':
        return 'bg-danger-accent bg-opacity-10 border-danger-accent';
      default:
        return 'bg-white bg-opacity-5 border-divider-color';
    }
  };
  
  const getPaddingClasses = () => {
    switch (padding) {
      case 'small':
        return 'p-2';
      case 'large':
        return 'p-6';
      default:
        return 'p-4';
    }
  };
  
  const getBorderClasses = () => {
    switch (borderPosition) {
      case 'left':
        return 'border-l-4';
      case 'top':
        return 'border-t-4';
      case 'right':
        return 'border-r-4';
      case 'bottom':
        return 'border-b-4';
      case 'none':
        return 'border-0';
      default:
        return 'border-l-4';
    }
  };
  
  return (
    <div className={`rounded-lg ${getVariantClasses()} ${getPaddingClasses()} ${getBorderClasses()}`}>
      {(title || icon) && (
        <div className={`text-base font-semibold mb-2 flex items-center gap-2 ${variant !== 'default' ? `text-${variant}-accent` : 'text-text-light'}`}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {title}
        </div>
      )}
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
};

export default ContentBox;
