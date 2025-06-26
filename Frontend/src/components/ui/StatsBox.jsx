import React from 'react';

const StatsBox = ({ title, columns = 2, stats = [] }) => {
  const getColumnsClass = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-4';
      default:
        return 'grid-cols-2';
    }
  };
  
  return (
    <div className="mt-4">
      {title && (
        <div className="text-sm text-text-muted mb-2">
          {title}
        </div>
      )}
      
      <div className={`grid ${getColumnsClass()} gap-4`}>
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white bg-opacity-5 p-3 rounded-lg transition-all duration-300 hover:bg-opacity-10 hover:transform hover:-translate-y-0.5"
          >
            <div className="text-sm text-text-muted mb-1.5 flex items-center gap-1.5">
              {stat.icon && <i className={`fas fa-${stat.icon}`}></i>}
              {stat.label}
            </div>
            <div className="text-xl font-bold text-text-light mb-1">
              {stat.value}
            </div>
            {stat.trend && (
              <div className={`text-xs flex items-center gap-1 ${stat.trend === 'up' ? 'trend-up' : stat.trend === 'down' ? 'trend-down' : 'trend-neutral'}`}>
                <i className={`fas fa-caret-${stat.trend === 'up' ? 'up' : stat.trend === 'down' ? 'down' : 'minus'}`}></i>
                {stat.comparison}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBox;
