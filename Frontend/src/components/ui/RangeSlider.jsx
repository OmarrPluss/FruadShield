import React, { useState } from 'react';

const RangeSlider = ({ 
  min = 0, 
  max = 100, 
  value = 50, 
  step = 1, 
  onChange,
  label,
  showValue = true,
  unit = '%',
  className = ''
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm text-gray-400">{label}</label>
          {showValue && (
            <span className="text-sm font-mono bg-gray-700 px-2 py-1 rounded">
              Current: <span>{sliderValue}{unit}</span>
            </span>
          )}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        step={step}
        onChange={handleChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Low Sensitivity</span>
        <span>Balanced</span>
        <span>High Sensitivity</span>
      </div>
    </div>
  );
};

export default RangeSlider;

