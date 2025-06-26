import React from 'react';

const ActionSection = ({ title, children }) => {
  return (
    <div className="action-section">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default ActionSection;

