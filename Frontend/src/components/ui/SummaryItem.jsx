import React from 'react';

const SummaryItem = ({ label, value, icon, iconColor, sparkline }) => {
  return (
    <div className="summary-item">
      <span className="summary-label">{label}</span>
      <span className="summary-value">
        {value}
        {icon && <i className={`fas ${icon}`} style={{ color: `var(--${iconColor})` }}></i>}
        {sparkline && (
          <span className="sparkline-container">
            {sparkline}
          </span>
        )}
      </span>
    </div>
  );
};

export default SummaryItem;

