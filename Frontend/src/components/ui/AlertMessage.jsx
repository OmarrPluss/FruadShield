import React from 'react';

const AlertMessage = ({ type = 'positive', icon, children }) => {
  const alertClasses = `alert-message ${type}`;
  
  return (
    <div className={alertClasses}>
      {icon && <i className={icon}></i>}
      <div className="alert-text-content">
        {children}
      </div>
    </div>
  );
};

export default AlertMessage;

