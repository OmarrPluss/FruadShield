import React, { useState } from 'react';

const FilterSelect = ({ id, options, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue || (options.length > 0 ? options[0].value : ''));
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  
  return (
    <select 
      id={id}
      className="bg-white bg-opacity-5 border border-divider-color text-text-light py-2 px-3 rounded-md min-w-[120px]"
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
