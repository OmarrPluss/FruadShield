import React from 'react';

const StatusBadge = ({ type = 'positive', icon, children }) => {
  const badgeClasses = `status-badge ${type}`;
  
  return (
    <span className={badgeClasses}>
      {icon && <i className={icon}></i>}
      {children}
    </span>
  );
};

export default StatusBadge;

