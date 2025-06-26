import React from 'react';

const CircularProgress = ({ value, max = 100, type = 'positive', size = 90 }) => {
  const radius = (size - 14) / 2; // Account for stroke width
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;
  
  const center = size / 2;
  
  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="bg"
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
        <circle
          className={`progress ${type}`}
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="value">
        {Math.round(value)}%
      </div>
    </div>
  );
};

export default CircularProgress;

