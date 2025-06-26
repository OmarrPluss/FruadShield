import React from 'react';

const LogItem = ({ timestamp, level, message }) => {
  const getLevelClass = () => {
    switch (level) {
      case 'ERROR': return 'log-error';
      case 'WARN': return 'log-warn';
      case 'INFO': return 'log-info';
      default: return '';
    }
  };
  
  return (
    <li className="log-item">
      <span className="timestamp">{timestamp} ({level})</span>
      <span className={`message ${getLevelClass()}`}>
        {message.length > 120 ? `${message.substring(0, 120)}...` : message}
      </span>
    </li>
  );
};

export default LogItem;
