import React from 'react';

const StatCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  gradient = 'blue',
  className = '' 
}) => {
  const gradients = {
    blue: 'bg-gradient-blue',
    purple: 'bg-gradient-purple',
    green: 'bg-gradient-green',
    yellow: 'bg-gradient-yellow',
  };

  const iconColors = {
    blue: 'text-blue-300',
    purple: 'text-purple-300',
    green: 'text-green-300',
    yellow: 'text-yellow-300',
  };

  const changeColors = {
    blue: 'text-blue-200',
    purple: 'text-purple-200',
    green: 'text-green-200',
    yellow: 'text-yellow-200',
  };

  return (
    <div className={`${gradients[gradient]} p-4 rounded-lg shadow ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm ${changeColors[gradient]}`}>{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon && <i className={`${icon} ${iconColors[gradient]} text-xl`}></i>}
      </div>
      {change && (
        <p className={`text-xs ${changeColors[gradient]} mt-2`}>{change}</p>
      )}
    </div>
  );
};

export default StatCard;

