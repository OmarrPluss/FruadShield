import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChartBox = ({ id, title, height = 'default', loading = false, legend = false, legendItems = [], children }) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'h-48';
      case 'large':
        return 'h-96';
      default:
        return 'h-72';
    }
  };
  
  return (
    <div className="mt-4 relative">
      {title && (
        <div className="text-sm text-text-muted mb-2 flex items-center">
          {title}
        </div>
      )}
      
      <div 
        id={id} 
        className={`w-full ${getHeightClass()} relative transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>
      
      {legend && legendItems.length > 0 && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-sm mr-1.5" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      )}
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-accent"></div>
        </div>
      )}
    </div>
  );
};

export default ChartBox;
