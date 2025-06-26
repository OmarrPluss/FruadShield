import React from 'react';
import LogItem from './LogItem';

const LogList = ({ logs, maxHeight = 180 }) => {
  return (
    <ul className="log-list" style={{ maxHeight: `${maxHeight}px` }}>
      {logs.map((log, index) => (
        <LogItem
          key={index}
          timestamp={log.timestamp}
          level={log.level}
          message={log.message}
        />
      ))}
    </ul>
  );
};

export default LogList;
