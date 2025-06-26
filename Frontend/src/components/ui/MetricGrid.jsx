import React from 'react';

const MetricGrid = ({ children, columns = 2 }) => {
  return (
    <div className="kpi-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {children}
    </div>
  );
};

export default MetricGrid;
