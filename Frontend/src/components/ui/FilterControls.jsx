import React from 'react';

const FilterControls = ({ children }) => {
  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      {children}
    </div>
  );
};

export default FilterControls;
