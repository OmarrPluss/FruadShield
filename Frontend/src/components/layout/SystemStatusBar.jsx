import React, { useState, useEffect } from 'react';

const SystemStatusBar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 px-6 py-2 flex flex-wrap items-center justify-between text-xs border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span> 
          System: Operational
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span> 
          API: 98.7% uptime
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span> 
          Database: Normal
        </span>
      </div>
      <div className="text-gray-400">
        Last updated: <span>{currentTime}</span>
      </div>
    </div>
  );
};

export default SystemStatusBar;

