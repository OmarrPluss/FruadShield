import React from 'react';
import { TrendingUp, TrendingDown, HelpCircle } from 'lucide-react';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  description, 
  type = 'default',
  tooltip,
  showDriftIndicator = false 
}) => {
  const getCardBorderColor = () => {
    switch (type) {
      case 'warning': return 'border-l-yellow-500';
      case 'danger': return 'border-l-red-500';
      case 'success': return 'border-l-green-500';
      default: return 'border-l-blue-500';
    }
  };

  const getChangeColor = () => {
    return changeType === 'positive' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border-l-4 ${getCardBorderColor()} hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
      {showDriftIndicator && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
          DRIFT
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-base flex items-center">
          {title}
          {tooltip && (
            <div className="relative group ml-2">
              <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {tooltip}
              </div>
            </div>
          )}
        </h3>
      </div>
      
      <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
        {value}
      </div>
      
      {change && (
        <div className={`flex items-center text-sm font-medium ${getChangeColor()}`}>
          {changeType === 'positive' ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          {change}
        </div>
      )}
      
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          {description}
        </p>
      )}
      
      {/* Mini trend line placeholder */}
      <div className="h-10 mt-4 bg-gray-100 dark:bg-gray-700 rounded opacity-50"></div>
    </div>
  );
};

export default MetricCard;

