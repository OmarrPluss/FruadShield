import React from 'react';

const FilterGroup = ({ label, children }) => {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm text-text-muted">{label}</span>}
      {children}
    </div>
  );
};

export default FilterGroup;
