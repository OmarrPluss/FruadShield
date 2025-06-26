import React, { useState, useEffect } from 'react';

const FeedbackMessage = ({ message, type = 'success', duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!isVisible || !message) return null;

  const types = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-blue-600',
  };

  const icons = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-circle',
    warning: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle',
  };

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 ${types[type]} text-white text-sm font-medium px-6 py-2 rounded-md shadow-lg z-50 flex items-center`}>
      <i className={`${icons[type]} mr-2`}></i>
      <span>{message}</span>
    </div>
  );
};

export default FeedbackMessage;

