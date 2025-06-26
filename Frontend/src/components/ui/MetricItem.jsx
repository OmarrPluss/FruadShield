import React from 'react';

const MetricItem = ({ 
  label, 
  value, 
  status = 'none',
  icon,
  onClick 
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'green': return 'text-green';
      case 'yellow': return 'text-yellow';
      case 'red': return 'text-red';
      default: return '';
    }
  };
  
  return (
    <div 
      className="kpi-item"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={`value ${getStatusClass()}`}>
        {value}
      </div>
      <div className="label">
        {icon && <span className="metric-icon">{icon}</span>}
        {label}
      </div>
    </div>
  );
};

export default MetricItem;
