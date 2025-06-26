import React, { useState } from 'react';

const ThresholdSlider = ({ 
  min = 0, 
  max = 100, 
  step = 1, 
  defaultValue = 50, 
  onChange,
  label = "Threshold",
  unit = "%"
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="threshold-control">
      <label className="block text-[var(--text-muted)] mb-2 text-sm">
        {label}: {value}{unit}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="threshold-slider"
      />
      <div className="threshold-labels">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};

export default ThresholdSlider;

